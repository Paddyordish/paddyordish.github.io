# Eclipse Lab — portfolio test interaction

Original HTML5 learning prototype by Patrick Ordish. One approximately three-minute predict → experiment → explain activity for ages 9–12, inspired by a school solar-eclipse lesson brief. No client assets, brand, text or private lesson materials are included.

## Run

Open `index.html` directly in a modern browser, or serve this directory with any static server. No installation, network dependency or build is needed. Keep `style.css` and `app.js` next to the HTML file.

## Learner experience

1. Predict what covers the Sun during a solar eclipse.
2. Move the Moon using a native range slider, keyboard arrows, playback or the align button.
3. Collect a partial and a total eclipse. Both observations are required to continue.
4. Explain the result, with misconception-specific feedback and a response to the initial prediction.
5. Restart the experiment. Expand Teacher notes for a short facilitation guide.

## Design and implementation

- Original vector sky, Sun, Moon, corona and stylised Sydney-inspired skyline.
- Apparent circular-disc overlap determines the displayed percentage; partial coverage never rounds up to 100%.
- Screen-reader description and slider value text reflect the current state.
- Responsive layout, visible keyboard focus, large controls and no drag-only tasks.
- Reduced-motion preference replaces continuous playback with discrete phase steps.
- No analytics, data submission, external assets, audio, cookies or persistent student data.
- Standalone web prototype; no SCORM tracking or certification is claimed.

## Scientific and safety boundaries

This is an apparent-disc model from one observer on Earth, not an orbital simulation, exact eclipse forecast or brightness model. It illustrates a total eclipse; not every solar eclipse or location produces totality. Distances, sizes, movement and time are simplified. The corona reveal and sky darkening are illustrative. It does not teach the entire 5–18 age range or replace a full lesson.

Reference concepts:
- NASA eclipse geometry: https://science.nasa.gov/eclipses/geometry/
- NASA explanation for students: https://spaceplace.nasa.gov/total-solar-eclipse/en/
- NASA viewing safety: https://science.nasa.gov/eclipses/safety/

The safety reminder covers uneclipsed and partially eclipsed viewing and is intentionally separate from experiment feedback. It never tells children to remove eclipse glasses. This original sample has no client-approved safety wording; any use within the client's lessons requires their review and approved wording.

## Validation (3 November 2026)

- JavaScript syntax check passed.
- Desktop Chrome UI checked: prediction unlock, 41.2% partial at position 30, 100% total at position 50, observation collection gate, wrong-answer hint, correct completion, updated-prediction feedback, and full reset.
- Final completion locks answer choices; reset restores them.
- CSS includes narrow-screen and print layouts. Responsive browser checks at 320, 390, 768 and 1200 CSS pixels were completed on 4 November. Physical device, Safari, assistive technology and reduced-motion device testing remain outstanding.

## Publication status

Authorised for test publication on 3 November 2026 at https://paddyordish.github.io/demos/eclipse-lab/ via GitHub Pages. This is a standalone test URL; the portfolio homepage and its project listings are unchanged. The source originated on `draft/eclipse-lab`. Preview image is included for review.

## Readability and interaction audit

See [AUDIT.md](AUDIT.md) for the 4 November 2026 corrections and validation. Playback now pauses at totality. Headings wrap naturally without joining words; learner copy and controls have larger type and better narrow-screen wrapping.
