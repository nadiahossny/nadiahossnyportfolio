import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import pharmasysImg from "@/assets/pharmasys.png";
import tasklyImg from "@/assets/taskly.png";
import ieeeImg from "@/assets/ieee.png";
import studyBuddyImg from "@/assets/studybuddy_enhanced.png";
import ecommerceImg from "@/assets/ecommerce.png";
import auraLeafImg from "@/assets/auraleaf.png";

type Project = {
  id: string;
  title: string;
  niche: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
  note?: string;
  githubUrl?: string;
  behanceUrl?: string;
  demoUrl?: string;
};

const getProjects = (t: (en: string, ar: string) => string): Project[] => [
  {
    id: "pharmasys",
    title: t("PharmaSys and Roshtty", "فارماسيس و روشيتتي"),
    niche: t("Healthcare UX · Hardware Integration", "تجربة مستخدم الرعاية الصحية · تكامل الأجهزة"),
    image: pharmasysImg,
    tags: ["Flutter", "Node.js", "PostgreSQL", "Hardware", "AI Chatbot"],
    problem: t("Pharmacists in high-traffic pharmacies lose time walking shelves, cross-checking stock manually, and handling repetitive dispensing tasks — all while a mistake carries real safety consequences. Patients often can't tell if a medication is in stock before making a trip.", "يضيع الصيادلة وقتهم في السير بين الأرفف والتحقق من المخزون يدويًا، بينما الأخطاء تحمل عواقب خطيرة على السلامة."),
    solution: t("Roshetety is a two-sided pharmacy platform: a pharmacist-facing system that connects to a physical robotic arm to retrieve and dispense medication, and a companion consumer app that lets patients order from home. I owned the project end to end.", "روشيتت منصة ذات وجهين: نظام للصيدلي متصل بذراع روبوتي، وتطبيق للمستهلك للطلب من المنزل. امتلكت المشروع بالكامل."),
    techStack: ["Flutter", "Node.js", "PostgreSQL", "Figma"],
    role: t("Full Figma research-to-prototype pipeline; Flutter frontend; Node.js backend; serial communication to robotic arm.", "تنفيذ كامل من البحث للنموذج الأولي؛ واجهة أمامية؛ خلفية؛ واتصال تسلسلي بالروبوت."),
    githubUrl: "https://github.com/nadiahossny/apms-project",
    behanceUrl: "https://www.behance.net/nadiahossny",
  },
  {
    id: "ieee-pua",
    title: t("IEEE PUA Student Branch Official Website", "الموقع الرسمي لفرع IEEE PUA"),
    niche: t("Design Systems · Admin Tooling", "أنظمة التصميم · أدوات الإدارة"),
    image: ieeeImg,
    tags: ["Flutter", "Firebase", "Design Systems", "Admin Tooling"],
    problem: t("Student branch websites are usually maintained by whoever has time that semester, leading to visual inconsistency and admin tools built as an afterthought.", "مواقع الفروع الطلابية تُدار بمن لديه وقت، مما يؤدي لعدم اتساق مرئي وأدوات إدارة سيئة."),
    solution: t("Official website and full admin dashboard for managing events and projects. One design system across both the public site and internal dashboard.", "موقع رسمي ولوحة تحكم لإدارة الفعاليات. نظام تصميم واحد للموقع ولوحة التحكم."),
    techStack: ["Flutter", "Firebase", "Design System"],
    role: t("Led design and co-developed the build; full admin dashboard with CRUD for events/projects.", "قدت التصميم وطورت الموقع؛ لوحة تحكم كاملة للفعاليات والمشاريع."),
    githubUrl: "https://github.com/AyatSalahEl-din/IEEE_Website",
    demoUrl: "https://ieeepuasb.com/",
  },
  {
    id: "taskly",
    title: t("Taskly - Task Management App", "تاسكلي - تطبيق إدارة مهام"),
    niche: t("Product Design · UX Research", "تصميم المنتج · أبحاث تجربة المستخدم"),
    image: tasklyImg,
    tags: ["Figma", "UX Research", "Competitive Analysis"],
    problem: t("Existing task apps create friction through over-configuration before a user can do anything useful.", "تطبيقات المهام الحالية تخلق احتكاكاً بسبب كثرة الإعدادات قبل إنجاز أي شيء."),
    solution: t("Core design principle: reduce clicks-to-first-task. A new user should be able to add and complete their first task in the fewest possible taps.", "مبدأ التصميم: تقليل النقرات لإضافة أول مهمة في أقل عدد ممكن."),
    techStack: ["Figma", "UX Research", "Prototyping"],
    role: t("Delivered user flows, wireframes, component library, and a fully interactive prototype.", "قدمت تدفقات المستخدم، ونموذج تفاعلي عالي الدقة."),
    githubUrl: "https://github.com/nadiahossny",
    behanceUrl: "https://www.behance.net/nadiahossny",
  },
  {
    id: "study",
    title: t("Study helper website", "موقع مساعد دراسي"),
    niche: t("Organizes study material and schedules", "ينظم المواد الدراسية والجداول"),
    image: studyBuddyImg,
    tags: ["React", "Firebase"],
    problem: t("Prioritized minimal setup friction so students adopt it during exam-week stress.", "تقليل وقت الإعداد ليتمكن الطلاب من استخدامه أثناء ضغط الامتحانات."),
    solution: t("Created an intuitive interface that allows students to quickly add and track their study sessions and materials.", "إنشاء واجهة بديهية تسمح للطلاب بإضافة وتتبع جلسات ومواد دراستهم بسرعة."),
    techStack: ["React", "Firebase"],
    role: t("Frontend Development & UI Design", "تطوير الواجهة الأمامية وتصميم واجهة المستخدم"),
    githubUrl: "https://github.com/nadiahossny",
    behanceUrl: "https://www.behance.net/nadiahossny",
  },
  {
    id: "gift",
    title: t("Gift-giving website", "موقع تقديم الهدايا"),
    niche: t("Helps users choose gifts based on relationship and occasion", "يساعد المستخدمين في اختيار الهدايا بناءً على العلاقة والمناسبة"),
    image: ecommerceImg,
    tags: ["Next.js", "Tailwind"],
    problem: t("Shortcuts decision paralysis instead of presenting an endless catalog.", "يختصر شلل اتخاذ القرار بدلاً من تقديم كتالوج لا نهاية له."),
    solution: t("Curated selection of gifts with a step-by-step wizard to guide users based on their relationship with the recipient.", "مجموعة مختارة من الهدايا مع معالج خطوة بخطوة لتوجيه المستخدمين بناءً على علاقتهم بالمستلم."),
    techStack: ["Next.js", "Stripe"],
    role: t("Full-stack Development", "تطوير شامل"),
    githubUrl: "https://github.com/nadiahossny",
    behanceUrl: "https://www.behance.net/nadiahossny",
  },
  {
    id: "auraleaf",
    title: t("Aura Leaf App", "تطبيق أورا ليف"),
    niche: t("Brand identity & eCommerce", "هوية العلامة التجارية والتجارة الإلكترونية"),
    image: auraLeafImg,
    tags: ["React Native", "UX Research"],
    problem: t("Ensures consistency across a brand's digital presence while providing a seamless shopping experience.", "يضمن الاتساق عبر الوجود الرقمي للعلامة التجارية مع توفير تجربة تسوق سلسة."),
    solution: t("Developed a complete design system and mobile app for browsing and purchasing products.", "تطوير نظام تصميم كامل وتطبيق جوال لتصفح وشراء المنتجات."),
    techStack: ["React Native", "Figma"],
    role: t("Mobile App Development & UI/UX", "تطوير تطبيقات الجوال وتصميم واجهة المستخدم"),
    githubUrl: "https://github.com/nadiahossny",
    behanceUrl: "https://www.behance.net/nadiahossny",
  }
];

export const Projects = () => {
  const { t } = useLang();
  const [open, setOpen] = useState<Project | null>(null);

  const projects = getProjects(t);
  const displayedProjects = projects.slice(0, 6);

  const ProjectCard = ({ p, i, compact = false }: { p: Project, i: number, compact?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (i % 3) * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`group overflow-hidden rounded-3xl text-left transition-smooth hover:shadow-glow w-full flex flex-col relative cursor-pointer ${compact ? 'h-full bg-white dark:bg-card border border-border/40 shadow-sm' : 'glass'}`}
      onClick={() => setOpen(p)}
    >
      {compact && (
        <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100 grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      )}
      {!compact && (
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
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold mb-2">
          {p.niche}
        </div>
        <h3 className="font-display text-xl font-bold mb-4">{p.title}</h3>
        {p.tags && p.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
        {p.note && (
          <p className="text-sm text-muted-foreground mt-auto">{p.note}</p>
        )}
        <div className="mt-4 flex gap-3 z-10" onClick={(e) => e.stopPropagation()}>
          {p.githubUrl && (
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-white/50 dark:bg-black/50 px-3 py-1.5 text-xs font-bold text-foreground transition-smooth hover:bg-neutral-100 dark:hover:bg-neutral-800">
              Github
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {p.behanceUrl && (
            <a href={p.behanceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 transition-smooth hover:bg-blue-500/20">
              Behance
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="work" className="relative py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-primary/40 rounded-full"></span>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{t("Featured Work", "أعمال مميزة")}</span>
          </div>
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
            {t("Selected ", "مشاريع ")}<span className="text-gradient">{t("Projects.", "مختارة.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("Explore how I turn complex ideas into intuitive, engaging experiences.", "استكشف كيف أحول الأفكار المعقدة إلى تجارب بديهية وجذابة.")}
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {displayedProjects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>



      </div>

      {/* Individual Project Details Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background shadow-2xl relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-6 md:p-10 border border-border"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-muted/80 hover:bg-muted text-foreground shadow-sm backdrop-blur z-10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              {open.image && (
                <img src={open.image} alt={open.title} className="mb-6 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm" loading="lazy" />
              )}
              
              <div className="mb-2 border-l-4 border-primary pl-4">
                <span className="font-display text-sm font-semibold tracking-wide text-primary uppercase">{open.niche}</span>
              </div>
              <h3 className="mt-2 font-display text-3xl font-bold md:text-4xl">
                {open.title}
              </h3>

              <div className="mt-8 space-y-6">
                {open.problem && (
                  <div>
                    <div className="mb-4 border-l-4 border-primary pl-4">
                      <h4 className="font-display text-xl font-bold text-foreground">{t("The Problem", "المشكلة")}</h4>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">{open.problem}</p>
                  </div>
                )}
                {open.solution && (
                  <div>
                    <div className="mb-4 border-l-4 border-primary pl-4">
                      <h4 className="font-display text-xl font-bold text-foreground">{t("The Solution", "الحل")}</h4>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">{open.solution}</p>
                  </div>
                )}
                {(!open.problem && !open.solution && open.note) && (
                  <div>
                    <div className="mb-4 border-l-4 border-primary pl-4">
                      <h4 className="font-display text-xl font-bold text-foreground">{t("About This Project", "عن هذا المشروع")}</h4>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">{open.note}</p>
                  </div>
                )}
              </div>

              <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-4">
                {open.githubUrl && (
                  <a href={open.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-black transition-smooth hover:bg-neutral-100 hover:scale-105">
                    {t("View on Github", "عرض على Github")}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {open.behanceUrl && (
                  <a href={open.behanceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-bold text-blue-600 dark:text-blue-400 transition-smooth hover:bg-blue-500/20 hover:scale-105">
                    {t("View on Behance", "عرض على Behance")}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {open.demoUrl && (
                  <a href={open.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition-smooth">
                    {t("View Deployment", "عرض النشر")}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

