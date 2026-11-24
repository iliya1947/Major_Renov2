# RES-02 / PASS-06B9 — Prediction-model impact and utility study structures

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. statistical predictive performance vs decision utility vs actual impact;
2. clinical/practical utility as decision-analytic evidence;
3. net benefit / decision-curve analysis at design-taxonomy level;
4. why utility analysis is not the same as real-world impact;
5. prediction-model impact/effectiveness studies;
6. model + downstream decision rule as a compound intervention;
7. assistive vs directive model use;
8. randomized individual impact trials;
9. cluster-randomized impact trials;
10. stepped-wedge cluster-randomized impact trials;
11. why clustering/contamination often matters;
12. before-after / interrupted implementation alternatives;
13. outcomes for impact studies:
   - decision behavior;
   - management/process;
   - patient/participant outcomes;
   - harms;
   - workload/resource/cost outcomes;
14. implementation fidelity and uptake;
15. boundary between prediction evidence and intervention-effect evidence;
16. structural record for utility/impact studies.

Не покрывается здесь:

- detailed decision-curve formulas;
- detailed cost-effectiveness methods;
- full implementation-science taxonomy;
- full cluster-RCT statistical methods;
- sample-size calculations for impact trials;
- detailed stepped-wedge analysis;
- mediation analysis of impact mechanisms;
- causal treatment-effect prediction;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 1

Moons KGM, Hayden J, Williams K, Riley RD.  
**Chapter 1: Prognosis and types of prognosis research in healthcare.**  
Draft version: **March 2026**.

Current official Cochrane chapter checked 2026-11-17.

Key current guidance:

- prediction-model impact/effectiveness studies come **after** model development/evaluation;
- they quantify whether actual model use changes decision making/management and whether this improves health/healthcare outcomes;
- a prediction model **combined with downstream model-based decisions** is treated as a healthcare intervention;
- impact studies therefore require comparative intervention-study designs, preferably randomized;
- reviews of impact/effectiveness studies belong under intervention-review methodology, not prognosis-review methodology.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### Source-status note

The Cochrane Prognosis Handbook remains a **draft March 2026** and must be version-checked again during closure/audit.

---

## 2. Cochrane Prognosis Handbook — Chapter 3

**Chapter 3: Statistical measures in prognosis research.**  
Current official Cochrane material checked 2026-11-17.

Key utility guidance:

- model performance for decision making should not be summarized only by calibration/discrimination;
- clinical utility can be quantified using **net benefit**;
- utility depends on the action threshold at which a prediction triggers a decision;
- threshold(s) should be clinically/practically justified and ideally prespecified, not chosen because the observed decision curve looked favorable;
- model utility should be compared with alternative decision strategies such as treat/action-all, treat/action-none, or competing models.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-3-statistical-measures-prognosis-research

---

## 3. Efthimiou et al. — Developing clinical prediction models

**Developing clinical prediction models: a step-by-step guide.**  
BMJ. 2024;386:e078276.

Key points:

- a model may discriminate and calibrate well yet have little practical decision value;
- decision-analytic methods can assess whether model-guided decisions offer benefit over alternatives;
- decision-curve analysis is affected by predictive optimism and should not be treated as a substitute for good model validation;
- DCA does not itself tell investigators what threshold should be chosen.

https://www.bmj.com/content/386/bmj-2023-078276

---

## 4. Riley et al. — External validation supplement on net benefit

BMJ 2024 supplementary guidance.

Key points:

- net benefit evaluates model-guided decisions at a specified threshold;
- utility must be interpreted relative to the threshold and comparator strategies;
- the observed event proportion in the evaluation setting affects net-benefit quantities.

https://www.bmj.com/content/bmj/suppl/2024/01/15/bmj-2023-074820.DC1/rilr074820.ww.pdf

---

## 5. Kappen et al. — Evaluating prediction-model impact

**Evaluating the impact of prediction models: lessons learned, challenges, and recommendations.**  
2018.

Key impact-study guidance:

- impact studies assess actual use of a prediction model on decision making and patient outcomes;
- prospective comparative studies are required;
- cluster randomization is often especially appropriate because model use changes clinician/team behavior;
- individual randomization can suffer contamination/learning effects;
- non-randomized before-after designs are alternatives but are more vulnerable to secular trends/confounding.

https://pmc.ncbi.nlm.nih.gov/articles/PMC6460651/

---

## 6. Moons/Steyerberg prognosis-impact framework

**Prognosis and prognostic research: application and impact of prognostic models in clinical practice.**  
BMJ. 2009;338:b606.

Used as foundational support for:

- validation studies and impact studies answering different questions;
- impact studies requiring a comparator/control condition;
- randomized designs being preferred for impact evaluation;
- possible outcomes including clinician behavior, patient outcomes and cost-effectiveness.

https://www.bmj.com/content/338/bmj.b606

---

## 7. AHA Scientific Statement — predictive and clinical utility

**Criteria to Assess the Predictive and Clinical Utility of Novel Models, Biomarkers, and Tools for Risk of Cardiovascular Disease.**  
AHA Scientific Statement, 2026.

Current publication checked 2026-11-17.

Relevant concepts:

- clinical actionability goes beyond predictive performance;
- useful impact can concern decision making, patient behavior, clinical outcomes, utilization and costs;
- potential harms/costs of model-driven actions must be considered;
- DCA can represent expected clinical utility over plausible thresholds, but does not itself prove real-world implementation effectiveness.

https://pmc.ncbi.nlm.nih.gov/articles/PMC13067998/

---

## 8. GOLDEN BRIDGE II — contemporary cluster-randomized example

BMJ. 2026;392:e085810.

Example used only to verify contemporary implementation design:

- multicentre cluster-randomized trial;
- hospitals randomized to decision-support intervention vs usual care;
- outcomes included both process-of-care quality and patient clinical outcomes.

This is not used as generic proof about all prediction models, only as a current example of cluster-level evaluation of decision-support implementation.

https://www.bmj.com/content/392/bmj-2025-085810

---

# Part A — Three different evidence layers

## 1. Predictive performance

### Established finding
**Confidence: HIGH**

Predictive performance asks:

> How accurately does the model predict outcomes?

Typical domains:

- calibration;
- discrimination;
- overall prediction error/performance.

This is necessary evidence.

It is **not sufficient** to prove that using the model improves decisions or outcomes.

---

## 2. Decision utility

### Established finding
**Confidence: HIGH**

Decision utility asks:

> If predictions are used to trigger an action at a specified threshold, would this decision strategy be expected to yield more benefit than harm compared with alternatives?

This is a **decision-analytic** question.

Typical evidence:

- net benefit;
- decision curves;
- comparison with:
  - act/treat all;
  - act/treat none;
  - another model;
  - existing decision rule.

---

## 3. Actual impact/effectiveness

### Established finding
**Confidence: HIGH**

Impact asks:

> When real users actually use the model in practice and act on its outputs, does the model-guided strategy change decisions/processes and improve meaningful outcomes?

This requires implementation of the complete strategy in practice.

### Project architecture

`predictive performance → potential decision utility → actual model-guided impact`

These layers must never be collapsed.

---

# Part B — Good prediction does not imply useful decisions

## 4. High discrimination/calibration can coexist with low utility

### Established finding
**Confidence: HIGH**

A statistically accurate model can have low practical value if:

- predictions do not change any decision;
- action thresholds are implausible;
- model-based actions have little benefit;
- harms/costs of false positives are substantial;
- intervention triggered by the model is ineffective;
- model duplicates an already adequate simpler strategy.

### Project rule

Do not translate:

> high AUC / good calibration

into:

> model should be used.

---

# Part C — Decision-curve analysis is potential utility, not impact trial evidence

## 5. Net benefit

### Established finding
**Confidence: HIGH**

Net benefit weighs:

- benefit of correctly acting on high-risk predictions;
- harm/cost of unnecessary action among false positives;

according to a specified decision threshold.

The threshold represents the risk level at which the expected benefit of action balances the expected harm/burden of action.

---

## 6. Threshold must correspond to a real decision

### Established finding
**Confidence: HIGH**

A decision curve is interpretable only if the threshold range corresponds to plausible decisions.

Example:

> start an additional monitoring/intervention strategy if predicted dropout risk exceeds X%.

If no actionable decision is attached to the prediction, "clinical/practical utility" is less straightforward.

---

## 7. Threshold should not be chosen from the same favorable curve post hoc

### Established finding
**Confidence: HIGH**

Cochrane Chapter 3 explicitly warns that a threshold should not be selected simply because the observed net-benefit analysis looked favorable there.

Thresholds should instead be informed by:

- benefits;
- harms;
- burden;
- costs;
- stakeholder preferences;
- real operational constraints.

---

## 8. DCA does not prove real-world outcome improvement

### Established finding
**Confidence: HIGH**

Decision-curve analysis estimates **potential decision value under its assumptions**.

It does not directly observe:

- whether users follow the recommendation;
- whether implementation changes behavior;
- whether downstream interventions are delivered correctly;
- whether health/performance outcomes improve;
- whether workload harms appear;
- whether the model causes unintended behavior.

### Project rule

Classify DCA as:

> decision-analytic utility evidence,

not:

> model impact/effectiveness evidence.

---

# Part D — Model-guided strategy is the actual intervention

## 9. Prediction model alone is not usually the causal intervention

### Established finding
**Confidence: HIGH**

Cochrane 2026 makes the critical distinction:

> the intervention is the **prediction model combined with the subsequent model-based decisions**.

Canonical intervention:

`model input → prediction → communication → decision rule → action → downstream consequence`

### Project consequence

Impact cannot be inferred from prediction accuracy alone because causal benefit depends on all downstream links.

---

## 10. Same model can have different impact under different decision pathways

### Project synthesis
**Confidence: HIGH**

Model A can be used:

- only for counselling;
- to trigger extra testing;
- to change training volume;
- to allocate coaching;
- to refer to medical evaluation.

These are different interventions.

Therefore impact evidence belongs to:

> model version + display/communication + decision rule + downstream action pathway + setting

not just the mathematical model.

---

# Part E — Assistive vs directive use

## 11. Assistive model

### Established finding
**Confidence: HIGH**

Assistive use provides:

- probability/risk estimate;
- or risk category;

while leaving the ultimate decision largely to the professional/user.

Potential effect depends strongly on:

- interpretation;
- trust;
- prior beliefs;
- workflow;
- user expertise.

---

## 12. Directive model

### Established finding
**Confidence: HIGH**

Directive use links prediction to an explicit recommendation or management rule.

Example:

> if risk ≥ threshold, perform action X.

This creates a more standardized intervention pathway.

### Project rule

Impact studies must record whether model use is:

- assistive;
- directive;
- hybrid.

The same prediction model can have different impact depending on this implementation layer.

---

# Part F — Preferred impact design: randomized comparison

## 13. Why comparative design is required

### Established finding
**Confidence: HIGH**

Impact asks for the **effect of using the model-guided strategy**.

Therefore outcomes under model use must be compared against an alternative such as:

- usual care;
- existing rule;
- simpler decision strategy;
- model-blinded workflow.

A single exposed cohort after implementation cannot by itself separate model impact from secular changes.

---

## 14. Individual randomized impact trial

### Established finding
**Confidence: HIGH**

Participants can be randomized to:

- model-guided strategy;
- control/usual strategy.

This is most plausible when contamination between arms is limited.

### Structure

`eligible participants → randomize model-guided vs control → downstream decisions/actions → outcomes`

---

# Part G — Cluster-randomized impact trials

## 15. Why cluster randomization is often attractive

### Established finding
**Confidence: HIGH**

Prediction tools often modify behavior at the level of:

- clinician;
- coach;
- team;
- practice;
- hospital;
- gym;
- organization.

If the same professional manages intervention and control individuals, repeated exposure to the model may change behavior in control cases.

This is **contamination/learning spillover**.

### Project rule

When model use changes provider/team workflow, cluster randomization should be considered structurally, not treated as a mere statistical detail.

---

## 16. Cluster unit must match implementation pathway

### Project synthesis
**Confidence: HIGH**

Potential cluster units:

- professional;
- team;
- clinic;
- hospital;
- gym;
- training group.

Choose according to where contamination/implementation occurs.

Example:

If the coach sees risk scores and changes general coaching behavior, randomizing individual trainees under the same coach may not preserve a clean control condition.

---

# Part H — Stepped-wedge cluster-randomized design

## 17. Structure

### Established finding
**Confidence: HIGH**

In a stepped-wedge cluster-randomized trial:

1. clusters begin in control/usual practice;
2. clusters cross over to the intervention at randomized/staggered times;
3. eventually all clusters may receive the intervention;
4. outcomes are compared while accounting for calendar time and clustering.

---

## 18. Why it can fit implementation impact

### Established finding
**Confidence: HIGH**

Stepped-wedge designs can be useful when:

- implementation must be rolled out sequentially;
- intervention operates at organization/team level;
- all sites are expected eventually to receive it.

Contemporary predictive-decision-support trials use this architecture.

### Important limitation

Because intervention status is strongly related to calendar time, secular trends must be modeled/handled.

Detailed stepped-wedge methodology belongs to intervention-design topics, not this prognosis taxonomy pass.

---

# Part I — Non-randomized impact alternatives

## 19. Before-after study

### Established finding
**Confidence: HIGH**

Simple structure:

`outcomes before implementation → deploy model-guided strategy → outcomes after implementation`

This can estimate whether outcomes changed after adoption.

### Major limitation

Change can reflect:

- secular trends;
- staffing;
- other interventions;
- changing population;
- learning unrelated to model;
- measurement changes.

Therefore causal attribution is weaker than randomized comparison.

---

## 20. Controlled before-after / interrupted time series

### Project taxonomy
**Confidence: HIGH**

Stronger non-randomized alternatives may include:

- controlled before-after;
- interrupted time series;
- difference-in-differences-like comparisons;
- prospective comparative implementation designs.

These belong to the intervention/quasi-experimental family already covered in RES-02/PASS-03.

### Project rule

A prediction-model impact study does not create a new causal-design universe.

Once the model-guided strategy becomes the intervention, use the established intervention-effect design taxonomy.

---

# Part J — Impact outcomes form a causal chain

## 21. Decision behavior

Possible outcomes:

- changed risk classification;
- changed recommendation;
- changed referral;
- changed training prescription;
- changed monitoring decision.

These show that the model **affected decisions**.

They do not yet prove improved participant outcomes.

---

## 22. Process/management outcomes

Examples:

- intervention uptake;
- testing rate;
- monitoring frequency;
- referral timing;
- treatment/training modification;
- resource allocation.

These test whether model-guided decisions alter actual management.

---

## 23. Participant/patient outcomes

Examples:

- morbidity;
- injury;
- functional outcome;
- adherence;
- performance;
- quality of life;
- mortality;
- adverse events.

These are closer to the ultimate purpose of the model-guided strategy.

---

## 24. Resource/workflow outcomes

Impact may also involve:

- clinician/coach workload;
- alert burden;
- consultation time;
- testing volume;
- cost;
- equipment use;
- staffing;
- workflow disruption.

A strategy can improve prediction-driven actions yet impose large system burdens.

---

# Part K — Fidelity and uptake are part of impact interpretation

## 25. Assigned model use is not the same as actual use

### Established methodological principle
**Confidence: HIGH**

Impact depends on:

- whether the model was available;
- whether users opened/viewed it;
- whether predictions were understood;
- whether recommended actions were followed;
- whether downstream intervention was delivered.

### Project consequence

A null impact can result from:

1. ineffective model-guided strategy;
2. low implementation fidelity;
3. low uptake/adherence;
4. weak downstream intervention;
5. contamination.

Impact-study records must therefore capture implementation pathway.

---

# Part L — Prediction evidence vs intervention evidence

## 26. Boundary rule

### Established finding
**Confidence: HIGH**

Once the question becomes:

> Does using this prediction model to guide action improve outcomes?

the study is no longer merely prognosis research.

It is an **intervention-effectiveness question**.

Cochrane explicitly routes systematic reviews of model impact/effectiveness to the Cochrane Handbook for Interventions.

### Project classification

Store two layers:

1. prediction-model evidence:
   - development;
   - validation;
   - utility;
2. model-guided intervention evidence:
   - randomized/quasi-experimental impact studies.

---

# Part M — Why model impact is not attributable to model accuracy alone

## 27. Compound-intervention problem

### Project synthesis
**Confidence: HIGH**

Observed impact depends on:

1. predictive performance;
2. calibration in deployment setting;
3. risk threshold;
4. how prediction is displayed;
5. user interpretation;
6. action rule;
7. availability/effectiveness of downstream action;
8. adherence to action;
9. contamination;
10. system context.

Therefore:

> positive impact does not prove that the mathematical model alone caused the benefit.

It supports the **implemented model-guided strategy as a whole**.

---

## 28. Negative impact does not automatically invalidate the prediction model

### Project synthesis
**Confidence: HIGH**

A well-calibrated model can fail to improve outcomes if:

- no effective action exists;
- users ignore predictions;
- workflow prevents intervention;
- alerts cause fatigue;
- action harms outweigh benefits.

Therefore impact failure must be decomposed into:

- model performance;
- decision policy;
- implementation;
- downstream intervention.

---

# Part N — Model-guided strategy vs risk-stratified treatment-effect prediction

## 29. Risk-based action is not automatically treatment-effect prediction

### Established inference
**Confidence: HIGH**

A prognostic model may identify people at high baseline risk.

That does not prove those people gain a larger **relative treatment effect**.

A model-guided strategy can still be beneficial if:

- treatment has roughly constant relative effect;
- absolute benefit increases with baseline risk.

But this is conceptually different from identifying a true treatment-effect modifier.

### Project rule

Keep separate:

- prognosis/risk stratification;
- treatment-effect heterogeneity;
- impact of a risk-guided intervention strategy.

---

# Part O — Fitness/exercise translations

## 30. Prediction performance only

Model:

> predicts 12-week dropout probability.

Evidence:

- good calibration;
- good discrimination.

Conclusion allowed:

> model predicts dropout reasonably in evaluated populations.

Not allowed:

> using it will improve adherence.

---

## 31. Decision utility

Policy:

> trainees above 30% predicted dropout risk receive extra coach contact.

Decision analysis suggests positive net benefit versus contacting everyone/no one across plausible thresholds.

Conclusion allowed:

> strategy has potential decision utility under stated assumptions.

Not yet allowed:

> extra model-guided contact actually improves completion.

---

## 32. Individual randomized impact trial

Participants randomized to:

- model-guided coaching;
- usual coaching.

Outcome:

- program completion/adherence.

Classification:

> randomized impact/effectiveness trial of model-guided strategy.

---

## 33. Cluster-randomized gym impact trial

Gyms randomized to:

- model dashboard + risk-triggered coaching;
- usual workflow.

Why cluster design:

- same coaches would otherwise learn/transfer behavior between intervention and control trainees.

Outcomes:

- coaching actions;
- adherence;
- dropout;
- workload;
- adverse effects.

Classification:

> cluster-randomized impact trial.

---

## 34. Stepped-wedge gym rollout

Ten gyms cross over from usual care to model-guided coaching at randomized rollout dates.

Potential use:

- operational necessity to deploy gradually;
- organization-level intervention.

Need:

- time adjustment;
- cluster-aware analysis;
- implementation-fidelity tracking.

---

# Part P — Structural record produced by PASS-06B9

## 35. Utility/impact record

For each model-utility or impact study, record:

1. model/version;
2. prediction target;
3. validation status before impact study;
4. intended decision;
5. threshold(s);
6. threshold rationale;
7. comparator decision strategy;
8. utility analysis performed?;
9. utility measure:
   - net benefit;
   - decision curve;
   - other;
10. utility evaluated in:
   - development data;
   - internally validated predictions;
   - external validation data;
11. model optimism accounted for before utility analysis?;
12. impact study performed? YES/NO;
13. model use:
   - assistive;
   - directive;
   - hybrid;
14. downstream action rule;
15. intervention = model + decision rule + downstream action clearly specified?;
16. comparator:
   - usual care;
   - existing rule;
   - alternative model-guided strategy;
17. impact design:
   - individual randomized;
   - cluster randomized;
   - stepped-wedge cluster randomized;
   - controlled before-after;
   - interrupted time series;
   - simple before-after;
   - other;
18. randomization unit;
19. contamination risk;
20. participant/provider blinding if relevant;
21. uptake of model;
22. adherence to recommendation/action;
23. implementation fidelity;
24. decision-behavior outcomes;
25. process/management outcomes;
26. participant/patient outcomes;
27. harms;
28. workload/resource outcomes;
29. costs/cost-effectiveness if reported;
30. follow-up horizon;
31. secular trends addressed?;
32. cluster/time effects addressed?;
33. result supports:
   - predictive performance only;
   - potential decision utility;
   - decision/process impact;
   - patient/participant outcome impact;
34. generalisability of impact setting;
35. unresolved implementation/causal issues.

---

# Practical rules produced by PASS-06B9

1. Predictive performance, decision utility and actual impact are three distinct evidence layers.
2. Good calibration/discrimination are necessary for trustworthy prediction but do not prove practical benefit.
3. Decision-curve/net-benefit analysis estimates potential decision utility, not observed real-world impact.
4. Utility depends on a concrete decision and clinically/practically plausible threshold.
5. Thresholds should not be selected post hoc simply because the decision curve is favorable there.
6. Decision utility should compare the model-guided strategy with realistic alternatives.
7. A prediction model plus its downstream decision/action pathway is the effective intervention in an impact study.
8. The same mathematical model can have different impact under different action pathways.
9. Assistive and directive implementations should be recorded separately.
10. Impact/effectiveness requires a comparative intervention design.
11. Randomized impact studies provide the strongest direct causal design when feasible.
12. Cluster randomization is often appropriate when model exposure changes provider/team behavior and contamination is likely.
13. The cluster unit should correspond to the level where implementation/learning occurs.
14. Stepped-wedge cluster randomization can suit staggered organizational rollout but requires explicit handling of time.
15. Before-after studies are weaker because secular changes can mimic impact.
16. Controlled quasi-experimental designs can strengthen non-randomized impact evidence.
17. Model impact can occur first on decision behavior/process and only later on participant outcomes.
18. Decision/process improvement does not automatically prove improved health/performance outcomes.
19. Harms, workload and resource consequences belong in impact evaluation.
20. Implementation fidelity and uptake are necessary to interpret null or positive impact.
21. Once the question is “does using the model improve outcomes?”, the evidence belongs to intervention-effect methodology, not prognosis methodology alone.
22. Prognostic risk is not the same as treatment-effect modification.
23. Positive impact supports the entire implemented model-guided strategy, not the mathematical model in isolation.
24. Negative impact does not automatically mean the prediction model itself is inaccurate.
25. Minimum project architecture:
   **validated prediction model → plausible decision threshold/policy → decision-analytic utility → explicit model-guided intervention → comparative impact study → process + outcome + harm/resource evaluation**.

---

# Important boundary finding

Cochrane 2026 explicitly places prediction-model impact/effectiveness studies **outside** the main scope of the Prognosis Handbook once the model and subsequent decisions become an intervention.

This means RES-02 should preserve the taxonomy link but avoid duplicating the detailed randomized/quasi-experimental methodology already stored in:

- PASS-02 randomized experimental designs;
- PASS-03 nonrandomized/quasi-experimental designs.

The prognosis branch's responsibility is to identify **when the scientific question crosses that boundary**.

---

# What remains unresolved after PASS-06B9

The prognosis/prediction branch remains **RESEARCHING**.

Still requires separate deep blocks on at least:

1. performance-estimand architecture:
   - discrimination;
   - calibration;
   - overall fit;
   - utility;
   - which study phase each belongs to;
2. treatment-context problems:
   - predictions under treatment;
   - heterogeneous treatment patterns;
   - treatment paradox / prediction-use feedback if relevant;
3. dynamic prediction / time-updated prediction if required;
4. continual model updating if required;
5. integration check against diagnostic prediction;
6. structural synthesis of PASS-06B1…B9;
7. dedicated gap/audit pass.

## Next micro-pass

**RES-02 / PASS-06B10 — prediction-performance estimand architecture: discrimination, calibration, overall performance, absolute-risk scale, decision utility, horizon-specific performance, and how these targets map to development/internal/external validation studies without drifting into detailed statistics.**

STOP after this saved micro-pass.
