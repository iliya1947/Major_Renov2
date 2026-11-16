# RES-05 — Confounding и causal inference

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как отличать causal effect от association в observational exercise/health data и какие adjustment choices уменьшают или, наоборот, создают bias.

### Question type
Methodological / causal inference.

### Critical outcomes
1. Correct definition of confounding.
2. Correct use of target-trial thinking.
3. Correct distinction: confounder vs mediator vs collider.
4. Correct handling of residual/unmeasured confounding.
5. Avoiding indiscriminate “adjust for everything” regression.

### Closure criterion
Есть project-wide causal-inference rules sufficient to interpret ordinary observational studies and recognize when advanced methods are needed.

---

## 1. Association ≠ causal effect

Association отвечает:
> отличаются ли outcomes между observed groups?

Causal effect отвечает:
> что изменилось бы в outcome, если бы intervention/exposure была изменена при прочих релевантных условиях?

В observational data эти quantities совпадают только при дополнительных causal assumptions.

Большая sample size:
- уменьшает random error;
- **не устраняет confounding**.

Поэтому huge observational dataset может дать очень precise, но biased association.

## 2. Counterfactual idea

Для одного человека causal contrast концептуально сравнивает потенциальные outcomes:
- outcome under intervention A;
- outcome under intervention B.

Оба одновременно наблюдать невозможно.

Randomization создаёт groups, которые в среднем могут служить counterfactual comparison друг другу.

Observational research должна приблизить эту exchangeability другими способами и assumptions.

## 3. Confounding — рабочее определение

Confounding возникает, когда common cause влияет и на:
1. intervention/exposure received;
2. outcome.

Тогда observed association содержит:
- causal path, если он существует;
- noncausal association через common cause.

Exercise example:

`training volume <- motivation/recovery resources -> hypertrophy`

Если более мотивированные, лучше питающиеся и лучше восстанавливающиеся люди одновременно:
- выбирают больший volume;
- растут лучше,

то association volume ↔ hypertrophy не равна чистому causal effect volume.

## 4. Confounder не определяется p-value

Неправильно:
> “переменная стала confounder, потому что после adjustment coefficient изменился >10%”.

Hernán & Robins подчёркивают structural approach:
confounding определяется causal structure, а не post-hoc change-in-estimate rule.

Почему coefficient может измениться без confounding:
- noncollapsibility;
- selection bias;
- model specification;
- conditioning on wrong variable.

## 5. Causal DAG как explicit assumption map

Directed acyclic graph (DAG) заставляет заранее указать causal beliefs.

Минимальные roles:

### Confounder
Common cause:
`A <- L -> Y`

Обычно нужно block noncausal backdoor path.

### Mediator
На causal pathway:
`A -> M -> Y`

Если хотим total effect A on Y, adjustment for M обычно удаляет часть causal effect.

### Collider
Common effect:
`A -> C <- U`

Conditioning/selection on collider может **создать** association между его causes и вызвать bias.

### Predictor only
Variable may strongly predict outcome but not affect exposure; это не автоматически confounder.

## 6. “Adjust for everything” — опасная стратегия

Добавление большего числа covariates не гарантирует меньший bias.

Можно:
1. adjust for mediator → remove part of effect;
2. adjust for collider → induce selection bias;
3. adjust for post-treatment variable → introduce serious bias;
4. overfit small data;
5. increase variance.

Project rule:
**covariate adjustment must follow causal rationale, not automatic variable selection.**

## 7. Baseline confounding

Typical in non-randomized intervention/exposure studies.

Potential exercise confounders depend on question:
- training age;
- baseline strength;
- baseline muscle mass;
- age;
- sex when relevant;
- prior injury;
- diet/energy/protein;
- sleep;
- total activity;
- motivation/adherence;
- access to coaching/equipment;
- health status.

Важно:
не существует универсального “fitness confounder list”.
Confounders are question/context-specific.

## 8. Residual confounding

Даже если study adjusts for a domain, bias может остаться из-за:

1. imperfect measurement;
2. coarse categories;
3. wrong functional form;
4. timing mismatch;
5. missing interaction/nonlinearity;
6. proxy not fully capturing underlying factor.

Example:
“diet adjusted” по одной baseline food-frequency variable не означает perfect control of energy/protein intake over months.

## 9. Unmeasured confounding

Если important common cause не измерена, standard regression cannot directly remove it.

Observational causal estimate тогда требует assumption:
> after adjustment for measured variables, no important unmeasured confounding remains.

Это assumption, не empirical fact.

Project language:
- не писать “confounding eliminated”;
- писать “adjusted for measured confounders X/Y/Z; residual/unmeasured confounding remains possible”.

## 10. Time-varying confounding

Сложнее, когда:
- treatment/exposure changes over time;
- prior treatment affects a variable;
- эта variable влияет и на future treatment, и на outcome.

Example:
training load → fatigue → next-week training load;
fatigue also → adaptation/injury/adherence.

Naive adjustment for time-varying fatigue may:
- be necessary for one estimand;
- but also block part of prior treatment effect or create bias.

Это зона advanced g-methods; ordinary regression may be inadequate.

Project rule:
если exposure/time-varying feedback central → mark **ADVANCED_CAUSAL_METHODS_REQUIRED**, не импровизировать.

## 11. Target trial framework

Для causal observational question сначала формулируем hypothetical randomized trial:

1. eligibility criteria;
2. treatment strategies;
3. assignment procedure;
4. time zero;
5. follow-up;
6. outcome;
7. causal contrast/estimand;
8. analysis plan.

Затем observational study рассматривается как attempt to emulate this trial.

Преимущества:
- clarify causal question;
- align eligibility, assignment and follow-up;
- reduce immortal-time/selection mistakes;
- clarify treatment strategies.

Cochrane ROBINS-I требует target-trial thinking for NRSI.

## 12. Time zero

Critical principle:
eligibility assessment, treatment assignment and start of follow-up должны быть logically aligned.

Если follow-up начинается позже/раньше assignment, можно получить:
- immortal time bias;
- selection bias;
- survivor bias.

Current target-trial guidance (BMJ 2025/2026) отдельно подчёркивает time-zero alignment.

## 13. Exchangeability

Causal comparison requires intervention groups to be exchangeable conditional on adjustment set.

Randomization aims to achieve exchangeability by design.

Observational study assumes conditional exchangeability:
> within levels of measured confounders, potential outcomes do not additionally determine observed exposure assignment.

Это strong untestable assumption относительно unmeasured confounding.

## 14. Positivity

Для каждого relevant covariate pattern должна быть реальная возможность получить each compared intervention/exposure.

Example:
если advanced athletes always train high volume and no comparable advanced athletes use low volume, data cannot cleanly estimate causal low-vs-high volume effect for that subgroup.

Near-violations create unstable estimates/weights.

## 15. Consistency / well-defined intervention

Need intervention be sufficiently defined.

“Exercise more” — vague.
“Resistance training 3×/week” still may hide:
- load;
- volume;
- effort;
- exercises;
- supervision.

If many versions of intervention have different effects, causal estimate becomes hard to interpret.

Target trial requires meaningful treatment strategies.

## 16. Selection bias and collider logic

Confounding and selection are different.

Selection bias often appears when inclusion/follow-up depends on variables related to both exposure and outcome.

Exercise example:
study analyses only people who “completed 90% of sessions”.

Completion may be influenced by:
- intervention tolerability;
- motivation;
- recovery;
- emerging outcome/side effects.

Conditioning on completion can select a non-comparable subset and distort causal effect.

## 17. Mediators: total vs direct effects

Suppose:
`training volume -> muscle protein synthesis/adaptation processes -> hypertrophy`

If question is total effect of volume, adjusting for mediator may be wrong.

If question is controlled direct effect not through mediator, different estimand/method needed.

Project rule:
before adjusting for post-intervention variable ask:
> is this variable a cause before intervention, or a consequence of intervention?

## 18. Effect modification ≠ confounding

Effect modifier:
causal effect differs across levels of variable.

Example:
training status may modify effect of volume.

A variable can be:
- confounder;
- effect modifier;
- both;
- neither.

Subgroup difference is not automatically confounding.

Detailed effect-modification methods will be handled with heterogeneity/individual-response topics.

## 19. Reverse causation

Observed outcome tendency can influence exposure.

Examples:
- stronger people choose heavier training;
- people with pain reduce training volume;
- people gaining well remain adherent.

Cross-sectional studies especially vulnerable because temporal direction unclear.

Longitudinal data help but do not automatically remove confounding.

## 20. Regression adjustment

Regression can estimate causal effects only if model and causal assumptions are adequate.

Potential issues:
1. omitted confounders;
2. collider/mediator adjustment;
3. wrong functional form;
4. interactions ignored;
5. positivity problems;
6. measurement error.

“Adjusted analysis” is not synonym for “causal analysis”.

## 21. Propensity scores

Propensity score = probability of receiving exposure/intervention conditional on measured covariates.

Can be used for:
- matching;
- weighting;
- stratification;
- covariate adjustment.

It can balance **measured** covariates if implemented well.

It cannot:
- fix unmeasured confounding;
- fix bad outcome measurement;
- fix selection/reporting bias;
- rescue poor overlap/positivity.

Project rule:
do not upgrade evidence merely because “propensity score” appears in Methods.

## 22. Instrumental variables

Potential route when unmeasured confounding exists, but requires strong assumptions:
- instrument affects treatment;
- no direct path to outcome except through treatment;
- no confounding of instrument–outcome relation;
- other technical assumptions.

Valid instruments are difficult to justify.

Not a default tool for ordinary fitness evidence.

## 23. G-methods

For time-varying treatment/confounding:
- inverse probability weighting;
- g-formula;
- g-estimation.

These can address treatment-confounder feedback under assumptions.

Project rule:
recognize when needed; do not reproduce advanced causal analysis unless source methods are properly understood.

## 24. Sensitivity analysis

Useful to test how strong unmeasured confounding would need to be to alter conclusion.

But:
- cannot prove absence of confounding;
- depends on assumptions;
- E-values and related tools do not “validate causality”.

Treat as robustness information.

## 25. Causal inference hierarchy for project

For a causal observational claim ask:

1. Is causal question explicit?
2. Is target intervention/exposure well-defined?
3. What is time zero?
4. What are plausible common causes?
5. Were confounders pre-specified?
6. Were they measured before intervention?
7. Could any adjusted variable be mediator/collider?
8. Is positivity plausible?
9. Is exposure accurately classified?
10. Is outcome measured comparably?
11. Is time-varying confounding present?
12. What estimand is targeted?
13. Which assumptions remain untestable?
14. Is RCT evidence available for triangulation?

## 26. Exercise-science examples

### Example A — volume and hypertrophy
Observational association:
people doing more weekly sets have more muscle.

Confounders may include:
- training age;
- body size;
- motivation;
- diet;
- genetic response;
- total training history.

Cannot infer optimal causal volume from association alone.

### Example B — sleep and strength gains
Poor sleepers gain less strength.

Possible causal effect, but confounding:
- stress;
- work schedule;
- nutrition;
- illness;
- training adherence.

Need longitudinal/intervention/triangulated evidence.

### Example C — exercise adherence and outcomes
Completers improve more.

This is partly tautological and heavily selection-prone:
people who tolerate/respond well may be more likely to complete.

### Example D — pain and exercise technique
People with certain technique report more pain.

Reverse causation:
pain itself may change technique.

Cross-sectional causal claim unsafe.

## 27. Triangulation

Strong causal belief can come from convergence across:
- RCTs;
- observational cohorts;
- mechanistic evidence;
- natural experiments;
- dose-response;
- different populations/methods.

Different designs have different bias structures.

Concordant results across designs with unrelated biases can increase confidence, but triangulation is not automatic proof.

## 28. Project language standard

### Strong causal wording allowed when:
- randomized evidence appropriately supports effect;
- or robust causal observational design with explicit assumptions + corroboration.

### Softer wording:
- “associated with” for ordinary observational relation;
- “consistent with a causal effect” when stronger but not definitive;
- “may contribute to” when mechanistic/observational mix;
- “predicts” only for validated predictive relation;
- “causes” only when causal inference sufficiently supported.

## 29. Confidence

### HIGH
- confounding is bias from common causes of exposure/intervention and outcome;
- sample size does not remove confounding;
- residual/unmeasured confounding can remain after adjustment;
- adjusting for post-intervention mediators/colliders can introduce bias;
- target-trial specification helps structure causal observational research;
- observational causal inference relies on explicit assumptions including exchangeability/positivity/consistency.

### MODERATE
- exact importance of a given fitness confounder is question-specific and requires domain evidence.

### PRACTICAL_HEURISTIC
- project causal-inference checklist and wording standard.

## 30. Sources

1. Cochrane Handbook Chapter 25: Assessing risk of bias in a non-randomized study (ROBINS-I), current Handbook version 6.5.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-25

2. Hernán MA, Robins JM. Causal Inference: What If. Latest online version available via official author page.  
   https://miguelhernan.org/whatifbook

3. Hernán & Robins online book, 2024 revision — confounding, selection bias, causal DAGs and longitudinal causal inference.  
   https://www.hsph.harvard.edu/miguel-hernan/wp-content/uploads/sites/1268/2024/04/hernanrobins_WhatIf_26apr24.pdf

4. Target trial emulation: applying principles of randomised trials to observational studies. BMJ 2022.  
   https://www.bmj.com/content/378/bmj-2022-071108

5. Target trial emulation: from observational data to causal inference. BMJ Evidence-Based Medicine, published 2026.  
   https://ebm.bmj.com/content/early/2026/07/23/bmjebm-2025-114080

6. Starting right: aligning eligibility and treatment assignment at time zero when emulating a target trial. BMJ 2025/2026 publication cycle.  
   https://www.bmj.com/content/392/bmj-2025-084909

## 31. Next dependencies

- RES-06 sampling/external validity;
- RES-07 power/multiplicity;
- RES-17 heterogeneity;
- RES-22 individual response;
- IND domain for application to Ilya.
