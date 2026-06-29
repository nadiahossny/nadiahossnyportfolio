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
            Enterprise Healthcare · UX/UI Design
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 drop-shadow-sm">
            <span className="text-gradient">APMS</span> Prototype
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Designing an intuitive ecosystem for pharmacists to manage inventory, AI insights, and robotics effortlessly.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-muted-foreground glass rounded-2xl py-4 px-6 inline-flex mx-auto">
            <span className="flex items-center gap-2"><span className="opacity-70">Tools:</span> <strong className="text-foreground font-medium">Figma, FigJam, Adobe Illustrator</strong></span>
            <div className="w-1 h-1 rounded-full bg-border hidden md:block"></div>
            <span className="flex items-center gap-2"><span className="opacity-70">Role:</span> <strong className="text-foreground font-medium">Lead UX/UI Designer</strong></span>
            <div className="w-1 h-1 rounded-full bg-border hidden md:block"></div>
            <span className="flex items-center gap-2">
              <span className="opacity-70">Status:</span> 
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/30">High-Fidelity Prototype</span>
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
            The <strong className="text-foreground">Advanced Pharmacy Management System (APMS)</strong> is a comprehensive digital prototype aimed at revolutionizing how pharmacies operate. Traditional healthcare software is often rigid, visually overwhelming, and requires high cognitive effort from staff in fast-paced environments.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My goal was to design an intuitive, human-centered ecosystem spanning across a Staff Dashboard, an AI-powered Insights Hub, and a Patient-facing mobile application (Roshetty) ensuring a seamless end-to-end experience.
          </p>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">2</span>
            User Research & Problem Definition
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">Before pushing any pixels, I conducted empathy mapping and user interviews to understand our two primary user groups:</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
               <h4 className="font-semibold mb-3 text-lg">Persona A: The Pharmacist</h4>
               <ul className="list-disc ml-4 space-y-2 text-sm text-muted-foreground">
                 <li><strong className="text-foreground">Pain Point:</strong> Overwhelmed by dense spreadsheets of expiration dates and stock numbers.</li>
                 <li><strong className="text-foreground">Pain Point:</strong> Constantly moving around the pharmacy, making desktop-only tools highly restrictive.</li>
                 <li><strong className="text-foreground">Goal:</strong> Needs to process prescriptions and locate medicine instantly without cognitive friction.</li>
               </ul>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
               <h4 className="font-semibold mb-3 text-lg">Persona B: The Patient</h4>
               <ul className="list-disc ml-4 space-y-2 text-sm text-muted-foreground">
                 <li><strong className="text-foreground">Pain Point:</strong> Forgets to refill chronic medications on time.</li>
                 <li><strong className="text-foreground">Pain Point:</strong> Often arrives at the pharmacy only to find out a drug is out of stock.</li>
                 <li><strong className="text-foreground">Goal:</strong> Wants a simple way to track prescriptions, request refills remotely, and know pricing upfront.</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">3</span>
            Information Architecture & Wireframing
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
               To solve these complex flows, I mapped out the entire ecosystem architecture using FigJam. I established a clear hierarchy to ensure that whether a pharmacist was checking out a patient or viewing an AI demand forecast, they were never more than two clicks away from their destination.
            </p>
            
            <div className="bg-secondary/50 border border-border rounded-2xl p-6 text-center">
               <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  <div className="bg-background border border-border rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                    <div className="font-semibold text-sm">Roshetty Mobile</div>
                    <div className="text-xs text-muted-foreground mt-1">Patient Portal</div>
                  </div>
                  <div className="text-primary font-bold px-2">Data Sync</div>
                  <div className="bg-background border border-border rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                    <div className="font-semibold text-sm">Main Dashboard</div>
                    <div className="text-xs text-muted-foreground mt-1">Staff Overview</div>
                  </div>
               </div>
               <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="bg-background border border-border rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                    <div className="font-semibold text-sm">Inventory UI</div>
                    <div className="text-xs text-muted-foreground mt-1">Stock Management</div>
                  </div>
                  <div className="text-primary font-bold px-2">Alerts</div>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl py-3 px-4 shadow-sm min-w-[120px]">
                    <div className="font-semibold text-sm text-primary">AI Insights UI</div>
                    <div className="text-xs text-primary/70 mt-1">Predictive Analytics</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">4</span>
            Design System & Visual Language
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Healthcare interfaces demand clarity and precision. I built a comprehensive atomic design system in Figma to maintain consistency across the massive dashboard and mobile applications.
          </p>

          <img src={apmsAiCenterImg} alt="AI Command Center Dashboard" className="w-full rounded-2xl shadow-glow border border-border mb-8" />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
               <thead>
                 <tr>
                   <th className="bg-secondary/50 p-3 font-semibold border-b-2 border-border rounded-tl-xl">Design Element</th>
                   <th className="bg-secondary/50 p-3 font-semibold border-b-2 border-border rounded-tr-xl">Rationale & Accessibility</th>
                 </tr>
               </thead>
               <tbody className="text-muted-foreground divide-y divide-border/50">
                 <tr className="hover:bg-secondary/30 transition-smooth">
                   <td className="p-3"><strong className="text-foreground font-medium">Typography (Inter)</strong></td>
                   <td className="p-3">Chosen for its high legibility on digital screens, ensuring numbers (dosages, prices) are unmistakable to prevent medical errors.</td>
                 </tr>
                 <tr className="hover:bg-secondary/30 transition-smooth">
                   <td className="p-3"><strong className="text-foreground font-medium">Color Palette</strong></td>
                   <td className="p-3">Utilized a calming, clinical blue as the primary brand color, reserving stark reds and oranges strictly for critical stock alerts and errors.</td>
                 </tr>
                 <tr className="hover:bg-secondary/30 transition-smooth">
                   <td className="p-3"><strong className="text-foreground font-medium">Component States</strong></td>
                   <td className="p-3">Designed robust hover, active, and disabled states for buttons and inputs to provide immediate tactile feedback to staff working rapidly.</td>
                 </tr>
               </tbody>
            </table>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg text-sm font-semibold">5</span>
            Human-Computer Interaction (HCI) Solutions
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">By applying cognitive psychology principles, I transformed the heavy data backend into an accessible, scannable interface.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
               <h4 className="font-semibold mb-2 text-foreground">Preattentive Processing</h4>
               <p className="text-sm text-muted-foreground">Instead of forcing users to read raw expiration dates, the UI utilizes status enums (Healthy, Warning, Critical) with color-coded badges. This allows pharmacists to visually scan a list of 500 items in milliseconds without conscious reading effort.</p>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-5 hover:bg-secondary/50 transition-smooth">
               <h4 className="font-semibold mb-2 text-foreground">Thumb-Reach Navigation</h4>
               <p className="text-sm text-muted-foreground">For the mobile/tablet views—often used by pharmacists walking between shelves—the primary actions were shifted to a bottom Navigation Bar, ensuring optimal one-handed ergonomic operation.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
               <img src={apmsDashboardImg} alt="Desktop Dashboard" className="w-full rounded-2xl shadow-glow border border-border object-cover" />
               <img src={apmsInventoryImg} alt="Inventory Interface" className="w-full rounded-2xl shadow-glow border border-border object-cover" />
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-6 flex flex-col md:flex-row items-center gap-8 hover:bg-secondary/50 transition-smooth">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">The Patient Journey (Roshetty App)</h4>
                  <p className="text-base text-muted-foreground">The patient-facing mobile application was designed to feel like a modern consumer app rather than a clinical tool. It features large tap targets for elderly users, a clean onboarding flow, and a simplified prescription scanning experience that immediately syncs with the pharmacy's APMS system.</p>
                </div>
                <div className="max-w-[200px] shrink-0">
                  <img src={apmsRoshettyImg} alt="Roshetty Mobile App Prototype" className="w-full rounded-[2rem] shadow-glow border-4 border-border" />
                </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
