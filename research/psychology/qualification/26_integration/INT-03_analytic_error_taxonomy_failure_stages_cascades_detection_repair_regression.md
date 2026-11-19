# INT-03 — Analytic error taxonomy: failure stages, cascades, detection, severity, repair, and regression control

Status: **CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS**

Evidence cutoff: **2026-11-19**

Scope: integration of existing generic analytic failure modes across the psychology qualification stack. No individualized psychological material is included.

## Purpose

The repository already contains:

- methodology-specific failure prevention;
- hundreds of domain-level invalid inference examples;
- 31 reusable ERROR_LEDGER regression classes;
- INT-01 cross-domain typing and override rules;
- INT-02 proposition-level evidence-to-individual transfer and model-update rules.

The remaining integration problem is not finding more examples.

It is deciding:

> When a psychological inference goes wrong, where in the reasoning pipeline did it fail, how does the error propagate, what other error classes can coexist with it, how should the failure be detected, and what must be repaired before the conclusion can be reused?

INT-03 creates one stage-based taxonomy.

The taxonomy is designed for:

1. diagnosis of reasoning failures;
2. regression prevention;
3. future reusable checklists;
4. private-model correction;
5. high-stakes escalation;
6. error logging without storing private cases.

Canonical rule:

**Classify the earliest material inferential failure, not merely the most visible wrong conclusion. Then trace all downstream propositions that depended on it.**

Never:

- wrong answer -> only possible evidence of error;
- correct answer -> reasoning validated;
- one error label -> whole chain explained;
- downstream wording fix -> upstream model repaired;
- same guardrail -> universal prohibition;
- uncertainty -> error;
- disagreement -> error;
- scientific controversy -> reasoning failure;
- high stakes -> certainty;
- correction -> isolated local edit when dependents exist.

---

# I. Question Card

## 1. Concrete dependency

Existing ERROR_LEDGER classes are useful but historically accumulated.

Domain qualification blocks contain many more failure modes such as:

- score = construct;
- behavior = trait;
- state = trait;
- correlation = mechanism;
- age = cause;
- neural activation = psychological mechanism;
- one task = global ability;
- group pattern = individual fact;
- discharge = safe;
- referral = linkage;
- validation = agreement;
- risk choice = incapacity;
- model fit = validity.

Without a taxonomy, the same root failure can be:

- logged several times under different domain labels;
- repaired only at the surface;
- missed because the final answer happens to be correct;
- assigned to the wrong domain;
- repeated in a new form.

## 2. Target

Create one taxonomy organized by **where the inference fails**, not by which domain produced the example.

## 3. Required taxonomy stages

1. purpose/scope/governance;
2. construct/claim typing;
3. measurement/provenance;
4. design/causality/bias;
5. synthesis/generalization/applicability;
6. individual transfer;
7. temporal/state-trait/development;
8. cross-domain/level translation;
9. confidence/calibration/evidence dependence;
10. ethics/privacy/contestability;
11. safety/action/authority;
12. model maintenance/versioning.

## 4. Closure criterion

INT-03 closes only if:

- every existing ERR-001…031 can be routed;
- domain-level failures can be treated as instances of reusable root classes;
- errors can be multi-label rather than forced into one category;
- root cause and downstream manifestation are separated;
- correct-output/invalid-reasoning cases are represented;
- error cascades are explicit;
- severity/stakes are represented without changing truth;
- repair protocol reaches downstream dependencies;
- new reusable meta-errors are added only where current ledger lacks them;
- the taxonomy remains generic and privacy-safe.

---

# II. What counts as an analytic error

## 5. Analytic error

An analytic error occurs when a reasoning operation produces or maintains a proposition, confidence level, use permission, or action that is not justified by the available evidence, purpose, role, or governing constraints.

## 6. Error is not identical to a false conclusion

A conclusion can be:

- false because reasoning was invalid;
- false despite reasonable reasoning under uncertainty;
- true despite invalid reasoning;
- true for the wrong reason;
- unresolved.

Therefore:

**truth of the final answer and validity of the reasoning path are separate audit targets.**

## 7. Uncertainty is not an error

If evidence genuinely does not discriminate H1 from H2, retaining uncertainty is correct.

## 8. Scientific disagreement is not automatically an error

Competing theories can remain live when discriminating evidence is insufficient.

## 9. User disagreement is not automatically an error

It triggers contestability/re-evaluation.

The assistant may still retain a proposition if evidence remains stronger, but disagreement cannot be pathologized merely to protect the model.

## 10. Conservative wording is not automatically correct

An answer can be hedged yet still rely on:

- invalid construct;
- bad measurement;
- causal leap;
- stereotype backfill.

Uncertainty language does not repair an invalid inference route.

---

# III. Anatomy of an error

Every material error can be described by:

1. **trigger/input** — what information entered the reasoning chain;
2. **stage** — where the first material failure occurred;
3. **operation** — what invalid transformation was performed;
4. **output proposition** — what claim resulted;
5. **propagation** — which downstream claims depend on it;
6. **stakes** — what consequence follows if used;
7. **detectability** — what evidence reveals the failure;
8. **repair** — what must be recomputed;
9. **regression guard** — what prevents recurrence;
10. **residual uncertainty** — what remains unresolved after repair.

---

# IV. Root error versus manifestation

## 11. Root error

The earliest material invalid step.

Example:

A score is treated as direct observation of a latent trait.

Root stage:

measurement/construct interpretation.

## 12. Manifestation

A downstream symptom of the root error.

Example:

the inferred trait is then used as a causal explanation.

Manifestation:

mechanism inflation.

## 13. Why root stage matters

Fixing only:

"perhaps the mechanism is uncertain"

does not repair:

"the score never validly supported the trait interpretation."

## 14. Multi-root chains

Some failures contain more than one independent error.

Example:

- invalid measure;
- population mismatch;
- high-stakes use without oversight.

All three remain relevant.

Do not force a single label.

---

# V. Error families are nonexclusive

The taxonomy uses primary and secondary tags.

A single reasoning failure may be:

- T03 measurement;
- T05 applicability;
- T06 individual transfer;
- T09 confidence;
- T10 ethics;

at the same time.

Primary tag:

the earliest material failure.

Secondary tags:

additional violations that independently matter.

---

# VI. Taxonomy overview

| Code | Stage | Core question |
| --- | --- | --- |
| T01 | Purpose / scope / governance | Should this analysis be happening for this purpose, role, and workspace? |
| T02 | Construct / claim typing | What exactly is being claimed, and is the construct defined? |
| T03 | Measurement / provenance | What was actually observed or measured, and is its interpretation valid? |
| T04 | Design / causality / bias | Can the evidence support association, prediction, causation, or mechanism? |
| T05 | Synthesis / generalization / applicability | Does evidence transport to this population, context, time, and use? |
| T06 | Individual transfer | What person-specific evidence supports the proposition? |
| T07 | Temporal / state-trait / development | Is time, stability, onset, course, and context handled correctly? |
| T08 | Cross-domain / level translation | Are constructs or explanatory levels being silently substituted? |
| T09 | Confidence / calibration / dependence | Is certainty proportional to independent evidence? |
| T10 | Ethics / privacy / contestability | Is the use proportionate, private, fair, contestable, and purpose-bounded? |
| T11 | Safety / action / authority | Is action urgency separated from prediction and professional authority? |
| T12 | Model maintenance / versioning | Does the longitudinal model update, propagate corrections, and avoid recursion/inertia? |

---

# VII. T01 — Purpose / scope / governance failures

## 15. Definition

The analysis is misdirected before substantive psychology begins.

## 16. Failure signatures

- role/workspace drift;
- research process replacing psychological purpose;
- curriculum driven by a private case;
- control files disagree but work continues;
- private model invoked for an unrelated task;
- secondary use occurs without review;
- task does not require individualized inference.

## 17. Existing ERROR_LEDGER mapping

Primary:

- ERR-001 Role/workspace drift;
- ERR-002 Process-for-purpose substitution;
- ERR-003 Private-model-driven curriculum;
- ERR-008 Control-layer inconsistency;
- ERR-011 Purpose/data-use creep.

Secondary:

- ERR-010 Private-data leakage;
- ERR-030 Use-permission conflation.

## 18. Domain manifestations

ETH:

private data known -> surface/use automatically.

INT-02:

private model available -> psychologically relevant to every request.

## 19. Detection questions

1. What is the current purpose?
2. Is individualized inference necessary?
3. Is this role/workspace authorized for the task?
4. Has purpose changed?
5. Could generic information suffice?
6. Are control files coherent?

## 20. Repair

Stop substantive inference.

Restore:

- identity;
- purpose;
- role;
- state;
- necessity;
- scope.

Then restart from the correct question.

---

# VIII. T02 — Construct / claim-typing failures

## 21. Definition

The reasoning chain fails because the psychological target is undefined, conflated, mislabeled, or silently changes claim type.

## 22. Generic forms

- observation -> trait;
- trait -> mechanism;
- symptom -> diagnosis;
- diagnosis -> identity;
- construct label -> causal explanation;
- ability -> preference;
- frequency -> habit;
- behavior -> motive;
- state -> stable architecture.

## 23. Domain examples

AFF:

- arousal -> emotion category;
- emotion label -> mechanism.

MOT:

- nonaction -> no motivation;
- wanting -> pleasure/learning.

PER:

- behavior = trait;
- trait = mechanism;
- trait = fixed essence.

SOC:

- action = intention;
- empathy = one trait;
- cooperation = altruism.

STR:

- stressor = stress;
- distress = cortisol;
- resilience questionnaire = adaptation.

CLN:

- psychosis = schizophrenia;
- trauma = PTSD;
- mood swings = bipolar.

NDEV:

- low IQ = intellectual disability;
- pragmatic difficulty = autism;
- repetitive movement = tic.

REL:

- withdrawal = avoidant attachment;
- communication problem = attachment problem.

SAF:

- risky decision = incapacity;
- diagnosis = incapacity.

## 24. Existing ERROR_LEDGER mapping

Primary:

- ERR-005 Mechanism inflation;
- ERR-016 Cross-domain homonym collapse;
- ERR-025 Directness illusion.

Secondary:

- ERR-004 Generic-pattern backfill;
- ERR-027 Confidence inheritance.

## 25. Detection questions

1. What exact proposition is being made?
2. What claim type is it?
3. Did wording change from observation to trait/mechanism/diagnosis?
4. Does the construct have an operational definition?
5. Are same-name constructs actually equivalent?

## 26. Repair

Return to:

observation -> target construct -> claim type -> valid indicator -> narrow proposition.

---

# IX. T03 — Measurement / provenance failures

## 27. Definition

The evidence source, measure, score, proxy, or provenance is misinterpreted.

## 28. Core forms

- score = construct;
- reliability = person precision;
- model fit = validity;
- cutoff = natural category;
- proxy = mechanism;
- automated score = objective person fact;
- one task = global ability;
- missing provenance;
- observer/self-report/model output treated as ground truth.

## 29. Psychometrics examples

- measurement model = psychology;
- reliability = precision for this person;
- cSEM = all uncertainty;
- latent = error-free;
- fit = validity;
- invariance = fairness;
- DIF = bias;
- norm = universal reference;
- percentile = psychological amount;
- cutoff = natural category;
- theta difference = real change;
- RCI = important change;
- person misfit = pathology/deception;
- automated score = objective fact.

## 30. Neuroscience examples

- BOLD/activation = firing or mechanism;
- decoder = mechanism;
- neural correlate = biomarker;
- group neural difference = individual diagnosis;
- structural MRI = cellular growth;
- frequency band = psychological function;
- physiological proxy = psychological construct.

## 31. Social/personality examples

- self-report = truth;
- observer report = truth;
- IAT = hidden true belief;
- one partner report = dyadic truth;
- perceived responsiveness = objective responsiveness.

## 32. Existing ERROR_LEDGER mapping

Primary:

- ERR-007 Source-status overclaim;
- ERR-022 Provenance loss;
- ERR-025 Directness illusion;
- ERR-026 Evidence-count inflation when measurement streams overlap.

Secondary:

- ERR-005 Mechanism inflation;
- ERR-019 Downstream confidence inflation.

## 33. Detection questions

1. What was directly observed?
2. What is the raw source?
3. Is provenance recoverable?
4. Is the measure valid for this construct/use?
5. Is person-level precision adequate?
6. Is the evidence proxy or direct for the target?
7. Is model fit being substituted for validity?
8. Are sources independent?

## 34. Repair

Name the measure at its actual level.

Rebuild only those propositions supported by the validated interpretation.

---

# X. T04 — Design / causality / bias failures

## 35. Definition

The evidence may be real, but the design cannot support the claimed causal or mechanistic conclusion.

## 36. Generic forms

- association -> causation;
- temporal precedence -> causation;
- longitudinal -> causal;
- mediation -> mechanism;
- prediction -> mechanism;
- intervention response -> active ingredient;
- cross-lag -> transaction;
- contact association -> causal prejudice reduction;
- alliance correlation -> alliance causal mechanism;
- APIM partner effect -> causal influence.

## 37. Methodology origin

PSY-RES-02 primary failure:

association / temporal order / adjusted model -> causal story.

PSY-RES-04 adds:

- confounding;
- selection;
- collider bias;
- attrition;
- misclassification;
- common method;
- expectancy;
- selective reporting;
- regression to mean;
- practice/fatigue.

## 38. Domain examples

COG:

association = causation.

DEV:

- longitudinal = causal;
- cross-lagged = causal transaction;
- cascade = causal chain;
- peer similarity = influence.

BHC:

- alliance correlation = alliance mechanism;
- expectancy predicts outcome = expectancy causes outcome;
- adverse event during therapy = therapy caused it.

REL:

- APIM partner effect = causal influence;
- mediation = mechanism.

NEU:

- activation = mechanism;
- observational neural mediation = causal mechanism.

## 39. Existing ERROR_LEDGER mapping

Primary:

- ERR-005 Mechanism inflation.

Secondary:

- ERR-019 Downstream confidence inflation;
- ERR-031 Discriminating-test neglect.

## 40. Detection questions

1. What design generated the evidence?
2. What is the estimand?
3. Could confounding/reverse causation explain it?
4. Is mediation merely statistical?
5. Is prediction being mistaken for intervention effect?
6. Was the claimed mechanism manipulated/tested?

## 41. Repair

Downgrade to the strongest design-supported claim.

If mechanism matters, identify the discriminating causal evidence still needed.

---

# XI. T05 — Synthesis / generalization / applicability failures

## 42. Definition

Evidence is valid in its source setting but transferred beyond its supported population, construct, context, timescale, outcome, or use.

## 43. Generic forms

- replicated group result -> universal law;
- one population -> another population;
- youth -> adult;
- physical effort -> cognitive effort;
- one culture/language -> universal measure;
- laboratory task -> everyday trait;
- average treatment effect -> individual treatment effect;
- short follow-up -> permanence;
- network rank -> universal therapy hierarchy.

## 44. Methodology origin

PSY-RES-05 primary failure:

meta-analysis label / narrow pooled CI -> truth.

PSY-RES-06 primary failure:

replicated group effect -> universal law -> individual mechanism.

## 45. Domain examples

MOT:

physical effort findings -> cognitive effort without transport test.

DEV:

population trajectory -> individual destiny.

SAF:

youth evidence -> adult claim;
one health-system 48-hour recommendation -> universal biological/legal threshold.

BHC:

network rank -> universal hierarchy;
broad efficacy -> always best;
evidence for a therapy -> equally supported for every indication.

ETH:

validation for one use-case -> permission for another.

## 46. Existing ERROR_LEDGER mapping

Primary:

- ERR-009 Population-to-individual overtransfer;
- ERR-021 Evidence-hierarchy absolutism;
- ERR-024 Applicability shortcut.

Secondary:

- ERR-015 Validation/version permanence;
- ERR-030 Use-permission conflation.

## 47. Detection questions

1. Same construct?
2. Same measure?
3. Same population?
4. Same culture/language?
5. Same context?
6. Same timescale?
7. Same outcome?
8. Same intended use?

## 48. Repair

Label transfer as:

- directly relevant;
- relevant with limits;
- indirect;
- nontransferable;
- unknown.

Then reduce downstream confidence/use accordingly.

---

# XII. T06 — Individual-transfer failures

## 49. Definition

Generic or group evidence is incorrectly converted into a proposition about a specific person without adequate person-specific evidence.

## 50. Core forms

- stereotype backfill;
- group membership -> individual property;
- one event -> stable trait;
- one questionnaire -> whole-person architecture;
- population mechanism -> personal mechanism;
- diagnosis category -> assumed symptoms/mechanisms;
- model-generated pattern -> independent observation.

## 51. Domain examples

AFF:

group association -> person-specific mechanism.

SOC:

stereotype -> individual fact;
group effect -> individual mechanism.

PER:

one behavior -> trait.

DEC:

one decision battery -> global competence.

NEU:

group difference -> individual diagnosis/biomarker.

BHC:

average treatment effect -> person-specific treatment match.

## 52. Existing ERROR_LEDGER mapping

Primary:

- ERR-004 Generic-pattern backfill;
- ERR-009 Population-to-individual overtransfer;
- ERR-023 Private-model recursion;
- ERR-024 Applicability shortcut;
- ERR-025 Directness illusion.

Secondary:

- ERR-026 Evidence-count inflation;
- ERR-027 Confidence inheritance.

## 53. Detection questions

1. What direct person-specific evidence exists?
2. Which L0–L6 level applies?
3. Is group membership filling an unobserved feature?
4. Is the model itself being counted as evidence?
5. Are multiple independent contexts represented?
6. Is there a rival person-specific explanation?

## 54. Repair

Return person-level proposition to the evidence level actually supported.

Population evidence becomes prior/constraint, not conclusion.

---

# XIII. T07 — Temporal / state-trait / developmental failures

## 55. Definition

The inference ignores time, course, developmental origin, state variation, context dependence, or the difference between past and current evidence.

## 56. Generic forms

- state -> trait;
- historical -> current baseline;
- rank-order stability -> immutability;
- mean change -> rank instability;
- one event -> personality cause;
- late diagnosis -> late onset;
- acute episode -> enduring disorder/personality;
- current absence -> historical absence;
- age -> mechanism;
- timing association -> sensitive period.

## 57. Domain examples

PER:

- state variability = no personality;
- rank-order stability = immutability;
- short follow-up = permanence.

DEV:

- age = cause;
- age = maturation;
- sensitive = critical period;
- early risk = destiny;
- terminal decline = ordinary age effect.

NDEV:

- late diagnosis = late developmental onset;
- no tic today = no tic disorder;
- acquired loss = developmental disorder.

CLN:

- temporary crisis = personality disorder;
- developmental trait = acquired psychiatric episode.

REL:

one conflict episode -> stable relational style.

## 58. Existing ERROR_LEDGER mapping

Primary:

- ERR-028 Model-update overfitting;
- ERR-029 Model-update inertia.

Secondary:

- ERR-004 Generic-pattern backfill;
- ERR-027 Confidence inheritance.

## 59. Detection questions

1. What is the timescale?
2. Is evidence current or historical?
3. State, episode, repeated pattern, trait, developmental origin?
4. What observation window supports stability?
5. Is continuity actually measured?
6. Could context change explain apparent inconsistency?

## 60. Repair

Add time/context qualifiers.

Split propositions when conditional stability exists.

---

# XIV. T08 — Cross-domain / explanatory-level translation failures

## 61. Definition

A valid proposition at one domain or explanatory level is silently substituted for another.

## 62. Generic forms

- cognitive control = interpersonal control;
- flexibility construct A = flexibility construct B;
- psychometric validation = interpersonal validation;
- neural correlate = psychological construct;
- computation = biological mechanism;
- frequency band = function;
- trait = diagnosis;
- attachment = personality;
- stress response = resilience;
- effort = motivation.

## 63. Domain examples

NEU:

psychological construct, computation, representation, network, circuit, cell population, transmitter, and plasticity mechanism are distinct.

EXE/MOT:

capacity, allocation, subjective effort, willingness, and performance are distinct.

AFF/STR:

emotion-regulation flexibility, coping flexibility, psychological flexibility are distinct.

REL/PER/CLN:

attachment, broad personality, diagnosis are distinct.

## 64. Existing ERROR_LEDGER mapping

Primary:

- ERR-016 Cross-domain homonym collapse;
- ERR-018 Override leakage;
- ERR-020 Domain averaging;
- ERR-021 Evidence-hierarchy absolutism.

Secondary:

- ERR-005 Mechanism inflation.

## 65. Detection questions

1. What domain owns the primary claim?
2. What level is directly measured?
3. Has a same-name construct been substituted?
4. Has a lower biological level been treated as deeper by default?
5. Are two competing theories being averaged rather than discriminated?

## 66. Repair

Type:

construct + level + timescale + measurement + claim.

Then preserve valid cross-level constraints without identity claims.

---

# XV. T09 — Confidence / calibration / evidence-dependence failures

## 67. Definition

Certainty exceeds the amount, independence, validity, or discriminating value of the evidence.

## 68. Generic forms

- narrative coherence -> high confidence;
- repeated retelling -> independent confirmation;
- multiple correlated tests -> convergence;
- several AI outputs -> replication;
- downstream proposition inherits premise confidence;
- p < threshold -> truth;
- no significance -> no effect;
- one forecast outcome -> calibration;
- confidence = accuracy.

## 69. Domain examples

PSY-RES:

significance is not importance/truth/replication.

DEC:

- correct event = good forecast;
- failed event = bad forecast;
- Brier score = calibration;
- advisor confidence = quality.

MET:

- confidence calibration = good search;
- good monitoring = good control;
- good control = accurate introspection.

PSYCHOMETRICS:

cSEM is not all uncertainty.

## 70. Existing ERROR_LEDGER mapping

Primary:

- ERR-019 Downstream confidence inflation;
- ERR-026 Evidence-count inflation;
- ERR-027 Confidence inheritance;
- ERR-031 Discriminating-test neglect.

Secondary:

- ERR-007 Source-status overclaim;
- ERR-015 Validation/version permanence.

## 71. Detection questions

1. How many independent evidence paths exist?
2. Which premise is critical?
3. What is the confidence of each proposition?
4. Was a discriminating prediction successful?
5. Is confidence based on coherence rather than test?
6. Has source/model status changed?

## 72. Repair

Recompute confidence per proposition.

Discount dependence.

Return to OPEN/LOW/MODERATE when evidence does not discriminate.

---

# XVI. T10 — Ethics / privacy / contestability failures

## 73. Definition

Even scientifically plausible inference is used in a way that violates purpose limitation, privacy, fairness, role, contestability, or user agency.

## 74. Generic forms

- private data availability -> unrestricted use;
- prior disclosure -> blanket consent;
- sensitive inference generated without necessity;
- user correction ignored;
- disagreement pathologized;
- hidden profile influences unrelated decision;
- AI role represented as professional authority;
- dependency/sycophancy reinforced;
- marker scan called full privacy audit.

## 75. Existing ERROR_LEDGER mapping

Primary:

- ERR-006 Privacy-audit overclaim;
- ERR-010 Private-data leakage;
- ERR-011 Purpose/data-use creep;
- ERR-012 Contestability bypass;
- ERR-013 High-stakes authority inflation;
- ERR-014 Dependency/anthropomorphism reinforcement;
- ERR-030 Use-permission conflation.

Secondary:

- ERR-015 Validation/version permanence;
- ERR-023 Private-model recursion.

## 76. Detection questions

1. Is the inference necessary?
2. Is use purpose-bounded?
3. Is sensitive information minimized?
4. Is user challenge possible?
5. Is disagreement being converted into pathology?
6. Is subgroup/fairness validity material?
7. Is role/AI authority accurately represented?

## 77. Repair

Restrict:

- data;
- inference;
- surfacing;
- downstream use.

Reopen challenged propositions.

---

# XVII. T11 — Safety / action / authority failures

## 78. Definition

Action thresholds, risk uncertainty, capacity, referral, continuity, or professional authority are conflated with epistemic truth.

## 79. Generic forms

- urgency -> certainty;
- uncertainty -> no action;
- risky choice -> incapacity;
- refusal -> incapacity;
- diagnosis -> incapacity;
- discharge -> safe;
- referral -> linkage;
- contact -> continuity;
- safety plan -> treatment;
- remote resource sent -> handoff completed;
- hospitalization -> risk solved;
- bidirectional conflict -> equal coercion.

## 80. Existing ERROR_LEDGER mapping

Primary:

- ERR-013 High-stakes authority inflation;
- ERR-017 Action-threshold/truth-threshold conflation;
- ERR-018 Override leakage;
- ERR-030 Use-permission conflation.

Secondary:

- ERR-012 Contestability bypass.

## 81. Detection questions

1. Is the statement prediction or action recommendation?
2. Is exact risk being implied without support?
3. Is capacity decision-specific?
4. Has linkage actually occurred?
5. Is AI acting as sole authority?
6. Does local law/jurisdiction need verification?
7. Is action reversible/proportionate?

## 82. Repair

Preserve uncertainty.

Change action routing without upgrading truth.

Escalate to appropriate real-world process when required.

---

# XVIII. T12 — Model maintenance / versioning failures

## 83. Definition

A longitudinal model fails to update correctly over time or uses itself as evidence.

## 84. Core forms

- private-model recursion;
- old proposition anchors new interpretation;
- every local observation rewrites stable architecture;
- strong contradiction ignored;
- source/tool version changes but old confidence persists;
- correction does not propagate;
- no disconfirmation trigger;
- data gathering continues without discriminating value.

## 85. Existing ERROR_LEDGER mapping

Primary:

- ERR-015 Validation/version permanence;
- ERR-022 Provenance loss;
- ERR-023 Private-model recursion;
- ERR-028 Model-update overfitting;
- ERR-029 Model-update inertia;
- ERR-031 Discriminating-test neglect.

Secondary:

- ERR-012 Contestability bypass;
- ERR-019 Downstream confidence inflation;
- ERR-027 Confidence inheritance.

## 86. Detection questions

1. What changed since last version?
2. Is current evidence new or merely remembered?
3. Does the model proposition trace to raw provenance?
4. Is contradiction being absorbed?
5. Are dependencies reopened?
6. Is NO UPDATE plausible?
7. Is the next datum discriminating?

## 87. Repair

Use PRIVATE_MODEL_UPDATE_CARD v2.

Choose explicitly:

NO UPDATE / RETAIN / STRENGTHEN / WEAKEN / SPLIT / MERGE / REVISE / RETIRE / ADD.

---

# XIX. Existing ERROR_LEDGER primary routing

| Error | Primary taxonomy | Important secondary tags |
| --- | --- | --- |
| ERR-001 Role/workspace drift | T01 | T10 |
| ERR-002 Process-for-purpose substitution | T01 | T12 |
| ERR-003 Private-model-driven curriculum | T01 | T06, T10 |
| ERR-004 Generic-pattern backfill | T06 | T02, T05 |
| ERR-005 Mechanism inflation | T04 | T02, T08 |
| ERR-006 Privacy-audit overclaim | T10 | T03, T09 |
| ERR-007 Source-status overclaim | T03 | T09, T12 |
| ERR-008 Control-layer inconsistency | T01 | T12 |
| ERR-009 Population-to-individual overtransfer | T06 | T05 |
| ERR-010 Private-data leakage | T10 | T01 |
| ERR-011 Purpose/data-use creep | T01 | T10 |
| ERR-012 Contestability bypass | T10 | T12 |
| ERR-013 High-stakes authority inflation | T11 | T10 |
| ERR-014 Dependency/anthropomorphism reinforcement | T10 | T11 |
| ERR-015 Validation/version permanence | T12 | T05, T09 |
| ERR-016 Cross-domain homonym collapse | T08 | T02 |
| ERR-017 Action/truth-threshold conflation | T11 | T09 |
| ERR-018 Override leakage | T11 | T08, T10 |
| ERR-019 Downstream confidence inflation | T09 | T04, T06 |
| ERR-020 Domain averaging | T08 | T04 |
| ERR-021 Evidence-hierarchy absolutism | T05 | T08 |
| ERR-022 Provenance loss | T03 | T12 |
| ERR-023 Private-model recursion | T12 | T06 |
| ERR-024 Applicability shortcut | T05 | T06 |
| ERR-025 Directness illusion | T03 | T02, T06 |
| ERR-026 Evidence-count inflation | T09 | T03 |
| ERR-027 Confidence inheritance | T09 | T06, T12 |
| ERR-028 Model-update overfitting | T12 | T07 |
| ERR-029 Model-update inertia | T12 | T07, T09 |
| ERR-030 Use-permission conflation | T10 | T11, T09 |
| ERR-031 Discriminating-test neglect | T12 | T09 |

All ERR-001…031 have a primary route.

No existing error is orphaned.

---

# XX. Domain failure families mapped to taxonomy

## 88. PSY-RES

Primary families:

- familiar label becomes explanation -> T02;
- association becomes causation -> T04;
- score becomes fact -> T03;
- significant/adjusted result becomes trustworthy -> T04/T09;
- pooled estimate becomes truth -> T05/T09;
- replicated group effect becomes universal/person mechanism -> T05/T06;
- salient behavior becomes disorder -> T02/T06;
- subjective narrative dismissed or treated as causal proof -> T03/T04;
- generic pattern becomes person formulation -> T06.

## 89. PSYCHOMETRICS

Primary families:

- measure/model reification -> T03;
- validity/fairness conflation -> T03/T10;
- change-score overinterpretation -> T03/T07;
- cutoff reification -> T02/T03;
- automated scoring authority -> T03/T10.

## 90. COG

Primary families:

- norm violation -> cognitive deficit -> T02;
- heuristic -> bias -> T02;
- bias label -> mechanism -> T04;
- one reasoning task -> stable ability/trait -> T03/T06;
- task representation ignored -> T03/T04.

## 91. EXE

Primary families:

- nonuse -> incapacity -> T02/T06;
- objective demand -> subjective effort -> T02;
- effort -> control intensity -> T03/T08;
- demand avoidance -> laziness -> T02/T06;
- task score -> stable effort-aversion trait -> T03/T07.

## 92. MET

Primary families:

- confidence -> search policy -> T02/T04;
- more search/abstention -> better control -> T02/T09;
- help seeking -> low ability/dependence -> T02/T06;
- one control tendency -> stable self-regulation trait -> T06/T07.

## 93. LEA

Primary families:

- learning -> performance -> T02/T07;
- model-free -> habit -> T08;
- prediction error -> universal mismatch -> T08;
- retrieval -> destabilization -> T04;
- no return of responding -> erased trace -> T04/T09.

## 94. MOT

Primary families:

- nonaction -> no motivation -> T02;
- effort preference -> laziness -> T02/T06;
- opportunity cost -> sole mechanism -> T04;
- questionnaire stability -> universal trait -> T03/T07;
- physical effort -> cognitive effort -> T05/T08.

## 95. AFF

Primary families:

- arousal/face/physiology -> emotion readout -> T03;
- strategy label -> universal adaptiveness -> T02/T05;
- frequency -> skill/effectiveness -> T02;
- immediate affect reduction -> adaptation -> T05/T07;
- group association -> person mechanism -> T06.

## 96. STR

Primary families:

- stressor/distress/physiology conflation -> T02/T08;
- biomarker -> stress/resilience diagnosis -> T03/T08;
- strategy family -> universal adaptiveness -> T05;
- questionnaire -> observed resilience -> T03;
- trajectory class -> natural type -> T02/T03.

## 97. SOC

Primary families:

- behavior -> motive/personality -> T02/T06;
- empathy umbrella compression -> T02/T08;
- stereotype -> person fact -> T06;
- indirect association -> moral/behavioral truth -> T03/T04;
- group effect -> individual mechanism -> T06.

## 98. PER

Primary families:

- behavior -> trait -> T02/T06;
- trait -> fixed essence/mechanism -> T02/T04;
- source report -> truth -> T03;
- stability -> immutability -> T07;
- event -> personality cause -> T04/T07;
- short follow-up -> permanence -> T07/T09.

## 99. DEV

Primary families:

- age/timing/stage -> mechanism -> T02/T04/T07;
- longitudinal association -> causal cascade -> T04;
- early risk -> destiny -> T07/T09;
- population trajectory -> individual destiny -> T05/T06;
- measurement invariance -> construct truth -> T03.

## 100. NEU

Primary families:

- region/network/signal -> psychological function -> T08;
- decoder -> representation mechanism -> T03/T04;
- neural correlate -> biomarker -> T03/T05;
- group difference -> person diagnosis -> T06;
- proxy -> mechanism -> T03/T08;
- process effect -> trait -> T07/T08;
- animal label -> human mechanism -> T05.

## 101. CLN

Primary families:

- symptom -> diagnosis -> T02;
- diagnosis -> mechanism/identity -> T02/T04;
- one feature -> disorder family -> T02/T06;
- acquired/medical state -> psychology-only -> T04/T07/T11;
- temporary crisis -> personality disorder -> T07;
- classifier certainty -> mechanism certainty -> T09/T04.

## 102. NDEV

Primary families:

- one score/weak domain -> diagnosis -> T03/T06;
- recognition time -> developmental onset -> T07;
- current absence -> historical absence -> T07;
- masking -> diagnostic proof -> T03/T06;
- acquired loss -> developmental disorder -> T07/T11;
- one diagnosis -> every weak domain -> T02/T06.

## 103. BHC

Primary families:

- similar outcomes -> same mechanism -> T04;
- correlation -> mechanism -> T04;
- null difference -> equivalence -> T09;
- network ranking -> universal hierarchy -> T05;
- prognostic model -> treatment matching -> T04/T06;
- no reported harm -> no harm -> T09;
- average benefit -> no deterioration -> T05/T06.

## 104. REL

Primary families:

- one behavior -> attachment/personality -> T02/T06;
- attribution -> motive truth -> T03/T06;
- reciprocity -> equal responsibility -> T11;
- validation -> agreement -> T08;
- bidirectional aggression -> symmetric coercion -> T11;
- APIM/mediation -> causal mechanism -> T04;
- one partner report -> dyadic truth -> T03.

## 105. DEC

Primary families:

- outcome -> forecast quality -> T09;
- metric -> construct -> T03;
- consensus/confidence -> truth -> T09;
- more information -> better decision -> T09/T12;
- choice reversal -> failure -> T02;
- debiasing task effect -> durable rationality -> T05/T07;
- one battery -> global competence -> T03/T06.

## 106. SAF

Primary families:

- discharge -> safe -> T11;
- referral -> linkage -> T11/T12;
- contact -> continuity -> T11;
- safety tool -> treatment -> T02/T11;
- population means restriction -> one counseling effect -> T05;
- risky choice/refusal/diagnosis -> incapacity -> T02/T11;
- safety exception -> universal legal rule -> T05/T11.

## 107. ETH

Primary families:

- known data -> automatic use -> T01/T10;
- accuracy -> ethical acceptability -> T10;
- consent -> unlimited reuse -> T10;
- disagreement -> pathology -> T10/T12;
- human presence -> safe oversight -> T10/T11;
- model validation -> permanent/current validation -> T12;
- strong inference -> high-stakes permission -> T10/T11.

---

# XXI. Error cascade patterns

## 108. Measurement-to-identity cascade

Invalid measure interpretation
-> trait inference
-> mechanism inference
-> identity statement
-> high-stakes use.

Typical tags:

T03 -> T02 -> T04 -> T06 -> T10/T11.

## 109. Population-to-person cascade

Group pattern
-> person feature backfill
-> confidence inflation
-> private-model update
-> repeated self-confirmation.

Typical tags:

T05 -> T06 -> T09 -> T12.

## 110. State-to-trait cascade

Local state/event
-> stable trait
-> diagnosis-like label
-> immutable identity.

Typical tags:

T07 -> T02 -> T06/T10.

## 111. Correlation-to-intervention cascade

Association
-> mechanism
-> active ingredient
-> treatment matching.

Typical tags:

T04 -> T06 -> T11.

## 112. Neural reduction cascade

Proxy neural signal
-> psychological construct
-> mechanism
-> trait/diagnosis.

Typical tags:

T03 -> T08 -> T04 -> T06.

## 113. Safety certainty cascade

Concerning evidence
-> exact risk claim
-> incapacity inference
-> AI authority.

Typical tags:

T11 -> T09 -> T02 -> T10/T11.

## 114. Disagreement pathology cascade

User challenge
-> model protection
-> denial/defensiveness label
-> contestability bypass
-> model inertia.

Typical tags:

T10 -> T02 -> T12.

## 115. Private-model recursion cascade

Existing model
-> ambiguous observation interpreted through model
-> model-consistent inference
-> inference counted as new evidence
-> confidence increases.

Typical tags:

T12 -> T06 -> T09 -> T12.

## 116. Domain-homonym cascade

Same word across domains
-> construct identity assumed
-> evidence imported
-> mechanism synthesized.

Typical tags:

T08 -> T05 -> T04.

---

# XXII. Correct conclusion, invalid reasoning

## 117. Luck is not validation

A conclusion can be correct by coincidence.

Examples:

- invalid diagnostic shortcut happens to match later diagnosis;
- stereotype happens to match the person;
- causal story happens to be true;
- one task happens to predict broader ability.

The reasoning route remains invalid.

## 118. Why this matters

If correct outcomes validate bad reasoning, the system learns:

- shortcuts;
- stereotypes;
- overconfidence;
- unsafe authority.

## 119. Audit rule

Evaluate:

1. conclusion correctness when resolvable;
2. reasoning validity;
3. calibration;
4. process compliance;

separately.

---

# XXIII. Wrong conclusion, valid reasoning under uncertainty

## 120. Error is not omniscience failure

A well-calibrated probabilistic inference can be wrong in one case.

Example:

A 70% event can fail to occur.

That does not automatically mean the reasoning process was defective.

## 121. Audit rule

Ask:

- Was evidence appropriate?
- Was uncertainty calibrated?
- Was prediction falsifiable?
- Was outcome within expected uncertainty?

Do not punish valid uncertainty as analytic misconduct.

---

# XXIV. Commission versus omission

## 122. Commission error

The system asserts too much.

Examples:

- diagnosis without basis;
- mechanism inflation;
- stereotype backfill.

## 123. Omission error

The system fails to represent material evidence or action.

Examples:

- ignores contradiction;
- omits medical red flag;
- omits safety escalation;
- omits subgroup validity limitation;
- ignores user correction.

## 124. Omission can be high-risk

Conservative silence can be harmful when a real safety/medical/action threshold is crossed.

---

# XXV. Error severity

This is an internal operational impact classification, not a validated clinical risk scale.

## 125. R0 — cosmetic

Wording/format problem with no material inferential effect.

## 126. R1 — local epistemic

One proposition is overstated or mistyped, with little downstream consequence.

## 127. R2 — propagating analytic

The error affects multiple dependent propositions or model architecture.

## 128. R3 — consequential

The error can materially alter:

- significant personal decision;
- relationship action;
- intervention choice;
- sensitive model update.

## 129. R4 — critical governance/safety

The error can materially affect:

- acute safety;
- medical escalation;
- formal diagnosis-like authority;
- capacity;
- legal/forensic/employment/custody;
- privacy breach;
- coercive/exclusive AI dependence.

## 130. Severity does not change truth

R4 means stricter handling.

It does not mean the underlying proposition is more likely.

---

# XXVI. Detection confidence

## 131. Confirmed error

The reasoning rule was clearly violated.

## 132. Probable error

Available evidence strongly suggests failure but exact source may be incomplete.

## 133. Possible error

A known failure route is plausible and must be checked.

## 134. Not an error

The apparent inconsistency is explained by:

- scope;
- timescale;
- different construct;
- different level;
- valid uncertainty.

Do not overdiagnose reasoning errors.

---

# XXVII. Repair priority

## 135. Repair the earliest material failure first

If T03 measurement is invalid, do not begin by refining T09 confidence.

Rebuild from T03.

## 136. Upstream repair can invalidate downstream work

A corrected construct can require redoing:

- measurement interpretation;
- causal model;
- applicability;
- person transfer;
- confidence;
- use permission.

## 137. Downstream-only repair is insufficient

Changing wording from "is" to "may be" does not repair an invalid measurement or causal leap.

---

# XXVIII. Analytic Error Repair Protocol

## 138. Step 1 — freeze consequential use

If R3/R4 or materially disputed:

do not continue using the proposition as a strong downstream premise.

## 139. Step 2 — isolate proposition

Write the exact claim.

## 140. Step 3 — locate earliest failing stage

T01–T12.

## 141. Step 4 — identify secondary errors

Do not assume one error.

## 142. Step 5 — recover provenance

What raw evidence existed before interpretation?

## 143. Step 6 — rebuild from the failure point

Reapply valid:

- construct;
- measurement;
- design;
- applicability;
- person evidence.

## 144. Step 7 — recompute alternatives

Does another hypothesis now explain more?

## 145. Step 8 — propagate dependencies

Reopen every proposition that materially depended on the failed premise.

## 146. Step 9 — revise confidence

Claim-specific.

## 147. Step 10 — revise stakes/use permission

Epistemic and governance axes remain separate.

## 148. Step 11 — update/retire model proposition

Use PRIVATE_MODEL_UPDATE_CARD v2 when significant.

## 149. Step 12 — add generic regression guard if new

Never store private case content.

---

# XXIX. When to create a new ERROR_LEDGER class

Create a new class only if all are true:

1. failure is reusable across cases;
2. it is not already represented adequately;
3. recurrence is plausible;
4. a concrete guard can reduce recurrence;
5. the class affects downstream reasoning.

Do not create a new class merely because:

- domain wording differs;
- a one-off mistake occurred;
- taxonomy already contains the root class.

---

# XXX. When to retire an ERROR_LEDGER class

Retire only when:

- the failure route is no longer relevant to the workflow;
- a structural architecture change makes recurrence impossible or obsolete;
- the old class was subsumed and migration is explicit.

Having a guard does not by itself justify RETIRED.

A guarded error can remain ACTIVE because regression remains possible.

---

# XXXI. Guardrail overcorrection

## 150. A guardrail can itself become an error

Examples:

- correlation never informative;
- self-report always unreliable;
- population evidence irrelevant to individuals;
- neural evidence never useful;
- diagnosis never informative;
- high uncertainty means no action;
- avoid stereotypes means ignore base rates.

## 151. Correct rule

Guardrails are claim-specific constraints.

They block invalid upgrades, not legitimate use of the evidence source.

---

# XXXII. Multi-error interactions

## 152. Error interactions can be multiplicative

Example:

weak measure + population mismatch + high stakes.

Even if each limitation seems modest, together they can make the conclusion unusable.

## 153. Do not mechanically add uncertainty

Error interaction is not a simple numeric sum.

Identify which limitation is decision-blocking.

## 154. Critical bottleneck

Sometimes one error dominates.

Example:

construct invalidity can make later statistical precision irrelevant.

---

# XXXIII. Error masking

## 155. One strong evidence stream can hide another failure

Example:

a person-specific observation is valid, but the causal interpretation remains invalid.

Do not let strength at one level mask weakness at another.

## 156. Professional authority can mask analytic weakness

A confident human/AI statement is not evidence.

## 157. Complexity can mask invalidity

Sophisticated statistics, neural measures, or long explanations do not rescue a wrong construct.

---

# XXXIV. Error recovery and confidence

## 158. Corrected proposition is not automatically restored to prior confidence

After repair:

- provenance may remain weak;
- alternatives may reopen;
- dependent evidence may shrink.

## 159. Repeated same-class errors should lower trust in that reasoning route

If a reasoning pattern repeatedly produces corrections, future claims from that route should begin with stricter review.

## 160. Do not globally downgrade unrelated reasoning

Calibration penalty should be error-class/route specific where possible.

---

# XXXV. Error taxonomy and user correction

## 161. User correction can reveal

- factual error;
- provenance error;
- construct error;
- causal error;
- state/trait error;
- model-maintenance error.

## 162. User correction does not by itself identify the taxonomy stage

The correction must be traced to the reasoning chain.

## 163. Repeated correction pattern

If the same failure recurs:

add or strengthen a generic guard.

---

# XXXVI. Error taxonomy and safety

## 164. Safety errors get action priority

If an analytic error creates plausible acute harm:

repair the safety/action process first.

## 165. But epistemic repair still follows

Emergency action does not eliminate the need to correct:

- diagnosis;
- mechanism;
- capacity;
- probability claims.

## 166. Near miss

A caught safety error is still useful regression evidence.

No adverse outcome is required before updating guards.

---

# XXXVII. Error taxonomy and privacy

## 167. Privacy error can occur even if inference is accurate

Accuracy does not authorize use/storage/disclosure.

## 168. Privacy audit error

Marker scan != semantic privacy review.

## 169. Regression logging

Log only the generic class.

Do not store the private datum that exposed it.

---

# XXXVIII. Error taxonomy and AI-generated evidence

## 170. Model output is derived evidence

It cannot independently validate itself.

## 171. Multiple generations

Do not count repeated prompts or closely related models as independent empirical confirmation.

## 172. Fluent rationale

A persuasive explanation does not reveal a verified causal mechanism.

---

# XXXIX. Error taxonomy and human oversight

## 173. Human approval is not analytic validation

The reviewer may share:

- anchoring;
- stereotypes;
- source dependence;
- incentives.

## 174. Meaningful review

Where consequential:

review underlying evidence and alternatives, not only the AI conclusion.

---

# XL. New reusable meta-error classes

## 175. Correct-answer validation

Failure:

a correct eventual conclusion is used to validate an invalid inference route.

Guard:

audit reasoning validity independently from outcome correctness.

## 176. Error-stage mislocalization

Failure:

the visible downstream symptom is repaired while the earliest invalid step remains.

Guard:

identify earliest material T01–T12 failure before correction.

## 177. Single-error assumption

Failure:

a chain with multiple independent failures is forced into one label.

Guard:

primary + secondary taxonomy tags.

## 178. Dependency-repair omission

Failure:

a premise is corrected but dependent propositions remain unchanged.

Guard:

mandatory dependency propagation.

## 179. Severity blindness

Failure:

the same inferential weakness is treated identically at S0 and S4 consequence levels.

Guard:

separate error detection from consequence-dependent handling.

## 180. Guardrail absolutism

Failure:

a valid caution is converted into a universal ban and blocks legitimate evidence.

Guard:

claim-specific evidence/use routing.

---

# XLI. Proposed new ERROR_LEDGER mappings

Add:

- ERR-032 — Correct-answer validation;
- ERR-033 — Error-stage mislocalization;
- ERR-034 — Single-error assumption;
- ERR-035 — Dependency-repair omission;
- ERR-036 — Severity blindness;
- ERR-037 — Guardrail absolutism.

These are not domain duplicates.

They are meta-errors revealed only after integrating the full error architecture.

---

# XLII. 144-question Analytic Error Taxonomy Gate

## A. Purpose / scope

1. Is the current workspace/role correct?
2. Is the current purpose explicit?
3. Is individualized inference necessary?
4. Is private-model use relevant?
5. Has purpose drift occurred?
6. Is process replacing purpose?
7. Are control files coherent?
8. Is the question actually answerable?
9. Is role authority being exceeded?
10. Is the same datum being reused for a new purpose without review?
11. Could generic information suffice?
12. Does work need to stop before substantive inference?

## B. Construct / claim

13. What exact proposition is being made?
14. What claim type?
15. Is the construct defined?
16. Has observation become interpretation?
17. Has interpretation become trait?
18. Has trait become mechanism?
19. Has symptom become diagnosis?
20. Has diagnosis become identity?
21. Has ability become preference?
22. Has frequency become habit?
23. Has behavior become motive?
24. Has one label crossed domains?

## C. Measurement / provenance

25. What was directly measured?
26. Is provenance recoverable?
27. Is score being reified?
28. Is proxy being renamed as mechanism?
29. Is reliability being treated as person precision?
30. Is model fit being treated as validity?
31. Is cutoff treated as natural category?
32. Is person misfit pathologized?
33. Is automated score treated as objective fact?
34. Is self-report treated as universal truth?
35. Is observer report treated as universal truth?
36. Are evidence streams genuinely independent?

## D. Design / causality

37. Association or causation?
38. Prediction or mechanism?
39. Temporal precedence overread?
40. Confounding plausible?
41. Selection/collider bias plausible?
42. Mediation treated causally?
43. Longitudinal design treated as causal by default?
44. Intervention response treated as mechanism?
45. Active component identified without design?
46. Group coefficient treated as within-person effect?
47. Dyadic coefficient treated as causal partner effect?
48. What causal claim actually survives?

## E. Applicability / synthesis

49. Same construct?
50. Same measurement?
51. Same population?
52. Same language/culture?
53. Same context?
54. Same timescale?
55. Same outcome?
56. Same mechanism?
57. Same intended use?
58. Is pooled/meta-analytic evidence being treated as universal?
59. Is validation version still current?
60. Is applicability unknown being treated as yes?

## F. Individual transfer

61. What direct person evidence exists?
62. Is population pattern backfilling a feature?
63. Is group membership used as a person fact?
64. Is one event becoming a trait?
65. Is one task becoming global ability?
66. Is one score becoming architecture?
67. Is model output counted as observation?
68. Is existing private model supporting itself?
69. What L0–L6 level applies?
70. Is a rival hypothesis maintained?
71. What direct contradiction exists?
72. What is the narrowest person claim?

## G. Time / state / trait / development

73. Current or historical?
74. State or trait?
75. Episode or baseline?
76. Context-specific or global?
77. Is stability observed or assumed?
78. Is late recognition treated as late onset?
79. Is current absence treated as historical absence?
80. Is developmental origin established?
81. Is age being used as mechanism?
82. Is short follow-up treated as permanence?
83. Is one event treated as personality cause?
84. Should the proposition be split by time/context?

## H. Cross-domain / level

85. What domain owns the claim?
86. Is same terminology being treated as same construct?
87. Psychological construct vs computation?
88. Computation vs neural implementation?
89. Neural signal vs psychological mechanism?
90. Trait vs diagnosis?
91. Attachment vs personality?
92. Regulation vs coping?
93. Effort vs motivation?
94. Validation meaning specified?
95. Risk meaning specified?
96. Are genuine theories being averaged?

## I. Confidence / calibration

97. Confidence per proposition?
98. How many independent evidence paths?
99. Is repetition merely redundant?
100. Is a critical premise uncertain?
101. Is confidence inherited downstream?
102. Is narrative coherence driving certainty?
103. Is one successful prediction overread?
104. Is one failed prediction overread?
105. Is significance treated as truth?
106. Is null result treated as absence?
107. Is calibration actually evaluated?
108. What evidence would change confidence?

## J. Ethics / privacy / contestability

109. Is sensitive inference necessary?
110. Is data minimization satisfied?
111. Is inference minimization satisfied?
112. Is prior disclosure treated as unlimited consent?
113. Is private data entering public infrastructure?
114. Is user challenge possible?
115. Is disagreement pathologized?
116. Is role/licensure misrepresented?
117. Is fairness/subgroup validity material?
118. Is dependency/sycophancy being reinforced?
119. Is marker scan being called full privacy audit?
120. Is use permission purpose-bounded?

## K. Safety / action / authority

121. Is urgency becoming certainty?
122. Is uncertainty becoming inaction?
123. Is risk category replacing formulation?
124. Is risky choice becoming incapacity?
125. Is refusal becoming incapacity?
126. Is diagnosis becoming incapacity?
127. Is referral mistaken for linkage?
128. Is discharge mistaken for safety?
129. Is contact mistaken for continuity?
130. Is AI becoming sole high-stakes authority?
131. Is legal rule jurisdiction-checked?
132. Is action proportionate/reversible?

## L. Model maintenance / repair

133. Is provenance still traceable?
134. Is the model supporting itself?
135. Is old confidence stale?
136. Is every local event changing architecture?
137. Is strong contradiction being ignored?
138. Are dependencies reopened after correction?
139. Is NO UPDATE considered?
140. Is the next evidence discriminating?
141. Is the earliest error stage identified?
142. Are multiple error tags needed?
143. Does severity change handling?
144. Is a new generic regression class genuinely required?

---

# XLIII. Closure audit — 20/20

## Criterion 1 — all ERR-001…031 routed

**PASS.**

Every existing ledger class has a primary taxonomy stage.

## Criterion 2 — purpose/governance failures represented

**PASS.**

T01 covers role, workspace, process-purpose, control-state, and purpose/data-use drift.

## Criterion 3 — construct/claim failures represented

**PASS.**

T02 captures label, trait, diagnosis, ability, preference, motive, and mechanism typing errors.

## Criterion 4 — measurement/provenance failures represented

**PASS.**

T03 captures score reification, proxy misuse, validity, precision, source, and provenance failures.

## Criterion 5 — causal/design failures represented

**PASS.**

T04 captures association, prediction, mediation, intervention, longitudinal, and bias-to-causality errors.

## Criterion 6 — applicability/synthesis represented

**PASS.**

T05 captures transport, meta-analytic overgeneralization, population/context/timescale, and version failures.

## Criterion 7 — individualized transfer represented

**PASS.**

T06 captures stereotype backfill, group-to-person transfer, one-event trait inference, and model-derived evidence misuse.

## Criterion 8 — temporal/developmental failures represented

**PASS.**

T07 captures state/trait, historical/current, onset/recognition, permanence, and developmental timing errors.

## Criterion 9 — cross-domain/level failures represented

**PASS.**

T08 captures homonyms, neural/psychological substitution, computation/mechanism, and false domain averaging.

## Criterion 10 — confidence/calibration failures represented

**PASS.**

T09 captures dependence, confidence inheritance, coherence inflation, significance/null overreading, and poor discrimination.

## Criterion 11 — ethics/privacy/contestability represented

**PASS.**

T10 captures purpose, privacy, fairness, user agency, dependency, contestability, and role authority.

## Criterion 12 — safety/action failures represented

**PASS.**

T11 separates urgency/action from probability, capacity, handoff, continuity, and authority.

## Criterion 13 — model maintenance represented

**PASS.**

T12 captures versioning, recursion, overfitting, inertia, correction propagation, and discriminating evidence.

## Criterion 14 — root versus manifestation explicit

**PASS.**

Earliest material failure is primary; downstream effects remain tagged.

## Criterion 15 — multi-error chains supported

**PASS.**

Taxonomy is explicitly nonexclusive.

## Criterion 16 — correct-output invalid-reasoning case represented

**PASS.**

Outcome correctness cannot validate the reasoning route.

## Criterion 17 — valid-reasoning wrong-outcome case represented

**PASS.**

Probabilistic uncertainty is not treated as reasoning failure by itself.

## Criterion 18 — severity and repair architecture represented

**PASS.**

R0–R4 controls handling without changing truth values; repair protocol propagates dependencies.

## Criterion 19 — new meta-errors are nonduplicative

**PASS.**

ERR-032…037 capture integration-level failures not adequately represented by prior domain classes.

## Criterion 20 — reusable taxonomy gate exists

**PASS.**

A 144-question Analytic Error Taxonomy Gate is canonical.

---

# XLIV. Decision

**INT-03 is CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS.**

**Phase D: IN PROGRESS.**

The error system is now organized by causal location in the reasoning pipeline rather than by domain vocabulary.

Key result:

**hundreds of domain-specific failure examples compress into 12 reusable stage families without erasing domain-specific content.**

This taxonomy does not imply that all errors have one cause.

It provides a routing system for finding where a particular chain failed.

No domain requalification is required before the next integration step.

---

# XLV. Canonical analytic-error formula

**Find the earliest material stage where evidence, construct, transfer, confidence, governance, or action becomes unjustified. Preserve secondary errors. Freeze consequential use if needed. Rebuild from the failure point. Propagate corrections to every dependent proposition. Recalibrate confidence and use permission separately. Log only reusable generic lessons.**

Operational sequence:

purpose -> construct/claim -> measurement/provenance -> design/causality -> applicability -> person transfer -> time/state-trait -> cross-domain level -> confidence/dependence -> ethics/privacy -> safety/action -> model maintenance.

---

# XLVI. Next dependency

**Phase D / Step 4 — INT-04: reusable reasoning checklists.**

INT-04 must transform the full qualification into concise operational checklists for actual private work, including:

1. rapid low-stakes reflective inference;
2. strong individualized psychological proposition;
3. causal/mechanism claim;
4. trait/state distinction;
5. measurement/score interpretation;
6. clinical/neurodevelopmental boundary;
7. relationship/social inference;
8. intervention/decision support;
9. safety/high-stakes routing;
10. private-model update;
11. correction/error repair;
12. final pre-response audit.

The checklist layer must be shorter than the underlying qualification and must route to deeper gates only when needed.

Do not begin INT-04 in this continuation.

---

# Canonical repository sources integrated

1. PSY-RES-10 methodology sufficiency audit.
2. PSYCHOMETRICS-03 integration/sufficiency audit.
3. COG-07 reasoning/inference.
4. LEA-06 learning integration/sufficiency audit.
5. EXE-06 control allocation/effort.
6. MET-02 metacognitive control.
7. AFF-04 emotion/regulation integration.
8. MOT-04 motivation integration.
9. PER-04 personality integration.
10. SOC-05 social psychology integration.
11. DEV-04 developmental integration.
12. NEU-04 neuroscience integration.
13. CLN-03 clinical differential boundaries.
14. STR-04 stress/coping/resilience integration.
15. DEC-02 applied decision quality.
16. NDEV-02 broader neurodevelopmental differential.
17. BHC-02 intervention/psychotherapy sufficiency audit.
18. REL-02 relationship/conflict/communication sufficiency audit.
19. SAF-02 safety management/continuity sufficiency audit.
20. ETH-02 applied ethical governance.
21. INT-01 cross-domain contradiction audit.
22. INT-02 evidence-to-individual transfer rules.
23. ERROR_LEDGER.md.
24. EVIDENCE_LEDGER.md.
25. PRIVATE_MODEL_UPDATE_CARD.md.
26. AGENT.md.
27. WORKFLOW.md.

## Source-boundary note

INT-03 is an integration/taxonomy block.

Exact canonical repository files and their failure-mode sections were reopened or extracted for this taxonomy.

No new time-sensitive external scientific claim is introduced.

The taxonomy reorganizes already-qualified generic failure modes; it does not replace their domain-specific evidence or definitions.

No individualized psychological observation, personal history, health information, relationship information, diagnosis, identifier, estimate, or private-model proposition is included.
