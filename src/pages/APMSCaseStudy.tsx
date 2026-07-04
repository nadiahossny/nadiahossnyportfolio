import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import pharmasysImg from "@/assets/pharmasys.png";

export default function APMSCaseStudy() {
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
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.1)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Reinventing pharmacy operations
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 drop-shadow-sm">
            PharmaSys & Roshetty
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-10">
            UX, app design, and the human-hardware connection.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-muted-foreground glass rounded-2xl py-4 px-6 inline-flex mx-auto text-left">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2"><span className="opacity-70 w-20">Role:</span> <strong className="text-foreground font-medium">Product/UX Designer & Connections Engineer</strong></span>
              <span className="flex items-center gap-2"><span className="opacity-70 w-20">Team:</span> <strong className="text-foreground font-medium">Graduation project (AI team built robot/models; I owned UX/App/Connection)</strong></span>
              <span className="flex items-center gap-2"><span className="opacity-70 w-20">Timeline:</span> <strong className="text-foreground font-medium">8 months, senior year</strong></span>
              <span className="flex items-center gap-2"><span className="opacity-70 w-20">Tools:</span> <strong className="text-foreground font-medium">Figma, Flutter, Node.js, PostgreSQL</strong></span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12 relative z-10">
        
        <img src={pharmasysImg} alt="PharmaSys & Roshetty Hero Mockup" className="w-full rounded-3xl shadow-glow border border-border" />

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">1</span>
            The Problem
          </h2>
          <p className="text-lg leading-relaxed text-foreground font-medium mb-6">
            Most independent and mid-sized pharmacies still run on paper. Inventory is tracked in manual ledgers, prescriptions are read and entered by hand, and the few automated/robotic dispensing solutions that exist are built for large hospitals — expensive, hardware-heavy, and out of reach for the pharmacies that actually need them most.
          </p>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              This isn't just inefficient. Manual dispensing causes real errors, and misread handwriting on prescriptions is a direct patient-safety risk.
            </p>
            <p>
              We validated this wasn't a guess: in our user survey, <strong>83% of respondents reported pharmacy wait times over 15 minutes</strong>, and a clear majority rated a localized, mobile-first interface as "extremely valuable" — confirming both the operational pain and the appetite for a digital solution, in Arabic-first, local context.
            </p>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">2</span>
            Why Existing Solutions Fall Short
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We mapped the competitive landscape early, which shaped our whole approach:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-foreground">
                  <th className="py-4 px-4 font-semibold"></th>
                  <th className="py-4 px-4 font-semibold">Workflow Automation</th>
                  <th className="py-4 px-4 font-semibold">Hardware Cost</th>
                  <th className="py-4 px-4 font-semibold">Integration</th>
                  <th className="py-4 px-4 font-semibold">Fit</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 font-medium text-foreground">Commercial pharmacy software</td>
                  <td className="py-4 px-4">Manual entry required</td>
                  <td className="py-4 px-4">Low</td>
                  <td className="py-4 px-4">Low</td>
                  <td className="py-4 px-4">Generic</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 font-medium text-foreground">Standard robotics (hospital-grade)</td>
                  <td className="py-4 px-4">Automated</td>
                  <td className="py-4 px-4">High ($$$$)</td>
                  <td className="py-4 px-4">High complexity</td>
                  <td className="py-4 px-4">Industrial only</td>
                </tr>
                <tr className="bg-primary/5">
                  <td className="py-4 px-4 font-bold text-foreground">Our system</td>
                  <td className="py-4 px-4 font-bold text-foreground">Automated</td>
                  <td className="py-4 px-4 font-bold text-foreground">Low-cost ($)</td>
                  <td className="py-4 px-4 font-bold text-foreground">Seamless / custom</td>
                  <td className="py-4 px-4 font-bold text-foreground">Optimized for independent pharmacies</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-lg leading-relaxed text-foreground font-medium">
            The gap was clear: nobody was building automation <em>and</em> keeping it affordable and usable for the pharmacy that isn't a hospital.
          </p>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">3</span>
            The Solution: A Two-Sided Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We designed PharmaSys & Roshetty as a connected ecosystem with three audiences, not one app:
          </p>
          
          <ul className="space-y-4 text-lg text-muted-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong>Roshetty (Patient App)</strong> — upload a prescription, track order status, scan and submit refills</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong>PharmaSys (Pharmacist/Manager Dashboard)</strong> — review incoming prescriptions, manage inventory, trigger and monitor the dispensing robot, view AI-driven demand forecasting and financial reports</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong>Dispensing Robot</strong> — physically picks and dispenses medication once a prescription is verified</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-foreground font-medium italic border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-xl">
            My job was making sure these three pieces felt like one coherent system to the humans using them — not three disconnected tools bolted together.
          </p>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">4</span>
            Process
          </h2>

          <div className="space-y-8">
            <div>
               <h4 className="font-semibold mb-3 text-lg text-foreground">Defining the actors and what each one actually needs</h4>
               <p className="text-muted-foreground leading-relaxed">
                 Before any screens, I mapped out every role in the ecosystem — Patient, Pharmacist, Pharmacy Manager, plus the non-human actors (AI Engine, Dispensing Robot) — and what each interaction needed to trigger downstream. This use-case mapping is what let the manual prescription-to-dispensing flow get fully automated without losing a human checkpoint where it mattered (verification before dispensing).
               </p>
            </div>
            
            <div>
               <h4 className="font-semibold mb-3 text-lg text-foreground">Low-fidelity first</h4>
               <p className="text-muted-foreground leading-relaxed">
                 Started with low-fidelity wireframes to lock the information architecture — filter/list/detail pattern for inventory on the dashboard side, and a simple linear flow (scan → confirm → track) for the patient side — before touching visual design. Patients needed near-zero friction (they're often not at full attention, possibly unwell); pharmacists needed information density and control, since they're managing inventory, revenue, and a robot simultaneously.
               </p>
            </div>

            <div>
               <h4 className="font-semibold mb-3 text-lg text-foreground">Designing for two very different cognitive loads in one system</h4>
               <p className="text-muted-foreground leading-relaxed">
                 This was the core UX problem. The patient app strips everything down — one primary action per screen, large touch targets, status shown as a simple visual state (hourglass → checkmark) rather than technical jargon. The manager dashboard is the opposite: it needs to surface a lot — pending prescriptions, expiring stock, revenue trends, AI alerts — without becoming overwhelming, so I used clear visual hierarchy (color-coded action cards: red for risk, blue for action-required, green for stable) so a pharmacist can triage at a glance instead of reading every row.
               </p>
            </div>

            <div>
               <h4 className="font-semibold mb-3 text-lg text-foreground">A defined visual system</h4>
               <p className="text-muted-foreground leading-relaxed">
                 Built a color and component schema (primary blues, neutral inks, and a semantic status palette — teal/amber/red/green/violet) so the dashboard's alerts and statuses are instantly readable without needing a legend, which matters in a fast-paced pharmacy environment.
               </p>
            </div>

            <div>
               <h4 className="font-semibold mb-3 text-lg text-foreground">Role-based access, not one-size-fits-all login</h4>
               <p className="text-muted-foreground leading-relaxed">
                 Designed the sign-in flow to split Manager (full access) from Staff (scan-only), since not every pharmacy employee should be able to touch revenue or robot controls — a small detail, but one that reflects real pharmacy operations rather than treating all staff as equal.
               </p>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">5</span>
            My Specific Contribution: The Connection Layer
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Beyond UX and UI, I designed and built the layer that makes the ecosystem actually function as one system: the Flutter apps (patient + dashboard) communicate through a Node.js/Express API gateway, which talks to PostgreSQL, the OCR/forecasting AI services, and — over serial protocol — the robotic arm itself.
            </p>
            <p>
              I'm not claiming the AI models or the robot hardware (that was the AI team's work), but the architecture connecting a tablet dashboard to live hardware over USB serial, with WebSocket-based real-time status updates flowing back to the UI, was mine to design and implement.
            </p>
            <p className="text-foreground font-medium p-6 bg-secondary/50 rounded-2xl border border-border">
              This is the detail worth highlighting in interviews: I didn't just design screens, I designed how a human's tap on a screen becomes a physical action in the real world, and how that physical action's status gets back to the human in a way they can trust at a glance.
            </p>
          </div>
        </section>
        
        <section className="glass rounded-3xl p-8 md:p-10 mb-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">6</span>
            Outcome
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            A working, demoed prototype across patient app, pharmacist dashboard, and physical robotic dispensing — showing that low-cost, accessible automation for independent pharmacies isn't just theoretical. The project successfully integrated physical robotics with user-centric apps, achieving a fully automated, low-latency workflow that dramatically reduced manual intervention.
          </p>

          <div className="mt-12 flex justify-center">
            <a 
              href="https://github.com/nadiahossny" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
            >
              View More Projects on GitHub
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
