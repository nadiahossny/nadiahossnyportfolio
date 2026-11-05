import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { useLanguage } from '../context/LanguageContext';
import SectionReveal from './SectionReveal';

export default function Testimonials() {
  const { t, isRTL } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [instant, setInstant] = useState(false);
  const region = useRef<HTMLElement>(null);
  const pointer = useRef<number | null>(null);
  const select = (index: number, immediate = false) => {
    setInstant(immediate);
    setActive((index + testimonials.length) % testimonials.length);
  };
  useEffect(() => {
    const element = region.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (reducedMotion || paused || interacting || focused || !visible) return;
    const interval = window.setInterval(() => { setInstant(false); setActive(index => (index + 1) % testimonials.length); }, 6000);
    return () => window.clearInterval(interval);
  }, [reducedMotion, paused, interacting, focused, visible]);
  return <section ref={region} className={`testimonial-section original-testimonials${instant ? ' testimonial-instant' : ''}`} aria-roledescription={t('carousel', 'عارض شرائح')} aria-labelledby="testimonials-title"
    onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}
    onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); select(active + ((event.key === 'ArrowRight') !== isRTL ? 1 : -1), true); } }}>
    <div className="portfolio-container">
      <SectionReveal><header><h2 id="testimonials-title">{t('Testimonials', 'آراء وتوصيات')}</h2></header></SectionReveal>
      <div className="testimonial-stage" aria-live={paused || focused ? 'polite' : 'off'}
        onPointerDown={event => { pointer.current = event.clientX; }} onPointerCancel={() => { pointer.current = null; }}
        onPointerUp={event => { if (pointer.current === null) return; const offset = event.clientX - pointer.current; pointer.current = null; if (Math.abs(offset) > 50) select(active + ((offset < 0) !== isRTL ? 1 : -1)); }}>
        {testimonials.map((item, index) => <figure key={item.id} className={`testimonial-slide${index === active ? ' is-active' : ''}`} aria-hidden={index !== active} role="group" aria-roledescription={t('slide', 'شريحة')} aria-label={`${index + 1} / ${testimonials.length}`}>
          <blockquote lang="en" dir="ltr">“{item.quote}”</blockquote>
          <figcaption><strong dir="auto">{item.author}</strong><span aria-hidden="true"> · </span><span>{t(item.role, item.roleAr)}</span></figcaption>
        </figure>)}
      </div>
      <div className="testimonial-controls"><div className="testimonial-dots" role="group" aria-label={t('Choose testimonial', 'اختر توصية')}>
        {testimonials.map((item, index) => <button key={item.id} type="button" aria-label={t(`Go to testimonial ${index + 1}`, `انتقل إلى التوصية ${index + 1}`)} aria-current={active === index ? 'true' : undefined} onClick={event => select(index, event.detail === 0)}><span aria-hidden="true" /></button>)}
      </div><button type="button" className="testimonial-playback" aria-label={paused ? t('Play testimonials', 'تشغيل التوصيات') : t('Pause testimonials', 'إيقاف التوصيات مؤقتاً')} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? <Play aria-hidden="true" size={20}/> : <Pause aria-hidden="true" size={20}/>}</button></div>
    </div>
  </section>;
}
