# RES-01 / PASS-14A — Build modular QUESTION_CARD architecture

Статус: **COMPLETE IMPLEMENTATION PASS — RES-01 remains RESEARCHING**  
Дата: 2026-11-16

## Scope

Только:
1. заменить устаревший плоский `QUESTION_CARD.md`;
2. реализовать router + core + conditional modules + cross-cutting modules + FINER gate;
3. сохранить Search Concept Card отдельным downstream artifact.

Не покрывается:
- создание `SEARCH_CONCEPT_CARD.md`;
- final RES-01 synthesis;
- final closure status.

## Source basis

Архитектура собрана из проверенных PASS-01…PASS-13.

Особенно:
- PASS-03 → separate intervention/exposure duration vs outcome horizon;
- PASS-04 → estimand record;
- PASS-05A → DTA / C-P-I-MP-U / prognosis;
- PASS-05B → PEO/PECO + MEC-Q;
- PASS-05C → qualitative + implementation routing;
- PASS-07A/B → stakeholder, applicability, equity;
- PASS-09A/B/C/D → scoping, frequency, mixed methods, textual evidence;
- PASS-10 → logic-model layer above question modules;
- PASS-12A → effect-modification branch;
- PASS-12B → FINER / Review Necessity Gate;
- PASS-13 → final required architecture and safety/harm correction.

## Architecture implemented

### Layer 1 — Core
Always-present minimal fields:
- Topic ID;
- decision/use;
- primary objective;
- primary question;
- scientific question type;
- target population/context/application;
- target outcome/phenomenon;
- time;
- evidence-source level;
- safety/harm flag;
- high-level eligibility;
- planned grouping;
- scope-change log;
- closure criterion.

### Layer 2 — Conditional scientific modules
Implemented:
- intervention effect;
- estimand;
- effect modification;
- diagnostic accuracy;
- measurement properties;
- prognosis/prediction;
- exposure/etiology;
- mechanism;
- qualitative;
- implementation;
- scoping/mapping;
- frequency;
- mixed methods;
- textual/policy/expert evidence.

### Layer 3 — Cross-cutting optional modules
Implemented:
- stakeholder/end-user;
- applicability/context;
- equity;
- logic model / complex intervention.

### Layer 4 — Review Necessity / FINER Gate
Implemented before search handoff.

### Layer 5 — Search handoff
Explicitly keeps `SEARCH_CONCEPT_CARD` separate.

## Key corrections from old card

1. Removed `harm/safety` as a standalone universal scientific method.
2. Split diagnostic and measurement.
3. Split prognosis routes and excluded predictors-of-treatment-effect from ordinary prognosis.
4. Added effect-modification branch.
5. Added scoping, frequency, mixed methods and textual evidence.
6. Added exact estimand module.
7. Added separate intervention duration / outcome horizon / risk horizon / calendar time.
8. Added stakeholder, applicability and equity as separate concepts.
9. Added logic model above the router for complex interventions.
10. Added FINER / duplication / answerability gate.
11. Added evidence-source/review-design level so umbrella design does not masquerade as a scientific question type.
12. Kept economic review conditional pending a dedicated current-methodology check.
13. Removed direct identifying wording from the old public template; uses generic `target user` / application target language.

## Deliberate architecture decisions

1. **Modular, not monolithic** — irrelevant modules are not filled.
2. **Scientific question != search query** — search remains downstream.
3. **Question type != review-process variant** — umbrella/living/rapid are not scientific question types.
4. **General evidence != personalized decision** — application target is explicit but does not silently redefine eligibility.
5. **Project frameworks are labelled project-specific** — C-P-I-MP-U, MEC-Q, ID-CAP, IO-CARP.
6. **Safety is routed by claim type**.
7. **Economic question triggers a future methodology check instead of using stale guidance.**

## Validation performed in this pass

Checked the rewritten card against PASS-13 required architecture:

- Core layer present: YES
- Conditional scientific modules present: YES
- Stakeholder/equity/applicability/logic-model optional layers present: YES
- FINER gate before search: YES
- Search Concept Card separate: YES
- Safety/harm correction implemented: YES
- Effect modification separated from prognosis: YES
- Umbrella treated as evidence-level/design flag: YES
- Economic route kept conditional: YES

## Remaining before RES-01 closure

1. Build canonical `SEARCH_CONCEPT_CARD.md`.
2. Check Question Card ↔ Search Concept Card handoff.
3. Produce final RES-01 synthesis.
4. Short post-implementation consistency audit.
5. Assign closure status.

## Next pass

**RES-01 / PASS-14B — build standalone SEARCH_CONCEPT_CARD and verify handoff from QUESTION_CARD.**
