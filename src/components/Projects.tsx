import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { ArrowUpRight, ExternalLink, Plus, X } from "lucide-react";
import pharmasysImg from "@/assets/pharmasys.png";
import tasklyImg from "@/assets/taskly.png";
import ieeeImg from "@/assets/ieee.png";
import bloomBookImg from "@/assets/bloombook_enhanced.png";
import auraLeafImg from "@/assets/auraleaf.png";
import notesAppImg from "@/assets/notes_app.png";

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
  containImage?: boolean;
};

const getProjects = (t: (en: string, ar: string) => string): Project[] => [
  {
    id: "pharmasys",
    title: t("PharmaSys and Roshtety", "فارماسيس و روشيتتي"),
    niche: t("Healthcare UX · Hardware Integration", "تجربة مستخدم الرعاية الصحية · تكامل الأجهزة"),
    image: pharmasysImg,
    containImage: true,
    tags: ["Flutter", "Node.js", "PostgreSQL", "Hardware", "AI Chatbot"],
    problem: t("Pharmacists in high-traffic pharmacies lose time walking shelves, cross-checking stock manually, and handling repetitive dispensing tasks — all while a mistake carries real safety consequences. Patients often can't tell if a medication is in stock before making a trip.", "يضيع الصيادلة وقتهم في السير بين الأرفف والتحقق من المخزون يدويًا، بينما الأخطاء تحمل عواقب خطيرة على السلامة."),
    solution: t("Roshetety is a two-sided pharmacy platform: a pharmacist-facing system that connects to a physical robotic arm to retrieve and dispense medication, and a companion consumer app that lets patients order from home. I owned the project end to end.", "روشيتت منصة ذات وجهين: نظام للصيدلي متصل بذراع روبوتي، وتطبيق للمستهلك للطلب من المنزل. امتلكت المشروع بالكامل."),
    techStack: ["Flutter", "Node.js", "PostgreSQL", "Figma"],
    role: t("Full Figma research-to-prototype pipeline; Flutter frontend; Node.js backend; serial communication to robotic arm.", "تنفيذ كامل من البحث للنموذج الأولي؛ واجهة أمامية؛ خلفية؛ واتصال تسلسلي بالروبوت."),
    githubUrl: "https://github.com/nadiahossny/apms-project",
    behanceUrl: "https://www.behance.net/gallery/252768433/Smart-Prescription-Scanner-Pharmacy-Management-App",
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
    containImage: true,
    tags: ["Figma", "UX Research", "Competitive Analysis"],
    problem: t("Existing task apps create friction through over-configuration before a user can do anything useful.", "تطبيقات المهام الحالية تخلق احتكاكاً بسبب كثرة الإعدادات قبل إنجاز أي شيء."),
    solution: t("Core design principle: reduce clicks-to-first-task. A new user should be able to add and complete their first task in the fewest possible taps.", "مبدأ التصميم: تقليل النقرات لإضافة أول مهمة في أقل عدد ممكن."),
    techStack: ["Figma", "UX Research", "Prototyping"],
    role: t("Delivered user flows, wireframes, component library, and a fully interactive prototype.", "قدمت تدفقات المستخدم، ونموذج تفاعلي عالي الدقة."),
    behanceUrl: "https://www.behance.net/nadiahossny",
  }
];

const getOtherProjects = (t: (en: string, ar: string) => string): Project[] => [
  {
    id: "bloom-book",
    title: t("Bloom Book", "بلوم بوك"),
    niche: t("Digital Gifts & Memory Books", "الهدايا الرقمية وكتب الذكريات"),
    image: bloomBookImg,
    tags: ["React", "Web App", "CSS Animations"],
    problem: t("Finding a unique, interactive, and personalized digital gift that feels magical and memorable.", "العثور على هدية رقمية فريدة وتفاعلية وشخصية تبدو سحرية ولا تُنسى."),
    solution: t("A React web app for creating personalized digital memory books revealed by a magical blooming night garden animation.", "تطبيق ويب لإنشاء كتب ذكريات رقمية مخصصة يتم الكشف عنها من خلال رسوم متحركة سحرية لحديقة ليلية مزهرة."),
    techStack: ["React", "CSS", "JavaScript"],
    role: t("Frontend Web Development", "تطوير واجهات الويب الأمامية"),
    note: t("Features immersive CSS-driven blooming flowers and night scenes, customizable pastel themes, and shareable digital gifts.", "يتميز برسوم متحركة سحرية لزهور تتفتح ليلاً، وثيمات ألوان باستيل قابلة للتخصيص، وهدايا رقمية قابلة للمشاركة."),
    demoUrl: "https://bloombookgift.vercel.app/",
    githubUrl: "https://github.com/nadiahossny/my-bloom-gift",
  },
  {
    id: "auraleaf",
    title: t("Aura Leaf App", "تطبيق أورا ليف"),
    niche: t("Study Companion & Relaxation", "رفيق الدراسة والاسترخاء"),
    image: auraLeafImg,
    tags: ["React", "Web App", "Widgets"],
    problem: t("Students need a peaceful focus environment that combines task management with calming ambient elements.", "يحتاج الطلاب إلى بيئة تركيز هادئة تجمع بين إدارة المهام والعناصر المحيطية المهدئة."),
    solution: t("A heartfelt React app blending a relaxing study environment with ambient sounds, a timer, sticky notes, and a customizable interface.", "تطبيق ويب يمزج بين بيئة دراسية مريحة وأصوات محيطية، ومؤقت، وملاحظات، وواجهة قابلة للتخصيص."),
    techStack: ["React", "JavaScript", "CSS"],
    role: t("Frontend Web Development", "تطوير واجهات الويب الأمامية"),
    note: t("Includes interactive widgets for sticky notes and YouTube playback, a draggable docked interface, and viscous liquid effect animations.", "يتضمن ودجات تفاعلية للملاحظات وتشغيل يوتيوب، وواجهة قابلة للسحب، وتأثيرات بصرية متحركة مذهلة."),
    demoUrl: "https://auraleaf.vercel.app",
    githubUrl: "https://github.com/nadiahossny/AuraLeaf",
  },
  {
    id: "notes-app",
    title: t("Notes App", "تطبيق الملاحظات"),
    niche: t("Productivity & Organization", "الإنتاجية والتنظيم"),
    image: notesAppImg,
    containImage: true,
    tags: ["Flutter", "Firebase", "Cross-Platform"],
    problem: t("Users need a clean, distraction-free interface to create, organize, and securely save personal notes across platforms.", "يحتاج المستخدمون إلى واجهة نظيفة وخالية من التشتيت لإنشاء الملاحظات الشخصية وتنظيمها وحفظها بشكل آمن عبر المنصات."),
    solution: t("A modern Flutter-based note-taking app with a simple interface, local-first usability, and secure cloud syncing via Firebase.", "تطبيق ملاحظات حديث مبني بإطار فلاتر بواجهة بسيطة، مع إمكانية الاستخدام المحلي والمزامنة السحابية الآمنة عبر فايربيس."),
    techStack: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
    role: t("Mobile App Development", "تطوير تطبيقات الجوال"),
    note: t("Supports rich text editing, secure user authentication, image uploads, and signature capture for personalized notes.", "يدعم تحرير النصوص الغنية، المصادقة الآمنة، رفع الصور، وإضافة التوقيعات الشخصية للملاحظات."),
    githubUrl: "https://github.com/nadiahossny/NotesApp",
  }
];

export const Projects = () => {
  const { t } = useLang();
  const [open, setOpen] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);

  const projects = getProjects(t);
  const displayedProjects = projects;

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
            className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${p.containImage ? 'object-contain bg-white dark:bg-white/5 p-4' : 'object-cover'}`}
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
              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}
        {p.note && (
          <p className="text-sm text-muted-foreground mt-auto">{p.note}</p>
        )}

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

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowMore(true)}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105 btn-hover-hollow"
          >
            <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
            {t("View More Projects", "عرض المزيد من المشاريع")}
          </button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md"
              onClick={() => setShowMore(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="bg-background shadow-2xl relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-3xl p-6 md:p-10 border border-border"
              >
                <button
                  onClick={() => setShowMore(false)}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-muted/80 hover:bg-muted text-foreground shadow-sm backdrop-blur z-10"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
                
                <div className="mb-8 max-w-2xl pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-8 bg-primary/40 rounded-full"></span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{t("Additional Projects", "مشاريع إضافية")}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                    {t("Other Notable ", "مشاريع أخرى ")}<span className="text-gradient">{t("Projects.", "بارزة.")}</span>
                  </h2>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-4">
                  {getOtherProjects(t).map((p, i) => (
                    <ProjectCard key={p.id} p={p} i={i} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>      </div>

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
                <img src={open.image} alt={open.title} className={`mb-6 aspect-[16/9] w-full rounded-2xl shadow-sm ${open.containImage ? 'object-contain bg-white dark:bg-white/5 p-4' : 'object-cover'}`} loading="lazy" />
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
                {open.note && (
                  <div>
                    <div className="mb-4 border-l-4 border-primary pl-4">
                      <h4 className="font-display text-xl font-bold text-foreground">{t("Key Features", "أهم المميزات")}</h4>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">{open.note}</p>
                  </div>
                )}
                {open.techStack && open.techStack.length > 0 && (
                  <div>
                    <div className="mb-4 border-l-4 border-primary pl-4">
                      <h4 className="font-display text-xl font-bold text-foreground">{t("Technologies Used", "التقنيات المستخدمة")}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {open.techStack.map((tech, index) => (
                        <span key={index} className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-4">
                {open.githubUrl && (
                  <a href={open.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white dark:bg-card px-6 py-3 text-sm font-bold text-black dark:text-foreground transition-smooth hover:bg-neutral-100 dark:hover:bg-white/10 hover:scale-105">
                    {t("View on Github", "عرض على Github")}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {open.behanceUrl && (
                  <a href={open.behanceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white dark:bg-card px-6 py-3 text-sm font-bold text-black dark:text-foreground transition-smooth hover:bg-neutral-100 dark:hover:bg-white/10 hover:scale-105">
                    {t("View on Behance", "عرض على Behance")}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {open.demoUrl && (
                  <a href={open.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition-smooth btn-hover-hollow">
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

