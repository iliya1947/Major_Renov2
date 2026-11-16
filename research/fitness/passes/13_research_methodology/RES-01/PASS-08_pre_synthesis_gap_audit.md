# RES-01 / PASS-08 — Pre-synthesis gap audit

Статус: **COMPLETE AUDIT PASS — RES-01 NOT READY FOR SYNTHESIS**  
Дата: 2026-11-16  
Topic: RES-01 — формулировка исследовательского вопроса

## Purpose

Проверить PASS-01…PASS-07B как единый методологический пакет перед synthesis и ответить:

1. покрыты ли все практически нужные типы research questions;
2. нет ли противоречий между passes;
3. не выдаются ли project-specific frameworks за внешние стандарты;
4. не стала ли Question Card чрезмерно монолитной;
5. можно ли уже делать final RES-01 synthesis.

## Материал, фактически проверенный

Повторно открыты и сверены:
- PASS-01;
- PASS-02;
- PASS-03;
- PASS-04;
- PASS-05A;
- PASS-05B;
- PASS-05C;
- PASS-06;
- PASS-07A;
- PASS-07B.

External cross-check:
1. Cochrane Handbook Ch. 2, current site.
2. Cochrane Handbook Ch. 3, current site.
3. Cochrane Handbook versions/change log.
4. JBI Manual current edition / 2026 wiki.
5. JBI scoping-review guidance, updated Aug 2026.
6. JBI mixed-methods guidance, current 2026 pages.
7. JBI textual-evidence guidance, updated Sep 2026.
8. JBI current external-methodology endorsements.
9. Cochrane-Campbell QES question guidance.

---

# A. What is already covered adequately

## A1. Intervention-effect questions
Covered:
- review vs synthesis vs study question;
- PICO;
- eligibility;
- timeframe;
- outcomes;
- benefits/harms;
- estimand;
- intercurrent events;
- assignment vs adherence target effects.

Status: **ADEQUATE FOR RES-01**.

Detailed study-design/statistical execution belongs later RES topics.

## A2. Diagnostic accuracy
Covered with:
- participants;
- index test;
- target condition;
- reference standard;
- intended role/threshold/context.

Status: **ADEQUATE FOR QUESTION-FRAMING LEVEL**.

## A3. Measurement properties
Covered:
- construct;
- population;
- instrument/protocol;
- measurement property;
- intended use.

Status: **ADEQUATE FOR QUESTION-FRAMING LEVEL**.

## A4. Prognosis
Covered:
- overall prognosis;
- prognostic factor;
- prediction model;
- PICOTS;
- startpoint + prediction horizon;
- prognostic factor != treatment-effect modifier.

Status: **ADEQUATE**.

## A5. Exposure / etiology / risk
Covered:
- PEO / PECO;
- association vs causal exposure question;
- exposure dose/timing/duration;
- confounding anticipated at framing stage.

Status: **ADEQUATE**, with detailed causal identification deferred to RES-05.

## A6. Mechanistic questions
Covered:
- general mechanism claim;
- specific mechanism hypotheses;
- model/context;
- perturbation;
- competing mechanisms;
- human relevance.

Status: **ADEQUATE AS PROJECT FRAMEWORK**, not external universal standard.

## A7. Qualitative questions
Covered:
- experience/meaning/process;
- PICo;
- substantive context.

Status: **MOSTLY ADEQUATE**, but synthesis must soften wording:
PICo is a useful/default framework, **not the one universally correct framework**.
The current Cochrane-Campbell guidance explicitly says no single qualitative question framework is universally right.

## A8. Implementation questions
Covered:
- determinants;
- implementation outcomes;
- implementation-strategy effects;
- actor/referent/context/phase.

Status: **ADEQUATE AS PROJECT ROUTING**, with project acronyms clearly marked non-standard.

## A9. Search translation
Covered sufficiently for RES-01:
question -> eligibility -> search concepts.

Detailed searching belongs later methods work.

## A10. Stakeholder/end-user relevance
Covered:
- relevance;
- end-user input;
- evidence/value boundary;
- single-user project adaptation.

Status: **ADEQUATE**.

## A11. Equity/context/applicability
Covered:
- equity != heterogeneity != applicability;
- PROGRESS-Plus;
- target vs study population/context;
- prespecified pathways.

Status: **ADEQUATE AT QUESTION-FRAMING LEVEL**.

---

# B. Blocking gaps found

## GAP-01 — Scoping / evidence-mapping questions

### Finding
**MISSING**

Current JBI scoping guidance (updated 2026) explicitly uses:
- **P — Population**
- **C — Concept**
- **C — Context**

and requires alignment:
objective -> question -> PCC -> eligibility.

A scoping question is intentionally broader and often mapping/hypothesis-generating rather than a focused effectiveness question.

### Why relevant here

The project itself contains stages where the task is:
- map what evidence exists;
- identify concepts;
- identify gaps;
- determine whether a focused review is warranted.

These should not be forced into PICO.

### Required action
Add dedicated pass:
**RES-01 / PASS-09A — scoping/mapping questions, PCC and objective-question alignment.**

---

## GAP-02 — Prevalence / incidence / frequency questions

### Finding
**MISSING**

The current JBI Manual no longer treats prevalence/incidence as one of its eight internal review methodologies; instead its 2026 current introduction explicitly endorses external methodology from **PERSyst** for systematic reviews of prevalence and cumulative incidence.

Earlier JBI prevalence guidance framed these questions around:
- condition/factor;
- frequency metric;
- population at risk;
- context/location;
- time period.

### Why relevant here

Future medicine/safety and training-context questions may ask:
- how common is an adverse event;
- incidence of a condition;
- prevalence of a behavior/state.

These are neither intervention-effect nor prognosis questions.

### Source-status warning
A current dedicated question-framing standard must be checked against current PERSyst methodology rather than blindly reusing archived JBI prevalence guidance.

### Required action
Add dedicated pass:
**RES-01 / PASS-09B — prevalence/incidence question framing with current PERSyst/JBI-endorsed methodology.**

---

## GAP-03 — Mixed-methods review questions

### Finding
**MISSING**

Current JBI mixed-methods guidance (2026) states that the nature/type of review question determines the integration approach.

It distinguishes at least:
- convergent integrated;
- convergent segregated.

Mixed-methods review may:
- ask one phenomenon question answerable by quantitative + qualitative evidence;
or
- ask linked quantitative and qualitative questions that are synthesized separately then integrated.

### Why relevant here

Adherence, implementation, burden and training-program usability may require:
- quantitative completion/effect data;
- qualitative experience/context data.

Running these as unrelated streams without an integration question risks incoherent conclusions.

### Required action
Add:
**RES-01 / PASS-09C — mixed-methods question framing and integration intent.**

---

## GAP-04 — Textual / policy / expert-opinion evidence questions

### Finding
**MISSING**

Current JBI textual-evidence guidance was updated in September 2026 and explicitly treats:
- narrative;
- expert opinion;
- policy
as reviewable textual evidence.

JBI commonly uses PICo-style framing for these questions and requires authors to specify which textual evidence types are relevant.

### Why relevant here

Professional-practice/safety/coaching questions may sometimes depend on:
- policy;
- scope-of-practice documents;
- professional statements;
- expert consensus
when empirical studies cannot answer the normative/procedural question.

This evidence must not be mixed with empirical effect evidence as though it were the same thing.

### Required action
Add:
**RES-01 / PASS-09D — textual/policy/expert evidence question framing.**

---

## GAP-05 — Logic models / complex intervention theory at question-framing stage

### Finding
**MISSING AS A CROSS-CUTTING TOOL**

Cochrane Chapter 2 explicitly states that logic models can help:
- refine review questions;
- decide lumping vs splitting;
- identify intervention components;
- specify proximal/distal outcomes;
- identify mediators/modifiers;
- structure synthesis;
- identify unintended harms;
- distinguish theory failure from implementation failure.

### Why highly relevant here

A training program is potentially a complex intervention:
- exercise prescription;
- progression;
- supervision/feedback;
- adherence architecture;
- recovery;
- context.

A simple PICO can hide the causal/implementation structure.

### Required action
Add:
**RES-01 / PASS-10 — logic models and complex-intervention question refinement.**

---

# C. Conditional gaps — noted but not currently blocking

## C1. Economic evaluation as a separate review question

Cochrane permits:
- resource use;
- costs;
- cost-effectiveness
as review outcomes.

Current JBI Manual contains a chapter on economic evidence, but its downloadable 2024 manual states that the chapter is being updated.

For this project:
- time;
- equipment cost;
- resource burden
are already captured as decision outcomes.

A formal health-economic review is **not currently necessary**.

Decision:
**CONDITIONAL / NOT BLOCKING**.

If a future question becomes explicitly:
> which option is cost-effective?

then add a dedicated economic-question module using current economic-review guidance.

---

## C2. Umbrella-review question framing

JBI supports umbrella reviews.

This project will often consume existing systematic reviews, but we are not currently conducting a formal umbrella review as a canonical RES-01 question type.

Decision:
**NOT BLOCKING**.
Use only if a future topic is explicitly review-of-reviews.

---

## C3. Formal priority-setting methodology

PASS-07A covered stakeholder relevance.
Formal priority-setting exercises are useful for population-wide research agendas but unnecessary for the current single-user decision project.

Decision:
**NOT BLOCKING**.

---

# D. Cross-pass consistency issues

## D1. Qualitative-framework wording is too categorical

PASS-05C says:
> use PICo

Current Cochrane-Campbell QES guidance says no single framework is universally correct.

Correction for final synthesis:
> **PICo is the project default for straightforward qualitative experience/context questions, not a universal requirement.**

Alternative structures can be used when the question needs richer:
- perspective;
- setting;
- timing;
- environment;
- comparison.

---

## D2. Too many project-specific acronyms risk framework proliferation

Currently created:
- C-P-I-MP-U;
- MEC-Q;
- ID-CAP;
- IO-CARP;
- Search Concept Card extensions.

These are useful engineering scaffolds but can create cognitive overhead.

Final synthesis must use a **router architecture**:

1. mandatory core question fields;
2. select question type;
3. load only the relevant module;
4. use project-specific acronyms only when external standard is inadequate.

Do not put all fields into every Question Card.

---

## D3. Question Card must be modular, not monolithic

PASS-01…07B collectively imply too many possible fields for one flat form.

Final design should contain:

### Core mandatory layer
- Topic ID;
- decision/use;
- question type;
- target population/context;
- critical outcomes/target phenomenon;
- timeframe if relevant;
- eligible evidence types;
- applicability;
- closure criterion.

### Conditional modules
- intervention PICO + estimand;
- DTA;
- measurement;
- prognosis;
- exposure/etiology;
- qualitative;
- implementation;
- mechanism;
- scoping;
- prevalence/incidence;
- mixed methods;
- textual evidence;
- equity;
- stakeholder details;
- search-concept card.

This is an architecture correction required before final synthesis.

---

## D4. Search Concept Card should remain separate

PASS-06 adds substantial search-specific fields.

Decision:
do **not** inflate QUESTION_CARD with all search syntax fields.

Keep:
- QUESTION_CARD = scientific question;
- SEARCH_CONCEPT_CARD = retrieval implementation.

Link them by Topic ID / evidence stream.

---

## D5. External standard vs project adaptation labeling is mostly correct

Audit found that passes generally label:
- MEC-Q;
- ID-CAP;
- IO-CARP;
- C-P-I-MP-U;
- exercise adaptation of ICH estimands
as project-specific.

Final synthesis must preserve this distinction visibly.

No correction required now beyond consistent labels.

---

# E. Source-version consistency audit

## E1. Cochrane

Keep recording separately:
1. overall current release/change-log status;
2. chapter-level citation/last-updated date.

Do not describe every unchanged chapter as substantively “2026”.

Status: **RULE CONFIRMED**.

## E2. JBI

Current online wiki is explicitly updated more rapidly than downloadable PDF and JBI instructs users to cross-reference current online sections.

Project rule:
prefer current online section for version-sensitive methodology; use PDF where exact supporting text is needed and record its version.

Status: **RULE ADDED FOR FINAL SYNTHESIS**.

---

# F. Audit decision

## Can RES-01 be synthesized now?

**NO.**

Blocking missing dimensions:
1. scoping/mapping;
2. prevalence/incidence;
3. mixed methods;
4. textual/policy/expert evidence;
5. logic models for complex interventions.

After those are covered:
1. run a second gap audit;
2. resolve cross-pass wording;
3. build modular QUESTION_CARD;
4. keep SEARCH_CONCEPT_CARD separate;
5. produce final RES-01 synthesis;
6. only then consider CLOSED_FOR_PRACTICE.

---

# G. Next pass

**RES-01 / PASS-09A — Scoping/mapping questions: PCC and objective-question-eligibility alignment.**
