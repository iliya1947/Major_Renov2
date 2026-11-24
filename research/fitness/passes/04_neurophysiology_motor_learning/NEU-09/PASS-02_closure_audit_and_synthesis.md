# NEU-09 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-09 — Motor control: feedforward/feedback/synergies/variability

## 0. Purpose

Проверить, что после PASS-01 тема NEU-09 достаточно закрывает Area 04 Section 9 для downstream NEU-10, NEU-11…NEU-22, MEC, TEC, TST, PRO, COA и IND без:

- противопоставления feedforward и feedback как взаимоисключающих систем;
- представления feedback как только медленной сознательной коррекции;
- превращения internal models из computational framework в установленный буквальный neural object;
- трактовки degrees of freedom только как проблемы, которую CNS обязан “заморозить”;
- определения coordination через одну фиксированную визуальную форму;
- отождествления EMG-derived muscle synergies с доказанными hard-wired CNS modules;
- отождествления stability с минимальной variability;
- трактовки любой variability как error/noise или, наоборот, как автоматически полезной;
- требования одной точной trajectory независимо от task constraints;
- смешения maximal force и force control;
- смешения общего postural control с отдельной темой balance / neuromotor fitness;
- трактовки joint stabilization как функции одного набора “stabilizer muscles”;
- универсального правила “больше co-contraction = лучше”;
- трактовки APA как неизменной pre-programmed response;
- универсального fatigue-coordination signature;
- трактовки novel/heavier load как автоматического technical failure.

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 9 — 16 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-09;
3. `PASS-01_motor_control_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU09-01…NEU09-16;
5. upstream canonical boundaries:
   - `NEU-03_sensory_feedback_proprioception.md`;
   - `NEU-05_neural_force_production_voluntary_activation_rfd.md`;
   - `NEU-06_neural_adaptation_strength_training.md`;
   - `NEU-08_neuromuscular_fatigue.md`;
6. closure-critical re-check:
   - integrative sensorimotor-control review — PMID 41678257;
   - cerebellar predictive-control review — PMID 40523942;
   - internal-model critical perspective — PMID 40866575;
   - muscle-synergy systematic review — PMID 29849756;
   - motor-variability systematic review — PMID 39547333;
   - UCM methodological critique — PMID 42814146;
   - running-stability systematic review — PMID 42732068;
   - force-steadiness review — PMID 33595382;
   - co-contraction corrective-response study — PMID 40799397;
   - co-contraction-index methods study — PMID 42213698;
   - anticipatory postural-control study — PMID 41942633;
   - direct squat coordination/adaptation study — PMID 42516016;
   - direct squat inter-subject synergy study — PMID 39848201;
   - direct squat variability/load study — PMID 39298439;
   - correction to PMID 39298439 — PMID 40131897;
   - fatigue/coordination study — PMID 41297828.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 16/16

1. Feedforward control — **PASS AS PROSPECTIVE / PREDICTION-INFORMED CONTROL, NOT SENSORY ISOLATION**.
2. Feedback control — **PASS AS MULTI-LATENCY, GOAL-DEPENDENT ONLINE CORRECTION**.
3. Internal models — **PASS AS WORKING COMPUTATIONAL FRAMEWORK; EXACT NEURAL IMPLEMENTATION OPEN**.
4. Degrees of freedom problem — **PASS AS REDUNDANCY / MOTOR ABUNDANCE WITH MULTIPLE VALID SOLUTIONS**.
5. Coordination — **PASS AS TASK-RELEVANT ORGANIZATION OF ELEMENTAL VARIABLES**.
6. Movement synergies — **PASS WITH DESCRIPTIVE-MODEL VS HARD-WIRED-MODULE BOUNDARY**.
7. Stability — **PASS AS DEFINED-VARIABLE / PERTURBATION-SPECIFIC CONSTRUCT**.
8. Movement variability — **PASS AS INTRINSIC, MULTI-CAUSE AND TASK-DEPENDENT**.
9. Functional variability vs noise — **PASS; MAGNITUDE ALONE INSUFFICIENT**.
10. Trajectory control — **PASS AS TASK-CONSTRAINT DEPENDENT, NOT UNIVERSAL EXACT-PATH REPLICATION**.
11. Force control — **PASS; DISTINCT FROM MAXIMAL FORCE CAPACITY**.
12. Postural control — **PASS; GENERAL CONTROL MECHANISM KEPT DISTINCT FROM NEU-10 BALANCE EVIDENCE**.
13. Joint stabilization — **PASS AS ADAPTIVE NEUROMECHANICAL FUNCTION**.
14. Anticipatory postural adjustments — **PASS AS CONTEXT-DEPENDENT PROSPECTIVE PREPARATION**.
15. Coordination under fatigue — **PASS AS HETEROGENEOUS / TASK-DEPENDENT REORGANIZATION**.
16. Coordination under novel load — **PASS AS ADAPTIVE REORGANIZATION, NOT AUTOMATIC FAILURE**.

Result: **16/16 PASS.**

---

## 3. Feedforward / feedback architecture audit

PASS.

The 2026 integrative review (PMID 41678257) treats movement control as interaction among:

- distributed sensorimotor loops;
- optimal-feedback mechanisms;
- neural population dynamics;
- musculoskeletal/body dynamics.

This is incompatible with a simple split:

> feedforward first, feedback later.

Closure formulation:

**feedforward and feedback are complementary control modes whose relative weighting depends on task predictability, delay, uncertainty and perturbation.**

Feedforward means prospective control using prior/current estimates before the relevant current sensory error can be used.

Feedback means control using sensory consequences to modify ongoing or subsequent output.

Feedback can operate rapidly and automatically; it is not synonymous with conscious correction.

No blocker.

---

## 4. Internal-model boundary audit

PASS WITH EXPLICIT ONTOLOGY LIMIT.

Internal-model terminology remains useful for:

- prediction;
- sensory-consequence estimation;
- force-field adaptation;
- after-effects;
- planning under known dynamics.

But exact neural implementation is not closed.

The 2025 cerebellar review (PMID 40523942) explicitly contrasts classical internal-model interpretations with learned feedforward policies and argues that cerebellar computation may resemble internal-model behavior without requiring a literal explicit representation.

The 2025 critical perspective (PMID 40866575) goes further and challenges representational internal-model ontology altogether.

These sources do not force rejection of the framework.

They force a boundary:

**behavior compatible with internal-model computation does not uniquely identify one internal neural representation.**

Canonical project wording:

> internal models are retained as a useful computational framework for prediction/adaptation, while exact neural implementation remains open.

No blocker.

---

## 5. Degrees-of-freedom / motor-abundance audit

PASS.

The project does not retain the old oversimplification:

> many degrees of freedom → CNS must eliminate/freeze most of them.

Instead:

- many joint/muscle/timing combinations can satisfy the same task;
- task-relevant dimensions can be stabilized more strongly;
- redundant dimensions can retain flexibility.

This is compatible with:

- optimal-feedback-control;
- synergy/UCM frameworks;
- observed individual variability in successful resistance-exercise coordination.

Canonical rule:

**redundancy can be functional motor abundance, not merely uncontrolled noise.**

No blocker.

---

## 6. Coordination audit

PASS.

Coordination is retained as:

> task-relevant organization of multiple elemental variables so that important performance variables remain acceptably controlled.

It is not retained as:

- one visual template;
- simultaneous muscle activation;
- minimal movement variation;
- one fixed muscle contribution vector.

Direct 2026 squat evidence (PMID 42516016) found:

- two extracted synergies sufficient to explain at least 90% of recorded muscle activation in that protocol;
- broad synergy structure remained robust after six weeks;
- muscle weighting/timing showed smaller adaptations;
- experienced lifters differed in timing/weighting.

Therefore the practically useful conclusion is:

**coordination can preserve broad structure while adapting weighting and timing to training/load.**

No blocker.

---

## 7. Muscle-synergy audit

PASS WITH METHOD/ONTOLOGY LIMIT.

The muscle-synergy literature supports meaningful low-dimensional structure in multi-muscle activation.

However, the 2018 systematic review (PMID 29849756) explicitly notes ongoing debate over:

- neural origin;
- non-neural constraints;
- extraction algorithms;
- interpretation of “building blocks”.

Direct squat evidence also demonstrates both:

- common structure;
- individual-specific patterns.

Therefore:

**EMG factorization is evidence of structured covariance/coordination under the chosen analysis; it is not by itself proof of a fixed hard-wired CNS module.**

No blocker.

---

## 8. Stability audit

PASS.

The 2026 systematic review of running stability (PMID 42732068) found that the term “stability” is operationalized using:

- linear variability metrics;
- nonlinear temporal measures;
- perturbation/return behavior;
- coordination-based methods.

These methods reflect different constructs.

Canonical rule:

**stability requires naming what variable is stabilized, against what disturbance and over what time scale.**

Therefore:

- repeatability ≠ perturbation resilience;
- low SD ≠ universal stability;
- one nonlinear metric ≠ all stability.

No blocker.

---

## 9. Movement variability / functional variability audit

PASS.

The 2025 systematic review (PMID 39547333) confirms that the relationship between initial motor variability and later learning/adaptation depends on:

- learning paradigm;
- variability magnitude vs temporal structure;
- initial performance;
- task.

The 2026 UCM methods paper (PMID 42814146) adds a closure-critical limitation:

- identical spatial covariance can coexist with different temporal structures;
- UCM can identify task-related geometric structure;
- it does not establish the generating temporal control process.

Therefore:

**variability magnitude alone cannot classify variability as noise, adaptability or skill.**

And:

**“more variability is better” is as invalid as “less variability is always better.”**

No blocker.

---

## 10. Trajectory-control audit

PASS.

The motor-control framework supports selective correction of task-relevant errors.

Trajectory can be a controlled variable when:

- path itself matters;
- obstacle avoidance matters;
- implement/bar position has defined constraints;
- a target path is part of performance.

But successful control does not require one exact joint trajectory when multiple paths preserve the task objective.

Canonical rule:

**trajectory is controlled to the degree trajectory is task relevant.**

No blocker.

---

## 11. Force-control audit

PASS.

The force-steadiness review (PMID 33595382) supports a distinct construct involving:

- common synaptic input;
- motor-unit discharge fluctuations;
- submaximal force fluctuations;
- task-dependent motor performance.

Thus:

**maximal strength and force-control precision/steadiness are related but non-equivalent outcomes.**

This remains consistent with NEU-05.

No blocker.

---

## 12. Postural-control ownership audit

PASS.

NEU-09 owns the general motor-control principle:

- predictive preparation;
- sensory feedback;
- body/segment state regulation;
- relation to gravity/base of support/voluntary movement.

NEU-10 remains owner of:

- static vs dynamic balance;
- postural sway;
- reactive balance;
- anticipatory balance as fitness/testing constructs;
- visual/vestibular/somatosensory weighting for balance;
- balance-training transfer.

No ownership conflict remains.

---

## 13. Joint-stabilization / co-contraction audit

PASS.

Joint/limb stabilization is retained as a neuromechanical function involving:

- passive mechanics;
- muscle activation;
- mechanical impedance;
- feedforward preparation;
- reflex/feedback correction;
- sometimes agonist-antagonist co-contraction.

The 2025 perturbation study (PMID 40799397) showed that even modest co-contraction improved rapid target recapture after mechanical perturbation.

But that does not establish:

> more co-contraction is always better.

Co-contraction can carry costs:

- extra activation/metabolic cost;
- movement constraint;
- slower voluntary reaction in some uncertain contexts.

Measurement itself is not unitary: the 2026 CCI methods paper (PMID 42213698) showed that common indices emphasize different signal properties:

- waveform shape;
- amplitude;
- temporal overlap.

Canonical rule:

**co-contraction is an adjustable stabilization strategy; interpretation requires the task and the exact index.**

No blocker.

---

## 14. Anticipatory postural-adjustment audit

PASS.

The 2026 predictive-postural-control study (PMID 41942633) demonstrated anticipatory COM shift and gastrocnemius activation before predictable floor tilts and reproduced the behavior with model-predictive control.

This supports:

- prospective postural preparation;
- context-sensitive prediction.

It does not uniquely establish:

- one internal-model neural implementation;
- one universal APA pattern.

Canonical rule:

**APA is a context-dependent anticipatory response to expected mechanical consequences.**

No blocker.

---

## 15. Coordination-under-fatigue audit

PASS AND CONSISTENT WITH NEU-08.

PMID 41297828 confirms that fatigue can alter:

- force;
- EMG amplitude/rise;
- intermuscular coherence,

with different responses by training status and muscle-pair relationship.

Therefore:

**fatigue-related coordination change has no single universal direction and must be interpreted against the controlled task variable.**

A changed strategy can be:

- compensatory;
- neutral;
- performance limiting.

No contradiction with NEU-08.

No blocker.

---

## 16. Novel-load / resistance-training transfer audit

PASS WITH TRANSFER LIMIT.

Direct squat evidence supports load/training-related motor reorganization.

PMID 42516016:
- broad synergy structure remained relatively robust;
- timing/weighting differed with training status and load context.

PMID 39848201:
- one broad squat synergy was common across participants;
- other extracted synergy patterns varied between individuals.

PMID 39298439:
- movement-variability metrics changed across 10–90% 1RM squat loads;
- different devices/metrics behaved differently.

Important provenance correction:

PMID 40131897 corrected PMID 39298439 because **Fig. 1 and Fig. 2 images had been switched**. The captions were correct and the correction did not overturn the reported statistical results or the conclusion that variability metrics changed with load.

Thus direct resistance-exercise evidence supports:

**load acts as a motor-control constraint and can reorganize a successful motor solution.**

It does not establish:

- one ideal complexity value;
- one optimal variability profile;
- one universal expert synergy;
- that every heavy-load strategy change is technical failure.

Laboratory force-field evidence is retained only for general adaptation mechanisms and not directly converted into barbell prescriptions.

No blocker.

---

## 17. Measurement non-equivalence audit

PASS.

The following are explicitly non-interchangeable:

### EMG amplitude
Does not directly equal:
- force;
- neural drive;
- coordination quality.

### NMF / muscle-synergy factorization
Does not directly establish:
- hard-wired neural primitives;
- optimality;
- causation.

### UCM / covariance analysis
Can identify task-related spatial covariance but does not identify:
- neural generator;
- temporal dynamics;
- optimality.

### SD / CV
Measure variability magnitude, not temporal organization.

### Entropy / DFA / nonlinear measures
Capture different temporal/complexity properties and are parameter/method dependent.

### Stability metrics
Can represent:
- variability;
- divergence;
- return behavior;
- coordination structure.

### Co-contraction indices
Can emphasize:
- amplitude;
- shape;
- temporal overlap.

Project rule:

**before interpreting a motor-control metric, specify exactly what construct the method can and cannot identify.**

No blocker.

---

## 18. Cross-topic consistency audit

### NEU-03

PASS.

NEU-09 uses sensory feedback without collapsing proprioception into one global signal.

### NEU-05

PASS.

NEU-09 preserves:
- force steadiness ≠ maximal strength;
- EMG ≠ direct neural drive/force;
- coactivation is task dependent;
- coordination metrics are not interchangeable.

### NEU-06

PASS.

NEU-09 preserves:
- strength-training coordination changes as task/load specific;
- neural adaptation does not require one universal direction of a synergy/coherence metric.

### NEU-08

PASS.

NEU-09 preserves:
- fatigue-related coordination changes are heterogeneous;
- movement change under fatigue ≠ automatic technical failure;
- task dependency remains the organizing rule.

No cross-topic contradiction found.

---

## 19. Evidence-ledger audit

Closure-critical claims are now represented as:

1. NEU09-01 — feedforward/feedback coupling;
2. NEU09-02 — internal-model framework boundary;
3. NEU09-03 — motor abundance / degrees of freedom;
4. NEU09-04 — task-specific coordination;
5. NEU09-05 — muscle-synergy interpretation;
6. NEU09-06 — stability;
7. NEU09-07 — movement variability;
8. NEU09-08 — functional variability vs noise;
9. NEU09-09 — trajectory control;
10. NEU09-10 — force control;
11. NEU09-11 — postural-control ownership;
12. NEU09-12 — joint stabilization;
13. NEU09-13 — co-contraction;
14. NEU09-14 — APA;
15. NEU09-15 — coordination under fatigue;
16. NEU09-16 — novel-load adaptation.

Result: **ledger coverage adequate for closure.**

---

## 20. Uncertainty audit

PASS.

Remaining uncertainty is real but non-blocking:

1. exact neural implementation of internal-model-like computation;
2. relative contribution of neural modules vs biomechanics/statistical decomposition to extracted synergies;
3. exact operational threshold separating functional variability from noise in a given lift;
4. which stability metric best predicts a specific downstream performance/safety outcome;
5. optimal amount of co-contraction/stiffness for a given resistance exercise;
6. exact causal role of synergy/timing changes in strength performance;
7. individual-specific expert motor solutions;
8. transfer magnitude from reaching/force-field paradigms to complex free-weight exercise;
9. exact fatigue-related transition from compensatory reorganization to unacceptable technique.

These belong downstream to TEC, MEC, TST, PRO, COA and IND when concrete decisions require them.

---

## 21. Scope-control audit

Neighboring ownership remains separate:

- balance / neuromotor fitness → NEU-10;
- performance vs learning / retention / transfer → NEU-11;
- explicit/implicit/constraints-based learning → NEU-12;
- practice organization → NEU-13;
- attention/focus → NEU-14;
- feedback → NEU-15;
- cueing → NEU-16;
- demonstration/video → NEU-17;
- error correction → NEU-18;
- neuroplasticity → NEU-19;
- stress/arousal → NEU-20;
- individual differences → NEU-21;
- application to strength exercises → NEU-22;
- detailed mechanics → MEC;
- acceptable technique / exercise selection → TEC;
- measurement thresholds → TST;
- programming/load prescription → PRO;
- coaching implementation → COA;
- individual motor profile → IND.

No additional NEU-09 PASS is required before closure.

---

## 22. Closure criterion test

Topic:

> NEU-09 — Motor control: feedforward/feedback/synergies/variability

Result: **PASS.**

Canonical synthesis:

`task goal + current body/environment state + prior experience/prediction`
→
`prospective control + task-specific impedance/coordination`
↔
`sensory feedback and state updating`
→
`movement / force / posture`
→
`task outcome + new sensory information`.

Because the system has redundant degrees of freedom:

`multiple joint/muscle/timing solutions`
can preserve
`the same task-relevant outcome`.

Therefore:

`movement variability`
must be interpreted by
`what varies + temporal/spatial structure + task relevance + perturbation/load/fatigue context`,
not by magnitude alone.

With novel load or fatigue:

`coordination / impedance / variability / trajectory`
may reorganize
without automatically implying
`global loss of control or technical failure`.

---

## 23. Closure decision

**NEU-09 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 16 exact Section 9 items pass;
2. feedforward and feedback are retained as coupled complementary processes;
3. internal models remain a computational framework rather than an established literal neural object;
4. degrees-of-freedom redundancy is treated as possible motor abundance;
5. coordination is task-variable specific;
6. EMG-derived synergies are descriptive and do not prove hard-wired neural modules;
7. stability is not equivalent to low variability;
8. variability can be functional, neutral or noise-like depending on task relevance and structure;
9. trajectory control is task constrained;
10. force control is distinct from maximal force;
11. postural-control mechanism is separated from NEU-10 balance evidence;
12. joint stabilization is neuromechanical and co-contraction is one adjustable strategy;
13. APA is context-dependent prospective preparation;
14. fatigue-related coordination change is heterogeneous;
15. novel/heavier load can reorganize control without automatic technical failure;
16. direct resistance-training evidence supports load-/training-/individual-specific reorganization;
17. measurement methods remain construct specific and non-interchangeable;
18. no project-relevant blocker remains;
19. first canonical NEU-09 finding can now be created;
20. NEU-10 can proceed later without reopening NEU-09 unless a concrete dependency appears.

---

## 24. Next dependency

**NEU-10 — Balance / neuromotor fitness.**

Do not start NEU-10 in this same working block.
