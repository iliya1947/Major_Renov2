# RES-02 / PASS-06B15 — Complex event outcome prediction: competing risks, recurrent events and multistate structures

Статус: **COMPLETE MICRO-PASS — prediction branch remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. ordinary first-event survival as reference structure;
2. competing risks;
3. cause-specific hazard vs cumulative-incidence prediction target;
4. why absolute risk under competing events differs from naive survival complement;
5. development/validation implications for competing-risk prediction;
6. recurrent events;
7. next-event / gap-time / event-count / rate targets;
8. within-person event dependence;
9. why first-event reduction loses recurrent information;
10. multistate prediction;
11. transition intensities vs transition/state-occupation probabilities;
12. repeated/reversible transitions;
13. history dependence / Markov boundary at taxonomy level;
14. relation among competing-risk, recurrent-event and multistate structures;
15. implications for model performance and validation;
16. fitness/exercise examples;
17. structural record.

Не покрывается здесь:

- Fine–Gray / cause-specific model formulas;
- exact Aalen–Johansen estimators;
- Andersen–Gill / PWP / frailty model mathematics;
- recurrent-event calibration formulas;
- multistate likelihoods;
- Markov/semi-Markov estimation details;
- sample-size methods;
- competing-risk causal inference;
- recurrent-event treatment-effect analysis;
- detailed recurrent-event ML/DL methods;
- final prediction-branch synthesis.

---

# Sources checked

## 1. Cochrane Prognosis Handbook — Chapter 3

**Chapter 3: Statistical measures in prognosis research.**  
Current official draft checked 2026-11-17.

Relevant current guidance:

- competing events must be distinguished from ordinary censoring;
- cause-specific HRs and subdistribution HRs target different quantities;
- interpretation of prognostic effects changes according to how competing events are handled;
- reviewers should extract exactly how competing events were treated.

Current status remains **Draft version March 2026**.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-3-statistical-measures-prognosis-research

---

## 2. Riley et al. / competing-risk prediction-model validation guide

**Validation of prediction models in the presence of competing risks: a guide through modern methods.**  
BMJ. 2022;377:e069249.

Checked 2026-11-17.

Key guidance:

- for absolute-risk prediction in competing-risk settings, the primary target is usually the **cumulative incidence** of the event of interest by a specified horizon;
- competing events must be accounted for during both development and validation;
- treating competing events as ordinary non-informative censoring when estimating cumulative incidence can overestimate absolute risk;
- calibration, discrimination, overall error and decision-curve quantities can all be defined/evaluated in a competing-risk framework.

https://www.bmj.com/content/377/bmj-2021-069249

---

## 3. Contemporary competing-risk epidemiology guidance

Sørensen et al.  
**An Introduction to Competing Risks in Epidemiology.**  
Clinical Epidemiology. 2026.

Checked 2026-11-17.

Relevant points:

- competing risks arise when individuals are at risk for mutually exclusive event types and one event changes/prevents the possibility of another;
- cumulative incidence functions provide event-type-specific absolute risks;
- cause-specific hazards and cumulative-incidence/subdistribution approaches have different interpretations.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13007359/

---

## 4. Current prediction review discussing competing-risk absolute risk

**Risk Prediction in Cardio-Oncology: Conceptual and Methodological Considerations.**  
JACC: CardioOncology. 2026.

Checked 2026-11-17.

Relevant prediction-specific point:

- cause-specific hazard models can still be used to obtain cumulative-incidence predictions when all relevant cause-specific hazards are modelled and combined;
- Fine–Gray models can directly target the cumulative-incidence scale;
- method label alone does not identify the final prediction estimand.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13133652/

---

## 5. Recurrent-event prediction systematic review

**Systematic review of methods used in prediction models with recurrent event data.**  
2024.

Checked 2026-11-17.

Key findings:

- recurrent events are repeated occurrences of the same or closely related outcome in one individual;
- 301 prediction-model studies were reviewed;
- a wide range of recurrent-event model families were used;
- only 75/301 (24.9%) performed internal validation;
- only 3/301 (1.0%) performed external validation;
- reducing recurrent processes to a binary “any recurrence” outcome loses information about event timing and repeated-event history;
- methodological standardization of recurrent-event prediction remains limited.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11302841/

---

## 6. Recurrent-event performance guide

**Guide to evaluating performance of prediction models for recurrent clinical events.**  
2025.

Checked 2026-11-17.

Relevant points:

- recurrent-event prediction targets can involve event counts and repeated event histories rather than one probability of a first event;
- traditional calibration/discrimination methods are not always directly transferable;
- prediction error and observed-versus-predicted event counts can be relevant targets;
- performance methodology for recurrent-event models is less mature than ordinary single-event prediction.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11912649/

---

## 7. Recurrent-event epidemiology tutorial

**Modelling recurrent events: a tutorial for analysis in epidemiology.**

Used for taxonomy-level distinctions:

- gap-time/next-event approaches;
- total-time approaches;
- mean/rate/count approaches;
- frailty approaches for within-person heterogeneity;
- different recurrent-event models answer different questions and are not interchangeable.

https://pmc.ncbi.nlm.nih.gov/articles/PMC4339761/

---

## 8. STRATOS-oriented multistate review

Cook RJ, et al.  
**An Overview and Recent Developments in the Analysis of Multistate Processes.**  
Statistics in Medicine. 2026;45:e70493.

Checked 2026-11-17.

Key taxonomy:

- multistate models represent processes as transitions among a finite set of states;
- possible targets include:
  - transition intensities;
  - transition probabilities;
  - state-occupation probabilities;
- multistate models support prediction for multiple event/state types;
- process history and time-scale assumptions matter;
- standard multistate regression parameters do not automatically have a causal interpretation.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13174117/

---

## 9. Multistate outcome-probability framework

**Inference for outcome probabilities in multi-state models.**

Used only for foundational taxonomy:

- transition probability = probability of being in state j at future time t given current state/history;
- state-occupation probability = probability of occupying a specified state at a future time.

https://pmc.ncbi.nlm.nih.gov/articles/PMC2735091/

---

# Part A — Reference structure: ordinary first-event survival

## 1. Standard first-event target

### Established finding
**Confidence: HIGH**

Ordinary survival prediction commonly asks:

> What is the probability/time distribution of the **first occurrence** of event Y after T0?

Canonical structure:

`T0 → event-free follow-up → first event Y or censoring → risk by horizon t`

This is appropriate when:

- only the first event is scientifically relevant;
- later recurrences are outside scope;
- competing event types do not materially alter the target;
- state transitions need not be represented.

---

## 2. First-event survival is not a universal template

### Established finding
**Confidence: HIGH**

It becomes inadequate when:

- another event prevents the target event;
- the same outcome can recur and recurrences matter;
- the individual's path through intermediate states matters;
- the target is state occupancy or transition-specific risk.

### Project rule

Before choosing a time-to-event model, define the **event-process architecture**, not only the endpoint label.

---

# Part B — Competing risks

## 3. Core definition

### Established finding
**Confidence: HIGH**

A competing event is an event whose occurrence prevents or fundamentally changes the possibility of subsequently observing the event of interest in the target sense.

Example:

- target: reinjury before return to sport;
- competing event: permanent withdrawal from sport before reinjury opportunity.

In classical competing-risk structures, event types are mutually exclusive as the first terminal event.

---

## 4. Competing event is not ordinary censoring

### Established finding
**Confidence: HIGH**

Loss to follow-up creates uncertainty about what would later happen.

A competing event is an observed outcome that changes the event process itself.

### Project rule

Record separately:

- administrative/loss-to-follow-up censoring;
- competing event.

Do not collapse both into:

> censored.

---

# Part C — Absolute risk target under competing events

## 5. Cumulative incidence

### Established finding
**Confidence: HIGH**

For prognosis, the clinically/practically relevant absolute-risk target is often:

> probability that event type k occurs by horizon t before any competing event occurs first.

This is the event-specific **cumulative incidence function (CIF)**.

Conceptually:

`P(event k by t in the presence of the competing event process)`

---

## 6. Naive 1 − Kaplan–Meier can overestimate absolute risk

### Established finding
**Confidence: HIGH**

If competing events are treated as if they were ordinary independent censoring when estimating absolute event risk, the resulting risk can be too high.

Reason:

> the calculation acts as if people experiencing the competing event could still later experience the target event in the same risk set.

BMJ competing-risk validation guidance explicitly warns that ignoring competing events distorts absolute-risk estimation and calibration.

---

# Part D — Cause-specific hazard vs cumulative-incidence target

## 7. Cause-specific hazard

### Established finding
**Confidence: HIGH**

A cause-specific hazard asks about the instantaneous event rate for cause k among individuals who are currently still event-free.

This is a **rate/hazard estimand**, not itself an absolute probability.

---

## 8. Cumulative incidence is an absolute-probability target

### Established finding
**Confidence: HIGH**

CIF asks:

> what fraction/probability will experience cause k by time t, considering the fact that competing events remove opportunities for the target event?

### Project rule

For individual absolute-risk prediction, do not report a cause-specific hazard ratio as though it were the predicted cumulative probability.

---

## 9. Cause-specific models can still generate absolute-risk predictions

### Established finding
**Confidence: HIGH**

A cause-specific modelling strategy can produce CIF predictions if:

- the relevant cause-specific hazards are modelled;
- they are combined with overall event-free survival.

Therefore the project must distinguish:

1. **modelling scale**;
2. **prediction estimand**.

A cause-specific Cox model is not automatically “non-predictive”.

---

## 10. Fine–Gray/subdistribution modelling is not the only valid prediction route

### Established finding
**Confidence: HIGH**

Subdistribution-hazard/Fine–Gray models can target cumulative incidence more directly.

But absolute-risk prediction can also arise from cause-specific models.

### Project rule

Do not classify the prediction question from the regression-family name alone.

Extract the actual predicted quantity:

- cause-specific hazard;
- subdistribution hazard;
- cumulative incidence;
- state probability.

---

# Part E — Competing-risk development and validation

## 11. Development must align with the competing-risk estimand

### Established finding
**Confidence: HIGH**

If intended output is:

> 12-month absolute risk of event A in the presence of event B,

then development must preserve enough information to estimate that target.

Simply fitting ordinary first-event survival with competing events censored and interpreting 1-survival as absolute risk is not equivalent.

---

## 12. Validation must also account for competing events

### Established finding
**Confidence: HIGH**

BMJ guidance emphasizes that competing events matter during validation, especially for calibration.

Performance can be evaluated using competing-risk versions of:

- calibration;
- discrimination;
- overall prediction error;
- decision utility.

### Project rule

A model developed for competing-risk CIF cannot be validly calibrated against an observed outcome estimator that ignores competing events.

---

# Part F — Competing risk vs multistate relationship

## 13. Competing-risk structure is a simple multistate structure

### Established methodological synthesis
**Confidence: HIGH**

A basic competing-risk process can be represented as:

`event-free → target event`

or

`event-free → competing event`

with both destination states absorbing.

Thus competing risk can be viewed as a special multistate model.

### Project consequence

This relationship does not make the terms interchangeable.

Use:

- **competing risk** when the scientific question concerns mutually exclusive terminal event types from a shared origin;
- **multistate** when the broader transition pathway itself matters.

---

# Part G — Recurrent events

## 14. Core definition

### Established finding
**Confidence: HIGH**

A recurrent event process allows the same individual to experience the target event more than once.

Examples:

- repeated injury episodes;
- repeated migraine attacks;
- repeated hospitalizations;
- repeated training interruptions.

### Core distinction

After the first event, the person may remain at risk for another event.

This differs fundamentally from ordinary first-event survival.

---

# Part H — First-event reduction loses information

## 15. Time-to-first-event uses only the first occurrence

### Established finding
**Confidence: HIGH**

If an individual has events at:

- week 3;
- week 7;
- week 10;

ordinary first-event survival uses week 3 and discards the later recurrence history for that outcome.

### Project consequence

Time-to-first-event may still be a legitimate question, but it does **not** answer:

- how many events occur;
- how quickly recurrence occurs;
- whether event frequency accelerates;
- how prior events change later risk.

---

## 16. Binary “ever recurrent” reduction also loses timing/count information

### Established finding
**Confidence: HIGH**

Converting recurrent history to:

> recurrence YES/NO

discards:

- number of recurrences;
- timing;
- inter-event intervals;
- exposure/follow-up time.

The 2024 systematic review explicitly identifies such reduction as inappropriate when the scientific target concerns the recurrent process itself.

---

# Part I — Recurrent-event prediction targets are heterogeneous

## 17. Next-event / gap-time target

### Established finding
**Confidence: HIGH**

Question:

> Given current history, when will the next event occur?

Target may be:

- next-event probability within a window;
- distribution of the next gap time;
- event-specific recurrence time.

This is naturally dynamic after each recurrence.

---

## 18. Event count target

### Established finding
**Confidence: HIGH**

Question:

> How many events will this person experience over the next 12 months?

Prediction target:

- expected count;
- count distribution;
- prediction of individual event burden.

This is not the same as next-event risk.

---

## 19. Event rate/intensity target

### Established finding
**Confidence: HIGH**

Question:

> At what rate are events expected to occur over follow-up?

The target may be:

- marginal mean event rate;
- subject-specific intensity;
- history-dependent event intensity.

### Project rule

Count, rate and next-event probability are distinct estimands.

---

## 20. Ordered-event target

### Established finding
**Confidence: HIGH**

Some approaches condition on having experienced previous events and model:

- first recurrence;
- second recurrence;
- third recurrence;

as ordered episodes.

Here, later-event risk sets depend on prior event occurrence.

---

# Part J — Within-person dependence

## 21. Recurrent events from one participant are not independent observations

### Established finding
**Confidence: HIGH**

Individuals differ in latent susceptibility, exposure and event history.

Events within one person can therefore be correlated.

Recurrent-event methods use different mechanisms to represent this, including:

- frailty/random effects;
- history-dependent risk sets;
- marginal mean/rate approaches.

### Project rule

Do not treat each recurrence as an unrelated person-level event.

---

# Part K — Recurrent events and dynamic prediction

## 22. Event history can become predictor history

### Established finding
**Confidence: HIGH**

After each recurrence, new information becomes available:

- number of previous events;
- time since last event;
- previous gap times;
- event severity;
- management changes.

A recurrent-event prediction may therefore update after each episode.

### Cross-pass integration

This is compatible with PASS-06B12:

> each event/landmark can create a renewed prediction startpoint.

---

# Part L — Recurrent-event model families answer different questions

## 23. Method family is tied to estimand

### Established finding
**Confidence: HIGH**

Examples at taxonomy level:

- Andersen–Gill style total-time/intensity approaches;
- Prentice–Williams–Peterson ordered-event approaches;
- frailty models;
- marginal mean/rate/count models;
- episode-specific gap-time models;
- multistate formulations.

These are not interchangeable merely because all can use recurrent data.

### Project rule

Extract the target first:

1. next event?;
2. ordered recurrence?;
3. total rate?;
4. event count?;
5. state transition?;

then interpret the model.

---

# Part M — Recurrent-event validation is underdeveloped

## 24. Current empirical evidence

### Established finding
**Confidence: HIGH**

The 2024 systematic review found:

- 301 recurrent-event prediction studies;
- only 24.9% reported internal validation;
- only 1.0% external validation.

This demonstrates a major evidence-quality gap in the literature.

---

## 25. Ordinary single-event metrics may not transfer directly

### Established finding
**Confidence: HIGH**

Performance can concern:

- predicted counts vs observed counts;
- recurrent-event timing;
- next-event risk;
- repeated dynamic predictions.

The 2025 performance guide notes that conventional calibration/discrimination methods are not yet uniformly established for recurrent-event prediction.

### Project rule

Do not label a recurrent-event model “validated” merely because a first-event c-index was reported if the intended target is the whole recurrent process.

---

# Part N — Multistate prediction

## 26. Core structure

### Established finding
**Confidence: HIGH**

A multistate model represents the individual as occupying one of several states and potentially moving between them over time.

Example:

`healthy training → injured → rehabilitation → returned to training → reinjured`

The scientific object is the **transition process**.

---

## 27. States must be scientifically defined

### Established finding
**Confidence: HIGH**

A state may represent:

- health condition;
- training status;
- disease stage;
- functional status;
- treatment state;
- recovery phase.

### Project rule

State labels must be mutually interpretable and transition rules explicit.

Do not infer a multistate process merely because a dataset contains repeated categorical measurements.

---

# Part O — Multistate prediction targets

## 28. Transition intensity

### Established finding
**Confidence: HIGH**

Question:

> What is the instantaneous transition rate from state A to state B, given current state/history?

This is analogous to a hazard on a specific transition.

---

## 29. Transition probability

### Established finding
**Confidence: HIGH**

Question:

> Given state A at time s, what is the probability of being in / having transitioned to state B by future time t?

This is a probability target and can be more directly useful for prognosis.

---

## 30. State-occupation probability

### Established finding
**Confidence: HIGH**

Question:

> What is the probability that the individual occupies state B at future time t?

This may integrate over several possible paths to that state.

### Project distinction

Transition intensity and state-occupation probability are not the same estimand.

---

# Part P — Absorbing vs reversible states

## 31. Absorbing state

A state with no outgoing transitions in the model.

Examples:

- death;
- permanent withdrawal, depending on scientific definition.

---

## 32. Reversible/transient states

States can permit return or repeated transitions.

Example:

`training ↔ injury/rehab ↔ return-to-training`

### Project consequence

Multistate models can represent recurrent processes naturally when transitions are repeatable.

---

# Part Q — Markov / history-dependence boundary

## 33. Current state may or may not be sufficient

### Established finding
**Confidence: HIGH**

Some multistate models assume future transition risk depends primarily on:

- current state;
- current time/covariates.

Other processes require additional history:

- time spent in current state;
- number of prior injuries;
- previous transition path;
- prior gap times.

### Project rule

At taxonomy level record whether the model is:

- Markov-like/current-state based;
- semi-Markov/duration-dependent;
- explicitly history-dependent;
- unclear.

Detailed mathematics is deferred.

---

# Part R — Multistate is not causal by default

## 34. Transition associations are prognostic unless causal assumptions are added

### Established finding
**Confidence: HIGH**

The 2026 STRATOS-oriented review explicitly notes that standard multistate regression models do not automatically estimate causal transition effects.

### Cross-pass rule

Do not interpret:

> predictor associated with transition A→B

as:

> changing predictor will causally alter that transition.

Causal multistate estimands require separate causal structure.

---

# Part S — Relations among the three structures

## 35. Competing risks

Canonical structure:

`one origin → mutually exclusive terminal event types`

Primary prediction target often:

- cause-specific cumulative incidence.

---

## 36. Recurrent events

Canonical structure:

`same event type may occur repeatedly`

Primary targets can include:

- next-event risk;
- gap time;
- count;
- rate/intensity;
- ordered recurrence.

---

## 37. Multistate

Canonical structure:

`individual moves among explicit states through multiple transition types`

Primary targets can include:

- transition-specific intensities;
- transition probabilities;
- state-occupation probabilities.

---

## 38. Overlap exists

### Established synthesis
**Confidence: HIGH**

A recurrent-event process can be represented using multistate states such as:

- 0 prior events;
- 1 prior event;
- 2 prior events;
- etc.

A competing-risk process is a simple multistate process with mutually exclusive absorbing destinations.

### Project rule

Choose the label from the **scientific target and state/event architecture**, not from the software package or regression function.

---

# Part T — Development implications

## 39. Outcome architecture is part of model specification

### Established finding
**Confidence: HIGH**

Before model development, specify:

1. first event only?;
2. which competing events?;
3. recurrence allowed?;
4. count/rate or next-event target?;
5. explicit states?;
6. allowed transitions?;
7. prediction horizon;
8. dynamic update points.

### Project rule

Changing from:

> first injury

to:

> total number of injuries

creates a different prediction target and usually a different model.

---

# Part U — Validation implications

## 40. Validation data must reproduce the event architecture

### Established synthesis
**Confidence: HIGH**

External validation requires sufficient data to reconstruct the same target.

Examples:

- competing-risk model → competing events must be observed;
- recurrent-event model → repeated events must be captured, not only first event;
- multistate model → relevant states/transitions and their timing must be observable.

### Project rule

A database that records only the first injury cannot externally validate a model intended to predict recurrent injury burden.

---

# Part V — Performance must match target

## 41. Competing-risk prediction

Potential performance dimensions:

- calibration of cumulative incidence;
- cause-specific/time-dependent discrimination;
- overall prediction error;
- decision utility.

---

## 42. Recurrent-event prediction

Potential performance dimensions depend on the target:

- next-event calibration;
- gap-time prediction;
- predicted vs observed event counts;
- rate/intensity prediction;
- repeated/dynamic prediction performance.

### Important limitation

Standardized recurrent-event performance methodology remains less mature.

---

## 43. Multistate prediction

Potential performance targets include:

- transition-specific prediction;
- state-occupation probability calibration;
- probability of specific future paths/states;
- time-dependent prediction performance.

### Project rule

Do not report a single global c-index as though it necessarily validates every transition/state probability in a multistate model.

---

# Part W — Censoring and observation process

## 44. Loss to follow-up remains distinct from event transitions

### Established finding
**Confidence: HIGH**

Complex event models still face ordinary incomplete follow-up.

Need to distinguish:

- true competing event;
- recurrent event;
- state transition;
- censoring/loss to follow-up.

### Project rule

The event-process taxonomy must not be corrupted by treating unobserved follow-up as an observed state transition.

---

# Part X — Fitness/exercise translations

## 45. Competing-risk example

Target:

> 12-month risk of first lower-limb injury.

Competing event:

> permanent cessation of training before injury.

If cessation removes future exposure/opportunity for the target injury, absolute injury risk should account for it rather than treating every cessation as ordinary censoring.

---

## 46. Recurrent injury example

Athlete experiences:

- hamstring injury at week 5;
- reinjury at week 14;
- another episode at week 30.

Questions differ:

1. time to first injury;
2. time to next injury after each recovery;
3. number of injuries in 12 months;
4. individual injury-event rate.

These require different prediction estimands.

---

## 47. Training-interruption burden

Question:

> How many ≥3-day training interruptions will occur over the next 6 months?

This is a recurrent-event count/burden target.

A first-interruption survival model does not answer it.

---

## 48. Multistate return-to-training example

States:

1. normal training;
2. injured;
3. rehabilitation;
4. returned to modified training;
5. full training;
6. withdrawn.

Targets may include:

- probability of moving rehab→modified training within 2 weeks;
- probability of being in full training at week 8;
- probability of reinjury after return.

Classification:

> multistate prognosis.

---

# Part Y — Structural record produced by PASS-06B15

## 49. Complex-event prediction record

For each complex-event prediction study, record:

1. model/version;
2. target population;
3. prediction startpoint;
4. prediction horizon;
5. base outcome architecture:
   - single first event;
   - competing risks;
   - recurrent events;
   - multistate;
   - hybrid;
6. event types;
7. competing events explicitly defined?;
8. censoring distinguished from competing events?;
9. primary prediction estimand:
   - cause-specific hazard;
   - cumulative incidence;
   - next-event risk;
   - gap time;
   - event count;
   - event rate/intensity;
   - transition intensity;
   - transition probability;
   - state-occupation probability;
   - other;
10. first event only or all events?;
11. recurrence allowed?;
12. ordered recurrence number modelled?;
13. previous-event history used?;
14. within-person dependence handled?;
15. states explicitly defined?;
16. absorbing states?;
17. reversible transitions?;
18. allowed transition graph;
19. Markov/current-state assumption?;
20. duration/history dependence?;
21. development method family;
22. dynamic updates after events/states?;
23. competing-risk absolute-risk estimator appropriate?;
24. internal validation?;
25. external validation?;
26. validation dataset captures all required event types?;
27. validation dataset captures repeated events?;
28. validation dataset captures relevant states/transitions?;
29. calibration target;
30. discrimination target;
31. overall prediction-error target;
32. performance horizon;
33. utility assessed?;
34. final project classification;
35. unresolved outcome-architecture/performance issues.

---

# Practical rules produced by PASS-06B15

1. Ordinary first-event survival predicts only the first occurrence of an event.
2. First-event survival is not sufficient when competing events, recurrences or state transitions are part of the target.
3. A competing event is an observed event that prevents/fundamentally changes occurrence of the target event; it is not ordinary loss-to-follow-up censoring.
4. In competing-risk prognosis, event-specific cumulative incidence is often the relevant absolute-risk target.
5. Naively treating competing events as ordinary censoring can overestimate absolute risk.
6. Cause-specific hazard and cumulative incidence are different estimands.
7. A cause-specific modelling strategy can still generate cumulative-incidence predictions if all relevant event hazards are modelled and combined.
8. Fine–Gray/subdistribution modelling is one route to cumulative-incidence prediction, not the definition of competing-risk prediction.
9. Development and validation must use the same competing-risk estimand.
10. Competing events must be accounted for during validation, especially calibration.
11. Recurrent events allow the same participant to experience the target event repeatedly.
12. Time-to-first-event discards later recurrence information.
13. Binary “ever recurred” outcomes discard event count and timing information.
14. Recurrent-event prediction targets may be next-event/gap time, count, rate/intensity or ordered recurrence.
15. These recurrent-event targets are not interchangeable.
16. Recurrent events within one person are statistically/history dependent and cannot be treated as independent participants.
17. Event history can become predictor history for later dynamic predictions.
18. Recurrent-event model families differ because they target different aspects of the recurrent process.
19. Current recurrent-event prediction literature has weak validation practice; the 2024 review found 24.9% internal and 1.0% external validation.
20. Performance methodology for recurrent-event models remains less standardized than ordinary single-event prediction.
21. Multistate models represent transitions among explicit states rather than one endpoint alone.
22. Multistate prediction can target transition intensity, transition probability or future state-occupation probability.
23. Transition intensity is not the same estimand as state-occupation probability.
24. States can be absorbing or reversible.
25. Multistate models can represent recurrent processes through repeated/reversible transitions.
26. Current state may be insufficient; duration and previous event/state history can matter.
27. Standard multistate associations are prognostic, not automatically causal.
28. A basic competing-risk model is a special multistate structure with mutually exclusive absorbing destinations.
29. Recurrent-event processes can also be represented in multistate form, but terminology should follow the scientific target.
30. Model development must specify the event-process architecture before selecting a statistical method.
31. External validation must observe the same required event/state structure as development.
32. A dataset recording only first events cannot validate a recurrent-event burden model.
33. Performance metrics must correspond to the exact event-process estimand.
34. A single global c-index is not automatically sufficient validation of a multistate/recurrent model.
35. Complex event structures do not change the core lifecycle:
    **target definition → development → internal validation → external validation → utility/update/impact**;
    they change what the outcome and performance estimands actually are.
36. Minimum project architecture:
    **startpoint + event/state process + allowed recurrence/competing transitions + exact prediction estimand + horizon + development method + matching validation target + target-specific performance**.

---

# Important limitation

The methodological maturity is uneven:

- competing-risk absolute-risk prediction and validation have comparatively mature guidance;
- multistate analysis has a mature event-history framework but prediction-model reporting/performance is more heterogeneous;
- recurrent-event prediction-model validation/performance is substantially less standardized.

Therefore this pass establishes the **taxonomy and target distinctions**, not a universal statistical recipe.

---

# Gap status after PASS-06B15

The second blocking gap identified by PASS-06B13 is now covered at taxonomy level.

Remaining blocking gap before final prediction-branch audit:

1. **PASS-06B16 — continual/online updating and post-deployment lifecycle**;
2. then a new final prediction-branch gap audit;
3. synthesis only if that audit identifies no further blocking gap.

## Next micro-pass

**RES-02 / PASS-06B16 — post-deployment lifecycle and continual updating: monitoring-only fixed models, temporal drift, trigger-based recalibration, periodic batch updating, continual/online updating, model-version lineage, update-vs-evaluation data separation, and deployment feedback.**

STOP after this saved micro-pass.
