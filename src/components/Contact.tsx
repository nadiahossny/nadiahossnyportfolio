import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Download } from "lucide-react";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/nadiahossny426@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message
        })
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("idle");
        alert(t("Failed to send message. Please try again later.", "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً."));
      }
    } catch {
      setStatus("idle");
      alert(t("An error occurred. Please try again.", "حدث خطأ. يرجى المحاولة مرة أخرى."));
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-primary/40 rounded-full"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{t("Get in Touch", "تواصل معي")}</span>
            </div>
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
              {t("Get in ", "تواصل ")}<span className="text-gradient">{t("Touch", "معي")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t("I bring a hybrid approach to product development, blending user-centered design with robust engineering. If you're building a team that values both systems thinking and polished execution, I'd love to chat.", "أقدم نهجاً هجيناً لتطوير المنتجات، يمزج بين التصميم المتمحور حول المستخدم والهندسة القوية. إذا كنت تبني فريقاً يقدر التفكير المنهجي والتنفيذ المتقن، يسعدني التواصل معك.")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:nadiahossny426@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                <Mail className="h-4 w-4 text-primary" />
                {t("Email Me", "راسلني")}
              </a>
              <a
                href="https://linkedin.com/in/nadiahossny"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                <FaLinkedin className="h-4 w-4 text-primary" />
                {t("LinkedIn", "لينكد إن")}
              </a>
              <a
                href="https://github.com/nadiahossny"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                <FaGithub className="h-4 w-4 text-primary" />
                {t("GitHub", "جيت هب")}
              </a>
              <a
                href="https://www.behance.net/nadiahossny"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                <FaBehance className="h-4 w-4 text-primary" />
                {t("Behance", "بيهانس")}
              </a>
              <a
                href="/resume.pdf"
                download="Nadia_Hossny_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                <Download className="h-4 w-4 text-primary" />
                {t("Download Resume", "تحميل السيرة الذاتية")}
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            <div className="absolute -z-10 -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-24 -left-24 h-48 w-48 rounded-full bg-accent/20 blur-3xl"></div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{t("Name", "الاسم")}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-sm outline-none transition-smooth focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 shadow-sm backdrop-blur-md"
                  placeholder={t("Jane Doe", "أحمد محمد")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{t("Email", "البريد الإلكتروني")}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-sm outline-none transition-smooth focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 shadow-sm backdrop-blur-md"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{t("Message", "الرسالة")}</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-sm outline-none transition-smooth focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 shadow-sm backdrop-blur-md resize-none"
                  placeholder={t("Tell me about your project...", "أخبرني عن مشروعك...")}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-white shadow-glow transition-smooth hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t("Sending...", "جاري الإرسال...") : status === 'sent' ? t("Message Sent!", "تم إرسال الرسالة!") : t("Send Message", "إرسال الرسالة")}
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};
