# NEU-01 — Neuroscience inference foundations: levels of analysis, localization/networks, lesion/stimulation, fMRI/EEG, reverse inference, decoding, causality, and measurement

Status: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**
Evidence cutoff: **2026-11-19**
Scope: public neuroscience evidence and generic inference methodology only; no individualized psychological material.

## Purpose

Earlier blocks established psychological constructs before neural explanations.

NEU-01 addresses the translation problem:

**What can different neuroscience methods actually establish about psychological processes, and what cannot be inferred from activation maps, connectivity, lesions, stimulation, electrophysiology, or neural decoders?**

High-risk errors to prevent:
- "brain region X is the center of psychological process Y";
- "activation = mechanism";
- "activation = necessity";
- "activation = specificity";
- "deactivation = inhibition";
- "BOLD = neuronal firing";
- "functional connectivity = direct anatomical connection";
- "functional connectivity = causal influence";
- "network = one uniquely identified biological circuit";
- "lesion site = exact causal locus";
- "lesion evidence proves sufficiency";
- "lesion-network map = causal disorder-specific circuit";
- "TMS activates/inhibits the targeted region in a known direction";
- "TMS behavioral effect = purely local cortical effect";
- "EEG electrode = activity directly beneath that electrode";
- "EEG source localization uniquely solves where activity came from";
- "ERP component = one psychological process";
- "decoding above chance = representation identified";
- "decoder = mind reading";
- "prediction = mechanism";
- "cross-validation = external generalization";
- "neural correlate = biomarker";
- "brain–behavior association = individual diagnosis";
- "one neuroscience method outranks psychological evidence by default";
- "more biological level = more explanatory";
- "psychological construct can be replaced by its neural correlate".

## Core rule

**Neuroscience methods constrain psychological explanations only through the type of evidence they actually provide. Observational activation, temporal covariation, functional connectivity, structural damage, perturbation, and predictive decoding answer different questions. Neural evidence becomes mechanistically strong when construct validity, measurement validity, spatial/temporal specificity, causal intervention, convergence across methods, and behavioral consequences align. No single brain map, signal, lesion, or decoder establishes a psychological mechanism by itself.**

Canonical reasoning:

\`define psychological construct -> specify neural level/scale -> identify what the modality directly measures -> distinguish association, prediction, necessity, sufficiency, and perturbation -> test spatial/temporal specificity and network alternatives -> verify reliability and out-of-sample validity -> integrate convergent methods -> state only the narrowest brain–behavior inference supported\`.

## 1. Levels of analysis

Psychological and neural explanations can be framed at multiple levels:

- behavioral/psychological construct;
- computation or information-processing operation;
- algorithm/strategy;
- large-scale network;
- local circuit/population;
- cell type;
- synapse;
- receptor/molecular process.

These levels can constrain one another.

They are not interchangeable.

## 2. Lower biological level is not automatically better explanation

A molecular or regional statement can be:
- more biologically specific;
but
- less informative about the psychological computation.

Example form:

**"region X activates"**
does not explain:
- what information is represented;
- what transformation is performed;
- why behavior changes.

Reduction in scale is not automatically reduction in explanatory uncertainty.

## 3. Cross-level mapping is usually many-to-many

One psychological construct can recruit:
- multiple regions;
- multiple networks;
- multiple neural states.

One region/network can participate in:
- multiple tasks;
- multiple computations.

Therefore:
**psychological construct = one brain region**
is usually too strong.

## 4. Localization and distribution are not opposites

Current neuroscience supports both:
- regional specialization;
- distributed coding/network recruitment.

A 2026 Nature Reviews Neuroscience synthesis argues that cognitive variables are represented broadly but not ubiquitously across the brain.

Thus:
**localized specialization can exist inside distributed systems**.

## 5. Localization requires a precise target

Possible targets:
- computation;
- representation;
- causal necessity;
- temporal operation;
- output.

"Where is memory?" is too broad.

Better:
**which neural populations are necessary for this specific memory operation under this task?**

## 6. Region label is not functional ontology

Anatomical labels such as:
- prefrontal cortex;
- insula;
- amygdala;
- hippocampus

refer to heterogeneous tissue and subregions.

A macroanatomical label should not be treated as:
- one computation;
- one cell population;
- one psychological function.

## 7. Activation is association under an experimental contrast

A task-fMRI activation contrast usually means:
**the measured BOLD signal differed between modeled conditions**.

It does not directly establish:
- neural necessity;
- cognitive specificity;
- causal mechanism;
- individual trait.

Contrast interpretation depends on what differs between conditions.

## 8. Cognitive subtraction can be incomplete

Two task conditions may differ in:
- attention;
- difficulty;
- error rate;
- motor response;
- arousal;
- strategy.

Activation attributed to process X may partly reflect uncontrolled task differences.

Psychological task validity precedes neural interpretation.

## 9. fMRI BOLD is an indirect signal

BOLD fMRI reflects changes in:
- blood oxygenation;
- blood flow/volume;
- vascular response

linked to neural/metabolic activity through neurovascular coupling.

BOLD is not a direct recording of:
- action potentials;
- neurotransmitter release;
- one cell type.

## 10. Neurovascular coupling is complex

A 2025 review emphasizes that spontaneous/task-free BOLD–neural relations depend on multiple neurovascular mechanisms and remain incompletely understood.

Therefore:
**BOLD amplitude should not be translated mechanically into "amount of neural activity."**

## 11. Positive BOLD ≠ universal neural increase

A 2026 human quantitative-fMRI study found that approximately 40% of voxels with significant task-related BOLD changes showed discordant oxygen-metabolism changes in that dataset, especially in default-mode regions.

This does not make BOLD invalid.

It demonstrates that:
**canonical BOLD interpretation can fail locally and contextually**.

## 12. Negative BOLD ≠ neural inhibition

A negative BOLD response can reflect:
- reduced local metabolism/activity;
- vascular dynamics;
- redistribution;
- network context.

Do not label it "inhibition" without convergent physiological evidence.

## 13. Spatial resolution is not cellular localization

A voxel contains:
- many neurons;
- glia;
- vasculature;
- multiple microcircuits.

Voxel activation is a mesoscopic aggregate.

Fine-looking maps should not be described as cellular mechanisms.

## 14. Temporal resolution of BOLD is hemodynamic

BOLD responses unfold over seconds.

Fast neural processes can occur at:
- millisecond;
- subsecond timescales.

Event timing estimated from fMRI depends on the hemodynamic model.

fMRI does not directly resolve rapid neural sequence.

## 15. Task-fMRI group effects and individual differences are different use cases

A measure can robustly detect:
- average task activation

while showing weak:
- rank-order reliability across individuals.

Group-level reproducibility does not guarantee individual-level biomarker usefulness.

## 16. Task-fMRI individual-difference reliability has historically been limited

A major meta-analysis found poor average test–retest reliability for common task-fMRI activation measures:
- mean ICC ≈ .397 across 90 experiments.

This remains a core calibration point.

It does not imply every fMRI-derived measure is unreliable.

## 17. Reliability depends on the derived measure

Different fMRI measures can show different reliability:
- activation contrasts;
- connectivity;
- variability/complexity;
- individualized network measures.

There is no single "reliability of fMRI."

Reliability must be estimated for the exact pipeline and target.

## 18. Within-person variability can be real neural variability

Dense longitudinal task-fMRI work found low between-person stability but substantial within-person fluctuations associated with:
- mood;
- sleep;
- stress exposure.

Thus low test–retest reliability can mix:
- measurement error;
- real state variation.

This mirrors psychological state/trait distinctions.

## 19. Small-sample fMRI adequacy is analysis-dependent

The 2026 Imaging Neuroscience study using UK Biobank/HCP showed:
- large group activation effects can sometimes be recovered with relatively small samples;
- stable predictive models usually require hundreds or thousands.

Therefore:
**sample-size adequacy depends on effect size and analytic goal**.

## 20. Functional connectivity is statistical dependence

Functional connectivity (FC) commonly quantifies statistical association between signals.

It does not by itself identify:
- direct anatomical connection;
- causal direction;
- synaptic communication.

Correlation can arise through:
- common input;
- indirect paths;
- physiology;
- preprocessing.

## 21. Functional connectivity ≠ effective connectivity

Functional connectivity:
- statistical dependence.

Effective connectivity:
- model-based directed influence under assumptions.

Even effective-connectivity models do not become assumption-free causal truth.

Model specification matters.

## 22. Resting-state networks are reproducible organizational descriptions

Resting-state fMRI has revealed robust large-scale functional organization.

The 2025 Nature review describes over 25,000 publications using this framework.

But "network membership" is not identical to:
- anatomical wiring;
- causal computation;
- psychological function.

## 23. Connectivity strength is state- and task-dependent

Task state can alter:
- FC magnitude;
- signal variance;
- reliability.

A 2024 densely sampled study found reliability changes were region/task-specific.

Connectivity should not be treated as one fixed personal trait without reliability evidence.

## 24. Network boundaries depend on method

Network parcellations depend on:
- modality;
- preprocessing;
- resolution;
- clustering/model;
- sample.

Different atlases can partition the same brain differently.

Atlas label is not ground truth.

## 25. Network-level cognition does not abolish specialization

Distributed recruitment can coexist with:
- local selectivity;
- hubs;
- specialized computations.

The correct question is:
**what level of specialization/distribution does the evidence support?**

## 26. Lesion evidence can strengthen causal inference

If damage to neural tissue reliably increases probability of a deficit, this can support a causal role of the damaged system.

Compared with observational activation, lesion evidence can address:
- necessity-like relationships.

But lesions are not clean randomized manipulations.

## 27. Lesion ≠ precisely controlled intervention

Natural lesions vary in:
- size;
- location;
- etiology;
- chronicity;
- vascular territory;
- recovery.

Lesion distribution is highly nonrandom.

These properties constrain causal interpretation.

## 28. Lesion site can contain causal and incidental damage

Lesion-symptom mapping may include:
- critical tissue;
- incidental co-damaged tissue;
- spared but dysfunctional regions;
- remote network effects.

Therefore:
**lesion overlap ≠ exact causal locus**.

## 29. Lesion symptoms are time-dependent

Behavior after a lesion can change through:
- acute dysfunction;
- diaschisis;
- recovery;
- compensation;
- rehabilitation.

Lesion→symptom mapping depends on assessment time.

## 30. Diaschisis and disconnection matter

Focal damage can alter function in distant regions/networks.

A deficit can therefore reflect:
- local tissue loss;
- white-matter disconnection;
- remote network dysfunction.

Local anatomy and network mechanism must be separated.

## 31. Lesion mapping supports probabilistic causality, not deterministic rules

Current lesion-mapping frameworks emphasize:
**lesion raises probability of symptom**
rather than:
**lesion uniquely determines symptom**.

Degeneracy and individual variability remain important.

## 32. Necessity ≠ sufficiency

A region/network can be necessary for normal task performance under some conditions without being sufficient to generate the psychological process.

Lesion evidence is primarily necessity-oriented.

Sufficiency requires a different intervention logic.

## 33. Double dissociation strengthens functional-separability claims

If:
- lesion A disproportionately impairs function X;
- lesion B disproportionately impairs function Y

this can support separable functional architecture.

But double dissociation can still depend on:
- task difficulty;
- measurement scaling;
- distributed-network damage.

It is not a direct map of mental modules.

## 34. Lesion network mapping is under active methodological challenge

A 2026 Nature Neuroscience analysis re-examined lesion-network mapping (LNM) and found that many reported maps were highly similar across disorders/conditions because the procedure repeatedly sampled properties of the same normative connectivity matrix.

The authors found:
- high cross-map similarity;
- substantial dependence on elementary connectivity-matrix properties.

This is a major inference boundary.

## 35. LNM network convergence is not automatically biological convergence

In that 2026 analysis, similar output maps could arise from:
- real lesions;
- synthetic/random lesions.

Therefore:
**similar LNM circuits across conditions cannot by itself establish a shared causal circuit**.

## 36. LNM also has biological limitations

A 2026 commentary emphasizes that normative LNM cannot fully capture:
- dynamic reorganization;
- nonlinear hyper/hypoconnectivity;
- higher-order disconnection;
- individual post-lesion change.

Network maps from normative connectomes should not be treated as complete lesion physiology.

## 37. Null models are essential for spatial/network mapping

Brain maps have:
- spatial autocorrelation;
- topology;
- base-rate structure.

A valid null should preserve relevant spatial/network properties.

Naive randomization can exaggerate specificity.

## 38. TMS is an intervention, not a perfect local switch

Transcranial magnetic stimulation perturbs neural tissue noninvasively.

Behavioral changes after controlled TMS can strengthen causal inference.

But stimulation:
- has finite spatial spread;
- can affect networks;
- is state-dependent;
- has peripheral sensory effects.

## 39. TMS target engagement should be demonstrated when possible

Knowing coil location does not prove:
- intended neural population changed;
- direction of change;
- network consequence.

Concurrent TMS-fMRI/EEG can help characterize target engagement.

## 40. rTMS protocol ≠ inherently excitatory/inhibitory

A 2025 review specifically rejects the common rule that:
- high-frequency/iTBS = excitation;
- low-frequency/cTBS = inhibition

as universal interpretations outside tested contexts.

Effects vary by:
- cortex;
- state;
- intensity;
- individual;
- outcome measure.

## 41. "Virtual lesion" is a metaphor

TMS-induced disruption can sometimes mimic transient interference.

But TMS is not anatomically or physiologically identical to a structural lesion.

Avoid treating the methods as equivalent.

## 42. Sensory co-stimulation can confound TMS effects

TMS produces:
- sound;
- scalp sensation;
- muscle activation.

Sham/control conditions are needed.

A behavioral difference can reflect nonspecific stimulation effects if controls are inadequate.

## 43. Stimulation causality is intervention-specific

A TMS result can support:
**changing this neural system with this protocol under this state altered behavior**.

It does not automatically support:
**this region exclusively implements the psychological function**.

## 44. EEG directly measures electrical field potentials at the scalp

EEG has high temporal resolution.

It reflects summed postsynaptic electrical activity propagated through:
- brain tissue;
- skull;
- scalp.

Scalp electrodes are not local depth electrodes.

## 45. EEG electrode location ≠ source location

One source can contribute to multiple electrodes.

One electrode can receive mixtures from multiple sources.

Therefore:
**electrode Fz/Pz/etc. = activity of cortex directly beneath it**
is invalid.

## 46. EEG source localization is an inverse problem

Inferring sources from scalp measurements is underdetermined:
multiple source configurations can produce similar sensor patterns.

Source estimation requires:
- head model;
- priors/regularization;
- forward model;
- algorithm.

Different assumptions can produce different sources.

## 47. 2025 M/EEG source-localization review

The systematic review categorized 28 source-localization methods across multiple families and emphasized ongoing limitations in:
- accuracy;
- spatial resolution;
- validation;
- model choice.

Source coordinates are estimates, not direct observations.

## 48. EEG temporal precision does not solve source ambiguity

Millisecond timing is a major strength.

But temporal precision and spatial/source certainty are separate dimensions.

Fast signal ≠ exact location.

## 49. ERP component ≠ one psychological process

An ERP label such as a named component can depend on:
- latency;
- polarity;
- scalp distribution;
- task.

The same component can be influenced by multiple processes.

A component is a measurement feature, not a one-to-one cognitive mechanism.

## 50. Time-frequency power ≠ one neural process

Changes in:
- alpha;
- theta;
- beta;
- gamma

can relate to many tasks/processes.

Frequency-band labels are not psychological labels.

Interpretation requires:
- context;
- topography/source;
- timing;
- task manipulation.

## 51. Volume conduction can inflate EEG connectivity

Sensor-level correlations/coherence can arise from:
- shared source propagation.

Connectivity methods need controls for:
- zero-lag coupling;
- reference scheme;
- leakage.

EEG functional connectivity is not direct synaptic connectivity.

## 52. Intracranial recordings have different strengths and selection bias

iEEG/ECoG can provide:
- high temporal resolution;
- more local signals.

But electrodes are implanted based on clinical need.

Sampling is:
- sparse;
- nonrandom;
- patient-specific.

Strong local signal does not imply whole-brain representativeness.

## 53. Forward inference

Forward inference asks approximately:

**given manipulation/process/task X, what neural response changes?**

This can support:
- neural correlates of experimentally manipulated constructs

if the task manipulation is valid.

It does not establish process specificity.

## 54. Reverse inference

Reverse inference asks:

**given neural pattern Y, how likely is psychological process X?**

This is not deductively valid.

Its strength depends on:
- prior probability;
- selectivity;
- task context;
- alternative processes.

## 55. Reverse inference is not always worthless

Poldrack's Bayesian framing shows reverse inference can provide information when neural evidence is sufficiently selective.

The problem is:
**unquantified one-region-one-process reasoning**.

Use:
- base rates;
- meta-analytic selectivity;
- context.

## 56. Region activation is weak reverse evidence when the region is multifunctional

If a region activates in many tasks, observing it provides little specific evidence for any one process.

Specificity, not just sensitivity, matters.

## 57. Task setting changes reverse-inference strength

The same activation pattern can imply different processes depending on:
- stimulus;
- instructions;
- response demands;
- known alternatives.

Inference should be conditioned on the experiment.

## 58. Neural decoding

Decoding models predict:
- stimulus;
- condition;
- behavior;
- psychological label

from neural features.

Above-chance decoding shows:
**information sufficient for the model to discriminate labels exists in the measured data**.

It does not by itself identify:
- neural mechanism;
- explicit brain representation;
- causal use of that information.

## 59. Decodable information can be epiphenomenal

A decoder can exploit:
- downstream effects;
- motor preparation;
- arousal;
- task difficulty;
- confounds.

Prediction does not prove the brain uses the same features for the psychological computation.

## 60. Decoder performance depends on labels

If labels are:
- noisy;
- broad;
- circular;
- self-report dependent

then a neural decoder inherits that construct validity.

Neural measurement cannot rescue an invalid psychological target.

## 61. Mental-state decoder ≠ mind reading

A 2024 Trends in Cognitive Sciences critique argues that fMRI decoders do not disentangle neural mechanisms from epiphenomena and face serious real-world generalization constraints.

Canonical rule:

**decoder output is model prediction under a trained distribution, not direct access to private mental content**.

## 62. Within-dataset cross-validation is not external validity

A model can perform well under:
- random folds

yet fail:
- new scanner;
- new site;
- new cohort;
- new task;
- new population.

The 2026 Nature Methods perspective recommends external validation as the stronger test.

## 63. Data leakage can drastically inflate neuroimaging prediction

A 2024 Nature Communications study showed that leakage through:
- feature selection;
- repeated subjects

can strongly inflate connectome-based prediction.

Leakage can also distort feature interpretation.

## 64. Subject leakage is especially dangerous for repeated measurements

If one person's runs/segments appear in both:
- train;
- test

a classifier can learn identity-specific signals.

Train/test partition must match the intended generalization target.

## 65. EEG decoding has the same leakage problem

A 2024 study found translational EEG deep-learning performance could be strongly overestimated when segments from the same subjects appeared in train and test sets.

For new-person inference:
**hold out people, not just segments**.

## 66. Decoding analysis choices change results

A 2026 MVPA study showed:
- trial averaging;
- resampling;
- classifier/CV choices

can materially alter accuracy/statistics.

Analysis pipeline is part of the measurement model.

## 67. Cross-decoding is stronger than within-task decoding for abstraction claims

If a decoder trained in:
- context A

generalizes to:
- context B

this supports more context-general information.

But cross-decoding still does not prove:
- one neural code;
- causal representation.

## 68. Representational similarity is model comparison, not direct content reading

RSA compares geometry of neural patterns with:
- stimulus;
- behavioral;
- model geometry.

A match supports similarity of representational structure under assumptions.

It does not uniquely identify how the brain computes that representation.

## 69. Encoding and decoding are complementary

Encoding:
**features/task -> neural response**.

Decoding:
**neural response -> label/features**.

Good decoding does not imply good mechanistic encoding model, and vice versa.

## 70. Neural correlate ≠ biomarker

A biomarker claim requires more than group association:
- reliability;
- individual prediction;
- calibration;
- specificity;
- external validation;
- utility.

A statistically significant activation is not a biomarker.

## 71. Individual neural prediction needs psychometrics

Individual-difference neuroscience must quantify:
- test–retest reliability;
- within-person variability;
- measurement error;
- calibration.

A group-average brain effect can be unsuitable for ranking individuals.

## 72. Brain–behavior correlations are often small and sample-sensitive

Prediction and association estimates can vary with:
- sample size;
- preprocessing;
- motion;
- site;
- covariates.

Large samples and independent replication are especially important for small effects.

## 73. Motion is both artifact and behavioral correlate

Head motion can:
- contaminate fMRI connectivity;
- correlate with age, clinical status, behavior.

Simply regressing motion can:
- remove artifact;
- alter meaningful variance.

Motion handling must be explicit.

## 74. Physiological noise is not neural connectivity

Respiration and cardiac processes can influence:
- BOLD;
- EEG/MEG artifacts.

Physiological correction is part of measurement validity.

Uncorrected synchrony should not be called neural coupling automatically.

## 75. Spatial map correlation can create mechanistic overreach

The 2026 Nature Reviews Neuroscience paper on data contextualization warns that correlating brain maps with:
- receptor maps;
- cell-type maps;
- network maps

can be affected by:
- repeated reference maps;
- nonrepresentative datasets;
- spatial autocorrelation;
- alignment problems.

Map similarity ≠ causal pathway.

## 76. Spatial autocorrelation reduces effective independence

Nearby brain measurements are correlated.

Standard statistical tests assuming independent spatial samples can produce inflated evidence.

Spatial null models must preserve relevant spatial structure.

## 77. Atlas circularity

If region/network definition and hypothesis test use overlapping data, inference can be circular.

Use:
- independent atlas;
- held-out data;
- nested selection.

ROI selection from the same contrast can inflate effect estimates.

## 78. "Double dipping" is a general problem

Selecting voxels because they show an effect and then estimating that same effect in those voxels creates selection bias.

Independent selection or proper cross-validation is required.

## 79. Null result ≠ absence of neural involvement

Failure to detect activation can reflect:
- power;
- task validity;
- measurement sensitivity;
- model mismatch.

Absence of evidence is not evidence of absence without adequate sensitivity.

## 80. Activation ≠ necessity; lesion ≠ sufficiency; stimulation ≠ exclusive localization

These three distinctions form a core evidence matrix:

- activation: participation/covariation;
- lesion: necessity-like evidence under natural-damage assumptions;
- stimulation: perturbational causal evidence under protocol assumptions.

Convergence across them is stronger than any one method.

## 81. Temporal precedence strengthens but does not guarantee causality

EEG/MEG can show neural events before behavior.

But earlier timing alone does not exclude:
- common cause;
- preparatory correlate;
- epiphenomenon.

Perturbation or mechanistic modeling is needed.

## 82. Neural mediation requires intervention-aware causal design

If:
\`intervention -> neural change -> behavior change\`

this is consistent with neural mediation.

But mediator–outcome confounding remains possible.

A brain mediator is not causal merely because it changes before behavior.

## 83. Convergent multimodal evidence

Strong mechanistic inference can combine:
- valid psychological manipulation;
- fMRI localization/network evidence;
- EEG/MEG timing;
- lesion necessity;
- stimulation perturbation;
- behavior.

Each method addresses different uncertainty.

## 84. Convergence can still share a hidden confound

Multimodal methods may share:
- same task;
- same construct definition;
- same participants;
- same behavioral confound.

Multiple modalities do not automatically create independent evidence.

## 85. Replication should match the claim

Replication can target:
- activation location;
- network pattern;
- decoding performance;
- intervention effect;
- individual prediction.

Replicating one does not guarantee the others.

## 86. Transportability matters

Neural findings may differ by:
- age;
- health;
- scanner;
- acquisition;
- culture;
- task strategy.

A model validated in one population should not be assumed universal.

## 87. Psychological constructs remain necessary

Neuroscience can refine psychological constructs.

It cannot replace them with:
- region names;
- frequency bands;
- network labels.

A psychological explanation requires valid psychological variables.

## 88. Neural explanation should narrow uncertainty

A useful neural claim should answer a specific question such as:
- where;
- when;
- what signal;
- what causal role;
- what network dependency.

If adding a brain label does not change prediction or explanation, it may be decorative neuro-language.

## 89. Neuroscience Inference Gate — 70 questions

### A. Construct and level
1. What exact psychological construct/process is targeted?
2. Is the construct independently valid before neural mapping?
3. What neural level is claimed: network, region, population, cell, molecular?
4. Is a lower biological level being treated as automatically more explanatory?
5. Is the proposed mapping one-to-one without evidence?
6. Is localization target a representation, computation, necessity, or output?
7. Could the same region/network support multiple processes?
8. Could the same process recruit multiple networks?

### B. fMRI/BOLD
9. What does the contrast actually compare?
10. Could task difficulty/arousal/motor demands explain activation?
11. Is BOLD being treated as direct neuronal firing?
12. Is positive BOLD interpreted as universal neural increase?
13. Is negative BOLD being called inhibition?
14. Is hemodynamic timing being treated as neural timing?
15. Is group activation being used for individual prediction?
16. Is reliability measured for the exact derived fMRI feature?
17. Could within-person state variation explain low retest reliability?

### C. Connectivity/networks
18. Is functional connectivity being treated as direct anatomical connectivity?
19. Is correlation being treated as causal direction?
20. Is effective-connectivity model dependence acknowledged?
21. Is task/state dependence of FC considered?
22. Is atlas/parcellation dependence reported?
23. Could physiological noise drive connectivity?
24. Is spatial autocorrelation handled?
25. Is a network label being treated as a psychological function?

### D. Lesions
26. Is lesion distribution nonrandom?
27. Are lesion size/etiology/chronicity controlled?
28. Could incidental co-damage explain mapping?
29. Could disconnection/diaschisis explain deficit?
30. Is assessment time after lesion specified?
31. Is necessity being confused with sufficiency?
32. Is lesion evidence being treated as exact functional localization?
33. Is LNM specificity tested against appropriate nulls?
34. Is normative connectivity being treated as patient-specific physiology?

### E. Stimulation
35. Is stimulation protocol precisely specified?
36. Is target engagement demonstrated?
37. Is rTMS assumed inherently excitatory/inhibitory?
38. Could stimulation affect a distributed network?
39. Are sensory/peripheral effects controlled?
40. Is a TMS effect being treated as an anatomical lesion?
41. Is perturbational causality being overgeneralized to exclusive function?

### F. EEG/MEG
42. Is sensor location being treated as source location?
43. Is the inverse problem acknowledged?
44. Are head-model/source priors specified?
45. Is temporal precision being confused with spatial precision?
46. Is ERP component being equated with one process?
47. Is frequency band being equated with one function?
48. Could volume conduction inflate connectivity?
49. Is iEEG sampling bias acknowledged where relevant?

### G. Reverse inference/decoding
50. Is forward inference being reversed without specificity evidence?
51. What is the prior probability of the candidate process?
52. How selective is the neural evidence?
53. Is task context included in reverse inference?
54. Does decoding show discrimination only, or cross-context generalization?
55. Could decoder exploit motor/arousal/difficulty confounds?
56. Are labels construct-valid?
57. Is above-chance decoding being called neural mechanism?
58. Is decoder output being called mind reading?
59. Is participant-level leakage excluded?
60. Is feature selection/preprocessing nested inside validation?
61. Is external validation available?
62. Does the model transport across site/task/population?

### H. Causal/individual inference
63. Is the evidence associative, predictive, necessity-like, or perturbational?
64. Is neural correlation being called biomarker without reliability/calibration?
65. Is individual prediction supported rather than inferred from group effect?
66. Is multimodal convergence genuinely independent?
67. Is neural mediation causally identified?
68. Could map correlation/spatial priors create apparent mechanism?
69. Which neural/psychological alternative remains viable?
70. What is the narrowest brain–behavior claim justified?

## 90. Failure modes

A. Region = psychological function: **invalid**.
B. Activation = mechanism: **invalid**.
C. Activation = necessity: **invalid**.
D. BOLD = neuronal firing: **invalid**.
E. Positive BOLD = more neurons firing: **unsupported universalization**.
F. Negative BOLD = inhibition: **invalid**.
G. FC = anatomical connection: **invalid**.
H. FC = causality: **invalid**.
I. Network label = unique biological circuit: **invalid**.
J. Lesion site = exact causal locus: **invalid**.
K. Lesion = sufficiency: **invalid**.
L. LNM map = disorder-specific causal circuit: **unsupported without specificity/null validation**.
M. TMS = precise local switch: **invalid**.
N. rTMS protocol = inherently excitatory/inhibitory: **invalid**.
O. Electrode = cortical source underneath: **invalid**.
P. EEG source solution = unique location: **invalid**.
Q. ERP/frequency = one cognitive process: **invalid**.
R. Reverse inference from multifunctional region = direct process identification: **invalid**.
S. Decoding = representation mechanism: **invalid**.
T. Decoder = mind reading: **invalid**.
U. Cross-validation = external generalization: **invalid**.
V. Neural correlate = biomarker: **invalid**.
W. Group neural effect = individual diagnosis: **invalid**.
X. More biological = more explanatory: **invalid**.
Y. Map correlation = mechanism: **invalid**.
Z. Multimodal convergence = automatically independent proof: **invalid**.

## 91. Evidence confidence map

### High-confidence practical boundaries
- psychological and neural levels are distinct but mutually constraining;
- localization and distributed network organization can coexist;
- fMRI BOLD is an indirect hemodynamic measure;
- task activation is not necessity or specificity;
- functional connectivity is not causal connectivity;
- lesion evidence is probabilistic and constrained by nonrandom damage/disconnection;
- TMS is perturbational but not a perfectly local or direction-known switch;
- EEG/MEG have strong temporal resolution but source localization is an inverse problem;
- reverse inference strength depends on specificity and prior/task context;
- neural decoding supports discriminability/prediction, not mechanism by itself;
- data leakage and lack of external validation can invalidate decoding claims;
- group neural effects do not automatically support individual biomarkers.

### Supported but context-sensitive
- specific regions can show meaningful functional specialization;
- distributed network recruitment can encode cognitive variables;
- lesions can provide strong necessity-like evidence for some functions;
- TMS-fMRI can strengthen causal network inference;
- dense longitudinal fMRI can separate state variability from trait-like differences;
- cross-decoding can support more abstract/general representations;
- multimodal convergence can substantially strengthen mechanistic inference.

### Not established as universal
- one-to-one mind–brain mappings;
- one stable network atlas for every task/person;
- one fixed BOLD-to-neural conversion across cortex/states;
- one inherently excitatory or inhibitory rTMS protocol;
- one unique EEG source solution;
- one decoder that directly reads mental state;
- one neural biomarker that transports across populations by default;
- one lesion-network map that identifies a condition-specific causal circuit.

## 92. Closure audit — 18 criteria

1. Psychological/computational/network/circuit/cellular levels explicitly separated: **PASS**.
2. Localization-versus-distribution false dichotomy blocked with 2026 network review: **PASS**.
3. BOLD/neurovascular coupling and direct-neural-signal boundary explicit: **PASS**.
4. 2026 BOLD–oxygen-metabolism discordance evidence integrated with scope limits: **PASS**.
5. Task-fMRI reliability and individual-difference boundary integrated: **PASS**.
6. 2026 task-fMRI sample-size/reliability evidence integrated: **PASS**.
7. Functional versus effective connectivity and network/atlas boundaries explicit: **PASS**.
8. Lesion necessity, nonrandom damage, disconnection/diaschisis and probabilistic causality integrated: **PASS**.
9. 2026 lesion-network-mapping methodological challenge integrated: **PASS**.
10. TMS perturbation, target engagement, sensory controls and excitatory/inhibitory myth boundary integrated: **PASS**.
11. EEG/MEG sensor/source and inverse-problem boundaries explicit: **PASS**.
12. ERP/frequency/connectivity interpretation limits included: **PASS**.
13. Forward/reverse inference and Bayesian selectivity logic integrated: **PASS**.
14. Decoding, representation, mechanism and mind-reading distinctions explicit: **PASS**.
15. 2024/2026 leakage and external-validation evidence integrated: **PASS**.
16. Spatial map contextualization/autocorrelation/circularity boundaries integrated: **PASS**.
17. 70-question Neuroscience Inference Gate documented: **PASS**.
18. Privacy-safe content and next dependency unambiguous: **PASS**.

## Canonical operating rule

**Define the psychological construct first -> specify the neural level and what the method directly measures -> separate association, prediction, necessity, sufficiency, and perturbation -> distinguish local specialization from distributed/network alternatives -> for fMRI model hemodynamics/reliability, for EEG/MEG model the inverse problem, for lesions model nonrandom damage/disconnection, for stimulation verify target engagement and controls, for decoding enforce leakage-free external validation -> integrate independent convergent evidence -> state only the narrowest neural claim supported.**

Never:
**brain region = mind function; activation = cause; BOLD = firing; connectivity = causality; lesion = exact locus; TMS = local on/off switch; electrode = source; decoder = mind reading; prediction = mechanism; neural correlate = diagnosis.**

## Sources — current reviews, methodological analyses, and foundational inference papers

1. Rosen, M. C., & Freedman, D. J. (2026). *How distributed is the brain-wide network that is recruited for cognition?* Nature Reviews Neuroscience, 27, 138–150. https://doi.org/10.1038/s41583-025-00992-5
2. Meyer-Baese, L., Jaeger, D., & Keilholz, S. (2025). *Neurovascular coupling: a review of spontaneous neocortical dynamics linking neuronal activity to hemodynamics and what we have learned from the rodent brain.* Journal of Neurophysiology, 133, 644–660. https://doi.org/10.1152/jn.00418.2024
3. *BOLD signal changes can oppose oxygen metabolism across the human cortex.* (2026 issue; online 2025). Nature Neuroscience. https://doi.org/10.1038/s41593-025-02132-9
4. Elliott, M. L., et al. (2020). *What Is the Test-Retest Reliability of Common Task-Functional MRI Measures? New Empirical Evidence and a Meta-Analysis.* Psychological Science, 31, 792–806. https://doi.org/10.1177/0956797620916786
5. Sadil, P., & Lindquist, M. A. (2026). *From maps to models: A survey on the reliability of small studies of task-based fMRI.* Imaging Neuroscience, 4. https://doi.org/10.1162/IMAG.a.1076
6. Rai, S., et al. (2024). *How do tasks impact the reliability of fMRI functional connectivity?* Human Brain Mapping, 45, e26535. https://doi.org/10.1002/hbm.26535
7. Biswal, B. B., & Uddin, L. Q. (2025). *The history and future of resting-state functional magnetic resonance imaging.* Nature, 641, 1121–1131. https://doi.org/10.1038/s41586-025-08953-9
8. *Lesion mapping in neuropsychological research: A practical and conceptual guide.* (2024). Cortex. https://doi.org/10.1016/j.cortex.2023.10.001
9. *Interpreting and validating complexity and causality in lesion-symptom prognoses.* (2023). Brain Communications, 5, fcad178. PMID 37346231.
10. van den Heuvel, M. P., et al. (2026). *Investigating the methodological foundation of lesion network mapping.* Nature Neuroscience, 29, 1237–1247. https://doi.org/10.1038/s41593-025-02196-7
11. Pini, L., Salvalaggio, A., & Corbetta, M. (2026). *Considering biological limitations of lesion network mapping.* Nature Neuroscience, 29, 2051–2053. https://doi.org/10.1038/s41593-026-02319-8
12. *Consensus guidelines for the use of concurrent TMS-fMRI in cognitive and clinical neuroscience.* (2025). Nature Protocols. https://doi.org/10.1038/s41596-025-01182-4
13. Hussain, S. J., & Freedberg, M. V. (2025). *Debunking the Myth of Excitatory and Inhibitory Repetitive Transcranial Magnetic Stimulation in Cognitive Neuroscience Research.* Journal of Cognitive Neuroscience, 37, 1009–1022. https://doi.org/10.1162/jocn_a_02288
14. *Inverse Problem for M/EEG Source Localization: A Review.* (2025). IEEE Sensors Journal, 25, 2103–2124. https://doi.org/10.1109/JSEN.2024.3502917
15. *Inferring neural sources from electroencephalography: foundations and frontiers.* (2026). Journal of Neural Engineering / topical review. PMCID PMC12903115.
16. Poldrack, R. A. (2006). *Can cognitive processes be inferred from neuroimaging data?* Trends in Cognitive Sciences, 10, 59–63. https://doi.org/10.1016/j.tics.2005.12.004
17. Vigotsky, A. D., Iannetti, G. D., & Apkarian, A. V. (2024). *Mental state decoders: game-changers or wishful thinking?* Trends in Cognitive Sciences, 28, 884–895. https://doi.org/10.1016/j.tics.2024.06.004
18. Varoquaux, G., & Poldrack, R. A. (2019). *Predictive models avoid excessive reductionism in cognitive neuroimaging.* Current Opinion in Neurobiology, 55, 1–6. https://doi.org/10.1016/j.conb.2018.11.002
19. Li, J., et al. (2024). *Data leakage inflates prediction performance in connectome-based machine learning models.* Nature Communications, 15. https://doi.org/10.1038/s41467-024-46150-w
20. *External validation improves generalizability, replicability and reproducibility in predictive models for neuroimaging.* (2026). Nature Methods. https://doi.org/10.1038/s41592-026-03115-9
21. *Data leakage in deep learning studies of translational EEG.* (2024). Frontiers in Neuroscience, 18, 1373515. https://doi.org/10.3389/fnins.2024.1373515
22. *Optimising Analysis Choices for Multivariate Decoding: Creating Pseudotrials Using Trial Averaging and Resampling.* (2026). European Journal of Neuroscience, 64, e70601. https://doi.org/10.1111/ejn.70601
23. *Opportunities and pitfalls of data contextualization in neuroimaging.* (2026). Nature Reviews Neuroscience, 27, 416–434. https://doi.org/10.1038/s41583-026-01038-0
24. Reid, A. T., et al. (2019). *Advancing functional connectivity research from association to causation.* Nature Neuroscience, 22, 1751–1760. https://doi.org/10.1038/s41593-019-0510-4

## Scope and next dependency

NEU-01 establishes the evidence hierarchy and method-specific boundaries required before neurochemical or neuromodulatory claims are interpreted.

**Next block: NEU-02 — Neurochemical and neuromodulatory inference: dopamine, serotonin, norepinephrine, acetylcholine, receptors/transporters, PET/pharmacology, neurotransmitter release, causal attribution, and measurement boundaries.**

NEU-02 should determine:
- what neurotransmitter/receptor/PET/pharmacology measures directly index;
- why one neurotransmitter is not one psychological function;
- how tonic/phasic, receptor, region and circuit specificity alter interpretation;
- how drug effects, receptor occupancy and endogenous release should be distinguished;
before later neural-systems integration and sufficiency audit.
