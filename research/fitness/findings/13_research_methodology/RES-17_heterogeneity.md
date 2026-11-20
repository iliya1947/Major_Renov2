# RES-17 — Heterogeneity и inconsistency

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как определять, когда исследования реально дают разные эффекты, что может объяснять различия и когда pooled average становится недостаточным для практического вывода.

### Question type
Evidence synthesis / heterogeneity / certainty.

### Critical outcomes
1. Clinical vs methodological vs statistical heterogeneity.
2. Correct interpretation of I² and τ².
3. Prediction intervals.
4. Pre-specified subgroup/meta-regression logic.
5. GRADE inconsistency interpretation.

### Closure criterion
Есть framework sufficient to interpret heterogeneity in fitness meta-analyses and preserve uncertainty when unexplained.

---

## 1. Three layers of heterogeneity

### Clinical heterogeneity
Differences in:
- population;
- training status;
- age;
- health;
- intervention dose;
- exercise;
- comparator;
- duration;
- outcome.

### Methodological heterogeneity
Differences in:
- design;
- risk of bias;
- measurement tools;
- adherence;
- supervision;
- analysis.

### Statistical heterogeneity
Observed effect estimates differ more than expected from sampling error alone.

These layers overlap but are not identical.

## 2. Heterogeneity is expected in exercise science

Resistance-training studies commonly vary in:
1. load;
2. weekly sets;
3. frequency;
4. proximity to failure;
5. exercise selection;
6. ROM;
7. supervision;
8. training experience;
9. nutrition;
10. outcome measurement.

Therefore “one true identical effect” is often unrealistic.

But:
expected heterogeneity does not justify ignoring it.

## 3. Chi-square test

Tests whether observed dispersion is compatible with sampling error alone.

Limitations:
- low power with few/small studies;
- excessive power with many studies.

Thus:
non-significant heterogeneity test ≠ proof of homogeneity.

Cochrane explicitly warns about this.

## 4. I²

I² quantifies proportion of observed variability attributed to heterogeneity rather than sampling error under the model.

Common rough ranges exist, but Cochrane warns:
**simple thresholds are misleading.**

Interpretation depends on:
1. magnitude/direction of effects;
2. precision;
3. number of studies;
4. uncertainty around I².

## 5. I² paradoxes

I² can be high when:
- studies are very precise;
- even small true differences become prominent.

I² can be low when:
- studies are imprecise;
- true heterogeneity exists but sampling error dominates.

Therefore:
I² is not a direct measure of absolute clinical importance of heterogeneity.

## 6. τ²

Tau-squared estimates between-study variance on effect-size scale.

Advantages:
- describes absolute between-study variance;
- less tied to within-study precision than I².

Limitation:
- difficult to interpret without scale/context;
- unstable with few studies.

## 7. Prediction interval

Prediction interval expresses plausible range of underlying effects across similar settings, incorporating heterogeneity.

Important distinction:
- pooled CI → uncertainty around average effect;
- prediction interval → spread/uncertainty of effects in new similar context.

For individualization this matters greatly.

Example:
average effect positive,
prediction interval crosses zero.

Conclusion:
average benefit may coexist with settings where effect is minimal/absent.

## 8. Few studies

With small k:
- I² uncertain;
- τ² unstable;
- prediction interval unreliable;
- subgroup/meta-regression underpowered.

Cochrane suggests prediction intervals are more useful when there are a reasonable number of studies and no strong funnel asymmetry.

Project rule:
small-k heterogeneity estimates get low confidence.

## 9. Direction matters more than one statistic

If all studies favor intervention but effect size varies:
heterogeneity may affect magnitude, not direction.

If studies cross:
- meaningful benefit;
- null;
- harm,

heterogeneity is much more important for decisions.

GRADE emphasizes inspecting individual effects relative to decision thresholds, not only I².

## 10. Explaining heterogeneity

Potential moderators:
1. training status;
2. dose;
3. load;
4. volume;
5. failure proximity;
6. exercise type;
7. duration;
8. measurement method;
9. sex/age when biologically justified;
10. supervision;
11. nutrition.

But hypotheses should be:
- pre-specified;
- limited;
- biologically/plausibly motivated.

## 11. Post-hoc explanation risk

After seeing heterogeneous results, many explanations can be invented.

This creates:
- multiple testing;
- HARKing;
- overfitting.

Cochrane:
post-hoc heterogeneity exploration is mainly hypothesis-generating.

Project rule:
unexpected moderator found after seeing results → exploratory unless replicated.

## 12. Subgroup analysis

Valid subgroup claim needs:
1. effect difference test/interaction;
2. not separate significance tests;
3. sufficient studies;
4. pre-specified rationale;
5. consistency within subgroup.

“Significant in trained, not significant in untrained” ≠ proven moderation.

## 13. Meta-regression

Can relate study-level characteristics to effect sizes.

Threats:
1. ecological bias;
2. confounding;
3. few studies;
4. correlated moderators;
5. multiple testing.

Study-level volume association does not prove individual-level dose response.

## 14. Measurement-induced heterogeneity

Different outcome tools can create different effects.

Hypertrophy:
- MRI volume;
- ultrasound thickness;
- DXA lean mass.

Pooling them with SMD may hide real construct/measurement differences.

Project rule:
measurement method is a candidate methodological moderator, not mere scale nuisance.

## 15. Bias-induced heterogeneity

Different risk of bias can produce dispersion.

Example:
small poorly controlled studies show larger gains;
large rigorous studies show smaller effects.

Random-effects model does not distinguish:
- genuine effect modification;
- bias.

Need RoB-based sensitivity and small-study assessment.

## 16. Intervention-label heterogeneity

Two studies both called “high volume” may mean:
- 10 vs 5 sets/week;
- 30 vs 10 sets/week;
- all to failure vs not;
- different frequency.

Project rule:
analyze actual dose, not study label.

## 17. Population-label heterogeneity

“Trained” can mean:
- 6 months;
- 5 years;
- recreational;
- competitive.

Need operational definitions.

## 18. Duration-induced heterogeneity

Short studies may show:
- neural gains;
- edema/early measurement effects;
while longer studies show different pattern.

Duration can be true moderator or proxy for other design differences.

## 19. Adherence heterogeneity

Prescribed intervention can be same while completed dose differs.

If adherence varies by study:
effect heterogeneity may reflect implementation.

Need extract:
- attendance;
- completed volume;
- progression compliance.

## 20. GRADE inconsistency

GRADE inconsistency asks whether effects differ meaningfully across studies.

If inconsistency:
- can be explained by a priori subgroup and evidence is separated appropriately → may not need downgrade within subgroup;
- remains unexplained → certainty should be downgraded.

One study alone:
no inconsistency assessment possible.

## 21. When not to pool

Consider no pooled average when:
1. effects differ in direction importantly;
2. interventions/constructs too different;
3. average would mislead;
4. subgroup structure clearly represents distinct questions.

Systematic review without pooled number can be more honest.

## 22. Heterogeneity workflow

1. Verify extracted data.
2. Inspect forest plot.
3. Check effect direction/magnitude.
4. Check I²/τ² with uncertainty.
5. Check prediction interval.
6. Inspect population/intervention/outcome differences.
7. Inspect risk of bias.
8. Apply only pre-specified subgroup/meta-regression as confirmatory.
9. Treat post-hoc findings as hypotheses.
10. Decide whether pooling remains meaningful.
11. Incorporate into certainty/applicability.

## 23. Exercise examples

### Volume
High-volume benefit may differ by:
- baseline training;
- starting volume;
- recovery;
- intervention duration.

### Frequency
If weekly volume differs, apparent frequency heterogeneity may really be dose heterogeneity.

### Failure training
Differences can depend on:
- load;
- exercise;
- volume matching;
- technical failure definition.

### Protein
Effect can differ by:
- baseline intake;
- energy balance;
- training status.

## 24. Project heterogeneity record

For each meta-analysis:

1. k studies.
2. I².
3. τ².
4. prediction interval.
5. effect directions.
6. important PICO differences.
7. measurement differences.
8. RoB pattern.
9. pre-specified moderators.
10. exploratory moderators.
11. unexplained inconsistency.
12. impact on recommendation.

## 25. Project rules

1. Never interpret I² alone.
2. Never use a threshold mechanically.
3. Non-significant Q test ≠ no heterogeneity.
4. Random effects ≠ heterogeneity solved.
5. Prediction interval preferred when practical variation matters.
6. Pre-specified explanations > post-hoc.
7. Meta-regression is observational.
8. Measurement and bias can generate heterogeneity.
9. If average effect hides meaningful opposite directions, consider not pooling.
10. Unexplained inconsistency lowers certainty.

## 26. Confidence

### HIGH
- heterogeneity has clinical, methodological and statistical sources;
- I² thresholds should not be interpreted mechanically;
- estimates of heterogeneity are uncertain with few studies;
- prediction intervals better communicate spread of underlying effects than pooled CI alone;
- unexplained inconsistency can reduce certainty;
- post-hoc subgroup explanations require caution.

### PRACTICAL_HEURISTIC
- project heterogeneity workflow and record.

## 27. Sources

1. Cochrane Handbook Chapter 10, updated November 2026, version 6.5.1 — heterogeneity sections 10.10+.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10

2. GRADE Book — Inconsistency, last modified July 2025.  
   https://book.gradepro.org/guideline/inconsistency

## 28. Next dependencies

- RES-18 publication/reporting bias;
- RES-19 certainty;
- RES-23 dose-response;
- RES-25 conflicting evidence.
