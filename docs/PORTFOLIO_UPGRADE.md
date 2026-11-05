# Product design & services upgrade — 28 October 2026

## Website

Implemented locally in the existing React/Vite project. Navigation is Work / Services / About / Visuals. `/services` is canonical; `/work-with-me` remains functional, including `?service=visual-design#inquiry-form`. Existing form field names, option values, initial-only preselection, and delivery semantics remain intact.

Home introduces product design and the CS & AI background, followed by AuraLeaf/APMS/Taskly, the approach strip, two commercial offers, About, supporting Visuals, the four confirmed testimonials, and contact. Notes/IEEE/Byto and unlisted legacy routes retain their existing selection rules. About treats visual design as a supporting skill. Case-study metadata now supports optional verified `tools`.

Offers and process live in `src/data/serviceOffers.ts`, shared between Home and the enquiry page. Website implementation/integrations are agreed separately. Digital brand presence is a separately priced offer. Prices remain “Quoted after discovery”; timelines remain “Timeline agreed in proposal”. No numeric prices or delivery estimates were invented.

The original cloud motion remains 25 seconds, with a visible pause/resume control and static reduced-motion behavior. Existing section reveals, portrait sizing, fonts, and image selection remain.

Local preview: `http://127.0.0.1:5181/` and `/services`. Start with `npm run dev -- --host 127.0.0.1 --port 5181` when the existing server is no longer running.

## Figma — incomplete due to account tool limit

File created: [Nadia Portfolio — Product Design & Services](https://www.figma.com/design/oMwhauC4SeDkAMraW2Ztl7).

- File key: `oMwhauC4SeDkAMraW2Ztl7`.
- Task session: `29fb14e3-8b3f-43eb-958d-5b498af6a72e`.
- Inspection confirmed an empty initial page, no local components/variables, and available Quicksand, DM Sans, and Alexandria faces.
- No Code Connect files were found locally. Existing-screen inspection was N/A because the file was empty.
- Library discovery succeeded. The design-system search then returned: “You've reached the Figma MCP tool call limit on the Starter plan.” Account inspection confirmed Starter.
- No portfolio layouts, components, or captures were created. The Figma file is a blank destination, not a completed design deliverable. No alternate API or UI was used to bypass the account limit.
- Follow-up on 5 November 2026: opened a new Figma task session and confirmed the file still contains only an empty Page 1. Library discovery found no matching portfolio assets; a further `use_figma` read was rejected by the same Starter-plan tool-call limit. No frames or captures were added.

### Resume the design handoff when access permits

Create 32 editable frames: Home, Work, Services, About, AuraLeaf, APMS, and Taskly at 1440px and 390px, each in English and Arabic (28); Home and Services at 768px in both languages (4).

Use the running local website as the composition reference. Finish the required library search before creating components. Reuse matching library assets only where they can preserve the portfolio's fonts and tokens; otherwise create local components after loading `figma-generate-library`. Build shared navigation, footer, buttons, project previews, service offers, process steps, enquiry controls, and one populated case-study template. Bind colors/spacing/radii to variables. Use auto-layout and editable text.

Source-of-truth map:

| View | Source |
| --- | --- |
| Home | `src/pages/Home.tsx`, `src/components/CloudTheatreHero.tsx` |
| Work | `src/pages/Work.tsx`, `src/components/ProjectPreview.tsx` |
| Services | `src/pages/WorkWithMe.tsx`, `src/data/serviceOffers.ts` |
| About | `src/pages/About.tsx`, `src/data/professionalBackground.ts` |
| Featured stories | `src/pages/CaseStudy.tsx`, `src/data/caseStudies.ts` |
| Shared system | `src/index.css`, `src/styles/cloud-theatre.css`, `tailwind.config.ts` |

Capture the local web pages alongside semantic construction to transfer discrete portraits/screenshots/logos/cloud images. Remove full-page reference captures afterward. Validate descendant types, component instances, every image fill/slot, actual product fonts, and full-view composition screenshots. IBM Plex Sans Arabic was not returned in the font inventory; resolve the actual web font before accepting Arabic text. Do not silently substitute another font.

## Validation

- `node --test tests/*.test.mjs`: 41 passing tests. Includes real server-rendered English/Arabic Services pages, compatibility routing, initial enquiry values, featured tools/status, homepage ordering, and navigation. Delivery requests are mocked; no real enquiries sent.
- `npm run lint`: passed.
- Read-only HTTP checks against the preview outside the sandbox: `/`, `/services`, and `/work-with-me` return 200 HTML; `/resume.pdf` returns 200 `application/pdf`. This confirms delivery, not browser rendering.
- `npm run build`: passed; Vite reports the existing application chunk over 500kB. No bundle-size threshold was changed.
- Logs: `artifacts/portfolio-upgrade-{tests,lint,build}.log`.
- The existing artwork-inventory assertion now compares directory casing consistently on Windows, retaining all 92 exact curated entries/counts. The old test requiring the three commercial cards to repeat Visuals' four offer groups now checks their intentionally separate content models.

### Browser limitations

The in-app browser timed out on the sandboxed localhost server. Starting the preview outside the sandbox subsequently made the four HTTP checks above pass. Windows browser control then stopped because it could not identify the current browser URL confidently enough to enforce policy. No further computer input was attempted. The early preview links were supplied, but no local visual screenshot was obtained.

390/768/1440px English/Arabic layouts, 320px reflow, 200% text/zoom, actual focus appearance, keyboard/gallery interactions, visual motion behavior, contact navigation, résumé download, and physical devices are **Not verified in a browser**. Server rendering and source review are not substitutes for those checks. Figma screenshot/editability validation is also incomplete.

## Interface review

Scope: Home → Services → enquiry, shared navigation/footer, About positioning, and featured metadata; React, Tailwind 3, existing CSS variables. Guidance: `AGENTS.md`, `brand-spec.md`, approved implementation plan. Owning skills loaded: better-accessibility/layout/writing/typography/colors/UI, coordinated by better-interface. React best practices and existing motion/mobile guidance were also consulted.

| Domain | Evidence inspected | Result |
| --- | --- | --- |
| Accessibility | Native controls, labels, shared focus rules, anchor target, pause control, reduced-motion guards; rendered markup tests | No unresolved source finding; runtime/assistive technology checks not verified |
| Layout | New grids use `minmax(0, 1fr)`, logical padding, normal content flow, 639/1023px collapses; existing three/two/one project grid retained | No unresolved source finding; visual reflow not verified |
| Writing | Both language versions of the two offers/process; scoped implementation; mock delivery states and private evidence gaps | Clear within inspected content |
| Typography | Existing fonts, rem sizes, unitless line heights, 65ch reading measure, 16px-equivalent form inputs, LTR tool labels inside Arabic | No unresolved source finding; computed fonts/wrapping not verified |
| Color | New CSS reuses existing solid text/surface roles | Declared pairs pass; rendered backgrounds not verified |
| UI | Native action, shared focus/pressed states, 24px offer corners, no new interactive animation; existing motion retained | No unresolved source finding; animation playback not verified |

Declared contrast calculations: navy `#002461` / pale `#F7FBFF` = 14.17:1; body `#1a3660` / pale = 11.60:1; muted `#456080` / pale = 6.24:1; navy / white = 14.74:1; muted / white = 6.49:1. These are source-token calculations, not rendered-pixel measurements.

| Severity | Domain | Location | Before | After | Why |
| --- | --- | --- | --- | --- | --- |
| HIGH — resolved | Accessibility | `src/components/CloudTheatreHero.tsx:12` | Loop had no manual pause | Visible bilingual pause/resume control; reduced motion remains static | Give visitors control over motion without removing the approved atmosphere |

No unresolved actionable source findings in the inspected flow. **Approve — source review only.** Browser/device acceptance and the Figma deliverable remain incomplete; this does not approve unverified rendered behavior.

No push or deployment performed. Existing unrelated edits, original assets, deleted files, public résumé, and testimonial text were preserved.
