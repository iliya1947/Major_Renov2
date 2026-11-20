# RES-02 / PASS-06B12 — Dynamic and landmark prediction structures

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. static vs dynamic prognosis;
2. repeated prediction times;
3. landmark time as a renewed prediction startpoint;
4. event-free / at-risk conditioning at the landmark;
5. time-updated predictors;
6. longitudinal predictor history;
7. landmarking;
8. joint longitudinal–time-to-event modelling at taxonomy level;
9. other dynamic-prediction families at recognition level;
10. fixed final horizon vs sliding horizon window;
11. why performance at different landmarks/horizons is not automatically comparable;
12. leakage boundary for longitudinal data;
13. dynamic factual prediction under observed management;
14. boundary between dynamic factual prediction and counterfactual treatment-strategy prediction;
15. development/validation implications for repeated predictions;
16. structural record for dynamic prediction studies.

Не покрывается здесь:

- exact landmark likelihoods;
- landmark supermodel formulas;
- joint-model likelihood / random-effects mathematics;
- multistate-model details;
- recurrent-event dynamic prediction;
- exact dynamic AUC/Brier formulas;
- informative visit-process modelling;
- detailed missing longitudinal data methods;
- competing-risk dynamic prediction in depth;
- dynamic treatment regimes;
- causal g-methods;
- continual online model retraining;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapters 1–3

Current official Cochrane draft material checked 2026-11-17.

Relevant framework:

- prognosis is longitudinal from a scientifically defined startpoint to a future prediction horizon;
- prediction-model performance depends on prediction horizon;
- time-to-event predictions are functions of time;
- study setting/calendar time and care context affect prognosis and model performance.

The currently available Cochrane Chapters 1–3 do **not** provide a detailed taxonomy of landmarking vs joint-model dynamic prediction. Therefore method-specific conclusions in this pass come from dedicated dynamic-prediction methodological literature, while Cochrane supplies the higher-level prognosis architecture.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models  
https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare  
https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-2-study-designs-and-data-sources-prognosis-research  
https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-3-statistical-measures-prognosis-research

### Source-status note

The Handbook chapters remain draft 2026 material and must be version-checked at closure/audit.

---

## 2. Chabeau et al., 2026 — time-horizon systematic review

Chabeau L, Bonnemains V, Rinder P, et al.  
**On the Importance of a Clear Definition of Time Horizon for Time-to-Event Dynamic Predictions: A Systematic Review and a Concrete Illustration in Kidney Transplantation.**  
Clinical Epidemiology. 2026;18:572750.

Current publication checked 2026-11-17.

Key findings:

- dynamic survival predictions are conditional on being event-free at a landmark time and on information available by that time;
- horizon can be:
  - a fixed final time;
  - or the end of a fixed-width/sliding horizon window;
- among 171 reviewed papers:
  - 97 (57%) used a sliding horizon window;
  - 36 (21%) a final time horizon;
  - 38 (22%) did not clearly define horizon type;
- calibration/discrimination results can differ materially depending on horizon definition and therefore are not automatically comparable.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13182843/  
https://pubmed.ncbi.nlm.nih.gov/42158531/

---

## 3. Aluariachy et al., 2024 — dynamic survival prediction review

**Dynamic Prediction of Survival Outcomes Using Longitudinal Biomarkers — Joint Model and Landmarking.**  
Japanese Journal of Biometrics. 2024;45(2):189–214.

Key taxonomy:

- dynamic prediction updates survival probability at a prediction time conditional on survival/event-free status and longitudinal information accumulated by that time;
- two dominant classical approaches:
  - joint modelling;
  - landmarking;
- joint modelling specifies a joint structure for longitudinal biomarker trajectories and event time;
- landmarking constructs predictions at landmark times using information available at those times.

https://www.jstage.jst.go.jp/article/jjb/45/2/45_189/_article/-char/en

---

## 4. Li et al., 2023 — joint vs landmark comparison

**A Comparison of Two Approaches to Dynamic Prediction: Joint Modeling and Landmark Modeling.**  
Statistics in Medicine. 2023;42:2101–2115.

Checked current PMC version 2026-11-17.

Key conceptual points:

- dynamic prediction uses longitudinally measured predictors available up to the time of prediction;
- predictions are both individualized and time-specific;
- landmark and joint modelling are mainstream but structurally different approaches;
- joint models represent the longitudinal predictor process and survival process jointly.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11809276/

---

## 5. van Houwelingen, 2006/2007 — landmarking

**Dynamic Prediction by Landmarking in Event History Analysis.**

Foundational landmark method.

Core structure:

- at a landmark time, restrict analysis to individuals still at risk;
- use covariate information available at/through that landmark;
- predict subsequent event risk;
- repeat across landmark times;
- extensions/supermodels can smooth information across multiple landmarks.

https://onlinelibrary.wiley.com/doi/10.1111/j.1467-9469.2006.00529.x

---

## 6. 2026 systematic review of dynamic ML/DL survival prediction

**Dynamic Prediction of Clinical Endpoints in Survival Analysis With Machine and Deep Learning: A Systematic Review and Regulatory Perspective.**  
2026.

Current publication checked 2026-11-17.

Useful scope correction:

- dynamic prediction is broader than only landmarking and joint models;
- contemporary families include:
  - time-varying covariate survival models;
  - landmarking;
  - random survival forests;
  - recurrent/neural sequence models;
  - other ML/DL approaches;
- defining characteristic is updating individual risk as new longitudinal information becomes available.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13650409/

---

## 7. Wang et al., 2026 — joint modelling systematic review

Wang W, Bursac Z, Hu N.  
**Joint Modeling of Longitudinal and Survival Data in Public Health and Biomedical Research: A Systematic Review.**  
2026.

Used for current scope/limitations of joint-model methodology:

- joint models include a longitudinal submodel, a survival/event submodel and an association structure linking them;
- modern variants cover complex longitudinal trajectories and survival structures;
- computational burden and model specification remain important practical limitations;
- dynamic performance commonly requires time-dependent discrimination/error/calibration assessment.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13116354/

---

## 8. Treatment/counterfactual boundary from PASS-06B11 sources

Keogh RH, van Geloven N.  
**Prediction Under Interventions: Evaluation of Counterfactual Performance Using Longitudinal Observational Data.**  
Epidemiology. 2024.

Boyer et al.  
**Estimating and Evaluating Counterfactual Prediction Models.**  
Stat Med. 2025.

Used only to preserve the boundary:

- updating a factual risk prediction at a later time is not automatically causal;
- predicting what would happen under a specified hypothetical intervention remains counterfactual and requires causal assumptions/methods.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11332371/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC12503020/

---

# Part A — Static and dynamic prediction are different target architectures

## 1. Static baseline prognosis

### Established finding
**Confidence: HIGH**

Static baseline prediction has one primary prediction startpoint:

`T0 → predictors available at T0 → future outcome by horizon U`

The prediction is not formally revised when later measurements become available.

Example:

> At program week 0, predict 12-week dropout.

---

## 2. Dynamic prognosis

### Established finding
**Confidence: HIGH**

Dynamic prediction creates a **sequence of updated prognoses** as time passes and new information becomes available.

Conceptual sequence:

`s0 → prediction`  
`s1 → update using history through s1 → new prediction`  
`s2 → update using history through s2 → new prediction`

The same individual can therefore receive different predicted risks at different prediction times.

### Project rule

Dynamic prediction is not merely:

> a static model recalculated repeatedly with unchanged baseline predictors.

A genuinely dynamic architecture uses the changing at-risk state and/or information accumulated over follow-up.

---

# Part B — Landmark time is a renewed prediction startpoint

## 3. Landmark definition

### Established finding
**Confidence: HIGH**

A landmark time `s` is the time at which a new prognosis is made.

The target is conditional on the individual having reached that point in an eligible state, commonly:

> alive/event-free and still under observation at `s`.

Generic target:

`P(event by horizon U | event-free at s, history available through s)`

---

## 4. Each landmark creates a new conditional target population

### Established finding
**Confidence: HIGH**

The population eligible for prediction at `s=8 weeks` is not the original baseline cohort.

It excludes individuals who before week 8:

- already experienced the event;
- died;
- otherwise ceased to be at risk;
- may have been lost/unobservable depending on design.

### Project consequence

Every landmark must record its:

- eligibility/risk-set rule;
- conditioning history;
- remaining at-risk population.

---

## 5. Survival/eligibility to the landmark is part of the conditioning information

### Project synthesis
**Confidence: HIGH**

An individual who remains event-free to a later landmark has already supplied prognostic information through that fact alone.

Therefore later dynamic predictions are not simply baseline predictions with one extra biomarker measurement.

They condition on a changed survival/history state.

---

# Part C — Time-updated predictors

## 6. Predictors available by the landmark can update prognosis

### Established finding
**Confidence: HIGH**

Dynamic prediction can incorporate longitudinal information such as:

- repeated biomarkers;
- repeated strength tests;
- body mass trajectory;
- adherence history;
- symptoms;
- wearable signals;
- prior events/states;
- management/treatment history.

### Project rule

For prediction at landmark `s`, only information available **at or before `s`** may enter as observed predictor information.

---

## 7. Latest value is only one summary of longitudinal history

### Established finding
**Confidence: HIGH**

Longitudinal history can be represented through features such as:

- most recent value;
- cumulative mean;
- slope/trajectory;
- variability;
- time since last measurement;
- area-under-history summaries;
- model-based latent trajectory.

### Project consequence

"Uses repeated measurements" is not a sufficient description.

Extract **how the history was converted into prediction information**.

---

# Part D — Landmarking

## 8. Basic landmark structure

### Established finding
**Confidence: HIGH**

At each landmark `s`:

1. identify individuals still eligible/at risk at `s`;
2. summarize predictor information available through `s`;
3. fit/apply a model to outcomes occurring after `s`;
4. predict to a specified future horizon.

Canonical structure:

`history through s → landmark risk set at s → prediction from s to horizon`

---

## 9. Landmarking can use separate models at separate prediction times

### Established finding
**Confidence: HIGH**

A straightforward landmark design may fit a separate prediction model for each landmark.

Example:

- week 2 model;
- week 4 model;
- week 8 model.

These are related but distinct prediction tasks because:

- risk sets differ;
- histories differ;
- potentially the horizon differs.

---

## 10. Landmark supermodel/pooling is a distinct implementation variant

### Established finding
**Confidence: HIGH**

Landmark methods can also combine information across several landmark datasets and model how prediction relationships vary with landmark time.

At taxonomy level this remains:

> landmark-based dynamic prediction,

but project extraction should distinguish:

- separate landmark-specific models;
- pooled/supermodel landmarking.

Detailed mathematics is deferred.

---

# Part E — Joint longitudinal–survival models

## 11. Joint-model architecture

### Established finding
**Confidence: HIGH**

A typical joint model contains:

1. a longitudinal submodel describing repeated marker trajectory;
2. an event/survival submodel;
3. an association structure connecting the longitudinal process to event risk.

Dynamic event predictions are updated when new longitudinal measurements become available.

---

## 12. Joint modelling uses a model of the longitudinal process

### Established finding
**Confidence: HIGH**

Unlike simple landmarking based only on a selected snapshot/summary, joint modelling explicitly models the repeated-measurement trajectory.

This can be useful when predictors are:

- noisy;
- irregularly measured;
- biologically evolving over time.

### Important qualification

A joint model does not become correct merely by being joint.

Validity depends on specification of:

- longitudinal submodel;
- event submodel;
- association structure;
- measurement/error assumptions.

---

## 13. Model-based future trajectory is not observed-data leakage

### Project clarification
**Confidence: HIGH**

A joint model may integrate over or predict a participant's unobserved future longitudinal trajectory after the landmark as part of its statistical model.

This differs from directly inserting **actually observed future measurements** into a prediction supposedly made at the landmark.

### Boundary

Allowed:

> model-based prediction using information observed through `s`.

Leakage:

> using measurements collected after `s` as if they had been known at `s`.

---

# Part F — Landmarking and joint models are not the whole dynamic-prediction field

## 14. Recognition-level taxonomy

### Established finding
**Confidence: HIGH**

Recent reviews identify additional dynamic approaches including:

- survival models with time-updated covariates;
- multi-state models;
- random survival forests;
- recurrent/deep sequence models;
- other machine-learning architectures.

### Project rule

Do not define:

> dynamic prediction = landmark or joint model only.

Instead:

> landmarking and joint modelling are major established families within the broader dynamic-prediction class.

Detailed taxonomy of every algorithmic family is deferred unless gap audit shows it is required for RES-02.

---

# Part G — Fixed final horizon vs sliding horizon window

## 15. Fixed final horizon

### Established finding
**Confidence: HIGH**

Suppose final time `U` is fixed.

Predictions are made at successive landmarks:

- at `s1`, predict to `U`;
- at `s2`, predict to the same `U`.

Then prediction-window length shrinks:

`U - s2 < U - s1`.

### Example

At:

- week 2;
- week 6;
- week 10;

always predict completion status by week 12.

This is a **fixed final horizon**.

---

## 16. Sliding fixed-width horizon window

### Established finding
**Confidence: HIGH**

Suppose window width `w` is fixed.

At each landmark `s` predict to:

`s + w`.

Example:

- at week 2 → predict next 4 weeks;
- at week 6 → predict next 4 weeks;
- at week 10 → predict next 4 weeks.

The final calendar/follow-up horizon moves with the landmark.

---

## 17. The two horizon definitions answer different questions

### Established finding
**Confidence: HIGH**

Fixed final horizon asks:

> Given survival/history to now, what is the chance of reaching one common future endpoint?

Sliding horizon asks:

> Given survival/history to now, what is the chance of the event within the next fixed interval?

These are not interchangeable estimands.

---

## 18. Horizon definition is frequently underreported

### Current empirical finding
**Confidence: HIGH**

Chabeau et al. 2026 found among 171 dynamic-prediction papers:

- 57% sliding horizon;
- 21% fixed final horizon;
- 22% unclear horizon definition.

### Project rule

Every dynamic prediction extraction must explicitly classify horizon architecture.

---

# Part H — Performance across landmarks is not automatically comparable

## 19. Event incidence changes with landmark/horizon structure

### Established finding
**Confidence: HIGH**

At later landmarks:

- at-risk population changes;
- accumulated history changes;
- remaining prediction window may shrink or move;
- event frequency over the prediction window changes.

Therefore:

> AUC/calibration at `s1` and `s2`

may correspond to different prediction problems.

---

## 20. Higher AUC at a later landmark does not necessarily mean "the model improved"

### Project inference
**Confidence: HIGH**

The later task may have:

- richer predictor history;
- different case mix;
- shorter or shifted horizon;
- selected event-free survivors.

Any of these can change discrimination.

### Project rule

When comparing dynamic performance over time, record:

1. landmark;
2. risk set;
3. horizon type;
4. horizon length;
5. event incidence;
6. predictor history available.

---

# Part I — Prediction-time renewal

## 21. Dynamic prediction repeatedly resets "now"

### Project synthesis
**Confidence: HIGH**

PASS-06B1 established that prognosis requires a startpoint.

Dynamic prediction generalizes this:

> every landmark is a new valid "now".

At landmark `s`:

- history before `s` becomes past information;
- outcome after `s` is future;
- the horizon is redefined relative to `s`.

This prevents the error of treating post-baseline measurements as baseline leakage when they are legitimately used in a **new prediction made later**.

---

# Part J — Static leakage vs legitimate dynamic updating

## 22. Same variable can be leakage or valid information depending on prediction time

### Established design distinction
**Confidence: HIGH**

Suppose baseline = week 0.

Attendance during weeks 1–4:

### For a week-0 prediction:
future information → leakage.

### For a week-4 prediction:
past observed information → legitimate updated predictor.

### Project rule

Every feature must be evaluated relative to the **actual prediction time**, not merely original cohort baseline.

---

# Part K — Irregular measurement timing

## 23. Dynamic data are often measured at unequal times

### Established finding
**Confidence: HIGH**

Longitudinal markers may be observed:

- at scheduled visits;
- opportunistically;
- only when symptoms/problems occur;
- at irregular wearable/device intervals.

### Taxonomy consequence

Record:

1. measurement schedule;
2. whether it is protocol-driven or informative;
3. how multiple past values are summarized/modelled;
4. whether time since last measurement enters prediction.

Detailed informative observation-process methods are deferred.

---

# Part L — Development-data architecture for landmark models

## 24. One person can contribute to multiple landmark datasets

### Established finding
**Confidence: HIGH**

If an individual remains at risk across several landmarks, the same person may contribute:

- one prediction record at `s1`;
- another at `s2`;
- another at `s3`.

These records are not independent people.

### Project consequence

Dynamic prediction datasets can have repeated prediction episodes nested within participant.

This matters for:

- model development;
- validation;
- uncertainty;
- train/test splitting.

Detailed statistical handling is deferred.

---

## 25. Participant-level leakage across development/evaluation must be prevented

### Project inference
**Confidence: HIGH**

If multiple landmark records from the same individual are randomly split across train/test folds, information from one person's history can enter both sides.

### Project rule

For ordinary internal/external validation of dynamic models, splitting should preserve the intended independence unit, usually the **participant** or higher natural cluster, unless the validation design specifically justifies another structure.

This extends the full-pipeline leakage principles from PASS-06B6.

---

# Part M — Dynamic validation

## 26. Performance is indexed by landmark and horizon

### Established finding
**Confidence: HIGH**

Dynamic performance should conceptually be written as:

> performance at prediction time `s` for horizon `U` or window `w`.

Examples:

- calibration at week 4 for risk by week 12;
- AUC at year 2 for event within next 3 years.

### Project rule

Do not store:

> dynamic AUC = 0.82

without landmark/horizon definition.

---

## 27. External validation must reproduce the prediction schedule

### Project synthesis
**Confidence: HIGH**

External evaluation of a dynamic model requires enough longitudinal data to reproduce:

- landmark eligibility;
- predictor history;
- measurement timing;
- prediction horizon;
- model update rule.

A dataset with only baseline measurements cannot externally validate a model whose intended use requires repeated longitudinal updates.

---

# Part N — Dynamic factual prediction under management

## 28. Dynamic does not automatically mean causal

### Established finding
**Confidence: HIGH**

A model can update risk at each landmark using:

- current treatment status;
- adherence;
- prior management;
- evolving biomarkers;

and still be an ordinary **factual prognostic model**.

Its target can remain:

> What is likely to happen from now onward under the observed/current management process?

No counterfactual claim is implied.

---

## 29. Management history may legitimately become a predictor at a later landmark

### Cross-pass integration
**Confidence: HIGH**

Treatment initiated after baseline was unavailable to a baseline model.

At a later landmark, if treatment has already occurred, it is part of observed history and may be used for **factual updated prediction**.

### Important boundary

Its inclusion still does not make the coefficient a causal treatment effect.

---

# Part O — Dynamic factual vs counterfactual treatment strategies

## 30. Counterfactual boundary remains unchanged

### Established finding
**Confidence: HIGH**

If at landmark `s` the question is:

> What happens from now under the treatment/management that actually occurs?

→ dynamic factual prognosis.

If the question is:

> What would happen from now if we now assign strategy A instead of B?

→ counterfactual prediction.

Dynamic timing does not remove causal identification requirements.

---

## 31. Repeated counterfactual decision problems are more complex

### Established limitation
**Confidence: HIGH**

If treatment decisions are repeatedly updated based on evolving history, the target becomes a **dynamic treatment strategy/regime** problem.

This can involve:

- time-varying confounding;
- repeated treatment choices;
- treatment–prediction feedback.

### Scope decision

These belong to causal/dynamic treatment-regime methodology and are not solved by ordinary landmarking or joint modelling alone.

---

# Part P — Fitness/exercise translations

## 32. Static prediction

At week 0:

> predict probability of 12-week dropout using baseline history.

No later information enters.

---

## 33. Landmark dynamic prediction

At weeks 2, 4 and 8:

1. include trainees still participating;
2. use attendance/readiness/sleep/training data observed up to that week;
3. issue a new risk prediction.

Week-4 attendance is:

- leakage for week-0 prediction;
- valid information for week-4 prediction.

---

## 34. Fixed final horizon

At week 2 and week 8:

> predict probability of still completing the program by week 12.

Prediction windows:

- week 2 → 10 weeks;
- week 8 → 4 weeks.

Same final endpoint, shrinking window.

---

## 35. Sliding horizon

At every weekly check-in:

> predict dropout within the next 4 weeks.

Prediction window remains 4 weeks.

The final horizon moves every week.

---

## 36. Joint longitudinal prediction

Repeated readiness score is noisy and irregular.

A joint-model approach can:

1. model the participant's latent readiness trajectory;
2. link that trajectory to dropout/injury risk;
3. update future risk whenever new readiness measurements arrive.

Classification:

> dynamic prognostic prediction using joint longitudinal–event modelling.

---

## 37. Dynamic factual management prediction

At week 6:

- trainee has already received two coaching interventions;
- this history is known now.

Question:

> Given history to week 6 and current management, what is dropout risk over the next 4 weeks?

Classification:

> dynamic factual prognosis.

---

## 38. Dynamic counterfactual question

At week 6:

> What would dropout risk be over the next 4 weeks if we intensify coaching now versus keep standard coaching?

Classification:

> counterfactual treatment-strategy prediction / treatment-effect branch.

Not ordinary dynamic prognosis.

---

# Part Q — Structural record produced by PASS-06B12

## 39. Dynamic-prediction record

For each dynamic prediction study, record:

1. model/version;
2. outcome type:
   - time-to-event;
   - binary at repeated horizons;
   - continuous;
   - other;
3. dynamic prediction claimed? YES/NO;
4. baseline/static comparator present?;
5. prediction times / landmarks;
6. landmark eligibility/risk-set definition;
7. participant must be event-free/alive at landmark?;
8. one participant contributes multiple prediction episodes?;
9. predictor-history window;
10. longitudinal predictors;
11. measurement schedule:
    - regular;
    - irregular;
12. predictor-history representation:
    - latest value;
    - slope;
    - cumulative summary;
    - landmark feature set;
    - longitudinal latent trajectory;
    - other;
13. method family:
    - landmarking;
    - landmark supermodel;
    - joint longitudinal-event model;
    - time-varying covariate survival model;
    - multistate;
    - ML/DL dynamic model;
    - other;
14. if landmarking:
    - separate model per landmark?;
    - pooled/supermodel?;
15. if joint model:
    - longitudinal submodel;
    - event submodel;
    - association structure;
16. observed post-landmark measurements incorrectly used at landmark? YES/NO;
17. model-based future trajectory used?;
18. horizon architecture:
    - fixed final horizon;
    - fixed-width sliding window;
    - other;
    - unclear;
19. horizon value/window length;
20. prediction target explicitly conditional on survival/event-free status to landmark?;
21. event incidence by landmark/window if reported;
22. performance reported per landmark?;
23. calibration per landmark/horizon?;
24. discrimination per landmark/horizon?;
25. internal-validation split unit:
    - participant;
    - prediction episode;
    - cluster;
26. same participant appears across train/test? YES/NO/UNCLEAR;
27. external validation reproduces longitudinal measurement/update process?;
28. management/treatment history used?;
29. target treatment policy:
    - observed/current factual;
    - specified hypothetical/counterfactual;
30. repeated treatment decisions involved?;
31. final project classification;
32. unresolved temporal/leakage/causal issues.

---

# Practical rules produced by PASS-06B12

1. Static prediction has one primary prediction time; dynamic prediction updates prognosis as time and information accumulate.
2. Every landmark is a renewed scientific startpoint.
3. Dynamic prediction at landmark `s` is conditional on reaching `s` in the eligible/at-risk state.
4. The at-risk target population therefore changes across landmarks.
5. Later performance values are not automatically comparable to earlier performance values.
6. Predictors used at a landmark must be observed by that landmark.
7. A value that is leakage for baseline prediction can become legitimate history for a later landmark prediction.
8. Longitudinal history can be represented by latest value, trajectory/slope, summaries or explicit longitudinal models.
9. Landmarking constructs prediction problems at predefined landmark times among those still at risk.
10. Landmark models may be separate per landmark or pooled into a landmark supermodel.
11. Joint models explicitly connect a longitudinal-marker process with an event process.
12. Joint-model dynamic predictions can update as new longitudinal measurements arrive.
13. Model-based prediction of an unobserved future marker trajectory is not the same as leaking actually observed future measurements.
14. Landmarking and joint models are major dynamic-prediction families but are not exhaustive.
15. Contemporary dynamic methods also include time-updated survival, multistate and ML/DL approaches.
16. A fixed final horizon and a sliding fixed-width horizon are different estimands.
17. Horizon definition must be explicitly extracted; current literature often fails to report it clearly.
18. Fixed-final-horizon windows shrink as landmark time increases.
19. Sliding-horizon windows retain a fixed duration while their end time moves.
20. Performance depends jointly on landmark, risk set and horizon architecture.
21. An apparent improvement in AUC at later landmarks does not by itself prove improved modelling.
22. Dynamic datasets can contain repeated prediction episodes from the same participant.
23. Validation splitting must preserve the appropriate independence unit and avoid participant leakage.
24. External validation must reproduce the longitudinal information and prediction schedule required by the model.
25. Dynamic factual prediction may include treatment/management history observed by the current landmark.
26. Using observed treatment history in factual prediction does not imply causal treatment-effect estimation.
27. Asking what happens under a hypothetical treatment assigned at the landmark converts the target to counterfactual prediction.
28. Repeated treatment choices over time lead toward dynamic-treatment-regime causal methodology, not ordinary landmark/joint prognosis alone.
29. Minimum project architecture:
   **landmark/startpoint → eligible risk set → history available by landmark → dynamic model family → horizon definition → updated prediction → landmark/horizon-specific performance → factual vs counterfactual treatment target**.

---

# Important source limitation

The current Cochrane Prognosis Handbook supplies the general startpoint/horizon/performance framework but does **not currently provide detailed landmark-vs-joint dynamic-prediction taxonomy in the available Chapters 1–3**.

Therefore:

- Cochrane supports the broad prognosis architecture;
- landmark/joint/dynamic-specific taxonomy in this pass is based on dedicated methodological studies and recent reviews.

This distinction is explicit so the project does not falsely attribute method-specific guidance to Cochrane.

---

# Important unresolved issue

This pass is strongest for **time-to-event dynamic prediction**, where landmarking and joint longitudinal–survival models have the most mature taxonomy.

Dynamic prediction of:

- continuous future outcomes;
- recurrent events;
- multistate transitions;
- competing risks;
- high-frequency wearable streams

may require additional branch-specific treatment if the later gap audit finds that the general structural record above is insufficient for exercise-science evidence.

---

# What remains unresolved after PASS-06B12

The prognosis/prediction branch remains **RESEARCHING**.

Still requires at least:

1. explicit diagnostic-vs-prognostic prediction integration check;
2. treatment-effect / stratified-medicine boundary check against the rest of RES-02;
3. continual/online updating gap decision;
4. recurrent-event / multistate / competing-risk gap decision;
5. dynamic non-survival prediction gap decision;
6. terminology/version audit across Cochrane / TRIPOD+AI / PROBAST+AI;
7. structural synthesis of PASS-06B1…B12;
8. dedicated prognosis/prediction gap audit before this branch can be treated as complete.

## Next micro-pass

**RES-02 / PASS-06B13 — prediction-branch integration audit: diagnostic vs prognostic prediction, static vs dynamic, factual vs counterfactual, treatment-effect boundary, model-development/evaluation/update/impact phases, and detection of taxonomy gaps or contradictions across PASS-06A and PASS-06B1…B12.**

STOP after this saved micro-pass.
