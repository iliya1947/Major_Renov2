# NEU-05 / PASS-01 — Neural force production / voluntary activation / RFD content revalidation

Дата: 2026-11-19  
Статус: **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-05 — Neural force production / voluntary activation / RFD

## 0. Source-of-truth / topic status

Current scope:

1. `research/fitness/areas/04_neurophysiology_motor_learning.md`, Section 5 — **14 exact items**;
2. `research/fitness/NORMALIZED_KNOWLEDGE_TREE.md` — NEU-05.

Normalized topic:

> Neural force production / voluntary activation / RFD.

No canonical NEU-05 finding exists yet.

Exact content scope = **14 items**.

---

## 1. Purpose / Question Card

### Decision

Build a sufficiently accurate neural-force-production model for later neural adaptation, fatigue, technique, testing and programming without:

- reducing force production to motor-unit recruitment alone;
- reducing neural drive to surface-EMG amplitude;
- treating voluntary activation as “percent of brain activation” or as a direct measure of total neural drive;
- treating agonist EMG as equivalent to agonist force;
- assuming antagonist coactivation is always wasteful or always beneficial;
- treating synergist/intermuscular coordination as fixed;
- treating intramuscular coordination as a vague non-measurable “mind-muscle” construct;
- equating force steadiness with maximal strength;
- treating all RFD windows as the same physiological variable;
- treating explosive voluntary activation as the same thing as maximal plateau voluntary activation;
- attributing maximal strength primarily to neural factors;
- attributing power primarily to neural factors;
- assuming one neural measure can explain force, RFD and power across tasks.

### Question type

Human neuromuscular force control and rapid-force production.

### Closure criterion for this PASS

All 14 exact Section 5 items must be covered at content level; recruitment/rate coding must inherit NEU-02 boundaries; neural drive must be defined at motor-neuron-output level; voluntary activation must remain measurement/muscle dependent; agonist/antagonist/synergist/intermuscular/intramuscular coordination must remain task specific; force steadiness must be separated from maximal force; early vs late RFD determinants must be separated; maximal strength and power must remain neural + muscular + mechanical outcomes.

---

## 2. Sources checked

### Neural drive / motor-unit output

1. **NeuroMechanics: Electrophysiological and computational methods to accurately estimate the neural drive to muscles in humans in vivo.** 2024. PMID 38518426.
2. **Changes in neural drive after strength training are better estimated from absolute than normalized EMG amplitude.** 2026. PMID 41309067.
3. **Analysis of motor units with high-density surface electromyography: methodological considerations and physiological significance.** 2025. PMID 41065861.
4. **Motor unit discharge behavior in human muscles throughout force gradation: systematic review/meta-analysis.** 2025. PMID 40095845.

### Voluntary activation

5. **Voluntary activation of the ankle plantar flexors: systematic review/meta-analysis.** 2025. PMID 41878242.
6. **Voluntary activation of the ankle dorsiflexors is overestimated using the interpolated twitch technique with electrical stimulation.** 2026. PMID 42709149.
7. **Assessing voluntary muscle activation with the twitch interpolation technique.** PMID 15049717 — foundational methods review.
8. **Voluntary activation of knee extensor muscles with transcranial magnetic stimulation.** PMID 33270515 — measurement-validity boundary.

### Coordination / activation

9. **Muscle activation and intermuscular coordination adaptations to early strength training during maximal force production.** 2026. PMID 41945585.
10. **Intermuscular coordination adaptations to strength training: muscle synergy analysis during squats with different loads.** 2026. PMID 42516016.
11. **Corticospinal drive modulation to agonist and antagonist arm muscles following strength training and detraining.** 2025. PMID 40888935.
12. **Resistance training-induced adaptations in the neuromuscular system.** 2025. PMID 41361993.

### Force steadiness

13. **Force Steadiness: From Motor Units to Voluntary Actions.** PMID 33595382.
14. **Neural determinants of the increase in muscle strength and force steadiness of the untrained limb following unilateral training.** 2025. PMID 40500979.
15. **Association between neural-drive variability and motor function in middle-aged and older adults.** 2026. PMID 42531610.

### RFD / explosive activation

16. **Neuromechanics of the Rate of Force Development.** 2023. PMID 36123735.
17. **Rate of force development: physiological and methodological considerations.** PMID 26941023.
18. **Corticospinal Excitability During Explosive Voluntary Contractions and Its Association With Rapid Torque Production.** 2025. PMID 41254825.
19. **A comparison of maximal rate of force development between burst and maximum voluntary contractions.** 2026. PMID 42565821.
20. **Specificity of early motor unit adaptations with resistive exercise training.** 2024. PMID 38686581.

### Strength / power

21. **Resistance training-induced adaptations in the neuromuscular system.** 2025. PMID 41361993.
22. **American College of Sports Medicine Position Stand. Resistance Training Prescription for Muscle Function, Hypertrophy, and Physical Performance in Healthy Adults.** 2026. PMID 41843416.
23. **In the Reign of Velocity: Ballistic Training Enhances Rapid Force Production in Chronically Strength-Trained Athletes.** 2025. PMID 40907952.
24. **Power Training Methods Across the Load-Velocity Continuum.** 2026. PMID 42931601.
25. **Is Mechanical Power a Valid and Relevant Parameter to Control Resistance Training?** 2026. PMID 41678794.

### Evidence rule

Force/power outcomes are treated as products of multiple interacting levels:

`motor-neuron output + muscle activation pattern + muscle contractile capacity + architecture/tendon/mechanics + task technique`.

Therefore no single EMG, VA, corticospinal or motor-unit metric is treated as “the neural contribution” by itself.

---

## 3. Recruitment

Recruitment is inherited from NEU-02.

As net excitatory input rises, progressively higher-threshold motor units are generally recruited according to orderly-recruitment constraints.

Recruitment contributes to force by adding active motor units.

Important boundary:

- recruitment threshold is task dependent;
- external load alone does not identify which motor units are active;
- recruitment measured in one isometric task cannot be mapped directly to another dynamic exercise.

Project rule:

**recruitment is one component of neural force control, not a load-to-fiber lookup table.**

---

## 4. Rate coding

Once recruited, motor units can increase force contribution by increasing discharge rate.

Rate coding interacts with:

- recruitment;
- muscle force–frequency properties;
- contractile speed;
- task;
- muscle identity.

The 2025 meta-analysis across 262 studies confirms substantial muscle-specific differences in discharge rates and their force relationships.

Project rule:

**rate coding and recruitment jointly scale neural output; neither alone explains force production.**

---

## 5. Neural drive

For this project, neural drive to a muscle is defined as:

`the ensemble of action potentials discharged by the active spinal motor neurons and transmitted to their muscle fibers`.

This follows the 2024 NeuroMechanics framework.

Important boundary:

**neural drive is not identical to surface EMG amplitude.**

Surface EMG is shaped by:
- motor-unit discharge;
- motor-unit action-potential amplitude;
- muscle-fiber membrane/conduction properties;
- electrode geometry;
- cancellation;
- anatomy;
- normalization method.

The 2026 J Appl Physiol study found absolute multichannel EMG can partially estimate within-person early-training changes in motor-unit firing/recruitment when membrane properties remain stable, whereas normalization to maximal EMG can hide those adaptations.

Project rule:

**EMG can be an imperfect proxy for neural drive under defined conditions; it is not a direct universal neural-drive meter.**

---

## 6. Voluntary activation

Voluntary activation (VA) is an estimate of how completely a person voluntarily activates a muscle/muscle group relative to the additional force that can be evoked by stimulation.

Common methods:
- interpolated/superimposed twitch technique;
- central activation ratio;
- peripheral nerve stimulation;
- selected TMS paradigms.

Typical conceptual form:

`VA ≈ 1 - (superimposed twitch / resting-or-estimated twitch)`.

But this is method dependent.

Current evidence shows:

- plantar-flexor VA estimates vary with age, knee position and method, and the 2025 systematic review judged most included studies low methodological quality;
- 2026 dorsiflexor data show ITT can substantially overestimate VA and reach apparent saturation well below MVC;
- TMS-based VA validity is muscle/protocol specific.

Therefore:

**VA ≠ neural drive ≠ cortical activation ≠ “percent of the nervous system used.”**

VA can detect incomplete voluntary activation under a specific test, but values are not freely comparable across muscles/methods.

Project rule:

**voluntary activation is a measurement construct tied to stimulation method and muscle, not a universal neural-capacity percentage.**

---

## 7. Agonist activation

Agonist activation contributes to joint torque through the force generated by muscles whose moment acts in the target direction.

Greater effective agonist neural drive can increase force when sufficient muscle capacity exists.

However:

`agonist EMG amplitude`
does not equal
`agonist force`.

Force also depends on:
- muscle length;
- moment arm;
- contraction velocity;
- contractile history;
- tendon/muscle mechanics;
- recruitment/discharge distribution.

Training can increase agonist neural output, but changes are task and muscle specific.

The 2025/2026 training literature shows neural changes need not correlate perfectly with strength gains.

Project rule:

**agonist activation is necessary for force but raw EMG is not a direct agonist-force measure.**

---

## 8. Antagonist coactivation

Antagonist coactivation means simultaneous activation of muscles that oppose the net joint action.

It can:

- reduce net agonist torque if opposing torque rises;
- increase joint stiffness/stability;
- improve control under uncertainty or high-speed/multijoint demands;
- redistribute joint loading.

Therefore “less antagonist activation = better” is not universally valid.

Training studies show coactivation can change, but direction and usefulness depend on:
- task;
- joint;
- training status;
- stability requirement;
- measurement method.

A 2025 strength-training/TMS study found selective agonist corticospinal changes alongside transient coactivation changes, without a simple one-to-one relation between neural measures and strength.

Project rule:

**antagonist coactivation is a task-dependent control strategy with both torque cost and stability/control functions.**

---

## 9. Synergist coordination

Synergists share or assist a mechanical task.

Neural control must distribute drive among muscles with overlapping but non-identical:

- moment arms;
- joint actions;
- lengths;
- fatigue states;
- biarticular roles.

Synergist recruitment is therefore not fixed.

The 2026 leg-press/squat studies show training-related adjustments in:
- relative muscle activation;
- intermuscular coherence;
- muscle-synergy timing/weighting.

Project rule:

**synergist contribution is coordinated and task dependent, not a fixed percentage of total force.**

---

## 10. Intermuscular coordination

Intermuscular coordination refers to timing and distribution of activation across multiple muscles used to accomplish a task.

It includes:
- agonist–synergist coordination;
- antagonist interactions;
- multi-joint sequencing;
- shared/common input across muscles;
- task-specific muscle-synergy structure.

The 2026 squat study found two extracted synergies remained broadly robust after 6 weeks of training, while muscle weightings/timing changed subtly; experienced lifters showed different synergy timing and ankle-muscle weighting.

The 2026 early-training leg-press study showed maximal and rapid force gains with changes in intermuscular coherence across synergist and agonist–antagonist pairs.

Project rule:

**coordination adaptation can occur through timing/coupling changes without wholesale replacement of the movement’s synergy structure.**

---

## 11. Intramuscular coordination

For this project, intramuscular coordination means organization of neural output within one muscle/motor-neuron pool, including:

- recruitment;
- discharge-rate distribution;
- common synaptic input;
- discharge variability;
- synchronization-related timing;
- motoneuron intrinsic properties.

It is not treated as an unmeasurable “mind-muscle connection.”

NEU-02 established that motor-neuron pools are largely controlled through shared low-dimensional input with task-dependent modulation.

Project rule:

**intramuscular coordination is motor-unit population control within a muscle, not a separate mystical force mechanism.**

---

## 12. Force steadiness

Force steadiness is the ability to maintain a target force with small fluctuations.

Common metric:
- coefficient of variation of force during a submaximal steady contraction.

It is distinct from maximal force.

Force fluctuations are influenced strongly by:
- variability of common synaptic input;
- motor-unit discharge variability;
- number/recruitment state of active units;
- task force level;
- sensory feedback.

The 2025 cross-education study showed improved strength and steadiness in the untrained limb, with steadiness improvements associated with reduced variability of common synaptic input.

Project rule:

**force steadiness reflects variability/control of neural output during a task and is not synonymous with maximal strength.**

Better maximal strength can coexist with unchanged or independently changing steadiness.

---

## 13. Rate of force development

RFD is:

`Δforce / Δtime`

during the rising phase of force production.

It is highly dependent on:
- measurement window;
- contraction instructions;
- onset detection;
- pretension/countermovement;
- maximal force capacity;
- neural activation;
- muscle contractile properties;
- tendon/mechanical transmission.

### Early RFD

The first ~50–75 ms is strongly constrained by how rapidly neural drive rises:
- high initial motor-unit discharge rates;
- rapid recruitment;
- early agonist activation.

### Later RFD

As time progresses, contribution from:
- maximal force capacity;
- muscle cross-sectional/contractile properties;
- tendon/mechanical characteristics

becomes increasingly important.

Therefore:

**RFD50, RFD100, RFD200 and peak RFD are not physiologically interchangeable.**

Project rule:

**RFD is a time-window-specific neuromechanical outcome, not one pure neural metric.**

---

## 14. Explosive voluntary activation

Explosive voluntary activation refers here to the ability to rapidly increase voluntary muscle activation/neural drive at contraction onset.

It is conceptually different from plateau VA measured during MVC.

A person can have:
- high near-maximal plateau VA;
- slower early activation;
and therefore limited early RFD.

Evidence:
- classic RFD work links early RFD to rapid voluntary activation and initial motor-unit discharge rate;
- the 2025 TMS study found corticospinal excitability increased across the rising torque curve and was associated with rapid torque in some phases;
- the 2026 burst-vs-MVIC study found burst instructions produced both greater RTDmax and faster EMG rise than traditional MVC trials.

Project rule:

**explosive activation = rate/timing of drive development, not the same construct as maximal plateau voluntary activation.**

EMG rate-of-rise is a proxy, not a direct complete neural-drive measure.

---

## 15. Neural contribution to maximal strength

Maximal voluntary strength depends on both neural and peripheral capacity.

Neural contributors include:

- recruitment of available motor units;
- discharge rate;
- effective neural drive;
- voluntary activation;
- agonist/synergist coordination;
- antagonist regulation;
- spinal/corticospinal/motoneuron adaptations.

Peripheral/mechanical contributors include:

- muscle cross-sectional area;
- architecture;
- fiber properties;
- moment arms/joint configuration;
- tendon/mechanical transmission;
- technique.

The 2025 J Physiol review supports early neural adaptation with resistance training, while longer-term gains combine neural and muscular remodeling.

The current evidence also shows:
- neural changes can accompany strength gains;
- individual neural metrics do not always correlate directly with strength change;
- neural adaptation is task specific.

Project rule:

**maximal strength is a neuromuscular/mechanical output; “neural strength” cannot be isolated by one EMG/TMS/VA measure.**

---

## 16. Neural contribution to power

Mechanical power is:

`power = force × velocity`.

Neural factors influence power by affecting:

- rapid recruitment;
- initial discharge rates;
- rate of activation;
- intermuscular coordination;
- agonist/antagonist timing;
- task-specific motor strategy.

But power also depends on:

- maximal strength;
- muscle force–velocity properties;
- muscle architecture;
- tendon/mechanics;
- technique;
- external load.

The 2025 ballistic-training study in strength-trained athletes supports task-specific improvement of rapid-force/power outcomes with maximal-intended-velocity training.

The 2026 ACSM position stand concludes power improves with power-oriented/fast-concentric approaches and selected moderate loads, but this is a programming conclusion rather than proof that neural change alone causes power gains.

The 2026 critical review also emphasizes maximal strength as a major determinant of mechanical power and warns against treating one “optimal power load” as universal.

Project rule:

**power is a force–velocity outcome with important neural contribution, not a pure neural-performance measure.**

---

## 17. Integrated force-production model

### Maximal force

`motor-neuron output`
`+ agonist/synergist coordination`
`- task-relevant antagonist torque`
interacts with
`muscle size/architecture/contractility + tendon/joint mechanics + technique`
`→ maximal external force/torque`.

### Rapid force

`rapid rise in neural drive`
`+ early recruitment/discharge`
`+ muscle/tendon properties`
`→ early RFD`.

As time from onset increases:

`maximal force capacity + contractile/mechanical determinants`
contribute progressively more.

### Power

`neural activation strategy`
interacts with
`force capacity × contraction/movement velocity × mechanics/technique`
`→ external mechanical power`.

---

## 18. Exact area-map coverage

1. Recruitment — **COVERED WITH NEU-02 TASK-DEPENDENT BOUNDARY**.
2. Rate coding — **COVERED AS COMPLEMENTARY TO RECRUITMENT**.
3. Neural drive — **COVERED AS ENSEMBLE MOTOR-NEURON DISCHARGE, NOT RAW EMG**.
4. Voluntary activation — **COVERED AS METHOD/MUSCLE-DEPENDENT MEASUREMENT CONSTRUCT**.
5. Agonist activation — **COVERED WITH EMG-vs-FORCE BOUNDARY**.
6. Antagonist coactivation — **COVERED AS TORQUE-COST + STABILITY/CONTROL TRADEOFF**.
7. Synergist coordination — **COVERED AS TASK-DEPENDENT DRIVE DISTRIBUTION**.
8. Intermuscular coordination — **COVERED AS TIMING/COUPLING ACROSS MUSCLES**.
9. Intramuscular coordination — **COVERED AS MOTOR-UNIT-POOL ORGANIZATION**.
10. Force steadiness — **COVERED AS SUBMAXIMAL OUTPUT-VARIABILITY CONSTRUCT DISTINCT FROM STRENGTH**.
11. Rate of force development — **COVERED AS TIME-WINDOW-SPECIFIC NEUROMECHANICAL OUTCOME**.
12. Explosive voluntary activation — **COVERED AS RAPID DRIVE DEVELOPMENT DISTINCT FROM PLATEAU VA**.
13. Neural contribution to maximal strength — **COVERED WITH NEURAL + MUSCULAR/MECHANICAL BOUNDARY**.
14. Neural contribution to power — **COVERED WITH FORCE×VELOCITY / TASK-SPECIFIC BOUNDARY**.

Result: **14/14 content coverage.**

---

## 19. Measurement / interpretation limits

### Neural drive

Direct neural-drive estimation requires representative motor-unit sampling.

Surface EMG alone does not provide a complete motor-neuron census.

### Voluntary activation

VA depends on:
- muscle;
- stimulation site/method;
- stimulus characteristics;
- twitch normalization/extrapolation;
- contraction intensity;
- participant tolerance/effort.

Current dorsiflexor evidence demonstrates substantial overestimation can occur.

### EMG

EMG changes can reflect:
- neural output;
- membrane properties;
- electrode geometry;
- action-potential cancellation.

Normalization can conceal within-person neural adaptations.

### RFD

RFD depends strongly on:
- onset detection;
- time window;
- instructions;
- pretension;
- filtering/dynamometer compliance;
- familiarization.

### Coordination

Muscle synergy/coherence results depend on:
- selected muscles;
- preprocessing;
- factor/model extraction;
- task/load;
- normalization.

Project rule:

**neural force-production variables are measurement-specific constructs and should not be collapsed into one “CNS output” score.**

---

## 20. Training-relevant implications

1. **Do not use normalized EMG amplitude as a universal neural-drive measure.**
2. **Do not interpret VA as “percent of the nervous system activated.”**
3. **Do not compare VA values across muscles/methods as if they were identical constructs.**
4. **Do not assume less antagonist activity is always better.**
5. **Treat synergist/intermuscular coordination as task specific.**
6. **Define intramuscular coordination through motor-unit control, not vague mind-muscle language.**
7. **Do not equate force steadiness with maximal strength.**
8. **Always name the RFD time window.**
9. **Separate explosive activation from plateau MVC activation.**
10. **Do not attribute maximal strength gains to neural change alone.**
11. **Do not attribute power gains to neural change alone.**
12. **Keep acute measurement changes separate from chronic training adaptation; detailed adaptation belongs NEU-06.**

---

## 21. Applicability to Ilya

This PASS does not establish:

- Ilya's voluntary activation;
- neural drive;
- agonist activation;
- antagonist coactivation;
- force steadiness;
- RFD profile;
- explosive voluntary activation;
- neural limitation to maximal strength;
- neural limitation to power;
- optimal training load/velocity.

Those require task-specific testing and later TST/PRO/IND integration.

No personalized neural-strength or power prescription is created here.

---

## 22. Confidence / unresolved issues

### HIGH

- neural drive is ensemble motor-neuron output and is not identical to surface EMG;
- recruitment + rate coding jointly regulate motor output;
- VA is method/muscle dependent;
- force steadiness is distinct from maximal force;
- early RFD depends strongly on rapid neural activation;
- later RFD increasingly reflects maximal force and peripheral/mechanical properties;
- maximal strength and power are multi-factorial neuromuscular/mechanical outcomes.

### MODERATE-HIGH

- intermuscular coordination changes with strength training;
- antagonist coactivation has both torque-cost and stability/control roles;
- early explosive activation is a distinct performance dimension from plateau VA;
- task-specific neural adaptation contributes to strength and power development.

### MODERATE / CONTEXT-DEPENDENT

- exact contribution of one neural mechanism to a specific multi-joint lift;
- exact “optimal” antagonist coactivation;
- exact relation between one EMG/TMS/VA metric and strength change;
- transfer from isometric RFD to dynamic sport performance;
- exact causal contribution of synergy/coherence changes to performance;
- exact neural contribution to external power at a given load/velocity.

---

## 23. Content decision

**NEU-05/PASS-01 = CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING.**

Established:

1. exact Section 5 coverage = **14/14 at content level**;
2. recruitment and rate coding inherit the task-dependent NEU-02 model;
3. neural drive is defined as ensemble active-motoneuron discharge rather than raw/normalized EMG;
4. EMG is a conditional proxy with methodological and membrane/anatomical determinants;
5. voluntary activation is a stimulation-based measurement construct and is not synonymous with neural drive/cortical activation;
6. agonist activation is necessary for force but EMG amplitude is not direct force;
7. antagonist coactivation is a task-dependent torque-cost/stability tradeoff;
8. synergist and intermuscular coordination are adaptable/task specific;
9. intramuscular coordination is defined through motor-unit population control;
10. force steadiness is distinguished from maximal force;
11. RFD is time-window specific and combines neural + muscular/mechanical determinants;
12. explosive voluntary activation is rapid drive development rather than plateau VA;
13. maximal strength remains neural + muscular + mechanical;
14. power remains neural + force–velocity + mechanical/technical;
15. no content-level blocker was found.

No canonical NEU-05 finding is created yet.

---

## 24. Next pass

**NEU-05 / PASS-02 — Closure audit and synthesis.**

Audit must specifically test:

1. 14/14 exact Section 5 scope;
2. recruitment/rate-coding inheritance from NEU-02;
3. neural-drive definition and EMG boundary;
4. voluntary-activation construct/measurement limits;
5. agonist activation vs muscle force;
6. antagonist coactivation tradeoff;
7. synergist/intermuscular/intramuscular coordination boundaries;
8. force-steadiness mechanism and distinction from maximal force;
9. early vs late RFD determinants and measurement windows;
10. explosive activation vs plateau VA;
11. maximal-strength neural contribution boundary;
12. power neural contribution boundary;
13. whether remaining uncertainty blocks downstream NEU decisions.

Do not start NEU-06 in this same working block.
