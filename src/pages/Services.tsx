import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/cloudy-bg.png';
// High-Res Assets
import imgBannerCmd from '../assets/graphic-design/banner cmd.png';
import imgBanner1 from '../assets/graphic-design/banner.png';
import imgBanner2 from '../assets/graphic-design/banner2.png';
import imgPosterFlyer from '../assets/graphic-design/poster-flyer.png';

import imgBusinessCard from '../assets/graphic-design/Business_Card_Mockup_3.png';
import imgIdCard from '../assets/graphic-design/id card buisness.png';
import imgGiftCard from '../assets/graphic-design/Free_Gift_Card_Mockup_4.png';

import imgChar from '../assets/graphic-design/character.png';
import imgCharDesign1 from '../assets/graphic-design/character design.png';
import imgCharDesign2 from '../assets/graphic-design/character_design.png';
import imgChar1 from '../assets/graphic-design/character1.png';
import imgChar2 from '../assets/graphic-design/character2.png';

import imgDigitalArtWave from '../assets/graphic-design/wave_digital_art.png';
import imgDigitalArtFan from '../assets/graphic-design/digital_art_fanart_of_a_character.jpg';
import imgDigitalArtQuote from '../assets/graphic-design/digital_art_quote.png';
import imgPalestine from '../assets/graphic-design/palastine_design.png';

import imgMagazine from '../assets/graphic-design/magazine cover.png';
import imgCert from '../assets/graphic-design/Certificate of Appreciation .png';

import imgLogosBunch from '../assets/graphic-design/bunch_of_logos_together_i_designed.png';
import imgIeeeLogo from '../assets/graphic-design/ieee_logo.png';
import imgPfsLogoRedesign from '../assets/graphic-design/pfs_logo_redesign.png';
import imgPfsLogo from '../assets/graphic-design/pfs_logo.png';

import imgSocial2 from '../assets/graphic-design/social media post (2).png';
import imgSocial1 from '../assets/graphic-design/social media post.png';
import imgSocialPosts1 from '../assets/graphic-design/social media posts1.png';
import imgSocialPython from '../assets/graphic-design/social media postPython.png';
import imgSocialDT from '../assets/graphic-design/social media post invitation dream team.png';
import imgDys from '../assets/graphic-design/dys_post_design.png';
import imgRamadan1 from '../assets/graphic-design/gdcs_ramadan_design.png';
import imgAlexDay from '../assets/graphic-design/gdsc_alexandria_day_design.png';
import imgHiring from '../assets/graphic-design/Hiring Post.png';
import imgPartnerAnnounce from '../assets/graphic-design/Partnership Announcement.png';
import imgPartner from '../assets/graphic-design/partnership.png';
import imgSightRamadan from '../assets/graphic-design/SIGHT RAMADAN GRAPHIC.png';
import imgStoryIeee from '../assets/graphic-design/story instagram ieee.png';

import imgStyleGuide from '../assets/graphic-design/style gide.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const graphicProjects = [
  {
    id: "banners",
    title: "Event Banners",
    category: "Print & Events",
    cover: imgBannerCmd,
    story: "Designed professional banners and flyers for various events, technical solutions, courses, and training programs.\n\nEmphasis on visual hierarchy, consistent typography, and bold brand presence. Designed to communicate expertise and professionalism at events, training sessions, and corporate settings.",
    images: [imgBannerCmd, imgBanner1, imgBanner2, imgPosterFlyer]
  },
  {
    id: "corporate-identity",
    title: "Business Identity",
    category: "Professional Branding",
    cover: imgBusinessCard,
    story: "A clean, structured design crafted to align with corporate branding standards. Every detail — from typography to layout — reflects the organization's visual identity, ensuring a polished and professional look across all staff materials.\n\nAttention to detail and consistent brand application are at the core of this design.",
    images: [imgBusinessCard, imgIdCard, imgGiftCard]
  },
  {
    id: "character-design",
    title: "Character Design",
    category: "Illustration",
    cover: imgChar,
    story: "Custom character and mascot designs developed to represent a friendly, approachable brand personality.\n\nThe characters were developed in multiple expressive poses to support diverse use cases — from digital campaigns to printed materials — ensuring consistent and engaging visual storytelling.",
    images: [imgChar, imgCharDesign1, imgCharDesign2, imgChar1, imgChar2]
  },
  {
    id: "digital-art",
    title: "Digital Art",
    category: "Illustration & Art",
    cover: imgDigitalArtWave,
    story: "A collection of personal and commissioned digital artworks, fanart, and quote illustrations.\n\nExperimenting with colors, textures, and lighting to create expressive and emotive pieces.",
    images: [imgDigitalArtWave, imgDigitalArtFan, imgDigitalArtQuote, imgPalestine]
  },
  {
    id: "magazine",
    title: "Magazine Cover",
    category: "Editorial",
    cover: imgMagazine,
    story: "A striking magazine cover design focusing on layout composition, typography, and captivating imagery to grab attention on the newsstand.",
    images: [imgMagazine]
  },
  {
    id: "certificates",
    title: "Certificates",
    category: "Editorial & Print",
    cover: imgCert,
    story: "Clean and professional certificate designs used for appreciation, course completion, and participation in various events and organizations.",
    images: [imgCert]
  },
  {
    id: "logos",
    title: "Logos",
    category: "Branding",
    cover: imgLogosBunch,
    story: "A collection of logo designs and redesigns for various clients, institutions, and initiatives.\n\nFocusing on simplicity, memorability, and scalability to ensure the logos work across all mediums.",
    images: [imgLogosBunch, imgIeeeLogo, imgPfsLogoRedesign, imgPfsLogo]
  },
  {
    id: "social-media",
    title: "Social Media Posts",
    category: "Digital Marketing",
    cover: imgSocialPosts1,
    story: "Creating engaging, consistent visuals across platforms and formats. A massive range of social media content spanning event promotions, workshops, holiday greetings, and educational snippets.\n\nEach post is crafted with engaging visuals, strong typography, and consistent branding to connect with audiences effectively.",
    images: [imgSocialPosts1, imgSocial2, imgSocial1, imgSocialPython, imgSocialDT, imgDys, imgRamadan1, imgAlexDay, imgHiring, imgPartnerAnnounce, imgPartner, imgSightRamadan, imgStoryIeee]
  },
  {
    id: "style-guide",
    title: "Brand Style Guide",
    category: "Dream Team",
    cover: imgStyleGuide,
    story: "Established a cohesive visual identity through color, typography, and brand standards.\n\nDeveloped a comprehensive brand style guide for Dream Team, defining color palettes, typography systems, and visual language. This guide ensures consistent brand application across all touchpoints — from digital to print.",
    images: [imgStyleGuide]
  }
];

export default function Services() {
  const [selectedProject, setSelectedProject] = useState<typeof graphicProjects[0] | null>(null);

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
      <nav className="relative z-10 p-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-bodytext hover:text-headline transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-display font-bold">Back to Home</span>
        </Link>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pb-32 pt-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-6xl md:text-7xl font-display font-bold text-headline mb-6 tracking-tight">Graphic Design</h1>
          <p className="text-2xl text-bodytext font-light leading-relaxed">
            A visual exploration of branding, illustration, and digital marketing. 
            Before diving into UI/UX, I spent years crafting visual identities and telling stories through pixels.
          </p>
        </motion.div>

        {/* What I Offer Section */}
        <div className="mb-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-12">
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

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphicProjects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} variants={fadeUp}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-background mb-6 relative shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={project.cover} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-headline/0 group-hover:bg-headline/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white text-headline px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Project
                  </span>
                </div>
              </div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-cta mb-2">{project.category}</p>
              <h3 className="text-2xl font-display text-headline font-semibold group-hover:text-cta transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </main>

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
              <div className="p-8 overflow-y-auto flex-1">
                <div className="prose prose-lg prose-p:text-bodytext prose-p:font-light max-w-3xl mb-12">
                  {selectedProject.story.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>

                <div className="space-y-8">
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-cloud/20 bg-background flex justify-center">
                      <img src={img} alt={`${selectedProject.title} ${idx + 1}`} className="w-full h-auto object-contain max-h-[70vh]" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}