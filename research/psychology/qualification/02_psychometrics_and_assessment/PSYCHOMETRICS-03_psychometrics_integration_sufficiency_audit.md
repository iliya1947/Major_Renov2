# PSYCHOMETRICS-03 — Psychometrics integration and sufficiency audit: score-use × model-level consistency, individual interpretation, fairness, change, and closure decision

Status: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**

Evidence cutoff: **2026-11-19**

## Purpose

Audit PSYCHOMETRICS-01 and PSYCHOMETRICS-02 as one integrated measurement-inference system, identify contradictions or missing bridges that could still produce unreliable psychological conclusions, repair any blocking integration gap, and close the PSYCHOMETRICS domain only if no unresolved dependency remains that is necessary for reliable general psychological reasoning.

This block adds no new psychometric taxonomy for its own sake.

It asks one practical question:

> Can Kira move from psychological observations/items through a scoring model to an individual, group, classification, or change conclusion without silently converting model output into psychological fact, underrepresenting uncertainty, or confusing measurement evidence with substantive explanation?

---

# I. Audited architecture

## 1. PSYCHOMETRICS-01 — applied score/use level

PSYCHOMETRICS-01 established:

- score, construct, scoring rule, and interpretation are distinct;
- validity is interpretation/use specific;
- reliability is not validity;
- group reliability does not imply individual precision;
- conditional SEM/score-region precision can matter;
- dimensionality must support the reported score;
- measurement invariance constrains comparison;
- norms are reference-dependent;
- cut scores are decision rules;
- decision consistency and decision accuracy are distinct;
- raw change, reliable change, responsiveness, and meaningful change are distinct;
- repeated measurement requires within-person-aware psychometrics;
- technology/automated scoring does not bypass validity.

Primary failure prevented:

`reported score -> psychological fact`.

## 2. PSYCHOMETRICS-02 — item/model level

PSYCHOMETRICS-02 established:

- CTT, factor analysis, IRT, and Rasch are model frameworks rather than a truth hierarchy;
- latent variables require identification/scaling conventions;
- theta and factor scores are estimates;
- unidimensionality is response structure, not ontology;
- local independence is a substantive scoring assumption;
- item discrimination/information are not content validity;
- Rasch invariance is conditional rather than automatic;
- MLE/MAP/EAP/WLE and factor-score methods can differ;
- fit is multi-level and not reducible to one cutoff;
- person misfit is not deception;
- DIF is not automatically bias;
- anchor choice matters;
- item deletion changes operationalization;
- linking/calibration/transport constrain score comparability.

Primary failure prevented:

`latent-variable model -> objective psychological essence`.

## 3. Integrated measurement chain

The two blocks jointly imply the canonical chain:

`construct`
-> `item/behavior universe`
-> `response process`
-> `measurement procedure`
-> `scoring/model family`
-> `model assumptions + identification`
-> `item/model fit + local dependence`
-> `person/score estimator`
-> `score-level precision`
-> `invariance/DIF/linking`
-> `norm/reference system`
-> `cutoff/change rule if used`
-> `validity for intended use`
-> `corroborating evidence`
-> `narrow conclusion`.

No intermediate output is automatically the psychological construct itself.

---

# II. Contradiction audit

## 4. CTT versus IRT

Potential tension:

- PSYCHOMETRICS-01 uses classical reliability/SEM language;
- PSYCHOMETRICS-02 emphasizes IRT/model-based conditional precision.

Resolution:

No contradiction.

CTT and IRT can both support precision analysis under different assumptions and reporting scales.

A classical reliability coefficient answers a group-level replication question.

IRT information/person-score SE answers local model-based precision questions.

Neither automatically validates score meaning.

## 5. Global SEM versus conditional SEM

Potential tension:

- traditional SEM provides one test-level precision estimate;
- 2026 individual-score work emphasizes conditional precision.

Resolution:

No contradiction if global SEM is treated as an average approximation and conditional precision is preferred when score-level precision materially varies and defensible methods are available.

The official Standards already recognize conditional standard errors as useful, especially around decision regions.

Recent Psychometrika work strengthens rather than reverses this logic.

## 6. Simple sum scores versus latent scores

Potential tension:

- latent models can model item functioning and conditional precision;
- PSYCHOMETRICS-02 also allows simple sums to outperform unstable weighted scores in some contexts.

Resolution:

No contradiction.

The correct question is not:

`Which score is more sophisticated?`

It is:

> Which scoring rule gives the most defensible interpretation and precision for the intended use, under replicated evidence?

A simple score can be preferable when:

- weighting/model estimates are unstable;
- model complexity adds little incremental information;
- content validity is easier to preserve;
- validation supports the simpler interpretation.

A latent score can be preferable when:

- item functioning matters;
- conditional precision matters;
- linking/equating is needed;
- the latent model is adequately supported.

## 7. Unidimensionality versus construct complexity

Potential tension:

- some scoring models assume one dominant dimension;
- psychological constructs can be mechanistically complex.

Resolution:

No contradiction.

Statistical unidimensionality concerns response covariance sufficient for a scoring purpose.

It does not imply one psychological mechanism.

## 8. Measurement invariance versus DIF

Potential tension:

- PSYCHOMETRICS-01 treats invariance at score/factor comparison level;
- PSYCHOMETRICS-02 treats DIF at item level.

Resolution:

Complementary.

Measurement invariance asks whether parameters/measurement relations are comparable at specified model levels.

DIF asks whether particular items behave differently conditional on modeled standing.

One can inform the other.

Neither alone exhausts fairness.

## 9. DIF versus bias/fairness

Potential tension:

- DIF is a statistical comparison;
- fairness is a normative/validity/use concept.

Resolution:

No contradiction.

DIF can provide evidence for a fairness investigation.

Bias requires substantive interpretation.

Fairness additionally depends on:

- construct representation;
- accessibility;
- administration;
- opportunity;
- predictive consequences;
- decision use.

Thus:

`DIF != bias`

and:

`no detected DIF != fairness established`.

## 10. Model fit versus validity

Potential tension:

- fit is necessary evidence for a model;
- fit cannot establish the construct.

Resolution:

No contradiction.

Model fit answers:

> Does this statistical structure approximate the observed response data adequately for this purpose?

Validity asks:

> Does the accumulated evidence support the intended interpretation/use?

Fit is one component of internal-structure evidence.

## 11. Item deletion versus improved fit

Potential tension:

- removing misfitting items can improve model fit;
- item removal can damage construct coverage.

Resolution:

No contradiction after content-validity priority is explicit.

Every deletion changes the operationalization.

Post-deletion validation must reassess:

- content map;
- structural validity;
- reliability/precision;
- external relations;
- invariance/fairness;
- intended use.

## 12. Person fit versus score interpretation

Potential tension:

- a model can fit the sample well;
- a specific person's response pattern can fit poorly.

Resolution:

No contradiction.

Population-level model fit and person-level compatibility are different targets.

Person misfit should weaken ordinary person-score interpretation where relevant.

It does not identify the cause of the atypical response pattern.

## 13. Factor-model fit versus factor-score precision

Potential tension:

- factor model can fit well;
- estimated factor scores can remain imprecise.

Resolution:

No contradiction.

Covariance-level fit and person-score determinacy are different properties.

Rhemtulla and Savalei (2025) explicitly distinguish estimated factor scores from unobservable true factor values.

## 14. Norms versus latent scaling

Potential tension:

- latent scores use arbitrary identification/scaling conventions;
- norm scores create standardized population interpretations.

Resolution:

No contradiction.

Norming is a reporting/reference transformation.

It does not create natural psychological units.

A normed latent score inherits:

- latent-model uncertainty;
- calibration/linking uncertainty;
- reference-population uncertainty.

## 15. Longitudinal change versus item/parameter drift

Potential tension:

- PSYCHOMETRICS-01 permits reliable-change analysis;
- PSYCHOMETRICS-02 warns item parameters can drift.

Resolution:

No contradiction.

Reliable change requires both:

1. sufficient score precision/retest modeling;
2. sufficient measurement comparability across occasions.

If the measurement model changes, observed score change cannot be interpreted purely as person change.

## 16. Responsiveness versus IRT information

Potential tension:

- responsiveness concerns detection of change;
- information concerns local score precision.

Resolution:

Complementary but distinct.

High local information can improve change detection.

It does not prove that the score tracks the intended longitudinal construct or that the magnitude is meaningful.

## 17. Decision consistency versus model precision

Potential tension:

- a score may be precise;
- classification may still be unstable near a threshold.

Resolution:

No contradiction.

Decision consistency is a threshold-specific property.

It depends on:

- score distribution;
- conditional precision;
- cutoff;
- retest/model variability.

## 18. Prediction versus measurement

Potential tension:

- an ML/model-derived score may predict well;
- construct interpretation can remain weak.

Resolution:

No contradiction.

Prediction can establish predictive utility under a target distribution.

It does not automatically establish:

- construct validity;
- mechanism;
- fairness;
- portability;
- psychological meaning.

---

# III. Blocking integration gap discovered

## 19. The two blocks lacked one canonical uncertainty stack

PSYCHOMETRICS-01 and -02 each represented uncertainty correctly within their own scope.

However, without an explicit integrated hierarchy, a user could still collapse several distinct uncertainties into one generic phrase such as:

> "the score has some error."

That is insufficient for individual interpretation.

The following sources of uncertainty are different and may coexist.

## 20. Layer A — response/observation uncertainty

Includes:

- transient state;
- response inconsistency;
- rater variation;
- device/timing variation;
- item sampling;
- administration effects;
- practice/fatigue;
- missingness.

## 21. Layer B — measurement-model uncertainty

Includes uncertainty about:

- dimensionality;
- local dependence;
- model family;
- category structure;
- omitted factors;
- fit approximation;
- model specification.

## 22. Layer C — parameter-estimation uncertainty

Includes sampling uncertainty in:

- loadings;
- thresholds;
- item difficulties;
- discriminations;
- reliability coefficients;
- norm parameters;
- linking constants.

## 23. Layer D — person-score estimation uncertainty

Includes:

- SEM/cSEM;
- posterior uncertainty;
- test information;
- factor-score determinacy;
- MLE/MAP/EAP/WLE differences;
- shrinkage/prior effects;
- extreme response uncertainty.

## 24. Layer E — comparability/transport uncertainty

Includes:

- measurement invariance;
- DIF;
- anchor contamination;
- mode effects;
- calibration population mismatch;
- longitudinal drift;
- language/cultural adaptation;
- dataset shift.

## 25. Layer F — reference/norm uncertainty

Includes:

- sampling error in norm distributions;
- reference-population mismatch;
- norm age/drift;
- sparse-tail estimation;
- continuous-norm model uncertainty.

## 26. Layer G — decision/change uncertainty

Includes:

- cutoff choice;
- base rate;
- false-positive/false-negative costs;
- decision consistency;
- decision accuracy;
- RCI/MDC formula choice;
- practice corrections;
- regression to mean;
- meaningful-change criterion.

## 27. Layer H — validity/use uncertainty

Even a statistically precise and stable score may have uncertain meaning because of:

- construct underrepresentation;
- response-process mismatch;
- weak criterion relations;
- lack of external validation;
- unsupported generalization;
- inappropriate intended use.

## 28. These uncertainties must not be mechanically added

There is no universal formula:

`total uncertainty = A + B + C + D + E + F + G + H`.

Some sources can be represented in one statistical model.

Others are structural, substantive, external-validity, or decision uncertainties.

Canonical repair:

**Name the uncertainty layer that threatens the inference. Do not compress all uncertainty into a single generic error bar unless the model genuinely represents those components.**

This repair closes the only blocking integration gap.

---

# IV. Integrated individual-score interpretation protocol

## 29. Step 1 — define the proposition

Before reading a score, specify whether the intended conclusion is about:

- current state;
- stable trait;
- capacity;
- relative standing;
- classification;
- prediction;
- longitudinal change;
- treatment/intervention monitoring;
- group difference;
- developmental trajectory.

Different propositions require different psychometric evidence.

## 30. Step 2 — identify the measurement object

Ask:

- What observations/items produced the score?
- What construct do they sample?
- What response process is assumed?
- Is content coverage adequate?

If content/response-process validity is weak, later modeling cannot rescue the conclusion.

## 31. Step 3 — identify the scoring model

Possible score types:

- raw sum/mean;
- weighted composite;
- standardized/norm score;
- factor score;
- IRT theta;
- Rasch estimate;
- classifier probability;
- categorical cut score.

The scoring model determines what additional assumptions must be checked.

## 32. Step 4 — verify structure/model assumptions

As applicable:

- dimensionality;
- ordinal treatment;
- local independence;
- monotonicity;
- item/category fit;
- global fit;
- identification;
- person fit;
- missingness/speed.

## 33. Step 5 — quantify person-level precision

Ask:

- What precision estimate applies at this score level?
- Is cSEM / posterior SE / information available?
- Is factor-score determinacy sufficient?
- Does estimator/prior matter materially?
- Is the person in a low-information tail?

## 34. Step 6 — verify comparability

If comparing across:

- groups;
- languages;
- modes;
- occasions;
- forms;
- populations;

check:

- invariance;
- DIF;
- linking;
- calibration;
- drift;
- target-population fit.

## 35. Step 7 — verify reference system

If using a percentile/T-score/norm:

- define target population;
- define reference population;
- inspect norm sample;
- inspect norm age;
- inspect tail uncertainty;
- confirm scoring/version/mode equivalence.

## 36. Step 8 — verify decision/change rule

If using cutoff/change:

- specify threshold derivation;
- quantify score uncertainty around threshold;
- examine decision consistency;
- use target base rates;
- specify exact RCI/MDC method;
- distinguish reliable from meaningful change.

## 37. Step 9 — verify validity for the intended use

Check the evidence chain:

- content;
- response process;
- internal structure;
- relations to other variables;
- fairness/consequences where relevant;
- external/target-population applicability.

## 38. Step 10 — corroborate before strong person-level inference

The psychometric score remains one evidence source.

Strong individual conclusions should consider:

- behavioral evidence;
- repeated observations;
- relevant self-report;
- informant evidence;
- task/context evidence;
- prospective predictions;
- contradictions.

Psychometrics controls measurement.

It does not replace evidence-to-individual reasoning.

---

# V. Fail-closed rules

## 39. Undefined construct

If construct meaning is vague/circular:

**STOP strong score interpretation.**

## 40. Unsupported scoring structure

If total/subscale/latent score structure is unsupported:

**do not report the score as if its dimensional meaning were established.**

## 41. Unknown individual precision

If person-level decisions are high-stakes and precision near the score is unknown:

**weaken or defer categorical interpretation.**

## 42. Material person misfit

If the response pattern strongly conflicts with model expectations:

**do not assume the standard theta/factor interpretation applies without qualification.**

## 43. Failed comparability

If meaningful invariance/linking is absent for the required comparison:

**do not interpret observed score differences as pure construct differences.**

## 44. Inappropriate norms

If reference population is poorly matched:

**do not use the resulting percentile/standard score as definitive relative standing.**

## 45. Score near cutoff

If uncertainty materially overlaps the threshold:

**categorical confidence must be reduced.**

## 46. Change without comparable measurement

If measurement meaning/parameters drift across occasions:

**do not interpret score difference solely as person change.**

## 47. DIF without substantive analysis

If DIF is detected:

**do not label the item biased until the source and score impact are investigated.**

## 48. Good fit without validity

If the only evidence is factor/IRT fit:

**do not claim construct validity.**

## 49. Prediction without construct meaning

If a score predicts a criterion but construct evidence is weak:

**describe predictive utility, not psychological essence or mechanism.**

---

# VI. Fairness integration

## 50. Fairness is broader than invariance

Fair interpretation can require evidence concerning:

- content representation;
- accessibility;
- language;
- administration;
- measurement invariance;
- DIF;
- predictive relations;
- opportunity;
- decision consequences.

No single statistic establishes fairness.

## 51. Measurement invariance is claim-specific

The required invariance depends on the comparison.

Do not demand stronger invariance than the intended claim requires.

Do not accept weaker invariance than the intended claim requires.

## 52. Partial/approximate invariance is not automatic permission

When exact invariance fails, partial or approximate models can be defensible.

But the analyst must show:

- which parameters differ;
- why remaining differences do not invalidate the target comparison;
- whether score impact is small enough;
- whether conclusions replicate.

## 53. DIF must be connected to score impact

A statistically flagged item can have negligible test-level impact.

Multiple small effects can accumulate.

Therefore report both:

- item-level effect;
- score/decision-level consequence.

## 54. Fairness and validity interact

A score cannot be declared fair merely because average performance is equal.

A score cannot be declared unfair merely because groups differ.

The question is whether the intended interpretation/use is comparably supported and decision procedures are defensible.

---

# VII. Change integration

## 55. Change inference requires both measurement stability and change precision

Strong change interpretation requires:

1. same/linked construct across occasions;
2. sufficient longitudinal invariance;
3. adequate person-level precision;
4. practice/retest handling;
5. regression-to-mean awareness;
6. explicit change statistic;
7. meaningful-change criterion if substantive importance is claimed.

## 56. IRT/latent change does not automatically solve change measurement

Latent scoring can model conditional precision and item drift.

But it can still fail through:

- wrong longitudinal model;
- changing response process;
- poor linking;
- sparse information;
- changing item exposure;
- estimator dependence.

## 57. Reliable change is a statistical statement under a chosen error model

It is not:

- mechanism;
- treatment efficacy by itself;
- functional improvement;
- clinical recovery.

## 58. Meaningful change requires an external/substantive standard

Importance can be defined through:

- patient/person relevance;
- functional outcomes;
- validated anchors;
- decision consequences;
- domain-specific criteria.

No universal MIC/MCID exists across constructs and populations.

---

# VIII. Model complexity and parsimony

## 59. Complexity must buy inferential value

A more complex model is justified when it materially improves:

- fit to meaningful structure;
- conditional precision;
- transport;
- score comparability;
- predictive validity;
- explanatory discrimination;

without unacceptable loss of:

- stability;
- interpretability;
- content validity;
- replicability.

## 60. Simpler scores are not automatically naive

A sum score with:

- strong content validity;
- adequate structure;
- good precision;
- appropriate norms;
- replicated criterion relations;

can be more defensible than a fragile latent score.

## 61. Latent scores are not automatically superior

Latent scoring adds assumptions.

It earns its use only when those assumptions are supported and the score-use argument benefits.

## 62. Parameter-rich models should face stronger replication pressure

More degrees of modeling freedom create more opportunities for:

- overfit;
- unstable weights;
- sample-specific solutions;
- post-hoc optimization.

Strong use should therefore prefer independent validation/replication.

---

# IX. Cross-domain integrated routing

## 63. COG / EXE / MET

A performance score does not become a stable cognitive capacity unless:

- construct/task process is valid;
- score precision is sufficient;
- task reliability/transfer supports person-level interpretation.

## 64. LEA

A fitted learning parameter does not become a stable learning trait unless:

- parameter recovery/identifiability is adequate;
- within-task reliability is sufficient;
- cross-task/generalization evidence exists;
- person-level score uncertainty is represented.

## 65. MOT / AFF / STR

Questionnaire/EMA scores require:

- appropriate time scale;
- within/between separation;
- structural validity;
- longitudinal comparability where change is inferred.

## 66. SOC / PER

Trait/social scales require:

- construct breadth;
- self/informant method awareness;
- invariance/DIF for group comparisons;
- score-level precision for individual claims.

## 67. DEV

Age-related differences require:

- developmental construct equivalence;
- longitudinal/group invariance;
- appropriate age norms;
- cohort/period considerations outside psychometrics.

## 68. NEU

Neural signatures converted into individual scores require:

- neural measurement validity;
- external predictive validation;
- person-level calibration/precision;
- dataset-shift checks.

Psychometrics cannot convert a neural correlate into a mechanism or diagnosis.

## 69. CLN

Clinical screening/classification requires:

- score precision;
- cut-score evidence;
- base-rate-aware predictive values;
- decision uncertainty.

Diagnosis additionally requires the clinical/psychopathology evidence routed to Phase C.

---

# X. Integrated 64-question Psychometrics Inference Gate

## A. Construct / response process

1. What exact construct is being inferred?
2. What observations/items sample it?
3. Is content coverage sufficient?
4. Are assumed response processes plausible?
5. Could nuisance skills/processes dominate the score?
6. Is the construct definition independent of the score itself?

## B. Score/model

7. What exact score is reported?
8. Is it raw, transformed, normed, latent, composite, probability, or category?
9. What model/scoring rule generates it?
10. Is the model simpler or more complex than necessary?
11. What assumptions are required?
12. How is a latent scale identified if relevant?
13. Does the score have natural units or only model/reference units?
14. Is the score being mistaken for the construct?

## C. Structure

15. What dimensionality is supported?
16. Does the scoring rule match that dimensionality?
17. Are subscores genuinely interpretable?
18. Is local dependence material?
19. Are method factors plausible?
20. Are item/category functions appropriate?
21. Was exploratory development separated from confirmation?
22. Did item deletion alter content coverage?

## D. Precision

23. What reliability evidence applies?
24. What person-level precision applies at this score?
25. Is cSEM/posterior SE/information available?
26. Is factor-score determinacy adequate?
27. Does estimator/prior materially affect the score?
28. Is the score in a sparse/extreme region?
29. Does person fit weaken interpretation?
30. What uncertainty remains unmodeled?

## E. Comparability / fairness

31. Is comparison across group/time/mode/form/population occurring?
32. What invariance is required?
33. Was DIF assessed where relevant?
34. Are anchors trustworthy?
35. Is DIF magnitude practically important?
36. Is test-level score impact evaluated?
37. Are linking/calibration assumptions supported?
38. Could drift or mode effects explain differences?
39. Is fairness being reduced to one statistic?
40. Is predictive fairness separately relevant?

## F. Norms / decisions

41. What is the target population?
42. What is the reference population?
43. What sample/model estimated norms?
44. Are norms current enough for the purpose?
45. Is tail uncertainty represented?
46. How was any cutoff derived?
47. Does score uncertainty cross the cutoff?
48. What are target-population base rates?
49. Are decision consistency and accuracy known?
50. What are false-positive/false-negative consequences?

## G. Change

51. Is measurement comparable across occasions?
52. Is person-level change larger than expected error?
53. Are practice/retest effects represented?
54. Is regression to the mean plausible?
55. Is the exact RCI/MDC/change model specified?
56. Could item/parameter drift mimic change?
57. Is reliable change separated from meaningful change?
58. What external criterion makes the change important?

## H. Validity / final use

59. What validity evidence supports this exact interpretation?
60. Does evidence support this population/context/use?
61. Is prediction being confused with construct validity?
62. What independent evidence corroborates the score?
63. Which uncertainty layer most threatens the conclusion?
64. What is the narrowest defensible conclusion?

---

# XI. High-value integrated failure modes

## Failure A — measurement model = psychology

Incorrect:

`factor/IRT model -> psychological architecture`.

Correct:

The measurement model represents response structure for a scoring purpose.

## Failure B — reliability = precision for this person

Incorrect.

Correct:

Individual precision can vary strongly across the score range.

## Failure C — cSEM = all uncertainty

Incorrect.

Correct:

cSEM addresses one measurement-precision layer, not model validity, norm uncertainty, transport, or decision consequences.

## Failure D — latent = error-free

Incorrect.

Correct:

Latent scores are estimated and can retain substantial individual uncertainty.

## Failure E — simple score = inferior score

Incorrect.

Correct:

A simpler score can be more stable and equally or more valid for a given use.

## Failure F — fit = validity

Incorrect.

Correct:

Fit supports structural compatibility only.

## Failure G — invariance = fairness

Incorrect.

Correct:

Invariance is one component of fairness evidence.

## Failure H — DIF = bias

Incorrect.

Correct:

DIF requires substantive interpretation and score-impact analysis.

## Failure I — norm = universal reference

Incorrect.

Correct:

Norm interpretation is reference-population specific.

## Failure J — percentile = psychological amount

Incorrect.

Correct:

Percentile is relative rank.

## Failure K — cutoff = natural category

Incorrect.

Correct:

Cutoff is a decision rule.

## Failure L — theta difference = real change

Incorrect.

Correct:

Longitudinal comparability, precision, drift, and response process must be checked.

## Failure M — RCI = important change

Incorrect.

Correct:

Reliable and meaningful change are separate.

## Failure N — person misfit = pathology/deception

Incorrect.

Correct:

It is model incompatibility until a cause is independently supported.

## Failure O — item deletion = purification

Incorrect.

Correct:

Deletion changes operationalization and can narrow the construct.

## Failure P — high discrimination/information = best content

Incorrect.

Correct:

Statistical information does not replace content validity.

## Failure Q — parameter invariance is guaranteed by IRT/Rasch

Incorrect.

Correct:

It is conditional and empirical.

## Failure R — automated score = objective person fact

Incorrect.

Correct:

Automated scores inherit training, model, calibration, subgroup, drift, and validity problems.

---

# XII. Sufficiency map

## 70. What is now covered sufficiently for current scope

The psychometrics sequence now provides practical competence in:

1. score/construct separation;
2. interpretation/use-specific validity;
3. reliability versus validity;
4. group versus individual precision;
5. SEM/cSEM/information;
6. dimensionality and structural validity;
7. factor-score determinacy;
8. CTT/IRT/Rasch boundaries;
9. model identification/scaling;
10. item/category functioning;
11. local independence/dependence;
12. item/test information;
13. person-score estimators;
14. person fit;
15. measurement invariance;
16. DIF and anchor problems;
17. norms/reference populations;
18. cut scores;
19. decision consistency/accuracy;
20. longitudinal measurement/change;
21. reliable versus meaningful change;
22. item/test construction;
23. calibration/linking/transport;
24. technology-based assessment;
25. integrated uncertainty layers.

## 71. Deliberately deferred advanced methods

The following do not currently block reliable general psychological reasoning:

- full generalizability-theory derivations;
- full Bayesian psychometric modeling;
- diagnostic classification models;
- cognitive diagnosis models;
- latent class/mixture psychometrics;
- network psychometrics;
- multidimensional CAT engineering;
- formal test equating algorithms;
- advanced missing-data models;
- response-time joint models;
- automated test assembly optimization.

These should be opened only if a downstream domain requires them.

## 72. Why no PSYCHOMETRICS-04 is required

A new block would be justified only if an unresolved psychometric gap could materially cause unreliable downstream reasoning.

After integration:

- no contradiction remains between score-level and model-level rules;
- the uncertainty-stack gap is repaired here;
- individual-score interpretation has a fail-closed protocol;
- fairness and change have model-to-use bridges;
- advanced omitted methods are dependency-specific rather than foundational.

Therefore no scientifically necessary PSYCHOMETRICS-04 dependency is identified.

---

# XIII. Phase B closure audit — psychometrics dependency

PSYCHOMETRICS was the final unresolved Phase B domain in RESEARCH_ORDER.

Its completion removes the remaining Phase B measurement dependency.

This does not imply that core psychology is encyclopedically complete.

It means the current Phase B domains no longer contain an identified foundational gap that blocks progression to applied/clinical interfaces.

---

# XIV. Closure audit — 20/20

## Criterion 1 — PSYCHOMETRICS-01 fully audited against PSYCHOMETRICS-02

**PASS.**

Score/use and item/model levels are consistent.

## Criterion 2 — CTT and IRT precision logic is reconciled

**PASS.**

Group reliability, SEM/cSEM, and model-based information are separated correctly.

## Criterion 3 — simple versus latent scoring is nonhierarchical

**PASS.**

Model complexity must earn inferential value.

## Criterion 4 — validity and model fit remain distinct

**PASS.**

No structural-fit statistic is treated as full validation.

## Criterion 5 — dimensionality is prevented from becoming ontology

**PASS.**

Response structure and psychological mechanism remain separate.

## Criterion 6 — factor scores are protected from reification

**PASS.**

Estimated latent scores remain model-based person estimates.

## Criterion 7 — individual precision is explicit

**PASS.**

Score-level uncertainty is required rather than inferred from group reliability.

## Criterion 8 — person fit is integrated

**PASS.**

Individual response incompatibility can weaken score interpretation without implying cause.

## Criterion 9 — invariance and DIF are integrated

**PASS.**

Factor/score and item-level comparability evidence are connected.

## Criterion 10 — fairness is not reduced to invariance/DIF

**PASS.**

Accessibility, construct representation, prediction, administration, and use remain separate considerations.

## Criterion 11 — norms are integrated with model uncertainty

**PASS.**

Norm/reference uncertainty does not erase latent/person-score uncertainty.

## Criterion 12 — classification is integrated with conditional precision

**PASS.**

Cutoffs, base rates, decision consistency/accuracy, and local precision are connected.

## Criterion 13 — longitudinal change is integrated with item/model drift

**PASS.**

Reliable change requires measurement comparability as well as score precision.

## Criterion 14 — reliable and meaningful change remain separate

**PASS.**

Statistical change is not equated with substantive improvement.

## Criterion 15 — test construction preserves construct content

**PASS.**

Fit-driven item optimization cannot silently redefine the construct.

## Criterion 16 — integrated uncertainty stack is repaired

**PASS AFTER REPAIR.**

Eight distinct uncertainty layers are now canonical.

## Criterion 17 — cross-domain routing is complete

**PASS.**

Domain constructs remain in substantive psychology; measurement inference routes through PSYCHOMETRICS.

## Criterion 18 — no advanced-method taxonomy is required for closure

**PASS.**

Deferred methods are dependency-driven rather than foundational.

## Criterion 19 — privacy boundary preserved

**PASS.**

No user-specific psychological information is stored.

## Criterion 20 — progression decision is unambiguous

**PASS.**

PSYCHOMETRICS closes; Phase B closes; next dependency is Phase C / CLN.

---

# XV. Decision

**PSYCHOMETRICS sequence: COMPLETE_FOR_CURRENT_SCOPE.**

**Phase B — Core psychological science: COMPLETE_FOR_CURRENT_SCOPE.**

No PSYCHOMETRICS-04 is required.

Next program dependency:

**CLN-01 — Psychopathology foundations: symptom, syndrome, disorder, impairment, dimensional and categorical models, comorbidity, differential inference, and diagnostic validity limits.**

Target directory:

`research/psychology/qualification/12_psychopathology/`

This begins Phase C — Applied and clinical interfaces.

---

# XVI. Canonical psychometrics control formula

**Construct -> item/behavior universe -> response process -> scoring/model -> assumptions -> structure/local dependence -> person-score estimate -> conditional precision -> invariance/DIF/linking -> norm/reference -> cutoff/change rule -> validity for intended use -> corroboration -> narrow conclusion.**

For uncertainty:

**response uncertainty != model uncertainty != parameter uncertainty != person-score uncertainty != transport uncertainty != norm uncertainty != decision uncertainty != validity uncertainty.**

Never:

`score -> trait`

`reliability -> precise person`

`latent -> true`

`fit -> validity`

`IRT/Rasch -> objective measurement`

`DIF -> bias`

`invariance -> fairness`

`percentile -> amount`

`cutoff -> natural category`

`score change -> person change`

`reliable change -> meaningful change`.

---

# Sources

1. American Educational Research Association, American Psychological Association, & National Council on Measurement in Education. (2014). *Standards for Educational and Psychological Testing*. Current open-access edition as of 2026-11-19. https://www.testingstandards.net/
2. Standards for Educational and Psychological Testing. Current revision announcements; Joint Committee revision process remains active. https://www.testingstandards.net/
3. Pfadt, J. M., Molenaar, D., Hurks, P., & Sijtsma, K. (2026). A tutorial on estimating the precision of individual test scores for anyone constructing and using psychological tests. *Psychometrika*. https://doi.org/10.1017/psy.2026.10081
4. Raykov, T. (2026). On estimating the precision of individual test scores: A note on Pfadt, Molenaar, Hurks, and Sijtsma. *Psychometrika*. https://doi.org/10.1017/psy.2026.10118
5. Rhemtulla, M., & Savalei, V. (2025). Estimated Factor Scores Are Not True Factor Scores. *Multivariate Behavioral Research, 60*(3), 598–619. https://doi.org/10.1080/00273171.2024.2444943
6. McNeish, D. (2026). How Do Psychologists Determine Whether a Measurement Scale Is Good? A Quarter-Century of Scale Validation with Hu & Bentler (1999). *Annual Review of Psychology, 77*, 567–591. https://doi.org/10.1146/annurev-psych-121924-104021
7. Mokkink, L. B., Elsman, E. B. M., & Terwee, C. B. (2024). COSMIN Manual for Systematic Reviews of PROMs, Version 2.0. https://www.cosmin.nl/
8. International Test Commission & Association of Test Publishers. (2025). *Guidelines for Technology-Based Assessment*, Version 1.1. https://www.intestcom.org/page/16
9. Timmerman, M. E., De Bildt, A., & Urban, J. (2026; online first 2025). The GRoNC: Guidelines for Reporting on Norm-Referenced and Criterion-Referenced Scores. *Assessment, 33*(6), 954–972. https://doi.org/10.1177/10731911251371395
10. Crenshaw, A. O., MacDonald, A., Carr, K., Shull, A., Pope, S., & Blackmon, M. (2026). Inconsistent application of the Reliable Change Index in clinical psychology trials undermines comparability of individual change estimates. *Journal of Clinical Psychology, 82*(11), 1841–1850. https://doi.org/10.1002/jclp.70203
11. Sinharay, S., & Monroe, S. (2025). Assessment of fit of item response theory models: A critical review of the status quo and some future directions. *British Journal of Mathematical and Statistical Psychology, 78*(3), 711–733. https://doi.org/10.1111/bmsp.12378
12. Altgassen, E., & Wilhelm, O. (2026). Item Selection as the Cause and Solution to Validity Problems in Psychology. *Current Directions in Psychological Science*. https://doi.org/10.1177/09637214261453302

## Source-boundary note

The AERA/APA/NCME Standards remain the broad validity and test-use anchor; the official site still presents the 2014 edition and an active revision process as of the evidence cutoff.

Recent 2025–2026 sources are used only to refine individual-score precision, factor-score interpretation, fit practice, item selection, and change methodology.

No single psychometric framework, fit statistic, reliability coefficient, latent-variable model, or DIF procedure is treated as a universal gold standard.
