# RES-01 — Формулировка исследовательского вопроса

Статус: **CLOSED_FOR_PRACTICE — REVALIDATED SYNTHESIS**  
Дата synthesis: 2026-11-16  
Область: 13 — Методология исследований

## 1. Назначение

RES-01 определяет, **какой научный вопрос задаётся до поиска evidence, какой тип evidence способен на него ответить и какой downstream decision изменится от ответа**.

Каноническая последовательность проекта:

`Decision/use`
→ `Primary objective`
→ `Primary question`
→ scientific question type
→ question-specific eligibility
→ applicability / stakeholder / equity / logic-model checks when relevant
→ FINER / Review Necessity Gate
→ research route
→ `SEARCH_CONCEPT_CARD.md`
→ retrieval
→ later screening / appraisal / synthesis.

Search terms не определяют вопрос постфактум.

---

## 2. Главные правила

1. **Вопрос формулируется до систематического поиска.**
2. **Question type определяется до выбора study design.**
3. **Eligibility и search query — разные объекты.**
4. **Review question, synthesis question и study question могут различаться по ширине.**
5. **Broad question не означает, что все studies можно объединить в один pooled effect.**
6. **Primary objective должен быть один и явный; secondary/subquestions добавляются только когда они реально нужны.**
7. **Critical outcomes / target phenomenon задаются до просмотра результатов.**
8. **Benefits, harms и burden рассматриваются вместе, когда они decision-relevant.**
9. **Time задаётся в нужной форме: intervention/exposure duration, outcome horizon, follow-up/risk horizon и calendar/reference period не смешиваются.**
10. **Substantive scope changes после начала поиска логируются и проверяются на result-driven bias.**
11. **Scientific question не сужается автоматически под текущий equipment/application context, если это разрушает general evidence layer.**
12. **Application to target user оценивается отдельно от internal validity и общей evidence base.**

---

## 3. Intervention-effect questions

Для causal/comparative вопросов используется PICO/PICOT-логика с требуемой точностью только там, где variation может изменить decision или interpretation.

### Population
Определяет scientific target, а не просто sample, который случайно встретился в literature.

### Intervention
Название недостаточно. Когда decision зависит от деталей, операционализируются:
- dose/load;
- frequency;
- duration;
- delivery;
- supervision;
- progression;
- co-interventions;
- другие materially relevant компоненты.

### Comparator
Должен представлять реальную decision alternative.

### Outcome
Outcome priority:
1. critical;
2. important;
3. exploratory/mechanistic;
4. harms/burden.

Outcome обычно **не должен автоматически быть eligibility criterion** только потому, что он critical: иначе возникает риск outcome-reporting bias.

### Time
Отдельно различаются:
- intervention duration;
- outcome time horizon.

### Estimand
Для exact target treatment effect фиксируются:
- treatment A/B;
- population;
- variable + time;
- intercurrent events;
- strategy for each;
- population summary;
- adherence definition;
- primary/secondary estimands.

Assignment/program-policy effect, hypothetical/full-adherence effect и observed-completer contrast не считаются взаимозаменяемыми.

---

## 4. Harm / safety

`Harm/safety` — **cross-cutting domain**, а не один универсальный framework.

Маршрут определяется claim:

1. comparative harm effect → Intervention Effect;
2. frequency of harm → Frequency;
3. causal risk → Exposure/Etiology;
4. prognosis after event/condition → Prognosis;
5. stop/referral/professional guidance → Textual/Policy.

Редкие или long-latency harms могут требовать non-randomized evidence.

Отсутствие reported adverse events не равно доказанной безопасности.

---

## 5. Diagnostic accuracy

Для diagnostic questions фиксируются:

1. participants/target population;
2. index test;
3. target condition;
4. reference standard;
5. intended role;
6. thresholds;
7. setting/pathway;
8. target accuracy measures.

`Reference standard` не следует автоматически называть `gold standard`.

---

## 6. Measurement-property questions

Project framework: **C-P-I-MP-U** — внутренний engineering framework, не внешний universal standard.

1. Construct
2. Population
3. Instrument/protocol
4. Measurement property
5. Intended use/context

Construct != instrument.

Нужно различать intended use:
- group-level comparison;
- individual monitoring/progress;
- screening/classification;
- другие uses.

---

## 7. Prognosis and prediction

Различаются:

1. overall prognosis;
2. prognostic factor;
3. prediction model.

Для framing используется explicit PICOTS-like logic:
- Population;
- Index factor/model;
- Comparator if relevant;
- Outcome;
- Timing;
- Setting.

Timing включает:
- startpoint;
- prediction horizon.

**Prognostic factor != predictor of treatment effect.**

---

## 8. Effect modification / predictors of treatment effect

Canonical question:

> Does the effect of A versus B on O at T differ according to modifier M?

Обязателен явный treatment contrast.

Modifier types:
1. participant baseline;
2. intervention characteristic;
3. context;
4. methodological/study characteristic.

Для person-level personalization предпочтительны baseline/pre-treatment modifiers.

Не допускается:
- выводить interaction из того, что subgroup A significant, subgroup B non-significant;
- считать raw pre/post response variability доказательством true treatment-response heterogeneity;
- автоматически превращать prognostic factor в treatment-selection rule.

До сильного personalization claim нужны:
- pre-specified rationale;
- direct interaction evidence;
- preferably within-study participant-level evidence;
- replication/consistency;
- sensible scale/cut-points;
- practical magnitude;
- credibility assessment.

Effect modification и baseline-risk-driven absolute benefit differences — разные вещи.

---

## 9. Exposure / etiology / causal risk

Используется PEO или PECO в зависимости от того, нужен ли explicit contrast.

Нужно определить:
- exposure identity;
- dose/intensity;
- duration;
- frequency/pattern;
- timing/window;
- route/mode;
- measurement;
- context;
- temporality;
- important confounder classes.

Association/risk factor != cause automatically.

Arbitrary dichotomization continuous exposure следует избегать.

---

## 10. Mechanistic questions

Project framework: **MEC-Q** — внутренний, не universal standard.

Фиксируются:
1. phenomenon/outcome;
2. input/intervention/exposure;
3. target system;
4. entities/components;
5. hypothesized links;
6. organization/sequence;
7. critical uncertain links;
8. perturbation/prediction;
9. model/context;
10. competing/counteracting mechanisms;
11. practical claim;
12. explanation-vs-efficacy boundary.

Mechanistic evidence может объяснять и генерировать predictions, но не заменяет direct efficacy/outcome evidence.

Animal/cell evidence не переносится автоматически на human practical magnitude.

---

## 11. Qualitative questions

PICo — useful/default framework, но не универсально обязательный.

Обычно задаются:
- participants;
- phenomenon of interest;
- context;
- perspective/actor where relevant;
- experience/meaning/process.

Qualitative synthesis не должна автоматически сводиться к barrier/facilitator checklist.

---

## 12. Implementation questions

Различаются три класса:

### A. Determinants
Что помогает/мешает implementation?

Project framework: **ID-CAP**:
- Innovation;
- Determinant question;
- Context;
- Actors;
- Phase.

### B. Implementation outcomes
Как хорошо innovation реализуется?

Project framework: **IO-CARP**:
- Innovation/referent;
- Outcome;
- Context;
- Actor/unit;
- Reference/comparator/threshold;
- Phase/time.

Implementation outcomes не являются синонимами:
- acceptability;
- adoption;
- appropriateness;
- feasibility;
- fidelity;
- implementation cost;
- penetration;
- sustainability.

### C. Implementation-strategy effect
Causal question:
> Does strategy X improve implementation outcome Y vs Z/usual implementation?

Маршрут → Intervention Effect + implementation outcome.

---

## 13. Scoping / evidence mapping

Используется, когда objective:
- map evidence types;
- clarify concepts/definitions;
- map methods;
- identify factors/characteristics;
- prepare a focused review;
- identify knowledge gaps.

Default framework: **PCC**:
- Population;
- Concept;
- Context.

PCC может быть адаптирован, если objective требует иного.

Canonical chain:
`objective → question → PCC → eligibility → charting`.

Scoping map не заменяет focused effectiveness/safety review.

В текущем single-reviewer project допустимы **scoping-style evidence reconnaissance using JBI PCC principles**, но без claims о formal JBI-compliant scoping review, если нет independent duplicate screening/extraction.

---

## 14. Frequency questions

Current methodology authority:
**JBI endorsement → PERSyst**.

Legacy `CoCoPop` сохраняется только как historical mnemonic.

Различаются:
1. point prevalence;
2. period prevalence;
3. cumulative incidence;
4. incidence rate/person-time.

Нужно определить:
- target condition/event;
- case definition;
- target population;
- denominator / at-risk population;
- frequency estimand;
- calendar/reference time;
- risk/follow-up horizon;
- context/geography;
- structural comparability.

Frequency estimate не отвечает автоматически на causal question.

---

## 15. Mixed-methods questions

Mixed methods оправдан только когда **integration itself** нужна для decision/understanding.

### Convergent integrated
Quantitative + qualitative evidence отвечают на один broad phenomenon/question.

### Convergent segregated
Есть separate linked quantitative + qualitative questions; syntheses идут отдельно, затем integration.

Current JBI operational guidance в основном сосредоточена на convergent approaches.

Sequential/other MMSR → dedicated current-methodology check.

Mixed-methods primary study само по себе не делает review mixed-methods.

---

## 16. Textual / policy / expert evidence

Различаются:
1. narrative;
2. expert opinion;
3. policy/consensus guideline.

Подход нужен для claims типа:
- normative;
- procedural;
- policy;
- expert rationale;
- narrative/experiential.

Guideline recommendation != empirical proof of efficacy.

Textual stream и empirical effect stream сохраняются отдельно до decision synthesis, если нужны оба.

Version/jurisdiction/superseded status для policy/guideline sources обязательны.

---

## 17. Complex interventions and logic models

Intervention complexity рассматривается как dimensional.

Logic model/programme theory нужен, когда без него теряются:
- components/functions;
- mechanisms;
- implementation;
- context;
- proximal/intermediate/distal outcomes;
- unintended pathways;
- key uncertainties.

Не каждый node становится review question.

Logic model помогает:
- lump/split interventions;
- distinguish form vs function;
- distinguish theory failure vs implementation failure;
- route different uncertainties into different question modules.

Pre-synthesis model может обновляться post-synthesis, но version changes логируются.

---

## 18. Stakeholder / end-user input

Stakeholders помогают определить:
- relevance;
- outcomes;
- comparisons;
- burdens;
- context;
- decision priorities.

Они **не определяют empirical truth**.

Project rule:
> Values choose/weight the decision problem; evidence constrains the answer.

Для single-target-user decision project direct end-user input допустим как primary user perspective.

Не называть informal direct user input:
- formal PPI;
- consensus;
- Delphi;
- representative stakeholder panel.

Sensitive personal details не хранятся в public research repository.

---

## 19. Applicability and equity

Разделять:

### Applicability
Переносимость evidence на target population/context/application.

### Equity
Избежимые/несправедливые различия в access, burden, opportunity или distribution of effects.

### Heterogeneity
Просто различия между groups/studies.

PROGRESS-Plus используется как equity lens, а не механический subgroup checklist.

Underrepresentation означает uncertain applicability/evidence gap, а не доказательство равенства или различия effects.

---

## 20. Review necessity / FINER

До major deep-review stream вопрос проходит:

1. Feasible
2. Interesting / important
3. Novel
4. Ethical
5. Relevant

Дополнительно отдельно оценивается **answerability**.

Preliminary scan проверяет:
- existing reviews;
- ongoing reviews;
- search dates;
- applicability;
- methodological credibility;
- exact remaining gap.

Project routing statuses:

1. `PROCEED_FOCUSED`
2. `USE_EXISTING_SYNTHESIS`
3. `UPDATE_OR_SUPPLEMENT`
4. `SCOPING_FIRST`
5. `EVIDENCE_GAP`
6. `DEFER_LOW_VALUE`
7. `REFRAME`

Наличие review не означает автоматически STOP.
Возраст review сам по себе не определяет outdated status.

`No direct studies` → evidence gap, не `no effect`.

---

## 21. Search translation

Canonical separation:

`QUESTION_CARD.md`
→ что scientifically спрашивается.

`SEARCH_CONCEPT_CARD.md`
→ как потенциально eligible evidence будет retrieved.

Rules:

1. Eligibility concepts != mandatory search blocks.
2. Use smallest sufficient concept set.
3. Controlled vocabulary + free text.
4. OR within concept; AND between concepts.
5. Comparator и outcome часто не должны быть mandatory blocks.
6. Avoid NOT unless false-negative risk tested.
7. Prefer validated design filters where appropriate.
8. Arbitrary date limits need substantive justification.
9. Translate logic, not raw syntax, between databases.
10. Known-item testing is diagnostic, not proof of completeness.
11. Do not overfit to known studies.
12. Different evidence streams may need separate searches.
13. Exact source/interface/date/query/limits must be recorded.
14. Search vocabulary may evolve without changing scope.
15. Scientific scope change returns upstream to Question Card + viability gate.

Current project wording:
**PRESS-based self-audit — NOT independently peer reviewed**
unless independent peer review actually occurs.

---

## 22. Canonical operational artifacts

### `QUESTION_CARD.md` v2.0
Modular router containing:
- Core;
- conditional scientific modules;
- cross-cutting modules;
- FINER/Review Necessity Gate;
- search handoff.

### `SEARCH_CONCEPT_CARD.md` v1.0
Separate retrieval implementation card:
- inherited eligibility concepts;
- actual search blocks;
- omitted concepts;
- vocabulary;
- Boolean structure;
- filters/limits;
- exact source/interface/query/date;
- pilot checks;
- known-item checks;
- change log;
- PRESS-based self-audit.

These two artifacts are now the authoritative operational implementation of RES-01.

---

## 23. What RES-01 does NOT cover

RES-01 does not close:
- study-design validity;
- randomization/blinding;
- risk of bias;
- causal-adjustment methods;
- statistics;
- missing data;
- measurement validity execution;
- systematic-review execution;
- meta-analysis;
- certainty/GRADE;
- guideline appraisal;
- N-of-1 execution;
- Evidence-to-Decision;
- updating/versioning.

Those remain separate RES topics.

---

## 24. Source hierarchy used in revalidation

Primary/current methodology sources included:

1. Cochrane Handbook current release/change log and relevant chapters:
   - Ch 1–4;
   - Ch 10;
   - Ch 16–17;
   - Ch III/IV;
   - prognosis/DTA/QES handbooks.
2. Cochrane MECIR.
3. JBI Manual current online edition.
4. PERSyst via current JBI endorsement for prevalence/cumulative incidence.
5. COSMIN for measurement-property review framing.
6. ICH E9(R1) + FDA guidance for estimand concepts, used with explicit transferability caveat.
7. PRESS guideline for search-strategy review.
8. MRC 2021 complex-intervention framework.
9. Supporting peer-reviewed methodology where official manuals did not fully cover a point.

Version rule:
record overall manual release and chapter-level update/citation separately when they differ.

---

## 25. Confidence / status

### Established external methodology — HIGH
- question before search;
- question-type-specific framing;
- eligibility alignment;
- outcome/time prespecification;
- benefits + harms;
- estimands for exact target effects;
- stakeholder relevance;
- applicability/equity consideration where material;
- search downstream of question;
- transparent scope changes;
- effect-modifier prespecification;
- FINER/review necessity.

### Project operationalizations
Explicitly project-specific:
- C-P-I-MP-U;
- MEC-Q;
- ID-CAP;
- IO-CARP;
- modular Question Card router;
- project viability statuses;
- Search Concept Card implementation.

They operationalize established principles but are not represented as external universal standards.

---

## 26. Closure state

Content coverage audit: **PASSED**.  
Modular Question Card: **IMPLEMENTED**.  
Search Concept Card: **IMPLEMENTED**.  
Question ↔ Search handoff: **VERIFIED**.  
Final synthesis: **IMPLEMENTED**.  
Post-implementation consistency audit: **PASSED**.

Status: **CLOSED_FOR_PRACTICE**.

This closure means RES-01 is sufficiently complete for project use. It does not imply that adjacent methodology topics RES-02…RES-29 are revalidated or closed.

