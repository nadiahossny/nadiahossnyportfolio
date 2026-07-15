import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";
import profile from "@/assets/profile.jpg";
import heroSky from "@/assets/hero-sky.jpg";

export const Hero = () => {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative flex items-center overflow-hidden pt-32 pb-12 md:pt-40 lg:pb-12">
      {/* Ghibli sky backdrop */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ backgroundImage: `url(${heroSky})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background" aria-hidden />

      {/* Define Gradient for Social Icons */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(212, 78%, 52%)" />
          <stop offset="100%" stopColor="hsl(200, 95%, 70%)" />
        </linearGradient>
      </svg>

      <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          
          <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl mb-6 pb-2 text-gradient leading-tight lg:leading-[1.1]">
            {t("Product Designer", "مصممة منتجات")}
          </h1>
          
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl leading-relaxed mb-8">
            {t(
              "I ship cross-platform products end to end — from user research to production-ready React and Flutter interfaces.",
              "أقوم ببناء المنتجات متعددة المنصات من البداية للنهاية — بدءاً من أبحاث المستخدمين وصولاً إلى واجهات React و Flutter الجاهزة للإنتاج."
            )}
          </p>

          <div className="inline-flex flex-col gap-8 w-full sm:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
              <a href="#work" className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02] btn-hover-hollow whitespace-nowrap">
                {t("View My Work", "عرض أعمالي")}
                {lang === "ar" ? <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </a>
              <a href="#contact" className="group flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-sm font-semibold text-black transition-smooth hover:bg-neutral-100 hover:scale-[1.02] whitespace-nowrap">
                {t("Let's Connect", "لنتواصل")}
              </a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center md:justify-start gap-4 sm:gap-6 w-full"
            >
              <a href="https://github.com/nadiahossny" target="_blank" rel="noreferrer" className="group grid h-[64px] w-[64px] place-items-center rounded-full bg-white border border-border/80 transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary/5 hover:border-primary/30 shadow-sm hover:shadow-md" aria-label="GitHub">
                  <FaGithub className="h-6 w-6 transition-transform group-hover:scale-110" style={{ fill: "url(#icon-gradient)" }} />
              </a>
              <a href="https://linkedin.com/in/nadiahossny" target="_blank" rel="noreferrer" className="group grid h-[64px] w-[64px] place-items-center rounded-full bg-white border border-border/80 transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary/5 hover:border-primary/30 shadow-sm hover:shadow-md" aria-label="LinkedIn">
                  <FaLinkedin className="h-6 w-6 transition-transform group-hover:scale-110" style={{ fill: "url(#icon-gradient)" }} />
              </a>
              <a href="https://www.behance.net/nadiahossny" target="_blank" rel="noreferrer" className="group grid h-[64px] w-[64px] place-items-center rounded-full bg-white border border-border/80 transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary/5 hover:border-primary/30 shadow-sm hover:shadow-md" aria-label="Behance">
                  <FaBehance className="h-[22px] w-[22px] transition-transform group-hover:scale-110" style={{ fill: "url(#icon-gradient)" }} />
              </a>
              <a href="mailto:nadiahossny426@gmail.com" className="group grid h-[64px] w-[64px] place-items-center rounded-full bg-white border border-border/80 transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary/5 hover:border-primary/30 shadow-sm hover:shadow-md" aria-label="Email">
                  <Mail className="h-6 w-6 transition-transform group-hover:scale-110" style={{ stroke: "url(#icon-gradient)" }} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[280px] md:max-w-sm lg:max-w-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-full glass p-2 shadow-2xl">
            <img 
              src={profile} 
              alt="Nadia Hossny" 
              className="w-full h-full object-cover object-top rounded-full"
              loading="lazy"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-primary blur-[40px] opacity-40 z-[-1]"></div>
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-sky-300 blur-[40px] opacity-40 z-[-1]"></div>
          </div>
          
          {/* Aesthetic CSS Cloud 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-4 -left-2 z-20 drop-shadow-lg opacity-90"
          >
            <div className="aesthetic-cloud" style={{ transform: 'scale(0.4)', transformOrigin: 'bottom left' }}></div>
          </motion.div>

          {/* Aesthetic CSS Cloud 2 */}
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute top-8 -right-4 z-20 drop-shadow-lg opacity-90"
          >
            <div className="aesthetic-cloud" style={{ transform: 'scale(0.4)', transformOrigin: 'top right' }}></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
