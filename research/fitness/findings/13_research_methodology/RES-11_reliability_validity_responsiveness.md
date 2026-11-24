# RES-11 — Reliability, validity, measurement error и responsiveness

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как определить, пригоден ли measurement tool/protocol для прогресса, исследования и индивидуальных решений, и как отличить true change от measurement noise.

### Question type
Measurement / validation / methodological.

### Critical outcomes
1. Correct distinction reliability vs validity vs measurement error vs responsiveness.
2. Correct interpretation of ICC, agreement, SEM/SDC/MDC and limits of agreement.
3. Recognition that high reliability does not prove validity.
4. Recognition that responsiveness is about detecting change in target construct.
5. Define project measurement-acceptance framework.

### Closure criterion
Есть operational measurement framework sufficient for later strength, circumference, body-composition, RIR and wearable evaluation.

---

## 1. Four different questions

### Reliability
Насколько repeated measurements preserve ranking/differences between people when true state has not changed?

### Measurement error / agreement
Насколько repeated scores differ numerically when no true change occurred?

### Validity
Насколько instrument measures the construct it claims to measure?

### Responsiveness
Насколько instrument can detect meaningful change over time in that construct?

These are distinct properties.

## 2. Reliability

COSMIN definition:
proportion of total measurement variance attributable to true differences between subjects rather than measurement error.

Common forms:
1. test–retest;
2. inter-rater;
3. intra-rater;
4. internal consistency for multi-item scales.

High reliability means individuals are consistently differentiated.

It does **not** automatically mean:
- readings are close in absolute units;
- instrument is valid;
- small changes are detectable.

## 3. Agreement / measurement error

Agreement asks:
> how close are repeated measurements in actual units?

Examples:
- ±2 mm circumference;
- ±3 kg dynamometer;
- ±2 repetitions.

Important metrics:
1. Standard Error of Measurement (SEM);
2. Smallest Detectable Change (SDC/MDC);
3. Limits of Agreement (LoA);
4. coefficient of variation where appropriate.

For personal progress, agreement/error is often more directly useful than reliability coefficient.

## 4. Reliability vs agreement example

Suppose participants differ greatly in strength:
20, 40, 60, 80 kg.

Measurement device varies ±5 kg.

Ranking remains stable → high ICC.

But ±5 kg error may be too large to detect small 2 kg progress.

Thus:
**high ICC can coexist with practically poor agreement.**

## 5. ICC

Intraclass Correlation Coefficient quantifies relative reliability under a specified model.

Critical:
ICC depends on:
1. between-person variability;
2. measurement error;
3. model/type;
4. raters/occasions;
5. whether consistency or absolute agreement targeted.

Do not report “ICC = 0.90” without knowing ICC type/model/context.

A heterogeneous sample can inflate ICC because between-person variance is large.

## 6. Pearson correlation is not agreement

Two methods can correlate almost perfectly while one is systematically 10% higher.

Correlation measures association/ranking, not numerical agreement.

Therefore:
- Pearson r is not sufficient for method agreement;
- use appropriate agreement methods such as LoA/ICC depending question.

## 7. Limits of Agreement

Bland–Altman-type limits characterize expected distribution of differences between repeated methods/measurements.

Useful for:
- method comparison;
- repeatability;
- absolute error.

Need inspect:
1. mean bias;
2. lower/upper LoA;
3. proportional bias;
4. heteroscedasticity.

A narrow average bias does not guarantee narrow individual error.

## 8. Standard Error of Measurement

SEM estimates typical measurement error in original units or scale-derived units depending formulation.

Useful to translate reliability into individual-score uncertainty.

Do not confuse:
- SEM measurement error;
- standard error of sample mean/statistical estimate.

Same abbreviation, different context.

Project notation:
- use **SEM_measurement** when ambiguity exists.

## 9. Smallest Detectable Change / MDC

SDC/MDC:
magnitude of change that exceeds expected measurement error with specified confidence.

Concept:
if observed change < MDC,
cannot confidently distinguish from measurement noise at individual level.

But:
MDC ≠ minimal important change.

A change can:
- be statistically detectable but not meaningful;
- be meaningful in principle but instrument too noisy to detect.

## 10. Minimal Important Change

MIC:
smallest change considered important to participant/decision.

Measurement usefulness improves when:
**measurement error / SDC < meaningful-change threshold.**

COSMIN explicitly compares SDC/LoA with MIC in measurement-error evaluation.

For fitness metrics, validated MIC often does not exist.

Then project must define decision threshold separately and label it heuristic.

## 11. Validity

Validity:
degree to which instrument measures intended construct.

Major forms:

1. content validity;
2. construct validity;
3. criterion validity;
4. structural validity for multi-item scales;
5. cross-cultural validity/measurement invariance.

Not every physical-performance measure needs every psychometric property.

## 12. Content validity

For questionnaires/scales:
does content adequately represent construct?

COSMIN treats content validity as especially fundamental for PROMs.

Example:
an “exercise adherence” questionnaire that only asks motivation but not actual completion has weak construct coverage.

## 13. Criterion validity

Compare instrument to accepted gold/reference standard.

Examples:
- wearable HR vs ECG/reference chest strap;
- consumer body composition vs stronger reference method;
- device velocity vs validated encoder.

Issue:
true gold standard may not exist.

When no gold standard exists, construct validity is more appropriate.

## 14. Construct validity

Tests whether measurement behaves according to hypotheses implied by construct.

Methods:
1. convergent validity;
2. discriminant validity;
3. known-groups hypotheses;
4. expected correlations.

Important:
correlation with another imperfect measure is not automatic validation.

## 15. Responsiveness

COSMIN:
ability to detect change over time in construct to be measured.

A valid static measure may still be poorly responsive if:
- measurement error large;
- ceiling/floor effects;
- scale insensitive;
- expected change small.

For progress tracking, responsiveness is essential.

## 16. Sensitivity vs responsiveness

Avoid terminology confusion.

“Sensitive” can mean:
- diagnostic sensitivity;
- change sensitivity;
- statistical sensitivity.

Project uses:
- **diagnostic sensitivity/specificity** only for classification;
- **responsiveness** for change detection.

## 17. Floor and ceiling effects

If many participants near minimum/maximum:
instrument may fail to detect worsening/improvement.

Examples:
- easy push-up test in strong trainee;
- maximal score on simple balance test;
- 3 kg dumbbell test becoming trivially easy.

Floor/ceiling affects responsiveness and usefulness.

## 18. Familiarization and learning

Measurement can change because participant learns test.

Especially:
- 1RM;
- balance;
- novel movement;
- repeated RIR estimation;
- reaction tasks.

Need:
1. familiarization sessions;
2. stable protocol;
3. repeat baseline if needed.

Otherwise “progress” partly measurement learning.

## 19. Standardization

Reliability is protocol-specific.

Must define:
1. equipment;
2. calibration;
3. warm-up;
4. position;
5. ROM;
6. tempo;
7. instructions;
8. rest;
9. time of day where relevant;
10. assessor;
11. camera angle;
12. nutrition/hydration where relevant.

A tool validated under one protocol may be less reliable under another.

## 20. Inter-rater vs intra-rater

### Inter-rater
Can different assessors reproduce score?

### Intra-rater
Can same assessor reproduce score?

Home/self-measurement often mainly needs intra-rater consistency.

But if AI/coach/video evaluation later involved, inter-rater relevance rises.

## 21. Reliability is population-dependent

ICC can change with sample heterogeneity.

A tool may show:
- high ICC in mixed novices/advanced;
- lower ICC in homogeneous advanced group.

Because between-person variance differs.

Therefore reliability estimate must be interpreted in target population.

## 22. Measurement error can be heteroscedastic

Error may increase with measurement magnitude.

Example:
heavier lifts may have larger kg error.

Then:
- raw SEM may be inappropriate across range;
- CV/log-scale approaches may help.

Need inspect plots/data, not assume constant error.

## 23. Coefficient of Variation

CV = SD / mean × 100% in relevant contexts.

Useful for relative measurement variability when:
- values positive;
- error proportional to magnitude.

Can be misleading near zero or with unsuitable distributions.

## 24. Responsiveness to true physiological change

For hypertrophy metric:
question is not only “can we repeat measurement?”

Need:
1. expected biological change magnitude;
2. measurement error;
3. anatomical-site variation;
4. hydration/glycogen effects;
5. operator variability.

If expected 8-week change ≈ measurement noise,
metric may be poor for individual decisions even if research averages detect effect.

## 25. Measurement validity is purpose-specific

Same tool can be acceptable for:
- group research mean;
but poor for:
- individual decision.

Example:
smart scale body-fat % may track broad population trends but individual daily estimates may be too noisy/bias-prone for small changes.

Need specify intended use:
1. screening;
2. diagnosis;
3. ranking;
4. change tracking;
5. intervention outcome;
6. personal decision.

## 26. Exercise examples

### Circumference
Need:
- exact landmark;
- tape tension;
- posture;
- pump status;
- repeatability.

A 0.5 cm change means little if typical error is 0.6 cm.

### 1RM
High test–retest reliability after familiarization can make useful strength metric.

But learning effects matter early.

### RIR
May be reasonably useful at group/experienced levels but individual accuracy varies by load/exercise/training status.

Needs separate validation review.

### Consumer wearable
High correlation with reference does not prove agreement or responsiveness.

## 27. Measurement selection hierarchy

For project use:

1. Does measure represent target construct? (**validity**)
2. Can protocol be reproduced? (**reliability**)
3. How large is absolute error? (**agreement/error**)
4. Can it detect expected change? (**responsiveness**)
5. Is change meaningful? (**decision threshold**)
6. Is burden/cost acceptable? (**feasibility**)

COSMIN similarly emphasizes measurement properties plus feasibility in instrument selection.

## 28. Project acceptance classes

### A — Decision-grade
- construct adequately measured;
- reliability adequate;
- error below relevant decision threshold;
- responsive enough;
- feasible.

### B — Trend-grade
- useful for repeated broad trend;
- too noisy for small individual decisions.

### C — Context-only
- descriptive/supporting;
- not sufficient alone for progression decision.

### D — Reject
- invalid construct or unacceptable error for intended use.

This classification is project-specific.

## 29. Project measurement record

For every metric/tool:

1. Construct.
2. Intended decision.
3. Protocol.
4. Population.
5. Reliability estimate + model.
6. Absolute error/agreement.
7. Validity evidence.
8. Responsiveness.
9. Familiarization requirement.
10. Meaningful threshold.
11. Floor/ceiling.
12. Feasibility.
13. Acceptance class.

## 30. Confidence

### HIGH
- reliability, measurement error, validity and responsiveness are distinct properties;
- high reliability does not prove validity or small absolute error;
- correlation alone does not establish agreement;
- responsiveness concerns detection of change in target construct;
- measurement usefulness depends on intended purpose/population/protocol.

### MODERATE
- specific numeric thresholds such as ICC ≥0.70 are context-dependent; COSMIN uses such criteria for its defined instrument-evaluation contexts, but the project will not universalize one cutoff to all physical-performance measurements.

### PRACTICAL_HEURISTIC
- A/B/C/D project acceptance classes and measurement record.

## 31. Sources

1. COSMIN official guidance for selecting outcome measurement instruments.  
   https://www.cosmin.nl/finding-right-tool/select-best-measurement-instrument/

2. COSMIN guideline for selecting outcome measurement instruments, current publication resources.  
   https://www.cosmin.nl/wp-content/uploads/COSMIN-guideline-selecting-outcome-measurement-COS.pdf

3. COSMIN Reporting Guideline for studies on measurement properties, version 2.0 / 2025 publication.  
   https://www.cosmin.nl/wp-content/uploads/Reporting-guideline-for-studies-on-measurement-properties_final.pdf

4. COSMIN Criteria for Good Measurement Properties, version 2.0.  
   https://www.cosmin.nl/wp-content/uploads/COSMIN-Criteria-for-good-measurement-properties-version-2.0.pdf

5. GRRAS — Guidelines for Reporting Reliability and Agreement Studies.  
   https://www.equator-network.org/wp-content/uploads/2012/12/GRRAS-checklist-for-reporting-of-studies-of-reliability-and-agreement.pdf

## 32. Next dependencies

- RES-12 exercise-specific measurement issues;
- TST-18 measurement error;
- TST-24 minimal home stack.
