# RES-19 — Certainty of evidence / GRADE

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как оценивать не отдельный study, а уверенность во всём body of evidence по конкретному outcome и превращать это в честную формулировку рекомендации.

### Question type
Evidence certainty / synthesis / decision support.

### Critical outcomes
1. Outcome-specific certainty.
2. Five downgrade domains.
3. Appropriate starting certainty by evidence type.
4. Transparent upgrade logic.
5. Separation between certainty and recommendation strength.
6. Project certainty language.

### Closure criterion
Есть operational GRADE-based framework sufficient for domain research and later recommendations.

---

## 1. Certainty is about a body of evidence

GRADE asks:
> насколько уверенно оценка effect/association близка к quantity of interest?

Это не:
- quality score one study;
- journal prestige;
- p-value;
- number of papers.

Certainty is assessed:
- across evidence;
- per outcome.

One review can have:
- high certainty for strength;
- moderate for hypertrophy;
- low for adverse events.

## 2. Four levels

GRADE:
1. **High**
2. **Moderate**
3. **Low**
4. **Very low**

Interpretation is confidence in effect estimate, not moral ranking of research.

Project language:

### High
Further evidence unlikely to materially change practical conclusion, though estimate can refine.

### Moderate
Reasonably confident, but meaningful change in estimate/conclusion remains possible.

### Low
Limited confidence; true effect may differ substantially.

### Very low
Very little confidence; effect highly uncertain.

These wordings are project-adapted summaries, not verbatim GRADE definitions.

## 3. Five downgrade domains

For intervention evidence:

1. **Risk of bias**
2. **Inconsistency**
3. **Indirectness**
4. **Imprecision**
5. **Publication bias / missing evidence**

These must be considered separately and documented.

## 4. Risk of bias

Question:
are included results systematically biased?

Use:
- RoB 2 for randomized trials;
- ROBINS-I where appropriate.

Downgrade depends on:
1. proportion/weight of problematic studies;
2. severity;
3. whether sensitivity analyses change result;
4. outcome-specific bias.

Not:
“some papers had flaws therefore −1 automatically”.

## 5. Inconsistency

Question:
do studies show meaningfully different effects?

Assess:
- point estimates;
- CI overlap;
- direction;
- I²;
- τ²;
- prediction interval;
- plausible moderators.

If inconsistency is explained by credible pre-specified subgroup and evidence is separated appropriately, certainty within subgroup may remain higher.

Unexplained inconsistency → downgrade.

See RES-17.

## 6. Indirectness

Mismatch in:
1. population;
2. intervention;
3. comparator;
4. outcome;
5. directness of comparison;
6. relevant context.

Examples:
- EMG used for hypertrophy;
- elite lifters for detrained home trainee;
- supervised gym vs unsupervised home if implementation matters.

Indirectness is not bias.

See RES-06/14.

## 7. Imprecision

Question:
does CI still include materially different decisions?

Important:
- not simply sample size;
- not “only 3 studies”.

Need examine:
1. CI;
2. meaningful benefit threshold;
3. meaningful harm;
4. optimal information size where useful.

Cochrane explicitly recommends avoiding “significant/non-significant” language for imprecision judgment.

## 8. Publication bias

Question:
could missing studies/results materially distort effect?

Signals:
- small positive studies;
- missing registry results;
- commercial interest;
- funnel asymmetry;
- selective outcomes.

See RES-18.

## 9. Starting certainty

Traditional GRADE logic:
- randomized intervention evidence starts high;
- ordinary observational intervention evidence typically starts low;
then domains modify certainty.

Current Cochrane guidance notes ROBINS-I-based NRSI can conceptually start high if evaluated against target trial, but serious confounding/selection usually leads to substantial downgrading; retaining high certainty requires strong justification.

Project rule:
**do not mechanically assign certainty from design label alone; follow GRADE framework and actual bias structure.**

## 10. Upgrading observational evidence

Possible reasons include:
1. very large effect;
2. dose-response gradient;
3. plausible residual confounding would reduce observed effect or create null rather than explain effect.

Upgrading is unusual and requires strong justification.

## 11. Large effect

A large observed association can increase confidence when:
- bias unlikely to explain magnitude;
- effect precise/consistent;
- no plausible confounder accounts for it.

Do not upgrade simply because SMD looks “large”.

GRADE’s examples use large relative effects primarily in clinical contexts.

## 12. Dose-response

A credible dose-response can support causality/certainty.

But fitness dose-response can be confounded:
- higher training volume may co-vary with experience/adherence/nutrition.

Within-study randomized dose-response stronger than across-study ecological gradient.

## 13. Outcome-specific certainty

Never write:
> “the evidence for this program is moderate certainty”

without outcome.

Correct:
- moderate certainty for strength;
- low certainty for hypertrophy;
- very low certainty for injury risk.

## 14. Certainty ≠ recommendation strength

Strong recommendation can occasionally arise with lower certainty if:
- harms catastrophic;
- alternatives absent;
- values clear.

Weak/conditional recommendation can arise with high certainty if:
- effect tiny;
- burden high;
- preferences vary.

For training:
high-certainty tiny benefit may still not justify complexity.

Evidence-to-decision → RES-28.

## 15. Certainty ≠ effect magnitude

Possible combinations:
- high certainty, small effect;
- low certainty, huge point estimate;
- moderate certainty, no meaningful effect.

Need report both:
1. magnitude;
2. certainty.

## 16. Certainty ≠ statistical significance

Pooled p<.001 can coexist with low certainty due:
- high RoB;
- indirectness;
- publication bias.

p>.05 can coexist with moderate evidence for no important effect if CI is narrow around practical null.

## 17. GRADE and one study

One study:
- inconsistency domain is not a concern because there are no between-study differences to assess;
- other domains still apply strongly.

Do not downgrade merely because “only one study” under inconsistency.
Imprecision/directness/RoB may still lead to low certainty.

## 18. Double counting problems

Do not downgrade twice for same underlying issue without justification.

Example:
small biased studies cause:
- high RoB;
- funnel asymmetry.

Could warrant both domains if genuinely distinct, but avoid automatic duplication.

Need explicit rationale.

## 19. Practical thresholds

Imprecision/inconsistency judgment requires thresholds.

For each outcome ideally define:
1. meaningful benefit;
2. trivial range;
3. meaningful harm.

If no established MCID:
project pre-specifies decision threshold before interpreting result and labels it heuristic.

## 20. Summary of Findings concept

For each critical outcome record:
1. relative/absolute effect;
2. participants/studies;
3. certainty;
4. downgrade/upgrade reasons;
5. important caveats.

This prevents conclusions from being separated from uncertainty.

## 21. Fitness-specific GRADE adaptation

GRADE originated in health-care evidence, but core logic transfers well to exercise questions.

Project adaptation:
- “important outcome” can be strength/hypertrophy/adherence rather than clinical event;
- meaningful thresholds are training-decision thresholds;
- indirectness explicitly includes equipment/supervision/training status.

Do not pretend our adaptation is an official sport-specific GRADE standard.

## 22. Project certainty record

For every major claim:

1. Topic/outcome.
2. Effect estimate.
3. Risk of bias.
4. Inconsistency.
5. Indirectness.
6. Imprecision.
7. Publication bias.
8. Upgrade factors if applicable.
9. Final certainty:
   - HIGH
   - MODERATE
   - LOW
   - VERY_LOW
10. Rationale.
11. Practical implication.
12. Applicability to Ilya.

## 23. Project wording standard

### HIGH
“Evidence strongly supports…”

### MODERATE
“Evidence probably supports…”

### LOW
“Evidence suggests…, but confidence is limited.”

### VERY LOW
“Evidence is highly uncertain.”

Avoid:
- “proven”;
- “definitively best”;
- “science says” without certainty.

## 24. Example — hypothetical hypertrophy method

Meta-analysis:
SMD +0.25.

But:
- most studies small;
- high RoB;
- different measurements;
- prediction interval crosses null;
- funnel asymmetry.

Conclusion:
not “method increases hypertrophy by small amount”.

Better:
low/very-low certainty evidence suggests possible small benefit, but true effect remains uncertain.

## 25. Example — simple resistance training vs none

Large consistent RCT evidence:
- improved strength;
- low RoB;
- direct population;
- precise.

Certainty can be high even if exact optimal program uncertain.

Important distinction:
certainty that **training works** can be much higher than certainty that **specific advanced method is superior**.

## 26. Certainty changes over time

As new evidence arrives:
- precision improves;
- heterogeneity may emerge;
- publication bias clearer;
- directness improves.

Certainty is versioned conclusion, not permanent truth.

Project records date/version.

## 27. Project rules

1. Grade per outcome.
2. Always document domain rationale.
3. Effect magnitude and certainty reported together.
4. No binary reliance on p-values.
5. No automatic certainty from “meta-analysis”.
6. No automatic low certainty because sample small without examining CI.
7. No automatic downgrade for single study inconsistency.
8. Avoid double-counting same flaw.
9. Recommendation strength decided later via EtD.
10. Applicability to Ilya recorded after certainty, not blended into hidden intuition.

## 28. Confidence

### HIGH
- GRADE uses outcome-specific four-level certainty;
- five downgrade domains are RoB, inconsistency, indirectness, imprecision and publication bias;
- transparent rationale is mandatory;
- certainty and effect magnitude are distinct;
- certainty and recommendation strength are distinct.

### MODERATE
- project wording/adaptation for fitness outcomes is methodological translation, not official sport-specific GRADE guidance.

### PRACTICAL_HEURISTIC
- project certainty record and wording standard.

## 29. Sources

1. Cochrane Handbook Chapter 14 — GRADE certainty.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-14

2. Cochrane GRADE resources and current GRADE Book transition.  
   https://www.cochrane.org/learn/courses-and-resources/cochrane-methodology/grade-approach/grade-handbook

3. GRADE Book.  
   https://book.gradepro.org/

## 30. Next dependencies

- RES-20 guideline/position-stand appraisal;
- RES-24 practical significance;
- RES-28 evidence-to-decision.
