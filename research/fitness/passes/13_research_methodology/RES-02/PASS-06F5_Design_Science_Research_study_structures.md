# RES-02 / PASS-06F5 — Design Science Research (DSR) study structures

Статус: **COMPLETE — DSR TAXONOMY ESTABLISHED FOR RES-02 STRUCTURAL USE**  
Дата: 2026-11-18  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот PASS закрывает taxonomy-level архитектуру **Design Science Research (DSR)** как отдельной design-science research paradigm/methodological architecture внутри F-ветки.

Главная задача:

> сохранить DSR как research-through-artifact architecture, в которой научный вклад строится не просто вокруг создания полезного продукта, а вокруг систематического создания, демонстрации, оценки и абстрагирования знания об artefact/design, при этом embedded empirical methods и их inferential rules остаются отдельными.

---

# 1. Final project classification

Project route:

**DESIGN_SCIENCE_RESEARCH**

Project class:

> **PARENT DESIGN-SCIENCE RESEARCH PARADIGM / METHODOLOGICAL ARCHITECTURE**

DSR не является:

- одним data-collection method;
- одним экспериментальным design;
- generic software/product development;
- автоматически HCD;
- автоматически mixed methods;
- автоматически effectiveness study.

Hevner et al. (2004) формулируют design-science paradigm как расширение человеческих и организационных возможностей через создание и применение новых artifacts; знание о problem domain и solution достигается через building и application/evaluation artifact.

---

# 2. Scientific purpose

DSR отвечает на вопросы класса:

- какой artifact может решить значимую проблему?;
- как он должен быть спроектирован?;
- какие design properties/features необходимы?;
- работает ли artifact как задумано?;
- при каких условиях?;
- насколько он лучше/иначе существующих решений?;
- какое reusable design knowledge можно извлечь из его создания и оценки?

### Critical rule

Полезный artifact сам по себе ещё не научный вклад.

Сильный DSR должен производить:

1. artifact/design contribution;
2. evidence about artifact;
3. reusable design knowledge / abstraction / theory where warranted.

---

# 3. Artifact ontology

Классическая типология March & Smith:

1. **constructs**;
2. **models**;
3. **methods**;
4. **instantiations**.

Современная DSR-литература допускает более широкую artifact ontology, включая:

- algorithms;
- design principles;
- frameworks;
- architectures;
- systems;
- guidelines;
- patterns;
- metrics;
- design theories.

### Project rule

Не ограничивать artifact только software/prototype.

Store:

- AUTHOR_ARTIFACT_LABEL;
- PROJECT_ARTIFACT_CLASS;
- level of abstraction;
- instantiated vs abstract;
- focal artifact;
- surrounding sociotechnical system.

### Critical uncertainty

March–Smith classification является исторически центральной, но не исчерпывающей ontology для всех современных DSR artifacts.

---

# 4. Hevner seven-guideline architecture

Классическая DSR architecture включает семь направляющих принципов:

1. **Design as an Artifact**;
2. **Problem Relevance**;
3. **Design Evaluation**;
4. **Research Contributions**;
5. **Research Rigor**;
6. **Design as a Search Process**;
7. **Communication of Research**.

### Project use

Это не rigid checklist с автоматическим pass/fail.

Использовать как high-level audit:

- artifact explicit?;
- problem relevant?;
- evaluation credible?;
- contribution explicit?;
- rigor grounded?;
- search/iteration documented?;
- results communicated/reproducible?

---

# 5. Problem relevance

DSR начинается с relevant problem/opportunity.

Project fields:

1. target problem;
2. affected users/stakeholders;
3. current solution;
4. unmet need;
5. why existing artifacts insufficient;
6. target context;
7. desired utility;
8. constraints;
9. competing solutions;
10. success criteria.

### Critical rule

Routine implementation of a known solution to a local problem is not automatically a DSR contribution.

There must be either:

- novel artifact/design;
- meaningful novel adaptation;
- new design knowledge;
- new explanatory/prescriptive knowledge.

---

# 6. Knowledge contribution

Gregor & Hevner (2013) distinguish contribution types based on novelty in problem and solution domains.

Canonical project routes:

## IMPROVEMENT

New solution for a known problem.

## EXAPTATION

Known solution/artifact applied or adapted to a new problem/domain in a way that generates new design knowledge.

## INVENTION

New solution for a new/problem-space opportunity.

## ROUTINE_DESIGN

Known solution + known problem with little knowledge contribution.

### Critical rule

Routine design may be useful engineering, but should not be promoted to strong DSR solely because it produces software.

---

# 7. Three-cycle view

Hevner (2007) distinguishes three interacting cycles.

## Relevance Cycle

Environment  
→ requirements/problems  
→ DSR  
→ field testing/application back in environment.

## Rigor Cycle

Knowledge base  
→ theories/methods/domain expertise  
→ DSR  
→ new knowledge added back to knowledge base.

## Design Cycle

Build/design  
↔ evaluate  
↔ redesign.

### Project rule

A mature DSR record should retain all three:

- environment relevance;
- knowledge grounding;
- build–evaluate iteration.

---

# 8. Peffers DSRM

Peffers et al. provide a nominal six-activity DSR methodology:

1. **Problem Identification and Motivation**
2. **Define Objectives of a Solution**
3. **Design and Development**
4. **Demonstration**
5. **Evaluation**
6. **Communication**

The sequence is nominal, not strictly mandatory.

Possible entry points may be:

- problem-centered;
- objective-centered;
- design/development-centered;
- client/context-initiated.

### Critical rule

The six steps organize DSR.

They do not replace detailed methodology for:

- experiments;
- interviews;
- surveys;
- usability studies;
- causal evaluation;
- statistical analysis.

---

# 9. Problem identification and motivation

Minimum requirements:

- define problem;
- show importance;
- identify stakeholders;
- characterize limitations of existing solutions;
- justify why artifact-based solution is appropriate.

### Weak practice

“An app does not yet exist, therefore we build one.”

### Stronger practice

Show:

- unmet decision/task need;
- failure mode;
- user/system constraints;
- design gap;
- scientific/design gap.

---

# 10. Objectives of a solution

Objectives should be derivable from:

- problem analysis;
- requirements;
- prior evidence;
- theory;
- benchmark solutions;
- stakeholder needs.

Objectives can include:

- functionality;
- usability;
- accuracy;
- performance;
- safety;
- interoperability;
- workflow fit;
- adherence support;
- accessibility;
- scalability.

### Project rule

Separate:

- requirement;
- objective;
- evaluation criterion;
- measured outcome.

Do not treat them as synonyms.

---

# 11. Design and development

Artifact design may involve:

- architecture;
- algorithms;
- data structures;
- interfaces;
- workflow;
- rules;
- decision logic;
- prototypes;
- implementation.

### Required provenance

design requirement  
→ design decision  
→ implemented feature  
→ expected property/benefit  
→ evaluation evidence.

### Critical rule

Black-box product construction with no design rationale weakens DSR knowledge contribution.

---

# 12. Demonstration

Demonstration answers:

> can the artifact be used to address instances of the target problem?

Possible demonstrations:

- worked example;
- case application;
- simulation;
- prototype use;
- laboratory task;
- field use;
- proof-of-concept.

### Critical rule

Demonstration ≠ sufficient evaluation.

A successful demo can show feasibility but not necessarily:

- effectiveness;
- generalizability;
- causal benefit;
- user value;
- safety.

---

# 13. Evaluation is constitutive, not optional decoration

Evaluation is a core DSR activity.

It asks whether the artifact:

- satisfies goals;
- has utility;
- performs adequately;
- behaves as predicted;
- works in target context;
- supports the claimed design knowledge.

### Critical rule

Evaluation must be linked to the **claim being made**.

A usability test cannot validate:

- clinical efficacy;
- algorithmic accuracy;
- causal mechanism;
- external validity.

---

# 14. FEDS evaluation framework

Venable, Pries-Heje & Baskerville distinguish evaluation episodes by two axes.

## Functional purpose

- **FORMATIVE**
- **SUMMATIVE**

## Evaluation paradigm/context

- **ARTIFICIAL**
- **NATURALISTIC**

### Artificial evaluation

May include:

- laboratory experiment;
- simulation;
- mathematical proof;
- analytical evaluation;
- criteria-based analysis.

### Naturalistic evaluation

Tests artifact in realistic users/settings/tasks.

### Project rule

Store each evaluation episode separately.

One DSR project may require multiple episodes over time.

---

# 15. Evaluation trajectory

A DSR project may move:

artificial/formative  
→ artificial/summative  
→ naturalistic/formative  
→ naturalistic/summative

or use another trajectory based on risk and resources.

FEDS emphasizes that evaluation strategy should consider:

- technical risk;
- human/social risk;
- cost;
- access to real users/context;
- stage of artifact maturity.

### Critical rule

There is no universal rule that every artifact must first undergo exactly one lab test and then one field test.

---

# 16. MEDS 2026 update

A current 2026 methodological development is **MEDS — Methodology for Evaluation in Design Science**.

MEDS extends FEDS by explicitly planning an evaluation programme through four steps:

1. set evaluation goal(s);
2. choose evaluation strategy;
3. choose properties/criteria to evaluate;
4. plan individual evaluation episodes and methods.

It adds:

- MuSCoW prioritization;
- DSR Evaluation Method Selection Framework;
- short-scoping;
- explicit efficiency/resource logic.

### Project classification

MEDS = **DSR evaluation-methodology layer**

not:

- new DSR parent paradigm;
- empirical study design by itself.

### Critical caution

MEDS permits efficient/short-scoped formative evaluation, but final claims still require evidence sufficiently rigorous for the claimed contribution.

---

# 17. Formative vs summative evaluation

## FORMATIVE

Purpose:

- discover design flaws;
- assess feasibility;
- reduce risk;
- refine requirements;
- choose among design alternatives;
- decide whether to continue.

## SUMMATIVE

Purpose:

- establish final/public artifact claims;
- demonstrate utility/performance;
- support scientific contribution.

### Critical rule

Formative evidence may be intentionally lighter.

It must not be silently upgraded into strong summative claims.

---

# 18. Ex ante vs ex post evaluation

Useful project distinction:

## EX_ANTE

Before full implementation/deployment:

- expert review;
- simulation;
- prototype walkthrough;
- analytical proof;
- design argument;
- model testing.

## EX_POST

After artifact instantiation/use:

- user study;
- field deployment;
- experiment;
- observational evaluation;
- comparative performance;
- implementation outcomes.

### Critical rule

Ex ante plausibility ≠ ex post effectiveness.

---

# 19. Design Science Validity Framework — current 2025 layer

Larsen et al. (2025) define design-science validity as the extent to which knowledge claims about a focal artifact are supported by evidence.

Three high-level claim/validity families:

1. **CRITERION**
2. **CAUSAL**
3. **CONTEXT**

## Criterion validity

Does artifact meet/beat a relevant reference criterion/entity?

Includes efficacy and characteristic comparisons.

## Causal validity

Does a particular artifact feature/component cause claimed improvement?

May require:

- controlled comparison;
- manipulated artifact;
- ablation;
- other causal design.

## Context validity

Do claims hold in intended/additional sociotechnical settings?

Includes:

- ecological validity;
- external validity.

### Project rule

Every major DSR claim should declare:

- claim type;
- comparison/reference entity;
- evidence;
- validity target;
- unresolved uncertainty.

---

# 20. Utility / quality / efficacy / effectiveness

These must not be flattened.

## Utility

Does artifact help accomplish intended purpose?

## Quality

Does it have required technical/design properties?

## Efficacy

Can it produce intended effect under controlled/artificial conditions?

## Effectiveness

Does it work in realistic target use?

## Usability

Can intended users operate it effectively/efficiently/satisfactorily?

### Critical rule

High usability does not prove:

- clinical effectiveness;
- behavioral effectiveness;
- diagnostic accuracy.

---

# 21. Artifact evaluation property matrix

Project properties may include:

1. functionality;
2. correctness;
3. accuracy;
4. performance;
5. robustness;
6. usability;
7. usefulness;
8. safety;
9. privacy;
10. interoperability;
11. maintainability;
12. accessibility;
13. workflow fit;
14. acceptability;
15. adoption;
16. clinical outcome;
17. behavioral outcome;
18. cost;
19. scalability;
20. sustainability.

### Project rule

Evaluate only properties relevant to claims, but do not omit critical safety/validity properties merely to reduce workload.

---

# 22. DSR vs ordinary engineering / software development

## Engineering / product development

Can validly aim to:

- meet requirements;
- build working system;
- ship product;
- satisfy client.

## DSR

Additionally requires scientific contribution:

- knowledge about design;
- evaluated artifact;
- abstraction/generalizable insight;
- explicit contribution to knowledge base.

### Critical rule

“we built an app and users liked it” is not sufficient evidence of strong DSR.

---

# 23. DSR vs DBR/EDR

Overlap:

- research-through-design;
- iteration;
- practical problem;
- evaluation;
- knowledge contribution.

Typical DBR/EDR emphasis:

- learning/practice environments;
- authentic enactment;
- theory/design principles;
- iterative intervention refinement.

Typical DSR emphasis:

- purposeful artifact;
- artifact ontology;
- build/evaluate;
- relevance–rigor–design cycles;
- artifact/design knowledge;
- demonstration/evaluation.

### Project rule

Do not collapse them.

If a study explicitly combines both lineages, preserve both labels and classify enacted architecture.

---

# 24. DSR vs HCD/UCD

HCD/UCD emphasizes:

- users;
- context of use;
- usability;
- iterative design;
- human needs.

DSR emphasizes:

- scientific design contribution;
- artifact;
- evaluation;
- knowledge contribution.

### Project rule

HCD may be used **inside DSR** for:

- requirements;
- co-design;
- prototyping;
- usability.

But HCD alone does not create DSR, and DSR does not guarantee human-centered design.

---

# 25. DSR vs mixed methods

DSR may combine:

- interviews;
- surveys;
- experiments;
- log data;
- usability tests;
- quantitative performance measures.

It is mixed methods only when the QUAL and QUAN strands meet the integration criteria from PASS-06E9.

### Critical rule

Multiple evaluation methods ≠ automatically mixed methods.

---

# 26. DSR vs causal-effect design

DSR can contain:

- RCT;
- field experiment;
- A/B test;
- quasi-experiment;
- observational evaluation.

But DSR label itself does not create causal identification.

### Project representation

DSR parent architecture  
+ artifact/version  
+ embedded causal design  
+ estimand  
+ evaluation episode.

---

# 27. Artifact versioning

DSR is iterative.

Therefore:

**Artifact v1 ≠ v2 ≠ v3.**

Required fields:

- ARTIFACT_VERSION;
- design changes;
- reason for change;
- evidence trigger;
- evaluation data used;
- users exposed;
- outcome tied to version;
- release/deployment context.

### Critical rule

Do not combine evaluation outcomes across materially different artifact versions without explicit rationale.

---

# 28. Design search and stopping

Hevner frames design as a search process.

Possible search activities:

- alternative architectures;
- alternative algorithms;
- prototypes;
- heuristics;
- optimization;
- iterative design variants.

### Critical issue

DSR literature does not provide one universal optimal stopping rule.

Project requires explicit stopping rationale:

- requirements met;
- key risks reduced;
- marginal improvement small;
- resources exhausted;
- summative validation adequate;
- deployment threshold achieved.

### Critical rule

“we stopped after three iterations” is not itself scientific justification.

---

# 29. Health / rehabilitation relevance

Direct and current applicability is verified.

## Stroke rehabilitation mHealth — 2026

A current JMIR Rehabilitation and Assistive Technologies study used:

- mixed methods;
- DSR;
- three iterative design/development/evaluation cycles;
- low- and high-fidelity prototypes;
- expert/patient input;
- SUS/PSSUQ evaluation;
- final design principles.

### Project lesson

This is a clean layered example:

**DSR parent architecture**  
+ **mixed-method component**  
+ **rehabilitation application**  
+ **usability/quality evaluation**

but usability scores alone do not establish clinical rehabilitation effectiveness.

## Digital health quality improvement — 2025

Current health-services literature explicitly argues for DSR as a way to add methodological rigor to digital-health innovation.

### Project lesson

DSR is directly relevant where the fitness project eventually designs:

- digital monitoring tools;
- adherence interfaces;
- decision support;
- coaching systems;
- home-training technologies.

---

# 30. Direct relevance to future fitness work

Possible future DSR applications:

- exercise-program decision-support tool;
- autoregulation interface;
- adherence/reminder system;
- home-training tracking application;
- exercise technique feedback artifact;
- progression algorithm;
- coach–trainee workflow;
- ADHD-adapted training interface.

### Critical boundary

Building such a tool for Ilya alone is not automatically DSR.

To count as DSR, the work would need:

- explicit research problem;
- artifact contribution;
- rigorous evaluation;
- reusable design knowledge.

---

# 31. Common failure modes

1. **Artifact-only**
   - system built, no scientific knowledge.

2. **Usability-only overreach**
   - usability treated as effectiveness.

3. **No comparator/reference**
   - “works” without criterion.

4. **Routine design relabeled DSR**
   - known solution, known problem, no contribution.

5. **Demo = evaluation**
   - proof-of-concept treated as validation.

6. **Single weak evaluation**
   - all claims depend on one convenience user test.

7. **Version drift**
   - outcomes pooled across artifact versions.

8. **No design rationale**
   - artifact features not linked to evidence/theory.

9. **No contribution abstraction**
   - local prototype only.

10. **Hidden search**
   - failed alternatives/design decisions omitted.

11. **Causal overclaim**
   - feature usefulness inferred without causal comparison.

12. **Context overclaim**
   - lab result generalized to field.

13. **HCD conflation**
   - user-centered process treated as full DSR.

14. **MMR conflation**
   - multiple methods treated as mixed methods automatically.

---

# 32. Quality architecture

## Q1 — Problem relevance

- important problem;
- stakeholders defined;
- existing solutions assessed;
- design gap explicit.

## Q2 — Rigor grounding

- theory/evidence used;
- prior artifacts compared;
- methods appropriate.

## Q3 — Artifact transparency

- artifact class;
- architecture;
- version;
- design rationale;
- requirements.

## Q4 — Build/search transparency

- alternatives;
- iterations;
- rejected options;
- stopping rule.

## Q5 — Evaluation strategy

- claims mapped to evaluation;
- formative/summative distinction;
- artificial/naturalistic distinction;
- appropriate methods;
- adequate final validation.

## Q6 — Validity

- criterion claim supported?;
- causal claim supported?;
- context claim supported?;
- reference entities explicit?;
- uncertainty reported?

## Q7 — Knowledge contribution

- improvement/exaptation/invention/routine?;
- reusable knowledge?;
- design principles/theory?;
- abstraction calibrated?

## Q8 — Claim calibration

- usability ≠ effectiveness;
- prototype ≠ final intervention;
- demonstration ≠ validation;
- lab ≠ field;
- local ≠ general.

## Q9 — Reporting/provenance

- reproducible artifact description;
- code/model/version where possible;
- evaluation materials;
- data lineage;
- software/AI provenance.

---

# 33. Canonical DSR extraction schema

## A. Identification

1. author DSR label;
2. project classification;
3. DSR lineage/framework;
4. programme/study ID;
5. artifact ID;
6. artifact version;
7. artifact class;
8. abstraction level.

## B. Problem/relevance

9. problem;
10. stakeholders;
11. context;
12. existing solution;
13. design gap;
14. scientific gap;
15. target utility;
16. constraints.

## C. Knowledge grounding

17. theory;
18. empirical evidence;
19. prior artifacts;
20. methods;
21. domain knowledge;
22. requirements source.

## D. DSRM process

23. problem identification;
24. objectives;
25. design/development;
26. demonstration;
27. evaluation;
28. communication;
29. entry point;
30. iterations.

## E. Three cycles

31. relevance-cycle evidence;
32. rigor-cycle evidence;
33. design-cycle evidence.

## F. Artifact design

34. architecture;
35. constructs;
36. models;
37. methods/algorithms;
38. instantiation;
39. design principles;
40. feature rationale;
41. alternatives;
42. rejected designs.

## G. Evaluation episodes

43. episode ID;
44. artifact version;
45. formative/summative;
46. artificial/naturalistic;
47. ex ante/ex post;
48. goal;
49. property;
50. method;
51. population/context;
52. comparator/reference;
53. outcome;
54. result;
55. redesign triggered?

## H. Validity

56. criterion claim;
57. criterion reference;
58. causal claim;
59. manipulated/comparison artifact;
60. context claim;
61. ecological validity;
62. external validity;
63. unresolved validity threat.

## I. Contribution

64. improvement;
65. exaptation;
66. invention;
67. routine design?;
68. practical contribution;
69. knowledge contribution;
70. design principle/theory;
71. transfer boundary.

## J. Embedded methods

72. qualitative design;
73. quantitative design;
74. mixed-method route;
75. causal design;
76. statistical model;
77. integration.

## K. Provenance

78. artifact repository;
79. code/version;
80. requirements;
81. design-decision log;
82. test/evaluation materials;
83. software;
84. AI/tool use;
85. human verification;
86. unresolved methodological issue.

---

# 34. Do-not-confuse matrix

| Do not confuse | Correct separation |
|---|---|
| DSR vs software engineering | scientific design knowledge vs product construction |
| artifact vs instantiation only | artifact can be abstract or instantiated |
| demonstration vs evaluation | showing use vs validating claims |
| usability vs effectiveness | interaction quality vs real-world outcome |
| efficacy vs effectiveness | controlled capability vs real-world performance |
| DSR vs HCD | research paradigm/architecture vs user-centered design framework |
| DSR vs DBR | artifact/design-science lineage vs learning/practice design-research lineage |
| DSR vs MMR | design-science architecture vs QUAL–QUAN integration |
| DSR vs RCT | research-through-artifact vs causal effect design |
| formative vs summative | design improvement vs final claim support |
| artificial vs naturalistic | controlled/simulated vs realistic setting |
| ex ante vs ex post | pre-deployment/prototype vs instantiated-use evaluation |
| utility vs validity | practical usefulness vs evidence supporting a knowledge claim |
| routine design vs contribution | implementation of known solution vs novel reusable knowledge |
| prototype version vs final artifact | intermediate design vs public/final version |

---

# 35. Current methodological updates relevant to project

Two developments materially update older DSR summaries.

## MEDS — 2026

FEDS remains useful, but current MEDS adds:

- evaluation-goal planning;
- strategy choice;
- property prioritization;
- method selection;
- efficient evaluation episode design.

## Design Science Validity Framework — 2025

Adds explicit claim-validation routing:

- criterion;
- causal;
- context.

### Project decision

Future DSR appraisals should use:

Hevner/Peffers architecture  
+ FEDS/MEDS evaluation planning  
+ current validity-framework claim mapping.

---

# 36. Known methodological uncertainties

No universal standard exists for:

1. exact number of build–evaluate iterations;
2. one mandatory artifact ontology;
3. one universal evaluation trajectory;
4. one universal stopping rule;
5. exact level of abstraction required for contribution;
6. one mandatory DSR reporting checklist;
7. one universally sufficient field-validation threshold.

### Project response

Do not invent hard rules.

Require:

- explicit artifact;
- relevant problem;
- rigorous grounding;
- transparent design search;
- claim-matched evaluation;
- reusable contribution;
- calibrated validity.

---

# 37. Sources checked

1. Hevner AR, March ST, Park J, Ram S. Design Science in Information Systems Research. MIS Quarterly. 2004;28(1).  
   https://aisel.aisnet.org/misq/vol28/iss1/6/

2. Hevner AR. A Three Cycle View of Design Science Research. Scandinavian Journal of Information Systems. 2007;19(2).  
   https://aisel.aisnet.org/sjis/vol19/iss2/4/

3. March ST, Smith GF. Design and Natural Science Research on Information Technology. Decision Support Systems. 1995;15(4):251–266.  
   https://doi.org/10.1016/0167-9236(94)00041-2

4. Peffers K, Tuunanen T, Rothenberger MA, Chatterjee S. A Design Science Research Methodology for Information Systems Research. JMIS. 2007/2008;24(3):45–77.  
   https://doi.org/10.2753/MIS0742-1222240302

5. Gregor S, Hevner AR. Positioning and Presenting Design Science Research for Maximum Impact. MIS Quarterly. 2013;37(2):337–355.  
   https://aisel.aisnet.org/misq/vol37/iss2/3/

6. Venable J, Pries-Heje J, Baskerville R. FEDS: a Framework for Evaluation in Design Science Research. European Journal of Information Systems. 2016;25:77–89.  
   https://doi.org/10.1057/ejis.2014.36

7. Baskerville R, Pries-Heje J, Venable JR. MEDS: Methodology for Evaluation in Design Science. European Journal of Information Systems. 2026;35(5):830–847.  
   https://doi.org/10.1080/0960085X.2026.2627280

8. Larsen KR, Lukyanenko R, Mueller RM, Storey VC, Parsons J, VanderMeer D, Hovorka DS. Validity in Design Science. MIS Quarterly. 2025;49(4):1267–1294. PMID 41868972.  
   https://pubmed.ncbi.nlm.nih.gov/41868972/

9. Weigand H, Johannesson P, Andersson B. An artifact ontology for design science research. Data & Knowledge Engineering. 2021;133:101878.  
   https://doi.org/10.1016/j.datak.2021.101878

10. Shania SA, Handayani PW, Imanuddin KA. Designing an mHealth App for Stroke Rehabilitation in Indonesia: Mixed Methods Design Science Research Study. JMIR Rehabil Assist Technol. 2026;13:e91464. PMID 42490533.  
    https://rehab.jmir.org/2026/1/e91464

11. Dyers RE, Mahomed H, Van Greunen D. Design science research in quality improvement: Embedding rigour in digital health innovation. Afr J Prim Health Care Fam Med. 2025;17(2):e1–e7. PMID 41405104.  
    https://pubmed.ncbi.nlm.nih.gov/41405104/

12. Mobile app implementing the ICF rehabilitation set using DSR methodology. 2020.  
    https://pmc.ncbi.nlm.nih.gov/articles/PMC6988202/

13. Current IS design-research guidance on artifact novelty/adaptation: Pathways for Design Research on Artificial Intelligence. Information Systems Research. 2024.  
    https://pubsonline.informs.org/doi/10.1287/isre.2024.editorial.v35.n2

---

# 38. Branch decision

Design Science Research status:

**TAXONOMY ESTABLISHED FOR RES-02 STRUCTURAL USE.**

Known DSR taxonomy-level blockers:

**NONE.**

Important resolution:

> DSR must be represented as a parent design-science architecture with explicit artifact, knowledge contribution, build–evaluate search, evaluation strategy and validity claims. Embedded qualitative/quantitative/mixed/causal designs retain their own identities.

Important current update:

> FEDS remains part of the evaluation layer, but current appraisal should also recognize MEDS 2026 and the Design Science Validity Framework 2025.

DSR remains distinct from:

- ordinary engineering/software development;
- DBR/EDR;
- HCD/UCD;
- generic mixed methods;
- RCT/effectiveness designs.

F-branch overall remains:

**RESEARCHING.**

---

# 39. Next micro-pass

**RES-02 / PASS-06F6 — HCD/UCD/co-design/Person-Based Approach boundary and study structures**

Initial scope:

1. ISO HCD/UCD lineage;
2. human-centred design principles/activities;
3. context-of-use specification;
4. user requirements;
5. iterative design;
6. prototyping;
7. usability evaluation;
8. participatory design;
9. co-design;
10. co-production boundary;
11. design thinking boundary;
12. Person-Based Approach;
13. guiding principles;
14. intervention-development role;
15. HCD vs DSR;
16. HCD vs DBR;
17. HCD vs mixed methods;
18. usability vs acceptability vs clinical/behavioral effectiveness;
19. sport/exercise/rehabilitation applications;
20. quality/reporting/provenance;
21. identify whether co-design/PBA require separate deep follow-up;
22. STOP after saved PASS.

STOP after this saved DSR pass.
