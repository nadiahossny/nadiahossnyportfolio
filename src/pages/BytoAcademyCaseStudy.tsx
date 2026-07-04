import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import studybuddyImg from "@/assets/studybuddy_enhanced.png";

export default function BytoAcademyCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pb-20">
      <CustomCursor />
      
      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <Link to="/" className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium transition-smooth hover:bg-primary/10">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      <header className="text-center px-6 pt-32 pb-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-background"></div>
        
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent-foreground px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            EdTech · Kids Media UX
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 drop-shadow-sm">
            <span className="text-gradient">Byto Academy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Designing an immersive, game-like educational platform that respects a child's cognitive reality.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-muted-foreground glass rounded-2xl py-4 px-6 inline-flex mx-auto">
            <span className="flex items-center gap-2"><span className="opacity-70">Role:</span> <strong className="text-foreground font-medium">Product Designer</strong></span>
            <div className="w-1 h-1 rounded-full bg-border hidden md:block"></div>
            <span className="flex items-center gap-2"><span className="opacity-70">Focus:</span> <strong className="text-foreground font-medium">Visual Design & Engagement</strong></span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10 relative z-10">
        
        <img src={studybuddyImg} alt="Byto Academy Interface" className="w-full rounded-3xl shadow-glow border border-border" />

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">1</span>
            The Problem: Children Are Not Mini-Adults
          </h2>
          <p className="text-lg leading-relaxed text-foreground font-medium mb-6">
            Most EdTech platforms fail because their interfaces are just adult tools painted with brighter colors.
          </p>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              When evaluating legacy educational tools for younger demographics, we noticed a persistent issue: they relied heavily on text-based navigation, dense structural hierarchies, and delayed feedback loops. For a young user, reading a menu isn't just an action; it's a cognitive hurdle that drains the energy they should be using to learn the actual material.
            </p>
            <p className="border-l-4 border-accent pl-4 py-2 my-6 font-medium text-foreground italic bg-accent/5 rounded-r-xl">
              The goal was to build a platform where navigation felt like exploration, and learning felt like play.
            </p>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">2</span>
            The Design Strategy
          </h2>
          <p className="text-lg leading-relaxed text-foreground font-medium mb-6">
            Radical simplicity meets vibrant visual hierarchy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-secondary/30 border border-border rounded-xl p-6 hover:bg-secondary/50 transition-smooth">
               <h4 className="font-semibold mb-3 text-lg text-foreground">Icon-Driven Navigation</h4>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 We replaced almost all text-heavy menus with large, expressive iconography. Young users map spatial locations and visual shapes much faster than they decode words.
               </p>
            </div>
            
            <div className="bg-secondary/30 border border-border rounded-xl p-6 hover:bg-secondary/50 transition-smooth">
               <h4 className="font-semibold mb-3 text-lg text-foreground">Macro-Animations</h4>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 Every action needed an immediate, joyful reaction. Completing a module triggers a full-screen, physics-based confetti animation, reinforcing positive behavior instantly rather than waiting for a distant "report card."
               </p>
            </div>
            
            <div className="bg-secondary/30 border border-border rounded-xl p-6 hover:bg-secondary/50 transition-smooth">
               <h4 className="font-semibold mb-3 text-lg text-foreground">Soft, Safe Aesthetics</h4>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 We moved away from sharp corners and high-contrast starkness. The interface utilizes rounded edges, soft shadows, and warm, inviting color palettes that reduce visual fatigue and create a welcoming environment.
               </p>
            </div>
            
            <div className="bg-secondary/30 border border-border rounded-xl p-6 hover:bg-secondary/50 transition-smooth">
               <h4 className="font-semibold mb-3 text-lg text-foreground">Frictionless Flow</h4>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 Instead of returning to a dashboard after every lesson, the UI presents the "next step" as the largest, most obvious touch target on the screen, keeping the child in a continuous state of flow.
               </p>
            </div>
          </div>
        </section>
        
        <section className="glass rounded-3xl p-8 md:p-10 mb-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">3</span>
            The Impact
          </h2>
          
          <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              By aligning the interface with how children actually process information, Byto Academy saw significant improvements in session length and voluntary return rates. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We proved that in the EdTech space, the interface itself is part of the curriculum. If the tool is hard to use, the subject feels hard to learn. By making the interface frictionless and delightful, we made learning feel like a game they actually wanted to play.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
