import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import { PenTool, Smartphone, Layout } from "lucide-react";

export const Services = () => {
  const { t } = useLang();

  const services = [
    {
      title: t("Product Design", "تصميم المنتجات"),
      description: t(
        "I create intuitive, data-driven user experiences from research to high-fidelity prototypes.",
        "أقوم بتصميم تجارب مستخدم بديهية تعتمد على البيانات، من مرحلة البحث إلى النماذج الأولية عالية الدقة."
      ),
      icon: <PenTool className="h-6 w-6 text-primary" />,
    },
    {
      title: t("Frontend Development", "تطوير واجهات الويب"),
      description: t(
        "I build responsive, accessible, and performant web applications using React and Next.js.",
        "أقوم ببناء تطبيقات ويب متجاوبة، يمكن الوصول إليها، وعالية الأداء باستخدام React و Next.js."
      ),
      icon: <Layout className="h-6 w-6 text-primary" />,
    },
    {
      title: t("Mobile Engineering", "تطوير تطبيقات الجوال"),
      description: t(
        "I develop cross-platform mobile apps with Flutter, ensuring native-like performance and smooth animations.",
        "أقوم بتطوير تطبيقات جوال متعددة المنصات باستخدام Flutter، لضمان أداء يشبه التطبيقات الأصلية مع حركات سلسة."
      ),
      icon: <Smartphone className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-primary/40 rounded-full"></span>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              {t("My Expertise", "خبراتي")}
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
            {t("What I ", "ماذا ")}<span className="text-gradient">{t("Do.", "أفعل.")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t(
              "Bridging the gap between design and engineering to build products that look great and work flawlessly.",
              "سد الفجوة بين التصميم والهندسة لبناء منتجات تبدو رائعة وتعمل بلا عيوب."
            )}
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-8 rounded-3xl transition-smooth hover:shadow-glow hover:-translate-y-2 flex flex-col items-start text-left"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
