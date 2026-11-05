# Nadia Hossny — portfolio visual system

## Approved Meeko UI adaptation — 28 October 2026

The latest approved UI direction supersedes earlier composition details below where they conflict. See `docs/MEEKO_UI_DIRECTION.md` and `docs/MEEKO_UI_REVIEW.md`. Shared styling lives in `src/styles/meeko-direction.css`: inset rounded transparent/frosted navigation, a broad cloud-blue hero, spacious complete-image project frames, pale-blue About/services panels, and a navy contact band. The existing fonts, centered greeting, portrait dimensions, cloud loop, section reveals, reduced-motion behavior, content and project selection remain. Homepage order is hero / selected work / About / approach / services / Visuals / testimonials / contact. Both project rows continue sharing ProjectPreview and featured-grid.

Mode: preserve and refine. Audience: product-design recruiters, clients, and people discovering Nadia's work.

Current direction restores motion and the Visuals layout from Nadia's original Vercel deployment, at her explicit request. One cloud image breathes/drifts on the original 25-second loop; no curtain partitions. Greeting stays up to 104px and portrait stays 66–108px. Original hero entrance timings, 800ms/30px section reveals, 700ms image zoom, 500ms paper-stack feedback, and the centered four-quote carousel are restored. Transparent navigation becomes frosted after 20px scroll. Reduced motion disables the loop and movement. Details: `docs/ORIGINAL_DEPLOYMENT_RESTORATION.md`.

Temporary graphic availability: three published collections; the deleted CMD roadmap remains deleted per user instruction, replacement pending. The missing Foresight supporting spread is also omitted. All other source deletions remain untouched.

## Design Read

Warm, cloud-blue, image-led portfolio. Visual variance 5/10, motion 4/10, density 3/10, asset dependence 9/10, brand fidelity 9/10. Vary compositions through real interfaces, not decorative cards. Keep explanations short and actions immediately available.

## Existing identity assets

- Monogram: `src/assets/n-logo-transparent.png`.
- Cloud atmosphere: `src/assets/cloudy-bg.png`, Home hero, Visuals opening and footer (.16 opacity).
- Hero portrait: `src/assets/nadia_hero_avatar.jpg`.
- About portrait: `src/assets/about-photo.jpg`.
- AuraLeaf: `src/assets/projects/auraleaf-process/workspace.jpg`, `notes-panel.jpg`, `tasks-panel.jpg`; captured from the same real local working build.
- APMS: existing PharmaSys desktop and Roshetety patient screens referenced by `apmsHeroAssets` in project data.
- Taskly, Notes, IEEE and Byto: existing matching screenshots and process artifacts imported in project data. Preserve source files.
- Visual previews: Foresight, IEEE and presentation design remain the first three. Visuals now publishes 92 reviewed current images across 13 explicit collections (24 October 2026). Covers lead galleries; remaining filenames are naturally sorted. Future folder additions are not published automatically. Sharing image: `public/og-image.png`.

## Tokens and behavior

- Navy text/action `#002d69`; white `#ffffff`; pale surface `#f4f9ff`; cloud accent `#BFE4FF`. Existing muted navy `#45658c` and rule `#dce7f2` are supporting roles.
- Quicksand headings, DM Sans body; IBM Plex Sans Arabic/Alexandria existing Arabic stacks. No new fonts.
- Body 16–18px, 1.5–1.7 line height, about 65ch measure; captions 14px. Arabic headings retain expanded line height and zero tracking.
- 4px spacing base, 24–32px group gaps, 48–64px section spacing, approximately 1120px outer width.
- Corners 16–32px; rounded language toggle and action buttons. Pale-blue cards group About/enquiry content; white-framed Visuals covers tilt and fan out on hover. Small shadows are reserved for those paper stacks. Selected filters/navigation may use rounded filled states.
- Immediate press feedback (opacity and .98 scale), 160ms. Hero greeting/copy enter over 600ms with 100/200ms delays, actions delay 400ms, portrait 600ms/300ms. Original cloud loop: scale [1,1.08,1], x [0,15,-5,0], y [0,-15,5,0], 25s easeInOut. Section reveals: 800ms ease-out /30px; stagger 0/100/200ms; backwards fill removes persistent transformed layers. Keyboard focus settles content. Case-study reading content remains static. Reduced motion removes loops, entrance/hover/press movement and smooth scrolling.
- Minimum 44px standalone action targets, visible focus, keyboard operation, touch manipulation, and preserved browser zoom.

## Protected contracts

Centered “Hi, I’m [portrait] Nadia.” hero; existing routes/anchors, English/Arabic parity, full enquiry behavior, Creative Corner email action, résumé facts, verified testimonial and attribution, metadata and analytics. Featured: AuraLeaf/APMS/Taskly, three across desktop, two tablet, one mobile. More: Notes, IEEE, Byto. Other existing direct project routes remain compatible and unlisted.

## Expressive refinement · October 2026

Meeko informs spacious hierarchy; PaperNote informs tactile artwork framing. These are composition references, not asset or copy sources. The emotional intention is a welcoming introduction followed by confident, easy-to-inspect work.

- Inset white navigation: 1120px maximum, fine rule, 12px corners, 72px desktop / 64px compact height. No glass blur or heavy shadow.
- Both project rows use the same ProjectPreview and featured-grid: three columns at 1024px+, two at 640–1023px, one below 640px. Intact covers sit within 12px pale-blue mats; evidence images remain separate.
- Hover-capable pointers get a reversible 4px image-frame lift and 1.02 image scale over 200ms, with 160ms arrow feedback. Touch and keyboard do not depend on hover.
- Portraits have pale-blue framing; graphic previews use a controlled editorial rhythm. The numbered approach, testimonial, and navy contact provide varied section compositions without extra content or fabricated proof.
- Reuse existing icon sources and direction-aware arrows. No shader, Figma import, new illustration system, tracking, or live experiment is required.

## Visuals expansion — 24 October 2026

Visuals / أعمال بصرية is the navigation, footer, page and sharing label. Keep /visuals and the /graphic-design compatibility route. Thirteen collections use a centered wrapping three/two/one-column arrangement; the final incomplete row centers. Retain complete artwork, paper framing, current motion and accessible viewer. The four visual-offer groups are shared between Visuals and Work With Me. A full-width pale-blue closing band meets the footer without outer bottom padding. Its enquiry link preselects visual design once, without overwriting visitor edits. Current artwork selection supersedes earlier three/four-collection limits; deleted artwork stays deleted.

- Follow-up, 24 October: remove the repeated standalone hero role. Homepage Visuals previews retain Foresight/IEEE/presentations, aligned in equal 4:3 pale-blue frames with object-fit: contain, 32px gaps and three/two/one columns. No unequal offsets or square cover cropping.

## Product design & services — 28 October 2026

The approved upgrade retains the existing identity and motion. Navigation is Work / Services / About / Visuals. `/services` is canonical and `/work-with-me` remains compatible. Product design and the CS & AI background lead the introduction; visual design is a supporting skill. Two separate commercial offers share one content source (`src/data/serviceOffers.ts`). Prices are quoted after discovery; timeline is agreed in proposal. The sky retains its 25-second loop with an accessible pause/resume control; reduced motion remains static.

An editable Figma handoff was requested. The destination file was created, but the Starter-plan MCP tool limit stopped construction before layouts/components. See `docs/PORTFOLIO_UPGRADE.md` for the link, exact status, 32-frame handoff scope, and verification limits. No completed Figma design is claimed.
