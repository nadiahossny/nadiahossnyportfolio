import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { caseStudies, nextListedProject } from '../data/caseStudies';
import type { CaseSectionKind, ProcessArtifactGroup } from '../data/caseStudies';
import { defaultCaseSections, getCaseStudyImages } from '../lib/caseStudyPresentation';
import { useLanguage } from '../context/LanguageContext';

interface Slide { url: string; caption: string }

function CaseVisual({ url, caption, label, onClick }: {
  url: string; caption: string; label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>, url: string) => void;
}) {
  return <button type="button" className="case-visual" aria-label={`${label}: ${caption}`} onClick={event => onClick(event, url)}><img src={url} alt={caption} loading="lazy" /></button>;
}

export default function CaseStudy() {
  const { id } = useParams();
  return <CaseStudyContent key={id} id={id} />;
}

function CaseStudyContent({ id }: { id: string | undefined }) {
  const { t, isRTL } = useLanguage();
  const project = caseStudies.find(p => p.id === id);
  const [active, setActive] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const dialog = useRef<HTMLDivElement | null>(null);
  const close = useRef<HTMLButtonElement | null>(null);
  const canvas = useRef<HTMLDivElement | null>(null);
  const slides: Slide[] = project ? getCaseStudyImages(project).map(image => ({ url: image.url, caption: t(image.caption, image.captionAr) })) : [];
  const slideCount = slides.length;
  const isOpen = active !== null;

  useEffect(() => {
    const region = canvas.current;
    if (region) {
      region.scrollLeft = zoomed ? (region.scrollWidth - region.clientWidth) / 2 : 0;
      region.scrollTop = 0;
    }
  }, [zoomed, active]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const background: { element: HTMLElement; inert: boolean }[] = [];
    let branch: HTMLElement | null = dialog.current;
    while (branch && branch !== document.body) {
      const parent: HTMLElement | null = branch.parentElement;
      if (!parent) break;
      for (const sibling of parent.children) {
        if (sibling instanceof HTMLElement && sibling !== branch) {
          background.push({ element: sibling, inert: sibling.inert });
          sibling.inert = true;
        }
      }
      branch = parent;
    }
    close.current?.focus();
    return () => {
      background.forEach(({ element, inert }) => { element.inert = inert; });
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setActive(null); }
      if (!zoomed && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        event.preventDefault();
        const direction = (event.key === 'ArrowRight' ? 1 : -1) * (isRTL ? -1 : 1);
        setActive(value => value === null ? null : (value + direction + slideCount) % slideCount);
      }
      if (event.key === 'Tab') {
        const controls = dialog.current?.querySelectorAll<HTMLElement>('button, [tabindex="0"]');
        if (!controls?.length) return;
        const first = controls[0]; const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, isRTL, slideCount, zoomed]);

  if (!project) return <Navigate to="/work" replace />;
  const localized = (key: 'title' | 'overview' | 'problem' | 'userSummary' | 'myContribution' | 'research' | 'wireframes' | 'architecture' | 'designSystem' | 'keyDecision' | 'solution' | 'impact' | 'reflection' | 'role' | 'timeline') => t(project[key], project[`${key}Ar`]);
  const isAPMS = id === 'apms';
  const isAuraLeaf = id === 'auraleaf';
  const isTaskly = id === 'taskly';
  const handleImageClick = (event: MouseEvent<HTMLButtonElement>, url: string) => { trigger.current = event.currentTarget; setZoomed(false); setActive(slides.findIndex(s => s.url === url)); };
  const visual = (url: string, caption: string) => <CaseVisual url={url} caption={caption} label={t('Enlarge image', 'تكبير الصورة')} onClick={handleImageClick} />;
  const artifacts = (stage: ProcessArtifactGroup['stage']) => project.processArtifacts?.filter(group => group.stage === stage).map(group => {
    const previewCount = group.previewCount ?? 1;
    const figures = (images: typeof group.images) => images.map(image => <figure key={image.url}>{visual(image.url, t(image.caption, image.captionAr))}<figcaption>{t(image.caption, image.captionAr)}</figcaption></figure>);
    return <div className="process-artifacts" key={group.id}><p className="artifact-label">{t(group.label, group.labelAr)}</p><p>{t(group.description, group.descriptionAr)}</p><div className="artifact-grid">{figures(group.images.slice(0, previewCount))}</div>{group.images.length > previewCount && <details className="mt-5"><summary>{t('Full questionnaire and additional artifacts', 'الاستبيان الكامل والمواد الإضافية')}</summary><div className="artifact-grid">{figures(group.images.slice(previewCount))}</div></details>}</div>;
  });
  const decisionImages = new Set(project.designDecisions?.flatMap(d => d.screenshots.map(s => s.url)) ?? []);
  const previewIndices = isTaskly ? [7, 12, 13] : isAPMS ? [7, 10, 6] : null;
  const finalScreens = isAuraLeaf ? [] : previewIndices ? previewIndices.map(index => ({url: project.gallery[index].url, caption: t(project.gallery[index].caption, project.gallery[index].captionAr)})) : project.gallery.filter(s => s.url !== project.heroImage && s.url !== project.secondaryHeroImage && !decisionImages.has(s.url)).slice(0, 3).map(s => ({ url: s.url, caption: t(s.caption, s.captionAr) }));
  const next = nextListedProject(project.id);
  const changeSlide = (direction: number) => { setZoomed(false); setActive(value => value === null ? null : (value + direction + slideCount) % slideCount); };
  const headings: Record<CaseSectionKind, [string, string]> = {
    problem: ['The problem', 'المشكلة'], research: ['Research & evidence', 'البحث والأدلة'],
    persona: ['Design persona', 'شخصية تصميمية'], flow: ['User flow', 'مسار المستخدم'],
    decisions: ['Key decisions', 'القرارات الأساسية'], experience: ['Final experience', 'التجربة النهائية'],
    evaluation: ['Evaluation & status', 'التقييم والحالة'], reflection: ['Reflection & next step', 'ما تعلمته والخطوة التالية'],
  };
  const renderSection = (kind: CaseSectionKind) => {
    switch (kind) {
      case 'problem': return <><p>{localized('problem')}</p><p><strong>{t('Who it serves. ', 'لمن صُمم. ')}</strong>{localized('userSummary')}</p></>;
      case 'research': return <><p>{localized('research')}</p>{artifacts('research')}</>;
      case 'persona': return artifacts('persona');
      case 'flow': return <>{project.workflowSteps?.length ? <ol className="case-flow">{project.workflowSteps.map(step => <li key={step.step}><h3>{t(step.title, step.titleAr)}</h3><p>{t(step.description, step.descriptionAr)}</p></li>)}</ol> : !isTaskly && <p>{localized('wireframes')}</p>}{artifacts('flow')}</>;
      case 'decisions': return <>{project.designDecisions?.length ? project.designDecisions.map(decision => <article className="case-decision" key={decision.id}><div><h3>{t(decision.title, decision.titleAr)}</h3><p>{t(decision.designResponse, decision.designResponseAr)}</p><details className="mt-4"><summary>{t('Why this choice', 'لماذا هذا القرار')}</summary><p>{t(decision.whyChosen, decision.whyChosenAr)}</p></details></div><div className="decision-screens">{decision.screenshots.map(screen => <figure key={screen.url}>{visual(screen.url, t(screen.caption, screen.captionAr))}<figcaption>{t(screen.caption, screen.captionAr)}</figcaption></figure>)}</div></article>) : <><p>{localized('keyDecision')}</p>{isTaskly && <p>{localized('wireframes')}</p>}</>}{artifacts('decisions')}{artifacts('wireframes')}</>;
      case 'experience': return <><p>{localized('solution')}</p>{finalScreens.length > 0 && <div className="case-gallery">{finalScreens.map(screen => <figure key={screen.url}>{visual(screen.url, screen.caption)}<figcaption>{screen.caption}</figcaption></figure>)}</div>}<details className="mt-6"><summary>{t(`View all images (${slides.length})`, `استعرض كل الصور (${slides.length})`)}</summary><div className="case-gallery">{slides.map(screen => <figure key={screen.url}>{visual(screen.url, screen.caption)}<figcaption>{screen.caption}</figcaption></figure>)}</div></details></>;
      case 'evaluation': return <p>{localized('impact')}</p>;
      case 'reflection': return <p>{localized('reflection')}</p>;
    }
  };
  return <div className="portfolio-container inner-page case-content" key={id}>
    <PageMeta title={`${localized('title')} — ${t('Nadia Hossny', 'نادية حسني')}`} description={t(project.subtitle, project.subtitleAr)} />
    <Link to="/work" className="text-link mb-6"><ArrowLeft size={16} />{t('All work', 'كل الأعمال')}</Link>
    <header>
      <p className="text-sm mb-3">{t(project.contextBadge, project.contextBadgeAr)}</p>
      <h1>{isAuraLeaf ? 'AuraLeaf' : localized('title')}</h1>
      <p>{localized('overview')}</p>
      <div className="action-row">{[[project.liveUrl, t('Open live app', 'افتح التطبيق')], [project.prototypeUrl, t('View prototype', 'عرض النموذج التفاعلي')], [project.githubUrl, t('Source code', 'الكود المصدري')]].map(([url, label]) => url ? <a href={url} key={label} className="text-link" target="_blank" rel="noopener noreferrer">{label} ↗</a> : null)}</div>
      <div className={project.secondaryHeroImage ? 'apms-preview my-7' : 'my-7'}>{visual(project.heroImage, t(project.subtitle, project.subtitleAr))}{project.secondaryHeroImage && visual(project.secondaryHeroImage, t('Roshetety patient app', 'تطبيق روشتتي للمرضى'))}</div>
      <dl className="case-meta"><div><dt>{t('My role', 'دوري')}</dt><dd>{localized('role')}</dd></div><div><dt>{t('Context', 'السياق')}</dt><dd>{t(project.client, project.clientAr)}</dd></div>{project.tools?.length ? <div><dt>{t('Tools & technology', 'الأدوات والتقنيات')}</dt><dd className="case-tools">{project.tools.map(tool => <span key={tool} dir="ltr">{tool}</span>)}</dd></div> : null}{project.timeline && <div><dt>{t('Timeline', 'المدة')}</dt><dd>{localized('timeline')}</dd></div>}</dl>
      {project.myContribution && <p><strong>{t('My contribution. ', 'مساهمتي. ')}</strong>{localized('myContribution')}</p>}
      {project.collaboratorsContribution && <p><strong>{t('Team contribution. ', 'مساهمة الفريق. ')}</strong>{t(project.collaboratorsContribution, project.collaboratorsContributionAr)}</p>}
    </header>
    {(project.sectionOrder ?? defaultCaseSections).map(kind => {
      const heading = project.sectionTitles?.[kind];
      return <section className="case-section" key={kind} data-case-section={kind}><h2>{heading ? t(heading.en, heading.ar) : t(...headings[kind])}</h2>{renderSection(kind)}</section>;
    })}
    <details className="case-section"><summary>{t('Implementation & design notes', 'تفاصيل التنفيذ والتصميم')}</summary><p>{localized('myContribution')}</p>{project.collaboratorsContribution && <p>{t(project.collaboratorsContribution, project.collaboratorsContributionAr)}</p>}<p>{localized('architecture')}</p><p>{localized('designSystem')}</p></details>
    <nav className="case-end" aria-label={t('Project navigation', 'التنقل بين المشاريع')}><Link to="/work" className="text-link">{t('All work', 'كل الأعمال')}</Link><Link to={`/work/${next.id}`} className="text-link">{t('Next project', 'المشروع التالي')}<ArrowRight size={16} /></Link></nav>
    {active !== null && slides[active] && <div ref={dialog} className="image-dialog" role="dialog" aria-modal="true" aria-label={t('Project image viewer', 'عارض صور المشروع')} onClick={event => { if (event.target === event.currentTarget) setActive(null); }}><button ref={close} className="dialog-close" onClick={() => setActive(null)} aria-label={t('Close image viewer', 'إغلاق عارض الصور')}><X /></button><button className="dialog-zoom" onClick={() => setZoomed(value => !value)} aria-pressed={zoomed}>{zoomed ? t('Fit image', 'ملاءمة الصورة') : t('Zoom in', 'تكبير')}</button><button className="dialog-prev" onClick={() => changeSlide(-1)} aria-label={t('Previous image', 'الصورة السابقة')}><ChevronLeft /></button><div ref={canvas} className={`image-canvas${zoomed ? ' is-zoomed' : ''}`} tabIndex={0} role="region" aria-label={t('Image; scroll to inspect when zoomed', 'الصورة؛ مرّر لاستكشافها بعد التكبير')}><img src={slides[active].url} alt={slides[active].caption} /></div><p aria-live="polite">{active + 1} / {slideCount} · {slides[active].caption}</p><button className="dialog-next" onClick={() => changeSlide(1)} aria-label={t('Next image', 'الصورة التالية')}><ChevronRight /></button></div>}
  </div>;
}
