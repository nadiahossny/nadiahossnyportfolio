# Cloud theatre · hero approval checkpoint

Historical checkpoint, superseded by Nadia's request to restore the original deployment's motion, Visuals layout and all four testimonials. Current implementation and verification: `ORIGINAL_DEPLOYMENT_RESTORATION.md`.

Only the hero is changed. Other homepage sections, Work, Visuals, About, case-study data and enquiry behavior remain outside this stage. No new dependencies, generated imagery or remote changes.

- Shared CloudTheatreHero renders on Home and the isolated local `/hero-preview.html` entry. The isolated entry imports the actual component, not a screenshot or duplicate mockup. It is noindex and excluded from the production build's entry list.
- Original cloud artwork appears in three full-width planes. Following Nadia's further feedback, all left/right banks and side masks have been removed. The entire sky drifts in one wind direction at three depths over 6–7 seconds. Two-point translation paths have no intermediate stops, path reversals, rotation or scaling. Only vertical masks blend the artwork. Copy and controls still finish by 1070ms. No loop, cursor effect or scroll interception. The attached reference informs the soft cloud silhouette; its black lower region is not imported into the site.
- Larger greeting: up to 104px desktop; mobile first line 40px and name approximately 64–72px. The existing portrait size is preserved: clamp 66–108px, with 66px at mobile widths. Arabic follows the same content order with natural RTL layout.
- Sky #d5eaff, mist #eef7ff and cream #fff8ef add background depth to the existing navy palette. These hero-only gradients intentionally supersede the earlier flat-background preference for this approved direction.
- Decorative cloud translation uses CSS ease-out rather than the strong UI easing: a shallow, uninterrupted deceleration avoids the earlier launch-and-stop feel. Text keeps the existing UI token. Reduced motion is static, and focus on either action immediately settles the hero. Main Home retains its existing once-per-load guard.

## Verification and asset availability

All 29 existing tests, lint and the production build pass. The build retains its bundle-size advisory. The user explicitly requested keeping the deleted CMD roadmap deleted and choosing a replacement later. Its collection is temporarily omitted; the also-missing Foresight supporting spread is omitted. Three collections and four reviewed images remain available. No replacement was selected, no deleted files were restored, and all remaining manifest references are checked for existence.

The normal app loads at http://127.0.0.1:5174/. The isolated hero remains available at `/hero-preview.html`. Hero layout measurements cover English and Arabic at 320/390/768/1440px with no horizontal overflow. Desktop English, mobile English, mobile Arabic, tablet Arabic and desktop Arabic were visually inspected. Screenshots and measurements are saved under `artifacts/soft-refinement/cloud-theatre/`. OS-level reduced-motion, physical devices and actual browser zoom were not verified. Reduced-motion and focus settling were inspected in source; the existing Home once-per-load entrance guard remains in place.

Wait for hero approval before refining any other section or page.
