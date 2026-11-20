# RES-02 / PASS-01 — Scope and study-design taxonomy revalidation

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-02 — Study designs / what they answer

## Scope этого прохода

Только:
1. определить границы RES-02 относительно RES-03…RES-29;
2. перепроверить саму taxonomy study designs;
3. отделить fundamental design family от design features/modifiers;
4. отделить study purpose/question family от design;
5. отделить primary-study designs от evidence-synthesis designs;
6. провести structural audit legacy RES-02;
7. определить следующие узкие passes.

Не покрывается здесь:
- detailed randomized-trial strengths/limitations;
- detailed cohort/case-control/cross-sectional appraisal;
- bias domains;
- causal inference assumptions;
- statistical analysis methods;
- risk-of-bias tools;
- meta-analysis;
- N-of-1 execution;
- final design-selection matrix.

---

## Источники, проверенные в этом pass

1. **Cochrane Handbook — Versions and changes**  
   Overall current release checked 2026-11-16: **6.5.1 (2026)**.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/versions-and-changes-handbook

2. **Cochrane Handbook Chapter 3 — Defining criteria for including studies and grouping for synthesis**  
   Current page checked 2026-11-16.  
   Study-design eligibility should be prespecified; variants such as cluster-randomized and crossover trials may need explicit eligibility decisions.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-03

3. **Cochrane MECIR C9–C11 — study-design eligibility**  
   Current page checked 2026-11-16.  
   C9 explicitly requires focus on **study-design features rather than labels**, because labels such as “case-control” or “prospective” may be ambiguous.  
   https://www.cochrane.org/authors/handbooks-and-manuals/mecir-manual/standards-conduct-new-cochrane-intervention-reviews-c1-c75/developing-protocol-review-c1-c23/setting-eligibility-criteria-including-studies-review-c5-c13

4. **Cochrane Handbook Chapter 23 — Including variants on randomized trials**  
   Current page checked 2026-11-16; chapter citation notes last substantive update October 2019, Handbook v6.5.  
   Covers:
   - cluster-randomized trials;
   - stepped-wedge trials;
   - crossover trials;
   - cluster crossover;
   - multi-arm studies;
   - factorial trials.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-23

5. **Cochrane Handbook Chapter 24 — Including non-randomized studies on intervention effects**  
   Current page checked 2026-11-16; chapter citation notes last substantive update October 2019, Handbook v6.5.  
   Core methodological rule: characterize NRSI by **specific design features**, not only labels such as cohort/case-control/prospective.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-24

6. **JBI — Critical Appraisal Tools**  
   Current official page checked 2026-11-16.  
   Current design-specific tools include:
   - randomized controlled trials;
   - quasi-experimental studies;
   - cohort studies;
   - case-control studies;
   - analytical cross-sectional studies;
   - prevalence studies;
   - diagnostic accuracy studies;
   - case series;
   - case reports;
   - qualitative research;
   - economic evaluations;
   - systematic reviews;
   - textual evidence.  
   The analytical cross-sectional tool was revised in 2026; the quasi-experimental tool in 2024.  
   https://jbi.global/critical-appraisal-tools

## Source-version note

Current Cochrane overall release is **6.5.1 (2026)**, while Chapters 23 and 24 themselves still cite substantive updates from October 2019 within Handbook v6.5.  
Project rule from RES-01 remains: record overall release separately from chapter-level update/citation.

---

# Part A — Scope of RES-02

## 1. RES-02 answers one methodological question

> **What structural features define a study design, and what kinds of scientific questions can those structures directly support?**

RES-02 owns:
1. taxonomy of primary research designs;
2. key structural design features;
3. matching question type → plausible design family;
4. broad inferential capacity/limits created by design structure.

RES-02 does **not** own the full evaluation of whether an individual study is trustworthy.

That belongs downstream.

---

## 2. Boundaries with adjacent RES topics

### RES-03
Randomization sequence, allocation concealment, blinding and related trial-conduct details.

### RES-04
Risk-of-bias domains.

### RES-05
Confounding, causal inference, mediators/colliders/DAG logic.

### RES-06
Sampling, representativeness, external validity.

### RES-07+
Power/statistics/multiplicity etc.

### RES-11
Reliability/validity/responsiveness methods.

### RES-15/16
Systematic reviews and meta-analysis.

### RES-27
Detailed N-of-1 methodology.

### RES-26
Evidence hierarchy by question.

Project consequence:
RES-02 may **classify** these designs/structures, but should not absorb the detailed methodology owned by those later topics.

---

# Part B — Main taxonomy correction

## 3. A flat list of “study designs” is methodologically misleading

### Established finding
**Confidence: HIGH**

Cochrane MECIR C9 explicitly warns that common design labels can be ambiguous and requires eligibility criteria to focus on design features.

Cochrane Chapter 24 makes the same point especially strongly for NRSI.

Therefore the project should not maintain one flat list containing, at the same level:

- RCT;
- prospective study;
- factorial;
- mechanistic study;
- diagnostic study;
- reliability study;
- systematic review.

These terms describe **different dimensions**.

---

# Part C — Project multi-axis study-design taxonomy

This taxonomy is a **project operationalization** of Cochrane/JBI principles, not a claimed universal external classification.

## AXIS 1 — Evidence-production level

### A. Primary empirical study
Generates participant/unit-level or source-level empirical data.

### B. Evidence synthesis
Synthesizes existing studies:
- systematic review;
- meta-analysis;
- umbrella review.

### Decision

For RES-02 taxonomy:
- primary studies are the main object;
- systematic review/meta-analysis are **not primary study designs** and remain owned by RES-15/16.

Legacy RES-02 section “Systematic review / meta-analysis” is therefore moved out of the primary-design taxonomy.

---

## AXIS 2 — Was intervention/exposure assigned by investigators?

### A. Randomized experimental
Investigator assigns intervention using random allocation.

### B. Non-randomized intervention / quasi-experimental
Investigator/policy/process determines intervention without true random allocation, or intervention effect is estimated from a non-randomized intervention structure.

### C. Observational / naturally occurring exposure
Researchers observe exposure/intervention choices/events without assigning them.

Important:
Cochrane discourages relying only on the word “observational” for NRSI because intervention-effect NRSI can combine several principles.

---

## AXIS 3 — How were comparison groups formed?

Possible mechanisms include:

1. randomization;
2. quasi-randomization;
3. explicit threshold/rule;
4. investigator action;
5. time;
6. location;
7. practitioner/decision-maker choice;
8. participant preference;
9. policy;
10. outcome status;
11. other mechanism.

This axis is more informative for causal interpretation than a loose label alone.

Cochrane Chapter 24 explicitly records these group-formation features.

---

## AXIS 4 — Comparator structure

1. Concurrent comparator
2. Non-concurrent / historical comparator
3. Within-person / within-unit comparator
4. Before-after self-comparison
5. No comparator

A “study with an intervention” is not automatically a controlled intervention study.

---

## AXIS 5 — Temporal observation structure

1. Cross-sectional / snapshot
2. Longitudinal
3. Single pre + post
4. Multiple pre + multiple post / interrupted time-series structure
5. Repeated measures
6. Event-history / follow-up structure

### Important correction

**Prospective** and **retrospective** are not sufficient standalone design categories.

Cochrane MECIR explicitly notes that a study called “prospective” may have only some features performed prospectively.

Project rule:
always state **what** was prospective/retrospective:
- intervention assignment?
- exposure ascertainment?
- outcome ascertainment?
- analysis plan?
- data source?

---

## AXIS 6 — Unit of allocation / intervention / observation

Possible levels:

1. individual participant;
2. cluster/group;
3. body part/site within participant;
4. repeated observations/events within participant;
5. population/aggregate unit.

Cochrane Chapters 6 and 23 emphasize that:
- unit of randomization;
- unit of intervention;
- unit of observation;
- unit of analysis

can differ.

Detailed unit-of-analysis statistics are deferred.

---

## AXIS 7 — Intervention sequence / randomized-trial structure

These are **trial variants/design modifiers**, not separate universal evidence classes:

1. parallel-group;
2. crossover;
3. cluster-randomized;
4. stepped-wedge cluster randomized;
5. cluster crossover;
6. multi-arm;
7. factorial;
8. individually randomized trial with clustering;
9. randomized within-person/body-part structure.

Cochrane Chapter 23 treats these explicitly as variants on randomized trials.

---

## AXIS 8 — Observational sampling / indexing structure

Major families:

### Cohort
Groups/participants are organized around exposure/intervention status and followed through outcome time.

Subfeatures may be prospective or retrospective.

### Case-control
Sampling/group definition begins from outcome/case status and reconstructs prior exposure.

### Cross-sectional
Exposure/outcome information captured at a defined time/window without longitudinal ordering sufficient by itself for temporal inference.

### Case series / case report
Descriptive observation without an appropriate comparison group for ordinary causal-effect estimation.

These labels remain useful, but the project records their underlying features rather than trusting the label alone.

---

## AXIS 9 — Quasi-experimental / non-randomized intervention structures

At minimum the future RES-02 taxonomy must separately recognize:

1. non-randomized controlled trial;
2. controlled before-after;
3. uncontrolled before-after;
4. interrupted time series;
5. controlled interrupted time series;
6. rule/threshold-based assignment such as regression-discontinuity-type structures;
7. other natural/policy experiments when their allocation mechanism is explicit.

Legacy RES-02 covered:
- generic NRSI;
- single-group before-after;
- interrupted time series;

but did not give controlled before-after / controlled ITS / threshold-based allocation enough structural prominence.

These require later focused passes.

---

## AXIS 10 — Scientific objective / question family

These are **not always single fundamental design structures**:

1. intervention effect;
2. etiology/risk;
3. prognosis/prediction;
4. prevalence/frequency;
5. diagnostic accuracy;
6. measurement properties;
7. mechanism;
8. qualitative;
9. implementation;
10. mixed methods.

Example:
a “mechanistic laboratory study” may itself be:
- randomized crossover;
- parallel randomized;
- within-subject repeated measures;
- observational.

Therefore:
**mechanistic/laboratory = purpose/context, not one universal design.**

Likewise:
- diagnostic accuracy;
- reliability/validation;
- prognosis
are purpose-specific study families that require their own structural details.

---

# Part D — Corrections to legacy RES-02 categories

## 4. Randomized parallel trial
Retain as foundational experimental structure.

## 5. Randomized crossover
Retain, but classify as randomized-trial variant.

## 6. Within-subject / split-body randomized
Retain, but classify primarily by:
- randomization;
- within-participant unit structure;
- correlated observations.

Not a separate top-level evidence family.

## 7. Cluster randomized
Retain as randomized-trial variant.

## 8. Factorial / multi-arm
Retain as randomized-trial structural variants.

## 9. Prospective cohort / retrospective cohort
Merge under:
**cohort design + prospective/retrospective data-timing features**.

Do not treat “prospective” itself as a design.

## 10. Case-control
Retain as observational sampling/indexing family.

## 11. Cross-sectional
Retain; distinguish:
- descriptive/prevalence;
- analytical cross-sectional.

Current JBI now has a specifically revised 2026 tool for **analytical cross-sectional studies**, reinforcing this distinction.

## 12. Ecological study
Keep as a possible observational aggregate-unit structure, but not yet a core standalone branch until later gap audit establishes exact project need.

## 13. Before-after
Split later into:
- uncontrolled before-after;
- controlled before-after.

The comparator structure materially changes inferential strength.

## 14. Interrupted time series
Retain, but later distinguish:
- ITS;
- controlled ITS;
- same-units vs repeated-cross-sectional observations.

## 15. N-of-1
Retain as single-participant repeated experimental family, but detailed execution remains RES-27.

## 16. Mechanistic laboratory study
Reclassify as **study purpose/context layered over an actual design**.

## 17. Validation / reliability study
Reclassify as **measurement-property study family**, not one universal design.

## 18. Diagnostic accuracy study
Reclassify as question-specific family with index-test/reference-standard structure.

## 19. Prognostic / predictive study
Reclassify as question-specific family, commonly longitudinal but not a single design label.

## 20. Qualitative study
Retain as separate research paradigm/family; detailed qualitative design taxonomy is not required in RES-02 unless later audit shows a need.

## 21. Mixed-methods study
Retain as integration of quantitative + qualitative components, not one atomic study design.

## 22. Case report / case series
Retain as descriptive observational designs.

## 23. Systematic review / meta-analysis
Remove from **primary study-design taxonomy**.
Cross-reference RES-15/16.

---

# Part E — Core rules produced by PASS-01

1. **Study-design eligibility should be defined by features, not labels alone.**
2. Study design is multi-dimensional.
3. “Prospective” / “retrospective” alone are insufficient design labels.
4. Randomized, non-randomized intervention and observational assignment structures must be separated.
5. Comparator structure must be explicit.
6. Temporal structure must be explicit.
7. Unit of allocation/intervention/observation/analysis must not be silently conflated.
8. Parallel/crossover/cluster/factorial/multi-arm/stepped-wedge are variants or modifiers within trial architecture.
9. Cohort/case-control/cross-sectional labels remain useful only when their defining features are clear.
10. Controlled before-after and controlled interrupted time-series deserve explicit representation.
11. “Mechanistic”, “diagnostic”, “prognostic”, “measurement” describe question/purpose families and may contain multiple underlying designs.
12. Qualitative and mixed methods remain distinct research families/paradigms.
13. Systematic review/meta-analysis belong to evidence synthesis, not primary-study design taxonomy.
14. No universal one-dimensional evidence ladder should be constructed inside RES-02.
15. Detailed bias/causal/statistical judgments remain downstream in RES-03+.

---

# Part F — Revised scope model for RES-02

Future RES-02 synthesis should have two layers.

## Layer 1 — Structural design router

A. Primary vs synthesis  
B. Assigned vs non-assigned exposure/intervention  
C. Randomized vs non-randomized  
D. Group-formation mechanism  
E. Comparator structure  
F. Temporal structure  
G. Unit structure  
H. Sequence/arm structure  
I. Sampling/indexing structure

## Layer 2 — Question-family overlay

- effect;
- harm;
- etiology;
- prognosis;
- frequency;
- diagnostic;
- measurement;
- mechanism;
- qualitative;
- implementation;
- mixed methods.

This prevents category errors such as:
> “mechanistic study” versus “crossover study”

when a single study can be both.

---

# Part G — Legacy file status

The previous `RES-02_study_designs.md` remains useful as reconnaissance, but its flat taxonomy is no longer authoritative.

It should be marked:
**LEGACY DRAFT — REVALIDATION IN PROGRESS**

until granular passes + audit + replacement synthesis are complete.

---

# Part H — Unresolved for RES-02

1. Randomized experimental families:
   - parallel;
   - crossover;
   - cluster;
   - stepped-wedge;
   - factorial;
   - multi-arm;
   - within-person/body-part.

2. Non-randomized intervention / quasi-experimental structures:
   - non-randomized controlled;
   - CBA;
   - ITS/CITS;
   - threshold/rule-based designs;
   - natural/policy experiments.

3. Observational analytic families:
   - cohort;
   - case-control;
   - cross-sectional;
   - ecological/aggregate structures.

4. Descriptive designs:
   - prevalence;
   - case series;
   - case report.

5. Question-specific study families:
   - DTA;
   - measurement;
   - prognosis/prediction;
   - qualitative;
   - mixed methods;
   - mechanism.

6. Study-purpose vs design-feature audit.

7. Final “what each design can/cannot answer” matrix.

8. Gap audit before synthesis.

---

# Next pass

**RES-02 / PASS-02 — randomized experimental design families and structural variants.**
