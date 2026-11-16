# Question Card — modular protocol before evidence search

Версия: **2.0 — RES-01 architecture implementation**  
Статус: **CANONICAL WORKING TEMPLATE**  
Назначение: формулировать научный вопрос до построения поисковой стратегии.

## Основной принцип

Порядок:

1. Decision/use.
2. Primary objective.
3. Primary question.
4. Выбрать scientific question type.
5. Заполнить только соответствующий conditional module.
6. Добавить нужные cross-cutting modules.
7. Пройти Review Necessity / FINER Gate.
8. Только затем строить отдельный `SEARCH_CONCEPT_CARD`.

Не заполнять все модули механически.

---

# LAYER 1 — CORE

## 1. Topic ID

`XXX-00`

## 2. Decision / use

Какое решение, модель или следующий исследовательский шаг должен информировать ответ?

## 3. Primary objective

Одна точная основная цель.

## 4. Primary question

Один основной научный вопрос.

Secondary/subquestions добавлять только если они реально нужны для решения.

## 5. Scientific question type

Выбрать основной маршрут:

- [ ] Intervention effect / comparative effectiveness
- [ ] Diagnostic accuracy
- [ ] Measurement properties / instrument selection
- [ ] Overall prognosis
- [ ] Prognostic factor
- [ ] Prediction model
- [ ] Exposure / etiology / causal risk
- [ ] Mechanism
- [ ] Qualitative
- [ ] Implementation determinants
- [ ] Implementation outcome
- [ ] Implementation-strategy effect
- [ ] Scoping / evidence mapping
- [ ] Frequency: prevalence / cumulative incidence / incidence rate
- [ ] Mixed methods
- [ ] Textual / policy / expert evidence
- [ ] Other — requires explicit methodology check

### Conditional design flags

These are **not** separate scientific question types:

- [ ] Effect modification / predictor of treatment effect
- [ ] Harm / safety domain
- [ ] Complex intervention / logic model needed
- [ ] Umbrella / review-of-reviews evidence level
- [ ] Economic question — requires dedicated current-methodology check
- [ ] Other review-process variant

## 6. Target population

К кому относится scientific target?

## 7. Target context / setting

Какой context materially входит в вопрос?

## 8. Eventual application target

К кому/чему должен быть перенесён результат на decision stage?

Не смешивать application target с eligibility автоматически.

## 9. Critical outcome / target phenomenon

Что именно определяет решение?

Если question type не outcome-based — указать target phenomenon / construct / condition.

## 10. Important secondary outcomes / harms / burden

Что может изменить practical choice, даже если не является primary outcome?

## 11. Time

Заполнять только релевантные поля:

- Intervention/exposure duration:
- Outcome time horizon:
- Follow-up/risk horizon:
- Calendar/reference period:

Не смешивать intervention duration и outcome horizon.

## 12. Evidence-source / review-design level

Что является допустимой единицей evidence?

- [ ] primary empirical studies
- [ ] systematic reviews / syntheses
- [ ] mixed primary + secondary evidence with separate roles
- [ ] textual/policy sources
- [ ] other

Если используется umbrella/review-of-reviews design — underlying scientific question всё равно указывается выше.

## 13. Safety / harm flag

- [ ] safety/harm materially relevant

Если YES, маршрутизировать конкретный claim:

- comparative harm effect → Intervention Effect
- frequency of harm → Frequency
- causal risk → Exposure/Etiology
- prognosis after event/condition → Prognosis
- stop/referral/professional guidance → Textual/Policy

## 14. Eligibility logic — high level

Что должно быть true, чтобы source/study мог реально ответить на этот вопрос?

Не превращать этот раздел в search query.

## 15. Planned grouping / synthesis boundaries

Какие различия должны быть определены **до** просмотра результатов?

## 16. Scope-change log

Для каждого существенного изменения после начала поиска:

1. что изменено;
2. почему;
3. когда;
4. было ли изменение вызвано увиденными результатами;
5. какие eligibility/search/extraction элементы надо обновить;
6. как это влияет на interpretation.

## 17. Closure criterion

Что должно быть установлено, чтобы topic можно было считать practically closed?

---

# LAYER 2 — CONDITIONAL SCIENTIFIC MODULES

Заполнять только нужный модуль.

---

## MODULE A — Intervention Effect

Использовать для causal/comparative вопроса `A vs B`.

1. Population
2. Intervention A
3. Comparator B
4. Critical outcome(s)
5. Intervention duration
6. Outcome time horizon
7. Eligible intervention variants
8. Eligible comparator variants
9. Co-interventions allowed / prohibited
10. Eligible study designs
11. Broad eligibility vs planned synthesis grouping
12. Benefit outcomes
13. Harm outcomes
14. Burden/resource outcomes
15. Surrogate/intermediate outcomes — explicitly labelled
16. Primary causal decision:
   - assignment/program-policy effect?
   - hypothetical/full-adherence effect?
   - other?

### MODULE A1 — Estimand

Use when exact target treatment effect matters.

1. Target effect name
2. Treatment A
3. Treatment B/comparator
4. Population
5. Variable/outcome + time
6. Relevant intercurrent events
7. Strategy for each intercurrent event
8. Population-level summary
9. Adherence definition, if relevant
10. Data needed after discontinuation
11. Primary estimand
12. Secondary/supplementary estimands
13. Why this estimand answers the decision

Never silently replace a full-adherence target effect with an observed-completer contrast.

### MODULE A2 — Effect Modification / Predictor of Treatment Effect

Use only when question asks:
> for whom / under what conditions does the effect of A vs B differ?

1. Decision/use
2. Target population
3. Intervention A
4. Comparator B
5. Outcome
6. Time
7. Target effect measure / scale
8. Candidate effect modifier
9. Modifier class:
   - participant baseline
   - intervention characteristic
   - context
   - methodological/study characteristic
10. Modifier measurement/definition
11. Continuous or categorical?
12. If categorical, why is cut-point justified?
13. Hypothesized interaction
14. Expected direction, if defensible
15. Mechanistic/clinical rationale
16. External support available before synthesis?
17. Is modifier prognostic independently of treatment?
18. Why prognosis alone is insufficient
19. Preferred evidence level:
   - within-trial interaction
   - IPD interaction
   - aggregate study-level only
   - other
20. Risk of ecological/aggregation bias
21. Potential confounders / correlated modifiers
22. Prespecified or post hoc?
23. Number of modifiers being tested
24. Decision-relevant interaction magnitude
25. Would modifier change treatment/program choice?
26. Credibility assessment required?
27. Personalization claim allowed at current evidence level?
28. Uncertainty / evidence gap

---

## MODULE B — Diagnostic Accuracy

1. Target population / participants
2. Intended diagnostic role
3. Index test
4. Target condition
5. Reference standard
6. Threshold(s), if relevant
7. Setting / pathway
8. Target accuracy measures
9. Eligible designs
10. Important harms/burdens from testing
11. Applicability constraints

Do not call the reference standard a “gold standard” unless that claim is justified.

---

## MODULE C — Measurement Properties / Instrument Selection

Project framework: **C-P-I-MP-U** — project-specific, not external standard.

1. Construct
2. Population
3. Instrument / protocol
4. Measurement property
5. Intended use / context
6. Group-level or individual-level use?
7. Target measurement conditions
8. Comparator/instrument alternative if relevant
9. Decision threshold for adequacy, if justified
10. Eligible measurement-property designs

Construct != instrument.

---

## MODULE D — Prognosis / Prediction

Current route uses explicit field definitions; PICOTS may be used where appropriate.

### Choose subtype

- [ ] Overall prognosis
- [ ] Prognostic factor
- [ ] Prediction model

1. Population
2. Index prognostic factor/model, if applicable
3. Comparator, if relevant
4. Outcome
5. Startpoint
6. Prediction horizon
7. Setting
8. Eligible designs
9. Intended use of prognosis/prediction
10. Applicability target

Predictor of **treatment effect** does not belong here; route to Module A2.

---

## MODULE E — Exposure / Etiology / Causal Risk

Use PEO or PECO depending on whether an explicit causal contrast is required.

1. Population
2. Exposure
3. Comparator / exposure contrast, if required
4. Outcome
5. Exposure identity
6. Dose/intensity
7. Duration
8. Frequency/pattern
9. Timing/window
10. Route/mode
11. Exposure measurement
12. Context
13. Temporality requirement
14. Important confounder classes anticipated before search
15. Eligible designs
16. Is the target association descriptive or causal?

Risk factor != automatically causal factor.

---

## MODULE F — Mechanism

Project framework: **MEC-Q** — project-specific.

1. Target phenomenon/outcome — what needs explaining?
2. Intervention/exposure/input
3. Target system/population
4. Hypothesized components/entities
5. Hypothesized activities/links
6. Organization/sequence
7. Critical uncertain link(s)
8. Perturbation/prediction — what would support/refute a link?
9. Model/context
10. Competing/counteracting mechanisms
11. Direct practical claim this mechanism is intended to inform
12. Boundary: explanation vs efficacy/prediction

Mechanistic evidence does not automatically establish practical efficacy.

---

## MODULE G — Qualitative

PICo is a useful default, not a universal requirement.

1. Participants / population
2. Phenomenon of interest
3. Context
4. Perspective/actor if materially relevant
5. Experience/meaning/process being explored
6. Primary qualitative question
7. Subquestions, only if needed
8. Eligible qualitative designs
9. Intended downstream use
10. What this synthesis will not be used to claim

Do not reduce every qualitative question to a barrier/facilitator checklist.

---

## MODULE H — Implementation

Choose subtype.

### H1 — Determinants

Project framework: **ID-CAP** — project-specific.

1. Innovation/practice being implemented
2. Determinant question
3. Context/setting
4. Actors / roles
5. Phase of implementation
6. Barrier/facilitator domain
7. Expected direction if a causal interpretation is attempted

CFIR may organize determinants after the question is defined; it is not the question itself.

### H2 — Implementation Outcome

Project framework: **IO-CARP** — project-specific.

1. Innovation / referent
2. Implementation outcome
3. Context
4. Actor / unit of analysis
5. Reference/comparator/threshold, if meaningful
6. Phase/time

Keep outcomes distinct, e.g.:
- acceptability
- adoption
- appropriateness
- feasibility
- fidelity
- implementation cost
- penetration
- sustainability

### H3 — Implementation-Strategy Effect

This is a causal intervention-effect question.

Use:
- Module A — Intervention Effect
- plus implementation outcome(s) as O
- plus estimand if needed.

---

## MODULE I — Scoping / Evidence Mapping

Default framework: **PCC**.

1. Mapping objective
2. Why scoping rather than focused systematic review?
3. Population
4. Concept
5. Context
6. Is any PCC element intentionally omitted?
7. Primary scoping question
8. Subquestions
9. Source types eligible
10. Evidence dimensions to chart
11. Definitions to map
12. Methods/outcomes to map
13. Equity dimension if relevant
14. Intended downstream use:
   - terminology clarification
   - focused review
   - research-gap analysis
   - framework development
   - evidence landscape only
15. What the map will **not** be used to conclude
16. Review-team status:
   - single-reviewer reconnaissance
   - duplicate formal review
17. Formal JBI-compliance claim permitted? YES/NO

A one-reviewer internal map may use JBI PCC principles but must not be labelled a formal JBI-compliant scoping review.

---

## MODULE J — Frequency

Use for prevalence / cumulative incidence / incidence rate.

1. Purpose
2. Target condition/event
3. Case/event definition
4. Target population
5. Denominator / at-risk definition
6. Frequency estimand:
   - point prevalence
   - period prevalence
   - cumulative incidence
   - incidence rate/person-time
7. Reference time / calendar period
8. Risk/follow-up horizon
9. Context/setting
10. Geographic scope
11. Eligible study designs / sampling frames
12. Important planned strata, only when justified
13. Applicability target
14. Structural comparability rules
15. What this estimate will inform

Legacy CoCoPop may be used as a historical mnemonic, but current methodology source is PERSyst via JBI endorsement.

---

## MODULE K — Mixed Methods

Use only when both quantitative and qualitative evidence are needed **and integration itself serves the decision**.

### Core

1. Why are both evidence types needed?
2. What decision/phenomenon requires integration?
3. Same question or linked distinct questions?
4. Chosen approach:
   - convergent integrated
   - convergent segregated
   - sequential/other → dedicated methodology check required
5. Rationale

### If convergent integrated

6. Single overarching question
7. Question framework
8. How quantitative evidence answers the same phenomenon
9. How qualitative evidence answers the same phenomenon
10. Planned data-transformation logic
11. What integration is intended to establish

### If convergent segregated

12. Quantitative question + framework
13. Qualitative question + framework
14. Why they are linked
15. Separate eligibility rules
16. Separate synthesis plans
17. Final integration question

### Both

18. Eligible mixed-methods primary studies
19. How quantitative/qualitative components contribute
20. Expected integration relation:
   - convergence
   - complementarity
   - expansion
   - conflict/discordance
   - other
21. What integrated conclusion may inform
22. What it may **not** claim

---

## MODULE L — Textual / Policy / Expert Evidence

1. Decision/use
2. Why empirical evidence alone cannot answer this question
3. Population / relevant actor
4. Phenomenon / intervention / issue
5. Context / setting
6. Jurisdiction, if relevant
7. Textual evidence type(s):
   - narrative
   - expert opinion
   - policy
   - consensus guideline
   - combination
8. Why these textual types are eligible
9. Primary question
10. Subquestions, if necessary
11. Eligible issuing/source bodies
12. Version/date requirements
13. Superseded-document handling
14. Need to extract underlying empirical citations?
15. Expected claim type:
   - normative
   - procedural
   - descriptive
   - experiential
   - expert rationale
16. Claims this review is NOT allowed to make
17. Conflict-handling plan
18. Separate empirical evidence stream required? YES/NO

Policy recommendation != empirical proof of efficacy.

---

# LAYER 3 — CROSS-CUTTING OPTIONAL MODULES

---

## MODULE M — Stakeholder / End-user

Use when stakeholder input materially shapes the question.

1. Intended user(s)
2. Decision owner
3. Affected stakeholders
4. Implementation actor(s)
5. End-user priorities
6. Critical outcomes from user perspective
7. Unacceptable harms/burdens
8. Context constraints
9. Source of stakeholder input
10. Formal or informal process?
11. What changed because of stakeholder input?
12. Potential stakeholder conflicts
13. Representation limitations

Do not label informal direct user input as formal PPI/consensus.

---

## MODULE N — Applicability / Context

1. Review target population
2. Review target setting/context
3. Eventual application target
4. Key applicability modifiers
5. Expected sources of indirectness
6. Populations/settings likely missing from evidence
7. Need for separate synthesis?
8. Rationale

Keep general evidence and application-layer decisions separate.

---

## MODULE O — Equity

1. Is equity materially relevant? YES / NO / UNCERTAIN
2. Equity definition for this question
3. Population(s) potentially experiencing disadvantage
4. Relevant PROGRESS-Plus dimensions
5. Hypothesized pathway to inequity
6. Could intervention reduce/worsen inequity?
7. Equity-relevant outcomes/burdens/access issues
8. Planned separate analysis/synthesis, if any
9. Evidence limitations
10. Why omitted dimensions were not prioritized

PROGRESS-Plus is a lens, not a mandatory subgroup checklist.

---

## MODULE P — Logic Model / Complex Intervention

Use only when complexity changes eligibility, synthesis or interpretation.

1. Why is a logic model needed?
2. Decision / key uncertainty
3. Intervention components
4. Core functions
5. Delivery/implementation processes
6. Mechanisms
7. Context factors
8. Participant/provider factors
9. Proximal outputs/outcomes
10. Intermediate outcomes
11. Distal decision-important outcomes
12. Harms / unintended pathways
13. Mediators
14. Potential moderators
15. Competing/counteracting pathways
16. Critical fidelity variables
17. Which nodes affect eligibility?
18. Which nodes affect synthesis grouping?
19. Which nodes are only explanatory?
20. Which uncertainties become explicit subquestions?
21. Required evidence type for each subquestion
22. Pre-synthesis model version
23. Post-synthesis changes
24. Theory failure vs implementation failure interpretation

Do not promote every node into a review question.

---

# LAYER 4 — REVIEW NECESSITY / FINER GATE

Complete before a major deep-review stream.

## A. Decision value

1. What decision/model component will this answer inform?
2. What result would change action?
3. What result would not change action?

## B. Feasible

4. Is the scope operationally manageable?
5. Is there likely enough evidence?
6. Are appropriate study designs/data available?
7. Can the project appraise/synthesize them reliably?
8. Is the question too broad or too narrow?

## C. Interesting / importance

9. Is the question worth the research effort?
10. Is interest scientific only, or decision-relevant?

## D. Novel

11. Preliminary existing-review search completed?
12. Relevant published reviews found?
13. Ongoing reviews found?
14. Last search dates?
15. Is existing review current enough?
16. Is it methodologically credible enough for use?
17. Is it directly applicable?
18. What exact gap remains?
19. What new value would new work add?

## E. Ethical

20. Is duplication justified?
21. Could framing omit material harms?
22. Could output create misleading confidence?
23. Is opportunity cost justified?
24. Are relevant equity consequences considered?

## F. Relevant

25. Intended user/decision-maker?
26. Downstream decision?
27. Would uncertainty reduction matter?

## G. Answerability

28. Can available evidence estimate the actual target claim?
29. Is the required estimand/construct reported?
30. Is evidence mature enough for focused synthesis?
31. If not, should it route to scoping or evidence-gap status?

## H. Routing outcome

32. Viability status:
   - `PROCEED_FOCUSED`
   - `USE_EXISTING_SYNTHESIS`
   - `UPDATE_OR_SUPPLEMENT`
   - `SCOPING_FIRST`
   - `EVIDENCE_GAP`
   - `DEFER_LOW_VALUE`
   - `REFRAME`
33. Rationale
34. Date of viability assessment
35. Reassessment trigger

---

# LAYER 5 — SEARCH HANDOFF

If viability status permits evidence search:

1. Create/link a separate `SEARCH_CONCEPT_CARD`.
2. Keep scientific eligibility distinct from searchable concepts.
3. Record which eligibility concepts are intentionally omitted from the search.
4. Do not let search results silently redefine the question.
5. Any material question change returns to the Scope-change log and viability check.

---

# FINAL PRE-SEARCH CHECK

Before executing a major search:

- [ ] Decision/use is explicit.
- [ ] Primary objective is singular and clear.
- [ ] Primary question is explicit.
- [ ] Scientific question type is correctly routed.
- [ ] Only relevant conditional modules are loaded.
- [ ] Critical outcome/phenomenon is explicit.
- [ ] Time fields are explicit where relevant.
- [ ] Safety/harm is routed to the correct scientific design.
- [ ] Applicability target is explicit.
- [ ] Effect-modifier hypotheses are prespecified if used.
- [ ] Stakeholder/equity/logic-model modules are used only when material.
- [ ] Review Necessity / FINER Gate is complete.
- [ ] Research route is assigned.
- [ ] Closure criterion is explicit.
- [ ] Search Concept Card is still downstream and separate.
