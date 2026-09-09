import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiFigma, SiCanva, SiKrita, SiAffinitydesigner } from 'react-icons/si';
import { GrAdobeCreativeCloud } from 'react-icons/gr';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/cloudy-bg.png';

const imageModules = import.meta.glob('../assets/graphic-design/**/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const bundlesMap: Record<string, any> = {};

for (const path in imageModules) {
  // @ts-ignore
  const url = imageModules[path].default || imageModules[path];
  const parts = path.split('/');
  const folderName = parts[parts.length - 2];
  
  if (folderName === 'graphic-design' || folderName === 'assets' || folderName === 'src') continue;

  if (!bundlesMap[folderName]) {
    bundlesMap[folderName] = {
      id: folderName,
      title: folderName.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      category: "Graphic Design",
      cover: url,
      story: `A collection of designs from the ${folderName} project.`,
      images: []
    };
  }
  bundlesMap[folderName].images.push({ url, path });
}

const graphicProjects = Object.values(bundlesMap).map(bundle => {
  bundle.images.sort((a: any, b: any) => a.path.localeCompare(b.path));
  bundle.cover = bundle.images[0].url;
  bundle.images = bundle.images.map((img: any) => img.url);
  return bundle;
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Services() {
  const [selectedProject, setSelectedProject] = useState<typeof graphicProjects[0] | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-background relative selection:bg-cloud selection:text-headline overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden z-0 pointer-events-none">
        <motion.img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-60 origin-top" 
          animate={{ 
            scale: [1, 1.05, 1],
            x: [0, 10, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        {/* Fade out to background color */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Nav / Header */}
      <nav className="relative z-10 px-8 pt-24 pb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-bodytext hover:text-headline transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-display font-bold">Back to Home</span>
        </Link>
      </nav>

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-8 pt-4 pb-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold text-headline mb-6 tracking-tight">Graphic Design</h1>
            <p className="text-2xl text-bodytext font-light leading-relaxed">
              A visual exploration of branding, illustration, and digital marketing. <br className="hidden md:block" />
              Before diving into UI/UX, I spent years crafting visual identities and telling stories through pixels.
            </p>
          </motion.div>
        </div>
        
        {/* Tools Strip */}
        <section className="py-10 border-y border-headline/10 bg-white relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20 opacity-80"
          >
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><GrAdobeCreativeCloud className="w-6 h-6" /><span className="text-sm font-medium">Adobe Creative Cloud</span></div>
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><SiFigma className="w-6 h-6" /><span className="text-sm font-medium">Figma</span></div>
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><SiCanva className="w-6 h-6" /><span className="text-sm font-medium">Canva</span></div>
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><SiKrita className="w-6 h-6" /><span className="text-sm font-medium">Krita</span></div>
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><SiAffinitydesigner className="w-6 h-6" /><span className="text-sm font-medium">Affinity</span></div>
          </motion.div>
        </section>

        {/* What I Offer Section - bg-background */}
        <section className="py-24 bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-12 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold" style={{ marginLeft: "-0.08em" }}>What I Offer</h2>
              <p className="text-xl text-bodytext font-light">Specialized design services tailored to your needs.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="bg-white p-10 rounded-3xl border border-cloud shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-display font-bold text-headline mb-4">Brand Identity</h3>
                <p className="text-base text-bodytext font-light leading-relaxed">
                  Logos, style guides, and complete visual systems that ensure your brand is consistent, memorable, and professional across all mediums.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="bg-white p-10 rounded-3xl border border-cloud shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-display font-bold text-headline mb-4">Marketing Materials</h3>
                <p className="text-base text-bodytext font-light leading-relaxed">
                  From eye-catching roller banners to event flyers and business cards, I design physical touchpoints that leave a lasting impression.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="bg-white p-10 rounded-3xl border border-cloud shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-display font-bold text-headline mb-4">Digital Content</h3>
                <p className="text-base text-bodytext font-light leading-relaxed">
                  Engaging social media posts, custom character designs, and digital art tailored to boost your online presence and tell your story.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Grid - bg-white */}
        <section className="py-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-12 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold" style={{ marginLeft: "-0.08em" }}>Featured Bundles</h2>
              <p className="text-xl text-bodytext font-light">A collection of designs from my previous graphic design work.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {graphicProjects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} variants={fadeUp}
                  className="group cursor-pointer flex flex-col"
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveModalImage(project.cover);
                  }}
                >
                  <div className="relative w-full aspect-[4/3] mb-6 z-10 group-hover:z-20">
                    {/* Stack 2 */}
                    {project.images.length > 2 && (
                      <div className="absolute inset-0 rounded-2xl transform transition-all duration-500 origin-bottom group-hover:rotate-[8deg] group-hover:translate-x-5 group-hover:-translate-y-2 shadow-lg border-8 border-white overflow-hidden z-0 opacity-0 group-hover:opacity-100 bg-cloud">
                        <img src={project.images[2]} alt="" className="w-full h-full object-cover opacity-90" loading="lazy" />
                      </div>
                    )}
                    {/* Stack 1 */}
                    {project.images.length > 1 && (
                      <div className="absolute inset-0 rounded-2xl transform transition-all duration-500 origin-bottom group-hover:-rotate-[8deg] group-hover:-translate-x-5 group-hover:-translate-y-2 shadow-lg border-8 border-white overflow-hidden z-0 opacity-0 group-hover:opacity-100 bg-cloud">
                        <img src={project.images[1]} alt="" className="w-full h-full object-cover opacity-90" loading="lazy" />
                      </div>
                    )}
                    
                    {/* Main Card */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden bg-background shadow-md group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4 border-8 border-white z-10">
                      <img 
                        src={project.cover} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-headline/0 group-hover:bg-headline/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-white text-headline px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Bundle
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-cta mb-2">{project.category}</p>
                  <h3 className="text-2xl font-display text-headline font-semibold group-hover:text-cta transition-colors">{project.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Contact CTA */}
      <section className="pt-24 pb-0 bg-background border-t border-cloud/30 mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-headline mb-6 font-bold">Need something designed?</h2>
          <p className="text-xl text-bodytext font-light mb-10 max-w-2xl mx-auto">Logos, social content, planners, merch, characters — commissions and freelance work welcome.</p>
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <a href="mailto:nadiahossny426@gmail.com?subject=Inquiry from Portfolio: Graphic Design" className="inline-flex items-center gap-2 px-6 py-4 bg-cta text-white rounded-full font-medium hover:bg-cta/90 transition-all shadow-md">
              <Mail className="w-5 h-5" /> Email
            </a>
            <a href="https://wa.me/201234567890?text=Hello!%20I'm%20reaching%20out%20from%20your%20graphic%20design%20portfolio." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 bg-headline text-white rounded-full font-medium hover:bg-headline/90 transition-all shadow-md">
              <FaWhatsapp className="w-5 h-5" /> WhatsApp
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-4 bg-white text-headline border-2 border-headline rounded-full font-medium hover:bg-cloud/50 transition-all shadow-sm">
              Contact Form
            </a>
            <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-headline border border-cloud rounded-full font-medium hover:bg-background transition-all shadow-sm">
              Back to product design
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-headline/40 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden relative my-auto max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 px-8 py-6 border-b border-cloud/30 flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-cta mb-1">{selectedProject.category}</p>
                  <h2 className="text-3xl font-display text-headline font-bold">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-3 bg-background hover:bg-cloud-light text-headline rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="p-8 overflow-y-auto flex-1 flex flex-col items-center">
                
                {/* Main Big Image */}
                <div className="w-full max-w-4xl min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-cloud/20 bg-background flex justify-center items-center mb-8 relative">
                  {!activeModalImage && !selectedProject.cover && (
                    <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-cloud/20"></div>
                  )}
                  <img src={activeModalImage || selectedProject.cover} alt={selectedProject.title} className="w-full h-auto max-h-[70vh] object-contain" />
                </div>

                {/* Description */}
                <div className="prose prose-lg prose-p:text-bodytext prose-p:font-light w-full max-w-4xl mb-12">
                  <p className="text-lg leading-relaxed">{selectedProject.story}</p>
                </div>

                {/* Thumbnail Strip */}
                {selectedProject.images.length > 1 && (
                  <div className="w-full max-w-4xl">
                    <h3 className="text-lg font-bold text-headline mb-4">More from this bundle</h3>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.images.map((img: string, idx: number) => (
                        <button 
                          key={idx} 
                          onClick={() => setActiveModalImage(img)}
                          className={`relative rounded-lg overflow-hidden border-2 transition-all ${activeModalImage === img ? 'border-cta scale-105 shadow-md' : 'border-transparent hover:border-cloud-dark opacity-70 hover:opacity-100'} w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-background`}
                        >
                          <img src={img} alt={`${selectedProject.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}