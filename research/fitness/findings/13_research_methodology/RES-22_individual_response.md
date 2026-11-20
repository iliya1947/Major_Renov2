# RES-22 — Individual response, responders/non-responders и treatment-response heterogeneity

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как отличать реальную индивидуальную вариативность causal response от measurement error, day-to-day biological variability, learning и случайного шума; когда допустимо говорить о responder/non-responder.

### Question type
Methodological / treatment-effect heterogeneity / personalized exercise.

### Critical outcomes
1. Group mean vs individual causal response.
2. Signal vs noise decomposition.
3. Responder classification validity.
4. SDIR/person-by-treatment interaction logic.
5. Predictor vs effect modifier.
6. Appropriate repeated/N-of-1 designs.

### Closure criterion
Есть project-wide правила, запрещающие биологически сильные индивидуальные выводы из одного pre-post change и задающие критерии для персонализации.

---

## 1. Средний эффект ≠ индивидуальный causal response

Group-level trial обычно отвечает:
> как в среднем различаются outcomes между intervention groups?

Практический вопрос персонализации:
> был бы causal response конкретного человека лучше на A или B?

Это более сложный estimand.

Большой разброс individual change scores вокруг group mean ещё не означает, что люди имеют устойчиво разные causal responses.

## 2. Observed individual change содержит несколько компонентов

Упрощённо:

`observed change = true intervention response + measurement error + biological within-person variation + learning/context/adherence noise`

Возможные источники noise:
1. measurement error;
2. day-to-day physiology;
3. sleep/stress;
4. nutrition/hydration;
5. test familiarization;
6. inconsistent technique;
7. adherence;
8. random sampling variation.

Следовательно:
человек с +15% и человек с 0% после одного блока не обязательно являются устойчивыми “high responder” и “non-responder”.

## 3. Response variability vs treatment-response heterogeneity

### Response variability
Люди изменились на разную величину.

### Treatment-response heterogeneity
Именно causal effect intervention различается между людьми сверх того, что объясняется noise/background variation.

Вторая формулировка намного сильнее и требует специального design/statistics.

## 4. Control group and background variation

Если intervention group показывает большой SD change, нужно понять:
какая вариабельность изменения возникла бы и без intervention?

Control group помогает оценить:
- measurement error;
- spontaneous biological change;
- regression-to-mean effects;
- background variability.

Метод SDIR пытается выделить variability attributable to individual response beyond control/noise.

Упрощённая идея:
если variance of change in intervention > relevant control variance, это может поддерживать response heterogeneity.

Но estimation itself is uncertain and assumption-dependent.

## 5. SDIR

Standard deviation of individual responses (SDIR) is used to estimate between-person variation in true treatment response after accounting for background variation.

Important:
1. estimate can be imprecise;
2. sampling can yield negative variance estimate before truncation/interpretation;
3. confidence interval matters;
4. point estimate alone insufficient.

Recent systematic evidence in aerobic training emphasizes that when uncertainty around SDIR includes zero, data do not clearly support true response heterogeneity.

## 6. Negative SDIR²

A negative estimated variance component does not imply “people respond negatively”.

It usually indicates:
- sampling variation;
- imprecise variance estimates;
- control variance equal/greater than intervention variance;
- insufficient evidence of treatment-response heterogeneity.

Project rule:
never reinterpret negative variance mechanically as biological finding.

## 7. Responder thresholds

Common classification:
- responder if change > threshold;
- non-responder if ≤ threshold.

Possible thresholds:
1. zero;
2. measurement error/typical error;
3. smallest worthwhile change;
4. clinically/practically meaningful threshold.

Problems:
- threshold uncertainty;
- one measurement;
- regression to mean;
- random biological variation;
- outcome-specific error.

Binary label throws away continuous information.

## 8. “Non-responder” is a strong claim

A person may show little change because:
1. dose too low;
2. adherence poor;
3. measurement noisy;
4. duration too short;
5. outcome insensitive;
6. technique changed;
7. nutrition/recovery inadequate;
8. intervention poorly matched;
9. true response small.

Therefore:
**“did not improve detectably in this block” ≠ “biological non-responder”.**

Project wording:
- “no clear detectable response under this protocol/timeframe”
instead of
- “non-responder”.

## 9. Repeatability of response

For a response trait to support personalization, ideally an individual should show:
- relatively consistent differential response when conditions repeat.

If person is “high responder” in block 1 and “low responder” in identical block 2, first classification may mostly reflect noise.

Repeat exposure is therefore crucial.

## 10. Replicate crossover / repeated conditions

2025 primer on crossover treatment-response heterogeneity emphasizes:
single-cycle crossover can estimate mean treatment effect well in suitable settings, but robust person×treatment variance generally needs repeated cycles/conditions.

Design:
- A/B;
- then repeat A and/or B;
- estimate within-person variance;
- separate person×treatment signal from noise.

This is a form of N-of-1 logic aggregated across participants.

## 11. Resistance-training complication

Chronic resistance adaptations persist.

Therefore standard crossover:
A → washout → B
may be invalid for hypertrophy/strength because true washout can be long/impossible without detraining.

Alternatives:
1. split-body randomized designs when local outcomes suitable;
2. repeated comparable phases with careful modeling;
3. N-of-1 designs for reversible/acute variables;
4. repeated baseline/control conditions;
5. longer individual time-series.

No single design solves all chronic individual-response questions.

## 12. Predictor ≠ treatment-effect modifier

Suppose low baseline strength predicts more improvement.

This may be:
- regression to mean;
- more room to improve;
- general prognosis.

It does **not** prove:
low baseline strength identifies who benefits more from intervention A vs B.

### Prognostic factor
Predicts outcome regardless of treatment.

### Treatment-effect modifier
Changes relative causal effect A vs B.

Personalized prescription requires the second, not merely the first.

## 13. Subgroup mistake

Wrong:
- young group significant;
- older group nonsignificant;
→ “young respond better”.

Need:
- interaction/differential treatment effect.

Same principle as RES-07.

## 14. Trial-level moderator mistake

Meta-regression:
studies with younger mean age show larger effect.

Cannot conclude:
younger individuals respond better.

Why:
study-level ecological association can reflect:
- different programs;
- different labs;
- baseline status;
- measurement;
- confounding.

Individual-level treatment-effect modification requires appropriate data/design.

## 15. Baseline correlation and regression to mean

Correlation:
lower baseline → larger percent improvement

can arise partly mathematically/statistically.

Especially when:
- same baseline value appears in denominator;
- measurement error exists;
- extreme baseline observations regress toward mean.

Project rule:
do not infer biological “low baseline responders” from simple baseline-change correlation alone.

## 16. Percentage change problems

Percent change may exaggerate apparent response differences when baseline values differ.

Example:
+5 kg from:
- 20 kg = +25%;
- 100 kg = +5%.

Absolute and relative change answer different questions.

Responder classification must justify scale.

## 17. Measurement error threshold

Using typical error to classify response is better than zero threshold, but still not proof of stable causal phenotype.

Need:
1. error measured in comparable population/protocol;
2. same outcome;
3. repeated-test reliability;
4. uncertainty around error;
5. ideally repeated intervention response.

## 18. 2026 heavy resistance example

A 2026 randomized study in healthy older men used:
- intervention vs sedentary control;
- SDIR;
- typical error;
- multiple outcomes;
- 8 and 16 weeks.

It found group improvements and evidence of inter-individual variability, with few participants classified as poor responders after 16 weeks.

Useful lesson:
proper response analysis can be more informative than raw change-score spread.

Limit:
population = older healthy men;
classification remains outcome/protocol-specific;
does not establish a permanent responder phenotype across training methods. citeturn727696search0

## 19. Multiple outcomes and responder labels

One person can respond differently across:
- strength;
- hypertrophy;
- power;
- endurance.

“Responder” without outcome is meaningless.

Example:
- robust strength response;
- trivial hypertrophy response.

Project rule:
always label:
**responder to what outcome, intervention, dose, duration?**

## 20. Multi-outcome composite responder

Combining several outcomes can be useful practically but introduces:
1. weighting choices;
2. thresholds;
3. correlated measurement error;
4. arbitrary classification.

If used, composite logic must be pre-specified.

## 21. Personalization without proven response heterogeneity

Important:
we do **not** need to prove population-wide person×treatment interaction before adapting Ilya’s program.

We can:
1. start from best average evidence;
2. measure performance/adherence/recovery;
3. adjust dose/exercise based on repeated personal data.

This is adaptive decision-making, not claim of innate responder type.

## 22. Stable traits vs modifiable state

Observed response can vary because of:
- sleep;
- nutrition;
- stress;
- adherence;
- current training status.

These are modifiable/contextual.

Do not prematurely attribute response to:
- genetics;
- “body type”;
- fixed phenotype.

## 23. Responder evidence hierarchy

### Weak
One pre-post change.

### Better
Change exceeds known measurement error.

### Better still
Intervention vs control variance supports heterogeneity.

### Stronger
Response repeats across identical conditions.

### Strongest for differential personalization
Repeated A/B conditions show stable person×treatment interaction and/or validated predictor identifies which intervention works better.

## 24. Project individual-response record

For any claim:

1. Outcome.
2. Intervention/dose.
3. Timeframe.
4. Measurement error.
5. Control/background variance.
6. SDIR/person×treatment evidence.
7. Repeated response available?
8. Classification threshold.
9. Predictor vs effect modifier?
10. Applicability.
11. Confidence.
12. Wording.

## 25. Rules for Ilya

1. Never call Ilya a non-responder after one block.
2. A plateau is first a diagnostic problem, not phenotype.
3. Verify measurement/adherence/dose/recovery.
4. Use repeated trends.
5. Change one main variable where possible.
6. Personal adaptation does not imply fixed biological type.
7. Keep possibility that different outcomes respond differently.
8. If response to two valid options must be compared, use planned N-of-1 logic where biologically feasible.

## 26. Confidence

### HIGH
- observed response variability includes signal and noise;
- group-level variance/change scores alone cannot establish stable individual causal-response differences;
- repeated conditions improve identification of person×treatment interactions;
- prognostic predictors and treatment-effect modifiers are distinct;
- one pre-post result is insufficient for robust responder/non-responder phenotype.

### MODERATE
- SDIR methodology can provide evidence of heterogeneity but estimates are assumption/sample dependent.
- Specific 2026 heavy-resistance responder frequencies are direct only for studied population/protocol.

### PRACTICAL_HEURISTIC
- responder evidence hierarchy and Ilya rules.

## 27. Sources

1. Robinson ZP et al. N of 1: Optimizing Methodology for the Detection of Individual Response Variation in Resistance Training. Sports Med. 2024;54:1979–1990. PMID 38878117.  
   https://pubmed.ncbi.nlm.nih.gov/38878117/

2. Lolli L et al. Understanding Treatment Response Heterogeneity Using Crossover Randomized Controlled Trials: A Primer for Exercise and Nutrition Scientists. Int J Sport Nutr Exerc Metab. 2025;35:465–492. PMID 40876838.  
   https://pubmed.ncbi.nlm.nih.gov/40876838/

3. Xiao H, Ren J. Inter-Individual Heterogeneity in Aerobic Training Adaptations: Systematic Review of the Evidence Base for Personalized Exercise Prescription. 2025. PMID 41465870.  
   https://pubmed.ncbi.nlm.nih.gov/41465870/

4. Soendenbroe C et al. Heavy resistance exercise training in older men: A responder and inter-individual variability analysis. PLoS One. 2026;21:e0338775. PMID 41563970.  
   https://pubmed.ncbi.nlm.nih.gov/41563970/

## 28. Next dependencies

- RES-23 dose-response inference;
- RES-27 N-of-1 methodology;
- IND-05/06/20.
