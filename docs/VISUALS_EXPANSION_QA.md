# Visuals expansion QA — 24 October 2026

## Completed scope
- Visuals / أعمال بصرية labels in navigation, footer, page heading and sharing title; /visuals plus /graphic-design compatibility preserved.
- Explicit manifest: 13 collections, 92 unique existing source paths, approved covers first, natural filename order thereafter. All current folders covered, including magazine/.png; no future folder glob. All 92 artwork sources reviewed in contact sheets and decoded during inspection; SHA256 source hashes unchanged.
- Four bilingual offer groups shared between Visuals and Work With Me. Full-width closing band meets cloud footer with no outer bottom padding; labelled email, WhatsApp and LinkedIn actions.
- Visual enquiry URL selects option 3 on mount. Browser verified selected value, anchor focus, then a visitor change to option 4/name preserved during Arabic switch. No real enquiry submitted. Existing provider success/failure/draft tests retained.
- Follow-up: standalone hero role removed in EN/AR, retained in brief. Homepage Visuals previews now use equal 4:3 frames and consistent labels; Foresight/IEEE/presentations selection unchanged. Complete image framing, three/two/one layout.

## Verification
- 34 Node tests pass: collection count/order, all92 unique paths, exact folder coverage, source access, cover selection, natural sorting, bilingual captions/offers/labels, enquiry default, shared row and hero regressions; existing product, publishing, enquiry and testimonial tests pass.
- ESLint and production build pass. Vite retains its advisory large-JS-chunk warning; no new dependency added.
- Browser preview: http://127.0.0.1:5176/. Initial sandbox-bound ports 5174/5175 timed out; starting Vite outside sandbox resolved access.
- Visuals and Work With Me captured at 320/390/768/1440 in EN/AR. Source-layout and screenshots reviewed: three/two/one cards, centered final collection, consistent padding, no horizontal overflow. Closing band/footer boundaries measured contiguous at desktop. Screenshot files in artifacts/visuals-expansion.
- Existing gallery tested: Digital art zoom, arrow next, Escape and focus restored to trigger. Foresight/IEEE galleries opened and visible image thumbnails loaded. A broader sequential gallery walk was interrupted by browser timeouts, so all92 live viewer transitions are not claimed. File existence/decoding/manifest coverage verified for all92 independently.
- Mobile menu opened with correct Visuals destination and closed with Escape. Hero role absent in DOM in both languages; homepage previews reviewed at desktop/mobile English and tablet/narrow Arabic.
- Shared 44px button/link rules retained; new closing-band social links explicitly have 44px minimum height. Existing visible focus, keyboard viewer semantics, reduced-motion CSS and focus-settle safeguards retained and source-reviewed.
- Skills applied: content-strategy, better-layout, better-writing; final focused source/screenshot review informed by better-interface and accessibility, typography, colors and UI guidance. No visitor research, A/B test or full assistive-technology audit performed.

## Limitations
- No physical devices or screen-reader session. Browser capability cannot emulate reduced motion; static reduced-motion rules checked in source, not a live preference toggle.
- Ctrl+plus in this browser did not increase text/zoom (devicePixelRatio unchanged). Enlarged-text/200% verification remains outstanding; narrow 320px layouts were checked.
- All13 collection layouts and all92 source images verified; every individual live viewer transition was not completed due to intermittent input timeouts.
- No remote changes, deployment, push, source image deletion/rename/restoration, résumé edit or real enquiry.
