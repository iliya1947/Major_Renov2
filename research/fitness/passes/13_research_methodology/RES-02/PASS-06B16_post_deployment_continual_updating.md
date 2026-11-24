# RES-02 / PASS-06B16 — Post-deployment lifecycle and continual updating

Статус: **COMPLETE MICRO-PASS — prediction branch remains RESEARCHING pending final gap audit**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. fixed deployed model with monitoring only;
2. post-deployment performance surveillance;
3. dataset / temporal drift;
4. covariate, target/prevalence and concept shift at taxonomy level;
5. performance drift vs data drift;
6. outcome-label latency and operational telemetry;
7. trigger-based updating;
8. periodic batch updating;
9. continual / online updating;
10. sliding/rolling historical windows and old-data weighting at recognition level;
11. dynamic updating vs dynamic prediction;
12. update-data vs independent-evaluation-data separation;
13. model-version lineage;
14. monitoring before and after update;
15. deployment-induced feedback loops;
16. rollback / retirement / change-control recognition;
17. limits of current evidence and lack of universal thresholds;
18. fitness/exercise translation;
19. structural record.

Не покрывается здесь:

- exact drift-detection tests;
- control-chart mathematics;
- Bayesian dynamic model formulas;
- online-learning algorithms;
- exact forgetting-factor selection;
- continual-learning catastrophic-forgetting methods;
- detailed MLOps engineering;
- formal regulatory compliance for a specific product/jurisdiction;
- causal correction of deployment feedback in depth;
- fairness monitoring methods in depth;
- final prediction-branch synthesis.

---

# Sources checked

## 1. Binuya et al. — methodological guidance for evaluation and updating

Binuya MAE, Engelhardt EG, Schats W, Schmidt MK, Steyerberg EW.  
**Methodological guidance for the evaluation and updating of clinical prediction models: a systematic review.**  
BMC Med Res Methodol. 2022;22:316.

Current full text checked 2026-11-17.

Relevant points:

- prediction models can become miscalibrated over time as populations and practice change;
- conventional updating includes recalibration, revision and extension;
- updating can also be done periodically or continuously;
- dynamic/continual updating is distinct from dynamic prediction using time-dependent predictors;
- literature/guidance for continuous dynamic updating remains much less mature than for conventional regression updating;
- validation frameworks for continuously changing models remain limited.

https://pmc.ncbi.nlm.nih.gov/articles/PMC9742671/

---

## 2. Jenkins et al. — continual updating and monitoring

**Continual updating and monitoring of clinical prediction models: time for dynamic prediction systems?**  
2021.

Checked 2026-11-17.

Key conceptual guidance:

- model development → validation → deployment should not be treated as a one-time terminal pipeline;
- deployed models require ongoing surveillance because population and care pathways change;
- “living” prediction systems may update repeatedly as new data accrue;
- when model versions change continuously, validation must increasingly concern the updating **system/process**, not only one isolated frozen model.

https://pmc.ncbi.nlm.nih.gov/articles/PMC7797885/

---

## 3. Saelmans et al. — implementation and updating systematic review

Saelmans A, Seinen T, Pera V, et al.  
**Implementation and Updating of Clinical Prediction Models: A Systematic Review.**  
Mayo Clin Proc Digit Health. 2025;3(3):100228.

Current full text checked 2026-11-17.

Empirical findings:

- 37 publications describing 56 implemented prediction models were included;
- external validation was reported for 27% of models;
- only 13% of implemented models had been updated after implementation;
- implementation/update practice remains substantially less mature than model-development literature.

The review distinguishes:

- simple recalibration/revision;
- extension;
- meta-model approaches;
- dynamic updating.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12212251/  
https://pubmed.ncbi.nlm.nih.gov/40599890/

---

## 4. Meijerink et al. — AI updating methods

Meijerink LM, et al.  
**Updating methods for artificial intelligence-based clinical prediction models: a scoping review.**  
J Clin Epidemiol. 2025;111636.

Checked 2026-11-17.

Key limitations:

- 78 articles were included;
- updating literature was dominated by neural-network methods;
- AI updating methods outside neural networks were comparatively underexplored;
- use cases included:
  - temporal change;
  - cross-centre adaptation;
  - task specialization;
  - population/personal adaptation;
- there is no single standardized AI updating method.

https://pubmed.ncbi.nlm.nih.gov/39662644/

---

## 5. Silva et al. — dataset-shift mitigation systematic review

Silva GFDS, et al.  
**Strategies for detecting and mitigating dataset shift in machine learning for health predictions: A systematic review.**  
J Biomed Inform. 2025;104902.

Checked 2026-11-17.

Relevant findings:

- temporal shift and concept drift were among the most common shift types;
- model-based monitoring and statistical tests were common detection approaches;
- retraining and feature engineering were common mitigation approaches;
- no single method was broadly generalizable;
- prospective real-world evaluation and external validation remain limited;
- standardized monitoring metrics are lacking.

https://pubmed.ncbi.nlm.nih.gov/40876698/

---

## 6. Current drift taxonomy / healthcare monitoring literature

**Unsupervised Characterization of Temporal Dataset Shifts as an Early Indicator of AI Performance Variations.**  
2025/2026 current PMC version checked 2026-11-17.

Used for high-level definitions:

- covariate shift → distribution of predictors X changes;
- prior-probability / target shift → distribution of Y changes;
- concept shift → relationship between X and Y changes.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12712564/

A 2026 drift review was also checked and confirms continuing terminology inconsistency across the field.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13492542/

---

## 7. Kim et al. — deployment feedback-aware monitoring

Kim GYE, et al.  
**Monitoring Strategies for Continuous Evaluation of Deployed Clinical Prediction Models.**  
J Biomed Inform. 2025;104854.

Checked 2026-11-17.

Key points:

- successful deployed prediction models can change care/actions;
- those actions can change later labels/outcomes;
- naive monitoring can then underestimate underlying no-intervention risk/performance;
- naive retraining can propagate deployment feedback;
- monitoring may need to account for model-triggered interventions.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12278811/  
https://pubmed.ncbi.nlm.nih.gov/40482691/

---

## 8. Dynamic survival model updating study

**Dynamic updating of clinical survival prediction models in a changing environment.**  
2023.

Checked current PMC/PubMed records 2026-11-17.

Key points:

- dynamic updating = repeated updating with new data, distinct from one-time updating;
- examples include repeated recalibration, full refitting and Bayesian dynamic updating;
- no single updating strategy dominated all simulated scenarios;
- baseline/intercept recalibration can be data-efficient when calibration drift dominates;
- rapidly changing environments can require more frequent updating.

https://pmc.ncbi.nlm.nih.gov/articles/PMC10714456/  
https://pubmed.ncbi.nlm.nih.gov/38082429/

---

## 9. 2026 lifecycle governance review

**Beyond Model Development in Healthcare AI: Post-Development Robustness, Post-Deployment Monitoring, and Lifecycle Governance — A Scoping Review of Reviews.**  
Healthcare. 2026;14(11):1459.

Checked 2026-11-17.

Key current synthesis:

- post-deployment risks are socio-technical, not only algorithmic;
- monitoring methods, action thresholds and corrective responses remain weakly standardized;
- mature routine-care evidence is sparse;
- lifecycle governance increasingly includes:
  - local validation;
  - subgroup auditing;
  - drift detection;
  - controlled updating;
  - incident response;
  - rollback;
  - retirement.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13256130/  
https://pubmed.ncbi.nlm.nih.gov/42278712/

---

## 10. FDA — Predetermined Change Control Plan for AI-enabled device software

**Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions.**  
Final Guidance, August 2025.

Checked 2026-11-17.

Used only as a **regulatory lifecycle-governance example**, not as a universal scientific-method rule.

FDA recommends that an authorized PCCP describe:

- planned modifications;
- methodology for development/validation/implementation of those modifications;
- impact assessment;
- controls for iterative change.

Current FDA AI-device resources also emphasize monitoring, maintenance and modification across the product lifecycle.

https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence  
https://www.fda.gov/medical-devices/artificial-intelligence-enabled-medical-devices

### Scope limitation

These FDA requirements/guidance apply to relevant regulated AI-enabled medical devices in the US. They are **not** automatically legal requirements for ordinary fitness/research prediction models.

---

# Part A — Deployment is not the end of the prediction-model lifecycle

## 1. Fixed validation evidence can age

### Established finding
**Confidence: HIGH**

A prediction model can be well validated at time T and later become poorly calibrated or otherwise unreliable because the deployment environment changes.

Potential changes include:

- population/case mix;
- outcome prevalence/baseline risk;
- treatment/training policy;
- measurement devices;
- coding/data pipelines;
- documentation;
- software;
- workflow;
- outcome definitions;
- user behaviour.

### Project rule

Do not represent:

`external validation → deployment`

as the terminal scientific lifecycle.

Add:

`deployment → monitoring → maintain / update / suspend / retire`.

---

# Part B — Monitoring-only fixed model

## 2. Continuous monitoring does not require continuous updating

### Established finding
**Confidence: HIGH**

A model may remain mathematically fixed while continuously/periodically monitoring:

- calibration;
- discrimination;
- overall performance;
- outcome prevalence;
- predictor distributions;
- missingness;
- data latency;
- alert/action rate;
- subgroup performance;
- workflow fidelity.

### Project classification

> **fixed model + post-deployment surveillance**

is a distinct lifecycle state.

No new model version exists until the prediction function/pipeline changes.

---

## 3. Stable monitoring can justify no update

### Project synthesis
**Confidence: HIGH**

Monitoring is not performed merely to force periodic retraining.

If:

- performance remains acceptable;
- population/measurement process remains sufficiently stable;
- no critical operational failure emerges;

the defensible action may be:

> retain current version.

### Project rule

“Never updated during period X” is not automatically a methodological defect if adequate monitoring shows no need for change.

---

# Part C — Data shift and performance drift are different

## 4. Dataset shift

### Established finding
**Confidence: HIGH**

Dataset shift means the joint distribution generating new deployment data differs from the development distribution.

Common high-level types:

### Covariate shift

`P(X)` changes.

Example:

- stronger/newer trainees enter the system;
- wearable-device distribution changes.

### Target / prior-probability shift

`P(Y)` changes.

Example:

- injury prevalence falls after a safer training policy.

### Concept shift / concept drift

`P(Y|X)` changes.

Example:

- same readiness markers now imply different injury risk because training practice or treatment changes.

---

## 5. Data shift does not equal harmful performance degradation

### Established methodological distinction
**Confidence: HIGH**

Input distributions may change without materially harming prediction performance.

Conversely, model calibration/performance can deteriorate even when a simple monitored input-distribution summary appears stable.

### Project rule

Do not treat:

> detected covariate shift

as synonymous with:

> model failure.

And do not treat:

> no detected covariate shift

as proof that predictive validity is intact.

---

## 6. Performance drift

### Project definition
**Confidence: HIGH**

Performance drift means one or more relevant predictive-performance quantities change over deployment time.

Examples:

- calibration intercept drifts;
- calibration slope changes;
- discrimination falls;
- Brier/prediction error worsens;
- utility/net benefit changes.

### Project record

Track both:

1. **distributional/operational signals**;
2. **actual outcome-based performance** when labels become available.

---

# Part D — Outcome labels can arrive late

## 7. Label latency

### Established finding
**Confidence: HIGH**

For many prognosis models, true outcomes are observed only after:

- weeks;
- months;
- years.

Therefore direct calibration/discrimination monitoring can be delayed.

### Operational implication

Earlier warning signals may include:

- missingness changes;
- feature distribution changes;
- device/data-pipeline changes;
- data latency;
- prediction-score distribution;
- workflow changes.

### Important limitation

These are **surveillance signals**, not substitutes for later outcome-based validation.

---

# Part E — Drift source matters

## 8. Covariate drift may need no model change

### Established methodological principle
**Confidence: MODERATE-HIGH**

If `P(X)` changes but the relevant predictor-outcome relationship remains stable and the model remains appropriately specified/calibrated, updating may be unnecessary.

---

## 9. Baseline-risk / target shift may favor recalibration

### Cross-pass integration
**Confidence: HIGH**

If ranking/predictor relationships remain useful but average outcome incidence changes, a baseline/intercept or baseline-hazard recalibration may be sufficient.

This connects directly to PASS-06B8.

---

## 10. Concept shift can require stronger revision

### Established methodological principle
**Confidence: HIGH**

If `P(Y|X)` changes materially:

- original predictor weights may no longer transport;
- simple intercept recalibration may be insufficient;
- coefficient revision, refitting, extension or replacement may be needed.

### Project rule

Update type should depend on the diagnosed failure, not merely elapsed time.

---

# Part F — Periodic batch updating

## 11. Definition

### Established finding
**Confidence: HIGH**

Periodic updating means the model is deliberately reconsidered at discrete scheduled intervals.

Examples:

- monthly;
- quarterly;
- annually;
- after every N new outcomes.

At each update point, new data are accumulated and a defined updating procedure is run.

---

## 12. Periodic updating can use conventional update methods

### Established finding
**Confidence: HIGH**

Possible periodic actions:

- intercept/baseline recalibration;
- slope recalibration;
- coefficient revision;
- full refitting;
- model extension.

Thus:

> periodic

describes **when** update occurs,

while:

> recalibration/revision/refit

describes **what** update occurs.

These axes must remain separate.

---

# Part G — Trigger-based updating

## 13. Definition

### Project taxonomy
**Confidence: HIGH**

A model is not updated merely because a calendar interval elapsed.

Instead a predeclared monitoring signal/criterion triggers:

- investigation;
- recalibration;
- refitting;
- suspension;
- or another action.

Potential triggers include:

- calibration beyond an acceptable range;
- meaningful performance deterioration;
- major data-pipeline change;
- policy/measurement change;
- shift detector;
- incident/safety signal.

---

## 14. Trigger threshold is context dependent

### Established current limitation
**Confidence: HIGH**

The 2025–2026 reviews find no universally accepted monitoring metric or action threshold.

### Project rule

Do not encode universal rules such as:

> retrain whenever PSI > X  
> recalibrate every Y months

without domain-specific evidence.

A lifecycle study must report the trigger and its justification.

---

# Part H — Continual / online updating

## 15. Definition

### Established finding
**Confidence: HIGH**

Continual/online updating refers to a system in which model parameters or prediction function can be adapted repeatedly as new data become available, potentially much more frequently than conventional periodic batch updates.

Examples at recognition level:

- sequential Bayesian updating;
- online parameter learning;
- continuously refreshed calibration;
- dynamic model averaging;
- incremental neural-network fine-tuning.

---

## 16. Continual updating is not one algorithm

### Established finding
**Confidence: HIGH**

Current literature contains heterogeneous methods.

The 2025 AI updating scoping review found strong dominance of neural-network-specific approaches and limited coverage of several other model classes.

### Project rule

Classify:

> continual/online lifecycle architecture

separately from:

> exact updating algorithm.

---

# Part I — Dynamic updating != dynamic prediction

## 17. Dynamic prediction — PASS-06B12

The same fitted model/system gives updated predictions as a participant's **longitudinal information** evolves.

Question:

> How does this person's predicted risk change as their history changes?

---

## 18. Dynamic/continual model updating — this PASS

The **model itself** changes as new deployment cohorts/data accumulate over calendar time.

Question:

> How should the prediction function adapt as the data-generating environment changes?

### Project rule

These can coexist but are orthogonal.

A dynamic landmark model can remain frozen for years.

A static baseline model can be recalibrated every month.

---

# Part J — Historical data window / forgetting

## 19. Updating can use different amounts of historical data

### Established finding
**Confidence: HIGH**

Possible architectures:

- all historical data retained equally;
- rolling/sliding time window;
- exponentially/otherwise down-weighted older observations;
- new data only;
- old model + new-data Bayesian updating.

### Project consequence

“Updated on recent data” is insufficient.

Record:

1. which historical data were retained;
2. weighting/decay if used;
3. calendar window;
4. outcome-label maturity.

---

## 20. There is a bias–variance/stability trade-off

### Established finding
**Confidence: HIGH**

Using only very recent data can adapt quickly to change but may have:

- low sample size;
- instability;
- rare-outcome problems.

Using long historical windows improves information but can dilute recent shifts.

### Project rule

No universally optimal window/update frequency is established.

---

# Part K — Model version lineage

## 21. Every prediction-function change creates a new version

### Cross-pass rule
**Confidence: HIGH**

From PASS-06B8:

> if the same input can produce a different prediction because learned model parameters/pipeline changed, the model version changed.

Continual updating therefore produces a **version sequence**, even when software exposes one persistent product name.

Example:

`v1 → v1.1 recalibrated → v1.2 revised → v2 extended`

---

## 22. Lineage must be auditable

### Project rule
**Confidence: HIGH**

For each deployed version record:

1. parent version;
2. activation date/time;
3. data window used for update;
4. update trigger;
5. update method;
6. parameters/features changed;
7. internal evaluation;
8. independent evaluation if available;
9. deployment population/setting;
10. reason for deactivation/rollback.

Without version lineage, historical performance cannot be mapped reliably to the model that actually generated decisions.

---

# Part L — Update data and evaluation data remain different roles

## 23. Data used to change the model become development/update data

### Established finding
**Confidence: HIGH**

This principle from PASS-06B8 remains unchanged after deployment.

If January–March data are used to recalibrate v1 into v2:

> January–March are update/development data for v2.

They are not independent external validation data for v2.

---

## 24. Same-data post-update performance is apparent/internal evidence

### Project consequence
**Confidence: HIGH**

Performance calculated after fitting the update on the same observations can describe:

- apparent fit of the updated version;
- internally validated performance if an appropriate resampling/update-validation procedure is used.

It is not independent external validation.

---

## 25. Continual updating creates a validation problem

### Established finding
**Confidence: HIGH**

If a model changes with every new batch/observation, there may be no long-lived frozen version to externally validate in the traditional one-off sense.

The 2021 methodological paper therefore argues that evidence increasingly must concern:

> the **updating system/process** and its longitudinal behavior,

not only one isolated parameter vector.

### Important limitation

A universally accepted framework for validating such continuously changing systems does not yet exist.

---

# Part M — Prequential / forward-time logic

## 26. Future data should evaluate the version that existed before those outcomes

### Project synthesis
**Confidence: HIGH**

A defensible lifecycle logic is chronological:

1. version v_t is fixed/active at time t;
2. it predicts new participants;
3. their outcomes mature later;
4. those outcomes evaluate v_t;
5. some or all of those data may then be used to develop v_(t+1).

### Project rule

Do not train on an observation and retroactively count the same prediction as if it were generated prospectively before training.

This is the post-deployment analogue of leakage prevention.

---

# Part N — Monitoring before and after every update

## 27. Update effectiveness must itself be evaluated

### Established finding
**Confidence: HIGH**

An update should not be assumed beneficial merely because a drift alarm fired.

Evaluate:

- pre-update performance;
- post-update performance;
- calibration;
- discrimination;
- overall error;
- utility/impact where relevant;
- subgroup effects;
- operational behavior.

### Project rule

Record whether the update:

- improved;
- did not change;
- or worsened

the relevant target metrics.

---

# Part O — Updating can introduce harm

## 28. Retraining is not automatically corrective

### Established finding
**Confidence: HIGH**

Updating can worsen a model through:

- insufficient new data;
- noisy labels;
- temporary shocks;
- biased deployment data;
- treatment-feedback contamination;
- overfitting;
- loss of previously learned information;
- measurement-pipeline artifacts.

### Project consequence

“Auto-retrain when drift detected” is not accepted as a default scientific principle.

---

# Part P — Deployment-induced feedback loops

## 29. The model can alter its own future training data

### Established finding
**Confidence: HIGH**

If model predictions trigger effective actions:

`high predicted risk → intervention → event prevented`

then future observed labels reflect:

- underlying risk;
- plus model-triggered intervention effects.

This is the “victim of own success” issue already established in PASS-06B11.

---

## 30. Naive monitoring can interpret successful intervention as model failure

### Established finding
**Confidence: HIGH**

Kim et al. 2025 show in simulation that standard monitoring can underestimate performance relative to the untreated/no-intervention target when deployment actions change outcomes.

### Project rule

For model-guided interventions, post-deployment monitoring must record:

- whether predictions triggered action;
- intervention uptake;
- adherence;
- policy changes.

Otherwise drift and feedback can be conflated.

---

# Part Q — Performance monitoring vs impact monitoring

## 31. They are not identical

### Current 2026 framework
**Confidence: HIGH**

Recent lifecycle literature separates:

### Predictive-performance monitoring

- calibration;
- discrimination;
- data drift;
- missingness/latency;
- subgroup performance.

### Clinical/practical-impact monitoring

- whether model recommendations are used;
- whether workflow/behavior changed;
- whether previously demonstrated benefit persists;
- harms/workload/resource effects.

### Scientific impact evidence

Formal causal evidence of deployment benefit remains a separate question.

### Cross-pass integration

This is consistent with PASS-06B9:

> prediction accuracy → decision utility → actual intervention impact.

---

# Part R — Change control / rollback / retirement

## 32. A deployed model can need suspension rather than update

### Established lifecycle principle
**Confidence: HIGH**

Possible governance actions include:

- continue unchanged;
- investigate;
- recalibrate;
- refit/update;
- rollback to a prior version;
- suspend;
- retire/replace.

The 2026 lifecycle review explicitly identifies controlled updating, incident response, rollback and retirement as lifecycle-governance concerns.

---

## 33. Predetermined change plans are one governance pattern

### Regulatory example
**Confidence: HIGH within FDA scope**

FDA's 2025 final guidance for relevant AI-enabled device software functions allows a Predetermined Change Control Plan to pre-specify:

- planned modifications;
- how they will be developed;
- how they will be validated;
- how impacts will be assessed.

### Project use

This supports the scientific principle:

> anticipated model changes should have a defined evidence/change-control process.

It does **not** make FDA device regulation a universal requirement for fitness models.

---

# Part S — Drift detection is not enough

## 34. A shift alarm does not identify the correct remedy

### Established finding
**Confidence: HIGH**

The same apparent performance degradation can arise from:

- prevalence shift;
- predictor distribution change;
- concept shift;
- data corruption;
- workflow change;
- label-definition change;
- treatment feedback.

### Project rule

Lifecycle response should follow:

`signal → diagnose source → assess performance/impact → choose action`

not:

`signal → automatic full retraining`.

---

# Part T — Frequency of updating

## 35. More frequent updating is not universally better

### Evidence synthesis
**Confidence: HIGH**

Some simulation studies show benefit from more frequent updates in changing environments.

But current systematic reviews do not identify one universally optimal update frequency.

Frequency depends on:

- rate/severity of drift;
- outcome latency;
- new-data volume;
- event frequency;
- model complexity;
- update method;
- implementation risk.

### Project rule

Store update cadence as an empirical design choice requiring justification.

---

# Part U — Fitness/exercise translations

## 36. Fixed monitored dropout model

Model predicts 12-week dropout from enrollment data.

Deployment:

- model remains v1 for 12 months;
- monthly monitoring checks:
  - score distribution;
  - missingness;
  - dropout prevalence as labels mature;
  - calibration;
  - coach-action rate.

No parameters change.

Classification:

> fixed prediction model + post-deployment surveillance.

---

## 37. Periodic recalibration

After each quarter:

- accumulated completed 12-week outcomes are available;
- calibration-in-the-large is reassessed;
- intercept is updated if predefined criteria indicate sustained drift.

Classification:

> periodic batch recalibration.

Each changed intercept creates a new model version.

---

## 38. Trigger-based update

Wearable vendor changes measurement algorithm.

Monitoring detects:

- abrupt feature-distribution shift;
- then degraded external calibration.

Governance action:

1. investigate data pipeline/device change;
2. suspend or flag affected predictions if necessary;
3. recalibrate/refit only after confirming the failure mechanism;
4. evaluate new version.

Classification:

> trigger-based lifecycle update after measurement/process drift.

---

## 39. Online adaptation example

A large training platform receives thousands of matured outcomes weekly.

The prediction system updates selected parameters incrementally as new labelled data arrive.

Classification:

> continual/online model updating.

This is different from issuing a new dynamic risk estimate each week for one trainee using a fixed landmark model.

---

## 40. Deployment-feedback example

High predicted dropout risk triggers extra coach contact.

Extra contact successfully prevents dropout.

If the model is naively retrained on those observed outcomes without tracking intervention:

- high-risk profiles may appear less risky;
- the model can learn from its own intervention effects.

Therefore the training platform must retain:

- predictions;
- triggered actions;
- timing;
- adherence;
- outcomes;
- model version.

---

# Part V — Structural record produced by PASS-06B16

## 41. Post-deployment lifecycle record

For every deployed prediction system, record:

1. model identifier/version;
2. parent version;
3. deployment start/end dates;
4. intended population/setting;
5. model mathematically fixed during deployment period? YES/NO;
6. monitoring cadence;
7. outcome-label latency;
8. monitored predictive metrics:
   - calibration;
   - discrimination;
   - overall error;
   - utility;
9. monitored operational metrics:
   - missingness;
   - data latency;
   - feature distribution;
   - prediction distribution;
   - alert/action frequency;
10. subgroup monitoring?;
11. drift taxonomy:
   - covariate shift;
   - target/prevalence shift;
   - concept shift;
   - measurement/workflow drift;
   - unclear;
12. actual performance drift demonstrated? YES/NO;
13. update policy:
   - no update / monitoring only;
   - fixed periodic;
   - trigger-based;
   - continual/online;
14. update cadence;
15. update trigger;
16. trigger prespecified?;
17. update method:
   - intercept/baseline recalibration;
   - slope recalibration;
   - partial revision;
   - full refit;
   - extension;
   - transfer/fine-tuning;
   - ensemble/meta-model;
   - other;
18. historical-data window;
19. old-data weighting/decay;
20. update sample size/outcomes;
21. update data distinguished from evaluation data?;
22. internal validation of update?;
23. forward/prospective evaluation after update?;
24. pre-update performance;
25. post-update performance;
26. intervention/actions triggered by predictions recorded?;
27. deployment feedback possible?;
28. change in treatment/training policy?;
29. model lineage retained?;
30. rollback version available?;
31. suspend/retire criteria?;
32. incident response?;
33. governance/change-control plan?;
34. impact monitoring separate from prediction-performance monitoring?;
35. final lifecycle classification;
36. unresolved drift/update/feedback issues.

---

# Practical rules produced by PASS-06B16

1. Deployment is not the terminal stage of prediction-model evidence.
2. A deployed model can become unreliable as population, baseline risk, practice, measurement, software and workflow change.
3. Continuous monitoring does not imply continuous updating.
4. A fixed model under active monitoring is a valid distinct lifecycle state.
5. Monitoring should not force an update when performance and context remain acceptable.
6. Dataset shift and performance drift are different concepts.
7. Covariate shift changes predictor distributions.
8. Target/prevalence shift changes outcome frequency.
9. Concept shift changes the predictor-outcome relationship.
10. Drift detection alone does not prove harmful performance degradation.
11. Absence of simple detected drift does not guarantee stable predictive validity.
12. Outcome labels may arrive too late for immediate performance monitoring.
13. Operational telemetry can provide early-warning signals but cannot replace outcome-based evaluation.
14. Update timing and update type are separate axes.
15. Periodic updating occurs at scheduled intervals.
16. Trigger-based updating responds to predefined or investigated monitoring signals.
17. Continual/online updating adapts the prediction function repeatedly as new data accrue.
18. Dynamic/continual model updating is distinct from dynamic prediction using longitudinal patient/participant information.
19. Different historical-data windows and decay/forgetting rules define different update architectures.
20. No universally optimal update frequency/window is established.
21. Every prediction-function change creates a new model version.
22. Version lineage must identify parent model, update data, change method and deployment interval.
23. Data used to update a model become development/update data for the new version.
24. Same-data post-update performance is not independent external validation of the updated version.
25. Continual updating shifts evidence toward validating the updating **process/system**, but no universally accepted validation framework yet exists.
26. Chronological/forward-time evaluation is required to avoid training on observations and retroactively treating them as prospective evaluation.
27. Pre-update and post-update performance should both be retained.
28. Retraining can worsen models and therefore is not automatically corrective.
29. Deployment feedback can alter the labels and predictor-outcome relationships used for future monitoring/retraining.
30. Model-triggered actions/interventions must be recorded when they can affect outcomes.
31. Predictive-performance monitoring and real-world impact monitoring are different evidence layers.
32. Drift alarms require diagnosis of the cause before choosing recalibration/refitting/suspension.
33. Lifecycle responses include maintain, investigate, update, rollback, suspend or retire.
34. Predetermined change-control planning is a useful governance pattern; FDA PCCP guidance is a regulatory example for relevant US AI-enabled medical devices, not a universal fitness-model rule.
35. Current post-deployment and continual-updating methodology is less standardized than ordinary development/external validation.
36. Minimum project lifecycle:
    **validated model → deploy exact version → monitor data/process/performance/impact → diagnose drift → maintain or controlled update → new version → forward evaluation → repeat / rollback / retire**.

---

# Important distinctions fixed by PASS-06B16

## Dynamic prediction

Changes the **individual's prediction** because their longitudinal history changes.

## Dynamic/continual updating

Changes the **model itself** because calendar-time deployment data accumulate.

## Monitoring

Observes the deployed system and environment.

## Updating

Changes the prediction function.

## Impact monitoring

Tracks whether model-guided decisions/process/outcomes remain beneficial.

## Impact study/evidence

Produces comparative/causal evidence about the effect of using the model-guided strategy.

These terms are not interchangeable.

---

# Evidence limitations

1. Conventional regression recalibration/revision has a much more mature methodology than continual AI updating.
2. AI-specific updating literature is dominated by neural-network applications.
3. Post-deployment routine-care evidence remains sparse.
4. Monitoring metrics/action thresholds are weakly standardized.
5. There is no universally accepted update cadence.
6. There is no universally accepted framework for independent validation of a model that changes continuously.
7. Deployment-induced treatment/action feedback complicates outcome-based monitoring and retraining.
8. Regulatory guidance provides useful governance structures but cannot substitute for scientific validation and is jurisdiction/product specific.

---

# Gap status after PASS-06B16

All three blocking gaps detected in PASS-06B13 have now received dedicated taxonomy-level passes:

1. PASS-06B14 — diagnostic prediction models vs DTA;
2. PASS-06B15 — competing risks / recurrent events / multistate prediction;
3. PASS-06B16 — continual/online updating and post-deployment lifecycle.

This **does not yet authorize synthesis**.

Project workflow requires a new dedicated final prediction-branch gap audit after the newly added material.

## Next micro-pass

**RES-02 / PASS-06B17 — final prediction-branch gap audit after B14–B16: recheck PASS-06A + PASS-06B1…B16 for unresolved design-family gaps, contradictions, unsupported overreach, source-version changes and fitness-specific omissions; decide whether synthesis is now permitted or additional micro-passes are required.**

STOP after this saved micro-pass.
