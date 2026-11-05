import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/n-logo-transparent.png';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    const closeAtDesktop = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener('resize', closeAtDesktop);
    return () => window.removeEventListener('resize', closeAtDesktop);
  }, []);

  const navLinks = [
    { label: t('Work', 'الأعمال'), to: '/work' },
    { label: t('Services', 'الخدمات'), to: '/services' },
    { label: t('About', 'عني'), to: '/about' },
    { label: t('Visuals', 'أعمال بصرية'), to: '/visuals' },
  ];

  return (
    <header
      onKeyDown={(event) => { if (event.key === 'Escape' && isOpen) { setIsOpen(false); menuToggle.current?.focus(); } }}
      className={`site-header fixed z-50${isScrolled ? ' is-scrolled' : ''}`}
    >
      <div className="max-w-[1120px] mx-auto px-5 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="brand-link flex items-center gap-3 transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded-lg"
          title={t('Nadia Hossny — Home', 'نادية حسني — الرئيسية')}
        >
          <img src={logo} alt="" className="h-9 md:h-10 w-auto shrink-0" />
          <div className="brand-copy flex flex-col text-start leading-tight">
            <span className="font-heading font-bold text-base md:text-base text-headline tracking-tight">
              {t('Nadia Hossny', 'نادية حسني')}
            </span>
            <span className="text-base font-medium text-bodytext/80 tracking-wide">
              {t('Product Designer', 'مصممة منتجات رقمية')}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label={t('Primary Navigation', 'التنقل الرئيسي')}
          className="hidden lg:flex items-center gap-6 text-base uppercase tracking-widest text-headline font-bold"
        >
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.to || (link.to === '/services' && location.pathname === '/work-with-me') ||
              (link.to === '/work' && location.pathname.startsWith('/work/'));
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className={`hover:text-cta transition-colors relative py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded ${
                  isActive ? 'text-cta font-extrabold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span aria-hidden="true" className="nav-current-indicator" />
                )}
              </Link>
            );
          })}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-action px-4 py-2 bg-headline text-white rounded-full hover:bg-headline/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta text-base uppercase tracking-widest font-bold ms-1"
          >
            {t('Resume', 'السيرة الذاتية')}
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="nav-action inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-headline/15 bg-white text-headline font-bold text-base uppercase tracking-wider hover:border-cta hover:bg-cloud-light/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta cursor-pointer"
            aria-label={language === 'en' ? 'EN | عربي — Switch to Arabic' : 'EN | عربي — التبديل إلى الإنجليزية'}
            title={language === 'en' ? 'تغيير إلى العربية' : 'Switch to English'}
          >
            <span className={language === 'en' ? 'text-cta font-bold' : 'text-bodytext/50 font-normal'}>
              EN
            </span>
            <span aria-hidden="true" className="text-headline/20">|</span>
            <span className={language === 'ar' ? 'text-cta font-bold' : 'text-bodytext/50 font-normal'}>
              عربي
            </span>
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded border border-headline/15 bg-white text-headline font-bold text-base tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
            aria-label={language === 'en' ? 'EN | عربي — Switch to Arabic' : 'EN | عربي — التبديل إلى الإنجليزية'}
          >
            <span className={language === 'en' ? 'text-cta font-bold' : 'text-bodytext/50'}>EN</span>
            <span aria-hidden="true" className="text-headline/20">|</span>
            <span className={language === 'ar' ? 'text-cta font-bold' : 'text-bodytext/50'}>عربي</span>
          </button>

          <button
            ref={menuToggle}
            className="text-headline p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? t('Close menu', 'إغلاق القائمة') : t('Open menu', 'فتح القائمة')}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div id="mobile-navigation" className="absolute top-full left-0 w-full bg-white border-b border-headline/10 lg:hidden py-6 px-6 flex flex-col gap-4 text-base uppercase tracking-widest text-headline font-bold z-40">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.to || (link.to === '/services' && location.pathname === '/work-with-me') ||
              (link.to === '/work' && location.pathname.startsWith('/work/'));
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
                className={`hover:text-cta transition-colors py-2 flex items-center justify-between ${
                  isActive ? 'text-cta font-extrabold' : ''
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cta" />}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-headline text-white text-center rounded-full hover:bg-headline/90 transition-colors mt-2 text-base uppercase tracking-widest font-bold"
          >
            {t('Resume', 'السيرة الذاتية')}
          </a>
        </div>
      )}
    </header>
  );
}
