import { useLang } from "../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold">N</span>
          <span>© {new Date().getFullYear()} {t("Nadia Hossny", "نادية حسني")}</span>
        </div>
        <div className="font-mono text-xs">{t("Available for new projects", "متاح لمشاريع جديدة")}</div>
      </div>
    </footer>
  );
};
