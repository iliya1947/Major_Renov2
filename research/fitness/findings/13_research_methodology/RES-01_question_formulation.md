# RES-01 — Формулировка исследовательского вопроса / PICO(T)

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 1. Зачем эта тема нужна

До поиска исследований нужно точно определить, **какой вопрос мы пытаемся решить и какое решение изменится от ответа**.

Плохо сформулированный вопрос создаёт систематические ошибки ещё до оценки качества исследований:
- поиск становится хаотичным;
- критерии включения меняются постфактум;
- удобные outcomes получают больший вес;
- разные популяции/дозы/сравнения смешиваются;
- механизм подменяет клинический/тренировочный результат;
- результат исследования может быть корректным, но не отвечать нашему вопросу.

Cochrane прямо рассматривает формулировку вопроса как исходный шаг, который определяет eligibility criteria, поиск, сбор данных, синтез и представление результатов.

## 2. Основной установленный принцип

### HIGH

**Исследовательский вопрос должен быть сформулирован до систематического поиска и оценки результатов.**

Основания:
- Cochrane Handbook v6.5, Chapter 2: well-formulated questions guide eligibility, search, data collection, synthesis and presentation.
- Chapter 3: PICO and study-design eligibility should be pre-specified; grouping decisions should по возможности приниматься независимо от знания результатов включённых исследований.
- NSCA current CSCS content outline explicitly includes PICOT as the approach to asking answerable questions.

Практический вывод для проекта:
> Ни одна тема Stage 2 не начинается со «что говорит интернет про X».  
> Сначала создаётся Question Card.

## 3. PICO и PICOT

### P — Population / Participants / Problem

Нужно определить, **для кого** ожидается применимость ответа.

Для exercise science обычно важны:
- возраст;
- пол, если есть основания ожидать effect modification;
- тренировочный статус;
- здоровье/патология;
- baseline strength/fitness;
- тип активности;
- setting;
- иногда energy status или другие релевантные характеристики.

Population должна быть:
- достаточно узкой, чтобы исследования отвечали сопоставимому вопросу;
- достаточно широкой, чтобы не отсечь релевантные данные без причины.

Нельзя автоматически переносить:
- elite athletes → detrained adults;
- untrained participants → advanced lifters;
- rehabilitation populations → healthy adults;
- acute laboratory sample → long-term home-training context.

### I — Intervention

Нужно операционализировать **что именно делается**.

Для тренировок недостаточно написать «силовые тренировки». Возможные обязательные параметры:
- exercise/mode;
- load/intensity;
- sets/reps;
- proximity to failure;
- frequency;
- session/week volume;
- ROM;
- tempo/velocity;
- duration of intervention;
- supervision;
- co-interventions.

Если два исследования называют intervention одинаково, но dose сильно различается, они могут отвечать разным вопросам.

### C — Comparator

Comparator — **относительно чего оценивается эффект**.

Возможные comparators:
- no training;
- usual activity;
- другая нагрузка;
- другая частота;
- другое упражнение;
- matched-volume condition;
- matched-effort condition;
- baseline/within-subject comparison, если дизайн это допускает.

Без ясного comparator вопрос «что лучше?» часто бессодержателен.

### O — Outcomes

Outcome должен соответствовать реальной цели.

Примеры разных outcomes:
- maximal strength;
- hypertrophy;
- muscle thickness;
- lean mass;
- power;
- muscular endurance;
- adherence;
- pain/adverse events;
- sleep;
- subjective enjoyment.

Критически важно не подменять outcome proxy-показателем:
- EMG ≠ hypertrophy;
- acute lactate ≠ long-term muscle growth;
- acute MPS ≠ автоматически chronic hypertrophy;
- soreness ≠ training effectiveness.

Cochrane рекомендует заранее определять **важные** outcomes и учитывать benefits и harms.

### T — Time

NSCA использует PICOT, явно добавляя Time.

GRADE отмечает, что time часто уже встроено в intervention/outcome, но отдельная фиксация времени практически полезна.

Для exercise science time может означать:
- duration of intervention;
- follow-up;
- acute response window;
- washout in crossover study;
- detraining period.

Разница между:
- acute response after one session;
- 4-week adaptation;
- 12-week adaptation;
- long-term maintenance
может полностью изменить смысл вывода.

## 4. PICO(T) не надо насильно использовать для любого вопроса

PICO особенно естественен для вопросов об эффектах intervention.

Но наш проект содержит разные типы вопросов:

### 4.1 Intervention/effect
Пример структуры:
- у кого;
- какая training strategy;
- против какой;
- какой outcome;
- за какой период.

Это классический PICO(T).

### 4.2 Harm/safety
Нужны:
- population;
- exposure/intervention;
- adverse outcome;
- time;
- comparator, если доступен.

Для редких harms RCT может быть неподходящим источником.

### 4.3 Exposure/risk
Например:
- sleep deprivation;
- low energy availability;
- heat exposure.

Здесь «I» логичнее мыслить как Exposure.

### 4.4 Prognostic/predictive
Вопрос:
- предсказывает ли baseline characteristic будущий outcome?

Здесь нужен predictor + population + outcome + time, а не искусственное «intervention vs control».

### 4.5 Diagnostic/measurement
Вопрос:
- насколько хорошо test/measure отражает целевой construct или выявляет состояние?

Нужны:
- index test;
- reference standard;
- population;
- target condition/construct.

### 4.6 Mechanistic
Вопрос:
- какой механизм связывает stimulus и response?

Нужны:
- system;
- perturbation;
- mechanism/intermediate variables;
- outcome;
- ограничения causal inference.

Механистический ответ не должен автоматически превращаться в recommendation.

### 4.7 Qualitative / implementation / adherence
Вопросы:
- какие barriers/facilitators сообщают люди?
- почему intervention не выполняется?
- как реализуется программа?

Здесь могут быть важнее:
- population;
- phenomenon;
- context;
- experience/process,
чем искусственный comparator.

### Практический вывод

**Question type определяется раньше study design.**  
После этого выбираются designs, способные ответить именно на такой вопрос.

## 5. Review question vs synthesis question vs study question

Cochrane различает:

1. **Review PICO** — общий scope и eligibility.
2. **PICO конкретного synthesis** — точное сравнение, которое синтезируется.
3. **PICO включённого исследования** — что реально изучалось в конкретной работе.

Это важно для нас.

Пример логики:
- общий вопрос может быть «как proximity to failure влияет на hypertrophy?»;
- отдельный synthesis может сравнивать 0–1 RIR vs ≥3 RIR при matched volume;
- отдельные studies могут использовать разные loads, populations и definitions of failure.

Нельзя считать, что широкая тема автоматически означает, что все studies можно свалить в один эффект.

## 6. Outcomes: заранее, но не как ловушка eligibility

В Cochrane intervention reviews outcomes обычно **не используют как основной eligibility criterion**: иначе study может быть исключено просто потому, что конкретный outcome не опубликован, что усиливает outcome-reporting bias.

Для нашего проекта правило:

1. Outcomes фиксируются заранее как цель synthesis.
2. Мы ищем studies подходящего intervention/comparison/design.
3. Нельзя автоматически исключать study только потому, что авторы не сообщили удобный для нас outcome, если оно иначе релевантно вопросу.
4. Отсутствие outcome data само по себе является информацией о доступности evidence.
5. Для узких вопросов, где measurement конкретного outcome является сущностью вопроса, исключение может быть оправдано и должно быть объяснено.

## 7. Broad vs narrow question

Слишком широкий вопрос:
- повышает heterogeneity;
- смешивает разные populations/interventions;
- делает практический ответ расплывчатым.

Слишком узкий:
- может оставить почти пустую evidence base;
- снизить generalizability;
- создать ложную точность.

Практический принцип:
**ширина вопроса определяется решением, которое нужно принять.**

Если decision:
> «Нужен ли вообще resistance training для hypertrophy?»
вопрос может быть широким.

Если decision:
> «Как прогрессировать с фиксированными 6 кг, когда 15 повторов уже лёгкие?»
нужен гораздо более узкий вопрос.

## 8. Outcome priority

Для каждого вопроса outcomes делятся на:

1. **Critical** — непосредственно меняют решение.
2. **Important** — важны, но не определяют решение в одиночку.
3. **Exploratory/mechanistic** — помогают понять механизм.
4. **Harms/burden** — нежелательные эффекты, fatigue, pain, time, adherence cost.

Для training decisions нельзя оценивать только benefit.

Например, две программы могут дать одинаковую hypertrophy, но различаться:
- по fatigue;
- времени;
- боли;
- adherence;
- equipment requirements.

Тогда practical decision различается даже при одинаковом primary outcome.

## 9. Pre-specification и post-hoc изменения

Cochrane допускает, что по ходу review могут обнаружиться важные различия, которых не было видно заранее. Но изменения нужно документировать.

Для нашего проекта:

### Разрешено
- уточнить definition;
- добавить важный subgroup/comparison;
- расширить source type, если исходный design не отвечает harm/long-term question;
- изменить grouping при объективной причине.

### Нельзя делать молча
- менять outcome, потому что первоначальный не дал красивого результата;
- менять comparator после просмотра effect sizes;
- исключать неудобную population постфактум;
- менять threshold под найденные данные.

Все substantive изменения → `DECISIONS.md` или finding changelog.

## 10. Question Card — обязательный протокол проекта

Перед глубоким поиском по каждому topic ID заполнять:

### A. ID и тема
Например: `PHY-07`.

### B. Decision
Какое практическое решение должен информировать ответ?

Если decision отсутствует, возможно, вопрос исследуется как фундаментальный mechanism. Это указывается явно.

### C. Question type
Одно или несколько:
- intervention/effect;
- harm/safety;
- mechanism;
- exposure/risk;
- prognosis/prediction;
- diagnostic/measurement;
- qualitative/implementation.

### D. Population/context
Кому/где должен быть применим ответ?

### E. Intervention / exposure / phenomenon
Что именно изучается?

### F. Comparator
Если comparator имеет смысл.

### G. Critical outcomes
Что реально определит ответ?

### H. Important secondary outcomes / harms
Что может изменить practical choice?

### I. Time
Acute / weeks / months / long-term / follow-up.

### J. Eligible evidence designs
Какие designs способны ответить этому типу вопроса?

### K. Planned grouping / moderators
Например:
- trained vs untrained;
- high vs low load;
- supervised vs home;
- male/female only if evidence/relevance justifies;
- matched vs unmatched volume.

### L. Applicability constraints
Что сделает study indirect для Ильи?

### M. Stop/closure criterion
Что нужно узнать, чтобы topic был `CLOSED_FOR_PRACTICE`, даже если академически литература бесконечна?

## 11. Специальное правило для нашего проекта: “Decision before evidence”

До поиска формулируется:

> **Если результат окажется A — что мы сделаем? Если B — что изменится?**

Если никакой возможный ответ не меняет:
- программу;
- безопасность;
- interpretation;
- measurement;
- research priority,

то глубокий поиск может иметь низкий practical priority.

Это не означает, что фундаментальная наука бесполезна. Для foundational topics decision может быть:
> «какая causal model будет использоваться при интерпретации последующих intervention studies».

## 12. Что считать достаточной формулировкой

Вопрос готов к поиску, если:

1. ясно, какой тип вопроса;
2. ясно, какой outcome важен;
3. population/context не неопределённо широки;
4. intervention/exposure конкретизированы настолько, насколько требует decision;
5. comparator указан или осознанно не нужен;
6. timeframe задан, если он меняет смысл;
7. известно, какие study designs релевантны;
8. заранее известны ключевые grouping/moderators;
9. можно объяснить, что сделает evidence direct vs indirect;
10. можно объяснить, какой ответ изменит решение.

## 13. Практические следствия для дальнейшего исследования

С этого момента:

1. Каждый `findings/<AREA>/<TOPIC>.md` начинается с Question Card.
2. Search terms выводятся из question concepts, а не наоборот.
3. Outcomes фиксируются до просмотра результатов.
4. Acute/mechanistic evidence не подменяет chronic outcome evidence.
5. Study design выбирается по типу вопроса.
6. Изменения scope документируются.
7. В `EVIDENCE_LEDGER.md` заносится только claim, который отвечает заранее определённому вопросу.
8. Applicability to Ilya оценивается отдельно от internal validity.

## 14. Уровень уверенности

### HIGH
- well-formulated question before search;
- pre-specification;
- PICO for intervention-effect questions;
- important/critical outcomes and harms;
- alignment between question, eligibility, synthesis and search;
- documentation of post-hoc changes.

### HIGH/MODERATE
- PICOT as practical extension for exercise science: NSCA explicitly uses PICOT; GRADE notes time can often be embedded in PICO, so separate T is useful but not conceptually mandatory.

### PRACTICAL_HEURISTIC
- mandatory project Question Card;
- “Decision before evidence” test;
- closure criterion for each topic.

Эти heuristics являются нашей инженерной реализацией established methodology, а не отдельными опубликованными universal standards.

## 15. Источники

1. Cochrane Handbook for Systematic Reviews of Interventions, Version 6.5 (2024), Chapter 2: Determining the scope of the review and the questions it will address.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-02

2. Cochrane Handbook, Chapter 3: Defining the criteria for including studies and how they will be grouped for the synthesis.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-03

3. Cochrane Handbook, Chapter 4: Searching for and selecting studies.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04

4. GRADE Book, official current resource, Principles for assessing certainty of interventions (modified 2025-08-21).  
   https://book.gradepro.org/guideline/principles-for-assessing-the-certainty-of-interventions

5. GRADE Book — Overview of the GRADE approach / question-type specific evidence.  
   https://book.gradepro.org/guideline/overview-of-the-grade-approach

6. GRADE Evidence-to-Decision framework — question formulation.  
   https://book.gradepro.org/guideline/introduction-to-the-evidence-to-decision-frameworks

7. NSCA Certification Handbook, effective 2025-10-01, CSCS Detailed Content Outline: Scientific Research and Statistics — PICOT approach to asking answerable questions.  
   https://www.nsca.com/globalassets/certification/certification-pdfs/nsca-certification-handbook.pdf

8. PRISMA 2020 checklist / EQUATOR Network — explicit objectives/questions and pre-specified eligibility reporting.  
   https://equator-network.org/reporting-guidelines/prisma/prisma-checklist.html

## 16. Что ещё не относится к RES-01

Следующие темы исследуются отдельно:
- RES-02 study designs;
- RES-03 randomization/allocation/blinding;
- RES-04 bias;
- RES-05 causal inference;
- RES-15/16 systematic reviews/meta-analysis;
- RES-19 certainty/GRADE;
- RES-28 evidence-to-decision.

RES-01 закрывает **формулировку вопроса**, а не всю методологию.
