import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", labelEn: "About", labelAr: "نبذة عني" },
  { id: "work", labelEn: "Work", labelAr: "أعمالي" },
  { id: "testimonials", labelEn: "Testimonials", labelAr: "آراء العملاء" },
  { id: "contact", labelEn: "Connect", labelAr: "تواصل معي" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-smooth ${
            scrolled ? "glass shadow-sm" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
              N
            </span>
            <span className="text-gradient">Nadia Hossny</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                >
                  {t(l.labelEn, l.labelAr)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <a href="#contact" className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105">
                {t("Contact Me", "تواصل معي")}
              </a>
            </div>
            
            <div className="flex relative rounded-full bg-secondary/50 p-1 items-center border border-border">
              {(["en", "ar"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    if (lang !== l) toggle();
                  }}
                  className={`relative z-10 px-3 py-1.5 text-xs md:px-4 md:py-1.5 md:text-sm font-semibold transition-colors ${
                    lang === l ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l === "en" ? "EN" : "AR"}
                  {lang === l && (
                    <motion.div
                      layoutId="lang-active"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-primary shadow-glow"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-secondary"
                >
                  {t(l.labelEn, l.labelAr)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.header>
  );
};
