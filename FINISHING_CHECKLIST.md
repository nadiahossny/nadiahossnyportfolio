# Portfolio finishing pass

- [x] Restore the centered cloud hero and fix the display-font configuration.
- [x] Feature AuraLeaf then APMS; list exactly Taskly, Notes App, IEEE PUA, and Byto Academy afterward. Preserve the other three direct routes.
- [x] Replace process cards and pill labels with concise, unboxed content.
- [x] Add the confirmed CTO / Revelio quote and compact personal / visual previews.
- [x] Restructure case studies, preserve all screens in expandable viewers, and keep technical details accessible.
- [x] Shorten About, Visuals metadata, and the enquiry page.
- [x] Correct enquiry acceptance handling, email-draft messaging, and clipboard failure feedback.
- [x] Check the seven main pages at 375px, 768px, and 1440px in English and Arabic: no horizontal overflow found.
- [x] Prior pass checked all nine routes and menu behavior. Current selection tests cover six listed projects, filters (6 all / 4 product / 4 web / 3 mobile), and six-project next navigation.
- [x] Verify required fields and invalid email validation; sixteen content/enquiry regression tests pass without sending an email.
- [x] Check local imports and résumé availability; review browser console (no errors or warnings observed).
- [x] Run production build and ESLint.
- [x] Keep changes local; no push or deployment.
- [x] Add selected Taskly research instruments, persona, flow, sketches, and wireframes with bilingual labels; exclude the unfinished journey map and whole-poster embed.
- [x] Expand IEEE’s public/admin workflows and APMS’s three decisions with documented limits and team attribution.
- [x] Inspect the revised Taskly, IEEE, and APMS pages at 1440px and 375px in English and Arabic: no horizontal overflow. Selected image imports all resolve.
- [x] Check enlarged artifacts, scrollable native-size zoom, Escape, RTL arrow navigation, Tab trapping, and focus restoration. Verify legacy routes and both-language filters; no console warnings/errors observed.

## Content to supply

- APMS: research method, participant/source details, and detailed findings remain private evidence gaps. The public editing placeholder has been removed.
- Taskly: completed questionnaire responses or usability evaluation results, if available; instruments are presented without invented findings.
- IEEE: matching admin screenshots, if desired; unscreened workflows are explained in text.
- SimpliBank is unlisted; its individual contribution and stack remain unconfirmed on the compatibility route.
- AuraLeaf: three real captures now show the closed workspace, Notes, and Tasks panels. User evaluation remains a future step.

## Verification limits

- Live email delivery was intentionally not exercised. Success, provider rejection, malformed replies, network failure, and missing-key draft behavior are covered by mocked tests.
- Third-party demo availability and external professional profiles were not exhaustively audited; their existing links were preserved.
- Reduced-motion behavior is handled through the global media query; operating-system preference switching was not exercised.
- The production build retains a bundle-size warning; it completes successfully.
- Page metadata is verified in the rendered browser. Crawler-specific social previews are not verified; this remains a client-rendered app with the existing shared image.

## Evidence and publishing pass — 20 October 2026

- [x] Capture the existing AuraLeaf build’s closed workspace, Notes panel, and Tasks panel without editing its source. Add bilingual captions through the existing artifact viewer.
- [x] Remove public editing instructions, replace handoff language with professional case-study copy, and describe Taskly as screens and user flows without a prototype link.
- [x] Visually inspect all nine Notes screenshots and caption their visible features in English and Arabic. Firebase details continue to come from documented project facts.
- [x] Correct the no-JavaScript fallback to July 2026 and the six selected projects; remove the assessment figure.
- [x] Give primary pages and projects distinct browser-rendered canonical, description, and sharing metadata. Remove duplicate static homepage tags; preserve the sharing image.
- [x] Replace Creative Corner’s message form with direct email. Preserve Work With Me’s full form and the confirmed testimonial.
- [x] Check all six selected case studies at 375px, 768px, and 1440px in both languages, with no horizontal overflow or broken loaded images. Check Creative Corner at the same widths and languages.
- [x] Verify all three compatibility routes, selected-project order/navigation, Notes gallery image loading, and AuraLeaf zoom, arrows, Escape, and focus restoration in English and Arabic.
- [x] Run 21 content/publishing/enquiry tests, lint, and the production build. No real enquiry sent; no push or deployment.

Verification records: `artifacts/publishing-routes.json`, `artifacts/publishing-layouts.json`, `artifacts/auraleaf-evidence-finished.jpg`, and `artifacts/auraleaf-mobile-ar-verified.jpg`. Full-page RTL browser captures showed a capture offset; direct viewport screenshots and DOM bounds were used to verify the actual RTL layout.

## Useful-tools refinement — 21 October 2026

- [x] Preserve centered portrait/cloud hero and six-project order; use purpose-first introduction and actions.
- [x] Use real AuraLeaf workspace preview, purpose categories and shared bilingual preview copy.
- [x] Add project-specific narrative sequences/headings, decision-stage artifacts and deduplicated all-image galleries.
- [x] Clarify About/HCI interest and optional implementation scope; preserve enquiry behavior and résumé facts.
- [x] Improve targets, skip link, route focus, menu focus restoration, gallery background isolation, enlarged-text reflow and measured contrast.
- [x] Add `brand-spec.md` and concise `AGENTS.md` guidance; update professional evidence without copying personal journals.
- [x] Verify 320/390/768/1440px English/Arabic layouts, enlarged root text, gallery keyboard/zoom behavior, filters, legacy routes, demo availability and local résumé response.
- [x] Run 23 passing tests, lint, production build and Git whitespace check. No push/deployment or real enquiry.

Full review, exact verification records, skill list and device/OS/browser limitations: `docs/REFINEMENT_QA.md`. Local preview: http://127.0.0.1:5174/.

## Review locally

- Local preview: http://127.0.0.1:5174/
- Screenshots: `artifacts/homepage-desktop.jpg`, `artifacts/homepage-mobile.jpg`, and `artifacts/homepage-preview.jpg`.
- Professional-content sources and unresolved claims: `docs/CONTENT_EVIDENCE.md`.
- Checks: `npm run lint`, `npm run build`, and `node --test tests/content.test.mjs tests/inquiry.test.mjs`.

## Interior visual corrections

- [x] Give supporting pages a full-width white canvas, preserving Home’s existing sections and clouds.
- [x] Align About’s introduction and experience rows; organize training into a responsive grid.
- [x] Space Visuals filters, normalize collection covers, and prevent artwork, thumbnails, and context from overlapping inside the viewer.
- [x] Align service actions and form columns; keep the email link within the mobile layout.
- [x] Enlarge case-study screenshots on mobile, simplify metadata spacing, and correct RTL navigation arrows.
- [x] Replace overlapping Creative Corner cards with a readable grid on phone/tablet; retain constrained dragging on desktop.
- [x] Check the main supporting pages at 375px, 768px, and 1440px in English and Arabic, plus all remaining case-study routes at 375px. No horizontal overflow remains in the audited views.
- [x] Save layout measurements to `artifacts/interior-layout-audit.json`; supporting-page screenshots include `artifacts/about-refined-desktop.jpg`.
