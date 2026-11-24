import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { featuredProjects, moreProjects, matchesProjectFilter, projectCategories } from '../data/caseStudies';
import ProjectPreview from '../components/ProjectPreview';
import SectionReveal from '../components/SectionReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Work() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listedProjects = [...featuredProjects, ...moreProjects];
  const selectedProjects = filter === 'all' ? listedProjects : listedProjects.filter(project => matchesProjectFilter(project, filter));
  const resultCount = t(`${selectedProjects.length} ${selectedProjects.length === 1 ? 'project' : 'projects'}`, `${selectedProjects.length} ${selectedProjects.length === 1 ? 'مشروع' : 'مشاريع'}`);
  const featured = filter === 'all' ? selectedProjects.slice(0, featuredProjects.length) : selectedProjects;
  const others = filter === 'all' ? selectedProjects.slice(featuredProjects.length) : [];
  const options = [
    { id: 'all', label: t('All work', 'كل الأعمال') },
    ...projectCategories.map(category => ({ id: category.id, label: t(category.label, category.labelAr) })),
  ];
  const activeLabel = options.find(option => option.id === filter)?.label ?? options[0].label;

  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return <div className="portfolio-container inner-page"><PageMeta title={t('Work · Nadia Hossny · Product Designer', 'الأعمال · نادية حسني · مصممة منتجات')} description={t('Explore featured case studies for AuraLeaf, Automated Pharmacy Management System, and Taskly, plus Notes App, IEEE PUA, and Byto Academy.', 'استكشف دراسات حالة AuraLeaf ونظام إدارة الصيدلية الآلي وTaskly، إلى جانب تطبيق الملاحظات وIEEE PUA وByto Academy.')} />
    <header className="section-heading"><h1>{t('Selected work', 'أعمال مختارة')}</h1><p>{t('Product design, working interfaces, and creative explorations.', 'تصميم منتجات وواجهات عملية وتجارب إبداعية.')}</p></header>
    <div className="work-filter">
      <label htmlFor="work-category">{t('Browse by area', 'تصفح حسب المجال')}</label>
      <div className="work-dropdown" ref={dropdownRef}>
        <button
          id="work-category"
          type="button"
          className={`work-dropdown-trigger${menuOpen ? ' is-open' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span>{activeLabel}</span>
          <ChevronDown size={18} aria-hidden="true" className={`work-dropdown-chevron${menuOpen ? ' is-open' : ''}`} />
        </button>
        <div
          role="listbox"
          aria-label={t('Browse by area', 'تصفح حسب المجال')}
          className={`work-dropdown-menu${menuOpen ? ' is-open' : ''}`}
          hidden={!menuOpen}
        >
          {options.map(option => {
            const selected = option.id === filter;
            return (
              <button
                key={option.id}
                type="button"
                role="option"
                aria-selected={selected}
                className={`work-dropdown-option${selected ? ' is-selected' : ''}`}
                onClick={() => {
                  setFilter(option.id);
                  setMenuOpen(false);
                }}
              >
                <span>{option.label}</span>
                {selected && <Check size={16} aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>
      <p className="work-result-count" role="status" aria-live="polite">
        {resultCount}
      </p>
    </div>
    {featured.length > 0 ? <SectionReveal variant="group" stagger><h2 className="sr-only">{t(filter === 'all' ? 'Featured case studies' : 'Matching projects', filter === 'all' ? 'دراسات حالة مختارة' : 'المشاريع المطابقة')}</h2><section aria-label={t(filter === 'all' ? 'Featured case studies' : 'Matching projects', filter === 'all' ? 'دراسات حالة مختارة' : 'المشاريع المطابقة')} className="featured-grid">{featured.map(project => <ProjectPreview key={project.id} project={project} featured showMeta />)}</section></SectionReveal> : <p className="work-empty-state" role="status">{t('No selected projects match this category yet.', 'لا توجد مشاريع مختارة ضمن هذه الفئة حالياً.')}</p>}
    {others.length > 0 && <section className="more-projects"><h2>{t('More work', 'المزيد من الأعمال')}</h2><SectionReveal variant="group" stagger><div className="featured-grid more-work-grid">{others.map(project => <ProjectPreview key={project.id} project={project} featured showMeta />)}</div></SectionReveal></section>}
  </div>;
}
