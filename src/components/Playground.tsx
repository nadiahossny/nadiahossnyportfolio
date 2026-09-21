import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { MousePointerClick, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import bloomBookImg from '../assets/projects/creative experiments/bloombookprev.png';

export default function Playground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [note, setNote] = useState("");
  const [noteStatus, setNoteStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSendNote = async () => {
    if (!note.trim()) return;
    setNoteStatus("sending");
    
    try {
      // Web3Forms silent email integration
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE", 
          subject: "New Note from Portfolio Playground",
          message: note,
          from_name: "Portfolio Playground",
        }),
      });
      
      if (response.ok) {
        setNoteStatus("sent");
        setTimeout(() => {
          setNote("");
          setNoteStatus("idle");
        }, 3000);
      } else {
        throw new Error("Web3Forms API failed - check access key");
      }
    } catch (error) {
      // Fallback to regular email app if they haven't set up the API key yet
      const mailtoLink = `mailto:nadiahossny426@gmail.com?subject=Notes from Portfolio&body=${encodeURIComponent(note)}`;
      window.location.href = mailtoLink;
      setNoteStatus("sent");
      setTimeout(() => {
        setNote("");
        setNoteStatus("idle");
      }, 3000);
    }
  };

  // Custom SVG Cursor (Symmetric white cloud with dark blue outline)
  const cloudCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='white' stroke='%23002d69' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.5 17.5h11c2.5 0 4.5-2 4.5-4.5 0-2.2-1.6-4.1-3.8-4.4-.6-2.9-3.2-5.1-6.2-5.1-3 0-5.6 2.2-6.2 5.1-2.2.3-3.8 2.2-3.8 4.4 0 2.5 2 4.5 4.5 4.5z'/%3E%3C/svg%3E") 16 16, auto`;

  return (
    <div 
      className="min-h-screen pt-32 pb-24 bg-white relative overflow-hidden"
      style={{ cursor: cloudCursor }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 relative z-10 flex flex-col items-center text-center">
        <Link to="/" className="absolute left-6 md:left-8 top-0 flex items-center gap-2 text-bodytext hover:text-cta transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
        <h2 className="text-4xl md:text-5xl font-display text-headline mb-4 font-bold mt-12 md:mt-0">The Creative Corner</h2>
        <p className="text-xl text-bodytext font-light flex items-center justify-center gap-2">
          Grab, drag, and explore my interactive playground. <MousePointerClick className="w-5 h-5 text-cta animate-bounce" />
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[600px] max-w-4xl mx-auto border-4 border-dashed border-cloud/50 rounded-[3rem] bg-background/50 overflow-hidden"
      >
        {/* Bloom Book Link */}
        <motion.div
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          className="absolute top-[100px] left-[50px] md:left-[150px] bg-white rounded-3xl shadow-xl cursor-grab border-2 border-cloud z-30 flex flex-col items-center overflow-hidden w-64"
        >
          <img src={bloomBookImg} className="w-full h-32 object-cover pointer-events-none" alt="Bloom Book" loading="lazy" draggable={false} />
          <div className="p-4 w-full text-center">
            <h4 className="font-display font-bold text-headline mb-3">Bloom Book</h4>
            <a 
              href="https://bloombookgift.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-headline text-white rounded-full font-medium hover:bg-headline/90 transition-colors pointer-events-auto"
              draggable={false}
            >
              Visit Bloom Book
            </a>
          </div>
        </motion.div>

        {/* Mini Style Guide */}
        <motion.div
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          initial={{ rotate: -3 }}
          className="absolute top-[250px] left-[100px] md:top-[180px] md:left-[350px] bg-white rounded-2xl shadow-xl p-5 cursor-grab border border-cloud/50 z-20 flex flex-col items-center w-52"
        >
          <span className="text-xs font-bold text-headline uppercase tracking-widest mb-4 border-b border-cloud pb-2 w-full text-center">Brand Colors</span>
          <div className="flex gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-headline shadow-inner" title="Primary (Headline/CTA)"></div>
            <div className="w-8 h-8 rounded-full bg-cloud shadow-inner" title="Cloud (Accent)"></div>
            <div className="w-8 h-8 rounded-full bg-background shadow-inner border border-cloud" title="Background"></div>
          </div>
          <span className="text-[10px] text-bodytext/70 mt-2 font-mono bg-cloud/30 px-2 py-1 rounded">design-system.css</span>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
          initial={{ rotate: 6 }}
          className="absolute top-[180px] left-[200px] md:top-[280px] md:left-[450px] cursor-grab z-20 bg-headline text-white px-5 py-3 rounded-xl shadow-lg flex items-center justify-center"
        >
          <span className="font-display font-medium text-sm tracking-wide">React & Tailwind ⚛️</span>
        </motion.div>

        <motion.div
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
          initial={{ rotate: -5 }}
          className="absolute top-[200px] left-[50px] md:top-[140px] md:left-[550px] cursor-grab z-20 bg-cta text-white px-5 py-3 rounded-xl shadow-lg flex items-center justify-center"
        >
          <span className="font-display font-medium text-sm tracking-wide">Flutter Dev 💙</span>
        </motion.div>

        {/* Sticky Note */}
        <motion.div
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          className="absolute top-[350px] left-[450px] md:left-[600px] bg-white rounded-xl shadow-xl p-6 cursor-grab border border-cloud/50 z-20 w-64 flex flex-col"
        >
          <div className="w-full flex justify-between items-center mb-3">
            <span className="text-xs font-medium text-cta uppercase tracking-wider">Leave a Note</span>
            <div className="w-2 h-2 rounded-full bg-cta/30"></div>
          </div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onPointerDownCapture={(e) => e.stopPropagation()}
            placeholder="Type something here..."
            className="w-full bg-transparent resize-none outline-none text-bodytext placeholder:text-bodytext/50 font-medium min-h-[100px] mb-4"
          />
          <button 
            onClick={handleSendNote}
            disabled={noteStatus !== "idle" || !note.trim()}
            onPointerDownCapture={(e) => e.stopPropagation()}
            className="w-full py-2 bg-headline text-white rounded-lg font-medium text-sm hover:bg-headline/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto"
          >
            {noteStatus === "idle" ? "Save & Send" : noteStatus === "sending" ? "Opening..." : "Sent! ✓"}
          </button>
        </motion.div>

      </div>
    </div>
  );
}
