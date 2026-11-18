# PSY-RES-05 — Systematic reviews, meta-analysis, heterogeneity, and publication bias

Status: **CLOSED_FOR_PRACTICE v1.0**

## Purpose

Establish how bodies of psychological evidence should be identified, synthesized, appraised, and interpreted without treating a systematic review, pooled effect, forest-plot diamond, or statistical significance as automatic truth.

This block focuses on synthesis-level reasoning. It does not attempt to teach every meta-analytic estimator or all advanced dependence models.

## Core rule

**A meta-analysis is a statistical combination of selected study results. It inherits the strengths, limitations, biases, definitions, measurements, and missing evidence of the body being combined.**

Therefore:

`meta-analysis != automatic truth`

and:

`systematic review != necessarily meta-analysis`.

A systematic review is defined by a structured, reproducible review process. Meta-analysis is one possible statistical synthesis method within such a review.

## 1. Review question and eligibility come before pooling

Before synthesis, define:

1. population;
2. exposure/intervention;
3. comparator where relevant;
4. outcome/construct;
5. time point;
6. eligible designs;
7. effect measure;
8. setting/context;
9. inclusion/exclusion rules.

Do not let the available literature redefine the question post hoc merely because certain studies are easy to combine.

## 2. Search completeness is part of validity

A systematic review should use a sufficiently broad and reproducible search strategy appropriate to the question.

Cochrane emphasizes that relying on a single bibliographic database is inadequate for intervention reviews and that trials registers and additional sources may be needed.

For psychology, relevant sources may include:

- PsycINFO;
- MEDLINE/PubMed;
- Web of Science or Scopus;
- Embase where clinically relevant;
- trial/study registries;
- dissertations/theses;
- conference records;
- preprints where appropriate;
- citation chasing;
- author contact;
- domain-specific repositories.

The exact set depends on the question.

Canonical rule:

**Search strategy quality is part of inference quality.**

## 3. Study versus report

One study may generate multiple:

- journal articles;
- conference abstracts;
- secondary analyses;
- follow-up papers;
- registry entries;
- dissertations.

The unit of evidence is the study/result relevant to the question, not the number of publications.

Failure to link duplicate reports can double-count evidence.

## 4. Protocol and preregistration

A strong review should establish methods before seeing all results where feasible.

Prespecify:

- eligibility;
- search sources;
- outcomes;
- effect measures;
- risk-of-bias methods;
- synthesis model;
- subgroup/meta-regression hypotheses;
- sensitivity analyses.

Protocol deviations are not automatically invalid, but should be justified and transparently reported.

## 5. Study selection and data extraction

Selection and extraction are themselves potential bias points.

Prefer:

- explicit eligibility rules;
- duplicate or independently checked study selection;
- duplicate or independently checked extraction;
- documented exclusions at full-text stage;
- linkage of multiple reports from one study.

Review-level methods must not be treated as clerical details.

## 6. Risk of bias of primary studies must survive into synthesis

A meta-analysis of biased studies can produce a biased pooled estimate with narrow confidence intervals.

Do not treat study weights as quality weights unless the model explicitly and defensibly represents quality.

Risk-of-bias information should influence:

- interpretation;
- subgroup/sensitivity analysis;
- certainty assessment;
- sometimes eligibility.

Canonical rule:

**Precision does not cancel systematic bias.**

## 7. When pooling is appropriate

Pooling is reasonable only when studies are sufficiently compatible for the target question.

Assess similarity in:

- construct definition;
- population;
- intervention/exposure;
- comparator;
- outcome;
- measurement instrument;
- follow-up interval;
- design;
- risk of bias;
- analysis scale.

Statistical software being able to compute a pooled effect is not evidence that pooling is substantively meaningful.

## 8. When not to pool

Do not force a meta-analysis when:

- constructs are conceptually different;
- interventions/exposures differ too much;
- outcomes represent materially different targets;
- effect estimates answer different causal/associational questions;
- study designs have incompatible estimands;
- reporting is too incomplete;
- heterogeneity makes an average uninterpretable;
- dependence or unit-of-analysis problems cannot be handled adequately.

In these cases structured synthesis without meta-analysis can be more defensible than a misleading pooled number.

Cochrane explicitly recognizes synthesis methods other than meta-analysis and requires transparent description rather than a vague "narrative synthesis" label.

## 9. Effect measures

Choose the effect measure to match the outcome and question.

Examples:

- mean difference;
- standardized mean difference;
- correlation;
- risk ratio;
- odds ratio;
- hazard ratio;
- prevalence ratio;
- regression coefficient.

Do not mix effects merely because they can be algebraically converted.

### 9.1 Standardized mean differences

SMD is commonly used when studies measure the same intended construct with different scales.

But SMD depends on the study standard deviation.

Therefore between-study differences in:

- population variability;
- reliability;
- restriction of range;
- scale properties;

can change the SMD even when the raw underlying difference is similar.

Psychology-specific rule:

**Different questionnaires with similar labels are not automatically measurements of the same construct merely because SMD makes them numerically combinable.**

Construct equivalence must be established first.

## 10. Fixed-effect and random-effects models answer different summaries

### Fixed-effect model

Common interpretation:

The included studies are estimating one common underlying effect, and observed differences reflect sampling error.

### Random-effects model

Common interpretation:

Study-specific true effects vary around a distribution, and the pooled estimate represents the mean of that distribution.

Important:

A random-effects model does **not** make heterogeneity disappear.

It changes the estimand and weighting structure.

When small studies differ systematically from large studies, random-effects weighting can give relatively more influence to small studies and can worsen bias when small-study effects are present.

## 11. Heterogeneity has several meanings

Distinguish:

### Clinical/conceptual heterogeneity

Differences in:

- participants;
- constructs;
- interventions;
- contexts;
- outcomes.

### Methodological heterogeneity

Differences in:

- design;
- measurement;
- risk of bias;
- analytic method.

### Statistical heterogeneity

Observed study effects vary more than expected from sampling error alone.

Statistical heterogeneity may arise from genuine effect differences, methodological differences, bias, or combinations of these.

## 12. I² and Q are not verdicts

### Cochran Q

A non-significant heterogeneity test does not prove homogeneity, especially with few/small studies.

With very many studies, trivial heterogeneity can become statistically detectable.

### I²

I² describes the proportion of observed effect variation attributable to heterogeneity rather than sampling error under its model.

Do not interpret I² using rigid universal thresholds.

Its importance depends on:

- magnitude/direction of effects;
- precision;
- number of studies;
- clinical/conceptual diversity;
- decision thresholds.

Canonical rule:

**I² is a diagnostic clue, not a quality score.**

## 13. Tau² and prediction intervals

Tau² estimates between-study variance in a random-effects model.

A confidence interval around the pooled mean tells us uncertainty about the **average effect**.

It does not describe how widely underlying effects vary across settings/studies.

A prediction interval can be more informative because it attempts to describe the plausible range of underlying effects in a comparable new setting/study.

Cautions:

- prediction intervals rely on model assumptions;
- they can be unstable with few studies;
- interpretation is problematic under funnel-plot asymmetry or poorly estimated heterogeneity.

## 14. Average effect versus practically relevant variability

A pooled mean can be positive while:

- some settings show near-zero effect;
- some show larger effect;
- some possibly show harm/opposite direction.

Therefore always ask:

1. What is the average effect?
2. How uncertain is that average?
3. How heterogeneous are the effects?
4. Could the effect cross a meaningful decision threshold across settings?
5. Is an average scientifically or practically meaningful?

## 15. Subgroups and meta-regression

Subgroup analysis and meta-regression can explore possible effect modifiers.

But they are usually observational comparisons between studies.

Risks include:

- low power;
- multiple testing;
- post-hoc data dredging;
- study-level confounding;
- ecological bias;
- correlated study characteristics.

Do not infer:

`subgroup A significant + subgroup B non-significant -> A differs from B`.

A formal between-subgroup comparison is required.

Cochrane advises caution with meta-regression when there are few studies and suggests it generally should not be considered with fewer than about ten studies, with even more studies often needed depending on covariate distribution and model complexity.

Prespecified, theory-driven hypotheses are stronger than post-hoc explanations of heterogeneity.

## 16. Publication and non-reporting bias

Bias can arise when availability of evidence depends on:

- statistical significance;
- effect magnitude;
- direction;
- perceived novelty;
- favorability to sponsor or theory.

This can occur through:

- entire studies never being published;
- delayed publication;
- selective outcome reporting;
- selective time-point reporting;
- selective analyses;
- incomplete numerical reporting.

Cochrane uses the broader idea of **bias due to missing evidence**, recognizing that entire studies or particular results may be selectively unavailable.

## 17. Funnel plots

A funnel plot displays effect estimates against study size/precision.

Asymmetry can be caused by:

- missing evidence/publication bias;
- true heterogeneity;
- poorer methods in smaller studies;
- different populations/interventions in small studies;
- mathematical artefact;
- chance.

Therefore:

**funnel asymmetry != publication bias diagnosis**.

## 18. Tests for funnel-plot asymmetry

Tests such as Egger-type tests can have low power.

Cochrane recommends that such tests generally be used only when there are at least about ten studies and interpreted together with the plot and substantive context.

A non-significant asymmetry test does not establish absence of publication bias.

A significant test does not establish publication bias as the only explanation.

## 19. Trim-and-fill and bias-correction methods

Methods that estimate or "correct" missing studies rely on assumptions.

Do not present a trim-and-fill adjusted estimate, selection-model estimate, or other corrected value as a recovered truth.

Use these methods as sensitivity analyses within a broader missing-evidence assessment.

The primary task is to understand **why evidence may be missing**, using:

- registries;
- protocols;
- unpublished results;
- author contact;
- prospective records;
- comparison of planned versus reported outcomes.

## 20. Statistical significance is not the synthesis target

Do not classify a meta-analysis as:

- "works" because P < .05;
- "does not work" because P > .05.

Interpret:

- effect magnitude;
- confidence interval;
- clinically/psychologically meaningful thresholds;
- heterogeneity;
- prediction interval;
- bias;
- certainty.

Cochrane explicitly recommends avoiding binary conclusions based on statistical significance alone.

## 21. Certainty of the body of evidence

A pooled estimate and certainty are different outputs.

A structured certainty assessment should consider at least:

- risk of bias;
- inconsistency;
- indirectness;
- imprecision;
- dissemination/publication bias.

GRADE provides one established framework for intervention/health evidence.

Important scope rule:

**GRADE is useful as a structured certainty framework, but it is not a universal scoring system for every psychological research question.**

Different question types may require adapted frameworks.

## 22. Indirectness

Evidence can be internally strong but still poorly answer the target question because of mismatch in:

- population;
- construct;
- intervention;
- comparator;
- outcome;
- context;
- duration.

For individualized psychological reasoning, indirectness is especially important.

A high-quality meta-analysis in a substantially different population does not automatically transfer to a specific person.

## 23. Review quality is separate from primary-study quality

A systematic review has its own risk of bias.

ROBIS assesses review-level bias across:

- eligibility criteria;
- identification/selection;
- data collection/appraisal;
- synthesis/findings.

AMSTAR 2 highlights critical review-method domains such as:

- protocol;
- comprehensive search;
- justified exclusions;
- primary-study risk of bias;
- synthesis methods;
- interpretation of risk of bias;
- publication-bias assessment.

Important:

Do not compute a simplistic total quality score if the instrument does not support it.

AMSTAR 2 explicitly advises against reducing its items to one numeric total.

## 24. Reporting quality is not methodological validity

PRISMA 2020 is a reporting guideline.

A review can be well reported and methodologically weak.

A review can be poorly reported such that quality cannot be assessed.

Therefore:

`PRISMA-compliant != low risk of bias`.

Use reporting guidelines to evaluate transparency, and tools such as ROBIS/appropriate critical appraisal for review validity.

## 25. Psychology-specific synthesis hazards

### 25.1 Construct proliferation

Different papers may use different labels for overlapping constructs or the same label for different constructs.

Pooling by label alone can manufacture a false common construct.

### 25.2 Measure proliferation

Multiple scales may target partially overlapping content.

SMD does not solve conceptual non-equivalence.

### 25.3 Dependent effect sizes

A single study may report:

- multiple outcomes;
- multiple scales;
- multiple time points;
- multiple subgroups;
- several related contrasts.

Treating all such estimates as independent artificially increases precision.

The synthesis must address dependence through a defensible selection rule, aggregation, multilevel model, robust-variance method, or other appropriate technique.

### 25.4 Flexible inclusion and outcome choice

Psychological literatures often offer many plausible decisions about:

- constructs;
- subscales;
- time points;
- task metrics;
- adjusted/unadjusted estimates.

These decisions must be prespecified or sensitivity-tested where possible.

## 26. Triangulation across synthesis types

Confidence rises when materially different evidence sources converge despite different biases.

Examples:

- randomized intervention evidence;
- longitudinal observational evidence;
- experimental mechanism studies;
- within-person studies;
- qualitative evidence;
- measurement studies.

Do not mechanically pool incompatible evidence.

Triangulation means asking whether different methods with different bias structures support the same causal/explanatory picture.

## 27. Sensitivity analysis

A synthesis should test whether conclusions depend on defensible analytic decisions.

Possible sensitivity analyses include:

- excluding high-risk-of-bias studies;
- fixed versus random effects;
- alternative heterogeneity estimators;
- alternative eligible effect measures;
- excluding extreme/influential studies;
- excluding small studies where justified;
- published versus registered/unpublished evidence;
- alternative handling of dependent effects;
- alternative construct-grouping decisions.

A result that disappears under reasonable alternatives should be described as fragile.

## 28. Evidence Synthesis Gate

Before accepting a systematic review/meta-analysis as high-level evidence, ask:

### A. Question

1. Is the review question explicit?
2. Do included studies answer the same target question?

### B. Search

3. Were appropriate databases/sources searched?
4. Were registries/grey/unpublished sources considered where relevant?
5. Is the search recent enough?
6. Could language/publication restrictions systematically omit evidence?

### C. Selection/extraction

7. Were eligibility rules prespecified?
8. Were study selection and extraction adequately checked?
9. Were multiple reports of the same study linked?

### D. Primary-study validity

10. Was risk of bias assessed appropriately?
11. Did risk of bias affect interpretation/sensitivity analysis?

### E. Synthesis compatibility

12. Are constructs genuinely comparable?
13. Are populations/interventions/outcomes/time points sufficiently compatible?
14. Is the effect measure appropriate?
15. Were dependent effect sizes handled?

### F. Heterogeneity

16. What clinical/conceptual heterogeneity exists?
17. What methodological heterogeneity exists?
18. What do I²/Tau² actually imply here?
19. Is a prediction interval available/useful?
20. Does the average hide qualitatively different effects?

### G. Moderator claims

21. Were subgroup/meta-regression hypotheses prespecified?
22. Is there enough study-level information?
23. Were subgroup differences formally tested?
24. Could study-level confounding explain moderators?

### H. Missing evidence

25. Were protocols/registries checked?
26. Could publication or outcome-reporting decisions depend on results?
27. Is funnel asymmetry being overinterpreted?
28. Were sensitivity methods used appropriately?

### I. Certainty/applicability

29. What is the certainty of evidence?
30. Are there serious indirectness or imprecision concerns?
31. Does the body of evidence apply to the intended population/context?

### J. Final inference

32. What conclusion is robust across reasonable synthesis choices?
33. What conclusion depends on fragile assumptions?
34. What remains unresolved?

## 29. High-value failure modes

### Failure A — meta-analysis = truth

Incorrect:

`many studies pooled -> reliable answer`.

Correct:

The synthesis can only be as defensible as study identification, construct compatibility, study validity, effect extraction, model choice, and missing-evidence assumptions.

### Failure B — forest-plot diamond = homogeneity

Incorrect:

`pooled CI is narrow -> effects are consistent`.

Correct:

A narrow CI can estimate the mean precisely while underlying effects remain heterogeneous.

### Failure C — random effects solves heterogeneity

Incorrect.

Correct:

Random effects model between-study variation; they do not explain it or erase its practical importance.

### Failure D — I² threshold = verdict

Incorrect:

`I² = 60% -> automatically bad`.

Correct:

Interpret heterogeneity in relation to effect magnitudes, uncertainty, number of studies, context, and decision thresholds.

### Failure E — funnel asymmetry = publication bias

Incorrect.

Correct:

Asymmetry has multiple possible causes.

### Failure F — no Egger significance = no publication bias

Incorrect.

Correct:

Low power and unsuitable study numbers can make the test uninformative.

### Failure G — significant subgroup only

Incorrect:

`A significant, B not significant -> groups differ`.

Correct:

Test the between-group difference directly.

### Failure H — PRISMA = quality certification

Incorrect.

Correct:

PRISMA addresses reporting transparency, not automatic review validity.

### Failure I — SMD solves construct differences

Incorrect.

Correct:

SMD standardizes units, not meaning.

### Failure J — certainty = pooled P value

Incorrect.

Correct:

Certainty also depends on bias, inconsistency, indirectness, imprecision, and missing evidence.

## 30. Closure audit

### Criterion 1 — systematic review and meta-analysis are distinguished

**PASS.**

### Criterion 2 — search/selection/extraction are treated as inferential components

**PASS.**

### Criterion 3 — risk of bias in primary studies is carried into synthesis

**PASS.**

### Criterion 4 — pooling compatibility is explicitly gated

**PASS.**

### Criterion 5 — fixed-effect/random-effects interpretations are distinguished

**PASS.**

### Criterion 6 — heterogeneity is interpreted beyond I²

**PASS.**

Clinical/conceptual, methodological, I², Tau², and prediction intervals are separated.

### Criterion 7 — subgroup/meta-regression overinterpretation is constrained

**PASS.**

### Criterion 8 — publication/non-reporting bias is represented mechanistically

**PASS.**

### Criterion 9 — funnel plots/tests are constrained

**PASS.**

### Criterion 10 — certainty is separated from pooled effect size

**PASS.**

### Criterion 11 — review-level risk of bias and reporting quality are separated

**PASS.**

### Criterion 12 — psychology-specific construct/measure/dependence problems are explicit

**PASS.**

### Criterion 13 — reusable synthesis gate exists

**PASS.**

A 34-question Evidence Synthesis Gate is now canonical.

## Canonical working rule

**Question -> search completeness -> study validity -> construct compatibility -> effect extraction -> dependence -> synthesis model -> heterogeneity -> missing evidence -> certainty -> applicability -> conclusion.**

Never:

**"systematic review/meta-analysis" label -> trust conclusion.**

## Sources

1. Deeks, J. J., Higgins, J. P. T., Altman, D. G., McKenzie, J. E., Veroniki, A. A., & Simmonds, M. Chapter 10: Analysing data and undertaking meta-analyses. In *Cochrane Handbook for Systematic Reviews of Interventions*, Version 6.5.1, last updated November 2026. https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10
2. Lefebvre, C., Glanville, J., Briscoe, S., et al. Chapter 4: Searching for and selecting studies. In *Cochrane Handbook for Systematic Reviews of Interventions*, Version 6.5.1, last updated March 2025. https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04
3. Page, M. J., Higgins, J. P. T., & Sterne, J. A. C. Chapter 13: Assessing risk of bias due to missing evidence in a meta-analysis. In *Cochrane Handbook for Systematic Reviews of Interventions*, Version 6.5, last updated August 2024. https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-13
4. Schünemann, H. J., Vist, G. E., Higgins, J. P. T., et al. Chapter 15: Interpreting results and drawing conclusions. In *Cochrane Handbook for Systematic Reviews of Interventions*, Version 6.5.1, last updated November 2026. https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-15
5. McKenzie, J. E., & Brennan, S. E. Chapter 12: Synthesizing and presenting findings using other methods. In *Cochrane Handbook for Systematic Reviews of Interventions*. https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-12
6. Page, M. J., McKenzie, J. E., Bossuyt, P. M., et al. (2021). The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. *BMJ, 372*, n71. https://doi.org/10.1136/bmj.n71
7. Shea, B. J., Reeves, B. C., Wells, G., et al. (2017). AMSTAR 2: a critical appraisal tool for systematic reviews that include randomised or non-randomised studies of healthcare interventions, or both. *BMJ, 358*, j4008. https://doi.org/10.1136/bmj.j4008
8. Whiting, P., Savović, J., Higgins, J. P. T., et al. ROBIS: A new tool to assess risk of bias in systematic reviews. Official tool resource: https://www.bristol.ac.uk/population-health-sciences/projects/robis/robis-tool/
9. GRADE Working Group. *GRADE Book*, official current resource. https://book.gradepro.org/
10. GRADE Working Group. Principles for assessing certainty of evidence about effects; inconsistency; indirectness; imprecision. Current chapters updated October 2026. https://book.gradepro.org/
11. Munafò, M. R., & Davey Smith, G. (2020). Causal inference with observational data: the need for triangulation of evidence. *Psychological Medicine*. https://doi.org/10.1017/S0033291720005127

## Current-standard note

As of 2026-11-18:

- Cochrane Chapter 10 is current at Version 6.5.1 and reports a November 2026 update.
- PRISMA 2020 remains the principal general systematic-review reporting guideline identified for this block.
- The official GRADE Book is replacing the older GRADE Handbook during 2026 and is the preferred current GRADE source where updated chapters are available.

## Scope note

AMSTAR 2 and much Cochrane/GRADE guidance were developed primarily for health/intervention evidence. Their general principles are used here where transferable. They are not treated as universal scoring systems for all psychological questions.
