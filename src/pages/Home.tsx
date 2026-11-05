import { useEffect, useState } from 'react';
import SectionReveal from '../components/SectionReveal';
import { visualCollections } from '../data/visualCollections';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { ArrowRight, Mail } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { featuredProjects } from '../data/caseStudies';
import { useLanguage } from '../context/LanguageContext';
import ProjectPreview from '../components/ProjectPreview';
import portrait from '../assets/about-photo.jpg';
import CloudTheatreHero from '../components/CloudTheatreHero';
import Testimonials from '../components/Testimonials';
import { serviceOffers } from '../data/serviceOffers';

let entrancePlayed = false;

export default function Home() {
  const [playEntrance] = useState(() => !entrancePlayed);
  useEffect(() => { entrancePlayed = true; }, []);
  const { t, isRTL } = useLanguage();
  const subtitle = t("I'm Nadia, a product designer who builds. I research the problem, design the interface, and build it in Flutter and React.", 'أنا نادية، مصممة منتجات أصمم وأنفذ. أبحث المشكلة، وأصمم الواجهة، وأنفذها باستخدام Flutter وReact.');
  const steps = [
    [t('Understand the problem', 'فهم المشكلة'), t('Research, competitive analysis, and clear user flows help me frame what needs solving.', 'أستخدم البحث وتحليل المنافسين ومسارات المستخدم لتحديد ما يحتاج إلى حل.')],
    [t('Design the solution', 'تصميم الحل'), t('I turn those insights into wireframes, considered interfaces, and clear design deliverables.', 'أحوّل الفهم إلى مخططات وواجهات مدروسة ومخرجات تصميم واضحة.')],
    [t('Build and refine it', 'التنفيذ والتحسين'), t('I connect design with delivery through prototypes, developer handoff, or full implementation.', 'أربط التصميم بالتسليم عبر النماذج التفاعلية، أو تسليم التصميم للمطورين، أو التنفيذ الكامل.')],
  ];
  return <div className={`home-page${playEntrance ? ' play-entrance' : ''}`}>
    <PageMeta title={t('Nadia Hossny — Product Designer', 'نادية حسني — مصممة منتجات')} description={subtitle} />
    <CloudTheatreHero />
    <section id="selected-work" className="portfolio-section portfolio-container">
      <SectionReveal><div className="section-heading"><h2>{t('Selected work', 'أعمال مختارة')}</h2><p>{t('Thoughtful experiences for everyday needs.', 'تجارب مدروسة لاحتياجات الحياة اليومية.')}</p></div></SectionReveal>
      <SectionReveal variant="group" stagger><div className="featured-grid">{featuredProjects.map(project => <ProjectPreview key={project.id} project={project} featured />)}</div></SectionReveal>
      <div className="more-work"><Link to="/work" className="button-secondary">{t('View more work', 'المزيد من الأعمال')}<ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} /></Link></div>
    </section>
    <Testimonials />
    <section className="portfolio-section portfolio-container home-personal">
      <div className="personal-intro"><img src={portrait} alt={t('Nadia Hossny', 'نادية حسني')} loading="lazy" /><div><h2>{t('A little about me', 'نبذة عني')}</h2><p>{t('I’m Nadia, a product designer based in Egypt with 7 years of design work and a Computer Science and AI degree with honors. I enjoy understanding a problem, designing a useful tool, and bringing it to life. Learning, productivity, and creative tools especially interest me. Visual design supports the clarity and personality of my product work.', 'أنا نادية، مصممة منتجات مقيمة في مصر بخبرة ٧ سنوات في التصميم ودرجة علمية في علوم الحاسب والذكاء الاصطناعي مع مرتبة الشرف. أستمتع بفهم المشكلة وتصميم أداة مفيدة وتحويلها إلى واقع. أهتم خصوصاً بأدوات التعلم والإنتاجية والإبداع. يدعم التصميم البصري وضوح عملي في تصميم المنتجات وشخصيته.')}</p><Link to="/about" className="text-link">{t('More about me', 'المزيد عني')}<ArrowRight size={16} /></Link></div></div>
    </section>
    <section className="approach-section"><div className="portfolio-container portfolio-section">
      <h2>{t('My approach', 'طريقتي في العمل')}</h2><div className="approach-grid">{steps.map(([title, desc], index) => <div key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{desc}</p></div>)}</div>
    </div></section>
    <section className="portfolio-section portfolio-container home-services" aria-labelledby="home-services-title">
      <div className="section-heading"><h2 id="home-services-title">{t('Useful experiences. A connected presence.', 'تجارب مفيدة وحضور متناسق.')}</h2><p>{t('Two separate offers, with a clear scope before we start.', 'خدمتان منفصلتان، ونطاق واضح قبل أن نبدأ.')}</p></div>
      <div className="home-service-grid">{serviceOffers.map(offer => <article key={offer.id}><h3>{t(offer.title, offer.titleAr)}</h3><p>{t(offer.summary, offer.summaryAr)}</p></article>)}</div>
      <Link to="/services" className="text-link">{t('Explore services & process', 'تعرف على الخدمات والخطوات')}<ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} /></Link>
    </section>
    <section className="portfolio-section portfolio-container home-personal home-visuals">
      <div className="visual-heading"><h2>{t('Visuals', 'أعمال بصرية')}</h2><Link to="/visuals" className="text-link">{t('Explore visual work', 'استكشف أعمال التصميم البصري')}<ArrowRight size={16} /></Link></div>
      <SectionReveal variant="group" stagger><div className="visual-preview-grid">{visualCollections.slice(0, 3).map(collection => <Link to="/visuals" key={collection.id}><span className="home-visual-frame"><img src={collection.cover} alt={t(collection.title, collection.titleAr)} loading="lazy" /></span><h3>{t(collection.title, collection.titleAr)}</h3></Link>)}</div></SectionReveal>
    </section>
    <section id="contact" className="portfolio-section home-contact"><h2>{t('Let’s talk', 'لنتحدث')}</h2><p>{t('Looking for a product designer for your team or a thoughtful partner for your next project? I’m open to roles and selected client work.', 'تبحث عن مصممة منتجات لفريقك أو شريكة لتصميم مشروعك القادم؟ أرحب بفرص العمل ومشروعات العملاء المناسبة.')}</p><div className="action-row justify-center"><a className="button-primary" href="mailto:nadiahossny426@gmail.com"><Mail size={16} />{t('Email me', 'راسلني')}</a><Link className="button-secondary" to="/services">{t('Work with me', 'اعمل معي')}</Link></div><div className="contact-links"><a href="https://linkedin.com/in/nadiahossny" target="_blank" rel="noopener noreferrer"><FaLinkedin />LinkedIn</a><a href="https://wa.me/201064943439" target="_blank" rel="noopener noreferrer"><FaWhatsapp />WhatsApp</a><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">{t('Resume', 'السيرة الذاتية')}</a></div></section>
  </div>;
}
