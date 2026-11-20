# RES-02 / PASS-06A — Diagnostic accuracy and measurement-property study structures

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-02 — Study designs / what they answer

## Scope этого прохода

Только:

1. базовая структура diagnostic test accuracy (DTA) study;
2. comparative DTA structures;
3. отличие DTA от ordinary case-control / diagnostic case-control sampling;
4. отличие diagnostic accuracy от measurement-property research;
5. measurement-property studies as a property-specific family rather than one “validation design”;
6. reliability / measurement error;
7. criterion validity;
8. construct validity;
9. responsiveness;
10. content validity / structural validity / internal consistency / cross-cultural validity as conditional measurement-property branches;
11. граница между instrument development и evaluation of an existing instrument.

Не покрывается здесь:

- detailed QUADAS / DTA risk-of-bias appraisal;
- detailed COSMIN risk-of-bias appraisal;
- DTA meta-analysis;
- reliability coefficients / SEM / MDC calculations;
- detailed psychometrics / factor analysis / IRT;
- diagnostic impact/utility trials;
- prognosis/prediction;
- final design-selection matrix.

---

## Источники, проверенные в этом pass

1. **Cochrane Handbook for Systematic Reviews of Diagnostic Test Accuracy — current official handbook**
   - current landing checked 2026-11-16;
   - Handbook citation remains Version 2.0, updated July 2023;
   - current versions page lists **2.0.1 (2026)** with minor corrections.
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook-systematic-reviews-diagnostic-test-accuracy  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook-systematic-reviews-diagnostic-test-accuracy/versions-and-changes-dta-handbook

2. **Cochrane DTA Handbook — Chapter 8 / current comparative-accuracy signalling questions**
   Current official chapter checked 2026-11-16.
   It identifies fully paired or randomized designs as preferred structures for direct comparison of multiple index tests.
   https://training.cochrane.org/handbook-diagnostic-test-accuracy/current/8-assessing-risk-bias

3. **Cochrane DTA learning module — Introduction to test accuracy**
   Current official page checked 2026-11-16.
   Basic design: participants receive the index test and, irrespective of its result, the reference standard.
   https://www.cochrane.org/sites/default/files/learning_modules/DTA_modules/1.3_Introduction_to_test_accuracy/story.html

4. **JBI Manual — External Methodological Guidance**
   Current online page checked 2026-11-16.
   JBI currently endorses:
   - Cochrane DTA Handbook for diagnostic-accuracy reviews;
   - COSMIN for reviews of measurement properties.
   https://jbi-global-wiki.refined.site/space/MANUAL/355599484/External%2BMethodological%2BGuidance

5. **JBI Critical Appraisal Tools — Diagnostic Test Accuracy**
   Current official catalogue checked 2026-11-16.
   Current DTA checklist remains available; its structure includes:
   - consecutive/random sampling;
   - avoidance of case-control design;
   - index/reference blinding;
   - prespecified threshold;
   - appropriate interval;
   - same reference standard;
   - complete inclusion in analysis.
   https://jbi.global/critical-appraisal-tools

6. **COSMIN — current “conducting a study on measurement properties” page**
   Checked 2026-11-16.
   COSMIN explicitly states that different measurement properties require different design requirements and analyses.
   https://www.cosmin.nl/finding-right-tool/conducting-study-measurement-properties/

7. **COSMIN — current systematic-review guidance / measurement-instrument selection pages**
   Checked 2026-11-16.
   Current COSMIN pages distinguish construct, population, instrument/type of instrument and measurement properties, and recognize PROMs, clinician-reported, performance-based and laboratory/biomarker measures in current resources.
   https://www.cosmin.nl/finding-right-tool/conducting-systematic-review-outcome-measurement-instruments/  
   https://www.cosmin.nl/about/

8. **COSMIN Risk of Bias tool for reliability and measurement error of outcome measurement instruments**
   Current COSMIN resource checked 2026-11-16; PDF inspected with screenshot in this pass.
   It explicitly covers clinician-reported, performance-based and laboratory-value measurement instruments and treats the entire measurement protocol as part of the instrument.
   https://www.cosmin.nl/wp-content/uploads/user-manual-COSMIN-Risk-of-Bias-tool_v4_JAN_final.pdf

## Source-version note

1. Cochrane DTA current versions page lists **2.0.1 (2026)**, but the core handbook citation is still Version 2.0, updated July 2023; 2.0.1 contains minor corrections.
2. JBI currently delegates DTA systematic-review methodology to Cochrane and measurement-property systematic-review methodology to COSMIN.
3. COSMIN resources are not uniform across every instrument class:
   - broad systematic-review guidance is historically strongest for PROMs;
   - current specific tools also cover clinician-reported, performance-based and laboratory measures for reliability/measurement error.
4. Therefore the project must not claim that every COSMIN module has identical validation across every non-PROM instrument type.

---

# Part A — Diagnostic accuracy is a question-specific study family

## 1. Diagnostic accuracy is not “measurement validity” in general

### Established finding
**Confidence: HIGH**

DTA asks:

> How accurately does an index test classify the presence/absence of a target condition relative to an acceptable reference standard?

Core entities:

1. participants / intended-use population;
2. index test;
3. target condition;
4. reference standard;
5. threshold(s), when relevant;
6. intended role / pathway.

This is a classification question.

A study asking whether a dynamometer gives repeatable force values is **not** DTA.

A study asking whether a screening rule detects a defined injury/condition versus a reference standard **is** DTA.

---

# Part B — Basic single-index-test DTA structure

## 2. Canonical structure

### Established finding
**Confidence: HIGH**

Basic DTA study:

1. enrol a clinically relevant spectrum of participants in whom target-condition status is uncertain;
2. perform the index test;
3. perform the reference standard;
4. classify each participant by index result and target-condition status;
5. derive accuracy quantities from the resulting cross-classification.

Canonical structure:

`eligible participants → index test + reference standard → target-condition classification → accuracy`

Cochrane describes DTA studies as fundamentally cross-sectional in the sense that target-condition status exists at the diagnostic episode, although reference-standard verification may sometimes occur later.

---

## 3. Cross-sectional does not mean “ordinary analytical cross-sectional study”

### Important correction
**Confidence: HIGH**

A basic DTA study may be cross-sectional in temporal structure, but its inferential purpose is not:

> association between exposure and outcome.

Instead it estimates agreement/classification performance relative to a reference standard.

Project rule:

> classify DTA first by **diagnostic-accuracy purpose + index/reference structure**, then record its temporal/sampling features.

Do not route it through the ordinary analytical-cross-sectional branch merely because measurements occur at one diagnostic episode.

---

# Part C — Sampling structure in DTA

## 4. Consecutive/random clinically relevant sample is structurally preferred

### Established finding
**Confidence: HIGH**

Current JBI DTA appraisal retains:

> Was a consecutive or random sample enrolled?

This reflects the need for a realistic patient/participant spectrum.

### Project extraction

Record:

1. target/intended-use population;
2. enrolment mechanism;
3. consecutive/random/convenience;
4. inclusion/exclusion criteria;
5. disease/condition spectrum.

Detailed spectrum/selection bias belongs later appraisal.

---

## 5. Diagnostic case-control / two-gate design

### Established finding
**Confidence: HIGH**

JBI explicitly asks whether a case-control design was avoided.

This refers to studies that separately recruit:

- known cases;
- known non-cases/healthy controls,

rather than enrolling a single clinically relevant population undergoing diagnostic evaluation.

### Why taxonomy must preserve it

This is structurally different from a single-gate/cross-sectional DTA sample.

Project classification:

> **DTA purpose + diagnostic case-control/two-gate sampling**

rather than ordinary etiologic case-control.

### Important distinction

Ordinary etiologic case-control:
- sample by outcome/case status;
- reconstruct prior exposure.

Diagnostic case-control:
- sample known condition-positive and condition-negative groups;
- apply/evaluate index test.

Same sampling label, different scientific purpose.

Detailed spectrum-bias implications are deferred.

---

# Part D — Verification structure

## 6. Index test + reference standard

### Established finding
**Confidence: HIGH**

Accuracy cannot be estimated without some method used as a reference for target-condition status.

The reference standard may be imperfect.

Project rule:
use:

> **reference standard**

not automatically:

> gold standard.

---

## 7. Complete verification is part of the basic design

### Established finding
**Confidence: HIGH**

Cochrane's basic DTA design has all participants undergoing the reference standard regardless of index-test result.

Project structural fields:

1. did all participants receive a reference standard?
2. same reference standard for all?
3. did index result determine whether/how verification occurred?
4. interval between index and reference;
5. could target condition change during that interval?

Detailed verification bias belongs later appraisal.

---

## 8. Delayed verification

### Established finding
**Confidence: HIGH**

Reference-standard information may be obtained after the index test, including follow-up-based verification.

This does not automatically make the design a prognosis study.

Project classification:

> DTA + delayed verification

provided the aim remains classification of the target condition at the relevant diagnostic episode and assumptions about condition stability are defensible.

---

# Part E — Comparative diagnostic accuracy

## 9. Fully paired comparative DTA

### Established finding
**Confidence: HIGH**

Preferred direct comparative structure:

1. same participant population;
2. each participant receives index test A;
3. each participant receives index test B;
4. participants receive the same acceptable reference standard.

Advantages:
- direct within-person comparison;
- controls participant-spectrum differences between tests.

Project classification:

> comparative DTA — fully paired.

---

## 10. Randomized comparative DTA

### Established finding
**Confidence: HIGH**

Cochrane Chapter 8 recognizes random allocation to alternative index tests as another appropriate direct comparative structure.

Participants receive:
- test A **or**
- test B,

under random allocation, with reference verification.

Project classification:

> comparative DTA — randomized unpaired test allocation.

This differs from an intervention-effect RCT because the immediate target is comparative **accuracy**, not downstream patient benefit.

---

## 11. Partially paired / non-random unpaired comparisons

### Established finding
**Confidence: HIGH**

Comparative DTA studies may give different tests to different participant subsets without proper randomization.

Then accuracy differences can be confounded by differences in:
- disease spectrum;
- severity;
- setting;
- reference standard;
- other participant characteristics.

Project taxonomy records:

1. fully paired;
2. partially paired;
3. randomized unpaired;
4. non-randomized unpaired;
5. external/indirect comparison.

Detailed comparative-DTA bias appraisal is deferred.

---

# Part F — Accuracy study vs test-impact study

## 12. Accuracy does not establish improved outcomes

### Established finding
**Confidence: HIGH**

Cochrane explicitly distinguishes:

- how accurately a test classifies a target condition;
- whether use of that test and subsequent decisions improve patient outcomes.

The latter is better evaluated by randomized intervention/test-strategy trials when feasible.

Project rule:

> DTA study answers **accuracy**; diagnostic-impact trial answers **consequences of using the test**.

A highly accurate test can still have little practical benefit if:
- it changes no decision;
- downstream intervention is ineffective;
- burden/cost/harms outweigh utility.

---

# Part G — Measurement-property studies are not one universal “validation design”

## 13. Core correction

### Established finding
**Confidence: HIGH**

COSMIN explicitly states:

> different measurement properties require different study-design requirements and statistical analyses.

Therefore:

> **validation study** is not a sufficiently precise design label.

Project taxonomy must record:

1. construct;
2. population;
3. instrument/protocol;
4. exact measurement property;
5. intended use;
6. underlying study structure.

---

# Part H — The measurement instrument includes the protocol

## 14. Device != instrument in full methodological sense

### Current COSMIN principle
**Confidence: HIGH**

For clinician-reported, performance-based and laboratory measures, COSMIN treats the measurement instrument as the **whole measurement procedure**.

Potential components:

- device/equipment;
- calibration;
- participant instructions;
- rater/operator;
- positioning;
- task;
- protocol;
- scoring/processing.

### Exercise consequence

“Ultrasound”, “dynamometer”, “velocity tracker” or “circumference tape” can be too broad.

Different operationalizations may effectively be different measurement instruments until equivalence is established.

---

# Part I — Reliability and measurement error

## 15. Core repeated-measurement structure

### Established finding
**Confidence: HIGH**

Reliability/measurement-error studies require repeated measurements under conditions where the measured construct is expected to be **stable**.

Canonical structure:

`stable participants/units → repeated measurement 1 / measurement 2 / ... → consistency + error`

Potential repeated conditions:

1. same rater over time → intra-rater / test-retest;
2. different raters → inter-rater;
3. repeated device/protocol runs;
4. different occasions;
5. other intended sources of measurement variation.

---

## 16. Stability is a design requirement

### Established finding
**Confidence: HIGH**

If the true construct changes meaningfully between measurements, observed difference mixes:

- true change;
- measurement error.

Project rule:

> reliability/measurement-error study requires a defensible stability interval or stable-state design.

Example:
testing arm circumference immediately before and after a pump-inducing workout is a poor design for ordinary test-retest error if the construct itself can acutely change.

---

## 17. Reliability != measurement error

### Established finding
**Confidence: HIGH**

They are related but distinct measurement properties.

### Reliability
Ability to distinguish participants despite measurement error; relative ranking/variance concept.

### Measurement error
Absolute systematic/random error not due to true change.

Project design record must specify which is targeted.

Do not write only:
> reproducibility study

without separating the property.

---

# Part J — Criterion validity

## 18. Core structure

Criterion validity asks whether the instrument's scores agree sufficiently with a valid criterion for the same construct.

Canonical structure:

`participants → target instrument + criterion instrument/standard → agreement/relationship`

### Important limitation

A true criterion does not exist for many constructs.

Project rule:
do not invent a “gold standard” merely to make a criterion-validity study possible.

---

## 19. Criterion validity can resemble DTA but is not automatically DTA

Examples:

### Measurement criterion-validity question
> How closely does wearable heart rate agree with ECG-derived heart rate as a continuous measurement?

### DTA question
> How accurately does wearable algorithm classify atrial fibrillation versus diagnostic ECG?

Same technologies, different target claims.

Project distinction:

- continuous/quantitative construct agreement → measurement-property route;
- classification of target condition → DTA route.

---

# Part K — Construct validity

## 20. Construct-validity structure

### Established finding
**Confidence: HIGH**

When no definitive criterion exists, validity can be tested through **a priori hypotheses** about:

1. relationships with other instruments/variables;
2. differences between groups expected to differ on the construct;
3. convergent/divergent patterns.

Underlying designs may be:

- cross-sectional correlational;
- known-groups comparison;
- longitudinal, depending the hypothesis.

Project rule:

> construct validity is a measurement-property purpose layered over an underlying observational/comparative structure.

It is not one atomic study design.

---

# Part L — Responsiveness

## 21. Core structure

### Established finding
**Confidence: HIGH**

COSMIN defines responsiveness as ability of an instrument to detect change over time in the construct to be measured.

Therefore responsiveness requires a **longitudinal change structure**.

Canonical structure:

`participants → baseline measurement → real construct change / interval → follow-up measurement → ability to detect change`

### Project rule

Responsiveness != reliability.

Reliability asks:
> does the score remain stable when the construct is stable?

Responsiveness asks:
> does the score change appropriately when the construct changes?

These require opposite construct-state conditions.

---

## 22. Longitudinal does not automatically mean responsiveness

A longitudinal intervention study that reports score change is not automatically a valid responsiveness study.

The design must actually test whether:

- measured change corresponds to expected/credible change in the construct;
- change hypotheses/reference measures are appropriate.

Detailed COSMIN responsiveness appraisal is deferred.

---

# Part M — Content validity

## 23. Content-validity studies can be qualitative/mixed

### Established finding
**Confidence: HIGH**

Content validity asks whether instrument content adequately represents the construct.

Appropriate evidence may involve:

- target-population input;
- expert assessment;
- cognitive interviewing;
- qualitative interviews/focus groups;
- Delphi-type consensus processes;
- instrument-development evidence.

### Taxonomy consequence

Measurement-property research can use qualitative designs.

Therefore:
> measurement-property study
is a **purpose layer**, not synonymous with quantitative validation study.

---

# Part N — Structural validity / internal consistency / measurement invariance

## 24. Internal-structure properties

For multi-item instruments, relevant properties can include:

- structural validity;
- internal consistency;
- cross-cultural validity / measurement invariance.

Underlying designs involve item-level data and psychometric models.

Project scope decision:

- recognize these as measurement-property branches;
- defer detailed factor-analysis / IRT / invariance methodology to RES-11 if needed.

These properties may be less central for physical performance/device measures but remain important for questionnaires/scales.

---

# Part O — Instrument development vs evaluation

## 25. Development study

Instrument development may include:

1. construct definition;
2. item/task generation;
3. qualitative input;
4. pilot testing;
5. scoring/protocol development.

This is different from evaluating an already fixed instrument.

Project classification:

- **instrument development study**
vs
- **measurement-property evaluation study**.

A paper can contain both phases.

Do not assume that development automatically establishes adequate validity/reliability.

---

# Part P — Measurement study design depends on intended use

## 26. Group research vs individual monitoring

Same instrument can require different evidence for:

- group-level research endpoint;
- ranking people;
- detecting individual change;
- screening/classification;
- dose/progression decisions.

Example:
an instrument can show good reliability for ranking people yet have too much absolute measurement error for tracking small individual changes.

Project extraction must preserve intended use.

---

# Part Q — DTA vs measurement-property crosswalk

## 27. Canonical distinction

| Question | Scientific family | Core structure |
|---|---|---|
| Does test classify target condition? | DTA | index test + reference standard + target condition |
| Does device give repeatable scores? | reliability | repeated measurements in stable state |
| How large is absolute score noise? | measurement error | repeated stable-state measurements |
| Does score agree with valid criterion for same construct? | criterion validity | instrument + criterion |
| Does score behave as theory predicts? | construct validity | hypothesis-based associations/group differences |
| Does score detect real change? | responsiveness | longitudinal change structure |
| Does instrument content represent construct? | content validity | qualitative/expert/development evidence |
| Does using the test improve outcomes? | intervention/test-strategy effect | randomized/nonrandomized intervention-effect design |

This crosswalk is a project synthesis of current Cochrane/COSMIN distinctions.

---

# Part R — Diagnostic / measurement structural record

## 28. DTA record

1. DTA purpose? YES/NO
2. Intended-use population
3. Index test
4. Target condition
5. Reference standard
6. Threshold prespecified?
7. Sampling:
   - consecutive
   - random
   - convenience
   - diagnostic case-control/two-gate
8. All participants receive reference standard?
9. Same reference standard?
10. Index/reference interval
11. Delayed verification?
12. Number of index tests
13. Comparative accuracy?
14. Comparative structure:
   - fully paired
   - partially paired
   - randomized unpaired
   - nonrandomized unpaired
   - indirect/external
15. Intended test role
16. Downstream-outcome trial separate? YES/NO
17. Self-applied label
18. Project structural classification

---

## 29. Measurement-property record

1. Construct
2. Population
3. Instrument/protocol/version
4. Intended use
5. Instrument class:
   - PROM
   - clinician-reported
   - performance-based
   - laboratory/biomarker
   - device/other
6. Development vs evaluation
7. Measurement property:
   - content validity
   - structural validity
   - internal consistency
   - cross-cultural validity/invariance
   - reliability
   - measurement error
   - criterion validity
   - construct validity
   - responsiveness
   - other
8. Underlying design structure
9. Repeated measurements?
10. Stable construct required?
11. Number/type of raters/occasions
12. Criterion/reference measure present?
13. A priori construct-validity hypotheses?
14. Longitudinal true change required?
15. Qualitative component?
16. Entire measurement protocol described?
17. Same operationalization across participants?
18. Target level:
   - group
   - individual
   - classification
19. Self-applied label
20. Project structural classification

---

# Part S — Practical rules produced by PASS-06A

1. DTA is a question-specific classification family, not generic “validation”.
2. Basic DTA structure requires index test + target condition + reference standard.
3. DTA is often cross-sectional in temporal structure but should not be collapsed into ordinary analytical cross-sectional studies.
4. Consecutive/random clinically relevant enrolment is structurally preferable to known-case/known-control two-gate sampling.
5. Diagnostic case-control and etiologic case-control share sampling logic but answer different scientific questions.
6. Complete/consistent reference verification is part of basic DTA structure.
7. Delayed verification can remain DTA if the target is diagnostic status at the relevant episode.
8. Comparative DTA should distinguish fully paired, randomized unpaired, partially paired and nonrandomized comparisons.
9. Fully paired or randomized comparative designs provide stronger direct test comparisons than unpaired nonrandomized comparisons.
10. Test accuracy does not establish that using the test improves outcomes.
11. “Validation study” is not a sufficient measurement-design label.
12. Measurement-property studies are property-specific.
13. The full measurement protocol—not just the device name—can define the instrument.
14. Reliability/measurement error require repeated measurements with a defensibly stable construct.
15. Reliability and measurement error are distinct properties.
16. Criterion validity requires an actual defensible criterion; do not invent a gold standard.
17. Criterion-validity studies can resemble DTA but differ when the target is continuous construct measurement rather than condition classification.
18. Construct validity is hypothesis-based and can use several underlying observational/comparative designs.
19. Responsiveness requires longitudinal change and is conceptually opposite to stable-state reliability testing.
20. Content-validity studies may be qualitative/mixed-methods.
21. Structural validity/internal consistency/invariance are conditional measurement-property branches.
22. Instrument development and instrument evaluation are distinct phases.
23. Intended use determines which measurement properties matter and how evidence should be interpreted.
24. COSMIN applicability must be instrument/property-specific; do not overgeneralize PROM methodology to every device without checking the relevant COSMIN tool.

---

# Gap status after PASS-06A

Diagnostic accuracy and measurement-property branches are **covered at taxonomy level**.

No additional dedicated DTA/measurement taxonomy pass is currently required.

Detailed:
- DTA risk of bias → later appraisal topic;
- measurement-property methods/statistics → RES-11;
- test-impact/clinical utility → intervention-effect/EtD routes.

---

# Unresolved for RES-02

1. Prognosis/prediction study structures.
2. Mechanistic study structures.
3. Qualitative study families.
4. Mixed-methods primary-study structures.
5. Purpose-vs-design crosswalk across all families.
6. Final design-selection matrix.
7. Gap audit.
8. New synthesis.

## Next pass

**RES-02 / PASS-06B — prognosis and prediction study structures: overall prognosis, prognostic-factor and prediction-model studies.**
