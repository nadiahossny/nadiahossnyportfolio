import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import { createServer } from 'vite';

// Render real components without launching a browser or sending enquiries.
const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
after(() => server.close());
const { default: App } = await server.ssrLoadModule('/src/App.tsx');

function render(path, language = 'en') {
  const previousWindow = globalThis.window;
  const previousStorage = globalThis.localStorage;
  globalThis.window = {};
  globalThis.localStorage = { getItem: () => language };
  try {
    return renderToStaticMarkup(React.createElement(HelmetProvider, {},
      React.createElement(MotionConfig, { isStatic: true },
        React.createElement(MemoryRouter, { initialEntries: [path] }, React.createElement(App)))));
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
    if (previousStorage === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = previousStorage;
  }
}

test('canonical and compatibility Services routes render both approved offers in both languages', () => {
  for (const route of ['/services', '/work-with-me']) {
    const en = render(route);
    const ar = render(route, 'ar');
    for (const copy of ['Websites &amp; web apps', 'Digital brand presence', 'Quoted after discovery', 'Timeline agreed in proposal', '50% deposit', 'One revision round', 'Discuss your project']) assert.ok(en.includes(copy), copy);
    for (const copy of ['المواقع وتطبيقات الويب', 'الحضور البصري الرقمي', 'يُحدد السعر بعد فهم المشروع', 'تُحدد المدة في العرض', 'دفعة مقدمة ٥٠٪', 'جولة تعديلات واحدة']) assert.ok(ar.includes(copy), copy);
    assert.equal((en.match(/class="service-offer"/g) ?? []).length, 2);
    assert.ok(en.includes('href="#inquiry-form"'));
    for (const name of ['name', 'email', 'type', 'message']) assert.ok(en.includes(`name="${name}"`));
    assert.ok(en.includes('href="/resume.pdf"'));
    assert.doesNotMatch(en, /\[ADD:|starting from|EGP|USD/i);
  }
});

test('visual links preselect the original enquiry value on either route', () => {
  for (const route of ['/services', '/work-with-me']) {
    const html = render(`${route}?service=visual-design#inquiry-form`);
    assert.match(html, /<option value="3" selected=""/);
    assert.doesNotMatch(render(`${route}?service=unknown`), /<option value="3" selected=""/);
  }
});

test('homepage retains brand greeting and project order with About before Services', () => {
  const html = render('/');
  assert.ok(html.includes('I research the problem, design the interface, and build it in Flutter and React.'));
  assert.ok(html.indexOf('Testimonials') > html.indexOf('Selected work'));
  assert.ok(html.indexOf('Testimonials') < html.indexOf('A little about me'));
  assert.ok(html.includes('View my work'));
  assert.ok(html.includes('href="/services"'));
  assert.ok(html.indexOf('A little about me') < html.indexOf('home-services-title'));
  const selectedStart = html.indexOf('id="selected-work"');
  const selectedWork = html.slice(selectedStart, html.indexOf('</section>', selectedStart));
  const projects = [...selectedWork.matchAll(/href="\/work\/([^"#]+)"/g)].map(match => match[1]);
  assert.deepEqual([...new Set(projects)], ['auraleaf', 'apms', 'taskly']);
});

test('featured stories expose verified tools and preserve design-only Taskly status', () => {
  for (const [id, tool] of [['auraleaf', 'React'], ['apms', 'Flutter'], ['taskly', 'Figma']]) {
    const html = render(`/work/${id}`);
    assert.ok(html.includes('Tools &amp; technology'));
    assert.ok(html.includes(`<span dir="ltr">${tool}</span>`));
    assert.doesNotMatch(html, /\[ADD:|83%/);
  }
  const taskly = render('/work/taskly');
  assert.ok(taskly.includes('UX case study presented as screens and user flows'));
  assert.doesNotMatch(taskly, /Open live app|View prototype|Source code/);
});

test('navigation prioritizes Work and Services and exposes the compatibility route as active', () => {
  const html = render('/work-with-me');
  const nav = html.match(/<nav aria-label="Primary Navigation"[\s\S]*?<\/nav>/)?.[0];
  assert.ok(nav);
  const paths = [...nav.matchAll(/href="(\/[^"#]*)"/g)].map(match => match[1]);
  assert.deepEqual(paths.slice(0, 4), ['/work', '/services', '/about', '/visuals']);
  assert.match(nav, /aria-current="page"[^>]*href="\/services"/);
});

test('sitemap publishes the services canonical without duplicating its compatibility route', async () => {
  const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  assert.match(sitemap, /https:\/\/nadiahossny.vercel.app\/services<\/loc>/);
  assert.doesNotMatch(sitemap, /\/work-with-me<\/loc>/);
  assert.doesNotMatch(sitemap, /<lastmod>/);
});

test('Work offers a compact bilingual category selector and live result count', () => {
  const en = render('/work');
  const ar = render('/work', 'ar');
  assert.match(en, /<label for="work-category">Browse by area<\/label>/);
  assert.match(ar, /<label for="work-category">تصفح حسب المجال<\/label>/);
  for (const {label, labelAr} of [{label:'Healthcare &amp; Wellbeing',labelAr:'الصحة والعافية'}, {label:'Productivity &amp; Learning',labelAr:'الإنتاجية والتعلم'}, {label:'Education &amp; Kids',labelAr:'التعليم والأطفال'}, {label:'Commerce &amp; Digital Experiences',labelAr:'التجارة والتجارب الرقمية'}, {label:'Creative &amp; Interactive Tools',labelAr:'الأدوات الإبداعية والتفاعلية'}, {label:'Business &amp; Management',labelAr:'الأعمال والإدارة'}]) {
    assert.ok(en.includes(label));
    assert.ok(ar.includes(labelAr));
  }
  assert.match(en, /<p class="work-result-count" role="status" aria-live="polite">6 projects<\/p>/);
});
