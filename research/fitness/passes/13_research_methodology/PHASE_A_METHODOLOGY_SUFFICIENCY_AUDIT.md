# Phase A — Methodology Sufficiency Audit

Дата: 2026-11-18  
Статус: **PHASE_A_SUFFICIENT_TO_PROCEED**  
Назначение: определить, достаточно ли текущего методологического слоя для перехода к substantive fitness research, не требуя энциклопедического закрытия всей методологии.

## 1. Purpose gate

Phase A существует не для исчерпывающей классификации исследовательских методов, а для того, чтобы Ника могла надёжно:

1. формулировать fitness research questions;
2. выбирать релевантный тип evidence;
3. оценивать primary studies;
4. оценивать systematic reviews/meta-analyses;
5. оценивать guidelines/position stands;
6. различать bias, uncertainty, indirectness и practical significance;
7. переносить evidence на Илью без необоснованных выводов;
8. понимать, когда нужна дополнительная специализированная методологическая проверка.

Критерий прохождения Phase A: remaining methodology gaps не должны блокировать эти функции.

## 2. Материалы, проверенные в этом audit

Проверены текущие управляющие и методологические файлы:

- `AGENT.md`;
- `RESEARCH_ORDER.md`;
- `areas/13_research_methodology.md`;
- `EVIDENCE_POLICY.md`;
- `QUESTION_CARD.md`;
- `DECISION_CARD.md`;
- `SOURCE_STATUS_LOG.md`;
- `EVIDENCE_LEDGER.md`;
- current granular RES-01 / RES-02 state;
- legacy findings `RES-03…RES-29`, включая их Decision, Critical outcomes, Closure criterion, project rules, confidence, source anchors и next dependencies.

Этот audit **не является claim-by-claim scientific revalidation каждого legacy finding**. Его вопрос уже: требуется ли такая полная revalidation до начала Phase B.

## 3. Что уже revalidated достаточно глубоко

### RES-01 — question formulation

Статус: `CLOSED_FOR_PRACTICE`.

Есть canonical `QUESTION_CARD.md` с маршрутизацией intervention, diagnostic, measurement, prognosis, prediction, exposure/etiology, mechanism, qualitative, implementation, mixed-methods, textual/policy и другими вопросами.

### RES-02 — study designs

Granular база включает:

- randomized experimental designs;
- nonrandomized/quasi-experimental;
- observational analytic;
- self-controlled observational;
- descriptive/frequency;
- diagnostic/measurement;
- prognosis/prediction;
- mechanistic/explanatory;
- N-of-1/SCED routing;
- sequential-randomization structures;
- qualitative branch;
- mixed-methods branch;
- selected neighboring cross-method families.

Prediction, mechanistic, qualitative и mixed-methods branches уже прошли собственные audits/syntheses. F-branch была расширена дальше необходимого для fitness dependency; remaining F taxonomy не является Phase-A blocker.

**Вывод:** для распознавания того, что конкретный study design может и не может установить, текущая база более чем достаточна для перехода дальше.

## 4. Core methodological functions required before Phase B

Ниже legacy topics оцениваются не как полностью revalidated findings, а как operational prerequisites.

| RES | Функция | До Phase B | Решение |
|---|---|---|---|
| RES-03 | randomization / allocation / blinding | нужна | operational baseline sufficient; recheck on material use |
| RES-04 | risk of bias | нужна | operational baseline sufficient; recheck tool/version when applied |
| RES-05 | confounding / causal inference | нужна | operational baseline sufficient; advanced methods on demand |
| RES-06 | sampling / external validity | нужна | operational baseline sufficient |
| RES-07 | power / multiplicity | нужна | operational baseline sufficient |
| RES-08 | descriptive / inferential statistics | нужна | operational baseline sufficient |
| RES-09 | effect sizes / uncertainty | нужна | operational baseline sufficient |
| RES-10 | missing data / dropout | нужна | operational baseline sufficient |
| RES-11 | reliability / validity / responsiveness | нужна | operational baseline sufficient |
| RES-12 | exercise measurement pitfalls | нужна | baseline sufficient; tool-specific validation belongs to TST/use case |
| RES-13 | acute proxies | нужна | baseline sufficient and directly fitness-relevant |
| RES-14 | acute vs chronic inference | нужна | baseline sufficient and directly fitness-relevant |
| RES-15 | systematic reviews | нужна | operational baseline sufficient |
| RES-16 | meta-analysis | нужна | operational baseline sufficient |
| RES-17 | heterogeneity | нужна | operational baseline sufficient |
| RES-18 | publication/reporting bias | нужна | operational baseline sufficient |
| RES-19 | certainty / GRADE | нужна | operational baseline sufficient |
| RES-20 | guideline appraisal | нужна | operational baseline sufficient |
| RES-26 | evidence hierarchy by question | нужна | already functionally integrated in RES-01/02 + Evidence Policy; no separate blocker |

### Why no blanket deep revalidation is required first

Каждый из RES-03…RES-20 legacy drafts уже содержит:

1. конкретную decision function;
2. critical outcomes;
3. operational closure criterion;
4. project rules/checklists;
5. confidence separation;
6. authoritative methodological source anchors;
7. границы того, что требует более глубокой специализированной проверки.

Для Phase A задача — не сертифицировать каждый методологический текст как вечный финальный трактат, а иметь надёжный framework, позволяющий распознать, **когда конкретная методологическая деталь materially меняет fitness conclusion**. Этот framework уже есть.

При встрече с исследованием, где решение зависит от более узкой methodological detail, соответствующий RES topic проверяется заново по актуальной версии источников в момент применения.

## 5. Remaining RES topics — trigger-based, not Phase-A blockers

| RES | Тема | Триггер для deep revalidation |
|---|---|---|
| RES-21 | Network meta-analysis | встретился decision-relevant NMA / ranking / indirect comparison |
| RES-22 | Individual response / responders | начинается персонализация, responder claims или treatment-effect heterogeneity |
| RES-23 | Dose-response inference | PHY/PRO/NUT вопрос зависит от dose curve, threshold или diminishing returns |
| RES-24 | Practical significance | effect must be converted into an actual decision threshold |
| RES-25 | Conflicting evidence | высококачественные источники materially расходятся |
| RES-27 | N-of-1 | планируется персональный reversible experiment |
| RES-28 | Evidence-to-Decision | перед значимой персональной рекомендацией; `DECISION_CARD.md` уже существует |
| RES-29 | Updating/versioning/retractions | ongoing maintenance; `SOURCE_STATUS_LOG.md` already implements the core process |

RES-26 отдельной deep revalidation до Phase B не требует: question-specific hierarchy уже встроена в current routing.

## 6. Deferred RES-02 F-branch

Не являются prerequisites для перехода в Phase B:

- NGT / RAND-UCLA full crosswalk;
- exhaustive consensus-method taxonomy;
- дальнейшие neighboring design/development families только ради completeness;
- systems-method taxonomy без конкретного downstream use;
- другие F-branch gaps, если они не встречены в decision-relevant fitness evidence.

Если такой design реально встретится и окажется важным для вывода, он исследуется локально перед использованием.

## 7. Existing operational safeguards

Phase A уже имеет рабочие механизмы:

1. `QUESTION_CARD.md` — формулировка вопроса и route до поиска;
2. `EVIDENCE_POLICY.md` — evidence rules;
3. `EVIDENCE_LEDGER.md` — provenance/certainty tracking;
4. `DECISION_CARD.md` — evidence-to-personal-decision bridge;
5. `SOURCE_STATUS_LOG.md` — corrections/retractions/version tracking;
6. granular RES-01/02 — question/design routing;
7. legacy RES-03…RES-29 — operational checklists and specialized fallback knowledge.

Этого набора достаточно, чтобы начать substantive domains и возвращаться к методологии только тогда, когда она действительно нужна.

## 8. Phase-A decision

**PHASE_A_SUFFICIENT_TO_PROCEED.**

Это означает:

1. Phase B больше не блокируется полной revalidation `RES-03…RES-29`.
2. `RES-02/PASS-06F8` не выполняется сейчас.
3. RES-02 не объявляется "исчерпывающе закрытым по всей мировой taxonomy"; вместо этого его текущая база считается **SUFFICIENT_FOR_PHASE_A**.
4. Legacy RES-03…RES-29 не получают ложный статус full revalidated; они становятся **operational baseline + trigger-based revalidation**.
5. Любая methodology revalidation после этого должна иметь конкретный fitness dependency.
6. Следующая область по `RESEARCH_ORDER.md`: **ANA — Anatomy**.

## 9. Next block

**Phase B / ANA-01 — Anatomical terminology / planes / axes / movement terms.**

Purpose:
создать однозначный язык для последующей анатомии, биомеханики, техники и описания движений.

После сохранения этого audit следующий блок автоматически не запускать.
