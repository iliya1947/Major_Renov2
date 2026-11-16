# RES-02 — Дизайны исследований и какие вопросы они способны решать

> Этот файл — legacy synthesis предыдущего марафонного прохода. Его conclusions не считаются заново подтверждёнными до granular revalidation + gap/audit + нового synthesis.

Статус: **LEGACY DRAFT — REVALIDATION IN PROGRESS**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Определять для каждого research question, какие designs являются релевантными, какие дают наиболее прямой ответ и какие ограничения нельзя «исправить статистикой».

### Question type
Методологический/meta-research.

### Population/context
Exercise science, sports science, health/fitness research, с приоритетом вопросов strength/hypertrophy/safety/adherence.

### Critical outcomes
1. Correct matching of question → design.
2. Correct causal limits of each design.
3. Correct handling of exercise-specific designs.
4. Avoiding universal “evidence hierarchy” misuse.

### Closure criterion
Есть практическая design-selection matrix, достаточная для последующих topics; более детальные bias/causal/statistical issues вынесены в RES-03+.

---

## 1. Главный принцип

### HIGH

**Нет одного “лучшего дизайна вообще”. Есть дизайн, подходящий или неподходящий для конкретного вопроса.**

Для:
- intervention effects;
- harms;
- diagnosis/measurement;
- prognosis/exposure;
- mechanism;
- implementation/experience

нужны разные evidence paths.

GRADE прямо рассматривает соответствующий дизайн по типу вопроса: например diagnostic accuracy и prognosis/exposures часто по природе требуют observational evidence; Cochrane отдельно показывает, что rare/long-term harms могут быть плохо видны в RCT и требовать non-randomized evidence.

Практическое правило проекта:
> Question type → target estimand/outcome → appropriate design → bias assessment.

Не наоборот.

## 2. Randomized controlled trial — parallel-group

### Что делает хорошо
При корректной randomization, allocation, follow-up и analysis RCT позволяет лучше всего из стандартных designs контролировать baseline confounding при оценке causal effect **назначенной intervention**.

Особенно полезен для:
- training program A vs B;
- high vs low load;
- failure vs non-failure;
- supplement vs placebo;
- different exercise prescription;
- intervention efficacy.

### Что не гарантирует
Randomization не устраняет автоматически:
- attrition bias;
- nonadherence;
- contamination;
- measurement bias;
- reporting bias;
- poor intervention fidelity;
- small sample/imprecision;
- poor external validity;
- bad outcome choice.

### Exercise-science limitations
1. Participants и coaches обычно не могут быть blinded к training intervention.
2. Sample sizes часто малы.
3. Interventions могут отличаться сразу по нескольким variables.
4. Training experience может сильно влиять на response.
5. Duration может быть короткой относительно slow adaptations.
6. “Randomized” не означает “directly applicable to Ilya”.

### Практический статус
**Preferred design for many causal intervention-benefit questions when feasible.**

---

## 3. Randomized crossover trial

Каждый participant получает несколько conditions в разной randomized sequence и тем самым частично служит собственным control.

### Сильные стороны
1. Снижает влияние stable between-person differences.
2. Может требовать меньшей sample для same precision.
3. Полезен для acute/reversible effects.

### Хорошие exercise examples
- acute caffeine effect;
- different warm-up;
- rest interval;
- acute exercise order;
- pre-workout nutrition;
- acute technique/biomechanical condition.

### Главная проблема
**Carryover.**

Cochrane прямо указывает, что crossover не подходит, когда intervention вызывает permanent/long-lasting modification.

Поэтому для:
- hypertrophy;
- strength adaptation over weeks;
- tendon adaptation;
- motor learning that persists

обычный crossover часто принципиально плох или требует очень сложного design/washout, который может быть непрактичен.

### Другие проблемы
- period effects;
- inadequate washout;
- inappropriate unpaired analysis;
- dropout across periods.

### Практический статус
**Сильный дизайн для temporary/reversible acute effects; часто неподходящий для chronic training adaptations.**

---

## 4. Within-subject / split-body randomized design

В exercise science встречается вариант, где разные limbs/body parts одного человека получают разные intervention.

### Сильные стороны
1. Контролирует многие stable person-level factors:
   - genetics;
   - diet;
   - sleep;
   - systemic hormonal environment;
   - baseline lifestyle.
2. Может увеличить precision при локальных outcomes.
3. Особенно полезен для:
   - unilateral hypertrophy;
   - local strength;
   - local tendon/muscle adaptations.

### Ограничения
1. Outcomes внутри одного человека correlated и требуют paired analysis.
2. Возможны cross-education и systemic spillover.
3. Нельзя применять для truly whole-body outcomes.
4. Side dominance/asymmetry могут влиять.
5. Некоторые interventions невозможно изолировать по limb.

### Практический статус
**Очень полезен для локальных adaptations, если intervention реально локализуем и analysis учитывает pairing.**

Cross-education как конкретный threat будет оцениваться в NEU/RES when relevant.

---

## 5. Cluster randomized trial

Randomized не individuals, а groups/clusters.

Примеры:
- classes;
- gyms;
- teams;
- clinics;
- coaching groups.

### Зачем
- intervention delivered at group level;
- contamination between participants would otherwise be likely.

### Ограничение
Individuals внутри cluster не independent. Analysis должен учитывать clustering.

### Для нашего проекта
Редко будет центральным design, но релевантен:
- adherence/coaching interventions;
- gym/community programs;
- public-health physical activity programs.

---

## 6. Factorial / multi-arm randomized designs

### Factorial
Позволяет одновременно исследовать несколько factors/interventions.

Например:
- high vs low volume;
- creatine vs placebo;
в одном 2×2 design.

### Возможности
1. Efficiency.
2. Interaction testing.
3. Several comparisons.

### Ограничения
1. Interaction assumptions/interpretation.
2. Multiple comparisons.
3. Complex dose combinations.
4. Common control group нельзя статистически “дублировать” без учета dependency.

### Multi-arm trials
Полезны для dose-response и нескольких training variants.

---

## 7. Non-randomized intervention studies

Это studies, где intervention есть, но allocation не randomized.

### Когда они нужны
Cochrane отмечает:
- иногда вопрос невозможно или нецелесообразно решать RCT;
- rare/long-term harms;
- real-world implementation;
- interventions, где randomization infeasible/ethical constraints.

### Главная проблема
**Confounding.**

Люди, выбравшие/получившие intervention A, могут систематически отличаться от B ещё до intervention.

Statistical adjustment может помочь только с measured/confidently modeled confounders; unknown/unmeasured confounding остаётся.

### Важный Cochrane principle
Оценивать не только label “cohort/case-control”, а конкретные design features:
- prospective planning;
- assignment mechanism;
- timing;
- comparator;
- confounder measurement;
- follow-up.

### Практический статус
**Может давать полезную causal evidence, но обычно требует более сильных assumptions и тщательного risk-of-bias analysis, чем randomized intervention evidence.**

---

## 8. Prospective cohort

Participants классифицируются по exposure/characteristics и наблюдаются вперед во времени.

### Хорош для
- prognosis;
- natural exposure;
- incidence;
- long-term outcomes;
- training habits;
- physical activity and health outcomes;
- injury risk factors;
- supplement/use patterns when randomization unavailable.

### Сильные стороны
1. Temporal ordering лучше cross-sectional.
2. Можно измерить incidence.
3. Несколько outcomes для one exposure.

### Ограничения
1. Confounding.
2. Selection bias.
3. Loss to follow-up.
4. Exposure can change.
5. Association ≠ causal effect automatically.

### Практический статус
**Сильный observational design для temporal/prognostic/exposure questions; causal claims требуют assumptions.**

---

## 9. Retrospective cohort

Cohort определяется из уже существующих records/data.

### Сильные стороны
- быстрее;
- дешевле;
- может охватывать large sample/long period.

### Ограничения
- data were not collected for current question;
- exposure/outcome definitions may be imperfect;
- missing confounders;
- coding errors;
- selection issues.

### Практический статус
Полезен для real-world/rare/long-term questions, но качество зависит от data provenance and design.

---

## 10. Case-control

Selection начинается с outcome:
- cases have outcome;
- controls do not;
потом сравнивается prior exposure.

### Хорош для
- rare outcomes;
- long latency;
- initial safety/risk investigation.

### Сильные стороны
- efficient for rare events;
- can study multiple exposures.

### Ограничения
- control selection is critical;
- recall bias;
- selection bias;
- confounding;
- usually estimates odds ratio rather than incidence directly.

### Exercise relevance
Может быть полезен для rare serious injury/medical events, но обычно не центральный design для ordinary hypertrophy programming.

---

## 11. Cross-sectional study

Exposure and outcome measured at one time point.

### Хорош для
- prevalence;
- descriptive patterns;
- associations;
- hypothesis generation.

### Ограничение
Temporal order often unknown.

Поэтому:
> “люди, которые тренируются чаще, имеют больше muscle mass”
не показывает, что frequency вызвала muscle mass.

Possible explanations:
- reverse causation;
- selection;
- training history;
- diet;
- genetics;
- confounding.

### Практический статус
**Полезен для description/association, слаб для causal training prescription.**

---

## 12. Ecological study

Unit = group/population, not individual.

### Возможности
- population-level patterns;
- policy/environment associations;
- hypothesis generation.

### Главная проблема
Ecological fallacy:
group-level relation may not hold at individual level.

### Наш проект
Низкий priority, кроме public-health context.

---

## 13. Before–after / single-group intervention

Measure before and after intervention without concurrent control.

### Может показать
- participant changed over time.

### Не может уверенно показать
- change caused by intervention.

Threats:
- learning;
- regression to mean;
- maturation;
- spontaneous change;
- seasonal effects;
- concurrent behavior;
- measurement drift.

### Exercise-specific trap
Beginner strength often improves rapidly from:
- skill/familiarization;
- return from detraining;
- repeated testing.

Without comparator, attributing all gain to one programming detail is unsafe.

### Практический статус
Useful for feasibility/personal monitoring, weak for general causal efficacy.

---

## 14. Interrupted time series / repeated time series

Много measurements before and after intervention.

### Лучше simple pre–post, потому что
можно оценить:
- baseline trend;
- level change;
- slope change.

### Ограничения
- concurrent events;
- autocorrelation;
- intervention timing;
- sufficient datapoints needed.

### Project relevance
Potentially useful for:
- personal N-of-1 tracking;
- behavior/adherence interventions;
- program change evaluation.

---

## 15. N-of-1 trial / individualized crossover

One person receives repeated conditions in planned sequence.

### Полезен для
- acute/reversible interventions;
- personal preference/performance;
- caffeine;
- warm-up;
- rest;
- behavioral supports.

### Ограничения
- carryover;
- learning;
- time trend;
- poor measurement;
- lack of blinding;
- generalizability = one person by design.

### Chronic training adaptation
AB/BA N-of-1 may be invalid if first block permanently changes baseline.

For chronic strength/hypertrophy:
- longer sequential experiments;
- body-part designs;
- interrupted time series;
- repeated blocks
may be more appropriate, but causal certainty remains limited.

### Практический статус
**Powerful for personal decision-making when the question/design permits repeated reversible comparison; not universal.**

---

## 16. Mechanistic laboratory study

Examples:
- EMG;
- muscle biopsy;
- acute MPS;
- hormone response;
- force-length measurements;
- metabolic markers;
- imaging after acute exercise.

### Good for
- mechanism;
- biological plausibility;
- intermediate response;
- parameter characterization.

### Cannot alone establish
- long-term hypertrophy superiority;
- long-term strength superiority;
- adherence;
- injury risk;
- practical program effectiveness.

### Rule
**Mechanism evidence explains; outcome evidence decides effectiveness when outcome data exist.**

---

## 17. Validation / reliability study

Question:
- does a tool measure what we need?
- how repeatable is it?

Examples:
- RIR accuracy;
- smart-scale body fat;
- velocity tracker;
- circumference protocol;
- wearable HR/HRV;
- exercise technique scoring.

### Appropriate outcomes
- reliability;
- agreement;
- bias;
- measurement error;
- criterion validity;
- responsiveness.

### Rule
Do not use an efficacy RCT to answer “is this measurement valid?” if a proper validation design is needed.

---

## 18. Diagnostic accuracy study

Typical structure:
- index test;
- reference standard;
- target condition;
- relevant population.

GRADE notes observational diagnostic-accuracy designs are appropriate and can start at high certainty in the diagnostic framework.

### Relevance
Mostly medical screening/assessment, not ordinary hypertrophy research.

### Rule
Accuracy ≠ improved outcomes.
A test may classify accurately but still not improve decision or health outcome.

---

## 19. Prognostic / predictive study

Goal:
predict future outcome, not necessarily explain cause.

Examples:
- does baseline strength predict later function?
- does initial RIR accuracy predict training progression?
- do certain factors predict adherence?

### Best-fit designs
Usually longitudinal cohort/prognostic models.

### Critical distinction
**Prediction ≠ causation.**

A strong predictor is not automatically a modifiable causal target.

---

## 20. Qualitative study

Methods:
- interviews;
- focus groups;
- observations;
- qualitative diaries;
- thematic/framework analysis.

### Good for
- experience;
- barriers/facilitators;
- implementation;
- meaning;
- acceptability;
- why a program is or is not used.

### Does not estimate
- hypertrophy effect size;
- causal treatment efficacy;
- population prevalence from small purposive samples.

### ADHD relevance
Qualitative adult ADHD exercise studies can be directly relevant to discovering barriers, even though they cannot prove a specific intervention fixes them.

---

## 21. Mixed-methods study

Combines quantitative + qualitative evidence.

Useful when question includes both:
- does it work?
- how/why/for whom/under what conditions is it implemented?

Potentially valuable for:
- adherence interventions;
- home-training programs;
- coaching systems.

Quality depends on both components and integration, not merely presence of two data types.

---

## 22. Case report / case series

### Good for
- unusual event;
- rare adverse signal;
- hypothesis generation;
- novel phenomenon.

### Cannot estimate reliably
- incidence;
- risk;
- average effect;
- causal efficacy.

Cochrane notes case reports/series can help signal rare harms, but lack denominator and are generally unsuitable for risk estimation.

### Rule
A dramatic case is a signal, not a rate.

---

## 23. Systematic review / meta-analysis

Not primary study designs.

They synthesize existing evidence.

### Strength depends on
- question;
- included designs;
- risk of bias;
- heterogeneity;
- analysis;
- publication/reporting bias;
- directness.

### Rule
**Meta-analysis does not upgrade bad primary evidence by arithmetic.**

Detailed methods → RES-15/16.

---

## 24. Exercise-science design-selection matrix

| Question | Preferred/strong designs | Useful supporting designs | Designs that cannot answer alone |
|---|---|---|---|
| Does program A cause more hypertrophy than B? | Parallel RCT; randomized split-body when local and valid | Mechanistic studies | Cross-sectional, acute EMG |
| Does load A cause more strength gain than B? | Longitudinal RCT | Mechanistic/neural studies | Acute force test alone |
| Acute effect of caffeine/warm-up/rest? | Randomized crossover | Mechanistic | Long-term cohort |
| Rare serious harm? | Large cohort/case-control/registry; RCT if available | Case reports as signals | Small short RCT alone |
| Prevalence of pain/exercise behavior? | Cross-sectional representative sample | Cohort | Case report |
| Does exposure predict future outcome? | Prospective cohort | Retrospective cohort | Cross-sectional for temporality |
| Is test X accurate? | Validation/diagnostic accuracy study | Reliability studies | Training RCT alone |
| Why do adults with ADHD skip exercise? | Qualitative / mixed methods | Surveys | Hypertrophy RCT |
| Does adherence intervention work? | RCT/pragmatic trial | Implementation/qualitative | Qualitative alone for effect magnitude |
| How does mechanism work? | Mechanistic lab studies | Intervention outcome studies | Observational association alone |
| What works for Ilya personally? | Evidence-informed N-of-1 / repeated personal data where appropriate | External RCTs/meta-analyses | One anecdotal session |

---

## 25. “Evidence hierarchy” — project rule

### Wrong
RCT > cohort > case-control > cross-sectional > qualitative > mechanism for **every question**.

### Correct
1. Define question.
2. Identify design that can answer it.
3. Assess risk of bias within that design.
4. Assess precision/directness/consistency.
5. Integrate complementary evidence.

Examples:
- RCT is strong for intervention effect.
- Cohort can be correct for prognosis.
- Diagnostic observational design can be correct for test accuracy.
- Qualitative evidence can be best for experience/barriers.
- Mechanistic study can be best for mechanism.
- Case reports can be useful signals for novel rare harms.

GRADE explicitly uses question-specific starting designs.

---

## 26. Design labels are insufficient

Cochrane explicitly cautions for NRSI that design **features** matter more than simple labels.

Therefore when reading a study record:

1. How were participants selected?
2. How was exposure/intervention assigned?
3. Was assignment prospective?
4. Was comparator concurrent?
5. When were baseline/confounders measured?
6. How were outcomes measured?
7. Was follow-up complete?
8. Was analysis appropriate to design?
9. Was time ordering clear?
10. What causal assumptions are required?

“Prospective cohort” is not a quality guarantee.
“Randomized” is not a quality guarantee.

---

## 27. Study design vs estimand

We need distinguish:
- effect of assignment to intervention;
- effect among adherent participants;
- effect of actual exposure;
- acute physiological response;
- longitudinal adaptation;
- prediction;
- association.

Two studies can use similar participants and intervention but estimate different things.

Detailed estimands/ITT/per-protocol → RES-03/05.

---

## 28. Exercise-specific traps

### 28.1 Acute → chronic
Acute response cannot establish long-term training superiority.

### 28.2 Training history
Prior exposure can make “novice” and “trained” labels misleading.

### 28.3 Familiarization
Strength/test improvements can be learning.

### 28.4 Unblinded intervention
Expectation/performance/coaching differences can influence outcomes.

### 28.5 Unmatched programs
If volume, load, frequency and effort all differ, “effect of one variable” may be uninterpretable.

### 28.6 Split-body contamination
Systemic and neural cross-effects may reduce independence.

### 28.7 Short duration
Slow adaptations may not be detectable.

### 28.8 Adherence
Efficacy of prescribed program and effect of actually completed dose differ.

These will be treated under bias/causal inference/application topics.

---

## 29. Practical decision algorithm

For each Question Card:

### Step 1
What type of question?

### Step 2
What temporal relation is needed?
- snapshot?
- future outcome?
- acute response?
- chronic adaptation?

### Step 3
Is intervention assigned by researcher?
- yes → experimental design possible;
- no → observational/exposure design.

### Step 4
Is carryover possible?
If yes, crossover may be invalid.

### Step 5
Is outcome rare/long latency?
If yes, small RCT may be insufficient; consider observational/registry data.

### Step 6
Is question about experience/implementation?
Use qualitative/mixed evidence.

### Step 7
Is question about measurement?
Use reliability/validation/diagnostic designs.

### Step 8
What threats remain after design choice?
Move to RES-03/04/05.

---

## 30. Project evidence-path rule

For training-effect questions the default evidence path is:

1. Current guideline/position stand for broad map.
2. Systematic review/meta-analysis of relevant longitudinal intervention studies.
3. Primary RCTs / randomized within-subject trials as needed.
4. Mechanistic evidence for explanation.
5. Observational evidence when it answers a distinct question.

For safety:
1. Clinical guideline/position stand.
2. RCT safety data where relevant.
3. Cohort/case-control/registry for rare or long-term harms.
4. Case reports as signals, not incidence estimates.

For adherence:
1. Effectiveness trials for “does strategy improve adherence?”
2. Qualitative/mixed methods for “why/what barriers?”
3. Longitudinal observational evidence for predictors.
4. Individual N-of-1 implementation tests for Ilya.

---

## 31. Confidence

### HIGH
- Study design must match question.
- Randomization is generally advantageous for causal intervention effects.
- NRSI require more caution for intervention causal effects because of confounding/bias.
- Rare/long-term harms may require non-randomized evidence.
- Crossover is inappropriate when persistent carryover makes periods nonexchangeable.
- Cross-sectional design usually cannot establish temporal causation.
- Diagnostic/prognostic/exposure questions have appropriate non-randomized designs.
- Qualitative evidence addresses experience/implementation questions rather than quantitative effect size.

### MODERATE / context-dependent
- Specific exercise-science recommendations about split-body designs and N-of-1 configurations; these are methodologically grounded but exact validity depends on outcome/intervention.

### PRACTICAL_HEURISTIC
- Project design-selection algorithm and evidence paths.

---

## 32. Sources

1. Cochrane Handbook for Systematic Reviews of Interventions, current online Handbook, v6.5/6.5.1 updates.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current

2. Cochrane Handbook Chapter 3 — eligibility and study-design selection.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-03

3. Cochrane Handbook Chapter 19 — adverse effects.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-19

4. Cochrane Handbook Chapter 23 — variants on randomized trials: cluster, crossover, multi-arm/factorial.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-23

5. Cochrane Handbook Chapter 24 — non-randomized studies of interventions.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-24

6. GRADE Book — Overview of the GRADE approach: intervention, diagnostic, prognosis and exposure evidence.  
   https://book.gradepro.org/guideline/overview-of-the-grade-approach

7. Cochrane Qualitative & Implementation Methods / Cochrane-Campbell qualitative evidence guidance.  
   https://methods.cochrane.org/qi/

8. Sutcliffe K, Harden A, Noyes J. Reviewing diverse types of implementation evidence. Cochrane-Campbell QES guidance.  
   https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-campbell-handbook-qualitative-evidence-synthesis/qeschapter17impv0240823

9. Overview of clinical study designs. PMID 37280050.  
   https://pubmed.ncbi.nlm.nih.gov/37280050/

10. Reference Guide on Epidemiology, NCBI Bookshelf, updated reference edition.  
    https://www.ncbi.nlm.nih.gov/books/NBK621603/

## 33. Что дальше

RES-02 не оценивает detailed bias внутри designs.

Следующие topics:
- RES-03 randomization / allocation / blinding;
- RES-04 bias domains;
- RES-05 confounding / causal inference;
- RES-07 power/multiplicity;
- RES-10 missing data;
- RES-15/16 review/meta-analysis.

