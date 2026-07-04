import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import { FaReact, FaFigma, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";


const devSkills = [
  { 
    name: "Flutter", 
    color: "text-[#02569B]", 
    bg: "bg-[#02569B]/10",
    icon: SiFlutter
  },
  { 
    name: "React.js", 
    color: "text-[#61DAFB]", 
    bg: "bg-[#61DAFB]/10",
    icon: FaReact
  }
];

const designSkills = [
  { 
    name: "UX Flows & Journeys", 
    color: "text-[#8B5CF6]", 
    bg: "bg-[#8B5CF6]/10",
    icon: MdOutlineDesignServices
  },
  { 
    name: "Information Architecture (IA)", 
    color: "text-[#10B981]", 
    bg: "bg-[#10B981]/10",
    icon: FaProjectDiagram
  },
  { 
    name: "Figma (Core)", 
    color: "text-[#F24E1E]", 
    bg: "bg-[#F24E1E]/10",
    icon: FaFigma
  },
  { 
    name: "Usability Testing", 
    color: "text-[#06B6D4]", 
    bg: "bg-[#06B6D4]/10",
    icon: FaUsers
  }
];

export const About = () => {
  const { t } = useLang();

  const timeline = [
    {
      type: "tech",
      date: t("2024 - Present", "2024 - الحاضر"),
      title: t("Roshetety (PharmaSys)", "روشيتتي (فارماسيس)"),
      desc: t("Designed and engineered a full-stack pharmacy automation system integrating a Flutter/Node.js architecture with a robotic dispensing arm, reducing pharmacist cognitive load.", "صممت وطورت نظام أتمتة صيدليات متكامل يجمع بين Flutter و Node.js مع ذراع روبوتي لتقليل العبء المعرفي على الصيدلي."),
    },
    {
      type: "academic",
      date: t("Oct 2024 - May 2025", "أكتوبر 2024 - مايو 2025"),
      title: t("UI/UX Intern @ DEPI", "متدرب تصميم واجهات @ DEPI"),
      desc: t("Conducted structured UX research and translated findings into interface redesigns. Designed high-fidelity prototypes and collaborated cross-functionally with engineering teams.", "أجريت أبحاث تجربة المستخدم وحولتها إلى تصميمات حسنت تدفق العمل. صممت نماذج تفاعلية عالية الدقة بالتعاون مع فرق الهندسة."),
    },
    {
      type: "academic",
      date: t("Jul 2025 - Sep 2025", "يوليو 2025 - سبتمبر 2025"),
      title: t("Frontend Intern @ NTI", "متدرب مطور واجهات أمامية @ NTI"),
      desc: t("Built and shipped production React.js components with a focus on rendering performance. Optimized frontend data-fetching patterns for faster load times.", "طورت مكونات React.js للإنتاج مع التركيز على الأداء. حسّنت أنماط جلب البيانات لواجهات أسرع استجابة."),
    },
    {
      type: "academic",
      date: t("2023 - 2024", "2023 - 2024"),
      title: t("Vice Head of Web Dev @ IEEE", "نائب رئيس تطوير الويب @ IEEE"),
      desc: t("Led a web development team, establishing code review practices. Designed and maintained the branch's public-facing web presence using React.js.", "قدت فريق تطوير الويب، ووضعت معايير مراجعة الأكواد. صممت وطورت موقع الفرع باستخدام React.js."),
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary mb-4">
            {t("About Me", "نبذة عني")}
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl mb-6">
            {t("Passion for empathetic design and ", "شغف بالتصميم المتعاطف و")}<span className="text-gradient">{t("scalable architecture.", "البنية القابلة للتطوير.")}</span>
          </h2>
          <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
            <p>
              {t(
                "I'm a Product Designer who approaches every product from the user's cognitive reality first — mapping mental models, reducing decision fatigue, and applying HCI principles before a single wireframe is drawn. My focus is on strong UX judgment and creating interfaces that intuitively guide users without overwhelming them.",
                "أنا مصممة منتجات أتعامل مع كل منتج من الواقع المعرفي للمستخدم أولاً — لتقليل إجهاد اتخاذ القرار وتطبيق مبادئ التفاعل قبل رسم أي إطار. أركز على جودة تجربة المستخدم وبناء واجهات توجه المستخدمين بسلاسة."
              )}
            </p>
            <p>
              {t(
                "With a technical fluency in frontend engineering, I don't just hand off mockups. I understand the constraints of the medium, enabling me to design feasible, scalable solutions and step in to build the actual application when needed.",
                "بفضل إلمامي بالتقنيات الهندسية، أنا لا أسلم التصاميم فقط. بل أفهم قيود البرمجة، مما يتيح لي تصميم حلول قابلة للتطوير والتدخل لبناء التطبيق الفعلي عند الحاجة."
              )}
            </p>
          </div>
          
          <div className="mt-10">
            <h3 className="font-display text-2xl font-bold mb-6">{t("Skills", "المهارات")}</h3>
            <div className="space-y-10">
               <div>
                <h4 className="font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5">{t("Build", "بناء")}</h4>
                <div className="flex flex-wrap gap-3">
                  {devSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="group flex items-center gap-3 rounded-full border border-primary/10 bg-white px-4 py-2 transition-all hover:border-primary/30 hover:shadow-md dark:bg-white/10 dark:hover:bg-white/20"
                    >
                      <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform group-hover:scale-110 ${skill.bg} ${skill.color}`}>
                        <skill.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/80 transition-colors group-hover:text-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5">{t("Design", "التصميم")}</h4>
                <div className="flex flex-wrap gap-3">
                  {designSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="group flex items-center gap-3 rounded-full border border-primary/10 bg-white px-4 py-2 transition-all hover:border-primary/30 hover:shadow-md dark:bg-white/10 dark:hover:bg-white/20"
                    >
                      <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform group-hover:scale-110 ${skill.bg} ${skill.color}`}>
                        <skill.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/80 transition-colors group-hover:text-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary mb-6">
            {t("Experience & Education", "الخبرة والتعليم")}
          </div>
          <div className="relative border-l border-primary/20 pl-8 ml-4 space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-background ring-4 ring-background shadow-sm bg-gradient-primary" />
                
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                    item.type === "academic" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent-foreground"
                  }`}>
                    {item.type === "academic" ? t("Education", "تعليم") : t("Experience", "خبرة")}
                  </span>
                  <div className={`font-mono text-xs font-semibold uppercase tracking-wider ${
                    item.type === "academic" ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {item.date}
                  </div>
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h4>
                {item.desc && <p className="text-muted-foreground leading-relaxed">{item.desc}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
