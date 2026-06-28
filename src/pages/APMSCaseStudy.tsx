import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import pharmasysImg from "@/assets/pharmasys.png";
import apmsDashboardImg from "@/assets/apms_dashboard.png";
import apmsInventoryImg from "@/assets/apms_inventory.png";
import apmsAiCenterImg from "@/assets/apms_ai_center.png";
import apmsRoshettyImg from "@/assets/apms_roshetty.png";

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
            Enterprise Healthcare · AI · Robotics
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 drop-shadow-sm">
            <span className="text-gradient">APMS</span> Ecosystem
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Advanced Pharmacy Management System integrating AI, WebSockets, and Robotic Dispensing
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-muted-foreground glass rounded-2xl py-4 px-6 inline-flex mx-auto">
            <span className="flex items-center gap-2"><span className="opacity-70">Stack:</span> <strong className="text-foreground font-medium">Flutter, Node.js, Python, PostgreSQL, ESP32</strong></span>
            <div className="w-1 h-1 rounded-full bg-border hidden md:block"></div>
            <span className="flex items-center gap-2"><span className="opacity-70">Focus:</span> <strong className="text-foreground font-medium">Architecture & Hardware</strong></span>
            <div className="w-1 h-1 rounded-full bg-border hidden md:block"></div>
            <span className="flex items-center gap-2">
              <span className="opacity-70">Status:</span> 
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/30">Production Ready</span>
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10 relative z-10">
        
        <img src={pharmasysImg} alt="APMS Hero Mockup" className="w-full rounded-3xl shadow-glow border border-border" />

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">1</span>
            Executive Summary
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            The <strong className="text-foreground">Advanced Pharmacy Management System (APMS)</strong> is an intelligent ecosystem designed to bridge the gap between rigid traditional pharmacy software and modern healthcare needs. It manages inventory securely, predicts future stock demands through AI, and dispenses medication physically via robotics.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            This case study details the technical implementation of the APMS ecosystem, comprising a staff dashboard, a secure Node.js gateway, an AI predictive engine, and the direct hardware integration controlling the robotic dispensing arm.
          </p>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">2</span>
            Core Architecture
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">The system relies on a modular, decentralized microservices architecture:</p>

          <div className="bg-secondary/50 border border-border rounded-2xl p-6 mb-8 text-center">
             <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <div className="bg-background border border-border rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                  <div className="font-semibold text-sm">Roshetty App</div>
                  <div className="text-xs text-muted-foreground mt-1">Patient (Mobile)</div>
                </div>
                <div className="text-primary font-bold px-2">↔</div>
                <div className="bg-background border border-border rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                  <div className="font-semibold text-sm">APMS Gateway</div>
                  <div className="text-xs text-muted-foreground mt-1">Node.js API & WS</div>
                </div>
                <div className="text-primary font-bold px-2">↔</div>
                <div className="bg-background border border-border rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                  <div className="font-semibold text-sm">PostgreSQL</div>
                  <div className="text-xs text-muted-foreground mt-1">Core Database</div>
                </div>
             </div>
             <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="bg-background border border-border rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                  <div className="font-semibold text-sm">APMS Dashboard</div>
                  <div className="text-xs text-muted-foreground mt-1">Staff UI</div>
                </div>
                <div className="text-primary font-bold px-2">↔</div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                  <div className="font-semibold text-sm text-primary">AI Microservice</div>
                  <div className="text-xs text-primary/70 mt-1">Python Models</div>
                </div>
                <div className="text-primary font-bold px-2">↔</div>
                <div className="bg-background border border-border rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                  <div className="font-semibold text-sm">Robotic Arm</div>
                  <div className="text-xs text-muted-foreground mt-1">ESP32 / Motors</div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
              <h4 className="font-semibold mb-3 text-sm">1. Node.js Gateway & Security</h4>
              <ul className="list-disc ml-4 space-y-1 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Runtime:</strong> Node.js with Express & TypeScript</li>
                <li><strong className="text-foreground">Auth:</strong> JWT & bcrypt for RBAC</li>
                <li><strong className="text-foreground">Real-time:</strong> Native WebSocket server (ws)</li>
              </ul>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
              <h4 className="font-semibold mb-3 text-sm">2. Database (PostgreSQL)</h4>
              <ul className="list-disc ml-4 space-y-1 text-sm text-muted-foreground">
                <li>ACID compliance for inventory accuracy</li>
                <li>Financial immutability ("Price-Locking")</li>
                <li>Fuzzy Search for OCR data linking</li>
              </ul>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
              <h4 className="font-semibold mb-3 text-sm">3. Intelligence Engine (Python)</h4>
              <ul className="list-disc ml-4 space-y-1 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Demand Forecasting:</strong> XGBoost</li>
                <li><strong className="text-foreground">Smart Reorder:</strong> Q-Learning</li>
                <li><strong className="text-foreground">Integrity Audit:</strong> Neural Autoencoder</li>
                <li><strong className="text-foreground">OCR:</strong> Two-pass error correction</li>
              </ul>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
              <h4 className="font-semibold mb-3 text-sm">4. Hardware (Robotic Arm)</h4>
              <ul className="list-disc ml-4 space-y-1 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Controller:</strong> ESP32 / Raspberry Pi</li>
                <li><strong className="text-foreground">Communication:</strong> WebSocket & HTTP</li>
                <li><strong className="text-foreground">Interrupts:</strong> Safety ISR for emergency</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">3</span>
            Key Technical Challenges
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Phantom Stock Prevention & ACID</h3>
              <p className="text-muted-foreground text-base">When stock arrives, invoices are kept in a <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">PENDING</code> state. The critical logic ensures physical stock quantities do not increase until the invoice status flips to <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground">PAID</code>. This prevents "phantom" inventory that could jam the automated hardware if a digitally present medicine is physically missing.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Financial Baseline Truth</h3>
              <p className="text-muted-foreground text-base">When a prescription is checked out, the system copies the current prices from the inventory table and locks them into the sales row. If medicine prices inflate next month, historical profit margins for today remain mathematically accurate.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Blind Reconciliation via Autoencoders</h3>
              <p className="text-muted-foreground text-base">For shift auditing, the backend calculates expected cash but employs a <strong className="text-foreground">Blind Reconciliation</strong>—staff input their actual till amount without knowing the expectation. An Autoencoder model then detects patterns of anomalies, alerting managers to potential human error or fraud.</p>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">4</span>
            Predictive AI & Analytics
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">The AI Microservice transforms the pharmacy from a static management tool into an intelligent healthcare hub.</p>

          <img src={apmsAiCenterImg} alt="AI Command Center Dashboard" className="w-full rounded-2xl shadow-glow border border-border mb-8" />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-secondary/50 p-3 font-semibold border-b-2 border-border rounded-tl-xl">Model</th>
                  <th className="bg-secondary/50 p-3 font-semibold border-b-2 border-border">Technology</th>
                  <th className="bg-secondary/50 p-3 font-semibold border-b-2 border-border rounded-tr-xl">Business Impact</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground divide-y divide-border/50">
                <tr className="hover:bg-secondary/30 transition-smooth">
                  <td className="p-3"><span className="bg-primary/20 text-primary px-2.5 py-1 rounded-full text-xs font-medium">Demand Forecasting</span></td>
                  <td className="p-3 text-foreground font-medium">XGBoost Regressor</td>
                  <td className="p-3">Analyzes historical sales to handle non-linear seasonal patterns in medicine demands.</td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-smooth">
                  <td className="p-3"><span className="bg-primary/20 text-primary px-2.5 py-1 rounded-full text-xs font-medium">Smart Reorder</span></td>
                  <td className="p-3 text-foreground font-medium">Q-Learning</td>
                  <td className="p-3">Balances the cost of overstocking against the risk of life-saving medicine running out.</td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-smooth">
                  <td className="p-3"><span className="bg-primary/20 text-primary px-2.5 py-1 rounded-full text-xs font-medium">Integrity Audit</span></td>
                  <td className="p-3 text-foreground font-medium">Autoencoder (Keras)</td>
                  <td className="p-3">Reconstructs shift data; high reconstruction error flags shifts for anomalies.</td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-smooth">
                  <td className="p-3"><span className="bg-primary/20 text-primary px-2.5 py-1 rounded-full text-xs font-medium">Expiry Clearance</span></td>
                  <td className="p-3 text-foreground font-medium">Heuristic Engine</td>
                  <td className="p-3">Calculates dynamic discounts (20%-50%) for expiring items to liquidate risky stock.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">5</span>
            Hardware Integration Pipeline
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">The physical robotic arm is the operational core of APMS. We established a strict, low-latency communication contract using WebSockets.</p>

          <ol className="list-decimal ml-5 space-y-4 text-base text-muted-foreground">
            <li><strong className="text-foreground">The Wake-Up Call:</strong> Node.js server broadcasts a <code className="bg-secondary px-1 py-0.5 rounded text-sm text-foreground">DISPATCHED</code> event via WebSocket to the hardware.</li>
            <li><strong className="text-foreground">Coordinate Fetch:</strong> The robot queries the backend to fetch physical coordinates. Firmware maps this to X/Y/Z motor steps.</li>
            <li><strong className="text-foreground">Execution & Reporting:</strong> Once items drop, hardware hits a <code className="bg-secondary px-1 py-0.5 rounded text-sm text-foreground">/complete</code> POST route, triggering inventory deduction.</li>
            <li><strong className="text-foreground">Safety Interrupts:</strong> If aborted, an ISR instantly cuts power to stepper drivers and returns the arm to home position.</li>
          </ol>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">6</span>
            Human-Computer Interaction (HCI)
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">Pharmacists work in high-stress, fast-paced environments. The APMS dashboard is designed using core HCI principles to reduce cognitive load.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
              <h4 className="font-semibold mb-2">Preattentive Processing</h4>
              <p className="text-sm text-muted-foreground">Instead of showing raw expiration dates, the app uses Status enums (Healthy, Warning, Critical) with color-coded badges, allowing pharmacists to scan a list of 500 items in milliseconds.</p>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
              <h4 className="font-semibold mb-2">Thumb-Reach Navigation</h4>
              <p className="text-sm text-muted-foreground">On mobile/tablets (carried by pharmacists between shelves), the UI shifts to a bottom NavigationBar for optimal one-handed operation.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <img src={apmsDashboardImg} alt="Desktop Dashboard" className="w-full rounded-2xl shadow-glow border border-border object-cover" />
              <img src={apmsInventoryImg} alt="Inventory Interface" className="w-full rounded-2xl shadow-glow border border-border object-cover" />
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-6 flex flex-col md:flex-row items-center gap-8 hover:bg-secondary/50 transition-smooth">
               <div className="flex-1">
                 <h4 className="font-semibold mb-2">Patient Integration (Roshetty)</h4>
                 <p className="text-sm text-muted-foreground">The mobile app connects patients directly to the pharmacy's real-time inventory, allowing prescription scanning and one-tap refill requests that immediately sync with the APMS system.</p>
               </div>
               <div className="max-w-[200px] shrink-0">
                 <img src={apmsRoshettyImg} alt="Roshetty Mobile App" className="w-full rounded-[2rem] shadow-glow border-4 border-border" />
               </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
