# RES-02 / PASS-06B4 — Outcome-dependent sampling in prognosis

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. why prognosis studies use outcome-dependent/nested sampling;
2. case-cohort design;
3. nested case-control (NCC) / risk-set sampling;
4. nested class-balanced sampling;
5. known source cohort / known outcome distribution;
6. sampling fractions / inclusion probabilities;
7. inverse-probability / reweighting logic;
8. what relative-effect targets may survive sampling more naturally;
9. why absolute risk / cumulative incidence / baseline risk / baseline hazard require recovery of the source distribution;
10. why calibration and several performance metrics need sampling-aware evaluation;
11. matching/stratification implications;
12. non-nested case-control / non-nested class balancing as a boundary case;
13. missing-by-design;
14. structural record for these designs.

Не покрывается здесь:

- full technical derivation of weighted Cox / conditional logistic likelihoods;
- exact formulas for every sampling scheme;
- detailed variance estimators;
- rare-disease approximations;
- full prediction-model development;
- internal/external validation architecture;
- detailed calibration/discrimination statistics;
- detailed competing-risk methods;
- detailed multiple imputation;
- causal case-control inference;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 2

Moons KGM, Riley RD, Damen JAA.  
**Chapter 2: Study designs and data sources in prognosis research.**  
Draft version: **March 2026**.

Current official Cochrane material checked 2026-11-17.

Key points used:

- nested sampling from an existing cohort is valid for prognosis research;
- relevant examples: case-cohort, nested case-control, nested class-balanced designs;
- source cohort/dataset must be of known size/outcome distribution if absolute probabilities are to be recovered;
- sampled cases/non-cases must be reweighted/corrected by sampling fractions;
- without recovery of the source outcome distribution, baseline risk/baseline hazard and absolute probabilities are not validly estimated;
- non-nested case-control/class-balanced designs can support prognostic-factor relative effects in some settings, but are not suitable for overall prognosis or full prognostic prediction where absolute probabilities matter.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-2-study-designs-and-data-sources-prognosis-research

### Source-status note

This chapter is explicitly a **draft March 2026** and must be version-checked again during final audit/closure.

---

## 2. Rentroia-Pacheco et al., 2024

**Weighted metrics are required when evaluating the performance of prediction models in nested case-control studies.**  
BMC Medical Research Methodology. 2024;24:115.

Key points used:

- NCC is efficient when predictors are expensive/difficult to obtain;
- unweighted prediction-performance metrics in NCC data can be biased;
- sampling-aware weighting recovered performance close to the full cohort for:
  - C-index;
  - observed/expected ratio;
  - threshold-based metrics;
  - decision-curve net benefit;
- matched NCC requires sampling-aware correction as well.

https://pubmed.ncbi.nlm.nih.gov/38760688/

---

## 3. Keogh & Cox / published review of case-cohort analyses

**A Review of Published Analyses of Case-Cohort Studies and Recommendations for Future Reporting.**

Key points used:

- case-cohort = random subcohort sampled from the parent cohort irrespective of future disease status + incident cases;
- subcohort can include people who later become cases;
- same subcohort can often be reused across different outcomes;
- analysis must account for oversampling of cases;
- subcohort sampling fraction should be explicitly reported.

https://pmc.ncbi.nlm.nih.gov/articles/PMC4074158/

---

## 4. Rentroia-Pacheco et al. / NCC methodological literature

Current methodological literature checked for risk-set sampling:

- at each event time, controls are sampled from individuals still at risk;
- a selected control can later become a case;
- in standard NCC sampling, one person can sometimes be selected as control more than once;
- matching on age/sex/time or other variables changes inclusion probabilities and must be reflected in analysis.

https://pmc.ncbi.nlm.nih.gov/articles/PMC10863373/
https://academic.oup.com/ije/article/47/3/841/4829683
https://pmc.ncbi.nlm.nih.gov/articles/PMC11502564/

---

## 5. Case-cohort prediction-model methods

Methodological work on risk prediction from case-cohort data confirms:

- weighted/pseudo-likelihood methods are required;
- oversampling of cases must be handled;
- absolute risk estimation requires reconstruction of the source cohort risk structure.

https://pmc.ncbi.nlm.nih.gov/articles/PMC3848813/
https://pmc.ncbi.nlm.nih.gov/articles/PMC9172927/

---

# Part A — Why outcome-dependent sampling exists

## 1. Full-cohort predictor measurement can be unnecessarily expensive

### Established finding
**Confidence: HIGH**

In large cohorts, the outcome/follow-up status may be known for everyone while one or more predictors are expensive to measure, for example:

- stored biomarkers;
- genomics;
- imaging;
- specialized assays;
- manual chart abstraction;
- expensive expert scoring.

Instead of measuring the expensive predictor in the whole cohort, investigators can sample a smaller second-phase dataset enriched for outcome events.

Canonical two-phase structure:

`full source cohort with outcome/follow-up known → select phase-2 sample based partly on outcome/risk-set status → measure expensive predictors only in sampled participants`

This is a sampling strategy nested inside an existing longitudinal cohort.

---

## 2. Efficiency is purchased by changing the sample outcome distribution

### Established finding
**Confidence: HIGH**

Cases/events are usually over-represented relative to the full source cohort.

Therefore the phase-2 sample no longer has the natural event frequency of the target/source population.

Project consequence:

> the raw sampled event proportion is generally not the population risk.

This is the central reason sampling-aware analysis is required.

---

# Part B — Case-cohort design

## 3. Canonical case-cohort structure

### Established finding
**Confidence: HIGH**

Basic case-cohort design:

1. start with a defined cohort;
2. randomly sample a **subcohort** from the full cohort, irrespective of future outcome status;
3. include all incident cases, or a known sampled fraction of cases;
4. measure expensive predictors in:
   - the subcohort;
   - and additional cases outside the subcohort.

Canonical structure:

`full cohort → random subcohort sampled independent of future outcome + incident cases → phase-2 analysis set`

---

## 4. Some subcohort members can later become cases

### Established finding
**Confidence: HIGH**

Because subcohort selection is performed without regard to future outcome, the subcohort naturally contains:

- non-cases;
- and some individuals who later become cases.

This is not an error.

It is a defining consequence of sampling a cohort subset independently of future outcome.

---

## 5. The same subcohort can support multiple outcomes

### Established finding
**Confidence: HIGH**

A major case-cohort advantage is that the same random subcohort can often serve as the comparison/reference sample for multiple future outcomes.

This differs from classic nested case-control, where a new risk-set control sample is typically defined around each outcome/event process.

### Project implication

Case-cohort can be especially efficient when:

- expensive baseline measurements can be reused;
- investigators anticipate multiple outcome questions.

---

# Part C — Nested case-control (NCC)

## 6. NCC uses risk-set sampling

### Established finding
**Confidence: HIGH**

In a standard NCC design:

1. the parent cohort is followed over time;
2. when a case/event occurs at time `t`;
3. one or more controls are sampled from individuals who are still at risk at that same time.

Canonical structure:

`case occurs at t → construct risk set at t → sample controls from that risk set`

This is also called:

- risk-set sampling;
- incidence-density sampling.

---

## 7. A control can later become a case

### Established finding
**Confidence: HIGH**

Someone who is event-free and at risk at one case time is a valid control then, even if that person experiences the outcome later.

Therefore:

> future case status does not disqualify someone from being a control earlier.

This preserves the dynamic risk-set logic of the parent cohort.

---

## 8. A person may be sampled more than once in standard NCC

### Established finding
**Confidence: HIGH**

Because the same person may remain at risk across multiple event times, standard NCC can sample that person:

- as control for multiple cases;
- and later as a case.

Modified no-replacement NCC designs exist, but they are distinct sampling schemes.

### Project rule

Do not assume:

> one participant = one row / one sampling opportunity.

Extract the actual control-sampling rule.

---

# Part D — Case-cohort vs NCC

## 9. They are not interchangeable

### Established finding
**Confidence: HIGH**

### Case-cohort
Comparison sample is selected as a random subcohort, usually at the cohort level and independent of future outcome.

### NCC
Controls are sampled repeatedly from contemporaneous risk sets at event times.

### Consequence

They differ in:

- sampling probabilities;
- risk-set representation;
- data structure;
- weighting;
- reusable comparison groups;
- analysis requirements.

Project taxonomy must never collapse both into:

> nested case-control-like study.

---

# Part E — Class-balanced sampling

## 10. Class balancing deliberately changes event prevalence

### Established finding
**Confidence: HIGH**

In machine-learning workflows, investigators often:

- retain/oversample many cases;
- undersample the much larger non-case class;

to create a more balanced training/evaluation dataset.

If this is sampled from a **known parent cohort/database**, it is structurally another outcome-dependent two-phase sample.

Cochrane explicitly recognizes:

> nested class-balanced designs.

---

## 11. Class balancing can help computation but corrupt raw probabilities

### Established finding
**Confidence: HIGH**

A classifier trained/evaluated on an artificial 50:50 sample does not observe the natural source-population event probability if the true risk is, for example, 1%.

Without correction:

- raw predicted probabilities can be mis-scaled;
- intercept/baseline risk can be wrong;
- calibration can be wrong;
- threshold-based clinical quantities can be wrong.

### Project rule

Do not interpret:

> predicted probability from an uncorrected balanced sample

as population absolute risk.

---

# Part F — Known source cohort is the decisive boundary

## 12. "Nested" means the source outcome distribution is recoverable

### Established finding
**Confidence: HIGH**

Cochrane's critical distinction is not merely semantic nesting.

For absolute prognosis, investigators need enough information about the source cohort/dataset to know:

1. how many participants/events existed;
2. how cases were sampled;
3. how non-cases/controls were sampled;
4. relevant strata/matching rules;
5. resulting inclusion probabilities or sampling fractions.

This lets the phase-2 sample be mapped back to the target/source cohort.

---

## 13. Known outcome distribution enables reconstruction

### Established finding
**Confidence: HIGH**

If the parent cohort contained:

- `N_case` cases;
- `N_noncase` non-cases;

and the phase-2 sample contains known fractions of each, appropriate weighting can reconstruct the original event distribution.

Conceptually:

`sampled participant weight ≈ 1 / probability of being sampled`

Exact estimators depend on design and analysis.

The project stores the design principle here; formulas belong later.

---

# Part G — Why absolute risk requires reweighting/correction

## 14. Absolute risk depends on the event frequency in the target population

### Established finding
**Confidence: HIGH**

Overall prognosis and individual absolute prediction require quantities such as:

- cumulative incidence;
- baseline risk;
- baseline hazard;
- absolute event probability.

Outcome-dependent sampling deliberately distorts event frequency.

Therefore these targets are not recoverable from the raw phase-2 proportion unless the sampling process is corrected.

---

## 15. Correct weighting restores the source outcome distribution

### Established finding
**Confidence: HIGH**

Cochrane states that sampled cases/non-cases should be corrected using inverse sampling fractions so the weighted data reflect the original cohort.

For prediction modelling this supports estimation of:

- intercept / baseline risk;
- baseline hazard;
- individual absolute probabilities;
- calibration-related quantities.

### Important qualifier

The exact method differs among:

- case-cohort;
- NCC;
- matched NCC;
- stratified sampling;
- class-balanced sampling;
- binary vs time-to-event settings.

Thus:

> "apply weights"

is a structural requirement, not a complete statistical recipe.

---

# Part H — Relative prognostic effects vs absolute prognosis

## 16. Relative effects can be more robust to outcome sampling than absolute risks

### Established finding
**Confidence: HIGH**

Cochrane permits non-nested case-control designs for some prognostic-factor questions because relative associations, especially odds ratios under appropriate design/analysis, can remain estimable even when the source event proportion is not available.

By contrast, overall prognosis and prognostic prediction generally need absolute outcome frequencies/probabilities.

### Project distinction

Ask what the scientific target is:

1. relative association of factor with outcome?
2. absolute outcome incidence?
3. individualized absolute risk?
4. model calibration/performance?

The answer determines whether outcome sampling is tolerable and what correction is necessary.

---

## 17. Relative association is not equivalent to a usable risk prediction model

### Established finding
**Confidence: HIGH**

A model can estimate relative ranking/association while having an incorrect absolute probability scale.

Therefore:

> valid slope/relative-effect information does not automatically mean valid risk prediction.

This is especially important when literature calls any logistic model a "prediction model".

---

# Part I — Prediction-model performance under NCC sampling

## 18. Unweighted evaluation can bias more than calibration

### Established finding
**Confidence: HIGH**

Rentroia-Pacheco et al. 2024 demonstrated that unweighted NCC evaluation can bias:

- C-index;
- observed/expected ratio;
- threshold metrics;
- decision-curve net benefit.

Sampling-aware weighting brought estimates closer to full-cohort evaluation.

### Project correction

Do not assume that only:

> intercept/calibration

needs correction while discrimination is automatically unaffected.

That may be true only under narrower sampling/model assumptions; it is unsafe as a general rule for NCC prediction-model evaluation.

---

## 19. Matched NCC needs design-aware weights too

### Established finding
**Confidence: HIGH**

Matching restricts who can be sampled as a control.

Therefore inclusion probability can depend on:

- event time/risk set;
- matching factors;
- availability.

The phase-2 sample is not equivalent to a simple random case/non-case sample.

Project record must preserve matching variables and sampling mechanism.

---

# Part J — Stratified case-cohort / outcome-stratified sampling

## 20. Sampling probabilities may differ across strata

### Established finding
**Confidence: HIGH**

Case-cohort designs can deliberately oversample:

- specific demographic groups;
- exposure groups;
- rare disease subtypes;
- outcome subtypes.

Then one global sampling fraction is insufficient.

### Project rule

Record sampling fractions/inclusion probabilities by relevant stratum.

Weights must reflect the actual design.

---

# Part K — Non-nested case-control / non-nested class-balanced designs

## 21. Non-nested design loses the source absolute-risk denominator

### Established finding
**Confidence: HIGH**

If cases and controls are assembled without a known parent cohort/source outcome distribution:

- the case:control ratio is partly chosen by investigators;
- raw event prevalence is artificial;
- true cumulative incidence/baseline risk cannot be recovered from the sample alone.

Cochrane therefore classifies these as unsuitable for:

- overall prognosis;
- prediction-model questions requiring absolute probabilities.

They may still support some prognostic-factor relative effects.

---

## 22. External prevalence information can sometimes recalibrate simple binary models

### Established methodological nuance
**Confidence: MODERATE-HIGH**

Methodological literature shows that in some simple unmatched case-control settings, if true population prevalence is known externally and model assumptions hold, the intercept/probability scale can sometimes be corrected.

However this is **not equivalent** to saying that arbitrary non-nested case-control data are generally valid for full prognostic prediction.

Additional issues can remain:

- covariate-distribution distortion;
- matching;
- complex sampling;
- time-to-event structure;
- calibration transportability.

### Project rule

Default classification follows Cochrane:

> non-nested case-control/class-balanced design without recoverable source sampling → not acceptable as a stand-alone absolute-risk prediction design.

Special statistical rescue methods must be justified explicitly.

---

# Part L — Missing-by-design

## 23. Unsampled predictor values are not ordinary accidental missingness

### Established finding
**Confidence: HIGH**

In case-cohort/NCC designs, expensive predictors are intentionally not measured for most cohort members.

This is:

> missing by design / two-phase sampling.

The missingness mechanism is known from the study design.

### Project consequence

Do not conflate:

- predictor absent because participant was not sampled;
- predictor accidentally missing inside the sampled phase-2 dataset.

They require different reasoning.

---

## 24. Sampling design must survive into the analysis dataset

### Established finding
**Confidence: HIGH**

A flat CSV containing only sampled cases/controls can hide crucial design information.

Required supporting data may include:

- parent cohort size;
- event counts;
- risk-set membership;
- sampling strata;
- matching factors;
- inclusion probabilities;
- sampling fractions.

If these are lost, valid source-population reconstruction may become impossible.

---

# Part M — Fitness/exercise translations

## 25. Expensive biomarker case-cohort example

Parent cohort:

- 20,000 trainees;
- baseline data + 1-year injury outcomes available for all;
- stored blood available but assay is expensive.

Design:

1. randomly sample 2,000 trainees as subcohort;
2. assay all subcohort samples;
3. additionally assay all serious-injury cases outside subcohort.

Classification:

> prognostic-factor / prediction-model question + case-cohort sampling.

Raw case proportion in assayed sample cannot be interpreted as 1-year injury risk.

---

## 26. NCC example

Parent cohort:

- athletes followed for time-to-injury;
- expensive neuromuscular biomarker stored but not assayed.

At each injury time:

1. identify injury case;
2. select several athletes still injury-free and under follow-up at that time;
3. assay case + sampled risk-set controls.

Classification:

> nested case-control / risk-set sampling.

A sampled control may later be injured and become a case.

---

## 27. Class-balanced gym-database example

Source database:

- 100,000 new members;
- 5,000 true 12-week dropouts.

ML team creates training set:

- all 5,000 dropouts;
- random 5,000 non-dropouts.

Training dataset event fraction:

> 50%.

True source event fraction:

> 5%.

Without sampling correction, 50% is not the population dropout risk.

The model can learn useful separation while its raw probability scale is wrong.

---

# Part N — Structural record produced by PASS-06B4

## 28. Outcome-dependent sampling record

For any nested/outcome-sampled prognosis study, record:

1. prognosis purpose:
   - prognostic factor;
   - prediction model;
   - overall prognosis;
2. parent/source cohort identifiable? YES/NO;
3. parent cohort size;
4. total number of outcome events in source cohort if known;
5. outcome type:
   - binary;
   - time-to-event;
6. sampling design:
   - case-cohort;
   - NCC/risk-set;
   - nested class-balanced;
   - other two-phase design;
   - non-nested case-control;
   - non-nested class-balanced;
7. case sampling fraction;
8. non-case/control sampling fraction;
9. stratum-specific sampling fractions;
10. sampling independent of predictor? YES/NO/UNCLEAR;
11. case-cohort:
   - subcohort sampling mechanism;
   - subcohort selected irrespective of future outcome?;
   - all vs sampled cases included?;
12. NCC:
   - risk-set definition;
   - controls per case;
   - with/without replacement;
   - can controls recur?;
   - matching variables;
13. class balancing:
   - original event fraction;
   - sampled event fraction;
14. inclusion probabilities recoverable? YES/NO;
15. source outcome distribution recoverable? YES/NO;
16. weighting/correction applied? YES/NO;
17. exact weighting method reported?;
18. prediction target:
   - relative effect;
   - absolute risk;
   - survival probability;
19. performance metrics evaluated;
20. metrics sampling-corrected? YES/NO;
21. calibration assessed on reconstructed/source scale? YES/NO;
22. unsampled predictor values treated as missing-by-design?;
23. additional unintended missingness present?;
24. final project classification;
25. unresolved sampling/analysis validity issues.

---

# Practical rules produced by PASS-06B4

1. Outcome-dependent sampling is a resource-saving second-phase design nested within a longitudinal source cohort.
2. It deliberately changes the event distribution of the analyzed sample.
3. Case-cohort and NCC are structurally different and require separate classification.
4. Case-cohort samples a subcohort independently of future outcome and then adds cases.
5. NCC samples controls from risk sets at each event time.
6. In NCC, a control can later become a case.
7. Standard NCC may sample the same control more than once.
8. Class-balanced ML sampling is another outcome-dependent sampling scheme when drawn from a known source dataset.
9. A balanced training sample does not preserve population event prevalence.
10. The decisive requirement for absolute prognosis is recoverability of the source cohort and sampling process.
11. Known sampling fractions/inclusion probabilities allow weighted reconstruction of the source outcome distribution.
12. Absolute incidence, baseline risk/hazard, individual probabilities and calibration require sampling-aware correction.
13. Relative prognostic effects may remain estimable under some outcome-sampling designs even when absolute risk does not.
14. Valid relative association does not equal valid absolute-risk prediction.
15. Prediction-model performance metrics can also be biased under NCC sampling; weighting is not only an intercept/calibration issue.
16. Matching and stratification change inclusion probabilities and must be retained in the design record.
17. One global weight is not sufficient when sampling differs across strata.
18. Non-nested case-control/class-balanced samples with unknown source outcome distribution are not stand-alone designs for overall prognosis or absolute-risk prediction.
19. External prevalence can rescue some narrow simple case-control settings, but this is a special statistical condition, not the default.
20. Unsampled expensive predictors are missing-by-design and must be distinguished from unintended missing data.
21. Discarding parent-cohort sampling metadata can make valid reconstruction impossible.
22. Project classification must include:
   **prognosis purpose + source cohort + phase-2 sampling mechanism + recoverability of inclusion probabilities + target estimand**.

---

# What remains unresolved after PASS-06B4

The prognosis/prediction branch remains **RESEARCHING**.

Still requires separate deep blocks on:

1. prediction-model development structure;
2. internal validation;
3. optimism/overfitting boundary at design-taxonomy level;
4. internal-external validation;
5. external validation;
6. temporal/geographical validation;
7. model updating/extending;
8. model-impact boundary;
9. diagnostic vs prognostic prediction integration check;
10. prognosis/prediction structural synthesis;
11. final gap audit.

## Next micro-pass

**RES-02 / PASS-06B5 — prediction-model development study structures: candidate predictors, model fitting vs model specification, apparent performance, development dataset architecture, and the boundary between model development and model evaluation.**

STOP after this saved micro-pass.
