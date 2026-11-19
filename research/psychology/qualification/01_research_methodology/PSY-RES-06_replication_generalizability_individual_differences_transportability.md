# PSY-RES-06 — Replication, generalizability, individual differences, and transportability

Status: **CLOSED_FOR_PRACTICE v1.0**

## Purpose

Establish when a psychological finding can be expected to:

1. reproduce computationally;
2. replicate with new data;
3. generalize across people, stimuli, settings, procedures, and time;
4. transport to a specified target population;
5. inform reasoning about an individual.

The central goal is to prevent a common inferential collapse:

`published group effect -> universal psychological mechanism -> applies to this individual`.

Those are separate claims requiring separate evidence.

## 1. Reproducibility and replicability are different

Following the National Academies terminology:

- **reproducibility**: obtaining consistent results using the same input data, computational steps, methods/code, and analysis conditions;
- **replicability**: obtaining consistent results across studies that address the same scientific question using newly obtained data.

Therefore:

`analysis reproduces -> empirical claim replicated`

is false.

A result can be computationally reproducible but fail to replicate in new data.

A replication can support a claim even when the exact numerical estimate differs, provided the new evidence is sufficiently consistent with the same scientific claim after uncertainty is considered.

## 2. Replication is diagnostic evidence, not a binary ritual

Nosek and Errington propose treating a replication as a study for which **any possible result would be diagnostic evidence about a prior claim**.

This avoids reducing replication to:

`same method + p < .05 = success`.

A replication should be interpreted using:

- effect direction;
- effect magnitude;
- uncertainty;
- compatibility with the original estimate;
- statistical power/precision;
- equivalence or smallest-effect-of-interest logic where appropriate;
- cumulative evidence across studies;
- theoretically relevant procedural differences.

A non-significant replication is not automatically a disproof.

A statistically significant replication is not automatically strong confirmation.

## 3. Direct and conceptual replication answer different questions

### Direct replication

Attempts to preserve conditions believed to be theoretically relevant and tests whether the prior result recurs under closely corresponding operations.

Primary question:

> Does the effect recur under conditions intended to instantiate the same claim?

### Conceptual replication

Changes operationalizations, materials, populations, procedures, or contexts while testing the same underlying theoretical claim.

Primary question:

> Does the theoretical claim survive materially different operationalizations?

Direct replication is stronger for testing the reliability of a specific operational result.

Conceptual replication is stronger for testing generality of a theoretical claim across operational variation.

Neither replaces the other.

## 4. Replication failure can mean several things

A discrepant replication can reflect:

1. original result was a false positive or overestimate;
2. replication result was a false negative or imprecise estimate;
3. procedural implementation differed in a causally important way;
4. population/context/material differences are real moderators;
5. measurement changed the construct being tested;
6. original claim was broader than its actual boundary conditions;
7. analysis choices differed;
8. the theory is underspecified about which conditions matter.

Therefore the correct question after a discrepancy is:

> Which claim is no longer supported at the originally stated level of generality?

not automatically:

> Which study is wrong?

## 5. Successful replication extends generality only across dimensions actually varied

A successful replication in another laboratory may support generality across **laboratories**.

It does not automatically establish generality across:

- cultures;
- ages;
- clinical populations;
- stimuli;
- languages;
- task variants;
- time periods;
- real-world settings.

Generalization must be dimension-specific.

## 6. Constraints on Generality

Simons, Shoda, and Lindsay argue that empirical reports should identify the populations to which their claims are intended to generalize and state relevant constraints.

A useful Constraints on Generality (COG) statement covers at least:

1. **participants/populations**;
2. **materials/stimuli**;
3. **settings/contexts**;
4. **procedures/manipulations**;
5. **time/history**, where plausible.

For each dimension specify:

- what was actually sampled;
- what broader population is intended;
- why the sample is assumed to represent that population for the target claim;
- what variations are expected to preserve the result;
- what variations may be boundary conditions.

Canonical rule:

**Never let the wording of a psychological conclusion imply a broader population than the design justifies.**

## 7. Representative sampling and generalization are related but not identical

For descriptive population claims such as prevalence, representative/probability sampling is often central.

For causal or mechanistic experiments, a nonrepresentative sample can still provide internally valid evidence about an effect under the studied conditions.

However, extending that effect to a broader target population requires an explicit argument about:

- treatment/mechanism stability;
- effect modifiers;
- sample-selection processes;
- measurement equivalence;
- context.

Therefore:

`nonrepresentative sample -> study useless`

is too strong.

But:

`internal validity -> universal external validity`

is also false.

## 8. WEIRD samples are a warning against silent universality

Henrich, Heine, and Norenzayan showed that psychological findings based on Western, Educated, Industrialized, Rich, and Democratic populations often cannot simply be assumed to represent humanity.

The correct lesson is not:

`WEIRD result -> false`.

It is:

`WEIRD result -> generality beyond the sampled population requires evidence`.

Cultural labels themselves are coarse and can hide substantial within-group variation.

## 9. Generalization across stimuli, tasks, and sites

Psychological studies often sample not only people but also:

- words;
- faces;
- scenarios;
- images;
- tasks;
- experimenters;
- laboratories;
- sessions;
- measurement occasions.

Yarkoni argues that verbal claims often generalize over these dimensions even when the statistical model treats only participants as random.

If a result depends on a specific small set of stimuli or task instances, a broad claim about the construct may be overstated.

Where the intended inference generalizes over stimuli/sites/tasks, study design and statistical models should represent those sources of variation where feasible.

## 10. Multi-site replication provides direct evidence about some generality dimensions

Large multi-lab projects can estimate whether effects vary across samples and settings while holding protocols relatively standardized.

Many Labs 2 tested 28 findings across 125 samples and 15,305 participants from 36 countries/territories.

Its broader methodological lesson is more important than any single replication percentage:

- some effects reproduced more consistently than others;
- effect-size variation across samples/settings can be estimated directly;
- successful multi-site replication increases evidence for generality across the sampled settings;
- failure or heterogeneity can reveal boundary conditions.

Do not generalize the replication rate from one replication project to "psychology as a whole."

## 11. Define the target population before transport

A transportability claim needs an explicit target population.

Examples:

- adults in a country;
- university students;
- people meeting defined clinical criteria;
- users of a specific service;
- members of a specified cultural/linguistic population.

Without a target population, "generalizable" is incomplete.

The target population should be specified using characteristics relevant to the scientific question, not merely convenient demographics.

## 12. Trial/sample effect versus target-population effect

Let:

- SATE = sample average treatment effect in the study sample;
- PATE = population average treatment effect in the target population.

SATE and PATE can differ when:

1. treatment/effect mechanisms vary across people or contexts;
2. effect modifiers are distributed differently in the study sample and target population.

Therefore a randomized trial can have strong internal causal validity and still estimate an average effect that differs from the target-population average.

## 13. Core transportability assumptions

Extending a causal effect from a study sample to a target population generally requires assumptions analogous to:

### 13.1 Well-defined target population

The population to which the inference is being extended must be specified.

### 13.2 Exchangeability over sample participation

Conditional on measured effect modifiers/covariates, trial/sample participation should not carry additional information about the relevant potential outcomes.

Informally:

> after accounting for the right variables, participants and nonparticipants should be comparable for the treatment-effect question.

### 13.3 Positivity / overlap

Every relevant type of person in the target population must have some counterpart represented in the study data.

If a target subgroup has essentially zero probability of appearing in the study, its effect cannot be learned from that study without extrapolation.

### 13.4 Consistency

Treatment/exposure and outcome definitions must correspond meaningfully between the study and target context.

### 13.5 Correct effect-modifier information

Important moderators of the effect that differ between source and target populations must be measured adequately.

Statistical weighting/modeling cannot recover unmeasured effect modifiers by magic.

## 14. Statistical transport methods do not remove assumption dependence

Methods can include:

- inverse odds/probability-of-participation weighting;
- outcome modeling;
- doubly robust estimators;
- standardization/g-formula approaches.

These methods can adjust for measured differences between source and target populations.

They do not prove transportability.

They rely on:

- correct target definition;
- overlap;
- measured modifiers;
- model adequacy;
- compatible treatment/outcome measurement.

## 15. Average effects and individual effects are different estimands

Group evidence usually identifies an **average effect**.

For an individual, the scientifically ideal causal question is:

> What would happen to this same person under condition A versus condition B?

Only one of those potential outcomes is observed at a given time.

Therefore an individual causal treatment effect is generally not directly identifiable from an ordinary parallel-group randomized trial.

Kent et al. emphasize that person-level treatment effects are fundamentally different from population average effects.

Canonical rule:

**Average benefit does not imply benefit for every individual.**

## 16. Heterogeneity of treatment/effect response

Effects may vary across:

- baseline risk;
- age;
- severity;
- prior history;
- genotype;
- context;
- adherence;
- concurrent exposures;
- psychological traits;
- social environment.

A nonzero average can coexist with:

- large benefit for some;
- negligible effect for others;
- harm/opposite effect for others.

Conversely, a near-zero average can hide opposing subgroup effects.

## 17. Subgroup effects do not automatically solve individualization

Conventional subgroup analyses are limited because:

- people belong to many overlapping subgroups;
- subgroup analyses are often underpowered;
- multiple testing creates false positives;
- effect modification is scale-dependent;
- one-variable-at-a-time subgrouping ignores joint characteristics;
- subgroup differences can reflect proxies rather than causal modifiers.

Thus:

`belongs to subgroup -> individual effect known`

is false.

A subgroup effect is still an average within a reference class.

## 18. Reference-class problem

The same individual can belong simultaneously to many categories:

- age group;
- sex/gender category;
- diagnostic group;
- severity level;
- cultural group;
- personality profile;
- baseline-risk stratum.

Different subgroup analyses may imply different expected effects for the same person.

Therefore the choice of reference class must be theoretically and empirically justified.

## 19. Between-person effects are not automatically within-person mechanisms

Psychological research often estimates relations across people:

> people with higher X tend to have higher Y.

This does not automatically imply the within-person process:

> when this person's X rises, their Y rises.

Between-person covariance and within-person covariance can differ in magnitude or direction.

For claims about an individual's dynamics, prefer evidence based on:

- repeated within-person measurement;
- intensive longitudinal data;
- time-series models;
- experimental manipulation within person;
- N-of-1 or single-case experimental designs where appropriate.

Cripps et al. explicitly note that group-level patterns cannot be assumed to hold at the individual level without individual-level testing.

## 20. Trait-level inference and state-level inference must be separated

An observed behavior can reflect:

- stable between-person difference;
- temporary state;
- person × situation interaction;
- measurement context;
- developmental change.

A stable group difference does not prove that a trait explains a specific episode.

A within-person state fluctuation does not prove a stable trait difference.

Generalization must preserve the level of analysis.

## 21. Individualization is an update, not a replacement of population evidence

Population evidence provides a prior empirical constraint.

Individual data can update that constraint when sufficiently informative.

A defensible sequence is:

`population evidence -> relevant subgroup/modifier evidence -> individual observations -> within-person evidence -> updated individual inference`.

Do not use:

`one personal observation -> ignore all population evidence`.

Also do not use:

`population average -> override repeated contradictory individual evidence`.

## 22. Generalization Ladder

Before transferring a finding, identify the level reached.

### Level 0 — Computational reproduction

Same data/code produce same result.

### Level 1 — Independent replication

New data support the same scientific claim under closely related conditions.

### Level 2 — Procedural/operational generalization

Claim survives altered materials/tasks/procedures.

### Level 3 — Context/site generalization

Claim survives different laboratories/settings/times.

### Level 4 — Population generalization

Claim survives different participant populations or is explicitly transported to a target population.

### Level 5 — Subgroup/effect-modifier refinement

Relevant effect heterogeneity is characterized.

### Level 6 — Individual dynamic evidence

Within-person data support the mechanism/effect for the individual.

These levels are not a universal hierarchy of scientific worth.

They identify how far a specific inference has actually traveled.

## 23. Replication and Generalization Gate

Before applying a psychological finding beyond its original study, ask:

### A. Claim

1. What exact claim is being transferred?
2. Is it descriptive, associational, causal, mechanistic, predictive, or experiential?

### B. Reproducibility/replication

3. Has the original analysis been computationally reproduced where relevant?
4. Has the claim been independently replicated?
5. How was replication evaluated beyond p < .05?
6. Are effect sizes and uncertainty compatible?
7. Were discrepant replications investigated for theoretically relevant differences?

### C. Generality dimensions

8. Which participants/populations were sampled?
9. Which stimuli/materials were sampled?
10. Which tasks/procedures were used?
11. Which settings/sites were sampled?
12. Which historical/time context applies?
13. Which of these dimensions were actually varied in replication?

### D. Target population

14. What is the intended target population?
15. How does it differ from the source sample?
16. Which differences plausibly modify the effect?
17. Are those modifiers measured?
18. Is there adequate overlap/positivity?

### E. Measurement

19. Is the construct measured equivalently across source and target?
20. Are language, culture, administration, and norms comparable?

### F. Effect heterogeneity

21. Is there evidence of heterogeneity?
22. Is heterogeneity meaningful on the decision-relevant scale?
23. Are subgroup findings prespecified and adequately powered?
24. Could subgroup effects reflect multiple testing or proxy variables?

### G. Individual transfer

25. Is the desired conclusion about an average group or a single person?
26. Does the evidence concern between-person or within-person processes?
27. Is individual-level longitudinal/experimental evidence available?
28. Are there repeated observations that contradict the group expectation?
29. What reference class is being used and why?

### H. Final inference

30. What level of the Generalization Ladder has actually been reached?
31. What dimensions remain untested?
32. What is the strongest defensible conclusion?
33. What would be an overgeneralization?

## 24. High-value failure modes

### Failure A — reproduced = replicated

Incorrect.

Correct:

Same-data reproducibility and new-data replicability are different tests.

### Failure B — one failed replication = theory false

Incorrect.

Correct:

A discrepancy can reveal false original evidence, imprecision, implementation differences, or genuine boundary conditions.

### Failure C — one successful replication = universal

Incorrect.

Correct:

It extends confidence only across the dimensions actually sampled/varied.

### Failure D — representative-looking sample = automatic generality

Incorrect.

Correct:

Generality depends on the target claim, effect modifiers, measurement, context, and sampling mechanism.

### Failure E — randomized = generalizable

Incorrect.

Correct:

Randomization protects treatment-group comparability inside the study; it does not automatically make participants representative of the target population.

### Failure F — average effect = individual effect

Incorrect.

Correct:

Population average treatment effects do not identify a person's counterfactual response.

### Failure G — subgroup average = person-specific truth

Incorrect.

Correct:

A subgroup effect remains an average and faces the reference-class problem.

### Failure H — between-person relation = within-person mechanism

Incorrect.

Correct:

The two levels require separate evidence.

### Failure I — WEIRD sample = invalid study

Incorrect.

Correct:

The study may be valid for its sampled population; broader human generality requires evidence.

### Failure J — statistical transport = assumption-free correction

Incorrect.

Correct:

Transport methods depend on target definition, measured modifiers, overlap, consistency, and model assumptions.

## 25. Closure audit

### Criterion 1 — reproducibility and replicability are separated

**PASS.**

### Criterion 2 — replication is not reduced to significance

**PASS.**

### Criterion 3 — direct and conceptual replication are distinguished

**PASS.**

### Criterion 4 — boundary-condition interpretation is explicit

**PASS.**

### Criterion 5 — generality dimensions are explicit

**PASS.**

Participants, stimuli, procedures, settings, and time are represented.

### Criterion 6 — target-population transportability is explicit

**PASS.**

Target definition, sample-selection exchangeability, positivity, consistency, and effect modifiers are included.

### Criterion 7 — WEIRD/general sampling limits are represented without overcorrection

**PASS.**

### Criterion 8 — average and individual effects are separated

**PASS.**

### Criterion 9 — effect heterogeneity and subgroup limitations are explicit

**PASS.**

### Criterion 10 — between-person and within-person inference are separated

**PASS.**

### Criterion 11 — individual transfer has an explicit evidence route

**PASS.**

Population -> subgroup/modifiers -> individual observations -> within-person evidence.

### Criterion 12 — reusable generalization audit exists

**PASS.**

A 33-question Replication and Generalization Gate plus Generalization Ladder are now canonical.

## Canonical working rule

**Replicate the claim -> define its boundary conditions -> define the target population -> test effect modifiers and measurement equivalence -> transport only under explicit assumptions -> require within-person evidence for within-person claims.**

Never:

**group result -> universal law -> individual mechanism.**

## Sources

1. National Academies of Sciences, Engineering, and Medicine. (2019). *Reproducibility and Replicability in Science*. National Academies Press. https://doi.org/10.17226/25303
2. Nosek, B. A., & Errington, T. M. (2020). What is replication? *PLOS Biology, 18*(3), e3000691. https://doi.org/10.1371/journal.pbio.3000691
3. Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716. https://doi.org/10.1126/science.aac4716
4. Klein, R. A., Vianello, M., Hasselman, F., et al. (2018). Many Labs 2: Investigating Variation in Replicability Across Samples and Settings. *Advances in Methods and Practices in Psychological Science, 1*(4), 443–490. https://doi.org/10.1177/2515245918810225
5. Simons, D. J., Shoda, Y., & Lindsay, D. S. (2017). Constraints on Generality (COG): A Proposed Addition to All Empirical Papers. *Perspectives on Psychological Science, 12*(6), 1123–1128. https://doi.org/10.1177/1745691617708630
6. Yarkoni, T. (2022). The generalizability crisis. *Behavioral and Brain Sciences, 45*, e1. https://doi.org/10.1017/S0140525X20001685
7. Henrich, J., Heine, S. J., & Norenzayan, A. (2010). The weirdest people in the world? *Behavioral and Brain Sciences, 33*(2–3), 61–83. https://doi.org/10.1017/S0140525X0999152X
8. Dahabreh, I. J., Haneuse, S. J.-P. A., Robins, J. M., Robertson, S. E., Buchanan, A. L., Stuart, E. A., & Hernán, M. A. (2021). Study Designs for Extending Causal Inferences From a Randomized Trial to a Target Population. *American Journal of Epidemiology, 190*(8), 1632–1642. https://doi.org/10.1093/aje/kwaa270
9. Ackerman, B., Lesko, C. R., Siddique, J., Susukida, R., & Stuart, E. A. (2021). Generalizing Randomized Trial Findings to a Target Population using Complex Survey Population Data. *Statistics in Medicine, 40*(5), 1101–1120. https://doi.org/10.1002/sim.8822
10. Kent, D. M., Steyerberg, E., & van Klaveren, D. (2018). Personalized evidence based medicine: predictive approaches to heterogeneous treatment effects. *BMJ, 363*, k4245. https://doi.org/10.1136/bmj.k4245
11. Dahabreh, I. J., Hayward, R., & Kent, D. M. (2016). Using group data to treat individuals: understanding heterogeneous treatment effects in the age of precision medicine and patient-centred evidence. *International Journal of Epidemiology, 45*(6), 2184–2193. https://doi.org/10.1093/ije/dyw125
12. Cripps, E., Wood, R. E., Beckmann, N., Lau, J., Beckmann, J. F., & Cripps, S. A. (2016). Bayesian Analysis of Individual Level Personality Dynamics. *Frontiers in Psychology, 7*, 1065. https://doi.org/10.3389/fpsyg.2016.01065

## Scope note

The Yarkoni generalizability-crisis thesis is influential but contested. This block adopts the narrower, less controversial operational lesson: statistical and verbal generalization scopes must be aligned, and unmodeled sources of variation can constrain inference. It does not treat every stronger philosophical claim in that debate as settled consensus.

Likewise, transportability methods largely come from causal epidemiology and biostatistics. Their formal assumptions are used here where applicable to psychological causal questions; they are not imposed mechanically on descriptive or qualitative research.
