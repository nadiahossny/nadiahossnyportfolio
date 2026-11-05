import { Link } from "react-router-dom";
import PageMeta from '../components/PageMeta';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="not-found-page min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <PageMeta title={t('Page not found · Nadia Hossny', 'الصفحة غير موجودة · نادية حسني')} description={t('This page does not exist. Return to Nadia Hossny’s portfolio.', 'هذه الصفحة غير موجودة. عد إلى معرض أعمال نادية حسني.')} noIndex />
      <h1 className="text-9xl font-display font-bold text-headline mb-4">404</h1>
      <p className="text-xl text-bodytext mb-8 max-w-md">{t('The page you are looking for does not exist.', 'الصفحة التي تبحث عنها غير موجودة.')}</p>
      <Link to="/" className="button-primary">
        {t('Return Home', 'العودة للرئيسية')}
      </Link>
    </div>
  );
}
