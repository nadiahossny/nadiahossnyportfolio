import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface Props {
  id: string;
  onClose: () => void;
}

export default function CaseStudyModal({ id, onClose }: Props) {
  const { language, isRTL } = useLanguage();
  const ui = translations[language].caseStudyUI;
  const study = caseStudies.find((s) => s.id === id);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!study) return null;

  const title = isRTL && study.titleAr ? study.titleAr : study.title;
  const subtitle = isRTL && study.subtitleAr ? study.subtitleAr : study.subtitle;
  const role = isRTL && study.roleAr ? study.roleAr : study.role;
  const userSummary = isRTL && study.userSummaryAr ? study.userSummaryAr : study.userSummary;
  const problem = isRTL && study.problemAr ? study.problemAr : study.problem;
  const myContribution =
    isRTL && study.myContributionAr ? study.myContributionAr : study.myContribution;
  const solution = isRTL && study.solutionAr ? study.solutionAr : study.solution;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-headline/70 backdrop-blur-sm" onClick={onClose} />

      <button
        type="button"
        onClick={onClose}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] w-11 h-11 bg-white/15 hover:bg-white/25 backdrop-blur-md transition-colors border border-white/20 rounded-full flex items-center justify-center text-white shadow-md"
        aria-label="Close modal"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col z-10">
        <div className="w-full h-full overflow-y-auto bg-white border border-[#BFE4FF] rounded-3xl shadow-2xl p-6 sm:p-10 text-start space-y-6">
          <header>
            <span className="inline-block text-xs font-bold text-cta bg-[#e8f3ff] border border-[#BFE4FF] px-3 py-1 rounded-full mb-3">
              {role}
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-headline mb-2">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-cta font-medium mb-4">{subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                to={`/work/${study.id}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta text-white font-heading font-semibold rounded-full hover:bg-headline transition-colors text-sm"
              >
                <span>{isRTL && study.linkLabelAr ? study.linkLabelAr : study.linkLabel}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-headline/15 text-headline font-heading font-semibold rounded-full hover:border-cta text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{ui.liveApp}</span>
                </a>
              )}
              {study.githubUrl && (
                <a
                  href={study.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-headline/15 text-headline font-heading font-semibold rounded-full hover:border-cta text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </header>

          <div className="rounded-2xl bg-[#edf5ff] p-4 flex items-center justify-center">
            <img
              src={study.heroImage}
              alt={title}
              className="max-h-[340px] w-auto object-contain rounded-xl"
            />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-bodytext leading-relaxed">
            <div>
              <h3 className="font-heading font-bold text-headline mb-1">
                {ui.targetUsersLabel}
              </h3>
              <p>{userSummary}</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-headline mb-1">
                {ui.myOwnershipLabel}
              </h3>
              <p>{myContribution}</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-headline mb-1">
                {ui.problemTitle}
              </h3>
              <p>{problem}</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-headline mb-1">
                {ui.solutionTitle}
              </h3>
              <p>{solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
