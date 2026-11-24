# RES-02 / PASS-06C4 — Observational mechanistic, biomarker and omics study structures

Статус: **COMPLETE MICRO-PASS — mechanistic branch RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. descriptive biomarker/pathway evidence;
2. cross-sectional vs longitudinal biomarker structures;
3. biomarker roles and context of use;
4. molecular epidemiology as evidence layer, not atomic study design;
5. temporality and reverse causation;
6. nested/prospective biospecimen designs;
7. high-dimensional omics discovery;
8. pre-analytical / analytical / batch structure;
9. multiplicity and high-dimensional overfitting;
10. discovery vs replication vs validation;
11. feature annotation uncertainty;
12. pathway enrichment;
13. co-expression / network inference;
14. causal discovery boundaries;
15. triangulation with experimental perturbation;
16. Mendelian randomization / IV boundary;
17. exercise/fitness examples;
18. structural record.

Не покрывается здесь:

- detailed MR estimators;
- IV assumptions beyond taxonomy boundary;
- colocalization;
- mediation-MR;
- fine-mapping;
- causal gene prioritization;
- exact multiple-testing procedures;
- exact pathway-enrichment algorithms;
- exact batch-correction algorithms;
- detailed omics QC thresholds;
- single-cell causal perturbation methods;
- animal/in vitro/ex vivo evidence — PASS-06C5;
- final mechanistic synthesis.

---

# Sources checked

## 1. FDA–NIH BEST Biomarker Resource

Current BEST resource checked 2026-11-17.

Current glossary definition:

> a biomarker is a defined characteristic measured as an indicator of normal biological processes, pathogenic processes, or biological responses to an exposure/intervention.

BEST distinguishes biomarker contexts such as:

- susceptibility/risk;
- diagnostic;
- monitoring;
- prognostic;
- predictive;
- response;
- safety;
- multicomponent biomarker.

A pharmacodynamic response biomarker can indicate biological activity **without necessarily establishing efficacy or linking the activity to an established mechanism of action**.

Current resource last-updated/revised entries remain active through 2025.

https://www.ncbi.nlm.nih.gov/books/NBK326791/  
https://www.ncbi.nlm.nih.gov/books/NBK338448/  
https://www.ncbi.nlm.nih.gov/books/NBK402286/

---

## 2. STROBE-ME

Gallo V, et al.  
**STrengthening the Reporting of OBservational studies in Epidemiology – Molecular Epidemiology (STROBE-ME): an extension of the STROBE statement.**  
PLoS Med. 2011;8:e1001117.

Current IARC/EQUATOR resources checked 2026-11-17.

Key structural point:

- biomarker/molecular epidemiology still uses ordinary underlying observational designs:
  - cohort;
  - case-control;
  - cross-sectional;
  - nested case-control;
  - case-cohort;
- molecular measurements add requirements around:
  - biospecimen collection;
  - handling/storage;
  - laboratory methods;
  - reliability/validity;
  - biomarker role/proxy interpretation.

Thus:

> molecular epidemiology ≠ one atomic design.

https://www.iarc.who.int/reference/strengthening-the-reporting-of-observational-studies-in-epidemiology-molecular-epidemiology-strobe-me-an-extension-of-the-strobe-statement-3/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC3201942/

---

## 3. STREGA

**STrengthening the REporting of Genetic Association Studies (STREGA): An Extension of STROBE.**  
2009.

Current EQUATOR listing checked.

Used only for the boundary that genetic-association reporting remains an extension of ordinary observational design reporting, not an independent causal-design label.

https://equator-network.org/reporting-guidelines/strobe-strega/

---

## 4. STROBE-MetEpi — current 2026 status

**A Reporting Guideline for Observational Studies in Metabolomic Epidemiology: Explanation and Elaboration of the STROBE-MetEpi Checklist.**  
Research Square preprint, 2026-06-25.

Current PMC/PubMed status checked 2026-11-17.

Important status:

> **preprint; not yet peer reviewed**.

Scope covers observational metabolomic epidemiology:

- cohort;
- case-control;
- nested case-control;
- case-cohort;
- cross-sectional.

It explicitly excludes:

- RCTs;
- methodological-development studies;
- multi-omics studies.

Useful current reporting emphases include:

- hypothesis-driven vs discovery/exploratory status;
- sampling and biospecimen conditions;
- analytical platform;
- QA/QC;
- signal drift;
- model optimization;
- multiple testing;
- validation;
- pathway interpretation;
- annotation certainty;
- data/code sharing.

Because it is currently a preprint, it is used here as **emerging current guidance**, not as a finalized universal standard.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13321282/  
https://pubmed.ncbi.nlm.nih.gov/42396500/

---

## 5. Batch effects in large-scale omics

**Assessing and mitigating batch effects in large-scale omics studies.**  
2024.

Current PMC version checked.

Key principles:

- batch effects are technical variations unrelated to the scientific target;
- batch can become confounded with biological groups;
- sample collection, preparation, storage, reagent lots, operators, platforms and run order can create systematic differences;
- correction after the fact cannot always rescue a fundamentally confounded design;
- randomization/blocking/controls/SOPs and technical metadata should be planned upstream.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11447944/

---

## 6. Current 2026 mass-spectrometry omics quality framework

**Mass Spectrometry-Based Omics: An Integrated Framework for Analytical Quality, Data Integrity, and Biological Interpretation.**  
2026.

Current PMC record checked.

Important current principles:

- specimen → analytical acquisition → data processing → statistical interpretation is one quality chain;
- pre-analytical changes can alter molecular profiles before analysis;
- instrument drift/batch effects can mimic or hide biology;
- analysis should control multiplicity and leakage;
- findings require verification before stronger biological claims.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13707520/

---

## 7. Replication / validation in omics

**Find the Needle in the Haystack, Then Find It Again: Replication and Validation in the 'Omics Era.**  
2020.

Used as a methodological synthesis for:

- appropriate multiple-testing correction;
- independent replication;
- harmonized analytical procedures;
- transparent pipelines;
- distinction between:
  - reproducibility;
  - functional relevance;
  - predictive validity.

https://pmc.ncbi.nlm.nih.gov/articles/PMC7408356/

---

## 8. Pathway enrichment limitations

**Pathway enrichment analysis and visualization of omics data using g:Profiler, GSEA, Cytoscape and EnrichmentMap.**  
Nat Protoc. 2019.

Current PMC text checked.

Key issues:

- pathway databases are incomplete and biased toward well-studied biology;
- genes/pathways are correlated;
- gene-set size and background universe affect results;
- database versions matter;
- pathway enrichment is typically most defensible as exploratory/hypothesis-generating evidence unless independently validated.

https://pmc.ncbi.nlm.nih.gov/articles/PMC6607905/

Additional caution:

**Beyond Standard Pipeline and p < 0.05 in Pathway Enrichment Analyses.**

https://pmc.ncbi.nlm.nih.gov/articles/PMC9179938/

---

## 9. Current causal-network omics review

**Causal network analysis of omics data using prior knowledge databases.**  
2025.

Current PMC version checked.

It emphasizes that causal relationships from observational omics remain challenging because of:

- network complexity;
- observational limitations;
- prior-knowledge assumptions;
- uncertainty in multi-step/network-level interpretation.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12703490/

---

## 10. Current causal analysis of biomedical omics

**Ten quick tips for causal analysis of biomedical omics data.**  
2026.

Current PMC record checked.

It clearly separates:

- causal discovery;
- identification;
- estimation;
- inference;
- experimental validation/translation.

It also emphasizes that observational omics require explicit causal assumptions rather than treating statistical/network structure as causal by default.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13492794/

---

## 11. Mendelian randomization — current methods + reporting boundary

Current sources checked:

- **STROBE-MR** E&E, BMJ 2021;
- **Mendelian Randomization Methods for Causal Inference: Estimands, Identification and Inference**, Stat Med. 2026.

MR uses genetic variants as instrumental variables to estimate causal effects under assumptions.

Core IV assumptions include:

1. relevance;
2. independence;
3. exclusion restriction.

MR can reduce some conventional confounding/reverse-causation problems but introduces its own validity threats:

- invalid instruments;
- weak instruments;
- horizontal pleiotropy;
- population structure;
- selection;
- data-overlap/design issues.

https://www.bmj.com/content/375/bmj.n2233  
https://pmc.ncbi.nlm.nih.gov/articles/PMC12917735/

### Project implication

MR is **not** ordinary biomarker association or omics discovery.

Route MR to the causal-inference design branch.

---

## 12. Exercise domain — MoTrPAC human acute multi-omics

Current 2026 human MoTrPAC preprint/PMC records checked.

Sedentary adults were randomized to:

- endurance exercise;
- resistance exercise;
- non-exercise control,

with repeated multi-tissue, multi-timepoint omics.

This is important as a **boundary example**:

> the omics layer is high-dimensional molecular measurement, but the underlying exposure design is randomized experimental, not observational.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13184684/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC13001352/

---

## 13. Exercise transcriptomic time-course evidence

**Time trajectories in the transcriptomic response to exercise — a meta-analysis.**  
Nat Commun. 2021.

43 studies, 739 individuals.

Useful exercise-specific lesson:

- acute and long-term transcriptional responses differ;
- time after exercise materially determines observed molecular signature.

https://pmc.ncbi.nlm.nih.gov/articles/PMC8190306/

---

## 14. Current exercise/sports metabolomics review

**Exercise and Sports Metabolomics: Analytical Platforms, Metabolite Annotation, Pathway-Level Interpretation, and Biomarker-Panel Readiness.**  
2026.

Current PMC version checked.

Used as domain-specific support that exercise metabolomics is highly context-sensitive to:

- matrix;
- platform;
- nutrition;
- training state;
- sampling time;
- annotation certainty;
- validation maturity.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13515584/

This is a narrative review, not the primary taxonomy authority.

---

# Part A — Biomarker is a role, not a mechanistic conclusion

## 1. Biomarker definition

### Established finding
**Confidence: HIGH**

A biomarker is a measured indicator of:

- normal biology;
- pathogenic biology;
- biological response to exposure/intervention.

This says what the variable **indicates**.

It does not establish:

- causal role;
- mediator role;
- mechanistic necessity;
- surrogate validity.

---

## 2. Biomarker context of use must be explicit

Possible roles include:

- exposure/internal-dose biomarker;
- susceptibility/risk biomarker;
- diagnostic biomarker;
- monitoring biomarker;
- prognostic biomarker;
- predictive biomarker;
- response/pharmacodynamic biomarker;
- safety biomarker;
- multicomponent biomarker.

### Project rule

Do not use:

> “biomarker”

as a sufficient scientific classification.

Extract:

> biomarker of **what**, measured **when**, for **what context of use**.

---

## 3. Response biomarker ≠ established mechanism

Current BEST explicitly allows pharmacodynamic response biomarkers to show biological activity:

> without necessarily linking that activity to an established mechanism of action.

### Project rule

Observed exercise-responsive metabolite/protein/signaling marker can be:

> real response biomarker

without being:

> causal mediator of adaptation.

---

# Part B — Molecular epidemiology is not a design family

## 4. Core principle

### Established finding
**Confidence: HIGH**

Molecular epidemiology integrates molecular/biomarker measurements into conventional epidemiologic designs.

Underlying designs remain:

- cohort;
- case-control;
- cross-sectional;
- nested case-control;
- case-cohort;
- repeated-measures longitudinal structures.

### Project classification

Record separately:

1. base epidemiologic design;
2. biospecimen/omics layer;
3. biomarker role;
4. scientific purpose.

---

# Part C — Cross-sectional biomarker evidence

## 5. Structure

`exposure/state X ↔ biomarker M`

measured at approximately the same time.

Can answer:

> are X and M associated/correlated at this measurement episode?

---

## 6. Mechanistic limitation

Cross-sectional biomarker association is weak for causal direction because possible structures include:

- X → M;
- M → X;
- common cause C → X and M;
- disease/outcome → M;
- selection/collider pathways.

### Project rule

Cross-sectional molecular association is primarily:

> descriptive/associational mechanistic clue,

unless external design knowledge fixes temporal direction.

---

# Part D — Longitudinal biomarker evidence

## 7. Baseline biomarker before future outcome

Structure:

`M(T0) → Y(T1)`

This improves temporal ordering.

It may support:

- prognosis;
- etiologic hypothesis;
- mechanistic plausibility.

But it does not automatically establish:

> M causes Y.

Confounding may remain.

---

## 8. Repeated biomarker trajectories

Structure:

`M0 → M1 → M2 … → Y`

Can characterize:

- molecular kinetics;
- exposure response;
- recovery;
- temporal ordering;
- candidate pathway dynamics.

### Project rule

Repeated measurements improve temporal resolution but do not themselves solve unmeasured confounding or causal direction among correlated molecular features.

---

# Part E — Prospective/nested biospecimen designs

## 9. Pre-outcome biospecimens are stronger against reverse causation

Examples:

- cohort with stored baseline plasma;
- nested case-control sampled from a cohort;
- case-cohort biomarker study.

Advantage:

> biospecimen measured before clinical outcome.

This reduces the specific concern that:

> overt outcome caused the measured biomarker.

---

## 10. But pre-diagnostic biomarker ≠ causal biomarker

A pre-outcome marker can still reflect:

- an upstream confounder;
- early subclinical disease;
- correlated exposure;
- shared biology;
- noncausal risk state.

### Project rule

Temporality is necessary for many causal claims but not sufficient.

---

# Part F — Reverse causation

## 11. Definition for this branch

Reverse causation means:

> the outcome/current disease process causes the measured exposure/biomarker, rather than biomarker causing outcome.

---

## 12. Fitness example

Cross-sectional finding:

> low VO₂max athletes have higher inflammatory marker M.

Possible directions:

- low fitness → inflammation;
- inflammation → lower fitness;
- adiposity/illness → both;
- recent training/recovery state → both.

### Project rule

Do not infer a mechanistic arrow from cross-sectional ordering in a figure.

---

# Part G — High-dimensional omics is a measurement/data architecture

## 13. Omics modalities

Examples:

- genomics;
- epigenomics;
- transcriptomics;
- proteomics;
- phosphoproteomics;
- metabolomics;
- lipidomics;
- microbiome;
- multi-omics integration.

### Project rule

> “omics study” is not a complete design label.

Need underlying:

- experiment;
- cohort;
- case-control;
- cross-sectional;
- longitudinal repeated-measures;
- other design.

---

## 14. Experimental vs observational omics

### Experimental omics

Exposure/manipulation is assigned.

Example:

> randomized acute exercise + repeated muscle multi-omics.

Primary causal evidence about:

> assigned exercise condition → molecular response

belongs to PASS-06C2.

### Observational omics

Exposure/state is not assigned.

Example:

> trained vs untrained athletes compared by muscle transcriptomics.

Confounding/reverse causation remain.

### Project rule

Do not downgrade a randomized omics experiment to “observational omics” merely because the molecular analysis is exploratory/high-dimensional.

---

# Part H — Discovery vs hypothesis-driven omics

## 15. Hypothesis-driven study

Prespecifies:

- biomarker/pathway;
- direction;
- comparison;
- analysis.

Can provide more focused confirmatory evidence if design/measurement are valid.

---

## 16. Discovery/exploratory study

Searches many:

- genes;
- proteins;
- metabolites;
- pathways;
- network nodes.

Primary role:

> generate candidate associations/pathways/hypotheses.

### Project rule

A discovery paper can be scientifically valuable without being confirmatory mechanism proof.

---

# Part I — High dimensionality and multiplicity

## 17. Core structure

Often:

`p >> n`

Thousands/millions of features can be tested in modest samples.

Consequences:

- large multiple-testing burden;
- unstable feature selection;
- optimistic apparent effects;
- false discoveries;
- winner's curse.

---

## 18. Multiple-testing correction is mandatory context

At taxonomy level record:

- number of features tested;
- family/analysis scope;
- multiplicity correction;
- adjusted significance measure;
- whether findings were prespecified or exploratory.

### Project rule

Nominal p < 0.05 across thousands of omics features is not credible discovery control.

Exact correction methods belong later statistical work.

---

# Part J — Discovery, replication and validation are different

## 19. Discovery

Identify candidate feature/pathway.

---

## 20. Statistical replication

Test same candidate/association in an independent sample under a sufficiently comparable question.

---

## 21. Analytical validation

BEST definition concerns whether the assay/tool measures with acceptable technical:

- accuracy;
- precision;
- sensitivity;
- specificity;
- other performance.

This is **not** biological/clinical usefulness.

---

## 22. Functional validation

Test whether candidate has biological activity/role, often using:

- targeted assay;
- perturbation;
- cell/animal model;
- orthogonal method.

This is different from statistical replication.

---

## 23. Predictive/clinical validation

If biomarker is intended for prediction/decision:

route to:

- prediction-model validation;
- diagnostic accuracy;
- utility/impact;

depending exact purpose.

### Project rule

Never use unqualified:

> “validated biomarker”.

Specify **what kind of validation**.

---

# Part K — Batch and pre-analytical effects

## 24. Biospecimen handling can create artificial biology

Potential sources:

- collection time;
- fasting state;
- exercise recency;
- temperature;
- time to centrifugation/freezing;
- storage duration;
- freeze–thaw cycles;
- sample preparation;
- reagent lot;
- instrument;
- operator;
- run order.

---

## 25. Batch confounded with phenotype is a design threat

Example:

- cases processed on plate 1;
- controls on plate 2.

Observed molecular differences can be indistinguishable from technical batch.

### Project rule

Some design confounding cannot be reliably “fixed later” by batch correction.

Need upstream:

- randomization/blocking;
- balanced batches;
- QC/reference samples;
- recorded technical metadata.

---

# Part L — Exercise-specific pre-analytical control

## 26. Exercise biomarkers are highly time-sensitive

Need record:

- last exercise bout;
- exact sample time relative to exercise;
- fasting/fed status;
- hydration;
- circadian time;
- caffeine/nutrition;
- training phase;
- recovery interval;
- acute illness/inflammation.

### Project rule

A biomarker can appear inconsistent across studies simply because it was sampled at a different biological phase.

---

# Part M — Feature annotation uncertainty

## 27. Omics feature ≠ identified biological entity automatically

Especially in untargeted metabolomics/proteomics:

features may have:

- uncertain identity;
- ambiguous mapping;
- isomer ambiguity;
- incomplete annotation.

### Project rule

Mechanistic claim strength must match annotation confidence.

Do not build a precise pathway story on an unidentified/ambiguous feature as if identity were certain.

---

# Part N — Pathway enrichment

## 28. What pathway enrichment can answer

Given a selected/ranked feature list:

> are annotated members of predefined biological sets/pathways over-represented or shifted?

Useful for:

- biological summarization;
- hypothesis generation;
- prioritization.

---

## 29. What pathway enrichment does NOT establish

It does not automatically show:

- pathway activation causally caused phenotype;
- direction of causal flow;
- pathway necessity;
- pathway sufficiency;
- cell/tissue origin;
- intervention target validity.

---

## 30. Results depend on analysis choices

Important:

- gene/metabolite universe;
- mapping rules;
- database/version;
- pathway size;
- overlapping gene sets;
- feature correlation;
- enrichment algorithm;
- multiple testing.

### Project rule

Record:

> pathway database + version/date + background universe + algorithm + multiplicity handling.

---

# Part O — Pathway database bias

## 31. Curated biology is incomplete

Well-studied pathways/genes are overrepresented in annotation resources.

Unannotated or poorly studied biology can be ignored.

### Project rule

“No enriched pathway” does not mean:

> no biology.

And “top enriched pathway” can partly reflect:

> database structure and annotation density.

---

# Part P — Co-expression / association networks

## 32. Network edge usually means statistical relationship

Examples:

- correlation;
- partial correlation;
- co-expression;
- mutual information;
- learned latent association.

### Project rule

An edge is not automatically:

> direct causal regulation.

---

## 33. Hub/centrality ≠ causal master regulator

A highly connected node can arise from:

- common upstream cause;
- measurement structure;
- cell-composition shifts;
- batch;
- shared pathway activity;
- statistical construction.

### Project rule

Use:

> candidate hub/regulator

unless causal evidence exists.

---

# Part Q — Causal discovery

## 34. Distinct task

Causal discovery tries to infer aspects of causal structure from data plus assumptions.

It differs from:

- ordinary association network;
- predefined causal effect estimation.

---

## 35. Observational omics causal discovery is assumption-heavy

Challenges include:

- unmeasured confounding;
- measurement error;
- selection;
- feedback/cycles;
- p>>n;
- latent cell composition;
- batch effects;
- equivalence classes of causal structures.

### Project rule

Algorithm output labelled “causal network” is not accepted as mechanism confirmation without checking assumptions and external validation.

---

# Part R — DAG vs learned network

## 36. Causal DAG for identification

Typically represents:

> substantive causal assumptions used before estimation.

---

## 37. Learned network

May be an analysis output derived from molecular data.

### Project rule

Do not treat a data-driven network plot as equivalent to a justified causal DAG.

A statistical network can be useful for:

- hypothesis generation;
- candidate prioritization;
- designing perturbation experiments.

---

# Part S — Triangulation

## 38. Stronger mechanism inference comes from convergent evidence

Example pathway candidate M:

1. observational cohort association;
2. repeated temporal biomarker evidence;
3. omics enrichment/network evidence;
4. genetic causal evidence;
5. human perturbation;
6. animal/cell perturbation;
7. rescue/blockade.

### Project rule

Triangulation is valuable when methods have **different bias structures**.

Repeating the same confounded observational association in several datasets is replication, but not the same as mechanistic triangulation.

---

# Part T — Mendelian randomization boundary

## 39. MR is not ordinary molecular association

MR uses genetic variants as instrumental variables to estimate a causal effect of exposure on outcome.

Core assumptions:

1. relevance;
2. independence;
3. exclusion restriction.

---

## 40. What MR can add

Compared with conventional exposure–outcome observational association, valid MR may reduce susceptibility to:

- some confounding;
- reverse causation.

It can therefore strengthen causal triangulation.

---

## 41. What MR does not automatically establish

MR does not automatically prove:

- molecular mechanism;
- exact biological pathway;
- intervention effect at a specific dose/duration;
- absence of pleiotropy;
- target validity.

### Project route

MR belongs to:

> causal-inference / IV design branch,

not ordinary biomarker/omics mechanistic evidence.

Detailed MR methods are deferred.

---

# Part U — Genetic association vs MR

## 42. GWAS/genetic association

Question:

> is genotype G associated with trait Y?

This is association discovery.

---

## 43. MR

Question:

> under IV assumptions, what causal effect of exposure X on Y is identified using genetic instrument G?

### Project rule

Presence of genetic data does not make a study MR.

Presence of an MR package/software does not guarantee valid IV assumptions.

---

# Part V — Supervised biomarker panels

## 44. High-dimensional biomarker signature can become a prediction model

If features are combined to predict:

- injury;
- recovery;
- adaptation;
- diagnosis;
- performance;

then route to PASS-06B lifecycle:

- development;
- internal validation;
- external validation;
- calibration/performance;
- utility.

### Project rule

Biological interpretability is not required for prediction validity.

Conversely:

> predictive performance does not establish causal mechanism.

---

# Part W — Unsupervised molecular phenotypes

## 45. Clustering/latent classes

Can identify:

- molecular subgroups;
- patterns;
- candidate phenotypes.

But cluster membership is data/model dependent.

### Project rule

Unsupervised clusters are:

> exploratory/descriptive latent structure,

unless independently validated and linked to explicit causal/mechanistic evidence.

Do not call:

> “three molecular mechanisms”

because an algorithm produced three clusters.

---

# Part X — Exercise example: trained vs untrained cross-sectional omics

## 46. Structure

Compare skeletal-muscle transcriptome/metabolome of:

- trained athletes;
- sedentary controls.

Can identify:

> molecular states associated with training status.

Cannot distinguish automatically:

- training effect;
- genetics;
- selection into sport;
- diet;
- age/sex;
- body composition;
- chronic lifestyle;
- reverse causation.

### Classification

> analytical cross-sectional observational omics.

Mechanistic role:

> hypothesis generation / phenotype characterization.

---

# Part Y — Exercise example: prospective training cohort without randomized comparator

## 47. Structure

Measure:

- pre-training omics;
- post-training omics;
- adaptation outcome.

Can characterize:

- within-person molecular change;
- temporal association with adaptation.

Threats:

- secular/time effects;
- diet/recovery changes;
- regression to mean;
- measurement/batch;
- no-treatment counterfactual absent.

### Classification

Depending structure:

- uncontrolled longitudinal intervention;
- repeated-measures observational/interventional response study.

Do not automatically infer:

> changed molecular feature caused adaptation.

---

# Part Z — Exercise example: randomized MoTrPAC acute omics

## 48. Boundary case

Participants randomized to:

- endurance;
- resistance;
- control,

then multi-omics measured over time.

### Correct classification

Underlying exposure design:

> randomized experiment.

Omics:

> high-dimensional mechanistic measurement layer.

Causal inference about:

> exercise assignment → molecular response

can leverage randomization.

But network/pathway claims among molecular features remain separate and may still be observational/assumption-dependent unless directly perturbed.

---

# Part AA — Acute vs chronic molecular response

## 49. Exercise transcriptomic evidence shows distinct time patterns

Meta-analytic evidence shows:

- acute transcriptional response;
- chronic training response

are not identical biological states.

### Project rule

Do not use:

> acute omics signature

as if it were automatically:

> molecular mediator of chronic adaptation.

Need explicit longitudinal/causal bridge.

---

# Part AB — Athlete-monitoring biomarker

## 50. Repeated measurement does not automatically make biomarker useful

A candidate athlete-monitoring marker must distinguish:

- normal acute exercise response;
- recovery kinetics;
- training adaptation;
- illness/injury;
- nutrition/hydration effects;
- assay variation.

### Project rule

Observed exercise responsiveness is only an early evidence layer.

Decision-readiness requires additional:

- repeatability;
- longitudinal validation;
- predictive/decision evidence.

---

# Part AC — Structural record for observational biomarker/omics studies

For each study, record:

1. scientific purpose;
2. base design:
   - cohort;
   - case-control;
   - nested case-control;
   - case-cohort;
   - cross-sectional;
   - repeated-measures;
   - other;
3. experimental exposure assigned? YES/NO;
4. population;
5. exposure/state;
6. biomarker/omics modality;
7. biomarker context of use;
8. biospecimen/tissue;
9. target biological compartment;
10. sampling time relative to exposure/outcome;
11. outcome already present at biomarker sampling?;
12. reverse-causation risk;
13. repeated molecular measurements?;
14. preanalytical protocol;
15. storage;
16. freeze/thaw;
17. platform;
18. batch structure;
19. batch balanced across biological groups?;
20. run-order randomization/blocking?;
21. QC/reference samples?;
22. signal-drift correction?;
23. feature identification/annotation confidence;
24. number of features tested;
25. hypothesis-driven vs discovery;
26. multiplicity correction;
27. feature selection data-dependent?;
28. independent replication?;
29. analytical validation?;
30. functional validation?;
31. predictive/clinical validation?;
32. pathway enrichment?;
33. pathway database/version;
34. analysis universe/background;
35. network analysis?;
36. network type:
   - association/co-expression;
   - prior-knowledge;
   - causal discovery;
37. causal assumptions stated?;
38. confounding control/DAG?;
39. target engagement/perturbation evidence available elsewhere?;
40. MR/IV evidence?;
41. supervised prediction panel? — route to PASS-06B;
42. unsupervised cluster/phenotype?;
43. mechanism claim level:
   - descriptive;
   - associative;
   - temporally supportive;
   - causal-inference;
   - experimentally validated;
44. triangulation across methods?;
45. final project classification;
46. unresolved measurement/causal/translation issues.

---

# Practical rules produced by PASS-06C4

1. Biomarker is a measurement role, not a causal-mechanism conclusion.
2. Biomarker context of use must be explicit.
3. Pharmacodynamic/response biomarkers can demonstrate biological activity without establishing mechanism or efficacy.
4. Molecular epidemiology is ordinary epidemiologic design plus molecular measurement, not an atomic study design.
5. Cross-sectional biomarker association usually cannot determine causal direction.
6. Longitudinal biomarker measurement improves temporality but does not remove confounding.
7. Pre-outcome/nested biospecimen sampling reduces overt reverse-causation concerns but does not prove biomarker causality.
8. Omics is a measurement/data architecture, not a design family.
9. Experimental omics and observational omics must be separated by whether the exposure/manipulation was assigned.
10. Randomized exposure can support causal exposure→omics response even when downstream omics-network relations remain observational.
11. Hypothesis-driven and discovery omics answer different evidence-stage questions.
12. High-dimensional omics creates major multiplicity and overfitting risk.
13. Nominal significance across thousands of features is not acceptable discovery control.
14. Discovery, statistical replication, analytical validation, functional validation and predictive/clinical validation are different stages.
15. “Validated biomarker” is incomplete wording unless validation type is stated.
16. Pre-analytical variables and batch effects can mimic biological associations.
17. Confounding biological condition with analytical batch can make later computational correction insufficient.
18. Sample processing order, batch balance, QC and technical metadata are design-level considerations.
19. Exercise biomarker sampling must record timing relative to exercise, feeding, hydration, recovery and circadian state.
20. Omics feature identity/annotation uncertainty limits mechanistic claim strength.
21. Pathway enrichment summarizes annotated feature sets; it does not establish causal pathway activation.
22. Enrichment depends on background universe, database/version, mapping, pathway overlap and multiplicity.
23. Pathway databases are incomplete and biased toward well-studied biology.
24. Co-expression/network edges are not automatically direct causal relations.
25. Network hub/centrality does not establish a causal master regulator.
26. Causal discovery is distinct from ordinary network association and causal-effect estimation.
27. Observational causal discovery requires strong assumptions about confounding, measurement and selection.
28. A learned network should not be treated as equivalent to a substantively justified causal DAG.
29. Triangulation is strongest when evidence sources have different bias structures.
30. Replicating the same association is valuable but is not equivalent to causal triangulation.
31. MR is an instrumental-variable causal-inference design, not ordinary biomarker association.
32. MR can reduce some confounding/reverse causation under assumptions but does not automatically prove molecular mechanism.
33. Genetic association/GWAS and MR are different scientific questions.
34. A supervised omics biomarker panel used for individual prediction belongs to the prediction-model lifecycle.
35. Predictive biomarker performance does not establish biological causality.
36. Unsupervised omics clusters are exploratory latent structures unless independently validated and mechanistically supported.
37. Trained-vs-untrained cross-sectional omics cannot isolate training effects from selection/confounding.
38. Pre/post training omics without a credible counterfactual cannot automatically attribute molecular change to training.
39. Acute exercise omics can characterize acute response but cannot automatically identify mediators of chronic adaptation.
40. Athlete-monitoring biomarker readiness requires evidence beyond exercise responsiveness.
41. Mechanistic claims from observational omics should be graded from descriptive → associative → temporally supportive → causal-inference → experimentally validated.
42. Strong mechanism inference usually requires convergence with perturbation/mediation/nonhuman or other causal evidence.

---

# Evidence limitations

1. STROBE-ME and STREGA are reporting extensions, not risk-of-bias tools or causal-design standards.
2. The current STROBE-MetEpi 2026 E&E document is a preprint and has not yet completed peer review.
3. There is no single accepted reporting standard covering all multi-omics observational studies.
4. Omics technologies evolve quickly; platform/software/database versions materially affect reproducibility.
5. Batch correction cannot guarantee recovery from batch–phenotype confounding.
6. Pathway enrichment and network inference can generate biologically coherent stories from noncausal correlations.
7. Causal discovery from observational omics remains methodologically active and assumption-heavy.
8. MR addresses a different causal estimand/design and depends on IV assumptions; detailed appraisal is deferred.
9. Molecular measurements can be both exposure and outcome depending on the scientific question.
10. Cell/tissue composition can drive apparent omics differences without within-cell pathway changes.
11. Acute exercise omics often has strong temporal dynamics, so single sampling times can misrepresent the response.
12. Functional validation in cells/animals/humans is a separate evidence layer, not an automatic property of a replicated association.

---

# Gap status after PASS-06C4

Observational mechanistic / biomarker / omics structures are covered at taxonomy level for:

- biomarker roles/context of use;
- molecular epidemiology;
- cross-sectional vs longitudinal evidence;
- reverse causation;
- prospective/nested biospecimens;
- high-dimensional discovery;
- multiplicity/replication;
- batch/preanalytical structure;
- annotation uncertainty;
- pathway enrichment;
- network inference / causal discovery boundary;
- triangulation;
- MR/IV boundary;
- exercise omics examples.

Mechanistic branch remains **RESEARCHING**.

Still required:

1. PASS-06C5 — nonhuman / translational mechanistic models;
2. integration/gap audit;
3. additional passes if blockers emerge;
4. mechanistic synthesis only after clean audit.

## Next micro-pass

**RES-02 / PASS-06C5 — nonhuman and translational mechanistic models: animal, in vitro, ex vivo, organoid/tissue and computational model systems; genetic/pharmacologic perturbation; model validity; species/tissue/dose/timescale translation; human extrapolation; convergent mechanistic evidence; and boundaries between strong internal mechanistic specificity and external validity to human exercise/training.**

STOP after this saved micro-pass.
