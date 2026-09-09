import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/n-logo-transparent.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (location.pathname === '/graphic-design') {
    return null; // The graphic design page has its own custom back button
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-cloud' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
          <img src={logo} alt="Nadia Hossny" className="h-10 md:h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-widest text-headline font-semibold">
          <a href="/#work" className="hover:text-cta transition-colors">Work</a>
          <a href="/#about" className="hover:text-cta transition-colors">About</a>
          <Link to="/graphic-design" className="hover:text-cta transition-colors">Visuals</Link>
          <a href="/#contact" className="hover:text-cta transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-headline p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-xl border-b border-cloud md:hidden py-8 px-6 flex flex-col gap-6 text-sm uppercase tracking-widest text-headline font-semibold z-40">
          <a href="/#work" onClick={() => setIsOpen(false)} className="hover:text-cta transition-colors">Work</a>
          <a href="/#about" onClick={() => setIsOpen(false)} className="hover:text-cta transition-colors">About</a>
          <Link to="/graphic-design" onClick={() => setIsOpen(false)} className="hover:text-cta transition-colors">Visuals</Link>
          <a href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-cta transition-colors">Contact</a>
        </div>
      )}
    </header>
  );
}
