# RES-02 / PASS-06C6 — Mechanistic-branch integration and gap audit

Статус: **COMPLETE GAP AUDIT — mechanistic synthesis NOT YET PERMITTED**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот pass интеграционно проверяет mechanistic branch после:

- PASS-06C1 — scope/taxonomy;
- PASS-06C2 — human experimental perturbation;
- PASS-06C3 — causal mediation/pathway;
- PASS-06C4 — observational biomarker/omics;
- PASS-06C5 — nonhuman/translational models.

Также cross-checked relevant boundaries from:

- PASS-02 — randomized experimental designs;
- PASS-03 — nonrandomized/quasi-experimental designs;
- PASS-04 — observational analytic designs;
- PASS-05A — self-controlled observational designs;
- PASS-06A — DTA / measurement-property studies;
- PASS-06B24 — prediction-branch structural synthesis.

Цели:

1. найти missing mechanism-evidence families;
2. проверить contradictions;
3. проверить necessity/sufficiency wording;
4. проверить target-engagement vs mediation boundary;
5. проверить observational/omics vs causal-design boundary;
6. проверить nonhuman/computational translation boundary;
7. проверить surrogate/target-validation candidates;
8. проверить exercise-specific omissions;
9. решить, можно ли запускать mechanistic synthesis.

---

# Final verdict

**Mechanistic synthesis пока НЕ разрешён.**

Audit выявил один новый **blocking study-design gap**:

> **single-case experimental designs / randomized N-of-1 experimental physiology structures**.

Причина:

- PASS-02 прямо deferred “detailed N-of-1 methodology → RES-27”;
- но RES-02 как study-design taxonomy не содержит отдельного структурного разбора:
  - randomized multi-crossover N-of-1;
  - withdrawal/reversal;
  - multiple-baseline SCED;
  - alternating-treatment;
  - changing-criterion/intensity;
  - series of N-of-1 trials;
- current 2026 experimental-physiology literature explicitly treats N-of-1 as a distinct design for causal individual-level physiology inference.

Detailed N-of-1 analysis/statistics can and should remain owned by **RES-27**.

But **taxonomy-level design classification** belongs in RES-02 and must be closed before mechanistic synthesis.

---

# Sources checked for this audit

## 1. Current 2026 Experimental Physiology N-of-1 review

Konigorski S, Ried-Larsen M, Schmid CH.  
**Digital N-of-1 trials and their application in experimental physiology.**  
Exp Physiol. 2026;111(8):3525–3545.  
DOI: 10.1113/EP092753.

Checked current PubMed/PMC record 2026-11-17.

The article explicitly describes N-of-1 as:

- a **replicate multi-crossover experimental design**;
- usually with repeated randomized treatment periods;
- able to estimate intervention effects within an individual;
- potentially aggregatable across individuals;
- particularly relevant to experimental physiology;
- useful when outcomes can be repeatedly measured and treatment effects have suitable onset/offset.

https://pubmed.ncbi.nlm.nih.gov/42318774/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC13394772/

---

## 2. Current CONSORT 2025 statement

CONSORT 2025 checked.

It explicitly lists an existing:

> **N-of-1 trial extension**

among randomized-trial design extensions.

CONSORT 2025 currently recommends using existing specialized extensions while alignment with CONSORT 2025 is ongoing.

BMJ. 2025;389:e081123.

https://www.bmj.com/content/389/bmj-2024-081123

---

## 3. CENT 2015

Vohra S, Shamseer L, Sampson M, et al.  
**CONSORT extension for reporting N-of-1 trials (CENT) 2015 Statement.**  
BMJ. 2015;350:h1738.

Current BMJ record checked.

CENT defines medical N-of-1 trials as prospectively planned repeated treatment/control periods in one participant, commonly:

- challenge-withdrawal;
- repeated crossover;
- ABAB / repeated blocks;
- optionally randomized period order.

CENT explicitly distinguishes N-of-1 from the broader family of single-case experimental designs.

https://www.bmj.com/content/350/bmj.h1738

### Version note

CENT remains the existing specialized reporting extension referenced by CONSORT 2025; it has not yet been replaced by a fully CONSORT-2025-aligned N-of-1 extension in the sources checked.

---

## 4. Current 2025 N-of-1 methods review

**N-of-1 trials in clinical research: Methodological foundations, statistical approaches and implementation challenges.**  
Br J Clin Pharmacol. 2025/2026.

Checked current PMC/PubMed record.

Key structural points:

- repeated treatment periods;
- within-person comparison;
- carryover/washout;
- autocorrelation;
- repeated outcomes;
- individual treatment-effect estimation.

https://pubmed.ncbi.nlm.nih.gov/41355573/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC12930012/

---

## 5. Current 2026 SCED mechanism-of-change example

**Mechanism of change in functional neurological (motor) disorder: a pilot study using a single-case experimental design.**  
2026.

Checked PubMed record.

It used a non-concurrent multiple-baseline SCED to examine temporal relations between a putative mechanism and functional outcome.

This confirms that broader SCED structures are actively used for mechanism-of-change questions, not only treatment comparison.

https://pubmed.ncbi.nlm.nih.gov/42747035/

---

## 6. Single-case mediation methods

**Causal Mediation Effects in Single Case Experimental Designs.**  
Psychol Methods. 2023.

Checked PMC record.

This confirms that mediation questions can be embedded in SCED data structures and therefore the SCED/N-of-1 family intersects directly with PASS-06C3.

https://pmc.ncbi.nlm.nih.gov/articles/PMC10601531/

---

## 7. Current NIH BESH policy

NIH NOT-OD-26-032 and NOT-OD-26-067 rechecked.

Current status remains:

- applications due on/after 2026-05-25:
  - BESH is no longer an NIH clinical trial;
  - BESH remains experimental human research.

No contradiction with C1/C2 found.

https://grants.nih.gov/grants/guide/notice-files/NOT-OD-26-032.html  
https://grants.nih.gov/grants/guide/notice-files/NOT-OD-26-067.html

---

## 8. FDA surrogate-endpoint resources

Current FDA surrogate-endpoint resources checked 2026-11-17.

FDA defines a surrogate endpoint as an endpoint used as a substitute for direct clinical benefit and expected to predict that benefit.

FDA explicitly notes that some accepted surrogate endpoints are:

> **mechanism agnostic**.

Therefore surrogate validation is not reducible to mechanism evidence and is not a separate mechanistic study-design family.

https://www.fda.gov/drugs/development-resources/surrogate-endpoint-resources-drug-and-biologic-development  
https://www.fda.gov/drugs/development-resources/table-surrogate-endpoints-were-basis-drug-approval-or-licensure

---

## 9. Human-genetic target validation

Current Nature Reviews Genetics 2025/2026 review checked:

**Genomics of drug target prioritization for complex diseases.**

Human genetics can contribute to:

- target identification;
- target prioritization;
- causal triangulation;
- safety/benefit inference.

But the underlying study architectures remain:

- genetic association;
- rare-variant/natural-experiment evidence;
- MR/IV;
- colocalization/fine-mapping;
- related causal-genetic methods.

Thus:

> human-genetic target validation is an evidence function/crosswalk, not one new atomic RES-02 design family.

https://www.nature.com/articles/s41576-025-00904-4

---

## 10. Mechanistic triangulation

Current review checked:

**The state of mechanistic research in the evidence-based medicine era: A sandwalk between triangulation and hierarchies.**

The review emphasizes convergence across:

- models;
- systems;
- settings;
- methods with different assumptions/biases.

This supports C1–C5's multi-system architecture rather than a single universal mechanistic hierarchy.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12400823/

---

# Part A — Coverage map after C1–C5

## 1. Human experimental perturbation

Covered in C2:

- BESH;
- mechanistic clinical trial;
- parallel;
- crossover;
- within-person/split-body;
- factorial;
- challenge;
- dose;
- blockade;
- activation;
- rescue;
- target engagement.

### Gap found

C2 mentions ordinary within-person/crossover structures but does **not** structurally cover:

> repeated randomized experimental periods within a single participant as a distinct inferential design.

That is the N-of-1/SCED gap.

---

## 2. Causal mediation

Covered in C3:

- A→M→Y;
- temporal order;
- randomized vs observational mediation;
- direct/indirect effect families;
- exposure-induced M–Y confounding;
- multiple/serial mediators;
- longitudinal mediation.

No contradiction found.

---

## 3. Observational mechanism / biomarkers / omics

Covered in C4:

- cross-sectional;
- cohort/nested biospecimen;
- repeated molecular measures;
- discovery vs replication;
- pathways/networks;
- causal-discovery boundary;
- MR/IV boundary.

No missing atomic mechanism-design family found here.

---

## 4. Nonhuman/translational

Covered in C5:

- animal;
- primary cell;
- cell line;
- ex vivo;
- organoid/MPS;
- genetic perturbation;
- pharmacological perturbation;
- computational models;
- translation.

No missing model-system family requiring a dedicated pre-synthesis pass was identified.

---

# Part B — Why N-of-1 is a true RES-02 blocker

## 5. It is structurally different from ordinary group crossover

Group crossover:

> multiple participants each receive multiple conditions; typical primary estimand is a population/group treatment effect.

N-of-1:

> one participant receives repeated treatment/control periods, often with multiple crossovers; primary inferential target can be the **individual participant's treatment/physiological effect**.

A series of N-of-1 trials can additionally support population-level inference.

---

## 6. It is not the same as one ordinary within-person comparison

Example ordinary crossover:

> A then B once each.

N-of-1 can use:

> AB / BA / AB / BA or other repeated blocks.

Repeated replication within the same individual changes:

- inferential unit;
- treatment-period structure;
- temporal dependence;
- individual-effect estimation.

---

## 7. It directly matters to experimental physiology

Current 2026 Experimental Physiology review explicitly motivates N-of-1 because:

- physiological effects may differ meaningfully between individuals;
- repeated digital/physiological measurement is increasingly feasible;
- some acute exposures have rapid onset/offset;
- small mechanistic physiology samples can benefit from repeated within-person experimentation.

### Fitness relevance

Potential examples:

- caffeine response;
- carbohydrate timing;
- acute BFR pressure;
- recovery intervention;
- sleep extension;
- warm-up protocol;
- acute exercise-intensity response;
- repeated wearable-based physiological response.

---

# Part C — Broader SCED family

## 8. N-of-1 is not all SCED

CENT explicitly restricts medical N-of-1 guidance to a subset of:

> withdrawal/reversal / repeated crossover single-case experiments.

Broader SCED structures include:

1. withdrawal/reversal;
2. multiple-baseline;
3. alternating-treatment;
4. changing-criterion/intensity;
5. multiple-treatment designs.

### Audit conclusion

RES-02 needs a taxonomy-level crosswalk of:

> N-of-1 vs broader SCED.

Detailed SCED statistics can remain deferred.

---

# Part D — Mechanistic role of SCED

## 9. SCED can test intervention effect

Repeated manipulation can establish a functional relation within one participant when:

- outcome repeatedly measured;
- condition systematically manipulated;
- phase/condition changes replicated;
- timing and carryover allow attribution.

---

## 10. SCED can also test mechanism-of-change

Possible structure:

`A phase → repeated M → repeated Y`

Then examine whether:

- M changes after A;
- M precedes Y;
- repeated condition changes reproduce the pattern.

This can strengthen within-person temporal mechanistic evidence.

But:

> repeated temporal association alone is not automatic causal mediation.

C3 assumptions still apply.

---

# Part E — Randomization in N-of-1

## 11. Randomized period order

Randomization can occur at the treatment-period/block level.

It helps reduce systematic:

- period;
- time-trend;
- expectancy/order;

bias where feasible.

---

## 12. Not all SCED/N-of-1 structures are randomized

CENT notes that some repeated challenge-withdrawal structures may have nonrandomized order.

Broader SCED includes both:

- randomized;
- nonrandomized;

structures.

### Project rule

Do not label every N-of-1/SCED:

> randomized trial.

Record actual condition-allocation logic.

---

# Part F — Carryover / onset / offset

## 13. Suitability condition

N-of-1 repeated crossover is most straightforward when effects:

- begin sufficiently quickly;
- reverse/wash out sufficiently quickly;
- can be repeatedly measured.

---

## 14. Persistent adaptation is problematic

Examples:

- hypertrophy;
- long-term strength adaptation;
- structural tendon adaptation.

These can carry over across periods.

### Fitness rule

N-of-1 crossover is more naturally suited to:

- acute/reversible physiological interventions

than to:

- irreversible/persistent adaptation,

unless design explicitly models the persistent process.

---

# Part G — Autocorrelation / time trends

## 15. Repeated within-person measurements are temporally dependent

Potential:

- autocorrelation;
- drift;
- learning;
- fatigue;
- seasonal/time trends;
- adaptation.

### Audit ownership

This must be recognized in RES-02.

Detailed models belong to:

> RES-27 / later statistical methodology.

---

# Part H — Individual vs population estimand

## 16. Individual-level target

Question:

> Which condition works better **for this person**?

This is the defining practical strength of N-of-1.

---

## 17. Series of N-of-1 trials

Multiple individually replicated experiments may be combined.

Then distinguish:

- individual treatment effects;
- population-average/hierarchical effect;
- heterogeneity of individual effects.

### Project rule

Do not treat a series of N-of-1 trials as an ordinary parallel RCT.

---

# Part I — N-of-1 vs self-controlled observational designs

## 18. Critical boundary

PASS-05A self-controlled observational designs include:

- case-crossover;
- self-controlled case series.

These use within-person comparisons **without prospectively assigning repeated treatment conditions as an experiment**.

N-of-1/SCED:

> investigator systematically manipulates intervention/condition.

### Project rule

Within-person unit of analysis does not make observational and experimental self-controlled designs equivalent.

---

# Part J — N-of-1 vs ordinary crossover

## 19. Ordinary crossover

Usually several participants, one/few treatment periods each.

Primary target often:

> population-average treatment contrast.

---

## 20. N-of-1

Single participant, repeated replicated crossover periods.

Primary target:

> individual treatment/physiological contrast.

### Project rule

N-of-1 is related to crossover but should not disappear inside the generic crossover label.

---

# Part K — Surrogate endpoints audit

## 21. Surrogate endpoint is not a mechanism design

FDA current resources show surrogate validity can be:

- mechanistically supported;
- clinically/statistically supported;
- sometimes explicitly mechanism agnostic.

Therefore:

> mediator/target ≠ surrogate endpoint  
> surrogate endpoint ≠ mechanism proof.

### Decision

**NOT a blocking mechanistic design gap.**

Detailed surrogate validation belongs to later endpoint/measurement/evidence-to-decision methodology.

---

# Part L — Target validation audit

## 22. “Target validation” is an evidence function

Target validation can combine:

- human genetics;
- observational evidence;
- MR;
- pharmacological perturbation;
- genetic knockout;
- rescue;
- cell/animal evidence;
- human experimental evidence.

### Decision

Not one atomic study design.

C1–C5 already contain its major mechanistic evidence components.

Detailed target-prioritization frameworks can be handled later if needed.

**NOT a blocker.**

---

# Part M — Human genetics / experiments of nature

## 23. Potential concern checked

Human natural genetic variation can give powerful target evidence.

But structural classifications remain:

- genetic association;
- rare-variant observational evidence;
- MR/IV;
- natural experiment-like causal inference.

C4 already routes MR/IV to the causal-inference branch.

### Decision

**No new mechanistic design family required before synthesis.**

---

# Part N — Natural experiments / IV / MR

## 24. Boundary remains coherent

These are causal-identification architectures.

They can support mechanism/target hypotheses but should remain classified by their causal design.

### Decision

Not a C-branch blocker.

Detailed causal methods remain later RES topics.

---

# Part O — Qualitative mechanism/process evidence

## 25. Potential concern checked

Behavioral/implementation mechanisms can also be explored through:

- interviews;
- qualitative process evaluation;
- mixed-methods studies.

However RES-02 still has dedicated future branches for:

- qualitative study families;
- mixed methods.

### Decision

Do not duplicate them inside mechanistic branch now.

Mechanistic synthesis should later cross-reference these branches.

**Not a current blocker.**

---

# Part P — Surrogate vs mediator vs response biomarker

## 26. Boundary confirmed

### Mediator
Causal intermediate in A→M→Y.

### Response biomarker
Indicates biological response to exposure/intervention.

### Surrogate endpoint
Substitute endpoint intended to predict clinical/practical benefit.

### Target
Biological/behavioral process intended to be perturbed.

One variable may occupy more than one role only if evidence supports each role separately.

No contradiction across C2–C4 found.

---

# Part Q — Necessity/sufficiency consistency audit

## 27. Human perturbation wording

C2 uses:

- conditional dependence;
- necessity-like;
- inducing/sufficiency-like;

rather than universal claims.

Correct.

---

## 28. Nonhuman wording

C5 explicitly uses:

> model-specific necessity/sufficiency.

Correct.

---

## 29. Mediation wording

C3 does not equate:

> indirect effect = strict necessity/sufficiency.

Correct.

### Verdict

No contradiction.

---

# Part R — Target-engagement / mediation consistency audit

## 30. C2

Target engagement:

`A → M`

only.

## 31. C3

Mediation:

`A → M → Y`

under causal assumptions.

## 32. C4

Biomarker response:

may be associative/response evidence without mediation.

## Verdict

These layers remain correctly separated.

---

# Part S — Experimental omics boundary audit

## 33. C4 says omics is measurement architecture

Correct.

If exposure assigned:

> underlying design remains experimental.

If not assigned:

> observational.

This agrees with C2.

No contradiction.

---

# Part T — Nonhuman translational consistency audit

## 34. C5 does not create a universal evidence hierarchy

Correct.

It records:

- model system;
- perturbation;
- correspondence;
- translation.

## 35. Triangulation

C4/C5 converge on:

> independent lines with different biases strengthen mechanism inference.

Correct.

No contradiction.

---

# Part U — Prediction/DTA/measurement boundary audit

## 36. Mechanistic biomarkers used for prediction

If a biomarker panel is used to predict individuals:

> prediction-model branch B.

Correctly routed by C4.

---

## 37. Criterion validity / measurement

If question is measurement validity of the target assay:

> PASS-06A / measurement-property route.

Correct.

---

## 38. Diagnostic classification

If biomarker/index test classifies current condition:

> DTA / diagnostic-prediction crosswalk.

Correct.

No contradiction.

---

# Part V — Exercise-specific omission audit

Explicitly represented now:

1. acute physiology perturbation;
2. target engagement;
3. pharmacological blockade;
4. dose/challenge;
5. MPS/signaling vs chronic adaptation;
6. hypertrophy mediation;
7. exercise omics;
8. trained-vs-untrained confounding;
9. animal exercise models;
10. rodent treadmill/wheel/resistance;
11. cultured myotubes/ex vivo muscle;
12. computational mechanistic models.

### Missing before synthesis

> repeated single-participant experimental physiology / N-of-1 / SCED.

This is material to fitness because repeated digital/physiological measurements are feasible and because individual response is central to later personalization.

---

# Part W — Ownership boundary with RES-27

## 39. RES-02 responsibility

Must classify at taxonomy level:

- what N-of-1/SCED is;
- randomized vs nonrandomized forms;
- relation to crossover;
- individual vs population estimand;
- applicability to mechanistic physiology;
- basic carryover/time-series threats;
- boundary with observational self-controlled designs.

---

## 40. RES-27 responsibility

Detailed N-of-1 methodology remains deferred:

- exact randomization schedules;
- block construction;
- power/sample requirements;
- autocorrelation models;
- Bayesian/hierarchical estimation;
- aggregation/meta-analysis;
- stopping rules;
- digital implementation;
- personalization decision thresholds.

### Project rule

Adding a taxonomy pass now does **not** steal detailed ownership from RES-27.

---

# Potential gaps checked and NOT blocking

1. **Surrogate endpoint validation** → endpoint/measurement/evidence-to-decision layer, not mechanism design.
2. **Target validation** → evidence function combining existing designs.
3. **Human genetic target validation** → observational genetics / MR / causal branch.
4. **Natural experiments / IV / MR** → causal-design family, later detailed methods.
5. **Single-cell/spatial omics** → measurement layer within C4, not new design.
6. **PK/PD / phase-0 probe studies** → human perturbation/target-engagement structures already covered by C2.
7. **Human challenge studies** → challenge/provocation covered by C2.
8. **Systems-biology/network models** → observational network C4 or computational C5.
9. **Qualitative mechanism/process evidence** → future qualitative/mixed-methods branches.
10. **Surrogate biomarker vs mediator distinction** → already explicit.
11. **Implementation mechanisms** → later qualitative/mixed/process-evaluation crosswalk.
12. **Moderator/effect modification** → already distinguished from mediation; detailed heterogeneity elsewhere.

---

# Source-version/status checks

As of 2026-11-17:

1. NIH BESH 2026 classification change remains current:
   - applications due on/after 2026-05-25 → BESH no longer NIH clinical trial.
2. CONSORT 2025 remains the current core randomized-trial reporting statement.
3. CENT 2015 remains the current specialized N-of-1 reporting extension referenced by CONSORT 2025.
4. FDA current surrogate-endpoint resources continue to distinguish surrogate validity from mechanism and include mechanism-agnostic surrogates.
5. No current source found that would require rollback of C1–C5.

---

# Final audit decision

## Can mechanistic synthesis begin now?

**NO.**

One material design-family gap remains:

> **N-of-1 / single-case experimental structures in mechanistic/experimental physiology.**

This gap is not sufficiently covered by generic crossover/within-person labels because:

- individual effect is the primary estimand;
- treatment periods are replicated;
- broader SCED families exist;
- repeated time-series dependence is intrinsic;
- current 2026 physiology literature treats it as a distinct experimental design.

---

# Required next route

1. **PASS-06C7 — N-of-1 and single-case experimental mechanistic structures**;
2. then **PASS-06C8 — repeat mechanistic closure/gap audit**;
3. mechanistic structural synthesis only if C8 finds no blocking gap.

---

# Next micro-pass

**RES-02 / PASS-06C7 — N-of-1 and single-case experimental structures for mechanistic/physiology research: randomized multi-crossover N-of-1, withdrawal/reversal, multiple-baseline, alternating-treatment and changing-criterion structures; individual vs population estimands; repeated outcome measurement; onset/offset/washout/carryover; autocorrelation/time trends at taxonomy level; mechanistic target/mediator measurement; exercise/fitness use cases; and explicit ownership boundary with detailed RES-27 N-of-1 methodology.**

STOP after this saved audit.
