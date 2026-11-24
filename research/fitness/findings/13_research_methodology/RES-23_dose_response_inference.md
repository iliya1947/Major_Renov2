# RES-23 — Dose–response inference

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как оценивать claims вида “чем больше dose, тем больше adaptation”, отличая randomized dose effects от ecological/meta-regression associations и учитывая nonlinear/diminishing returns.

### Question type
Causal dose-response / evidence synthesis / methodological.

### Critical outcomes
1. Define dose clearly.
2. Within-study randomized dose comparison vs between-study meta-regression.
3. Nonlinearity/threshold/diminishing returns.
4. Prescribed vs completed dose.
5. Confounding by co-varying program variables.
6. Practical dose range rather than one universal optimum.

### Closure criterion
Есть operational dose-response appraisal framework for later volume/frequency/protein topics.

---

## 1. “Dose” must be operationalized

In resistance training, “more training” can mean:

1. more sets;
2. more repetitions;
3. more load;
4. greater proximity to failure;
5. higher frequency;
6. longer ROM;
7. more exercises;
8. longer session;
9. higher weekly tonnage;
10. higher session density.

These are not interchangeable dose metrics.

A dose-response claim must specify:
**dose of what?**

## 2. Dose is multidimensional

Example:
10 sets/week can differ in:
- load;
- reps;
- failure proximity;
- exercise specificity;
- rest;
- ROM.

Therefore “sets/week” is useful but incomplete.

Project rule:
extract important co-interventions before interpreting dose.

## 3. Prescribed dose vs completed dose

Prescribed:
program says 15 sets/week.

Completed:
participant actually performs 11 effective/valid sets.

Difference can arise from:
- missed sessions;
- fatigue;
- injury;
- technical failures;
- early termination.

For causal assignment effect:
prescribed dose matters.

For dose actually received:
completed dose matters, but post-randomization confounding arises.

Never silently mix these estimands.

## 4. Strongest causal dose evidence

For practical causal dose questions, strongest direct design is often:
**randomized comparison of clearly different doses while keeping other relevant variables comparable.**

Example:
- 6 vs 12 weekly sets;
- same exercises;
- similar effort;
- same duration.

Even here:
adherence and actual dose need inspection.

## 5. Multi-arm randomized dose trials

Three or more randomized doses allow:
- shape exploration;
- threshold/nonlinearity;
- diminishing returns.

Advantages:
direct within-study comparability.

Limitations:
1. often small groups;
2. dose range limited;
3. adherence varies by dose;
4. high-dose burden can cause differential dropout.

## 6. Between-study meta-regression

Meta-regression can relate study-level dose to effect.

Example:
studies with more weekly sets show larger hypertrophy.

Useful for:
- hypothesis generation;
- broad dose pattern;
- synthesizing sparse dose levels.

But it is observational **between studies**.

Potential confounding:
high-volume studies may also differ in:
- training status;
- duration;
- supervision;
- exercise selection;
- effort;
- measurement.

Thus slope ≠ randomized individual causal dose curve.

## 7. Ecological bias

Study-level mean dose/age/training status can differ from individual-level relationship.

Example:
studies averaging 15 sets/week show more growth than studies averaging 5.

Cannot infer:
every individual gets exact predicted benefit by increasing 5→15.

Meta-regression estimates study-level association unless within-study contrasts properly contribute.

## 8. Within-study contrasts are especially valuable

If meta-analysis includes randomized dose arms, using within-study comparisons helps control study-level confounding.

Current 2026 resistance-training dose-response meta-analysis combines many effects and models weekly volume/frequency, but its meta-regression still requires caution about:
- effect dependencies;
- dose quantification;
- residual study-level confounding.

It is informative, not a personalized causal calculator. citeturn469391search3

## 9. Direct vs indirect sets

Current resistance-training literature has highlighted a conceptual problem:
a “set” may directly target measured muscle/movement or only indirectly contribute.

Example:
row:
- direct for back;
- indirect for biceps.

Counting every indirect set as 0, 0.5 or 1 changes dose model.

This demonstrates:
**dose measurement itself contains assumptions.**

Project rule:
dose metric must match target outcome.

## 10. Linear assumption

Simple model:
every extra unit dose gives same benefit.

Often implausible biologically.

Potential patterns:
1. linear;
2. diminishing returns;
3. threshold then plateau;
4. inverted U;
5. U-shaped;
6. saturation.

Model shape should not be chosen solely because it fits current sample best without validation.

## 11. Diminishing returns

Biologically plausible and commonly seen:
first dose increments yield larger benefit than later increments.

Practical implication:
“more helps on average” ≠ “maximum tolerable dose is optimal”.

Need balance:
- marginal gain;
- fatigue;
- time;
- adherence;
- injury/tolerability.

## 12. Threshold / minimum effective dose

A threshold can mean:
1. statistically detectable effect;
2. exceeds measurement error;
3. practically meaningful effect;
4. physiological minimum.

These are different.

Project rule:
never call a modeled crossing point “minimum effective dose” without defining effectiveness threshold.

## 13. Plateau

A fitted curve can appear to plateau because:
- true biology saturates;
- dose range sparse;
- high-dose studies noisy;
- adherence falls;
- few studies at extremes.

Avoid treating model asymptote as exact universal ceiling.

## 14. Maximum recoverable/tolerable dose

This is practical concept, not fixed population constant.

Depends on:
- training status;
- exercise choice;
- sleep;
- nutrition;
- frequency;
- effort;
- stress;
- individual tolerance.

Evidence can estimate ranges, not one precise universal “MRV”.

## 15. Dose and time

Weekly dose and intervention duration interact.

10 sets/week for:
- 4 weeks;
- 16 weeks

may not produce proportional same slope due adaptation/plateau.

Cumulative dose is not always sufficient because spacing/recovery matters.

## 16. Frequency as dose vs distribution

Frequency may:
1. change total weekly exposure;
2. simply distribute same volume;
3. increase skill practice;
4. change recovery.

Question must specify:
- frequency independent of volume?
- or frequency as route to more volume?

If weekly volume unmatched, “frequency effect” may actually be volume effect.

## 17. Load as dose

Heavier %1RM changes:
- force;
- reps;
- fatigue;
- strength specificity.

For hypertrophy, load is not a simple “more dose” dimension.

High load can reduce reps/volume while increasing strength specificity.

Dose metrics are outcome-specific.

## 18. Effort/proximity to failure as dose

Set with 5 RIR vs 0 RIR:
same reps/load count may represent different effective stimulus/fatigue.

Thus raw sets may not be equal dose units.

But “effective reps” or other derived constructs also require validation.

Project rule:
do not replace one imperfect metric with speculative precise metric.

## 19. Nutrition dose-response

Same principles apply:
protein grams/day or g/kg/day.

Confounding:
higher protein may correlate with:
- energy intake;
- training;
- body size;
- dietary quality.

Randomized supplementation and baseline intake stratification are more informative than observational cross-sectional gradients.

## 20. Measurement error in dose

Self-reported:
- sessions;
- protein;
- sleep
contains error.

Dose measurement error often attenuates or distorts slope.

Precise response outcome cannot rescue imprecise exposure measurement.

## 21. Dose-response meta-analysis methods

Possible:
1. categorical dose comparison;
2. linear meta-regression;
3. restricted cubic splines;
4. fractional polynomials;
5. Bayesian nonlinear models;
6. multilevel models.

Model flexibility increases risk of overfitting if data sparse.

Project rule:
inspect:
- number of studies/effects;
- distribution of dose;
- extreme leverage;
- priors/model choice;
- validation/sensitivity.

## 22. Dependency

One study can contribute many:
- muscles;
- outcomes;
- arms;
- doses.

Multi-level/meta-regression must handle correlated effects.

Otherwise precision exaggerated.

## 23. Causal dose-response checklist

1. Exact dose variable?
2. Outcome-specific dose?
3. Randomized dose assignment?
4. Other variables matched?
5. Prescribed or completed dose?
6. Adherence by dose?
7. Dose measured accurately?
8. Dose range sufficiently covered?
9. Linear/nonlinear model justified?
10. Within-study contrasts vs between-study association?
11. Important confounders adjusted?
12. Dependency handled?
13. Training status/duration?
14. Practical marginal gain?
15. Prediction uncertainty?
16. Evidence direct to target context?

## 24. Current resistance-training example

A 2026 Sports Medicine meta-regression of 67 studies modeled weekly set volume and frequency for strength/hypertrophy and found evidence compatible with:
- increasing gains with volume;
- diminishing returns;
- different volume/frequency relationships by outcome.

It also had to make explicit assumptions about direct vs indirect set counting.

Correct interpretation:
**strong synthesis-level evidence of a population dose-response pattern**, not exact individual prescription or proof that each additional set causally yields the modeled increment for Ilya. citeturn469391search3

## 25. Personal dose titration

Population dose-response gives starting range.

Personal dose:
1. choose evidence-informed dose;
2. observe response/recovery/adherence;
3. increase if marginal expected benefit > cost;
4. reduce if burden/fatigue excessive.

This is dose titration, not belief in a fixed universal optimum.

## 26. Project language

Strong:
“Randomized comparisons support greater gains with higher dose over the studied range.”

Moderate:
“Meta-regression suggests a positive dose-response with diminishing returns.”

Weak/prohibited:
“Exactly 14.7 sets/week is optimal.”

## 27. Confidence

### HIGH
- dose-response claims require explicit dose definition;
- randomized within-study dose comparisons provide stronger causal evidence than study-level meta-regression;
- meta-regression can be confounded/ecological;
- nonlinear/diminishing returns should be considered;
- prescribed and completed dose are different estimands.

### MODERATE
- current resistance-training volume/frequency meta-regression supports population-level diminishing-return patterns, but exact curve is method/dose-definition dependent.

### PRACTICAL_HEURISTIC
- project causal dose checklist and personal titration logic.

## 28. Sources

1. Cochrane Handbook Chapter 10 — subgroup analysis and meta-regression.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10

2. Pelland JC et al. The Resistance Training Dose Response: Meta-Regressions Exploring the Effects of Weekly Volume and Frequency on Muscle Hypertrophy and Strength Gains. Sports Med. 2026;56:481–505. PMID 41343037.  
   https://pubmed.ncbi.nlm.nih.gov/41343037/

3. RES-05 causal inference and RES-16/17 meta-analysis/heterogeneity findings.

## 29. Next dependencies

- RES-24 practical significance;
- PRO programming dose topics;
- PHY hypertrophy/strength.
