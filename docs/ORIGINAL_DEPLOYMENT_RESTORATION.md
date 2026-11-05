# Original deployment restoration — 23 October 2026

Source inspected in the browser: https://nadiahossny.vercel.app/ and /graphic-design. Public built JS/CSS were downloaded for read-only inspection into tmp/original-deployment. No remote edits or deployment.

## Motion and layout evidence

- Original Home cloud: a single image, opacity .8, scale [1,1.08,1], x [0,15,-5,0], y [0,-15,5,0], 25 seconds, infinite easeInOut. Restored with the already-installed Framer Motion dependency. Reduced motion is static. This explicitly supersedes the prior one-time drift experiments.
- Original hero: 600ms greeting with 100ms delay, copy 600ms/200ms, actions 600ms/400ms, portrait spring 600ms/300ms from scale .8/rotation -15deg to scale 1/rotation -5deg. Current portrait sizing and factual copy are preserved. The local CSS portrait settle uses the existing ease-out rather than a new spring controller.
- Original sections: opacity/30px rise, 800ms easeOut, one-time viewport trigger with -50px margin. Local reveal remains visible without JavaScript; fill is backwards so transformed layers are released after arrival. Stagger is 0/100/200ms. Focus settles immediately.
- Original project image hover: 1.05 zoom, 700ms; Visuals covers: 3:4 proportions, white 4px frames, 2/0/-2deg tilt, 500ms straighten/lift/fan and 700ms image zoom. Restored with complete uncropped curated images. Small paper shadows are intentional; unavailable artwork remains omitted.
- Original navbar: transparent at top, white/90 with 12px blur and lower border after scrollY >20, 300ms transitions. Local navigation preserves all new routes, résumé, active state, mobile menu and rounded EN/AR toggle.
- Original carousel: centered white composition, six-second auto-advance, 500ms easeInOut horizontal fade, four selectors, hover pause and 50px swipe threshold. All four restored after explicit user confirmation. Added 44px selector targets, pause button, focus/visibility pause and reduced-motion handling. Slide layout reserves the longest quote's height rather than clipping it in the original fixed-height mobile stage. Incoming slide fade is restored; outgoing content is immediately hidden from accessibility APIs.
- Visuals opening, tool strip, three offering cards and collection spacing follow the deployed page. Current collection content and accessible zoom/gallery behavior are retained. Tool strip uses names rather than copied brand SVGs. Viewer retains its current layout and uses a short CSS settle rather than importing the older dialog implementation.
- Latest user steering also authorizes rounder supporting surfaces, photo hover feedback, calmer About/Work With Me layouts and footer clouds at .16 opacity. Experience, education, enquiry logic and résumé are unchanged.

## Testimonial evidence

All original quote text is copied verbatim from the public deployment. Sources: Revelio CTO, Codeify Modern Development client, Revelio HR Manager, Mohamed Wael / NTI instructor. Nadia explicitly chose “All four original slides” in this chat. Existing confirmed attribution “CTO / Co-Founder & CTO · Revelio” remains on the first slide. The other attributions are restored from the deployment. English quotes stay verbatim with lang=en/dir=ltr in Arabic; role/control labels are bilingual. Claims within attributed endorsements are not reused as independent project outcomes.

## Verification

- 31 tests pass, including four-source testimonial content and rendered carousel accessibility controls; lint and production build pass. The build retains its existing >500kB bundle advisory.
- Desktop Home/Visuals/About/enquiry openings and collection framing visually inspected; tablet About/enquiry/Visuals checked in EN/AR at 768px; Arabic counterparts checked at 1440px. Mobile Home/About/enquiry checked at 390px, Arabic Visuals at 390px, and Arabic About/enquiry/testimonials at 320px. No horizontal overflow in the measured layouts; no failed loaded images in the tablet checks.
- Original-style navigation transparent/scrolled state and 999px language-toggle radius checked in browser. Mobile menu links work; Escape closes the menu and restores toggle focus.
- Visuals viewer ArrowRight changes the artwork, zoom toggles, Escape closes, and focus returns to the opening collection button. Keyboard testimonial navigation updates immediately with animation=none. All four selectors have 44px targets; long quotes reserve dynamic height at 320px.
- Work renders all six projects in the required order; completed reveal transforms compute to none and the filter divider computes to 0px. Footer cloud image loads and computed opacity is .16.
- Screenshots are saved under artifacts/original-restoration. Browser automation briefly stalled during gallery verification and was reconnected. No real enquiry, remote edit, push or deployment.
- Limitations: no physical phone, screen reader, actual 200% browser zoom or OS reduced-motion toggle was tested. Reduced-motion behavior is implemented in CSS and Framer Motion, reviewed in source. Not every legacy route or case-study viewer was re-exercised in this pass; existing route/content/enquiry regressions pass. No claim of pixel-exact replication of the entire deployed site: the current navigation links, curated art, factual copy and accessible viewer behavior deliberately remain.
