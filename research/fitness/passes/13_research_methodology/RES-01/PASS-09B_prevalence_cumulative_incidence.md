# RES-01 / PASS-09B — Prevalence and cumulative-incidence question framing

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-01 — формулировка исследовательского вопроса

## Scope этого прохода

Только:
1. current JBI-endorsed methodology for prevalence/incidence reviews;
2. distinction prevalence vs cumulative incidence vs incidence rate;
3. target condition/event and target population;
4. time reference / risk horizon;
5. context/geography and case definition;
6. role/status of legacy CoCoPop;
7. project question module for frequency questions.

Не покрывается здесь:
- meta-analysis of proportions;
- transformations / generalized linear mixed models;
- heterogeneity statistics;
- risk-of-bias instruments;
- publication bias;
- GRADE for prevalence;
- mixed-methods questions;
- final RES-01 audit.

## Источники, проверенные в этом pass

1. JBI Manual — External Methodological Guidance. Current JBI page checked 2026-11-16; page last updated 27 Mar 2024.  
   JBI states that **PERSyst methodology is endorsed for systematic reviews of prevalence and incidence/cumulative incidence**.  
   https://jbi-global-wiki.refined.site/space/MANUAL/355599484/External%2BMethodological%2BGuidance

2. JBI — Prevalence Systematic Reviews: Addressing critical methodological challenges. Current page checked 2026-11-16.  
   JBI states that it does not provide separate internal prevalence/incidence methodology to avoid duplication and instead endorses PERSyst.  
   https://jbi.global/news/prevalence-systematic-reviews

3. PERSyst — current official site, checked 2026-11-16.  
   PERSyst describes its remit as systematic reviews of proportions such as prevalence and incidence, with active projects on risk of bias, heterogeneity, PRISMA-Prev and GRADE for prevalence estimates.  
   https://persyst.group/

4. Higgins JPT, Migliavaca CB, Buitrago-Garcia D, Munn Z. Systematic reviews of prevalence: challenges and future steps. JBI Evidence Synthesis. 2025;23(12):2376-2378. PMID 41366639.  
   This current PERSyst/JBI editorial emphasizes that a prevalence estimate needs a clearly specified **target condition** and **target population**.

5. Munn Z et al. Methodological guidance for systematic reviews of observational epidemiological studies reporting prevalence and cumulative incidence data. Int J Evid Based Healthc. 2015;13(3):147-153. DOI 10.1097/XEB.0000000000000054.  
   Historical JBI methodology; useful for provenance, **not treated as the current endorsed standard**.

6. Older JBI prevalence chapter / associated literature using **CoCoPop = Condition, Context, Population**.  
   Retained as historical framing only because JBI now delegates current methodology to PERSyst.

## Source-status decision

### Current authority hierarchy for this project

1. **Current JBI endorsement statement** → PERSyst.
2. **Current PERSyst publications / guidance** → primary methodology source.
3. Older JBI prevalence/CoCoPop guidance → historical/legacy support only.

Project rule:
do not describe CoCoPop as the current official JBI framework without qualification.

---

# Part A — What frequency question is being asked?

## 1. Prevalence and incidence are not interchangeable

### Established finding
**Confidence: HIGH**

### Prevalence
Proportion of the target population that has the condition/event state at a defined point or during a defined period.

Typical variants:
1. **point prevalence**;
2. **period prevalence**.

### Cumulative incidence
Proportion of an initially at-risk population that develops a new event/condition over a defined follow-up period.

It is a risk/proportion over time.

### Incidence rate / incidence density
New events per unit of person-time at risk.

This is not the same estimand as cumulative incidence.

### Project consequence

The Question Card must never use vague:
> “incidence”

without specifying whether the target is:
- cumulative incidence/risk;
- incidence rate/person-time.

PERSyst/JBI endorsement wording is especially centered on prevalence and **cumulative incidence**. Incidence-rate reviews may require additional rate-specific synthesis methods and should not be silently treated as identical.

---

## 2. Frequency estimand must be explicit before searching

### Established finding
**Confidence: HIGH**

A review asking:
> How common is X?

is still underspecified unless it states the frequency estimand.

Required field:

**Frequency estimand**
- point prevalence;
- period prevalence;
- cumulative incidence over T;
- incidence rate per person-time, if explicitly targeted.

Project rule:
do not pool or compare these as if they were one outcome.

---

# Part B — Target condition / event

## 3. The target condition must be operationally defined

### Established finding
**Confidence: HIGH**

Current PERSyst/JBI methodological discussion emphasizes that a prevalence estimate is meaningful only relative to a specified target condition and target population.

Condition/event definition can depend on:
- diagnostic criteria;
- threshold;
- questionnaire cut-off;
- device/measurement;
- self-report;
- administrative code;
- clinician diagnosis;
- event definition.

### Project consequence

For every frequency question specify:

1. target condition/event;
2. accepted case definitions;
3. whether alternative definitions are combinable;
4. whether ascertainment method itself is a grouping variable.

Example:
“exercise-related injury” is not one stable condition if studies define injury as:
- any pain;
- medical-attention injury;
- time-loss injury;
- structural diagnosis.

Those estimates may not be structurally comparable.

---

## 4. Case definition is part of comparability, not just measurement detail

### Established finding
**Confidence: HIGH**

Different ascertainment/definitions can materially change prevalence.

Project rule:
when condition definitions differ enough to create different underlying target states:
- separate them;
- or explicitly model/stratify them.

Do not treat large between-study variation as purely statistical heterogeneity when definitions are structurally incompatible.

Detailed heterogeneity methods belong to later RES topics.

---

# Part C — Target population and denominator

## 5. Target population is mandatory

### Established finding
**Confidence: HIGH**

A prevalence/frequency estimate has no meaning without a denominator population.

Required:
1. who is in the target population;
2. inclusion/exclusion boundaries;
3. whether population is community, clinical, occupational, athletic, etc.;
4. age/training/health characteristics when relevant.

### Project consequence

A frequency estimate among:
- competitive athletes;
- gym users;
- general adults;
- rehabilitation patients

cannot be generalized across those populations without an applicability argument.

---

## 6. For cumulative incidence, population must be initially at risk

### Established epidemiological principle
**Confidence: HIGH**

Cumulative incidence asks what proportion of those **at risk at baseline** develops the event during the interval.

Project rule:
define:
- eligibility for denominator;
- baseline event-free/risk status when logically required;
- handling of recurrent events if relevant.

Do not use a prevalence denominator as though it automatically answers cumulative incidence.

---

## 7. Sampling frame matters already at question level

### Established methodological principle
**Confidence: HIGH**

The target population and sampled population are distinct.

Question framing should name the target population first.

Later risk-of-bias assessment asks whether the study sample adequately represents it.

Project consequence:
do not define the scientific target merely as:
> “participants available in included studies”.

That reverses the logic.

---

# Part D — Time

## 8. Prevalence requires a time reference

### Established finding
**Confidence: HIGH**

### Point prevalence
Requires a defined time point/reference date.

### Period prevalence
Requires a defined interval.

Project rule:
if studies span periods in which:
- diagnostic criteria;
- exposure environment;
- training practices;
- technology
changed materially, calendar time may be a planned grouping/applicability variable.

---

## 9. Cumulative incidence requires a risk horizon

### Established finding
**Confidence: HIGH**

Examples:
- 4-week cumulative incidence;
- 12-week cumulative incidence;
- 1-year cumulative incidence.

These are different estimands.

Project rule:
never synthesize cumulative-incidence proportions with materially different follow-up horizons without a justified time model/grouping.

---

## 10. Calendar period and follow-up horizon are different

Example:

- participants recruited in 2024–2025;
- followed for 12 weeks.

Two separate time fields:

1. **calendar/reference period**;
2. **individual risk/follow-up horizon**.

This distinction is especially important when background rates change over historical time.

---

# Part E — Context and geography

## 11. Context can materially determine frequency

### Established finding
**Confidence: HIGH**

Potential contexts:
- country/region;
- community vs clinic;
- school/workplace;
- sport/gym setting;
- supervised vs unsupervised setting;
- healthcare access;
- measurement system.

Project consequence:
context is included when it changes:
- target population;
- ascertainment;
- opportunity for event occurrence;
- practical interpretation.

---

## 12. Geography should not be added mechanically

A prevalence question may be:
- global;
- national;
- setting-specific;
- population-specific.

Project rule:
define geographic scope only to the degree required by the decision.

Do not create arbitrary location restrictions merely to reduce search volume.

---

# Part F — Status of CoCoPop

## 13. CoCoPop has historical methodological value

Older JBI guidance used:

1. **Co — Condition**
2. **Co — Context**
3. **Pop — Population**

This remains a useful mnemonic for remembering major prevalence-review dimensions.

## 14. But CoCoPop is not treated here as current JBI authority

### Verified current status
**Confidence: HIGH**

Current JBI explicitly delegates prevalence/incidence methodology to PERSyst.

The current PERSyst site/publications checked in this pass do **not** expose a single mandatory modern question-framing acronym replacing CoCoPop.

Therefore project wording:

> **Legacy CoCoPop is a useful historical scaffold; current methodology source is PERSyst.**

Do not write:
> “Current JBI requires CoCoPop.”

---

# Part G — Project Frequency Question Module

No new project acronym is introduced.

Use conditional module:

## Frequency Question Module

1. **Purpose**
   - burden;
   - planning;
   - baseline risk;
   - safety frequency;
   - descriptive epidemiology.

2. **Target condition/event**

3. **Case/event definition**
   - diagnostic/measurement method;
   - threshold/cut-off;
   - acceptable alternative definitions.

4. **Target population**

5. **Denominator / at-risk definition**

6. **Frequency estimand**
   - point prevalence;
   - period prevalence;
   - cumulative incidence;
   - incidence rate/person-time.

7. **Reference time**
   - prevalence point/period;
   - calendar period.

8. **Risk/follow-up horizon**
   - mandatory for cumulative incidence.

9. **Context/setting**

10. **Geographic scope**

11. **Eligible study designs / sampling frames**

12. **Important planned strata**
   - age;
   - sex;
   - training status;
   - setting;
   - ascertainment method;
   - calendar period;
   only when justified.

13. **Applicability target**

14. **Structural comparability rules**
   - which definitions/time horizons/populations may be combined?

15. **What this frequency estimate will inform**

---

# Part H — Exercise/fitness examples

## 15. Prevalence question

> What proportion of recreational resistance-training participants currently report shoulder pain?

Need:
- exact pain definition;
- target training population;
- point/period prevalence;
- setting;
- ascertainment method.

This does **not** answer:
> Does resistance training cause shoulder pain?

That is an etiology/causal question.

---

## 16. Cumulative-incidence question

> Among adults starting a resistance-training program without current shoulder injury, what proportion develops a defined training-related shoulder injury within 12 weeks?

Need:
- initially at-risk population;
- event definition;
- 12-week horizon;
- attrition/observation handling later.

This is different from:
- point prevalence;
- lifetime prevalence;
- events per 1000 training-hours.

---

## 17. Incidence-rate question

> How many defined injuries occur per 1000 training-hours?

This targets:
- event count;
- person/exposure time.

It is not cumulative incidence.

Project rule:
flag incidence-rate synthesis as a distinct rate estimand; do not assume all PERSyst proportion methods transfer automatically.

---

# Part I — Practical rules produced by PASS-09B

1. Use current JBI endorsement → PERSyst as methodology authority.
2. Treat legacy CoCoPop as historical scaffold, not current mandatory JBI standard.
3. State the exact frequency estimand before searching.
4. Separate point prevalence, period prevalence, cumulative incidence and incidence rate.
5. Define target condition/event operationally.
6. Define target population and denominator explicitly.
7. For cumulative incidence, define the initially at-risk population and risk horizon.
8. Separate calendar period from follow-up horizon.
9. Treat case definition/ascertainment as a potential structural source of non-comparability.
10. Include context/geography only when scientifically/decision relevant.
11. Do not infer causation from prevalence or incidence frequency estimates alone.
12. Do not automatically apply proportional meta-analysis methods to incidence rates.
13. Use a conditional Frequency Question Module rather than adding another acronym to the project.
14. Record when current dedicated guidance is still evolving.

## Methodology maturity note

PERSyst is actively developing:
- risk-of-bias guidance;
- PRISMA-Prev;
- heterogeneity methods;
- GRADE for prevalence.

Therefore future RES topics that depend on those methods must re-check the then-current PERSyst outputs rather than freezing 2026 work-in-progress as final standards.

## What remains unresolved for RES-01

1. Mixed-methods question framing.
2. Textual/policy/expert-evidence question framing.
3. Logic models for complex interventions.
4. Second gap audit.
5. Final modular Question Card + synthesis.

## Next pass

**RES-01 / PASS-09C — mixed-methods question framing and integration intent.**
