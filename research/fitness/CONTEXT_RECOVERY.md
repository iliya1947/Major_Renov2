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
- BIO-11 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 11 closure **10/10 PASS**;
- BIO-12 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 12 closure **13/13 PASS**;
- BIO-13 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 13 closure **10/10 PASS**;
- BIO-14 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 14 closure **7/7 PASS**;
- BIO-15 — **CLOSED_FOR_PRACTICE v2.0**; exact Section 15 closure **7/7 PASS**;
- **CURRENT NEXT: BIO-16/PASS-01 — Training adaptations content revalidation.**

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

`research/fitness/passes/05_bioenergetics/BIO-15/PASS-02_closure_audit_and_synthesis.md`

PASS commit: `dfc3294f999dc0a897a6d448876a5d83cd7251f1`

BIO-15/PASS-02 = **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**.

Closure result:

1. exact Area 05 Section 15 coverage = **7/7 PASS**;
2. PASS-01 audit checks = **35/35 RESOLVED**;
3. no BIO-15 project-relevant blocker remains;
4. VO2max retained as integrated whole-body oxygen-cascade capacity rather than a complete endurance-performance score;
5. VO2peak retained as highest observed test VO2 and non-equivalent to automatically confirmed VO2max;
6. fractional utilization retained as a context-dependent descriptive construct rather than a universally strong independent performance determinant;
7. LT/VT/GET/RCP/CP/CS/MLSS retained as related but method-defined constructs rather than one interchangeable threshold;
8. CP vs MLSS pooled difference is not retained as an individual correction factor;
9. exercise economy retained as task-context oxygen/energy cost and separated from VO2max and mechanical efficiency;
10. economy retained as speed/workload, mode, environment, equipment and fatigue-state dependent;
11. 1% treadmill incline is not retained as a universal overground-equivalence correction;
12. strength training can improve running economy in selected endurance contexts, but current evidence is heterogeneous and includes null RCT evidence;
13. mitochondrial content/function remain non-equivalent; ET/HIT/SIT can all increase mitochondrial content;
14. mitochondrial adaptation retained as important but insufficient by itself for VO2max/performance;
15. capillarization retained as trainable but metric dependent; capillary density alone does not define total microvascular adaptation;
16. central and peripheral adaptations retained as potentially coexisting and non-equivalent to current rate limitation;
17. elite-athlete systemic O2-delivery limitation is not generalized to all populations;
18. current sex-specific evidence is treated conservatively; no universal sex-specific central/peripheral model is retained;
19. oxidative metabolism retained as mechanistically relevant to resistance-set recovery;
20. direct evidence in resistance-trained men/women shows whole-body VO2max is only a weak predictor of within-set fatigue/between-set recovery in tested tasks;
21. local oxidative/PCr-recovery physiology and whole-body VO2max remain non-equivalent;
22. canonical `BIO-15_aerobic_capacity_economy.md` created;
23. evidence ledger `BIO15-01…BIO15-10` finalized;
24. BIO-15 = **CLOSED_FOR_PRACTICE v2.0**.

### Следующая задача

**BIO-16/PASS-01 — Training adaptations content revalidation.**

BIO-15 is **CLOSED_FOR_PRACTICE v2.0** after PASS-02. Start BIO-16 only after the next user continue signal; one signal = one saved PASS/block → STOP.

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

`research/fitness/passes/05_bioenergetics/BIO-15/PASS-02_closure_audit_and_synthesis.md`

Затем при следующем пользовательском continue выполнить только записанный выше **BIO-16/PASS-01 — Training adaptations content revalidation** и остановиться перед следующим блоком.

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
