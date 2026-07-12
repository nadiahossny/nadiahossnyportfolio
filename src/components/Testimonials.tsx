import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useLang } from "../contexts/LanguageContext";

const getItems = (t: (en: string, ar: string) => string) => [
  {
    name: t("CTO", "المدير التقني"),
    title: "Revelio",
    quote: t(
      "Having selected Nadia for roles in a student organization, a creative project, and my own startup, I can say without hesitation that she is one of the most reliable and passionate professionals I have ever worked with. Her ability to execute tasks flawlessly, manage her time effectively, and proactively learn new skills is remarkable.",
      "بعد اختياري لنادية لأدوار في منظمة طلابية ومشروع إبداعي وشركتي الناشئة، أستطيع القول بلا تردد أنها واحدة من أكثر المحترفين شغفاً وموثوقية الذين عملت معهم. قدرتها على تنفيذ المهام ببراعة، وإدارة وقتها بفعالية، وتعلم مهارات جديدة بشكل استباقي هي قدرة ملحوظة."
    ),
  },
  {
    name: t("HR Manager", "مدير الموارد البشرية"),
    title: "Revelio",
    quote: t(
      "Nadia has an exceptional eye for design and a strong ability to translate abstract ideas into visuals that communicate clearly and creatively. She combines modern aesthetics with originality while maintaining consistency with brand identity. Her work always reflects professionalism, attention to detail, and a deep understanding of design principles.",
      "تتمتع نادية بنظرة استثنائية للتصميم وقدرة قوية على ترجمة الأفكار المجردة إلى صور تتواصل بوضوح وإبداع. تجمع بين الجماليات الحديثة والأصالة مع الحفاظ على الاتساق مع هوية العلامة التجارية."
    ),
  },
  {
    name: t("Client", "عميل"),
    title: "Codeify Modern Development",
    quote: t(
      "Nadia delivered outstanding work on our last campaign. Her creativity in design, attention to detail, and strategic approach to social media elevated the entire project. Her ability to blend strong visuals with clear messaging drove excellent engagement and results. Nadia's dedication, innovation, and leadership set a high standard.",
      "قدمت نادية عملاً رائعاً في حملتنا الأخيرة. إبداعها في التصميم، واهتمامها بالتفاصيل، ونهجها الاستراتيجي في وسائل التواصل الاجتماعي ارتقى بالمشروع بأكمله."
    ),
  },
  {
    name: t("Mohamed Wael", "محمد وائل"),
    title: t("Full Stack Engineer @ Nervo | Web Design Instructor @ NTI", "مهندس Full Stack @ Nervo | مدرب تصميم مواقع @ NTI"),
    quote: t(
      "I had the pleasure of teaching Nadia Hossny during her training course at NTI. Nadia stood out for her attention to detail, problem-solving mindset, and ability to deliver clean, well-organized results. I highly recommend her for any opportunity related to frontend or software development.",
      "لقد كان من دواعي سروري تدريس نادية حسني خلال دورتها التدريبية في NTI. برزت نادية باهتمامها بالتفاصيل وعقلية حل المشكلات والقدرة على تقديم نتائج نظيفة ومنظمة. أوصي بها بشدة لأي فرصة تتعلق بتطوير الواجهات الأمامية أو البرمجيات."
    ),
  },
];

export const Testimonials = () => {
  const { t } = useLang();
  const items = getItems(t);
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const totalPages = Math.ceil(items.length / 2);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, totalPages]);

  return (
    <section id="testimonials" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-primary/40 rounded-full"></span>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{t("Words from colleagues and clients", "كلمات من زملاء العمل والعملاء")}</span>
          </div>
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
            {t("Collaborations & ", "تعاون و")}<span className="text-gradient">{t("Feedback.", "آراء.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("What people I've worked with have to say.", "ما يقوله الأشخاص الذين عملت معهم.")}
          </p>
        </motion.div>

        <div className="relative px-4 md:px-0 mx-auto">
          
          <div 
            className="relative overflow-hidden w-full rounded-[2.5rem] bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-auto min-h-[420px] md:min-h-[360px] p-8 md:p-12 cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full"
              >
                {items.slice(page * 2, page * 2 + 2).map((item, i) => (
                  <figure key={i} className="flex flex-col items-start text-start w-full h-full bg-white/40 p-6 rounded-2xl border border-white/50 shadow-sm transition-smooth hover:shadow-md hover:bg-white/60">
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <blockquote className="text-base md:text-lg leading-relaxed flex-1 font-medium text-foreground/90">
                      "{item.quote}"
                    </blockquote>
                    <div className="mt-6 pt-6 w-full flex flex-col border-t border-border/50">
                      <div className="font-display text-base font-bold text-foreground">{item.name}</div>
                      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">
                        {item.title}
                      </div>
                    </div>
                  </figure>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-8 bg-primary" : "w-4 bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
