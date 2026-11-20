# RES-27 — N-of-1 methodology for personal experimentation

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как проводить персональные сравнения для Ильи так, чтобы отличать устойчивый эффект intervention A vs B от случайного хорошего/плохого дня, learning, carryover и measurement noise.

### Question type
N-of-1 / single-case experimental design / personalized causal inference.

### Critical outcomes
1. Repeated comparison.
2. Randomized sequence when possible.
3. Carryover/washout.
4. Stable measurement.
5. Pre-specification.
6. Chronic-training limitations.
7. Interpretation limited to individual.

### Closure criterion
Есть practical N-of-1 protocol usable later for reversible training/behavior/nutrition questions and clear rule when N-of-1 is invalid.

---

## 1. What an N-of-1 trial is

A rigorous N-of-1 trial repeatedly exposes one person to:
- intervention A;
- comparator B;
in planned periods/blocks.

Goal:
estimate **individual causal treatment effect**, not population average.

It is more than:
“I tried A this week and B next week.”

## 2. Why repetition is essential

One A period and one B period can differ because of:
- sleep;
- motivation;
- learning;
- stress;
- nutrition;
- random performance;
- measurement error.

Repeated A/B cycles allow estimation of:
- within-condition variability;
- consistency of difference.

Resistance-training individual-response methodology specifically emphasizes repeating at least one condition to separate signal from noise. citeturn931592search1

## 3. Suitable questions

Best when effects:
1. have reasonably rapid onset;
2. are reversible;
3. condition is stable enough;
4. repeated measurement feasible.

Good fitness examples:
- caffeine vs no caffeine;
- warm-up A vs B;
- rest 2 vs 3 min for session performance;
- music vs silence for initiation/adherence;
- cue A vs B;
- training time of day if repeatable;
- behavioral reminder system A vs B.

## 4. Poor questions for classical crossover N-of-1

Chronic adaptations with strong carryover:
- hypertrophy;
- long-term strength;
- tendon adaptation;
- motor skill acquisition.

You cannot “wash out” 8 weeks of hypertrophy overnight.

Thus simple ABAB crossover is invalid for many chronic training questions.

## 5. Chronic resistance alternatives

Possible alternatives:
1. split-body randomized design;
2. long alternating blocks with detraining only if scientifically acceptable;
3. repeated comparable phases with time-series analysis;
4. phased dose titration;
5. personal longitudinal response monitoring without claiming clean causal A-vs-B effect.

Project rule:
**do not force N-of-1 crossover onto irreversible adaptation.**

## 6. Pre-specification

Before experiment:
1. question;
2. A/B definitions;
3. outcome;
4. measurement timing;
5. period length;
6. number of cycles;
7. sequence;
8. washout;
9. stop criteria;
10. analysis;
11. meaningful threshold.

SPENT 2019 specifically emphasizes protocol specification of periods, sequence, randomization, blinding, washout and outcomes. citeturn931592search0turn931592search4

## 7. Randomization

Randomizing period order reduces bias from:
- time trend;
- anticipation;
- preferred sequence.

Examples:
- AB BA AB;
- BA AB BA.

Randomization may be constrained by carryover/learning.

## 8. Blinding

Possible for:
- identical supplements/placebo;
- coded audio cues.

Often impossible for:
- rest duration;
- training method.

If unblinded:
measure outcomes objectively where possible and acknowledge expectancy.

## 9. Period length

Must be:
- long enough for target effect;
- short enough that underlying state remains comparable;
- compatible with washout.

Acute performance:
minutes/hours/day.

Behavior/adherence:
may require days/weeks.

Chronic adaptation:
period length makes crossover difficult.

## 10. Washout

Washout should remove residual effect before next condition.

Need evidence/physiology for duration.

If no plausible washout:
classical crossover causal interpretation weak.

## 11. Carryover

Carryover can arise from:
1. pharmacological persistence;
2. fatigue;
3. learning;
4. hypertrophy;
5. conditioning;
6. psychological habituation.

Training is especially carryover-prone.

Always ask:
> Does A change how B will work later?

## 12. Secular trend

Performance may improve over time regardless of condition due:
- learning;
- training adaptation;
- seasonal/life changes.

Randomized/repeated sequences help but do not eliminate long-term trend.

Can model time trend where appropriate.

## 13. Outcome selection

Best outcome:
- frequent;
- reliable;
- responsive;
- low burden.

Examples:
- reps at fixed standardized load;
- session completion;
- initiation latency;
- standardized RPE;
- sleep duration if device reliable enough.

Poor:
- noisy daily body-fat estimate.

## 14. Measurement frequency

More repeated measurements can improve signal estimation if:
- protocol stable;
- burden tolerable.

But excessive tracking can change behavior and reduce adherence.

## 15. Analysis

Simple:
- compare within-person condition means;
- paired differences across cycles.

More advanced:
- regression with time/period;
- Bayesian N-of-1;
- mixed models for series of N-of-1 trials.

Analysis must reflect:
- autocorrelation;
- carryover;
- trend
where relevant.

## 16. Meaningful threshold

Before experiment:
define how large A–B difference matters.

Example:
music reduces initiation latency by 30 seconds:
may not matter.

If it increases weekly completion from 2/4 to 4/4:
likely matters.

See RES-24.

## 17. Stopping rules

Could stop if:
- clear harm;
- pain;
- medical symptom;
- intervention impossible;
- sufficient pre-specified evidence obtained.

Avoid stopping simply when desired result appears.

## 18. Adherence to condition

Need verify:
did participant actually follow A/B?

Behavioral interventions can fail because:
- intervention ineffective;
- intervention not implemented.

Record implementation.

## 19. CENT / SPENT

Current recognized reporting/protocol standards include:
- CENT 2015 for N-of-1 results;
- SPENT 2019 for N-of-1 protocols.

They emphasize transparent:
- design;
- sequence;
- periods;
- outcomes;
- analysis;
- individual results. citeturn469391search7turn931592search0

They are reporting/protocol guidance, not proof that every N-of-1 is valid.

## 20. Generalizability

A successful N-of-1 answers:
> what happened causally for this person under these conditions?

It does not prove same for others.

For our project, that is acceptable when decision is specifically for Ilya.

## 21. External evidence still matters

N-of-1 should not test:
- obviously unsafe intervention;
- implausible method against overwhelming evidence;
- medical treatment changes without clinician.

External evidence defines safe/reasonable option set.

N-of-1 chooses among plausible options.

## 22. Behavioral N-of-1

Particularly useful for ADHD adherence:
- reminder method;
- session trigger;
- exercise order;
- timer;
- music;
- visible checklist;
- minimum-session rule.

Need avoid changing several architecture variables simultaneously.

## 23. Training N-of-1 example

Question:
Does 3-minute rest improve completed repetitions vs 90 sec?

Possible design:
- same exercise/load;
- randomized rest condition across comparable sessions;
- multiple sessions each;
- record reps/RIR;
- control previous training/readiness enough;
- analyze paired condition effect.

Valid for acute session performance.
Does not directly prove hypertrophy superiority.

## 24. N-of-1 experiment card

1. Decision.
2. A.
3. B.
4. Target outcome.
5. Meaningful threshold.
6. Reversibility.
7. Period length.
8. Washout/carryover.
9. Sequence randomization.
10. Blinding if possible.
11. Measurements.
12. Number of repeated periods.
13. Confounders/context to hold stable.
14. Stop rules.
15. Analysis.
16. Interpretation limit.

## 25. Project rules

1. One A then one B ≠ robust N-of-1.
2. Repeat conditions.
3. Randomize order when feasible.
4. Check carryover before crossover.
5. Pre-specify outcome/threshold.
6. Use low-noise measurement.
7. Do not use classical N-of-1 crossover for persistent hypertrophy by default.
8. External evidence constrains safe options.
9. Result applies to Ilya first, not population.
10. Record negative/ambiguous experiments too.

## 26. Confidence

### HIGH
- repeated within-person comparison is central to rigorous N-of-1 inference;
- washout/carryover is critical;
- N-of-1 is best for reversible interventions;
- chronic persistent training adaptations create major crossover limitations;
- protocol/reporting should be pre-specified and transparent.

### PRACTICAL_HEURISTIC
- project N-of-1 experiment card.

## 27. Sources

1. Robinson ZP et al. N of 1: Optimizing Methodology for Detection of Individual Response Variation in Resistance Training. Sports Med. 2024. PMID 38878117.  
   https://pubmed.ncbi.nlm.nih.gov/38878117/

2. Porcino AJ et al. SPIRIT extension and elaboration for N-of-1 trials: SPENT 2019 checklist. BMJ 2020;368:m122.  
   https://www.bmj.com/content/368/bmj.m122

3. CENT 2015 resources, International Network for N-of-1 Trials and Single-Case Designs.  
   https://www.nof1sced.org/resources/guidelines-standards/guidelines-cent-2015

## 28. Next dependencies

- RES-28 Evidence-to-Decision;
- IND-20 personal evidence loop;
- PSY-30 behavioral N-of-1.
