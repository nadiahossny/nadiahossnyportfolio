import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import { FaReact, FaFigma, FaUsers, FaProjectDiagram, FaNodeJs, FaLayerGroup } from "react-icons/fa";
import { SiFlutter, SiPostgresql, SiFirebase } from "react-icons/si";
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
  },
  { 
    name: "Node.js", 
    color: "text-[#339933]", 
    bg: "bg-[#339933]/10",
    icon: FaNodeJs
  },
  { 
    name: "PostgreSQL", 
    color: "text-[#4169E1]", 
    bg: "bg-[#4169E1]/10",
    icon: SiPostgresql
  },
  { 
    name: "Firebase", 
    color: "text-[#FFCA28]", 
    bg: "bg-[#FFCA28]/10",
    icon: SiFirebase
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
    name: "Figma", 
    color: "text-[#F24E1E]", 
    bg: "bg-[#F24E1E]/10",
    icon: FaFigma
  },
  { 
    name: "User Research", 
    color: "text-[#06B6D4]", 
    bg: "bg-[#06B6D4]/10",
    icon: FaUsers
  },
  {
    name: "Design Systems",
    color: "text-[#EC4899]",
    bg: "bg-[#EC4899]/10",
    icon: FaLayerGroup
  }
];

export const About = () => {
  const { t } = useLang();

  const experienceTimeline = [
    {
      type: "tech",
      date: t("Nov 2025 - Present", "نوفمبر 2025 - الحاضر"),
      title: t("Freelance UX/UI & Graphic Designer", "مستقل تصميم واجهات وجرافيك"),
      desc: t("Partnering with clients to deliver end-to-end design solutions, from crafting complete brand identities to optimizing user flows and interfaces.", "أعمل مع العملاء لتقديم حلول تصميم متكاملة، بدءاً من صياغة هويات بصرية كاملة وحتى تحسين تدفقات وواجهات المستخدم."),
    },
    {
      type: "tech",
      date: t("Jul 2025 - Sep 2025", "يوليو 2025 - سبتمبر 2025"),
      title: t("Frontend Intern @ NTI", "متدرب مطور واجهات أمامية @ NTI"),
      desc: t("Built and shipped 10+ React.js applications with 100% cross-browser compatibility and live WCAG 2.1 AA accessibility compliance.", "طورت 10+ تطبيقات React.js بتوافق كامل مع المتصفحات ومتوافقة مع معايير الوصول WCAG 2.1 AA."),
    },
    {
      type: "leadership",
      date: t("Feb 2025 - Feb 2026", "فبراير 2025 - فبراير 2026"),
      title: t("Vice Head Web Dev @ IEEE-PUA", "نائب رئيس تطوير الويب @ IEEE-PUA"),
      desc: t("Designed and developed the official branch website. Managed team deliverables across concurrent cycles.", "صممت وطورت الموقع الرسمي للفرع. أدرت تسليمات الفريق عبر دورات تطوير متزامنة."),
    },
    {
      type: "tech",
      date: t("Oct 2024 - May 2025", "أكتوبر 2024 - مايو 2025"),
      title: t("UX/UI Intern @ DEPI", "متدرب تصميم واجهات @ DEPI"),
      desc: t("Designed 5+ mobile and web UIs based on user research. Conducted usability testing and maintained a shared component library.", "صممت 5+ واجهات مبنية على أبحاث المستخدمين. أجريت اختبارات قابلية الاستخدام وأدرت مكتبة مكونات مشتركة."),
    },

    {
      type: "tech",
      date: t("Jul 2024 - Oct 2024", "يوليو 2024 - أكتوبر 2024"),
      title: t("Mobile App Intern @ Route", "متدرب مطور تطبيقات @ Route"),
      desc: t("Architected 5 Flutter applications using BLoC/Provider state management and clean architecture principles.", "أسست 5 تطبيقات Flutter باستخدام BLoC/Provider ومبادئ البنية النظيفة Clean Architecture."),
    },
  ];

  const educationTimeline = [
    {
      type: "academic",
      date: t("Oct 2022 - Jun 2026", "أكتوبر 2022 - يونيو 2026"),
      title: t("B.Sc. in Computer Science & AI @ Pharos University", "بكالوريوس علوم حاسب وذكاء اصطناعي @ جامعة فاروس"),
      desc: t("Completed a comprehensive curriculum with a specialized focus on Software Engineering, Artificial Intelligence, and Human-Computer Interaction (HCI).", "أكملت منهجاً شاملاً بتركيز متخصص على هندسة البرمجيات، الذكاء الاصطناعي، وتفاعل الإنسان والحاسوب (HCI)."),
    },
  ];

  return (
    <section id="about" className="relative pt-8 pb-16 md:py-24">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-primary/40 rounded-full"></span>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{t("About Me", "نبذة عني")}</span>
          </div>
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
            {t("Passion for empathetic design and ", "شغف بالتصميم المتعاطف و")}<span className="text-gradient">{t("scalable architecture.", "البنية القابلة للتطوير.")}</span>
          </h2>
          <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
            <p>
              {t(
                "I'm a Computer Science & AI graduate and Product Designer/developer based in Alexandria, Egypt. I care about the decisions behind an interface as much as the interface itself: why a button sits where it does, how many taps stand between a user and their goal, what a color choice signals, and what a cluttered screen costs an older or less confident user.",
                "أنا خريجة علوم حاسب وذكاء اصطناعي ومصممة/مطورة منتجات أقيم في الإسكندرية، مصر. أهتم بالقرارات الكامنة وراء الواجهة بقدر اهتمامي بالواجهة نفسها: لماذا يوضع الزر هنا، كم نقرة تفصل المستخدم عن هدفه، ماذا يعكس اختيار اللون، وما الذي تكلفه الشاشة المزدحمة لمستخدم أكبر سناً أو أقل ثقة."
              )}
            </p>
            <p>
              {t(
                "I work across the full stack of a product — Figma, React.js, Flutter, Node.js, PostgreSQL, Firebase — so the research and the design intent survive all the way to production. My flagship project, an automated pharmacy platform connecting software to a physical robotic dispensing arm, is the clearest example of that: one system, one set of decisions, carried from a user interview to a working machine.",
                "أعمل عبر جميع طبقات المنتج — فيجما، رياكت، فلاتر، نود جي إس، بوستجريس، وفايربيز — حتى يظل البحث وهدف التصميم حيًا حتى مرحلة الإنتاج. مشروعي الرئيسي، منصة صيدلية آلية تربط البرمجيات بذراع روبوتية للصرف، هو أوضح مثال على ذلك: نظام واحد، مجموعة واحدة من القرارات، تنتقل من مقابلة المستخدم إلى آلة تعمل."
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
                      className="group flex items-center gap-3 rounded-full border border-primary/10 bg-white dark:bg-card px-4 py-2 transition-all hover:border-primary/30 hover:shadow-md dark:border-white/10"
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
                      className="group flex items-center gap-3 rounded-full border border-primary/10 bg-white dark:bg-card px-4 py-2 transition-all hover:border-primary/30 hover:shadow-md dark:border-white/10"
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
          className="space-y-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-primary/40 rounded-full"></span>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{t("Experience & Leadership", "الخبرة والقيادة")}</h3>
            </div>
            <div className="relative border-l border-primary/20 pl-8 ml-4 space-y-10">
              {experienceTimeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-background ring-4 ring-background shadow-sm bg-gradient-primary" />
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                      item.type === "leadership" ? "bg-secondary text-secondary-foreground" : "bg-white dark:bg-card text-slate-900 dark:text-foreground"
                    }`}>
                      {item.type === "leadership" ? t("Leadership", "قيادة") : t("Experience", "خبرة")}
                    </span>
                    <div className={`font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground`}>
                      {item.date}
                    </div>
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h4>
                  {item.desc && <p className="text-muted-foreground leading-relaxed">{item.desc}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-primary/40 rounded-full"></span>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{t("Education", "التعليم")}</h3>
            </div>
            <div className="relative border-l border-primary/20 pl-8 ml-4 space-y-10">
              {educationTimeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-background ring-4 ring-background shadow-sm bg-gradient-primary" />
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary`}>
                      {t("Education", "تعليم")}
                    </span>
                    <div className={`font-mono text-xs font-semibold uppercase tracking-wider text-primary`}>
                      {item.date}
                    </div>
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h4>
                  {item.desc && <p className="text-muted-foreground leading-relaxed">{item.desc}</p>}
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
