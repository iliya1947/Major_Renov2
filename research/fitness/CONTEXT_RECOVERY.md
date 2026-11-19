# Context Recovery / Session Handoff

Этот файл — **вторая точка входа после `AGENT.md` при потере контекста чата, переходе в новый чат, смене модели или восстановлении работы после лимита контекста**.

Его задача — позволить восстановить рабочее состояние проекта без зависимости от истории ChatGPT.

---

## 1. Что это за проект

PR: **#5 — «Исследование физической подготовки: база знаний и рабочая карта»**  
Repository: `iliya1947/Major_Renov2`  
Working branch: `research/fitness-foundation`  
Base branch: `main`

Главная цель проекта:

1. построить достаточно полную и проверенную научную базу по физической подготовке;
2. только после этого оценить исходное состояние Ильи;
3. затем спроектировать программу для роста мышечной массы и силы;
4. адаптировать её под домашний инвентарь и реальные условия;
5. сделать выполнение устойчивым при СДВГ;
6. отслеживать результат и менять программу по данным, а не по догадкам.

**Сейчас финальную персональную тренировочную программу строить нельзя.**

---

## 2. Текущий исследовательский режим

Текущий этап: **Stage 2 — системное глубокое исследование после restart; Phase A methodology sufficient, переход к Phase B**.

Stage 0A, Stage 0B и Stage 1 normalization v1.0 сохранены как завершённые.

После Stage 2 restart старые RES/ANA findings остаются **legacy reconnaissance drafts**, если не были revalidated. Methodology Sufficiency Audit разрешает использовать RES-03…RES-29 как operational baseline без автоматической полной revalidation; это не превращает их в full revalidated findings.

Для topic, который выбран для новой глубокой revalidation, обязательная схема:

`granular passes → отдельный gap/audit pass → новый synthesis → CLOSED_FOR_PRACTICE`

Правила:

1. Один topic может занимать любое число PASS.
2. Один PASS должен иметь узкий scope.
3. Каждый PASS должен завершаться сохранением результата в репозиторий.
4. Каждый PASS фиксирует:
   - scope;
   - sources checked;
   - established findings;
   - unresolved issues;
   - next pass.
5. Нельзя закрывать topic только потому, что найден правдоподобный ответ.
6. `CLOSED_FOR_PRACTICE` разрешён только после отдельного audit pass и нового synthesis.
7. Старые марафонные conclusions нельзя автоматически считать повторно подтверждёнными.
8. История/summary ChatGPT не является авторитетным источником состояния проекта, если она конфликтует с репозиторием.

### Локальная идентичность ассистента

В рамках этой проектной линии рабочее имя ассистента — **Ника**. Роль: **фитнес-тренер академика и исследователь научной базы по физической подготовке**. Не заменять это имя глобальным именем модели и не смешивать Нику с Кирой (психолог, ассистент академика) или Мирой (координатор/программист другого проекта).

### Критический operational lesson: не запускать цепочку PASS одним заходом

Это правило появилось после **двух реальных сбоев**.

1. В предыдущем чате длинный исследовательский заход на ANA-12 завис примерно на полчаса: новые сообщения пользователя не обрабатывались, и выполнение пришлось вручную остановить.
2. 16.11.2026 после корректного завершения RES-02/PASS-06B фитнес-ассистент автоматически продолжил цепочку: PASS-06C → 07A → 07B → 08A → 08B → 08C → 08D → 09A → 09B, закрыл RES-02 и перешёл к RES-03. Это было признано повторением того же класса ошибки — слишком большой непрерывный рабочий заход.
3. Для очистки PR ветка была возвращена к последнему корректному post-PASS-06B состоянию:
   `fdbbe72c47d28cfa36373d6b0c73e5629b884247`
   и поверх него были заново применены только правила workflow/handoff.
4. Удалённые марафонные материалы PASS-06C и далее **не являются текущими валидированными результатами проекта**. Их нужно исследовать заново отдельными проходами; не восстанавливать их как завершённые только потому, что старые SHA могут существовать в истории GitHub.

Жёсткое правило:

1. Полнота topic не ограничивается — PASS может быть сколько угодно.
2. Ограничивается только размер одного непрерывного захода, **не глубина исследования**.
3. Один непрерывный рабочий заход по умолчанию = **один узкий законченный PASS или меньший блок**.
4. Узкий блок нужно исследовать **тщательно**, а не поверхностно. Нельзя превращать правило дробления в быстрый пролёт по множеству PASS.
5. Если PASS слишком большой для тщательной проработки за один устойчивый заход — дробить его ещё мельче **до начала или по ходу исследования**, сохраняя глубину каждого micro-block.
6. Критерий завершения блока — достаточное покрытие заявленного scope с источниками, ограничениями, противоречиями и unresolved gaps; формально заполненный файл сам по себе не означает завершённость.
7. После блока обязательно сохранить результат, обновить state-файлы и остановиться.
8. **Не выполнять следующий PASS автоматически**, даже если `Next pass` уже известен.
9. Пользовательское `...` = выполнить следующий один очевидный блок без подтверждения, затем снова остановиться.
10. Ошибка марафонского прогона 16.11.2026 состояла не только в отсутствии STOP: много PASS были пройдены одним заходом, что создало риск поверхностного покрытия и ложной завершённости. Этот режим запрещён.
11. **Не пытаться закрыть каноническую тему целиком за одно сообщение/один ход**, если это требует сокращать глубину. Число сообщений, PASS и micro-pass по одной теме не ограничено.
12. Если для максимального покрытия темы нужны дополнительные ходы, продолжать её столько раз, сколько требуется; дробление — штатный способ сохранить глубину, а не повод упрощать исследование.
13. Цель Stage 2 — не скорость прохождения списка, а **максимально полная и проверенная научная база без известных существенных пробелов**, на которой затем можно обоснованно оценить Илью и построить персональную программу массы + силы под реальные условия и СДВГ.

Короткий stop-condition:

`один continue → один глубоко проработанный сохранённый PASS/block → STOP`

---

## 3. Текущее состояние

Текущая рабочая область: **04 — Neurophysiology / Motor Learning / Phase B**.

Последняя закрытая тема: **ANA-01 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-02 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-03 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-04 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-05 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-06 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-07 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-08 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-09 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-10 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-11 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-12 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-13 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-14 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **ANA-15 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-01 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-02 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-03 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-04 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-05 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-06 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-07 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-08 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-09 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-10 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-11 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-12 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-13 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-14 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-15 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-16 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-17 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-18 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-19 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **PHY-20 — CLOSED_FOR_PRACTICE v2.0**.

Area 03 / normalized **PHY-01…PHY-20 — CLOSED_FOR_PRACTICE v2.0 for current project purpose**.

Последняя закрытая тема: **NEU-01 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **NEU-02 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **NEU-03 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **NEU-04 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **NEU-05 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **NEU-06 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **NEU-07 — CLOSED_FOR_PRACTICE v2.0**.

Последняя закрытая тема: **NEU-08 — CLOSED_FOR_PRACTICE v2.0**.

Следующая тема: **NEU-09 — Motor control — NOT STARTED**.

Phase A methodology:
- **PHASE_A_SUFFICIENT_TO_PROCEED** по audit от 2026-11-18;
- `RES-01 — question formulation` → **CLOSED_FOR_PRACTICE**;
- `RES-02 — study designs` → **SUFFICIENT_FOR_PHASE_A**; residual F-taxonomy deferred;
- `RES-03…RES-29` → legacy operational baseline + trigger-based revalidation, не обязательная последовательная deep revalidation.

### Завершено в текущем revalidation cycle

- `RES-01 — question formulation` → **CLOSED_FOR_PRACTICE** после `PASS-16`.
- `RES-02 — study designs` → granular base до PASS-06F7, **SUFFICIENT_FOR_PHASE_A**.
- В RES-02 текущей валидной базой считаются:
  - `PASS-01` — scope and study-design taxonomy;
  - `PASS-02` — randomized experimental designs;
  - `PASS-03` — nonrandomized/quasi-experimental designs;
  - `PASS-04` — observational analytic designs;
  - `PASS-05A` — self-controlled observational designs;
  - `PASS-05B` — descriptive/frequency designs;
  - `PASS-06A` — diagnostic accuracy + measurement-property study structures.
- Прежний широкий `PASS-06B_prognosis_prediction_designs.md` по явному решению пользователя **SUPERSEDED FOR CURRENT REVALIDATION** и сохраняется только как исторический материал.
- Новая granular revalidation prognosis/prediction начата.
- Завершены:
  - `PASS-06B1` — prognosis core taxonomy and longitudinal structure;
  - `PASS-06B2` — longitudinal cohort structures for prognosis;
  - `PASS-06B3` — routine-care data sources for prognosis;
  - `PASS-06B4` — outcome-dependent sampling in prognosis;
  - `PASS-06B5` — prediction-model development study structures;
  - `PASS-06B6` — internal validation structures;
  - `PASS-06B7` — internal-external and external validation structures;
  - `PASS-06B8` — model recalibration, updating and extension structures;
  - `PASS-06B9` — prediction-model impact and utility study structures;
  - `PASS-06B10` — prediction-performance estimand architecture;
  - `PASS-06B11` — prediction under treatment and management;
  - `PASS-06B12` — dynamic and landmark prediction structures;
  - `PASS-06B13` — prediction-branch integration audit;
  - `PASS-06B14` — diagnostic prediction models vs diagnostic test accuracy;
  - `PASS-06B15` — competing risks / recurrent events / multistate prediction;
  - `PASS-06B16` — post-deployment lifecycle and continual updating;
  - `PASS-06B17` — final prediction-branch gap audit after B14–B16;
  - `PASS-06B18` — multicategory and ordinal prediction-model structures;
  - `PASS-06B19` — multiple-outcome, composite and joint-risk prediction structures;
  - `PASS-06B20` — diagnostic outcome-dependent sampling and absolute-probability recovery;
  - `PASS-06B21` — repeat final prediction-branch gap audit after PASS-06B18…B20;
  - `PASS-06B22` — current continuous-value prediction and estimation equations;
  - `PASS-06B23` — final prediction-branch closure/gap audit after PASS-06B22;
  - `PASS-06B24` — prediction-branch structural synthesis.

Последний содержательный PASS:

`research/fitness/passes/04_neurophysiology_motor_learning/NEU-08/PASS-02_closure_audit_and_synthesis.md`

PASS commit: `188e752d0ed0e2caa03ad13100a607bbe78f7b0b`  
Canonical finding commit: `47937107270d498ecfcf6f5ebe71b5b1403e9ecf`

NEU-08/PASS-02 = **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**.

Closure result:

1. exact Area 04 Section 8 coverage = **10/10 PASS**;
2. central fatigue remains distinct from mental fatigue and one-marker interpretations;
3. peripheral fatigue remains distinct and can dominate despite relatively preserved activation;
4. VA is method-/task-dependent and is not a literal CNS-capacity percentage;
5. motor-unit firing responses remain non-uniform;
6. recruitment compensation remains task constrained;
7. coordination/coherence changes are heterogeneous;
8. proprioceptive impairment is submodality specific rather than global;
9. fatigue-related technique changes are real without one universal failure/injury pattern;
10. task dependency is the organizing rule;
11. recovery follows multiple outcome-specific clocks;
12. consistency with PHY-10, NEU-05 and NEU-06 confirmed;
13. no project-relevant blocker remains;
14. first canonical `NEU-08_neuromuscular_fatigue.md` created.

### Следующая задача

**NEU-09/PASS-01 — Motor control content revalidation.**

NEU-09 maps to Area 04 Section 9 (16 exact items). After the next one block, save state and STOP.

---

## 4. Что читать после открытия этого файла

Для быстрого восстановления:

1. `AGENT.md` — operating contract and purpose gate.
2. `RESEARCH_QUEUE.md` — самый свежий next action.
3. Последний завершённый PASS текущей темы.
4. `WORKFLOW.md` — общий процесс только при необходимости.
5. `EVIDENCE_POLICY.md` / `RESEARCH_TEMPLATE.md` — перед новым научным блоком.

Для текущей точки открыть:

`research/fitness/passes/04_neurophysiology_motor_learning/NEU-08/PASS-02_closure_audit_and_synthesis.md`

Затем выполнить только записанный выше **NEU-09/PASS-01 motor control content revalidation** и остановиться перед следующим блоком.

---

## 5. Протокол восстановления после потери чата

Если новый чат не знает контекст:

1. Найти PR `iliya1947/Major_Renov2#5`.
2. Проверить, что рабочая ветка — `research/fitness-foundation`.
3. Открыть `research/fitness/AGENT.md` **первым**.
4. Открыть этот файл.
5. Открыть `RESEARCH_QUEUE.md`.
6. Проверить последний завершённый PASS и его раздел `Next pass`.
6. Если этот файл и `RESEARCH_QUEUE.md` расходятся:
   - не гадать;
   - считать более свежий commit/research-state авторитетным;
   - проверить последние PASS-файлы;
   - сразу исправить этот handoff-файл.
7. Не восстанавливать задачу по старым Project chats, memory summary или предположениям, если repo state доступен.
8. После восстановления продолжать с уже сохранённой точки, не повторяя закрытые PASS без явной причины.

---

## 6. Что нельзя делать после восстановления

1. Не начинать с персональной программы.
2. Не перескакивать к ANA/PHY и следующим областям, пока dependency-order не разрешает это.
3. Не считать legacy findings валидированными только потому, что они существуют.
4. Не смешивать scientific taxonomy, risk-of-bias appraisal и статистические детали без необходимости текущего PASS.
5. Не закрывать RES-02 до последующих branches, gap audit и нового synthesis.
6. Не заменять первичные/авторитетные методологические источники пересказами, если актуальный source доступен.
7. Не додумывать отсутствующий контекст из старых сообщений.

---

## 7. Обязательное обновление этого файла

**После каждого завершённого PASS или смены текущего research-state этот файл нужно обновлять.**

Минимально обновить:

1. `Последний содержательный PASS`;
2. его commit;
3. список завершённых PASS текущего topic;
4. `Следующая задача`;
5. при необходимости текущую область/topic/status.

Этот файл должен оставаться коротким operational snapshot, а не превращаться в дубль `WORKFLOW.md`.

Если возникает конфликт между:
- историей чата;
- старым summary;
- старым handoff;
- текущим состоянием репозитория,

**авторитет имеет фактическое состояние рабочей ветки и наиболее свежие служебные файлы репозитория.**
