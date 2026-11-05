# Soft, expressive portfolio refinement — 2026-10-21

## Completed

- Home entrance: existing cloud artwork expands outward for 800ms and settles. Portrait, greeting, role, two-sentence brief, and actions overlap; the last stage ends at 960ms. Internal navigation and language changes do not replay it. Content has reserved space; navigation remains usable during entry.
- Shared selection: AuraLeaf, Automated Pharmacy Management System, Taskly featured; Notes, IEEE, Byto supporting. Desktop has three featured columns, tablet two, mobile one. Public names spell out the pharmacy-system title. Legacy direct URLs remain available.
- Dedicated thumbnails preserve Nadia's original artwork and remain separate from evidence images. Frame 670 was copied to a portfolio asset; the supplied source was not changed.
- Four explicit visual collections with six reviewed artworks: Foresight (two), IEEE (one), CMD (one), presentation design (two). Home previews use the same manifest. Removed the automatic folder imports, filters, and public archive; source files remain.
- Larger portrait compositions, concise project cards, compact approach strip, editorial graphic previews, navy contact section, and larger case-study opening imagery. Original project narratives, evidence labels, testimonial, résumé, and enquiry semantics are preserved.
- Gallery captions and alt text are bilingual. Existing viewer navigation, focus trap, and restoration are preserved; zoom and inert backgrounds are available. Small Arabic footer links now have 44px minimum widths. The skip link hides by its own height, so enlarged text cannot leave its edge visible; focus and Enter-to-main were checked at 320px.

## Verification

- 26 content, publishing, and enquiry tests pass. ESLint and TypeScript/Vite production build pass. Git whitespace check passes (line-ending normalization warnings only).
- 64 browser layout inspections: Home, Work, Visuals, About, Work With Me, AuraLeaf, pharmacy system, and Taskly in English/Arabic at 320, 390, 768, and 1440px. No document overflow or out-of-viewport text/control boxes found. Captures at the three requested widths are in `artifacts/soft-refinement`; representative compositions were visually reviewed.
- 16 additional inspections with a temporary 200% root font size at 390px, covering the same pages in both languages: no detected overflow/clipping. The temporary CSS was restored; normal root size confirmed as 16px.
- Browser checked all four project filters (6/4/4/3 results), six-project ordering, remaining listed project routes, three legacy project routes, the Visuals alias, Creative Corner, mobile menu, and canonical URLs. Résumé/contact destinations remain unchanged; no enquiry was sent.
- English and Arabic visual viewer: zoom, arrow navigation, wrapping, Escape, Tab/Shift+Tab trap, inert background, and restored trigger focus checked. Taskly's full-resolution user flow opens at native width when zoomed and restores focus on Escape.
- Measured rendered palette pairs: navy/white 13.30:1; muted/white 6.01:1; muted/pale 5.68:1; white/navy 13.30:1. New motion uses transform/opacity and pointer-gated hover. Settled hero content has full opacity.
- Reduced-motion CSS removes the entrance/section movement and hover transforms; the section observer also respects the preference. Navigation and language changes were checked to leave entrance animation names as `none` after returning Home.

## Limits

- Actual browser zoom did not respond to the available keyboard shortcut. The enlarged-text checks used doubled root font size, not browser zoom.
- The available browser controls cannot toggle the operating-system reduced-motion preference. Its code path was inspected, but not switched live.
- Physical-phone behavior, manual screen-reader output, frame-rate profiling, and a recorded CLS trace were not verified. Images have reserved layout space; that is not a claim of measured zero CLS.
- The production build retains its existing large-JavaScript-chunk warning. The entry bundle is about 577kB; no dependency or bundling migration was introduced.
- No new factual evidence was needed. Existing unresolved factual questions remain private in `CONTENT_EVIDENCE.md`. No supplied source files, remote projects, deployments, or repository remotes were edited.

## Skills used

Web-design-engineer and animate for composition and the staged entrance; better-layout and mobile-native for responsive behavior; better-writing for concise bilingual labels; better-interface with accessibility, typography, colors, and UI guidance for the final scoped checks; React best-practices for component/hooks review. Browser and assistive-technology limitations above constrain the review; this is not a complete WCAG certification.
