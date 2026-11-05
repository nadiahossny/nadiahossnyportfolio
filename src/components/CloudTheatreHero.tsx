import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import clouds from '../assets/cloudy-bg.png';
import avatar from '../assets/nadia_hero_avatar.jpg';
import '../styles/cloud-theatre.css';

export default function CloudTheatreHero() {
  const { t } = useLanguage();
  return <section className="calm-hero" aria-labelledby="hero-title" onFocusCapture={event => { if ((event.target as HTMLElement).closest('a, button')) event.currentTarget.classList.add('entrance-settled'); }}>
    <img className="calm-hero-clouds" src={clouds} alt="" aria-hidden="true" />
    <div className="calm-hero-content">
      <h1 id="hero-title" className="calm-hero-greeting font-heading"><span>{t('Hi, I’m', 'أهلاً، أنا')}</span><img src={avatar} alt="" width="108" height="108" fetchPriority="high" /><span>{t('Nadia.', 'نادية.')}</span></h1>
      <p className="calm-hero-brief">{t('A product designer who builds. I research the problem, design the interface, and build it in Flutter and React.', 'مصممة منتجات أصمم وأنفّذ. أبحث المشكلة، وأصمم الواجهة، وأنفّذها باستخدام Flutter وReact.')}</p>
      <div className="calm-hero-actions"><a href="/#selected-work" className="button-primary">{t('View my work', 'شاهد أعمالي')}</a><Link to="/services" className="button-secondary">{t('Work with me', 'اعمل معي')}</Link></div>
    </div>
  </section>;
}
