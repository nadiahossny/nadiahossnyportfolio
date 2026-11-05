import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaBehance, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/n-logo-transparent.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Footer() {
  const { language, t } = useLanguage();
  const ui = translations[language].footer;
  const nav = translations[language].nav;

  return (
    <footer className="relative text-headline py-14 md:py-16 px-6 overflow-hidden bg-background border-t border-headline/10">


      <div className="relative z-10 max-w-[1120px] mx-auto flex flex-wrap flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-start">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-3 mb-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded-xl"
            aria-label={t('Nadia Hossny · Product Designer — Home', 'نادية حسني · مصممة منتجات رقمية — الرئيسية')}
          >
            <img
              src={logo}
              alt=""
              className="h-9 w-auto hover:opacity-90 transition-opacity"
            />
            <span className="font-heading font-bold text-base text-headline">
              {t('Nadia Hossny · Product Designer', 'نادية حسني · مصممة منتجات رقمية')}
            </span>
          </Link>
          <p className="text-base text-bodytext leading-relaxed">
            {t('Thoughtful experiences, from problem to prototype.', 'تجارب مدروسة، من فهم المشكلة إلى النموذج التفاعلي.')}
          </p>
        </div>

        {/* Quick Navigation */}
        <nav
          aria-label={ui.navigation}
          className="flex flex-wrap items-center justify-center gap-5 text-base sm:text-base font-heading font-semibold text-headline lg:order-3 lg:basis-full"
        >
          <Link to="/work" className="hover:text-cta transition-colors">
            {nav.work}
          </Link>
          <Link to="/services" className="hover:text-cta transition-colors">
            {t('Services', 'الخدمات')}
          </Link>
          <Link to="/about" className="hover:text-cta transition-colors">
            {nav.about}
          </Link>
          <Link to="/visuals" className="hover:text-cta transition-colors">
            {nav.services}
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cta transition-colors"
          >
            {t('Resume', 'السيرة الذاتية')}
          </a>
        </nav>

        {/* Direct Social Links */}
        <div className="footer-social flex items-center justify-center gap-3">
          <a
            href="mailto:nadiahossny426@gmail.com"
            className="w-10 h-10 rounded-full bg-white border border-headline/15 text-headline hover:text-cta hover:border-cta flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
            aria-label="Email Nadia"
            title="nadiahossny426@gmail.com"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/201064943439"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-headline/15 text-headline hover:text-cta hover:border-cta flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
            aria-label="WhatsApp Nadia"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/nadiahossny"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-headline/15 text-headline hover:text-cta hover:border-cta flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
            aria-label="Nadia's LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/nadiahossny"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-headline/15 text-headline hover:text-cta hover:border-cta flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
            aria-label="Nadia's GitHub"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://behance.net/nadiahossny"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-headline/15 text-headline hover:text-cta hover:border-cta flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
            aria-label="Nadia's Behance"
            title="Behance"
          >
            <FaBehance className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="relative z-10 max-w-[1120px] mx-auto mt-8 pt-6 border-t border-headline/10 text-center">
        <p className="text-base sm:text-base text-bodytext/80 font-medium">
          © {new Date().getFullYear()} {ui.rights}
        </p>
      </div>
    </footer>
  );
}
