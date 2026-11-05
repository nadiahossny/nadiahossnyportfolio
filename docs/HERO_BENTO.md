# Calm, proof-first hero — 28 October 2026

The hero now uses the approved six-card layout. The centre introduction is twice the width of each side card at desktop sizes; below 1024px all six cards form one column. Arabic mirrors the desktop composition while retaining the same introduction-first mobile and DOM reading order.

## Changed files

| File | Change |
| --- | --- |
| `src/components/CloudTheatreHero.tsx` | Six bilingual cards; one headline; 66px portrait; existing CTA destinations; real Roshetety screenshot in a CSS phone frame; combined stats; location/status; skill chips; small AuraLeaf preview. Removed the cloud loop and its playback control. |
| `src/styles/cloud-theatre.css` | Replaced old hero styling with the scoped grid, white cards, shared 24px radius and shadow, complete images, responsive stacking, RTL, focus styles and a single 350ms opacity entrance. Reduced motion is immediate and static. |
| `src/styles/meeko-direction.css` | Removed superseded hero-only overrides, retaining other selectors and shared styling. |
| `tests/presentation.test.mjs` | Updated the hero copy and motion expectations for a static background and opacity-only entrance. |
| `tests/services.test.mjs` | Kept the project-order assertion scoped to Selected work, because the hero now also links to APMS and AuraLeaf. |
| `docs/CONTENT_EVIDENCE.md` | Recorded Nadia's direct confirmation of research count, UX praise, Alexandria/remote location and availability. No four project identities or further research results were inferred. |
| `docs/HERO_BENTO.md` | This file summary and verification record. |
| `tmp/hero-bento-qa.cjs` | Local production-preview, responsive, contrast, focus, motion and Lighthouse checks, using existing cached QA tools. |
| `artifacts/hero-bento/`, `artifacts/hero-bento-*.log` | Final screenshots, browser measurements, Lighthouse reports, test/lint/build logs and an early preview. |
| Generated `dist/index.html` and `dist/assets/` | Rebuilt production output. No deployment performed. |

Home content, navigation, footer, base stylesheet, original-deployment stylesheet, case-study data, shared translations, package manifest and lockfile were checked against hashes captured before editing and remain unchanged. No libraries, routes or public interfaces were added.

## Assets

No placeholders were needed. All three images already existed in the project and were inspected before planning:

- Existing hero portrait (`nadia_hero_avatar.jpg`).
- Roshetety patient home/order screen (`Screenshot_20260610_172239_com_example_roshetety_MainActivity.jpg`). The complete screenshot sits inside a CSS phone frame.
- AuraLeaf focus workspace (`auraleaf-process/workspace.jpg`), displayed as a small landscape thumbnail.

The cloud artwork is reused as a static background. Screenshot pixels, authored app text and fonts were not edited. The reference attachment informed the bento composition only.

## Verification

- `node --test tests/*.test.mjs`: **41 passed**.
- `npm run lint`: **passed**.
- `npm run build`: **passed**. The existing large JavaScript chunk warning remains; no dependency or code-splitting changes were part of this hero request.
- Browser: local production build in headless Microsoft Edge. EN and AR at **320, 375, 768, 1024, 1280 and 1440px**: 12 layout checks passed with six cards, no page overflow at default text size, 16px minimum typed text, matching card surfaces, complete loaded images and the intended desktop/mobile arrangement.
- Enlarged text: **200% root text size at 375 and 1280px in both languages**. All four hero checks passed without overflowing/clipped hero content. The 375px English whole-page check still finds overflow from the unchanged Testimonials and Services headings below the hero. Those sections were intentionally left untouched.
- Interaction checks: both primary/secondary destinations, work anchor, APMS and AuraLeaf proof-card links, keyboard focus indicators, entrance settling on focus, static clouds and zero hero animations under reduced motion all passed in both languages.
- Rendered typed-text contrast: minimum **12.06:1** within the hero in both languages. Availability is conveyed by text as well as the decorative green dot.
- Lighthouse Home accessibility: **100/100 in English and 100/100 in Arabic**, with no remaining audit findings. Reports are in `artifacts/hero-bento/lighthouse-en.json` and `lighthouse-ar.json`.
- Browser application runtime errors: **0**. The local QA server returns an empty response for Vercel's platform-only analytics endpoint; production analytics code was not modified.

Final screenshots: `artifacts/hero-bento/en-1280.png`, `ar-1280.png`, `en-375.png`, `ar-375.png`, `en-768.png`, and `ar-768.png`.

## Interface review

Review scope is the hero only, using the existing React/TypeScript, Tailwind/CSS styling, `AGENTS.md` and brand conventions. The user-approved static-cloud/fade rule supersedes the earlier hero loop instruction.

| Domain | Evidence | Result |
| --- | --- | --- |
| Accessibility | Lighthouse, keyboard links/focus, reduced motion and text resize | Hero checks pass. Actual screen-reader output was not tested. |
| Layout | Six widths, both directions, 200% text, screenshot inspection | Hero checks pass. Existing below-hero English text-resize overflow is recorded above. |
| Writing | Exact supplied EN copy, AR translation and private evidence | No new claims beyond Nadia's supplied proof statements. |
| Typography | Computed sizes, wrapping, original font declarations and 66px portrait | Typed hero text is at least 16px; original fonts preserved. |
| Colors | Computed foreground/background pairs | Minimum 12.06:1. |
| UI/motion | Matching card surfaces, complete imagery, static clouds and opacity keyframe | Only the approved 350ms entrance; no stagger, movement, rotation or scaling. |

| Before | After | Why |
| --- | --- | --- |
| Large greeting over animated clouds | Dominant introduction surrounded by compact proof cards | Proof appears alongside the introduction on desktop. |
| Cloud loop, portrait movement and separate motion control | Static cloud image and one short fade | Calmer presentation with fewer controls. |
| Potentially eight separate proof/intro tiles | Six cards through the approved stat and location/status groupings | Clearer grouping and less visual clutter. |

Verdict: **Approve for the hero scope**. No physical iOS/Android device or actual screen-reader testing was performed. No real enquiry, push or deployment was performed.
