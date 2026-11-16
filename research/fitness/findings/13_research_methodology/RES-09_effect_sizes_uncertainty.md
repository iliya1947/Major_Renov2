# RES-09 — Effect sizes, absolute/relative effects и uncertainty

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как переводить статистический результат в величину эффекта и practical meaning, выбирая корректную effect measure и учитывая uncertainty.

### Question type
Methodological / statistics / interpretation.

### Critical outcomes
1. Correct effect measure by data type.
2. Correct interpretation of MD, SMD, RR, OR, RD.
3. Correct distinction relative vs absolute effects.
4. Correct treatment of confidence intervals.
5. Correct practical-significance assessment.

### Closure criterion
Есть project interpretation framework sufficient for primary studies and later meta-analysis.

---

## 1. Effect estimate — центральный объект

Главный вопрос:
> насколько outcome отличается между compared conditions?

Не:
> p-value меньше 0.05?

Effect estimate должен отвечать Question Card and comparator.

## 2. Continuous outcomes: mean difference

Mean Difference (MD):
difference between group means on same scale.

Examples:
- +4.5 kg 1RM;
- +2.1 mm muscle thickness;
- −1.5 points pain scale.

Advantages:
1. direct units;
2. easy practical interpretation;
3. preserves scale.

Prefer when studies use same interpretable outcome scale.

## 3. Standardized Mean Difference

SMD:
mean difference divided by within-study variability.

Used when same construct measured on different scales.

Common forms:
- Cohen's d;
- Hedges' g.

For small samples Hedges' g includes small-sample correction.

### Important limitation
SMD depends on SD.

Same absolute biological difference can yield different SMD if populations have different variability.

Therefore SMD is not a pure “biological magnitude” independent of sample characteristics.

## 4. SMD interpretation

Conventional labels:
- 0.2 small;
- 0.5 medium;
- 0.8 large

are context-dependent conventions, not universal practical thresholds.

Project rule:
**never declare effect important solely because SMD crosses generic label.**

Whenever possible:
- translate back to natural units;
- compare to meaningful threshold;
- consider baseline variability and outcome importance.

## 5. Raw vs change-score effect

Effect can be based on:
- post-intervention values;
- change from baseline.

In properly randomized trials both can estimate treatment effect; baseline-adjusted methods can improve precision.

Do not mix effects carelessly in synthesis without understanding their statistical properties.

## 6. Ratio of means

For strictly positive continuous outcomes, ratio of means can express proportional difference.

Example:
1.10 = intervention mean about 10% higher than comparator.

Potentially interpretable for some performance measures.

Not always appropriate when:
- zero/negative values possible;
- scale lacks meaningful ratio interpretation.

## 7. Binary outcomes: risk

Risk:
probability/proportion experiencing event.

Example:
injury in 5 of 100 → risk 5%.

## 8. Risk Ratio (RR)

RR = risk intervention / risk comparator.

RR = 1 → no relative difference.

Example:
risk 5% vs 10%
RR = 0.5.

Interpretation:
estimated risk is half comparator risk.

RR does not directly show absolute number of events prevented.

## 9. Risk Difference (RD)

RD = risk intervention − risk comparator.

Example:
5% vs 10%
RD = −5 percentage points.

Directly expresses absolute difference.

Absolute effects are especially useful for benefit-harm decisions because baseline risk matters.

## 10. Odds Ratio (OR)

Odds ≠ probability.

OR compares odds, not risks.

For rare outcomes OR approximates RR.

When outcomes common, OR can differ substantially and is often misinterpreted as RR.

Cochrane explicitly warns that treating OR as RR tends to exaggerate apparent relative effect when event rates are common.

Project rule:
**never translate OR verbally as “times the risk” unless rare-outcome approximation is justified.**

## 11. Number Needed to Treat / Harm

NNT derived from absolute risk difference.

It depends strongly on baseline risk and time horizon.

Not a stable intrinsic property of intervention.

For this project NNT mainly relevant to medical/safety outcomes, less to hypertrophy.

## 12. Time-to-event effects

Common:
- hazard ratio;
- survival probability difference;
- median survival/time difference.

Hazard ratio is not simply a risk ratio and depends on time-to-event assumptions.

Likely low priority for ordinary strength/hypertrophy questions, higher for medical epidemiology.

## 13. Correlation effect size

r ranges from −1 to +1.

Magnitude conventions are context-dependent.

Important:
- correlation is not intervention effect;
- correlation can be confounded;
- high correlation does not imply agreement.

## 14. Relative vs absolute effects

Relative effects often appear more stable across baseline risks.
Absolute effects often matter more to decisions.

Medical example:
RR 0.5 can mean:
- 20% → 10% = 10 percentage-point benefit;
- 2% → 1% = 1 point benefit.

Same relative effect, very different practical impact.

Fitness analogue:
a 5% improvement means different absolute strength gain at 20 kg vs 100 kg baseline.

## 15. Confidence interval around effect

CI shows statistical uncertainty around effect estimate.

Interpretation framework:

1. point estimate;
2. null value;
3. smallest meaningful benefit;
4. smallest meaningful harm;
5. width.

### Possible patterns

#### Narrow around null
Evidence supports little/no meaningful effect.

#### Wide across benefit and harm
Uncertain.

#### Entirely beneficial but tiny
Statistically clear, potentially practically trivial.

#### Entirely beneficial and meaningful
Strong practical signal, subject to bias/directness.

## 16. Null values

Difference measures:
- null = 0.

Ratio measures:
- null = 1.

Always identify correct null before reading CI.

## 17. Practical significance

Need pre-defined or defensible meaningful threshold.

Possible standards:
1. minimal important difference;
2. smallest worthwhile change;
3. meaningful % strength gain;
4. time saved;
5. lower fatigue/adherence burden for similar gains;
6. clinically relevant harm threshold.

No universal threshold for all fitness outcomes.

## 18. Smallest worthwhile change

In sport/performance contexts sometimes defined relative to between-athlete variability or performance context.

Useful only if:
- threshold justified;
- target population appropriate.

Do not manufacture threshold post hoc.

## 19. Percent change

Percent change can aid communication but may obscure:
- baseline differences;
- denominator instability;
- absolute scale.

Always retain absolute values when possible.

## 20. Standardized effect + natural-unit translation

For unfamiliar scales:
SMD can synthesize evidence.

But final interpretation should attempt:
- back-translation;
- representative scale;
- responder probability only if method valid;
- practical outcome anchor.

Avoid presenting “g=0.34” as self-explanatory.

## 21. Precision

Precision increases generally with information/sample size.

Narrow CI:
more precise estimate.

Wide CI:
less precise.

Precision is not validity.
A biased study can be very precise.

## 22. Confidence interval and significance

For common two-sided alpha=.05 tests:
95% CI excluding null often corresponds approximately to p<.05.

But CI is more informative because it shows:
- magnitude;
- direction;
- precision;
- plausible alternatives.

Project rule:
report CI even when p-value available.

## 23. Asymmetric intervals

Ratio measures are naturally asymmetric on raw scale because analysis often occurs on log scale.

Example:
RR CI 0.60–0.95.

Do not expect symmetric distance around RR point estimate.

## 24. Uncertainty beyond sampling error

CI generally does **not** automatically include:
- bias;
- confounding;
- measurement validity concerns;
- publication bias;
- indirectness.

Therefore:
narrow CI ≠ high certainty of evidence.

Certainty integration → RES-19.

## 25. Exercise-science examples

### Example A — hypertrophy
MD = +0.8 mm, 95% CI +0.1 to +1.5.

Questions:
1. Is measurement error smaller than this?
2. Is +0.8 mm practically meaningful?
3. Is intervention duration sufficient?
4. Is measure direct enough?

### Example B — strength
MD = +3 kg, 95% CI −1 to +7.

Cannot say:
“no difference”.

Evidence remains compatible with:
- slight disadvantage;
- no effect;
- meaningful benefit.

### Example C — adherence
RR completion = 1.20, but absolute completion:
60% → 72%.

Both relative and absolute effect should be considered.

### Example D — soreness
SMD = −0.4 may look “small/moderate”.
Need know:
- scale;
- baseline severity;
- whether reduced soreness matters;
- whether long-term adaptation changes.

## 26. Minimal clinically/practically important difference

When available from valid anchoring evidence, useful for interpretation.

But many exercise outcomes lack established MCID.

Project approach:
1. use established threshold when valid;
2. otherwise define decision-specific practical threshold before seeing result;
3. label it as project threshold, not universal fact.

## 27. Equivalence/noninferiority

If decision is:
> method A is sufficiently close to B but easier/cheaper,

superiority testing is insufficient.

Need:
- pre-defined equivalence/noninferiority margin;
- appropriate CI interpretation.

This will matter for:
- short vs long sessions;
- home vs gym methods;
- simpler vs more complex programs.

## 28. Benefit–burden effect interpretation

For practical programming, relevant effect is not only physiological outcome.

Compare:
1. hypertrophy/strength;
2. time;
3. fatigue;
4. pain;
5. adherence;
6. equipment;
7. complexity.

A marginally smaller physiological effect can be preferable if implementation burden is dramatically lower.

This is Evidence-to-Decision, detailed RES-28.

## 29. Project effect-size record

For every key claim store:

1. outcome;
2. effect measure;
3. point estimate;
4. CI;
5. null value;
6. practical threshold;
7. absolute translation;
8. relative translation if useful;
9. measurement error relevance;
10. bias/directness;
11. final practical interpretation.

## 30. Project rules

1. Effect estimate before p-value.
2. Natural units preferred when interpretable.
3. SMD only when needed; never universal “small/medium/large” as final decision.
4. OR must not be spoken as RR casually.
5. Relative effect without absolute baseline context is incomplete for harms/clinical outcomes.
6. CI interpretation must include practical thresholds.
7. Narrow CI does not repair bias.
8. “No significant difference” never equals equivalence.
9. Percent change supplements, not replaces, absolute change.
10. Practical importance is decision-specific.

## 31. Confidence

### HIGH
- MD appropriate for same-scale continuous outcomes;
- SMD useful for same construct measured on different scales but depends on SD;
- RR, OR and RD represent different quantities;
- OR and RR are not interchangeable when outcomes common;
- absolute effects depend on baseline risk;
- CIs convey effect precision and should accompany estimates;
- statistical precision does not imply low bias/high certainty.

### PRACTICAL_HEURISTIC
- project effect-size record and benefit–burden interpretation.

## 32. Sources

1. Cochrane Handbook, Chapter 6: Choosing effect measures and computing estimates of effect.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-06

2. Cochrane Handbook, Chapter 10: Analysing data and undertaking meta-analyses.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10

3. CONSORT 2025 Explanation and Elaboration — effect estimates and confidence intervals.  
   https://www.bmj.com/content/389/bmj-2024-081124

4. American Statistical Association Statement on Statistical Significance and P-Values.  
   https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf

## 33. Next dependencies

- RES-10 missing data/dropout;
- RES-11 reliability/validity;
- RES-16 meta-analysis;
- RES-19 certainty;
- RES-24 practical significance.
