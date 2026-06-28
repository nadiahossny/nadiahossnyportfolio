import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import { FaReact, FaJs, FaHtml5, FaGitAlt, FaPython, FaFigma, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiPostgresql } from "react-icons/si";
import { MdOutlineDesignServices, MdOutlineWeb } from "react-icons/md";
import { BiLogoAdobe } from "react-icons/bi";


const devSkills = [
  { 
    name: "React.js", 
    color: "text-[#61DAFB]", 
    bg: "bg-[#61DAFB]/10",
    icon: FaReact
  },
  { 
    name: "JavaScript", 
    color: "text-[#F7DF1E]", 
    bg: "bg-[#F7DF1E]/10",
    icon: FaJs
  },
  { 
    name: "HTML & CSS", 
    color: "text-[#E34F26]", 
    bg: "bg-[#E34F26]/10",
    icon: FaHtml5
  },
  { 
    name: "Flutter", 
    color: "text-[#02569B]", 
    bg: "bg-[#02569B]/10",
    icon: SiFlutter
  },
  { 
    name: "Firebase", 
    color: "text-[#FFCA28]", 
    bg: "bg-[#FFCA28]/10",
    icon: SiFirebase
  },
  { 
    name: "Git & Version Control", 
    color: "text-[#F05032]", 
    bg: "bg-[#F05032]/10",
    icon: FaGitAlt
  },
  { 
    name: "Python", 
    color: "text-[#3776AB]", 
    bg: "bg-[#3776AB]/10",
    icon: FaPython
  },
  { 
    name: "PostgreSQL", 
    color: "text-[#4169E1]", 
    bg: "bg-[#4169E1]/10",
    icon: SiPostgresql
  }
];

const designSkills = [
  { 
    name: "Figma", 
    color: "text-[#F24E1E]", 
    bg: "bg-[#F24E1E]/10",
    icon: FaFigma
  },
  { 
    name: "UI/UX Design", 
    color: "text-[#8B5CF6]", 
    bg: "bg-[#8B5CF6]/10",
    icon: MdOutlineDesignServices
  },
  { 
    name: "User Research", 
    color: "text-[#06B6D4]", 
    bg: "bg-[#06B6D4]/10",
    icon: FaUsers
  },
  { 
    name: "Prototyping", 
    color: "text-[#F59E0B]", 
    bg: "bg-[#F59E0B]/10",
    icon: MdOutlineWeb
  },
  { 
    name: "Agile & PM", 
    color: "text-[#10B981]", 
    bg: "bg-[#10B981]/10",
    icon: FaProjectDiagram
  },
  { 
    name: "Adobe CC", 
    color: "text-[#EC1C24]", 
    bg: "bg-[#EC1C24]/10",
    icon: BiLogoAdobe
  }
];

export const About = () => {
  const { t } = useLang();

  const timeline = [
    {
      type: "tech",
      date: t("Dec 2025 - Present", "ديسمبر 2025 - الحاضر"),
      title: t("UX/UI Designer @ Upwork", "مصمم واجهة مستخدم @ آب وورك"),
      desc: t("Designed user-centered digital experiences. Conducted user interviews and developed interactive prototypes to refine design solutions.", "صممت تجارب رقمية محورها المستخدم. أجريت مقابلات مع المستخدمين وطورت نماذج أولية تفاعلية."),
    },
    {
      type: "academic",
      date: t("Jul 2025 - Sep 2025", "يوليو 2025 - سبتمبر 2025"),
      title: t("Frontend Developer Intern @ NTI", "متدرب مطور واجهات أمامية @ NTI"),
      desc: t("Built 5+ frontend projects with seamless API integration. Applied usability testing to improve web functionality.", "بنيت أكثر من 5 مشاريع واجهات أمامية مع دمج واجهات برمجة التطبيقات (API). طبقت اختبارات سهولة الاستخدام."),
    },
    {
      type: "academic",
      date: t("Oct 2024 - May 2025", "أكتوبر 2024 - مايو 2025"),
      title: t("UX/UI Designer Intern @ DEPI", "متدرب تصميم واجهات @ DEPI"),
      desc: t("Focused on user-centered design and UX research. Delivered 30+ wireframes and 15+ prototypes for various websites and apps.", "ركزت على التصميم المتمحور حول المستخدم وأبحاث تجربة المستخدم. صممت أكثر من 30 نموذج مبدئي و 15 نموذج تفاعلي."),
    },
    {
      type: "academic",
      date: t("Jul 2024 - Oct 2024", "يوليو 2024 - أكتوبر 2024"),
      title: t("Mobile App Developer Intern @ Route", "متدرب مطور تطبيقات جوال @ Route"),
      desc: t("Developed 5+ fully functional mobile apps with Firebase and REST API integration using Flutter and state management techniques.", "طورت أكثر من 5 تطبيقات جوال وظيفية باستخدام Flutter و Firebase."),
    },
    {
      type: "academic",
      date: t("Oct 2022 - Jun 2026", "أكتوبر 2022 - يونيو 2026"),
      title: t("CS & AI Student @ Pharos University", "طالبة علوم حاسب وذكاء اصطناعي @ جامعة فاروس"),
      desc: t("Bachelor's degree in Computer Science. Recognized for academic excellence and active community engagement.", "درجة البكالوريوس في علوم الحاسب. تم تقديري لتميزي الأكاديمي والمشاركة المجتمعية."),
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
                "I am a Frontend Developer and UX Designer dedicated to crafting digital products that matter. I bridge the gap between engineering and human-centered design to ensure every interaction feels intuitive.",
                "أنا مطور واجهات أمامية ومصمم تجربة مستخدم شغوف بصنع منتجات رقمية ذات قيمة. أجمع بين الهندسة والتصميم المتمحور حول الإنسان لضمان تجربة بديهية للمستخدم."
              )}
            </p>
            <p>
              {t(
                "My focus lies in building scalable frontend architectures that support complex workflows without sacrificing usability. I am currently open and ready for full-time roles as well as freelance contracts.",
                "ينصب تركيزي على بناء هياكل واجهات أمامية قابلة للتطوير تدعم سير العمل المعقد دون التضحية بسهولة الاستخدام. أنا متاح حاليًا لوظائف بدوام كامل وكذلك للعقود الحرة."
              )}
            </p>
          </div>
          
          <div className="mt-10">
            <h3 className="font-display text-2xl font-bold mb-6">{t("Skills", "المهارات")}</h3>
            <div className="space-y-10">
               <div>
                <h4 className="font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5">{t("Development", "التطوير")}</h4>
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
