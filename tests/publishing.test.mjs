import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const helper = ts.transpileModule(await read('src/lib/pageMetadata.ts'), { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { pageMetadata } = await import(`data:text/javascript;base64,${Buffer.from(helper).toString('base64')}`);

test('primary pages and six listed projects have distinct clean canonical URLs', () => {
  const paths = ['/', '/about', '/work', '/visuals', '/services', '/creative-corner', ...['auraleaf','apms','taskly','notes-app','ieee-web','byto-academy'].map(id => `/work/${id}`)];
  const records = paths.map(path => pageMetadata(path, `Title ${path}`, `Description ${path}`));
  assert.equal(new Set(records.map(r => r.canonical)).size, paths.length);
  assert.ok(records.every(r => r.title && r.description));
  assert.equal(pageMetadata('/work-with-me/?service=visual-design#inquiry-form', '', '').canonical, 'https://nadiahossny.vercel.app/services');
  assert.equal(pageMetadata('/graphic-design', '', '').canonical, 'https://nadiahossny.vercel.app/visuals');
  assert.equal(pageMetadata('/work/taskly/?x=1#gallery', '', '').canonical, 'https://nadiahossny.vercel.app/work/taskly');
});

test('fallback reflects July 2026 and the six curated projects', async () => {
  const html = await read('index.html');
  const fallback = html.match(/<noscript>([\s\S]*?)<\/noscript>/)[1];
  assert.match(fallback, /July 2026/);
  assert.doesNotMatch(fallback, /June|99%|14-screen|SimpliBank|BloomBook|E-Commerce/);
  assert.deepEqual([...fallback.matchAll(/href="\/work\/([^"#]+)"/g)].map(m => m[1]), ['auraleaf','apms','taskly','notes-app','ieee-web','byto-academy']);
  assert.match(html, /og-image.png/);
  assert.doesNotMatch(html, /<link rel="canonical"|<meta (?:name="description"|property="og:(?:url|title|description)")/);
});

test('Creative Corner uses direct email while Work With Me retains its enquiry form', async () => {
  const corner = await read('src/components/Playground.tsx');
  assert.match(corner, /mailto:nadiahossny426@gmail.com\?subject=/);
  assert.doesNotMatch(corner, /fetch\(|<textarea|setNote|noteStatus/);
  assert.match(await read('src/pages/WorkWithMe.tsx'), /<form/);
});
