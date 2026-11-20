# RES-02 / PASS-04 — Observational analytic design families

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-02 — Study designs / what they answer

## Scope этого прохода

Только observational analytic families:

1. cohort;
2. case-control;
3. nested case-control;
4. case-cohort;
5. analytical cross-sectional;
6. ecological / aggregate-level designs;
7. orthogonal features:
   - prospective/retrospective;
   - closed/open/dynamic cohort;
   - individual vs aggregate unit;
   - registry/database as data source rather than design.

Не покрывается здесь:
- descriptive prevalence study design in detail;
- case report / case series;
- case-crossover;
- self-controlled case series;
- detailed confounding/causal assumptions;
- statistical estimation;
- detailed prognosis-design methods;
- detailed diagnostic/measurement designs;
- final design-selection matrix.

---

## Источники, проверенные в этом pass

1. **Cochrane Handbook Chapter 24 — Including non-randomized studies on intervention effects**  
   Current official page checked 2026-11-16.  
   Chapter citation: last updated October 2019; Handbook v6.5.  
   Key rule: characterize observational/NRSI evidence by actual design features rather than labels; cohort/case-control/cross-sectional labels can be inconsistently used.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-24

2. **JBI Critical Appraisal Tools — current official page**  
   Checked 2026-11-16.  
   Current design-specific categories include:
   - cohort;
   - case-control;
   - analytical cross-sectional;
   - prevalence;
   - case series;
   - case reports;
   - other design-specific tools.  
   The analytical cross-sectional tool was revised in 2026.  
   https://jbi.global/critical-appraisal-tools

3. **JBI — revised analytical cross-sectional risk-of-bias tool**  
   Current JBI page checked 2026-11-16.  
   Explicitly defines analytical cross-sectional studies as cross-sectional studies examining associations between exposures and outcomes.  
   https://jbi.global/news/rethinking-risk-bias-cross-sectional-studies

4. **JBI Cohort Studies critical appraisal checklist**  
   Official JBI tool checked 2026-11-16.  
   Structural elements include:
   - exposed/unexposed groups from same population;
   - exposure measurement;
   - outcome-free status at start/moment of exposure where applicable;
   - follow-up sufficient for outcomes to occur.  
   https://jbi.global/critical-appraisal-tools

5. **JBI Case-Control Studies critical appraisal checklist**  
   Official JBI tool checked 2026-11-16.  
   Structural elements include:
   - cases and controls from a defined source population;
   - case definition;
   - control selection;
   - prior exposure ascertainment.  
   https://jbi.global/critical-appraisal-tools

6. **STROBE official site**  
   Current official site checked 2026-11-16.  
   STROBE identifies cohort, case-control and cross-sectional studies as the three main analytical observational designs in its core reporting guidance.  
   STROBE explicitly states that it is a **reporting guideline**, not a prescription for study design/conduct or a quality-assessment instrument.  
   https://www.strobe-statement.org/

7. **CDC — current ecological-study description (2026)**  
   Current CDC guidance checked 2026-11-16.  
   Defines ecological study as comparison of aggregated exposure/environmental data with aggregated outcome data and warns against individual-level causal inference from aggregate associations.  
   https://www.cdc.gov/cancer-environment/php/guidelines/phase-3.html

8. **Recent peer-reviewed methodological review of cohort/case-control designs (2026)**  
   Used only as supplementary support for nested case-control / case-cohort classification where current official sources are less explicit.  
   Core structural claims remain grounded in established epidemiologic design principles.

## Source-status note

- STROBE is used only to confirm common observational design families/reporting terminology, not as a validity hierarchy.
- JBI appraisal categories are useful design anchors but do not imply that labels alone are sufficient.
- Cochrane's feature-based rule from PASS-01 remains controlling when labels conflict with actual study structure.

---

# Part A — Observational analytic umbrella

## 1. Observational analytic study

### Project definition
**Confidence: HIGH**

An observational analytic study evaluates an association/relationship without investigator random allocation of the exposure/intervention being studied.

The central structure must specify:
1. source population;
2. exposure/predictor definition;
3. outcome definition;
4. how participants/units enter the study;
5. temporal relation;
6. comparison structure;
7. unit of inference.

“Observational” is too broad to identify inferential properties by itself.

---

# Part B — Cohort studies

## 2. Core cohort structure

### Established finding
**Confidence: HIGH**

A cohort study organizes participants from a defined source population based on:
- exposure/predictor status;
- eligibility/baseline state;
- or another pre-outcome characteristic,

then observes subsequent outcome occurrence over time.

JBI's cohort checklist structurally expects:
- comparable exposed/unexposed groups from the same population;
- exposure assessment;
- participants free of the outcome at baseline/moment of exposure when relevant;
- follow-up long enough for outcome occurrence.

### Project canonical structure

`Source population → baseline/exposure state → follow-up → outcome occurrence`.

---

## 3. What cohort design can directly support

Depending on the question and sampling:

1. incidence / risk;
2. incidence rate / person-time;
3. prognosis;
4. exposure-outcome temporal ordering;
5. multiple outcomes from one exposure;
6. longitudinal change;
7. intervention-effect NRSI when intervention receipt is naturally/non-randomly determined.

Causal interpretation still depends on confounding/control assumptions and is deferred to RES-05.

---

## 4. Prospective vs retrospective cohort

### Important correction
**Confidence: HIGH**

These are **data-timing / study-planning features**, not separate fundamental designs.

### Prospective cohort
Relevant exposure/baseline state is established and participants are followed forward under a plan created before outcome occurrence/data completion.

### Retrospective/historical cohort
Cohort, exposure and follow-up are reconstructed from existing records/data.

### Project rule

Always classify as:
> cohort + prospective/retrospective features

not:
> design = prospective study

Cochrane explicitly warns that a paper may call itself prospective even when only some study features were planned prospectively.

---

## 5. Ambispective / bidirectional cohort

### Project taxonomy
**Confidence: HIGH**

A cohort can use:
- historical data before study initiation;
- plus continued prospective follow-up.

This is not a new top-level design.

Record:
> cohort + retrospective component + prospective component.

---

## 6. Closed/fixed vs open/dynamic cohort

### Structural distinction
**Confidence: HIGH**

### Closed/fixed cohort
Membership is defined at a baseline window and no new members normally enter afterward.

### Open/dynamic cohort
Participants may enter/leave over calendar time; person-time becomes especially important.

### Project importance

This feature matters for:
- denominator definition;
- incidence;
- follow-up interpretation;
- exposure changes.

It is an axis within cohort architecture, not a separate evidence family.

---

## 7. Inception cohort

### Project classification
**Confidence: HIGH**

An inception cohort is assembled at a common early point in:
- disease;
- condition;
- exposure;
- treatment trajectory.

This can improve temporal clarity for prognosis or harms.

Cochrane Chapter 24 specifically notes outcome ascertainment from onset of exposure as a preferred feature in cohort studies of harms.

Inception cohort = cohort refinement, not a new top-level design.

---

# Part C — Case-control studies

## 8. Core case-control structure

### Established finding
**Confidence: HIGH**

Sampling begins with outcome/case status:

1. identify cases with outcome;
2. select controls representing the source population that produced the cases;
3. compare prior exposure/predictor histories.

JBI's case-control checklist emphasizes:
- defined source population;
- clear case criteria;
- appropriate control selection;
- exposure measured comparably in cases and controls.

### Project canonical structure

`Source population → sample by outcome status → reconstruct/measure prior exposure`.

This differs fundamentally from cohort sampling.

---

## 9. Source population is part of the design

### Established finding
**Confidence: HIGH**

Controls should represent the population from which the cases arose.

Project rule:
a case-control study cannot be classified adequately by:
> cases vs healthy controls

without asking:
- eligible for what source population?
- could controls have become cases under the same case definition/time process?

This is a structural requirement, not merely a later bias checklist item.

---

## 10. Case-control does not directly supply the cohort denominator

### Established principle
**Confidence: HIGH**

Because sampling is conditioned on outcome status, the case-control sample itself usually does not directly represent:
- population risk;
- incidence proportion;
- total person-time.

The effect measure/interpretation depends on:
- how controls were sampled;
- underlying source population.

Detailed odds/rate/risk estimation belongs RES-08/09.

---

## 11. Incident vs prevalent cases

### Project taxonomy
**Confidence: HIGH**

Case-control studies may use:
- incident cases;
- prevalent/existing cases.

This affects the target relation and selection process.

Record explicitly:
1. incident/prevalent;
2. case ascertainment window;
3. source population;
4. control sampling scheme.

Detailed bias implications later.

---

# Part D — Nested case-control

## 12. Nested case-control study

### Established finding
**Confidence: HIGH**

A nested case-control study samples cases and controls **within a previously defined cohort**.

Typical structure:
1. parent cohort established;
2. cases arise during follow-up;
3. controls are sampled from eligible cohort members, commonly from the risk set at case time;
4. expensive/detailed exposure measurement may be performed only on sampled cases/controls.

### Taxonomy decision

Nested case-control is:
> **case-control sampling nested inside a cohort infrastructure**

not a wholly separate top-level observational family.

### Important consequence

It can preserve:
- clearer source population;
- temporal ordering;
- prospectively stored baseline/exposure information,

while reducing measurement cost.

---

# Part E — Case-cohort

## 13. Case-cohort design

### Established methodological principle
**Confidence: HIGH**

A case-cohort design begins with a defined cohort and samples a **subcohort** independently of future outcome status, then includes cases arising from the full cohort.

### Difference from nested case-control

Nested case-control:
- controls commonly sampled from a risk set at each case time.

Case-cohort:
- subcohort sampled from the cohort, commonly at baseline;
- the same subcohort can support analyses for multiple outcomes.

### Project taxonomy

Case-cohort =
> cohort infrastructure + efficient subcohort sampling for comparison.

It is best stored as a **sampling variant nested within cohort-based observational research**, not as a completely unrelated top-level design.

Detailed weighting/analysis is deferred.

---

# Part F — Analytical cross-sectional studies

## 14. Core analytical cross-sectional structure

### Established finding
**Confidence: HIGH**

Current JBI explicitly distinguishes analytical cross-sectional studies as cross-sectional studies examining associations between exposures and outcomes.

Typical structure:
1. sample from a defined population;
2. exposure/predictor and outcome status measured for the same cross-sectional observation window;
3. compare prevalence/levels across exposure groups or estimate association.

### Project canonical structure

`Population snapshot/window → exposure + outcome measured/ascertained → association`.

---

## 15. Analytical vs descriptive cross-sectional

### Important distinction
**Confidence: HIGH**

### Descriptive cross-sectional
Primary purpose:
- describe prevalence/distribution.

### Analytical cross-sectional
Primary purpose:
- evaluate association between exposure/predictor and outcome.

JBI maintains:
- a dedicated **analytical cross-sectional** RoB tool;
- a separate **prevalence** tool.

Project consequence:
do not treat all cross-sectional studies as the same scientific design role.

Detailed prevalence structures remain for next pass.

---

## 16. Temporal ambiguity

### Established finding
**Confidence: HIGH**

When exposure and outcome are measured in the same cross-sectional window, it may be unclear whether:
- exposure preceded outcome;
- outcome influenced exposure;
- both reflect another process.

Thus analytical cross-sectional studies can support:
- association;
- prevalence differences;
- hypothesis generation;

but usually not strong temporal causal claims.

This limitation is structural, not something statistical adjustment can fully repair.

---

## 17. Cross-sectional does not always mean literally one clock instant

### Project clarification
**Confidence: HIGH**

A cross-sectional study may collect data over a recruitment window.

The defining issue is that each participant/unit contributes a snapshot-like assessment without longitudinal follow-up sufficient to establish outcome incidence/sequence.

Do not classify a study as longitudinal merely because data collection took several months across participants.

---

# Part G — Ecological / aggregate-level studies

## 18. Ecological study

### Established finding
**Confidence: HIGH**

Current CDC guidance describes ecological studies as comparing **aggregated exposure data with aggregated outcome data**.

The unit of analysis/inference is:
- geographic area;
- school;
- team;
- country;
- organization;
- other population/group aggregate,

rather than the individual person.

### Project canonical structure

`Aggregate unit exposure/state ↔ aggregate unit outcome`.

---

## 19. Ecological != cross-sectional

### Important correction
**Confidence: HIGH**

Ecological describes **level/unit of analysis**, not necessarily time structure.

An ecological study can be:
1. cross-sectional across regions;
2. longitudinal across time;
3. repeated panel of regions;
4. time-series at population level.

Therefore:
> ecological and cross-sectional are orthogonal axes.

---

## 20. Ecological fallacy / cross-level inference problem

### Established finding
**Confidence: HIGH**

An association observed between aggregate units does not establish that the same relationship exists among individuals within those units.

Example:
regions with higher gym density and lower obesity prevalence do not prove that individuals who have more gym access necessarily have lower obesity risk.

Project rule:
never translate group-level association directly into an individual-level causal claim without appropriate individual-level evidence/design.

---

## 21. Ecological studies can be correct for ecological questions

### Important nuance
**Confidence: HIGH**

Ecological design is not automatically “bad”.

It is appropriate when the target question itself concerns:
- population-level policy;
- regional environment;
- organizational exposure;
- system-level outcome.

The error occurs when the target level of inference is silently changed from group to individual.

---

# Part H — Multilevel/hierarchical observational data

## 22. Multilevel study is not one atomic design

### Project taxonomy
**Confidence: HIGH**

A study may contain:
- individuals nested in gyms;
- athletes nested in teams;
- repeated observations nested in participants;
- participants nested in regions.

“Multilevel” describes data/dependency structure and possibly analysis.

The underlying observational design can still be:
- cohort;
- cross-sectional;
- repeated measures;
- other.

Record:
1. base design;
2. levels/units;
3. exposure level;
4. outcome level;
5. target level of inference.

---

# Part I — Data source is not study design

## 23. Registry study

### Project rule
**Confidence: HIGH**

“Registry-based” describes a **data source**.

Registry data can support:
- cohort;
- case-control;
- cross-sectional;
- nested case-control;
- case-cohort;
- other designs.

Do not classify:
> design = registry study

without specifying actual sampling/time/comparison structure.

---

## 24. Electronic health record / administrative database study

Same rule.

“Database study”, “EHR study”, “claims study” identify:
- source/provenance of data,

not design family.

Extract separately:
1. underlying design;
2. data source;
3. temporal coverage;
4. exposure/outcome ascertainment.

---

## 25. Longitudinal study

“Longitudinal” is also insufficient as a complete design label.

It only says that observations span time.

A longitudinal study can be:
- cohort;
- repeated-measures observational;
- trial;
- ITS;
- ecological panel.

Project rule:
> longitudinal = temporal feature, not full design classification.

---

# Part J — STROBE boundary

## 26. STROBE is reporting guidance

### Established finding
**Confidence: HIGH**

The official STROBE site explicitly states:
- cohort;
- case-control;
- cross-sectional are its three main analytical observational designs;
- STROBE recommendations concern **reporting**;
- they are not prescriptions for study design/conduct;
- the checklist is not a study-quality instrument.

Project consequence:
use STROBE terminology for reporting orientation only.

Do not use:
> STROBE-compliant therefore low risk of bias.

---

# Part K — Observational analytic structural record

Project-specific extraction/classification fields:

1. Observational analytic? YES/NO
2. Underlying family:
   - cohort
   - case-control
   - analytical cross-sectional
   - ecological/aggregate
   - other
3. Source population
4. Sampling frame
5. Sampling starts from:
   - exposure/baseline state
   - outcome/case status
   - population snapshot
   - aggregate units
6. Exposure/predictor definition
7. Outcome definition
8. Exposure ascertainment timing
9. Outcome ascertainment timing
10. Prospective/retrospective features
11. Follow-up present? YES/NO
12. Closed/open/dynamic cohort if applicable
13. Incident/prevalent cases if applicable
14. Control sampling method if applicable
15. Nested case-control? YES/NO
16. Case-cohort? YES/NO
17. Individual vs aggregate unit of exposure
18. Individual vs aggregate unit of outcome
19. Same level of inference? YES/NO
20. Repeated observations?
21. Data source:
   - purpose-built
   - registry
   - EHR
   - claims/administrative
   - survey
   - other
22. Target scientific question
23. Target level of inference
24. Self-applied paper label
25. Project structural classification

---

# Part L — What these designs can and cannot directly answer

## 27. Cohort

Strong structural fit for:
- incidence;
- prognosis;
- temporal exposure-outcome association;
- longitudinal natural history.

Can estimate causal effects only under additional assumptions/control.

---

## 28. Case-control

Strong structural fit for:
- rare outcomes;
- long-latency outcomes;
- efficient etiologic/safety association study.

Does not directly recreate the full source-population denominator from the sampled case-control dataset alone.

---

## 29. Analytical cross-sectional

Strong structural fit for:
- prevalence-associated factors;
- simultaneous exposure-outcome associations;
- hypothesis generation.

Weak for temporal direction when exposure/outcome are contemporaneous.

---

## 30. Ecological

Strong fit for:
- population/system-level exposure questions;
- aggregate policy/environment associations.

Cannot justify individual-level inference merely from aggregate associations.

---

# Part M — Practical rules produced by PASS-04

1. Cohort, case-control and analytical cross-sectional are the main individual-level analytical observational families.
2. Observational design must be classified from source population, sampling direction, time and comparison structure.
3. Cohort sampling generally begins from exposure/baseline state and follows outcomes.
4. Prospective/retrospective are cohort features, not separate top-level designs.
5. Ambispective/bidirectional is a mixed timing feature.
6. Closed/open/dynamic cohort is a membership/denominator feature.
7. Inception cohort is a cohort refinement.
8. Case-control sampling begins from outcome/case status.
9. Control selection must be anchored to the case source population.
10. Incident/prevalent case status should be recorded.
11. Nested case-control = case-control sampling within a cohort.
12. Case-cohort = cohort infrastructure + outcome-independent subcohort sampling.
13. Nested case-control and case-cohort are efficient sampling variants, not unrelated top-level universes.
14. Analytical cross-sectional must be distinguished from descriptive/prevalence cross-sectional.
15. Cross-sectional association usually has temporal ambiguity.
16. Ecological describes aggregate unit/level, not temporal structure.
17. Ecological study can be cross-sectional or longitudinal.
18. Aggregate association must not be silently translated to individual inference.
19. Multilevel describes hierarchical structure, not one atomic design.
20. Registry/EHR/database identify data source, not design.
21. Longitudinal identifies temporal structure, not a complete design.
22. STROBE is a reporting guideline, not a quality appraisal tool.
23. Final classification remains multi-axis and feature-based.

---

# Gap identified during this pass

Two observational structures were intentionally not folded into this pass and remain potential taxonomy gaps:

1. **case-crossover**;
2. **self-controlled case series**.

They are especially relevant for transient exposures / acute events / safety questions and are structurally distinct from ordinary cohort/case-control.

They require a separate small pass before the final observational taxonomy can be considered complete.

---

# Unresolved for RES-02

1. Case-crossover and self-controlled observational structures.
2. Descriptive/frequency structures:
   - prevalence studies;
   - case series;
   - case reports.
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

**RES-02 / PASS-05A — self-controlled observational designs: case-crossover and self-controlled case series.**
