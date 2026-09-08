import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaBehance, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/n-logo-transparent.png';
import footerBg from '../assets/cloudy-bg.png';

export default function Footer() {
  return (
    <footer className="relative text-headline py-20 px-6 overflow-hidden bg-background">
      {/* Light, soft cloud background (No dark blends) */}
      <img src={footerBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/50"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Nadia Hossny" className="h-10 w-auto mb-4 drop-shadow-sm" />
          <p className="text-sm font-medium text-bodytext">Crafting intuitive products with purpose and precision.</p>
        </div>
        <div className="flex gap-8 items-center text-[13px] uppercase tracking-widest font-medium">
          <a href="mailto:nadiahossny426@gmail.com" className="hover:text-cta transition-colors flex items-center gap-2" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors flex items-center gap-2" aria-label="WhatsApp">
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/nadiahossny" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors flex items-center gap-2" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/nadiahossny" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors flex items-center gap-2" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://behance.net/nadiahossny" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors flex items-center gap-2" aria-label="Behance">
            <FaBehance className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto mt-16 text-center text-xs text-bodytext/80 font-medium">
        © {new Date().getFullYear()} Nadia Hossny. All rights reserved.
      </div>
    </footer>
  );
}
