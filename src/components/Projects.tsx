import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { ArrowUpRight, ExternalLink, X, Plus } from "lucide-react";
import bloombookImg from "@/assets/bloombook_enhanced.png";
import ecommerceImg from "@/assets/ecommerce.png";
import ieeeImg from "@/assets/ieee.png";
import pharmasysImg from "@/assets/pharmasys.png";
import tasklyImg from "@/assets/taskly.png";
import studybuddyImg from "@/assets/studybuddy_enhanced.png";
import auraleafImg from "@/assets/auraleaf.png";

type Project = {
  id: string;
  title: string;
  niche: string;
  image: string;
  tags: string[];
  liveUrl: string;
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
};

const getProjects = (t: (en: string, ar: string) => string): Project[] => [
  {
    id: "pharmasys",
    title: t("PharmaSys (APMS)", "فارما سيس"),
    niche: t("Enterprise Healthcare · AI & Robotics", "رعاية صحية للمؤسسات · ذكاء اصطناعي وروبوتات"),
    image: pharmasysImg,
    tags: ["Flutter", "Node.js", "Postgres", "Robotics"],
    liveUrl: "/case-study/apms",
    problem: t("Traditional pharmacy software lacks physical dispensing integration and struggles with 'phantom stock' discrepancies, leading to life-threatening inventory errors and financial losses.", "تفتقر برامج الصيدليات التقليدية إلى دمج الصرف المادي وتعاني من تناقضات المخزون، مما يؤدي إلى خسائر مالية."),
    solution: t("Architected a robust microservices ecosystem integrating a Node.js/WebSocket gateway, a Python AI engine (XGBoost/Q-Learning) for predictive restocking, and an ESP32-controlled robotic dispensing arm.", "تصميم نظام مصغر قوي يدمج بوابة Node.js/WebSocket ومحرك ذكاء اصطناعي للتنبؤ وذراع صرف روبوتية متحكم بها بواسطة ESP32."),
    techStack: ["Flutter", "Node.js", "Python", "PostgreSQL", "ESP32"],
    role: t("Lead Systems Architect & Frontend Engineer. Designed the fault-tolerant communication protocol and built the highly responsive, HCI-compliant staff dashboard.", "مهندس أنظمة وواجهات أمامية رئيسي. صممت بروتوكول اتصال متسامح مع الأخطاء وبنيت لوحة تحكم سريعة الاستجابة للموظفين."),
  },
  {
    id: "taskly",
    title: t("Taskly - Productivity App", "تاسكلي - تطبيق إنتاجية"),
    niche: t("UI/UX Design · Product Strategy", "تصميم واجهة وتجربة المستخدم · استراتيجية المنتج"),
    image: tasklyImg,
    tags: ["Figma", "Strategy"],
    liveUrl: "https://www.behance.net/gallery/221757475/Taskly-Simplify-Your-Productivity",
    problem: t("High cognitive load in existing task management applications caused user fatigue and poor onboarding completion rates.", "تسبب العبء المعرفي العالي في تطبيقات إدارة المهام الحالية في إرهاق المستخدمين وضعف معدلات إكمال الإعداد."),
    solution: t("Executed comprehensive user research to design a hyper-intuitive, minimalist task management interface focused on preattentive processing and seamless navigation.", "تنفيذ بحث مستخدم شامل لتصميم واجهة مبسطة وبديهية للغاية تركز على المعالجة المسبقة للانتباه والتنقل السلس."),
    techStack: ["Figma", "UI/UX Design", "User Research"],
    role: t("Lead Product Designer. Managed the entire product design lifecycle from user interviews to high-fidelity, interactive Figma prototyping.", "مصمم منتج رئيسي. أدرت دورة حياة تصميم المنتج بأكملها من مقابلات المستخدمين إلى النماذج الأولية التفاعلية عالية الدقة."),
  },
  {
    id: "aura-leaf",
    title: t("Aura Leaf", "أورا ليف"),
    niche: t("Interactive Web App · Frontend Architecture", "تطبيق ويب تفاعلي · بنية الواجهات الأمامية"),
    image: auraleafImg,
    tags: ["React", "Web Audio API", "TailwindCSS"],
    liveUrl: "https://auraleaf1.netlify.app",
    problem: t("Modern productivity apps often suffer from sterile interfaces that fail to delight users, leading to high churn rates and low engagement during deep-focus sessions.", "غالباً ما تعاني تطبيقات الإنتاجية الحديثة من واجهات باهتة تفشل في إسعاد المستخدمين، مما يؤدي إلى انخفاض التفاعل."),
    solution: t("Engineered a highly interactive, state-driven productivity web app utilizing the Web Audio API for hardware interaction (microphone blow detection) and fluid React-based UI adaptations.", "هندسة تطبيق ويب تفاعلي للإنتاجية باستخدام Web Audio API للتفاعل مع الأجهزة وتعديلات واجهة مستخدم مرنة تعتمد على React."),
    techStack: ["React", "Web Audio API", "TailwindCSS"],
    role: t("Lead Frontend Engineer. Architected the custom audio-reactive hooks and implemented a responsive, glassmorphism-based design system.", "مهندس واجهات أمامية رئيسي. صممت خطافات تفاعلية صوتية مخصصة ونفذت نظام تصميم متجاوب."),
  },
  {
    id: "study-buddy",
    title: t("Study Buddy", "رفيق الدراسة"),
    niche: t("EdTech · React Ecosystem", "تقنية تعليمية · بيئة React"),
    image: studybuddyImg,
    tags: ["React", "Performance"],
    liveUrl: "https://studybuddy4u.netlify.app",
    problem: t("The legacy educational platform suffered from severe performance bottlenecks and a clunky UX, resulting in poor student retention and low user satisfaction.", "عانت المنصة التعليمية القديمة من اختناقات شديدة في الأداء وواجهة مستخدم معقدة، مما أدى إلى ضعف احتفاظ الطلاب."),
    solution: t("Spearheaded a complete architectural migration to a modern React stack, integrating Framer Motion for fluid transitions and drastically improving Time-to-Interactive (TTI).", "قيادة انتقال معماري كامل إلى بيئة React حديثة، مع دمج Framer Motion لتحسين وقت التفاعل بشكل كبير."),
    techStack: ["React.js", "Framer Motion", "Vite"],
    role: t("Lead Frontend Developer & UX Designer. Directed the end-to-end redesign process from initial Figma prototypes to high-performance component delivery.", "مطور واجهات ومصمم تجربة مستخدم رئيسي. أدرت عملية إعادة التصميم من النماذج الأولية إلى التسليم عالي الأداء."),
  },
  {
    id: "bloom-book",
    title: t("Bloom Book", "بلوم بوك"),
    niche: t("E-Commerce · Collaborative Tech", "تجارة إلكترونية · تقنيات تعاونية"),
    image: bloombookImg,
    tags: ["React", "Architecture"],
    liveUrl: "https://bloombookgift.netlify.app",
    problem: t("The digital gifting space lacked seamless multi-user collaboration, making collective purchasing and personalized gift curation overly complex for users.", "افتقر مجال الإهداء الرقمي إلى تعاون سلس بين مستخدمين متعددين، مما جعل الشراء الجماعي معقدًا للغاية."),
    solution: t("Developed a scalable digital commerce platform enabling real-time collaborative curation and a frictionless checkout experience using modular CSS architecture.", "تطوير منصة تجارة رقمية قابلة للتوسع تتيح التنسيق التعاوني في الوقت الفعلي وتجربة دفع سلسة."),
    techStack: ["React.js", "CSS Modules", "Node.js"],
    role: t("Frontend Developer. Engineered the core collaborative gifting engine and optimized the component rendering lifecycle for maximum performance.", "مطور واجهات أمامية. هندست محرك الإهداء التعاوني الأساسي وحسنت دورة حياة تصيير المكونات لأقصى أداء."),
  },
  {
    id: "ecomm",
    title: t("E-Commerce App", "تطبيق متجر إلكتروني"),
    niche: t("Mobile Engineering · Cross-Platform", "هندسة الجوال · عبر المنصات"),
    image: ecommerceImg,
    tags: ["Flutter", "Architecture"],
    liveUrl: "https://github.com/nadiahossny/ecomm",
    problem: t("Fragmented mobile shopping experiences across iOS and Android were causing high cart abandonment rates and difficult code maintainability.", "تسببت تجارب التسوق المجزأة عبر أنظمة التشغيل في ارتفاع معدلات التخلي عن سلة التسوق وصعوبة الصيانة."),
    solution: t("Built a high-performance, cross-platform mobile application using Flutter and Dart, backed by a real-time Firebase database for instant inventory synchronization.", "بناء تطبيق عالي الأداء عبر المنصات باستخدام Flutter، مدعوم بقاعدة بيانات Firebase لمزامنة المخزون الفورية."),
    techStack: ["Flutter", "Dart", "Firebase"],
    role: t("Mobile Engineer. Single-handedly developed the application architecture, implemented complex state management, and integrated secure payment APIs.", "مهندس جوال. طورت بنية التطبيق بمفردي، ونفذت إدارة حالة معقدة، ودمجت واجهات برمجة التطبيقات."),
  },
  {
    id: "ieee",
    title: t("IEEE PUA Platform", "منصة IEEE PUA"),
    niche: t("Full-Stack Web App · Admin Systems", "تطبيق ويب متكامل · أنظمة الإدارة"),
    image: ieeeImg,
    tags: ["Flutter", "Full-Stack"],
    liveUrl: "https://www.ieeepuasb.com",
    problem: t("The student branch relied on fragmented, manual systems for event management, leading to administrative overhead and poor member communication.", "اعتمد الفرع على أنظمة مجزأة لإدارة الفعاليات، مما أدى إلى عبء إداري شديد وضعف التواصل."),
    solution: t("Delivered a centralized, responsive web platform featuring a secure role-based administration dashboard connected to a real-time Firebase backend.", "تقديم منصة مركزية متجاوبة تتميز بلوحة تحكم إدارة آمنة قائمة على الأدوار متصلة بخلفية في الوقت الفعلي."),
    techStack: ["Flutter", "Firebase", "Web Platform"],
    role: t("Vice Head of Web Dev. Led a team of developers to architect and deploy the system, enforcing CI/CD practices and code quality standards.", "نائب رئيس تطوير الويب. قدت فريقاً لتصميم ونشر النظام مع تطبيق ممارسات CI/CD ومعايير جودة الكود."),
  },
];

export const Projects = () => {
  const { t } = useLang();
  const [open, setOpen] = useState<Project | null>(null);
  const [showMoreModal, setShowMoreModal] = useState(false);

  const projects = getProjects(t);
  const displayedProjects = projects.slice(0, 3);
  const hiddenProjects = projects.slice(3);

  const ProjectCard = ({ p, i }: { p: Project, i: number }) => (
    <motion.button
      onClick={() => setOpen(p)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group glass overflow-hidden rounded-3xl text-left transition-smooth hover:shadow-glow w-full flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden w-full">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-card/90 backdrop-blur transition-transform group-hover:scale-110">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="p-6">
        <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          {p.niche}
        </div>
        <h3 className="font-display text-xl font-bold mb-4">{p.title}</h3>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary mb-4">
            {t("Featured Work", "أعمال مميزة")}
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
            {t("Selected ", "مشاريع ")}<span className="text-gradient">{t("Projects.", "مختارة.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("Explore how I turn complex ideas into intuitive, engaging experiences.", "استكشف كيف أحول الأفكار المعقدة إلى تجارب بديهية وجذابة.")}
          </p>
        </motion.div>

        {/* 1 col on mobile, 3 cols on desktop */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {displayedProjects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>

        {hiddenProjects.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowMoreModal(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-8 py-4 text-sm font-semibold text-primary transition-smooth hover:bg-gradient-primary hover:border-transparent hover:text-white active:scale-95"
            >
              <Plus className="h-4 w-4" />
              {t("View More Projects", "عرض المزيد من المشاريع")}
            </button>
          </div>
        )}
      </div>

      {/* View More Projects Modal */}
      <AnimatePresence>
        {showMoreModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={() => setShowMoreModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white shadow-2xl relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl p-6 md:p-10"
            >
              <button
                onClick={() => setShowMoreModal(false)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-card hover:bg-secondary shadow-sm"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              
              <h3 className="font-display text-3xl font-bold mb-8">{t("More Projects", "المزيد من المشاريع")}</h3>
              
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                {hiddenProjects.map((p, i) => (
                  <ProjectCard key={p.id} p={p} i={i} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Individual Case Study Deep Dive Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white shadow-2xl relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-6 md:p-10"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/80 hover:bg-white text-black shadow-sm backdrop-blur"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <img src={open.image} alt={open.title} className="mb-6 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm" loading="lazy" />
              
              <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                {t("Case Study", "دراسة حالة")}
              </div>
              <h3 className="mt-2 font-display text-3xl font-bold md:text-4xl">
                {open.title}
              </h3>
              <div className="mt-2 text-sm text-muted-foreground">{open.niche}</div>

              <div className="mt-8 space-y-8">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">{t("The Problem", "المشكلة")}</div>
                  <p className="text-base leading-relaxed">{open.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">{t("The Solution", "الحل")}</div>
                  <p className="text-base leading-relaxed">{open.solution}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">{t("Tech Stack Used", "التقنيات المستخدمة")}</div>
                  <div className="flex flex-wrap gap-2">
                    {open.techStack.map(tech => (
                       <span key={tech} className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium">
                         {tech}
                       </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">{t("My Role & Impact", "دوري وتأثيري")}</div>
                  <p className="text-base leading-relaxed">{open.role}</p>
                </div>
              </div>

              {open.liveUrl !== "#" ? (
                <a
                  href={open.liveUrl}
                  target={open.liveUrl.startsWith("/") ? "_self" : "_blank"}
                  rel={open.liveUrl.startsWith("/") ? "" : "noreferrer"}
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-smooth"
                >
                  {open.liveUrl.includes("github.com")
                    ? t("View on GitHub", "عرض على GitHub")
                    : (open.liveUrl.includes("behance.net") || open.liveUrl.startsWith("/"))
                    ? t("View Case Study", "عرض دراسة الحالة")
                    : t("View Site", "زيارة الموقع")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <button
                  disabled
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-muted px-8 py-4 text-sm font-semibold text-muted-foreground cursor-not-allowed"
                >
                  {t("Case Study Not Available", "دراسة الحالة غير متوفرة")}
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
