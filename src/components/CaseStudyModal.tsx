import { useEffect } from 'react';
import { caseStudies } from '../data/caseStudies';
import { X, ExternalLink } from 'lucide-react';
import { FaGithub, FaBehance } from 'react-icons/fa';

interface Props {
  id: string;
  onClose: () => void;
}

export default function CaseStudyModal({ id, onClose }: Props) {
  const study = caseStudies.find(s => s.id === id);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!study) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Global Close Button Outside Modal */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20 rounded-full flex items-center justify-center text-white shadow-md"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col z-10 animate-in zoom-in-95 duration-300">
        <div className="w-full h-full overflow-y-auto bg-white border border-cloud rounded-3xl shadow-cloud relative">
          <div className="p-8 md:p-16">
          <header className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-headline font-bold">
              {study.title} <span className="text-cta italic block mt-2 md:inline md:mt-0">{study.subtitle}</span>
            </h2>

            <p className="text-[13px] uppercase tracking-widest text-bodytext font-medium mb-6">
              {study.role}
            </p>
            
            {study.links && (
              <div className="flex flex-wrap justify-center gap-4">
                {study.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta text-white font-medium rounded-full hover:bg-headline transition-colors shadow-sm text-sm"
                  >
                    {link.type === 'github' && <FaGithub className="w-4 h-4" />}
                    {link.type === 'behance' && <FaBehance className="w-4 h-4" />}
                    {link.type === 'live' && <ExternalLink className="w-4 h-4" />}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </header>

          <div className="w-full aspect-[21/9] md:aspect-[2.35/1] rounded-2xl overflow-hidden mb-20 border border-cloud bg-cloud-light shadow-sm">
             <img src={study.image} alt={study.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start max-w-4xl mx-auto">
            <div className="space-y-16">
              <section>
                <h3 className="text-2xl font-display mb-6 text-headline font-bold">The Problem</h3>
                <p className="text-lg text-bodytext leading-relaxed font-light">
                  {study.problem}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-display mb-6 text-headline font-bold">Directions I considered</h3>
                <ul className="space-y-6">
                  {study.cutDirections.map((dir, idx) => (
                    <li key={idx} className="relative pl-10 border-l border-cloud">
                      <span className="absolute left-[-5px] top-1 text-[10px] text-cta">✕</span>
                      <strong className="block text-headline font-medium mb-2">{dir.title}</strong>
                      <span className="text-bodytext leading-relaxed block font-light">{dir.desc}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-display mb-6 text-headline font-bold">What I built instead</h3>
                <p className="text-lg text-bodytext leading-relaxed font-light">
                  {study.chosen.desc}
                </p>
              </section>

              <section className="p-8 bg-cloud-light/50 rounded-2xl border border-cloud/50">
                <span className="block text-[11px] uppercase tracking-wider text-bodytext font-medium mb-3">Outcome</span>
                <p className="text-lg text-headline leading-relaxed font-display">
                  {study.outcome}
                </p>
              </section>
            </div>

            <aside className="lg:sticky lg:top-8 space-y-8">
              {study.marginNotes.map((note, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-cloud/30">
                  <strong className="block text-[11px] uppercase tracking-wider text-cta font-medium mb-2">
                    {note.label}
                  </strong>
                  <p className="text-sm text-bodytext leading-relaxed font-light">
                    {note.text}
                  </p>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
