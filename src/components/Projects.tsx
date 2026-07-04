import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { ArrowUpRight, ExternalLink, X, Plus } from "lucide-react";
import pharmasysImg from "@/assets/pharmasys.png";
import tasklyImg from "@/assets/taskly.png";
import studybuddyImg from "@/assets/studybuddy_enhanced.png";

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
    title: t("Roshetety (PharmaSys)", "روشيتتي (فارماسيس)"),
    niche: t("Healthcare UX · Hardware Integration", "تجربة مستخدم الرعاية الصحية · تكامل الأجهزة"),
    image: pharmasysImg,
    tags: ["UX Strategy", "Hardware Layer", "Flutter", "Node.js"],
    liveUrl: "/case-study/apms",
    problem: t("The pharmacy ecosystem is fundamentally broken: traditional software relies on dense grids and data entry, pushing cognitive burden onto pharmacists and leading to life-threatening dispensing errors.", "النظام البيئي للصيدليات معطل أساسًا: تعتمد البرامج التقليدية على شبكات كثيفة وإدخال البيانات، مما يلقي بالعبء المعرفي على الصيادلة ويؤدي إلى أخطاء صرف مهددة للحياة."),
    solution: t("Redesigned the entire workflow to reduce conscious decisions. Architected a microservices ecosystem connecting a highly visual, HCI-compliant interface to an ESP32-controlled robotic dispensing arm.", "أعدت تصميم سير العمل بالكامل لتقليل القرارات الواعية. صممت نظام خدمات مصغرة يربط بين واجهة مرئية عالية الجودة وذراع صرف آلي."),
    techStack: ["Figma", "HCI Principles", "Flutter", "Node.js", "ESP32"],
    role: t("Owned the UX judgment and the hardware connection layer. Mapped pharmacist mental models and built the fault-tolerant serial communication protocol for physical dispensing.", "امتلكت قرارات تجربة المستخدم وطبقة الاتصال بالأجهزة. حددت النماذج الذهنية للصيدلي وبنيت بروتوكول الاتصال المتسامح مع الأخطاء."),
  },
  {
    id: "taskly",
    title: t("Taskly - Productivity App", "تاسكلي - تطبيق إنتاجية"),
    niche: t("Product Design · Cognitive Load", "تصميم المنتج · العبء المعرفي"),
    image: tasklyImg,
    tags: ["Figma", "UX Bet", "Prototyping"],
    liveUrl: "/case-study/taskly",
    problem: t("Oversaturated task management market where existing apps cause severe cognitive overload by crowding subtasks, timers, and tags into a single cramped viewport.", "سوق إدارة مهام مشبع حيث تسبب التطبيقات الحالية عبئًا معرفيًا شديدًا عن طريق تكديس المهام الفرعية والمؤقتات والعلامات في عرض ضيق واحد."),
    solution: t("Made a contrarian UX bet: hide complex features until explicitly invoked. Created a hyper-minimalist interface that handles nested subtasks and timers through progressive disclosure.", "راهنت على تصميم معاكس: إخفاء الميزات المعقدة حتى يتم استدعاؤها صراحة. أنشأت واجهة مبسطة للغاية تتعامل مع المهام الفرعية والمؤقتات من خلال الكشف التدريجي."),
    techStack: ["Figma", "User Research", "Wireframing"],
    role: t("Lead Product Designer. Orchestrated the design strategy, rejected overly complex flows, and delivered a high-fidelity prototype focused on preattentive processing.", "مصمم منتج رئيسي. نسقت استراتيجية التصميم، ورفضت التدفقات المعقدة للغاية، وقدمت نموذجًا أوليًا عالي الدقة."),
  },
  {
    id: "byto-academy",
    title: t("Byto Academy", "أكاديمية بايتو"),
    niche: t("EdTech · Kids Media UX", "تقنية تعليمية · تجربة مستخدم للأطفال"),
    image: studybuddyImg,
    tags: ["Visual Design", "Engagement", "UI/UX"],
    liveUrl: "/case-study/byto-academy",
    problem: t("Educational platforms for younger demographics often fail by treating children like mini-adults, using dense text and rigid navigation that destroys engagement and retention.", "غالبًا ما تفشل المنصات التعليمية للأطفال في معاملتهم كبالغين صغار، باستخدام نصوص كثيفة وتنقل جامد يدمر التفاعل والاحتفاظ."),
    solution: t("Tailored the entire platform for a Kids Media audience. Focused heavily on vibrant visuals, macro-animations, and radical simplicity to create an immersive, game-like learning environment.", "صممت المنصة بالكامل لتناسب جمهور وسائل إعلام الأطفال. ركزت بشكل كبير على المرئيات النابضة بالحياة والرسوم المتحركة الكبيرة والبساطة الجذرية لخلق بيئة تعليمية غامرة."),
    techStack: ["Figma", "Visual Hierarchy", "Interaction Design"],
    role: t("Product Designer. Redefined the visual language for the EdTech space, prioritizing immediate visual feedback and frictionless exploration for younger users.", "مصمم منتج. أعدت تعريف اللغة المرئية لمساحة التقنية التعليمية، مع إعطاء الأولوية للتعليقات المرئية الفورية والاستكشاف السلس."),
  }
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
