import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { MousePointerClick, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import bytoAcademyImg from '../assets/projects/creative experiments/byto academy.png';
import bloomBookImg from '../assets/projects/creative experiments/bloombookprev.png';

const desktopScreens = Object.values(import.meta.glob('../assets/projects/desktop view-ui screens/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })) as string[];
const mobileScreens = Object.values(import.meta.glob('../assets/projects/mobile view-ui screens/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })) as string[];
const allCreative = Object.values(import.meta.glob('../assets/projects/creative experiments/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })) as string[];

// Filter out the images that have dedicated interactive cards
const creativeExperiments = allCreative.filter(src => 
  !src.includes('bloombook') && !src.includes('byto%20academy') && !src.includes('byto academy')
);

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
          access_key: "11d9c258-baed-40a7-9f00-a190699aea1b", 
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
        className="relative w-full h-[850px] max-w-7xl mx-auto border-4 border-dashed border-cloud/50 rounded-[3rem] bg-background/50 overflow-hidden"
      >
        
        {/* Desktop Frame */}
        <motion.div 
          drag 
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          className="absolute top-[80px] left-[40px] md:left-[100px] w-[600px] h-[380px] bg-headline rounded-t-xl rounded-b-md shadow-2xl p-2 cursor-grab z-10 flex flex-col"
        >
          <div className="flex gap-2 mb-2 px-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 bg-white rounded-sm overflow-y-auto overflow-x-hidden hide-scrollbar pointer-events-auto">
            {desktopScreens.map((src, i) => (
              <img key={i} src={src} className="w-full h-auto object-cover" alt="Desktop UI" loading="lazy" draggable={false} />
            ))}
          </div>
        </motion.div>

        {/* Mobile Frame */}
        <motion.div 
          drag 
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          className="absolute top-[160px] left-[400px] md:left-[850px] w-[280px] h-[580px] bg-headline rounded-[2.5rem] shadow-2xl p-3 cursor-grab z-20"
        >
          <div className="w-full h-full bg-white rounded-[2rem] overflow-y-auto overflow-x-hidden hide-scrollbar relative pointer-events-auto">
            {/* Hole-punch camera */}
            <div className="sticky top-2 inset-x-0 h-4 w-4 bg-headline rounded-full mx-auto z-20 pointer-events-none"></div>
            {/* Images flush to the top and bottom (no padding) */}
            <div className="-mt-6">
              {mobileScreens.map((src, i) => (
                <img key={i} src={src} className="w-full h-auto object-cover" alt="Mobile UI" loading="lazy" draggable={false} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Creative Experiments & Images */}
        {creativeExperiments.map((src, i) => (
          <motion.div
            key={i}
            drag
            dragMomentum={false}
            whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
            initial={{ rotate: Math.random() * 20 - 10 }}
            className="absolute w-48 h-48 md:w-64 md:h-64 shadow-xl cursor-grab z-0 rounded-2xl overflow-hidden border-[6px] border-white"
            style={{ top: `${150 + (i * 120)}px`, left: `${100 + (i * 200)}px` }}
          >
            <img src={src} className="w-full h-full object-cover pointer-events-none" alt="Creative Experiment" loading="lazy" draggable={false} />
          </motion.div>
        ))}

        {/* Bloom Book Link */}
        <motion.div
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          className="absolute top-[550px] left-[40px] md:left-[150px] bg-white rounded-3xl shadow-xl cursor-grab border-2 border-cloud z-30 flex flex-col items-center overflow-hidden w-64"
        >
          <img src={bloomBookImg} className="w-full h-32 object-cover pointer-events-none" alt="Bloom Book" loading="lazy" draggable={false} />
          <div className="p-4 w-full text-center">
            <h4 className="font-display font-bold text-headline mb-3">Bloom Book</h4>
            <a 
              href="https://bloombookgift.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-cta text-white rounded-full font-medium hover:bg-headline transition-colors pointer-events-auto"
              draggable={false}
            >
              Visit Bloom Book
            </a>
          </div>
        </motion.div>

        {/* Byto Academy Link */}
        <motion.div
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          className="absolute top-[80px] left-[450px] md:left-[900px] bg-white rounded-3xl shadow-xl cursor-grab border-2 border-cloud z-30 flex flex-col items-center overflow-hidden w-64"
        >
          <img src={bytoAcademyImg} className="w-full h-32 object-cover pointer-events-none" alt="Byto Academy" loading="lazy" draggable={false} />
          <div className="p-4 w-full text-center">
            <h4 className="font-display font-bold text-headline mb-3">Byto Academy</h4>
            <a 
              href="https://byto-academy.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-cta text-white rounded-full font-medium hover:bg-headline transition-colors pointer-events-auto"
              draggable={false}
            >
              Visit Byto
            </a>
          </div>
        </motion.div>

        {/* Sticky Note */}
        <motion.div
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          className="absolute top-[550px] left-[400px] md:left-[800px] bg-white rounded-xl shadow-xl p-6 cursor-grab border border-cloud/50 z-20 w-64 flex flex-col"
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
            className="w-full py-2 bg-cta text-white rounded-lg font-medium text-sm hover:bg-headline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {noteStatus === "idle" ? "Save & Send" : noteStatus === "sending" ? "Opening..." : "Sent! ✓"}
          </button>
        </motion.div>

      </div>
    </div>
  );
}
