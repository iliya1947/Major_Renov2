# RES-01 / PASS-11 — Second gap audit and cross-pass consistency check

Статус: **COMPLETE AUDIT PASS — RES-01 STILL NOT READY FOR FINAL SYNTHESIS**  
Дата: 2026-11-16  
Topic: RES-01 — формулировка исследовательского вопроса

## Purpose

Повторно проверить RES-01 после PASS-09A…PASS-10 и определить:
1. остались ли непокрытые типы/аспекты вопроса;
2. нет ли архитектурных противоречий между модулями;
3. можно ли уже строить финальный QUESTION_CARD и synthesis.

## Материал, проверенный в этом audit

Внутренний пакет:
- PASS-01…PASS-10;
- текущий QUESTION_CARD;
- RESEARCH_QUEUE;
- NORMALIZED_KNOWLEDGE_TREE.

Внешний cross-check:
1. Cochrane Handbook Chapter 1 — Starting a review  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-01
2. Cochrane Handbook Chapter 2 — Determining scope/questions  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-02
3. Cochrane Handbook Chapter 3 — Eligibility/grouping  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-03
4. Cochrane Handbook Chapter 10 — Heterogeneity/effect modification  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10
5. Cochrane MECIR C1–C4 and C19–C23  
   https://www.cochrane.org/authors/handbooks-and-manuals/mecir-manual/standards-conduct-new-cochrane-intervention-reviews-c1-c75
6. Cochrane Prognosis FAQ / current prognosis handbook  
   https://methods.cochrane.org/prognosis/faq
7. JBI Manual current introduction / methodology map  
   https://jbi-global-wiki.refined.site/space/MANUAL/355598392

---

# A. Gaps closed since PASS-08

## A1. Scoping / mapping
Closed by PASS-09A.

## A2. Prevalence / cumulative incidence
Closed by PASS-09B.

## A3. Mixed methods
Closed by PASS-09C.

## A4. Textual / policy / expert evidence
Closed by PASS-09D.

## A5. Logic models / complex interventions
Closed by PASS-10.

These no longer block final RES-01.

---

# B. Blocking gap 1 — Effect-modification / treatment-effect heterogeneity questions

## Finding
**MISSING AS AN EXPLICIT QUESTION-FRAMING MODULE**

PASS-05A correctly states:
- prognostic factor != treatment-effect modifier.

PASS-07B correctly requires prespecified subgroup hypotheses.

But RES-01 still lacks a dedicated framing rule for the question:

> **Does the causal effect of intervention A vs B differ according to baseline characteristic, intervention feature or context?**

This is not the same as:
- prognosis;
- ordinary subgroup description;
- general applicability;
- individual response noise.

### Why this is blocking

Cochrane Chapter 10 explicitly defines effect modification as variation in intervention effect by:
- population characteristics;
- intervention characteristics such as dose/duration;
- other study/context characteristics.

Cochrane MECIR C22 requires potential effect modifiers to be predefined and scientifically justified.

Current Cochrane prognosis guidance also distinguishes:
- prognostic factors;
- predictors of treatment effect,
and notes that the latter are a separate problem not covered by ordinary prognosis reviews.

### Project importance

Future personalization depends directly on questions such as:
- does training status modify the effect of volume?
- does baseline strength modify response to a loading strategy?
- does supervision modify program effectiveness?
- does equipment/context modify relative effect?

Without a formal effect-modification question module, the project risks:
- mistaking prognostic factors for treatment-selection factors;
- comparing within-subgroup significance instead of interaction;
- post-hoc subgroup fishing;
- over-personalizing from weak subgroup evidence.

### Required pass

**RES-01 / PASS-12A — effect-modification and predictors-of-treatment-effect question framing.**

It should define at least:
1. target intervention contrast;
2. candidate modifier;
3. modifier levels/scale;
4. target population;
5. outcome/time;
6. hypothesized interaction direction/mechanism;
7. whether modifier is participant-, intervention-, context- or study-level;
8. decision consequence;
9. minimum evidence needed before using modifier for personalization;
10. distinction from prognosis and applicability.

Detailed subgroup/meta-regression statistics remain later methodology topics.

---

# C. Blocking gap 2 — Question viability / FINER / duplication / review necessity

## Finding
**MISSING**

Cochrane Chapter 2 explicitly says refined questions should still meet **FINER** criteria and discusses:
- feasibility;
- importance/relevance;
- ethics/opportunity cost;
- answerability;
- refinement.

JBI guidance for review protocols repeatedly requires:
- justification for the review;
- indication that relevant evidence exists;
- preliminary checking for existing systematic reviews;
- explanation of how a new review differs when one already exists.

The current project has not formalized this as a mandatory pre-search check.

## Why this matters

A well-structured PICO can still be a poor review question if:
1. the answer already exists in a current high-quality review;
2. evidence is too sparse to answer the intended question;
3. the question is so broad that no coherent synthesis is possible;
4. the decision value is negligible;
5. a new review would duplicate work without adding value;
6. the question cannot be ethically/meaningfully operationalized.

## Required distinction

### Scientific importance
Does the answer matter?

### Novelty / duplication
Is a new synthesis needed?

### Feasibility
Can available evidence plausibly answer it?

### Ethics / opportunity cost
Is the work justified relative to its cost/burden and risk of misleading output?

### Relevance
Will the answer affect a real decision or foundational model?

## Required pass

**RES-01 / PASS-12B — question viability: FINER, duplication, answerability and review necessity.**

Expected project fields:
1. Feasible?
2. Interesting/important to intended user?
3. Novel / non-duplicative?
4. Ethical / justified?
5. Relevant?
6. Existing review check completed?
7. Existing review current/high-quality/applicable?
8. What new value does this review add?
9. Is evidence mature enough for focused synthesis?
10. If not, should question route to scoping/mapping instead?

---

# D. Router correction — Harm/safety is a decision domain, not one universal method

## Finding
**ARCHITECTURE ISSUE, NOT A NEW CONTENT GAP**

Current QUESTION_CARD lists:
- harm/safety
as one question type.

This is too coarse.

“Safety” can represent different scientific questions:

### 1. Comparative harm effect
> Does A cause more adverse events than B?
Route:
**intervention-effect + estimand + harm outcome**.

### 2. Frequency
> How common is adverse event X?
Route:
**Frequency Question Module**.

### 3. Causal etiology/risk
> Does exposure X increase risk of adverse event Y?
Route:
**PEO/PECO etiology module**.

### 4. Prognosis
> Among people with condition/event X, who develops complication Y?
Route:
**prognosis module**.

### 5. Policy/procedural safety
> What do current professional bodies recommend as stop/referral criteria?
Route:
**textual/policy module**.

### Decision

In final router:
- keep **Safety/Harm** as a cross-cutting decision-domain flag;
- do not keep it as one standalone methodological framework.

This correction can be implemented in final QUESTION_CARD architecture after PASS-12A/B.

---

# E. Economic evidence — recognized but not currently blocking

## Finding

Current JBI Manual includes **systematic reviews of economic evidence** as one of its eight methodologies.

However, for the current fitness project:
- resource use;
- equipment cost;
- time burden;
- implementation burden
can be handled as outcomes/decision criteria in ordinary effect/implementation reviews.

A formal economic-evaluation review becomes necessary only if the target question is explicitly:
- cost-effectiveness;
- cost-utility;
- cost-benefit;
- economic efficiency.

### Decision
**CONDITIONAL MODULE — NOT BLOCKING RES-01 NOW.**

If such a question appears later:
perform a dedicated current-methodology pass because JBI's economic chapter has been under revision and should not be frozen from legacy guidance.

---

# F. Umbrella review — source-level design, not a missing scientific question type

## Finding

Current JBI Manual also includes **umbrella reviews**.

But an umbrella review usually retains an underlying scientific question such as:
- intervention effect;
- qualitative phenomenon;
and changes the **unit of inclusion** to systematic reviews/research syntheses.

### Decision

For RES-01 router:
- do not create a new scientific-question framework solely called “umbrella”;
- add a later evidence-source/review-design field:
  - primary studies;
  - systematic reviews;
  - umbrella/review-of-reviews.

A formal umbrella review needs dedicated methodology only if the project explicitly chooses that design.

**NOT BLOCKING RES-01 question formulation.**

---

# G. Living review — update strategy, not a new question type

Current Cochrane Chapter 21 defines living systematic review by:
- continual updating;
- decision importance;
- current uncertainty;
- likely new evidence;
- feasibility.

This changes:
- update cadence;
- surveillance;
- workflow.

It does not create a distinct scientific question framework.

### Decision
Keep living-review logic under RES-29 / updating/versioning, not RES-01.

**NOT BLOCKING.**

---

# H. Cross-pass consistency corrections

## H1. “Eligible evidence designs” must follow question type

Current flat QUESTION_CARD has one generic field.

Final modular card should route this field through the active question module:
- RCT/non-randomized for effect/harm as appropriate;
- DTA designs;
- measurement-property designs;
- prognosis designs;
- qualitative designs;
- textual evidence;
- review-level evidence if umbrella route chosen.

No universal design hierarchy should be embedded in RES-01.

---

## H2. “Population/context” must be decomposable

One flat field is insufficient for all question types.

Final architecture should allow:
- target population;
- setting/context;
- application target;
- source-specific population.

But these should appear conditionally rather than duplicate across every card.

---

## H3. Primary objective vs secondary questions

Cochrane recommends a precise primary objective, with secondary objectives/questions where needed.

Final core should include:
1. Primary objective
2. Primary question
3. Secondary/subquestions only when decision-relevant

This prevents a topic from becoming an unbounded list of questions.

---

## H4. Scope refinement rule remains consistent

PASS-01 rule is retained:
- question may be refined;
- reason must be logged;
- assess whether results influenced refinement;
- update search/eligibility/data collection if required.

No contradiction found.

---

## H5. Search Card remains downstream

No change:
- scientific Question Card first;
- Search Concept Card second.

---

# I. Audit result

## Can RES-01 move directly to final architecture?

**NO.**

Two blocking content passes remain:

1. **PASS-12A — effect modification / predictors of treatment effect**
2. **PASS-12B — question viability / FINER / duplication / answerability**

After those:
1. run a short final closure audit;
2. build modular QUESTION_CARD;
3. update SEARCH_CONCEPT_CARD if needed;
4. synthesize RES-01;
5. only then consider `CLOSED_FOR_PRACTICE`.

## Next pass

**RES-01 / PASS-12A — effect-modification and predictors-of-treatment-effect question framing.**
