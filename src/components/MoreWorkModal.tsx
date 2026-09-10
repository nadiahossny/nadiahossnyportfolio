import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { FaGithub, FaBehance } from 'react-icons/fa';
import { otherProjects } from '../data/caseStudies';

interface MoreWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MoreWorkModal({ isOpen, onClose }: MoreWorkModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
        
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 z-[60] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div 
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[85vh] bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 md:p-12 overflow-y-auto">
            <h2 className="text-3xl font-display text-headline mb-2 font-bold">More Projects</h2>
            <p className="text-bodytext mb-12 max-w-prose">A collection of additional development and design work.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {otherProjects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cloud/30 flex flex-col group">
                  {project.image && (
                    <div className="h-48 overflow-hidden bg-cloud-light relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-headline mb-3">{project.title}</h3>
                    <p className="text-sm text-bodytext leading-relaxed mb-6 flex-grow">{project.description}</p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cta hover:text-headline transition-colors mt-auto"
                    >
                      {project.linkText} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-cloud">
              <a 
                href="https://github.com/nadiahossny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-headline text-white rounded-full font-medium hover:bg-cta transition-colors text-sm w-full sm:w-auto justify-center"
              >
                <FaGithub className="w-5 h-5" />
                More on GitHub
              </a>
              <a 
                href="https://behance.net/nadiahossny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-cta text-white rounded-full font-medium hover:bg-headline transition-colors text-sm w-full sm:w-auto justify-center"
              >
                <FaBehance className="w-5 h-5" />
                More on Behance
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
