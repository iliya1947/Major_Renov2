# Context Recovery / Session Handoff

Этот файл — **первая точка входа при потере контекста чата, переходе в новый чат, смене модели или восстановлении работы после лимита контекста**.

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

Текущий этап: **Stage 2 — системное глубокое исследование после restart**.

Stage 0A, Stage 0B и Stage 1 normalization v1.0 сохранены как завершённые.

После Stage 2 restart старые RES/ANA findings считаются **legacy reconnaissance drafts**, пока соответствующая тема не пройдёт новую granular revalidation.

Обязательная схема для каждого topic:

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

---

## 3. Текущее состояние

Область: **13 — методология исследований**.

### Завершено

- `RES-01 — question formulation` → **CLOSED_FOR_PRACTICE** после `PASS-16`.
- `RES-02 — study designs` → **RESEARCHING**.
- В RES-02 завершены:
  - `PASS-01` — scope and study-design taxonomy;
  - `PASS-02` — randomized experimental designs;
  - `PASS-03` — nonrandomized/quasi-experimental designs;
  - `PASS-04` — observational analytic designs;
  - `PASS-05A` — self-controlled observational designs;
  - `PASS-05B` — descriptive/frequency designs;
  - `PASS-06A` — diagnostic accuracy + measurement-property study structures;
  - `PASS-06B` — prognosis + prediction study structures.

Последний содержательный PASS:

`research/fitness/passes/13_research_methodology/RES-02/PASS-06B_prognosis_prediction_designs.md`

Commit PASS-06B:

`3f6fe06f0949754b69cc58f7b24a29285bc74cec`

### Следующая задача

**RES-02 / PASS-06C — mechanistic study structures**

Scope следующего PASS:

1. human experimental physiology;
2. laboratory mechanistic studies;
3. mediation/pathway evidence;
4. acute mechanistic perturbation structures;
5. animal/in-vivo translational evidence;
6. in-vitro/ex-vivo mechanistic evidence;
7. mechanistic triangulation;
8. граница mechanism evidence vs intervention-effect evidence;
9. limits of mechanistic inference and acute→chronic extrapolation;
10. project structural records and taxonomy rules;
11. unresolved gaps → следующий PASS.

---

## 4. Что читать после открытия этого файла

Для быстрого восстановления:

1. `RESEARCH_QUEUE.md` — проверить самый свежий next action.
2. Последний завершённый PASS-файл — понять, что уже покрыто и какие gaps оставлены.
3. `WORKFLOW.md` — только если нужно восстановить общий процесс/этап.
4. `EVIDENCE_POLICY.md` — перед новым научным поиском.
5. `RESEARCH_TEMPLATE.md` — каркас нового глубокого PASS.
6. `PR_MAP.md` — если потеряна навигация по структуре PR.

Для текущей точки открыть:

`research/fitness/passes/13_research_methodology/RES-02/PASS-06A_diagnostic_measurement_designs.md`

и затем начать новый файл:

`research/fitness/passes/13_research_methodology/RES-02/PASS-06B_...`

---

## 5. Протокол восстановления после потери чата

Если новый чат не знает контекст:

1. Найти PR `iliya1947/Major_Renov2#5`.
2. Проверить, что рабочая ветка — `research/fitness-foundation`.
3. Открыть **этот файл первым**.
4. Открыть `RESEARCH_QUEUE.md`.
5. Проверить последний завершённый PASS и его раздел `Next pass`.
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
