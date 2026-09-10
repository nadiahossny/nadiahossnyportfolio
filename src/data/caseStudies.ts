import apmsImage from '../assets/projects/apms.png';
import auraleafImage from '../assets/projects/auraleaf.png';
import tasklyImage from '../assets/projects/taskly.png';
import notesAppImage from '../assets/projects/notes_app.png';
import ieeeImage from '../assets/projects/ieee.png';
import ecommerceImage from '../assets/projects/ecommerce.png';
import simplibankImage from '../assets/projects/simplibank.png';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  tags: string[];
  hook: string;
  color: string;
  problem: string;
  cutDirections: { title: string; desc: string }[];
  chosen: { title: string; desc: string };
  outcome: string;
  marginNotes: { label: string; text: string }[];
  image: string;
  stat: string;
  links?: { url: string; label: string; type: 'behance' | 'github' | 'live' }[];
  uiExplorations?: { title: string; desc: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'apms',
    title: 'Automated Pharmacy Management System',
    subtitle: '(Roshetety & PharmaSys)',
    role: 'Software Engineer & Designer',
    tags: ['Flutter', 'Node.js', 'PostgreSQL', 'Google ML Kit', 'WebSockets'],
    hook: 'A smart prescription scanner and pharmacy management app bridging the gap between patients and pharmacies.',
    color: 'bg-slate-800',
    problem: 'For decades, pharmacies have struggled with manually transcribing handwritten or printed prescriptions. This traditional process is time-consuming, prone to critical reading errors, and creates bottlenecks in customer service.',
    cutDirections: [
      { title: 'Manual data entry systems', desc: 'Still rely heavily on human transcription, doing little to prevent reading errors.' },
      { title: 'Standalone OCR tools', desc: 'Lacked the real-time synchronization needed for pharmacists to immediately process patient requests.' }
    ],
    chosen: {
      title: 'What I built instead',
      desc: 'A mobile-first, scan-and-go solution integrating advanced OCR (Google ML Kit) and real-time communication. Users simply snap a photo or scan a QR code, instantly digitizing the prescription and pushing live updates to the pharmacy dashboard via WebSockets.'
    },
    outcome: 'Modernized how medical prescriptions are processed, reducing human error, saving valuable time, and maintaining a seamless, user-friendly experience for both patients and pharmacists.',
    marginNotes: [
      { label: 'AI-Powered', text: 'Uses Google ML Kit to instantly extract text from prescriptions.' },
      { label: 'Real-Time Sync', text: 'WebSockets ensure the pharmacy dashboard updates the moment a scan occurs.' },
      { label: 'Clean UX', text: 'Minimalist UI with guided camera interactions and clear error prevention.' }
    ],
    image: apmsImage,
    stat: 'Seamless real-time synchronization',
    links: [
      { url: 'https://www.behance.net/nadiahossny', label: 'View on Behance', type: 'behance' }
    ]
  },
  {
    id: 'auraleaf',
    title: 'AuraLeaf',
    subtitle: 'Study Companion',
    role: 'Frontend Developer & Designer',
    tags: ['React 19', 'Tailwind CSS', 'react-draggable', 'react-player', 'jquery.ripples'],
    hook: 'An immersive study and focus companion designed to help you tune out distractions and get in the zone.',
    color: 'bg-stone-700',
    problem: 'People needed a focused hub for studying and working without the constant distraction of switching tabs.',
    cutDirections: [
      { title: 'A rigid dashboard', desc: 'Forcing a specific layout ignores how differently people study and organize their space.' },
      { title: 'Native desktop app', desc: 'Adds friction to getting started and restricts cross-platform accessibility.' }
    ],
    chosen: {
      title: 'What I built instead',
      desc: 'I created AuraLeaf: a peaceful, interactive, and customizable workspace using glassmorphism aesthetics and viscous liquid ripple effects.'
    },
    outcome: 'A highly customizable layout featuring ambient soundscapes (mix rain, ocean waves, forest birds), a built-in focus timer, and a draggable workspace with sticky notes and a YouTube player.',
    marginNotes: [
      { label: 'Tech Stack', text: 'Built with React 19, Tailwind CSS, react-draggable, react-player, and jquery.ripples.' },
      { label: 'Ambient soundscapes', text: 'Mix rain, ocean waves, and forest birds.' },
      { label: 'Interactive UI', text: 'Liquid ripple animations with a clean, modern UI.' }
    ],
    image: auraleafImage,
    stat: 'Highly customizable layout',
    links: [
      { url: 'https://github.com/nadiahossny', label: 'View Source', type: 'github' },
      { url: 'https://auraleaf.vercel.app/', label: 'Live Demo', type: 'live' }
    ]
  },
  {
    id: 'taskly',
    title: 'Taskly',
    subtitle: 'Simplify Your Productivity',
    role: 'Lead Product Designer',
    tags: ['Product Design', 'UX Research', 'Mobile App'],
    hook: 'A lean capture-to-plan flow leaning on preattentive processing to instantly register priority.',
    color: 'bg-red-900',
    problem: 'Task apps tend to treat "add a task" and "make progress on a goal" as separate systems — a list here, a habit tracker there. That split shows up earliest at onboarding: most apps ask you to start filling in tasks before establishing why — so the list has no anchor, and neither does anything you check off later. The gap I designed for wasn\'t "how do I capture a task" but "how do I keep every task tied to the goal it\'s supposed to serve, from the very first screen."',
    cutDirections: [
      { title: 'A flexible, fully customizable list (custom fields, nested categories)', desc: 'Powerful, but the setup cost alone would lose a casual user before they\'d planned anything.' },
      { title: 'A pure habit-tracker (streaks, daily check-ins only)', desc: 'Great for consistency, but no room for one-off tasks or shifting priorities, which is most of what people actually plan.' }
    ],
    chosen: {
      title: 'What I built instead',
      desc: 'An onboarding flow that asks for the goal first, then lets everything else — first task, calendar sync, preferences — be optional and skippable, so the goal is locked in before any friction is introduced. That anchor carries through the whole app: tasks group by urgency (Today / Tomorrow / This Week) instead of by category, Focus Mode turns work sessions into Pomodoro-style blocks that count toward a daily hour target, and a progress ring on the dashboard shows "You are 80% closer to your goal" — so the payoff of finishing a task is visible immediately, not buried in a separate report.'
    },
    outcome: 'A high-fidelity prototype covering the full loop — set a goal → break it into tasks → focus and execute → see progress — rather than a feature-complete task manager. Customization (labels, priority levels) is still there, but kept secondary to that loop: quick to skip, quick to add via a single "+," never the first thing on screen.',
    marginNotes: [
      { label: 'What I cut', text: 'Deep customization up front (custom fields, multiple goals at once) — in favor of protecting a single, clear path from planning to doing.' },
      { label: 'Focus Mode', text: 'Instead of a bare timer, the session length feeds directly into the same daily goal shown on the dashboard.' }
    ],
    image: tasklyImage,
    stat: 'Eisenhower Matrix',
    links: [
      { url: 'https://www.behance.net/gallery/221757475/Taskly-Simplify-Your-Productivity', label: 'View on Behance', type: 'behance' }
    ],
    uiExplorations: [
      { title: 'Goal-first onboarding', desc: 'Before a single task exists, the app asks one question: "What\'s your goal?" Everything after is framed against that answer, so the app never starts as an empty list with no reason to fill it.' },
      { title: 'A four-step setup, each step optional', desc: 'Set Your Goal → Add Tasks → Sync Your Calendar → Set Your Preferences. Every screen has a visible "Skip," and progress dots at the top show exactly how much is left — so someone in a hurry can get to a working app in one tap, and someone who wants the full setup can do that too.' },
      { title: 'Calendar and reminders as an offer', desc: 'Syncing to Google/Outlook/Notion and setting distraction-blocking or email reminders are pushed to steps 3 and 4, after the goal and first task already exist. The app is usable before either decision gets made.' },
      { title: 'Goal-anchored grouping', desc: 'Sorting tasks by when they\'re due (Today / Tomorrow / This Week) rather than by project or category, so the list mirrors how urgency is actually felt, not how it was filed.' },
      { title: 'Focus Mode as a bridge', desc: 'Instead of a bare timer, session length (default 25 min, adjustable) feeds directly into the same daily-hour goal shown on the dashboard\'s progress ring, so "focusing" and "progressing toward the goal" are the same action, not two separate screens.' }
    ]
  },
];

export interface OtherProject {
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: string;
}

export const otherProjects: OtherProject[] = [
  {
    title: 'Notes App',
    description: 'A modern Flutter-based note-taking application designed for creating and organizing personal notes, featuring Firebase authentication, cloud storage, rich text editing, and image/signature support.',
    link: 'https://github.com/nadiahossny/NotesApp',
    linkText: 'View on GitHub',
    image: notesAppImage
  },
  {
    title: 'Ecommerce',
    description: 'A responsive E-Commerce Flutter app featuring a clean UI, network-based product and category fetching, user authentication, and modern reusable widgets.',
    link: 'https://github.com/nadiahossny/ecomm',
    linkText: 'View on GitHub',
    image: ecommerceImage
  },
  {
    title: 'IEEE PUA SB Official Site',
    description: 'The official website for the IEEE PUA Student Branch, providing information on activities, committees, and events.',
    link: 'https://github.com/nadiahossny',
    linkText: 'View on GitHub',
    image: ieeeImage
  },
  {
    title: 'SimpliBank',
    description: 'A full-stack, simulated online banking platform developed as a controlled environment for a comprehensive software quality assurance & testing suite, exposing core banking mechanics securely.',
    link: 'https://github.com/nadiahossny/SimpliBank',
    linkText: 'View on GitHub',
    image: simplibankImage
  }
];
