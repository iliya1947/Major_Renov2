# PER-02 — Personality hierarchy and criterion validity: domains, facets, nuances, bandwidth–fidelity, incremental validity, jingle/jangle, and multi-method assessment

Status: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**
Evidence cutoff: **2026-11-19**
Scope: public personality-science evidence and generic inference methodology only; no individualized psychological material.

## Purpose

PER-01 established that personality traits are probabilistic tendencies expressed through states and situations, and that broad trait taxonomies are descriptive rather than mechanistic.

PER-02 addresses the next dependency:

**At what level of the personality hierarchy should a construct be measured for a given criterion, when do facets or nuances add valid information beyond domains, how should incremental validity be tested, and how should self-, observer-, behavioral-, digital-, and other methods be combined without confusing shared trait variance with method variance?**

High-risk errors to prevent:
- "broader trait is always more valid";
- "narrower trait is always more predictive";
- "facet beats domain in-sample, therefore it generalizes";
- "more predictors = more personality information";
- "item-level prediction = causal mechanism";
- "single item = mere measurement error";
- "single item = automatically a valid nuance";
- "incremental R² = unique psychological construct";
- "statistical significance = practically useful increment";
- "incremental validity without cross-validation = generalizable";
- "same trait label = same construct";
- "different trait labels = different constructs";
- "same correlation pattern = construct identity";
- "one questionnaire defines the trait";
- "self-report and observer report are interchangeable";
- "multi-method agreement = ground truth";
- "method disagreement = one source is wrong";
- "digital trace prediction = personality measurement";
- "algorithmic prediction = latent trait decoded";
- "criterion validity = causal validity";
- "a predictor that forecasts an outcome explains why the outcome occurs".

## Core rule

**Personality is hierarchical, and validity is criterion- and method-specific. Broad domains maximize coverage and parsimony; facets and nuances can add criterion-specific information, but the added value must survive reliability correction, redundancy checks, out-of-sample validation, and comparison against simpler models. Multi-method convergence strengthens inference only when the methods genuinely sample complementary information rather than merely multiplying correlated measurement error.**

Canonical reasoning:

\`define construct and criterion -> choose hierarchy level -> match predictor bandwidth to criterion bandwidth -> establish reliability/content coverage -> test domain/facet/nuance redundancy -> estimate out-of-sample incremental validity -> inspect jingle/jangle risk -> triangulate methods -> preserve prediction/causation distinction -> state only the narrowest supported trait–criterion inference\`.

## 1. Personality hierarchy

A practical hierarchy is:

\`broad domain -> aspect/intermediate level -> facet -> nuance/item-level characteristic\`.

Examples:
- domain: Conscientiousness;
- facet: Organization;
- nuance: a specific recurring characteristic such as being orderly in particular ways.

Not every instrument contains all levels.
Not every item is automatically a clean nuance.

Hierarchy levels differ in:
- breadth;
- reliability;
- interpretability;
- criterion specificity;
- redundancy.

## 2. Broad domains

Broad domains summarize covariation among many narrower characteristics.

Advantages:
- compactness;
- usually higher reliability;
- broad content coverage;
- useful general descriptions;
- reduced multiple-testing burden.

Costs:
- heterogeneous content;
- possible cancellation of opposite facet–criterion associations;
- weaker specificity for narrow criteria.

Broadness is not a defect when the criterion is itself broad.

## 3. Intermediate aspects

Some models include an intermediate level between domains and facets.

Examples include:
- Big Five aspects;
- other subdomain organizations.

Intermediate levels can:
- retain breadth;
- increase specificity;
- improve interpretability.

But aspect structures depend on:
- item pool;
- factor model;
- inventory.

Do not assume one aspect taxonomy is universal.

## 4. Facets

Facets are narrower, recurring trait dimensions nested within or related to broad domains.

They can improve:
- descriptive precision;
- criterion matching;
- mechanism hypothesis generation.

They can also:
- reduce reliability if measured briefly;
- overlap heavily with neighboring facets;
- inflate predictor count.

A facet is useful only if its content is coherent and discriminable.

## 5. 2024 facet taxonomy

A major 2024 taxonomy project:
- began with 1,772 items from major inventories;
- identified 61 base facets;
- added 16 candidate facets from literature review;
- developed and refined an open inventory ending with 70 facet scales.

The work demonstrates extensive recurring structure below broad domains.

It does not prove:
- exactly 70 facets are the final ontology;
- every prior facet label maps one-to-one onto these scales.

## 6. Nuances

Nuances refer to highly specific, trait-like personality characteristics below facets.

They are often operationalized by:
- individual items;
- very small item clusters.

Evidence supporting nuance status can include:
- cross-rater agreement;
- rank-order stability;
- heritability;
- criterion associations;
- replication.

Thus:
**item-level variance can contain valid trait information**.

## 7. Item ≠ nuance by definition

An item can also contain:
- wording artifact;
- transient state variance;
- social desirability;
- acquiescence;
- specific context;
- random error.

A nuance interpretation needs evidence that the item's unique variance behaves trait-like.

Do not elevate every questionnaire item into a psychological construct.

## 8. 2025 nuance review

A 2025 Current Opinion review concludes that nuances now have substantial evidence as distinct personality characteristics and can:
- improve prediction;
- improve explanatory resolution;
- support efficient assessment.

This supports extending trait reasoning below facets.

It does not establish that every criterion should be predicted at the nuance level.

## 9. 2021 cross-validated life-outcome evidence

A large study:
- N = 6,126;
- 53 self-reported life outcomes;
- training and validation partitions.

Average explained variance:
- domains: 16.6%;
- facets: 18.0%;
- items/nuances: 20.9%.

Residualizing items for broader domain/facet variance did not remove their predictive value.

This supports unique narrow-trait criterion information.

## 10. 2024 Swedish cross-validated study

A study using:
- IPIP-NEO-120;
- N = 440;
- six life outcomes;
- Elastic Net;
- train/validation split plus 10-fold cross-validation

reported average explained variance:
- domains/factors: ~12%;
- facets: ~22.5%;
- item/nuance models: ~34%.

The result supports potential gains from finer-grained models.

But:
- sample was modest;
- outcomes were limited;
- item-level models have many predictors.

External replication remains important.

## 11. More predictors create more opportunity to overfit

A domain model may use five predictors.
A facet model may use dozens.
An item model may use hundreds.

Training-set fit will often improve merely because model flexibility increases.

Therefore compare levels using:
- held-out validation;
- nested cross-validation;
- shrinkage/regularization;
- preregistered models where possible.

**In-sample R² is not evidence of generalizable incremental validity.**

## 12. Incremental validity

Incremental validity asks:

**Does predictor set B improve prediction beyond predictor set A for the specified criterion?**

Examples:
- facets beyond domains;
- nuances beyond facets;
- observer reports beyond self-reports;
- digital features beyond questionnaires.

Increment depends on:
- baseline model;
- criterion;
- reliability;
- sample;
- estimator.

It is not an intrinsic property of the predictor.

## 13. Statistical increment versus practical increment

A statistically significant increase in:
- R²;
- AUC;
- likelihood;
- correlation

may be practically trivial.

Interpret:
- absolute gain;
- uncertainty;
- cost;
- complexity;
- calibration;
- decision consequences.

A 0.5% increase can be valuable in one large-scale application and useless in another.

## 14. Incremental validity is model-relative

"Facet X adds validity" means:
**adds beyond a specified baseline model**.

A facet may add beyond:
- one Big Five inventory;
but not:
- another inventory with better content coverage.

Baseline content must be inspected.

## 15. Incremental validity is criterion-relative

A nuance may strongly add prediction for:
- a narrow outcome;
but little for:
- broad well-being;
- mortality;
- general performance.

Thus:
**incremental validity cannot be generalized from one criterion family to all outcomes**.

## 16. 2025 mortality example: narrow association without large increment

A coordinated analysis of four longitudinal samples:
- total N > 22,000;
- mortality follow-up 6–28 years.

Specific items such as:
- active;
- organized;
- responsible;
- hardworking;
- thorough

showed replicable mortality associations.

Yet nuances offered little incremental predictive power beyond their corresponding domains.

This is a critical counterexample to:
**narrower always predicts better**.

## 17. Criterion breadth

Criteria differ in breadth.

Broad criteria:
- overall life success;
- broad well-being;
- general job performance.

Narrow criteria:
- specific work behavior;
- one health behavior;
- one interpersonal pattern.

Predictor–criterion matching often matters.

## 18. Bandwidth–fidelity tradeoff

The classic bandwidth–fidelity idea captures a tension:

- **bandwidth:** broad predictor covers many behaviors;
- **fidelity:** narrow predictor targets a specific behavioral tendency.

Broad predictor can be better for broad criteria.
Narrow predictor can be better for narrow criteria.

But this is not a fixed law.

Empirical validation remains necessary.

## 19. Criterion contamination and deficiency

A criterion can be:
- too broad;
- poorly measured;
- contaminated with irrelevant content;
- missing relevant content.

A narrow trait may appear weak because criterion is noisy.
A broad trait may appear strong because predictor and criterion share vague content.

Criterion validity depends on criterion quality too.

## 20. Criterion reliability bounds observed validity

If criterion reliability is low:
- observed prediction is attenuated;
- rank ordering of predictors can become unstable.

Correction for attenuation can aid theory.

But corrected correlations are not observed decision accuracy.

Report both appropriately.

## 21. Predictor reliability also matters

Narrow scales may have fewer items and lower reliability.

A facet can contain more criterion-relevant content but still produce weaker observed validity because of measurement error.

Comparing raw correlations without reliability context can mislead.

## 22. High reliability can reduce breadth

Very homogeneous item sets can increase internal consistency while narrowing construct coverage.

Thus:
**higher alpha/omega ≠ better construct representation**.

Personality scale quality needs:
- content coverage;
- structural validity;
- criterion validity;
- reliability.

## 23. Broad versus narrow prediction is not only a reliability problem

Facets/nuances can add information because:
- broad domains average heterogeneous content;
- only some components relate to the criterion;
- components can relate in opposite directions;
- unique item/facet variance can be stable.

Therefore finer prediction cannot be dismissed as mere unreliability of domains.

## 24. Well-being evidence

A large meta-analysis:
- N = 334,567;
- k = 462 for domain-level synthesis;
- multiple long-form personality datasets for facet analysis.

Facet-level prediction of well-being was typically around 20% better than domain-level prediction.

The size of increment varied across specific well-being dimensions.

This supports criterion-specific facet use.

## 25. Life success is multidimensional

A 2025 Psychological Bulletin synthesis:
- 111 meta-analyses;
- 206 variables;
- N > 2.25 million;
- >3,300 studies

mapped Big Five relations across 14 categories of life success.

Personality configurations/profile patterns contributed meaningfully alongside broad elevation.

This reinforces:
**outcome definition and multivariate trait configuration matter**.

It does not establish fixed "success personality types."

## 26. Profile prediction differs from single-trait prediction

A profile model can use:
- several domains;
- relative configuration;
- interactions.

It answers:
**which pattern predicts the criterion?**

A single-trait model answers:
**what is the marginal relation of this trait?**

Do not treat profile effects as evidence for natural personality types.

## 27. Incremental validity and multicollinearity

Facets within a domain can correlate strongly.

Consequences:
- unstable regression coefficients;
- suppression effects;
- sign reversals;
- inflated standard errors.

A facet's unique beta is not the same as its total criterion relation.

Inspect:
- zero-order correlation;
- multicollinearity;
- latent structure;
- out-of-sample contribution.

## 28. Suppression

A predictor can have:
- weak zero-order correlation;
- strong regression coefficient

because correlated predictors remove irrelevant variance.

This can be legitimate.

It can also be unstable.

Replication and theory are required before mechanistic interpretation.

## 29. Residualized facets require careful interpretation

A residualized facet means:
**facet variance after removing broader shared domain variance**.

It is not identical to the observed facet.

Residual scores can:
- change construct meaning;
- amplify measurement error;
- create artificial contrasts.

Use latent or clearly defined residual models where possible.

## 30. Bifactor/domain-incremental approaches

Structural models can separate:
- domain-general variance;
- facet-specific variance;
- acquiescence/method factors.

This can test whether a facet has unique reliable variance beyond a domain.

However bifactor fit alone does not prove the specific factor is psychologically meaningful.

Criterion and replication evidence remain necessary.

## 31. Facet uniqueness should be demonstrated

Evidence can include:
- discriminant factor structure;
- dissattenuated correlations;
- differential criterion relations;
- cross-rater convergence;
- stability;
- unique external validity.

A named facet without unique evidence may be:
- redundant;
- multidimensional;
- a jangle/jingle artifact.

## 32. Jingle fallacy

A **jingle fallacy** occurs when:
**same or highly similar label -> assumed same construct**
even though measures differ substantively.

Examples can occur for:
- Agreeableness;
- grit;
- self-control;
- empathy;
- resilience.

PER-01 already showed Big Five Agreeableness can differ across inventories and from HEXACO constructs.

## 33. Jangle fallacy

A **jangle fallacy** occurs when:
**different labels -> assumed different constructs**
although measures substantially overlap.

Construct proliferation can therefore create:
- redundant scales;
- false novelty;
- fragmented literatures.

Labels are hypotheses about construct identity, not evidence.

## 34. 2025 extension to jingle/jangle evaluation

A 2025 methods paper extends a prior guideline by recommending explicit comparison of:
- nomological-network similarity;
- expected equal/different criterion correlations;
- statistical tests of correlation differences;
- power.

This moves jingle/jangle evaluation beyond semantic inspection alone.

## 35. Semantic similarity is necessary but insufficient

Two scales can:
- use different words;
yet
- measure nearly the same construct.

Two scales can:
- share the same title;
yet
- sample different content.

Inspect:
- definitions;
- item content;
- factor structure;
- nomological network;
- incremental validity.

## 36. Nomological networks

A construct's nomological network includes expected relations with:
- other traits;
- behaviors;
- outcomes;
- demographics;
- processes.

Similar networks support overlap.

Different networks support distinction.

But identical correlations to a few criteria do not establish full construct identity.

## 37. Discriminant validity is graded

Two traits need not be:
- completely independent;
or
- identical.

They can:
- share higher-order variance;
- retain distinct lower-order information.

This is normal in hierarchical personality structure.

## 38. Construct redundancy can inflate research literatures

If many highly overlapping traits are tested independently:
- apparent "replication" may reflect same construct under new names;
- meta-analyses can double-count conceptual content;
- theoretical claims can fragment.

Construct mapping should precede claims of novelty.

## 39. Multi-method personality assessment

Useful methods include:
- self-report;
- informant/observer report;
- experience sampling;
- behavioral observation;
- situational judgment/conditional tasks;
- life-record/lifespace data;
- digital traces;
- text/voice features;
- assessment centers.

Each method samples different evidence.

## 40. Self-report strengths

Self-report can access:
- private thoughts;
- motives;
- feelings;
- behavior across settings.

It is efficient and standardized.

Limitations:
- self-concept;
- social desirability;
- memory;
- reference-group effects;
- response styles.

Self-report is one informative channel.

## 41. Observer-report strengths

Observers can access:
- visible behavior;
- reputation;
- interpersonal impact.

Multiple observers can average idiosyncratic error.

Limitations:
- limited context exposure;
- halo;
- assumed similarity;
- relationship-specific bias.

Observer report is not objective truth.

## 42. 2025 self–observer review

Current review evidence indicates:
- self/observer mean levels are often broadly similar for full-length Big Five/HEXACO measures;
- convergent correlations can be substantial;
- agreement is somewhat lower for cooperation-related traits;
- assumed similarity affects some traits.

Convergence supports trait signal.
Disagreement can still contain valid perspective-specific information.

## 43. 2025 multi-method review

A 2025 review argues that single-method personality scores contain substantial:
- systematic method bias;
- random error.

The authors estimate roughly half of variance in single-method trait scores may reflect bias/error in many settings and argue that combining self- and knowledgeable-informant reports can improve research estimates.

This is a strong methodological argument.

It is not a universal numerical correction for every inventory/population.

## 44. Multi-method convergence

If self, informants, and repeated states converge:
- trait inference strengthens.

But convergence can arise partly because sources share:
- cultural stereotypes;
- similar contexts;
- overlapping items.

Multi-method inference must still consider correlated method effects.

## 45. Multi-method disagreement

Disagreement can reveal:
- private versus observable aspects;
- role-specific behavior;
- context differences;
- self-enhancement;
- observer halo;
- low reliability.

Do not mechanically average before understanding the source.

## 46. Latent multi-method models

Models such as:
- multitrait–multimethod;
- latent trait models;
- state–trait models

can separate:
- trait signal;
- method variance;
- occasion variance;
- error.

They can improve inference if identified adequately.

Model fit does not guarantee the latent trait is substantively valid.

## 47. Experience sampling

Experience sampling can estimate:
- state distributions;
- context contingencies;
- within-person variability.

It complements global questionnaires.

Limitations:
- burden;
- missingness;
- reactivity;
- limited behavior opportunities;
- device/context sampling.

State averages are not automatically equivalent to global trait ratings.

## 48. Behavioral measures

Behavioral tasks can target:
- persistence;
- cooperation;
- choice;
- performance;
- social behavior.

But behavior is:
- situationally constrained;
- often low reliability;
- multi-determined.

A single task is usually a poor proxy for a broad trait.

## 49. Situational Judgment Tests and assessment centers

A 2025 personnel-selection review highlights:
- SJTs;
- assessment-center exercises;
- multi-rater approaches

as useful alternatives/complements to self-report personality inventories.

They can improve understanding of:
- trait expression;
- performance relevance;
- nonlinear/contextual relations.

They do not automatically measure the same construct as questionnaire traits.

## 50. Digital traces

Digital behavior can include:
- text;
- device use;
- social media activity;
- mobility/activity patterns;
- voice.

Associations with questionnaire personality can support prediction.

But digital traces can reflect:
- age;
- platform;
- occupation;
- culture;
- current context;
- algorithm exposure.

Prediction is not construct identity.

## 51. Machine-learning personality assessment

A 2025 review of ML personality assessment reports:
- promising construct validity in some settings, especially against observer reports;
- lower reliability in some self-report-based ML estimates;
- strong dependence on sample size, input quantity, and trait activation;
- algorithmic-bias concerns.

Therefore:
**ML score ≠ direct latent personality measurement**.

## 52. Digital/ML models need external validation

A model trained in one:
- platform;
- language;
- age group;
- country;
- task

may not transport.

Require:
- participant-independent validation;
- external dataset;
- calibration;
- subgroup performance;
- temporal stability.

High training accuracy is irrelevant to generalization.

## 53. Criterion leakage

Prediction can be inflated if features directly contain criterion information.

Example:
predicting self-reported personality from text that explicitly includes self-descriptions.

This may be useful for scoring.

It is not evidence that behavior reveals latent traits independently.

Check for leakage and semantic overlap.

## 54. Common-method inflation

Self-reported personality and self-reported outcome measured:
- same session;
- similar scale format

can correlate partly because of:
- evaluative bias;
- response style;
- transient mood;
- shared wording.

Cross-method criteria can provide stronger validation.

## 55. Criterion contamination by personality content

An outcome measure may contain personality-like items.

Example:
a well-being scale asking about:
- energy;
- sociability;
- emotional stability.

Trait–criterion relation then partly reflects content overlap.

Inspect item-level overlap before interpreting prediction.

## 56. Prediction does not establish causation

A personality characteristic can predict:
- job performance;
- well-being;
- health;
- relationships.

This does not prove changing the trait will change the outcome.

Possible alternatives:
- common causes;
- reverse effects;
- selection;
- confounding;
- criterion overlap.

Predictive validity is not intervention validity.

## 57. Incremental prediction does not establish mechanism

If nuance X adds R² over domain Y:

Valid conclusion:
**X contains predictive information beyond Y in this model/sample/criterion.**

Invalid conclusion:
**X is the causal mechanism through which Y affects the outcome.**

Mechanism requires separate design.

## 58. Cross-validation protects prediction, not construct meaning

A perfectly cross-validated model can exploit:
- nuisance correlations;
- demographic proxies;
- institutional artifacts.

Out-of-sample performance supports generalization under similar data distribution.

It does not establish psychological interpretation.

## 59. External validity can be distribution-specific

A model can generalize across random splits of one dataset but fail in:
- another country;
- another cohort;
- another platform;
- another time period.

Random holdout ≠ transport validation.

## 60. Model comparison should include simple baselines

Compare:
- domains only;
- facets;
- nuances;
- demographics/basic covariates where justified;
- prior criterion values if forecasting.

A complex personality model should beat relevant simple baselines.

Otherwise complexity may have little practical value.

## 61. Parsimony

If two models predict similarly:
prefer the simpler one when it offers:
- lower cost;
- higher reliability;
- better interpretability;
- better transportability.

More detailed assessment is justified when it adds useful information.

## 62. Criterion-specific detail can support explanation

Narrow relations can reveal:
- which part of a broad domain drives association;
- heterogeneous pathways.

For example:
a broad Conscientiousness relation may decompose into:
- organization;
- responsibility;
- industriousness

with different criteria.

This improves hypothesis generation.

It still does not prove causal pathways.

## 63. Broad composite can conceal opposite facet effects

If one facet correlates positively and another negatively with an outcome:
- domain average may approach zero.

This does not mean the domain is meaningless.

It means the criterion relation is heterogeneous within the domain.

Inspect lower levels before concluding "no personality association."

## 64. Narrow predictors can reduce interpretive portability

A specific item relation may depend on:
- wording;
- culture;
- criterion;
- inventory.

Broad domains often transport more easily conceptually.

Thus narrower prediction can trade:
- predictive gain
for
- interpretive/generalization cost.

## 65. Nuance replication across outcomes

2025 evidence on cognition showed replicable item-level associations across:
- objective memory;
- subjective memory;
- informant-rated cognition;
- multiple cohorts.

This supports the possibility that nuance-level relations can generalize across measurement modes.

It does not make every item association replicable.

## 66. Personality and cognitive ability illustrate hierarchy dependence

A 2026 critical review/meta-analytic synthesis emphasizes that personality–ability relations change in interpretation when:
- broad traits;
- facets;
- general ability;
- specific abilities

are distinguished.

Hierarchical level is therefore part of construct definition, not merely a statistical detail.

## 67. Jingle/jangle risk across personality and adjacent constructs

Potential overlaps include:
- Conscientiousness vs self-control/grit;
- Agreeableness vs compassion/prosociality;
- Neuroticism vs distress tendency;
- Openness vs intellect/curiosity.

These constructs may overlap strongly without being identical.

Do not resolve equivalence by label alone.

## 68. Traits versus skills

A 2025 study comparing trait/skill measurement found observed similarity depended partly on item format:
- forced-choice items produced greater trait–skill similarity than Likert items;
- rater source had less effect in that study.

This demonstrates:
**method can alter apparent construct overlap**.

Jingle/jangle evaluation must include response format.

## 69. High-dimensional taxonomies contain redundancy

Many trait sets contain correlated/redundant variables.

Redundancy can:
- inflate apparent model complexity;
- make coefficient interpretation unstable;
- waste assessment time.

Feature reduction or hierarchical modeling can help.

But redundancy reduction should not erase valid narrow distinctions.

## 70. Prediction-versus-description tradeoff

A model optimized for prediction may use:
- many items;
- opaque weights;
- shrinkage.

A model optimized for communication may use:
- five domains;
- interpretable scores.

Neither is universally superior.

Choose by task:
- prediction;
- description;
- theory;
- intervention planning;
- screening.

## 71. Individual assessment needs precision

For person-level interpretation, require:
- score reliability;
- confidence/credible interval where available;
- appropriate norms;
- response validity;
- multi-method evidence when stakes are high.

A predictor useful at population level may be too noisy for individual ranking.

## 72. Group-level incremental validity is not individual certainty

Even if nuances improve group-level prediction:
- individual prediction errors remain;
- residual variance remains;
- model calibration matters.

Do not convert average R² gains into confident personal forecasts.

## 73. Personality Hierarchy / Criterion Validity Inference Gate — 66 questions

### A. Construct and hierarchy
1. What exact personality construct is targeted?
2. Is it domain, aspect, facet, nuance, or item?
3. Is the exact inventory specified?
4. Is the trait content inspected rather than inferred from label?
5. Is the hierarchy empirically supported in this instrument?
6. Is an item being treated as a nuance without trait-like evidence?
7. Could the facet be redundant with another construct?
8. Is the level chosen because of theory or merely availability?

### B. Criterion
9. What exact criterion is predicted?
10. Is the criterion broad or narrow?
11. Is criterion reliability adequate?
12. Is criterion content contaminated with personality wording?
13. Is predictor bandwidth matched to criterion bandwidth?
14. Is the criterion self-report, behavior, record, performance, or observer-rated?
15. Is criterion timing appropriate?
16. Is criterion validity itself established?

### C. Broad versus narrow
17. Are domains compared against facets/nuances directly?
18. Is predictor count controlled?
19. Is in-sample fit being mistaken for predictive validity?
20. Is cross-validation used?
21. Is validation participant-independent?
22. Is an external sample available?
23. Is shrinkage/regularization used for high-dimensional models?
24. Is the incremental gain practically meaningful?
25. Is a simpler baseline nearly as good?
26. Is narrow prediction overgeneralized to all outcomes?

### D. Incremental validity
27. Incremental beyond which baseline?
28. Is the baseline measured with comparable reliability?
29. Is multicollinearity inspected?
30. Are zero-order and unique effects both reported?
31. Could suppression explain a large beta?
32. Is residualized predictor meaning interpretable?
33. Is incremental validity replicated?
34. Is model uncertainty reported?
35. Is significance being confused with useful effect size?
36. Is predictive increment being called causal mechanism?

### E. Jingle/jangle
37. Are same-named measures assumed identical?
38. Are differently named measures assumed distinct?
39. Are definitions compared?
40. Is item content compared?
41. Is factor structure compared?
42. Are nomological networks compared?
43. Are correlation-difference hypotheses tested?
44. Is discriminant validity graded rather than binary?
45. Could response format create apparent similarity/difference?

### F. Multi-method
46. Is self-report being treated as sole truth?
47. Is observer report being treated as objective truth?
48. Is self–observer disagreement analyzed?
49. Does each source have access to the relevant behavior/content?
50. Are multiple informants independent enough?
51. Is experience sampling appropriate for the trait?
52. Is a behavioral task too narrow for the trait?
53. Is shared method inflating criterion correlations?
54. Could latent multi-method modeling separate trait/method variance?

### G. Digital/ML
55. Is the raw digital feature valid/reliable?
56. Is the personality label used for training itself valid?
57. Is criterion leakage present?
58. Is external validation available?
59. Is subgroup/calibration performance reported?
60. Could demographics/context explain algorithm performance?
61. Is predictive accuracy being mistaken for construct validity?
62. Is algorithmic output being treated as latent-trait decoding?

### H. Final inference
63. Does the model transport across population/context?
64. Is the level of detail justified by cost and precision?
65. Which simpler or overlapping construct remains viable?
66. What is the narrowest claim justified by hierarchy, criterion, method, and validation?

## 74. Failure modes

A. Domain always best: **invalid**.

B. Facet/nuance always best: **invalid**.

C. More predictors = more valid personality: **invalid**.

D. In-sample R² = generalization: **invalid**.

E. Cross-validation = causal validity: **invalid**.

F. Item = nuance by definition: **invalid**.

G. Unique item variance = mechanism: **invalid**.

H. Incremental R² = unique construct: **invalid**.

I. Statistical increment = practical value: **invalid**.

J. Same label = same construct: **jingle fallacy**.

K. Different label = different construct: **jangle fallacy**.

L. One questionnaire = construct definition: **invalid**.

M. Self-report = ground truth: **invalid**.

N. Observer report = ground truth: **invalid**.

O. Multi-method agreement = direct truth: **invalid**.

P. Method disagreement = one source wrong: **invalid**.

Q. Digital prediction = personality measurement: **invalid without construct validation**.

R. ML accuracy = latent trait decoded: **invalid**.

S. Criterion validity = causal explanation: **invalid**.

T. Group-level incremental validity = individual certainty: **invalid**.

## 75. Evidence confidence map

### High-confidence practical boundaries
- personality has useful hierarchical levels below broad domains;
- facets and nuances can contain reliable unique information;
- finer-grained predictors often improve criterion prediction, but not universally;
- incremental validity is baseline- and criterion-specific;
- cross-validation/external validation are essential for high-dimensional prediction;
- jingle/jangle problems require content and nomological-network comparison;
- self- and observer reports are overlapping but nonidentical;
- multi-method measurement can reduce method-specific distortion;
- prediction and causal mechanism are different claims;
- digital/ML personality estimates require construct and transport validation.

### Supported but context-sensitive
- facets often outperform domains for narrower criteria;
- nuance-level models can outperform facets/domains across some life outcomes;
- item-level unique variance can show stable criterion relations;
- multi-method latent traits can improve estimates of trait–outcome relations;
- alternative assessments such as SJTs/assessment centers can complement self-report;
- profile/configuration models can improve some broad outcome predictions.

### Not established as universal
- one optimal personality hierarchy level;
- one fixed bandwidth–fidelity rule;
- all items as valid nuances;
- all facet increments as generalizable;
- one universal mapping across personality inventories;
- one method as true personality;
- one algorithmic personality score as platform-independent trait measurement.

## 76. Closure audit — 18 criteria

1. Domain/aspect/facet/nuance hierarchy explicitly separated: **PASS**.
2. Item-versus-nuance validity boundary explicit: **PASS**.
3. 2024 facet-taxonomy evidence integrated: **PASS**.
4. 2025 nuance-assessment review integrated: **PASS**.
5. 2021 N=6,126 cross-validated domain/facet/nuance evidence integrated: **PASS**.
6. 2024 N=440 cross-validated Elastic Net evidence integrated with sample/generalization limits: **PASS**.
7. 2025 N>22,000 mortality counterexample used to block "narrower always better": **PASS**.
8. Bandwidth–fidelity and criterion-quality boundaries explicit: **PASS**.
9. Incremental validity defined as model- and criterion-relative: **PASS**.
10. Multicollinearity, suppression, residualization and bifactor limitations included: **PASS**.
11. 2025 jingle/jangle methods extension integrated: **PASS**.
12. Self-/observer/multi-method measurement distinctions integrated: **PASS**.
13. 2025 multi-method review used to motivate trait/method-error separation: **PASS**.
14. Experience sampling, behavioral, SJT/assessment-center and digital-data boundaries included: **PASS**.
15. 2025 ML-personality psychometric review integrated: **PASS**.
16. Prediction versus causation and external-transport boundaries explicit: **PASS**.
17. 66-question Personality Hierarchy / Criterion Validity Inference Gate documented: **PASS**.
18. Privacy-safe content and next dependency unambiguous: **PASS**.

## Canonical operating rule

**Define the trait and criterion -> choose domain/facet/nuance level that matches criterion breadth -> establish content coverage and reliability -> compare simpler and finer-grained models with out-of-sample validation -> test whether apparent increment survives redundancy/multicollinearity and jingle/jangle checks -> combine complementary self/observer/state/behavioral data when warranted -> validate digital/ML outputs against the intended construct and population -> separate prediction from mechanism -> state only the narrowest criterion-specific inference.**

Never:
**broader = better; narrower = better; item = nuance; incremental R² = mechanism; same name = same trait; different name = different trait; self-report = truth; observer = truth; algorithm = personality; prediction = causation.**

## Sources — reviews, meta-analyses, methodological papers, and primary studies

1. Henry, S. J., & Mõttus, R. (2025). *More nuanced assessments improve predictive and explanatory accuracy.* Current Opinion in Psychology, 65, 102074. https://doi.org/10.1016/j.copsyc.2025.102074
2. Stewart, R. D., Mõttus, R., Seeboth, A., Soto, C. J., & Johnson, W. (2022; online 2021). *The finer details? The predictability of life outcomes from Big Five domains, facets, and nuances.* Journal of Personality, 90, 167–182. https://doi.org/10.1111/jopy.12660
3. *Beyond the Big Five factors: using facets and nuances for enhanced prediction in life outcomes.* (2024). Current Psychology. https://doi.org/10.1007/s12144-024-05662-w
4. Stephan, Y., Sutin, A. R., Mõttus, R., Luchetti, M., O'Súilleabháin, P., & Terracciano, A. (2025). *Personality nuances and mortality risk: A coordinated analysis of four longitudinal samples.* Journal of Psychosomatic Research, 196, 112347. https://doi.org/10.1016/j.jpsychores.2025.112347
5. Irwing, P., Hughes, D. J., Tokarev, A., & Booth, T. (2024). *Towards a taxonomy of personality facets.* European Journal of Personality, 38, 494–515. https://doi.org/10.1177/08902070231200919
6. Danner, D., Lechner, C. M., Soto, C. J., & John, O. P. (2021). *Modelling the incremental value of personality facets: The domains-incremental facets-acquiescence bifactor model.* European Journal of Personality, 35, 67–84. https://doi.org/10.1002/per.2268
7. Anglim, J., Horwood, S., Smillie, L. D., Marrero, R. J., & Wood, J. K. (2020). *Predicting psychological and subjective well-being from personality: A meta-analysis.* Psychological Bulletin, 146, 279–323. PMID 31944795.
8. Blötner, C. (2025). *Extending Lawson and Robins' (2021) guideline for the evaluation of jingle and jangle fallacies.* Behavior Research Methods, 57, 177. https://doi.org/10.3758/s13428-025-02691-6
9. Lawson, K. M., & Robins, R. W. (2021). *Sibling constructs: What are they, why do they matter, and how should you handle them?* Personality and Social Psychology Review, 25, 344–366.
10. Ashton, M. C., & Lee, K. (2025). *Self- and Observer Reports of Personality.* Annual Review of Psychology, 76, 771–795. https://doi.org/10.1146/annurev-psych-020124-115044
11. Mõttus, R. (2025). *Using multi-method data for more accurate research findings.* Current Opinion in Psychology, 65. PMID 40570473.
12. Mayer, J. D., & Bryan, V. M. (2024). *On Personality Measures and Their Data: A Classification of Measurement Approaches and Their Recommended Uses.* Personality and Social Psychology Review, 28, 325–345. https://doi.org/10.1177/10888683231222519
13. *Psychometric properties of personality assessment using machine learning.* (2025). PMID 40651430.
14. Lievens, F., Fan, J., & Li, J. (2025). *Personality and personnel selection: Going beyond self-reports and linear relationships.* Current Opinion in Psychology, 65, 102058. https://doi.org/10.1016/j.copsyc.2025.102058
15. Stephan, Y., et al. (2025). *Personality nuances and cognition: A multi-cohort and multi-method approach.* PMID 39938201.
16. Wilmot, M. P., Wiernik, B. M., & Ones, D. S. (2025). *Mapping domains of life success: Insights from meta-analytic criterion profile analysis.* Psychological Bulletin, 151, 767–818. https://doi.org/10.1037/bul0000476
17. Anglim, J. (2026). *Personality and cognitive ability: A critical review and meta-analytic synthesis.* Current Opinion in Psychology, 67, 102171. https://doi.org/10.1016/j.copsyc.2025.102171
18. Walton, K. E., Murano, D., & Burrus, J. (2025). *Considerations When Determining Similarity Between Traits and Skills: Raters and Item Types.* Journal of Personality Assessment, 107, 426–438. https://doi.org/10.1080/00223891.2024.2444447

## Scope and next dependency

PER-02 establishes how hierarchy level, criterion breadth, incremental validity, construct redundancy, and method variance should be handled.

**Next block: PER-03 — Personality development and intentional change: life events, goals, state change, trait change, intervention effects, selection versus socialization, causal inference, and measurement boundaries.**

PER-03 should determine:
- when life events predict personality change;
- how selection differs from socialization;
- whether desired/intentional personality change predicts actual trait change;
- what intervention evidence supports causal personality change;
- how persistent change is distinguished from short-term state shifts and retest effects;
before a final PER integration/sufficiency audit and transition to DEV.
