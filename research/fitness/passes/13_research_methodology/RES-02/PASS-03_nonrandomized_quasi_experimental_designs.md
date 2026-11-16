# RES-02 / PASS-03 — Non-randomized intervention and quasi-experimental design families

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-02 — Study designs / what they answer

## Scope этого прохода

Только:
1. NRSI as umbrella;
2. non-randomized controlled trials;
3. quasi-randomized allocation;
4. uncontrolled before-after;
5. controlled before-after / non-equivalent groups pre-post;
6. interrupted time series;
7. controlled interrupted time series;
8. regression discontinuity;
9. instrumental-variable / encouragement structures as design-identification strategies;
10. natural/policy experiments as umbrella/context rather than one atomic design.

Не покрывается здесь:
- cohort/case-control/cross-sectional observational families;
- detailed confounding control;
- ROBINS-I domains;
- propensity-score methods;
- detailed difference-in-differences assumptions;
- detailed RDD/IV estimation;
- statistical models;
- final design-selection matrix.

---

## Источники, проверенные в этом pass

1. **Cochrane Handbook Chapter 24 — Including non-randomized studies on intervention effects**  
   Current official page checked 2026-11-16.  
   Chapter citation: last updated October 2019; Handbook v6.5.  
   Key rule: NRSI = quantitative intervention-effect studies without random allocation; characterize by design features rather than labels.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-24

2. **Cochrane Handbook Chapter 25 — Assessing risk of bias in a non-randomized study**  
   Current official page checked 2026-11-16.  
   Current sections distinguish:
   - uncontrolled before-after / ITS;
   - controlled before-after;
   - controlled ITS.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-25

3. **Cochrane public-health intervention review methods guidance — 2024**  
   Current Cochrane methods resource checked 2026-11-16.  
   Provides a feature-based mapping of:
   - quasi-randomized controlled trials;
   - regression-discontinuity;
   - instrumental-variable designs;
   - ITS;
   - controlled ITS;
   - non-equivalent groups pre/post;
   - post-test-only non-equivalent group designs.  
   https://methods.cochrane.org/defining-and-determining-which-quantitative-study-designs-include-your-systematic-review-effects

4. **Cochrane EPOC — study-design terminology**  
   Current resource checked 2026-11-16; PDF inspected with screenshot.  
   Defines:
   - NRCT;
   - CBA;
   - ITS;
   and historical EPOC minimum criteria.  
   https://epoc.cochrane.org/sites/epoc.cochrane.org/files/uploads/EPOC%20Study%20Designs%20About.pdf

5. **JBI Critical Appraisal Tools**  
   Current official page checked 2026-11-16.  
   Current JBI quasi-experimental tool revised 2024.  
   https://jbi.global/critical-appraisal-tools

## Version note

- Overall Cochrane Handbook current release remains **6.5.1 (2026)**.
- Chapter 24 substantive update remains October 2019.
- Cochrane public-health NRSI guidance is 2024 and is especially useful for the current feature-based taxonomy.
- Historical EPOC terminology is useful but should not override newer Cochrane feature-based guidance.

---

# Part A — NRSI umbrella

## 1. NRSI is broader than “observational study”

### Established finding
**Confidence: HIGH**

Cochrane defines NRSI as:

> any quantitative study estimating intervention effects without random allocation of individuals or clusters.

This umbrella can include studies where intervention exposure arises from:
- investigator non-random allocation;
- clinician/planner decisions;
- participant choices;
- policy;
- time/location;
- threshold rules;
- other naturally occurring processes.

Project consequence:
do not equate:
- NRSI;
- observational;
- quasi-experimental.

These overlap but are not identical labels.

---

## 2. “Quasi-experimental” is not precise enough as an eligibility label

### Established finding
**Confidence: HIGH**

Current Cochrane guidance explicitly warns that labels such as:
- NRSI;
- quasi-experimental;
- natural experiment;
- CBA;
- ITS
are inconsistently used.

JBI currently uses **quasi-experimental studies** as a practical appraisal category, but Cochrane recommends describing the defining features.

Project rule:

> If a paper says “quasi-experimental”, extract the actual allocation/comparator/time structure before classifying it.

---

# Part B — Non-randomized controlled trial

## 3. NRCT / non-randomized trial

### Established finding
**Confidence: HIGH**

EPOC working definition:
- investigators allocate participants/groups to interventions;
- allocation method is not random.

Project structural record:
1. intervention assigned by investigators? YES;
2. random allocation? NO;
3. concurrent comparison group? usually YES;
4. allocation rule/mechanism explicitly recorded.

Examples:
- investigator assigns by clinic;
- alternation;
- day of week;
- record number;
- convenience sequence.

Detailed allocation-bias implications belong RES-03/04.

---

# Part C — Quasi-randomized allocation

## 4. Quasi-randomized controlled trial

### Established finding
**Confidence: HIGH**

Current Cochrane 2024 guidance uses this term for systematic, non-random assignment such as:
- alternation;
- alphabetic ordering;
- other known forcing/allocation rules.

Cochrane Chapter 24 treats such studies as NRSI, not true randomized trials.

### Project rule

Quasi-randomization is classified as:

> non-randomized intervention study with an explicit deterministic allocation rule.

Do not group it with true randomized allocation.

---

# Part D — Uncontrolled before-after

## 5. Single-group before-after

### Established finding
**Confidence: HIGH**

Structure:
1. all observed units receive intervention;
2. outcome measured before;
3. outcome measured after;
4. no concurrent comparator.

### Main inferential weakness

Observed change may reflect:
- secular trend;
- regression to the mean;
- concurrent events;
- maturation;
- measurement changes;
- other time-varying causes.

Cochrane 2024 guidance states that single-group uncontrolled pre-post designs are usually excluded from effect reviews because confounding risk is often critically high.

### Project role

Useful mainly for:
- feasibility;
- implementation description;
- early signal generation;
- within-program monitoring.

Weak for ordinary causal effectiveness claims.

---

# Part E — Controlled before-after / non-equivalent groups pre-post

## 6. CBA

### Established finding
**Confidence: HIGH**

Core structure:
1. intervention group;
2. non-random comparator group;
3. at least one pre-intervention outcome measure in both;
4. at least one post-intervention outcome measure in both.

Current Cochrane Chapter 25 allows comparator groups to be:
- contemporaneous;
- or non-contemporaneous.

### Why pre-test matters

Pre-intervention measurement can reveal baseline differences and allows comparison of changes.

But it does not automatically remove:
- unmeasured confounding;
- differential trends;
- time-varying confounding;
- site/context differences.

### Project taxonomy

CBA is better represented as:

> non-equivalent groups + pre/post outcome structure.

This prevents over-relying on the label.

---

## 7. Difference-in-change / “double difference”

### Current Cochrane framing
**Confidence: HIGH**

Cochrane 2024 guidance distinguishes:
- contemporaneous between-group comparison;
- historical within-group comparison;
- contemporaneous + historical **double-difference**.

This is the structural logic behind many difference-in-differences-type evaluations.

### Project decision

Do not create “difference-in-differences” as a completely separate top-level study family in RES-02.

Treat it as:
- a non-equivalent-groups pre/post structure;
- plus a particular effect-identification/analysis strategy.

Detailed assumptions such as parallel trends belong RES-05/statistical topics.

---

# Part F — Interrupted time series

## 8. ITS

### Established finding
**Confidence: HIGH**

Structure:
1. multiple outcome observations before intervention;
2. identifiable interruption/intervention point;
3. multiple observations after intervention;
4. effect estimated against the projected pre-intervention trajectory.

Cochrane Chapter 25 explains that the counterfactual is constructed from the pre-intervention trend.

### Core strength

Stronger than one pre/one post because it can characterize:
- baseline level;
- baseline trend;
- change in level;
- change in trend.

### Core weakness

Without concurrent control:
- an external event occurring near the interruption can mimic intervention effect.

### Important modern correction

Old EPOC guidance used a practical minimum of:
- ≥3 pre;
- ≥3 post observations.

Current Cochrane guidance is more cautious:
- there must be **sufficient data points over sufficient time** to characterize trends;
- 3+3 should not be treated as a universal guarantee of valid ITS inference.

Project rule:
record 3+3 only as historical EPOC minimum, not as a universal methodological threshold.

---

# Part G — Controlled interrupted time series

## 9. CITS

### Established finding
**Confidence: HIGH**

Current Cochrane Chapter 25 explicitly includes **controlled interrupted time series** within controlled before-after structures.

Structure:
1. intervention time series;
2. one or more concurrent comparison series;
3. multiple pre-intervention observations;
4. multiple post-intervention observations.

### Advantage over uncontrolled ITS

A comparison series can help distinguish intervention effect from:
- secular trends;
- concurrent historical events;
- system-wide shocks.

### Limitation

The control series must itself be scientifically credible.

A poorly matched control does not magically remove confounding.

### Project taxonomy

CITS =

> ITS temporal structure + contemporaneous comparison series.

---

# Part H — Regression discontinuity

## 10. Regression discontinuity design (RDD)

### Established finding
**Confidence: HIGH**

Current Cochrane 2024 guidance defines RDD by treatment assignment using an explicit threshold/cut-point on a baseline scaled variable.

Examples:
- age threshold;
- income threshold;
- test score;
- administrative boundary.

### Sharp RDD

Treatment changes deterministically at threshold.

### Fuzzy RDD

Probability of treatment changes discontinuously at threshold, but assignment is not perfectly deterministic.

### Causal target

RDD primarily estimates an effect **around the threshold**, not necessarily across the full population.

### Project taxonomy

RDD is:

> threshold/forcing-variable non-randomized intervention design.

Do not collapse it into generic cohort/CBA.

### Boundary

Detailed assumptions:
- continuity;
- manipulation around cutoff;
- bandwidth/model specification
belong later causal/statistical topics.

---

# Part I — Instrumental-variable structures

## 11. Instrumental-variable design/analysis

### Current Cochrane classification
**Confidence: HIGH**

Cochrane 2024 guidance lists IV as an approach for estimating intervention effects when a pre-treatment variable influences treatment receipt but is intended not to affect outcome except through treatment.

Examples may include:
- policy/institutional instruments;
- provider preference;
- randomized encouragement;
- genetic instruments in other causal questions.

### Important taxonomy correction

IV is often more accurately an:
- identification strategy;
- analysis framework;
than a unique data-collection design.

The underlying data can be:
- cross-sectional;
- cohort;
- trial;
- natural experiment.

### Project decision

Record:

1. underlying study structure;
2. instrument/forcing mechanism;
3. IV identification strategy.

Do not classify “IV study” as if it replaced the base design.

Detailed IV assumptions belong RES-05.

---

# Part J — Natural experiments

## 12. “Natural experiment” is an umbrella/context label

### Established/project inference
**Confidence: HIGH**

Current Cochrane guidance notes that some retrospectively evaluated NRSI are called natural experiments, but also warns that “natural experiment” alone is not enough to define eligibility.

A natural/policy experiment may exploit variation generated by:
- policy;
- geography;
- timing;
- administrative rules;
- threshold;
- institutional practice;
- exogenous events.

The resulting evaluation can use:
- ITS/CITS;
- RDD;
- non-equivalent group pre/post;
- IV;
- other structures.

### Project rule

Do not write:

> Design = natural experiment

without also recording the actual:
- assignment/exposure mechanism;
- comparator;
- temporal structure;
- identification strategy.

---

# Part K — Policy experiments

## 13. Policy intervention is not a design

### Established finding
**Confidence: HIGH**

“Policy” describes the intervention source.

A policy effect may be evaluated via:
- cluster trial;
- stepped wedge;
- CBA;
- ITS;
- CITS;
- RDD;
- IV;
- cohort-like comparison.

Project taxonomy:
**policy = intervention/context attribute**, not study-design family.

---

# Part L — Assignment mechanism is central

## 14. Cochrane feature-based classification

For NRSI, record how groups were formed:

1. quasi-randomization;
2. threshold/forcing variable;
3. researcher action;
4. time;
5. location;
6. clinician/practitioner;
7. participant preference;
8. policy maker;
9. outcome status;
10. other process.

This feature often matters more than the paper's self-applied label.

---

# Part M — Comparator structure

## 15. NRSI comparator taxonomy

Explicitly record:

1. contemporaneous comparator;
2. historical comparator;
3. both contemporaneous + historical;
4. no comparator;
5. synthetic/model-based counterfactual where applicable.

### Examples

CBA:
- contemporaneous + historical pre/post structure.

ITS:
- historical trend-based counterfactual.

CITS:
- historical + contemporaneous series.

RDD:
- contemporaneous local comparison around threshold.

This is more informative than “quasi-experimental = yes”.

---

# Part N — Temporal structure

## 16. Record data timing separately

For NRSI record:

1. post-only;
2. one pre + one post;
3. multiple pre + multiple post;
4. same individuals over time;
5. repeated cross-sections;
6. mixed/panel structure.

Current Cochrane explicitly treats same-unit longitudinal versus repeated cross-sectional data as distinct features.

---

# Part O — Project NRSI structural record

For future extraction/classification:

1. Is this estimating intervention effect? YES/NO
2. Randomized? YES/NO
3. Who/what assigned intervention?
4. Allocation/group-formation mechanism
5. Unit receiving intervention
6. Unit observed
7. Concurrent comparator? YES/NO
8. Historical comparator? YES/NO
9. Pre-intervention outcome data?
10. Number/pattern of pre observations
11. Post-intervention outcome data?
12. Number/pattern of post observations
13. Same units over time or repeated cross-sections?
14. Explicit threshold/forcing variable?
15. Clear interruption point?
16. Comparison time series?
17. Underlying design family
18. Identification strategy:
   - simple between-group;
   - pre/post;
   - double difference / DiD-like;
   - ITS;
   - CITS;
   - RDD;
   - IV;
   - other.
19. Natural/policy experiment context?
20. Confounding-control strategy — record only; detailed appraisal later
21. Self-applied study label
22. Project structural classification

---

# Part P — Practical rules produced by PASS-03

1. NRSI is an umbrella for quantitative intervention-effect studies without random allocation.
2. “Quasi-experimental” alone is not a sufficiently precise design classification.
3. NRCT = investigator-assigned intervention without true randomization.
4. Quasi-randomized = deterministic/systematic allocation; still NRSI.
5. Uncontrolled before-after is usually weak for causal effect estimation.
6. CBA = non-equivalent intervention/control groups with pre and post measures.
7. Pre-test improves structure but does not eliminate confounding.
8. Difference-in-change/DiD logic is an identification strategy layered on pre/post comparison, not a new universal study family.
9. ITS requires multiple pre/post observations and a clear interruption.
10. Uncontrolled ITS remains vulnerable to concurrent historical events.
11. Old EPOC 3+3 criterion is not a universal validity threshold.
12. CITS adds one or more concurrent comparison series.
13. RDD uses threshold-based assignment and estimates a local effect around the cutoff.
14. IV is usually an identification strategy layered on an underlying design.
15. Natural experiment is an umbrella/context label, not an atomic design.
16. Policy is intervention/context, not design.
17. Assignment mechanism must be extracted explicitly.
18. Comparator structure must be extracted explicitly.
19. Temporal structure must be extracted explicitly.
20. Same-units longitudinal vs repeated cross-sections must be distinguished.
21. NRSI classification remains multi-axis and feature-based.
22. Detailed confounding/bias assumptions are deferred to RES-04/05.

---

# Unresolved for RES-02

1. Observational analytic families:
   - cohort;
   - case-control;
   - analytical cross-sectional;
   - ecological/aggregate.

2. Descriptive/frequency structures:
   - prevalence;
   - case series;
   - case report.

3. Question-specific families:
   - diagnostic accuracy;
   - measurement;
   - prognosis/prediction;
   - mechanism;
   - qualitative;
   - mixed methods.

4. Purpose-vs-design audit.

5. Final design-selection matrix.

6. Gap audit.

7. New synthesis.

## Next pass

**RES-02 / PASS-04 — observational analytic design families: cohort, case-control, analytical cross-sectional and ecological/aggregate structures.**
