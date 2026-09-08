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
      { url: '#', label: 'Live Demo', type: 'live' }
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
    problem: 'Planning apps tend to solve for completeness — more fields, more categories, more customization — and end up adding friction between having a thought and capturing it. The gap between "I need to plan this" and "I did" was the actual thing to design for.',
    cutDirections: [
      { title: 'A fully flexible, Notion-style system', desc: 'Powerful, but the setup cost alone would lose a casual user before they planned anything.' },
      { title: 'A single rigid to-do list', desc: 'Simple to build, but left no room for prioritization — which was the actual behavior I was designing for.' }
    ],
    chosen: {
      title: 'What I built instead',
      desc: 'A lean capture-to-plan flow that leans on preattentive processing — color, size, and position doing the work of sorting priority, so a person registers what matters before they\'ve consciously read a label. Customization was deliberately cut wherever it competed with that instant read.'
    },
    outcome: 'A high-fidelity prototype built around one flow instead of many features — prioritizing the moment a plan turns into action over configuration depth.',
    marginNotes: [
      { label: 'Preattentive processing', text: 'Visual properties the brain registers before conscious reading — used here instead of tags or text labels.' },
      { label: 'What I cut', text: 'Deep customization options, in favor of protecting the plan → execute flow.' }
    ],
    image: tasklyImage,
    stat: 'Eisenhower Matrix',
    links: [
      { url: 'https://www.behance.net/gallery/221757475/Taskly-Simplify-Your-Productivity', label: 'View on Behance', type: 'behance' }
    ]
  }
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
