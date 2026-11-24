# RES-01 / PASS-04 — Estimands and exact target effect

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-01 — формулировка исследовательского вопроса

## Scope этого прохода

Только:
1. estimand как точное описание target treatment effect;
2. estimand vs estimator vs estimate;
3. five core estimand attributes;
4. intercurrent events;
5. treatment-policy, hypothetical, composite, while-on-treatment, principal-stratum strategies;
6. assignment effect vs adherence/completion effect;
7. exercise-specific translation.

Не покрывается здесь:
- non-intervention question frameworks;
- search translation;
- stakeholder/equity procedures;
- final gap/audit RES-01;
- detailed missing-data methods;
- detailed per-protocol causal estimators.

## Источники, проверенные в этом pass

1. ICH E9(R1) — Addendum on Estimands and Sensitivity Analysis in Clinical Trials, Step 4, adopted 20 Nov 2019.  
   Official ICH PDF:
   https://database.ich.org/sites/default/files/E9-R1_Step4_Guideline_2019_1203.pdf

2. FDA final guidance implementing ICH E9(R1), May 2021.  
   https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e9r1-statistical-principles-clinical-trials-addendum-estimands-and-sensitivity-analysis-clinical

3. ICH E9(R1) official training materials.  
   https://ich.org/page/training-library

4. Pétavy F et al. Beyond "Intent-to-treat" and "Per protocol": Improving assessment of treatment effects through specification of an estimand. Br J Clin Pharmacol. 2020. PMID 31883123.  
   https://pubmed.ncbi.nlm.nih.gov/31883123/

5. Nagpal TS et al. Adherence is a key factor for interpreting the results of exercise interventions. Physiotherapy. 2021. PMID 34555674.  
   https://pubmed.ncbi.nlm.nih.gov/34555674/

## Applicability note

ICH E9(R1) is a regulatory clinical-trial framework developed for medical-product trials.

Its central concepts are general methodological concepts about defining treatment effects and ICH states that the principles are relevant whenever treatment effects are estimated, including observational/single-arm settings.

However:
**the project adaptation to resistance-training/exercise research is our methodological translation, not an official exercise-science standard.**

---

## 1. Estimand = what exactly is being estimated

### Established finding
**Confidence: HIGH**

ICH distinguishes:

1. **trial/research objective**;
2. **estimand** — target treatment effect;
3. **estimator** — analysis method used to estimate it;
4. **estimate** — numerical result produced.

Project rule:
do not describe an analysis method as if it defines the scientific question.

Examples:
- “mixed model” = estimator/model family;
- “difference in 12-week strength change under assignment to A vs B regardless of discontinuation” = estimand concept;
- “+4.2 kg” = estimate.

---

## 2. Why estimand belongs before analysis

### Established finding
**Confidence: HIGH**

ICH places estimand before:
- trial design;
- data collection;
- analysis;
- sensitivity analysis.

Reason:
the data that need to be collected and the appropriate analysis depend on which treatment effect is actually of interest.

Project consequence:
we cannot first find a convenient reported result and only afterwards decide what effect it supposedly represents.

---

## 3. Core estimand attributes

ICH E9(R1) specifies five components:

1. **Treatment condition(s)** being compared.
2. **Population** targeted by the question.
3. **Variable / endpoint**.
4. **Handling of intercurrent events** relevant to interpretation/existence of measurements.
5. **Population-level summary** used to compare treatment conditions.

### Project translation

For an exercise effect question, an estimand record should specify:

1. Program A vs Program B.
2. Target trainee population.
3. Outcome + time horizon.
4. What happens conceptually if participants:
   - stop training;
   - switch program;
   - add competing training;
   - suffer an event affecting interpretation;
   - substantially deviate from assigned dose.
5. Summary effect:
   - mean difference;
   - risk difference/ratio;
   - median/quantile;
   - other appropriate population summary.

Effect-measure details remain RES-09 revalidation.

---

## 4. Intercurrent event ≠ missing data

### Established finding
**Confidence: HIGH**

ICH defines an intercurrent event as a post-treatment-initiation event that changes:
- interpretation of subsequent measurements; or
- existence of the measurement.

Examples in ICH:
- treatment discontinuation;
- switching/additional treatment;
- terminal events.

Missing data are different:
data that would be meaningful for the estimand but were not collected.

### Exercise translation

Potential intercurrent events:
1. participant stops assigned program;
2. participant switches to another training method;
3. adds substantial outside resistance training;
4. starts an important co-intervention not part of assigned regimen;
5. injury/illness changes ability to perform prescribed program or interpretation of outcome.

But:
not every missed workout must automatically be declared a separate intercurrent event.

The treatment definition may already allow some realistic variation.

Project rule:
only elevate a deviation/event to an intercurrent event when it materially affects interpretation of the target effect.

---

## 5. Treatment-policy strategy

### Established finding
**Confidence: HIGH**

Under treatment-policy strategy:
the outcome remains relevant regardless of whether the specified intercurrent event occurs.

For discontinuation/adherence-related events this can correspond to a pragmatic question similar to:

> What is the effect of assigning/offering Program A vs B in practice, including the fact that some participants stop, deviate or require additional actions?

### Exercise relevance

This can be highly decision-relevant when adherence is part of real-world effectiveness.

Example:
Program A produces excellent physiological adaptation among completers but causes much more dropout.

A treatment-policy-type estimand can preserve that real-world consequence rather than pretending every participant completed perfectly.

### Project wording

Call this:
**assignment / program-policy effect** when adapted to exercise.

Do not automatically label every such analysis “ITT” unless actual randomized-trial analysis satisfies relevant ITT principles.

---

## 6. Hypothetical strategy

### Established finding
**Confidence: HIGH**

Hypothetical strategy asks what outcome would occur under a clearly specified counterfactual scenario in which an intercurrent event did not occur or occurred differently.

Exercise example:

> What would the 12-week hypertrophy difference have been if all participants had continued the assigned program without adding outside resistance training?

This is a different question from assignment effect.

### Critical limitation

The hypothetical scenario must be explicit.

“Effect if everyone complied” is underspecified unless compliance is defined:
- sessions?
- prescribed sets?
- load progression?
- RIR?
- all components?

Estimation also requires stronger causal/model assumptions when the hypothetical outcomes are not observed.

---

## 7. Composite strategy

### Established finding
**Confidence: HIGH**

An intercurrent event can be incorporated into the outcome itself when the event is meaningful to success/failure.

Exercise example:

A composite outcome could define success as:
- achieves a prespecified strength gain **and**
- completes the intervention without a major adverse event/discontinuation.

This may be useful when completion itself is inherently part of the desired outcome.

### Warning

Composite outcomes can hide different component effects.

Project rule:
if using composite:
1. justify why components belong together;
2. report components separately where possible;
3. do not let common low-importance events dominate a critical outcome.

Detailed composite-outcome methodology is outside this pass.

---

## 8. While-on-treatment strategy

### Established finding
**Confidence: HIGH**

Uses response information only up to the intercurrent event.

Exercise analogue:
evaluate performance only while participant remains on assigned protocol.

### Project assessment

Potentially useful for:
- acute tolerability;
- short-term exposure-specific safety;
- some reversible performance questions.

Potentially poor for chronic adaptation questions because:
- people who remain on program may become a selected subset;
- duration of observation differs;
- post-discontinuation adaptation may still matter.

Therefore while-on-program estimands require explicit scientific justification.

---

## 9. Principal-stratum strategy

### Established finding
**Confidence: HIGH**

Principal stratum defines a target population by potential occurrence of an intercurrent event under all relevant treatment conditions.

Example concept:
participants who **would adhere under either Program A or Program B**.

Critical distinction:
this is **not** the same as:
- people who happened to adhere to A;
- people who happened to adhere to B;
- naïve analysis of observed completers.

ICH explicitly warns actual post-randomization subsets can differ in participant characteristics and confound treatment comparisons.

### Project consequence

Do not call:
> completers of A vs completers of B

a clean estimate of:
> treatment effect among people capable of adhering to either program.

Those are different populations/estimands.

---

## 10. Assignment effect vs full-adherence effect

### Project distinction derived from estimand framework
**Confidence: HIGH for distinction; exercise naming is project-specific**

### A. Assignment / program-policy effect
Question:

> What happens if people are assigned/offered Program A vs B under realistic adherence/discontinuation?

Includes behavioral consequences of the program.

Useful for:
- real-world effectiveness;
- adherence-sensitive decisions.

### B. Full-adherence / hypothetical protocol effect
Question:

> What would happen if target participants followed the specified program according to the defined adherence standard?

Useful for:
- physiological efficacy;
- separating biological stimulus from implementation failure.

But this requires:
- explicit adherence definition;
- valid causal estimation assumptions.

### C. Actual-completer contrast
Question:

> How did observed completers differ?

This is descriptive unless causal assumptions/design justify more.

Project rule:
**never silently substitute C for B.**

---

## 11. Naïve per-protocol analysis is not automatically causal

### Established finding
**Confidence: HIGH**

ICH E9(R1) explicitly revisits naïve per-protocol analysis because excluding post-randomization deviators can:
- lose advantages of randomization;
- create selection/confounding;
- change interpretation of effect.

Exercise-specific literature has shown that selecting only highly adherent intervention participants can materially change effect estimates.

That does not mean adherence is unimportant.
It means:
**the scientific question and causal method must be defined first.**

Detailed causal per-protocol estimation belongs to RES-05/RES-10 revalidation.

---

## 12. Adherence must be defined as a construct

### Exercise-specific evidence
**Confidence: MODERATE/HIGH**

Exercise-methodology literature emphasizes that adherence measurement/reporting is important to interpreting intervention effects.

Potential dimensions:
1. attendance;
2. completion of prescribed sessions;
3. sets/reps completed;
4. prescribed load achieved;
5. progression followed;
6. prescribed intensity/effort achieved.

Project consequence:
“adherent” cannot be one vague yes/no label.

For an estimand involving adherence, define which components matter to the target causal question.

---

## 13. Program definition can absorb some deviations

### Established finding / project translation
**Confidence: HIGH/MODERATE**

ICH notes that the treatment attribute itself can be defined broadly enough to include:
- allowed background treatment;
- rescue options;
- regimen sequences.

Exercise analogue:

Instead of treating every load adjustment as an intercurrent event, define Program A as:
- a progression algorithm;
- permitted exercise substitutions;
- allowed autoregulation range.

Then these are part of the assigned treatment policy rather than deviations.

This is important for realistic training programs.

---

## 14. Estimand and missing-data strategy must align

### Established finding
**Confidence: HIGH**

If the assignment effect requires outcome measurement even after training discontinuation, investigators should continue follow-up where possible.

If those outcomes are missing, missing-data assumptions are then needed.

Project consequence:
discontinuing training ≠ necessarily discontinuing measurement.

This distinction becomes mandatory when reading training RCT flow diagrams.

---

## 15. Sensitivity analysis targets assumptions, not a new question

### Established finding
**Confidence: HIGH**

ICH distinguishes:

### Sensitivity analysis
Alternative analysis targeting the **same estimand** to assess robustness to assumptions/data limitations.

### Supplementary analysis
May target:
- different estimand;
- different scientific question.

Project rule:
do not call:
- ITT-like analysis;
- completer analysis;
- hypothetical full-adherence analysis
“sensitivity analyses of the same effect” automatically.

They may be estimating genuinely different effects.

---

## 16. Exercise example

Question:
Program A = high-volume training.
Program B = moderate-volume training.

Outcome:
12-week elbow-flexor hypertrophy.

### Estimand 1 — real-world assignment effect
Population:
relevant trainees.

Treatment:
assignment to A vs B.

Intercurrent event:
program discontinuation handled by treatment-policy strategy.

Interpretation:
which assigned program yields better average outcome including tolerability/adherence consequences?

### Estimand 2 — hypothetical full-adherence effect
Same population/outcome.

Question:
what would hypertrophy difference be if everyone completed the defined intended dose?

Interpretation:
closer to physiological efficacy.

### Estimand 3 — actual completers only
Observed participants completing protocol.

Interpretation:
descriptive selected-subset contrast unless causal methodology supports stronger inference.

These three numbers can differ without contradiction because they answer different questions.

---

## 17. Project estimand record

For intervention-effect questions, add:

1. **Target effect name**
2. **Treatment A**
3. **Treatment B/comparator**
4. **Population**
5. **Variable/outcome + time**
6. **Relevant intercurrent events**
7. **Strategy for each intercurrent event**
8. **Population-level summary**
9. **Adherence definition if relevant**
10. **Data needed after discontinuation**
11. **Primary estimand**
12. **Secondary/supplementary estimands**
13. **Why this estimand answers the decision**

This will later be integrated into QUESTION_CARD.md after RES-01 audit.

---

## 18. Practical rules produced by PASS-04

1. Define the target effect before choosing analysis.
2. Keep estimand / estimator / estimate separate.
3. For intervention effects, record all five estimand attributes.
4. Distinguish intercurrent events from missing data.
5. Distinguish real-world assignment effect from hypothetical full-adherence effect.
6. Never treat observed completers as equivalent to “people who would adhere under either intervention”.
7. Define adherence explicitly when it is part of the causal question.
8. Allow realistic program algorithms/substitutions inside the treatment definition where appropriate.
9. Continue outcome follow-up after program discontinuation when the estimand requires it.
10. Sensitivity analyses should target the same estimand; analyses of different effects are supplementary.
11. Exercise adaptation of ICH terminology must be labeled as project methodology, not official exercise standard.

## What remains unresolved for RES-01

1. Non-intervention question frameworks:
   - diagnostic/measurement;
   - prognostic;
   - exposure/etiology;
   - qualitative;
   - implementation;
   - mechanistic.
2. Translation from question to search concepts.
3. Stakeholder/user involvement in this one-person project.
4. Equity/context.
5. Formal gap/audit checklist.
6. Final synthesis and QUESTION_CARD revision.

## Next pass

**RES-01 / PASS-05 — non-intervention question frameworks.**
