# Рабочий процесс кабинета Киры

## 1. Назначение

Постоянный кабинет обслуживает полный цикл работы Киры, но **приватные данные никогда не сохраняются в GitHub**.

## 2. Stage 0 — архитектура кабинета

Цель:

- зафиксировать identity/workspace lock;
- разделить generic science и private individualized work;
- создать recovery, evidence, error и model-update protocols;
- исключить drift цели и роли.

Статус после текущего архитектурного апгрейда: **COMPLETE_FOR_CURRENT_SCOPE**.

## 3. Stage 1 — квалификация

### Phase A — methodology

Статус: **CLOSED_FOR_PRACTICE**.

### Phase B — core psychological science

Статус: **COMPLETE_FOR_CURRENT_SCOPE**.

### Phase C — applied and clinical interfaces

Статус: **COMPLETE_FOR_CURRENT_SCOPE**.

CLN: **COMPLETE_FOR_CURRENT_SCOPE** after CLN-03.  
NDEV: **COMPLETE_FOR_CURRENT_SCOPE** after NDEV-02.  
BHC: **COMPLETE_FOR_CURRENT_SCOPE** after BHC-02.  
REL: **COMPLETE_FOR_CURRENT_SCOPE** after REL-02.  
DEC: **COMPLETE_FOR_CURRENT_SCOPE** after DEC-02.  
SAF: **COMPLETE_FOR_CURRENT_SCOPE** after SAF-02.  
ETH: **COMPLETE_FOR_CURRENT_SCOPE** after ETH-02.  
ETH-01: **CLOSED_FOR_PRACTICE v1.0**.  
ETH-02: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.  
Phase D entry dependency: **satisfied by INT-01 cross-domain contradiction audit**.

Canonical NDEV storage: `research/psychology/qualification/21_neurodevelopmental_conditions/`.
Canonical BHC storage: `research/psychology/qualification/22_behavior_change_and_intervention_science/`.
Canonical REL storage: `research/psychology/qualification/23_interpersonal_relationships_attachment_conflict_communication/`.
Canonical DEC storage: `research/psychology/qualification/19_decision_strategy_and_prediction/`.
Canonical SAF storage: `research/psychology/qualification/24_safety_crisis_referral_thresholds/`.
Canonical ETH storage: `research/psychology/qualification/25_ethics_individualized_inference_ai_analysis/`.

### Phase D — integration

Статус: **COMPLETE_FOR_CURRENT_SCOPE**.

INT-01 — cross-domain contradiction audit: **CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS**.  
INT-02 — evidence-to-individual transfer rules: **CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS**.  
INT-03 — analytic error taxonomy: **CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS**.  
INT-04 — reusable reasoning checklists: **CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS**.  
INT-05 — final sufficiency audit: **COMPLETE_FOR_CURRENT_SCOPE v1.0 — 24/24 PASS — GO FOR STAGE 2**.  
Blocking canonical contradictions: **0**.  
Stage 1 qualification: **COMPLETE_FOR_CURRENT_SCOPE**.  
Canonical integration storage: `research/psychology/qualification/26_integration/`.

Sequence:

1. cross-domain contradiction audit — **complete**;
2. evidence-to-individual transfer rules — **complete**;
3. analytic error taxonomy — **complete**;
4. reusable reasoning checklists — **complete**;
5. final sufficiency audit — **complete**.

## 4. Правило qualification block

Один сигнал `...` / continue:

1. восстановить cabinet state;
2. подтвердить concrete dependency;
3. заполнить Question Card;
4. проверить актуальные источники;
5. отделить facts / interpretations / hypotheses;
6. проверить contradictions и applicability;
7. сохранить один законченный block;
8. обновить state;
9. проверить privacy текущего diff;
10. STOP.

Не запускать следующий block автоматически.

### Post-qualification continuation rule

После INT-05 generic qualification больше не продолжается по инерции.

Для private Stage 2:

`one continue / "..." -> one bounded private analytic unit -> model update only if warranted -> no private repo write -> STOP`.

Для requalification:

`one explicit trigger -> one generic qualification/revalidation block -> state update -> privacy check -> STOP`.

## 5. Stage 2 — применение квалификации к приватной модели

Статус: **READY_TO_BEGIN**.

Первый private task:

**baseline reconciliation текущей приватной психологической модели против завершённой qualification stack**.

Этот этап происходит **только в приватном ChatGPT-проекте**.

Generic protocol:

`purpose -> minimal proposition -> claim type -> provenance -> direct/proxy -> measurement -> population prior -> applicability -> individual evidence -> alternatives -> contradictions -> dependence -> prediction/test -> evidence level -> confidence -> stakes/use permission -> model update / no update -> monitoring/revision`.

Canonical transfer rules: `qualification/26_integration/INT-02_evidence_to_individual_transfer_provenance_applicability_confidence_model_update.md`.

Operational checklist layer: `qualification/26_integration/INT-04_reusable_reasoning_checklists_fast_routing_deep_gate_escalation_pre_response.md`.

Default private reasoning route: `C0 preflight -> minimum triggered checklist(s) -> deep gate if triggered -> C12 final pre-response audit`.

Для значимого изменения использовать `PRIVATE_MODEL_UPDATE_CARD.md` как структуру, но **не коммитить заполненную карточку**.

## 6. Stage 3 — longitudinal model maintenance

В приватном проекте:

- отслеживать новые наблюдения;
- проверять предсказания существующих гипотез;
- снижать confidence при противоречии;
- объединять/разделять механизмы только по evidence;
- удалять устаревшие гипотезы;
- отличать изменение состояния от изменения устойчивой архитектуры.

GitHub хранит только generic правила этого процесса.

## 7. Stage 4 — requalification

Возвращаться к научной revalidation, если:

1. изменилась официальная классификация/стандарт;
2. ключевой источник исправлен/retracted;
3. новая evidence меняет canonical rule;
4. приватная работа выявила generic knowledge gap;
5. Phase D обнаружила противоречие;
6. новый downstream question требует отдельного домена/метода.

Private trigger всегда преобразуется в generic scientific question перед записью в repo.

## 8. Stop conditions

Нельзя продолжать предметную работу, если:

- role/workspace lock не восстановлен;
- control files противоречат друг другу;
- источник необходим, но не проверен;
- planned repo write требует private data;
- purpose/dependency нового блока не установлен;
- предыдущий block не сохранён и state не обновлён.

## 9. Контрольная формула

**Identity → state → purpose → question → evidence → alternatives → applicability → conclusion → uncertainty → save → STOP.**
