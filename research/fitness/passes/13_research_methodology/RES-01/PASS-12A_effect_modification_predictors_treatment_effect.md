# RES-01 / PASS-12A — Effect modification and predictors of treatment effect

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-01 — формулировка исследовательского вопроса

## Scope этого прохода

Только:
1. что именно означает effect modification / treatment-covariate interaction;
2. отличие effect modifier от prognostic factor;
3. participant-level vs intervention/context/study-level modifiers;
4. формулировка вопроса «для кого / при каких условиях intervention работает иначе?»;
5. qualitative vs quantitative interaction;
6. pre-specification и rationale;
7. effect scale;
8. within-study vs between-study evidence;
9. distinction true treatment-effect heterogeneity vs noisy individual change scores;
10. минимальная планка перед использованием modifier для персонализации.

Не покрывается здесь:
- детальные subgroup/meta-regression расчёты;
- one-stage/two-stage IPD models;
- multiplicity corrections;
- causal forests / ML HTE;
- individualized treatment-effect prediction modelling;
- N-of-1 methodology;
- final RES-01 synthesis.

## Источники, проверенные в этом pass

1. Cochrane Handbook for Systematic Reviews of Interventions, Chapter 10 — Analysing data and undertaking meta-analyses, section 10.11. Current official page checked 2026-11-16.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10

2. Cochrane MECIR C22 — Planning subgroup analyses. Current official page checked 2026-11-16.  
   https://www.cochrane.org/authors/handbooks-and-manuals/mecir-manual/standards-conduct-new-cochrane-intervention-reviews-c1-c75/developing-protocol-review-c1-c23/planning-review-methods-protocol-stage-c19-c23

3. Cochrane MECIR C67–C68 — Comparing/interpreting subgroup analyses. Current official page checked 2026-11-16.  
   https://www.cochrane.org/authors/handbooks-and-manuals/mecir-manual/standards-conduct-new-cochrane-intervention-reviews-c1-c75/performing-review-c24-c75/synthesizing-results-included-studies-c61-c73

4. Cochrane Prognosis FAQ. Current page checked 2026-11-16.  
   https://methods.cochrane.org/prognosis/faq

5. Riley RD et al. Individual participant data meta-analysis to examine interactions between treatment effect and participant-level covariates: statistical recommendations for conduct and planning. Statistics in Medicine. 2020;39:2115–2137. PMCID PMC7401032.  
   Used here for established interaction-design principles, not as a substitute for current Cochrane guidance.

6. Gao Y et al. Effect Modification Analyses in Individual Participant Data Meta-Analyses: A Systematic Review. JAMA Network Open. 2026.  
   Used to check current practice in prespecification of effect-modification analyses.

7. Current Cochrane Chapter 10 discussion of ICEMAN (Instrument for assessing the Credibility of Effect Modification Analyses).

8. Exercise-specific contextual evidence:
   - 2024 systematic review/meta-analysis of individual-response variance in VO2max;
   - 2026 systematic review of heterogeneity in aerobic training adaptations.
   These are used only to support the caution that observed change-score variability is not automatically true treatment-response heterogeneity.

---

# Part A — Core construct

## 1. Effect modification asks whether the intervention contrast changes

### Established finding
**Confidence: HIGH**

Cochrane defines effect modification / interaction as variation in intervention effect according to characteristics such as:
- population;
- intervention dose/duration;
- context;
- study characteristics.

The key object is not:
> outcome differs between people.

The key object is:
> **effect of A versus B differs across values/levels of modifier M.**

Project canonical form:

> In population P, does the effect of intervention A versus comparator B on outcome O at time T differ according to modifier M?

---

## 2. The contrast A vs B is mandatory

### Project rule grounded in interaction logic
**Confidence: HIGH**

A treatment-effect modifier cannot be defined without a treatment contrast.

Bad:
> Do beginners gain more muscle than trained people?

This is a group-difference/prognosis-style question.

Effect-modification version:
> Does the hypertrophy effect of higher versus lower training volume differ between beginners and trained participants?

The modifier concerns the **difference in treatment effect**, not merely different outcomes.

---

# Part B — Prognostic factor != effect modifier

## 3. Prognostic factor predicts outcome irrespective of treatment contrast

### Established finding
**Confidence: HIGH**

Cochrane explicitly warns that prognostic factors are commonly confused with effect modifiers.

### Prognostic factor
Associated with outcome.

### Effect modifier
Associated with a different effect of intervention A versus B.

A variable can be:
1. prognostic only;
2. effect-modifying only;
3. both;
4. neither.

Project consequence:
do not use a strong prognostic association as justification for personalization unless there is evidence/rationale for interaction with treatment.

---

## 4. Example

Suppose prior training experience predicts strength gain.

That does **not** establish:
> experienced people should receive Program A and beginners Program B.

For treatment selection we need evidence that:
> the **A vs B difference** changes according to training experience.

---

# Part C — Predictors of treatment effect

## 5. Cochrane treats predictors of treatment effect as distinct from ordinary prognosis

### Established finding
**Confidence: HIGH**

Current Cochrane Prognosis FAQ lists:
- overall prognosis;
- prognostic factors;
- prognostic models;
- predictors of treatment effect

as conceptually distinct.

It also states that reviews of predictors of treatment effect are **not currently supported as a standard Cochrane prognosis-review type**.

Project consequence:
do not route predictors-of-treatment-effect into the ordinary Prognosis module.

Route them through the intervention-effect/effect-modification module.

---

# Part D — Modifier classes

## 6. Participant-level baseline modifiers

Examples:
- age;
- sex;
- baseline strength;
- training status;
- baseline symptom severity;
- baseline motivation measure.

For personalized treatment selection, these should generally be measured **before treatment allocation / before intervention exposure**.

Why:
a post-treatment variable may be:
- mediator;
- consequence of treatment;
- adherence/implementation variable;
rather than a baseline treatment-selection factor.

---

## 7. Intervention-level modifiers

Examples:
- dose;
- frequency;
- duration;
- supervision intensity;
- exercise selection;
- comparator type.

Question:
> Does the effect change as intervention characteristic X changes?

This may describe a dose-response/effect-modification relation rather than participant personalization.

---

## 8. Context-level modifiers

Examples:
- home vs supervised gym;
- healthcare vs community;
- equipment availability;
- coaching model.

These can matter for:
- intervention delivery;
- adherence;
- realized effect.

Context modifier != automatically participant trait.

---

## 9. Study-level methodological characteristics

Examples:
- follow-up length;
- risk-of-bias feature;
- study design feature.

These may explain heterogeneity but are not usually personalization variables.

Project rule:
keep separate labels:
1. participant modifier;
2. intervention modifier;
3. context modifier;
4. methodological modifier.

Only the first category normally supports direct person-level treatment selection.

---

# Part E — Qualitative vs quantitative interaction

## 10. Quantitative interaction

### Established finding
**Confidence: HIGH**

Effect differs in magnitude but retains the same direction.

Example:
A is better than B in both groups, but much more so in one.

## 11. Qualitative interaction

### Established finding
**Confidence: HIGH**

Direction reverses:
- A better than B in one subgroup;
- B better than A in another.

Cochrane notes that qualitative interactions are uncommon.

Project consequence:
do not expect personalized decisions to require effect reversal.

A modifier may matter practically even if A remains better in every group, provided magnitude changes enough to alter:
- burden/benefit balance;
- cost;
- feasibility;
- recommendation.

---

# Part F — Effect scale matters

## 12. Effect modification is scale-dependent

### Established methodological principle
**Confidence: HIGH**

An interaction can appear on:
- absolute scale;
- relative scale;
and not necessarily both.

Cochrane distinguishes relative and absolute treatment effects and notes that absolute effects depend strongly on baseline risk.

Project rule:
the question must state the **target effect scale when it matters**.

For binary outcomes distinguish:
- relative effect modification;
- absolute benefit/harm differences caused by different baseline risk.

---

## 13. Baseline-risk heterogeneity is not automatically relative effect modification

Example:

Suppose relative risk reduction is identical in:
- high-risk group;
- low-risk group.

Absolute benefit can still be much larger in the high-risk group.

This can rationally change a treatment decision even though the **relative treatment effect is not modified**.

Project distinction:

1. **Effect modification**
   - treatment contrast itself changes on chosen scale.

2. **Decision heterogeneity from baseline risk**
   - same relative effect;
   - different absolute benefit/harm.

Both can matter for personalization, but they are not identical claims.

---

# Part G — Pre-specification

## 14. Candidate modifiers should be specified before result inspection

### Established finding
**Confidence: HIGH**

Cochrane MECIR C22 requires:
- predefining potential effect modifiers;
- restricting their number;
- giving a rationale for each.

Cochrane Chapter 10 explains why:
- multiple subgroup searches increase false positives;
- result-driven selection creates data dredging.

Project rule:
each candidate modifier must have a pre-search record.

---

## 15. Candidate modifier needs a scientific hypothesis

### Established finding
**Confidence: HIGH**

Cochrane recommends biological/clinical rationale, ideally supported by evidence outside the included studies.

Required fields:

1. modifier;
2. plausible mechanism/pathway;
3. expected direction if defensible;
4. expected functional form if known;
5. why the difference would change a decision.

Do not test modifiers merely because they are available in tables.

---

## 16. 2026 IPD review shows direction is often under-prespecified

### Current empirical finding
**Confidence: HIGH**

A 2026 systematic review of IPD meta-analysis protocols found effect-modification analyses were commonly planned, but the hypothesized **direction** was rarely specified.

Project consequence:
when direction can be scientifically justified, record it before synthesis.

If direction is genuinely unknown:
state:
> direction not prespecified

rather than inventing one retrospectively.

---

# Part H — Continuous modifiers

## 17. Do not dichotomize continuous modifiers by default

### Established finding
**Confidence: HIGH**

Examples:
- age;
- baseline strength;
- training experience duration;
- baseline symptom score.

Arbitrary cut-points:
- discard information;
- can manufacture subgroup patterns;
- may be chosen after seeing data.

Cochrane/ICEMAN specifically flags arbitrary cut-points as a credibility problem.

Project rule:
preserve continuous scale where possible.

Categorize only when:
1. meaningful external threshold exists;
2. decision itself is threshold-based;
3. evidence only permits categories and limitation is acknowledged.

---

# Part I — Correct evidence for interaction

## 18. Compare treatment effects between subgroups, not significance inside subgroups

### Established finding
**Confidence: HIGH**

Incorrect:
- A significant in beginners;
- A not significant in trained;
- therefore training status modifies effect.

Correct:
- directly test whether the A-vs-B effect differs between beginners and trained participants.

Cochrane MECIR C67 treats this as mandatory.

---

## 19. Participant-level modifiers require within-study interaction evidence where possible

### Established finding
**Confidence: HIGH**

Cochrane warns that study-level subgroup/meta-regression analyses of participant characteristics can suffer:
- ecological bias;
- aggregation bias;
- confounding.

Example:
using mean age of each study cannot reliably answer whether age modifies treatment effect within participants.

Stronger evidence:
- treatment × participant-characteristic interaction within randomized trials;
- replicated across trials;
- IPD meta-analysis when feasible.

---

## 20. Between-study meta-regression is weaker for person-level personalization

### Established finding
**Confidence: HIGH**

If:
- studies with older participants used different programs;
- younger-participant studies used different comparators;

then age and intervention characteristics may be confounded.

Project rule:
do not translate a study-level association directly into:
> “for a person of age X choose treatment Y”.

That requires stronger participant-level evidence.

---

# Part J — Credibility of effect modification

## 21. Interaction evidence is observational in nature

### Established finding
**Confidence: HIGH**

Even when treatment itself was randomized, subgroup membership usually was not.

Therefore effect-modification claims are vulnerable to:
- chance;
- confounding;
- multiplicity;
- selective reporting.

Project consequence:
an interaction P value alone is insufficient for high-confidence personalization.

---

## 22. ICEMAN credibility dimensions are useful

### Established finding
**Confidence: HIGH**

Current Cochrane Chapter 10 explicitly points to ICEMAN for assessing credibility of effect modification.

Important dimensions include:

1. within-study vs between-study evidence;
2. consistency across studies;
3. number of studies for between-study claims;
4. a priori direction;
5. statistical support for interaction;
6. number of modifiers tested;
7. modelling approach;
8. avoidance of arbitrary cut-points;
9. external supporting evidence / robustness where relevant.

Project rule:
future personalization-relevant effect-modifier claims should receive an explicit credibility assessment rather than be accepted from one subgroup table.

Detailed ICEMAN scoring belongs later evidence-appraisal topics.

---

# Part K — Practical importance

## 23. Statistical interaction may be too small to matter

### Established finding
**Confidence: HIGH**

Cochrane notes that if subgroup differences would not lead to different recommendations, emphasizing them may be unhelpful.

Project rule:
before testing, state a **decision consequence**.

Example:
> If the difference in effect across training-status levels is too small to alter program choice, the modifier is scientifically interesting but not personalization-critical.

---

## 24. Interaction does not automatically imply different best treatment

### Established finding
**Confidence: HIGH**

A treatment-covariate interaction can exist while A remains preferable to B across the full modifier range.

For treatment selection, we need:
- effect estimates by modifier level;
- uncertainty;
- benefit/harm/burden trade-offs;
- practical threshold.

Project consequence:
“interaction detected” != “personalization rule validated”.

---

# Part L — Individual response variability is a separate question

## 25. Wide change-score dispersion is not proof of treatment-effect heterogeneity

### Established methodological point
**Confidence: HIGH**

Observed person-to-person changes contain:
- true treatment response;
- measurement error;
- day-to-day biological variability;
- regression to the mean;
- unrelated time effects.

Exercise literature specifically shows that classifying “responders/non-responders” from single pre/post changes can be highly misleading unless measurement and within-person variability are addressed.

Project rule:
do not infer treatment-effect modifiers merely because some participants improved more than others.

---

## 26. True person-by-treatment heterogeneity and predictable effect modification are different

Even if true individual treatment effects vary, it does not follow that:
- a measured baseline characteristic can predict that variation.

For practical personalization we need both:

1. meaningful heterogeneity exists;
2. a reproducible baseline modifier predicts it well enough to alter decisions.

This is a higher bar than observing heterogeneous outcomes.

---

# Part M — Exercise-specific routing examples

## 27. Bad personalization question

> Do strong people respond differently from weak people?

Problems:
- no intervention contrast;
- no outcome/time;
- “respond differently” undefined;
- could merely be prognostic.

---

## 28. Better effect-modification question

> Among resistance-trained adults, does baseline strength modify the 12-week effect of higher versus lower weekly set volume on change in maximal strength?

Elements:
- P = resistance-trained adults;
- A = higher weekly volume;
- B = lower weekly volume;
- O = maximal strength change;
- T = 12 weeks;
- M = baseline strength;
- target = treatment × baseline-strength interaction.

---

## 29. Context modifier example

> Does supervision modify the effect of a structured resistance-training program versus self-directed training on session completion over 12 weeks?

This is an effect-modification question about context/delivery, not prognosis.

---

# Part N — Project Effect-Modification Module

Use when the decision asks:
> for whom / under what conditions does the effect of A vs B differ?

Fields:

1. **Decision/use**
2. **Target population**
3. **Intervention A**
4. **Comparator B**
5. **Outcome**
6. **Time**
7. **Target effect measure / scale**
8. **Candidate effect modifier**
9. **Modifier class**
   - participant baseline;
   - intervention characteristic;
   - context;
   - methodological/study characteristic.
10. **Modifier measurement/definition**
11. **Continuous or categorical?**
12. **If categorical, why is cut-point justified?**
13. **Hypothesized interaction**
14. **Expected direction**, if defensible
15. **Mechanistic/clinical rationale**
16. **External support available before synthesis?**
17. **Is modifier prognostic independently of treatment?**
18. **Why prognosis alone is insufficient**
19. **Preferred evidence level**
   - within-trial interaction;
   - IPD interaction;
   - aggregate study-level only;
   - other.
20. **Risk of ecological/aggregation bias**
21. **Potential confounders / correlated modifiers**
22. **Prespecified or post hoc?**
23. **Number of modifiers being tested**
24. **Decision-relevant interaction magnitude**
25. **Would modifier change treatment/program choice?**
26. **Credibility assessment required?**
27. **Personalization claim allowed at current evidence level?**
28. **Uncertainty / evidence gap**

---

# Part O — Minimum bar before using modifier for personalization

## 30. Project rule

A modifier should **not** drive personalized prescription merely because one study reports a subgroup difference.

Before using it materially, seek as much as feasible of:

1. clear treatment contrast;
2. prespecified modifier;
3. plausible mechanism;
4. direct interaction test;
5. adequate information/power;
6. preferably within-study participant-level evidence;
7. replication/consistency;
8. no arbitrary cut-point;
9. practical magnitude large enough to change decision;
10. acceptable credibility under ICEMAN-like assessment;
11. no obvious confounding with another modifier;
12. relevance to target population/context.

If these are absent:
label modifier as:
- exploratory;
- hypothesis-generating;
- uncertain for personalization.

---

# Part P — Architecture decision

## 31. Effect modification is a conditional branch of intervention-effect questions

Final router:

### Does A vs B have an effect?
→ Intervention Effect module.

### Does A vs B have different effects according to M?
→ Intervention Effect + **Effect-Modification Module**.

### Does M predict outcome regardless of treatment?
→ Prognosis module.

### Does absolute benefit differ because baseline risk differs despite stable relative effect?
→ Intervention Effect + baseline-risk/absolute-effect interpretation, not automatically effect modification.

### Do individuals merely show variable pre/post changes?
→ Individual-response variability question; do not infer modifier without proper interaction evidence.

---

## 32. Practical rules produced by PASS-12A

1. Define effect modification as change in the **A-vs-B treatment effect** across modifier values.
2. Require an explicit treatment contrast.
3. Keep prognostic factors separate from effect modifiers.
4. Route predictors of treatment effect through intervention-effect methodology, not ordinary prognosis.
5. Label modifier class: participant, intervention, context or methodological.
6. For participant personalization, prefer baseline/pre-treatment modifiers.
7. Distinguish quantitative from qualitative interaction.
8. State the effect scale when material.
9. Separate relative effect modification from larger absolute benefit caused only by baseline risk.
10. Prespecify a small number of scientifically justified modifiers.
11. Record expected interaction direction when defensible.
12. Avoid arbitrary dichotomization of continuous modifiers.
13. Compare treatment effects directly; never infer modification from one subgroup being significant and another not.
14. Prefer within-study participant-level interaction evidence for person-level modifiers.
15. Treat study-level meta-regression cautiously because of ecological bias/confounding.
16. Use credibility criteria such as ICEMAN before strong personalization claims.
17. Require practical decision importance, not merely statistical interaction.
18. Do not equate interaction with a validated treatment-selection rule.
19. Do not infer true response heterogeneity from raw change-score variability.
20. True heterogeneity and predictable heterogeneity are separate requirements.
21. Add a conditional Effect-Modification Module to the final modular QUESTION_CARD.

## What remains unresolved for RES-01

1. Question viability / FINER / duplication / answerability.
2. Final closure audit.
3. Final modular QUESTION_CARD.
4. Final RES-01 synthesis.

## Next pass

**RES-01 / PASS-12B — question viability: FINER, duplication, answerability and review necessity.**
