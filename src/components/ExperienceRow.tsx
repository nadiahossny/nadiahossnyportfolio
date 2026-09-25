import { useEffect, useRef, useState } from "react";
import styles from "./ExperienceRow.module.css";

/* -------------------------------------------------------------------------
   EDIT YOUR CONTENT HERE
   - bullets: what you did (shown in the popup)
   - image:   optional, path to a certificate image in /public, e.g. "/certs/nti.png"
   - link:    optional, credential / verification URL
   ------------------------------------------------------------------------- */

const education = [
  {
    id: "pharos",
    org: "Pharos University",
    title: "B.Sc. Computer Science & AI (Honors)",
    date: "2026",
    bullets: [],
  }
];

const internships = [
  {
    id: "nti",
    org: "National Telecommunication Institute (NTI)",
    title: "Frontend Developer Intern",
    date: "Jul 2025 – Sep 2025",
    bullets: [
      "Built 10+ React apps during the program, following WCAG 2.1 AA accessibility standards.",
    ],
  },
  {
    id: "depi",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    title: "UX/UI Designer Intern",
    date: "Oct 2024 – May 2025",
    bullets: [
      "Ran usability tests on 5+ interfaces and turned the feedback into design changes.",
    ],
  },
  {
    id: "route",
    org: "Route Academy",
    title: "Mobile App Developer Intern",
    date: "Jul 2024 – Oct 2024",
    bullets: [
      "Built 5 Flutter apps with a focus on cross-platform navigation and performance.",
    ],
  },
];

const certificates = [
  {
    id: "nti-web",
    org: "National Telecommunication Institute (NTI)",
    title: "Web Design Certificate",
    date: "Dec 2025",
    bullets: [],
    image: null,
    link: null,
  },
  {
    id: "depi-uiux",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    title: "UI/UX Design",
    date: "Jun 2025",
    bullets: [],
    image: null,
    link: null,
  },
  {
    id: "sprints",
    org: "Sprints",
    title: "Web Development Fundamentals",
    date: "Jun 2025",
    bullets: [],
    image: null,
    link: null,
  },
  {
    id: "coursera",
    org: "Coursera",
    title: "Introduction to Android Development",
    date: "Dec 2024",
    bullets: [],
    image: null,
    link: null,
  },
];

/* ------------------------------------------------------------------------- */

interface Item {
  id: string;
  org: string;
  title: string;
  date: string;
  place?: string;
  bullets?: string[];
  image?: string | null;
  link?: string | null;
}

interface RowProps {
  heading: string;
  items: Item[];
  onOpen: (item: Item) => void;
}

function Row({ heading, items, onOpen }: RowProps) {
  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{heading}</h3>
      <div className={styles.row}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={styles.tile}
            aria-haspopup="dialog"
            onClick={() => onOpen(item)}
          >
            <span className={styles.tileTitle}>{item.title}</span>
            <span className={styles.tileOrg}>{item.org}</span>
            <span className={styles.tileDate}>{item.date}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceRow() {
  const [active, setActive] = useState<Item | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Open / close the native <dialog> when `active` changes.
  // Native dialog gives us focus trapping, Esc to close, and returns focus
  // to the tile you clicked.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  // Stop the page behind the popup from scrolling.
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const close = () => setActive(null);

  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={styles.heading}>
        Experience &amp; training
      </h2>

      <Row heading="Education" items={education} onOpen={setActive} />
      <Row heading="Internships" items={internships} onOpen={setActive} />
      <Row heading="Certificates" items={certificates} onOpen={setActive} />

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="experience-dialog-title"
        onClose={close}
        onClick={(e) => {
          // click on the dimmed backdrop (the dialog element itself) closes it
          if (e.target === e.currentTarget) close();
        }}
      >
        {active && (
          <div className={styles.dialogInner}>
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label="Close details"
            >
              Close
            </button>

            <h3 id="experience-dialog-title" className={styles.dialogTitle}>
              {active.title}
            </h3>
            <p className={styles.dialogMeta}>
              {active.org}
              <br />
              {active.date}
              {active.place ? `, ${active.place}` : ""}
            </p>

            {active.image && (
              <img
                className={styles.dialogImage}
                src={active.image}
                alt={`${active.title} certificate`}
              />
            )}

            {active.bullets && active.bullets.length > 0 && (
              <ul className={styles.dialogList}>
                {active.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}

            {active.link && (
              <a
                className={styles.dialogLink}
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View credential
              </a>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
