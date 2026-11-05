import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MousePointerClick, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';
import bloomBookImg from '../assets/projects/creative experiments/bloombookprev.png';
import { useLanguage } from '../context/LanguageContext';

export default function Playground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isRTL, t } = useLanguage();
  const [isCompact, setIsCompact] = useState(() => window.matchMedia('(max-width: 1023px)').matches);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsCompact(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const cloudCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='white' stroke='%23002d69' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.5 17.5h11c2.5 0 4.5-2 4.5-4.5 0-2.2-1.6-4.1-3.8-4.4-.6-2.9-3.2-5.1-6.2-5.1-3 0-5.6 2.2-6.2 5.1-2.2.3-3.8 2.2-3.8 4.4 0 2.5 2 4.5 4.5 4.5z'/%3E%3C/svg%3E") 16 16, auto`;

  return (
    <div
      className="creative-page min-h-screen pt-32 pb-24 bg-white relative overflow-hidden"
      style={{ cursor: cloudCursor }}
    >
      <PageMeta title={t('Creative Corner · Nadia Hossny', 'الركن الإبداعي · نادية حسني')} description={t('Explore creative cards and frontend experiments by Nadia Hossny.', 'استكشف البطاقات الإبداعية وتجارب الواجهات لنادية حسني.')} />

      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-8 relative z-10 flex flex-col items-center text-center">
        <Link
          to="/"
          className="self-start mb-6 inline-flex items-center gap-2 text-bodytext hover:text-cta transition-colors font-heading font-semibold text-base"
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{t('Back to Home', 'العودة للرئيسية')}</span>
        </Link>
        <h1 className="text-3xl sm:text-5xl font-heading text-headline mb-3 font-bold">
          {t('The Creative Corner', 'الركن الإبداعي التفاعلي')}
        </h1>
        <p className="text-base sm:text-lg text-bodytext flex items-center justify-center gap-2">
          <span>{isCompact ? t('Explore creative cards and frontend experiments.', 'استكشف البطاقات الإبداعية وتجارب الواجهات.') : t('Drag and explore interactive cards and frontend experiments.', 'اسحب البطاقات واستكشف التجارب التفاعلية.')}</span>
          <MousePointerClick className="w-5 h-5 text-cta" aria-hidden="true" />
        </p>
      </div>

      <div
        ref={containerRef}
        className="creative-board relative w-full h-[600px] max-w-4xl mx-auto border-2 border-dashed border-[#BFE4FF] rounded-3xl bg-[#f4f9ff]/60 overflow-hidden"
      >
        {/* Bloom Book Link */}
        <motion.div
          drag={!isCompact}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 50, cursor: 'grabbing' }}
          className="absolute top-[60px] left-[30px] sm:left-[120px] bg-white rounded-3xl shadow-lg cursor-grab border border-[#BFE4FF] z-30 flex flex-col items-center overflow-hidden w-60"
        >
          <img
            src={bloomBookImg}
            className="w-full h-32 object-cover pointer-events-none"
            alt="BloomBook Interactive 3D Scrapbook"
            loading="lazy"
            draggable={false}
          />
          <div className="p-4 w-full text-center">
            <h2 className="font-heading font-bold text-headline mb-2">BloomBook 3D</h2>
            <a
              href="https://my-bloom-gift.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-cta text-white rounded-full text-base font-heading font-semibold hover:bg-headline transition-colors pointer-events-auto"
              draggable={false}
            >
              {t('Open Live Build', 'افتح التطبيق الحي')}
            </a>
          </div>
        </motion.div>

        {/* Mini Style Guide */}
        <motion.div
          drag={!isCompact}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 50, cursor: 'grabbing' }}
          initial={{ rotate: -2 }}
          className="absolute top-[250px] left-[60px] sm:top-[160px] sm:left-[360px] bg-white rounded-2xl shadow-lg p-5 cursor-grab border border-[#BFE4FF] z-20 flex flex-col items-center w-52"
        >
          <span className="text-base font-bold text-headline uppercase tracking-widest mb-4 border-b border-headline/10 pb-2 w-full text-center">
            {t('Palette Tokens', 'لوحة الألوان')}
          </span>
          <div className="flex gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-headline shadow-inner" title="#002D69 Navy" />
            <div className="w-8 h-8 rounded-full bg-[#BFE4FF] shadow-inner" title="#BFE4FF Cloud Cyan" />
            <div className="w-8 h-8 rounded-full bg-background shadow-inner border border-[#BFE4FF]" title="Background" />
          </div>
          <span className="text-base text-bodytext mt-2 font-mono bg-[#f4f9ff] px-2 py-1 rounded">
            design-tokens.css
          </span>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          drag={!isCompact}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.08, zIndex: 50, cursor: 'grabbing' }}
          initial={{ rotate: 4 }}
          className="absolute top-[410px] left-[40px] sm:top-[310px] sm:left-[380px] cursor-grab z-20 bg-headline text-white px-5 py-2.5 rounded-xl shadow-md flex items-center justify-center"
        >
          <span className="font-heading font-semibold text-base sm:text-base">React & Next.js</span>
        </motion.div>

        <motion.div
          drag={!isCompact}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.08, zIndex: 50, cursor: 'grabbing' }}
          initial={{ rotate: -4 }}
          className="absolute top-[460px] left-[190px] sm:top-[100px] sm:left-[580px] cursor-grab z-20 bg-cta text-white px-5 py-2.5 rounded-xl shadow-md flex items-center justify-center"
        >
          <span className="font-heading font-semibold text-base sm:text-base">Flutter & Figma</span>
        </motion.div>

        {/* Quick Email Note */}
        <motion.div
          drag={!isCompact}
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, zIndex: 50, cursor: 'grabbing' }}
          className="absolute top-[280px] right-[24px] sm:top-[280px] sm:left-[560px] bg-white rounded-2xl shadow-lg p-5 cursor-grab border border-[#BFE4FF] z-20 w-64 flex flex-col"
        >
          <div className="w-full flex justify-between items-center mb-2">
            <span className="text-base font-bold text-cta uppercase tracking-wider">
              {t('Send a Quick Note', 'أرسل ملاحظة سريعة')}
            </span>
            <div className="w-2 h-2 rounded-full bg-cta/40" />
          </div>
          <p className="text-base leading-relaxed mb-4">{t('Have a thought to share? Write me an email.', 'لديك فكرة تود مشاركتها؟ اكتب لي رسالة بريدية.')}</p>
          <a
            href="mailto:nadiahossny426@gmail.com?subject=Hello%20from%20your%20portfolio"
            onPointerDownCapture={event => event.stopPropagation()}
            draggable={false}
            className="w-full py-3 text-center bg-cta text-white rounded-xl font-heading font-semibold text-base hover:bg-headline pointer-events-auto"
          >{t('Write an email', 'اكتب رسالة بريدية')}</a>
        </motion.div>
      </div>
    </div>
  );
}
