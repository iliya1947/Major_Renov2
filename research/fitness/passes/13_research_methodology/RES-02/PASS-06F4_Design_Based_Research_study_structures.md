# RES-02 / PASS-06F4 — Design-Based Research (DBR) study structures

Статус: **COMPLETE — DBR/EDR TAXONOMY ESTABLISHED FOR RES-02 STRUCTURAL USE**  
Дата: 2026-11-18  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот PASS закрывает taxonomy-level архитектуру **Design-Based Research (DBR)** / **Educational Design Research (EDR)** как отдельной design-research architecture внутри F-ветки.

Главная задача:

> сохранить DBR/EDR как итеративную research-through-design архитектуру, в которой practical intervention и theoretical/design knowledge развиваются совместно в реальном контексте, не сводя её к обычному pilot, action research, HCD/co-design, DSR или generic mixed methods.

---

# 1. Terminology and classification

В литературе есть реальная терминологическая неоднородность.

Классическая DBR-линия:

- Brown / Collins design experiments;
- Design-Based Research Collective;
- Cobb et al.;
- Barab & Squire;

часто описывает DBR как methodology / paradigm / methodological approach.

McKenney & Reeves в линии **Educational Design Research** прямо описывают EDR как:

- genre of research;
- family/approach;
- **not a methodology** in the narrow sense;
- architecture that uses qualitative, quantitative and mixed methods under ordinary methodological standards.

### Final project route

Чтобы не навязывать одной традиции терминологию другой:

**DBR_EDR_PARENT_ARCHITECTURE**

Store separately:

- AUTHOR_LABEL;
- AUTHOR_CLASSIFICATION;
- PROJECT_CLASS.

Project class:

> **PARENT DESIGN-RESEARCH ARCHITECTURE / RESEARCH GENRE**

not:

- one atomic empirical design;
- one fixed data-collection method;
- automatically mixed methods.

### Critical correction to PASS-06F1

F1 temporarily grouped DBR under “parent methodology”.

F4 refines this:

**DBR/EDR has methodology-level organizing force, but project routing should call it a parent design-research architecture/genre because major current EDR sources explicitly reject treating EDR itself as a single methodology.**

No information is lost; the embedded QUAL/QUAN/MMR designs remain separately coded.

---

# 2. Scientific purpose

DBR/EDR has a **dual purpose**:

1. improve/design a practical intervention, environment, process, tool, programme or policy;
2. generate transferable theoretical/design knowledge.

Typical research questions include:

- how can a practical problem be addressed through a designed intervention?;
- how does the intervention function in authentic context?;
- why do specific design features work or fail?;
- under what conditions do they work?;
- what design principles/propositions can guide related future designs?;
- how should theory be refined after observing enactment?

### Critical rule

A project that only creates a useful product but contributes no systematic knowledge beyond the local product is **design/development**, not strong DBR/EDR.

A project that only tests an intervention but does not use iterative design/refinement to generate design/theoretical knowledge is not necessarily DBR.

---

# 3. Historical lineage

Core lineage:

- Ann Brown — design experiments;
- Allan Collins — design science / design experiments;
- Cobb, Confrey, diSessa, Lehrer & Schauble — design experiments in educational research;
- Design-Based Research Collective — DBR as emerging paradigm;
- Barab & Squire — methodological clarification;
- McKenney & Reeves — Educational Design Research generic architecture.

The DBRC formulation emphasizes:

1. intertwined goals of designing learning environments and developing theory/prototheory;
2. continuous cycles of design, enactment, analysis and redesign;
3. sharable theoretical output;
4. research that explains how designs function in authentic settings;
5. systematic methods/documentation linking enactment to claims.

---

# 4. Authentic / naturalistic context

DBR is normally conducted in authentic practice settings.

Examples:

- classroom;
- clinic education;
- rehabilitation education;
- community sport;
- physical-activity programme;
- professional development;
- service delivery;
- health-promotion setting.

### Critical rule

“Naturalistic” does not mean uncontrolled or methodologically vague.

DBR may embed:

- experiments;
- quasi-experiments;
- observations;
- interviews;
- surveys;
- case studies;
- mixed methods.

The distinctive feature is that design and theory are studied **in the setting where the intervention must actually function**.

---

# 5. Problem/practice grounding

A DBR programme should begin with a meaningful practical problem.

Typical analysis/exploration work:

- needs assessment;
- context analysis;
- literature review;
- theory review;
- stakeholder interviews;
- observation;
- document analysis;
- workflow/practice mapping.

### Project fields

1. practical problem;
2. target users/practitioners;
3. context;
4. current practice;
5. unmet need;
6. constraints;
7. theoretical framing;
8. prior evidence;
9. stakeholder input;
10. intended change.

### Critical rule

A product-first project in which the artifact already exists and “research” is added afterward is weak DBR unless the design logic and knowledge-generation loop are genuinely reconstructed and tested.

---

# 6. Theory-informed design

DBR is not simply trial-and-error product refinement.

Design decisions should be connected to:

- substantive theory;
- prior empirical evidence;
- prior design principles;
- local contextual knowledge;
- explicit conjectures.

### Project route

For each major feature:

theory/evidence  
→ design proposition  
→ design feature  
→ expected mediating process  
→ expected outcome  
→ observed evidence  
→ redesign/theory refinement.

---

# 7. Conjecture mapping

Sandoval’s conjecture mapping provides a particularly useful audit structure.

Key distinction:

## Embodiment/design conjecture

How a design feature is expected to create particular forms of participation/activity.

## Theoretical conjecture

How those mediating processes are expected to produce desired outcomes.

Canonical map:

**high-level conjecture**  
→ embodiment/design features  
→ mediating processes  
→ outcomes.

### Project rule

Conjecture mapping is:

- a useful DBR technique;
- not universally mandatory;
- not a separate parent design.

### Critical benefit

It makes theory–design–mechanism–outcome links auditable and reduces post-hoc storytelling.

---

# 8. Iterative cycles

DBR is fundamentally iterative.

A typical loop:

analysis/exploration  
→ design/construction  
→ implementation/enactment  
→ evaluation  
→ reflection  
→ redesign  
→ next cycle.

### Critical rule

Iteration ≠ merely repeating the same intervention.

Meaningful iteration requires evidence-informed change in at least one of:

- design;
- theory;
- implementation;
- measurement;
- contextual assumptions;
- design principles.

---

# 9. Microcycles and macrocycles

A DBR programme can contain:

- multiple small microcycles inside one phase;
- larger cycles spanning several phases;
- multiple studies/publications inside one programme.

### Project fields

- PROGRAM_ID;
- CYCLE_ID;
- PHASE;
- VERSION_ID;
- DESIGN_CHANGE;
- THEORY_CHANGE;
- EVIDENCE_TRIGGER;
- NEXT_CYCLE_RATIONALE.

### Critical rule

Publication count is not cycle count.

Versioning must follow the actual intervention/design evolution.

---

# 10. Generic EDR architecture

McKenney & Reeves’ generic model:

## Phase 1 — Analysis / Exploration

Outputs may include:

- refined problem definition;
- context model;
- needs;
- theory base;
- initial design requirements/propositions.

## Phase 2 — Design / Construction

Outputs may include:

- candidate solutions;
- prototypes;
- design specifications;
- theory of action;
- design conjectures.

## Phase 3 — Evaluation / Reflection

Outputs may include:

- evidence about feasibility/utility/function;
- explanation of why features worked or failed;
- redesigned intervention;
- refined theoretical understanding.

## Cross-cutting — Implementation / Spread

Attention to:

- authentic use;
- feasibility;
- adoption;
- scale;
- sustainability;
- transfer.

### Critical rule

The phases are flexible and recursive, not a rigid linear protocol.

---

# 11. Practical and scientific outputs

DBR/EDR should ideally generate two linked outputs.

## Practical output

Examples:

- intervention;
- curriculum;
- training programme;
- framework;
- tool;
- technology;
- service model;
- educational material.

## Scientific output

Examples:

- design principles;
- design propositions;
- proto-theory;
- refined explanatory theory;
- conjecture map;
- implementation/design knowledge;
- contextual boundary conditions.

### Critical rule

A “successful product” is not by itself the scientific contribution.

---

# 12. Design principles / propositions

DBR frequently produces **design principles**.

Strong design principles should state more than:

> “use feature X.”

They should express:

- intended purpose;
- design feature;
- relevant context;
- mechanism/logic;
- conditions/boundaries.

Project preferred structure:

> In context C, to support goal G, design feature F should be enacted because it is expected to enable process P, subject to boundary B.

### Critical rule

Design principles are not universal laws.

They should remain:

- context-aware;
- theoretically justified;
- empirically grounded;
- revisable.

---

# 13. Proto-theory / theoretical contribution

Some DBR studies produce:

- domain-specific theory;
- local theory;
- proto-theory;
- theoretical model;
- design theory.

Cobb et al. explicitly framed DBR theory as relatively modest/domain-specific rather than grand universal theory.

### Project rule

Store:

- theory level;
- empirical scope;
- contexts tested;
- cycles supporting it;
- transfer claims;
- unresolved boundaries.

---

# 14. Formative vs summative evaluation

DBR strongly emphasizes **formative evaluation** during development.

Formative questions:

- what is failing?;
- what feature should change?;
- what context constraint matters?;
- is the hypothesised process occurring?;
- how should the prototype be revised?

Later stages may include:

- semi-summative evaluation;
- summative evaluation;
- formal effectiveness testing.

### Critical rule

Formative success does not equal intervention effectiveness.

A positive prototype cycle cannot substitute for a definitive RCT where the scientific question is causal effectiveness.

---

# 15. Embedded empirical designs

DBR/EDR may embed:

- qualitative studies;
- surveys;
- observational studies;
- quasi-experiments;
- randomized experiments;
- usability studies;
- mixed methods;
- case studies;
- consensus methods.

### Project representation

**DBR_EDR_PARENT_ARCHITECTURE**  
+ phase/cycle  
+ exact empirical design  
+ exact purpose.

### Critical rule

The embedded design retains its own inferential rules.

DBR does not convert weak evidence into strong causal evidence.

---

# 16. DBR vs mixed methods

DBR commonly uses mixed methods but is not mixed methods by definition.

Possible DBR cycle:

- qualitative context analysis;
- prototype;
- quantitative usability/learning test;
- interview refinement;
- later RCT.

This becomes mixed methods only when the QUAL and QUAN components meet the intentional integration criteria established in the E-branch.

### Critical rule

Multiple methods across cycles ≠ automatically a mixed-method design.

---

# 17. DBR vs Action Research

Overlap:

- real-world problem;
- change orientation;
- iteration;
- practitioner involvement;
- reflective cycles.

Key DBR emphasis:

- designed intervention/artifact;
- explicit theory–design relationship;
- iterative refinement of design;
- production of transferable design/theoretical knowledge.

Action Research may instead prioritize:

- practitioner inquiry;
- reflective improvement of local practice;
- participatory/emancipatory change.

### Critical rule

Neither is simply a subtype of the other across all traditions.

Project classification should use enacted architecture.

If both are genuinely present:

- DBR architecture;
- action-research/participatory governance layer

may coexist.

---

# 18. DBR vs HCD / UCD / co-design

Overlap:

- user/context understanding;
- iteration;
- prototypes;
- stakeholder input;
- real-world testing.

HCD/UCD primary target:

- usable, useful, acceptable, context-fit solution.

DBR primary scientific requirement:

- design activity must also generate/refine theory or transferable design knowledge.

### Critical rule

A highly rigorous HCD project is not automatically DBR.

A DBR project may use HCD/co-design as its development process.

Project representation:

**DBR parent architecture**  
+ **HCD/co-design framework/process**  
+ exact empirical evaluation.

---

# 19. Collaboration and participation

Collaboration with practitioners is strongly characteristic of DBR/EDR.

But collaboration can range from:

- consultation;
- contextual input;
- co-development;
- co-design;
- shared decision-making;
- participatory governance.

### Critical rule

DBR ≠ participatory research by definition.

The 2026 Danish kindergarten PA study illustrates:

- DBR methodology during development;
- co-design as participatory process;
- MRC complex-intervention framework as higher-order programme framework.

These are distinct layers.

---

# 20. DBR vs Design Science Research (DSR)

Overlap:

- design;
- artifacts/interventions;
- iterative development;
- evaluation;
- knowledge contribution.

Typical DBR lineage:

- learning sciences / education;
- authentic learning/practice ecology;
- theory of learning/practice;
- design principles.

Typical DSR lineage:

- information systems / engineering / artifact science;
- artifact classes;
- rigor/relevance cycles;
- demonstration/evaluation;
- design knowledge contribution.

### Project rule

Do not collapse them.

Classification should consider:

- declared lineage;
- scientific product;
- theory role;
- artifact role;
- evaluation architecture.

Detailed DSR taxonomy remains owned by PASS-06F5.

---

# 21. DBR vs ordinary pilot / iterative intervention development

A pilot may:

- test feasibility;
- refine procedures;
- adjust materials;
- prepare a definitive trial.

It becomes strong DBR only if the iterative development is explicitly used for scientific knowledge generation about:

- design;
- theory;
- mechanisms/processes;
- transferable design principles.

### Critical rule

“we changed the intervention after pilot feedback” ≠ sufficient DBR classification.

---

# 22. DBR vs evaluation research

Evaluation research may ask whether a programme is:

- effective;
- feasible;
- acceptable;
- implemented as intended.

DBR additionally uses evaluation evidence to:

- redesign the intervention;
- refine theory/design knowledge;
- conduct repeated design cycles.

### Critical rule

A one-time post-hoc evaluation of a fixed product is not DBR.

---

# 23. Causal-effect claim limits

DBR can generate evidence that:

- a design was usable;
- implementation improved;
- learning/performance changed;
- mechanisms/processes plausibly occurred;
- design principles were refined.

But DBR as a label does not automatically identify:

- treatment effect;
- causal mediation;
- population effect;
- comparative efficacy.

### Project rule

Causal effect strength comes from the embedded design.

Example:

DBR programme  
+ later cluster RCT

→ RCT owns the comparative causal effect.

DBR owns:

- design evolution;
- theory/design knowledge;
- contextual explanation;
- version history.

---

# 24. Version drift and intervention identity

DBR intentionally changes the intervention.

This creates an important evidence problem:

**Version 1 ≠ Version 2 ≠ Version 3.**

### Project fields

- intervention version;
- design changes;
- rationale;
- cycle;
- exposure;
- outcomes measured;
- participants exposed;
- carry-over;
- measurement changes.

### Critical rule

Do not pool outcomes across materially different versions without explicit justification.

---

# 25. Researcher-as-designer role

DBR researchers often:

- design;
- implement;
- observe;
- analyse;
- revise.

This creates risks:

- confirmation bias;
- selective attention;
- undocumented design changes;
- theory-protective interpretation.

### Project safeguards

- prospective conjecture/design documentation;
- decision log;
- version control;
- negative-case analysis;
- independent coding/review where useful;
- transparent criteria for redesign;
- separation of formative notes from outcome analysis where needed.

---

# 26. Conjecture–evidence traceability

Minimum project chain:

1. THEORY_SOURCE;
2. HIGH_LEVEL_CONJECTURE;
3. DESIGN_FEATURE;
4. MEDIATING_PROCESS;
5. EXPECTED_OUTCOME;
6. MEASURE/DATA_SOURCE;
7. OBSERVED_RESULT;
8. SUPPORT/REFUTE/PARTIAL;
9. REDESIGN;
10. THEORY_REVISION.

### Critical rule

Without this or an equivalent chain, claims that a design “validated theory” are weak.

---

# 27. Quality architecture

## Q1 — Problem/context quality

- authentic problem;
- meaningful stakeholder context;
- adequate context analysis;
- relevant constraints captured.

## Q2 — Theory/design coherence

- explicit theory;
- design features traceable to theory/evidence;
- conjectures/design propositions explicit.

## Q3 — Iteration quality

- cycles documented;
- evidence triggered changes;
- version history preserved;
- failed ideas retained.

## Q4 — Embedded-method quality

- QUAL/QUAN/MMR design standards respected;
- measurement adequate;
- analysis appropriate.

## Q5 — Reflection/theory quality

- design principles/theory refined;
- negative evidence considered;
- context boundaries reported;
- theory not protected from failure.

## Q6 — Practical product quality

- feasibility;
- usability;
- acceptability;
- fit;
- implementation;
- sustainability/transfer where relevant.

## Q7 — Claim calibration

- local improvement ≠ universal effectiveness;
- formative outcome ≠ definitive effect;
- design principle ≠ law;
- cross-context transfer requires evidence.

## Q8 — Reporting/provenance

- cycles reconstructable;
- design versions available;
- decision trail;
- stakeholder roles;
- scripts/tools/AI provenance.

---

# 28. Reporting fields

There is no single universally adopted DBR reporting checklist equivalent to CONSORT.

Project minimum:

1. DBR/EDR definition used;
2. author lineage/model;
3. practical problem;
4. theoretical basis;
5. context;
6. stakeholders;
7. intervention/artifact;
8. design cycle map;
9. phase/cycle IDs;
10. version history;
11. design conjectures/propositions;
12. embedded study designs;
13. data sources;
14. formative decisions;
15. redesign rationale;
16. theoretical changes;
17. practical output;
18. scientific/design-knowledge output;
19. negative/failed cycles;
20. transferability limits;
21. causal limits;
22. software/AI/tool provenance.

---

# 29. Sport / exercise / rehabilitation relevance

Direct applications verify that DBR is relevant to the fitness project mainly at the **intervention-development / education / implementation** layer.

## Physical activity intervention — Denmark, 2026

A current PLoS One study co-designed a kindergarten physical-activity intervention using:

- MRC complex-intervention framework;
- DBR during intervention development;
- co-design as participatory process;
- iterative context analysis, laboratory work, design experiments and reflection;
- later feasibility testing;
- planned cluster RCT for effectiveness.

### Project lesson

This is a clean example of layered classification:

**MRC framework**  
+ **DBR development architecture**  
+ **co-design participation process**  
+ **later feasibility/RCT empirical designs**.

## Youth sport — New Zealand

The Good Sports project used a pragmatic mixed-method DBR approach to iteratively co-design and evaluate an educational framework targeting beliefs/behaviours in community sport.

### Project lesson

DBR and mixed methods can coexist, but neither label replaces the other.

## Physiotherapy quality improvement — 2023

Hospital-based physiotherapy quality framework development used DBR principles with multidisciplinary stakeholders.

### Project lesson

DBR can develop service/professional-practice frameworks, not only classroom learning tools.

## Physical therapy education

A DBR study derived design principles and a proto-theory for teaching movement-quality observation skills to physical therapy students.

### Project lesson

This directly demonstrates the dual DBR product:

- practical educational design;
- transferable design principles/proto-theory.

## Rehabilitation education — 2026

A design-based study iteratively transformed written clinical cases into video cases and evaluated feasibility/appropriateness.

### Project caution

Not every paper using the label “design-based” demonstrates the same depth of theoretical contribution; author label and enacted architecture must be coded separately.

---

# 30. Relevance to Ilya’s future training project

Potential future use of DBR/EDR:

- development of ADHD-compatible exercise-delivery system;
- home-training interface;
- coaching/cueing workflow;
- adherence architecture;
- self-monitoring system;
- educational materials;
- decision-support tooling.

But:

DBR would be appropriate only if the project is treated as a systematic research-through-design programme generating reusable design knowledge.

Ordinary personal programme adjustment remains:

- individualized coaching;
- N-of-1/monitoring;
- adaptive programme design;

not automatically DBR.

---

# 31. Canonical extraction schema

## A. Identification

1. author label;
2. DBR/EDR lineage;
3. project route = DBR_EDR_PARENT_ARCHITECTURE;
4. programme ID;
5. cycle ID;
6. phase;
7. intervention/version ID.

## B. Problem/context

8. practical problem;
9. target setting;
10. target users/practitioners;
11. needs analysis;
12. contextual constraints;
13. existing practice;
14. implementation environment.

## C. Theory/design

15. theoretical basis;
16. high-level conjecture;
17. design proposition;
18. design feature;
19. expected mediating process;
20. expected outcome;
21. conjecture map used?;
22. theory of action.

## D. Participation

23. practitioner involvement;
24. participant involvement;
25. stakeholder role;
26. co-design?;
27. decision authority;
28. governance.

## E. Iteration

29. number of cycles;
30. cycle purpose;
31. evidence collected;
32. finding;
33. redesign;
34. version change;
35. theory change;
36. failed/abandoned design retained?

## F. Embedded empirical design

37. qualitative design;
38. quantitative design;
39. mixed-method route;
40. sample;
41. measures;
42. analysis;
43. causal design if any.

## G. Outputs

44. practical intervention/artifact;
45. maturing intervention;
46. design principles;
47. design propositions;
48. proto-theory/theory;
49. implementation/spread knowledge;
50. final product status.

## H. Claims

51. usability/feasibility;
52. local effectiveness;
53. causal effect;
54. parent design supports causal claim?;
55. theoretical contribution;
56. transferability;
57. contexts tested;
58. version-specific claim?;
59. overreach flag.

## I. Quality/provenance

60. cycle traceability;
61. design-decision log;
62. version control;
63. negative evidence;
64. independent review;
65. stakeholder provenance;
66. software;
67. AI/tool use;
68. human verification;
69. unresolved methodological issue.

---

# 32. Do-not-confuse matrix

| Do not confuse | Correct separation |
|---|---|
| DBR vs product development | research-through-design + scientific knowledge vs product only |
| DBR vs pilot | theory/design knowledge + iterative cycles vs feasibility refinement only |
| DBR vs mixed methods | parent design-research architecture vs QUAL–QUAN integration |
| DBR vs HCD | theory/design knowledge generation vs user-centred development framework |
| DBR vs co-design | research architecture vs participation process |
| DBR vs Action Research | design/theory orientation vs practitioner/reflection/action orientation |
| DBR vs DSR | learning/practice design lineage vs artifact/design-science lineage |
| DBR vs evaluation research | iterative redesign/theory refinement vs evaluation of fixed intervention |
| DBR vs RCT | development/theory architecture vs causal effect design |
| design principle vs law | transferable heuristic/theoretical proposition vs universal rule |
| iteration vs repetition | evidence-triggered redesign vs repeating same procedure |
| formative success vs effectiveness | local prototype improvement vs causal comparative effect |
| EDR “methodology” vs “genre” | preserve author terminology; project route = parent architecture/genre |

---

# 33. Known methodological uncertainties

No universal hard standard exists for:

1. exact number of cycles;
2. minimum study duration;
3. mandatory stakeholder participation depth;
4. one required conjecture-mapping technique;
5. one universal DBR phase model;
6. one fixed definition of “design principle”;
7. one universal threshold for transferability;
8. one mandatory reporting checklist;
9. one agreed label: methodology / paradigm / genre / approach.

### Project response

Do not create pseudo-standards.

Require:

- theory–design traceability;
- authentic empirical testing;
- evidence-driven iteration;
- dual practical/scientific output;
- transparent versioning;
- calibrated claims.

---

# 34. Sources checked

1. The Design-Based Research Collective. Design-Based Research: An Emerging Paradigm for Educational Inquiry. Educational Researcher. 2003;32(1):5–8.  
   https://doi.org/10.3102/0013189X032001005

2. Cobb P, Confrey J, diSessa A, Lehrer R, Schauble L. Design Experiments in Educational Research. Educational Researcher. 2003;32(1):9–13.  
   https://doi.org/10.3102/0013189X032001009

3. Barab S, Squire K. Design-Based Research: Putting a Stake in the Ground. J Learn Sci. 2004;13(1):1–14.  
   https://doi.org/10.1207/s15327809jls1301_1

4. Anderson T, Shattuck J. Design-Based Research: A Decade of Progress in Education Research? Educational Researcher. 2012;41(1):16–25.  
   https://doi.org/10.3102/0013189X11428813

5. Sandoval WA. Conjecture Mapping: An Approach to Systematic Educational Design Research. J Learn Sci. 2014;23(1):18–36.  
   https://doi.org/10.1080/10508406.2013.778204

6. McKenney S, Reeves TC. Educational design research: Portraying, conducting, and enhancing productive scholarship. Med Educ. 2021;55:82–92.  
   https://doi.org/10.1111/medu.14280

7. McKenney S, Reeves TC. Conducting Educational Design Research. Routledge. Generic EDR model: analysis/exploration → design/construction → evaluation/reflection + implementation/spread.

8. Hoadley CM, Campos FC. Design-based research: What it is and why it matters to studying online learning. Educational Psychologist. 2022.  
   https://doi.org/10.1080/00461520.2022.2079128

9. Design-Based Research: A Methodology to Extend and Enrich Biology Education Research. CBE Life Sci Educ. 2020;19(3):es11. PMID 32870086.  
   https://pubmed.ncbi.nlm.nih.gov/32870086/

10. Sederberg M et al. Co-designing physical activity intervention in Danish kindergartens: A design-based research approach. PLoS One. 2026;21(11):e0361522. PMID 42986877.  
    https://pubmed.ncbi.nlm.nih.gov/42986877/

11. Walters SR et al. Promoting a culture change in junior and youth sport in New Zealand. Front Sports Act Living. 2022. PMID 36172341.  
    https://pubmed.ncbi.nlm.nih.gov/36172341/

12. Steenbruggen RA et al. A framework to improve quality of hospital-based physiotherapy: a design-based research study. BMC Health Serv Res. 2023;23:34. PMID 36641465.  
    https://pubmed.ncbi.nlm.nih.gov/36641465/

13. Dekkers LM et al. Educational programs for learning to observe movement quality in physical therapy: a design-based research approach. Physiother Theory Pract. 2022;38(1):76–89. PMID 31942826.  
    https://pubmed.ncbi.nlm.nih.gov/31942826/

14. Adams SN et al. A Multiliteracies Approach to Transforming Written Cases Into Video Case Studies in Rehabilitation Education: A Design-Based Study. J Med Educ Curric Dev. 2026. PMID 42558789.  
    https://pubmed.ncbi.nlm.nih.gov/42558789/

---

# 35. Branch decision

DBR/EDR status:

**TAXONOMY ESTABLISHED FOR RES-02 STRUCTURAL USE.**

Known DBR/EDR taxonomy-level blockers:

**NONE.**

Important resolution:

> DBR/EDR should be stored as a parent design-research architecture/genre, with author terminology preserved, rather than forced into one universal “methodology” label.

It remains distinct from:

- DSR;
- HCD/UCD;
- co-design;
- Action Research;
- ordinary pilot development;
- mixed methods;
- evaluation research;
- RCT/effectiveness design.

F-branch overall remains:

**RESEARCHING.**

---

# 36. Next micro-pass

**RES-02 / PASS-06F5 — Design Science Research (DSR) study structures**

Initial scope:

1. DSR lineage;
2. artifact ontology;
3. constructs/models/methods/instantiations;
4. problem relevance;
5. design-science knowledge contribution;
6. Hevner rigor/relevance/design cycles;
7. Peffers DSRM;
8. problem identification;
9. objectives;
10. design/development;
11. demonstration;
12. evaluation;
13. communication;
14. artifact evaluation strategies;
15. ex ante vs ex post evaluation;
16. utility/quality/efficacy boundaries;
17. DSR vs ordinary engineering/software development;
18. DSR vs DBR;
19. DSR vs HCD;
20. embedded empirical designs;
21. health/exercise/digital rehabilitation relevance;
22. quality/reporting/provenance;
23. STOP after saved PASS.

STOP after this saved DBR/EDR pass.
