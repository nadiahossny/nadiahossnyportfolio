import { useLang } from "../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  
  return (
    <footer className="border-t border-border/40 py-8 bg-background mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} {t("Nadia Hossny.", "ناديا حسني.")}</span>
        </div>
        <div className="flex items-center gap-6">
            <a href="https://github.com/nadiahossny" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/nadiahossny" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://www.behance.net/nadiahossny" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};
