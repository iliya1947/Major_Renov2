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

Статус: **IN PROGRESS**.

CLN: **COMPLETE_FOR_CURRENT_SCOPE** after CLN-03.  
NDEV: **COMPLETE_FOR_CURRENT_SCOPE** after NDEV-02.  
BHC: **COMPLETE_FOR_CURRENT_SCOPE** after BHC-02.  
REL: **COMPLETE_FOR_CURRENT_SCOPE** after REL-02.  
DEC: **COMPLETE_FOR_CURRENT_SCOPE** after DEC-02.  
Current domain: SAF — **IN PROGRESS**.  
SAF-01: **CLOSED_FOR_PRACTICE v1.0**.  
Next block: SAF-02 — safety management and continuity.

Canonical NDEV storage: `research/psychology/qualification/21_neurodevelopmental_conditions/`.
Canonical BHC storage: `research/psychology/qualification/22_behavior_change_and_intervention_science/`.
Canonical REL storage: `research/psychology/qualification/23_interpersonal_relationships_attachment_conflict_communication/`.
Canonical DEC storage: `research/psychology/qualification/19_decision_strategy_and_prediction/`.
Canonical SAF storage: `research/psychology/qualification/24_safety_crisis_referral_thresholds/`.

### Phase D — integration

После Phase C:

1. cross-domain contradiction audit;
2. evidence-to-individual transfer rules;
3. analytic error taxonomy;
4. reusable reasoning checklists;
5. final sufficiency audit.

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

## 5. Stage 2 — применение квалификации к приватной модели

Этот этап происходит **только в приватном ChatGPT-проекте**.

Generic protocol:

`observation -> candidate explanations -> contradiction check -> generic evidence -> individual evidence -> inference -> confidence -> model update / no update`.

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
