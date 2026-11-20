# RES-01 / PASS-02 — PICO components and eligibility logic

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-01 — формулировка исследовательского вопроса

## Scope этого прохода

Только:
1. что именно означают P / I / C / O в intervention-effect question;
2. какая степень точности нужна каждому компоненту;
3. как P / I / C переходят в eligibility criteria;
4. почему O обычно не должен автоматически определять eligibility;
5. как заранее задавать intervention/comparator variants, co-interventions и partially eligible populations.

Не покрывается здесь:
- отдельный статус T / timeframe;
- outcome prioritization (critical/important/harms);
- estimands;
- non-intervention question frameworks;
- search translation;
- gap/audit RES-01.

## Источники, проверенные в этом pass

1. Cochrane Handbook, Chapter 2 — Determining the scope of the review and the questions it will address.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-02

2. Cochrane Handbook, Chapter 3 — Defining criteria for including studies and grouping for synthesis.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-03

3. Cochrane Handbook, Chapter 4 — Searching and selecting studies.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04

4. Hoffmann TC et al. Better reporting of interventions: TIDieR checklist and guide. BMJ. 2014;348:g1687.  
   https://www.bmj.com/content/348/bmj.g1687

Source-version caveat is recorded in PASS-01.

---

## 1. P — Population / participants / problem

### Established finding
**Confidence: HIGH**

Population criteria should be:
- broad enough to include the diversity relevant to the real question;
- narrow enough that the aggregate answer remains meaningful;
- predefined rather than improvised after results are seen.

Potential defining characteristics include:
- condition/status;
- training status;
- age;
- sex when relevant to effect modification;
- baseline capability;
- setting;
- other characteristics that plausibly change intervention response or applicability.

### Project consequence

For exercise topics, “healthy adults” may still be too broad if:
- trained vs untrained;
- detrained vs continuously trained;
- supervised vs home;
- major age/health differences
could materially change the answer.

But we should not narrow population merely to make evidence look cleaner.

### Partially eligible populations

Studies often contain a mixture of eligible and ineligible participants.

Cochrane recommends planning in advance how such studies will be handled.

Project rule:
1. prefer separately reported eligible subgroup when valid;
2. otherwise use a pre-specified practical rule tied to review objective;
3. avoid arbitrary percentage cut-offs unless there is a defensible reason;
4. document difficult inclusion decisions;
5. sensitivity-check them when they can affect conclusion.

---

## 2. I — Intervention

### Established finding
**Confidence: HIGH**

An intervention label is not sufficient.

Cochrane explicitly recommends defining the features that may matter to effect, including:
- dose/intensity;
- duration;
- frequency/timing;
- mode of delivery;
- provider;
- setting;
- co-interventions;
- tailoring/adaptation.

TIDieR reinforces that an intervention needs description of:
- what;
- who provided;
- how;
- where;
- when/how much;
- tailoring;
- modifications;
- fidelity/adherence where relevant.

### Project consequence for exercise science

“Resistance training” is not one intervention.

Depending on the question we may need to specify:
- exercise selection;
- external load/intensity;
- sets;
- reps;
- proximity to failure;
- weekly volume;
- frequency;
- ROM;
- tempo/intent;
- rest;
- supervision;
- progression;
- concurrent training;
- nutrition co-intervention.

Not every variable must be fixed in every review.

**Precision should follow the decision.**

If the question is:
> Does resistance training improve strength vs no training?

many implementation details can vary.

If the question is:
> Does 0–1 RIR outperform 3–5 RIR for hypertrophy at matched volume?

effort definition and volume matching become central eligibility/grouping variables.

---

## 3. Equal precision across PICO is not required

### Established finding
**Confidence: HIGH**

Cochrane explicitly states that PICO components do not require equal emphasis or equal precision.

Project consequence:
do not create artificial precision in irrelevant dimensions.

Example:
a review focused on weekly-set dose may define volume very tightly while allowing several exercise selections.

Another review focused on a specific exercise may define the exercise very tightly while allowing a broader trained population.

### Rule

For each PICO component ask:

> Could variation in this component change the decision or make the synthesis uninterpretable?

If yes → define/group tightly.  
If no → broader eligibility may be preferable.

This decision rule is a project operationalization of the Cochrane principle.

---

## 4. C — Comparator

### Established finding
**Confidence: HIGH**

Comparator must be specified as carefully as intervention.

Common comparison types:
1. intervention vs placebo/sham;
2. intervention vs no intervention / usual care / wait-list;
3. active A vs active B;
4. same intervention at different:
   - dose;
   - intensity;
   - duration;
   - timing.

### Exercise-science consequence

“Control” is not a sufficient description.

Examples:
- no training;
- maintenance training;
- usual habitual activity;
- equal-volume lower-effort training;
- different exercise;
- different load;
- different frequency.

These answer different causal questions.

### Rule

A comparison is only meaningful when the comparator represents the decision alternative we actually care about.

If the real decision is:
> 2 vs 4 sets,

evidence comparing:
> 4 sets vs no training

does not directly answer it.

---

## 5. Co-interventions

### Established finding
**Confidence: HIGH**

Co-interventions must be considered explicitly because they may:
- be shared equally between groups;
- interact with the intervention;
- create heterogeneity;
- make the effect of the target intervention impossible to isolate.

### Exercise examples

Potential co-interventions:
- dietary counseling;
- protein/creatine;
- concurrent cardio;
- coaching frequency;
- supervision;
- recovery protocol.

### Project rule

For every synthesis specify whether co-interventions are:

1. required to be matched;
2. allowed if balanced;
3. treated as a subgroup/moderator;
4. grounds for exclusion because target effect cannot be separated.

---

## 6. Intervention variants and grouping

### Established finding
**Confidence: HIGH**

Cochrane recommends defining both:
- broad eligible intervention classes;
- planned grouping for synthesis.

Different labels can describe the same thing.
The same label can describe materially different interventions.

### Project consequence

Before results:
1. define what counts as the intervention;
2. define relevant variants;
3. decide which variants can be combined;
4. pre-plan separate groups where differences could alter implementation/decision.

This reduces result-driven grouping.

### Important distinction

**Eligibility grouping ≠ synthesis grouping.**

A study can be eligible for the broad review but belong only to one specific narrow synthesis.

---

## 7. O — Outcomes

### Established finding
**Confidence: HIGH**

Outcome domains are part of the review question.

However, in intervention reviews, **reported outcomes usually should not determine study eligibility**.

Reason:
if studies are excluded because they do not report the desired outcome, selective outcome reporting can bias the evidence base.

Cochrane allows exceptions when measurement of the outcome is genuinely part of the study purpose/question.

### Project rule

Default:

1. define desired outcome domains in advance;
2. include otherwise eligible studies even if the desired outcome is not reported/usable;
3. record missing outcome evidence rather than silently excluding the study.

Exception:
outcome measurement itself can be an eligibility criterion when it defines the research question.

Examples:
- a validation question about a specific measurement;
- a review specifically of prevention of a defined outcome.

Outcome prioritization/harms will be handled separately in a later pass.

---

## 8. Study design is an additional eligibility dimension

### Established finding
**Confidence: HIGH**

Cochrane treats study design as an eligibility dimension in addition to PICO.

For intervention effects:
randomized trials are generally the strongest direct design when feasible.

But design eligibility depends on the question:
- rare/long-term harms may require non-randomized evidence;
- some interventions cannot be randomized.

Detailed design hierarchy belongs to RES-02.

### Project consequence

RES-01 Question Card should not imply:
PICO alone completely determines eligibility.

Eligibility = PICO-relevant criteria + suitable study-design criteria + justified publication/time/other constraints.

---

## 9. Time/duration appears inside eligibility even before formal T decision

This pass does **not** decide whether `T` becomes a mandatory separate project field.

But Cochrane clearly treats:
- intervention duration;
- timing;
- follow-up
as potentially important eligibility/grouping characteristics.

Therefore time cannot be omitted conceptually.

Formal PICOT/time rule remains open for a later pass.

---

## 10. Search is downstream of eligibility

Chapter 4 states that search concepts are informed by:
- review objective/PICO;
- eligibility criteria.

Project consequence:
we should not begin with a bag of search keywords and then let found papers define the intervention/population retroactively.

Detailed search translation is deferred.

---

## Practical rules produced by PASS-02

1. P/I/C/O do not require equal precision.
2. Precision is determined by whether variation can alter the decision or interpretation.
3. P, I and C normally translate directly into eligibility criteria.
4. Study design is an additional explicit eligibility dimension.
5. Outcome domains are specified in the question, but reported outcomes normally do not decide inclusion.
6. Intervention labels are insufficient; define dose/delivery/duration/frequency/co-interventions where relevant.
7. Comparator must represent the actual decision alternative.
8. Plan treatment of mixed/partially eligible populations before seeing results where feasible.
9. Separate broad review eligibility from narrower synthesis grouping.
10. Co-interventions require an explicit rule.
11. Time-related characteristics must be considered even though formal `T` status remains unresolved.
12. Search strategy is downstream of question/eligibility.

---

## What remains unresolved for RES-01

1. Formal treatment of Time / PICOT.
2. Outcome prioritization:
   - critical;
   - important;
   - harms;
   - burden.
3. Alternative frameworks for:
   - diagnostic/measurement;
   - prognostic;
   - exposure;
   - qualitative;
   - implementation;
   - mechanistic questions.
4. Estimands.
5. Search translation.
6. Stakeholder/user involvement in a one-person project.
7. Equity/context.
8. Formal gap/audit checklist.
9. Final synthesis.

## Next pass

**RES-01 / PASS-03 — Time, outcome hierarchy and benefit/harm framing.**
