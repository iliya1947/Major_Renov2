# NEU-02 / PASS-01 — Motor units: recruitment/rate coding content revalidation

Дата: 2026-11-19  
Статус: **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-02 — Motor units: recruitment/rate coding

## 0. Source-of-truth / topic status

Current scope:

1. `research/fitness/areas/04_neurophysiology_motor_learning.md`, Section 2 — **12 exact items**;
2. `research/fitness/NORMALIZED_KNOWLEDGE_TREE.md` — NEU-02.

Normalized topic:

> Motor units: recruitment/rate coding.

No canonical NEU-02 finding exists yet.

Exact content scope = **12 items**.

---

## 1. Purpose / Question Card

### Decision

Build a sufficiently accurate human motor-unit control model for later force production, fatigue, neural adaptation and exercise-technique analysis without:

- treating a motor unit as only a motor neuron;
- treating motor-unit size as only muscle-fiber number;
- treating recruitment threshold as a fixed personal constant independent of task;
- treating the size principle as a claim that recruitment is rigidly identical across all tasks;
- assuming derecruitment occurs exactly at recruitment threshold;
- reducing force control to recruitment alone or rate coding alone;
- confusing rate coding with temporal summation;
- equating common drive/shared synaptic input with spike synchronization;
- treating greater synchronization as automatically better strength/RFD;
- assuming firing rate simply rises linearly with force in all muscles;
- treating fatigue-related firing-rate decline as automatically causal for force loss;
- treating slow/fast motor units as perfectly discrete human categories rather than a physiological continuum with task- and species-related evidence limits.

### Question type

Motor-unit organization and neural force-control physiology.

### Closure criterion for this PASS

All 12 exact Section 2 items must be covered at content level; size principle must remain the default recruitment architecture while allowing task-dependent threshold modulation; recruitment and rate coding must be treated as complementary; common synaptic input and synchronization must be separated; fatigue behavior must remain task dependent; fast/slow motor-unit claims must preserve the human-vs-animal evidence boundary.

---

## 2. Sources checked

### Human discharge behavior / recruitment

1. **Motor unit discharge behavior in human muscles throughout force gradation: systematic review/meta-analysis with meta-regression.** 2025. PMID 40095845.
2. **Analysis of motor units with high-density surface electromyography: methodological considerations and physiological significance.** 2025. PMID 41065861.
3. **High-Density Surface EMG Decomposition: Achievements, Challenges, and Concerns.** 2025. PMID 40085467.
4. **The demonstration of the size principle in humans using macro EMG and precision decomposition.** PMID 8606698 — foundational human evidence.
5. **Common synaptic input, synergies and size principle: Control of spinal motor neurons for movement generation.** 2022. PMID 36353890.
6. **Common inputs to motor units are modulated by force profile and muscle length.** 2026. PMID 42667666.
7. **Modulation of motor unit recruitment threshold and common synaptic inputs in triceps surae muscles: effects of ankle position.** 2025. PMID 40421865.
8. **The effect of small changes in rate of force development on muscle fascicle velocity and motor unit discharge behaviour.** PMID 35146568.
9. **Motor unit firing rates during slow and fast contractions in boys and men.** 2024. PMID 38762834.
10. **Biceps femoris long-head motor unit discharge rates and recruitment thresholds vary across 9 weeks of eccentric training.** 2026. PMID 42055279.

### Common input / synchronization

11. **Common synaptic input to motor neurons, motor unit synchronization, and force control.** PMID 25390298.
12. **The human motor neuron pools receive a dominant slow-varying common synaptic input.** PMID 27151459.
13. **The Volitional Control of Individual Motor Units Is Constrained within Low-Dimensional Neural Manifolds by Common Inputs.** 2024. PMID 38951036.
14. **Common inputs to motor units are modulated by force profile and muscle length.** 2026. PMID 42667666.
15. **Spinal motor neuron pools may be partly driven by impulsive common inputs.** 2026. PMID 42020191.
16. **The relative strength of common synaptic input to motor neurons is not a determinant of maximal rate of force development in humans.** PMID 31120812.
17. **Force Steadiness: From Motor Units to Voluntary Actions.** PMID 33595382.

### Fatigue

18. **The 'muscular wisdom' fatigue hypothesis: historical perspectives and contemporary challenges.** 2025. PMID 40590945.
19. **Motor Unit Discharge Rates During Maximal Fatiguing Eccentric Contractions and Recovery in the Human Elbow Extensors.** 2025. PMID 40903001.
20. **Maximal human motor unit firing rates decline in response to nonvolitional induced torque loss: further evidence for peripheral feedback inhibition.** 2025. PMID 41015485.
21. **Intermittent low-intensity contractions cause a dissociation between maximal motor unit firing rates and changes in torque and contractile speed.** 2026. PMID 42550926.
22. **Fatigue-induced decline and recovery of maximal motor unit firing rates... quadriceps.** 2026. PMID 42607270.

### Motor-unit types / phenotype

23. **Neuromuscular Activity Determines, at Least in Part, the Motoneuron, Nerve and Muscle Properties...** 2025. PMID 40725136.
24. **Fiber-type-specific architecture and pathophysiology of the neuromuscular junction.** 2026. PMID 41548740.
25. **Circular continuum of alpha motoneuron types.** 2025. PMID 40832332 — **preprint**, animal mechanistic evidence; not used as sole closure basis.
26. **Machine-learning classification of motor unit types in the adult mouse.** 2026. PMID 41955226 — peer-reviewed animal mechanistic evidence; updated journal version of the 2025 preprint PMID 41332600.

### Training adaptation / limits

27. **The Effect of Resistance Training on Motor Unit Firing Properties: systematic review/meta-analysis.** 2022. PMID 35295567.
28. **The modulation of human motoneuron discharge patterns with contraction force in resistance- and endurance-trained individuals.** 2026. PMID 41533434.
29. **Motor imagery training... motor unit behavior.** 2026. PMID 41794141.
30. **Age-related differences in motor unit behaviours and maximal strength: systematic review/meta-analysis.** 2026. PMID 42520337.

### Evidence rule

Human motor-unit recordings provide direct access to discharge behavior, but the observed sample is not automatically the whole active motor-neuron pool.

HD-sEMG decomposition is powerful but method dependent, particularly for:
- high-force contractions;
- dynamic movement;
- high-threshold units;
- unit tracking across tasks/sessions.

Therefore:

**measured motor-unit behavior = sampled neural output under a specific task/method, not a universal property of the person.**

---

## 3. Motor unit definition

A motor unit consists of:

`one alpha motor neuron + its axon/branches + all skeletal-muscle fibers innervated by that neuron`.

Functionally, the motor unit links:

`spinal motoneuron output`
to
`a distributed set of muscle fibers`.

The muscle fibers belonging to one motor unit tend to share broadly related contractile/metabolic phenotype because they receive common neural activation from the same alpha motor neuron.

Project rule:

**motor unit is the neuron–axon–muscle-fiber functional unit, not the motor neuron alone.**

---

## 4. Motor-unit size

“Size” can refer to different but related quantities:

### Motoneuron size / excitability

Larger alpha motor neurons generally have:

- larger soma/axon;
- lower input resistance;
- greater rheobase/current required for recruitment.

### Peripheral motor-unit size

A motor unit can also be described by:

- number of innervated muscle fibers;
- territory;
- twitch force;
- motor-unit action-potential characteristics.

Small low-threshold units generally produce smaller force increments and are more readily recruited.

Large high-threshold units generally produce larger force increments.

Important boundary:

**motor-unit size is multidimensional; EMG amplitude is not a direct universal measure of unit force or neuron size.**

---

## 5. Recruitment threshold

Recruitment threshold is the level of neural drive/force/task demand at which a previously inactive motor unit begins to discharge.

Common experimental expression:

- absolute force/torque;
- %MVC/%MVF;
- task-specific target level.

Recruitment threshold is useful but not immutable.

Current human studies show it can shift with:

- force trajectory/rate of force development;
- muscle length/joint angle;
- task;
- training;
- fatigue/neuromodulatory state;
- normalization to a changing MVC.

Examples:

- faster force development can recruit units at lower external force;
- ankle position changed recruitment thresholds of matched triceps-sur ae units in 2025;
- eccentric training changed absolute recruitment thresholds in biceps femoris long head.

Project rule:

**recruitment threshold is task/context dependent and should not be treated as a fixed identity label.**

---

## 6. Size principle

The size principle remains the default organizational rule:

`smaller / more excitable motoneurons`
are generally recruited before
`larger / less excitable motoneurons`
as net excitatory input rises.

Consequences:

- low-threshold units are active at low forces;
- progressively higher-threshold units are added as demand rises;
- orderly recruitment allows smooth force scaling.

Foundational human evidence supports a relation between recruitment order, recruitment threshold and motor-unit size.

Modern framework work also links orderly recruitment with common synaptic input and modular control.

### Important boundary

The size principle does **not** mean:

- the same unit must have the same %MVC threshold in every task;
- muscle length/force-rate/sensory input cannot modulate thresholds;
- every motor neuron in a muscle receives identical synaptic input;
- selective functional clustering cannot occur.

Project rule:

**size principle constrains recruitment order under shared drive; task-dependent synaptic input can modify observed thresholds without invalidating the principle.**

No broad “high-threshold units can only be trained with heavy weight” inference is made here.

That belongs PRO and requires task-specific evidence.

---

## 7. Derecruitment

Derecruitment is when an active motor unit stops discharging as net drive declines.

Derecruitment threshold need not equal recruitment threshold.

Reasons include:

- motoneuron intrinsic properties;
- persistent inward currents (PICs);
- neuromodulatory state;
- inhibitory/excitatory synaptic balance;
- task history.

This produces hysteresis:

`recruitment threshold ≠ derecruitment threshold`
in many conditions.

Current human HD-sEMG work uses recruitment–derecruitment relations and paired-unit ΔF approaches to estimate motoneuron PIC-related behavior.

The 2025/2026 studies show:
- recruitment and derecruitment thresholds can adapt differently;
- discharge-rate hysteresis changes with contraction force and training status.

Project rule:

**derecruitment is not simply recruitment played backward.**

---

## 8. Rate coding / firing frequency

Once recruited, a motor unit can increase force contribution by increasing discharge rate.

Therefore force control uses both:

1. recruitment of additional motor units;
2. rate coding of already active units.

The 2025 systematic review/meta-analysis of 262 human studies shows:

- discharge rates differ markedly among muscles;
- contraction intensity changes discharge behavior;
- muscle identity and task strongly modify absolute firing rates.

Thus no universal firing-rate number defines “good neural drive.”

Common patterns include:

- earlier/lower-threshold units often discharge faster than later/higher-threshold units at the same task level;
- firing rate generally increases as neural drive rises;
- relation can be nonlinear;
- the relative role of recruitment vs rate coding differs across muscles and force ranges.

Project rule:

**rate coding is muscle- and task-specific; firing rate cannot be interpreted without recruitment threshold, force level and method.**

---

## 9. Temporal summation

A single motor-neuron action potential produces a muscle-fiber twitch.

If another discharge arrives before complete mechanical relaxation:

`successive twitches overlap`
`→ temporal summation`
`→ greater force`.

As discharge frequency increases:

`unfused tetanus → increasingly fused force`.

Therefore rate coding influences muscle force partly through the muscle’s force–frequency relation.

Important distinction:

- **rate coding** = neural discharge-frequency control;
- **temporal summation** = mechanical consequence of repeated activation in muscle.

Contractile speed/fatigue state changes how much firing frequency is required for a given degree of fusion.

Project rule:

**rate coding and temporal summation are linked but not identical constructs.**

---

## 10. Common drive / common synaptic input

Motor neurons receive:

- common synaptic input;
- independent/noise-like input;
- intrinsic neuromodulatory effects.

A large slow-varying common component helps coordinate force production efficiently across motor units.

Current evidence supports:
- substantial shared low-frequency input within motor-neuron pools;
- shared inputs can span motor neurons across muscles;
- common input structure is task dependent;
- force profile and muscle length can change the composition of shared inputs.

The 2024 individual-MU neurofeedback study further showed that voluntary control of individual units is constrained by low-dimensional common-input structure.

Project rule:

**motor-unit pools are largely controlled through shared low-dimensional inputs rather than independent voluntary command of each unit.**

---

## 11. Synchronization

Motor-unit synchronization refers to correlated timing of discharges.

It can arise from common synaptic inputs.

However:

`common input` ≠ `synchronization metric`.

The classic human/common-input literature shows that:
- pairwise synchronization estimates are influenced by discharge rate and sampled unit number;
- slow common synaptic input is a major determinant of effective neural drive/force fluctuations;
- greater short-term synchronization is not established as a universal determinant of maximal force or rate of force development.

The human rapid-force study (PMID 31120812) found:
- average motor-unit discharge rate was associated with RFD;
- estimated synchronization/common-input strength did not independently determine maximal RFD.

A 2026 J Physiol study adds nuance by showing that motor-neuron pools may also receive impulsive common inputs capable of producing synchronization.

Project rule:

**synchronization is evidence about shared timing/input structure, not a generic “more synchronization = more strength” target.**

---

## 12. Motor-unit behavior across effort levels

As voluntary effort rises, the motor system generally increases output through:

`recruitment + rate coding + task-specific common synaptic input`.

The 2025 meta-analysis demonstrates substantial muscle differences.

Examples:
- soleus typically has lower discharge rates than several upper-limb muscles at comparable low–moderate relative forces;
- force–discharge relations differ across muscles;
- high-force behavior cannot be inferred from low-force recordings alone.

Fast contractions also alter strategy:
- recruitment thresholds can fall;
- initial discharge rates can increase;
- large/higher-threshold units can receive greater initial rates than in slow contractions.

Project rule:

**“higher effort” does not map onto one universal firing-rate curve.**

Task speed, muscle, joint position and force profile matter.

---

## 13. Motor-unit behavior during fatigue

Fatigue changes motor-unit behavior, but no single pattern explains every fatigue task.

Common findings in sustained/high-intensity tasks include:

- declining firing rates;
- altered recruitment;
- altered variability/common input;
- changing afferent inhibition/excitation;
- peripheral contractile impairment.

The 2025 muscular-wisdom review concludes that firing-rate decline during sustained maximal contractions should not simply be interpreted as the cause of force loss; it can be an adaptive response to peripheral fatigue/contractile slowing.

Current studies sharpen this boundary:

- maximal eccentric fatigue reduced motor-unit discharge rate >35%, with discharge rate recovering by ~10 min while torque remained depressed at 30 min;
- nonvolitional peripheral torque loss can itself provoke reduced maximal firing rate, supporting feedback-mediated inhibition;
- 2026 intermittent low-intensity fatigue produced major torque loss without a significant fall in maximal firing rate;
- 2026 sustained maximal quadriceps work produced ~50% reductions in force and firing rate, with similar recovery patterns across sexes/muscles studied.

Project rule:

**fatigue-related firing-rate change is task dependent and can be consequence, compensation and/or contributor—not a universal causal marker of fatigue.**

Detailed central/peripheral fatigue belongs NEU-08 / PHY.

---

## 14. Slow vs fast motor units

Classical physiological motor-unit categories:

- slow (S);
- fast fatigue-resistant (FR);
- fast intermediate (FI);
- fast fatigable (FF).

Broad organization:

### Slow units

Tend to have:
- lower recruitment threshold;
- smaller twitch force;
- slower contractile properties;
- higher fatigue resistance;
- high habitual activation.

### Faster units

Tend to have:
- higher recruitment threshold;
- larger force;
- faster contraction;
- lower fatigue resistance toward the FF end.

Current review evidence retains S/FR/FF-type organization but also emphasizes a continuum rather than perfectly discrete bins.

Animal electrophysiological work in 2025–2026 further demonstrates transitional/hybrid phenotypes and continuous overlap.

Important human boundary:

Direct classification of complete S/FR/FI/FF motor-unit types is much easier experimentally in animal preparations than in intact humans.

Human HD-sEMG usually infers motor-unit behavior through:
- recruitment threshold;
- discharge properties;
- action-potential features;
rather than directly measuring twitch/fiber phenotype for every unit.

Project rule:

**slow/fast motor-unit types are useful physiological archetypes, but healthy-human motor-unit behavior should not be overclassified from surface EMG alone.**

---

## 15. Measurement / interpretation limits

Modern HD-sEMG decomposition greatly expands accessible motor-unit samples but does not remove all sampling limits.

Important issues:

1. decomposition algorithms differ;
2. dynamic/high-force tasks are harder than steady isometric tasks;
3. detected units may not represent the entire active pool;
4. high-threshold units can be harder to identify/track;
5. number of sampled units affects mean firing-rate estimates;
6. recruitment threshold normalized to %MVC changes if MVC changes;
7. motor-unit matching across sessions can introduce selection bias;
8. synchronization/coherence metrics depend on signal-processing assumptions.

The 2024 study on firing-rate sample size showed more units are needed for stable mean estimates as contraction intensity rises.

The 2025 HD-sEMG reviews emphasize decomposition validation and method-specific interpretation.

Project rule:

**motor-unit data are high-resolution samples of neural output, not a complete census of the motor-neuron pool.**

---

## 16. Exact area-map coverage

1. Alpha motor neuron + innervated fibers — **COVERED AS FUNCTIONAL MOTOR UNIT**.
2. Motor-unit size — **COVERED AS MULTIDIMENSIONAL NEURON/PERIPHERAL UNIT PROPERTY**.
3. Recruitment threshold — **COVERED AS TASK/CONTEXT-DEPENDENT**.
4. Size principle — **COVERED AS DEFAULT ORDERLY-RECRUITMENT CONSTRAINT WITH TASK MODULATION**.
5. Derecruitment — **COVERED WITH HYSTERESIS/PIC BOUNDARY**.
6. Rate coding / firing frequency — **COVERED AS COMPLEMENTARY FORCE-CONTROL MECHANISM**.
7. Temporal summation — **COVERED AS MUSCLE-MECHANICAL CONSEQUENCE OF REPEATED DISCHARGE**.
8. Common drive — **COVERED AS SHARED SYNAPTIC-INPUT / LOW-DIMENSIONAL CONTROL**.
9. Synchronization — **COVERED WITH COMMON-INPUT-vs-STRENGTH BOUNDARY**.
10. Behavior at different effort levels — **COVERED AS MUSCLE/TASK/FORCE-PROFILE DEPENDENT**.
11. Behavior during fatigue — **COVERED AS TASK-DEPENDENT, NON-UNIVERSAL CAUSAL PATTERN**.
12. Slow vs fast motor units — **COVERED WITH CONTINUUM AND HUMAN-MEASUREMENT BOUNDARY**.

Result: **12/12 content coverage.**

---

## 17. Established project-level model

### Force-control architecture

`shared + task-specific synaptic input`
`→ orderly recruitment constrained by motoneuron excitability`
`+ rate coding of active units`
`→ motor-unit action potentials`
`→ twitch summation / muscle force`.

### Higher demand

`neural drive ↑`
generally produces:
- recruitment of higher-threshold units;
- rate modulation of already active units.

But exact behavior depends on:
- muscle;
- task;
- contraction speed;
- muscle length;
- sensory feedback;
- fatigue;
- neuromodulatory state.

### Common-input boundary

`common synaptic input`
coordinates motor-neuron pools.

`synchronization`
is one observable timing phenomenon and is not synonymous with stronger neural drive.

---

## 18. Training-relevant implications

1. **Do not reduce motor-unit control to “recruit more fibers.”**
2. **Do not treat recruitment threshold as fixed across exercises or joint positions.**
3. **Use size principle as the default ordering rule, not as a rigid task-independent threshold map.**
4. **Do not claim that only heavy loads can access high-threshold units from NEU-02 alone.**
5. **Do not infer whole-pool behavior from a few decomposed units.**
6. **Do not use absolute firing-rate numbers across different muscles as directly comparable readiness/strength scores.**
7. **Do not equate rate coding with temporal summation.**
8. **Do not equate common drive with synchronization.**
9. **Do not claim greater synchronization is automatically better for strength/RFD.**
10. **Treat fatigue-related firing-rate decline as task dependent, not as a universal central-fatigue biomarker.**
11. **Use slow/fast motor-unit labels as physiological archetypes, not simplistic surface-EMG classifications.**
12. **Detailed training-induced recruitment changes belong NEU-06/PRO after this foundation is closed.**

---

## 19. Applicability to Ilya

This PASS does not establish:

- which motor units Ilya recruits in a specific exercise;
- his recruitment thresholds;
- his firing rates;
- his common-drive structure;
- his synchronization;
- whether neural drive limits his strength;
- whether a load recruits “all fibers”;
- whether high-threshold units require a particular external weight;
- his fatigue-related motor-unit behavior.

Those require downstream task-specific evidence and/or measurements.

No personalized motor-unit prescription is created here.

---

## 20. Confidence / unresolved issues

### HIGH

- motor unit = alpha motor neuron + innervated muscle fibers;
- recruitment and rate coding jointly regulate force;
- orderly recruitment/size principle is a robust default organizing rule;
- recruitment threshold is task/context dependent;
- discharge behavior differs across muscles and force levels;
- shared synaptic input is fundamental to motor-neuron-pool control;
- fatigue-related discharge behavior is task dependent.

### MODERATE-HIGH

- derecruitment hysteresis/PIC-related effects materially shape human discharge behavior;
- common-input structure can change with muscle length/force profile/task;
- greater synchronization is not a universal determinant of RFD/strength;
- motor-unit type exists on a physiological continuum rather than perfectly discrete bins.

### MODERATE / CONTEXT-DEPENDENT

- exact recruitment threshold of a unit across dynamic exercises;
- exact relation between human recruitment threshold and fiber phenotype;
- practical contribution of synchronization in a given strength task;
- exact role of PIC/neuromodulation at high forces;
- direct human mapping of S/FR/FI/FF phenotype for individual units;
- transfer from isometric HD-sEMG findings to complex dynamic resistance exercise.

---

## 21. Content decision

**NEU-02/PASS-01 = CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING.**

Established:

1. exact Section 2 coverage = **12/12 at content level**;
2. motor unit is defined as alpha motor neuron plus its innervated muscle fibers;
3. motor-unit “size” is multidimensional;
4. recruitment threshold is task/context dependent;
5. size principle remains the default orderly-recruitment architecture without implying rigid task-independent thresholds;
6. derecruitment can show hysteresis because motoneuron output is history/neuromodulation dependent;
7. recruitment and rate coding jointly scale force;
8. temporal summation is distinguished from neural rate coding;
9. common synaptic input is a core low-dimensional control mechanism;
10. synchronization is not synonymous with common drive or stronger force production;
11. motor-unit behavior across effort depends on muscle/task/force profile;
12. fatigue-related firing-rate behavior is non-universal and may be compensatory/consequential as well as contributory;
13. slow/fast units are retained as physiological archetypes with continuum/human-measurement limits;
14. HD-sEMG sampling/method limits are explicit;
15. no content-level blocker was found.

No canonical NEU-02 finding is created yet.

---

## 22. Next pass

**NEU-02 / PASS-02 — Closure audit and synthesis.**

Audit must specifically test:

1. 12/12 exact Section 2 scope;
2. motor-unit definition/size;
3. recruitment threshold vs fixed trait;
4. size-principle scope and task-dependence boundary;
5. derecruitment/hysteresis;
6. recruitment vs rate coding;
7. rate coding vs temporal summation;
8. common drive vs synchronization;
9. effort-level/task dependence;
10. fatigue-related discharge behavior;
11. slow/fast continuum and human evidence boundary;
12. HD-sEMG sampling limits;
13. whether remaining uncertainty blocks downstream NEU decisions.

Do not start NEU-03 in this same working block.
