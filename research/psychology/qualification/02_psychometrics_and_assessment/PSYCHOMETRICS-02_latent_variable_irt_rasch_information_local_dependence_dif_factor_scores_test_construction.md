# PSYCHOMETRICS-02 — Latent-variable and item-response measurement: CTT, IRT/Rasch, information, local dependence, DIF, factor scores, scoring, and test construction

Status: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**

Evidence cutoff: **2026-11-19**

## Purpose

Establish the model-based and item-level psychometric competence required to evaluate psychological instruments whose scores depend on latent-variable models, factor analysis, item response theory (IRT), Rasch-family models, item calibration, factor-score estimation, or differential item functioning (DIF).

PSYCHOMETRICS-01 established that a psychological score is not a trait and that interpretation depends on structure, precision, comparability, norms, and intended use.

This block closes the remaining gap:

> What exactly can be inferred when the scoring system itself is a statistical model of latent variables and item responses?

The goal is not to train a software operator.

The goal is to prevent:

- treating a latent-variable estimate as direct observation of a trait;
- treating IRT/Rasch as automatically more valid than classical scoring;
- treating model fit as construct validity;
- treating item parameters as universal constants;
- treating local independence as a technical footnote;
- treating DIF as synonymous with bias;
- treating factor-score estimates as true latent scores;
- deleting items until fit improves while silently narrowing the construct;
- assuming that a more complex model is automatically a better measurement model.

This is a general scientific qualification block and contains no individualized material.

---

# I. Current evidence and standards anchor

## 1. Standards remain interpretation-first

As of 2026-11-19, the official AERA/APA/NCME Testing Standards site still provides the 2014 edition as the current open-access edition while a formal revision process is underway.

The Standards remain the broad anchor:

- model-based scores still require validity evidence;
- reported score precision must be appropriate for intended use;
- item/test models do not bypass fairness, comparability, or score-use requirements;
- model-based scaling is part of the interpretation argument, not a substitute for it.

## 2. COSMIN Version 2.0 explicitly treats IRT/Rasch structural validity as assumption-dependent

The 2024 COSMIN Manual Version 2.0 requires, for its PROM structural-validity rating framework, evidence concerning:

- unidimensionality;
- local independence;
- monotonicity;
- model fit.

Its published numerical criteria are designed for COSMIN systematic reviews of PROMs and are explicitly more lenient than criteria one might require in an individual psychometric study.

Therefore:

**COSMIN thresholds are useful reference criteria, not universal pass/fail laws for all psychological tests.**

## 3. Current IRT literature reinforces model criticism rather than model worship

Recent methodological work includes:

- Chen, Li, Liu, and Ying (2025): modern statistical review of IRT as a latent-factor framework for educational and psychological measurement;
- Sinharay and Monroe (2025): critical review of IRT model-fit assessment;
- Itamiya (2025): review of local dependence structures and diagnostics;
- Rhemtulla and Savalei (2025): factor-score estimates are not true factor scores;
- Cho (2026): ordinal factor-analysis and IRT models are conceptually linked but can differ in estimation behavior;
- Merkle, Winter, and Fitzsimmons (2026): identification/scaling choices are substantive to latent-variable interpretation;
- Baldwin (2026): person-score estimator choice can affect proficiency ordering under some IRT models;
- McNeish (2026): fixed factor-model fit cutoffs have been overgeneralized in psychological scale validation;
- Altgassen and Wilhelm (2026): item selection itself can create or repair construct-validity problems.

The common lesson is:

**a latent-variable model creates an inferential structure; it does not reveal psychological reality automatically.**

---

# II. CTT, latent-variable models, and IRT are different frameworks

## 4. Classical Test Theory is not merely “old IRT”

In a simple CTT representation:

`X = T + E`

where:

- `X` = observed score;
- `T` = expected score under the defined replication concept;
- `E` = error relative to that replication.

CTT focuses primarily on properties of scores under a population and measurement procedure.

It does not require an explicit item-response function linking latent standing to each response category.

## 5. IRT models item-response probabilities

Generic IRT logic:

`P(X_ij = category | theta_i, item parameters_j)`

The model specifies how the probability of a response depends on:

- a latent person variable `theta`;
- item parameters;
- model form;
- assumptions such as conditional/local independence.

Thus IRT is not simply a reliability coefficient with more mathematics.

It changes the measurement model.

## 6. CTT and IRT are not a universal hierarchy of quality

Incorrect:

`IRT > CTT in all cases`.

Correct:

The frameworks answer overlapping but nonidentical questions.

CTT can be adequate when:

- scoring is simple;
- item-level invariance is not required;
- sample size/model complexity makes IRT unstable;
- the intended inference does not benefit materially from latent item modeling.

IRT can add value when:

- item-level functioning matters;
- precision varies strongly across the trait continuum;
- linking/equating is required;
- DIF is important;
- adaptive testing is contemplated;
- person/item parameters need model-based separation.

The correct model is the model justified by the construct, data, design, and intended interpretation.

## 7. Model sophistication does not repair construct invalidity

A poorly defined construct measured with a sophisticated IRT model remains poorly defined.

No latent-variable method automatically repairs:

- construct underrepresentation;
- ambiguous item content;
- response-process mismatch;
- irrelevant method variance;
- inappropriate target population;
- invalid intended use.

Measurement modeling is downstream of construct definition.

---

# III. Ordinal factor analysis and IRT

## 8. Factor analysis and IRT can represent closely related latent-variable structures

For categorical/ordinal items, many factor-analytic and IRT formulations are mathematically related or reparameterizations of similar latent-response models.

Cho (2026) emphasizes that ordinal factor analysis and IRT can use interchangeable conceptual parameters while differing in common estimation approaches:

- IRT often uses full-information methods such as marginal maximum likelihood;
- ordinal factor analysis often uses limited-information methods such as WLSMV/ULSMV.

Therefore:

`factor model` and `IRT model` are not necessarily different psychological theories.

## 9. Equivalent conceptual models can yield different practical estimates

Even when two parameterizations describe equivalent latent structure, results can differ because of:

- estimator;
- finite sample;
- treatment of thresholds;
- numerical optimization;
- identification constraints;
- priors;
- missing-data handling;
- fit diagnostics.

Do not interpret estimation differences as psychological differences automatically.

## 10. Ordinal items should not be treated as continuous by reflex

Likert-type and ordered categorical items have thresholds/categories.

Treating them as continuous can be approximately defensible in some settings, but appropriateness depends on:

- number of categories;
- response distribution;
- skew;
- sample size;
- estimator;
- model purpose.

The choice must be explicit rather than automatic.

---

# IV. Identification and latent scale meaning

## 11. Latent-variable scales do not arrive with natural units

A latent variable has no observed meter stick.

Its origin, variance, sign, and unit require identification/scaling constraints.

Common conventions include:

- fixing latent mean/variance;
- fixing one loading;
- fixing thresholds/intercepts;
- constraining item parameters;
- reference-group scaling.

Therefore:

**theta = 1.0 has no universal psychological meaning across models or calibrations.**

## 12. Identification is not merely software plumbing

Merkle, Winter, and Fitzsimmons (2026) show that identification/scaling constraints can be chosen in ways that make latent predictions correspond to familiar observed-score metrics.

This demonstrates a broader rule:

**the scale of a latent score is partly a modeling convention.**

Interpretation must state:

- identification scheme;
- reference group;
- transformations;
- linking/equating procedure if used.

## 13. Sign reversal can leave the model equivalent

In many factor/IRT parameterizations, reversing:

- latent direction;
- associated loadings/discriminations;

can represent the same statistical model.

Thus “higher theta” only means more of the construct after direction has been substantively anchored.

## 14. Latent scale comparability requires linking or common calibration

Two theta estimates from separately calibrated instruments are not automatically on the same scale.

Comparability may require:

- common items;
- common persons;
- anchor parameters;
- linking constants;
- explicit equating design;
- invariance evidence.

A shared label for the construct is not enough.

---

# V. Unidimensionality

## 15. Unidimensionality is a measurement-model claim

Unidimensionality means that one dominant latent dimension is sufficient for the modeled response structure to the required approximation.

It does not mean:

- the psychological construct has only one causal mechanism;
- all items are interchangeable;
- no secondary processes exist;
- no method effects exist.

## 16. Psychological simplicity and statistical unidimensionality are different

A statistically unidimensional scale can arise from items influenced by multiple psychological processes that covary.

A theoretically simple construct can produce multidimensional response data because of:

- wording;
- difficulty;
- modality;
- context;
- subskills;
- response strategies.

Therefore factor dimensionality is evidence about response structure, not a complete ontology of the construct.

## 17. “Essential” unidimensionality can be sufficient for some uses

Some item banks tolerate minor secondary dimensions when:

- a dominant dimension explains most relevant covariance;
- person ordering/scoring remains sufficiently stable;
- residual dependence is small enough for intended precision;
- substantive interpretations remain defensible.

Whether approximation is acceptable depends on use.

No universal multidimensionality threshold is valid for all applications.

---

# VI. Local independence and dependence

## 18. Local independence is conditional independence

Generic IRT factorization assumes that once the relevant latent variable(s) are conditioned on, item responses are independent:

`P(X_1,...,X_J | theta) = product_j P(X_j | theta)`.

This is stronger than ordinary low inter-item correlation.

## 19. Local dependence can arise for many reasons

Recent review literature identifies sources such as:

- omitted latent dimensions;
- shared stimulus/testlet;
- repeated wording;
- item chaining;
- sequential dependence;
- common scenario;
- response carryover;
- speededness;
- shared method factors;
- environmental dependence;
- scoring dependencies.

## 20. Local dependence can distort person and item inference

If unmodeled, local dependence can:

- inflate apparent test information;
- underestimate person-score uncertainty;
- inflate discrimination;
- alter item parameter estimates;
- distort dimensionality;
- create spurious DIF;
- overweight clusters of redundant items.

Therefore local dependence is not merely a nuisance fit problem.

It can change the substantive interpretation of scores.

## 21. Residual correlation is evidence, not an automatic diagnosis

Diagnostics include:

- residual correlations;
- Yen-type Q3 statistics;
- contingency-based tests;
- limited-information diagnostics;
- item-pair residual analyses.

Each has sampling and model-dependence.

A flagged pair requires investigation of why dependence remains.

## 22. Local dependence can be modeled rather than merely deleted

Possible approaches include:

- testlet models;
- bifactor/method factors;
- multidimensional IRT;
- explicit residual dependence;
- copula/dependence models;
- collapsing or redesigning dependent tasks.

Item deletion is only one option.

---

# VII. Monotonicity and item response functions

## 23. Monotonicity is a directional measurement assumption

For many ordered latent-trait models, higher latent standing should not reduce the probability of responses representing more of the trait, all else equal.

Violations can arise from:

- ambiguous wording;
- multidimensionality;
- unusual response styles;
- category disorder;
- reverse-wording artifacts;
- model misspecification.

## 24. Monotonicity does not prove construct validity

An item can show a beautifully monotonic response function while measuring the wrong construct.

Monotonicity concerns the item-response relation under the model.

Content validity remains separate.

---

# VIII. Dichotomous IRT model families

## 25. One-parameter/Rasch-type models

Generic logistic form:

`P(X=1 | theta) = logistic(theta - b)`

under the conventional unit-discrimination parameterization.

The item parameter `b` describes item location/difficulty on the latent scale.

The model constrains discrimination to be equal/fixed according to parameterization.

## 26. Rasch and 1PL should not be collapsed philosophically without qualification

Statistically, Rasch-family dichotomous models and 1PL logistic models are closely related.

However, Rasch measurement traditions often impose stronger measurement commitments:

- model as a measurement requirement;
- invariance/specific-objectivity emphasis;
- data evaluated against the fixed model rather than model expanded simply to fit data.

Operational rule:

**state the actual model and estimation philosophy instead of using “Rasch/1PL” as an unexplained synonym.**

## 27. Rasch specific objectivity is conditional, not magic

Rasch theory emphasizes separation/invariance of person and item comparisons under model assumptions.

Tutz (2024) clarifies that invariance/separability concepts require careful definition and are not uniquely owned by one model family.

Therefore:

`Rasch used -> item/person parameters objective`

is invalid.

The invariance claim depends on:

- correct model specification;
- calibration;
- item fit;
- target population;
- absence/handling of DIF;
- appropriate linking.

## 28. Strict 1PL/Rasch fit can be overly restrictive

Recent 2026 methodological work by Raykov and Zhang emphasizes that a strict 1PL/Rasch model can be an unrealistic exact data-generating model even for a unidimensional instrument.

A dangerous workflow is:

`fit strict model -> delete every misfitting item -> claim purified construct`.

This can remove valid heterogeneity in item discrimination or content.

Fit-driven deletion must be balanced against construct representation.

## 29. Two-parameter logistic model

Generic form:

`P(X=1 | theta) = logistic[a(theta - b)]`.

Parameters:

- `b`: item location/difficulty;
- `a`: discrimination/slope.

Higher discrimination means the item response changes more sharply around relevant theta levels.

It does not mean the item is substantively “better” in every sense.

## 30. Three-parameter logistic model

Generic form introduces a lower-asymptote/pseudo-guessing parameter `c`.

This can be useful in some multiple-choice testing settings.

But:

- `c` is not direct measurement of actual guessing behavior;
- 3PL parameters can be difficult to estimate;
- model complexity increases;
- psychological/self-report instruments often have no meaningful guessing interpretation.

## 31. More parameters are not automatically more truth

A 3PL can fit better than 2PL because it is more flexible.

A multidimensional model can fit better than a unidimensional model because it has more structure.

Model choice must consider:

- substantive plausibility;
- identification;
- parameter stability;
- predictive/replication performance;
- intended scoring;
- parsimony.

---

# IX. Polytomous item models

## 32. Ordered categories need category-response models

Common families include:

- graded response model (GRM);
- partial credit model (PCM);
- generalized partial credit model (GPCM);
- rating scale model (RSM).

They encode different response processes.

Do not choose by software default.

## 33. Thresholds are model parameters, not verbal category meanings

In ordinal IRT, thresholds locate transitions/probabilities between response categories.

A threshold is not automatically:

- a clinical boundary;
- a semantic midpoint;
- the exact psychological point at which a person changes category in real life.

It is a model parameter for the item-response process.

## 34. Disordered thresholds require interpretation

Disordered category thresholds can reflect:

- categories respondents cannot distinguish;
- sparse categories;
- scoring conventions;
- model mismatch;
- multidimensionality;
- sample limitations.

Collapsing categories may help, but should not be automatic.

The content meaning of categories must be preserved.

## 35. Same Likert labels do not imply same thresholds across items

“Never / sometimes / often / always” can function differently across items.

Response-category semantics are item- and context-dependent.

An ordinal model explicitly allows item-specific category structure unless the chosen model constrains it.

---

# X. Item parameters are conditional model quantities

## 36. Difficulty/location is not intrinsic item essence

An item location parameter is defined relative to:

- latent scale;
- model;
- calibration sample/design;
- response coding;
- linking constraints.

Parameter invariance is an empirical/model-based claim, not a guaranteed property of using IRT.

## 37. Discrimination is not content quality

High discrimination can arise because an item:

- aligns strongly with the modeled factor;
- is redundant with neighboring items;
- reflects a narrow subfacet;
- contains method effects;
- behaves differently in a calibration sample.

Thus:

`high a -> best item`

is invalid.

## 38. Item fit and item validity are different

An item can fit a model well and still:

- omit important content;
- be culturally inappropriate;
- use harmful wording;
- lack ecological meaning;
- measure a nuisance process.

An item can misfit because the model is too restrictive rather than because the item is bad.

---

# XI. Item information and test information

## 39. Information is local precision under a model

IRT information quantifies how informative a response is about theta at different points on the latent scale.

Under regular conditions:

`SE(theta) approximately 1 / sqrt(I(theta))`.

Thus precision can vary strongly across theta.

## 40. Information is not validity

An item can provide high statistical information about a latent variable that is poorly defined or incorrectly interpreted.

Therefore:

`high information -> valid psychological measurement`

is false.

## 41. Information functions expose score-region strengths and weaknesses

A test can be highly precise:

- near the population mean;

and weak:

- at extreme low levels;
- at extreme high levels.

Or the reverse.

This directly connects IRT to PSYCHOMETRICS-01's conditional-precision rule.

## 42. Test information is not simply “number of items”

Many weak/redundant items can contribute less useful information than fewer well-targeted items.

However, maximizing information alone can damage content coverage.

The optimal test depends on both:

- statistical precision;
- construct representation.

## 43. Adaptive testing uses information strategically

Computerized adaptive testing selects items based partly on current person-score uncertainty/information.

This can improve efficiency.

But CAT requires:

- calibrated item bank;
- valid item parameters;
- exposure/security control;
- content balancing;
- DIF/fairness monitoring;
- stopping rules;
- score comparability.

Adaptive efficiency does not bypass validity.

---

# XII. Person-score estimation

## 44. Theta is estimated, not observed

Given calibrated item parameters, person scores may be estimated using:

- maximum likelihood (MLE);
- maximum a posteriori (MAP);
- expected a posteriori (EAP);
- weighted likelihood estimation (WLE);
- other Bayesian or model-specific estimators.

Different estimators optimize different criteria.

## 45. MLE, MAP, and EAP are not interchangeable

### MLE

Uses likelihood from responses without a prior in standard form.

### MAP

Combines likelihood with a prior and selects posterior mode.

### EAP

Combines likelihood with a prior and uses posterior mean.

Consequences:

- Bayesian estimators can shrink estimates toward prior central values;
- estimator choice affects bias/variance;
- extreme response patterns can behave differently;
- person ordering can differ under some models.

## 46. Score estimator can affect rank ordering

Baldwin (2026) analyzes proficiency order invariance for MLE, MAP, EAP, and WLE.

Core implication:

**person ranking is not always determined solely by raw response evidence; it can depend on the scoring model and estimator.**

Therefore a theta ranking is a model-based inference.

## 47. Extreme response patterns require special caution

All-correct or all-incorrect patterns can create boundary/nonfinite problems for ordinary MLE in common IRT settings.

Bayesian or corrected estimators can yield finite scores, but the estimate then depends more explicitly on:

- prior;
- correction;
- model assumptions.

Do not report extreme theta values without corresponding uncertainty and estimation method.

## 48. A person score should include uncertainty

At minimum, person-level reporting should consider:

- theta estimate;
- conditional SE/posterior uncertainty;
- score-region information;
- model fit/person fit;
- calibration relevance.

A theta point estimate without uncertainty is incomplete evidence.

---

# XIII. Factor scores

## 49. Estimated factor scores are weighted composites, not recovered latent truths

Rhemtulla and Savalei (2025) distinguish:

- unobserved true factor values;
- estimated factor scores computed from observed indicators and estimated model parameters.

Even with extremely large samples, individual measurement error does not disappear.

Therefore:

`large N -> estimated factor score equals true latent score`

is false.

## 50. Different factor-score methods produce different individual estimates

Common approaches include:

- regression scores;
- Bartlett-type scores;
- plausible-value/Bayesian methods;
- model-specific posterior estimates.

They differ in properties such as:

- bias;
- determinacy;
- correlations;
- shrinkage;
- relation to observed variables.

The scoring method must be reported.

## 51. Factor-score determinacy is a person-score issue

A factor model can fit well at the covariance level while factor scores are poorly determined from available indicators.

Therefore evaluate:

- factor loadings;
- number/quality of indicators;
- factor-score reliability/determinacy;
- scoring method;
- intended person-level use.

## 52. Estimated factor scores inherit measurement error in downstream analyses

Using factor-score estimates as if error-free observed predictors/outcomes can distort:

- regression coefficients;
- correlations;
- group comparisons;
- classification.

When feasible, keeping variables latent inside a joint SEM can represent measurement error more explicitly.

But a larger SEM is not automatically preferable if it is poorly identified or misspecified.

## 53. Sum scores can sometimes be preferable to unstable weighted scores

Model-based weighting can improve prediction/precision when parameters are well estimated and the model is appropriate.

In small/noisy samples, estimated loadings/weights can themselves be unstable.

Therefore:

**weighted != automatically superior.**

Choice should be justified by out-of-sample stability, construct representation, and precision.

---

# XIV. Model fit

## 54. Fit is multidimensional

IRT fit can be assessed at several levels:

- global/model fit;
- item fit;
- person fit;
- residual/local dependence;
- dimensionality;
- category fit;
- subgroup fit.

Passing one level does not imply passing the others.

## 55. No single fit statistic is canonical

Sinharay and Monroe (2025) review multiple IRT fit procedures and their advantages/limitations.

Therefore avoid:

`one p-value / one infit value / one CFI -> model validated`.

Use converging diagnostics.

## 56. Large samples can make tiny misfit statistically detectable

Exact-fit tests can reject substantively adequate approximations in large samples.

Conversely, small samples can lack power to reveal important misspecification.

Statistical fit and practical fit must be distinguished.

## 57. Fixed global fit cutoffs are not universal laws

McNeish (2026) reviews how factor-model fit benchmarks became overgeneralized beyond their original conditions.

Operational rule:

- do not treat CFI/TLI/RMSEA/SRMR thresholds as model-independent truth;
- inspect residuals and misspecification type;
- compare plausible alternatives;
- consider sample size and estimator;
- prioritize substantive interpretation.

## 58. COSMIN criteria are context-bound

COSMIN Version 2.0 provides explicit structural-validity thresholds for its systematic-review workflow, including IRT/Rasch criteria.

But the manual itself notes that its review criteria are somewhat more lenient than what may be expected for individual studies.

Therefore:

`COSMIN + -> universally good model`

is invalid.

---

# XV. Person fit

## 59. Person fit asks whether an individual's response pattern is compatible with model expectations

A person can have a theta estimate while their pattern fits the model poorly.

Potential sources include:

- careless responding;
- misunderstanding;
- unusual strategy;
- rapid guessing;
- multidimensional profile;
- local context;
- item exposure;
- data error;
- genuine atypical response process.

## 60. Person misfit is not a diagnosis of motivation or deception

Incorrect:

`person misfit -> malingering/carelessness`.

Correct:

Person misfit is evidence that the response pattern is atypical under the fitted measurement model.

Cause requires separate evidence.

## 61. Individual score interpretation can be weakened by person misfit

Recent applied work emphasizes that person estimates may not be interpretable in the usual way when response patterns strongly violate model expectations.

Therefore person-level use should check person fit when stakes and model permit.

---

# XVI. Differential Item Functioning

## 62. DIF is conditional group difference in item functioning

Generic DIF question:

> Among respondents matched on the modeled latent construct, does the item behave differently across groups?

This separates DIF from raw group differences in item endorsement/performance.

## 63. Uniform and nonuniform DIF are different

### Uniform DIF

Group difference is roughly consistent across theta.

### Nonuniform DIF

Group difference varies across theta, often involving interaction with latent standing/discrimination.

The distinction matters for detection and interpretation.

## 64. DIF is not automatically item bias

DIF can reflect:

- translation;
- cultural meaning;
- different response processes;
- multidimensionality;
- genuine construct-relevant subgroup differences;
- anchor contamination;
- model misspecification.

Bias requires a substantive validity argument.

## 65. No detected DIF does not prove fairness

DIF procedures have:

- limited power;
- anchor dependence;
- model assumptions;
- multiplicity issues;
- sample-size sensitivity.

Fairness also involves:

- access;
- construct representation;
- predictive consequences;
- administration;
- opportunity to learn/respond.

## 66. Anchor selection is critical

Many DIF analyses require items assumed invariant to define a common scale.

If anchor items themselves contain DIF:

- matching can be distorted;
- other items can be falsely flagged or missed.

Anchor purification/selection methods can reduce but not eliminate this problem.

## 67. Statistical significance and practical DIF magnitude differ

Large samples can make tiny DIF statistically significant.

Small samples can miss meaningful DIF.

Report:

- effect size;
- item characteristic differences;
- score impact;
- direction;
- uncertainty.

## 68. Item-level DIF and test-level impact are different

Several items with DIF can:

- cancel;
- accumulate;
- affect only certain theta regions.

Differential test functioning or score-impact analysis may be needed before concluding that total scores are materially biased.

## 69. DIF can expose construct problems

If a supposedly invariant trait produces systematic item functioning differences, possible conclusions include:

- item-specific bias;
- construct non-equivalence;
- omitted dimension;
- different response process;
- inappropriate grouping variable;
- calibration failure.

The correct response is investigation, not automatic deletion.

---

# XVII. Item selection and test construction

## 70. Test construction begins with construct and item universe

Altgassen and Wilhelm (2026) emphasize item selection as a central validity problem.

Before selecting “best” items:

1. define the construct;
2. define boundaries against neighboring constructs;
3. define item universe/content map;
4. generate broad candidate coverage.

Statistical optimization comes later.

## 71. A narrow high-performing item pool can be invalid

Selecting items solely for:

- high alpha;
- high loading;
- high discrimination;
- model fit;
- prediction accuracy

can overrepresent one narrow facet.

This creates:

- construct underrepresentation;
- redundancy;
- jingle/jangle problems;
- loss of criterion breadth.

## 72. Item deletion changes the construct operationalization

Every deleted item changes what the scale samples.

Therefore after item reduction, reassess:

- content map;
- construct coverage;
- response process;
- factor structure;
- reliability;
- criterion relations;
- fairness.

Do not pretend the construct stayed identical merely because the scale name stayed the same.

## 73. Reverse-worded items are not automatically quality control

Reverse wording can:

- reduce acquiescence in some contexts;
- create confusion;
- introduce method factors;
- reduce readability;
- create local dependence.

Their use requires empirical and substantive justification.

## 74. Target-population input matters before final modeling

Current scale-development guidance emphasizes:

- literature/theory;
- expert review;
- target-population comprehension;
- clarity;
- relevance;
- cognitive interviewing/piloting where appropriate.

Statistical item selection cannot recover content never sampled in the item pool.

## 75. Development and validation samples should be separated where feasible

If the same data are used repeatedly to:

- explore factors;
- delete items;
- modify loadings;
- choose model;
- test final fit;

reported performance is optimistic.

Use:

- independent validation;
- sample splitting;
- cross-validation;
- preregistered confirmatory testing;

as appropriate.

## 76. Parallel analysis is preferable to eigenvalue > 1 alone for exploratory retention

Modern scale-development guidance commonly recommends multiple sources when choosing factor number:

- theory;
- parallel analysis;
- scree information;
- interpretability;
- replication.

No single heuristic should dictate dimensionality.

## 77. Item statistics should support—not replace—content judgment

Useful item-level evidence includes:

- endorsement/difficulty;
- discrimination;
- factor loading;
- item-total relation;
- information;
- residual dependence;
- DIF;
- category functioning.

But item retention remains a validity decision.

---

# XVIII. Sample size and estimation

## 78. There is no universal IRT sample-size threshold

Required sample size depends on:

- model complexity;
- number of items;
- number of categories;
- item parameter distribution;
- theta distribution;
- DIF groups;
- estimator;
- priors;
- missingness;
- desired precision.

Rules such as “N = 500 is enough for IRT” are not generally defensible.

## 79. Complex models require stronger identifiability and information

Adding:

- dimensions;
- random effects;
- guessing parameters;
- group-specific DIF;
- testlets;
- mixture classes

increases parameter burden and identifiability risk.

A model can converge numerically while some parameters remain poorly identified.

## 80. Convergence is not validation

Software convergence means an optimization/estimation algorithm reached a solution under numerical criteria.

It does not establish:

- correct model;
- identifiable substantive interpretation;
- stable parameters;
- good fit;
- valid scores.

Always inspect parameter estimates, uncertainty, diagnostics, and alternative models.

---

# XIX. Multidimensional IRT and bifactor models

## 81. Multidimensional models can represent several latent variables

MIRT allows item responses to depend on multiple theta dimensions.

This can model:

- correlated abilities;
- subdomains;
- general + specific factors;
- compensatory/noncompensatory structures.

## 82. More dimensions can improve fit while reduce interpretability

A multidimensional model can absorb residual covariance.

But a better fit does not prove that each dimension corresponds to a psychologically real, stable trait.

Dimensions require:

- theoretical meaning;
- adequate indicators;
- replicability;
- score determinacy;
- external validation.

## 83. Bifactor scoring requires evidence that specific scores are usable

A bifactor model can produce:

- general score;
- specific factors.

But specific-factor scores can have weak reliable unique variance after controlling the general factor.

Do not report every modeled factor as an interpretable individual score.

---

# XX. Parameter invariance and transport

## 84. IRT parameter invariance is conditional

A central attraction of IRT is item/person parameter separation.

But empirical invariance can fail because of:

- DIF;
- different latent distributions;
- calibration drift;
- mode changes;
- learning/exposure;
- translation;
- population-specific response processes;
- model misspecification.

Therefore:

`IRT parameter -> universal item property`

is invalid.

## 85. Calibration population matters

Item parameters estimated in one sample may transport poorly to another.

Check:

- target population;
- language;
- age;
- clinical status where relevant;
- mode;
- testing stakes;
- item exposure.

Recalibration or linking may be required.

## 86. Longitudinal item drift can mimic person change

If item functioning changes over time, theta change can reflect:

- real person change;
- item drift;
- recalibration differences;
- response-process change.

Longitudinal latent scoring requires invariance/drift checks.

---

# XXI. Missingness, omitted items, and speed

## 87. Missing responses are not automatically ignorable

Omissions can reflect:

- random missingness;
- low ability;
- disengagement;
- time pressure;
- refusal;
- content sensitivity;
- adaptive-routing design.

Treating all missing responses identically can distort theta estimates.

## 88. Speed can be a separate latent process

Timed tests may mix:

- target ability;
- speed;
- time management;
- rapid guessing.

If speed materially affects responses, a simple ability-only IRT model can be misspecified.

Do not interpret theta as pure ability without checking speededness.

---

# XXII. Reporting requirements for model-based psychological scores

## 89. Minimum reporting for factor/IRT-based score interpretation

Record:

1. construct;
2. item pool/content map;
3. item response format;
4. model family;
5. dimensionality;
6. estimator;
7. identification/scaling constraints;
8. sample/calibration population;
9. item parameters;
10. global fit;
11. item fit;
12. local-dependence diagnostics;
13. person-score estimator;
14. score uncertainty/information;
15. factor-score determinacy where relevant;
16. DIF/invariance checks;
17. anchor/linking procedure if applicable;
18. validation sample/replication;
19. software/version;
20. intended use.

Without these details, strong person-level interpretation should be weakened.

## 90. Software output is not the evidence argument

A software package can return:

- theta;
- standard error;
- factor score;
- item information;
- fit index;
- DIF flag.

The analyst must still justify:

- construct;
- model;
- assumptions;
- interpretation;
- transport;
- use.

---

# XXIII. Cross-domain application rules

## 91. Cognitive and executive tasks

If an item/task bank uses IRT:

- cognitive process definition -> COG/EXE;
- item-response model -> PSYCHOMETRICS;
- stable individual capacity -> requires person-level reliability/transport beyond model fit.

## 92. Personality questionnaires

A latent trait estimate:

- is not the trait itself;
- depends on item content and factor/IRT model;
- requires invariance/DIF for group comparisons;
- requires factor-score/person-score uncertainty for individual interpretation.

## 93. Emotion, motivation, stress, and social scales

High-discrimination items can overrepresent narrow high-covariance content.

Content breadth remains a substantive domain question.

Do not allow psychometric optimization to redefine the construct silently.

## 94. Developmental measurement

Age groups may exhibit:

- threshold changes;
- DIF;
- item drift;
- different dimensionality.

A common theta scale across age requires linking/invariance evidence.

## 95. Clinical screening

IRT can improve score precision and item selection.

But:

- theta != diagnosis;
- DIF != disorder mechanism;
- person fit != malingering;
- cut scores still require clinical validation and base-rate reasoning.

## 96. Neuroscience/biomarkers

Latent scores derived from neural or multimodal indicators remain model-based scores.

Factor-model fit does not convert neural proxies into psychological ground truth.

---

# XXIV. 84-question Latent Measurement / IRT Inference Gate

## A. Construct and model choice

1. What exact construct is being modeled?
2. Is the item universe adequately defined?
3. Why is a latent-variable model appropriate?
4. Why is IRT/factor modeling preferable to a simpler score for this use?
5. Is the model reflective, composite, or another measurement structure?
6. Does model choice follow theory or software convenience?
7. Is a more complex model being treated as inherently better?

## B. Data and response format

8. Are items dichotomous, nominal, ordinal, continuous, or mixed?
9. Are ordinal items being treated as continuous without justification?
10. Are sparse categories present?
11. Are category thresholds interpretable?
12. Are floor/ceiling effects material?

## C. Identification and scaling

13. How is the latent scale identified?
14. What fixes its origin?
15. What fixes its unit?
16. What fixes its direction/sign?
17. Is a reference group used?
18. Are separately calibrated scores linked?
19. Can the reported theta values be compared across calibrations?

## D. Dimensionality

20. What dimensionality is assumed?
21. What substantive theory supports it?
22. What exploratory evidence supports it?
23. Was factor-number selection based on more than eigenvalue > 1?
24. Is essential rather than exact unidimensionality sufficient for the intended use?
25. Could method factors explain apparent dimensions?
26. Does multidimensional fit improvement justify interpretable subscale scores?

## E. Local independence and monotonicity

27. Was local dependence examined?
28. What diagnostics were used?
29. Could shared stimuli/testlets create dependence?
30. Could repeated wording or reverse wording create dependence?
31. Could omitted dimensions create dependence?
32. Does dependence inflate information or discrimination?
33. Was monotonicity examined where required?
34. Are violations substantively explained?

## F. Model family

35. Why 1PL/Rasch, 2PL, 3PL, GRM, PCM, GPCM, RSM, or MIRT?
36. Are discrimination constraints defensible?
37. Is a guessing/lower-asymptote parameter substantively plausible?
38. Are polytomous category functions appropriate?
39. Is Rasch being used as a measurement requirement or merely a fitted 1PL model?
40. Is parameter complexity justified by information/sample size?

## G. Item parameters and information

41. What does item location mean on this scale?
42. What does discrimination mean here?
43. Is high discrimination being mistaken for content quality?
44. Are item information curves examined?
45. Is test information adequate where decisions occur?
46. Is high information being mistaken for validity?
47. Are extreme theta regions poorly measured?

## H. Model fit

48. Was global fit assessed?
49. Was item fit assessed?
50. Were residual/local-dependence diagnostics assessed?
51. Was person fit assessed where relevant?
52. Are fixed fit cutoffs being used mechanically?
53. Is sample size influencing fit-test interpretation?
54. Were alternative plausible models compared?
55. Did item deletion simply chase better fit?

## I. Person scores / factor scores

56. What person-score estimator is used?
57. MLE, MAP, EAP, WLE, regression factor score, or other?
58. Does prior/shrinkage affect the estimate?
59. Could estimator choice alter rank ordering?
60. What is the conditional SE/posterior uncertainty?
61. Are extreme response patterns handled transparently?
62. Is an estimated factor score being called a true factor score?
63. Is factor-score determinacy adequate?
64. Is measurement error represented in downstream analyses?

## J. DIF and fairness

65. What groups are compared?
66. What matching/conditioning variable defines equal latent standing?
67. What anchor items are used?
68. Could anchors contain DIF?
69. Is uniform versus nonuniform DIF distinguished?
70. Are statistical and practical DIF separated?
71. Is DIF being equated automatically with bias?
72. Is item-level DIF translated into test-level impact?
73. Are multiplicity and power considered?

## K. Test construction

74. Was construct content defined before item optimization?
75. Was the initial item pool broad enough?
76. Were target-population response processes examined?
77. Were items deleted primarily to increase alpha/loading/fit?
78. Did deletion narrow content coverage?
79. Was exploratory development separated from confirmation?
80. Is there independent replication/validation?

## L. Final interpretation

81. What exact score is reported?
82. Which model assumptions are required for that score?
83. What is the strongest defensible person-level interpretation?
84. What claim would exceed the measurement evidence?

---

# XXV. High-value failure modes

## Failure A — IRT = objective truth

Incorrect:

`IRT score -> true latent trait`.

Correct:

IRT score is an estimate under a specified latent-response model.

## Failure B — Rasch = automatic objectivity

Incorrect.

Correct:

Rasch invariance claims depend on model fit, calibration, linking, and absence/handling of DIF.

## Failure C — more parameters = better measurement

Incorrect.

Correct:

More flexible models can overfit or lose interpretability.

## Failure D — factor fit = construct validity

Incorrect.

Correct:

Fit is evidence about response covariance under a model, not full validity.

## Failure E — CFI/RMSEA cutoff = scientific verdict

Incorrect.

Correct:

Fit thresholds are context-sensitive diagnostics.

## Failure F — unidimensional = one psychological mechanism

Incorrect.

Correct:

Statistical unidimensionality concerns response structure.

## Failure G — local dependence is harmless

Incorrect.

Correct:

It can inflate information, discrimination, and apparent precision.

## Failure H — high item discrimination = best item

Incorrect.

Correct:

An item can be statistically discriminating yet narrow, redundant, or invalid.

## Failure I — item information = item validity

Incorrect.

Correct:

Information is conditional precision under the model.

## Failure J — theta unit is natural

Incorrect.

Correct:

Latent scale requires identification and calibration conventions.

## Failure K — separate calibrations are directly comparable

Incorrect.

Correct:

Linking/common scale evidence is required.

## Failure L — estimated factor score = true factor score

Incorrect.

Correct:

Estimated factor scores are composites/predictions with measurement error.

## Failure M — large N removes factor-score error

Incorrect.

Correct:

Sampling error in weights may shrink; individual measurement error remains.

## Failure N — MLE/MAP/EAP are interchangeable

Incorrect.

Correct:

Estimator/prior can affect bias, shrinkage, extremes, and sometimes rank order.

## Failure O — person misfit = deception

Incorrect.

Correct:

Person misfit only shows atypicality under the model until a cause is established.

## Failure P — DIF = biased item

Incorrect.

Correct:

DIF requires substantive interpretation.

## Failure Q — no DIF = fair test

Incorrect.

Correct:

Power, anchors, construct representation, access, and predictive fairness remain.

## Failure R — delete all misfit items

Incorrect.

Correct:

Misfit may reveal model inadequacy; deletion can destroy content validity.

## Failure S — maximize alpha/loading/discrimination

Incorrect.

Correct:

Statistical optimization must preserve construct coverage.

## Failure T — software convergence = identified valid model

Incorrect.

Correct:

Convergence is numerical, not substantive validation.

## Failure U — ordinal Likert = continuous by default

Incorrect.

Correct:

Treatment of ordinal responses requires justification.

## Failure V — parameter invariance comes free with IRT

Incorrect.

Correct:

Empirical invariance is conditional on model, population, calibration, and DIF.

## Failure W — CAT efficiency = validity

Incorrect.

Correct:

Adaptive testing still requires content, calibration, fairness, security, and scoring validity.

---

# XXVI. Evidence-strength map

## High-confidence working rules

1. CTT, factor analysis, IRT, and Rasch are model frameworks, not hierarchies of truth.
2. Latent variables require identification/scaling conventions.
3. Theta/factor scores are estimates, not direct observations.
4. Unidimensionality is a response-structure claim, not psychological ontology.
5. Local independence is a core IRT assumption and violations can distort precision.
6. Item information is conditional precision, not validity.
7. Item discrimination is not synonymous with item quality.
8. Model fit requires multiple diagnostics.
9. Fixed fit cutoffs should not be treated as universal laws.
10. Person-score estimator matters.
11. Factor-score estimates retain measurement error even with large samples.
12. DIF is conditional item-functioning difference, not automatically bias.
13. Anchor choice can affect DIF conclusions.
14. Item deletion changes construct operationalization.
15. Calibration/linking are required for meaningful latent-score comparison across forms/scales.
16. Parameter invariance is conditional rather than guaranteed.
17. Model convergence is not substantive validation.
18. Person-level scores require uncertainty and model-fit context.

## Supported but context-sensitive

1. IRT may improve conditional precision versus simple sums when the model is appropriate.
2. Bayesian person scoring can stabilize extreme estimates but introduces prior/shrinkage dependence.
3. Rasch restrictions can be useful as measurement requirements but can be too strict for some real instruments.
4. Essential unidimensionality may be adequate for some scoring purposes.
5. Testlet/bifactor/MIRT models can repair meaningful local dependence when justified.
6. Weighted/model-based scores can outperform sums when model parameters are stable and valid.
7. Adaptive testing can improve efficiency when item-bank assumptions hold.

## Not universal

1. IRT is always superior to CTT.
2. Rasch is always superior to 2PL/3PL.
3. one fit-index cutoff validates a model.
4. one Q3/residual threshold defines local independence universally.
5. one sample-size rule works for all IRT models.
6. one factor-score estimator is universally optimal.
7. one DIF procedure is a fairness gold standard.
8. one “best” item set exists independent of intended construct/use.
9. a latent factor is automatically a causal psychological entity.

---

# XXVII. Closure audit — 18/18

## Criterion 1 — CTT and model-based measurement are distinguished

**PASS.**

The frameworks are separated without an automatic sophistication hierarchy.

## Criterion 2 — IRT is defined as a latent response model

**PASS.**

Person/item parameters and response probabilities are explicit.

## Criterion 3 — latent scaling/identification is operationalized

**PASS.**

Origin, unit, sign, reference group, and linking constraints are explicit.

## Criterion 4 — factor analysis and ordinal IRT relation is represented

**PASS.**

Conceptual equivalence and estimation differences are distinguished using current 2026 evidence.

## Criterion 5 — unidimensionality is prevented from becoming ontology

**PASS.**

Statistical response structure and psychological mechanism are separate.

## Criterion 6 — local independence/dependence is deeply represented

**PASS.**

Sources, diagnostics, consequences, and modeling options are included.

## Criterion 7 — model families are claim-matched

**PASS.**

Rasch/1PL/2PL/3PL and major polytomous families are separated.

## Criterion 8 — Rasch invariance claims are bounded

**PASS.**

Specific objectivity is treated as conditional on model/calibration rather than automatic.

## Criterion 9 — item parameters and information are correctly bounded

**PASS.**

Difficulty, discrimination, thresholds, and information are model quantities rather than psychological primitives.

## Criterion 10 — person-score estimation is represented

**PASS.**

MLE/MAP/EAP/WLE, shrinkage, extremes, uncertainty, and estimator dependence are explicit.

## Criterion 11 — factor scores are correctly bounded

**PASS.**

Estimated factor scores are explicitly separated from unobserved true factors using 2025 evidence.

## Criterion 12 — model fit is multi-level and nonritualized

**PASS.**

Global/item/person/residual diagnostics are distinguished and fixed cutoffs are not treated as universal.

## Criterion 13 — DIF is correctly separated from bias

**PASS.**

Uniform/nonuniform DIF, anchors, magnitude, test-level impact, and substantive interpretation are explicit.

## Criterion 14 — test construction preserves content validity

**PASS.**

Item-universe definition, broad pools, target-population input, statistical selection, and independent validation are integrated.

## Criterion 15 — item deletion is prevented from silently redefining constructs

**PASS.**

Post-hoc fit optimization is explicitly constrained.

## Criterion 16 — parameter transport/linking is represented

**PASS.**

Calibration population, linking, drift, and longitudinal invariance are explicit.

## Criterion 17 — individual interpretation is model-aware

**PASS.**

Person scores require estimate + uncertainty + fit + calibration context.

## Criterion 18 — privacy and qualification purpose are preserved

**PASS.**

No individualized data are stored; the block develops general psychometric competence.

---

# XXVIII. Decision

**PSYCHOMETRICS-02 is CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS.**

The previously deferred model-based/item-level gap is now closed for current scope.

PSYCHOMETRICS-01 and PSYCHOMETRICS-02 together cover:

- applied score interpretation;
- individual precision;
- norms/cutoffs/change;
- structural validity;
- CTT versus latent-variable scoring;
- ordinal factor analysis;
- IRT/Rasch model families;
- local independence/dependence;
- item/test information;
- person-score estimation;
- factor-score limits;
- model fit;
- person fit;
- DIF;
- model-aware test construction;
- calibration/linking/transport.

A final contradiction and sufficiency audit is still scientifically necessary before declaring the entire PSYCHOMETRICS domain complete, because the two blocks intentionally approach the same problem from different levels:

- PSYCHOMETRICS-01: applied score/use level;
- PSYCHOMETRICS-02: item/model level.

Next dependency:

**PSYCHOMETRICS-03 — Psychometrics integration and sufficiency audit: score-use × model-level consistency, individual interpretation, fairness, change, and closure decision.**

The purpose of PSYCHOMETRICS-03 is not new taxonomy. It is to test the two existing blocks for contradictions, missing bridges, and overclaim routes before Phase B can be closed.

---

# Canonical working rule

**A latent score is an estimate produced by a measurement model, not an observation of a psychological essence.**

Use:

`construct -> item universe -> response process -> model family -> assumptions -> dimensionality/local dependence -> item fit/information -> person-score estimator -> uncertainty/person fit -> DIF/invariance -> calibration/linking -> validity for use -> narrow conclusion`.

Never:

`IRT -> objective trait`

`Rasch -> guaranteed invariant measurement`

`good fit -> valid construct`

`high discrimination -> best item`

`factor score -> true factor`

`DIF -> bias`

`delete misfit -> purified construct`.

---

# Sources

1. American Educational Research Association, American Psychological Association, & National Council on Measurement in Education. (2014). *Standards for Educational and Psychological Testing*. Current open-access edition as of 2026-11-19. https://www.testingstandards.net/
2. Mokkink, L. B., Elsman, E. B. M., & Terwee, C. B. (2024). *COSMIN Manual for Systematic Reviews of PROMs*, Version 2.0. https://www.cosmin.nl/
3. Chen, Y., Li, X., Liu, J., & Ying, Z. (2025). Item Response Theory—A Statistical Framework for Educational and Psychological Measurement. *Statistical Science, 40*(2), 167–194. https://doi.org/10.1214/23-STS896
4. Sinharay, S., & Monroe, S. (2025). Assessment of fit of item response theory models: A critical review of the status quo and some future directions. *British Journal of Mathematical and Statistical Psychology, 78*(3), 711–733. https://doi.org/10.1111/bmsp.12378
5. Itamiya, T. (2025). A review of methods for analyzing test data with local dependence structures: An item response theory perspective. *Japanese Journal for Research on Testing, 21*(1), 125–152. https://doi.org/10.24690/jart.21.1_125
6. Rhemtulla, M., & Savalei, V. (2025). Estimated Factor Scores Are Not True Factor Scores. *Multivariate Behavioral Research, 60*(3), 598–619. https://doi.org/10.1080/00273171.2024.2444943
7. Cho, E. (2026). Estimating ordinal factor analysis and item response theory models: A comparison of full- and limited-information techniques. *Psychological Methods, 31*(2), 327–345. https://doi.org/10.1037/met0000802
8. Merkle, E. C., Winter, S. D., & Fitzsimmons, E. (2026). Identification and Scaling of Latent Variables in Ordinal Factor Analysis. *Psychometrika, 91*(2), 508–535. https://doi.org/10.1017/psy.2026.10084
9. Baldwin, P. (2026). Proficiency order invariance of MLE, MAP, EAP, and WLE in item response theory. *British Journal of Mathematical and Statistical Psychology*. https://doi.org/10.1111/bmsp.70059
10. McNeish, D. (2026). How Do Psychologists Determine Whether a Measurement Scale Is Good? A Quarter-Century of Scale Validation with Hu & Bentler (1999). *Annual Review of Psychology, 77*, 567–591. https://doi.org/10.1146/annurev-psych-121924-104021
11. Thissen, D. (2025). A Review of Some of the History of Factorial Invariance and Differential Item Functioning. *Multivariate Behavioral Research, 60*(2), 211–235. https://doi.org/10.1080/00273171.2024.2396148
12. Moore, C. M., & Dorn, M. A. (2026; online 2025). A Step-by-Step Guide for Assessing DIF Using the Rasch Model. *Measurement and Evaluation in Counseling and Development*. https://doi.org/10.1080/07481756.2025.2601578
13. Tutz, G. (2024). Invariance of comparisons: Separation of item and person parameters beyond Rasch models. *Journal of Mathematical Psychology, 122*, 102876. https://doi.org/10.1016/j.jmp.2024.102876
14. Raykov, T., & Zhang, B. (2026; online 2025). The One-Parameter Logistic Model Can Be True With Zero Probability for a Unidimensional Measuring Instrument: How One Could Go Wrong Removing Items Not Satisfying the Model. *Educational and Psychological Measurement, 86*(4), 769–791. https://doi.org/10.1177/00131644251345120
15. Altgassen, E., & Wilhelm, O. (2026). Item Selection as the Cause and Solution to Validity Problems in Psychology. *Current Directions in Psychological Science*. https://doi.org/10.1177/09637214261453302
16. Stefana, A., Damiani, S., Granziol, U., Provenzani, U., Solmi, M., Youngstrom, E. A., & Fusar-Poli, P. (2025). Psychological, psychiatric, and behavioral sciences measurement scales: best practice guidelines for their development and validation. *Frontiers in Psychology, 15*, 1494261. https://doi.org/10.3389/fpsyg.2024.1494261
17. International Test Commission & Association of Test Publishers. (2025). *Guidelines for Technology-Based Assessment*, Version 1.1. https://www.intestcom.org/page/16

## Source-boundary note

The AERA/APA/NCME Standards remain the broad validity/score-use anchor.

COSMIN is used only where its structural-validity taxonomy is transferable; its numerical PROM review criteria are not universalized to all psychological tests.

Recent 2025–2026 papers are used to update model-fit, local-dependence, factor-score, scaling, scoring-estimator, and item-selection reasoning.

No single IRT, Rasch, CFA, DIF, or fit-statistic tradition is treated as a universal psychometric gold standard.
