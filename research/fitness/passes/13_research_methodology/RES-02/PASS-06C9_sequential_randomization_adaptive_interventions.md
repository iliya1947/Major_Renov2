# RES-02 / PASS-06C9 — Sequential-randomization experimental structures for adaptive / digital interventions

Статус: **COMPLETE MICRO-PASS — mechanistic branch RESEARCHING pending repeat closure audit**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. sequential-randomization family;
2. adaptive intervention vs adaptive trial;
3. SMART;
4. MRT;
5. JITAI;
6. decision points;
7. tailoring variables;
8. availability;
9. intervention options;
10. decision rules;
11. restricted vs nonrestricted randomization;
12. proximal vs distal outcomes;
13. time-varying moderation;
14. delayed effects / treatment burden at taxonomy level;
15. SMART vs MRT timescale;
16. MRT vs N-of-1 / SCED / crossover;
17. SMART vs factorial / ordinary multi-stage trial;
18. response-adaptive randomization boundary;
19. HED / SMART–MRT / factorial hybrids;
20. MOST as optimization framework rather than atomic design;
21. mechanism / mediation boundary;
22. physical-activity / fitness examples;
23. ownership boundary for detailed optimization statistics.

Не покрывается здесь:

- exact SMART weighting / replication algorithms;
- exact Q-learning / A-learning / dynamic treatment regime estimation;
- exact MRT centered-and-weighted least-squares estimators;
- exact sample-size / power methods;
- reinforcement learning;
- bandits;
- off-policy evaluation;
- detailed JITAI algorithm engineering;
- SMART noninferiority/equivalence details;
- exact HED estimators;
- exact MOST optimization criteria/statistics;
- personalized decision thresholds;
- detailed mediation of proximal→distal pathways;
- final mechanistic synthesis.

---

# Sources checked

## 1. Current 2026 SMART/MRT design guidance

Zhang S, Dziak JJ, Tomlinson DC, Nahum-Shani I.  
**Experimental designs with repeated randomizations for optimizing adaptive interventions: guidelines and practical considerations.**  
Ann Behav Med. 2026;60(1):kaag006.  
DOI: 10.1093/abm/kaag006.  
PMID: 42847358.

Current Oxford Academic and PubMed records checked 2026-11-17.

Core current framework:

- adaptive interventions use dynamic information about the person to decide whether/how to intervene;
- **SMART** and **MRT** are two experimental designs based on sequential randomizations;
- SMART operates on a relatively slow timescale;
- MRT operates on a relatively fast timescale;
- same person may be randomized multiple times;
- SMART usually has roughly 2–3 stages;
- MRT may randomize the same person many times, including multiple times per day;
- design choice should follow the scientific question, not an arbitrary numeric cutoff;
- important design decisions include:
  - whether sequential randomization is needed;
  - randomization timescale;
  - whether randomization is restricted;
  - whether randomization occurs upfront or sequentially;
  - primary-outcome timing;
  - sample-size planning.

https://academic.oup.com/abm/article/60/1/kaag006/8519404  
https://pubmed.ncbi.nlm.nih.gov/42847358/

---

## 2. Foundational MRT framework

Klasnja P, Hekler EB, Shiffman S, et al.  
**Micro-Randomized Trials: An Experimental Design for Developing Just-in-Time Adaptive Interventions.**  
Health Psychol. 2015;34(Suppl):1220–1228.

Current PMC full text checked 2026-11-17.

MRT:

- randomizes intervention options repeatedly at decision points;
- targets causal proximal effects;
- supports study of how proximal effects vary over time/context;
- is designed to provide empirical information for constructing JITAIs.

A proximal outcome may be on the hypothesized causal pathway toward a distal outcome, but MRT randomization alone does not establish that downstream mediation relation.

https://pmc.ncbi.nlm.nih.gov/articles/PMC4732571/

---

## 3. HeartSteps physical-activity MRT

Klasnja P, Smith S, Seewald NJ, et al.  
**Efficacy of Contextually Tailored Suggestions for Physical Activity: A Micro-randomized Optimization Trial of HeartSteps.**  
Ann Behav Med. 2019;53(6):573–582.

Current PMC/Oxford/PubMed records checked 2026-11-17.

Design:

- 44 adults;
- 6 weeks;
- up to 5 decision points/day;
- up to 210 randomizations/person;
- randomization conditional on availability;
- options:
  - no suggestion;
  - walking suggestion;
  - anti-sedentary suggestion;
- proximal outcome:
  - step count over next 30 minutes.

Important mechanistic/design lesson:

> MRT estimated the proximal effect of suggestions; it did not establish the efficacy of the entire HeartSteps package on long-term physical activity.

https://pmc.ncbi.nlm.nih.gov/articles/PMC6401341/  
https://pubmed.ncbi.nlm.nih.gov/30192907/

---

## 4. Current 2026 physical-activity JITAI review

**Just-in-Time Adaptive Interventions for physical activity: a systematic review of their public health impact and methodological quality.**  
Front Public Health. 2026.

Current PubMed/PMC/full-text records checked 2026-11-17.

Review scope:

- adult physical-activity JITAIs;
- 37 studies;
- includes MRTs, SMARTs, RCTs and weaker designs;
- proximal MRT effects are usually immediate behavior within roughly 30–60 minutes;
- evidence base remains heterogeneous/methodologically immature.

This confirms:

> JITAI ≠ MRT automatically.

JITAI is an intervention architecture; MRT is one experimental design used to optimize its decision rules/components.

https://pubmed.ncbi.nlm.nih.gov/42761105/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC13585906/

---

## 5. Current 2026 dyadic physical-activity MRT

**Effectiveness of Smartphone-Based Dyadic Interventions to Increase Physical Activity in Romantic Couples: Microrandomized Trial.**  
JMIR Mhealth Uhealth. 2026;14:e67136.

Current full text checked.

This provides a current physical-activity example with:

- repeated micro-randomized JITAI components;
- device-based MVPA;
- self-reported MVPA;
- actor / partner / joint intervention effects.

It demonstrates that MRT can operate above the simplest single-person message architecture, including dyadic context.

https://mhealth.jmir.org/2026/1/e67136

---

## 6. Current 2026/2025 SMART physical-activity examples

### Working Women Walking

**Moderators of adaptive interventions for physical activity outcomes in the Working Women Walking program: a sequential multiple assignment randomized trial design.**  
Ann Behav Med. 2026.

SMART:

- N=301;
- initial options included Fitbit vs Fitbit + text messages;
- nonresponders received augmented options;
- four adaptive interventions were embedded.

https://pubmed.ncbi.nlm.nih.gov/42847366/

### TAPAS

**The Adaptive Physical Activity Study in Stroke (TAPAS): A Feasibility Sequential Multiple Assignment Randomized Trial.**  
2025.

Structure:

- initial randomization:
  - online exercise vs lifestyle physical activity;
- 6-week step response used for responder/nonresponder classification;
- nonresponders rerandomized to switch or augment;
- responders continued;
- feasibility plus physical-activity/health outcomes.

https://pubmed.ncbi.nlm.nih.gov/41124672/

### Smartphone app + behavior change techniques

Current 2026 SMART record checked:

- physically inactive adults;
- sequential randomization;
- adaptive escalation of intervention components;
- physical activity outcomes.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12857902/

---

## 7. Hybrid Experimental Design

Nahum-Shani I, Dziak JJ, Venera H, et al.  
**Design of Experiments with Sequential Randomizations on Multiple Timescales: The Hybrid Experimental Design.**

Current PMC full text checked.

HED:

- integrates randomizations on different timescales;
- conceptualized as a special higher-order factorial-like experimental architecture;
- examples:
  1. factorial–SMART;
  2. factorial–MRT;
  3. SMART–MRT.

Hybrid SMART–MRT can simultaneously answer:

- slow-timescale adaptive intervention questions;
- fast-timescale JITAI proximal-effect questions.

https://pmc.ncbi.nlm.nih.gov/articles/PMC10961682/

Related conceptual source:

**Hybrid Experimental Designs for Intervention Development: What, Why, and How.**

https://pmc.ncbi.nlm.nih.gov/articles/PMC10024531/

---

## 8. Current 2026 hybrid SMART–MRT protocol

Current 2026 hybrid factorial SMART–MRT trial protocol checked.

Structure includes:

- first-stage intervention;
- response-based rerandomization at a later stage;
- embedded MRTs evaluating just-in-time components.

Used only as confirmation that hybrid sequential-randomization designs are active contemporary trial architectures.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13651425/

---

## 9. Current SMART methodological evidence

Current 2025 SMART scoping review checked:

**Design characteristics of sequential multiple assignment randomised trials (SMARTs) for human health: a scoping review of studies between 2009 and 2024.**

Key architecture:

- multiple treatment stages;
- participants may be rerandomized;
- treatment options can depend on intermediate response;
- multiple adaptive interventions can be embedded in one SMART.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12766822/

Current SMART statistical-design paper also confirms:

> one participant can be randomized multiple times in a sequential branching design.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11963638/

---

## 10. Current FDA adaptive trial-design guidance

FDA.  
**Adaptive Design Clinical Trials for Drugs and Biologics Guidance for Industry.**  
Final Guidance. 2019.  
Current FDA page checked 2026-11-17.

FDA adaptive trial design concerns:

> prospectively planned modification(s) to the **trial design** based on accumulating trial data.

Examples can include:

- sample size;
- stopping;
- randomization ratio;
- dropping arms;
- dose selection.

This is a different concept from:

> adaptive intervention.

https://www.fda.gov/regulatory-information/search-fda-guidance-documents/adaptive-design-clinical-trials-drugs-and-biologics-guidance-industry

---

## 11. Current 2026 tailoring-variable guidance

Dziak JJ, Nahum-Shani I.  
**Constructing evidence-based tailoring variables for adaptive interventions.**  
Ann Behav Med. 2026;60(1):kaag018.

Current Oxford Academic record checked.

Adaptive intervention:

- uses ongoing information to decide whether/how to modify treatment;
- contains decision rules;
- tailoring variable specification is causal/prescriptive, not merely predictive;
- tailoring variable needs definition of:
  - what is measured;
  - when;
  - when it is used;
  - cutoff/decision logic where relevant.

https://doi.org/10.1093/abm/kaag018

---

## 12. MOST

Current MOST framework material checked.

MOST is an **intervention-optimization framework**, not a single randomization design.

Its phases broadly include:

1. preparation;
2. optimization;
3. evaluation.

Optimization can use:

- factorial experiments;
- SMART;
- MRT;
- related experimental designs.

### Project implication

> MOST ≠ atomic trial design.

Record the actual experiment used inside MOST.

---

# Part A — Sequential randomization

## 1. Canonical project definition

A sequential-randomization experiment is one in which:

> the same experimental unit can be randomized to intervention options at more than one scientifically meaningful decision point.

Canonical:

`H_t → randomize A_t → observe response → update history H_{t+1} → randomize A_{t+1}`

where:

- `H_t` = information/history available before decision t;
- `A_t` = intervention option assigned at decision t.

### Project rule

Sequential randomization is a **structural design axis**.

It is not synonymous with:

- repeated measurement;
- adaptive statistical analysis;
- crossover;
- ordinary longitudinal intervention.

---

# Part B — Adaptive intervention

## 2. Adaptive intervention is an intervention-delivery protocol

Core components:

1. decision points;
2. tailoring variables;
3. intervention options;
4. decision rules.

Question:

> given current information about this person/unit, what should be done now?

---

## 3. Adaptive intervention does not inherently randomize patients in practice

The optimized intervention itself normally uses:

> decision rules,

not randomization.

Randomization is used **during development/optimization** to learn which decision rules/options work.

### Project rule

Do not write:

> adaptive intervention = randomized intervention.

An adaptive intervention can be implemented deterministically after evidence is established.

---

# Part C — Adaptive intervention vs adaptive trial design

## 4. Adaptive trial design

FDA meaning:

> modify aspects of the **trial** based on accumulating study data.

Examples:

- stop early;
- change sample size;
- drop arm;
- change allocation ratio.

Unit adapting:

> **study design**.

---

## 5. Adaptive intervention

Unit adapting:

> **intervention delivered to a participant**.

Uses participant information such as:

- response;
- adherence;
- symptoms;
- context;
- availability.

### Critical project rule

> **adaptive trial design ≠ adaptive intervention design.**

A SMART can investigate an adaptive intervention without the trial itself being an FDA-style adaptive trial.

---

# Part D — Response-adaptive randomization vs sequential randomization

## 6. Response-adaptive randomization

Trial-level allocation probabilities change based on accumulating outcomes across trial participants.

Question:

> how should future trial participants be randomized?

---

## 7. Sequential participant randomization

The same participant can be randomized again because the intervention contains multiple decision points.

Question:

> which intervention option should this participant receive at this later stage / decision time?

### Project rule

Do not collapse:

- response-adaptive randomization;
- SMART/MRT sequential randomization.

They solve different design problems.

---

# Part E — SMART

## 8. Canonical structure

SMART:

> Sequential Multiple Assignment Randomized Trial.

Typical:

`Stage 1 randomization → intermediate response → Stage 2 randomization → distal outcome`

Participants may be randomized:

- initially;
- again at one or more later decision points.

---

## 9. Slow timescale

Current 2026 guidance:

- usually few randomization stages;
- often roughly 2–3;
- intervals often weeks/months.

But:

> there is no universal numeric cutoff separating SMART from MRT.

Scientific question and intervention timescale define the design.

---

# Part F — SMART scientific questions

## 10. First-stage option

> Which initial intervention should be offered?

---

## 11. Second-stage option

> What should be done after nonresponse / partial response / adherence problem?

---

## 12. Embedded adaptive intervention

> Which full sequence of decision rules performs better?

---

## 13. Delayed effects

SMART can also ask whether:

> an initial treatment's effect emerges/changes later after subsequent intervention stages.

### Project rule

SMART is designed around **decision sequences**, not merely arm counts.

---

# Part G — Restricted SMART

## 14. Embedded tailoring variable

A priori rule may specify that only a subgroup is rerandomized.

Example:

- low engagers → rerandomize;
- responders → continue current intervention.

This creates a **restricted SMART**.

---

## 15. Tailoring variable

Examples:

- responder/nonresponder;
- adherence;
- symptom improvement;
- step-count progress;
- early training compliance.

### Project rule

A tailoring variable is used to make a treatment decision.

It is not automatically:

- moderator;
- mediator;
- prognostic predictor.

Those are different scientific roles.

---

# Part H — Nonrestricted SMART

## 16. Structure

All participants can be rerandomized at a later decision point regardless of intermediate response.

Useful when:

- investigators know **when** a decision matters;
- but do not yet know **how** treatment should be tailored.

---

## 17. Value

Can support exploration of future tailoring variables.

### Project rule

Restricted vs nonrestricted randomization is a substantive design feature.

---

# Part I — Adaptive intervention vs prediction model

## 18. Tailoring variable is prescriptive

Current 2026 guidance emphasizes:

> deciding what to do, when.

This is not just:

> predicting risk.

---

## 19. Prediction may inform a tailoring variable

A risk score could be part of a decision rule.

But:

> predictive accuracy alone does not establish the optimal intervention decision.

### Cross-reference

Prediction performance belongs to PASS-06B.

Treatment decision requires causal/experimental evidence.

---

# Part J — MRT

## 20. Canonical structure

MRT:

> Micro-Randomized Trial.

At each decision point:

`H_t → randomize A_t → proximal Y_{t+Δ}`

repeat many times.

---

## 21. Fast timescale

Typical:

- daily;
- several times/day;
- sometimes hours/minutes apart.

Participant may undergo:

- dozens;
- hundreds;

of randomizations.

---

# Part K — MRT scientific target

## 22. Average proximal effect

Core question:

> does delivering intervention component A at a decision point improve a short-term proximal outcome versus not delivering A / alternative option?

---

## 23. Time-varying effect

Question:

> does the proximal effect change across days/weeks?

Example:

> activity suggestion works strongly early but habituates later.

HeartSteps directly demonstrated such attenuation.

---

## 24. Context moderation

Question:

> in what context is intervention component more/less effective?

Potential moderators:

- time of day;
- location;
- weather;
- recent activity;
- fatigue;
- prior intervention burden.

### Project rule

MRT can experimentally inform future **decision rules** for JITAI delivery.

---

# Part L — JITAI

## 25. JITAI is an intervention design, not an MRT

JITAI:

> uses rapidly changing information about internal state/context to decide whether/how to intervene in real time.

MRT:

> experimental design used to optimize JITAI components/rules.

### Project rule

> JITAI ≠ MRT.

A JITAI can later be evaluated in an ordinary RCT after its rules are fixed.

---

# Part M — Decision point

## 26. Definition

A decision point is a time when the intervention system could potentially choose among intervention options.

Examples:

- after week 2;
- every morning;
- before training;
- after poor sleep;
- when prolonged sedentary bout detected.

---

## 27. Decision point ≠ measurement time automatically

A sensor may record continuously, but only some times are:

> actual intervention decision opportunities.

### Project rule

Record decision points explicitly.

---

# Part N — Availability

## 28. MRT availability

A participant can be considered unavailable for randomization/intervention at some decision points.

HeartSteps examples:

- driving;
- currently walking/running;
- just completed activity;
- phone offline.

---

## 29. Availability is not ordinary missing data

If availability is defined by design:

> no randomization is intended at unavailable points.

The causal proximal effect is therefore often defined among:

> available decision points.

### Project rule

Record:

1. availability rule;
2. who/what measures it;
3. whether intervention itself can affect future availability.

Detailed causal consequences are deferred.

---

# Part O — Intervention options

## 30. Options can include

- A vs B;
- prompt vs no prompt;
- low vs high intensity;
- coach vs app;
- continue vs augment;
- switch vs intensify.

### Project rule

“No intervention now” can be a legitimate randomized option.

---

# Part P — Decision rules

## 31. Adaptive intervention rule

Canonical:

`IF tailoring condition H_t THEN intervention option A ELSE B`

Rule must specify:

- when;
- based on what information;
- which option.

---

## 32. Trial randomization is used to learn the rule

The final adaptive intervention may say:

> if low engagement, add coaching.

SMART provides experimental data supporting that rule.

### Project rule

Randomization is epistemic/design machinery; the optimized rule itself need not randomize.

---

# Part Q — Proximal outcome

## 33. Definition

Outcome close enough after the decision point to capture the immediate intended effect of the micro-intervention.

HeartSteps:

> steps in next 30 minutes.

Possible fitness/digital examples:

- next-hour steps;
- whether planned session starts;
- immediate technique adherence;
- hydration action;
- recovery behavior;
- next-meal protein intake;
- short-term perceived readiness.

---

## 34. Proximal outcome must match component theory

If component is designed to trigger immediate walking:

> daily total steps may be too distal/noisy as the primary micro-level response.

### Project rule

Outcome window belongs to the estimand.

---

# Part R — Distal outcome

## 35. Definition

Longer-term outcome the full adaptive intervention ultimately seeks to improve.

Examples:

- sustained physical activity;
- training adherence;
- weight loss;
- VO₂max;
- health status.

---

## 36. Proximal improvement ≠ distal success

HeartSteps itself explicitly warns:

> proximal suggestion effects do not establish overall efficacy of the entire system.

### Project rule

Do not infer:

`micro-component improves immediate Y`

therefore:

`full program improves long-term Z`.

---

# Part S — Mechanistic relevance

## 37. MRT as experimental probe

Suppose theory:

`prompt → immediate walking → sustained activity`.

MRT can randomize prompt and estimate:

`prompt → immediate walking`.

This is randomized evidence for the first mechanistic link.

---

## 38. Target engagement

If proximal outcome is a prespecified mechanism target:

> randomized proximal effect can function as target-engagement evidence.

Example:

`recovery prompt → actual recovery behavior`.

---

## 39. But mediation is separate

To establish:

`immediate walking → sustained physical activity`

as a mediator of the prompt's distal effect requires:

- temporal structure;
- mediator/outcome confounding control;
- appropriate causal mediation framework.

### Project rule

> MRT randomization of A does not randomize the proximal mediator M.

PASS-06C3 remains authoritative.

---

# Part T — Time-varying moderation

## 40. Core MRT strength

Because context is measured repeatedly before randomization, MRT can ask:

> does A work differently depending on H_t?

Examples:

- suggestion effect after poor sleep;
- effect during work vs home;
- effect early vs late study;
- effect after prior prompts.

---

## 41. Moderation ≠ mediation

Moderator:

> when/for whom does A work?

Mediator:

> through what process does A work?

### Project rule

A context variable should not be called mediator merely because it modifies treatment effect.

---

# Part U — Treatment burden / habituation

## 42. Repeated micro-interventions can change future effects

Examples:

- notification fatigue;
- habituation;
- burden;
- disengagement.

Thus:

> effect at t may depend on prior intervention history.

Current MRT methods explicitly recognize time trends and delayed/lagged effects.

---

## 43. Distal burden can matter even if proximal effects are positive

A prompt may increase steps now while:

- increasing burden;
- reducing future receptivity;
- causing later disengagement.

### Project rule

Optimization should not maximize one proximal effect while ignoring adverse downstream intervention burden.

Detailed optimization methods are deferred.

---

# Part V — SMART vs MRT

## 44. Timescale

### SMART
Typically:
- few decision points;
- weeks/months.

### MRT
Typically:
- many decision points;
- hours/days.

---

## 45. Typical primary outcome

### SMART
Usually:
- distal outcome.

### MRT
Usually:
- proximal outcome after each decision point.

---

## 46. Typical intervention

### SMART
Often:
- coaching;
- treatment intensification;
- switching;
- human-delivered component;
- medication / program stage.

### MRT
Often:
- prompt;
- notification;
- suggestion;
- brief digital intervention.

---

## 47. No rigid cutoff

Current 2026 guidance explicitly warns:

> SMART vs MRT should not be defined by an arbitrary number of randomizations.

Some designs occupy intermediate timescales.

### Project rule

Classify by:

1. scientific question;
2. decision timescale;
3. primary outcome;
4. intervention component structure.

---

# Part W — MRT vs N-of-1

## 48. Similarity

Both can repeatedly randomize the same person.

---

## 49. N-of-1 target

Typical:

> individual treatment effect for one person.

Repeated longer treatment periods.

---

## 50. MRT target

Typical:

> average/time-varying causal proximal effect across many decision points and participants.

### Project rule

Dense within-person randomization does not automatically make MRT an N-of-1 trial.

---

# Part X — MRT vs SCED

## 51. SCED

Experimental control commonly comes from:

- phase replication;
- reversal;
- staggered introduction;
- alternating treatments;
- changing criterion.

Primary unit can be one/few cases.

---

## 52. MRT

Experimental control comes from:

> randomized micro-decisions repeatedly nested within participants.

### Project rule

SCED and MRT are neighboring intensive-longitudinal experimental families, not synonyms.

---

# Part Y — MRT vs ordinary crossover

## 53. Crossover

Typically few condition periods.

Target often:

> condition effect over period-level outcomes.

---

## 54. MRT

Many decision points.

Target:

> decision-level proximal effect.

### Project rule

Do not hide MRT under generic crossover.

---

# Part Z — SMART vs ordinary factorial

## 55. Superficial similarity

A nonrestricted two-stage SMART can resemble a crossed 2×2 experiment.

---

## 56. Structural distinction

Classic factorial:

> experimental factors usually assigned for questions at one decision time / fixed treatment structure.

SMART:

> factors are introduced **sequentially at distinct decision points**.

In restricted SMART:

- later factor may only be randomized for nonresponders;
- design is not fully crossed.

### Project rule

SMART can have factorial structure, but:

> SMART ≠ ordinary factorial automatically.

---

# Part AA — SMART vs ordinary multi-stage treatment study

## 57. Multi-stage care alone is not SMART

A study can:

- treat;
- assess response;
- change treatment;

without rerandomization.

### Project rule

SMART requires:

> sequential randomized assignments at scientifically relevant treatment stages.

---

# Part AB — Upfront vs sequential randomization

## 58. Upfront assignment can sometimes preassign later options

Current 2026 guidance notes:

> for practical reasons, sequential treatment assignments can sometimes be randomized upfront.

---

## 59. Interpretive risk

If participant knows later assignment early:

> behavior before the later decision point can change.

This can contaminate candidate tailoring variables / expectancy.

### Project rule

Record:

- when randomization occurred;
- when assignment was revealed;
- whether pre-decision behavior could be affected.

---

# Part AC — Tailoring variable vs response status

## 60. Response status is one common tailoring variable

Example:

`week-2 adherence below threshold → nonresponder`.

But tailoring variables can also be:

- fatigue;
- context;
- location;
- symptoms;
- recent activity.

---

## 61. Tailoring-variable construction is causal/prescriptive

Current 2026 guidance emphasizes that the question is not simply:

> what predicts future outcome?

It is:

> what information should change the intervention decision?

### Project rule

Predictor selection and tailoring-variable selection are not interchangeable.

---

# Part AD — Embedded adaptive interventions

## 62. One SMART can contain several adaptive interventions

Each embedded adaptive intervention is:

> a complete prespecified sequence of decision rules consistent with the trial.

Participants' observed paths may contribute information to more than one embedded adaptive intervention.

Detailed weighting is deferred.

---

## 63. Comparing cells is not the same as comparing adaptive interventions

Because adaptive interventions can share observed treatment paths/cells.

### Project rule

Do not reduce SMART evidence to:

> “arm A vs arm B”

without reconstructing the embedded decision rules.

---

# Part AE — SMART physical-activity example: Working Women Walking

## 64. Structure

Initial components:

- Fitbit;
- Fitbit + text messages.

Nonresponders could receive augmented interventions such as:

- motivational calls;
- group meetings.

### Classification

> physical-activity SMART evaluating adaptive intervention sequences.

---

# Part AF — SMART physical-activity example: TAPAS

## 65. Stage 1

Post-stroke participants randomized to:

- online exercise;
- lifestyle physical activity.

---

## 66. Tailoring variable

Step-count response over initial period.

---

## 67. Stage 2

Nonresponders:

- switch;
- augment;

depending trial path.

Responders:

- continue.

### Classification

> feasibility SMART for adaptive mHealth physical-activity intervention.

---

# Part AG — MRT physical-activity example: HeartSteps

## 68. Decision frequency

5 opportunities/day × 42 days.

---

## 69. Availability

No suggestion when:

- driving;
- already active;
- recent activity;
- offline.

---

## 70. Randomized options

- none;
- walking suggestion;
- anti-sedentary suggestion.

---

## 71. Proximal outcome

> steps in next 30 min.

### Project lesson

This is a canonical example of:

`context H_t → randomized micro-intervention A_t → proximal physical-activity outcome`.

---

# Part AH — 2026 dyadic fitness example

## 72. Dyadic MRT

Current 2026 evidence shows micro-randomized JITAI components can target:

- actor;
- partner;
- joint intervention.

### Project implication

Experimental unit/context may be:

> dyadic,

not only isolated participant.

This introduces:

- interdependence;
- spillover;

which must be recorded.

Detailed dyadic modeling is deferred.

---

# Part AI — HED

## 73. Why hybrid architecture exists

Modern interventions can combine components operating on different timescales:

- monthly coaching;
- response-based step-up at week 2;
- daily prompts.

One single-timescale design cannot efficiently answer all component questions.

---

## 74. Factorial–SMART

Combines:

- baseline crossed component assignments;
- later sequential randomization.

---

## 75. Factorial–MRT

Combines:

- baseline component randomization;
- repeated fast micro-randomization.

---

## 76. SMART–MRT

Combines:

- slow response-based sequential randomization;
- fast repeated JITAI randomization.

### Project rule

HED is a **higher-order integrated architecture**, not one new elementary randomization unit.

---

# Part AJ — Cross-timescale interaction

## 77. Important hybrid question

Example:

> does a daily prompt work differently depending on whether weekly coaching was assigned?

This is an interaction between:

- slow-timescale component;
- fast-timescale component.

### Fitness relevance

Potential:

- training program + daily adherence prompts;
- coach support + recovery reminders;
- rehab stage + just-in-time exercise cue.

---

# Part AK — MOST

## 78. MOST is not an atomic trial design

MOST organizes:

1. preparation;
2. optimization;
3. evaluation.

Optimization phase can use different experimental designs.

### Project rule

When paper says:

> “MOST study”

extract the actual experimental architecture:

- factorial;
- SMART;
- MRT;
- HED;
- other.

---

# Part AL — Mechanistic classification

## 79. SMART/MRT are not inherently mechanistic

They are intervention-development / optimization experimental designs.

Their purpose may be:

- effectiveness optimization;
- mechanism;
- tailoring;
- feasibility;
- component screening.

### Project rule

As throughout RES-02:

> design structure ≠ scientific purpose.

---

## 80. When MRT is mechanistic

MRT becomes mechanism-oriented when proximal outcome is a prespecified process/target.

Example:

`prompt → training initiation`.

Or:

`recovery cue → recovery action`.

---

## 81. When SMART is mechanism-oriented

A SMART may test whether:

- early engagement;
- response;
- pathway marker;

should determine later intervention.

But:

> response-guided rerandomization itself does not prove why the intervention works biologically.

---

# Part AM — Mediation boundary

## 82. Sequential randomization can strengthen causal evidence for treatment decisions

Randomization identifies:

- treatment-option effects at decision points;
- proximal effects in MRT;
- stage-specific effects in SMART.

---

## 83. It does not automatically identify mediator effects

A post-randomization mediator remains:

> nonrandomized unless itself experimentally manipulated.

Therefore:

> SMART/MRT ≠ mediation design by default.

PASS-06C3 remains authoritative.

---

# Part AN — Distal efficacy boundary

## 84. MRT

Positive proximal effect does not prove:

- full JITAI efficacy;
- long-term health/performance effect.

---

## 85. SMART

A SMART can inform optimal adaptive intervention sequences but does not automatically prove:

- population implementation effectiveness;
- long-term superiority under all contexts.

Final optimized package can require a separate confirmatory evaluation.

---

# Part AO — Optimization vs confirmation

## 86. Optimization experiment

Purpose:

> learn which components/rules should be included.

---

## 87. Confirmatory evaluation

Purpose:

> evaluate the resulting fixed/adaptive intervention package against comparator.

### Project rule

Do not interpret every optimization-stage component effect as definitive evidence that final package improves distal outcomes.

---

# Part AP — Availability, burden and safety

## 88. Decision rules can include safety constraints

Example:

- no prompt while driving;
- no intense exercise cue during injury warning;
- no recovery prompt if already completed.

These are legitimate design constraints.

---

## 89. More frequent intervention is not automatically better

Repeated micro-interventions can create:

- burden;
- habituation;
- disengagement.

### Project rule

Intervention frequency itself can become an optimization target.

---

# Part AQ — Current physical-activity relevance

## 90. Evidence base is no longer hypothetical

By 2026 there are:

- multiple physical-activity JITAI studies;
- MRT physical-activity studies;
- SMART physical-activity studies;
- stroke rehabilitation SMART;
- dyadic physical-activity MRT.

### Project decision

Sequential-randomization designs are **material** to the fitness evidence base and must remain in RES-02 canonical taxonomy.

---

# Part AR — Structural record for SMART / MRT / HED

For every sequential-randomization study, record:

1. sequential randomization? YES/NO;
2. design:
   - SMART;
   - MRT;
   - intermediate sequential-randomization experiment;
   - factorial–SMART;
   - factorial–MRT;
   - SMART–MRT;
   - other HED;
3. scientific purpose;
4. adaptive intervention / JITAI under development?;
5. intervention timescale;
6. participant/unit;
7. decision points;
8. number of randomization stages/opportunities;
9. randomization unit;
10. randomization probability;
11. randomization fixed or response-adaptive?;
12. randomization restricted?;
13. restriction rule;
14. assignment randomized upfront or sequentially?;
15. assignment reveal time;
16. intervention options;
17. no-treatment option?;
18. tailoring variables;
19. tailoring variable measurement time;
20. response threshold/cutoff;
21. decision rules;
22. availability defined?;
23. availability rule;
24. intervention itself can affect future availability?;
25. proximal outcome;
26. proximal window;
27. distal outcome;
28. primary estimand:
    - stage-specific;
    - embedded adaptive intervention;
    - average proximal effect;
    - time-varying proximal effect;
    - moderated proximal effect;
    - other;
29. delayed/lagged effects considered?;
30. burden/habituation considered?;
31. repeated participant randomization?;
32. number of randomizations/person;
33. within-person dependence;
34. N-of-1 target? YES/NO;
35. SCED target? YES/NO;
36. ordinary crossover overlap?;
37. factorial overlap?;
38. trial-level adaptive design simultaneously present?;
39. mechanistic target M?;
40. target engagement interpretation?;
41. mediator claim?;
42. mediation separately identified?;
43. optimization-stage or confirmatory-stage?;
44. MOST framework used?;
45. HED cross-timescale interaction?;
46. dyadic/cluster/spillover structure?;
47. adherence/fidelity;
48. missing digital/wearable data;
49. device/software version;
50. final project classification;
51. detailed statistics deferred to later topic?;
52. unresolved design/causal/measurement issues.

---

# Practical rules produced by PASS-06C9

1. Sequential randomization means the same experimental unit can be randomized at more than one scientifically meaningful decision point.
2. Sequential randomization is a structural design axis, not merely repeated measurement.
3. Adaptive intervention is an intervention-delivery protocol using decision points, tailoring variables, intervention options and decision rules.
4. Adaptive intervention does not inherently randomize patients during routine delivery.
5. Randomization is used experimentally to learn how the future adaptive intervention should behave.
6. Adaptive trial design and adaptive intervention design are different concepts.
7. FDA-style adaptive trial design changes aspects of the study based on accumulating trial data.
8. Adaptive intervention changes treatment delivered to the individual using that individual's information.
9. Response-adaptive trial randomization is not the same as SMART/MRT sequential randomization.
10. SMART uses sequential randomizations to develop/evaluate adaptive intervention decision sequences.
11. SMART typically operates on a slow timescale with few decision points, but there is no universal numeric cutoff.
12. SMART scientific questions include first-stage option, second-stage option and full embedded adaptive intervention sequence.
13. Restricted SMART can rerandomize only subgroups such as nonresponders.
14. Nonrestricted SMART can rerandomize everyone when future tailoring variables are not yet established.
15. Tailoring variable is prescriptive information used to alter treatment decisions; it is not automatically a predictor, moderator or mediator.
16. SMART must not be reduced to ordinary arm-by-arm comparison because adaptive interventions can share observed paths.
17. MRT repeatedly randomizes intervention components at fast decision points.
18. MRT typically targets average/time-varying proximal causal effects.
19. MRT can test context moderation because context is repeatedly measured before randomization.
20. JITAI is an intervention architecture; MRT is an experimental design used to optimize JITAI components/rules.
21. Decision point is an intervention opportunity, not any arbitrary sensor measurement time.
22. Availability can restrict MRT randomization by design and is not ordinary missingness.
23. Proximal-outcome window is part of the estimand.
24. Positive proximal effect does not prove improvement in the distal outcome.
25. MRT can provide target-engagement-like evidence when proximal outcome is the prespecified mechanism target.
26. MRT randomization of intervention A does not automatically randomize mediator M; causal mediation still requires C3 logic.
27. Time-varying moderator and mediator are different causal roles.
28. Repeated micro-interventions can create habituation/burden and change future effects.
29. SMART and MRT differ primarily by scientific question/timescale/outcome structure, not by a rigid count cutoff.
30. MRT is not an N-of-1 trial merely because each participant is randomized many times.
31. N-of-1 primarily targets replicated individual treatment effect; MRT typically targets population-average/time-varying proximal effects using many decision points.
32. MRT and SCED are neighboring but distinct intensive-longitudinal experimental families.
33. MRT is not ordinary crossover because the randomization unit is the repeated decision point and the target is usually proximal.
34. SMART can resemble a factorial design but factors are introduced sequentially at decision points.
35. Restricted SMART is often not a complete factorial structure.
36. A multi-stage intervention study without rerandomization is not a SMART.
37. Randomizing future treatment upfront can alter pre-decision behavior if assignments are revealed; timing of randomization/revelation matters.
38. Predictive risk can inform a tailoring variable, but prediction accuracy alone does not establish the optimal intervention rule.
39. Embedded adaptive interventions are complete decision-rule sequences inside a SMART.
40. HED integrates randomizations on multiple timescales.
41. Factorial–SMART, factorial–MRT and SMART–MRT are higher-order combined architectures.
42. HED enables questions about interactions between slow and fast intervention components.
43. MOST is an intervention-optimization framework, not an atomic randomized design.
44. A paper labelled MOST must be classified by its actual optimization experiment.
45. SMART/MRT/HED are not inherently mechanistic; design structure and scientific purpose remain separate.
46. Optimization experiments and confirmatory effectiveness trials answer different questions.
47. HeartSteps is a canonical physical-activity MRT: up to 210 randomizations/person and next-30-minute steps as proximal outcome.
48. Current physical-activity research also uses SMARTs for adaptive PA/exercise interventions.
49. Current MRTs can include dyadic/social intervention structures, adding spillover/interdependence considerations.
50. Sequential-randomization designs are materially relevant to fitness/digital coaching and belong in the canonical RES-02 taxonomy.
51. Detailed SMART/MRT/HED optimization statistics remain deferred to later statistical/causal/adaptive-intervention methodology.

---

# Evidence limitations

1. SMART vs MRT exists on a timescale/scientific-question continuum; intermediate designs may not fit a strict binary label.
2. The 2026 guidance explicitly discourages arbitrary cutoffs based only on number/frequency of randomizations.
3. A SMART can sometimes be mathematically related to a factorial structure, but restricted rerandomization and sequential timing create special design/analysis issues.
4. MRT proximal effects can be small and context-dependent; they should not be inflated into whole-program effectiveness claims.
5. Availability can itself be affected by prior intervention history, making advanced causal analysis more complex.
6. Repeated randomization can create burden/habituation and carry delayed effects into future decision points.
7. Tailoring-variable discovery is prescriptive/causal and cannot be reduced to ordinary predictive model selection.
8. HED is flexible and can become analytically complex; this pass covers only taxonomy-level structure.
9. MOST is a broad intervention-optimization strategy and should not be mistaken for one trial design.
10. Digital fitness MRT evidence depends on device measurement validity, software stability and missingness.
11. Dyadic/social MRTs add interference and correlated outcomes beyond ordinary participant-level MRT.
12. MRT evidence on a proximal mediator candidate does not establish the mediator's causal effect on the distal outcome.
13. Optimization-stage results do not eliminate the need for later confirmatory evaluation of the final intervention package where that is the practical claim.

---

# Gap status after PASS-06C9

The blocking gap identified by PASS-06C8 is now covered at taxonomy level:

- sequential randomization;
- adaptive intervention vs adaptive trial;
- SMART;
- restricted/nonrestricted SMART;
- MRT;
- JITAI;
- decision points;
- tailoring variables;
- availability;
- proximal/distal outcomes;
- time-varying moderation;
- MRT vs N-of-1/SCED/crossover;
- SMART vs factorial;
- response-adaptive randomization boundary;
- HED;
- MOST boundary;
- mechanism/mediation boundary;
- physical-activity/fitness examples.

This **does not automatically authorize mechanistic synthesis**.

Per workflow, a repeat final closure/gap audit is required.

## Next micro-pass

**RES-02 / PASS-06C10 — final mechanistic-branch closure/gap audit after PASS-06C9: re-read PASS-06C1…C9 plus relevant randomized/quasi-experimental/observational/prediction/measurement boundaries; verify no remaining human experimental, sequential-randomization, single-case, mediation, biomarker/omics, nonhuman/translational, digital/adaptive or exercise-specific design-family blocker remains; decide whether mechanistic structural synthesis is finally permitted.**

STOP after this saved micro-pass.
