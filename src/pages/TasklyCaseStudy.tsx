import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import tasklyImg from "@/assets/taskly.png";

export default function TasklyCaseStudy() {
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
        
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            UI/UX Design · Product Strategy
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 drop-shadow-sm">
            <span className="text-gradient">Taskly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10">
            A contrarian UX bet: solving productivity tool overload through extreme progressive disclosure.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-muted-foreground glass rounded-2xl py-4 px-6 inline-flex mx-auto">
            <span className="flex items-center gap-2"><span className="opacity-70">Role:</span> <strong className="text-foreground font-medium">Lead Product Designer</strong></span>
            <div className="w-1 h-1 rounded-full bg-border hidden md:block"></div>
            <span className="flex items-center gap-2"><span className="opacity-70">Focus:</span> <strong className="text-foreground font-medium">Cognitive Load Reduction</strong></span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10 relative z-10">
        
        <img src={tasklyImg} alt="Taskly Hero Mockup" className="w-full rounded-3xl shadow-glow border border-border" />

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">1</span>
            The Problem: Oversaturated Screens
          </h2>
          <p className="text-lg leading-relaxed text-foreground font-medium mb-6">
            The market is flooded with productivity apps that confuse "feature-rich" with "usable."
          </p>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              In our initial user research, we found that users were abandoning popular task management apps not because they lacked features, but because the features themselves became a source of anxiety. Viewing a single task often meant confronting a wall of metadata: tags, priorities, subtasks, estimated times, assignees, and attachments—all visible at once.
            </p>
            <p className="border-l-4 border-primary pl-4 py-2 my-6 font-medium text-foreground italic bg-primary/5 rounded-r-xl">
              Hypothesis: The primary barrier to task completion is the cognitive friction of parsing the task's parameters, not the task itself.
            </p>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">2</span>
            The UX Bet: Progressive Disclosure
          </h2>
          <p className="text-lg leading-relaxed text-foreground font-medium mb-6">
            Handling complexity by hiding it until requested.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            The core design decision for Taskly was to implement extreme progressive disclosure. We decided to hide timers, subtasks, and complex tagging systems behind contextual gestures, rather than keeping them perpetually on-screen.
          </p>

          <h3 className="text-xl font-display font-bold mb-6 mt-8">Rejected Flows & Reasoning:</h3>

          <div className="space-y-8">
            <div className="bg-secondary/10 border border-border rounded-xl p-6 relative">
               <div className="absolute top-4 right-4 bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-red-500/20">Rejected</div>
               <h4 className="font-semibold mb-3 text-lg text-foreground">The "Everything Visible" Accordion</h4>
               <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                 Our first prototype used an accordion pattern where tapping a task expanded it inline to show subtasks and a timer. 
               </p>
               <div className="bg-muted rounded-lg p-8 flex items-center justify-center border border-border text-center">
                 <span className="text-muted-foreground text-sm font-medium">Placeholder: Image of rejected accordion UI</span>
               </div>
               <p className="text-sm text-muted-foreground mt-4 font-medium">
                 Why it failed: It destroyed the vertical rhythm of the list. Expanding a task pushed everything else down, causing users to lose their place and breaking the "glanceability" of their daily agenda.
               </p>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 relative">
               <div className="absolute top-4 right-4 bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-green-500/20">Selected</div>
               <h4 className="font-semibold mb-3 text-lg text-foreground">The "Focus Mode" Modal</h4>
               <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                 Instead of expanding inline, tapping a task opens a dedicated, distraction-free "Focus Mode" overlay. Here, the timer and subtasks are the only things on the screen.
               </p>
               <div className="bg-muted rounded-lg p-8 flex items-center justify-center border border-border text-center">
                 <span className="text-muted-foreground text-sm font-medium">Placeholder: Image of selected Focus Mode UI</span>
               </div>
               <p className="text-sm text-muted-foreground mt-4 font-medium">
                 Why it won: It forces single-tasking. By taking over the viewport, we eliminated the anxiety of the broader to-do list while the user is actively working on a specific item.
               </p>
            </div>
          </div>
        </section>
        
        <section className="glass rounded-3xl p-8 md:p-10 mb-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">3</span>
            End-to-End Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                By intentionally omitting permanent UI fixtures for advanced features, Taskly's onboarding completion rate in testing outperformed competitors with similar feature sets. We proved that power users will readily learn a gesture (like a long-press for subtasks) if it buys them a cleaner, calmer default interface.
              </p>
            </div>
            
            <div className="bg-secondary/20 p-6 rounded-2xl border border-border">
              <h4 className="font-semibold text-lg text-foreground mb-4">Key Takeaways</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Minimalism isn't just aesthetic; it's functional cognitive relief.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Progressive disclosure is the best tool for bridging the gap between novice and power users.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
