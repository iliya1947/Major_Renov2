# RES-02 / PASS-06B20 — Diagnostic outcome-dependent sampling and absolute-probability recovery

Статус: **COMPLETE MICRO-PASS — prediction branch remains RESEARCHING pending repeat final audit**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. diagnostic one-gate vs multiple-gate/two-gate sampling;
2. diagnostic outcome-dependent sampling nested inside a known source population;
3. non-nested diagnostic case-control sampling;
4. deliberate class balancing / undersampling / oversampling;
5. target-condition prevalence/base rate;
6. sample prevalence vs target-population prevalence;
7. recovery of absolute probabilities using known sampling fractions;
8. inverse-probability weighting;
9. intercept/base-rate recalibration in simple case-control settings;
10. matching/stratification complications;
11. discrimination vs calibration under outcome enrichment;
12. sensitivity/specificity vs PPV/NPV under enrichment;
13. AUC vs precision-recall / prevalence-sensitive metrics;
14. threshold utility / net benefit;
15. spectrum/case-mix distortion vs mere prevalence distortion;
16. why prevalence correction cannot repair two-gate spectrum mismatch;
17. representative external validation;
18. relation to PASS-06A, PASS-06B4 and PASS-06B14;
19. fitness/exercise translation;
20. structural record.

Не покрывается здесь:

- exact IPW variance formulas;
- retrospective-likelihood derivations;
- exact offset equations;
- detailed matched-case-control estimators;
- SMOTE algorithm details;
- synthetic-data generation;
- exact prevalence-estimation methods;
- imperfect-reference-standard correction;
- detailed DTA meta-analysis;
- final prediction synthesis.

---

# Sources checked

## 1. PROBAST+AI — current 2025 tool and E&E Light

Moons KGM, Damen JAA, Kaul T, et al.  
**PROBAST+AI: an updated quality, risk of bias, and applicability assessment tool for prediction models using regression or artificial intelligence methods.**  
BMJ. 2025;388:e082505.

Current publication and Supplementary Table 4 / PROBAST+AI E&E Light checked 2026-11-17.

Most directly relevant current guidance:

- selective sampling can be used for **both prognostic and diagnostic model studies**, including nested case-control/case-cohort designs from a source dataset of known size;
- without appropriate adjustment, selective sampling can yield incorrect/miscalibrated absolute outcome probabilities because baseline outcome frequencies are wrong;
- inverse-sampling-fraction reweighting can recover the original outcome-class frequency when sampling fractions are known;
- if the original sampling fractions are unknown, that direct reconstruction is impossible;
- oversampling subgroups can distort predictor distributions and potentially predictor-outcome associations as well as calibration;
- class-imbalance interventions such as majority undersampling, minority oversampling and SMOTE can be harmful for probability/risk prediction if model probabilities are not recalibrated;
- PROBAST+AI explicitly recommends adjusting model predictions after class-imbalance correction, e.g. through weighting or intercept re-estimation.

https://www.bmj.com/content/388/bmj-2024-082505

Supplementary E&E Light:

https://www.bmj.com/highwire/filestream/1107986/field_highwire_adjunct_files/2/mook082505.ww3.pdf

### PDF tooling note

The PDF text was opened through the web PDF reader. A required screenshot call was attempted, but the screenshot backend returned **cache miss** and could not render the page. The claims used here were therefore cross-checked against the extracted PDF text and the main BMJ HTML article.

---

## 2. QUADAS-3 — current DTA risk-of-bias tool

Whiting PF, Tomlinson E, Rutjes AWS, et al.  
**QUADAS-3: A Revised Tool for the Quality Assessment of Diagnostic Test Accuracy Studies.**  
Ann Intern Med. 2026;179(4):548-555.

Current article checked 2026-11-17.

QUADAS-3 now explicitly records participant sampling as:

- **single-gate**:
  - one group of participants whose diagnosis is not yet known;

- **multiple-gate**:
  - case-control style sampling with participants already known to have the diagnosis/condition status.

The ideal DTA participant architecture described by QUADAS-3 is:

- prospective enrollment;
- a single group;
- consecutive/random eligible participants;
- representative of the intended-use population.

Current tool version page also confirms QUADAS-3 is the latest QUADAS tool in 2026.

https://doi.org/10.7326/ANNALS-25-02104  
https://www.bristol.ac.uk/population-health-sciences/projects/quadas/quadas-3/quadas-3-tool/

---

## 3. Rentroia-Pacheco et al. — weighted performance in NCC data

Rentroia-Pacheco B, Bellomo D, Lakeman IMM, et al.  
**Weighted metrics are required when evaluating the performance of prediction models in nested case-control studies.**  
BMC Med Res Methodol. 2024;24:115.

Checked 2026-11-17.

Key findings:

- unweighted nested case-control performance metrics can be biased;
- inverse-sampling weighting recovered full-cohort estimates for:
  - C-index;
  - O/E;
  - calibration slope;
  - threshold-based metrics;
  - decision-curve net benefit;
- matching can make unweighted bias larger;
- weighting can account for the sampling design when inclusion probabilities are recoverable.

The main example is prognostic/time-to-event, but the study is important here because it establishes the general performance-evaluation consequence of outcome-dependent subsampling.

https://pubmed.ncbi.nlm.nih.gov/38760688/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC11533296/

---

## 4. Rutjes et al. — diagnostic two-gate/case-control design

Rutjes AWS, Reitsma JB, Vandenbroucke JP, Glas AS, Bossuyt PMM.  
**Case-control and two-gate designs in diagnostic accuracy studies.**  
Clin Chem. 2005;51(8):1335-1341.

Used as the foundational diagnostic-design source still consistent with current QUADAS-3 single-gate/multiple-gate terminology.

Key distinction:

- diagnostic case-control/two-gate studies recruit diseased and non-diseased participants through separate selection mechanisms;
- this can create spectrum effects;
- sensitivity/specificity may differ from those in the intended clinical population;
- early proof-of-concept use is not equivalent to evaluation of clinical diagnostic performance.

https://pubmed.ncbi.nlm.nih.gov/15961549/

---

## 5. van der Schouw / nested diagnostic predictive-value methods

**Comparison of approaches to estimate confidence intervals of post-test probabilities of diagnostic test results in a nested case-control study.**

Checked current PMC record 2026-11-17.

Key structural point:

- nested case-control sampling from a known diagnostic cohort deliberately oversamples cases;
- raw sample PPV/NPV are therefore distorted;
- if source-cohort prevalence and non-case sampling fraction are known, absolute post-test probabilities can be reconstructed by weighting.

https://pmc.ncbi.nlm.nih.gov/articles/PMC3536560/

---

## 6. Liu et al. — predictive values in NCC diagnostic sampling

**Assess predictive values of a binary diagnostic test under a nested case-control design.**  
2021.

Checked 2026-11-17.

Key finding:

- direct PPV/NPV proportions in NCC samples are biased because cases are oversampled;
- inverse-probability weighting can consistently estimate predictive values when the sampling mechanism is known.

https://pubmed.ncbi.nlm.nih.gov/34546838/

---

## 7. Huang et al. / semiparametric case-control risk-marker methods

**Semiparametric methods for evaluating risk prediction markers in case-control studies.**

Used for the classic probability-scale distinction:

- logistic models fitted to case-control data can recover relative/ranking structure under specific sampling assumptions;
- the sample intercept is shifted by the artificial case fraction;
- target disease prevalence can be used to correct the intercept/probability scale in simple settings.

https://pmc.ncbi.nlm.nih.gov/articles/PMC3372083/

---

## 8. 2026 methodology review — case-control intercept adjustment

**Use of causal inference methods in case-control studies: a methodology review.**  
2026.

Used here only for the mathematical sampling principle, not for causal conclusions.

It confirms that for simple unmatched case-control logistic models:

- an intercept/offset adjustment based on the sampling odds and known target prevalence can recover an absolute-risk scale under the relevant assumptions;
- matching/oversampling strata require more detailed weighting/standardization.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13007247/

---

## 9. Zhao et al. — active 2026 case-control calibration methodology

Zhao G, Ma Y, Cao Y.  
**Improved risk prediction via cross-domain calibration in a retrospective case-control study.**  
2026.

Checked current PMC record 2026-11-17.

This recent methods paper confirms that absolute-risk prediction/calibration from retrospective case-control data remains an active methodological problem and that external/target-population information can be needed to recover a usable probability scale.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13441221/

---

# Part A — Three different sampling architectures must not be collapsed

## 1. One-gate diagnostic series

### Established finding
**Confidence: HIGH**

Participants are recruited from **one intended-use clinical population** before the target-condition status is known.

Canonical structure:

`eligible diagnostic population → consecutive/random sample → predictors/index model + reference standard → condition present/absent`

Examples:

- all consecutive athletes presenting with acute posterior-thigh pain;
- all trainees referred for suspected stress injury.

### Why preferred

This preserves:

- target-condition prevalence in the sampled diagnostic setting, subject to ordinary sampling variation;
- the intended clinical spectrum;
- natural predictor distributions;
- clinically relevant alternative diagnoses/non-cases.

Current QUADAS-3 uses single-gate recruitment as part of the ideal test-accuracy trial.

---

## 2. One-gate parent population + outcome-dependent phase-2 sampling

### Established finding
**Confidence: HIGH**

A different architecture is:

1. recruit/identify a one-gate diagnostic source population;
2. determine condition status for the parent source population;
3. measure an expensive predictor only in:
   - all or many cases;
   - a sample of non-cases.

This is a **nested/two-phase outcome-dependent sampling design**.

### Critical distinction

The analyzed phase-2 sample is case-enriched, but the parent source population remains known.

Therefore:

- source prevalence may be recoverable;
- sampling fractions may be known;
- absolute probabilities/performance can potentially be reconstructed using design-aware weighting.

### Project terminology

Call this:

> **one-gate source population with nested outcome-dependent sampling**

not simply:

> two-gate diagnostic study.

---

## 3. Multiple-gate / two-gate diagnostic case-control recruitment

### Established finding
**Confidence: HIGH**

Cases and controls are recruited separately using different enrollment gates, often after their condition status is already known.

Example:

- severe MRI-confirmed hamstring tears from a sports-medicine centre;
- healthy uninjured controls recruited separately.

### Current QUADAS-3 classification

This is a **multiple-gate** participant design.

### Key problem

The study may distort:

- disease severity spectrum;
- alternative diagnoses;
- comorbidity distribution;
- predictor distributions;
- target prevalence;
- predictor-outcome relationships.

This is not merely a base-rate problem.

---

# Part B — “Case-control” can mean two scientifically different things

## 4. Nested outcome-dependent sampling

Parent population known.

Cases/non-cases sampled after outcome classification for efficiency.

Potentially recoverable:

- source prevalence;
- inclusion probabilities;
- covariate distribution by weighting;
- absolute probabilities/performance.

---

## 5. Non-nested diagnostic case-control / two-gate study

Parent diagnostic denominator is usually not reconstructable from the sample itself.

Cases and controls may come from different source populations.

Potentially unknown:

- intended-use prevalence;
- exact inclusion probabilities;
- target covariate distribution;
- clinically relevant spectrum.

### Project rule

Never treat:

> nested case-control

and

> two-gate diagnostic case-control

as interchangeable labels.

---

# Part C — The sample prevalence is a design artifact

## 6. Class fraction in an enriched sample is not target prevalence

### Established finding
**Confidence: HIGH**

Suppose the intended primary-care diagnostic population has:

> 5% condition prevalence.

Investigators select:

- 500 cases;
- 500 non-cases.

Analyzed sample prevalence:

> 50%.

That 50% is determined by design.

It is not evidence that a new patient has 50% pre-test probability.

---

## 7. Diagnostic prevalence must refer to the intended-use population

### Project rule
**Confidence: HIGH**

The relevant base rate is not automatically:

- national population prevalence;
- general adult prevalence;
- prevalence in an elite referral centre.

It is:

> prevalence of the target condition in the population at the specific diagnostic decision point where the model is intended to be applied.

Example:

A model used after primary-care examination and a model used after specialist referral can face different pre-test prevalence even for the same condition.

---

# Part D — Why raw probabilities become wrong

## 8. Outcome sampling changes the prior/base rate seen by the model

### Established finding
**Confidence: HIGH**

In a case-enriched sample, the training distribution satisfies:

`P_sample(Y=1) ≠ P_target(Y=1)`.

If a probability model learns directly from the uncorrected sampled distribution, its output can represent the sample design rather than the target diagnostic population.

### Consequence

A “0.70 probability” from an uncorrected balanced sample need not mean:

> 70% probability of disease in intended use.

---

# Part E — Simple logistic case-control result

## 9. Relative predictor coefficients may be recoverable under restricted conditions

### Established methodological result
**Confidence: HIGH**

For a simple logistic model under classical outcome-based case-control sampling:

- cases and controls are sampled in a way that preserves the predictor distribution within each outcome class;
- logistic slope/odds-ratio structure can often be estimated from the case-control sample;
- the intercept/base-rate term is shifted by the artificial case fraction.

### Important limitation

This result does **not** mean:

> every ML model trained on any balanced case-control sample has valid predictor effects.

It depends on:

- sampling design;
- model specification;
- weighting;
- regularization/tuning;
- matching/stratification;
- spectrum representativeness.

---

## 10. Intercept/prevalence correction can recover absolute scale in simple settings

### Established finding
**Confidence: HIGH**

If:

- target prevalence is known;
- case/control sampling is sufficiently simple;
- the logistic conditional structure is appropriate;
- case/control groups represent the target conditional predictor distributions;

then the logistic intercept can be adjusted to the target prevalence.

### Project classification

This is a **probability-scale/base-rate correction**.

It is not a universal correction for every case-control model.

---

# Part F — Inverse-probability weighting

## 11. Known sampling fractions allow cohort/population reconstruction

### Established finding
**Confidence: HIGH**

In a nested design:

- if all cases are sampled, case inclusion probability may be 1;
- if 20% of non-cases are sampled, non-case inclusion probability is 0.20.

A simple inverse inclusion weight would conceptually assign:

- case weight ≈ 1;
- non-case weight ≈ 5.

This reconstructs the contribution of the parent diagnostic population.

### Project rule

Exact weighting must follow the actual:

- sampling fractions;
- matching;
- strata;
- repeated selection architecture.

Do not use one global weight when design probabilities differ across strata.

---

## 12. Weighting can be used in model development or performance evaluation

### Established finding
**Confidence: HIGH**

Design-aware weights may enter:

- model fitting;
- calibration estimation;
- discrimination estimation;
- threshold metrics;
- PPV/NPV;
- net benefit.

Which procedure is appropriate depends on the model and sampling design.

### Current PROBAST+AI principle

For selective sampling, inverse-sampling-fraction reweighting toward the original outcome-class frequency is an accepted correction route.

---

# Part G — Matching changes the sampling probabilities

## 13. Matched case-control sampling is not fixed by a naive global prevalence correction

### Established finding
**Confidence: HIGH**

Matching can make control inclusion probability depend on:

- age;
- sex;
- site;
- calendar time;
- other matching variables.

Therefore:

- sampling fractions can be stratum-specific;
- the analyzed covariate distribution is deliberately altered.

### Evidence

Rentroia-Pacheco et al. found stronger bias in unweighted performance metrics in matched NCC samples and recovered full-cohort values through sampling-aware weighting.

### Project rule

Record:

- matching variables;
- stratum-specific sampling fractions;
- whether performance weighting respects the matching design.

---

# Part H — Class balancing in ML is the same base-rate problem at first order

## 14. Majority undersampling

Example:

- keep all cases;
- randomly retain only a subset of non-cases.

This artificially increases the event/class fraction.

---

## 15. Minority oversampling

Examples:

- duplicate cases;
- generate synthetic cases;
- SMOTE-like procedures.

This also changes the class distribution seen by the training algorithm.

---

## 16. PROBAST+AI current guidance

### Established finding
**Confidence: HIGH**

PROBAST+AI E&E Light explicitly warns that class-imbalance corrections:

- can do more harm than good for risk/probability prediction;
- require model prediction recalibration when used;
- are conceptually similar to case-control outcome sampling.

### Project rule

“Balanced training set” is not automatically an advantage.

For probability prediction, it creates a design correction obligation.

---

# Part I — Oversampling may affect more than the intercept in flexible ML pipelines

## 17. Do not assume all algorithms preserve the same score function

### Project inference grounded in current guidance
**Confidence: HIGH**

With flexible ML pipelines:

- class weights;
- oversampling;
- undersampling;
- regularization;
- threshold tuning;
- hyperparameter selection

can change the learned decision function itself.

Therefore a simple intercept correction may not fully recover the intended probability model.

### Project rule

For non-classical/complex pipelines:

1. document the class-balancing method;
2. recalibrate on target-representative data or with valid design correction;
3. externally evaluate the final probability model.

---

# Part J — Calibration is directly prevalence-sensitive

## 18. Mean calibration/base-rate mismatch

### Established finding
**Confidence: HIGH**

If training prevalence is artificially 50% but target prevalence is 5%, uncorrected predictions will typically overestimate absolute disease probability.

This will appear as:

- wrong calibration-in-the-large;
- wrong O/E;
- shifted calibration curve.

---

## 19. Calibration slope can also be affected

### Established finding
**Confidence: HIGH**

Sampling/matching/reweighting and data-selection mechanisms can affect more than the average intercept.

Rentroia-Pacheco et al. show that calibration slope estimates from NCC data also require sampling-aware weighting for unbiased full-cohort performance estimation.

### Project rule

Do not reduce all outcome-sampling bias to:

> intercept only.

That simplification is valid only in restricted simple-model/simple-sampling scenarios.

---

# Part K — Discrimination is less prevalence-dependent, but not universally invariant

## 20. Simple outcome-stratified sampling can preserve ranking under strict conditions

### Established methodological principle
**Confidence: MODERATE-HIGH**

If cases and controls are randomly sampled within outcome strata from the same source population, a rank-based measure such as ordinary ROC AUC may be less directly affected by the artificial case fraction than calibration.

### But

This does not justify the blanket statement:

> AUC is always unbiased in case-control samples.

---

## 21. Matching/NCC/two-gate spectrum selection can change discrimination

### Established finding
**Confidence: HIGH**

Outcome-dependent selection can alter:

- case mix;
- predictor distributions;
- control spectrum;
- matching structure.

Rentroia-Pacheco et al. empirically showed an unweighted C-index difference between NCC samples and the full cohort, corrected by weighting.

Diagnostic two-gate studies can also exaggerate apparent separation if they compare:

- severe obvious cases;
- exceptionally healthy controls.

### Project rule

Discrimination evidence must be interpreted through the sampling architecture.

---

# Part L — Spectrum distortion is not the same problem as prevalence distortion

## 22. Prevalence/base-rate distortion

Mechanism:

> cases/non-cases are sampled at different fractions from one source population.

Potential correction:

- known sampling fractions;
- inverse weighting;
- base-rate/intercept correction under appropriate assumptions.

---

## 23. Spectrum/case-mix distortion

Mechanism:

> the sampled cases and/or controls do not represent the intended clinical spectrum.

Examples:

- only severe cases;
- only healthy controls;
- exclusion of diagnostic mimics;
- specialist tertiary cases paired with population controls.

### Consequence

This can alter:

- predictor distributions conditional on outcome;
- predictor-outcome associations;
- sensitivity/specificity;
- AUC/discrimination;
- calibration;
- applicability.

---

## 24. Prevalence correction does not repair spectrum bias

### Critical project rule
**Confidence: HIGH**

Suppose a two-gate study contains:

- extreme MRI-confirmed tears;
- healthy athletes with no symptoms.

Even if true clinic prevalence is known and the model intercept is shifted to that prevalence, the model still has not learned how to distinguish:

- mild tears;
- muscle soreness;
- referred pain;
- tendon pathology;
- other real diagnostic mimics.

Therefore:

> **base-rate correction ≠ spectrum correction**.

Representative target-population evaluation is still required.

---

# Part M — Sensitivity and specificity

## 25. These are conditional on disease status, not directly on prevalence

### Established finding
**Confidence: HIGH**

Definitions:

- sensitivity = P(test positive | condition present);
- specificity = P(test negative | condition absent).

Therefore changing only the **number** of sampled cases/non-cases does not mathematically force sensitivity/specificity to change.

---

## 26. But spectrum selection can change them

### Established finding
**Confidence: HIGH**

If sampled cases/non-cases differ in:

- severity;
- stage;
- comorbidities;
- alternative diagnoses;
- prior testing;

then sensitivity/specificity themselves can change.

This is why current QUADAS-3 prioritizes:

- single-gate recruitment;
- representative intended-use participants.

---

# Part N — PPV and NPV

## 27. Predictive values depend on prevalence

### Established finding
**Confidence: HIGH**

PPV and NPV depend directly on the target-condition base rate/pre-test probability.

### Consequence

Raw PPV/NPV calculated from a deliberately 50:50 case-control sample generally do not represent the intended diagnostic population.

---

## 28. Nested sampling can recover PPV/NPV with weighting

### Established finding
**Confidence: HIGH**

When:

- the parent diagnostic cohort is known;
- prevalence is known/recoverable;
- non-case sampling fraction is known;

inverse-probability weighting can estimate predictive values on the source-population scale.

This has been demonstrated specifically for diagnostic nested case-control data.

---

# Part O — Precision-recall / AUPRC

## 29. Precision is prevalence-sensitive

### Project integration
**Confidence: HIGH**

Precision is equivalent to PPV at a threshold.

Therefore precision-recall curves and AUPRC depend on the event prevalence/class distribution.

### Project rule

AUPRC calculated directly in an artificially balanced case-control/class-balanced sample should not be interpreted as expected target-population precision-recall performance without appropriate correction/representative evaluation.

This differs from ROC AUC, whose relation to prevalence is less direct.

---

# Part P — Brier score and overall probability error

## 30. Overall probability error is sampling-scale dependent

### Established inference
**Confidence: HIGH**

The Brier score compares predicted probability with actual binary outcome.

If the analyzed sample artificially changes the distribution of outcomes, an unweighted Brier score targets the enriched sample rather than the intended population.

### Project rule

For outcome-dependent evaluation samples:

- use design-aware weighting/reconstruction;
- or evaluate in a representative target sample.

---

# Part Q — Threshold metrics

## 31. Accuracy and class proportions depend on prevalence

### Established finding
**Confidence: HIGH**

Metrics involving totals of predicted/observed positive/negative classifications can change substantially with class proportion.

Raw:

- overall accuracy;
- PPV;
- NPV;
- F1;
- precision;

from an enriched sample can be misleading for deployment.

### Important nuance

Sensitivity/specificity are structurally different because they condition on outcome status, but remain vulnerable to spectrum selection.

---

# Part R — Decision-curve / net-benefit evaluation

## 32. Net benefit must represent the target population

### Established finding
**Confidence: HIGH**

Decision curves use:

- true positives;
- false positives;
- total target population size;
- decision threshold.

Outcome-dependent sampling changes these quantities.

Rentroia-Pacheco et al. demonstrated that unweighted net benefit from NCC data was biased while sampling-weighted net benefit recovered full-cohort estimates.

### Project rule

Do not make deployment utility claims from unweighted case-enriched samples.

---

# Part S — External prevalence as a rescue: narrow, not generic

## 33. Known target prevalence can sometimes correct probability scale

### Established finding
**Confidence: HIGH**

For simple logistic case-control models, target prevalence can be used to correct the intercept/base rate.

This can be valuable when the original sample prevalence is artificial.

---

## 34. What external prevalence does NOT automatically solve

It does not necessarily recover:

- target predictor distribution;
- severity spectrum;
- diagnostic mimics;
- matching-stratum distribution;
- nonlinear predictor relationships;
- ML effects induced by balancing/tuning;
- measurement differences;
- reference-standard differences.

### Project rule

External prevalence is **not a generic substitute for representative validation**.

---

# Part T — Non-nested two-gate samples

## 35. Source-population reconstruction may be impossible

### Established finding
**Confidence: HIGH**

If:

- cases and controls come from separate undefined source populations;
- inclusion fractions are unknown;
- target diagnostic denominator is unknown;

then the sample itself cannot identify the intended-use prevalence.

### Consequence

Absolute probabilities are not directly population-interpretable without strong external information/assumptions.

---

## 36. Even perfect target prevalence cannot prove transportability

### Project synthesis
**Confidence: HIGH**

Correcting an intercept to an externally known prevalence cannot verify that:

- predictor effects;
- discrimination;
- calibration shape

transport from extreme two-gate samples to the real diagnostic population.

### Project preference

For a clinically usable diagnostic probability model:

> external evaluation in a one-gate representative intended-use sample remains the strongest practical check.

---

# Part U — Development vs evaluation correction

## 37. Correction during development

Possible architectures:

1. fit using inverse sampling weights;
2. use case-control-compatible estimation + target-prevalence intercept correction;
3. fit balanced/weighted ML then recalibrate using representative target data;
4. other design-aware methods.

### Project requirement

The exact method must be reported and linked to the sampling design.

---

## 38. Correction only at evaluation

A model may be developed on an enriched dataset, but evaluation can occur in:

- a representative one-gate sample;
- or a weighted nested sample.

### Important limitation

External representative evaluation can reveal miscalibration but does not guarantee that the original development process was efficient/optimal.

If the model is recalibrated using the evaluation data, that creates a new model version under PASS-06B8 rules.

---

# Part V — Internal validation under outcome sampling

## 39. Resampling the enriched data preserves the enriched design

### Project inference
**Confidence: HIGH**

Ordinary random CV/bootstrap within a 50:50 enriched dataset can estimate reproducibility within that artificial sampling distribution.

It does **not** automatically restore:

- 5% target prevalence;
- target-population calibration;
- target PPV/NPV;
- target utility.

### Project rule

Internal validation must incorporate:

- the sampling-aware fitting strategy;
- design weights/recalibration;

and interpretation must remain on the intended target scale.

---

# Part W — Target prevalence belongs to the model specification

## 40. Absolute diagnostic probability is setting-specific

### Cross-pass integration
**Confidence: HIGH**

A diagnostic model intended for:

- emergency department;
- sports clinic;
- primary care;
- screening program

can face different condition prevalence and spectra.

### Project record

For probability prediction always record:

1. target setting;
2. diagnostic decision point;
3. target prevalence/pre-test probability;
4. development prevalence;
5. sampling prevalence.

These are three different quantities.

---

# Part X — DTA and prediction-model sampling effects overlap but are not identical

## 41. DTA concern

PASS-06A / QUADAS-3:

> Does participant selection give unbiased/applicable estimates of test accuracy such as sensitivity/specificity?

Major threat:

- multiple-gate/spectrum selection.

---

## 42. Prediction-model concern

PASS-06B14 / PROBAST+AI:

> Does participant sampling yield a prediction function with valid individual probabilities and performance?

Major threats include:

- spectrum distortion;
- prevalence/base-rate distortion;
- class balancing;
- incorrect calibration;
- overfitting/tuning effects.

### Project conclusion

The same case-control-looking sample can create **both**:

1. DTA spectrum/applicability problems;
2. prediction-probability calibration/base-rate problems.

They must be recorded separately.

---

# Part Y — One-gate does not mean every predictor must be measured in everyone

## 43. Efficient two-phase measurement can remain scientifically valid

### Established finding
**Confidence: HIGH**

A one-gate source population may be large, while expensive predictors are measured only in a designed phase-2 sample.

This can be efficient and valid if:

- source cohort/diagnostic series is known;
- sampling fractions are known;
- weighting/analysis correctly reflects the design;
- target/reference-standard status is appropriately established.

### Project rule

Do not reject a study merely because expensive predictors are missing-by-design in non-sampled participants.

Classify it as:

> outcome-dependent/two-phase sampling.

---

# Part Z — Missing-by-design vs accidental missingness

## 44. Selected non-measurement is not ordinary missing data

### Cross-pass integration
**Confidence: HIGH**

If biomarker B is measured only in:

- all cases;
- 10% of non-cases

by protocol, then absent B values in the remaining non-cases are **missing-by-design / unmeasured by sampling design**.

This differs from:

- lost sample;
- failed assay;
- undocumented predictor.

The analysis must respect inclusion probabilities.

---

# Part AA — Fitness/exercise translations

## 45. Example: diagnostic injury classifier from balanced data

Real intended-use sports-clinic population:

- 8% current stress fracture.

Development sample:

- 400 confirmed fractures;
- 400 non-fracture controls.

Sample prevalence:

- 50%.

### Wrong interpretation

> model output 0.60 means 60% clinic probability.

Not justified from the raw balanced training distribution.

### Required route

Need:

- target prevalence/base-rate correction;
- calibration on intended-use scale;
- preferably representative one-gate external evaluation.

---

## 46. Example: extreme two-gate sampling

Cases:

- elite athletes with severe MRI-confirmed hamstring tears.

Controls:

- healthy athletes without any posterior-thigh symptoms.

A model may show spectacular AUC.

But deployment population is:

- athletes with posterior-thigh pain of uncertain cause.

### Problem

The model has not been tested against:

- mild injuries;
- referred pain;
- soreness;
- tendon disorders;
- lumbar causes.

Correcting the prevalence does not repair this spectrum mismatch.

---

## 47. Example: efficient expensive biomarker study

Parent population:

- 8,000 consecutive athletes evaluated for suspected stress injury;
- reference standard known for all.

Expensive proteomic marker measured in:

- all 200 confirmed cases;
- random 400 of 7,800 non-cases.

### Classification

> one-gate parent diagnostic cohort + nested outcome-dependent phase-2 sampling.

### Potentially recoverable

- source prevalence = 200/8000;
- non-case sampling fraction = 400/7800;
- design-aware probability/performance estimates.

This is scientifically different from recruiting 200 cases and 400 unrelated healthy controls from separate sources.

---

## 48. Example: class-balanced ML

Intended-use condition prevalence:

- 3%.

Training preprocessing:

- non-cases undersampled until 50:50 class balance.

### Requirement

The final deployment model must not inherit raw 50:50 probability calibration.

Need:

- class-balancing-aware fitting/recalibration;
- target-representative evaluation.

High internal balanced-set accuracy is not sufficient.

---

# Part AB — Structural record produced by PASS-06B20

## 49. Diagnostic outcome-dependent sampling record

For every diagnostic prediction study with selective/outcome-dependent sampling, record:

1. model identifier/version;
2. diagnostic target condition;
3. diagnostic T0 / intended decision point;
4. intended-use population;
5. intended-use setting;
6. source participant architecture:
   - one-gate;
   - multiple-gate/two-gate;
   - unclear;
7. parent diagnostic population identifiable? YES/NO;
8. parent source size;
9. target-condition prevalence in parent source;
10. target-condition prevalence in intended deployment setting;
11. analyzed sample size;
12. sampled case count;
13. sampled non-case count;
14. analyzed sample prevalence;
15. sampling design:
    - full one-gate sample;
    - nested case-control/two-phase;
    - non-nested case-control;
    - majority undersampling;
    - minority oversampling;
    - synthetic oversampling/SMOTE;
    - other;
16. cases sampled from same source population as non-cases?;
17. cases already known before enrollment?;
18. non-cases/controls representative of diagnostic alternatives?;
19. case severity spectrum representative?;
20. sampling fraction for cases;
21. sampling fraction for non-cases;
22. stratum-specific sampling fractions;
23. matching variables;
24. individual inclusion probabilities recoverable?;
25. predictor distribution in source population recoverable?;
26. expensive predictor missing-by-design?;
27. model fitting:
    - unweighted;
    - inverse-probability weighted;
    - case-control likelihood;
    - class weights;
    - other;
28. base-rate/intercept correction applied?;
29. target prevalence source;
30. recalibration data representative of intended use?;
31. calibration-in-the-large assessed on target scale?;
32. calibration slope assessed with design correction?;
33. calibration curve target-representative?;
34. discrimination metric;
35. discrimination sampling-corrected?;
36. PPV/NPV reported?;
37. PPV/NPV corrected to target prevalence?;
38. precision/AUPRC reported?;
39. AUPRC interpreted on target prevalence scale?;
40. Brier/overall error sampling-corrected?;
41. threshold sensitivity/specificity;
42. spectrum effects considered?;
43. threshold PPV/NPV;
44. net benefit/decision curve;
45. utility metric weighted to target population?;
46. internal validation includes sampling correction?;
47. external validation:
    - representative one-gate;
    - another enriched sample;
    - weighted nested sample;
48. final model updated/recalibrated in validation data?;
49. final project classification;
50. unresolved prevalence/spectrum/sampling/applicability issues.

---

# Practical rules produced by PASS-06B20

1. Diagnostic case enrichment can arise either from valid two-phase sampling within one source population or from problematic separate-gate recruitment; these are not the same design.
2. Current QUADAS-3 explicitly distinguishes single-gate from multiple-gate/case-control diagnostic recruitment.
3. The preferred DTA participant architecture is a representative one-gate series of participants with condition status unknown at enrollment.
4. A known one-gate parent diagnostic population can be followed by outcome-dependent phase-2 sampling for expensive predictors.
5. Nested outcome-dependent sampling can be efficient if source prevalence and inclusion probabilities remain recoverable.
6. Non-nested two-gate samples often lack a reconstructable target denominator and can distort the clinical spectrum.
7. The observed case fraction in a case-enriched sample is a design artifact, not the intended diagnostic prevalence.
8. Relevant prevalence is the base rate at the model's intended diagnostic decision point and setting.
9. Uncorrected outcome enrichment generally invalidates the raw absolute probability scale.
10. In simple logistic case-control settings, relative slope information may be recoverable while the intercept/base rate is shifted.
11. Known target prevalence can support intercept/base-rate correction in restricted simple settings.
12. This intercept result should not be generalized mechanically to arbitrary ML/class-balanced pipelines.
13. Inverse sampling fractions can reconstruct the contribution of the source population when inclusion probabilities are known.
14. Matching/stratification require stratum-specific/design-aware weighting rather than one naive global weight.
15. Outcome-dependent sampling affects both model development and model-performance evaluation.
16. PROBAST+AI explicitly recognizes selective sampling for diagnostic models and recommends sampling-aware correction for absolute probabilities.
17. PROBAST+AI also warns that class-imbalance corrections such as undersampling/oversampling/SMOTE can harm risk prediction unless predictions are recalibrated.
18. Class balancing is a sampling intervention, not evidence that the real target population is balanced.
19. Calibration is directly sensitive to the artificial outcome prevalence.
20. Outcome-sampling bias is not always only an intercept issue; matching/selection can affect calibration slope and other performance measures.
21. ROC discrimination can be relatively robust to pure random outcome-stratified sampling under restricted conditions, but is not universally invariant.
22. NCC/matching and two-gate spectrum selection can bias discrimination.
23. Spectrum distortion and prevalence distortion are distinct mechanisms.
24. Base-rate correction can repair prevalence scale under assumptions but cannot repair missing disease severity, diagnostic mimics or other spectrum mismatch.
25. Sensitivity/specificity are conditional on disease status and not directly determined by prevalence, but they can change when case/control spectrum changes.
26. PPV/NPV are prevalence dependent and raw values from enriched case-control samples are usually not deployment estimates.
27. In nested designs, PPV/NPV can be recovered using source prevalence/sampling-aware weighting.
28. Precision/AUPRC are prevalence sensitive; balanced-sample AUPRC should not be interpreted as target-population performance without correction.
29. Overall probability-error metrics such as Brier score target the sampled distribution unless sampling correction/representative evaluation is used.
30. Threshold accuracy/precision metrics need target-population interpretation.
31. Net benefit/decision-curve analysis from outcome-sampled data also requires sampling correction.
32. External prevalence can rescue the probability scale in some simple case-control models but is not a generic substitute for representative target data.
33. A non-nested two-gate model with unknown source fractions cannot establish calibrated absolute probabilities from its sample alone.
34. Representative one-gate external evaluation is the strongest practical test of probability calibration and spectrum transportability for diagnostic deployment.
35. Internal CV/bootstrap inside an enriched dataset does not automatically restore target prevalence or target utility.
36. Missing-by-design predictors from planned phase-2 sampling must be distinguished from accidental missingness.
37. DTA spectrum bias and diagnostic prediction-model base-rate/calibration bias can occur simultaneously and should be recorded separately.
38. A fully specified fixed model can still be evaluated as an index test, but probability calibration requires additional sampling/base-rate attention beyond standard sensitivity/specificity.
39. Minimum project architecture:
    **diagnostic decision point + intended-use one-gate population + target prevalence + actual sampling gates + outcome-sampling fractions + spectrum representativeness + development correction + target-scale calibration/performance + representative/weighted evaluation**.

---

# Important boundary: base-rate distortion vs spectrum distortion

This is the central result of PASS-06B20.

## Base-rate distortion

Question:

> Were cases/non-cases sampled at artificial proportions from the **same recoverable source population**?

Potential remedy:

- sampling weights;
- prevalence/intercept correction;
- representative recalibration/evaluation.

## Spectrum distortion

Question:

> Did sampling change **who the cases and controls are** relative to intended use?

Examples:

- severe cases only;
- healthy controls only;
- missing diagnostic mimics;
- tertiary-centre cases plus community controls.

Potential remedy:

> not merely mathematical prevalence correction.

Requires evidence in a clinically representative intended-use population.

---

# Evidence limitations

1. The strongest simple intercept-correction results rely on specific logistic case-control assumptions.
2. Flexible ML pipelines can react to class balancing in ways not captured by intercept correction alone.
3. Matching and stratification require explicit design-aware methods.
4. Non-nested case-control absolute-risk recovery can sometimes use external prevalence/data, but general validity depends on stronger assumptions about predictor distributions and transportability.
5. QUADAS-3 concerns DTA risk of bias/applicability; PROBAST+AI concerns prediction-model development/evaluation. Their scopes overlap but are not interchangeable.
6. The 2024 weighted-metrics NCC study is mainly prognostic/time-to-event, so its exact numerical results are not automatically transferred to every cross-sectional diagnostic design; its design principle about sampling-aware performance evaluation is transferable and is independently supported by PROBAST+AI and diagnostic predictive-value literature.
7. Representative external validation remains necessary for claims about transportability beyond the source population.

---

# Gap status after PASS-06B20

All three blocking gaps identified by PASS-06B17 now have dedicated taxonomy-level passes:

1. PASS-06B18 — multicategory/ordinal prediction;
2. PASS-06B19 — multiple-outcome/composite/joint-risk prediction;
3. PASS-06B20 — diagnostic outcome-dependent sampling and absolute-probability recovery.

This **does not authorize synthesis automatically**.

The workflow requires a repeat final gap audit across the entire current prediction branch.

## Next micro-pass

**RES-02 / PASS-06B21 — repeat final prediction-branch gap audit after PASS-06B18…B20: recheck PASS-06A + PASS-06B1…B20 for remaining design-family omissions, contradictions, unsupported transfers between diagnostic/prognostic frameworks, source-version changes and fitness-specific gaps; decide whether prediction-branch synthesis is finally permitted.**

STOP after this saved micro-pass.
