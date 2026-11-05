# Expressive portfolio refinement · 23 October 2026

## Scope

Local React/Vite refinement at http://127.0.0.1:5174/. Preserved source documents, project data, six-project order, four graphic collections, résumé, testimonial, routes, and enquiry semantics. No dependency, tracking, remote, or publishing changes.

Meeko informed hierarchy, PaperNote informed tactile image framing, and Foldex informed the existing editorial graphic-preview rhythm. Reference imagery, placeholder statistics, and template copy were not imported.

## Implementation

- Inset white navigation, 1120px maximum, fine border and 12px corners. Height can grow for enlarged text. Mobile controls retain menu state, Escape, and focus restoration; expanding to desktop closes the mobile menu.
- Both Work rows use the same ProjectPreview component, featured-grid, framing, type, and descriptive links: 3 columns from 1024px, 2 from 640px, 1 below 640px.
- Hero retains portrait, clouds, two-sentence brief and actions. Existing sequence completes at 960ms; programmatic heading focus does not cancel it, while focus on an action immediately settles it.
- SectionReveal gains optional section/group variants and stagger. Groups use 400ms opacity/16px translation with 0/80/160ms delays; focus settles immediately. Unenhanced markup remains visible. No case-study reading paragraphs are animated.
- Pointer-only cover lift is 4px / 200ms; image scale 1.02; arrows 3px / 160ms. RTL direction is preserved. Reduced-motion rules disable movement. No loops or blocking navigation transitions.
- Portrait, graphic artwork, enquiry area, case-study opening images and galleries share restrained framing. No new factual claims or illustrations.

## Verification

- `node --test tests/*.test.mjs`: 29 pass. Includes source content, metadata/fallback, mocked enquiry outcomes, server-rendered reveal fallback, shared row contract, and motion/focus guards.
- `npm run lint` and `npm run build`: pass. Existing >500kB entry-chunk warning remains; no stack or bundling migration was introduced.
- Browser DOM matrix: Home, Work, Visuals, About, Work With Me, AuraLeaf, APMS and Taskly, English/Arabic at 320/390/768/1440px: 64 checks, no content horizontal overflow or loaded broken images. The intentionally oversized, clipped cloud background is excluded from overflow findings.
- Doubled root text size (32px) at 390px: same eight pages in both languages, 16 checks, no content horizontal overflow. Temporary font-size rule removed. Navigation grows rather than clipping. This is a text-resize stress test, not a claim of actual browser zoom coverage.
- Settled screenshots visually inspected for desktop interior pages and representative mobile/tablet English/Arabic layouts. Raw matrix captures can include intermediate animation frames; named `*-final.png` captures show settled states.
- Both Work rows measured 352px columns / 32px gaps at desktop, matching two-column tablet tracks, and single-column mobile layout.
- Both language filters: All 6, Product & UX 4, Web 4, Mobile 3. Secondary and all three legacy direct routes resolve; legacy next links return to the curated sequence.
- Internal links back Home: root class `home-page`, greeting animation `none`. Language changes retain the mounted hero without restarting its animation. Initial-load computed timing: portrait 80+420ms, greeting 240+400ms, role 360+360ms, actions 600+360ms.
- Mobile menu opens/closes, Escape restores its toggle, selected navigation remains indicated, and Arabic menu labels are localized.
- Taskly flow opens at full 1837px native width in zoom; arrow navigation changes images; Escape closes and restores the exact trigger. Visual collection viewer also passes zoom, arrows, Escape and trigger restoration. Arabic viewer Shift+Tab wraps to the last thumbnail.
- Primary action target sample on Work With Me: no rendered header, primary/secondary, text-link or footer action below 44px in either dimension at 390px.
- Measured pairs: navy/white 13.30:1, muted/white 6.01:1, muted/pale 5.68:1, white/navy 13.30:1. Input-border/white 6.01:1. These cover the reused primary text/control pairs, not every pixel of embedded artwork.
- Relevant source whitespace check passes. A whole-worktree whitespace check reports generated dist/index.html line-ending/trailing-space noise; unrelated files were preserved.

Evidence: `artifacts/soft-refinement/expressive/`, including `layout-checks.json`, `enlarged-text-checks.json`, settled previews and Taskly zoom capture.

## Final interface review boundary

Pass-scoped source review covers Navigation, SectionReveal, Home, Work, shared CSS and the added tests/docs, using AGENTS.md and brand-spec.md. Git HEAD is 687ec74; the working tree already contained extensive unrelated edits and new files. This is not approval of the entire cumulative uncommitted change set. Generated output, assets, résumé and unrelated content changes were excluded from source review. Direct consumer review prioritizes Home, Work, Services, About and CaseStudy; Work With Me additionally received rendered checks.

| Domain | Evidence | Result |
|---|---|---|
| Accessibility | Focus guards, named native controls, Escape/Tab paths, menu/viewer tests, narrow layout checks | Scoped checks pass; screen reader not verified |
| Layout | Shared row geometry, 64 DOM checks, 16 text-resize checks, settled screenshots | Scoped checks pass |
| Writing | Existing bilingual strings preserved; menu control names localized | Scoped checks pass |
| Typography | Existing font families retained, wrapping and enlarged text inspected | Scoped checks pass |
| Color | Reused rendered text/control pairs measured | Scoped checks pass |
| UI/motion | Explicit transitions, one-time observers, timing and replay checks, reduced-motion source guards | Scoped checks pass; OS preference not exercised |

Review fixes: removed a hover outline override that could weaken keyboard focus; limited arrow movement to directional icons; preserved RTL arrow direction; prevented programmatic h1 focus from suppressing the hero entrance; allowed header height to grow with text.

No remaining actionable introduced interface finding in the inspected states. Approval is limited to this pass and these checks.

## Not verified

Physical mobile devices, Safari/Firefox, screen-reader announcements, actual 200% browser zoom, operating-system reduced-motion switching, slowed frame-by-frame animation profiling, and an instrumented CLS trace were unavailable through the current browser controls. Reduced motion was checked through source/contract tests, not claimed as an OS-level browser test. Real provider delivery was intentionally not exercised; enquiry outcomes use mocks. Existing private evidence gaps remain unchanged in CONTENT_EVIDENCE.md.

## Prepared first-click tasks · not yet run with participants

1. Find a project showing how Nadia handles a complex workflow. Record the first click and whether its label predicted the destination.
2. In a case study, identify Nadia's contribution and one design decision. Record the route and evidence used; distinguish team capabilities from personal ownership.
3. Find how to discuss a client project or role and access the résumé. Record the first click and any confusion between contact actions.

Use these as qualitative review tasks. No visitor quotes, findings, success rates, analytics baseline, or A/B-test results are asserted.
