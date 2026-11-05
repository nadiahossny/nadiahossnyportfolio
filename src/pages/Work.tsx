import { useState } from 'react';
import PageMeta from '../components/PageMeta';
import { featuredProjects, moreProjects, matchesProjectFilter, projectCategories } from '../data/caseStudies';
import ProjectPreview from '../components/ProjectPreview';
import SectionReveal from '../components/SectionReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Work() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const listedProjects = [...featuredProjects, ...moreProjects];
  const selectedProjects = filter === 'all' ? listedProjects : listedProjects.filter(project => matchesProjectFilter(project, filter));
  const featured = filter === 'all' ? selectedProjects.slice(0, featuredProjects.length) : selectedProjects;
  const others = filter === 'all' ? selectedProjects.slice(featuredProjects.length) : [];
  return <div className="portfolio-container inner-page"><PageMeta title={t('Work · Nadia Hossny · Product Designer', 'الأعمال · نادية حسني · مصممة منتجات')} description={t('Explore featured case studies for AuraLeaf, Automated Pharmacy Management System, and Taskly, plus Notes App, IEEE PUA, and Byto Academy.', 'استكشف دراسات حالة AuraLeaf ونظام إدارة الصيدلية الآلي وTaskly، إلى جانب تطبيق الملاحظات وIEEE PUA وByto Academy.')} />
    <header className="section-heading"><h1>{t('Selected work', 'أعمال مختارة')}</h1><p>{t('Product design, working interfaces, and creative explorations.', 'تصميم منتجات وواجهات عملية وتجارب إبداعية.')}</p></header>
    <div className="filter-bar" role="group" aria-label={t('Filter projects', 'تصفية المشاريع')}>
      {[{ id: 'all', label: t('All work', 'كل الأعمال') }, ...projectCategories.map(category => ({ id: category.id, label: t(category.label, category.labelAr) }))].map(({ id, label }) => <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>)}
    </div>
    {featured.length > 0 ? <SectionReveal variant="group" stagger><h2 className="sr-only">{t(filter === 'all' ? 'Featured case studies' : 'Matching projects', filter === 'all' ? 'دراسات حالة مختارة' : 'المشاريع المطابقة')}</h2><section aria-label={t(filter === 'all' ? 'Featured case studies' : 'Matching projects', filter === 'all' ? 'دراسات حالة مختارة' : 'المشاريع المطابقة')} className="featured-grid">{featured.map(project => <ProjectPreview key={project.id} project={project} featured showMeta />)}</section></SectionReveal> : <p className="work-empty-state" role="status">{t('No selected projects match this category yet.', 'لا توجد مشاريع مختارة ضمن هذه الفئة حالياً.')}</p>}
    {others.length > 0 && <section className="more-projects"><h2>{t('More work', 'المزيد من الأعمال')}</h2><SectionReveal variant="group" stagger><div className="featured-grid more-work-grid">{others.map(project => <ProjectPreview key={project.id} project={project} featured showMeta />)}</div></SectionReveal></section>}
  </div>;
}
