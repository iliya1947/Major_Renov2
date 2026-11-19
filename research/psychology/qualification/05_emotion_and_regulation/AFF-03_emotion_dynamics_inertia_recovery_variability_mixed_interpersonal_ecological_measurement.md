# AFF-03 — Emotion dynamics over time: inertia, recovery, variability, mixed states, interpersonal regulation, and ecological measurement

Status: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**
Evidence cutoff: **2026-11-19**
Scope: public affective-science evidence and generic inference methodology only; no individualized psychological material.

## Purpose

AFF-01 established what kinds of affective phenomena and measurement channels must be distinguished. AFF-02 established that regulation strategies differ by target, process stage, context, and outcome channel.

AFF-03 addresses a different problem:

**How do emotions unfold over time within a person and between people, and what can temporal patterns actually tell us about emotional functioning?**

High-risk errors to block:
- "high emotional inertia = emotional stability";
- "low inertia = healthy flexibility";
- "high variability = dysregulation";
- "high instability = the same as high variability";
- "slow recovery = one specific regulatory failure";
- "one autoregressive coefficient is a stable trait";
- "daily inertia and minute-to-minute inertia measure the same process";
- "mixed emotions are inherently adaptive";
- "positive–negative affect correlation directly measures simultaneous mixed emotion";
- "interpersonal synchrony = successful co-regulation";
- "more synchrony = better";
- "social sharing = co-rumination";
- "EMA is automatically ecologically valid because it occurs in daily life";
- "group-average dynamics describe a person's within-person process".

## Core rule

**Affective dynamics describe temporal properties of measured emotion or affect. They are descriptive patterns, not self-interpreting mechanisms. Their meaning depends on timescale, baseline, perturbations, context, measurement scale, sampling design, and the model used.**

No single dynamic metric is a general index of emotional health.

## 1. Dynamic properties are not the same construct

Commonly used parameters include:

1. **Mean level** — average affect across observations.
2. **Variability** — dispersion around a person's own mean, often intraindividual SD.
3. **Instability** — magnitude of successive changes, often MSSD.
4. **Inertia** — temporal dependence/persistence, often an AR(1) coefficient.
5. **Reactivity** — size of affective response following an event/perturbation.
6. **Recovery** — trajectory or time toward a reference state after perturbation.
7. **Oscillation/periodicity** — recurrent cycles.
8. **Transition probability** — likelihood of moving between states/categories.
9. **Mixed-state co-occurrence** — simultaneous or near-simultaneous positive and negative components.
10. **Synchrony/coupling** — covariation between two people or two channels across time.

These can correlate mathematically or empirically while remaining conceptually distinct.

## 2. Mean level is a dynamic confound, not noise to ignore

People with high average negative affect have less room to increase and often different floor/ceiling structure than people with low average negative affect.

Dynamic metrics can correlate with mean levels due to:
- bounded rating scales;
- floor effects;
- heteroscedasticity;
- genuine process differences;
- model misspecification.

A dynamic index should not be interpreted without examining the individual's mean and scale distribution.

## 3. Variability

Within-person variability commonly asks:

**How widely does affect move around the person's average?**

A simple measure is intraindividual standard deviation.

Limitations:
- ignores order of observations;
- can be high because of rare large events;
- can be low because of restricted measurement range;
- cannot tell whether changes are fast or slow;
- cannot distinguish adaptive responsiveness from uncontrolled fluctuations.

High variability is therefore not synonymous with emotional instability in the functional sense.

## 4. Instability

Instability metrics such as mean squared successive differences (MSSD) incorporate consecutive change magnitude.

They are influenced by both:
- dispersion/innovation magnitude;
- temporal dependence.

Two time series can have similar MSSD but different inertia and perturbation structure.

Do not translate MSSD directly as "emotional volatility" without specifying the mathematical definition.

## 5. Emotional inertia

A common AR(1) model is:

\`A_t = μ + φ(A_(t-1) - μ) + ε_t\`

where:
- \`μ\` = personal mean/equilibrium estimate;
- \`φ\` = autoregressive carry-over/inertia;
- \`ε_t\` = innovation/perturbation not explained by previous affect.

Higher positive \`φ\` means greater carry-over **at the chosen sampling interval and under the model assumptions**.

It does not independently identify why the state persisted.

## 6. Inertia is not stability

A 2026 methodological review explicitly identifies "misattributing inertia as stability" as a central conceptual problem.

High inertia can coexist with large perturbations. For example:
- large shocks + high persistence → large, slowly decaying swings;
- small shocks + high persistence → apparently flat, slowly changing state.

Thus high inertia can produce very different observed variability depending on innovation variance.

## 7. Low inertia is not automatically flexibility

Low autocorrelation can mean:
- rapid adaptive recovery;
- high responsiveness to context;
- measurement noise;
- rapid oscillation;
- poorly aligned sampling;
- random instability.

**Emotional flexibility requires context-appropriate change, not merely fast change.**

Regulatory flexibility from AFF-02 is also different: it concerns context-sensitive strategy deployment rather than only affective transition speed.

## 8. Statistical stability versus dynamic stability

A time series can look statistically stable because it barely changes while being dynamically poor at recovering after perturbation.

Conversely, frequent changes can reflect appropriate tracking of changing environmental conditions.

Use "stable", "unstable", "rigid", and "flexible" only after specifying the dynamic property.

## 9. The inertia–instability relationship

For a stationary AR(1) process, variability, successive differences, inertia, and innovation variance are mathematically linked.

This creates a major inference problem:
observed high variability can arise through multiple combinations of persistence and perturbation size.

Shao & Ong's 2026 review emphasizes decomposing these properties rather than assigning psychological meaning to one descriptive statistic.

## 10. The 2025 inertia–instability paradox study

Ong and colleagues analyzed 842 adults with 56 consecutive daily measurements and modeled mean negative affect, variability, instability, and inertia using DSEM/Bayesian methods.

When shared variance was considered:
- higher mean negative affect was associated with depressive symptom severity;
- higher inertia showed a unique association;
- variability and instability did not show unique associations after those controls.

This is important evidence against treating all affect-dynamic metrics as interchangeable.

It remains correlational and does not establish inertia as a causal depression mechanism or individual diagnosis.

## 11. Reactivity

Reactivity asks how strongly affect changes after an identified event.

To measure it, specify:
- event onset;
- pre-event baseline;
- event intensity/type;
- affect component;
- sampling interval;
- counterfactual/reference period.

High reactivity may be appropriate for major events. Low reactivity may reflect resilience, disengagement, restricted measurement, or failure to detect the event.

No universal "optimal reactivity" follows from amplitude alone.

## 12. Recovery

Recovery concerns how affect evolves after a perturbation.

Possible operationalizations:
- time to return near baseline;
- exponential/other decay parameter;
- slope across post-event observations;
- area under response curve;
- probability of returning to a reference region.

Recovery requires an identifiable perturbation or meaningful reference point.

Autocorrelation alone is not the same as event-specific recovery.

## 13. Exposure, reactivity, and recovery are separable

An individual can show high average negative affect because they:
- encounter more adverse events;
- react more strongly;
- recover more slowly;
- experience combinations of these.

Earlier daily-life work demonstrated that emotional inertia can reflect differences in event exposure, response, and recovery.

Therefore "persistent negative affect" does not uniquely identify a regulation deficit.

## 14. Recovery is asymmetric across state direction

Standard linear inertia assumes equal persistence above and below a person's mean.

A 2026 study introduced a curvilinear "Tilt" parameter for positive affect and found that state-dependent persistence revealed patterns not visible in ordinary linear inertia.

In that dataset:
- average positive affect showed greater persistence at higher-than-usual levels than after lower-than-usual levels;
- neuroticism related to the curvature/state dependence but not ordinary linear inertia.

This is an important **methodological demonstration**, not a universal biological law of positive-affect recovery.

## 15. The symmetry assumption can be wrong

For positive affect, maintaining a beneficial peak and recovering from a low state have different functional meanings.

For negative affect, recovery from a high-negative state and persistence of unusually low negative affect may also differ.

Therefore one linear \`φ\` can average processes that should be modeled separately.

Consider nonlinear, threshold, regime-switching, or state-dependent models when theory predicts asymmetry.

## 16. Inertia operates at multiple timescales

Affective persistence can be estimated at:
- seconds/minutes;
- hours;
- days;
- weeks.

These need not index the same mechanism.

Minute-scale persistence may reflect immediate physiological/appraisal processes; day-scale persistence can include sleep, routines, social context, and unresolved events.

Always label the timescale:
- "hour-to-hour negative-affect inertia";
- "day-to-day mood autocorrelation";
rather than generic "emotional inertia".

## 17. Sampling interval changes the parameter

A 2026 review emphasizes that sampling frequency can alter estimated inertia.

Too-dense sampling can yield highly redundant consecutive measurements.
Too-sparse sampling can miss relevant changes and reduce observed temporal dependence.

Temporal aliasing can cause faster dynamics to appear as slower or misleading patterns.

A numerical autoregressive parameter is inseparable from the measurement interval.

## 18. Sampling density and study duration are different

Validity depends on:
- how often measurements are taken;
- how many total observations exist;
- how long the observation window lasts.

100 observations over one week and 100 observations over a year do not measure the same temporal process.

The sampling design must match the hypothesized timescale before modeling begins.

## 19. Irregular sampling

Real EMA data commonly contain:
- delayed responses;
- skipped prompts;
- sleep intervals;
- irregular event-contingent observations.

Discrete-time models often assume equal intervals.

If intervals vary meaningfully, consider:
- continuous-time models;
- explicit interval covariates;
- state-space methods;
- justified missing-data models.

Do not treat a 20-minute lag and a 4-hour lag as identical merely because they are adjacent rows.

## 20. Ordinal and bounded emotion scales

Many affect ratings are 5- or 7-point ordinal scales and show floor effects for negative affect.

Standard Gaussian AR models may be misaligned with:
- ordinal outcomes;
- skewed distributions;
- many zeros;
- ceiling/floor states.

The 2026 review demonstrates that distributional mismatch can bias inertia estimates.

Model choice should fit the observed data type.

## 21. Stationarity

Standard AR models often assume stable mean, variance, and dynamic parameters across the modeled window.

But emotional life can change because of:
- weekends;
- illness;
- major events;
- learning;
- intervention;
- season;
- relationship conflict;
- changing environment.

If parameters shift, one stationary estimate can average different regimes.

Test or model nonstationarity rather than assuming it.

## 22. Ergodicity and cross-level inference

Group averages do not automatically describe within-person dynamics.

Between-person question:
"Do people with higher average inertia have different outcomes?"

Within-person question:
"When this person's inertia changes, does their outcome change?"

These are not equivalent.

Person-specific trajectories, random slopes, and within-person centering are crucial where the mechanism is intraindividual.

## 23. Dynamic parameters are not automatically traits

An individual's estimated inertia can differ across:
- context;
- emotion;
- period;
- timescale;
- sampling protocol.

High test–retest correlation would support stability but would still not prove one mechanism.

Avoid terms like "emotionally rigid person" from a single short EMA protocol.

## 24. 2026 seven-challenge methodological gate

Shao & Ong identify seven broad problems:
1. inertia misread as stability;
2. oscillatory/negative autoregression neglected;
3. distributional assumptions misapplied;
4. insufficient temporal resolution/data density;
5. timescale mismatch;
6. within- and between-person effects conflated;
7. stationarity/ergodicity assumptions ignored.

These challenges are canonical requirements for interpreting inertia in this project.

## 25. Oscillation and negative autoregression

A negative autoregressive parameter can indicate alternating movement around a mean in a simplified model.

But negative estimates can also arise from:
- sampling artifacts;
- overcorrection;
- model mismatch;
- discrete measurement issues.

Do not label negative \`φ\` as "emotional oscillation" without checking the time series and model.

## 26. Rumination and inertia

A 2025 multi-dataset study examined eight experience-sampling datasets:
- N = 948;
- 73,472 measurement occasions.

Distraction, reappraisal, rumination, and expressive suppression each showed some mediation of affect inertia in those analyses, but each reduced the total autoregressive slope by no more than 13%.

This implies emotion-regulation strategies explain only a minority of persistence in that analysis.

## 27. 2026 replication/extension of strategy–inertia links

A 2026 study of 451 emerging adults over two weeks analyzed seven negative affective states.

Rumination showed significant indirect/mediating effects for four negative states; other strategy effects were not significant.

The effects were modest.

Taken with the 2025 result, strategy–inertia associations are **not one fixed universal mapping**. Differences in samples, emotions, measures, and models matter.

## 28. Rumination is not identical to inertia

Rumination is a cognitive strategy/process.
Inertia is a temporal property of affect.

Rumination may contribute to persistence, respond to persistent distress, or covary with a third factor.

Even when mediation models are significant, temporal observational data do not by themselves establish a unique causal mechanism.

## 29. Emotion variability and regulation difficulty

A 2025 study linked self-reported emotion-regulation difficulties to several naturalistic affect-dynamic measures in two university samples.

This type of evidence supports studying regulation and dynamics jointly but does not imply:
- DERS scores are dynamic parameters;
- variability is dysregulation;
- a temporal signature uniquely maps to a questionnaire construct.

Separate subjective perceived difficulty from observed affect trajectories.

## 30. Mixed emotions

Mixed emotions refer to co-occurring positive and negative affective components.

They are not simply:
- rapid switching between positive and negative states;
- a weak negative correlation between PA and NA;
- ambivalence about a decision;
- emotional complexity as a general personality trait.

Timing and operationalization matter.

## 31. Positive–negative correlation is not direct co-occurrence

A classic daily-diary/EMA analysis showed that the within-person PA–NA correlation can be misleading as a measure of simultaneous mixed emotion.

A correlation summarizes covariation across observations; it does not indicate whether both valences were present at the same moment.

If simultaneous co-occurrence is the target, measure both components at the same observation.

## 32. Mixed emotions are context-sensitive

A 2025 large EMA study analyzed:
- N = 710;
- 29,820 observations over seven days.

Mixed emotions were not uniformly beneficial. Associations with subsequent well-being depended partly on whether stressful events were present and differed across physical/social outcomes and timescales.

This blocks:
- "mixed emotions indicate maturity/resilience";
- "mixed emotions are harmful conflict";
as universal claims.

## 33. Mixed emotion versus rapid alternation

Experiencing positive and negative affect simultaneously differs from alternating rapidly between positive and negative states.

A low-resolution questionnaire asking about "today" cannot determine simultaneity.

Use temporal resolution suitable for the claim:
- momentary concurrent ratings for co-occurrence;
- dense time series for switching/alternation.

## 34. Emotional transitions

Beyond mean and inertia, researchers can model transitions among affective states.

Useful questions:
- what state follows what;
- how long states persist;
- whether transition probabilities depend on context;
- whether transition structure differs by person.

State-space/hidden-state models can be useful, but inferred states are model constructs, not direct psychological entities.

## 35. Recurrence

An emotion can decline and later recur because:
- the event reappears;
- memory/retrieval reactivates it;
- a related cue appears;
- appraisal changes;
- social interaction reinstates it.

Recurrence is not simply "failed recovery."

Distinguish same-episode persistence from new event-triggered episodes.

## 36. Carry-over across days

Day-to-day affective carry-over may reflect:
- unresolved events;
- sleep and circadian processes;
- stable routines;
- recurring contexts;
- measurement averaging.

It should not be automatically interpreted as minute-to-minute emotional rigidity.

Cross-day dynamics belong to a different temporal scale.

## 37. EMA is not automatically ecologically valid

EMA reduces some retrospective bias and samples natural contexts, but can still suffer from:
- nonresponse/missingness;
- reactivity to repeated questioning;
- item burden;
- coarse response scales;
- unequal intervals;
- selective phone access/context;
- unmeasured events;
- prompted behavior changes.

"Measured in daily life" is not enough to establish ecological validity for the intended mechanism.

## 38. Prompt schedule matters

Common designs:
- signal-contingent/random prompts;
- fixed-time prompts;
- event-contingent reports;
- end-of-day diaries.

Each has different biases.

Event-contingent designs may oversample salient events.
Random prompts can miss short episodes.
End-of-day reports involve retrospective compression.

Match schedule to the target process.

## 39. Compliance and missingness

Missing EMA responses may not be random.

People may skip prompts during:
- intense distress;
- work;
- social activity;
- sleepiness;
- crises;
- positive engagement.

If missingness relates to affect, observed dynamics can be biased.

Report compliance patterns and test sensitivity where possible.

## 40. Measurement reactivity

Repeated emotional self-monitoring can itself change:
- attention to feelings;
- labeling;
- regulation;
- memory;
- response style.

This does not invalidate EMA, but means the measurement system can perturb the process being measured.

## 41. Time-varying context is necessary

Emotion dynamics without context are difficult to interpret.

Relevant time-varying covariates include:
- stressor exposure;
- social interaction;
- location category;
- goal conflict;
- activity;
- sleep;
- work/rest;
- physical state.

Context can explain apparent persistence or transitions.

Do not treat residual autocorrelation as pure endogenous emotion regulation.

## 42. Interpersonal emotion regulation

Interpersonal emotion regulation occurs when social interaction is used to change:
- one's own affect through another person (intrinsic interpersonal regulation);
- another person's affect (extrinsic interpersonal regulation).

This includes support, sharing, humor, advice, validation, perspective, distraction, reassurance, and other strategies.

It is not a marginal special case: everyday diary/EMA studies show interpersonal regulation is common.

## 43. Social sharing is not automatically effective co-regulation

Sharing distress can provide:
- validation;
- information;
- closeness;
- practical help.

But sharing can also become co-rumination, repeated negative elaboration, conflict escalation, or invalidation.

A 2024 meta-analysis of 105 studies distinguished ordinary distress sharing from co-rumination:
- general distress sharing was negatively associated with psychological distress;
- co-rumination was positively associated with distress overall;
- culture moderated the co-rumination association.

These are correlational aggregate findings, not universal causal rules.

## 44. Interpersonal regulation is goal-dependent

People can regulate others to:
- make them feel better;
- motivate action;
- reduce conflict;
- increase vigilance;
- conform to norms;
- help themselves feel better.

Thus extrinsic regulation is not necessarily altruistic, and intrinsic interpersonal regulation is not necessarily dependency.

Specify regulator, target, goal, tactic, and outcome.

## 45. Synchrony is not co-regulation

Affect synchrony means temporal covariation/coupling.

Co-regulation implies a regulatory process in which partners influence emotional trajectories toward some functional outcome.

A 2025 mother–infant study found positive affect synchrony changed after a relational stressor but was not associated with infant negative-affect reactivity/recovery in the predicted way.

Conclusion:
**more synchrony is not automatically better co-regulation.**

## 46. Directionality in dyads

Dyadic data can contain:
- A → B effects;
- B → A effects;
- common response to the same event;
- stable between-dyad similarity;
- reciprocal coupling.

Simple correlation cannot identify who influences whom.

Use lagged/dyadic models and separate within-dyad from between-dyad effects.

## 47. 2026 couple-regulation evidence

A 2026 longitudinal dyadic study of six regulation strategies found:
- strong stable between-dyad associations;
- more limited within-dyad temporal influences;
- partner effects varied by strategy.

This illustrates why relationship-level similarity should not automatically be interpreted as moment-to-moment emotional contagion.

## 48. Polyregulation across social and intrapersonal strategies

A 2026 EMA study compared combined interpersonal + intrapersonal regulation with intrapersonal-only regulation in civilian and veteran samples.

Combined strategy use showed:
- modest advantages for reducing negative emotion in the civilian sample;
- larger benefits for some affective outcomes in the veteran sample;
- substantial person variability;
- no universal superiority across problem-solving outcomes.

This is evidence for context/population moderation, not "more strategies is always better."

## 49. Co-regulation across developmental systems

Parent–infant, romantic, friendship, workplace, and therapeutic dyads have different:
- power;
- communication ability;
- goals;
- developmental capacities;
- dependence structure.

Do not transfer a mother–infant synchrony parameter directly to adult romantic or clinical regulation.

Detailed developmental mechanisms belong to DEV; relationship processes to REL/SOC.

## 50. Positive emotional synchrony

Synchrony of positive emotion can reflect:
- shared event exposure;
- mutual responsiveness;
- mimicry;
- common context;
- relationship processes.

A positive association with intimacy does not by itself identify regulation direction or causality.

Distinguish synchrony from influence and influence from beneficial regulation.

## 51. Recovery can be interpersonal

Supportive interaction may alter recovery after an event.

To identify interpersonal recovery:
1. establish the perturbation;
2. measure both partners over time;
3. estimate direction/coupling;
4. compare against expected within-person recovery;
5. measure support/strategy rather than infer it from synchrony.

Without these steps, "co-regulation" is often only a descriptive label.

## 52. Context sensitivity over time

Adaptive affective dynamics are expected to depend on context:
- high persistence after meaningful loss may be normative;
- rapid recovery after a trivial stressor can be adaptive;
- prolonged positive affect may be beneficial in one setting but distracting in another.

The same temporal metric can therefore have different functional meaning across event types.

## 53. Regulatory sequence and temporal dynamics

AFF-02 established that people can combine and sequence regulation strategies.

AFF-03 adds the temporal requirement:
- early distraction may reduce immediate intensity;
- later reappraisal may update meaning;
- later sharing may support social processing;
- recurrence may trigger another strategy cycle.

A single "strategy used today" measure cannot reconstruct this sequence.

## 54. Temporal causality and lag choice

A lagged association depends on the chosen lag.

If the mechanism operates in minutes, a 3-hour lag can miss it.
If the outcome evolves over days, minute-to-minute data may capture noise around the slower process.

Do not choose lag based only on available data; justify it theoretically and test alternatives where possible.

## 55. Cross-lagged effects are not automatically causal

Even with temporal ordering:
\`X_t -> Y_(t+1)\`
can be confounded by:
- unmeasured events;
- stable person differences;
- feedback loops;
- measurement error;
- prior trends.

Lagged EMA supports temporal precedence, not randomized causal identification.

## 56. DSEM and advanced models

Dynamic structural equation modeling can:
- estimate within-person autoregression;
- model random dynamic parameters;
- separate latent person means;
- integrate multilevel effects.

But model sophistication does not compensate for:
- wrong sampling interval;
- wrong measurement scale;
- poor construct validity;
- unmeasured event context.

Advanced statistics cannot rescue a misdefined construct.

## 57. Person-specific modeling

Idiographic modeling may be useful when:
- there are enough observations;
- dynamics differ substantially across people;
- group averages mask opposite effects.

But person-specific estimates can be noisy with short series.

Report uncertainty rather than interpreting every individual coefficient as precise.

## 58. Dynamic models and clinical inference

Affect-dynamic metrics are scientifically relevant to psychopathology research.

However:
- many effects overlap with average affect level;
- estimates are design/model dependent;
- clinical groups are heterogeneous;
- causal mechanisms remain unresolved.

Do not diagnose depression, bipolar disorder, borderline personality disorder, or another condition from inertia, variability, or synchrony alone.

## 59. Emotional Dynamics Inference Gate — 56 questions

### A. Construct
1. Is the target mean affect, variability, instability, inertia, reactivity, recovery, transition, recurrence, or synchrony?
2. What exact affect/emotion variable is measured?
3. Is it a composite or specific emotion?
4. Is the scale continuous, ordinal, count-like, or binary?
5. Are floor/ceiling effects present?
6. Is the individual's mean level modeled?

### B. Time and sampling
7. What is the hypothesized process timescale?
8. What is the prompt interval?
9. Is the lag constant?
10. Does the interval match the process?
11. Is sampling too sparse for recovery/oscillation?
12. Is sampling so dense that observations are redundant?
13. Is the total series long enough for person-specific estimates?
14. Are overnight gaps treated appropriately?
15. Are irregular intervals modeled?
16. Could temporal aliasing distort the pattern?

### C. Dynamics
17. Is variability separated from instability?
18. Is inertia separated from innovation variance?
19. Is reactivity tied to an identified event?
20. Is recovery tied to a defined perturbation/baseline?
21. Is recurrence distinguished from persistence?
22. Is positive-state persistence distinguished from negative-state recovery?
23. Is a linear symmetry assumption justified?
24. Are oscillatory/nonlinear regimes plausible?
25. Are stationarity assumptions tested?
26. Are context shifts modeled?

### D. Mixed states
27. Is simultaneous mixed emotion distinguished from rapid alternation?
28. Are positive and negative components measured at the same occasion?
29. Is PA–NA correlation being incorrectly used as direct co-occurrence?
30. Is the context/stressor measured?
31. Is the outcome channel/time horizon specified?
32. Is mixed emotion being labeled adaptive/maladaptive without context?

### E. Interpersonal processes
33. Who is regulating whom?
34. Is regulation intrinsic interpersonal or extrinsic interpersonal?
35. Is social sharing separated from co-rumination?
36. Is synchrony being equated with co-regulation?
37. Is directionality estimable?
38. Is common event exposure controlled?
39. Are stable dyad differences separated from momentary influence?
40. Are both partners' goals/outcomes measured?
41. Is interpersonal and intrapersonal polyregulation considered?

### F. EMA validity
42. Is the design signal-, event-, or diary-contingent?
43. Could nonresponse depend on emotion/context?
44. Is compliance adequate and characterized?
45. Could repeated measurement alter emotion/regulation?
46. Are time-varying events and contexts measured?
47. Are within-person and between-person effects separated?
48. Is the measurement channel valid for the intended construct?
49. Is lag choice theory-driven?
50. Are missing data/model assumptions transparent?

### G. Inference
51. Is autoregression being called a trait?
52. Is a group-average dynamic being assigned to an individual?
53. Is lagged association being treated as causal?
54. Could average affect level explain the apparent dynamic effect?
55. Which rival temporal model/process remains?
56. What is the narrowest conclusion supported by the sampling design?

## 60. Failure modes

A. High inertia → stable/healthy: **invalid**.

B. Low inertia → flexible/healthy: **invalid without context and innovation structure**.

C. High variability → dysregulation: **invalid**.

D. MSSD → unique emotional instability mechanism: **invalid**.

E. Autocorrelation → slow event recovery: **not equivalent**.

F. One \`φ\` → stable trait: **invalid without retest/context evidence**.

G. Daily inertia → minute-scale emotion persistence: **timescale error**.

H. Positive–negative correlation → simultaneous mixed emotion: **invalid operationalization**.

I. Mixed emotions → resilience/maturity: **unsupported universal claim**.

J. Mixed emotions → conflict/pathology: **unsupported universal claim**.

K. Synchrony → co-regulation: **invalid construct substitution**.

L. More synchrony → better relationship/regulation: **not established**.

M. Distress sharing → co-rumination: **invalid**.

N. Lagged EMA effect → causal mechanism: **invalid without stronger identification**.

O. DSEM → automatically valid model: **statistical sophistication is not construct validity**.

P. Group dynamic → individual's mechanism: **cross-level inference error**.

## 61. Closure audit — 18 criteria

1. Mean, variability, instability, inertia, reactivity, recovery and synchrony separated: **PASS**.
2. AR(1) inertia defined with innovation/baseline limits: **PASS**.
3. Inertia versus stability/flexibility distinction explicit: **PASS**.
4. 2026 seven methodological challenges integrated: **PASS**.
5. Sampling interval, density, duration and aliasing addressed: **PASS**.
6. Ordinal/bounded data and stationarity/ergodicity limits included: **PASS**.
7. 2025 inertia–instability evidence incorporated: **PASS**.
8. 2026 state-dependent/asymmetric inertia evidence incorporated: **PASS**.
9. Reactivity, exposure, recovery and recurrence separated: **PASS**.
10. 2025/2026 rumination/strategy–inertia evidence bounded: **PASS**.
11. Mixed emotion and PA–NA operationalization limits explicit: **PASS**.
12. 2025 large-EMA mixed-emotion context evidence incorporated: **PASS**.
13. Interpersonal regulation, sharing, co-rumination and polyregulation separated: **PASS**.
14. Synchrony and co-regulation explicitly separated with 2025 evidence: **PASS**.
15. Directionality, common-cause and dyadic-level inference addressed: **PASS**.
16. EMA missingness/reactivity/lag/ecological-validity limits included: **PASS**.
17. 56-question reusable Emotional Dynamics Inference Gate documented: **PASS**.
18. Privacy-safe content and unambiguous next dependency: **PASS**.

## Canonical operating rule

**Define the affective variable and temporal construct → match sampling interval to process → separate mean/perturbation/persistence → identify events and context → model nonlinear/state-dependent dynamics when required → distinguish mixed co-occurrence from switching → distinguish interpersonal regulation from synchrony → test missingness, within-person, stationarity and lag assumptions → infer only at the measured timescale.**

Never:
**inertia = stability; variability = pathology; synchrony = co-regulation; correlation = mixed emotion; EMA lag = causality; group dynamics = person mechanism.**

## Sources — primary studies, reviews, and methodological references

1. Shao, S., & Ong, A. D. (2026). *Seven challenges in affective inertia research.* Emotion, 26(5), 1118–1132. https://doi.org/10.1037/emo0001630
2. Schneider, S., Junghaenel, D. U., Hernandez, R., & Stone, A. A. (2026). *Emotional inertia is state-dependent: Capturing asymmetry in resistance to change.* Emotion. https://doi.org/10.1037/emo0001749
3. Ong, A. D., Wang, L., Fang, Y., et al. (2025). *Affect dynamics and depressive symptomatology: Revisiting the inertia-instability paradox.* Emotion, 25(4), 1060–1064. https://doi.org/10.1037/emo0001465
4. Murray, A. L., Zhu, X., Xie, T., Shanahan, L., Ribeaud, D., & Eisner, M. (2026). *Emotional inertia in daily life: a dynamic structural equation modelling analysis of the role of emotion regulation strategy use.* Cognition and Emotion. https://doi.org/10.1080/02699931.2026.2751457
5. *Why do feelings persist over time in daily life? Investigating the role of emotion-regulation strategies in the process underlying emotional inertia.* (2025). PMID 40388145. https://pubmed.ncbi.nlm.nih.gov/40388145/
6. *Manifestation of emotion regulation difficulties in intraindividual emotion dynamics.* (2025). PMID 40614701. https://pubmed.ncbi.nlm.nih.gov/40614701/
7. Houben, M., Van Den Noortgate, W., & Kuppens, P. (2015). *The relation between short-term emotion dynamics and psychological well-being: A meta-analysis.* Psychological Bulletin. PMID 25822133. https://pubmed.ncbi.nlm.nih.gov/25822133/
8. Kuppens, P., et al. (2015). *Emotional inertia and external events: The roles of exposure, reactivity, and recovery.* Emotion. PMID 25844974. https://pubmed.ncbi.nlm.nih.gov/25844974/
9. Oh, V. Y. S. (2025). *Torn between valences? Associations between mixed emotions and well-being in stressful and nonstressful situations in a large-scale ecological momentary assessment study.* Emotion, 25(7), 1795–1806. https://doi.org/10.1037/emo0001537
10. Scott, S. B., et al. (2014). *Age, Stress, and Emotional Complexity: Results from Two Studies of Daily Experiences.* Psychology and Aging. https://pmc.ncbi.nlm.nih.gov/articles/PMC4176809/
11. Niven, K., & López-Pérez, B. (2025). *Interpersonal emotion regulation: Reflecting on progress and charting the path forward.* Emotion, 25(2), 277–286. https://doi.org/10.1037/emo0001472
12. Tran, A., Greenaway, K. H., Kostopoulos, J., O'Brien, S. T., & Kalokerinos, E. K. (2023). *Mapping Interpersonal Emotion Regulation in Everyday Life.* Affective Science, 4(4), 672–683. https://doi.org/10.1007/s42761-023-00223-z
13. Kim, S., & Yoon, S. (2024). *Contexts Matter in 'a Distress Shared Is a Distress Halved': A Meta-Analysis of Distress Sharing-Psychological Distress Relations.* Clinical Psychology & Psychotherapy, 31(3), e2999. https://doi.org/10.1002/cpp.2999
14. Somers, J. A., Rinne, G. R., Barclay, M. E., Dunkel Schetter, C., & Lee, S. S. (2025). *Affect synchrony and emotion coregulation are separable processes: Evaluation of relational stress and mother-infant synchrony.* Journal of Family Psychology, 39(4), 454–464. https://doi.org/10.1037/fam0001310
15. Pan, X., Chen, M. S., & Bonanno, G. A. (2026). *Better together? Polyregulation across interpersonal and intrapersonal strategies in civilian and veteran daily life.* Cognition and Emotion. https://doi.org/10.1080/02699931.2026.2713105
16. *The interdependence of emotion regulation in romantic couples: A longitudinal dyadic analysis of six strategies.* (2026). PMID 42295267. https://pubmed.ncbi.nlm.nih.gov/42295267/
17. *Do unto others: People use similar strategies to regulate their own emotions and the emotions of others.* (2026). PMID 40991809. https://pubmed.ncbi.nlm.nih.gov/40991809/

## Scope and next dependency

AFF-03 closes the temporal/ecological and interpersonal dynamics layer needed before domain integration.

**Next block: AFF-04 — Emotion and regulation integration/sufficiency audit: generation, appraisal, expression, regulation, dynamics, measurement, and cross-domain boundaries.**

The audit should determine whether AFF-01…03 jointly prevent the major inference errors required by the project. Any remaining stress-specific, interpersonal, developmental, neural, clinical, or psychometric questions should route to STR/SOC/REL/DEV/NEU/CLN/PSYCHOMETRICS rather than expanding AFF taxonomy without a concrete dependency.
