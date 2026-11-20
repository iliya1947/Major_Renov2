# RES-02 / PASS-06B2 — Longitudinal cohort structures for prognosis

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. cohort structure как базовая longitudinal architecture prognosis research;
2. prospective cohort;
3. retrospective / historical cohort;
4. различие source-cohort chronology vs timing of the prognosis analysis;
5. reconstructable startpoint;
6. predictor timing relative to startpoint;
7. follow-up / censoring / competing events как структурные элементы;
8. secondary use of an existing cohort;
9. randomized-trial participant data as a prognosis data source;
10. когда trial arms можно рассматривать отдельно / вместе для prognosis;
11. граница randomized intervention effect vs prognostic analysis;
12. ограничения trial-derived prognosis по applicability;
13. project structural record для cohort/trial prognosis studies.

Не покрывается здесь:

- routine EHR / administrative / registry data in detail;
- nested case-control / case-cohort / class-balanced sampling;
- weighting / reconstruction of absolute risk;
- non-nested case-control limitations;
- dynamic prediction / time-updated predictors;
- prediction-model development / validation phases;
- detailed censoring / competing-risk statistics;
- detailed risk-of-bias appraisal;
- sample-size calculations;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 2

Moons KGM, Riley RD, Damen JAA.  
**Chapter 2: Study designs and data sources in prognosis research.**  
Draft version: **March 2026**.

Current official Cochrane page checked 2026-11-17.

Key current guidance used in this micro-pass:

- prognosis is longitudinal from a defined startpoint to future outcomes;
- the core primary prognosis design is a longitudinal cohort;
- a prospective cohort specifically designed for prognosis is the ideal structure;
- retrospective/historical cohorts are common and usable;
- participant data from existing cohorts can be reused for new prognosis questions;
- randomized trials are structurally akin prospective cohorts and can provide data for all three prognosis families;
- trial-derived prognosis must still be judged for target-population/setting applicability.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-2-study-designs-and-data-sources-prognosis-research

### Source-status note

The chapter is explicitly a **draft March 2026** and may change before final Version 1.

The project therefore treats it as the current authoritative Cochrane methodological source, but future closure/audit should recheck whether a finalized version has replaced it.

---

## 2. Sauerbrei et al / STRATOS — Design aspects for prognostic factor studies

BMJ Open. 2025;15:e095065.

Current article checked 2026-11-17.

Relevant points:

- prospective cohort is preferred when absolute/pure risks are required;
- prognostic factors should be available at/before the prognosis startpoint;
- retrospective cohorts assemble the cohort from past information;
- retrospective cohort follow-up can contain past follow-up and may continue into future;
- pre-existing cohorts, registries and databases can be reused, but suitability of source data must be evaluated.

https://bmjopen.bmj.com/content/15/8/e095065

---

## 3. Pajouheshnia et al. — RCT data for prognostic models

Pajouheshnia R, Groenwold RHH, Peelen LM, Reitsma JB, Moons KGM.  
**When and how to use data from randomised trials to develop or validate prognostic models.**  
BMJ. 2019;365:l2154.

Checked 2026-11-17.

Relevant points:

Potential strengths of RCT data:
- data completeness;
- standardized measurement;
- protocol-defined timing;
- known treatment allocation;
- high-quality outcome ascertainment.

Potential limitations:
- selective centres;
- restrictive eligibility/enrolment;
- trial-specific predictor measurement;
- trial/protocol/Hawthorne effects;
- short or surrogate outcomes;
- inadequate follow-up;
- insufficient sample size;
- limited applicability to routine practice.

https://www.bmj.com/content/365/bmj.l2154

---

# Part A — Cohort is the core longitudinal architecture

## 1. Canonical prognosis cohort

### Established finding
**Confidence: HIGH**

Cochrane defines the core primary prognosis design as a longitudinal cohort:

`sample from target/source population at defined health state → startpoint → obtain predictor/baseline information → follow forward in prognosis time → observe future outcome(s)`

The defining inferential direction is always:

`startpoint → future outcome`

This remains true whether the records were collected in real calendar time prospectively or reconstructed later from historical data.

### Project rule

A study is not prognosis merely because it has repeated measurements.

The scientific structure must include:

1. a prognosis-relevant target population/health state;
2. a defined prognosis startpoint;
3. information available at/before that startpoint;
4. future outcome ascertainment;
5. a meaningful horizon/follow-up period.

---

# Part B — Prospective cohort

## 2. Prospective cohort structure

### Established finding
**Confidence: HIGH**

In a newly designed prospective cohort:

1. eligible participants are identified in current time;
2. the cohort is assembled at a defined startpoint;
3. predictor/baseline variables are measured according to a planned protocol;
4. participants are then followed into future calendar time;
5. outcomes are measured after the startpoint.

Canonical chronology:

`design/recruitment now → baseline/startpoint now → future follow-up → outcome`

---

## 3. Why prospective cohort is the preferred prognosis design

### Established finding
**Confidence: HIGH**

Current Cochrane guidance identifies a prospective cohort specifically designed for prognosis as the desirable/ideal structure because investigators can predefine:

1. inclusion criteria;
2. target health state;
3. startpoint;
4. predictor definitions;
5. measurement procedures;
6. follow-up duration;
7. outcome definitions;
8. outcome-measurement time points;
9. treatment/procedure recording;
10. loss-to-follow-up documentation;
11. protocol and analysis plan.

### Consequence

Prospective design is not “better” merely because calendar time runs forward.

Its advantage is **control over the data-generating process before outcomes occur**.

---

## 4. Prospective does not guarantee low bias or applicability

### Project correction
**Confidence: HIGH**

A prospective cohort can still have:

- selective eligibility;
- nonrepresentative setting;
- poor predictor measurement;
- missing follow-up;
- outcome misclassification;
- inappropriate timing;
- treatment/context heterogeneity.

Therefore:

> prospective cohort = preferred structural opportunity, not automatic high-quality evidence.

Detailed bias appraisal remains deferred.

---

# Part C — Retrospective / historical cohort

## 5. Retrospective cohort structure

### Established finding
**Confidence: HIGH**

A retrospective/historical cohort is assembled from a startpoint that occurred in the past.

Typical structure:

`historical target population at past startpoint → reconstruct baseline/predictor information → reconstruct subsequent follow-up → observe historical outcomes`

Cochrane explicitly recognizes retrospective cohorts as common prognosis designs.

---

## 6. Retrospective does not mean cross-sectional

### Established finding
**Confidence: HIGH**

The investigator may identify both predictor and outcome records today, but the scientific relation remains longitudinal if:

1. predictor/startpoint information refers to an earlier time;
2. outcome occurs after that startpoint;
3. follow-up can be reconstructed.

Therefore:

> data extracted at one modern analysis date ≠ cross-sectional design.

Project classification is based on the temporal relation in the underlying target process, not on the date the analyst opened the database.

---

## 7. Retrospective cohort can still have future follow-up

### Established finding
**Confidence: HIGH**

STRATOS explicitly notes that a retrospectively assembled cohort may have:

- historical follow-up already available;
- and additional data collection continuing into future calendar time.

Therefore “retrospective” and “prospective” should not be treated as mutually exhaustive labels for every aspect of one study.

A cohort can be:

> retrospectively assembled + subsequently followed prospectively.

Possible labels in literature include:

- ambispective;
- retrospective-prospective;
- retrospective cohort with prospective extension.

### Project rule

Record the actual temporal components rather than forcing a single adjective when it hides the structure.

---

# Part D — Separate the source cohort from the prognosis analysis

## 8. Critical taxonomy correction: two time axes

### Established methodological distinction / project rule
**Confidence: HIGH**

A prognosis analysis can be performed today on data that were collected prospectively years earlier.

Example:

`prospective source cohort established in 2015 → baseline and outcomes collected prospectively → new prognosis question specified in 2026 → secondary analysis`

Calling this simply:

> prospective study

or:

> retrospective study

loses information.

### Project extraction must separate:

1. **source-cohort design**
   - prospectively assembled;
   - retrospectively assembled;
   - mixed/ambispective;

2. **analysis status**
   - prognosis question/analysis prespecified during source study;
   - secondary analysis specified after some/all data already existed.

### Why this matters

The source cohort may retain strong prospective measurement quality, while the later prognosis analysis may face:

- data-driven hypothesis selection;
- unavailable predictors;
- inappropriate measurement times;
- outcome definitions not optimized for the new question.

These are different issues and must not be collapsed into one “prospective/retrospective” field.

---

# Part E — Startpoint reconstruction is mandatory in retrospective prognosis

## 9. Historical data are usable only if the prognosis startpoint can be reconstructed

### Established finding
**Confidence: HIGH**

For a retrospective cohort to answer a prognosis question, the source data must support a defensible startpoint.

The startpoint should correspond to the moment when the prognosis would conceptually have been made.

Examples:

- date of diagnosis;
- date of surgery;
- training-program baseline;
- injury-clearance date;
- first eligible clinic visit;
- defined age threshold.

### Project rejection rule

If the data cannot establish a common/defensible prognosis startpoint, the study may not estimate the intended prognosis target coherently even if both predictors and outcomes exist.

---

## 10. Entry dates need not be identical

### Established finding
**Confidence: HIGH**

Cohort members may enter the cohort on different calendar dates.

The relevant time scale can still be aligned as:

`T = 0 at each individual’s qualifying startpoint`

then:

`T + horizon`

This is distinct from requiring everyone to begin on the same calendar day.

### Fitness example

Participants may each start a 12-week program on different dates.

For prognosis:

> week 0 of each participant’s program

can be the aligned startpoint.

---

# Part F — Predictor timing relative to startpoint

## 11. Baseline predictor must be available at/before intended prediction time

### Established finding
**Confidence: HIGH**

A predictor used for a baseline prognosis question must represent information available:

- before;
- or at

the intended startpoint.

This applies equally to prospective and retrospective cohorts.

### Project record

For each predictor/factor:

1. actual measurement time;
2. intended prediction time;
3. whether the value was available at that time;
4. whether later information was inadvertently used.

---

## 12. Future information creates temporal leakage

### Project inference
**Confidence: HIGH**

If a model intended for use at baseline incorporates information obtained only later during follow-up, the study is not evaluating the claimed baseline prediction task.

This is a form of temporal leakage / target-time mismatch.

Example:

> predict 12-week dropout at week 0 using “average adherence during weeks 1–4”

cannot be treated as a pure week-0 prognosis model.

That may instead be:

- landmark prediction at week 4;
- dynamic prediction;
- updated prognosis;

but those require a redefined startpoint.

Dynamic prediction is deferred to later methodology work.

---

# Part G — Follow-up is part of the design, not just analysis

## 13. Follow-up starts at the prognosis startpoint

### Established finding
**Confidence: HIGH**

Cohort prognosis follows individuals from the startpoint until:

- outcome;
- chosen prediction horizon;
- administrative study end;
- loss to follow-up;
- competing event;
- another defined censoring point.

### Project extraction

Record:

1. start of follow-up;
2. intended horizon;
3. actual follow-up range;
4. whether outcome timing is known;
5. loss to follow-up;
6. competing events when relevant.

Detailed statistical handling remains deferred.

---

## 14. Different follow-up lengths do not destroy cohort structure

### Established finding
**Confidence: HIGH**

Cochrane explicitly notes that individuals can have different observed follow-up durations because of:

- different recruitment dates;
- outcome occurrence;
- study end;
- censoring;
- competing events.

Thus:

> unequal observed follow-up ≠ invalid cohort by itself.

The issue is whether analysis correctly targets the intended horizon and handles incomplete observation.

---

# Part H — Secondary use of an existing cohort

## 15. Existing cohorts can answer new prognosis questions

### Established finding
**Confidence: HIGH**

A cohort originally created for another scientific purpose can later support:

- overall prognosis;
- prognostic-factor research;
- prediction-model research.

Cochrane gives the Framingham cohort as an example of later reuse for risk prediction.

### Project rule

Record separately:

1. original purpose of source cohort;
2. new prognosis purpose;
3. whether required startpoint, predictors, outcomes and horizon are actually supported by the existing data.

---

## 16. Existing cohort is not automatically fit for the new prognosis question

### Established finding
**Confidence: HIGH**

Secondary use may suffer because the source study did not originally optimize:

- relevant predictors;
- predictor timing;
- outcome definitions;
- outcome timing;
- follow-up horizon;
- target-population representation.

Cochrane specifically notes possible:

- missing variables;
- inconsistent startpoints;
- variable follow-up;
- unavailable outcomes.

Therefore:

> “large existing cohort” is a data opportunity, not automatic design adequacy.

---

# Part I — Randomized trial data as prognosis data

## 17. RCT participants form a prospective longitudinal cohort

### Established finding
**Confidence: HIGH**

Cochrane describes randomized intervention studies as a special form of prospective cohort for prognosis purposes.

Typical structure:

`eligible trial participants → randomization/startpoint → baseline predictors + assigned intervention → prospective follow-up → outcomes`

The same participant-level data can be reused for all three prognosis families:

1. overall prognosis;
2. prognostic factors;
3. prediction models.

---

## 18. Randomization is not randomization of prognostic factors

### Project taxonomy rule
**Confidence: HIGH**

This is essential.

In an RCT:

- **treatment assignment** is randomized;
- baseline age, strength, biomarker, sleep, symptom severity, etc. are ordinarily **not** randomized.

Therefore a secondary analysis asking:

> does baseline factor X predict future outcome Y?

is an observational prognostic analysis within randomized-trial data.

It should not be described as randomized evidence for the factor–outcome relationship.

### Correct record

> source data: randomized trial  
> prognosis purpose: prognostic factor / overall prognosis / prediction model  
> randomization applies to: intervention assignment

---

# Part J — Trial arms and prognosis

## 19. Overall prognosis can be treatment-context specific

### Established finding
**Confidence: HIGH**

Cochrane states that overall prognosis can be estimated in each trial arm.

This matters because prognosis is conditional on care/intervention context.

Example structure:

`population + treatment A → future outcome distribution`

versus

`population + treatment B → future outcome distribution`

These are different observed prognoses under different randomized treatment contexts.

### Important boundary

Comparing the arms to infer:

> effect of A vs B

is an intervention-effect question.

Describing future outcomes within an arm is prognosis.

---

## 20. Trial arms can sometimes be combined for prognostic analyses

### Established finding
**Confidence: HIGH**

Cochrane notes that prediction-model studies may:

- combine trial arms;
- or consider arms separately.

For prognostic-factor analyses, intervention may need to be accounted for because assigned treatment can influence outcome.

### Project rule

Before combining arms, record:

1. whether treatment materially changes outcome;
2. whether treatment is included/adjusted for;
3. whether treatment–predictor interactions are relevant;
4. what clinical context the resulting prognosis is supposed to represent.

A blind merge of trial arms can create a prognosis target that does not correspond to a real intended-use context.

Detailed treatment handling in prediction models is deferred.

---

# Part K — Strengths of RCT data for prognosis

## 21. Why RCT data can be attractive

### Established finding
**Confidence: HIGH**

Current Cochrane guidance and Pajouheshnia et al. identify common advantages:

1. prospectively defined eligibility;
2. clear startpoint, commonly randomization;
3. high-quality baseline data;
4. standardized predictor measurement;
5. standardized outcome measurement;
6. predefined follow-up schedule;
7. protocol documentation;
8. treatment allocation known exactly;
9. careful monitoring of missing data and outcomes.

These can make trial data an efficient secondary source for prognosis research.

---

# Part L — RCT data can have poor prognosis applicability

## 22. Trial quality for treatment effects != automatic prognosis applicability

### Established finding
**Confidence: HIGH**

RCTs can be highly internally valid for their randomized treatment comparison while being a poor source for the intended prognosis population.

Potential mismatches include:

- restrictive eligibility;
- exclusion of multimorbidity/frailty;
- specialist centres;
- unusually intensive follow-up;
- protocol-driven care;
- research-grade predictor measurement;
- surrogate endpoints;
- short follow-up.

### Project rule

Do not inherit the RCT’s evidence status wholesale.

The prognosis question requires its own applicability assessment.

---

## 23. Trial participation itself can change prognosis context

### Established finding
**Confidence: HIGH**

Pajouheshnia et al. discuss:

- trial/protocol effects;
- Hawthorne-type effects;
- placebo/nocebo context;
- enhanced monitoring;
- specialist care.

These can make observed outcome risk in trial participants differ from ordinary practice.

Therefore:

> prognosis in trial participants under trial conditions

may not equal:

> prognosis in routine practice.

---

# Part M — Trial predictor measurement can be too “good”

## 24. Measurement transportability matters

### Established finding
**Confidence: HIGH**

A predictor measured with specialized equipment, expert staff or unusually strict protocol in an RCT may not be measured the same way in intended routine use.

For prognosis:

> predictor measurement process is part of the intended-use system.

This parallels the measurement-protocol principle already established in PASS-06A.

### Fitness translation

A prediction model developed using:

- laboratory DXA;
- force plates;
- supervised standardized testing;

may not transport unchanged to:

- home scales;
- consumer wearables;
- self-administered tests.

This is an applicability issue even if the RCT measurements themselves are highly accurate.

---

# Part N — Practical fitness examples

## 25. Prospective prognosis cohort

Question:

> Among novice trainees beginning a standardized 16-week resistance program, which baseline characteristics predict 16-week squat strength?

Structure:

1. recruit before program starts;
2. define week 0 as startpoint;
3. collect baseline predictors;
4. follow for 16 weeks;
5. measure future strength outcome.

Classification:

> prospective cohort + prognostic-factor purpose.

---

## 26. Retrospective prognosis cohort

Question:

> Using gym records from 2022–2025, do baseline training age and starting strength predict dropout within 12 weeks?

If records establish:

- a defensible program start date;
- predictors measured by that date;
- future dropout status;

classification:

> retrospective/historical cohort + prognostic-factor purpose.

---

## 27. Retrospective analysis of a prospectively collected training cohort

Example:

A research lab prospectively recorded all trainees’ baseline variables and 16-week outcomes from 2023–2025.

In 2026 a new question is posed:

> does baseline sleep predict strength gain?

Project record:

- source cohort: prospectively assembled;
- prognosis analysis: secondary / retrospectively specified;
- temporal prognosis relation: baseline sleep → future strength outcome.

Do not erase either axis.

---

## 28. Prognostic analysis inside an RCT

Trial:

> high-volume vs low-volume training randomized at week 0.

Secondary prognosis question:

> does baseline training age predict 12-week strength gain?

Project record:

- source data: RCT;
- randomized exposure: training volume assignment;
- prognosis purpose: prognostic-factor analysis;
- baseline training age: not randomized;
- treatment assignment should be considered in analysis/interpretation.

The baseline-factor association is not itself a randomized causal estimate.

---

# Part O — Structural record produced by PASS-06B2

## 29. Cohort/trial prognosis record

For prognosis studies using cohort or trial data, record:

1. prognosis purpose:
   - overall prognosis;
   - prognostic factor;
   - prediction model;
2. target population / health state;
3. setting;
4. intended prognosis startpoint;
5. individual cohort entry criterion;
6. source-cohort chronology:
   - prospective;
   - retrospective/historical;
   - mixed/ambispective;
7. prognosis analysis status:
   - prespecified with source study;
   - secondary analysis of existing data;
8. source study original purpose;
9. predictor measurement time;
10. predictor available at/before intended startpoint? YES/NO;
11. outcome;
12. outcome time relative to startpoint;
13. intended prediction horizon;
14. actual follow-up distribution;
15. loss to follow-up / censoring present?;
16. competing events relevant?;
17. if source is RCT:
   - randomized intervention;
   - prognosis startpoint;
   - arms analyzed separately/combined;
   - intervention included/adjusted for?;
   - target care context represented?;
18. source population representative of intended prognosis population?;
19. measurement procedures realistic for intended use?;
20. self-applied label;
21. project structural classification;
22. unresolved temporal/applicability issues.

---

# Practical rules produced by PASS-06B2

1. The core prognosis architecture is a longitudinal cohort from startpoint to future outcome.
2. Prospective cohort is the preferred purpose-built prognosis design because the data-generating process can be specified in advance.
3. Retrospective/historical cohorts remain valid prognosis structures when startpoint, predictor timing and future outcomes can be reconstructed.
4. Retrospective cohort is not cross-sectional merely because all records are extracted today.
5. A retrospectively assembled cohort may continue with prospective follow-up; record the actual components rather than forcing one adjective.
6. Source-cohort chronology and timing of the current prognosis analysis are separate axes.
7. “Retrospective analysis of prospectively collected data” should therefore be recorded explicitly, not collapsed.
8. Baseline predictors must be available at/before the intended prognosis startpoint.
9. Using future information for a baseline prediction task creates temporal mismatch/leakage and may require redefining the prediction startpoint.
10. Unequal follow-up lengths do not by themselves invalidate cohort prognosis; censoring/competing events and target horizon must be handled appropriately.
11. Existing cohorts can be reused for new prognosis questions, but source-data suitability must be checked.
12. RCT data can support overall prognosis, prognostic-factor and prediction-model research.
13. In prognostic analyses of RCT data, randomization applies to intervention assignment, not ordinary baseline prognostic factors.
14. Therefore trial-derived prognostic-factor associations are not automatically randomized causal evidence.
15. Prognosis may legitimately be estimated separately by trial arm because treatment context affects future outcome.
16. Combining trial arms requires an explicit rationale and treatment handling.
17. RCT data often have high measurement/follow-up quality but may have poor routine-practice applicability.
18. Trial eligibility, centres, protocol effects, predictor measurement and outcome horizon must be checked before transporting prognosis.
19. Study design, source-data design, prognosis purpose and analysis timing must all be represented separately.

---

# What remains unresolved after PASS-06B2

The prognosis/prediction branch is still **not complete**.

Still requires separate deep blocks on:

1. routine EHR / registry / administrative datasets;
2. nested case-control / case-cohort / class-balanced sampling;
3. absolute-risk reconstruction and weighting;
4. non-nested case-control limitations;
5. prediction-model development;
6. internal validation;
7. internal-external validation;
8. external validation;
9. model updating/extending;
10. model-impact boundary;
11. detailed structural records across all prediction-model phases;
12. final prognosis/prediction gap audit.

## Next micro-pass

**RES-02 / PASS-06B3 — routine-care data sources for prognosis: EHR, registries, administrative databases, data-source-vs-design distinction, startpoint emulation, measurement heterogeneity, missingness and source-population definition.**

STOP after this saved micro-pass.
