import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import PageMeta from '../components/PageMeta';
import SectionReveal from '../components/SectionReveal';
import { Link } from 'react-router-dom';
import { X, Mail, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { visualCollections } from '../data/visualCollections';
import { visualOffers } from '../data/visualOffers';
import { visualInquiryHref } from '../lib/inquiry';

export const Services: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const ui = translations[language].services;
  const ctaUI = translations[language].servicesUI;
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const savedScrollY = useRef(0);
  const allCollections = useMemo(() => visualCollections.map(collection => {
    const local = (en: string, ar: string) => isRTL ? ar : en;
    return { id: collection.id, title: local(collection.title, collection.titleAr), category: local(collection.category, collection.categoryAr),
      whatItIs: local(collection.description, collection.descriptionAr), contribution: local(collection.contribution, collection.contributionAr),
      cover: collection.cover,
      images: collection.images.map(image => image.url), captions: collection.images.map(image => local(image.caption, image.captionAr)) };
  }), [isRTL]);
  const selectedProject = allCollections.find(collection => collection.id === selectedProjectId) ?? null;
  const selectedImagesLength = selectedProject?.images.length ?? 0;
  const openCollectionModal = (id: string, index = 0, trigger?: HTMLElement | null) => {
    lastTriggerRef.current = trigger ?? null;
    savedScrollY.current = window.scrollY;
    setZoomed(false); setActiveImageIdx(index); setSelectedProjectId(id);
  };
  const closeCollectionModal = useCallback(() => {
    setSelectedProjectId(null);
    requestAnimationFrame(() => {
      window.scrollTo({top: savedScrollY.current, behavior: 'instant'});
      lastTriggerRef.current?.focus({preventScroll: true});
    });
  }, []);
  const handlePrevImg = () => { setZoomed(false); setActiveImageIdx(previous => (previous - 1 + selectedImagesLength) % selectedImagesLength); };
  const handleNextImg = () => { setZoomed(false); setActiveImageIdx(previous => (previous + 1) % selectedImagesLength); };
  // Keyboard navigation + Focus trap + Scroll lock
  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const backgrounds = [...document.querySelectorAll<HTMLElement>('#visual-collection-content, .site-header, footer, .skip-link')];
    backgrounds.forEach(element => { element.inert = true; });
    closeBtnRef.current?.focus();

    const len = selectedProject.images.length;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeCollectionModal();
        return;
      }
      if (e.key === 'ArrowLeft' && len > 0) {
        setZoomed(false);
        e.preventDefault();
        if (isRTL) {
          setActiveImageIdx((prev) => (prev + 1) % len);
        } else {
          setActiveImageIdx((prev) => (prev - 1 + len) % len);
        }
        return;
      }
      if (e.key === 'ArrowRight' && len > 0) {
        setZoomed(false);
        e.preventDefault();
        if (isRTL) {
          setActiveImageIdx((prev) => (prev - 1 + len) % len);
        } else {
          setActiveImageIdx((prev) => (prev + 1) % len);
        }
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      backgrounds.forEach(element => { element.inert = false; });
      document.body.style.overflow = '';
    };
  }, [selectedProject, closeCollectionModal, isRTL]);

  return (<div className="visuals-page inner-page min-h-screen bg-white text-bodytext">
    <PageMeta title={t('Visuals — Nadia Hossny', 'أعمال بصرية — نادية حسني')} description={t('Campaign graphics, editorial layouts, presentations, print materials, characters, and digital art by Nadia Hossny.', 'حملات بصرية وتصميم تحريري وعروض تقديمية ومطبوعات وشخصيات وأعمال فنية رقمية لنادية حسني.')} />
    <div id="visual-collection-content">
      <header className="visuals-opening"><SectionReveal><div className="portfolio-container"><h1>{t('Visuals', 'أعمال بصرية')}</h1><p>{t('Campaigns, publications, presentations, print, and illustration. The visual side of my work, from clear information to expressive characters.', 'حملات ومنشورات وعروض ومطبوعات ورسوم. الجانب البصري من عملي، من عرض المعلومات بوضوح إلى رسم شخصيات معبرة.')}</p></div></SectionReveal></header>
      <div className="visual-tools" aria-label={t('Design tools', 'أدوات التصميم')}>{['Adobe CC', 'Affinity', 'Figma', 'Krita', 'Canva'].map(tool => <span key={tool}>{tool}</span>)}</div>
      <section className="visual-offerings"><div className="portfolio-container"><SectionReveal><h2>{t('What I offer', 'ما أقدمه')}</h2><p>{t('Visual deliverables shaped around your message and audience.', 'مخرجات بصرية تناسب رسالتك وجمهورك.')}</p></SectionReveal><div className="visual-offerings-grid">{visualOffers.map(offer => <SectionReveal key={offer.id}><article><h3>{t(offer.title, offer.titleAr)}</h3><p>{t(offer.description, offer.descriptionAr)}</p></article></SectionReveal>)}</div></div></section>
      <section className="visual-collections portfolio-container" aria-labelledby="visual-collections-title"><SectionReveal><header><h2 id="visual-collections-title">{t('Visual collections', 'مجموعات الأعمال البصرية')}</h2><p>{t('Explore the collections, then open any cover to see the complete gallery.', 'استكشف المجموعات وافتح أي غلاف لمشاهدة جميع أعمالها.')}</p></header></SectionReveal>
      <div className="curated-visual-grid">{allCollections.map(collection => <SectionReveal key={collection.id}><article className="curated-visual-project">
        <button type="button" className="collection-cover" onClick={event => openCollectionModal(collection.id, 0, event.currentTarget)} aria-label={t('Open collection: ', 'افتح المجموعة: ') + collection.title}>
          {collection.images.slice(1, 3).map((url, index) => <span className={`collection-paper collection-paper-${index + 1}`} key={url} aria-hidden="true"><img src={url} alt="" loading="lazy" /></span>)}
          <span className="collection-front"><img src={collection.cover} alt={collection.title} loading="lazy" /><span className="collection-hover-label">{t('View more', 'شاهد المزيد')}</span></span>
        </button>
        <h3>{collection.title}</h3>
        <button type="button" className="text-link" onClick={event => openCollectionModal(collection.id, 0, event.currentTarget)}>{t('View ', 'شاهد ') + collection.title}<ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} /></button>
      </article></SectionReveal>)}</div>
      </section>
      <section className="visual-contact" aria-labelledby="visual-contact-title"><div className="portfolio-container"><div><h2 id="visual-contact-title">{ctaUI.ctaTitle}</h2><p>{ctaUI.ctaSub}</p></div><div className="visual-contact-actions action-row"><Link to={visualInquiryHref} className="button-primary">{ctaUI.ctaButton}</Link><a href="mailto:nadiahossny426@gmail.com" className="button-secondary"><Mail size={16} aria-hidden="true"/>{t('Email me', 'راسلني')}</a></div><div className="visual-contact-socials"><a href="https://wa.me/201064943439" target="_blank" rel="noopener noreferrer" className="text-link"><FaWhatsapp aria-hidden="true"/>{t('WhatsApp', 'واتساب')}</a><a href="https://linkedin.com/in/nadiahossny" target="_blank" rel="noopener noreferrer" className="text-link"><FaLinkedin aria-hidden="true"/>LinkedIn</a></div></div></section>
    </div>
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="collection-viewer-title"
          className="collection-viewer fixed inset-0 z-[100] bg-headline/85 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-5 md:p-6"
          onClick={closeCollectionModal}
        >
          <div
            ref={modalRef}
            className="w-full max-w-6xl max-h-[92vh] bg-white rounded-2xl border border-headline/20 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Modal Header */}
            <div className="px-4 sm:px-6 py-3.5 bg-background border-b border-headline/10 flex items-center justify-between gap-4 shrink-0">
              <div className="text-start min-w-0">
                <p className="font-heading font-bold text-base uppercase tracking-wider text-cta">
                  {selectedProject.category} · {ui.viewerPlateOf} {activeImageIdx + 1}{' '}
                  {ui.viewerOf} {selectedProject.images.length}
                </p>
                <h2
                  id="collection-viewer-title"
                  className="font-heading font-bold text-base sm:text-xl text-headline truncate"
                >
                  {selectedProject.title}
                </h2>
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeCollectionModal}
                aria-label={ui.viewerClose}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-headline/15 text-base font-heading font-bold text-headline hover:border-cta hover:text-cta transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta shrink-0"
              >
                <span className="hidden sm:inline">{ui.viewerClose}</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Modal Content: Artwork gets largest share of space (8 cols) + Context & Thumbnails (4 cols) */}
            <div className="collection-viewer-body flex-1 min-h-0 overflow-y-auto grid grid-cols-1 lg:grid-cols-12">
              {/* Primary Artwork Stage (Columns 1-8) */}
              <div className="collection-viewer-stage lg:col-span-8 bg-[#0B111E]/95 p-3 sm:p-6 flex flex-col justify-between min-h-[300px] sm:min-h-[440px] relative">
                <div className="flex justify-between items-center gap-3 mb-3 text-white"><button type="button" className="text-link" aria-pressed={zoomed} onClick={() => setZoomed(value => !value)}>{zoomed ? t('Fit image', 'ملاءمة الصورة') : t('Zoom in', 'تكبير')}</button></div><div className={`collection-artwork flex-1 flex items-center justify-center relative min-h-0${zoomed ? ' artwork-zoomed' : ''}`} tabIndex={0} role="region" aria-label={t('Artwork; scroll to inspect when zoomed', 'العمل؛ مرّر للاستكشاف بعد التكبير')}>
                  {selectedProject.images.length > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevImg}
                      aria-label={ui.viewerPrev}
                      className="absolute start-2 z-10 w-10 h-10 rounded-full bg-white/95 text-headline hover:bg-white flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
                    >
                      <ChevronLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  )}

                  <img
                    src={selectedProject.images[activeImageIdx] || selectedProject.cover}
                    alt={selectedProject.captions[activeImageIdx]}
                    className="max-w-full max-h-[56vh] w-auto h-auto object-contain rounded-lg"
                  />

                  {selectedProject.images.length > 1 && (
                    <button
                      type="button"
                      onClick={handleNextImg}
                      aria-label={ui.viewerNext}
                      className="absolute end-2 z-10 w-10 h-10 rounded-full bg-white/95 text-headline hover:bg-white flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
                    >
                      <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                <p className="artwork-caption" aria-live="polite">{selectedProject.captions[activeImageIdx]}</p>
                {/* Accessible Thumbnail Strip */}
                {selectedProject.images.length > 1 && (
                  <div className="collection-thumbnails mt-4 pt-3 border-t border-white/15 overflow-x-auto">
                    <div className="flex items-center gap-2 pb-1">
                      {selectedProject.images.map((imgUrl, idx) => (
                        <button
                          key={`${imgUrl}-${idx}`}
                          type="button"
                          onClick={() => setActiveImageIdx(idx)}
                          aria-label={`${ui.viewerPlateOf} ${idx + 1}`}
                          aria-current={activeImageIdx === idx ? 'true' : undefined}
                          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta ${
                            activeImageIdx === idx
                              ? 'border-cloud bg-white scale-105'
                              : 'border-white/20 bg-white/10 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Detailed Context & Metadata Panel (Columns 9-12) */}
              <div className="lg:col-span-4 p-5 sm:p-6 bg-white border-t lg:border-t-0 lg:border-s border-headline/10 text-start flex flex-col justify-between space-y-5">
                <div className="space-y-4">


                  <div className="pt-3 border-t border-headline/10 space-y-3 text-base sm:text-base">
                    <div>
                      <span className="block font-heading font-bold text-headline text-base mb-0.5">
                        {ui.whatItIsLabel}
                      </span>
                      <p className="text-bodytext">{selectedProject.whatItIs}</p>
                    </div>

                    <div>
                      <span className="block font-heading font-bold text-headline text-base mb-0.5">
                        {ui.myContributionLabel}
                      </span>
                      <p className="text-bodytext">{selectedProject.contribution}</p>
                    </div>


                  </div>
                </div>

                {/* Keyboard Hint Footer */}
                <div className="pt-3 border-t border-headline/10 text-base text-bodytext/75 flex items-center justify-between">
                  <span>
                    {t(
                      'Use ← / → arrows to switch plates',
                      'استخدم الأسهم ← / → للتنقل بين اللوحات'
                    )}
                  </span>
                  <span>Esc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
