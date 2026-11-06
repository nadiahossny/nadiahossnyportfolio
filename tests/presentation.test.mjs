import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import ts from 'typescript';

const source = await readFile(new URL('../src/components/SectionReveal.tsx', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext } }).outputText
  .replace(/(['"])react\1/g, JSON.stringify(import.meta.resolve('react')))
  .replace(/(['"])react\/jsx-runtime\1/g, JSON.stringify(import.meta.resolve('react/jsx-runtime')));
const { default: SectionReveal } = await import('data:text/javascript;base64,' + Buffer.from(compiled).toString('base64'));

test('reveal content remains accessible without a browser observer or JavaScript animation', () => {
  const markup = renderToStaticMarkup(createElement(SectionReveal, { variant: 'group', stagger: true }, createElement('a', { href: '/work' }, 'View work')));
  assert.match(markup, /reveal-group reveal-stagger/);
  assert.match(markup, /href="\/work"/);
  assert.doesNotMatch(markup, /hidden|aria-hidden|opacity:0|tabindex="-1"/);
  const defaults = renderToStaticMarkup(createElement(SectionReveal, null, 'Visible content'));
  assert.match(defaults, /reveal-section/);
  assert.match(defaults, /Visible content/);
});

test('both Work rows share the same card and grid presentation', async () => {
  const work = await readFile(new URL('../src/pages/Work.tsx', import.meta.url), 'utf8');
  assert.equal((work.match(/<ProjectPreview key=\{project.id\} project=\{project\} featured/g) ?? []).length, 2);
  assert.equal((work.match(/<SectionReveal variant="group" stagger>/g) ?? []).length, 2);
  assert.match(work, /className="featured-grid more-work-grid"/);
  assert.doesNotMatch(work, /className="work-grid|compact-card/);
});

test('motion preserves immediate focus and reduced-motion rendering', async () => {
  const css = await readFile(new URL('../src/index.css', import.meta.url), 'utf8');
  assert.match(source, /onFocusCapture/);
  assert.match(source, /observer.disconnect\(\)/);
  assert.match(css, /\.reveal-settled, \.reveal-settled \*, \.entrance-settled \* \{ animation: none !important/);
  assert.match(css, /\.section-arrived \* \{ animation: none !important/);
  assert.match(css, /min-width: 640px\) and \(max-width: 1023px/);
});

test('hero avoids a repeated standalone role and Home keeps three intact visual previews', async () => {
  const hero = await readFile(new URL('../src/components/CloudTheatreHero.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(hero, /className="hero-role"/);
  assert.match(hero, /A product designer who builds\./);
  const home = await readFile(new URL('../src/pages/Home.tsx', import.meta.url), 'utf8');
  assert.match(home, /visualCollections.slice\(0, 3\)/);
  assert.match(home, /className="home-visual-frame"/);
  const collections = await readFile(new URL('../src/data/visualCollections.ts', import.meta.url), 'utf8');
  assert.match(collections, /'social-media', 'ieee-campaigns', 'presentations'/);
  assert.match(collections, /title": "Social media & campaign design"/);
});

test('language switch uses a smooth rounded control on desktop and mobile', async () => {
  const navigation = await readFile(new URL('../src/components/Navigation.tsx', import.meta.url), 'utf8');
  assert.equal((navigation.match(/className="language-toggle[^\"]*rounded-full/g) ?? []).length, 2);
  const css = await readFile(new URL('../src/index.css', import.meta.url), 'utf8');
  assert.match(css, /\.language-toggle \{ transition-property: color, background-color, border-color, box-shadow; transition-duration: 180ms/);
});


test('the centered hero keeps clouds static and uses only a reduced-motion-safe fade', async () => {
  const hero = await readFile(new URL('../src/components/CloudTheatreHero.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../src/styles/cloud-theatre.css', import.meta.url), 'utf8');
  assert.doesNotMatch(hero, /framer-motion|skyPaused|hero-motion-control|motion\.img/);
  assert.match(css, /calm-hero-fade 350ms ease-out/);
  assert.match(css, /@keyframes calm-hero-fade \{ from \{ opacity: 0; \} to \{ opacity: 1; \} \}/);
  assert.match(css, /\.calm-hero-greeting img \{[^}]*border: 4px solid white;[^}]*transform: rotate\(-5deg\);/);
  assert.match(css, /prefers-reduced-motion: reduce[\s\S]*animation: none !important/);
});
