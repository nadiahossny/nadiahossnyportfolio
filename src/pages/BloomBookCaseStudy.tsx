import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BloomBookCaseStudy() {
  return (
    <div className="min-h-screen bg-[#faf5ff] text-[#1a1a2e] font-sans selection:bg-purple-200">
      
      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <Link to="/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/10 shadow-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      <header className="text-center px-6 pt-24 pb-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white rounded-b-[2.5rem] shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">BloomBook Gift</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          A digital keepsake builder — personalized gift books with animated gardens
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 text-sm text-white/70 font-medium">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Role: Solo Developer</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Timeline: ~2 weeks</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Stack: React · Vite · Tailwind CSS</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        
        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4 text-slate-900">Overview</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-8">
            BloomBook Gift is a fully client-side single-page application that lets anyone create a
            personalized, interactive "digital keepsake" for a loved one. The experience blends a
            whimsical animated night garden with a virtual scrapbook — photos, quotes, colors, and a
            final dedication all wrapped into one portable <code className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-sm font-mono">.json</code> file that can be saved,
            shared, and reopened.
          </p>

          <div className="bg-[#e8dff5] border-2 border-dashed border-[#c084fc] rounded-2xl p-12 text-center text-[#7c3aed]">
            <strong className="block text-lg mb-2">[Image: BloomBook Gift — Full App Mockup]</strong>
            Replace this with a hero screenshot of the landing page + the gift notebook open side-by-side.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4 text-slate-900">Problem & Goal</h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-700">
            <p>
              Traditional physical gift books are lovely but perishable — they get lost, damaged, or can't
              be easily shared with distant family. Digital alternatives are often generic templates with no
              room for genuine personalization.
            </p>
            <p>
              <strong className="text-slate-900">Goal:</strong> Build a zero-backend, privacy-respecting tool where anyone can craft a
              beautiful, one-of-a-kind digital gift that feels magical to open and personal to the recipient.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4 text-slate-900">User Flow</h2>
          <ol className="list-decimal list-outside ml-6 space-y-3 text-lg text-slate-700 mb-10">
            <li><strong className="text-slate-900">Landing page</strong> — animated night garden with a "Create Gift" call-to-action.</li>
            <li><strong className="text-slate-900">Details form</strong> — who it's from, who it's for, occasion date.</li>
            <li><strong className="text-slate-900">Customizer</strong> — choose colors (background, flowers, notebook cover), upload 4+ photos with captions, write a message and quotes, pick a closing icon.</li>
            <li><strong className="text-slate-900">Gift reveal</strong> — animated garden blooms, then transitions into a flip-through virtual notebook containing all the personalized content.</li>
            <li><strong className="text-slate-900">Save / Share</strong> — download the gift as a self-contained <code className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-sm font-mono">.json</code> file.</li>
          </ol>

          <div className="bg-[#e8dff5] border-2 border-dashed border-[#c084fc] rounded-2xl p-12 text-center text-[#7c3aed]">
            <strong className="block text-lg mb-2">[Image: User Flow Diagram]</strong>
            Replace this with a flowchart showing the 5 steps above.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-purple-500 pl-4 text-slate-900">Design & Technical Decisions</h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">Single-page architecture</h4>
              <p className="text-slate-600 leading-relaxed">All state lives in one parent component — no routing library needed. Screens swap via conditional rendering, keeping the bundle lean.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">Self-contained portability</h4>
              <p className="text-slate-600 leading-relaxed">Every gift is a <code className="bg-purple-50 text-purple-600 px-1 rounded text-sm">.json</code> file with base64-encoded images. No server, no database, no API — the recipient can open it entirely offline.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">CSS animations + Tailwind</h4>
              <p className="text-slate-600 leading-relaxed">The "magical night garden" uses CSS keyframes for floating, blooming flowers. Tailwind keeps styling consistent without a separate CSS file.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">No build-time image assets</h4>
              <p className="text-slate-600 leading-relaxed">All decorative elements are drawn with CSS or inline SVG — zero external image dependencies for the UI itself (user photos are embedded).</p>
            </div>
          </div>

          <div className="bg-[#e8dff5] border-2 border-dashed border-[#c084fc] rounded-2xl p-12 text-center text-[#7c3aed]">
            <strong className="block text-lg mb-2">[Image: Architecture Diagram]</strong>
            Replace this with a simple diagram: React App → 5 screens (Landing, Form, Customizer, Reveal, Save) → JSON output.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4 text-slate-900">Key Features</h2>
          <ul className="list-disc list-outside ml-6 space-y-3 text-lg text-slate-700 mb-10">
            <li><strong className="text-slate-900">Color picker with presets</strong> — choose from curated palettes or pick any color for background, flowers, and notebook cover.</li>
            <li><strong className="text-slate-900">Photo upload with captions</strong> — 4+ images, each with an optional caption, stored as base64 data URIs.</li>
            <li><strong className="text-slate-900">Animated garden → book transition</strong> — flowers bloom on screen, then the notebook flies into view.</li>
            <li><strong className="text-slate-900">Reopen saved gifts</strong> — drag or select a <code className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-sm font-mono">.json</code> file on the landing page to reload a gift.</li>
            <li><strong className="text-slate-900">Fully responsive</strong> — works on desktop and mobile browsers.</li>
          </ul>

          <div className="space-y-6">
            <div className="bg-[#e8dff5] border-2 border-dashed border-[#c084fc] rounded-2xl p-12 text-center text-[#7c3aed]">
              <strong className="block text-lg mb-2">[Image: Customizer Panel Screenshot]</strong>
              Replace this with a screenshot showing the color picker, photo upload area, and text inputs.
            </div>

            <div className="bg-[#e8dff5] border-2 border-dashed border-[#c084fc] rounded-2xl p-12 text-center text-[#7c3aed]">
              <strong className="block text-lg mb-2">[Image: Gift Reveal — Garden View]</strong>
              Replace this with a screenshot of the animated garden during the reveal.
            </div>

            <div className="bg-[#e8dff5] border-2 border-dashed border-[#c084fc] rounded-2xl p-12 text-center text-[#7c3aed]">
              <strong className="block text-lg mb-2">[Image: Gift Reveal — Notebook Pages]</strong>
              Replace this with a screenshot of the virtual notebook with photos and captions.
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4 text-slate-900">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React 19", "Vite 7", "Tailwind CSS 3", "Lucide React", "JavaScript (JSX)", "PostCSS", "ESLint", "lz-string"].map((tech) => (
              <span key={tech} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4 text-slate-900">Lessons Learned</h2>
          <ul className="list-disc list-outside ml-6 space-y-3 text-lg text-slate-700">
            <li>Base64-encoding photos keeps the gift portable but increases file size — a future optimization could add optional LZ-String compression (already listed as a dependency).</li>
            <li>Managing all UI state in a single component works well for an app of this scope, but extracting the customizer and gift-reveal into separate components would improve maintainability.</li>
            <li>CSS animations are surprisingly expressive — no canvas or WebGL library was needed for the garden effect, keeping the bundle small.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4 text-slate-900">Links</h2>
          <ul className="list-none space-y-3 text-lg text-slate-700">
            <li><strong className="text-slate-900 mr-2">Author:</strong> Nadia Hossny — <a href="https://nadia.nz" target="_blank" rel="noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-medium">nadia.nz</a></li>
            <li><strong className="text-slate-900 mr-2">Source:</strong> <a href="https://github.com/nadiallah/my-bloom-gift" target="_blank" rel="noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-medium">github.com/nadiallah/my-bloom-gift</a></li>
          </ul>
        </section>

      </main>

      <footer className="text-center py-12 text-slate-500 text-sm border-t border-purple-200 mt-12 bg-white/50 backdrop-blur-sm">
        Case study for BloomBook Gift &mdash; May 2026
      </footer>

    </div>
  );
}
