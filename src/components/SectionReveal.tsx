import { useEffect, useRef, type ReactNode } from 'react';

/** Content is visible by default, including when observers or motion are unavailable. */
export default function SectionReveal({ children, variant = 'section', stagger = false }: { children: ReactNode; variant?: 'section' | 'group'; stagger?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        element.classList.add('section-arrived');
        observer.disconnect();
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`section-reveal reveal-${variant}${stagger ? ' reveal-stagger' : ''}`} onFocusCapture={() => ref.current?.classList.add('reveal-settled')}>{children}</div>;
}
