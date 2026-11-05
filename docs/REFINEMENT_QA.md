# Portfolio refinement — 21 October 2026

## Scope and coverage

React/Vite, existing Tailwind/CSS, bilingual portfolio. Preserved the cloud identity, centered portrait greeting, six-project selection, existing routes, enquiry semantics, résumé, and confirmed testimonial. Working conventions are recorded in `brand-spec.md` and `AGENTS.md`.

| Domain | Evidence inspected | Result |
| --- | --- | --- |
| Accessibility | Header/menu keyboard controls, skip link, route focus, case-study viewer zoom/arrows/Tab/Escape/focus restoration and inert background; main-page target sizes | Confirmed issues repaired; manual screen-reader testing not performed |
| Layout | Twelve pages at 320/390/768/1440px in English and Arabic; 200% root-font stress test and affected-page rechecks | No overflow or clipped content in final checked states |
| Writing | Hero, previews, purpose labels, six project narratives, About/HCI interest, services and enquiry choices | Purpose-first copy and documented limitations retained |
| Typography | Existing font stacks, heading wrapping, paragraph measure, captions, enlarged text | Existing families retained; greeting, labels and controls reflow |
| Colors | Rendered public paragraph/action/label text across twelve pages; language toggle and form borders; darkest composited cloud pixel | Measured text pairs pass 4.5:1; repaired input borders pass 3:1 |
| UI polish | Existing image treatments, targeted color/opacity feedback, reduced-motion CSS branch, controls and gallery states | Scoped feedback and 44px standalone actions; physical-phone behavior not verified |

## Findings repaired

| Severity | Domain | Location | Before | After | Why |
| --- | --- | --- | --- | --- | --- |
| HIGH | Colors | `src/index.css:27` | Inactive language text at 3.03:1 | Both language labels at 13.30:1 | WCAG 1.4.3 text contrast |
| HIGH | Colors | `src/index.css:331` | Enquiry field borders at 1.51:1 | Muted-navy borders at 6.01:1 | WCAG 1.4.11 control boundaries |
| HIGH | Layout | `src/index.css:29`, `:33`, `:43`, `:241` | Header, greeting, footer and long labels clipped under doubled text | Flexible brand container, wrapping greeting/socials, bounded labels and grid tracks | Enlarged text and narrow reflow must preserve content/actions |
| MEDIUM | Accessibility | `src/index.css:16`, `:41` | Disclosure/collection/project/creative actions approximately 16–39px high | Standalone actions at least 44px high | User-approved touch-target requirement |
| MEDIUM | Accessibility | `src/App.tsx:20`, `src/pages/CaseStudy.tsx:50` | No skip link; custom viewer background remained available | Skip-to-content link, route focus and inert gallery background restored on close | Predictable keyboard and assistive navigation |
| MEDIUM | Writing | `src/pages/CaseStudy.tsx:140` | Same sequence and headings across most projects | Bilingual project-specific section orders and headings | Distinguish actual investigation, design study, workflow and interface build |

## Motion review

| Before | After | Why |
| --- | --- | --- |
| Header used `transition-all duration-300`; controls repeated unbounded transition classes | Header background/border and action color/opacity properties use 160ms feedback | Avoid accidental layout animation and delayed feedback |
| Route/service scrolling used `scrollIntoView` without consistent preference handling | Header-aware `window.scrollTo`, instantaneous under reduced motion | Avoid frame scrolling side effects and respect the preference |
| Press feedback inconsistent across main actions | Restrained opacity feedback, persistent labels/focus/selection cues | Feedback without decorative movement or essential entrance animations |

Verdict: Approve changed motion within the inspected scope. No new movement animation or entrance sequence was introduced. The reduced-motion CSS branch was temporarily activated for QA: computed scroll behavior became `auto`, transition duration became `0.00001s`, and content stayed visible. That temporary activation was removed. Actual OS preference switching and browser Animations-panel slow-motion inspection were not available.

## Verification

- `node --test tests/*.test.mjs`: 23 tests pass, including bilingual preview/section data, artifact stage, image deduplication/counts, curated navigation, legacy data, metadata/fallback facts and mocked enquiry behavior.
- `npm run lint`: passes. `npm run build`: passes, including TypeScript; existing bundle-size advisory remains.
- `git diff --check`: passes; Git emitted existing LF/CRLF normalization notices.
- Final layout records: `artifacts/refinement-normal-recheck.json` (320/390px), `artifacts/refinement-large-recheck.json` (768/1440px; actual width recorded), and `artifacts/refinement-all-targets.json` (all main actions on affected listing/creative pages).
- Enlarged text: temporary 200% root-font size, all twelve pages in both languages at 320/390px. Initial failures were repaired and affected pages rerun (`refinement-enlarged-text-recheck.json`). Temporary test CSS removed. This is a root-font resize test, not browser chrome zoom.
- Both languages preserve document direction and localized case-study headings/captions. Taskly remains static screens and user flows, with persona/research-instrument/historical-comparison labels.
- Keyboard: mobile menu opens with Space, Escape closes and restores its toggle; case images open with Enter; Tab/Shift+Tab remain in the viewer; arrows navigate, zoom works, Escape closes and restores the image trigger. Arabic ArrowLeft advances in reading direction. Taskly's enlarged flow loaded at 1837px native width.
- Filters return six all / four Product & UX / four Web / three Mobile projects. Legacy SimpliBank/BloomBook/Route routes resolve and link back into selected-project navigation.
- AuraLeaf and Byto public demo URLs load their expected landing/dashboard interfaces. This checks availability only, not adoption, production readiness, or every external-app interaction.
- Résumé URL returns HTTP 200, `application/pdf`, 5213 bytes. No résumé content edits in this pass.
- No real enquiry sent. Existing provider success/rejection/error/draft behavior covered with mocks; contact links retained.
- Image files and enlarged captures inspected. Representative outputs: `artifacts/portfolio-refined-desktop.jpg` and `artifacts/portfolio-refined-panels-ar.jpg`.
- Browser viewport controls followed an opened demo tab during an intermediate recheck. Those tabs were closed; tablet/desktop checks were rerun against the portfolio with actual viewport-width assertions. Only the final recheck file is authoritative for that run.

## Contrast detail

- Navy primary text/white action text: 13.30:1 on the corresponding white/navy solid backgrounds.
- Purpose/category text: 5.42:1 on white.
- Cloud hero: darkest pixel of the actual artwork composited over the hero surface was RGB(230,244,255); navy text retains at least 11.87:1 against that artwork.
- Decorative separators are not text labels or control boundaries and were not judged as required UI contrast pairs.

## Skills read and applied

- Structure/identity: `web-design-engineer` (preserve/calibration/failure-pattern/browser-acceptance references), `information-architecture`, `case-study`.
- Content/composition: `better-writing`, `better-layout`, `better-typography`; `apple-design` response/clarity principles.
- Interaction: `emil-design-eng`, `review-animations`, `mobile-native` for scoped feedback, media queries, input sizing and safe-area considerations.
- Consolidated review: `better-interface`, with `better-accessibility`, `better-layout`, `better-writing`, `better-typography`, `better-colors`, and `better-ui` owning domain checks.
- React implementation review: `vercel:react-best-practices`; hooks, event handlers, stable image component, semantic controls and TypeScript checked.

## Limits and remaining evidence

Not verified: physical iOS/Android interaction, notches/software keyboards, full browser chrome zoom, actual OS reduced-motion switching, manual screen-reader operation, and crawler-specific social previews. This is not a formal WCAG conformance audit.

Still private: APMS research protocol/details; Taskly responses/usability evaluation; optional matching IEEE admin screens; Byto mascot naming, precise current implementation ownership and completion evidence. The existing Visuals collection now describes a character created for Byto Academy without publishing an unverified character name or UI-integration claim.

AuraLeaf remains the lead because it has a documented personal problem, interaction decision, working interface and three real states. APMS remains second for its connected patient/pharmacy workflows, screens and team-attributed contribution. Byto remains supporting work. No Banner Studio addition.

Verdict: **Approve within the inspected scope**, with the stated device/assistive-technology limits. All changes remain local; no push, deployment or external project edits.
