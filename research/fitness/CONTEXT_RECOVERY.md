# Context Recovery / Session Handoff

Этот файл — **третья точка входа после неизменяемой карты кабинета в PR #5 и `AGENT.md`** при потере контекста чата, переходе в новый чат, смене модели или восстановлении после лимита контекста.

Его задача — восстановить **операционное состояние квалификации Ники**, не переопределяя её роль.

---

## 1. Что это за рабочее пространство

PR: **#5 — постоянный рабочий кабинет Ники**  
Repository: `iliya1947/Major_Renov2`  
Working branch: `research/fitness-foundation`  
Base branch: `main`

Локальная идентичность уже зафиксирована в PR #5:

- ассистент: **Ника**;
- роль: **фитнес-тренер академика**;
- текущий этап: **квалификация Ники**;
- научный поиск / PASS / findings / evidence — инструменты квалификации;
- PR #5 — постоянный `open + draft` кабинет, не merge-кандидат.

Главная цель текущего этапа:

1. довести научно-практическую квалификацию Ники до достаточного уровня;
2. после этого отдельно оценить исходное состояние академика;
3. затем спроектировать персональную систему для роста мышечной массы и силы;
4. адаптировать её под домашний инвентарь и реальные условия;
5. сделать выполнение устойчивым с учётом СДВГ;
6. сопровождать, отслеживать результат и корректировать систему по данным.

**Сейчас финальную персональную тренировочную программу строить нельзя: сначала квалификация, затем отдельная персональная оценка.**

---

## 2. Текущий квалификационный режим

Текущий этап: **квалификация Ники / Stage 2 — системная научно-практическая база после restart; Phase A methodology sufficient, Phase B продолжается**.

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

Роль здесь **не восстанавливается из этого файла заново**: она уже зафиксирована неизменяемой картой PR #5.

- **Ника**;
- **фитнес-тренер академика**;
- текущий этап — **квалификация Ники**.

Научная работа в этом каталоге — средство квалификации, а не отдельная роль «исследователя».

Не смешивать Нику с Кирой (психология) или другими ассистентами. Внешний ChatGPT-проект не переопределяет локальную роль PR #5.

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
13. Цель Stage 2 — не скорость прохождения списка, а **достаточная и проверенная научно-практическая квалификация Ники без известных существенных пробелов**, на которой затем можно обоснованно провести персональную оценку академика и построить программу массы + силы под реальные условия и СДВГ.

Короткий stop-condition:

`один continue → один глубоко проработанный сохранённый PASS/block → STOP`

---

## 3. Текущее состояние

**Этап:** квалификация Ники как фитнес-тренера.  
**Phase:** Stage 2 / Phase B.  
**Текущий qualification domain:** **05 — Bioenergetics**.

Крупные dependencies:

- Anatomy — **CLOSED_FOR_PRACTICE v2.0**;
- Physiology — **CLOSED_FOR_PRACTICE v2.0**;
- Neurophysiology / Motor Learning — **CLOSED_FOR_PRACTICE v2.0**;
- Bioenergetics — **RESEARCHING as part of qualification**.

Текущая точка:

- BIO-01 — **CLOSED_FOR_PRACTICE v2.0**;
- BIO-02 — **CLOSED_FOR_PRACTICE v2.0**;
- BIO-03 — **CLOSED_FOR_PRACTICE v2.0**;
- BIO-04 — **CLOSED_FOR_PRACTICE v2.0**;
- BIO-05 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 5 closure **8/8 PASS**;
- BIO-06 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 6 closure **10/10 PASS**;
- BIO-07 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 7 closure **10/10 PASS**;
- BIO-08 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 8 closure **10/10 PASS**;
- BIO-09 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 9 closure **9/9 PASS**;
- BIO-10 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 10 closure **9/9 PASS**;
- BIO-11 — **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**; PASS-01 exact Section 11 coverage **10/10 at content/scope level**;
- **CURRENT NEXT: BIO-11/PASS-02 — Closure audit and synthesis.**

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

`research/fitness/passes/05_bioenergetics/BIO-11/PASS-01_metabolic_fatigue_limiting_factors_content_revalidation.md`

PASS commit: `8938b7902be0296fe8b4ca1a6a67e76fdc3583ab`

BIO-11/PASS-01 = **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**.

Content result:

1. exact Area 05 Section 11 coverage = **10/10 at content/scope level**;
2. no content-level blocker was found;
3. fatigue retained as task-specific, multi-mechanistic and not reducible to one metabolite;
4. PCr depletion retained as a high-power/repeated-bout contributor without equating it to ATP depletion or complete fatigue diagnosis;
5. low glycogen can impair exercise capacity in some tasks, but is not a universal short-set failure mechanism;
6. Pi retained as a major fatigue-relevant metabolite, while no universal human Pi failure threshold is authorized;
7. ionic disturbance retained as a multi-ion excitability/homeostasis problem rather than a K+-only switch;
8. severe acidosis can contribute to force/power loss, but H+/pH is not a universal sole fatigue cause;
9. metabolic disturbance can express through E–C/Ca2+ mechanisms; detailed ownership remains PHY-10;
10. O2 delivery, peripheral extraction/distribution and mitochondrial utilization remain distinct;
11. systemic O2 delivery can be a major/primary limiter in maximal aerobic contexts, while mitochondrial capacity is important but not sufficient alone;
12. heat and dehydration are distinct interacting stressors; no universal dehydration or temperature threshold is retained;
13. the dominant metabolic limiter can change by task, starting state, environment and time within the same task;
14. BIO-11 remains **not CLOSED_FOR_PRACTICE** pending independent PASS-02 audit;
15. canonical BIO-11 finding and final BIO11 evidence-ledger rows are intentionally not created before closure audit.

### Следующая задача

**BIO-11/PASS-02 — Closure audit and synthesis.**

BIO-11 is **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING** after PASS-01. Start PASS-02 only after the next user continue signal; one signal = one saved PASS/block → STOP.

---

## 4. Что читать после открытия этого файла

К моменту открытия этого файла уже должны быть прочитаны:

1. неизменяемая карта кабинета в PR #5;
2. `AGENT.md`.

Дальше для быстрого восстановления:

1. `RESEARCH_QUEUE.md` — самый свежий next action;
2. последний завершённый PASS текущей темы;
3. фактический HEAD ветки;
4. `RESEARCH_ORDER.md` — dependency order;
5. `WORKFLOW.md` — общий процесс только при необходимости;
6. `EVIDENCE_POLICY.md` / `RESEARCH_TEMPLATE.md` — перед новым квалификационным научным блоком.

Для текущей точки открыть:

`research/fitness/passes/05_bioenergetics/BIO-11/PASS-01_metabolic_fatigue_limiting_factors_content_revalidation.md`

Затем при следующем пользовательском continue выполнить только записанный выше **BIO-11/PASS-02 — Closure audit and synthesis** и остановиться перед следующим блоком.

---

## 5. Протокол восстановления после потери чата

Если новый чат не знает контекст:

1. Найти и открыть PR `iliya1947/Major_Renov2#5`.
2. Прочитать неизменяемую карту кабинета и установить: **Ника → фитнес-тренер академика → текущий этап квалификация → PR #5 постоянный кабинет**.
3. Проверить, что рабочая ветка — `research/fitness-foundation`.
4. Открыть `research/fitness/AGENT.md`.
5. Открыть этот файл.
6. Открыть `RESEARCH_QUEUE.md`.
7. Проверить фактический HEAD, последний завершённый PASS и его `Next pass`.
8. Если state-файлы расходятся:
   - не переопределять роль;
   - не гадать о current state;
   - считать более свежий фактический branch-state авторитетным для operational state;
   - проверить последние PASS-файлы;
   - исправить handoff/state.
9. Не восстанавливать роль или задачу по старым Project chats, memory summary или предположениям, если PR/repo state доступны.
10. После восстановления продолжать с сохранённой точки, не повторяя закрытые PASS без явной причины.

---

## 6. Что нельзя делать после восстановления

1. Не начинать с персональной программы до завершения достаточной квалификации и отдельной персональной оценки.
2. Не перескакивать к ANA/PHY и следующим областям, пока dependency-order не разрешает это.
3. Не считать legacy findings валидированными только потому, что они существуют.
4. Не смешивать scientific taxonomy, risk-of-bias appraisal и статистические детали без необходимости текущего PASS.
5. Не закрывать RES-02 до последующих branches, gap audit и нового synthesis.
6. Не заменять первичные/авторитетные методологические источники пересказами, если актуальный source доступен.
7. Не додумывать отсутствующий контекст из старых сообщений.

---

## 7. Обязательное обновление этого файла

**После каждого завершённого PASS или смены текущего qualification-state этот файл нужно обновлять.**

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
