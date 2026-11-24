# RES-02 / PASS-06B7 — Internal-external and external validation structures

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. что является internal-external cross-validation (IECV);
2. natural clusters в multicentre/IPD/EHR data;
3. leave-one-cluster-out architecture;
4. отличие IECV от ordinary random k-fold CV;
5. что именно IECV проверяет;
6. связь IECV с model development;
7. definition of external validation;
8. fixed-model requirement;
9. temporal external validation;
10. geographical/site external validation;
11. setting/population external validation;
12. target validity vs transportability;
13. model reproducibility vs transportability;
14. repeated external validations across heterogeneous settings;
15. performance heterogeneity;
16. why average performance alone can mislead;
17. model never being “fully validated” in all future contexts;
18. boundary between validation and model updating;
19. structural record for IECV/external validation studies.

Не покрывается здесь:

- detailed recalibration/updating methods;
- model extension after validation;
- detailed meta-analysis of validation performance;
- sample-size calculations for external validation;
- detailed calibration/discrimination formulas;
- fairness/subgroup methods in depth;
- prospective model impact trials;
- dynamic updating over time;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 1

Moons KGM, Hayden J, Williams K, Riley RD.  
**Chapter 1: Prognosis and types of prognosis research in healthcare.**  
Draft version: **March 2026**.

Current official Cochrane material checked 2026-11-17.

Current guidance used:

- internal validation uses the development participant data;
- external validation uses external data sources different from development;
- temporal validation can use individuals from the same target population sampled at a later time;
- geographical validation can use another hospital/practice/country;
- deliberately different settings/populations can be used to examine transportability;
- updating a poorly performing model using validation data creates a modified/new model requiring renewed validation;
- prognosis/model performance can vary by setting, geography and calendar time.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### Source-status note

The Cochrane Prognosis Handbook remains a **draft March 2026** and must be version-checked again during final closure/audit.

---

## 2. Collins et al. — Evaluation of clinical prediction models, part 1

Collins GS, Dhiman P, Ma J, et al.  
**Evaluation of clinical prediction models (part 1): from development to external validation.**  
BMJ. 2024;384:e074819.

Current open-access version checked 2026-11-17.

Key points used:

- multicentre, multi-study and large clustered EHR data should preserve natural clustering;
- simple geographical/spatial splitting can waste information;
- internal-external cross-validation uses clustering by centre/region/study;
- in each iteration, one cluster/group is excluded, model development occurs in remaining clusters, and performance is evaluated in the excluded cluster;
- rotating the excluded cluster examines heterogeneity and generalisability in model performance;
- IECV differs from ordinary random cross-validation because the held-out unit is a meaningful cluster/population.

https://pmc.ncbi.nlm.nih.gov/articles/PMC10772854/

---

## 3. Riley et al. — External validation, part 2

Riley RD, Archer L, Snell KIE, et al.  
**Evaluation of clinical prediction models (part 2): how to undertake an external validation study.**  
BMJ. 2024;384:e074820.

Current open-access article checked 2026-11-17.

Key points used:

- external validation evaluates predictive performance in a different but relevant dataset not used in development;
- the model is applied as originally specified, not refitted first;
- validation dataset should represent the target population and setting for intended implementation;
- multiple external validations may be required across populations/settings;
- transportability concerns intended use in a different population/setting;
- model performance can change across settings/populations/subgroups and over time;
- a model is never completely validated for every future use context.

https://www.bmj.com/content/384/bmj-2023-074820
https://pmc.ncbi.nlm.nih.gov/articles/PMC10788734/

---

## 4. Ahmed et al. — prediction models in IPD meta-analysis

Ahmed I, Debray TPA, Moons KGM, Riley RD.  
**Developing and validating risk prediction models in an individual participant data meta-analysis.**  
BMC Med Res Methodol. 2014;14:3.

Used for classic IECV architecture:

- develop on all but one study;
- evaluate in the omitted study;
- rotate omitted study;
- inspect consistency of performance across studies;
- if performance is poor in some studies, this exposes lack of generalisability.

https://pmc.ncbi.nlm.nih.gov/articles/PMC3890557/

---

## 5. Debray/Riley et al. — generalisable models from clustered data

**Developing more generalizable prediction models from pooled studies and large clustered data sets.**  
Stat Med. 2021;40:3533-3559.

Used for:

- clustered data by study/hospital/region/practice;
- heterogeneity in predictor-outcome relationships and baseline risk;
- IECV as a tool to assess/reduce heterogeneity during development.

https://pmc.ncbi.nlm.nih.gov/articles/PMC8252590/

---

## 6. Riley et al. — multiple external validations and meta-analysis

**Multivariate meta-analysis of individual participant data helped externally validate the performance and implementation of a prediction model.**  
J Clin Epidemiol. 2016;69:40-50.

Used for:

- performance should be examined across multiple populations;
- average performance alone is insufficient if between-population heterogeneity is large;
- calibration/discrimination can vary substantially;
- validation across multiple datasets supports estimation of average performance and heterogeneity.

https://pmc.ncbi.nlm.nih.gov/articles/PMC4688112/

---

# Part A — Ordinary random CV and IECV answer different questions

## 1. Ordinary random k-fold CV

### Established finding
**Confidence: HIGH**

Random k-fold CV distributes participants from the same overall development source across folds.

Typical target:

> reproducibility / optimism within the development data-generating context.

Natural clusters can be mixed across training and held-out folds.

Example:

Participants from hospital A, B, C and D may appear in every fold.

---

## 2. IECV preserves meaningful clusters

### Established finding
**Confidence: HIGH**

IECV requires data containing meaningful clusters such as:

- studies;
- hospitals;
- practices;
- countries;
- regions;
- health systems;
- cohorts.

One cluster is excluded from development and used for validation.

Canonical cycle:

`clusters A+B+C → develop model → evaluate in cluster D`

then rotate:

`A+B+D → evaluate in C`

`A+C+D → evaluate in B`

`B+C+D → evaluate in A`

---

## 3. Cluster is the unit of externalization

### Established finding
**Confidence: HIGH**

The held-out observations are not merely a random subset.

They constitute a **distinct naturally occurring population/context**.

Therefore IECV intentionally tests whether performance changes across cluster boundaries.

### Project rule

Do not label:

> grouped k-fold CV

as IECV merely because folds are group-aware.

The clusters must correspond to scientifically meaningful settings/populations whose heterogeneity matters for intended transportability.

---

# Part B — What IECV evaluates

## 4. IECV examines cross-cluster generalisability

### Established finding
**Confidence: HIGH**

For each excluded cluster, the model-development procedure has no access to that cluster during that cycle.

Performance in the held-out cluster therefore tests:

> How does a model developed in the other available settings perform in this distinct setting?

Across cycles, IECV reveals:

- average performance;
- variability/heterogeneity in performance;
- clusters where transportability is poor;
- sensitivity of model specification to cluster composition.

---

## 5. IECV can detect hidden heterogeneity

### Established finding
**Confidence: HIGH**

Large pooled data can mask heterogeneity.

A model may show acceptable overall performance after pooling while performing poorly in individual:

- hospitals;
- regions;
- countries;
- studies.

IECV exposes this by preserving each cluster as an evaluation environment.

### Project consequence

A large sample size does not substitute for validation across heterogeneity.

---

# Part C — IECV is part of the development-resource architecture

## 6. IECV is stronger than ordinary internal CV but not identical to later independent external validation

### Project synthesis
**Confidence: HIGH**

IECV creates repeated cluster-level external validation **within a multi-cluster development resource**.

In each cycle:

- omitted cluster is external to that cycle's development;
- remaining clusters are used for development.

However after IECV, a final model may be fitted using all available clusters.

Therefore the final fitted model itself has not necessarily been tested on an entirely new data resource that was never part of the wider development project.

### Project terminology

Use:

> **internal-external validation / IECV**

not simply:

> external validation

when referring to the rotating cluster procedure during model development.

This preserves the evidential distinction.

---

## 7. IECV evaluates a model-development strategy across settings

### Established finding
**Confidence: HIGH**

Because each IECV cycle can produce a differently fitted model, IECV evaluates:

> the development approach/model specification applied across clusters,

rather than one final fixed parameter vector alone.

This parallels the distinction already established for nested CV, but at the level of meaningful populations/settings.

---

# Part D — Final model after IECV

## 8. Final development can use all suitable clusters

### Established finding
**Confidence: HIGH**

If IECV shows reasonably consistent performance, methodological guidance allows fitting the final model using all available suitable development clusters.

This maximizes information while retaining evidence about cross-cluster performance from the IECV process.

### Project record

Store separately:

1. IECV results by cluster;
2. heterogeneity across clusters;
3. final model fitted using all chosen development clusters;
4. any cluster exclusions/modifications motivated by IECV.

---

## 9. Poor IECV performance in a cluster is scientifically informative

### Established finding
**Confidence: HIGH**

Poor performance in one or more held-out clusters can indicate:

- baseline-risk heterogeneity;
- predictor-effect heterogeneity;
- measurement differences;
- case-mix differences;
- outcome-definition differences;
- setting-specific relationships.

### Project rule

Do not average away a poorly performing cluster without explanation.

The cluster identifies a limitation of generalisability that must be understood or explicitly bounded.

---

# Part E — External validation definition

## 10. External validation uses a different relevant dataset

### Established finding
**Confidence: HIGH**

Current BMJ guidance defines external validation as evaluation of an existing prediction model in a **different but relevant dataset not used in development**.

Canonical structure:

`fixed model from development → new validation participants → generate predictions → compare predictions with observed outcomes`

### Key requirement

The validation data must not have influenced:

- predictor choice;
- transformations;
- coefficients;
- hyperparameters;
- model selection;
- algorithm choice.

---

## 11. External validation is application, not refitting

### Established finding
**Confidence: HIGH**

A genuine validation first applies the existing model **as specified**.

If investigators immediately re-estimate:

- intercept;
- baseline hazard;
- predictor coefficients;
- model structure

before measuring original-model performance, they are no longer evaluating the original model unchanged.

### Project rule

Always separate:

1. validation of original model;
2. any subsequent recalibration/update.

---

# Part F — Validation dataset must be relevant

## 12. "Independent" alone is insufficient

### Established finding
**Confidence: HIGH**

An external dataset can be completely independent yet irrelevant to intended use.

Validation should represent:

- target population;
- prediction startpoint;
- predictor availability;
- outcome definition;
- prediction horizon;
- setting;
- measurement procedures.

### Project consequence

External validation evidence is only meaningful relative to an intended use claim.

---

# Part G — Target validity vs transportability

## 13. Target validity

### Established finding
**Confidence: HIGH**

External validation can examine the model in another sample from essentially the **same intended target population and setting**.

This asks:

> Does the model reproduce in another relevant sample of the intended population?

Examples:

- another cohort from similar primary-care practices;
- later participants from same health system under same intended use.

---

## 14. Transportability

### Established finding
**Confidence: HIGH**

Transportability asks whether the model performs in an intentionally different population or setting.

Examples:

- developed in secondary care → tested in primary care;
- developed in one country → tested in another;
- developed under one measurement system → tested under another;
- developed in recreational athletes → tested in elite athletes.

### Project rule

Do not treat all external validations as equally strong evidence for every deployment context.

Record **what changed** between development and validation.

---

# Part H — Temporal external validation

## 15. Later-period validation

### Established finding
**Confidence: HIGH**

Cochrane explicitly describes external validation using new individuals from the same target population sampled at a later calendar period as:

> temporal validation.

Potential changes over time include:

- care/training practices;
- baseline risk;
- equipment;
- measurement;
- population composition;
- software;
- treatment availability;
- behaviour.

### Project classification

If the model was fixed before the later participants were available to development:

> temporal external validation.

---

## 16. Calendar-time separation can detect drift

### Established finding
**Confidence: HIGH**

A model can lose performance over time because the data-generating process changes.

Examples:

- improved treatments reduce baseline risk;
- new exercise programming becomes common;
- wearable algorithms change;
- referral pathways change;
- populations change.

Temporal validation is therefore not merely another random sample.

It probes **calendar-time transportability/stability**.

---

# Part I — Geographical/site external validation

## 17. Different hospital/practice/country

### Established finding
**Confidence: HIGH**

Cochrane recognizes external validation in:

- another hospital;
- practice;
- country;

as geographical validation.

The purpose is to test whether the model transports across locations/settings where:

- case mix;
- baseline risk;
- measurement;
- care;
- predictor effects

may differ.

---

## 18. Different measurement definitions can still be a meaningful stress test

### Established finding
**Confidence: HIGH**

Cochrane notes that geographical validation may even involve some differences in predictor/outcome definitions or measurements.

This may intentionally test transportability.

### Important qualifier

If measurement becomes so different that the original model cannot be applied as specified, the study may no longer be a clean validation of the same model.

### Project extraction

Record:

1. identical measurement?;
2. operationally equivalent measurement?;
3. substituted measurement?;
4. unknown equivalence?

---

# Part J — Setting/population external validation

## 19. Deliberate setting shift

### Established finding
**Confidence: HIGH**

A model may be developed in one setting and tested in another:

- secondary → primary care;
- supervised laboratory → routine clinic;
- supervised gym → home training;
- research-grade testing → consumer devices.

This directly addresses a transportability claim.

---

## 20. Population shift

### Established finding
**Confidence: HIGH**

External validation can intentionally test different participant types.

However the more the population changes, the more explicit the intended use claim must be.

### Project rule

Do not call poor performance a "failure of validation" without asking:

> Was this population actually within the intended scope of the model?

Sometimes poor performance correctly shows that the model should **not** be transported there.

---

# Part K — Reproducibility vs transportability

## 21. Internal reproducibility

### Project terminology
**Confidence: HIGH**

Evidence from bootstrap/CV primarily asks:

> Would development performance reproduce among comparable individuals from the same source context?

This is mainly an overfitting/generalisation-within-source question.

---

## 22. Cross-setting transportability

### Project terminology
**Confidence: HIGH**

IECV and external validation ask progressively stronger questions about performance when:

- source;
- location;
- calendar period;
- setting;
- population;
- measurement environment

change.

### Project rule

Avoid the single vague term:

> generalisation

when the relevant dimension can be named.

Use:

- within-source reproducibility;
- temporal transportability;
- geographical transportability;
- setting transportability;
- population transportability.

---

# Part L — One external validation is not the end

## 23. External validity is context-dependent

### Established finding
**Confidence: HIGH**

BMJ 2024 states that a model is never completely validated because performance can change across:

- populations;
- settings;
- subgroups;
- calendar time.

### Project consequence

"Externally validated" must not be interpreted as:

> proven universally valid.

It means:

> evaluated in one or more specified external contexts.

---

## 24. Multiple external validations are stronger

### Established finding
**Confidence: HIGH**

When a model is intended for multiple settings/populations, multiple external datasets provide evidence about:

- average performance;
- consistency;
- heterogeneity;
- conditions under which recalibration may be needed.

### Project rule

Count external validations by **independent context**, not merely number of papers.

Two papers using the same underlying database are not necessarily two independent settings.

---

# Part M — Average performance can conceal heterogeneity

## 25. Mean performance is not enough

### Established finding
**Confidence: HIGH**

Across external datasets, a model may have:

- acceptable average discrimination;
- but strong between-setting heterogeneity;
- excellent calibration in some settings;
- poor calibration in others.

Riley/Debray methodological work shows that performance heterogeneity can be clinically important even when average metrics look reasonable.

### Project extraction

Where multiple validation datasets exist, record:

1. performance per dataset/cluster;
2. average performance;
3. between-setting heterogeneity;
4. prediction interval / expected range for new settings if available.

---

## 26. Calibration is especially setting-sensitive

### Established finding
**Confidence: HIGH**

Baseline outcome risk can differ substantially between settings even when relative predictor effects remain similar.

Therefore calibration can deteriorate when transporting a model.

### Project consequence

A model with stable discrimination can still require setting-specific recalibration.

Detailed updating methods are deferred to PASS-06B8.

---

# Part N — Independence of validation data

## 27. Functional independence matters more than file separation

### Established finding
**Confidence: HIGH**

Validation data cease to be fully independent if they influenced:

- feature engineering;
- hyperparameter tuning;
- model selection;
- inclusion/exclusion rules chosen after viewing outcomes;
- post-hoc model redesign.

### Project rule

External validation requires **development-process independence**, not merely:

> a different filename/database table.

---

## 28. Same institution can still provide external data

### Established finding
**Confidence: HIGH**

External does not necessarily mean:

> different institution.

Later-period participants from the same target population/health system can be external if they were not used in development and the model was fixed beforehand.

This is temporal external validation.

---

## 29. Different institution can still be contaminated

### Project inference
**Confidence: HIGH**

A geographically different dataset is not cleanly external if investigators used its outcomes repeatedly to modify the model before reporting "validation".

Then the dataset has become part of development/update.

---

# Part O — Model updating boundary

## 30. Validate first, update second

### Established finding
**Confidence: HIGH**

Cochrane states that if a model performs poorly in external data, researchers may:

- recalibrate intercept/baseline hazard;
- re-estimate predictor weights;
- add predictors.

But once validation data are used to alter the model, a **new/modified model** has been developed.

### Project rule

Preserve the sequence:

`original fixed model → external validation → performance result → optional update → updated model → new validation requirement`

Do not report updated performance on the same update data as independent validation of the updated model.

---

# Part P — IECV vs independent external validation

## 31. Evidence ladder

### Project synthesis
**Confidence: HIGH**

For one prediction model/development programme:

1. apparent performance;
2. ordinary internal validation;
3. internal-external cross-validation across meaningful clusters;
4. independent external validation in a new relevant dataset;
5. repeated external validations across heterogeneous intended-use contexts;
6. impact/utility evaluation.

These are **not interchangeable**.

### Important nuance

This is an evidence architecture, not a rigid universal ranking for every research question.

A high-quality external validation cannot repair a fundamentally mis-specified target population, and a strong IECV may be more informative than a tiny poor-quality external study.

---

# Part Q — Fitness/exercise translations

## 32. IECV across gyms

Development resource:

- 12 gyms;
- same broad training system;
- participant-level baseline and 16-week outcomes.

IECV:

1. leave gym A out;
2. develop model on gyms B-L;
3. evaluate in A;
4. rotate all gyms.

This tests:

> whether the development approach transports across gyms inside the observed gym network.

It is stronger than randomly mixing trainees from all gyms into 10 folds.

---

## 33. Temporal external validation

Model:

> developed/fixed using trainees enrolled 2023-2025.

New validation cohort:

> trainees enrolled during 2026 after model freeze.

This tests:

> temporal stability of predictions under later training practices/population.

Classification:

> temporal external validation.

---

## 34. Geographical external validation

Model:

> developed in Israeli recreational trainees.

Validation:

> independently collected cohort in Germany using equivalent baseline measures and outcome definitions.

Classification:

> geographical/population external validation.

Need to inspect:

- training culture;
- equipment;
- adherence context;
- measurement equivalence;
- baseline risk/outcome distribution.

---

## 35. Setting transportability

Model:

> developed under supervised gym training.

Validation:

> home-based trainees using app-guided resistance training.

This is a much stronger setting shift.

A poor result may correctly show:

> model not transportable to home-training deployment.

---

# Part R — Structural record produced by PASS-06B7

## 36. IECV/external-validation record

For each validation analysis, record:

1. model identity/version;
2. model fully specified before validation? YES/NO;
3. development population;
4. development setting;
5. development calendar period;
6. development sites/clusters;
7. validation type:
   - apparent;
   - internal;
   - IECV;
   - independent external;
8. if IECV:
   - cluster unit;
   - number of clusters;
   - leave-one-cluster-out or grouped scheme;
   - full development pipeline rerun per cycle?;
   - performance reported per held-out cluster?;
   - heterogeneity assessed?;
9. if external:
   - dataset independently assembled?;
   - participants absent from development?;
   - outcome data unavailable to developers until freeze?;
10. temporal relation:
   - same period;
   - later period;
11. geographical relation:
   - same site;
   - other site;
   - other region/country;
12. setting relation:
   - same intended setting;
   - deliberately different setting;
13. population relation;
14. predictor definitions:
   - same;
   - equivalent;
   - changed;
15. outcome definition:
   - same;
   - equivalent;
   - changed;
16. prediction horizon;
17. measurement process similarity;
18. model applied unchanged first? YES/NO;
19. calibration;
20. discrimination;
21. overall performance;
22. utility/net benefit if relevant;
23. subgroup/cluster performance;
24. between-dataset heterogeneity;
25. recalibration/update performed after original-model evaluation?;
26. updated model separately identified/versioned?;
27. updated model independently revalidated?;
28. target validity claim;
29. transportability claim;
30. project conclusion:
   - within-source reproducibility only;
   - cross-cluster generalisability;
   - temporal transportability;
   - geographical transportability;
   - setting/population transportability;
31. unresolved applicability/generalisation issues.

---

# Practical rules produced by PASS-06B7

1. IECV and ordinary random k-fold CV are different structures.
2. IECV holds out meaningful natural clusters, not random participant subsets.
3. IECV tests cross-cluster generalisability/heterogeneity within a multi-cluster development resource.
4. Each IECV-held cluster is external to that cycle's development, but IECV should still be labelled separately from later independent external validation.
5. IECV evaluates the development approach across settings and can guide whether a final model is fitted on all suitable clusters.
6. Poor performance in one held-out cluster is a finding, not noise to be averaged away automatically.
7. External validation applies a fixed model to a different relevant dataset not used in development.
8. External validation should evaluate the original model before any recalibration/update.
9. Independence is functional: validation data must not influence model development decisions.
10. A dataset can be independent but irrelevant; target-population/setting fit still matters.
11. Temporal external validation uses genuinely later participants after model freeze.
12. Geographical external validation examines another site/practice/country.
13. Setting/population validation deliberately probes transportability beyond the development environment.
14. External-validation evidence must specify **what dimension changed** between development and validation.
15. Internal validation primarily informs within-source reproducibility/optimism.
16. IECV and external validation progressively inform cross-setting transportability/generalisation.
17. Same institution can provide external temporal validation if later data were not used in development.
18. Different institution is not automatically independent if its outcomes were used to tune/update the model.
19. One successful external validation does not make a model universally valid.
20. Models can drift over calendar time as baseline risk, measurement and practice change.
21. Multiple external validations across intended settings are stronger than a single external dataset.
22. Average performance across datasets can hide clinically important heterogeneity.
23. Performance should therefore be examined per dataset/cluster as well as in aggregate.
24. Calibration is particularly sensitive to baseline-risk differences across settings.
25. Updating after poor validation creates a modified/new model.
26. Updated performance in the same data used for updating is not independent validation of the updated model.
27. The project should version models explicitly whenever recalibration/re-estimation/extension changes the prediction function.
28. Minimum architecture:
   **development → internal validation → IECV where clustered multi-source data exist → fixed final model → independent external validation(s) → update if needed → revalidation → impact evaluation**.

---

# Important nuance

There is no binary state:

> "validated" / "not validated"

that captures the whole evidence base.

Validation evidence is conditional on:

- model version;
- population;
- setting;
- calendar period;
- measurement process;
- outcome definition;
- prediction horizon.

Therefore project language should prefer:

> "externally evaluated in X settings/populations"

over:

> "the model is validated"

when precision matters.

---

# What remains unresolved after PASS-06B7

The prognosis/prediction branch remains **RESEARCHING**.

Still requires separate deep blocks on:

1. recalibration / model updating structures;
2. model extension;
3. whether updating data can simultaneously count as validation;
4. sequential/continual model updating;
5. model impact / utility studies;
6. performance-estimand integration;
7. prediction under interventions / treatment-context issues if still needed;
8. prognosis/prediction structural synthesis;
9. final gap audit.

## Next micro-pass

**RES-02 / PASS-06B8 — model recalibration, updating and extension structures: validation-before-update sequence, intercept/baseline-hazard recalibration, coefficient updating, adding predictors, version identity, and revalidation requirements.**

STOP after this saved micro-pass.
