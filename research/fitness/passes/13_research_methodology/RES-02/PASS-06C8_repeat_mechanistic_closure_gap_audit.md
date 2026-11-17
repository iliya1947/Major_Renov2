# RES-02 / PASS-06C8 — Repeat mechanistic-branch closure / gap audit after PASS-06C7

Статус: **COMPLETE GAP AUDIT — mechanistic synthesis NOT YET PERMITTED**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот pass повторно проверяет mechanistic branch после закрытия N-of-1 / SCED gap в PASS-06C7.

Audited base:

1. PASS-06C1 — mechanistic scope/taxonomy;
2. PASS-06C2 — human experimental mechanistic perturbation;
3. PASS-06C3 — causal mediation/pathway;
4. PASS-06C4 — observational biomarker/omics;
5. PASS-06C5 — nonhuman/translational models;
6. PASS-06C6 — integration/gap audit;
7. PASS-06C7 — N-of-1 / broader SCED;
8. PASS-02 — randomized experimental designs;
9. PASS-03 — nonrandomized/quasi-experimental designs;
10. PASS-04 — observational analytic designs;
11. PASS-05A — self-controlled observational designs;
12. PASS-06A — DTA / measurement-property studies;
13. PASS-06B24 — prediction-branch structural synthesis.

Audit questions:

- закрыт ли SCED/N-of-1 blocker;
- осталась ли missing human mechanistic experimental family;
- не смешаны ли target engagement / mediation / biomarker / surrogate;
- нет ли contradiction between randomized, observational and self-controlled structures;
- нет ли missing exercise/digital-physiology structure;
- можно ли finally разрешить mechanistic synthesis.

---

# Final verdict

**Mechanistic structural synthesis пока НЕ разрешён.**

PASS-06C7 действительно закрыл N-of-1/SCED gap.

Но repeat audit выявил ещё один material randomized-design gap:

> **sequential-randomization experimental designs for adaptive interventions:**
> - **SMART — Sequential Multiple Assignment Randomized Trial**
> - **MRT — Micro-Randomized Trial**
> - with **Hybrid Experimental Designs (HED)** as a higher-order architecture combining randomizations on different timescales.

Особенно важен **MRT** для mechanistic / behavioral / digital fitness evidence because it repeatedly randomizes intervention components at proximal decision points and estimates causal proximal effects and time-varying moderation.

This family is **not covered** by the current PASS-02 concept of “adaptive randomized design”.

---

# Sources checked

## 1. Current 2026 SMART / MRT design guidance

Nahum-Shani I, et al.  
**Experimental designs with repeated randomizations for optimizing adaptive interventions: guidelines and practical considerations.**  
Annals of Behavioral Medicine. 2026;60(1):kaag006.  
Published 2026-03-13.

Current Oxford Academic / PubMed records checked 2026-11-17.

The paper explicitly identifies two distinct experimental designs using **sequential randomizations**:

### SMART
- slow timescale;
- usually 2–3 randomization stages;
- designed to optimize standard adaptive interventions;
- later randomization can depend on prior response/engagement;
- commonly targets distal/longer-term outcomes.

### MRT
- fast timescale;
- often many randomizations per participant;
- designed to optimize just-in-time adaptive interventions (JITAIs);
- targets causal **proximal effects** and time-varying moderation;
- randomization can occur daily or multiple times per day.

https://doi.org/10.1093/abm/kaag006  
https://pubmed.ncbi.nlm.nih.gov/42847358/

---

## 2. Foundational MRT design paper

Klasnja P, Hekler EB, Shiffman S, et al.  
**Micro-Randomized Trials: An Experimental Design for Developing Just-in-Time Adaptive Interventions.**  
Health Psychology. 2015.

Current PMC text checked 2026-11-17.

MRT can estimate:

- causal proximal effects of intervention components;
- how proximal effects change over time;
- moderation by context/time;
- whether intervention components produce the immediate theoretical response they were designed to produce.

It explicitly distinguishes proximal outcomes from distal outcomes and notes that proximal outcomes can sometimes be hypothesized mediators of distal outcomes.

https://pmc.ncbi.nlm.nih.gov/articles/PMC4732571/

---

## 3. HeartSteps — direct physical-activity MRT example

Klasnja P, Smith S, Seewald NJ, et al.  
**Efficacy of Contextually Tailored Suggestions for Physical Activity: A Micro-randomized Optimization Trial of HeartSteps.**

Current PMC record checked.

Structure:

- 44 adults;
- six weeks;
- up to five decision points per day;
- at each eligible decision point:
  - no suggestion;
  - walking suggestion;
  - anti-sedentary suggestion;
  were micro-randomized;
- up to 210 randomizations per participant;
- proximal outcome:
  - step count during the next 30 minutes.

This is directly relevant to physical-activity / wearable / adaptive-coaching research.

https://pmc.ncbi.nlm.nih.gov/articles/PMC6401341/

---

## 4. SMART current design evidence

Current 2025/2026 methodological sources checked.

SMART:

- randomizes participants at two or more decision points;
- later treatment options may depend on prior treatment response;
- is designed to build/evaluate adaptive interventions / dynamic treatment regimes.

Current scoping review:

**Design characteristics of sequential multiple assignment randomised trials (SMARTs) for human health: a scoping review of studies between 2009 and 2024.**  
BMJ Open. 2025;15:e105506.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12766822/

Current JAMA Guide description also treats SMART as a distinct multi-stage randomized design.

https://pmc.ncbi.nlm.nih.gov/articles/PMC10061579/

---

## 5. Hybrid Experimental Design

Nahum-Shani I, Dziak JJ, Venera H, et al.  
**Design of Experiments with Sequential Randomizations on Multiple Timescales: The Hybrid Experimental Design.**

Current PMC text checked.

HED combines randomizations on different timescales.

Examples:

- factorial + SMART;
- factorial + MRT;
- SMART + MRT.

A hybrid SMART–MRT can answer:

- slow-timescale adaptive intervention questions;
- fast-timescale JITAI proximal-effect questions;

inside one integrated protocol.

https://pmc.ncbi.nlm.nih.gov/articles/PMC10961682/

Current 2026 trial protocols confirm active use of hybrid SMART–MRT structures.

---

# Part A — PASS-06C7 closure check

## 1. N-of-1 / SCED blocker is closed

PASS-06C7 now explicitly covers:

- medical N-of-1 vs broad SCED;
- replicated multi-crossover;
- withdrawal/reversal;
- multiple baseline;
- alternating treatment;
- simultaneous treatment;
- changing criterion;
- A-B / simple pre-post boundary;
- individual vs population estimands;
- repeated outcomes;
- carryover/autocorrelation recognition;
- experimental vs observational self-control;
- mechanistic target/mediator measurement;
- exercise use cases.

### Verdict

No residual SCED taxonomy blocker found.

---

# Part B — New gap: sequential randomization

## 2. Why this was missed by PASS-02

PASS-02 currently covers:

- ordinary parallel;
- crossover;
- within-person;
- cluster;
- stepped-wedge;
- cluster crossover;
- multi-arm;
- factorial;
- adaptive randomized design;
- platform/master protocol.

But it contains no:

- SMART;
- MRT;
- sequential multiple assignment;
- micro-randomization;
- JITAI design;
- hybrid SMART–MRT.

---

## 3. “Adaptive trial design” in PASS-02 is not SMART/MRT

PASS-02 uses the FDA/ICH meaning:

> prospectively planned modifications to the **trial itself** based on accumulating trial data.

Examples:

- change sample size;
- stop early;
- drop arms;
- change allocation ratio;
- dose selection.

This is a **study-level adaptation architecture**.

---

## 4. Adaptive intervention is a different concept

In SMART/MRT research:

> the **intervention delivered to the participant** adapts over time using participant-level information.

The participant can be randomized repeatedly at decision points.

Therefore:

> adaptive trial design ≠ adaptive intervention design.

A SMART can be completely prespecified and need not use a trial-level response-adaptive randomization algorithm.

---

# Part C — SMART

## 5. Canonical SMART structure

A participant is randomized at more than one treatment decision point.

Example:

`stage 1 randomization → observe response → stage 2 randomization conditional on response → final outcome`

Possible structure:

1. randomize to A vs B;
2. assess response/engagement;
3. nonresponders are re-randomized to C vs D;
4. responders continue or may enter another randomized option.

---

## 6. Primary scientific use

SMART is designed to answer questions such as:

- what first-line treatment should be offered?;
- what should happen if person responds?;
- what should happen if person does not respond?;
- which embedded adaptive intervention/dynamic treatment regime performs best?

### Project rule

SMART targets a **sequence of treatment decisions**, not merely one treatment arm.

---

## 7. Mechanistic relevance

SMART is not inherently mechanistic.

It is primarily an intervention-optimization design.

However it can contain:

- mechanistic biomarkers;
- mediators;
- tailoring variables;
- response mechanisms.

### Audit decision

SMART is included because it is part of the missing **sequential-randomization family** and because a mechanistic synthesis must not confuse its repeated assignment structure with ordinary adaptive-trial methods.

---

# Part D — Micro-randomized trial

## 8. Canonical MRT structure

At many decision points:

`context/history H_t → randomize intervention option A_t → measure proximal outcome Y_{t+1}`

Repeat for the same participant:

`t = 1,2,…,T`.

Participant may therefore be randomized:

- daily;
- several times per day;
- hundreds of times.

---

## 9. Primary target

Typical MRT estimand asks:

> what is the causal **proximal effect** of offering/delivering intervention component A now versus not A now?

And:

> how does that proximal effect vary by time/context/history?

---

## 10. Mechanistic relevance is direct

An MRT can test whether an intervention component produces the immediate theoretical process it is intended to produce.

Examples:

`activity prompt → next-30-min steps`

`recovery prompt → proximal recovery behavior`

`training cue → immediate technique/adherence behavior`

These proximal outcomes can be:

- direct behavioral targets;
- candidate mediators toward a distal outcome.

### Project rule

MRT gives randomized causal evidence about:

> component → proximal outcome.

It does **not** automatically establish:

> proximal outcome → distal outcome mediation.

That second link remains under PASS-06C3.

---

# Part E — MRT vs N-of-1

## 11. Superficial similarity

Both may repeatedly randomize conditions within a person.

But they are not synonyms.

---

## 12. N-of-1 primary architecture

Typical aim:

> estimate treatment effect **for this one individual** through replicated treatment periods.

Periods may be relatively long and repeated.

---

## 13. MRT primary architecture

Typical aim:

> estimate average/time-varying proximal causal effect across many randomized decision points, usually across a sample of participants.

Individual participants contribute many decision-point randomizations.

### Project rule

Repeated within-person randomization does not automatically make an MRT an N-of-1 trial.

---

# Part F — MRT vs ordinary crossover

## 14. Crossover

Participant receives a small number of treatment periods.

Target often:

> average treatment contrast over a longer period.

---

## 15. MRT

Many rapid decision points.

Target:

> immediate/proximal effect of a component at decision point t.

Time-varying context and availability are intrinsic.

### Project rule

MRT must remain separate from generic crossover.

---

# Part G — MRT vs SCED

## 16. SCED

Usually focuses on repeated phases/conditions in a case/tier with experimental control demonstrated through phase replication/staggering/alternation.

---

## 17. MRT

Uses explicit repeated randomization at decision points and population-level causal estimands for proximal effects are typical.

### Project rule

MRT can generate intensive within-person data but should not be silently relabeled SCED.

---

# Part H — SMART vs MRT

## 18. Timescale

### SMART
Few decision points:
- weeks/months apart.

### MRT
Many decision points:
- days/hours/minutes apart.

---

## 19. Outcome

### SMART
Typically distal/longer-term outcome.

### MRT
Typically proximal outcome after each randomization.

---

## 20. Intervention type

### SMART
Adaptive sequence of:
- treatment;
- coaching;
- intervention intensification;
- switching/augmentation.

### MRT
JITAI component:
- prompt;
- suggestion;
- notification;
- brief digital support;
- rapidly deliverable component.

---

# Part I — Hybrid Experimental Design

## 21. HED is a higher-order architecture

HED integrates randomization structures at multiple timescales.

Examples:

- factorial–SMART;
- factorial–MRT;
- SMART–MRT.

### Project rule

HED should be treated similarly to:

> higher-order integrated experimental architecture,

not as a completely unrelated elementary allocation unit.

---

## 22. Mechanistic value

A hybrid can test:

- distal effectiveness/optimization;
- proximal component effects;
- interactions between slow and fast intervention components.

This is relevant to:

- coaching + app;
- training program + daily prompt;
- rehabilitation plan + JITAI support.

---

# Part J — Sequential randomization vs response-adaptive randomization

## 23. Response-adaptive trial randomization

Allocation probabilities change using accumulating study-level outcome information.

This is part of adaptive trial methodology.

---

## 24. SMART/MRT sequential randomization

A participant is randomized repeatedly because the scientific design contains multiple decision points.

Randomization can be:

- fixed;
- stratified;
- conditional on participant response/availability.

### Critical rule

> repeated participant randomization ≠ trial-level response-adaptive randomization.

---

# Part K — Tailoring variables

## 25. SMART

Tailoring variable can determine:

- who is re-randomized;
- which options are available;
- how treatment changes.

Examples:

- nonresponse;
- adherence;
- symptom improvement.

---

## 26. MRT

Context/state can moderate whether a component works:

- time of day;
- prior activity;
- fatigue;
- location;
- recent intervention burden;
- current availability.

### Project rule

Moderator/tailoring-variable evidence is not automatically mediation.

---

# Part L — Availability in MRT

## 27. Randomization may occur only when participant is available/eligible

Example:

do not deliver exercise prompt when:

- participant is driving;
- already exercising;
- sleeping;
- safety conditions fail.

### Design consequence

The proximal causal estimand can be defined among:

> available decision points.

### Project rule

Availability is part of the target population/timepoint definition, not missingness by default.

---

# Part M — Proximal vs distal outcomes

## 28. Proximal outcome

Outcome measured soon enough after a decision point to represent the immediate intended effect of the component.

---

## 29. Distal outcome

Longer-term endpoint motivating the intervention.

Example:

- proximal:
  - steps next 30 minutes;
- distal:
  - sustained physical activity over months.

### Project rule

Improving proximal outcome does not automatically prove improvement in distal outcome.

---

# Part N — Mechanism vs proximal effect

## 30. Proximal effect can be mechanistically informative

If theory says:

`prompt → immediate walking → long-term activity`

MRT can directly test:

`prompt → immediate walking`.

---

## 31. But proximal response is not automatically mediator validation

To establish:

`immediate walking mediates long-term health outcome`

need additional:

- temporal;
- confounding;
- mediation/longitudinal causal;

evidence.

### Cross-reference

PASS-06C3 remains authoritative for mediation.

---

# Part O — Fitness / physical-activity relevance

## 32. HeartSteps

Up to five randomizations/day for six weeks.

Directly demonstrates:

> physical-activity intervention components can be studied with MRT.

---

## 33. Potential fitness applications

Taxonomy-level examples:

- activity reminders;
- anti-sedentary prompts;
- training-adherence prompts;
- recovery reminders;
- technique cues;
- hydration reminders;
- sleep-support prompts;
- context-sensitive coaching.

### Important limit

MRT is best suited to rapidly deliverable/repeatable components with measurable proximal outcomes.

It is not an obvious design for:

- months-long hypertrophy program A vs B;
- persistent structural adaptation.

---

# Part P — Why this is a genuine RES-02 gap

## 34. Structural difference

SMART/MRT add:

- sequential randomization;
- repeated participant-level assignment;
- explicit decision points;
- tailoring/availability rules;
- time-varying treatment history;
- proximal/distal outcome distinction.

None of these are fully represented by generic:

- parallel;
- crossover;
- factorial;
- adaptive trial modifier.

---

## 35. Current literature treats them as distinct experimental designs

The 2026 Annals of Behavioral Medicine guidance explicitly calls SMART and MRT:

> two experimental designs with repeated randomizations for optimizing adaptive interventions.

Therefore this is not merely a statistical analysis detail.

---

# Part Q — Possible adjacent gap: MOST

## 36. Checked

Multiphase Optimization Strategy (MOST) is an intervention-optimization **framework** that can use:

- factorial designs;
- SMART;
- MRT;
- other optimization experiments.

### Decision

MOST itself is not a new atomic study design.

No separate pre-synthesis pass required beyond recognizing it in the sequential-randomization pass.

---

# Part R — Possible adjacent gap: hybrid SMART–MRT

## 37. Checked

HED combines already identifiable experimental architectures.

### Decision

HED should be included in the dedicated sequential-randomization pass as a higher-order architecture.

It does not require a separate blocker after SMART/MRT are covered unless deeper audit reveals a distinct unresolved issue.

---

# Part S — Other candidate gaps rechecked and NOT blocking

1. **Human challenge studies** → C2 challenge/provocation.
2. **Phase-0 / experimental-medicine probes** → C2 target engagement.
3. **Randomized encouragement** → IV/causal-identification branch.
4. **MR / human genetics** → C4 causal-design boundary.
5. **Surrogate endpoints** → endpoint validation, not mechanism design.
6. **Target validation** → evidence function combining existing designs.
7. **SCED/N-of-1** → now closed by C7.
8. **Qualitative mechanisms** → later qualitative/mixed branches.
9. **Implementation/process mechanisms** → later process/qualitative/mixed-methods crosswalk.
10. **Computational systems biology** → C5.
11. **Single-cell/spatial omics** → C4 measurement layer.
12. **Factorial component optimization** → already structural factorial in PASS-02; optimization-framework details are not separate design family.

---

# Part T — Consistency audit after C7

## 38. Target engagement vs mediation

Still coherent:

- C2:
  - A→M;
- C3:
  - A→M→Y;
- C4:
  - biomarker response may be noncausal;
- C7:
  - repeated A→M/→Y does not bypass mediation assumptions.

No contradiction.

---

## 39. Necessity / sufficiency

Still coherent:

- human:
  - conditional necessity/sufficiency-like wording;
- nonhuman:
  - model-specific wording;
- mediation:
  - indirect effects not equated with necessity/sufficiency.

No contradiction.

---

## 40. Experimental vs observational self-control

Still coherent:

- N-of-1/SCED:
  - assigned/manipulated conditions;
- case-crossover/SCCS:
  - observed exposure periods.

No contradiction.

---

## 41. Omics vs design

Still coherent:

- omics = measurement/data layer;
- randomized omics remains experimental;
- observational omics remains observational.

No contradiction.

---

## 42. Prediction / DTA / measurement boundaries

Still coherent:

- biomarker panel for prediction → B branch;
- current diagnostic classification → DTA/diagnostic prediction;
- measurement validity → 06A;
- mechanistic target measurement → C branch.

No contradiction.

---

# Part U — Source/version status

As of 2026-11-17:

1. current 2026 peer-reviewed guidance explicitly recognizes SMART and MRT as distinct repeated-randomization experimental designs;
2. SMART use in human health is established and expanding;
3. MRT remains an active design for JITAI optimization;
4. HeartSteps remains a canonical physical-activity MRT example;
5. hybrid SMART–MRT designs are actively used in current 2026 trials;
6. no source-version change found requiring rollback of C1–C7.

---

# Final audit decision

## Is SCED/N-of-1 blocker closed?

**YES.**

## Are C1–C7 internally coherent?

**YES.**

## Is mechanistic structural synthesis permitted now?

**NO.**

One new blocking structural gap remains:

> **sequential-randomization experimental designs (SMART / MRT, with HED crosswalk).**

The strongest mechanistic reason is MRT:

> repeated randomized intervention components → causal proximal effects / time-varying moderation,

which is directly relevant to behavioral mechanisms, digital coaching and physical-activity interventions.

---

# Required route

1. **PASS-06C9 — sequential-randomization / adaptive-intervention experimental structures**;
2. then **PASS-06C10 — repeat final mechanistic closure/gap audit**;
3. mechanistic synthesis only if C10 finds no blocking design-family gap.

---

# Next micro-pass

**RES-02 / PASS-06C9 — sequential-randomization experimental structures for adaptive/digital interventions: SMART vs micro-randomized trial (MRT), distinction from ordinary adaptive trial design and response-adaptive randomization, repeated decision points, tailoring variables, availability, proximal vs distal outcomes, time-varying moderation, MRT vs N-of-1/SCED/crossover, Hybrid Experimental Designs (SMART–MRT/factorial hybrids), mechanism/mediation boundary, physical-activity/fitness applications, and taxonomy-level ownership of detailed optimization statistics.**

STOP after this saved audit.
