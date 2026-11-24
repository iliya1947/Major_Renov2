# RES-03 — Randomization, allocation concealment и blinding

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как оценивать, действительно ли randomized trial получил преимущество рандомизации и насколько знание назначенной intervention могло исказить конкретный результат.

### Question type
Methodological / risk-of-bias.

### Critical outcomes
1. Correct distinction: random sequence generation vs allocation concealment vs blinding.
2. Correct interpretation of baseline imbalance.
3. Correct handling of impossible blinding in exercise trials.
4. Correct interpretation of ITT vs naive per-protocol/as-treated analyses.

### Closure criterion
Есть operational checklist, достаточный для оценки RCT в exercise science; missing-data и selective-reporting details остаются в отдельных topics.

---

## 1. Randomization — что она реально делает

При корректной рандомизации assignment не должен зависеть от известных или неизвестных prognostic factors.

Следствие:
- в среднем группы имеют одинаковый baseline prognosis;
- это защищает causal comparison от baseline confounding;
- конкретный небольшой trial всё равно может получить случайный baseline imbalance.

Randomization не означает:
- идеально одинаковые группы;
- отсутствие dropout;
- отсутствие measurement bias;
- отсутствие deviations from intervention;
- отсутствие selective reporting;
- достаточную sample size.

## 2. Sequence generation

Нужен процесс с реальным элементом случайности.

Приемлемые примеры:
1. computer-generated random numbers;
2. random-number tables;
3. genuinely random drawing process.

Не являются настоящей randomization:
1. alternation;
2. birth date;
3. day of admission;
4. predictable record number;
5. any deterministic rule.

### Restricted randomization

#### Blocking
Используется для поддержания balance group sizes.

Риск:
если block size фиксирован, известен и предыдущие assignments видны recruiter, будущая allocation может стать predictable.

Практический mitigation:
- varying/random block sizes;
- concealment from recruiters.

#### Stratification
Separate randomization inside strata defined by important prognostic variables.

Purpose:
улучшить balance важных baseline factors, особенно при modest sample sizes.

#### Minimization
Allocation algorithm стремится улучшить balance по заранее выбранным prognostic factors; обычно должен включать random element и concealment.

## 3. Allocation concealment

### Определение
Предотвращение знания **будущего назначения** до окончательного enrolment/assignment.

### Почему это критично
Если recruiter знает next assignment, он может сознательно или бессознательно:
- задержать enrolment;
- не включить конкретного participant;
- направить participant к желаемой группе.

Тогда сама random sequence перестаёт защищать от selection/confounding.

### Примеры хорошего concealment
1. central randomization;
2. secure web/telephone randomization after enrolment;
3. sequentially numbered, opaque, sealed envelopes при строгой реализации.

### Плохие варианты
1. open list;
2. transparent/unsealed envelopes;
3. predictable blocks;
4. allocation known before eligibility/enrolment finalization.

## 4. Concealment ≠ blinding

### Allocation concealment
- **до/в момент assignment**;
- защищает randomization process;
- предотвращает selective enrolment;
- принципиально возможно практически в любом randomized design.

### Blinding
- **после assignment**;
- скрывает received intervention от participants/personnel/assessors;
- уменьшает deviations, expectancy/behavioral effects и measurement bias;
- иногда физически невозможно.

Это разные механизмы bias control.

## 5. Blinding участников и personnel

В resistance-training trials participant обычно знает:
- какой exercise делает;
- какой load;
- сколько sets;
- идёт ли to failure;
- длинный или короткий ROM;
- supervised ли session.

Coach также почти всегда знает intervention.

Следовательно:
**participant/personnel blinding часто невозможно и это само по себе не делает trial невалидным.**

Нужно спросить:
1. Могло ли awareness вызвать deviations from intended intervention?
2. Были ли дополнительные co-interventions?
3. Могло ли ожидание влиять на outcome?
4. Отличались ли coaching/attention/encouragement между groups?

## 6. Outcome-assessor blinding

Даже когда participant/coach нельзя blind, assessor часто можно.

Особенно важно для outcomes с judgement:
- ultrasound image analysis;
- manual circumference;
- technique ratings;
- subjective performance scoring;
- imaging segmentation;
- questionnaire administration/interpretation.

Меньше риска, если outcome объективный и автоматизированный:
- machine-recorded external load;
- body mass on calibrated scale;
- some laboratory assays.

Но “objective” не всегда означает immune to bias:
- assessor может выбирать image region;
- exclude trials/reps;
- select time point;
- influence participant effort during test.

## 7. Blinding зависит от outcome

Risk of bias is **result-specific**, not simply “study blinded/unblinded”.

Один и тот же unblinded trial может иметь:
- low concern for objectively measured outcome;
- substantial concern for subjective pain/enjoyment outcome.

Поэтому label:
- single blind;
- double blind;
- open label

недостаточен.

Нужно знать:
- кто blind;
- к чему;
- когда;
- насколько knowledge могла изменить именно этот outcome.

## 8. Baseline imbalance

Randomized groups могут отличаться случайно.

Нельзя автоматически считать любой significant baseline difference доказательством failed randomization.

Повод для concerns:
1. множество сильных prognostic imbalances, маловероятных при chance;
2. implausibly perfect balance;
3. discrepancies suggesting manipulation;
4. baseline characteristics incompatible with reported randomization;
5. allocation methods that were predictable.

Baseline significance testing itself не является основным способом “проверить randomization”.

## 9. Intention-to-treat и effect of assignment

Для causal question:
> “каков эффект назначения intervention?”

Cochrane предпочитает analysis по принципу ITT:
1. analyse in randomized groups;
2. regardless of actual adherence;
3. ideally include all randomized participants.

Почему:
это сохраняет baseline advantage randomization.

### Naive per-protocol / as-treated
Может разрушить randomization, потому что post-randomization adherence/behavior связан с prognosis.

Пример:
если более мотивированные participants чаще выполняют high-volume program и analysis оставляет только adherent participants, observed superiority может отражать motivation/health differences.

## 10. Effect of assignment vs effect of adherence

Это разные estimands.

### Assignment effect
“Что будет, если людям назначить program A вместо B?”

Обычно ITT-like analysis.

### Adherence effect
“Что будет, если действительно следовать program A вместо B?”

Требует более сложных causal methods и дополнительных assumptions.

Нельзя автоматически использовать naive per-protocol как “истинный efficacy effect”.

## 11. Exercise-science-specific threats

### 11.1 Coaching intensity
Coach может непреднамеренно сильнее мотивировать intervention, которую считает superior.

### 11.2 Expectancy
Participant может ожидать больше gains от fashionable method.

### 11.3 Co-interventions
Sleep/nutrition/additional exercise may change differently after group assignment.

### 11.4 Testing
Unblinded tester может:
- дать больше encouragement;
- допустить чуть другой ROM;
- выбрать different endpoint.

### 11.5 Compliance
Different tolerability can cause differential adherence.

### 11.6 Contamination
Participants могут копировать элементы другой group.

## 12. Project checklist for randomized trials

### Randomization process
1. Was allocation sequence genuinely random?
2. Were restrictions/blocking described?
3. Could sequence become predictable?
4. Was allocation concealed until enrolment complete?
5. Who generated sequence?
6. Who enrolled participants?
7. Who assigned intervention?
8. Do baseline patterns suggest a randomization problem?

### Post-assignment awareness
9. Were participants aware?
10. Were coaches/providers aware?
11. Could awareness create differential deviations?
12. Were co-interventions balanced?

### Outcome measurement
13. Was assessor blinded?
14. If not, could knowledge plausibly influence outcome measurement?

### Analysis
15. What effect is being estimated: assignment or adherence?
16. Was analysis appropriate to that estimand?
17. Were post-randomization exclusions made?
18. Is “modified ITT” clearly defined rather than accepted by label?

## 13. Project rules

1. Never write “randomized = unbiased”.
2. Never equate allocation concealment with blinding.
3. Never penalize an exercise trial merely because participant blinding was impossible.
4. Judge whether lack of blinding can bias the **specific result**.
5. Treat outcome-assessor blinding as especially important for judgement-dependent measurements.
6. Preserve distinction between assignment effect and adherence effect.
7. Do not trust “double blind” without identifying who was actually blinded.
8. Do not use baseline p-values as a simplistic randomization validity test.

## 14. Confidence

### HIGH
- genuine random sequence + adequate concealment protect against systematic baseline allocation bias;
- concealment and blinding are distinct;
- concealment can generally be implemented even when blinding cannot;
- ITT preserves the randomization comparison for assignment effect;
- naive post-randomization exclusions/as-treated analyses can introduce bias;
- risk from lack of blinding is outcome- and mechanism-specific.

### PRACTICAL_HEURISTIC
- project RCT checklist above.

## 15. Sources

1. Cochrane Handbook for Systematic Reviews of Interventions, Chapter 8: Assessing risk of bias in a randomized trial. Current Handbook version 6.5.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-08

2. Cochrane RoB 2 framework referenced by Chapter 8.  
   https://www.riskofbias.info/

3. SPIRIT trial-protocol guidance: sequence generation, allocation concealment, implementation and blinding.  
   https://www.spirit-statement.org/

## 16. Next dependencies

- RES-04 — bias domains;
- RES-05 — confounding/causal inference;
- RES-10 — missing data;
- RES-11 — measurement;
- RES-18 — reporting/publication bias.
