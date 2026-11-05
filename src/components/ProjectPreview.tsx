import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { type CaseStudy } from '../data/caseStudies';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectPreview({ project, showMeta = false }: { project: CaseStudy; featured?: boolean; showMeta?: boolean }) {
  const { isRTL, t } = useLanguage();
  const shortTitles: Record<string, string> = { auraleaf: 'AuraLeaf', apms: t(project.title, project.titleAr), taskly: 'Taskly', 'byto-academy': 'Byto Academy', 'ieee-web': t('IEEE PUA Student Branch', 'فرع IEEE بجامعة فاروس'), simplibank: 'SimpliBank', 'bloom-gift': 'BloomBook', 'notes-app': t('Notes App', 'تطبيق الملاحظات'), 'ecomm-app': t('Route Ecommerce', 'تطبيق Route للتسوق') };
  const title = shortTitles[project.id] ?? t(project.title, project.titleAr);
  const preview = project.preview;
  return <article className="project-preview">
    <Link to={`/work/${project.id}`} className="project-image" aria-label={`${t('Explore', 'استكشف')} ${title}`}>
      <img src={project.thumbnail ?? preview?.image ?? project.heroImage} alt={title} loading="lazy" />
    </Link>
    <h3><Link to={`/work/${project.id}`}>{title}</Link></h3>
    <p>{preview ? t(preview.summary, preview.summaryAr) : t(project.subtitle, project.subtitleAr)}</p>
    {showMeta && <div className="project-preview-meta">
      <p>{t(project.role, project.roleAr)}</p>
      <p>{t(project.contextBadge, project.contextBadgeAr)}</p>
      <ul aria-label={t('Project categories', 'فئات المشروع')}>
        {(project.categories ?? []).map(category => {
          const labels: Record<string, [string, string]> = {
            healthcare: ['Healthcare & Wellbeing', 'الصحة والعافية'],
            'productivity-learning': ['Productivity & Learning', 'الإنتاجية والتعلم'],
            'education-kids': ['Education & Kids', 'التعليم والأطفال'],
            'commerce-digital': ['Commerce & Digital Experiences', 'التجارة والتجارب الرقمية'],
            'creative-tools': ['Creative & Interactive Tools', 'الأدوات الإبداعية والتفاعلية'],
            'business-management': ['Business & Management', 'الأعمال والإدارة'],
          };
          const [label, labelAr] = labels[category];
          return <li key={category}>{t(label, labelAr)}</li>;
        })}
      </ul>
    </div>}
    <Link className="text-link" to={`/work/${project.id}`} aria-label={t(`View project: ${title}`, `شاهد المشروع: ${title}`)}>{t('View project', 'شاهد المشروع')}<ArrowRight aria-hidden="true" size={16} className={isRTL ? 'rotate-180' : ''} /></Link>
  </article>;
}
