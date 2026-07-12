import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";
import profile from "@/assets/profile.jpg";
import heroSky from "@/assets/hero-sky.jpg";

export const Hero = () => {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 md:pt-28 md:pb-20">
      {/* Ghibli sky backdrop */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ backgroundImage: `url(${heroSky})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background" aria-hidden />

      <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          
          <h1 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-6 pb-2 text-gradient">
            {t("Product Design Engineer", "مهندسة تصميم منتجات")}
          </h1>
          
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl leading-relaxed mb-10">
            {t(
              "I ship cross-platform products end to end — from user research to production. I ground every interface decision in user data to reduce friction and deliver considered, accessible experiences.",
              "أقوم ببناء المنتجات من البداية للنهاية — من أبحاث المستخدمين إلى الإنتاج. أعتمد في كل قرار تصميمي على البيانات لتقليل الاحتكاك وتقديم تجارب سلسة ومدروسة."
            )}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a href="#work" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105">
              {t("View My Work", "عرض أعمالي")}
              {lang === "ar" ? <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </a>
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-sm font-semibold text-black transition-smooth hover:bg-neutral-100 hover:scale-105">
              {t("Let's Connect", "لنتواصل")}
            </a>
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
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-primary blur-[40px] opacity-40 z-[-1]"></div>
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-sky-300 blur-[40px] opacity-40 z-[-1]"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
