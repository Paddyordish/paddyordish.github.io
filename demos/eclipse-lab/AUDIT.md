# Eclipse Lab audit — 4 November 2026

## Fixed

- Replaced forced line breaks in all mission headings with actual spaces and natural wrapping. Hiding the original break at mobile widths joined separate words.
- Removed negative letter spacing from headings and the percentage readout; added a small, consistent word gap in headings.
- Increased learner text, feedback, button labels, instructions and safety copy for readability.
- Made progress steps, observation lists, controls and captions wrap. Added minimum-width safeguards to grid columns.
- Moved scene captions into normal document flow to prevent overlay collisions.
- Kept the selected correct answer fully readable after completion.
- Focus now moves to each stage heading instead of jumping straight to the slider or first answer.
- Replaced stepped-slider playback accumulation with a fractional playhead, avoiding rounding stalls on fast-refresh displays.
- Playback pauses at the centre of totality so learners can collect it, and shows playing/paused/end hints.
- Turned off automatic live announcements on the per-frame percentage output; the slider retains its descriptive accessible value.
- Retained the safety reminder in print and clarified the visible teacher notes.
- Versioned CSS and JavaScript URLs to refresh cached assets.

## Checks completed

- Chrome rendering in a local iframe at widths 320, 390, 768 and 1200 CSS pixels.
- No horizontal overflow in the measured body at any of those widths (phone body widths reflect scrollbar space).
- At 320px: prediction, both observation collections, gate unlock, incorrect and correct answers, long completion feedback, restart.
- Desktop: playback auto-pause at position 50, teacher notes expand.
- Syntax check passed. Coverage endpoints, totality boundary, symmetry, bounds and monotonicity passed across 501 sampled positions.

## Limits

These are Chromium browser checks, including narrow viewport rendering, not physical-device or Safari tests. No formal WCAG certification, screen-reader session or physical whiteboard test was performed. Print and reduced-motion rules were reviewed in source; dedicated print/reduced-motion device testing remains outstanding.
