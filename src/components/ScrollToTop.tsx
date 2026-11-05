import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80;
          window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - headerHeight - 20, behavior: reducedMotion ? 'instant' : 'smooth' });
          element.setAttribute('tabindex', '-1');
          element.focus({ preventScroll: true });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        const heading = document.querySelector<HTMLElement>('main h1');
        heading?.setAttribute('tabindex', '-1');
        heading?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
