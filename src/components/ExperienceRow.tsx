import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const ExperienceRow: React.FC<{ item: ExperienceItem; defaultOpen?: boolean }> = ({
  item,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-white border border-headline/10 overflow-hidden transition-colors hover:border-cta/35">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full p-6 text-start flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-headline">
            {item.role}
          </h3>
          <p className="text-sm font-medium text-cta mt-0.5">{item.company}</p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-center">
          <span className="text-xs font-mono font-semibold text-headline/75 bg-[#f4f9ff] border border-[#BFE4FF] px-3 py-1 rounded-full">
            {item.period}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-cta transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-headline/5 space-y-4">
              <p className="text-bodytext text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              {item.achievements.length > 0 && (
                <ul className="space-y-2">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-bodytext">
                      <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-headline/80 bg-[#f4f9ff] border border-[#BFE4FF]/70 px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
