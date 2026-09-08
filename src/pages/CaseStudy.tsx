import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudy() {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="w-full relative">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-100/50 to-transparent -z-10"></div>
      
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <Link to="/#work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-accent mb-8 transition-colors">
          &larr; Back to Work
        </Link>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold mb-6 text-foreground tracking-tight">
          {study.title} <span className="font-serif font-normal text-primary/80 italic block mt-2 md:inline md:mt-0">{study.subtitle}</span>
        </h1>
        <div className="flex flex-wrap gap-3 items-center justify-center mb-6">
          {study.tags.map(tag => (
            <span key={tag} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 bg-white/60 backdrop-blur-sm border border-border/50 rounded text-secondary-foreground shadow-sm">
              {tag}
            </span>
          ))}
        </div>
        <p className="font-mono text-xs text-secondary-foreground uppercase tracking-widest">
          {study.role}
        </p>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className={`w-full aspect-[21/9] md:aspect-[2.35/1] ${study.color} rounded-2xl flex items-center justify-center shadow-xl shadow-blue-900/5 ring-1 ring-black/5 overflow-hidden relative`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 mix-blend-overlay"></div>
          <span className="font-mono text-sm text-white/80 tracking-widest uppercase relative z-10 drop-shadow-md">{study.title} Cover</span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20 items-start">
        
        {/* Main Narrative */}
        <div className="space-y-16">
          <section>
            <h2 className="font-serif text-3xl font-medium mb-6 text-foreground border-b border-border/50 pb-4">The Problem</h2>
            <p className="text-lg text-secondary-foreground leading-relaxed">
              {study.problem}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-medium mb-6 text-foreground border-b border-border/50 pb-4">Directions I considered</h2>
            <ul className="space-y-6">
              {study.cutDirections.map((dir, idx) => (
                <li key={idx} className="relative pl-8 p-6 bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl shadow-sm">
                  <span className="absolute left-5 top-5 font-mono text-lg text-red-500/70 leading-none">✕</span>
                  <strong className="block text-foreground mb-1 pl-4">{dir.title}</strong>
                  <span className="text-secondary-foreground leading-relaxed block pl-4 text-sm">{dir.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white/60 backdrop-blur-xl border border-white shadow-lg shadow-blue-900/5 p-8 md:p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <h2 className="font-serif text-3xl font-medium mb-4 text-foreground">What I built instead</h2>
            <p className="text-lg text-secondary-foreground leading-relaxed relative z-10">
              {study.chosen.desc}
            </p>
          </section>

          <section className="p-8 rounded-xl bg-primary/5 border border-primary/10">
            <span className="block font-mono text-xs uppercase tracking-widest text-primary mb-3">
              Outcome
            </span>
            <p className="text-lg text-foreground leading-relaxed">
              {study.outcome}
            </p>
          </section>
        </div>

        {/* Marginalia / Notes */}
        <aside className="lg:sticky lg:top-24 space-y-8 bg-white/40 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-sm">
          {study.marginNotes.map((note, idx) => (
            <div key={idx} className="border-b border-border/50 pb-5 last:border-0 last:pb-0">
              <strong className="block font-mono text-[11px] uppercase tracking-widest text-primary mb-2">
                {note.label}
              </strong>
              <p className="text-sm text-secondary-foreground leading-relaxed">
                {note.text}
              </p>
            </div>
          ))}
        </aside>

      </div>
    </article>
  );
}
