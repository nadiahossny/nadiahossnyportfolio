import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaBehance, FaWhatsapp } from "react-icons/fa";
import { useLang } from "../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  
  return (
    <footer className="py-12 bg-transparent mt-auto relative z-10">
      <div className="container flex flex-col items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-6">
            <a href="mailto:nadiahossny426@gmail.com" className="hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
            </a>
            <a href="https://wa.me/201064943439" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/nadiahossny" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/nadiahossny" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://www.behance.net/nadiahossny" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="Behance">
                <FaBehance className="h-5 w-5" />
            </a>
        </div>
        <div className="flex items-center">
          <span>© {new Date().getFullYear()} {t("Nadia Hossny", "ناديا حسني")}</span>
        </div>
      </div>
    </footer>
  );
};
