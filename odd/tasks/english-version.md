# English version of the portfolio
Objective: add a full English version of the site with an ES/EN switch. Branch: `feat/english-version`.
Delivery: ask-on-risk. Test runner: Vitest (`npm test`), plus `npm run lint`.

## Specs
- S1: Full English site: "Web completa en inglés", meaning translate the whole portfolio (texts, projects, skills, metadata) and add an ES/EN switch.
- S2: Access: "Selector + ?lang=en", a single page; the language is picked with an ES/EN button, can be linked with `?lang=en`, is remembered in the browser and, on the first visit, detected from the visitor.
- S3: No new dependencies: own React context + per-language dictionaries; data fields that need translation become `{ es, en }`.
- S4: Project status becomes a key (`completed` / `in-progress` / `coming-soon`); the badge colour no longer depends on Spanish text.
- S5: Anchors (`#sobre-mi`, ...) stay the same in both languages. `index.html` stays in Spanish; only `og:locale:alternate` `en_GB` is added.
- S6 (assumption): there is no English CV; in EN the button reads "Download CV (Spanish)" and downloads the same PDF.
- S7: English copy is drafted in professional British English; Borja reviews it before merge.

## Tasks
| ID | Specs | Route | Status | Evidence |
|----|-------|-------|--------|----------|
| T1 | S2, S3 | inline | done | RED: modules missing; GREEN: 14 new tests, suite 27/27, lint clean |
| T2 | S1, S6 | inline | done | RED: 4 EN tests failing; GREEN: suite 33/33, lint clean |
| T3 | S1, S3 | inline | done | RED: EN test failing; GREEN: suite 36/36, lint clean |
| T4 | S1, S3 | inline | done | RED: 2 EN tests failing; GREEN: suite 38/38, lint clean |
| T5 | S1, S3 | inline | done | RED: missing module; GREEN: suite 41/41, lint clean |
| T6 | S1, S3, S4 | inline | done | RED: 3 tests failing; GREEN: suite 45/45, lint clean |
| T7 | S1 | inline | done | RED: 2 EN tests failing; GREEN: suite 48/48, lint clean |
| T8 | S5 | inline | done | RED: og:locale:alternate missing; GREEN: suite 50/50, lint clean, build ok |

T1: i18n infrastructure (context, `localize`, language switch in Header, provider).
T2: Header, Hero and Footer texts. T3: About + `education.js`. T4: Skills + `skills.js`.
T5: Experience moved to `data/experience.js`. T6: Projects + `projects.js`. T7: Contact.
T8: `index.html` `og:locale:alternate` + docs (`CLAUDE.md`).

Route evidence: no writer trigger (no parallel units, no context backstop); parent works inline.

## Log
- L1 (2026-10-15): "vamos a hacer una nueva tarea, tenemos que incorporar la versión en inglés al proyecto, genera el plan"
- L2: Answers: scope "Web completa en inglés"; access "Selector + ?lang=en (Recommended)". Plan approved.
- L3: T1 decision: the URL always carries `?lang=<es|en>` after load, so a shared link opens in the same language regardless of the visitor's browser. Components keep working without a provider (context default = Spanish), so existing tests stay unchanged.
- L4: T2: `ui.js` renamed to `ui.jsx` to hold rich text (Hero title word order differs). Header nav built from a `NAV_LINKS` list instead of duplicated markup. EN subtitle drafted as "Applied AI · Vocational Master's in AI & Big Data" (pending Borja's review, S7).
- L5 (2026-10-15): delivery choice "Una sola entrega": stay on feat/english-version until T8, one integration into master at the end.
- L6: T3: highlight helpers `Hl`/`Strong` live in `src/i18n/RichText.jsx` (react-refresh lint rule). EN education titles drafted: "Higher Technician Diploma in Web Application Development", "AI Development Course: From Zero to Production" (pending review, S7).
- L7: T4: skill item names stay shared (they are technology names and React keys); "API REST" is kept as is in English.
- L8: T6: status is a key with `STATUS_STYLES`; "Email Automation Matrícula" shown as "Enrolment Email Automation" in English; project titles that are proper names stay shared (pending review, S7).
- L9: T8 done. All tasks done; pending: manual visual check in `npm run dev` (desktop + mobile, EN rotated labels "SCROLL DOWN"/"FOLLOW ME"), Borja review of the English copy (S7), and integration into master (Borja decides).
- L10: Native review (reliability lens) approved and acknowledged on the branch (lineage review-1e7692565f051110). Non-blocking suggestion R3-status-label-fallback: an unknown status key renders an empty badge label (Projects.jsx:99-100); left as later work.
- L11 (2026-10-15): "vale, dos cosas, el botón de es en, se queda muy pegado al botón de hablemos, podemos separarlo un poco mas. y otra, cuando pasamos a menú hamburguesa, ese mismo botón lo podríamos dejar fuera del menú" → desktop gap 4→8; mobile switch moved to the bar next to the hamburger (test updated first, RED then GREEN, suite 50/50).
