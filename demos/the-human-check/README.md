# AI at Work | The Human Check

Original portfolio course by Patrick Ordish, November 2026.

Twenty responsive HTML5 pages; optional UK English synthetic narration and exact transcripts; task-matching and information-gate practice; tabs; prompt workshop; evidence hotspots; workflow steps; review-effort slider; recall cards; a three-decision case; ten final practice questions; a downloadable action plan; glossary and references.

## Launch

Open `index.html` through a web server. No build step, libraries, external fonts, analytics or AI API are required. Audio is bundled as MP3 so the course can run independently of a third-party speech service.

## SCORM

The downloadable ZIP is SCORM 1.2, one SCO. Launch `index.html` using the root `imsmanifest.xml`. The course uses LMSInitialize, LMSGetValue, LMSSetValue, LMSCommit and LMSFinish. It records location, compact suspend state, a 0–100 practice score and session time. Completion requires all twenty pages visited, all three case decisions completed, all ten questions answered and the learner selecting Complete course. There is no pass threshold. Free writing is never placed in suspend data.

Outside an LMS, practice progress is saved in browser local storage. Reset practice progress clears this course's local state after a confirmation. The action plan is held in the open page only and downloaded on request.

## Content and scope

Fictional Northstar examples are original teaching exercises. Reference links and limitations are on the final page. This is general workplace learning, not a qualification, compliance claim or NIST certification. Follow the organisation's approved tools and policies.

## Delivery

Designed for desktop and mobile, keyboard controls, readable text alternatives and reduced motion. Full assistive-technology and real enrolled-learner acceptance are separate from authoring checks; see the local QA record.
