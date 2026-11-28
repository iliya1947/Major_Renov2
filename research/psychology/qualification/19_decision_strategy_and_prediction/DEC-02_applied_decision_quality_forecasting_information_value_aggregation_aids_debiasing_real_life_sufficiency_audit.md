# DEC-02 — Applied decision quality, forecasting, information value, aggregation, decision aids, debiasing, real-life decisions, and DEC sufficiency audit

Status: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**

Evidence cutoff: **2026-11-19**

## Purpose

Close the remaining DEC qualification dependency after DEC-01.

DEC-01 established:

- normative != descriptive decision analysis;
- decision quality != realized outcome;
- risk != ambiguity;
- expected utility and prospect theory are models, not person-level mechanism truths;
- heuristics are not errors by definition;
- bias labels do not identify mechanisms;
- calibration != discrimination;
- one risky-choice task != global risk preference;
- framing/default effects do not automatically imply welfare improvement.

DEC-02 asks the applied question:

> How should forecasts, advice, information search, multi-attribute trade-offs, reversible/irreversible choices, decision aids, debiasing, and person-level decision competence be evaluated in real-world psychological reasoning?

The goal is not a list of decision hacks.

The goal is a reusable architecture for evaluating decision support.

Canonical rule:

`decision target -> forecast/criteria -> information value -> aggregation/advice -> option structure -> reversibility -> aid/intervention -> calibration/outcomes -> transfer -> person-level limits -> narrow conclusion`.

Never:

`more information -> better decision`

or:

`good forecast once -> good forecaster`.

---

# I. Question Card

## 1. Concrete dependency

Reliable psychological decision support still requires answers to:

1. how probabilistic forecasts should be evaluated;
2. how calibration differs from discrimination and accuracy;
3. what proper scoring rules add;
4. when aggregation/wisdom-of-crowds improves judgment;
5. when advice helps or harms;
6. how much additional information is worth acquiring;
7. how multi-attribute trade-offs should be represented;
8. why reversibility changes optimal deliberation;
9. what decision aids can validly improve;
10. whether debiasing generalizes and persists;
11. how real-life decisions differ from small lab tasks;
12. whether decision competence can be inferred as a stable person trait.

## 2. Question types

- [x] probabilistic forecasting;
- [x] calibration;
- [x] advice and aggregation;
- [x] information value/search;
- [x] multi-attribute choice;
- [x] sequential/reversible choice;
- [x] decision aids;
- [x] debiasing;
- [x] ecological validity;
- [x] person-level inference;
- [ ] individualized financial/legal/medical recommendation.

## 3. Target constructs

- forecast;
- calibration;
- discrimination;
- sharpness/resolution;
- Brier score;
- proper scoring rule;
- advice weight;
- egocentric advice discounting;
- aggregation;
- judgment diversity;
- information value;
- sampling quality;
- stopping/termination quality;
- multi-attribute trade-off;
- compensatory/noncompensatory strategy;
- reversibility;
- option value;
- decision aid;
- values-congruent choice;
- debiasing;
- transfer;
- decision competence.

## 4. Population/context

General adult judgment and decision making.

Examples may come from:

- prediction platforms;
- health decisions;
- national-risk analysis;
- consumer/multi-attribute choice;
- real-life transformative decisions.

No domain is assumed to transport automatically.

## 5. Main alternatives

An apparent improvement in decision quality may instead reflect:

- easier task representation;
- better information;
- aggregation;
- incentives;
- feedback;
- selection of skilled participants;
- domain expertise;
- regression;
- familiarity;
- measurement artifact.

## 6. Outcome

Allowed:

- forecasts are better calibrated in this domain/sample;
- aggregation improved accuracy in this dataset;
- advice weight changed with perceived advisor quality;
- decision aid improved knowledge/values congruence;
- debiasing improved targeted-task performance;
- reversibility changed search/commitment behavior;
- person-level competence is plausible on measured dimensions.

Not allowed:

- universal good forecaster;
- universally rational advisor;
- global decision competence from one task;
- decision aid guarantees better life outcome;
- debiasing training permanently fixes bias;
- more deliberation always improves decisions.

## 7. Time/course

Separate:

- one forecast;
- repeated forecasts;
- calibration over many events;
- immediate training effect;
- delayed transfer;
- repeated real-life decisions;
- longitudinal competence.

## 8. Eligible evidence

Priority:

- current forecasting/aggregation studies;
- current methodological reviews;
- recent systematic reviews/meta-analyses;
- Cochrane decision-aid evidence;
- recent experimental information-search and reversibility studies;
- current real-life decision-making reviews;
- DEC-01/MET/PSYCHOMETRICS boundaries.

## 9. Applicability boundary

This block cannot:

- make a private high-stakes decision for a person;
- infer legal/medical capacity;
- infer one person's global rationality;
- treat historical accuracy as causal proof of forecasting skill without calibration/selection checks;
- equate decision-process improvement with downstream welfare improvement.

## 10. Privacy transform

No individualized decisions, finances, health choices, legal matters, relationships, or private forecasts are stored.

## 11. Closure criterion

DEC closes if:

1. forecasting metrics are separated;
2. aggregation/advice are bounded;
3. information value/search is bounded;
4. multi-attribute decisions are represented;
5. reversibility is represented;
6. decision aids are bounded by target outcome;
7. debiasing durability/transfer is represented;
8. ecological validity is represented;
9. person-level competence is psychometrically bounded;
10. no remaining foundational DEC gap blocks SAF.

---

# II. Forecasts are probability judgments, not prophecies

## 12. Probabilistic forecast

A forecast such as:

- 70% chance of event X

is not a claim that X must occur.

It is a probability assignment.

## 13. One realized event cannot determine calibration

If a 70% event fails to occur, that single outcome does not prove the forecast was bad.

Calibration is evaluated over repeated comparable forecasts.

## 14. Forecast quality has multiple dimensions

At minimum distinguish:

- calibration;
- discrimination/resolution;
- overall proper score;
- usefulness/decision value.

## 15. Calibration

If forecasts near p occur about p proportion of the time, the system is calibrated.

## 16. Discrimination/resolution

Can the forecaster assign higher probabilities to events that occur than to those that do not?

## 17. Sharpness

Does the forecaster make informative probabilities away from an uninformative base-rate forecast when justified?

Sharpness without calibration can be dangerous.

## 18. Decision utility

Even statistically good forecasts may have different usefulness depending on:

- action thresholds;
- costs;
- false-positive/false-negative consequences.

---

# III. Brier score and proper scoring

## 19. Brier score

For a binary event:

`BS = (p - y)^2`

where:

- p = forecast probability;
- y = 0 or 1 outcome.

Lower is better within an appropriate comparison.

## 20. Brier score is a proper scoring rule

Expected score is optimized by reporting one's true probability belief under standard assumptions.

## 21. Brier is not calibration alone

A 2026 methodological paper identifies a common misconception:

`Brier score = calibration metric`.

Incorrect.

It mixes multiple performance aspects.

## 22. Brier depends on outcome prevalence/base risk

The same quality model can produce different Brier scores across populations with different event rates.

Therefore:

`lower Brier in population A than B -> intrinsically better forecaster/model`

can be invalid.

## 23. Zero is not a realistic universal benchmark

A perfectly specified probabilistic model can have nonzero realized Brier score because outcomes remain stochastic.

## 24. Compare within relevant population and benchmark

Useful comparisons include:

- same events/population;
- base-rate forecast;
- alternative forecaster/model.

## 25. Complement Brier with calibration/discrimination

No one score should carry all performance interpretation.

---

# IV. Large-scale real-world forecasting

## 26. 2026 one-million-forecast study

A PNAS study evaluated approximately:

- one million resolved forecasting questions/contracts;
- four collective forecasting platforms;
- twelve domains;
- horizons from hours to years.

## 27. Aggregate calibration was broadly strong

Events assigned p% occurred approximately p% of the time overall.

## 28. Domain-specific miscalibration remained

Some consequential domains showed systematic over- or underestimation.

Therefore:

`forecasting platforms are calibrated -> every domain equally calibrated`

is false.

## 29. Collective calibration != individual forecaster competence

Aggregation can cancel individual errors.

Person-level claims require person-level repeated forecasts.

## 30. Accurate aggregate probabilities do not create certainty

A 70% collective forecast still leaves 30% uncertainty.

---

# V. Forecast explanation and persuasion

## 31. Accurate forecast != persuasive forecast

A 2026 geopolitical forecasting study compared:

- forecast accuracy;
- rationale persuasiveness.

## 32. Persuasion did not track accuracy reliably

Evaluators were not simply more persuaded by more accurate forecasters.

## 33. Confidence/eloquence can mislead

Some cues were persuasive without being related to accuracy.

Therefore:

`sounds confident/clear -> likely accurate`

is unsafe.

## 34. Rationales can contain valid and invalid cues

Decision support should separate:

- evidence quality;
- calibration history;
- rhetorical quality.

SOC owns persuasion/person-perception mechanisms.

---

# VI. Aggregation and wisdom of crowds

## 35. Aggregation can improve judgments

Combining partially independent estimates can reduce idiosyncratic error.

## 36. Independence matters

Correlated errors do not cancel well.

## 37. Diversity can improve aggregate accuracy

A 2026 study using:

- 451,200 probability judgments;
- 376 participants;
- 1,200 claims

found that groups with less-correlated judgments tended to be more accurate.

## 38. Probability aggregation often outperformed simple categorical rules

In that dataset, probability averaging/log-odds aggregation provided strong accuracy-decisiveness trade-offs compared with several voting rules.

## 39. No aggregation rule is universally best

Performance depends on:

- calibration;
- dependence;
- expertise;
- extremization;
- base rates;
- objective.

## 40. Crowd size is not enough

A large crowd sharing the same misinformation can remain wrong.

---

# VII. Aggregated opinions are evidence with a causal history

## 41. Aggregated opinion can be informative

Ratings, polls, forecasts and crowd judgments summarize others' beliefs.

## 42. But the generation process matters

Questions include:

- Are judgments independent?
- Is there copying/herding?
- Who self-selected?
- Are contributors informed?
- Is there manipulation?

## 43. 2025 review emphasizes this causal history

Aggregated opinion should not be treated as raw objective evidence without understanding how it was generated.

## 44. Popularity != truth

High consensus can arise from:

- common evidence;
- social influence;
- common bias;
- platform selection.

---

# VIII. Advice taking

## 45. Advice is external information, not authority by definition

Quality depends on:

- expertise;
- calibration;
- independence;
- relevance;
- conflict of interest.

## 46. Judge–Advisor System

Typical design:

1. initial judgment;
2. advice;
3. revised judgment.

Weight of Advice estimates adjustment toward advice.

## 47. Meta-analysis

A meta-analysis synthesized:

- 346 effect sizes;
- 129 independent datasets;
- N = 17,296.

## 48. Perceived advisor quality affected advice weight

Participants adjusted more toward advisors presented as higher quality.

## 49. Perceived quality != actual quality

A persuasive but inaccurate advisor can receive excess weight.

## 50. Egocentric advice discounting

People often retain too much weight on their initial judgment.

But this is not universal or always irrational.

## 51. Advice discounting can be rational

If:

- advisor quality is uncertain;
- advice is correlated with one's own evidence;
- advisor has different utility/objective.

## 52. Advice averaging can help

Particularly when errors are partly independent.

## 53. Blind averaging can hurt

If one source is much more accurate or systematically biased.

---

# IX. Human versus algorithmic advice

## 54. Algorithm aversion is not universal

A 2026 review of medical decision-making advice literature notes both:

- aversion to algorithmic advice;
- preference for algorithmic advice

across studies.

## 55. One algorithm error can be overweighted

But the strength and direction depend on:

- task;
- transparency;
- control;
- expertise;
- framing.

## 56. Automation bias is the opposite risk

People may overtrust machine recommendations.

Therefore:

`human advice bad / algorithm advice good`

and the reverse are both unsafe.

## 57. AI decision support needs ecology-specific evaluation

A 2026 Nature Reviews Psychology commentary emphasizes that artificial bias tasks do not directly establish real-world decision-support quality.

---

# X. Information has value only relative to a decision

## 58. Information value is instrumental when it can change action

An observation is valuable if it can improve expected decision outcome enough to justify its cost.

## 59. More information can have zero decision value

If no plausible result would change the decision.

## 60. Information can have negative net value

Because it can cost:

- time;
- money;
- attention;
- delay;
- emotional burden.

## 61. Expected value of information

A formal decision-analysis concept asks:

> How much expected decision loss can be reduced by learning more?

## 62. Perfect information and sample information differ

Perfect information eliminates specified uncertainty.

Sample/additional information only reduces it.

## 63. Formal VOI estimates are model-dependent

A 2025 microsimulation study found value-of-information estimates could be biased in absolute terms while remaining internally consistent under some simulation settings.

Therefore:

`computed VOI = true value of more information`

is too strong.

---

# XI. Psychological information seeking

## 64. People seek information for more than instrumental payoff

Possible values include:

- uncertainty reduction;
- curiosity;
- affect regulation;
- control;
- social value.

## 65. Information seeking can be adaptive

A PNAS study analyzed more than:

- one million search decisions;
- over 2,500 participants.

## 66. Search reduced multiple forms of uncertainty

The work distinguished:

- structural uncertainty;
- estimation uncertainty;
- computational uncertainty.

## 67. Search policy was adaptive to task/environment

Sampling changed with:

- instructions;
- prior expectations;
- experience.

## 68. Search is not one "need for certainty" trait

It reflects multiple objectives and constraints.

---

# XII. Sampling quality and stopping quality are different

## 69. Good search requires choosing what to inspect

Sampling quality:

> Are the right pieces of information being sampled?

## 70. Good search also requires knowing when to stop

Termination quality:

> Is search stopped when further information has low marginal value?

## 71. 2026 evidence links both to metacognitive sensitivity

A value-based decision study found metacognitive sensitivity predicted both:

- sampling quality;
- termination quality.

## 72. More search != better search

One can collect:

- redundant;
- correlated;
- low-quality;
- irrelevant

information.

## 73. Under-search and over-search both exist

Too little information risks error.

Too much search imposes opportunity costs and can delay commitment.

---

# XIII. Information avoidance

## 74. Avoiding information is not automatically irrational

People may avoid information because it is:

- non-actionable;
- costly;
- emotionally harmful.

## 75. But avoidable useful information can reduce decision quality

Need to ask whether the information could change action.

## 76. Emotional regulation and instrumental value can conflict

A person may rationally avoid information under one welfare criterion while sacrificing instrumental accuracy.

The objective must be explicit.

---

# XIV. Multi-attribute decisions

## 77. Real choices often involve multiple attributes

Examples:

- cost;
- time;
- quality;
- risk;
- reversibility;
- values fit.

## 78. Weighted-additive model

A compensatory model can represent:

`V(option) = Σ w_j x_ij`.

## 79. Compensatory means trade-offs are allowed

A weakness on one attribute can be offset by strength on another.

## 80. Noncompensatory strategies also exist

Examples:

- lexicographic;
- elimination-by-aspects;
- satisficing;
- threshold rules.

## 81. No strategy is universally rational

Choice depends on:

- goal;
- attribute uncertainty;
- search cost;
- consequences.

## 82. 2026 multiattribute theory

A Psychological Review model describes information search as goal-directed and efficient but not necessarily globally optimal.

Search prioritizes:

- important attributes;
- uncertain information;
- promising options.

## 83. Attention and choice interact

Looking longer at an option can both:

- reflect current preference;
- influence evidence accumulation.

Thus gaze–choice correlation is not automatically causal.

---

# XV. Quantification can distort attribute weighting

## 84. Numbers can facilitate comparison

But they can also receive disproportionate weight.

## 85. Quantification fixation

Across 21 preregistered experiments, presenting one trade-off dimension numerically shifted preferences toward the option favored on that numeric dimension.

## 86. Measured != more important

An attribute can dominate choice because it is easier to quantify.

## 87. Decision aids should not privilege measurable dimensions by accident

Qualitative/identity/ethical attributes need explicit representation when relevant.

---

# XVI. Preference elicitation has uncertainty

## 88. Attribute weights are not perfectly introspectable

People may not know exact weights in advance.

## 89. Preferences can be constructed during choice

Framing, comparisons and available options can affect expressed weights.

## 90. 2026 evidence on inferring decision weights

Decision makers were more accurate than observers at estimating their own attribute weights, but neither perspective should be treated as perfect ground truth.

## 91. Context knowledge improves inference somewhat

Observers performed better when decision context was available.

## 92. Weight estimates are evidence, not immutable values

Repeated choice/context may reveal instability or constructed preference.

---

# XVII. Reversibility changes optimal decision policy

## 93. Reversible and irreversible choices are different problems

If a choice can be undone cheaply, the cost of early commitment decreases.

## 94. 2026 experimental evidence

In a sequential planning task, reversibility led participants to:

- spend less time on the first action;
- reverse earlier choices;
- improve final performance.

## 95. Reversals mostly corrected errors in that task

Larger errors were corrected more precisely.

## 96. Reversibility can justify faster initial action

This is not "impulsivity" by definition.

If correction is cheap, exploration-through-action can be rational.

## 97. Irreversible choices justify more ex ante analysis

Especially when:

- stakes are high;
- uncertainty is material;
- errors are costly.

## 98. Reversibility is graded

Choices can be:

- fully reversible;
- partially reversible;
- reversible at high cost;
- path-dependent.

## 99. Option value matters

Preserving future options can itself have value under uncertainty.

---

# XVIII. Transformative life decisions

## 100. Major life decisions differ from small lotteries

A current review identifies dimensions including:

- conflicting cues;
- change of self;
- uncertain experiential value;
- irreversibility;
- risk.

## 101. Preferences may change after the decision

Career, migration, relationship, identity and major health choices can transform:

- goals;
- values;
- self-concept.

## 102. Current-self utility may not equal future-self utility

Therefore standard static preference models may be incomplete.

## 103. Others' experience can inform without being identical

Sampling others can reduce uncertainty, but:

- preference heterogeneity;
- selection;
- adaptation

limit direct transfer.

## 104. Real-life decisions require ecological evidence

A 2026 review argues for combining naturalistic high-resolution tracking with formal cognitive/computational theory.

---

# XIX. Decision aids

## 105. Decision aid

A decision aid can:

- make options explicit;
- present benefits/harms;
- clarify values;
- structure trade-offs.

## 106. Decision aid != decision maker

It should support, not replace, the person's value judgment where preferences matter.

## 107. Cochrane evidence

The latest Cochrane update included:

- 209 randomized studies;
- 107,698 adults;
- 71 decisions.

## 108. Knowledge improves

Decision aids produced large increases in knowledge.

## 109. Risk perception improves

Participants had more accurate expectations of benefits/harms.

## 110. Values clarity improves

People were clearer about what mattered to them.

## 111. Participation improves

Decision aids increased active involvement.

## 112. Values–choice congruence probably improves

Moderate-certainty evidence found better alignment between informed values and chosen care.

## 113. No decision-regret advantage was established

Decision aids did not show a general reduction in regret in the review.

## 114. Downstream outcomes remain less certain

Evidence for:

- adherence;
- cost;
- resource use;
- long-term health outcomes

was less complete.

## 115. Therefore

`decision aid improved decision process -> improved final outcome`

is not automatic.

---

# XX. Decision aid quality must match its intended target

## 116. Knowledge target

Measure:

- factual comprehension;
- risk understanding.

## 117. Preference target

Measure:

- values clarity;
- values-choice congruence.

## 118. Process target

Measure:

- participation;
- conflict/uncertainty;
- informed choice.

## 119. Outcome target

Measure separately:

- health/function;
- regret;
- adherence;
- welfare.

## 120. One instrument cannot be assumed to measure all targets

A 2026 systematic review of shared-decision process measures found no single instrument with consistently positive evidence across all relevant measurement properties.

---

# XXI. Debiasing

## 121. Debiasing is an intervention, not proof that a bias is one mechanism

Techniques can include:

- explicit instruction;
- representation change;
- feedback;
- checklists;
- consider-the-opposite;
- structured analytic methods.

## 122. 2025 educational debiasing meta-analysis

Included:

- 54 randomized controlled trials;
- 383 effect sizes;
- 10,941 participants.

## 123. Pooled effect was small

For 160 effects from 41 studies:

- g = 0.26;
- 95% CI 0.14–0.39.

## 124. Risk of bias was substantial

All included studies had unclear or high risk of bias.

Publication-bias concerns remained.

## 125. Targeted-task improvement != real-world transfer

The review explicitly identifies transfer outside classroom/lab tasks as unresolved.

## 126. Some biases were harder to change

No universal debiasing technique emerged.

## 127. One-shot training can still work in some expert contexts

A 2025 study found one-shot debiasing reduced confirmation bias in both:

- national risk analysts;
- students.

## 128. This does not prove durable broad transfer

Need:

- delayed testing;
- novel tasks;
- real decisions.

---

# XXII. Debiasing durability

## 129. Immediate effect

Performance improves immediately on trained/similar task.

## 130. Retention

Improvement persists later.

## 131. Near transfer

Improvement generalizes to similar tasks.

## 132. Far transfer

Improvement generalizes to materially different real-world decisions.

## 133. These are separate evidence levels

Do not report:

`training works`

without saying which level was tested.

## 134. Real-world welfare effect is a further level

Even reduced bias-task errors may not alter consequential outcomes.

---

# XXIII. Forecast training

## 135. Feedback can improve forecasting skill

Repeated scored forecasts provide:

- calibration feedback;
- error information;
- domain learning.

## 136. But selection matters

Forecasting communities may retain more skilled/motivated participants.

## 137. Historical accuracy must be time/domain matched

A good forecaster in:

- elections

is not automatically good in:

- medicine;
- technology;
- personal relationships.

## 138. Forecast skill is partly environment-dependent

Event resolvability, base rates and feedback delay matter.

---

# XXIV. Advice, aggregation and confidence

## 139. Confidence should influence advice weighting only if calibrated

A highly confident but miscalibrated advisor is dangerous.

## 140. Advisor track record is stronger than confidence alone

Where available use:

- calibration;
- proper score;
- domain history.

## 141. Independence matters for multiple advisors

Five advisors repeating one source are not five independent signals.

## 142. Diversity is useful when it represents independent information

Diversity for its own sake is not enough.

## 143. Persuasiveness should not substitute for forecasting score

The 2026 geopolitical forecasting study demonstrates this directly.

---

# XXV. Decision competence

## 144. "Decision competence" is multidimensional

Possible components:

- probability comprehension;
- resistance to framing;
- consistency;
- risk literacy;
- calibration;
- information search;
- value integration;
- learning from feedback.

## 145. One battery can sample competence, not capture essence

Performance depends on:

- numeracy;
- working memory;
- knowledge;
- motivation;
- task familiarity.

## 146. Some facets show temporal stability

Prior adulthood reviews report moderate stability for some decision-competence measures.

## 147. Stability does not imply one unitary trait

Cross-task convergence can remain limited.

DEC-01 risk-preference evidence is a direct caution.

## 148. Self-reported competence != performance competence

A 2026 clinical decision-making self-report scale showed high internal consistency in medical students.

Its authors explicitly position it as complementary to performance-based assessment.

## 149. High internal consistency is not decision competence proof

It establishes score consistency under that instrument.

External/performance validity remains separate.

## 150. Domain specificity matters

A person can be skilled in:

- financial comparison

and poor in:

- medical probability interpretation.

## 151. Person-level inference requires repeated multimethod evidence

Use:

- multiple tasks;
- repeated occasions;
- domain-relevant outcomes;
- calibration history;
- psychometric precision.

---

# XXVI. Decision capacity is not the same as decision competence

## 152. Legal/clinical decision-making capacity is a separate construct

It concerns ability to:

- understand;
- appreciate;
- reason;
- express a choice

under legal/clinical standards.

## 153. DEC does not diagnose capacity

Capacity assessment routes to:

- CLN;
- ETH;
- relevant jurisdiction/clinical assessment.

Do not infer incapacity from poor bias-task performance.

---

# XXVII. Real-world ecological validity

## 154. Laboratory tasks isolate mechanisms

This is a strength for internal validity.

## 155. But simplified tasks omit real-world structure

Real decisions may involve:

- changing options;
- social consequences;
- identity;
- delayed feedback;
- incomplete probabilities;
- irreversible paths.

## 156. Real-world data alone are not enough

Large naturalistic datasets can still be correlational and theory-poor.

## 157. Current best direction is integration

Combine:

- formal models;
- naturalistic process data;
- repeated measurement;
- ecological task design.

## 158. Ecological validity is not "looks realistic"

It requires evidence that:

- task structure;
- cues;
- constraints;
- behavior

map to the target environment.

---

# XXVIII. Sequential decisions

## 159. Many decisions are policies, not one choices

Examples:

- sample more;
- act;
- review;
- revise;
- stop.

## 160. Commitment policy matters

The decision includes:

- when to commit;
- whether to preserve reversal;
- whether to seek more evidence.

## 161. Information and action can be interleaved

Acting can generate information.

Therefore:

`must know everything before acting`

is often impossible.

## 162. Reversible action can be information gathering

A small reversible test can reduce uncertainty.

BHC owns intervention design; DEC owns decision structure.

---

# XXIX. Multi-stage decision quality

## 163. Stage 1 — define objective

What is being optimized?

## 164. Stage 2 — define constraints

Time, money, safety, reversibility.

## 165. Stage 3 — identify options

Including status quo and delay.

## 166. Stage 4 — identify material attributes

Avoid quantification fixation.

## 167. Stage 5 — estimate uncertainty

Probabilities, confidence, unknowns.

## 168. Stage 6 — seek high-value information

Not all available information.

## 169. Stage 7 — aggregate/advice

Weight by quality/independence.

## 170. Stage 8 — choose/commit

Use a rule appropriate to objective.

## 171. Stage 9 — preserve revision where valuable

Option value/reversibility.

## 172. Stage 10 — evaluate process separately from outcome

Avoid hindsight/outcome bias.

---

# XXX. Common applied-decision errors

## Failure A — correct event = good forecast

Incorrect.

## Failure B — failed event = bad forecast

Incorrect.

## Failure C — Brier score = calibration

Incorrect.

## Failure D — lower Brier across different populations = better forecaster

Unsafe.

## Failure E — crowd agreement = truth

Incorrect.

## Failure F — bigger crowd = better forecast

Not necessarily.

## Failure G — persuasive rationale = accurate forecast

Incorrect.

## Failure H — advice should always be averaged

Incorrect.

## Failure I — advisor confidence = advisor quality

Incorrect.

## Failure J — algorithm aversion is universal

Incorrect.

## Failure K — algorithm advice should always override human judgment

Incorrect.

## Failure L — more information = higher decision quality

Incorrect.

## Failure M — more search = better metacognition

Incorrect.

## Failure N — information avoidance = irrationality

Not automatically.

## Failure O — numerical attribute = more important attribute

Incorrect.

## Failure P — weighted-additive model = true internal process

Incorrect.

## Failure Q — reversible decision should receive same ex ante effort as irreversible one

Incorrect.

## Failure R — reversing a choice = indecision/failure

Incorrect.

## Failure S — decision aid picks the right answer

Wrong target.

## Failure T — improved knowledge = improved final welfare

Not automatic.

## Failure U — debiasing task effect = durable broad change

Incorrect.

## Failure V — one-shot training = stable rationality improvement

Incorrect.

## Failure W — bias reduction = mechanism repair

Incorrect.

## Failure X — one decision battery = global competence

Incorrect.

## Failure Y — self-rated competence = actual competence

Incorrect.

## Failure Z — real-world data = causal truth

Incorrect.

---

# XXXI. 112-question Applied Decision Quality Inference Gate

## A. Decision target

1. What decision?
2. What forecast?
3. What outcome?
4. What time horizon?
5. Reversible?
6. Stakes?
7. Who bears consequences?
8. What is the objective?
9. What alternatives?
10. Is status quo explicit?

## B. Forecasting

11. Probability forecast or categorical claim?
12. Base rate?
13. Forecast resolution?
14. Repeated enough for calibration?
15. Calibration?
16. Discrimination?
17. Sharpness?
18. Proper score?
19. Brier benchmark?
20. Same population for score comparison?

## C. Forecast source

21. Individual?
22. Crowd?
23. Prediction market?
24. Model?
25. Human–AI combination?
26. Domain track record?
27. Selection bias?
28. Resolution criteria clear?

## D. Aggregation

29. How many sources?
30. Independent?
31. Common evidence?
32. Correlated errors?
33. Diversity?
34. Expertise?
35. Averaging or log-odds?
36. Extremization?
37. Is consensus being mistaken for truth?
38. Does aggregation improve held-out score?

## E. Advice

39. Initial judgment elicited?
40. Advisor quality known?
41. Advisor calibration?
42. Relevant expertise?
43. Conflict of interest?
44. Advice weight?
45. Egocentric discounting?
46. Overweighting?
47. Human or algorithmic?
48. Is persuasion being mistaken for accuracy?

## F. Information value

49. What uncertainty remains?
50. Could information change action?
51. Instrumental value?
52. Emotional value?
53. Search cost?
54. Delay cost?
55. Opportunity cost?
56. Information source quality?
57. Independence?
58. Is VOI formal or intuitive estimate?

## G. Search

59. Sampling quality?
60. Termination quality?
61. Under-search?
62. Over-search?
63. Redundant evidence?
64. Confirmation-focused search?
65. Search is adaptive to environment?
66. Is more search assumed better?

## H. Multi-attribute structure

67. Which attributes?
68. Which are quantified?
69. Which are qualitative?
70. Are weights explicit?
71. Compensatory?
72. Threshold/noncompensatory?
73. Attribute uncertainty?
74. Quantification fixation?
75. Preference construction?
76. Are weights stable across context?

## I. Reversibility

77. Fully reversible?
78. Partially reversible?
79. Reversal cost?
80. Path dependence?
81. Option value?
82. Can action generate information?
83. Is first action over-deliberated despite cheap reversal?
84. Is irreversible decision under-deliberated?

## J. Decision aid

85. Information aid?
86. Risk communication?
87. Values clarification?
88. Option comparison?
89. Knowledge outcome?
90. Risk-perception outcome?
91. Values congruence?
92. Participation?
93. Regret?
94. Downstream welfare?

## K. Debiasing

95. What bias/task?
96. Randomized control?
97. Immediate effect?
98. Delayed retention?
99. Near transfer?
100. Far transfer?
101. Real-world outcome?
102. Publication/risk-of-bias concerns?

## L. Person-level competence

103. Performance or self-report?
104. Multiple tasks?
105. Repeated occasions?
106. Cross-domain?
107. Psychometric reliability?
108. Calibration history?
109. Domain knowledge?
110. State/context?
111. Alternatives?
112. What is the narrowest defensible person-level conclusion?

---

# XXXII. Cross-domain routing

## 173. MET

Information seeking, stopping, confidence revision route to MET.

## 174. PSYCHOMETRICS

Person-level competence/reliability/calibration measurement routes to PSYCHOMETRICS.

## 175. COG

Probability reasoning/causal reasoning routes to COG.

## 176. MOT

Subjective value, delay, effort/cost route to MOT.

## 177. SOC

Advice trust, persuasion, social influence route to SOC.

## 178. BHC

Decision aid/debiasing intervention efficacy routes to BHC methodology.

## 179. ETH

Manipulative choice architecture, autonomy, AI advice/fairness route to ETH.

## 180. SAF

High-stakes risk/crisis decision thresholds route to SAF.

---

# XXXIII. Evidence-strength map

## High-confidence practical boundaries

1. probabilistic forecasts require repeated evaluation;
2. calibration, discrimination, sharpness and overall score differ;
3. Brier score is not a pure calibration measure;
4. cross-population Brier comparisons can mislead;
5. aggregate forecasting platforms can be well calibrated while domain errors remain;
6. aggregate calibration does not imply individual calibration;
7. aggregation benefits depend on independence/error diversity;
8. crowd agreement does not equal truth;
9. perceived advisor quality influences advice weight;
10. confidence/persuasiveness are not reliable substitutes for advisor accuracy;
11. information value depends on whether it can change a consequential decision;
12. sampling quality and stopping quality are separate;
13. multi-attribute decisions require explicit attribute/weight/uncertainty structure;
14. quantified dimensions can be overweighted;
15. reversibility changes optimal commitment policy;
16. decision aids robustly improve knowledge/risk understanding and participation in health decisions;
17. decision-process improvement does not guarantee downstream welfare improvement;
18. debiasing educational interventions show small average targeted effects with uncertain real-world transfer;
19. real-life transformative decisions differ structurally from simple lotteries;
20. decision competence should not be inferred as one unitary trait from one task or self-report.

## Supported but context-sensitive

1. probability aggregation;
2. advice averaging;
3. algorithmic advice;
4. VOI calculations;
5. information-seeking strategies;
6. weighted-additive multi-attribute methods;
7. reversible experimentation;
8. patient decision aids;
9. debiasing training;
10. forecast training.

## Not established as universal

1. one best forecasting score;
2. one best crowd aggregation rule;
3. one universal advisor-weight policy;
4. more information as always better;
5. one true set of stable attribute weights;
6. reversibility as always beneficial;
7. decision aids as improving all downstream outcomes;
8. one-shot debiasing as durable far-transfer intervention;
9. one global decision-competence trait;
10. laboratory bias resistance as real-life rationality.

---

# XXXIV. Integrated DEC cross-check with DEC-01

## 181. Normative/descriptive consistency

DEC-01:

- name normative benchmark before bias.

DEC-02:

- name target metric/outcome before judging support quality.

Compatible.

## 182. Calibration consistency

DEC-01:

- calibration != discrimination.

DEC-02:

- forecasting metrics remain separated and Brier is bounded.

Compatible.

## 183. Resource-rationality consistency

DEC-01:

- limited resources can make heuristics adaptive.

DEC-02:

- search/stopping/reversibility depend on information and commitment costs.

Compatible.

## 184. Person-level consistency

DEC-01:

- one risk task != global risk trait.

DEC-02:

- one forecast/task/self-report != global decision competence.

Compatible.

## 185. Intervention consistency

DEC-01:

- choice architecture changes behavior without proving welfare improvement.

DEC-02:

- decision aids/debiasing require target-specific outcome evaluation.

Compatible.

## 186. No blocking contradiction remains

DEC-01 and DEC-02 form one coherent decision-science reasoning architecture.

---

# XXXV. DEC sufficiency audit — 20/20

## Criterion 1 — normative/descriptive architecture

**PASS.**

DEC-01.

## Criterion 2 — risk/ambiguity/reference architecture

**PASS.**

DEC-01.

## Criterion 3 — heuristics/biases bounded

**PASS.**

DEC-01.

## Criterion 4 — probability representation/base rates

**PASS.**

DEC-01.

## Criterion 5 — forecasting metrics

**PASS.**

Calibration/discrimination/sharpness/proper score separated.

## Criterion 6 — Brier interpretation

**PASS.**

Population dependence and calibration misconception blocked.

## Criterion 7 — aggregation

**PASS.**

Independence/diversity/aggregation method explicit.

## Criterion 8 — advice

**PASS.**

Advisor quality, perceived quality, egocentric discounting and AI advice bounded.

## Criterion 9 — value of information

**PASS.**

Instrumental value/cost/model-dependence represented.

## Criterion 10 — search/stopping

**PASS.**

Sampling and termination quality separated.

## Criterion 11 — multi-attribute decisions

**PASS.**

Compensatory/noncompensatory search and quantification fixation represented.

## Criterion 12 — reversibility

**PASS.**

Commitment policy/option value represented.

## Criterion 13 — transformative real-life decisions

**PASS.**

Small-world transport is explicitly bounded.

## Criterion 14 — decision aids

**PASS.**

Knowledge/risk/values/process outcomes separated from downstream welfare.

## Criterion 15 — debiasing

**PASS.**

Immediate, retention, near/far transfer and real-world outcomes separated.

## Criterion 16 — ecological validity

**PASS.**

Naturalistic data and formal theory must be integrated.

## Criterion 17 — decision competence

**PASS.**

Multidimensional, performance/self-report and psychometric boundaries explicit.

## Criterion 18 — capacity boundary

**PASS.**

Legal/clinical decision capacity is not inferred from DEC tasks.

## Criterion 19 — DEC-01 consistency

**PASS.**

No conceptual contradiction identified.

## Criterion 20 — progression decision

**PASS.**

No scientifically necessary DEC-03 dependency is identified.

---

# XXXVI. Decision

**DEC-02 is COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS.**

**DEC sequence: COMPLETE_FOR_CURRENT_SCOPE.**

No DEC-03 is required for the current project purpose.

DEC now provides generic competence in:

1. normative/descriptive decision analysis;
2. risk/ambiguity/reference dependence;
3. heuristics/biases;
4. probability/base-rate representation;
5. calibration/confidence;
6. forecasting/scoring;
7. crowd aggregation;
8. advice;
9. information value/search/stopping;
10. multi-attribute decisions;
11. reversible/irreversible decisions;
12. decision aids;
13. debiasing;
14. real-life/ecological decision structure;
15. person-level decision-competence limits.

## Deferred nonblocking topics

Open only if later dependency requires them:

- full decision-theory mathematics;
- Bayesian decision analysis implementation;
- advanced forecast-combination algorithms;
- market design;
- financial portfolio theory;
- formal MCDA software methods;
- causal decision theory;
- AI-agent decision policy engineering;
- legal/clinical capacity instruments.

## Next Phase C dependency

**SAF — safety/crisis/referral thresholds.**

Do not begin SAF in this continuation.

Canonical storage path must be verified/mapped before SAF-01.

---

# XXXVII. Canonical DEC control formula

**Decision support should optimize a named objective under explicit uncertainty, information cost, option structure, reversibility, and measurement constraints; process quality must remain separate from realized outcome.**

Use:

`objective -> uncertainty/forecast -> scoring/calibration -> information value -> advice/aggregation -> attributes/trade-offs -> reversibility -> aid/intervention -> process/outcome evaluation -> transfer -> person-level limits`.

Never:

`right once -> good forecaster`

`Brier -> calibration`

`crowd -> truth`

`confidence -> expertise`

`more information -> better decision`

`more search -> better reasoning`

`number -> importance`

`reversal -> indecision`

`decision aid -> correct answer`

`debiasing effect -> durable rationality`

`one battery -> global decision competence`.

---

# Sources

1. Dickerson, J., Shinitzky, H., Peer, M., Ben-Shachar, M. S., & Gilead, M. (2026). **Calibration, accuracy, and domain variation across one million collective forecasts from prediction platforms.** *PNAS, 123*(43), e2615627123. PMID: 42896054. https://doi.org/10.1073/pnas.2615627123
2. Hoessly, L., & Parry, M. (2026). **How to evaluate probabilistic prediction models: key metrics.** *Journal of Clinical Epidemiology, 194*, 112247. PMID: 41881200.
3. **On misconceptions about the Brier score in binary prediction models.** (2026). PMID: 41567946.
4. **Condorcet and Beyond: An Empirical Comparison of Voting Rules.** (2026). PMID: 42497077.
5. Oktar, K., & Lombrozo, T. (2025). **How aggregated opinions shape beliefs.** *Nature Reviews Psychology, 4*, 81–95. https://doi.org/10.1038/s44159-024-00398-7
6. Bailey, P. E., Leon, T., Ebner, N. C., Moustafa, A. A., & Weidemann, G. (2023). **A meta-analysis of the weight of advice in decision-making.** *Current Psychology, 42*, 24516–24541. PMID: 39711945.
7. Kostopoulou, O. (2026). **Advice taking in medical decision making.** *La Presse Médicale, 55*(4), 104360. PMID: 42229629.
8. **Do People Listen to Cassandra? Persuasion and Accuracy in Geopolitical Forecasts.** (2026). PMID: 41105022.
9. Spektor, M. S., & Wulff, D. U. (2024). **Predecisional information search adaptively reduces three types of uncertainty.** *PNAS, 121*(47), e2311714121. PMID: 39546563.
10. Hu, X., et al. (2026). **Metacognitive sensitivity predicts the quality of information search in value-based decision making.** *Cognition*, 106410. https://doi.org/10.1016/j.cognition.2025.106410
11. Kobayashi, K., & Kable, J. W. (2024). **Neural mechanisms of information seeking.** *Neuron, 112*(11), 1741–1756. PMID: 38703774.
12. Torunsky, N. T., Kedrick, K., & Vilares, I. (2025). **Information seeking and the expected utility of information about COVID-19 can be associated with uncertainty and related attitudes.** *Scientific Reports, 15*, 6096. PMID: 39971991.
13. Goldhaber-Fiebert, J. D., Jalal, H., & Alarid-Escudero, F. (2025). **Microsimulation Estimates of Decision Uncertainty and Value of Information Are Biased but Consistent.** *Medical Decision Making, 45*(2), 127–142. PMID: 39720850.
14. Gluth, S., Deakin, J., & Rieskamp, J. (2026). **A theory of multiattribute search and choice.** *Psychological Review*. PMID: 41854696. https://doi.org/10.1037/rev0000614
15. Atun, G., de Gardelle, V., & Usher, M. (2026). **Contrasting holistic-compensatory with probabilistic heuristic strategies in multi-attribute decisions.** *Psychonomic Bulletin & Review*. PMID: 41761010.
16. Chang, L. W., et al. (2024). **Does counting change what counts? Quantification fixation biases decision-making.** *PNAS*. PMID: 39467152.
17. **Beyond introspection: Inferring decision weights from others' multiattribute choices.** (2026). PMID: 42986365.
18. Bao, S. D., Kim, D., Fu, Q. X., & Ma, W. J. (2026). **Decision reversals in sequential decision-making.** *Communications Psychology*. PMID: 42448763. https://doi.org/10.1038/s44271-026-00496-7
19. Hechtlinger, S., Schulze, C., Leuker, C., & Hertwig, R. (2026). **The psychology of life's most important decisions.** *American Psychologist, 81*(2), 157–183. PMID: 39541520.
20. **Toward a psychology of real-life decision-making.** (2026). PMID: 42586903.
21. Stacey, D., et al. (2024). **Decision aids for people facing health treatment or screening decisions.** *Cochrane Database of Systematic Reviews*, CD001431. 209 studies, 107,698 participants. https://doi.org/10.1002/14651858.CD001431.pub6
22. **Quality of instruments to assess the process of shared decision-making: a comprehensive systematic review and COSMIN quality appraisal.** (2026). PMID: 42303375.
23. Swaryandini, G., et al. (2025). **Systematic review and meta-analysis of educational approaches to reduce cognitive biases among students.** *Nature Human Behaviour, 9*, 2510–2538. PMID: 40858766. https://doi.org/10.1038/s41562-025-02253-y
24. **Debiasing training reduces confirmation bias in national risk analysts.** (2025). PMID: 41286330.
25. Kopka, M. (2026). **The bat, the ball and the ecology of AI decision support.** *Nature Reviews Psychology*. https://doi.org/10.1038/s44159-026-00627-1
26. Fischhoff, B., & Broomell, S. B. (2020). **Judgment and Decision Making.** *Annual Review of Psychology, 71*, 331–355. https://doi.org/10.1146/annurev-psych-010419-050747
27. **Development of a self-reported clinical decision-making competence scale for medical students.** (2026). PMID: 42700300.
28. DEC-01 — Judgment and decision foundations. Current branch canonical block.
29. MET-01/02 — confidence/calibration and metacognitive control. Current branch.
30. PSYCHOMETRICS-01/03 — person-level measurement and uncertainty. Current branch.
31. COG-07 — reasoning and inference. Current branch.
32. SOC sequence — advice, trust, persuasion, social influence boundaries. Current branch.
33. BHC-01 — intervention-effect/mechanism/implementation boundaries. Current branch.

## Source-boundary note

The 2026 PNAS forecasting study concerns **collective forecasts** from forecasting platforms; it is not evidence that every participant or every domain is individually calibrated.

The Brier-score methodological paper is used to prevent metric misuse. Brier score remains useful, but it should be interpreted with calibration/discrimination/context rather than as a pure calibration statistic.

The 2026 aggregation study concerns a specific dataset of general-knowledge claims; its ranking of aggregation rules is not treated as universally optimal.

The advice meta-analysis summarizes the Judge–Advisor paradigm and perceived advisor quality; perceived quality is explicitly not equated with actual accuracy.

The information-search studies demonstrate adaptive sampling/stopping in their tasks and do not establish one universal information-seeking strategy.

The 2026 reversibility experiment demonstrates benefits of reversible action in one sequential planning task; it does not prove that every reversible real-world choice should be made quickly.

The Cochrane decision-aid review is current as a 2024 publication but its search was up to March 2022. Its strong findings concern knowledge, risk perception, participation, and values-congruent choice; it does not establish universal downstream outcome improvement.

The 2025 debiasing meta-analysis supports small average effects on targeted bias tasks with unresolved real-world transfer. It is not used to claim durable global rationality improvement.

Decision competence is treated as multi-component and method-dependent. Self-report competence scales are not treated as substitutes for performance evidence.

No source is used to infer or recommend any individualized financial, legal, health, relationship, or other high-stakes decision.
