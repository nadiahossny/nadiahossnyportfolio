# Meeko-inspired UI direction — 28 October 2026

Reference: https://meeko-template.framer.website/ (default homepage).
Status: approved and implemented locally; see MEEKO_UI_REVIEW.md for verification boundaries.

## Design read

An image-led personal portfolio for product-design recruiters and clients. Preserve Nadia's content, identity assets, routes and functionality while adopting the reference's spacious introduction, rounded navigation, large headings and alternating section surfaces.

Dials: visual variance 6, motion 4, density 3, asset dependence 9, brand fidelity 9. Existing motion remains; visual change comes from section composition and surface contrast.

## Palette and materials

- Text, outlines and primary controls: existing navy #002d69.
- Main canvas: white #ffffff; supporting sections #f4f9ff.
- Hero and selected accents: existing cloud blue #BFE4FF.
- Secondary text #45658c; dividers #dce7f2.
- Reference lavender maps to cloud blue; reference black closing section maps to navy.
- Existing Quicksand/DM Sans and Arabic font stacks. Heading scale 40–104px; body 16–18px; paragraphs max 65ch.
- 4px spacing base. Desktop section spacing 80–96px; mobile 48–64px. Container max 1120px, 20–24px mobile margins.
- Navigation 24px corners; media/surface panels 24–32px; action controls pill-shaped. Fine navy-tinted outlines; small shadows only for existing Visuals paper stacks.

## Section compositions

1. Rounded inset navigation, recognizable monogram and existing links. Transparent at top, frosted after 20px; visible keyboard focus and full mobile menu preserved.
2. Broad cloud-blue hero with generous whitespace, large centered greeting and existing inline portrait at 66–108px. Two-sentence brief remains. Existing primary/secondary actions, sky loop and pause control stay.
3. White selected-work section with larger title, quieter short introduction, and three equal project columns. Whole thumbnails sit in spacious pale-blue rounded frames. AuraLeaf/APMS/Taskly remain featured; responsive columns remain 3/2/1.
4. About introduction in a pale-blue rounded panel: existing photo beside concise copy on desktop, stacked in reading order on mobile. Visuals follows in its own white section with equal complete-artwork frames.
5. Approach: large section introduction and three numbered items, with fine dividers and generous internal spacing. Reuse current three-step copy.
6. Services: two clearly separate pale-blue panels, current scope copy and destination retained.
7. Testimonials: generous centered quote area with existing four quotations, authors, carousel controls and keyboard/swipe support.
8. Navy contact band with white heading and accessible light controls; footer clouds remain at .16 opacity.

Homepage sequence: hero, selected work, About, approach, services, Visuals, testimonials, contact. More work keeps Notes/IEEE/Byto and shares the same ProjectPreview treatment as featured work. Inner pages inherit surfaces, spacing, controls and heading hierarchy without rewriting their content.

## Protected behavior and scope

No new projects, numeric achievements, skill percentages, testimonials, blog or service promises. Preserve all English/Arabic content parity, routes, metadata, résumé links, gallery behavior and enquiry success/draft/failure semantics. Case-study paragraphs remain stationary. Reduced motion remains static. No new dependencies, push or deployment.

## Implementation and verification

Implement a small shared theme stylesheet and focused Home composition changes, reusing current components. Show an early localhost view before extending the treatment to inner pages. Run node --test tests/*.test.mjs, npm run lint and npm run build. Record visual checks and any browser limitations separately; do not send real enquiries.
