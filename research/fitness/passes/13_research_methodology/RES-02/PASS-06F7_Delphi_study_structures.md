# RES-02 / PASS-06F7 — Delphi study structures

Статус: **COMPLETE — DELPHI TAXONOMY ESTABLISHED FOR RES-02 STRUCTURAL USE**  
Дата: 2026-11-18  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот PASS закрывает taxonomy-level архитектуру **Delphi** как отдельного structured expert/stakeholder judgement family внутри F-ветки.

Главная задача:

> определить, какие признаки делают процедуру Delphi, как различать classical/modified/e-Delphi/policy variants, как оценивать panel composition, anonymity, rounds, feedback, consensus/stability/attrition/stopping rules, и как отделять Delphi от survey, NGT и RAND/UCLA.

---

# 1. Final project classification

Project route:

**DELPHI_METHOD**

Project class:

> **STRUCTURED ITERATIVE EXPERT/STAKEHOLDER JUDGEMENT / CONSENSUS METHOD FAMILY**

Delphi не является:

- representative population survey;
- qualitative methodology;
- randomized design;
- causal-effect design;
- evidence synthesis;
- автоматически guideline methodology;
- автоматически mixed methods.

### Core Delphi architecture

Current DCAT (BMJ 2025) identifies four core characteristics:

1. **ANONYMITY** of collected data/reporting, appropriate to the Delphi variant;
2. **ITERATION**;
3. **CONTROLLED FEEDBACK**;
4. **STATISTICAL SUMMARY** of group responses.

Project adds a fifth practical requirement:

5. **PANELISTS CAN RECONSIDER/RE-RATE** their judgements after feedback.

### Critical rule

A one-round expert survey is **not** a valid full Delphi route.

A study that only asks experts to rate statements once should be classified as:

**EXPERT_SURVEY / PANEL_RATING**

unless another formal consensus architecture applies.

---

# 2. Scientific product

Delphi can produce:

- consensus statements;
- priorities;
- definitions;
- competency standards;
- outcome sets;
- indicators;
- recommendations;
- forecasts;
- expert judgments;
- mapped areas of disagreement/dissensus.

### Critical boundary

Consensus is:

> a structured group judgment.

It is not automatically:

- empirical truth;
- causal evidence;
- clinical-effect evidence;
- prevalence;
- diagnostic accuracy.

### Project rule

Store Delphi output separately from the empirical evidence base supporting that output.

---

# 3. Historical lineage

The Delphi technique originated at RAND in the mid-20th century as a structured expert elicitation method.

Classic lineage:

- anonymous expert responses;
- repeated questionnaire rounds;
- controlled feedback;
- reconsideration;
- statistical aggregation.

Modern Delphi has diversified into many variants.

Current 2025 methodological discussion explicitly notes that the field no longer has one uniform distinction among all variants.

### Project response

Do not infer method quality from the word “Delphi” alone.

Extract the enacted architecture.

---

# 4. Classical Delphi

Project route:

**CLASSICAL_DELPHI**

Typical architecture:

1. define question;
2. recruit expert/stakeholder panel;
3. Round 1 often open-ended;
4. generate items/statements/issues from panel input;
5. synthesize/categorize items;
6. Round 2 rating/ranking;
7. controlled feedback;
8. Round 3+ re-rating/reconsideration;
9. stop based on prespecified criterion.

### Critical rule

An open Round 1 is characteristic of classical Delphi but is not required for every legitimate Delphi variant.

---

# 5. Modified Delphi

Project route:

**MODIFIED_DELPHI**

“Modified Delphi” is a heterogeneous label.

Common modifications include:

- starting with pre-generated items from literature/existing framework;
- adding structured discussion;
- altering anonymity;
- reducing rounds;
- combining online and synchronous components;
- incorporating RAND/UCLA-style elements.

### Critical rule

**MODIFIED_DELPHI is not one standardized method.**

Mandatory project fields:

1. what was modified;
2. relative to which baseline;
3. why;
4. effect on anonymity;
5. effect on rounds;
6. effect on item generation;
7. effect on feedback;
8. effect on consensus procedure.

---

# 6. e-Delphi

Project route:

**E_DELPHI**

Basic e-Delphi:

- Delphi conducted electronically/online;
- geographically distributed asynchronous panel possible;
- controlled feedback and re-rating remain.

### Critical rule

Online administration alone does not define a new inferential design.

If the substantive Delphi architecture is unchanged:

**CLASSICAL/ MODIFIED DELPHI + ONLINE_MODE**

may be more informative than treating e-Delphi as entirely separate.

---

# 7. Real-time Delphi

Project route:

**REAL_TIME_DELPHI**

Key difference:

- feedback is updated dynamically/continuously;
- panelists may revise judgments without discrete conventional rounds.

### Critical rule

Real-time Delphi still requires repeated opportunity to reconsider responses based on group feedback.

A live poll with immediate results and no meaningful revision loop is not sufficient.

---

# 8. Policy / dissensus Delphi

Not all Delphi variants seek convergence.

Policy/dissensus-oriented Delphi may aim to:

- expose competing positions;
- identify arguments;
- map uncertainty;
- clarify value conflicts;
- preserve structured disagreement.

### Project route

**POLICY_DELPHI / DISSENSUS_DELPHI**

### Critical rule

Do not score such a design as failed because consensus was not reached.

Its scientific product may be:

**structured disagreement map**, not consensus.

---

# 9. Decision / argumentative and other variants

Current literature describes multiple less-standardized Delphi variants:

- Decision Delphi;
- Argument Delphi;
- Ranking-type Delphi;
- EFTE/estimate–feedback–talk–estimate;
- deliberative/citizen variants;
- real-time variants.

### Project rule

These are accepted as **variant labels**, but classification must preserve:

- anonymity;
- iteration;
- feedback;
- rating/reconsideration;
- discussion mode;
- intended product.

No universal variant taxonomy is treated as final.

---

# 10. When Delphi is appropriate

Current DCAT guidance indicates Delphi is suitable when:

- uncertainty is substantial;
- evidence is incomplete/conflicting;
- judgement from diverse expertise is needed;
- the purpose is consensus or structured disagreement;
- complex decisions do not have one directly observable “correct” answer.

### Less appropriate when

- representative population estimate is needed;
- strong empirical evidence directly answers the question;
- the study only wants attitudes/preferences from a population sample;
- researchers seek endorsement of a preselected conclusion.

### Critical rule

Delphi should not be used to manufacture authority where direct empirical evidence is available and decisive.

---

# 11. Panel composition

Panel composition is one of the strongest determinants of Delphi output.

Relevant expertise may include:

- clinical expertise;
- research expertise;
- methodological expertise;
- policy expertise;
- professional practice;
- lived experience;
- implementation expertise;
- coaching/sport expertise.

### Project rule

Define **expertise for the question**, not abstractly.

Mandatory fields:

1. PANEL_ROLE;
2. EXPERTISE_DEFINITION;
3. ELIGIBILITY_CRITERIA;
4. RECRUITMENT;
5. STAKEHOLDER_GROUP;
6. GEOGRAPHY;
7. CONFLICT_OF_INTEREST;
8. DIVERSITY_TARGET.

### Critical rule

Publication count alone is not a universal definition of expertise.

Lived experience may be valid expertise depending on the Delphi question.

---

# 12. Panel size

There is **no universal Delphi panel-size rule**.

A 2026 meta-research study of **1,904 biomedical Delphi studies** found:

- major heterogeneity in planned/invited/retained panel size;
- only a minority reported a planned size;
- consensus definitions also varied widely.

A 2024 resampling study of large multistakeholder Delphi surveys found:

- around 60–80 participants may provide high replicability in that specific multistakeholder setting;
- around 20–30 per stakeholder group may be sufficient in some subgroup analyses.

### Critical rule

Do **not** convert these findings into:

> “all Delphi studies require 60–80 participants.”

Panel size must be justified by:

- question breadth;
- stakeholder heterogeneity;
- expected attrition;
- subgroup analysis;
- feasibility;
- required perspective coverage.

---

# 13. Panel structure

Possible structures:

- one homogeneous expert panel;
- heterogeneous multistakeholder panel;
- multiple parallel panels;
- stakeholder-stratified feedback;
- international panels.

### Project rule

If stakeholder groups have systematically different positions:

report both:

- overall consensus;
- group-specific patterns.

### Critical boundary

Overall consensus can hide meaningful cross-stakeholder disagreement.

---

# 14. Anonymity

Classical Delphi uses panel anonymity to reduce:

- dominance;
- status pressure;
- conformity;
- halo effects;
- reluctance to revise.

Modern modified Delphi may use partial anonymity.

Examples:

- anonymous ratings;
- panel identities known;
- discussion participants visible;
- ratings not attributable.

### Project rule

Store:

1. PANEL_IDENTITY_ANONYMITY;
2. RESPONSE_ANONYMITY;
3. FEEDBACK_ANONYMITY;
4. RESEARCHER_ACCESS_TO_IDENTITY;
5. DISCUSSION_ANONYMITY.

### Critical rule

“Anonymous Delphi” is too vague.

Specify **what was anonymous to whom**.

---

# 15. Iteration

Current DCAT treats iteration as a core Delphi characteristic.

A valid Delphi should generally provide at least:

- two opportunities to respond to comparable rating material;
- with feedback between them;
- allowing reconsideration.

### Project rule

Store:

- total rounds;
- rating rounds;
- open-generation rounds;
- discussion rounds;
- which items repeated;
- which items removed;
- which items added.

### Critical rule

“Three rounds” is not inherently higher quality than “two rounds”.

Additional rounds can increase:

- attrition;
- fatigue;
- conformity/forced consensus.

---

# 16. Round 1 item generation

Possible routes:

## OPEN_GENERATION

Panelists generate items.

Typical classical Delphi route.

## PRE_SPECIFIED_ITEMS

Items generated from:

- systematic/scoping review;
- prior framework;
- steering committee;
- previous consensus;
- qualitative work.

Typical modified Delphi route.

## HYBRID

Pre-specified items + panelist suggestions.

### Project rule

Store provenance for every initial item source.

### Critical rule

A pre-generated item list is not inherently invalid, but it shifts power toward the research/steering team and can constrain the consensus space.

---

# 17. Steering committee role

The steering/research team may:

- define question;
- select panel;
- generate/revise items;
- synthesize comments;
- decide wording;
- apply consensus rules;
- stop the process.

### Bias risk

Steering-team decisions can shape consensus before panelists ever vote.

Current 2026 methodological review identifies design-level and panel-composition biases as major bias domains.

### Project safeguards

- multidisciplinary steering team;
- methodological expertise;
- prespecified protocol;
- neutral item wording;
- transparent amendment log;
- conflict-of-interest disclosure.

---

# 18. Controlled feedback

Controlled feedback is a core Delphi characteristic.

Feedback can include:

- median;
- mean;
- frequency distribution;
- IQR/range;
- percentage agreement;
- qualitative comments;
- rationale summaries;
- whether consensus criterion was met;
- participant’s previous own response.

### Project preference

Where feasible, return:

- group distribution;
- panelist’s own prior rating;
- anonymized rationale comments;
- dissenting positions.

### Critical rule

Feedback should inform reconsideration, not pressure conformity.

---

# 19. Personalized feedback

Current DCAT emphasizes reminding participants of their own prior ratings alongside group results.

### Project rule

Store:

**PERSONALIZED_FEEDBACK = YES/NO**

### Rationale

Without the prior personal response, a participant may not reliably judge whether/how their opinion changed.

---

# 20. Re-rating

Re-rating is the key operation that separates Delphi from a serial survey.

Panelist sees:

previous group response  
+ own prior judgment  
+ comments/reasons where applicable  
→ reconsiders  
→ retains or changes judgment.

### Critical rule

Opinion change is not automatically improvement.

It may reflect:

- learning;
- clarification;
- legitimate convergence;
- conformity pressure;
- framing effects.

---

# 21. Consensus definition

There is **no universal consensus threshold**.

The 2026 meta-research study found thresholds from approximately:

- 50%;
- to 100% agreement;

with 80% commonly used.

### Project rule

Consensus must be:

1. defined prospectively;
2. mathematically explicit;
3. tied to the response scale;
4. justified.

Examples:

- ≥70% in top 2 categories;
- ≥75% rating 7–9;
- ≥80% agree/strongly agree;
- median threshold + dispersion criterion.

### Critical rule

“Consensus was reached” without a prespecified operational definition is inadequate.

---

# 22. Consensus threshold is not method-independent

Consensus probability depends on:

- number of response categories;
- threshold placement;
- neutral category;
- treatment of “unable to rate”;
- missing responses;
- subgroup structure.

### Critical rule

An 80% threshold on a 3-point scale is not directly equivalent to 80% on a 9-point scale.

Project stores:

- SCALE;
- CONSENSUS_ZONE;
- THRESHOLD;
- DISPERSION_RULE;
- MISSING_DATA_RULE.

---

# 23. Agreement vs consensus vs stability

These must be separated.

## AGREEMENT

How concentrated responses are at one time.

## CONSENSUS

A prespecified decision criterion describing sufficient group agreement.

## STABILITY

How little responses change between rounds.

### Critical example

Panel can have:

- stable disagreement;
- changing agreement;
- high agreement but unstable individual ratings.

### Project rule

Store stability separately where assessed.

---

# 24. Stability

Possible stability metrics:

- change in median;
- change in IQR;
- percentage changing rating;
- rank correlation;
- nonparametric tests;
- item-level movement.

### Critical rule

There is no single universally accepted stability metric.

Do not claim “stability achieved” without defining it.

---

# 25. Attrition

Attrition can bias Delphi results if participants who disagree are more likely to leave.

Mandatory fields:

1. invited N;
2. Round 1 N;
3. Round 2 N;
4. Round 3 N;
5. attrition per round;
6. stakeholder-specific attrition;
7. reasons if known;
8. differential baseline ratings of completers vs dropouts where assessable.

### Critical rule

Final consensus among remaining panelists may overstate agreement if dissenters disproportionately attrit.

---

# 26. Stopping rules

Possible prespecified stopping rules:

- consensus reached;
- stability reached;
- maximum number of rounds;
- no material change;
- unacceptable attrition;
- saturation of new items;
- decision deadline.

### Project rule

Store:

- stopping rule;
- whether prespecified;
- whether amended;
- reason.

### Critical rule

Stopping because consensus “looks good enough” after seeing results introduces outcome-aware flexibility.

---

# 27. Dissensus

A high-quality Delphi should preserve meaningful dissent.

Report:

- items without consensus;
- polarized items;
- subgroup disagreement;
- reasons/comments;
- uncertainty.

### Critical rule

“No consensus” is a legitimate scientific result.

Do not force consensus by:

- repeatedly rewording until agreement;
- excluding persistent dissenters;
- removing inconvenient items without rule;
- continuing rounds indefinitely.

---

# 28. Classical vs modified Delphi — final distinction

## Classical Delphi

- usually open initial elicitation;
- anonymous iterative questionnaires;
- controlled feedback;
- repeated rating;
- no required face-to-face discussion.

## Modified Delphi

Any material deviation, commonly:

- pre-generated items;
- discussion component;
- fixed limited rounds;
- altered anonymity;
- special consensus rule.

### Critical rule

Because “modified Delphi” is highly heterogeneous, the project never treats this label as sufficient classification.

---

# 29. Delphi vs survey

## SURVEY

Can estimate:

- attitudes;
- knowledge;
- beliefs;
- population/stakeholder distributions.

May be one round.

## DELPHI

Requires structured iterative judgement with feedback/reconsideration.

### Critical rule

Multiple waves of a survey are not Delphi unless there is controlled feedback and reconsideration.

---

# 30. Delphi vs NGT

## Delphi

- usually asynchronous;
- individual anonymous/semi-anonymous ratings;
- iterative rounds;
- controlled feedback;
- no live interaction required.

## Nominal Group Technique

Classic NGT uses:

1. silent idea generation;
2. round-robin sharing;
3. clarification/discussion;
4. individual voting/ranking.

### Critical rule

NGT is a structured group interaction method.

Delphi is primarily an iterative controlled-feedback elicitation method.

Detailed NGT taxonomy remains owned by PASS-06F8.

---

# 31. Delphi vs RAND/UCLA Appropriateness Method

RAND/UCLA Appropriateness Method (RAM) is a specific formal consensus architecture derived from modified Delphi traditions.

Typical RAM:

- structured evidence review;
- clinical indications/scenarios;
- Round 1 individual rating;
- moderated group discussion;
- Round 2 rating;
- 1–9 appropriateness scale;
- median + disagreement rules.

### Critical rule

RAM must not be flattened into generic Delphi.

Its inferential product is:

**appropriateness/necessity classification of clinical actions under defined indications**.

Detailed RAM/NGT crosswalk remains PASS-06F8.

---

# 32. Consensus conference boundary

Consensus conferences may involve:

- evidence presentations;
- open discussion;
- negotiated statement;
- real-time agreement.

They do not necessarily preserve:

- anonymity;
- iterative individual re-rating;
- controlled Delphi feedback.

### Project rule

Do not label every expert consensus meeting Delphi.

---

# 33. CREDES

**CREDES (2017)** was developed from a methodological systematic review in palliative care.

Purpose:

- improve conduct/reporting of Delphi studies;
- address inconsistency in terminology and methodology.

### Project route

**DELPHI CONDUCT/REPORTING GUIDANCE — DOMAIN-ORIGINATED**

### Critical boundary

CREDES is not:

- a Delphi variant;
- a universal empirical proof of quality;
- a replacement for protocol-specific design justification.

---

# 34. ACCORD

**ACCORD (2024)** is a reporting guideline for consensus methods in biomedicine.

It is broader than Delphi and can cover:

- Delphi;
- NGT;
- RAND/UCLA;
- consensus meetings;
- other formal consensus methods.

### Project route

**CONSENSUS REPORTING GUIDELINE**

### Critical rule

ACCORD improves reporting transparency.

It does not prescribe one consensus method and does not validate consensus.

---

# 35. DELPHISTAR

**DELPHISTAR (2024)** provides interdisciplinary reporting recommendations for Delphi studies in health and social sciences.

Final guideline contains **38 items** across:

- Title/Abstract;
- Context;
- Method;
- Results;
- Discussion.

It explicitly covers different Delphi variants and purposes.

### Project route

**DELPHI-SPECIFIC REPORTING GUIDELINE**

### Critical rule

Use ACCORD and/or DELPHISTAR according to scope.

Do not treat them as identical:

- ACCORD = consensus-method reporting broadly;
- DELPHISTAR = Delphi-specific reporting.

---

# 36. DCAT — current appraisal layer

**Delphi Critical Appraisal Tool (DCAT), BMJ 2025**

Contains:

- 16 items;
- 4 core;
- 12 additional.

Four core items:

1. anonymity;
2. iteration;
3. statistical summary;
4. controlled feedback.

### Critical caveat

DCAT authors explicitly state that the tool has **not yet been formally validated** through a broad consensus/stakeholder process.

### Project route

**CURRENT APPRAISAL TOOL / PROVISIONAL QUALITY LAYER**

Use for critical appraisal, but do not treat its overall rating as an established universal gold standard.

---

# 37. Current 2026 bias framework

A 2026 methodological review identifies ten cognitive biases across four broad domains:

1. steering-group/design-level;
2. panel composition/context;
3. social influence/conformity;
4. individual cognitive heuristics.

Recommended mitigations include:

- diverse panels;
- neutral wording;
- anonymity during voting;
- methodological expertise;
- transparent feedback.

### Project route

**DELPHI BIAS-AUDIT LAYER**

### Critical caveat

The framework itself requires prospective validation.

---

# 38. Quality architecture

## Q1 — Method fit

- Delphi appropriate for question?;
- objective = consensus/judgement/dissensus?;
- direct empirical evidence insufficient?

## Q2 — Panel

- expertise defined;
- panel composition justified;
- stakeholder diversity;
- conflicts disclosed;
- recruitment transparent.

## Q3 — Anonymity

- exact anonymity level reported;
- dominance/social influence controlled.

## Q4 — Item provenance

- item source transparent;
- wording neutral;
- pilot/pretest where appropriate;
- steering-team influence documented.

## Q5 — Iteration

- ≥2 meaningful opportunities for rating/reconsideration;
- repeated comparable items;
- item changes documented.

## Q6 — Feedback

- controlled;
- statistical summary;
- rationale/comments;
- own previous response where feasible.

## Q7 — Consensus/stability

- threshold prespecified;
- scale/zone clear;
- stability separate;
- subgroup disagreement visible.

## Q8 — Attrition/stopping

- attrition tracked;
- differential attrition considered;
- stopping rule prespecified.

## Q9 — Dissensus

- disagreement preserved;
- no forced consensus;
- polarized items reported.

## Q10 — Reporting/provenance

- CREDES/DELPHISTAR/ACCORD as appropriate;
- protocol/analysis plan;
- response data;
- comments;
- amendments;
- sponsor role;
- software/AI provenance.

---

# 39. Delphi claim limits

Delphi can support:

- structured expert consensus;
- prioritisation;
- definition development;
- standards/competencies;
- stakeholder judgment;
- areas of uncertainty/dissent.

Delphi alone does not establish:

- intervention efficacy;
- biological mechanism;
- diagnostic accuracy;
- prevalence;
- treatment superiority;
- causal effect.

### Critical rule

Expert consensus should not be presented as a substitute for high-certainty empirical evidence.

---

# 40. Current sport / exercise / rehabilitation relevance

Direct current applications verify strong relevance.

## International Sports Physiotherapy Competencies — 2025/2026

International three-round Delphi:

- sports physiotherapists from many countries;
- a priori ≥80% agreement;
- updated international sports-physiotherapy standards.

### Lesson

Delphi is appropriate for professional competency/standards questions where the output is structured expert agreement.

## Skill acquisition in sport — 2026

Expert Delphi used to establish consensus on skill-acquisition principles.

### Lesson

Consensus clarifies expert position; it does not independently prove causal learning mechanisms.

## International warm-up consensus — 2026

- 23 experts;
- 12 countries;
- three Delphi rounds;
- ≥80% consensus;
- 72 of 122 statements reached consensus.

### Lesson

Items without consensus are informative and should not disappear from interpretation.

## Athletic hamstring injury — 2026

Consensus statement using Delphi-style process with an a priori ≥80% agreement threshold.

### Lesson

Clinical/sport recommendations remain consensus-level evidence and should be integrated with underlying empirical evidence rather than treated as equivalent to RCT evidence.

---

# 41. Canonical Delphi extraction schema

## A. Identification

1. author label;
2. project route;
3. Delphi variant;
4. objective;
5. output type;
6. protocol available?

## B. Panel

7. expertise definition;
8. eligibility;
9. recruitment;
10. invited N;
11. stakeholder groups;
12. geography;
13. conflicts;
14. lived-experience experts?;
15. target panel size;
16. size rationale.

## C. Anonymity

17. identity anonymity;
18. rating anonymity;
19. researcher access;
20. discussion anonymity;
21. publication identity disclosure.

## D. Item generation

22. Round-1 open generation?;
23. literature-derived items?;
24. steering-team items?;
25. qualitative precursor?;
26. panel suggestions allowed?;
27. item provenance;
28. pilot/pretest.

## E. Rounds

29. total rounds;
30. rating rounds;
31. discussion rounds;
32. items repeated;
33. items removed;
34. items added;
35. item amendments.

## F. Feedback

36. group statistics;
37. dispersion;
38. consensus status;
39. qualitative comments;
40. participant’s prior rating;
41. subgroup feedback;
42. feedback timing.

## G. Rating

43. response scale;
44. scale anchors;
45. unable-to-rate option;
46. ranking vs rating;
47. qualitative comments.

## H. Consensus

48. consensus definition;
49. threshold;
50. consensus zone;
51. dispersion criterion;
52. subgroup criterion;
53. missing-data handling;
54. polarized-response rule.

## I. Stability

55. stability assessed?;
56. stability metric;
57. stability threshold;
58. individual changes;
59. item-level changes.

## J. Attrition / stopping

60. R1 N;
61. R2 N;
62. R3+ N;
63. response rate;
64. attrition rate;
65. differential attrition;
66. stopping criterion;
67. amendment to stopping rule.

## K. Dissensus

68. no-consensus items;
69. polarized items;
70. stakeholder disagreement;
71. dissent comments;
72. forced-consensus risk.

## L. Quality/reporting

73. CREDES used?;
74. ACCORD used?;
75. DELPHISTAR used?;
76. DCAT appraisal?;
77. protocol preregistered?;
78. sponsor role;
79. steering-team conflicts;
80. software;
81. AI/tool use;
82. human verification;
83. unresolved issue.

---

# 42. Do-not-confuse matrix

| Do not confuse | Correct separation |
|---|---|
| Delphi vs one-round expert survey | iterative controlled-feedback process vs single rating |
| consensus vs truth | group judgment vs empirical fact |
| panel size vs representativeness | expert/stakeholder coverage vs population sampling |
| expert majority vs prevalence | panel proportion vs population proportion |
| agreement vs stability | concentration of ratings vs change across rounds |
| modified Delphi vs one method | heterogeneous family; modifications must be reported |
| e-Delphi vs new inferential design | online administration/variant vs core Delphi logic |
| Delphi vs NGT | asynchronous iterative feedback vs structured live group process |
| Delphi vs RAND/UCLA | broad Delphi family vs specific appropriateness architecture |
| Delphi vs consensus conference | anonymous iterative rating vs negotiated group meeting |
| CREDES vs Delphi method | conduct/reporting guidance vs consensus method |
| ACCORD vs Delphi method | consensus reporting guideline vs method |
| DELPHISTAR vs ACCORD | Delphi-specific reporting vs broad consensus reporting |
| DCAT vs validated gold standard | current appraisal proposal vs formally validated universal tool |
| consensus threshold vs universal standard | prespecified study rule vs one mandatory number |
| repeated rounds vs rigor | iteration quality matters; more rounds can increase attrition/conformity |

---

# 43. Known methodological uncertainties

No universal hard rule exists for:

1. ideal panel size;
2. required number of rounds beyond meaningful iteration;
3. universal consensus percentage;
4. universal stability metric;
5. one mandatory anonymity level for every variant;
6. one standard definition of “modified Delphi”;
7. one universal item-generation method;
8. one universal panel expertise definition;
9. one universally validated Delphi appraisal tool.

### Project response

Do not invent pseudo-standards.

Require:

- prespecification;
- transparency;
- fit to objective;
- panel justification;
- controlled feedback;
- explicit disagreement;
- attrition/stopping audit.

---

# 44. Sources checked

1. Grant S, Khodyakov D. Proposal for a critical appraisal tool for studies using the Delphi method (DCAT). BMJ. 2025;391:e084509. PMID 41360436.  
   https://www.bmj.com/content/391/bmj-2025-084509

2. Khodyakov D et al. RAND Methodological Guidance for Conducting and Critically Appraising Delphi Panels. RAND. 2024.

3. Jünger S, Payne SA, Brine J, Radbruch L, Brearley SG. Guidance on Conducting and REporting DElphi Studies (CREDES) in palliative care. Palliat Med. 2017;31:684–706. PMID 28190381.  
   https://pubmed.ncbi.nlm.nih.gov/28190381/

4. Gattrell WT et al. ACCORD: A reporting guideline for consensus methods in biomedicine developed via a modified Delphi. PLoS Med. 2024;21:e1004326. PMID 38261576.  
   https://pubmed.ncbi.nlm.nih.gov/38261576/

5. Niederberger M et al. DELPHISTAR: recommendations for interdisciplinary standardized reporting of Delphi studies in social and health sciences. PLoS One. 2024;19:e0304651. PMID 39186713.  
   https://pubmed.ncbi.nlm.nih.gov/39186713/

6. Nasa P, Jain R, Juneja D. Delphi methodology in healthcare research: How to decide its appropriateness. World J Methodol. 2021;11:116–129. PMID 34322364.  
   https://pubmed.ncbi.nlm.nih.gov/34322364/

7. Barrett D, Heale R. What are Delphi studies? Evid Based Nurs. 2020.  
   https://ebn.bmj.com/content/23/3/68

8. Humphrey-Murto S et al. The Use of the Delphi and Other Consensus Group Methods in Medical Education Research: A Review. Acad Med. 2017.

9. Jorm AF. Using the Delphi expert consensus method in mental health research. Aust N Z J Psychiatry. 2015.

10. Diamond IR et al. Defining consensus: a systematic review recommends methodologic criteria for reporting of Delphi studies. J Clin Epidemiol. 2014;67:401–409. PMID 24581294.  
    https://pubmed.ncbi.nlm.nih.gov/24581294/

11. Manyara AM et al. Sample size in multistakeholder Delphi surveys: at what minimum sample size do replicability of results stabilize? J Clin Epidemiol. 2024;174:111485. PMID 39069013.  
    https://pubmed.ncbi.nlm.nih.gov/39069013/

12. Sample size and consensus methods used in Delphi studies are heterogeneous: meta-research study. 2026. PMID 41921829.  
    https://pubmed.ncbi.nlm.nih.gov/41921829/

13. Keeney S et al. Revisiting the Delphi technique — Research thinking and practice. Int J Nurs Stud. 2025;105119. PMID 40383005.  
    https://pubmed.ncbi.nlm.nih.gov/40383005/

14. Causes of bias in Delphi studies and consensus statements: a methodological review. 2026. PMID 42973058.  
    https://pubmed.ncbi.nlm.nih.gov/42973058/

15. Tassignon B et al. Updating the International Sports Physiotherapy Competencies and Standards: an international Delphi study. Phys Ther Sport. 2026;77:62–69. PMID 41380313.  
    https://pubmed.ncbi.nlm.nih.gov/41380313/

16. Runswick OR et al. Expert consensus on skill acquisition in sport: A Delphi study. J Sports Sci. 2026;44:1203–1214. PMID 41757711.  
    https://pubmed.ncbi.nlm.nih.gov/41757711/

17. Boullosa D et al. International Expert Consensus on Warm-Up Protocols for Athletes: A Delphi Study. Int J Sports Physiol Perform. 2026;21:982–995. PMID 42476526.  
    https://pubmed.ncbi.nlm.nih.gov/42476526/

18. Gilliam B et al. Diagnosis, Rehabilitation, and Return to Sport after Athletic Hamstring Injury: An ICCUS Society Consensus Statement. Int J Sports Phys Ther. 2026;21:1117–1125. PMID 42974573.  
    https://pubmed.ncbi.nlm.nih.gov/42974573/

---

# 45. Branch decision

Delphi status:

**TAXONOMY ESTABLISHED FOR RES-02 STRUCTURAL USE.**

Known Delphi taxonomy-level blockers:

**NONE.**

Important current additions:

- DCAT 2025 added as a provisional Delphi-specific appraisal layer;
- DELPHISTAR 2024 separated from ACCORD;
- 2026 meta-research confirms large heterogeneity in sample size and consensus thresholds;
- 2026 bias framework added as a bias-audit layer.

Detailed NGT/RAND-UCLA/other structured consensus architecture remains owned by the next pass.

F-branch overall remains:

**RESEARCHING.**

---

# 46. Next micro-pass

**RES-02 / PASS-06F8 — Nominal Group Technique + structured consensus / RAND-UCLA crosswalk**

Initial scope:

1. classical NGT;
2. idea-generation sequence;
3. round-robin;
4. clarification/discussion;
5. ranking/voting;
6. modified NGT;
7. online/virtual NGT;
8. panel size/group structure;
9. facilitator role;
10. anonymity boundary;
11. NGT vs focus group;
12. NGT vs Delphi;
13. RAND/UCLA Appropriateness Method;
14. appropriateness vs necessity;
15. evidence review;
16. 1–9 rating architecture;
17. disagreement / IPRAS;
18. discussion between rating rounds;
19. NGT vs RAND/UCLA;
20. consensus conferences;
21. hybrid/formal consensus methods;
22. ACCORD;
23. sport/exercise/rehabilitation applications;
24. quality/provenance;
25. STOP after saved PASS.

STOP after this saved Delphi pass.
