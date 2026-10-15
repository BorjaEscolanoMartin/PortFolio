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
| T3 | S1, S3 | inline | pending | |
| T4 | S1, S3 | inline | pending | |
| T5 | S1, S3 | inline | pending | |
| T6 | S1, S3, S4 | inline | pending | |
| T7 | S1 | inline | pending | |
| T8 | S5 | inline | pending | |

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
