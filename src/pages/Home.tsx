import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { caseStudies } from '../data/caseStudies';
import CaseStudyModal from '../components/CaseStudyModal';
import { ArrowRight, ArrowDown, CheckCircle2, Mail } from 'lucide-react';
import { SiFigma, SiFlutter, SiReact, SiNextdotjs } from 'react-icons/si';
import { FaLinkedin, FaBehance, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/nadia_hero_avatar.jpg';
import aboutPhoto from '../assets/about-photo.jpg';
import heroBg from '../assets/cloudy-bg.png';
import MoreWorkModal from '../components/MoreWorkModal';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

const testimonialsData = [
  {
    text: "Having selected Nadia for roles in a student organization, a creative project, and my own startup, I can say without hesitation that she is one of the most reliable and passionate professionals I have ever worked with. Her ability to execute tasks flawlessly, manage her time effectively, and proactively learn new skills is remarkable.",
    name: "Revelio",
    role: "CTO @ Revelio"
  },
  {
    text: "Nadia delivered outstanding work on our last campaign. Her creativity in design, attention to detail, and strategic approach to social media elevated the entire project. Her ability to blend strong visuals with clear messaging drove excellent engagement and results. Nadia's dedication, innovation, and leadership set a high standard.",
    name: "Codeify Modern Development",
    role: "Client"
  },
  {
    text: "Nadia has an exceptional eye for design and a strong ability to translate abstract ideas into visuals that communicate clearly and creatively. She combines modern aesthetics with originality while maintaining consistency with brand identity. Her work always reflects professionalism, attention to detail, and a deep understanding of design principles.",
    name: "Revelio",
    role: "HR Manager @ Revelio"
  },
  {
    text: "I had the pleasure of teaching Nadia Hossny during her training course at NTI. Nadia stood out for her attention to detail, problem-solving mindset, and ability to deliver clean, well-organized results. I highly recommend her for any opportunity related to frontend or software development.",
    name: "Mohamed Wael",
    role: "Full Stack Engineer @ Nervo | Web Design Instructor @ NTI"
  }
];

export default function Home() {
  const { hash } = useLocation();
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);
  const [isMoreWorkModalOpen, setIsMoreWorkModalOpen] = useState(false);

  // Testimonial Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  useEffect(() => {
    if (isTestimonialHovered) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isTestimonialHovered]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full bg-white text-bodytext min-h-screen font-sans selection:bg-cloud selection:text-headline overflow-hidden">
      <Helmet>
        <title>Nadia Hossny | Product Designer & UI/UX Specialist</title>
        <meta name="description" content="Nadia Hossny is a Product Designer and UI/UX Specialist with a background in software development. Explore her portfolio of intuitive, user-centered digital products." />
        <meta name="keywords" content="Nadia Hossny, Product Designer, UI/UX Designer, UX Researcher, Frontend Developer, Web Design, Egypt" />
        <meta property="og:title" content="Nadia Hossny | Product Designer" />
        <meta property="og:description" content="Explore the portfolio of Nadia Hossny, a product designer focused on bridging the gap between aesthetics and function." />
      </Helmet>
      {selectedStudy && (
        <CaseStudyModal 
          id={selectedStudy} 
          onClose={() => setSelectedStudy(null)} 
        />
      )}
      <MoreWorkModal 
        isOpen={isMoreWorkModalOpen} 
        onClose={() => setIsMoreWorkModalOpen(false)} 
      />
      {/* Full Screen Hero + Tools Strip Container */}
      <div className="min-h-[100svh] flex flex-col">
        {/* 1. Hero Section */}
        <section className="flex-1 relative w-full flex items-center justify-center pt-32 pb-12 px-6 overflow-hidden">
          {/* Soft parallax cloud background - RESTORED */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute inset-0 bg-background"></div> {/* Base sky color */}
            <motion.img 
              src={heroBg} 
              alt="Cloud background" 
              className="w-full h-full object-cover opacity-80 origin-center" 
              animate={{ 
                scale: [1, 1.08, 1],
                x: [0, 15, -5, 0],
                y: [0, -15, 5, 0]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-4xl mx-auto text-center pt-12 md:pt-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display text-headline font-bold mb-8 flex items-center justify-center flex-wrap gap-x-4 gap-y-2"
            >
              Hi, 
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }} 
                animate={{ opacity: 1, scale: 1, rotate: -5 }} 
                whileHover={{ rotate: 2, scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }} 
                className="inline-block relative -mt-2 md:-mt-4 mx-3 md:mx-5 cursor-pointer z-20"
              >
                <img src={profileImg} alt="Nadia Hossny" className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl md:rounded-[2rem] object-cover shadow-lg border-[3px] md:border-4 border-white grayscale hover:grayscale-0 transition-all duration-500" />
              </motion.div>
              I'm Nadia!
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-bodytext font-light leading-relaxed max-w-3xl mx-auto mb-16"
            >
              A product designer with a development background. <br className="hidden md:block" />
              I find real problems — then design and build the solution myself.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <a href="#work" className="animate-bounce inline-flex items-center justify-center p-4 rounded-full text-headline hover:text-cta transition-colors" style={{ animationDuration: '2.5s' }}>
                <ArrowDown className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. Trust Strip */}
        <section className="py-10 border-y border-headline/10 bg-white relative z-10 shrink-0">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-80">
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><SiFigma className="w-6 h-6" /><span className="text-sm font-medium">Figma</span></div>
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><SiFlutter className="w-6 h-6" /><span className="text-sm font-medium">Flutter</span></div>
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><SiReact className="w-6 h-6" /><span className="text-sm font-medium">React</span></div>
            <div className="flex items-center gap-3 text-headline hover:text-cta transition-colors duration-300 cursor-default"><SiNextdotjs className="w-6 h-6" /><span className="text-sm font-medium">Next.js</span></div>
          </div>
        </section>
      </div>

      {/* 3. Selected Work */}
      <section id="work" className="py-24 bg-background relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="mb-16 md:mb-24 flex flex-col items-start gap-2"
          >
            <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold" style={{ marginLeft: "-0.08em" }}>Selected Projects</h2>
            <p className="text-xl text-bodytext font-light">Featured case studies.</p>
          </motion.div>

          <div className="space-y-16 md:space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                className={`flex flex-col gap-10 md:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                <div className="w-full lg:w-3/5">
                  <button 
                    onClick={() => setSelectedStudy(study.id)}
                    className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-cloud relative shadow-sm hover:shadow-md group transition-all"
                  >
                    <div className="absolute inset-0 bg-headline/0 group-hover:bg-headline/5 transition-colors duration-500 z-10"></div>
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </button>
                </div>
                <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                  <h3 className="text-2xl font-display font-semibold text-headline mb-4">{study.title}</h3>
                  <p className="text-base text-bodytext font-light leading-relaxed mb-8">
                    {study.outcome || study.hook}
                  </p>
                  <button 
                    onClick={() => setSelectedStudy(study.id)}
                    className="group flex items-center gap-2 text-cta font-medium border-b border-cta/30 pb-1 hover:border-cta transition-colors text-sm"
                  >
                    Read case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button 
              onClick={() => setIsMoreWorkModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-headline text-white rounded-full font-medium hover:bg-cta transition-all shadow-sm group text-sm"
            >
              View More Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3.75 Testimonials Carousel */}
      <section className="py-24 bg-white border-y border-headline/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold">Testimonials</h2>
            <p className="text-xs font-bold tracking-widest uppercase text-cta">Collaborations & Feedback</p>
          </motion.div>
          
          <div 
            className="relative min-h-[350px] md:min-h-[250px] flex items-center justify-center w-full max-w-4xl mx-auto"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
            onTouchStart={() => setIsTestimonialHovered(true)}
            onTouchEnd={() => setIsTestimonialHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center px-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -50) {
                    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
                  } else if (offset.x > 50) {
                    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
                  }
                }}
              >
                <p className="text-lg md:text-xl text-headline font-light leading-relaxed mb-8 max-w-3xl">
                  "{testimonialsData[currentTestimonial].text}"
                </p>
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-headline font-medium text-sm">{testimonialsData[currentTestimonial].name}</h4>
                  <p className="text-xs text-bodytext opacity-70 uppercase tracking-widest">{testimonialsData[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute -bottom-8 flex gap-3 justify-center w-full">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-cta w-8' : 'bg-headline/20 hover:bg-headline/40 w-2'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Me (Minimalist Layout) */}
      <section id="about" className="py-24 bg-background relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-center">
            
            {/* Left: Image */}
            <div className="w-full max-w-[320px] mx-auto md:mx-0">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-md transition-all duration-500 hover:rotate-3 hover:scale-105 border-4 border-white">
                 <img src={aboutPhoto} alt="Nadia Hossny" className="w-full h-full object-cover" />
               </div>
            </div>
            
            {/* Right: Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold" style={{ marginLeft: "-0.08em" }}>The Backstory</h2>
              <p className="text-xl text-bodytext font-light mb-8">How I got here.</p>
              <div className="space-y-6 text-base text-bodytext font-light leading-relaxed">
                <p className="text-base text-bodytext font-light leading-relaxed mb-6 max-w-prose">
                  I didn't start out trying to be a designer or a developer. I started with a creative instinct — an empty canvas, and the urge to fill it. 
                </p>
                <p className="text-base text-bodytext font-light leading-relaxed mb-6 max-w-prose">
                  Learning to code turned that instinct into something that worked, not just looked good. Discovering UI/UX taught me that function and beauty aren't separate jobs. 
                </p>
                <p className="text-base text-bodytext font-light leading-relaxed max-w-prose">
                  But the real shift came when I asked myself: <span className="font-display italic text-headline text-lg">there are already a thousand apps out there — why build another one?</span>
                </p>
                <p className="text-base text-bodytext font-light leading-relaxed mb-10 max-w-prose">
                  The answer became my compass: find a real problem, and be part of building the solution. That's what I do now, across design and development — not chasing tools, chasing problems worth solving.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-8 mb-6">
                <span className="px-4 py-1.5 bg-white border border-cloud/40 shadow-sm text-headline rounded-full text-[11px] font-bold tracking-widest uppercase">Product Design</span>
                <span className="px-4 py-1.5 bg-white border border-cloud/40 shadow-sm text-headline rounded-full text-[11px] font-bold tracking-widest uppercase">Frontend Dev</span>
                <span className="px-4 py-1.5 bg-white border border-cloud/40 shadow-sm text-headline rounded-full text-[11px] font-bold tracking-widest uppercase">UI / UX</span>
              </div>
              
              <div className="pt-6 border-t border-headline/10 text-sm font-light">
                <p className="mb-2">Based in Alexandria, Egypt 🇪🇬</p>
                <p>
                  I also design brand visuals and social content — <Link to="/graphic-design" className="text-cta hover:underline font-medium">see examples &rarr;</Link>
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 5. My Approach */}
      <section className="w-full bg-white py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold" style={{ marginLeft: "-0.08em" }}>My Approach</h2>
            <p className="text-xl text-bodytext font-light">Principles that guide my work.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Clarity over cleverness", desc: "If a user has to think about how to use it, the design has failed." },
              { title: "Done > Perfect", desc: "Shipping real value beats polishing an idea that never sees the light of day." },
              { title: "Design is systematic", desc: "Every component should belong to a cohesive language, not stand alone." },
              { title: "Function first", desc: "Aesthetics support the goal, they don't replace it." }
            ].map((principle, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} variants={fadeUp}
                className="bg-background p-10 rounded-3xl shadow-sm border border-cloud/50 hover:shadow-cloud transition-shadow duration-300"
              >
                <h3 className="text-xl font-display text-headline mb-3">{principle.title}</h3>
                <p className="text-bodytext font-light text-sm leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section className="py-32 bg-background relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold">How I Work</h2>
            <p className="text-xl text-bodytext font-light">A structured process for chaotic problems.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Understand", desc: "Deep diving into the problem space, user research, and technical constraints before drawing a single pixel." },
              { step: "02", title: "Design & Build", desc: "Translating insights into wireframes, high-fidelity designs, and finally, robust code." },
              { step: "03", title: "Test & Deliver", desc: "Validating the solution with real users, refining based on feedback, and shipping the final product." }
            ].map((process, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} variants={fadeUp}
                className="flex flex-col gap-6 bg-white p-8 md:p-10 rounded-[2rem] items-start border border-cloud/30 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-6xl font-display text-cta font-light opacity-30 mb-2">{process.step}</div>
                <div>
                  <h3 className="text-xl font-medium text-headline mb-3">{process.title}</h3>
                  <p className="text-bodytext font-light text-base leading-relaxed">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What Clients Get */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold" style={{ marginLeft: "-0.08em" }}>What you get when we work together</h2>
            <p className="text-xl text-bodytext font-light mb-12">The value beyond the pixels.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-background p-8 md:p-12 rounded-3xl border border-cloud/30">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-cta shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl text-headline font-medium mb-2">A technical partner</h4>
                  <p className="text-bodytext font-light">I don't just hand off Figma files. I understand how to build them.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-cta shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl text-headline font-medium mb-2">Systems thinking</h4>
                  <p className="text-bodytext font-light">Scalable design systems that grow with your product.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-cta shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl text-headline font-medium mb-2">Reduced cognitive load</h4>
                  <p className="text-bodytext font-light">Interfaces that feel effortless for your users.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-cta shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl text-headline font-medium mb-2">Clear communication</h4>
                  <p className="text-bodytext font-light">No black boxes. You'll know exactly what's happening and why.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="relative w-full pt-32 pb-4 flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold" style={{ marginLeft: "-0.08em" }}>Let's work together.</h2>
            <p className="text-xl text-bodytext font-light">Fill out the form below or choose how you'd like to reach out.</p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <motion.form 
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} variants={fadeUp}
              className="flex-[2] flex flex-col gap-4"
              action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
            >
              <input type="text" name="Name" placeholder="Your Name" required className="w-full px-6 py-4 rounded-3xl border border-cloud bg-white focus:outline-none focus:border-cta transition-colors" />
              <input type="email" name="Email" placeholder="Your Email" required className="w-full px-6 py-4 rounded-3xl border border-cloud bg-white focus:outline-none focus:border-cta transition-colors" />
              <textarea name="Message" placeholder="Tell me about your project..." required rows={5} className="w-full px-6 py-4 rounded-3xl border border-cloud bg-white focus:outline-none focus:border-cta transition-colors resize-none"></textarea>
              <button type="submit" className="w-full py-4 bg-cta text-white rounded-full font-medium text-lg hover:bg-headline transition-colors shadow-sm hover:shadow mt-2">Send Message</button>
            </motion.form>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={fadeUp}
              className="flex-1 flex flex-col gap-4"
            >
              <a href="mailto:nadiahossny426@gmail.com?subject=Inquiry from Portfolio: Product Design" className="group flex items-center gap-4 text-bodytext hover:text-cta transition-colors p-5 rounded-2xl bg-white border border-cloud hover:border-cta/30 hover:bg-cta/5 shadow-sm hover:shadow-md">
                <Mail className="w-7 h-7" />
                <div className="flex flex-col text-left">
                  <span className="font-medium text-headline group-hover:text-cta transition-colors">Email</span>
                  <span className="text-sm opacity-70">nadiahossny426@gmail.com</span>
                </div>
              </a>
              <a href="https://wa.me/201234567890?text=Hello!%20I'm%20reaching%20out%20from%20your%20product%20design%20portfolio." target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-bodytext hover:text-cta transition-colors p-5 rounded-2xl bg-white border border-cloud hover:border-cta/30 hover:bg-cta/5 shadow-sm hover:shadow-md">
                <FaWhatsapp className="w-7 h-7" />
                <div className="flex flex-col text-left">
                  <span className="font-medium text-headline group-hover:text-cta transition-colors">WhatsApp</span>
                  <span className="text-sm opacity-70">Send a message</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/nadiahossny" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-bodytext hover:text-cta transition-colors p-5 rounded-2xl bg-white border border-cloud hover:border-cta/30 hover:bg-cta/5 shadow-sm hover:shadow-md">
                <FaLinkedin className="w-7 h-7" />
                <div className="flex flex-col text-left">
                  <span className="font-medium text-headline group-hover:text-cta transition-colors">LinkedIn</span>
                  <span className="text-sm opacity-70">Let's connect</span>
                </div>
              </a>
              <a href="https://behance.net/nadiahossny" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-bodytext hover:text-cta transition-colors p-5 rounded-2xl bg-white border border-cloud hover:border-cta/30 hover:bg-cta/5 shadow-sm hover:shadow-md">
                <FaBehance className="w-7 h-7" />
                <div className="flex flex-col text-left">
                  <span className="font-medium text-headline group-hover:text-cta transition-colors">Behance</span>
                  <span className="text-sm opacity-70">View more work</span>
                </div>
              </a>
            </motion.div>
          </div>
          
          {/* Cross-navigation to Graphic Design */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} 
            className="mt-24 pt-12 border-t border-cloud/30 text-center"
          >
            <h3 className="text-xl md:text-2xl font-display text-headline mb-4 font-semibold">Looking for brand identity or visual design?</h3>
            <p className="text-bodytext font-light mb-6">I also do illustrations, logos, and print materials.</p>
            <Link to="/graphic-design" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-headline border border-cloud rounded-full font-medium hover:bg-cloud/20 transition-all shadow-sm group">
              Explore Graphic Design Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
