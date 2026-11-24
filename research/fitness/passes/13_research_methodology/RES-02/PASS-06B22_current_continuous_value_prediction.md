# RES-02 / PASS-06B22 — Current continuous-value prediction and estimation equations

Статус: **COMPLETE MICRO-PASS — prediction branch remains RESEARCHING pending final audit**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. current continuous-value prediction definition;
2. zero-horizon / cross-sectional current-outcome architecture;
3. boundary with future continuous prognosis;
4. prediction equation vs directly measured output;
5. prediction-model study vs criterion-validity / method-comparison study;
6. role and limitations of criterion/reference measurement;
7. timing/stability of the current target;
8. development of current-value prediction equations;
9. apparent performance;
10. internal validation;
11. internal-external validation;
12. external validation;
13. calibration-in-the-large / calibration slope / calibration curve;
14. mean bias, MSE/RMSE, MAE, residual variance and R²;
15. why correlation alone is insufficient;
16. role and limits of Bland–Altman/agreement analysis;
17. individual prediction error / prediction uncertainty at taxonomy level;
18. population/device/protocol transportability;
19. current-value model updating/recalibration;
20. body-composition / VO₂max / 1RM translations;
21. structural record.

Не покрывается здесь:

- exact sample-size formulae;
- exact prediction-interval formulae;
- detailed errors-in-variables models;
- formal latent-variable correction for imperfect criterion measures;
- detailed Bland–Altman variants;
- exact method-comparison statistics;
- measurement uncertainty budgets;
- detailed reliability analysis;
- final prediction-branch synthesis.

---

# Sources checked

## 1. Cochrane Prognosis Handbook — Chapter 1

Current official draft checked 2026-11-17.

Status:

> **Draft version (March 2026)** for Version 1.

The current chapter explicitly states:

- diagnostic prediction models have a prediction horizon that is typically zero;
- prognostic models have a non-zero future prediction horizon;
- diagnostic models may estimate:
  - the probability that a current disease/disorder is present;
  - **the current value of an outcome that is otherwise difficult or expensive to measure**;
- the explicit example is current fat mass in children;
- diagnostic prediction studies are conceptually cross-sectional;
- prognostic prediction studies are longitudinal;
- the same broad prediction-model development/evaluation lifecycle largely applies to diagnostic models.

Relevant lines in the current PDF are 391–420.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### PDF tooling note

The PDF was opened and the relevant text was located. The required screenshot call was attempted, but the screenshot backend returned a cache-miss/internal error and could not render the page. The extracted PDF text was available and used.

---

## 2. Hudda et al. — development/validation of current fat-mass prediction

Hudda MT, Fewtrell MS, Haroun D, et al.  
**Development and validation of a prediction model for fat mass in children and adolescents: meta-analysis using individual participant data.**  
BMJ. 2019;366:l4293.

This is the current Cochrane Chapter 1 example for current continuous-value diagnostic prediction.

Design:

- four population-based cross-sectional studies for model development;
- fifth independent study for external validation;
- current fat-free mass/fat mass measured through deuterium dilution;
- current readily available predictors:
  - height;
  - weight;
  - age;
  - sex;
  - ethnicity.

Lifecycle included:

- multivariable model development;
- bootstrap internal validation;
- internal-external cross-validation;
- external validation;
- calibration;
- RMSE;
- R²;
- recalibration.

https://www.bmj.com/content/366/bmj.l4293

---

## 3. Hudda et al. — 19-country external validation

**External validation of a prediction model for estimating fat mass in children and adolescents in 19 countries: individual participant data meta-analysis.**  
BMJ. 2022;378:e071185.

Relevant points:

- current-value model transportability can vary by country/setting;
- performance was assessed using:
  - R²;
  - RMSE;
  - calibration slope;
  - calibration-in-the-large;
  - flexible calibration plots;
- country-specific intercept recalibration improved local calibration.

https://www.bmj.com/content/378/bmj-2022-071185

---

## 4. BMJ 2024 prediction-model development guidance

Efthimiou O, Seo M, Chalkou K, et al.  
**Developing clinical prediction models: a step-by-step guide.**  
BMJ. 2024;386:e078276.

For continuous outcomes, current guidance identifies:

- mean bias;
- mean squared error;
- R²;
- calibration plot/line;
- smooth calibration curve;
- rank correlation as a discrimination/ranking quantity, though less commonly used.

The guidance explicitly separates:

- overall fit;
- discrimination;
- calibration.

https://www.bmj.com/content/386/bmj-2023-078276.full  
https://pmc.ncbi.nlm.nih.gov/articles/PMC11369751/

---

## 5. BMJ 2024 external-validation guidance

Riley RD, Archer L, Snell KIE, et al.  
**Evaluation of clinical prediction models (part 2): how to undertake an external validation study.**  
BMJ. 2024;384:e074820.

Current guidance applies to predictions of continuous values such as:

- blood pressure;
- fat mass.

For continuous outcomes it recommends evaluating:

- R² / overall fit;
- mean squared prediction error;
- calibration across the range of predictions;
- relevant subgroup performance;
- target-population/setting suitability.

https://www.bmj.com/content/384/bmj-2023-074820  
https://pmc.ncbi.nlm.nih.gov/articles/PMC10788734/

---

## 6. Wiecha et al. — VO₂max prediction model external validation

Wiecha S, et al.  
**External validation of VO₂max prediction models based on recreational and elite endurance athletes.**  
PLOS ONE. 2023;18(1):e0280897.

5,260 endurance athletes underwent directly measured CPET VO₂max.

Thirteen previously published equations were evaluated using:

- R²;
- RMSE;
- calibration-in-the-large;
- calibration slope.

The paper is especially useful for the exercise-science boundary because it describes itself using the language of diagnostic prediction-model external validation even though some original literature calls such equations “prognostic”.

https://pmc.ncbi.nlm.nih.gov/articles/PMC9876283/  
https://doi.org/10.1371/journal.pone.0280897

---

## 7. Campa et al. — measured vs estimated body composition

Campa F, Lukaski HC, Moro T, Tinsley GM, Paoli A, Coratella G.  
**What is measured and what is estimated in body composition? A clarification framework for terminology and interpretation.**  
Rev Endocr Metab Disord. 2026;27:933–942.

Current version of record published 3 July 2026.

Key framework:

- distinguish **directly measured whole-body variables** from **model-derived estimates**;
- examples of directly measured outputs:
  - skinfolds;
  - girths;
  - phase angle;
- examples of model-derived estimates:
  - fat mass;
  - fat-free mass;
- classification should follow the variable/output and the estimation process rather than assigning one fixed label to an instrument.

This is important because a device can directly measure an electrical or anthropometric signal while its body-composition output is still model-derived.

https://doi.org/10.1007/s11154-026-10071-4  
https://pubmed.ncbi.nlm.nih.gov/42397485/

---

## 8. COSMIN criterion-validity definition

Current COSMIN Reporting Guideline 2.0 E&E checked.

Criterion validity is defined as:

> the degree to which scores of an outcome measurement instrument adequately reflect a defensible criterion/gold standard.

This is used only as a **measurement-property boundary**, not as a claim that COSMIN PROM methodology automatically applies to every physiological/device equation.

https://media.springernature.com/original/springer-static/esm/art%3A10.1007%2Fs11136-025-03949-4/MediaObjects/11136_2025_3949_MOESM1_ESM.pdf

---

## 9. Taffé — Bland–Altman methodological limitation

Taffé P.  
**When can the Bland & Altman limits of agreement method be used and when it should not be used.**  
J Clin Epidemiol. 2021;137:176–181.

Used only to support the boundary that Bland–Altman is a method-comparison/agreement tool with assumptions and is not a universal substitute for full prediction-model validation.

https://pubmed.ncbi.nlm.nih.gov/33892090/

---

## 10. 1RM evidence — systematic review / IPD meta-analysis

**The Predictive Validity of Individualised Load-Velocity Relationships for Predicting 1RM: A Systematic Review and Individual Participant Data Meta-analysis.**  
2023.

Key finding:

- load-velocity methods tended to overestimate 1RM;
- direct 1RM assessment was recommended where feasible;
- estimated 1RM may still be useful for monitoring when direct testing is impractical.

https://pubmed.ncbi.nlm.nih.gov/37493929/

---

## 11. 1RM evidence — current 2026 validity/reliability review

**Reliability, Device Agreement and Validity of Load-Velocity Profiles: A Systematic Review with Meta-analysis.**  
2026.

Current review distinguishes:

- sensor/device validity and reliability;
- 1RM prediction-model validity.

It reports high average relative validity but emphasizes:

- heterogeneity;
- exercise/device specificity;
- limited measurement-error/agreement analysis.

https://pubmed.ncbi.nlm.nih.gov/42690493/

---

## 12. 1RM example showing high R² but limited interchangeability

**Validity and Reliability of a 3-Point Load-Velocity Profile for Predicting Hex Bar Deadlift 1 Repetition Maximum.**  
2026.

The prediction model explained almost all variance in directly measured 1RM (marginal R² ≈ 0.975), yet limits of agreement were about ±15.7 kg and the authors cautioned against treating predicted and directly measured 1RM as interchangeable.

This is a particularly clear fitness example of:

> strong association / explained variance ≠ acceptable individual agreement.

https://pubmed.ncbi.nlm.nih.gov/42507495/

---

# Part A — Definition: current continuous-value prediction

## 1. Core target

### Established finding
**Confidence: HIGH**

A current continuous-value prediction model estimates an individual's **current numerical outcome value** from predictor information available at approximately the same diagnostic/current-outcome timepoint.

Canonical architecture:

`current predictors at T0 → prediction equation/model → estimated current continuous target at T0`

Examples:

- current fat mass;
- current fat-free mass;
- current VO₂max;
- current 1RM;
- current blood pressure where direct measurement is unavailable/impractical.

---

## 2. Prediction horizon is approximately zero

### Established finding
**Confidence: HIGH**

Cochrane explicitly distinguishes:

- diagnostic/current-outcome prediction:
  - horizon typically zero;
  - cross-sectional;

- prognostic prediction:
  - non-zero future horizon;
  - longitudinal.

### Project rule

The word “prediction” does **not** imply future time.

A model can predict an unobserved current value.

---

# Part B — Current-value prediction vs future continuous prognosis

## 3. Same target variable can belong to either family

Example: VO₂max.

### Current-value prediction

At today's assessment:

> estimate today's VO₂max from current age, sex, body composition and submaximal exercise variables.

Classification:

> current continuous-value diagnostic/current-outcome prediction.

### Future prognosis

At baseline:

> predict VO₂max after 12 weeks of training.

Classification:

> prognostic continuous-outcome prediction.

### Project rule

Classify from:

> **time of the target value relative to the prediction startpoint**,

not from the variable name.

---

# Part C — Cross-sectional architecture

## 4. Current-value study is conceptually cross-sectional

### Established finding
**Confidence: HIGH**

The predictor values and criterion/current target belong to the same substantive assessment episode.

A small temporal separation can be acceptable if the target is stable enough that both measurements represent the same current state.

### Project record

Store:

1. predictor measurement time;
2. criterion/reference measurement time;
3. interval;
4. plausible change during the interval;
5. order effects where relevant.

---

## 5. Order can matter even when target is “current”

### Project synthesis
**Confidence: HIGH**

Examples:

- maximal CPET can create fatigue before another performance test;
- direct 1RM testing can alter subsequent velocity measurements;
- hydration can alter body-composition estimates over short periods.

Thus cross-sectional does not mean:

> timing/order is irrelevant.

---

# Part D — Measured input vs estimated output

## 6. A device may measure one variable and estimate another

### Established finding
**Confidence: HIGH**

Campa et al. 2026 explicitly distinguish:

### Directly measured output

Examples:

- skinfold thickness;
- girth;
- phase angle;
- bar velocity.

### Model-derived estimate

Examples:

- fat mass;
- fat-free mass;
- estimated 1RM derived from load-velocity relation.

### Project rule

Do not call an output “directly measured” merely because it appears on a device screen.

Trace the chain:

`physical signal → measured variable → equation/model → inferred target`.

---

# Part E — Prediction equation vs measurement method

## 7. A fixed equation can be embedded inside a measurement method

### Project synthesis
**Confidence: HIGH**

Example:

A BIA device:

1. directly measures impedance-related electrical signals;
2. applies a proprietary equation;
3. outputs estimated fat-free mass.

The final output is:

> model-derived current-value estimate.

The overall device+equation workflow may also be studied as a measurement method.

---

## 8. These are overlapping perspectives, not mutually exclusive labels

### Project rule
**Confidence: HIGH**

The same paper can legitimately contain:

- prediction-model evidence;
- criterion-validity/agreement evidence.

Classification should preserve the **inferential target** rather than forcing one label.

---

# Part F — Prediction-model study vs criterion-validity study

## 9. Prediction-model development question

Typical question:

> Can multiple readily available variables be combined into a function that estimates the individual's current target value?

Core features:

- predictors selected/combined;
- weights/coefficients learned;
- model specification created;
- overfitting possible;
- internal validation needed;
- external transportability matters.

Classification:

> prediction-model development.

---

## 10. Prediction-model external validation question

Typical question:

> Does this fixed equation estimate current target values accurately in new individuals?

Core features:

- model is already fully specified;
- predictors are measured;
- prediction generated unchanged;
- observed current criterion value obtained;
- prediction performance evaluated.

Classification:

> prediction-model external validation.

---

## 11. Criterion-validity / method-comparison question

Typical question:

> Does this instrument/method adequately reflect a defensible criterion/reference measure of the same current construct?

Core emphasis can include:

- mean bias;
- agreement;
- limits of agreement;
- measurement error;
- interchangeability;
- device/protocol-specific validity.

Classification:

> measurement-property / method-comparison evidence.

---

## 12. Boundary rule

### Project synthesis
**Confidence: HIGH**

If the study **learns/tunes a multivariable equation**, it necessarily contains prediction-model development.

If the study applies a **fixed equation** in new participants, it can simultaneously provide:

- external prediction-model validation;
- criterion-validity/agreement evidence for the resulting measurement method.

These perspectives answer overlapping but not identical questions.

---

# Part G — A fixed conversion formula is not always a full clinical prediction model

## 13. Important terminology qualification

### Project rule
**Confidence: MODERATE-HIGH**

Strict Cochrane/TRIPOD prediction-model definitions emphasize combining multiple predictors.

Some sports-science “prediction equations” are simple:

- one predictor plus load;
- one transformation;
- a fixed conversion formula.

Such an equation can still be a **predictive/estimation equation**, but it should not automatically be forced into the full multivariable clinical-prediction-model taxonomy.

### Classification approach

Record separately:

1. number/type of inputs;
2. whether coefficients were learned from data;
3. whether multivariable model development occurred;
4. whether the object functions primarily as:
   - prediction model;
   - measurement conversion equation;
   - embedded device algorithm.

---

# Part H — Criterion/reference measurement

## 14. The target value must be operationally observed somehow

### Established finding
**Confidence: HIGH**

To develop/evaluate a current-value equation, the study needs an observed target/reference value.

Examples:

- directly measured CPET VO₂max;
- direct 1RM test;
- deuterium-dilution fat-free mass;
- DXA-derived body-composition reference.

---

## 15. Reference is not automatically truth

### Established measurement principle
**Confidence: HIGH**

A reference method can itself have:

- random error;
- systematic bias;
- protocol dependency;
- device/software dependency;
- biological short-term variability.

### Project rule

Use:

> criterion/reference measurement

unless a genuine gold standard is defensible.

Do not casually equate:

> reference value = error-free latent truth.

---

## 16. Observed prediction error contains reference-method error

### Project inference
**Confidence: HIGH**

If observed target value (Y_{ref}) contains measurement error, then:

`predicted − observed reference`

contains both:

- prediction-model error;
- reference-measurement error.

### Consequence

A model cannot be judged more precisely than the criterion permits without an explicit measurement-error model.

Detailed errors-in-variables methodology is deferred.

---

# Part I — Reference protocol is part of the target definition

## 17. “VO₂max” or “body fat” is not sufficient metadata

### Established practical principle
**Confidence: HIGH**

Reference values can depend on:

- CPET protocol;
- ergometer type;
- gas-analysis system;
- 1RM exercise technique/range of motion;
- DXA manufacturer/software;
- hydration/preparation;
- positioning;
- time of day.

### Project rule

The target is:

> construct + operational reference protocol.

Transportability across protocols must be demonstrated, not assumed.

---

# Part J — Development lifecycle

## 18. PASS-06B5 development principles transfer

### Established finding
**Confidence: HIGH**

Current-value prediction development can include:

- candidate predictors;
- transformations;
- nonlinear terms;
- interactions;
- feature engineering;
- variable selection;
- model fitting;
- shrinkage/penalization;
- algorithm/hyperparameter selection.

### Project rule

The final equation/model is the complete reproducible prediction function.

---

## 19. Cross-sectional data can still overfit

### Established finding
**Confidence: HIGH**

Absence of longitudinal follow-up does not remove development optimism.

A current-value equation can overfit because:

- sample is small;
- too many candidate predictors are considered;
- nonlinear terms are selected;
- subgroups are searched;
- equations are chosen after inspecting the same data.

---

# Part K — Apparent performance

## 20. Same-data fit is apparent performance

### Established finding
**Confidence: HIGH**

If the equation is developed and evaluated in the same observations without optimism correction:

> performance is apparent.

High:

- R²;
- correlation;
- low RMSE

in development data does not establish transportability.

---

# Part L — Internal validation

## 21. Full-pipeline bootstrap/CV principles transfer

### Established finding
**Confidence: HIGH**

Hudda et al. repeated their model-selection process within bootstrap resamples.

### Cross-pass rule

PASS-06B6 applies:

> every data-dependent development step belongs inside resampling.

---

# Part M — Internal-external validation

## 22. Cluster/study/site heterogeneity can be tested

### Established finding
**Confidence: HIGH**

Hudda et al. used internal-external cross-validation across multiple cross-sectional studies.

This is structurally analogous to PASS-06B7 IECV:

- hold out one natural study/cluster;
- develop on others;
- evaluate in held-out cluster;
- rotate.

### Project use

For fitness equations, natural clusters can include:

- sites;
- labs;
- sports;
- devices;
- sexes;
- countries;
- data-collection studies.

Do not confuse subgroup splitting with genuine independent clusters unless the design supports it.

---

# Part N — External validation

## 23. Fixed equation must be applied unchanged first

### Established finding
**Confidence: HIGH**

External validation requires:

`fixed equation → new relevant individuals → predicted current values → observed criterion values → performance`

If coefficients are re-estimated first, the study is no longer pure external validation of the original equation.

---

## 24. Recalibration creates a new version

### Cross-pass rule
**Confidence: HIGH**

Hudda et al. 2022 recalibrated intercepts for countries after evaluating the original model.

This follows PASS-06B8:

`v1 external validation → recalibration → v2 local version`

The recalibrated model requires separate evaluation evidence.

---

# Part O — Continuous prediction performance architecture

## 25. Mean bias / calibration-in-the-large

### Established finding
**Confidence: HIGH**

Question:

> Are predictions systematically too high or too low on average?

For continuous outcomes this can be represented by:

- mean observed minus mean predicted value;
- calibration-in-the-large/intercept in a calibration model.

Ideal systematic difference:

> approximately zero.

---

## 26. Calibration slope

### Established finding
**Confidence: HIGH**

Question:

> Is the spread of predicted values appropriate across the observed target range?

Ideal:

> slope = 1.

A slope below/above 1 indicates mismatch in prediction spread.

### Important nuance

Calibration slope should be interpreted together with:

- calibration-in-the-large;
- calibration curve;
- error metrics.

---

## 27. Calibration curve

### Established finding
**Confidence: HIGH**

A flexible curve of observed vs predicted continuous values can reveal:

- local overestimation;
- local underestimation;
- nonlinear miscalibration.

### Project rule

Do not call a continuous model “calibrated” from mean bias alone.

---

# Part P — Prediction error

## 28. MSE / RMSE

### Established finding
**Confidence: HIGH**

These quantify the magnitude of prediction error.

RMSE is expressed in target-outcome units and penalizes larger errors more heavily.

Examples:

- kg fat mass;
- mL·kg⁻¹·min⁻¹ VO₂max;
- kg 1RM.

---

## 29. MAE

### Established statistical interpretation
**Confidence: HIGH**

MAE summarizes the average absolute magnitude of individual errors.

It is less dominated by extreme errors than squared-error metrics.

### Project rule

Metric choice must remain explicit.

Do not translate RMSE into MAE or vice versa without actual data.

---

## 30. Residual variance

### Established finding
**Confidence: HIGH**

BMJ external-validation guidance treats residual variance/error dispersion as an important continuous-outcome performance target.

### Practical meaning

Even if average bias is zero, individual predictions may be too imprecise for use.

---

# Part Q — R²

## 31. R² is useful but not sufficient

### Established finding
**Confidence: HIGH**

R² reports the proportion of outcome variation explained in the evaluation sample.

High R² can coexist with:

- systematic bias;
- poor local calibration;
- clinically large individual errors.

### Fitness example

A 2026 hex-bar 1RM study reported R² around 0.975 but limits of agreement around ±15.7 kg and explicitly cautioned against interchangeability with direct 1RM.

### Project rule

Never infer:

> “high R² = accurate enough for individual substitution”.

---

# Part R — Correlation alone is insufficient

## 32. Correlation measures association/ranking, not equality

### Established methodological principle
**Confidence: HIGH**

Two methods can correlate almost perfectly even if one:

- consistently overestimates;
- consistently underestimates;
- compresses or exaggerates the range.

### Example

If:

`predicted = observed + 10 kg`

Pearson correlation can be 1 despite a systematic 10 kg error.

### Project rule

Correlation is not a substitute for:

- calibration;
- prediction error;
- agreement/interchangeability assessment.

---

# Part S — ICC/concordance also require interpretation

## 33. Agreement-type coefficients can add information but are not complete prediction-model validation

### Project synthesis
**Confidence: HIGH**

ICC/concordance may be useful in measurement-method studies.

But they do not by themselves show:

- calibration across the range;
- transportability to new populations;
- model-version independence;
- prediction error distribution.

### Project rule

Record them as measurement/agreement quantities, not as a complete prediction-model evidence package.

---

# Part T — Bland–Altman / limits of agreement

## 34. Bland–Altman answers an interchangeability/agreement question

### Established methodological principle
**Confidence: HIGH**

Pairwise difference analysis can show:

- mean difference/bias;
- spread of differences;
- limits of agreement.

This is especially relevant when asking:

> Can estimated values substitute for direct measurement at the individual level?

---

## 35. Bland–Altman is not full prediction-model validation

### Project synthesis
**Confidence: HIGH**

A Bland–Altman plot does not by itself establish:

- calibration function across the predictor range;
- external transportability;
- optimism correction;
- independent validation;
- model version integrity.

### Project rule

For a fixed current-value prediction model:

- prediction-model validation metrics;
- and method-agreement metrics

may both be useful.

They are complementary.

---

## 36. Agreement is not identical to calibration

### Important distinction
**Confidence: HIGH**

Continuous prediction calibration asks whether observed values align appropriately with predicted values across the prediction range.

Method agreement asks whether two methods are sufficiently close to be used interchangeably for the intended application.

A model can have good average calibration but individual errors too wide for interchangeability.

---

# Part U — Individual prediction uncertainty

## 37. Average model performance does not give one person's uncertainty

### Established prediction principle
**Confidence: HIGH**

Metrics such as:

- R²;
- RMSE;
- mean bias

summarize group-level performance.

For individual decisions, users may also need:

- prediction interval;
- conditional error distribution;
- probability of exceeding a practically meaningful error bound.

### Scope decision

Exact prediction-interval methods are statistical and deferred.

But every current-value model record should note whether individual uncertainty is available.

---

# Part V — Criterion quality can cap apparent performance

## 38. Noisy reference measurement creates an evaluation ceiling

### Project inference
**Confidence: HIGH**

If directly measured VO₂max or 1RM varies meaningfully across repeated tests, then an equation cannot reproduce an unobservable perfectly stable value.

Observed disagreement partly reflects:

- equation error;
- physiological/test variability;
- criterion measurement error.

### Project rule

When prediction error approaches reference-method repeatability/error, interpret “model error” cautiously.

This does not make the equation automatically valid; it clarifies what is being compared.

---

# Part W — Transportability

## 39. Population transportability

### Established finding
**Confidence: HIGH**

Performance can shift across:

- age;
- sex;
- ethnicity;
- body size;
- training status;
- sport;
- clinical status.

### Evidence

VO₂max equations performed differently across athlete/training subgroups.

BIA equations can perform differently in resistance-trained vs general-population participants.

---

## 40. Device transportability

### Project rule
**Confidence: HIGH**

If predictors depend on a device:

- accelerometer;
- BIA analyzer;
- velocity sensor;
- gas-analysis system;

then changing hardware/firmware/processing can change predictor meaning.

The equation should not automatically be transported across devices.

---

## 41. Protocol transportability

### Project rule
**Confidence: HIGH**

Examples:

- treadmill vs cycle CPET;
- squat depth/range of motion;
- free-weight vs Smith-machine lift;
- repetition tempo;
- BIA hydration/position protocol.

A prediction equation is tied to its measurement protocol unless transportability has been shown.

---

# Part X — Body composition classification

## 42. Measured vs estimated body-composition outputs

### Established finding
**Confidence: HIGH**

Campa et al. 2026 provide a useful distinction:

1. directly measured whole-body variables;
2. model-derived body-composition estimates;
3. hybrid pathways.

### Project consequence

Example:

> BIA phase angle is directly measured/derived from electrical signal parameters.

But:

> BIA fat-free mass is typically model-derived through an equation.

The scientific evidence for those outputs is not identical.

---

# Part Y — VO₂max translation

## 43. Current VO₂max estimate

Inputs:

- age;
- sex;
- body composition;
- resting or submaximal exercise variables.

Target:

> directly measured current CPET VO₂max.

Classification:

> current continuous-value prediction model / estimation equation.

### Evaluation

Need more than correlation:

- mean bias;
- RMSE/MAE;
- R²;
- calibration-in-the-large;
- calibration slope/curve;
- relevant subgroup/site/protocol transportability.

---

## 44. Future VO₂max

Inputs at baseline.

Target:

> VO₂max after future training period.

Classification:

> prognostic continuous-outcome prediction.

Same output units, different time architecture.

---

# Part Z — 1RM translation

## 45. Current 1RM estimation from submaximal performance

Inputs may include:

- submaximal load;
- repetitions-to-failure;
- bar velocity;
- individual load-velocity slope;
- age/sex/body-composition features.

Target:

> current directly tested 1RM.

Classification:

> current-value estimation/prediction.

---

## 46. High association does not establish substitution

### Current fitness evidence
**Confidence: HIGH**

Current 1RM literature repeatedly shows that high:

- correlation;
- ICC;
- R²

can coexist with meaningful individual prediction error.

### Project rule

For programming load from estimated 1RM, absolute error in kg/%1RM matters directly.

---

# Part AA — Criterion-validity overlap in 1RM/body composition

## 47. Why sports papers often use “validity”

### Project synthesis
**Confidence: HIGH**

In sports science, a fixed estimation method is often treated as a measurement method and compared with:

- direct 1RM;
- DXA;
- CPET;
- laboratory criterion.

That legitimately creates criterion-validity/agreement evidence.

### But

If the equation was developed/tuned in that dataset, the paper also contains prediction-model development and apparent/internal-validation issues.

### Project rule

Extract both layers where present.

---

# Part AB — Structural record produced by PASS-06B22

## 48. Current continuous-value prediction record

For each study, record:

1. model/equation identifier and version;
2. scientific purpose:
   - current-value estimation;
   - future continuous prognosis;
   - measurement criterion-validity;
   - hybrid;
3. target continuous construct/value;
4. target units;
5. intended-use population;
6. intended-use setting;
7. prediction/start time T0;
8. target/reference measurement time;
9. effective prediction horizon:
   - zero/current;
   - non-zero/future;
10. interval between predictors and target/reference;
11. target plausibly stable across interval?;
12. order of predictor/reference tests;
13. direct fatigue/treatment/order effects possible?;
14. input variables;
15. directly measured inputs?;
16. device-derived/model-derived inputs?;
17. output directly measured or model-derived?;
18. equation/model family;
19. number of predictors;
20. coefficients learned from data?;
21. model development performed?;
22. predictor/transform selection performed?;
23. apparent performance?;
24. internal validation?;
25. full pipeline repeated in resampling?;
26. IECV/natural-cluster validation?;
27. fixed external validation?;
28. recalibration/update performed?;
29. updated model version separated?;
30. criterion/reference method;
31. criterion treated as gold standard or reference?;
32. criterion/reference reliability/error characterized?;
33. same reference protocol across participants?;
34. same reference protocol across development/validation?;
35. reference device/software version;
36. mean bias / calibration-in-the-large;
37. calibration slope;
38. flexible calibration curve;
39. MSE/RMSE;
40. MAE;
41. residual variance / standard error of estimate;
42. R²;
43. correlation/rank measure;
44. ICC/concordance measure;
45. Bland–Altman / limits of agreement;
46. individual prediction interval/uncertainty?;
47. clinically/practically acceptable error defined?;
48. subgroup performance;
49. population transportability;
50. device transportability;
51. protocol transportability;
52. intended use:
    - surveillance/group estimate;
    - individual monitoring;
    - load prescription;
    - diagnostic/clinical decision;
    - research covariate;
53. direct measurement replacement claimed?;
54. evidence sufficient for interchangeability?;
55. final project classification;
56. unresolved measurement/prediction/transportability issues.

---

# Practical rules produced by PASS-06B22

1. Diagnostic/current-outcome prediction is broader than current disease probability; it can estimate a current continuous value.
2. Current continuous-value models typically have a prediction horizon of approximately zero and are conceptually cross-sectional.
3. Future prediction of the same continuous variable is prognostic and longitudinal.
4. The target variable name does not determine diagnostic vs prognostic classification; target timing does.
5. A directly measured input can feed a model-derived output.
6. Device output should be traced through the measurement/estimation chain rather than assumed to be direct.
7. Body-composition variables such as fat mass/FFM are often model-derived even when produced automatically by a device.
8. Prediction-model and measurement-property perspectives can overlap in the same study.
9. Learning/tuning a multivariable equation is prediction-model development.
10. Applying a fixed equation to new participants is prediction-model external validation.
11. Comparing a method/output against a defensible criterion can also provide criterion-validity/agreement evidence.
12. A fixed simple conversion equation is not automatically a full multivariable clinical prediction model; record its actual structure and inferential purpose.
13. The criterion/reference method is not automatically error-free truth.
14. Observed prediction error can contain both model error and reference-measurement error.
15. Reference measurement protocol/device/software are part of the target definition.
16. Cross-sectional current-value models can overfit just like prognostic models.
17. Apparent performance is not independent validation.
18. Full-pipeline bootstrap/CV principles apply to current-value equation development.
19. IECV can assess heterogeneity/transportability across natural studies/sites/labs.
20. External validation should apply the fixed original equation unchanged first.
21. Recalibration creates a new model version.
22. Continuous prediction performance is multidimensional.
23. Mean bias/calibration-in-the-large detects systematic offset.
24. Calibration slope assesses whether prediction spread is appropriate.
25. Flexible calibration curves reveal local miscalibration.
26. RMSE/MSE quantify prediction error and penalize larger errors.
27. MAE quantifies average absolute error.
28. Residual variance/error dispersion matters for individual usefulness.
29. R² is an explained-variation measure and is not sufficient evidence of individual accuracy.
30. High correlation can coexist with large systematic bias.
31. Correlation alone is not a validation package for current-value equations.
32. ICC/concordance can support agreement assessment but do not replace calibration, error and transportability assessment.
33. Bland–Altman/limits-of-agreement analyses answer an agreement/interchangeability question and can complement prediction-model validation.
34. Bland–Altman analysis alone does not establish prediction-model calibration, optimism control or external transportability.
35. Good mean calibration can coexist with individual errors too wide for substitution of direct measurement.
36. Group-level model performance does not quantify uncertainty for a particular individual's estimate.
37. Individual prediction uncertainty should be recognized when current estimates guide individual decisions.
38. Population, device and protocol transportability are separate evidence questions.
39. Current VO₂max prediction equations are current-value models when they estimate today's measured VO₂max.
40. A model predicting VO₂max after future training is prognostic even if it uses the same units and predictors.
41. Current 1RM estimation equations belong to the current-value branch when the target is the presently measurable 1RM.
42. For training prescription, absolute error in kg/%1RM matters even when relative association is strong.
43. Sports-science “validity” papers can simultaneously contain measurement-agreement evidence and prediction-model evidence.
44. Minimum project architecture:
    **current T0 + continuous target + measured-vs-estimated output chain + criterion/reference protocol + model/equation development phase + internal/external validation + calibration + absolute prediction error + agreement/interchangeability + population/device/protocol transportability**.

---

# Boundary matrix

| Question | Primary classification |
|---|---|
| Estimate today's VO₂max from today's submaximal data | Current continuous-value prediction |
| Predict VO₂max after 12 weeks | Prognostic continuous prediction |
| Develop an equation from anthropometry to estimate current fat mass | Current-value prediction-model development |
| Apply fixed fat-mass equation in a new country | External validation of current-value prediction model |
| Compare fixed BIA-derived FFM with DXA for agreement | Measurement criterion-validity/method comparison; may also be model validation if the equation is fixed and individual predictions are evaluated |
| Develop BIA equation against DXA in the same data | Prediction-model development + measurement-reference framework |
| Compare predicted 1RM with direct 1RM using LoA | Current-value prediction validation + agreement/interchangeability layer |
| Assess repeated direct 1RM test reliability | Measurement reliability, not prediction-model validation |

---

# Evidence limitations

1. Terminology is inconsistent in sports/exercise science: “prediction”, “estimation”, “validity”, “agreement”, “cross-validation” and “criterion validity” are often used for overlapping structures.
2. Cochrane’s current diagnostic-prediction definition is broader than the short public TRIPOD+AI diagnostic definition because Cochrane explicitly includes current continuous-value estimation.
3. COSMIN criterion-validity terminology is strongest for outcome measurement instruments and should not be mechanically transferred to every device/prediction equation without checking applicability.
4. Reference methods such as DXA and even direct performance tests have measurement error and protocol dependence.
5. Continuous prediction-model validation guidance is less frequently applied in sports science than correlation/agreement statistics.
6. Bland–Altman limits of agreement have assumptions and are not universally appropriate without checking the data-generating structure.
7. Individual prediction intervals/conditional uncertainty deserve later statistical treatment.
8. No universal acceptable RMSE/MAE/LoA threshold exists; acceptable error is use-case dependent.

---

# Gap status after PASS-06B22

The blocking gap identified by PASS-06B21 is now covered at taxonomy level.

This **does not automatically authorize synthesis**.

Workflow requires one short final closure/gap audit across the prediction branch.

## Next micro-pass

**RES-02 / PASS-06B23 — final prediction-branch closure/gap audit after PASS-06B22: verify that current binary/multicategory/continuous diagnostic prediction, future prognosis, complex-event outcomes, multiple outcomes, sampling, dynamic prediction, model lifecycle and measurement-boundary crosswalk are all represented without remaining blocking design-family gaps; decide whether prediction-branch synthesis is finally permitted.**

STOP after this saved micro-pass.
