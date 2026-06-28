import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Add global style to hide default cursor
    document.body.style.cursor = 'none';
    
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center drop-shadow-md"
      animate={{
        x: position.x - 12, // center the 24x24 icon
        y: position.y - 12,
        scale: isClicking ? 0.6 : 1, // shrinks on click
      }}
      transition={{
        type: "spring",
        stiffness: 900,
        damping: 25,
        mass: 0.1
      }}
    >
      <Cloud 
        size={24} 
        fill="white" 
        color="#3b82f6" // blue border
        strokeWidth={2}
      />
    </motion.div>
  );
}
