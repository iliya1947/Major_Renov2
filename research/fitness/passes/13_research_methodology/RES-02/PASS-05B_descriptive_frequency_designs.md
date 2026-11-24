# RES-02 / PASS-05B — Descriptive and frequency study structures

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-02 — Study designs / what they answer

## Scope этого прохода

Только descriptive/frequency structures:

1. prevalence studies;
2. descriptive cross-sectional studies;
3. repeated cross-sectional surveys;
4. case reports;
5. case series;
6. distinction: case series vs descriptive cohort;
7. surveillance as function/system rather than one atomic study design;
8. sampling representativeness as structural requirement for population-frequency inference.

Не покрывается здесь:
- analytical cross-sectional association studies — PASS-04;
- cumulative incidence methodology in detail;
- statistical weighting/variance estimation;
- diagnostic/measurement/prognosis/qualitative/mixed-methods families;
- pharmacovigilance systems in depth;
- final design-selection matrix.

---

## Источники, проверенные в этом pass

1. **JBI Critical Appraisal Tools — current official page**  
   Checked 2026-11-16.  
   JBI currently maintains distinct tools for:
   - prevalence studies;
   - analytical cross-sectional studies;
   - case series;
   - case reports.  
   This supports treating these as different methodological structures/purposes rather than collapsing them into one “cross-sectional/descriptive” category.  
   https://jbi.global/critical-appraisal-tools

2. **JBI Manual — External Methodological Guidance**  
   Current online page checked 2026-11-16.  
   JBI currently endorses **PERSyst** methodology for systematic reviews of prevalence and cumulative incidence.  
   https://jbi-global-wiki.refined.site/space/MANUAL/355598392

3. **JBI 2026 analytical cross-sectional update**  
   Current official JBI page checked 2026-11-16.  
   Explicitly distinguishes analytical cross-sectional studies as studies examining associations between exposures and outcomes.  
   This creates a clean boundary with descriptive prevalence studies.  
   https://jbi.global/news/rethinking-risk-bias-cross-sectional-studies

4. **JBI — Methodological quality of case series studies**  
   Current JBI appraisal page cites the 2020 JBI Evidence Synthesis methods paper.  
   The JBI approach distinguishes true case series from cohort-like studies and emphasizes clear inclusion criteria and complete/consecutive inclusion where appropriate.  
   https://jbi.global/critical-appraisal-tools

5. **Dekkers et al. 2012 — Distinguishing case series from cohort studies**  
   Ann Intern Med. PMID 22213493.  
   Foundational structural distinction:
   - cohort sampling is based on exposure/characteristic and permits outcome risk/rate estimation;
   - case series samples on outcome/disease and generally does not provide the denominator needed for absolute risk.  
   https://pubmed.ncbi.nlm.nih.gov/22213493/

6. **Munn et al. 2020 — JBI case series methodology paper**  
   JBI Evid Synth. PMID 33038125.  
   Confirms case series may sometimes be the best available evidence, especially in sparse/rare situations, but need separate appraisal because uncontrolled designs are vulnerable to selection/confounding/information bias.  
   https://pubmed.ncbi.nlm.nih.gov/33038125/

7. **JBI current news on case reports/case series appraisal**  
   Checked 2026-11-16.  
   JBI characterizes case reports/series as uncontrolled observations usually yielding low-certainty evidence but potentially important for novel treatments, rare side effects or early signals.  
   https://jbi.global/news/evaluating-murad-tool

8. **CDC Emerging Infectious Diseases — repeated cross-sectional seroepidemiologic designs**  
   Current accessible CDC article checked 2026-11-16.  
   Cross-sectional studies estimate prevalence at one time point; repeated cross-sectional designs repeat sampling at multiple time points, not necessarily in the same individuals.  
   https://wwwnc.cdc.gov/eid/article/26/9/20-1840_article

9. **CDC NHIS / NHANES methodology pages**  
   Current pages checked 2026-11-16.  
   Population prevalence inference depends on probability/complex sampling and appropriate survey weights/design variables.  
   https://www.cdc.gov/niosh/surveillance/nhis/index.html  
   https://wwwn.cdc.gov/nchs/nhanes/tutorials/sampledesign.aspx

## Source-status note

- Current JBI online guidance is preferred over older downloadable JBI prevalence chapters.
- JBI now delegates prevalence/cumulative-incidence review methodology to PERSyst; however, its current appraisal catalogue still contains a dedicated prevalence-study tool.
- Dekkers 2012 is older but remains directly relevant because current JBI case-series methodology explicitly relies on the same structural distinction.
- No web PDF was used as substantive evidence in this pass.

---

# Part A — Frequency question is not identical to one study design

## 1. Prevalence is an estimand/question type

### Established finding
**Confidence: HIGH**

A prevalence question asks:

> What proportion of a defined population has a defined condition/state at a defined time or over a defined period?

This is a **frequency estimand**, not automatically a unique data-collection architecture.

Prevalence can be estimated using:
- a purpose-built cross-sectional survey;
- the baseline of a cohort;
- repeated cross-sectional surveys;
- registry/administrative datasets;
- surveillance systems,
provided the denominator and sampling/ascertainment support the target population inference.

### Project rule

Record separately:

1. **frequency estimand**;
2. **underlying sampling/data design**.

Do not write:
> design = prevalence

without describing how the population/sample was obtained.

---

# Part B — Descriptive cross-sectional prevalence study

## 2. Core structure

### Established finding
**Confidence: HIGH**

Canonical descriptive cross-sectional prevalence structure:

1. define target population;
2. define sampling frame;
3. select sample at/for a defined time window;
4. ascertain condition/state;
5. estimate proportion/prevalence relative to the sampled/weighted denominator.

Canonical form:

`Target population → cross-sectional sample → condition ascertainment → prevalence estimate`.

### Difference from analytical cross-sectional

**Descriptive cross-sectional**
asks:
> how common is X?

**Analytical cross-sectional**
asks:
> is X associated with Y in this snapshot/window?

Current JBI keeps separate appraisal categories, supporting this distinction.

---

## 3. Point vs period prevalence

### Structural distinction
**Confidence: HIGH**

### Point prevalence
Condition/state at a specific reference point or very narrow reference window.

### Period prevalence
Condition/state occurring at any time during a specified period.

Project rule:
the reference time is part of the estimand and must not be omitted.

A “cross-sectional survey conducted for six months” does not automatically mean six-month period prevalence; the survey duration and the participant-level prevalence reference period are separate concepts.

---

# Part C — Sampling representativeness

## 4. Population prevalence needs a defensible denominator

### Established finding
**Confidence: HIGH**

A sample can describe itself without being able to estimate population prevalence validly.

For population-level frequency inference, important structural elements include:

1. defined target population;
2. sampling frame covering that population;
3. probability/representative sampling where intended;
4. known/inferable selection probabilities;
5. nonresponse handling;
6. weighting/design handling for complex surveys;
7. consistent case definition.

CDC NHANES explicitly uses a complex multistage probability sample and warns that failing to use design variables/weights can bias estimates and precision.

### Project rule

Convenience sample prevalence should be labelled:

> prevalence in the sampled group

unless a defensible population-inference route exists.

Do not silently generalize:
> 30% of gym-app users reported X  
to  
> 30% of adults have X.

---

# Part D — Cluster/complex survey sampling

## 5. Survey sampling scheme is not the same as cluster-randomized intervention trial

### Critical distinction
**Confidence: HIGH**

A prevalence survey may sample:

- geographic clusters;
- households;
- schools;
- other primary sampling units

for efficiency/representativeness.

This is **cluster sampling**, not **cluster randomization**.

Project rule:
record separately:

1. sampling clusters;
2. intervention-allocation clusters.

They are different design dimensions.

---

# Part E — Repeated cross-sectional studies

## 6. Core structure

### Established finding
**Confidence: HIGH**

Repeated cross-sectional design:

1. defines the same or comparable target population repeatedly;
2. draws a new sample at each time point/wave;
3. estimates prevalence/distribution at each wave;
4. compares population-level trends.

The same individuals do **not** need to be followed.

Canonical form:

`Population at T1 → sample A`  
`Population at T2 → sample B`  
`Population at T3 → sample C`

---

## 7. What repeated cross-sectional can answer

Strong fit for:

1. prevalence trend;
2. population distribution trend;
3. repeated surveillance estimates;
4. changing group-level behaviors/exposures.

It does not directly provide:

1. within-person change;
2. individual transition probabilities;
3. individual incidence
unless an additional linked longitudinal structure exists.

### Project rule

Repeated cross-sectional != longitudinal cohort.

Both have multiple calendar time points, but only cohort structure follows the same people/units longitudinally.

---

## 8. Serial cross-sectional trend can still be confounded by composition

Even with the same sampling protocol, observed change can reflect:

- real population change;
- changing population composition;
- sampling-frame change;
- nonresponse change;
- measurement/case-definition change.

Detailed trend-adjustment belongs later statistical/bias topics.

Structural requirement:
record whether survey waves are **methodologically comparable**.

---

# Part F — Surveillance

## 9. Surveillance is a function/system, not one atomic design

### Project conclusion
**Confidence: HIGH**

“Surveillance” describes ongoing systematic monitoring.

A surveillance system can use:

1. repeated cross-sectional surveys;
2. registries;
3. routine administrative data;
4. sentinel sites;
5. cohort follow-up;
6. event reporting;
7. combinations.

Therefore:

> surveillance = purpose/data-system architecture

not:
> one fundamental epidemiologic study design.

### Project rule

When a paper says “surveillance study”, classify:

1. surveillance purpose/system;
2. actual underlying sampling/time structure.

---

# Part G — Case report

## 10. Core case-report structure

### Established finding
**Confidence: HIGH**

Case report = detailed description of **one case/person/event**.

Typical content:
- history/timeline;
- condition;
- diagnostic/assessment information;
- intervention/exposure;
- outcome;
- adverse/unexpected observations.

### What it can contribute

1. novel phenomenon;
2. unusual presentation;
3. rare/unexpected adverse event;
4. early signal;
5. hypothesis generation;
6. detailed clinical/mechanistic narrative.

### What it cannot establish by itself

1. incidence/prevalence;
2. comparative risk;
3. treatment effect magnitude;
4. general population frequency;
5. causal attribution with high confidence.

---

# Part H — Case series

## 11. Core case-series structure

### Established finding
**Confidence: HIGH**

JBI/Dekkers framing:

A true case series samples people with a defined disease/outcome/condition and describes them **without a valid comparison denominator** for ordinary risk estimation.

Canonical structure:

`Defined outcome/condition → series of cases → description of characteristics/exposures/outcomes`.

### Key distinction

A case series is not merely:
> “a study with several participants and no control group”.

A study can have no control group yet still be a **descriptive cohort** if participants were assembled based on exposure/treatment/baseline characteristic and followed for outcomes.

---

## 12. Case series vs descriptive cohort

### Established finding
**Confidence: HIGH**

Dekkers et al.:

### Cohort
Sampling based on:
- exposure;
- treatment;
- baseline characteristic.

Then outcome occurrence is assessed.

This can support:
- absolute risk;
- outcome proportion/rate,
if denominator/follow-up are valid.

### Case series
Sampling based on:
- disease/outcome/case status
or selection of cases with both outcome and exposure.

It does not provide the full source-population denominator needed for absolute risk.

### Project decision rule

Ask:

> Were participants selected because they had the exposure/intervention, or because they had the outcome/case condition?

If exposure/baseline → likely cohort structure.  
If outcome/case condition → likely case series/case-control structure depending comparator sampling.

This is more reliable than the paper’s label.

---

# Part I — Consecutive/complete case series

## 13. Sampling completeness matters

### Established finding
**Confidence: HIGH**

JBI case-series methodology emphasizes whether participants were included:

- consecutively;
- completely;
- using clear eligibility criteria.

A series like:
> all qualifying cases presenting during a defined period

is structurally stronger descriptively than:
> selected interesting cases.

But even a complete consecutive case series still lacks the denominator/comparator required for many causal/frequency claims.

### Project rule

Consecutive/complete improves **representativeness of the case series**, not its transformation into a controlled study.

---

# Part J — Case series as safety signal

## 14. Rare harms

### Current JBI framing
**Confidence: HIGH**

Current JBI material notes that case reports/series, despite usually low certainty, can be important for:

- rare side effects;
- unusual harms;
- novel clinical signals.

### Project rule

For safety:

case report/series can support:
> signal exists / plausible event has been observed

but usually cannot support:
> event rate is X  
or  
> intervention increases risk by Y-fold

without denominator/comparator evidence.

---

# Part K — Case series vs self-controlled case-only designs

## 15. Critical terminology distinction

From PASS-05A:

### Case series
- cases are described;
- no valid within-person risk/control-period comparison is built into the design.

### Case-crossover / SCCS
- cases only;
- but each case contributes **internal comparison time**.

Thus:
> cases-only  
does not imply  
> case series.

Project taxonomy must preserve this distinction.

---

# Part L — Frequency estimates from cohorts

## 16. Cohort can estimate frequency without being a “prevalence study”

A cohort baseline may yield prevalence if:

- target population/sample supports inference;
- condition ascertainment is appropriate at baseline.

Longitudinal follow-up may yield:

- cumulative incidence;
- incidence rate.

Therefore:
- prevalence/cumulative incidence = target estimands;
- cohort/cross-sectional = underlying structures.

This prevents double-counting “prevalence study” as a mutually exclusive family against cohort/cross-sectional.

---

# Part M — Prevalence study record

Project-specific fields:

1. Frequency estimand:
   - point prevalence
   - period prevalence
   - other
2. Target population
3. Sampling frame
4. Sample-selection mechanism
5. Probability sample? YES/NO
6. Cluster/stratified/multistage sampling?
7. Cross-sectional / cohort-baseline / registry / other
8. Reference date/period
9. Case/condition definition
10. Measurement/ascertainment method
11. Numerator
12. Denominator
13. Sampling weights required?
14. Nonresponse handling
15. Complex survey design accounted for?
16. Population inference intended?
17. Repeated cross-sectional wave?
18. Wave comparability
19. Self-applied label
20. Project structural classification

---

# Part N — Case report / case series record

1. Single case or multiple cases?
2. Case/outcome definition
3. Selection basis
4. Consecutive inclusion?
5. Complete inclusion over defined period?
6. Source setting
7. Exposure/intervention described?
8. Outcome described?
9. Timeline available?
10. Comparator group?
11. Internal self-controlled comparison?
12. Source-population denominator available?
13. Absolute risk estimable?
14. Purpose:
   - signal
   - description
   - hypothesis generation
   - feasibility
   - other
15. Self-applied label
16. Project structural classification

---

# Part O — Practical rules produced by PASS-05B

1. Prevalence is a frequency estimand/question, not one indivisible data-collection design.
2. Descriptive cross-sectional study is the canonical purpose-built prevalence structure.
3. Analytical cross-sectional and descriptive/prevalence cross-sectional must remain separate.
4. Point and period prevalence require explicit participant-level reference time.
5. Survey fieldwork duration is not the same thing as prevalence reference period.
6. Population prevalence requires a defensible population denominator/sampling route.
7. Convenience-sample prevalence should not be generalized silently.
8. Complex probability sampling and weighting are part of population-frequency validity.
9. Cluster sampling != cluster randomization.
10. Repeated cross-sectional uses new samples from the target population over successive waves.
11. Repeated cross-sectional can estimate population trends but not individual change/incidence by itself.
12. Repeated cross-sectional != longitudinal cohort.
13. Surveillance is a monitoring purpose/system, not one atomic study design.
14. Case report describes one case and is primarily signal/descriptive evidence.
15. True case series samples cases/outcomes and lacks a full denominator for ordinary absolute-risk estimation.
16. “No control group” alone does not define case series.
17. Descriptive cohort may have no comparator yet still be a cohort if sampling begins from exposure/treatment/baseline state.
18. Case-series vs cohort distinction should be made from sampling direction, not paper label.
19. Consecutive/complete case inclusion strengthens descriptive reliability but does not create a comparator.
20. Case reports/series can be important for rare-harm signals but do not establish event frequency or comparative risk alone.
21. Case-only analytical designs (CCO/SCCS) are not case series because they contain internal time-based comparisons.
22. Frequency estimand and underlying study structure must be recorded separately.

---

# Gap status after PASS-05B

The descriptive/frequency gap identified after PASS-05A is **closed at taxonomy level** for:

- prevalence studies;
- descriptive cross-sectional;
- repeated cross-sectional;
- case reports;
- case series;
- surveillance placement.

No additional dedicated descriptive-design pass is currently required.

---

# Unresolved for RES-02

1. Question-specific study families:
   - diagnostic accuracy;
   - measurement-property studies;
   - prognosis/prediction;
   - mechanistic studies;
   - qualitative;
   - mixed methods.

2. Purpose-vs-design crosswalk across all families.

3. Final design-selection matrix.

4. Gap audit.

5. New synthesis.

## Next pass

**RES-02 / PASS-06A — diagnostic accuracy and measurement-property study structures.**
