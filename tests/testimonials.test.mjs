import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ts from 'typescript';

const moduleUrl = source => 'data:text/javascript;base64,' + Buffer.from(source).toString('base64');
const dataSource = await readFile(new URL('../src/data/testimonials.ts', import.meta.url), 'utf8');
const dataUrl = moduleUrl(ts.transpileModule(dataSource, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText);
const { testimonials } = await import(dataUrl);

test('four original endorsements retain distinct sources and the confirmed CTO attribution', () => {
  assert.deepEqual(testimonials.map(item => item.id), ['revelio-cto', 'cmd-client', 'ieee-head', 'nti-instructor']);
  assert.equal(new Set(testimonials.map(item => item.quote)).size, 4);
  assert.equal(testimonials[0].author, 'Abdelrahman Elsherif');
  assert.equal(testimonials[0].role, 'Co-Founder & CTO · Revelio');
  assert.equal(testimonials[1].author, 'Ziad Ibrahim');
  assert.equal(testimonials[1].role, 'Client · Codeify Modern Development');
  assert.equal(testimonials[2].author, 'Hozaifa Mostafa');
  assert.equal(testimonials[2].role, 'Head · IEEE');
  assert.equal(testimonials[2].roleAr, 'رئيس IEEE');
  assert.equal(testimonials[3].author, 'Mohamed Wael');
  assert.ok(testimonials.every(item => item.quote && item.roleAr));
  assert.match(testimonials[3].quote, /during her training course at NTI/);
});

test('carousel exposes four named selectors, one active quote, and a pause control', async () => {
  const source = await readFile(new URL('../src/components/Testimonials.tsx', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext } }).outputText
    .replace(/from 'react';/, `from ${JSON.stringify(import.meta.resolve('react'))};`)
    .replace(/from "react\/jsx-runtime";/, `from ${JSON.stringify(import.meta.resolve('react/jsx-runtime'))};`)
    .replace(/from 'lucide-react';/, `from ${JSON.stringify(import.meta.resolve('lucide-react'))};`)
    .replace(/import \{ useReducedMotion \} from 'framer-motion';/, 'const useReducedMotion = () => false;')
    .replace(/from '\.\.\/data\/testimonials';/, `from ${JSON.stringify(dataUrl)};`)
    .replace(/import \{ useLanguage \} from '\.\.\/context\/LanguageContext';/, 'const useLanguage = () => ({ t: en => en, isRTL: false });')
    .replace(/import SectionReveal from '\.\/SectionReveal';/, 'const SectionReveal = ({ children }) => children;');
  const { default: Testimonials } = await import(moduleUrl(compiled));
  const markup = renderToStaticMarkup(createElement(Testimonials));
  assert.equal((markup.match(/aria-label="Go to testimonial /g) ?? []).length, 4);
  assert.equal((markup.match(/aria-hidden="false"/g) ?? []).length, 1);
  assert.match(markup, /aria-label="Pause testimonials"/);
  assert.match(markup, /aria-current="true"/);
  assert.match(markup, /lang="en" dir="ltr"/);
  for (const item of testimonials) {
    const escapedQuote = renderToStaticMarkup(createElement('span', null, item.quote)).replace(/^<span>|<\/span>$/g, '');
    assert.ok(markup.includes(escapedQuote));
  }
});
