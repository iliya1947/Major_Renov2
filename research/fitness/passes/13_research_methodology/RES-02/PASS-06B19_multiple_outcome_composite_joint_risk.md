# RES-02 / PASS-06B19 — Multiple-outcome, composite and joint-risk prediction structures

Статус: **COMPLETE MICRO-PASS — prediction branch remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. single-outcome vs multiple-outcome prediction;
2. marginal risk for each outcome;
3. competing-outcome risk;
4. composite outcome risk;
5. joint risk of multiple outcome combinations;
6. co-occurring vs mutually exclusive outcomes;
7. dependence/correlation among outcomes;
8. why multiplying marginal risks usually requires a conditional-independence assumption;
9. why separate single-outcome models can still be adequate for marginal risks but inadequate for joint risk;
10. prediction of explicit outcome combinations;
11. relation to multinomial/multicategory prediction;
12. composite-outcome information loss and “composite outcome fallacy”;
13. development/validation/performance implications;
14. decision-analytic and utility implications;
15. mixed outcome types at recognition level;
16. boundaries with competing risks, multistate and counterfactual prediction;
17. fitness/exercise translations;
18. structural record.

Не покрывается здесь:

- exact multivariate probit/copula mathematics;
- exact probabilistic classifier-chain algorithms;
- exact joint-survival likelihoods;
- exact multivariate calibration formulas;
- sample-size calculations;
- detailed mixed continuous/binary/time-to-event modelling;
- detailed multi-criteria decision analysis;
- causal multiple-outcome prediction under interventions;
- diagnostic outcome-dependent sampling — PASS-06B20;
- final synthesis.

---

# Sources checked

## 1. Martin et al. — current multiple-outcome risk-estimand taxonomy

Martin GP, Pate A, Bladon S, Sperrin M, Riley RD.  
**A decision-analytical perspective on incorporating multiple outcomes in the production of clinical prediction models: defining a taxonomy of risk estimands.**  
BMC Medicine. 2025;23:142.  
DOI: 10.1186/s12916-025-03978-3.

Checked 2026-11-17.

This is the central current source for this pass.

It proposes four levels of risk estimand:

1. single-outcome risk;
2. competing-outcome risk;
3. composite-outcome risk;
4. risk of multiple outcome combinations / joint risk.

Its central methodological recommendation is:

> define the risk estimand from the intended decision context before choosing the modelling method.

It also emphasizes terminology heterogeneity around:

- multivariate;
- multi-label;
- multi-output;
- multi-target.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11887178/  
https://pubmed.ncbi.nlm.nih.gov/40050803/  
https://doi.org/10.1186/s12916-025-03978-3

---

## 2. Martin et al. — multiple binary outcomes comparison

Martin GP, Sperrin M, Snell KIE, Buchan I, Riley RD.  
**Clinical prediction models to predict the risk of multiple binary outcomes: a comparison of approaches.**  
Statistics in Medicine. 2021;40(2):498–517.  
DOI: 10.1002/sim.8787.

Checked 2026-11-17.

Key findings used:

- marginal outcome risks and joint outcome-combination risks are different prediction targets;
- separate univariate models can estimate marginal risks adequately;
- joint risks require accounting for residual dependence between outcomes;
- simply multiplying separately estimated marginal probabilities is inappropriate unless conditional independence is valid;
- methods that explicitly model outcome dependence performed better for joint-risk calibration.

https://pubmed.ncbi.nlm.nih.gov/33107066/  
https://onlinelibrary.wiley.com/doi/full/10.1002/sim.8787

---

## 3. Pate et al. — two survival outcomes both occurring

**Developing prediction models to estimate the risk of two survival outcomes both occurring: A comparison of techniques.**  
Statistics in Medicine. 2023.

Checked 2026-11-17.

Relevant point:

- for two time-to-event outcomes that can both occur, estimating the probability that **both** occur requires modelling their dependence;
- multiplying separate survival-outcome risks can be miscalibrated when conditional independence does not hold;
- joint-risk prediction for co-occurring time-to-event outcomes is not the same as ordinary competing-risk prediction.

https://onlinelibrary.wiley.com/doi/full/10.1002/sim.9771

---

## 4. Dudbridge — performance criteria for multiple outcomes

Dudbridge F.  
**Criteria for evaluating risk prediction of multiple outcomes.**  
Statistical Methods in Medical Research. 2020;29(12):3492–3510.

Checked 2026-11-17.

Relevant taxonomy:

- outcome-wise prediction;
- individual-wise prediction;
- joint prediction;
- panel-wise prediction;
- multivariate calibration/performance requires defining exactly what set of outcomes/combinations is being predicted.

https://pmc.ncbi.nlm.nih.gov/articles/PMC7682512/  
https://pubmed.ncbi.nlm.nih.gov/32594841/

---

## 5. Dash et al. — composite-outcome problems in prediction

Dash K, Goodacre S, Sutton L.  
**Composite Outcomes in Clinical Prediction Modeling: Are We Trying to Predict Apples and Oranges?**  
Annals of Emergency Medicine. 2022;80(1):12–19.

Checked 2026-11-17.

Key concern:

- predictors may relate differently, even oppositely, to components of a composite outcome;
- a model may appear useful for the composite because it predicts one dominant component;
- this can mislead downstream decisions if users care differently about individual components.

The authors call this a:

> “composite outcome fallacy”.

https://pubmed.ncbi.nlm.nih.gov/35339284/  
https://www.sciencedirect.com/science/article/pii/S0196064422001020

---

## 6. PROBAST explanation / composite-outcome appraisal

Moons KGM et al.  
**PROBAST: A Tool to Assess Risk of Bias and Applicability of Prediction Model Studies: Explanation and Elaboration.**

Checked current record 2026-11-17.

Relevant point:

- composite outcome definitions can create risk of bias/applicability problems;
- components should be prespecified and applied consistently;
- clinically incompatible components can make the model difficult to use for decisions.

PROBAST+AI 2025 remains the current updated tool; its authors continue to point to the original explanation document as background.

https://doi.org/10.7326/M18-1377

---

# Part A — First question: one outcome or multiple outcomes?

## 1. Single-outcome prediction

### Established finding
**Confidence: HIGH**

A single-outcome prediction model estimates one target probability/value:

`P(Y_1|X)`

Examples:

- probability of dropout;
- probability of injury;
- probability of reaching strength target.

Other outcomes may exist in reality, but they are not part of the model’s decision target unless they:

- prevent the target event;
- are included in a composite;
- or need to be considered jointly.

---

## 2. Multiple-outcome prediction

### Established finding
**Confidence: HIGH**

Multiple-outcome prediction is required when the intended decision depends on more than one outcome event.

Examples:

- risk of injury **and** dropout;
- risk of performance failure **and** adverse event;
- risk of two chronic outcomes that may co-occur.

### Project rule

Do not call a study “multiple-outcome” merely because:

- it has many predictors;
- it reports several secondary analyses;
- it develops separate unrelated models in one paper.

The scientific target must explicitly involve multiple outcome risks.

---

# Part B — “Multivariate” is terminologically dangerous

## 3. Multiple predictors != multiple outcomes

### Established finding
**Confidence: HIGH**

Current 2025 methodology explicitly notes frequent misuse of:

> multivariate

to mean:

> many predictor variables.

For this project:

- **multivariable** = multiple predictors;
- **multiple-outcome / multivariate-outcome** = multiple outcome variables.

### Project rule

Never classify a model as multiple-outcome solely because authors call it “multivariate regression”.

Inspect the outcome structure.

---

# Part C — Four-level risk-estimand taxonomy

## 4. Level 1 — single-outcome risk

### Established finding
**Confidence: HIGH**

Target:

`P(Y_1 = 1 | X)`

Appropriate when:

- the decision depends only on Y1;
- other outcomes do not need explicit modelling;
- other events do not prevent Y1 from being observed in a way requiring competing-risk handling.

---

## 5. Level 2 — competing-outcome risk

### Established finding
**Confidence: HIGH**

Target concerns an outcome in the presence of mutually exclusive competing events.

Example:

- injury before permanent training cessation.

This is already covered deeply in PASS-06B15.

### Integration rule

Competing-risk prediction is one form of multiple-outcome prediction, but its event types are mutually exclusive in the relevant first-event process.

---

## 6. Level 3 — composite-outcome risk

### Established finding
**Confidence: HIGH**

Several distinct component outcomes are collapsed into one event:

`Y_{comp} = Y_1 ∪ Y_2 ∪ ... ∪ Y_m`

Prediction target:

> probability that **any** component occurs.

Example:

> injury OR dropout OR hospitalization.

### Key consequence

The model no longer preserves which component occurs in its primary predicted probability.

---

## 7. Level 4 — joint risk of outcome combinations

### Established finding
**Confidence: HIGH**

The target is the probability of specific co-occurrence combinations.

For two binary outcomes A and B, possible joint states are:

1. A=0, B=0;
2. A=1, B=0;
3. A=0, B=1;
4. A=1, B=1.

The model may estimate:

- all four;
- or a scientifically important subset such as:
  - P(A=1 AND B=1);
  - P(A=0 AND B=0).

### Project rule

Joint risk is not the same as marginal risk for A and marginal risk for B.

---

# Part D — Marginal risk

## 8. Definition

### Established finding
**Confidence: HIGH**

For outcome A:

`P(A=1 | X)`

For outcome B:

`P(B=1 | X)`

These are **marginal outcome risks** with respect to the multiple-outcome system.

They describe each outcome separately.

---

## 9. Separate models may be adequate for marginal risks

### Established finding
**Confidence: HIGH**

Martin et al. 2021 found that separate single-outcome models could predict the **marginal risks** of each outcome well even when outcomes were correlated.

### Project rule

Do not overstate:

> correlated outcomes always require one multivariate model.

If the scientific goal is only accurate marginal risk for each outcome separately, separate models can be adequate.

The problem arises when the target is:

> **joint/co-occurrence probability**.

---

# Part E — Joint risk

## 10. Joint probability

For outcomes A and B:

`P(A=1, B=1 | X)`

asks:

> What is the probability that both occur?

This is not determined uniquely by the two marginals alone unless additional dependence assumptions are supplied.

---

## 11. Marginals do not determine dependence

### Established finding
**Confidence: HIGH**

Knowing:

- P(A=1|X);
- P(B=1|X)

does not by itself determine:

- P(A=1 AND B=1|X).

The missing information is how the outcomes co-vary after accounting for X.

---

# Part F — Conditional-independence trap

## 12. Multiplying marginal risks assumes conditional independence

### Established finding
**Confidence: HIGH**

A naive calculation:

`P(A=1,B=1|X) = P(A=1|X) × P(B=1|X)`

is only valid when A and B are conditionally independent given X.

### Project rule

Do not multiply predicted marginal risks to derive joint risk unless the required independence assumption is scientifically justified/evaluated.

---

## 13. Residual dependence matters

### Established finding
**Confidence: HIGH**

Outcomes may remain correlated after conditioning on measured predictors because of:

- shared unmeasured causes;
- biological coupling;
- behavioral mechanisms;
- one outcome affecting the other;
- omitted predictor interactions.

Martin et al. 2021 showed that joint-risk predictions became miscalibrated when methods failed to model residual outcome dependence.

---

# Part G — Methods that can represent joint risk

## 14. Outcome-combination multinomial representation

### Established finding
**Confidence: HIGH**

For two binary outcomes, the four joint combinations can be encoded as a nominal outcome:

- neither;
- A only;
- B only;
- both.

A multinomial model can then estimate all four probabilities coherently.

### Cross-pass integration

This reuses multicategory machinery from PASS-06B18.

But the **scientific target** is still multiple outcomes because the categories represent combinations of originally distinct co-occurring outcomes.

---

## 15. Other joint modelling approaches

### Established finding
**Confidence: HIGH**

Current literature includes:

- probabilistic classifier chains;
- multivariate probit models;
- multivariate logistic/probit variants;
- copula models;
- latent-variable models;
- joint survival/multistate approaches for time-to-event outcomes.

### Project rule

Method family does not define the estimand.

The same estimand can sometimes be estimated by different modelling approaches.

---

# Part H — Composite outcomes

## 16. Composite is a union target

### Established finding
**Confidence: HIGH**

For components A, B and C:

`P(A ∪ B ∪ C | X)`

asks:

> What is the probability that at least one component occurs?

This is a valid prediction target when the decision genuinely treats any component as equivalent for action.

---

## 17. Composite can increase event frequency

### Established finding
**Confidence: HIGH**

Combining rare outcomes can increase the total event count/prevalence.

This can improve statistical information for development.

### Important qualification

Statistical convenience does not prove decision relevance.

---

# Part I — Information loss in composites

## 18. Composite erases component identity in its main prediction

### Established finding
**Confidence: HIGH**

A 30% risk of:

> injury OR dropout

does not tell the user whether the model expects:

- mostly injury;
- mostly dropout;
- both.

### Project rule

Composite risk is appropriate only when component identity is not needed for the intended decision or is handled separately.

---

## 19. Components may differ in severity and actionability

### Established finding
**Confidence: HIGH**

Composite components can differ in:

- clinical/practical importance;
- frequency;
- preventability;
- required intervention;
- predictor relationships.

### Consequence

A composite can be dominated by a common but less important component while hiding poor prediction of a rarer important component.

---

# Part J — Composite outcome fallacy

## 20. Predictors can relate differently to components

### Established finding
**Confidence: HIGH**

Dash et al. 2022 describe a “composite outcome fallacy”:

- a predictor may strongly predict component A;
- weakly or inversely predict component B;
- yet the composite model is used as though one risk score meant the same thing for both.

### Project rule

When a composite guides action, inspect:

1. component definitions;
2. component frequencies;
3. predictor associations by component where relevant;
4. performance for important components;
5. whether components imply the same action.

---

# Part K — Composite vs competing risk

## 21. They answer different questions

### Composite

> Did **any** member of the selected set occur?

The identity of the component is collapsed.

### Competing risk

> What is the probability of **specific event type A**, accounting for the fact that B can preclude it?

### Project rule

Do not call every multi-component endpoint a competing-risk model.

---

# Part L — Co-occurring vs competing outcomes

## 22. Co-occurring outcomes

### Established finding
**Confidence: HIGH**

A and B can both occur in the same individual within the relevant horizon.

Example:

- injury;
- dropout.

The joint state A=1, B=1 is possible.

---

## 23. Competing outcomes

### Established finding
**Confidence: HIGH**

Event types are mutually exclusive within the specified first-event process.

Example:

- target event before competing death/withdrawal.

### Project boundary

If both can occur, ordinary competing-risk methods are not automatically appropriate for the joint co-occurrence target.

---

# Part M — Time ordering matters

## 24. Same pair of outcomes can support different estimands

Example:

A = injury  
B = dropout.

Possible targets:

1. P(injury by 12 weeks);
2. P(dropout by 12 weeks);
3. P(injury OR dropout by 12 weeks);
4. P(injury AND dropout by 12 weeks);
5. P(dropout after injury);
6. time to first of injury/dropout;
7. state transitions:
   - training → injury → dropout.

### Project rule

Outcome labels alone do not define the model.

The temporal/combination estimand must be explicit.

---

# Part N — Joint time-to-event outcomes

## 25. Two events can both occur at different times

### Established finding
**Confidence: HIGH**

For two non-competing survival outcomes:

- one participant can experience A;
- later B;
- both within the prediction horizon.

Joint target:

> probability both occur by horizon t.

### Evidence

Pate et al. showed that naive multiplication of separate time-to-event risks can be miscalibrated when residual dependence exists.

---

# Part O — Mixed outcome types

## 26. Multiple outcomes need not have the same data type

### Established current limitation
**Confidence: HIGH**

Martin et al. 2025 explicitly note possible mixtures such as:

- continuous;
- binary;
- time-to-event.

Methods exist, but application to clinical prediction remains relatively rare and benefits remain uncertain.

### Project decision

Recognize mixed-type multiple-outcome prediction as part of the multiple-outcome family.

Do not open a separate blocker unless later fitness-specific evidence requires detailed modelling methods.

---

# Part P — Development implications

## 27. Define the risk estimand before the model method

### Established finding
**Confidence: HIGH**

The same raw outcomes can support different models depending on the intended decision.

Required development record:

1. outcomes included;
2. whether mutually exclusive;
3. whether co-occurrence matters;
4. whether a composite is intended;
5. whether marginal risks are enough;
6. whether joint combinations are needed;
7. horizon for each target;
8. treatment/counterfactual context if relevant.

---

## 28. Multiple-outcome modelling can increase parameter complexity

### Established finding
**Confidence: HIGH**

Joint models may need to represent:

- outcome-specific predictor effects;
- cross-outcome dependence;
- multiple outcome combinations.

As number of binary outcomes m grows, potential joint combinations grow as:

`2^m`.

### Project consequence

Joint-risk models can become data-hungry rapidly.

Exact sample-size methods are deferred.

---

# Part Q — Shared vs outcome-specific predictors

## 29. Predictors need not affect all outcomes equally

### Established finding
**Confidence: HIGH**

A predictor can:

- strongly predict A;
- weakly predict B;
- have opposite direction for B.

### Project rule

A model that forces one common relationship across clinically distinct outcomes needs justification.

This is especially important in composite models.

---

# Part R — Validation: marginals vs joints

## 30. Validate the exact risk estimand

### Established finding
**Confidence: HIGH**

If the model is intended to predict:

- marginal A risk → validate marginal A risk;
- marginal B risk → validate marginal B risk;
- joint A&B risk → validate joint A&B risk;
- composite A∨B → validate the composite.

### Project rule

Good validation of marginals does **not** establish good joint-risk prediction.

---

# Part S — Joint calibration

## 31. Joint-risk calibration

### Established finding
**Confidence: HIGH**

For a predicted joint probability such as:

`P(A=1,B=1|X)=0.20`

calibration asks whether individuals receiving similar joint predictions experience the joint combination at the corresponding frequency.

### Evidence

Martin et al. 2021 evaluated joint calibration using multinomial/joint-outcome-combination methods and showed dependence-naive approaches could be miscalibrated.

---

## 32. Marginal calibration can coexist with joint miscalibration

### Established finding
**Confidence: HIGH**

A model may correctly estimate:

- P(A=1);
- P(B=1);

while incorrectly estimating:

- P(A=1,B=1).

### Project rule

Outcome-wise calibration is insufficient when the intended decision depends on combinations.

---

# Part T — Discrimination and overall performance

## 33. Performance must match the target structure

### Established finding
**Confidence: HIGH**

Possible performance levels:

### Marginal

- AUC/c-statistic for each binary outcome;
- calibration for each marginal probability;
- Brier/error for each outcome.

### Joint combinations

- multinomial calibration;
- joint-combination discrimination, e.g. PDI-like approaches;
- multivariate prediction error.

### Project rule

Do not report one average AUC and claim the whole multiple-outcome system is validated.

---

# Part U — Outcome-wise vs individual-wise evaluation

## 34. Current performance taxonomy

### Established finding
**Confidence: HIGH**

Dudbridge distinguishes:

- **outcome-wise** prediction:
  - performance separately for each outcome;

- **individual-wise** prediction:
  - how well the collection/panel of predicted outcomes works for one person;

with further distinctions for joint/panel prediction.

### Project consequence

A multiple-outcome model should state whether performance is intended:

- per outcome;
- per outcome combination;
- for the full individual-level risk profile.

---

# Part V — Decision utility determines which estimand matters

## 35. Decision-analytical principle

### Established finding
**Confidence: HIGH**

Martin et al. 2025 argue that choice of single, competing, composite or joint risk should follow the decision context.

Example:

If one intervention decision depends on:

- benefit from avoiding injury;
- harm from dropout risk;
- trade-off between both,

separate/joint risks may be required.

A composite may be insufficient.

---

## 36. Utility cannot be inferred from prediction accuracy alone

### Cross-pass integration
**Confidence: HIGH**

As established in PASS-06B9:

> good prediction ≠ useful decision.

For multiple outcomes, utility is more complex because:

- outcomes can have different utilities;
- outcome combinations can have different utilities;
- interventions can affect outcomes differently.

### Project rule

Record the decision/action structure separately from risk prediction.

---

# Part W — Marginal risks may be enough for some decisions

## 37. Full joint modelling is not always required

### Established finding
**Confidence: HIGH**

If the decision rule uses:

- risk of A independently;
- risk of B independently;

and does not depend on their co-occurrence probability, accurate marginals may be sufficient.

### Project rule

Do not demand joint modelling merely because several outcomes are reported.

Joint modelling is required when the **joint estimand** matters.

---

# Part X — Joint outcome as multicategory representation

## 38. Combination states form mutually exclusive categories

### Cross-pass integration
**Confidence: HIGH**

For two binary outcomes A/B:

- neither;
- A only;
- B only;
- both

are four mutually exclusive categories.

A multinomial model can estimate them coherently.

### Important boundary

Statistically this uses multicategory machinery from PASS-06B18.

Scientifically it remains a multiple-outcome problem because those categories are combinations of distinct underlying outcomes.

---

# Part Y — Multiple outcomes vs multicategory outcome

## 39. Multicategory outcome

One variable has K mutually exclusive levels.

Example:

> response = none / partial / strong.

Only one is the outcome.

---

## 40. Multiple outcomes

Several distinct variables exist.

Example:

- injury;
- dropout.

Both can be true.

### Project rule

Do not infer multiple-outcome architecture merely from K model outputs.

Inspect whether the underlying outcomes can co-occur.

---

# Part Z — Multiple outcomes vs multistate

## 41. Multiple-outcome joint risk

Question:

> What outcomes/combinations occur by horizon t?

May ignore the exact pathway/order unless explicitly modelled.

---

## 42. Multistate

Question:

> How does the individual transition among states through time?

Path and transition timing are part of the target.

### Project rule

If order/pathway matters:

> multistate/dynamic architecture may be needed.

If only co-occurrence combination by a horizon matters:

> joint multiple-outcome risk may be sufficient.

---

# Part AA — Multiple outcomes vs recurrent events

## 43. Recurrent events repeat the same/related event process

Example:

> number of injury episodes.

Multiple-outcome prediction instead concerns different outcome variables/types, though a study can combine both complexities.

### Project rule

Record both axes if present.

---

# Part AB — Multiple outcomes under intervention

## 44. Counterfactual boundary remains

### Established finding
**Confidence: HIGH**

Martin et al. 2025 explicitly note that actions may alter probabilities of multiple outcomes.

If the target becomes:

> risk of A and B under treatment strategy Z,

this enters counterfactual prediction.

### Cross-pass rule

PASS-06B11 applies:

- factual multiple-outcome prediction;
- counterfactual multiple-outcome prediction

must remain distinct.

---

# Part AC — Fitness/exercise translations

## 45. Separate marginal risks

At program start:

- 12-week injury risk = 15%;
- 12-week dropout risk = 30%.

If the coach uses each probability separately, two marginal models may be sufficient.

Classification:

> multiple outcomes, marginal-risk targets.

---

## 46. Joint injury + dropout risk

Question:

> What is probability the trainee both gets injured and drops out within 12 weeks?

This is:

`P(injury AND dropout)`.

Do not calculate this as:

`P(injury) × P(dropout)`

unless conditional independence is defensible.

Classification:

> joint multiple-outcome prediction.

---

## 47. Composite adverse-outcome model

Target:

> injury OR dropout OR medical interruption within 12 weeks.

This can be a binary composite model.

But a 40% composite risk does not reveal:

- which component dominates;
- whether the components imply the same intervention.

Classification:

> composite-outcome prediction.

---

## 48. Outcome-combination model

Possible 12-week states:

1. no injury, no dropout;
2. injury only;
3. dropout only;
4. both injury and dropout.

A multinomial model can predict all four combination probabilities.

Classification:

> multiple-outcome joint-risk model implemented through a multicategory representation.

---

## 49. Adaptation benefit vs injury harm

Decision:

> increase training load?

Relevant outputs may include:

- probability of high strength adaptation;
- probability of injury.

If the decision requires balancing benefit and harm, a composite:

> “good adaptation OR injury”

would be scientifically incoherent.

The two outcomes should remain distinguishable in the decision model.

---

# Part AD — Structural record produced by PASS-06B19

## 50. Multiple-outcome prediction record

For each study, record:

1. model identifier/version;
2. diagnostic/prognostic purpose;
3. prediction startpoint;
4. horizon;
5. number of distinct underlying outcomes;
6. outcome definitions;
7. outcome types:
   - binary;
   - continuous;
   - time-to-event;
   - mixed;
8. outcomes mutually exclusive?;
9. outcomes can co-occur?;
10. outcomes temporally ordered?;
11. competing events present?;
12. primary risk estimand:
    - single outcome;
    - competing outcome;
    - composite;
    - marginal risks;
    - joint outcome combination;
13. composite definition if used;
14. individual composite components;
15. components require same action? YES/NO/UNCLEAR;
16. component importance/severity;
17. component frequencies;
18. component-specific predictor relationships examined?;
19. marginal probabilities predicted?;
20. joint probabilities predicted?;
21. all outcome combinations predicted?;
22. conditional independence assumed?;
23. assumption justified/tested?;
24. residual outcome dependence modelled?;
25. modelling family:
    - separate univariate;
    - multinomial combination model;
    - classifier chain;
    - multivariate probit/logit;
    - copula;
    - joint survival;
    - latent variable;
    - other;
26. development data;
27. internal validation?;
28. external validation?;
29. marginal calibration?;
30. joint calibration?;
31. outcome-wise discrimination?;
32. joint/multicategory discrimination?;
33. overall/multivariate error?;
34. decision utility?;
35. outcome-specific utilities/actions?;
36. counterfactual/intervention target?;
37. overlap with:
    - multicategory;
    - competing risk;
    - multistate;
    - recurrent events;
38. final project classification;
39. unresolved dependence/decision/applicability issues.

---

# Practical rules produced by PASS-06B19

1. Multiple-outcome prediction is defined by the outcome/risk estimand, not by the word “multivariate”.
2. Multivariable means multiple predictors; multiple-outcome means multiple outcome variables.
3. A model can target one outcome even when many other outcomes are available.
4. Current methodology distinguishes at least single-outcome, competing-outcome, composite-outcome and joint-combination risk estimands.
5. Marginal risk for outcome A and marginal risk for outcome B are separate probabilities.
6. Marginal risks alone do not determine the joint probability that A and B co-occur.
7. Multiplying marginal probabilities assumes conditional independence given predictors.
8. Residual outcome dependence can make such multiplication badly miscalibrated.
9. Separate single-outcome models can still be adequate when only marginal risks are required.
10. Joint modelling is required when the scientific decision depends on outcome co-occurrence/combinations.
11. Joint risk can be represented by mutually exclusive outcome-combination categories.
12. A multinomial model is one way to estimate a coherent distribution over joint combinations.
13. Other joint-risk methods include classifier chains, multivariate probit/logit, copulas and joint survival approaches.
14. A composite outcome predicts whether any component occurs and intentionally discards component identity in the main risk estimate.
15. Composite endpoints can increase event frequency but statistical convenience does not prove decision relevance.
16. Composite components can differ in frequency, severity, actionability and predictor relationships.
17. A composite model can be misleading if its performance is driven mainly by one component.
18. Important composite components should be inspected separately when they imply different actions or importance.
19. Composite risk and competing-risk prediction are different estimands.
20. Co-occurring outcomes differ from competing outcomes because the joint state can actually occur.
21. The same outcome pair can support different estimands: marginals, composite, joint combination, sequential/pathway or competing first event.
22. Joint time-to-event risks also require dependence-aware methods when both outcomes can occur.
23. Mixed-type multiple-outcome prediction exists but remains comparatively underdeveloped in applied CPM research.
24. Development should define the risk estimand before choosing the statistical/ML method.
25. Multiple-outcome models can become rapidly more complex as the number of possible combinations increases.
26. Predictors need not have the same direction/magnitude of association across outcomes.
27. Validation must evaluate the exact target estimand.
28. Good marginal calibration does not prove good joint calibration.
29. A single average AUC does not validate a multiple-outcome prediction system.
30. Performance can be evaluated outcome-wise, combination-wise and individual-profile-wise; these are different targets.
31. Decision-analytic context determines whether marginal, composite or joint risks are actually needed.
32. Full joint modelling is unnecessary if the real decision only needs separate marginal risks.
33. A multicategory representation of outcome combinations is statistically valid, but the underlying scientific question remains multiple-outcome.
34. Multicategory single-outcome prediction and multiple-outcome prediction are distinct because the latter outcomes can co-occur.
35. Multistate models are preferable when transition order/path through time is itself the target.
36. Recurrent-event and multiple-outcome axes can coexist and should be recorded separately.
37. Prediction of multiple outcomes under hypothetical treatment strategies is counterfactual and follows PASS-06B11 causal requirements.
38. Minimum project architecture:
    **decision context → distinct outcomes → mutual exclusivity/co-occurrence → exact risk estimand (marginal/composite/competing/joint) → dependence assumptions → model family → target-matched validation/performance → utility/action structure**.

---

# Evidence limitations

1. Multiple-outcome prediction is an active methodology area and terminology remains inconsistent.
2. The 2025 BMC Medicine taxonomy is a methodological/debate framework rather than a formal universal consensus standard, although it is highly useful for structuring the field.
3. Joint-risk calibration/performance methods are less standardized than ordinary binary prediction.
4. Mixed-type multiple-outcome models are uncommon in applied CPM work.
5. Decision utility with several outcome-specific utilities/actions can require more elaborate multi-criteria or decision-analytic methods.
6. Causal/counterfactual prediction of multiple outcomes remains a further methodological layer.

---

# Gap status after PASS-06B19

The second of three blockers identified by PASS-06B17 is now covered at taxonomy level.

Remaining before repeat final audit:

1. **PASS-06B20 — diagnostic outcome-dependent sampling and absolute-probability recovery**;
2. then **PASS-06B21 — repeat final prediction-branch gap audit**;
3. synthesis only if B21 finds no further blocking gap.

## Next micro-pass

**RES-02 / PASS-06B20 — diagnostic outcome-dependent sampling and absolute-probability recovery: one-gate vs two-gate diagnostic sampling, nested/non-nested case-control, class balancing, true prevalence, sampling-fraction weighting/recalibration, discrimination vs calibration, PPV/NPV and representative external validation.**

STOP after this saved micro-pass.
