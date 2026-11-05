import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const source = await readFile(new URL('../src/lib/inquiry.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { deliverInquiry, makeInquiryMailto, getInitialInquiryType, visualInquiryHref } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const inquiry = { name: ' Example Person ', email: ' example@example.com ', type: 'Product design', message: ' A web & mobile project. ', recipient: 'nadiahossny426@gmail.com' };

test('without a key, prepares a draft and never calls the provider', async () => {
  assert.equal(await deliverInquiry(inquiry, undefined, () => { throw new Error('Must not send'); }), 'draft');
  const draft = new URL(makeInquiryMailto(inquiry));
  assert.equal(draft.protocol, 'mailto:');
  assert.equal(draft.pathname, inquiry.recipient);
  assert.match(draft.searchParams.get('body'), /example@example.com/);
  assert.match(draft.searchParams.get('body'), /A web & mobile project\./);
});

test('reports sent only after explicit provider acceptance', async () => {
  const result = await deliverInquiry(inquiry, 'test-key', async (url, options) => {
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    const payload = JSON.parse(options.body);
    assert.equal(payload.name, 'Example Person');
    assert.equal(payload.email, 'example@example.com');
    assert.equal(payload.inquiry_type, inquiry.type);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  });
  assert.equal(result, 'sent');
});

for (const [label, status, payload] of [
  ['provider rejection with HTTP 200', 200, { success: false }],
  ['missing acceptance field', 200, {}],
  ['HTTP failure', 429, { success: true }],
  ['non-boolean acceptance', 200, { success: 'true' }],
]) {
  test(label, async () => {
    await assert.rejects(deliverInquiry(inquiry, 'test-key', async () => new Response(JSON.stringify(payload), { status })));
  });
}
test('network and malformed response failures remain failures', async () => {
  await assert.rejects(deliverInquiry(inquiry, 'test-key', async () => { throw new Error('Offline'); }));
  await assert.rejects(deliverInquiry(inquiry, 'test-key', async () => new Response('invalid json')));
});

test('visual enquiry links preselect the existing option without changing delivery', () => {
 const target = new URL(visualInquiryHref, 'https://example.com');
 assert.equal(target.pathname, '/work-with-me');
 assert.equal(target.hash, '#inquiry-form');
 assert.equal(getInitialInquiryType(target.search), 3);
 for (const query of ['', '?service=unknown', '?service=product-design']) assert.equal(getInitialInquiryType(query), 0);
});
