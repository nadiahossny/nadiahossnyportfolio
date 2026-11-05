import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import ts from 'typescript';

function moduleUrl(source) {
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
  return `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
}
const backgroundSource = await readFile(new URL('../src/data/professionalBackground.ts', import.meta.url), 'utf8');
const { professionalBackground } = await import(moduleUrl(backgroundSource));
const projectsSource = (await readFile(new URL('../src/data/caseStudies.ts', import.meta.url), 'utf8')).replace(/^import (\w+) from ('[^']+');/gm, 'const $1 = $2;');
const { caseStudies, featuredProjects, moreProjects, listedProjects, matchesProjectFilter, nextListedProject, projectCategories } = await import(moduleUrl(projectsSource));
const { getCaseStudyImages } = await import(moduleUrl(await readFile(new URL('../src/lib/caseStudyPresentation.ts', import.meta.url), 'utf8')));

test('project routes and selected trio are preserved', () => {
  assert.equal(caseStudies.length, 9);
  assert.deepEqual(caseStudies.filter(p => p.featuredOnHome).map(p => p.id).sort(), ['apms', 'auraleaf', 'taskly']);
  assert.equal(new Set(caseStudies.map(p => p.id)).size, 9);
});
test('six curated projects drive ordering, filters, and next navigation', () => {
  assert.deepEqual(featuredProjects.map(p => p.id), ['auraleaf', 'apms', 'taskly']);
  assert.deepEqual(moreProjects.map(p => p.id), ['notes-app', 'ieee-web', 'byto-academy']);
  assert.equal(listedProjects.length, 6);
  const expected = {all: 6, healthcare: 1, 'productivity-learning': 4, 'education-kids': 0, 'commerce-digital': 0, 'creative-tools': 0, 'business-management': 2};
  for (const [filter, count] of Object.entries(expected)) {
    const matches = caseStudies.filter(p => matchesProjectFilter(p, filter));
    assert.equal(matches.length, count);
    assert.ok(matches.every(p => listedProjects.includes(p)));
  }
  for (const [index, project] of listedProjects.entries()) assert.equal(nextListedProject(project.id), listedProjects[(index + 1) % 6]);
  assert.equal(projectCategories.length, 6);
  assert.deepEqual(caseStudies.find(p => p.id === 'apms').categories, ['healthcare', 'business-management']);
  assert.ok(listedProjects.every(project => project.categories.length > 0));
  assert.equal(matchesProjectFilter(listedProjects[0], 'unknown-category'), false);
  for (const id of ['simplibank', 'bloom-gift', 'ecomm-app']) {
    assert.ok(caseStudies.find(p => p.id === id), 'legacy data remains routable');
    assert.equal(nextListedProject(id).id, 'auraleaf');
  }
});
test('Taskly artifacts distinguish preparation, persona, and exploratory scope', () => {
  const taskly = caseStudies.find(p => p.id === 'taskly');
  assert.deepEqual(taskly.processArtifacts.map(group => group.stage), ['research', 'persona', 'flow', 'wireframes']);
  assert.equal(taskly.processArtifacts[0].images.length, 5);
  assert.match(taskly.research, /Peer interviews, surveys and competitor analysis/);
  assert.match(taskly.processArtifacts[1].label, /not an interview participant/);
  assert.match(taskly.processArtifacts[0].description, /not a verified current/);
  assert.doesNotMatch(JSON.stringify(taskly), /Annie|mental.health|14-screen|User interviews and competitive/);
  assert.match(taskly.solution, /mobile interface designs/);
  assert.equal(taskly.prototypeUrl, undefined);
  assert.doesNotMatch(JSON.stringify(taskly), /prototype|نموذج الموبايل/);
});

test('AuraLeaf has three real working states and Notes captions describe visible features', () => {
  const aura = caseStudies.find(p => p.id === 'auraleaf');
  const captures = aura.processArtifacts[0].images;
  assert.equal(captures.length, 3);
  assert.equal(aura.processArtifacts[0].stage, 'decisions');
  assert.deepEqual(captures.map(s => s.url.split('/').pop()), ['workspace.jpg', 'notes-panel.jpg', 'tasks-panel.jpg']);
  assert.ok(captures.every(s => s.caption && s.captionAr));
  const notes = caseStudies.find(p => p.id === 'notes-app');
  assert.equal(notes.gallery.length, 9);
  assert.equal(new Set(notes.gallery.map(s => s.caption)).size, 9);
  assert.doesNotMatch(JSON.stringify(notes.gallery), /interface \d|واجهة تطبيق الملاحظات \d/);
  assert.match(notes.gallery[6].caption, /Rich-text editor/);
});

test('each curated project has a bilingual purpose-led preview and a distinct narrative', () => {
  for (const project of listedProjects) {
    assert.ok(project.sectionOrder?.length >= 5);
    assert.equal(new Set(project.sectionOrder).size, project.sectionOrder.length);
    assert.ok(project.sectionOrder.includes('experience'));
    assert.ok(project.sectionOrder.includes('evaluation'));
    for (const key of ['summary','summaryAr','contribution','contributionAr','decision','decisionAr']) assert.ok(project.preview[key]);
    assert.doesNotMatch(project.category, /React|Flutter|Next.js|Frontend/);
    for (const heading of Object.values(project.sectionTitles ?? {})) assert.ok(heading.en && heading.ar);
  }
  assert.ok(!caseStudies.find(p => p.id === 'auraleaf').sectionOrder.includes('flow'));
  assert.ok(caseStudies.find(p => p.id === 'taskly').sectionOrder.includes('persona'));
  assert.ok(!caseStudies.find(p => p.id === 'notes-app').sectionOrder.includes('research'));
});

test('gallery images and counts include artifacts and deduplicate reused screens', () => {
  for (const project of caseStudies) {
    const images = getCaseStudyImages(project);
    assert.equal(new Set(images.map(image => image.url)).size, images.length);
    for (const image of project.processArtifacts?.flatMap(group => group.images) ?? []) assert.ok(images.some(slide => slide.url === image.url));
  }
  const aura = caseStudies.find(p => p.id === 'auraleaf');
  assert.equal(getCaseStudyImages(aura).length, 4);
  assert.equal(aura.preview.image, aura.heroImage);
  assert.match(aura.heroImage, /workspace.jpg$/);
});

test('public case-study copy contains no editing instructions or internal handoff language', () => {
  assert.doesNotMatch(JSON.stringify(caseStudies), /\[Add|\[أضف|supplied material|supplied|evidence register|require confirmation/i);
});
test('IEEE and APMS retain documented scope and team attribution', () => {
  const ieee = caseStudies.find(p => p.id === 'ieee-web');
  assert.equal(ieee.workflowSteps.length, 3);
  assert.match(ieee.solution, /not an integrated payment gateway/);
  assert.match(ieee.architecture, /future exploration/);
  const apms = caseStudies.find(p => p.id === 'apms');
  assert.deepEqual(apms.designDecisions.map(d => d.id), ['separate-experiences', 'manual-review', 'visible-status']);
  assert.match(apms.collaboratorsContribution, /Teammates/);
  assert.match(apms.architecture, /do not establish reliable offline/);
  const byto = caseStudies.find(p => p.id === 'byto-academy');
  assert.match(byto.architecture, /Next.js/);
  assert.doesNotMatch(JSON.stringify(byto), /children|engagement increased|retention increased/);
});
test('sitemap promotes only the six selected case-study routes', async () => {
  const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  const ids = [...sitemap.matchAll(/\/work\/([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.deepEqual(ids, listedProjects.map(p => p.id));
});
test('all selected screenshot and process-artifact sources exist', async () => {
  const paths = new Set(listedProjects.flatMap(project => [project.heroImage, project.secondaryHeroImage, ...project.gallery.map(s => s.url), ...(project.designDecisions?.flatMap(d => d.screenshots.map(s => s.url)) ?? []), ...(project.processArtifacts?.flatMap(group => group.images.map(s => s.url)) ?? [])]).filter(Boolean));
  await Promise.all([...paths].map(path => access(new URL(path, new URL('../src/data/caseStudies.ts', import.meta.url)))));
});
test('APMS and Notes follow direct corrections in both languages', () => {
  const apms = JSON.stringify(caseStudies.find(p => p.id === 'apms'));
  assert.match(apms, /Flutter/);
  assert.doesNotMatch(apms, /React|TypeScript|XGBoost|Q-learning/);
  assert.match(apms, /2 pharmacies/);
  assert.match(apms, /used in a real pharmacy/i);
  assert.match(apms, /99%/);
  const notes = JSON.stringify(caseStudies.find(p => p.id === 'notes-app'));
  assert.match(notes, /Firebase/);
  assert.doesNotMatch(notes, /SQLite|offline|دون إنترنت/);
});
test('background has seven sourced entries and six training records per language', () => {
  for (const language of ['en', 'ar']) {
    const data = professionalBackground[language];
    assert.equal(data.experienceList.length, 7);
    assert.equal(data.certificationsList.length, 6);
    assert.match(data.educationList[0].details, /3\.76\/4\.0/);
    assert.doesNotMatch(JSON.stringify(data), /SAP|DemiCode|99%|150-Hour|2022 – Present/);
  }
});
test('unconfirmed project dates and metrics are omitted', () => {
  for (const project of caseStudies) {
    assert.equal(project.timeline, '');
    assert.deepEqual(project.metrics, []);
  }
});

 test('pharmacy project introduces its full name to visitors', () => {
  const project = caseStudies.find(p => p.id === 'apms');
  assert.equal(project.title, 'Automated Pharmacy Management System');
  assert.equal(project.titleAr, 'نظام إدارة الصيدلية الآلي');
  assert.match(project.overview, /Automated Pharmacy Management System \(APMS\)/);
  assert.match(project.overviewAr, /نظام إدارة الصيدلية الآلي \(APMS\)/);
});

const visualSource = (await readFile(new URL('../src/data/visualCollections.ts', import.meta.url), 'utf8')).replace(/^import (\w+) from ('[^']+');/gm, 'const $1 = $2;');
const { visualCollections } = await import(moduleUrl(visualSource));
test('available curated collections publish only existing reviewed bilingual artworks', async () => {
  assert.deepEqual(visualCollections.map(collection => collection.id), ['foresight', 'ieee-campaigns', 'presentations', 'dream-team', 'revelio', 'cmd', 'gdsc', 'social-media', 'banners-flyers', 'ids-business-cards', 'certificates', 'characters', 'digital-art']);
  assert.deepEqual(visualCollections.map(c => c.images.length), [6,8,9,12,14,6,4,11,4,6,3,5,4]);
  const images = visualCollections.flatMap(c => c.images);
  assert.equal(images.length, 92);
  assert.equal(new Set(images.map(i => i.url)).size, 92);
  async function inventory(directory) {
    const entries = await readdir(directory, {withFileTypes:true});
    return (await Promise.all(entries.map(e => e.isDirectory() ? inventory(new URL(e.name + '/', directory)) : /\.(png|jpe?g|webp)$/i.test(e.name) ? [decodeURIComponent(new URL(e.name, directory).pathname.split('/graphic-design/')[1])] : []))).flat();
  }
  const files = await inventory(new URL('../src/assets/graphic-design/', import.meta.url));
  // Windows retains user-renamed directory casing; compare identities without changing the explicit manifest.
  const identity = path => path.toLocaleLowerCase('en-US');
  assert.deepEqual(images.map(i => identity(i.url.split('/graphic-design/')[1])).sort(), files.map(identity).sort());
  for (const collection of visualCollections) {
    assert.equal(collection.cover, collection.images[0].url);
    assert.ok(collection.titleAr && collection.descriptionAr && collection.contributionAr);
    for (const image of collection.images) {
      assert.ok(image.caption && image.captionAr);
      await access(new URL('../src/' + image.url.replace('../', ''), import.meta.url));
    }
    const remaining = collection.images.slice(1).map(image => image.url.split('/').pop());
    assert.deepEqual(remaining, [...remaining].sort((a, b) => a.localeCompare(b, undefined, {numeric:true})));
  }
  const covers = ['Black Minimalist Website Mockup Instagram Post.png', 'Siemens-gg.png', 'UIUX.png', 'DT Style Guide.png', 'facebook_post_design_revelio.png', '1 (2).png', 'gdcs_ramadan_design.png', 'Purple and Yellow Modern Website Development Solution Instagram Post.png', 'Roller_Banner_Mockup_1.png', 'Business_Card_Mockup_3.png', '1.png', 'character_design.png', 'wave_digital_art.jpg'];
  assert.deepEqual(visualCollections.map(c => c.cover.split('/').pop()), covers);
  const page = await readFile(new URL('../src/pages/Services.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(page, /import.meta.glob|archiveCollections|activeGroup/);
  assert.match(page, /Visuals — Nadia Hossny/);
  assert.match(page, /أعمال بصرية — نادية حسني/);
  assert.match(page, /to=\{visualInquiryHref\}/);
});

test('Visuals retains its four offer groups while Services uses the separate commercial offers', async () => {
  const translationSource = (await readFile(new URL('../src/data/translations.ts', import.meta.url), 'utf8')).replace("'./professionalBackground'", JSON.stringify(moduleUrl(backgroundSource)));
  const translations = await import(moduleUrl(translationSource));
  assert.equal(translations.translations.en.nav.services, 'Visuals');
  assert.equal(translations.translations.ar.nav.services, 'أعمال بصرية');
  const {visualOffers} = await import(moduleUrl(await readFile(new URL('../src/data/visualOffers.ts', import.meta.url), 'utf8')));
  assert.equal(visualOffers.length, 4);
  assert.ok(visualOffers.every(o => o.title && o.titleAr && o.description && o.descriptionAr));
  assert.match(await readFile(new URL('../src/pages/Services.tsx', import.meta.url), 'utf8'), /visualOffers.map/);
  const commercial = await readFile(new URL('../src/pages/WorkWithMe.tsx', import.meta.url), 'utf8');
  assert.match(commercial, /serviceOffers.map/);
  assert.doesNotMatch(commercial, /visualOffers.map/);
});
test('featured thumbnails are separate from evidence and shared between listing pages', async () => {
  assert.ok(featuredProjects.every(project => project.thumbnail));
  assert.match(caseStudies.find(project => project.id === 'apms').thumbnail, /apms-thumbnail.png$/);
  assert.notEqual(caseStudies.find(project => project.id === 'auraleaf').thumbnail, caseStudies.find(project => project.id === 'auraleaf').heroImage);
  const preview = await readFile(new URL('../src/components/ProjectPreview.tsx', import.meta.url), 'utf8');
  assert.match(preview, /project.thumbnail/);
  assert.doesNotMatch(preview, /project-notes|apmsHeroAssets/);
});
