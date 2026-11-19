# EXE-03 — Response selection, inhibition, stopping, and interference control

Status: **CLOSED_FOR_PRACTICE v1.0**

## Purpose

Establish a precise architecture for response selection and inhibition so that "inhibition" is not used as a single catch-all explanation.

The block separates:

- response selection from response inhibition;
- restraint/withholding from cancellation/stopping;
- motor stopping from interference control;
- attentional distractor suppression from motor inhibition;
- memory retrieval suppression from action stopping;
- stopping latency from stop-process triggering reliability;
- task performance from a stable inhibitory trait;
- behavioral inhibition paradigms from broad constructs such as impulsivity, self-control, or executive functioning.

## Core rule

**Inhibition is not one mechanism. Always specify what process is being suppressed, at what stage, under what task model, and whether the evidence supports process-level, state-level, or trait-level inference.**

A generic action-control architecture is:

`goal/context`
-> `candidate actions`
-> `response selection`
-> `response preparation / initiation`
-> `continue, withhold, cancel, or redirect`

with possible control at several loci:

- perceptual/attentional selection;
- response competition;
- motor initiation;
- action cancellation;
- memory retrieval;
- thought/content selection.

## 1. Current official scaffold

NIMH RDoC places both **Response Selection** and **Inhibition/Suppression** within Cognitive Control.

Current RDoC examples distinguish them by paradigm families:

### Response Selection

- Stroop;
- Simon;
- Flanker.

### Inhibition/Suppression

- antisaccade;
- go/no-go;
- countermanding;
- stop-signal;
- stimulus-response incompatibility and related paradigms.

This official organization is useful, but individual paradigms are still task-impure and should not be equated with a single latent process.

## 2. Response selection

Response selection chooses an action from currently available alternatives given:

- stimulus evidence;
- task rule;
- context;
- goal;
- response mappings.

A response can be wrong because:

- the wrong rule was active;
- competing responses were close in activation;
- sensory evidence was ambiguous;
- mapping retrieval failed;
- the correct response was selected too late.

Canonical rule:

**wrong response != inhibition failure by default.**

## 3. Selection and inhibition are functionally distinct

Selection asks:

> Which response should win?

Inhibition asks:

> Which already competing, prepotent, prepared, initiated, or retrieved process should be reduced/stopped?

Strong selection can sometimes eliminate the need for explicit stopping.

Conversely, successful stopping may occur even when the original response was selected strongly.

Therefore:

`selection failure`
!=
`stopping failure`.

## 4. Restraint versus cancellation

A useful distinction in motor control is:

### Restraint / withholding

Prevent a response from being initiated.

Typical paradigm:

- Go/No-Go.

### Cancellation / stopping

Abort a response that is already prepared or initiated.

Typical paradigm:

- Stop-Signal Task.

These processes overlap but are not interchangeable.

A 2024 ALE meta-analysis found largely different neural recruitment for Go/No-Go versus Stop-Signal tasks and concluded that the paradigms probe distinct response-inhibition processes.

Canonical rule:

**Go/No-Go and Stop-Signal are not substitute measures of one pure inhibitory capacity.**

## 5. Go/No-Go

In a standard Go/No-Go task:

- Go trials establish a dominant responding tendency;
- No-Go trials require withholding a response.

Performance can reflect:

- stimulus discrimination;
- response preparation;
- frequency/expectancy;
- response bias;
- vigilance;
- motor restraint;
- attention.

Therefore a commission error can arise without a unitary "inhibition deficit."

## 6. Go/No-Go can become partly automatic

The 2024 meta-analysis suggests that standard Go/No-Go withholding can rely partly on more automatic processes under some task structures, whereas stop-signal cancellation more consistently taxes controlled stopping.

Thus:

`Go/No-Go = controlled inhibition`

is too strong as a universal interpretation.

Task frequency, predictability, and learned stimulus-response mappings matter.

## 7. Stop-Signal Task

In the standard Stop-Signal Task (SST):

1. a Go stimulus initiates response processing;
2. on a minority of trials, a Stop signal appears after a delay;
3. performance depends on competition between Go and Stop processes.

The classic independent race model estimates the latency of the latent Stop process through **stop-signal reaction time (SSRT)**.

## 8. SSRT is a model-based latent estimate

SSRT is not directly observed.

Its interpretation depends on:

- the race-model assumptions;
- Go RT distribution;
- stop-signal delay procedure;
- trigger failures;
- Go omissions;
- strategic slowing;
- estimation method.

The 2019 consensus guide remains the core methodological standard for SST design/analysis.

Canonical rule:

**SSRT is a model-dependent estimate of stopping-process latency, not a direct stopwatch reading of inhibition.**

## 9. Stop-signal detection is part of the chain

The consensus guide explicitly notes that SSRT includes a chain of processes that begins with detecting the stop signal.

Therefore a longer estimated SSRT can partly reflect:

- stop-signal perception;
- attentional detection;
- triggering;
- stopping implementation.

This is why salient stop signals are recommended when perceptual/attention processes are not the target.

Canonical rule:

**slow SSRT != pure slow inhibition.**

## 10. Trigger failure

A Stop process may fail to start on some stop trials.

This is called a **trigger failure**.

Trigger failures can bias standard SSRT estimates upward if not modeled.

Recent model-based work increasingly treats:

- stop latency;
- probability/reliability of triggering

as distinct stopping components.

A 2025 study found that stop-trigger failures related more clearly to recruitment of stopping-related circuitry than SSRT itself in the tested dataset.

Thus:

**failure to stop can arise because stopping was slow or because stopping was not triggered reliably.**

## 11. Stop latency and trigger reliability are distinct

Two people can have similar observed stopping success but differ in:

- latent stop speed;
- trigger-failure probability;
- Go strategy;
- response caution.

Therefore one summary measure cannot capture all stopping behavior.

Canonical rule:

**stopping ability is not one scalar.**

## 12. Independent race-model assumptions matter

The standard SST assumes a race between Go and Stop processes.

When key independence assumptions are seriously violated, SSRT estimates become unreliable.

The consensus guide recommends checking diagnostic patterns such as whether unsuccessful-stop RTs are shorter than Go RTs and using adequate stop-trial numbers.

Therefore:

`software produced an SSRT -> valid stopping estimate`

is false.

## 13. Strategic slowing changes the task

Participants can slow Go responses because they anticipate Stop signals.

This can improve stopping success without a faster Stop process.

The consensus guide recommends:

- stop signals on a minority of trials;
- adaptive delay tracking;
- reporting Go behavior.

Canonical rule:

**higher stopping success != stronger inhibition unless Go strategy is modeled.**

## 14. SSRT estimation method matters

The consensus guide recommends the integration method with Go-omission replacement for standard nonparametric estimation under appropriate conditions.

Mean-method estimates can be more biased by:

- skewed Go RTs;
- omissions;
- deviations from ideal tracking.

Thus cross-study differences in "inhibition" may partly be estimation differences.

## 15. Individual SSRT requires more evidence than group comparison

The consensus guide explicitly warns that trial numbers sufficient for reliable group-level estimates may not be sufficient for reliable individual estimates.

This is critical for:

- personality inference;
- clinical classification;
- longitudinal trait studies.

Canonical rule:

**group-sensitive measure != automatically individual-difference measure.**

## 16. Temporal stability of inhibition measures is limited

Thunberg et al. (2024) examined multiple behavioral/electrophysiological SST measures across three studies plus a systematic review.

They found:

- low temporal stability for common inhibition measures;
- higher stability for some non-inhibitory/manifesta behavior measures;
- the pattern was not explained simply by poor internal consistency.

They concluded that common stopping measures show substantial state/situational influence.

Therefore:

**one SST result should not be converted into a stable inhibitory trait.**

## 17. Response inhibition is not impulsivity

Impulsivity can include:

- motor disinhibition;
- urgency;
- delay discounting;
- reward sensitivity;
- poor planning;
- attentional instability;
- learned choice policy.

SST/Go-No-Go sample only some motor-control processes.

Canonical rule:

**poor stopping performance != impulsive personality.**

## 18. Response inhibition is not self-control

Everyday self-control can require:

- goal selection;
- valuation;
- motivation;
- planning;
- environmental restructuring;
- habit;
- emotion regulation;
- conflict resolution.

Motor stopping is only one possible component.

Therefore:

`good SST -> strong self-control`

and:

`poor SST -> weak willpower`

are both invalid.

## 19. Selective versus global stopping

Some stopping contexts require:

- stopping all actions;
- stopping one component while allowing another;
- canceling and reprogramming an action.

Selective stopping adds demands such as:

- response discrimination;
- action-set representation;
- reprogramming;
- conflict resolution.

Thus selective stopping should not be interpreted as merely "harder global inhibition."

## 20. Stopping and action reprogramming are separable

A 2024 comparison of selective cancellation paradigms found differences in action reprogramming speed without equivalent differences in stopping speed.

This illustrates:

**cancellation and replacement/reprogramming are distinct operations.**

A person can stop effectively but be slow to configure an alternative response.

## 21. Stop-Signal P3 is not a pure inhibition biomarker

The frontocentral P3 has often been treated as an electrophysiological index of inhibitory control during action stopping.

A 2025 critical review concludes that this interpretation is contested.

Possible contributions include:

- stop-signal detection;
- attentional orienting;
- context updating;
- action evaluation;
- stopping.

Canonical rule:

**ERP component label != unique inhibition process.**

## 22. Interference control

Interference control concerns resolving competition from irrelevant or conflicting information.

Common paradigms include:

- Stroop;
- Simon;
- Flanker.

This differs from canceling an initiated action.

Interference can arise before motor execution through:

- stimulus conflict;
- semantic conflict;
- spatial conflict;
- response conflict.

## 23. Stroop, Simon, and Flanker are not interchangeable

All three create congruent/incongruent response competition, but the irrelevant information differs.

### Stroop

Often combines:

- lexical/semantic processing;
- color processing;
- response conflict.

### Simon

Typically induces spatial stimulus-response conflict.

### Flanker

Uses target-distractor competition from nearby stimuli.

Different paradigms therefore stress different mixtures of processes.

## 24. Global congruency effects confound facilitation and interference

The classic contrast:

`incongruent RT - congruent RT`

mixes at least:

- interference cost;
- congruent facilitation.

A 2026 study using neutral conditions found systematic differences among Stroop, Simon, and Flanker effects and challenged the interpretation of some classic distributional signatures as inhibition.

Canonical rule:

**congruency cost != pure inhibitory-control measure.**

## 25. Automatic and controlled effects can be misidentified

The same 2026 work showed that patterns previously interpreted as slowly developing inhibition can in some cases reflect transient automatic facilitation.

Thus a behavioral signature can fit different process models.

Canonical rule:

**behavioral pattern -> process label requires model discrimination, not naming convention.**

## 26. Conflict detection is not inhibition

An incongruent trial may trigger:

- conflict detection;
- attention adjustment;
- response threshold changes;
- selection bias;
- learning.

The existence of conflict does not prove an inhibitory process was engaged.

Likewise, successful performance can arise through stronger target selection rather than suppression of the distractor.

## 27. Distractor suppression is an attentional process family

Visual distractor suppression reduces attentional priority of irrelevant stimuli.

Current attention theories distinguish mechanisms such as:

- learned location/feature suppression;
- proactive suppression;
- reduced capture;
- rapid disengagement;
- overriding priority signals.

This belongs primarily to attention/control interfaces, not motor stopping.

## 28. Signal suppression remains a live but updated theory

The 2025 "Signal Suppression 2.0" review updates the account of attentional suppression.

Current evidence suggests suppression can be:

- feature-specific;
- location-specific;
- temporally dynamic.

But the exact mechanism remains debated.

Canonical rule:

**absence of distractor interference does not uniquely prove active inhibition.**

## 29. Distractor suppression can have multiple temporal mechanisms

Recent forced-response work modeled at least:

- a slower override process;
- a faster suppression of distractor influence.

Both can yield reduced distractor effects.

Therefore one final RT cost cannot identify the temporal mechanism of suppression.

## 30. Motor inhibition and attentional suppression are not the same

They can both be described colloquially as "inhibition," but their target differs:

- motor stopping targets action execution;
- attentional suppression targets information priority/access.

Canonical rule:

**shared word "inhibition" != shared process.**

## 31. Memory retrieval suppression

People can sometimes suppress retrieval of unwanted memories.

Think/No-Think paradigms study this process.

A 2026 meta-analysis across 500 effects from 120 studies found a small but consistent aggregate suppression-induced-forgetting effect with substantial heterogeneity.

This supports a real retrieval-control phenomenon while showing strong methodological dependence.

## 32. Retrieval suppression is not action stopping by default

A 2025 Nature Reviews Neuroscience review argues for important overlap in inhibitory-control mechanisms while emphasizing that thought/memory suppression cannot be inferred solely from action-stopping studies.

Thus:

`same broad control network -> same process`

is too strong.

Memory suppression has unique representational and retrieval-control demands.

## 33. Inhibiting thought is not avoiding thought

Reduced unwanted retrieval can arise through:

- direct retrieval suppression;
- thought substitution;
- attentional avoidance;
- context change;
- reduced cue exposure.

These mechanisms should not be collapsed.

Canonical rule:

**less remembered/reported thought != inhibitory suppression proven.**

## 34. Suppression-induced forgetting is an average effect

The 2026 meta-analysis reported meaningful heterogeneity across:

- paradigms;
- instructions;
- probes;
- stimulus types.

Therefore:

- the effect is not identical across people/tasks;
- one failed suppression trial does not diagnose inhibitory dysfunction;
- one successful suppression effect does not prove a global thought-control capacity.

## 35. Domain-general inhibition is a hypothesis with boundaries

Some theories propose shared inhibitory-control mechanisms across:

- action;
- memory;
- thought.

Evidence supports overlap in some control networks/processes.

But domain-general does not mean:

- identical implementation;
- identical measurement;
- identical individual differences.

Canonical rule:

**cross-domain overlap != interchangeable inhibition tasks.**

## 36. Inhibition can be proactive or reactive

Control can reduce competing response activation:

- before conflict arrives;
- after conflict is detected.

Examples:

- proactive response-threshold adjustment;
- proactive distractor suppression;
- reactive motor stopping.

Thus "inhibition" must also specify timing.

## 37. Response threshold is not inhibition

People can reduce errors by becoming more cautious:

- accumulate more evidence;
- delay responding;
- raise decision threshold.

This can improve apparent inhibitory performance without stronger stopping.

Canonical rule:

**caution/threshold adjustment != inhibition.**

## 38. Speed-accuracy tradeoff matters

A participant can appear "better controlled" because they respond more slowly.

Any inhibition comparison should consider:

- Go RT;
- error rates;
- omissions;
- stopping success;
- strategic slowing;
- criterion/threshold shifts.

No single metric should be interpreted in isolation.

## 39. Practice and learning change inhibition-task performance

Practice can improve:

- stop-signal detection;
- task rules;
- cue associations;
- response timing;
- strategy.

Improved performance can therefore reflect learning rather than increased inhibitory capacity.

This interaction is routed partly to LEA.

## 40. State factors matter

Stopping/interference performance can vary with:

- fatigue;
- sleep;
- arousal;
- motivation;
- pharmacological state;
- stress;
- recent practice;
- task expectancy.

This further constrains trait inference.

## 41. Inhibition task families

### Motor restraint

- Go/No-Go;
- antisaccade withholding components.

### Motor cancellation

- Stop-Signal;
- countermanding.

### Interference control

- Stroop;
- Simon;
- Flanker.

### Attentional suppression

- visual-search distractor paradigms;
- learned suppression paradigms.

### Memory retrieval suppression

- Think/No-Think.

These families should not be collapsed under one score.

## 42. Inhibition Inference Gate

Before interpreting an inhibition result, ask:

### A. Target process

1. What exactly is being inhibited: motor response, competing response, distractor, memory retrieval, or thought?
2. Is the task about withholding, cancellation, conflict resolution, or suppression?
3. Is response selection itself a viable explanation?

### B. Task family

4. Is the paradigm Go/No-Go, Stop-Signal, Stroop, Simon, Flanker, antisaccade, visual-search suppression, or Think/No-Think?
5. What processes are unique to that task family?
6. Is the task being treated as interchangeable with another inhibition paradigm?

### C. Motor restraint/cancellation

7. Is the response not yet initiated or already prepared/initiated?
8. Is withholding distinguished from cancellation?
9. Is action reprogramming required after stopping?
10. Could reprogramming rather than stopping explain the cost?

### D. Stop-Signal modeling

11. Are race-model assumptions plausible?
12. Is the stop signal salient/detected reliably?
13. Is strategic slowing controlled?
14. Is the stop-trial proportion appropriate?
15. Is adaptive SSD tracking used?
16. Is SSRT estimation method appropriate?
17. Are Go omissions handled correctly?
18. Are trigger failures modeled/considered?
19. Does the trial count support the intended group or individual inference?

### E. Selection/conflict

20. Could wrong response selection explain errors?
21. Is conflict detection being confused with inhibition?
22. Could stronger target activation solve the task without active suppression?
23. Is a response-threshold/caution change explaining the effect?

### F. Stroop/Simon/Flanker

24. Is congruent facilitation separated from incongruent interference?
25. Are neutral trials available?
26. Which conflict type is manipulated?
27. Is one delta-plot/congruency signature being assigned a mechanism without alternatives?

### G. Attention/distractor suppression

28. Is the distractor never selected, actively suppressed, or rapidly disengaged?
29. Is suppression location/feature/history specific?
30. Could selection history explain reduced capture?
31. Is absence of interference being treated as proof of inhibition?

### H. Memory/thought suppression

32. Is direct retrieval suppression distinguished from substitution/avoidance?
33. Is forgetting measured with appropriate probes?
34. Could retrieval competition/cue change explain the result?
35. Is action-stopping evidence being overgeneralized to thought suppression?

### I. Measurement

36. What is the dependent variable?
37. Is it directly observed or model-derived?
38. What reliability evidence exists?
39. Is temporal stability sufficient for trait inference?
40. Is an ERP/neural signal being treated as a unique inhibition biomarker?

### J. State/trait

41. Was the result replicated across occasions?
42. Across inhibition task families?
43. Could state/context explain performance?
44. Does the evidence support only a process/state claim?

### K. Broad psychological claims

45. Is response inhibition being equated with impulsivity?
46. Is motor stopping being equated with self-control/willpower?
47. Is one inhibition score being converted into global executive ability?
48. What rival mechanism remains?
49. What second task/model would discriminate it?
50. What is the strongest warranted conclusion?

## 43. High-value failure modes

### Failure A — inhibition = one process

Incorrect.

Correct:

Motor restraint, cancellation, interference control, attentional suppression, and retrieval suppression are distinct process families.

### Failure B — wrong response = inhibition failure

Incorrect.

Correct:

Response selection/mapping/representation can fail before inhibition is relevant.

### Failure C — Go/No-Go = Stop-Signal

Incorrect.

Correct:

They differ in withholding versus cancellation and recruit meaningfully different processes.

### Failure D — SSRT = directly observed inhibition speed

Incorrect.

Correct:

SSRT is a latent model-derived estimate with assumptions and multiple upstream contributors.

### Failure E — slow SSRT = slow stopping mechanism

Incorrect as a default.

Correct:

Stop detection, triggering reliability, strategy, and model assumptions can contribute.

### Failure F — stopping failure = slow Stop process

Incorrect.

Correct:

The Stop process may fail to trigger.

### Failure G — more successful stops = stronger inhibition

Incorrect.

Correct:

Strategic slowing/caution can increase stopping success.

### Failure H — one SSRT = inhibitory trait

Incorrect.

Correct:

Current test-retest evidence strongly constrains stable-trait interpretation.

### Failure I — response inhibition = impulsivity

Incorrect.

Correct:

Impulsivity is a broader multidimensional construct.

### Failure J — response inhibition = self-control

Incorrect.

Correct:

Self-control includes valuation, motivation, planning, learning, environment, and emotion regulation.

### Failure K — Stroop cost = inhibition amount

Incorrect.

Correct:

Congruency effects mix facilitation/interference and multiple selection/control processes.

### Failure L — conflict = inhibition

Incorrect.

Correct:

Conflict can trigger several adaptive mechanisms besides suppression.

### Failure M — absent distractor effect = active suppression

Incorrect.

Correct:

Avoidance of capture, learned priority, weak distractor processing, or disengagement can produce similar behavior.

### Failure N — motor stopping = thought suppression

Incorrect.

Correct:

Cross-domain control may overlap, but memory/thought suppression has distinct representational demands.

### Failure O — ERP P3 = inhibition biomarker

Incorrect.

Correct:

The stopping-related P3 has multiple plausible process contributions and its inhibitory interpretation remains contested.

### Failure P — inhibition performance = stable person property

Incorrect.

Correct:

Task/model/state reliability must support the level of person inference.

## 44. Closure audit

### Criterion 1 — response selection and inhibition are separated

**PASS.**

### Criterion 2 — restraint/withholding and cancellation/stopping are separated

**PASS.**

### Criterion 3 — Go/No-Go and Stop-Signal are not treated as interchangeable

**PASS.**

### Criterion 4 — SSRT is explicitly treated as a model-derived latent estimate

**PASS.**

### Criterion 5 — stop detection, trigger failure, and stop latency are separated

**PASS.**

### Criterion 6 — race-model assumptions, strategic slowing, and estimation choices are explicit

**PASS.**

### Criterion 7 — individual-difference/trait inference is constrained by temporal-stability evidence

**PASS.**

### Criterion 8 — response inhibition is separated from impulsivity and everyday self-control

**PASS.**

### Criterion 9 — selective stopping and action reprogramming are separated

**PASS.**

### Criterion 10 — Stroop, Simon, and Flanker are represented as distinct interference paradigms

**PASS.**

### Criterion 11 — facilitation and interference are separated

**PASS.**

### Criterion 12 — conflict detection is not equated with inhibition

**PASS.**

### Criterion 13 — attentional distractor suppression is separated from motor stopping

**PASS.**

### Criterion 14 — distractor-suppression mechanisms remain model-dependent

**PASS.**

### Criterion 15 — memory/thought suppression is represented without overgeneralizing from action stopping

**PASS.**

### Criterion 16 — direct suppression, substitution, avoidance, and retrieval competition are separated

**PASS.**

### Criterion 17 — neural/ERP markers are not treated as unique inhibition readouts

**PASS.**

### Criterion 18 — reusable Inhibition Inference Gate exists

**PASS.**

A 50-question Inhibition Inference Gate is now canonical.

## Canonical working rule

**Specify the target of inhibition, distinguish selection from suppression and restraint from cancellation, validate the task model and measurement, separate stopping latency from triggering/strategy, then infer only the inhibitory process supported across task/state alternatives.**

Never:

**one inhibition-task score -> inhibitory capacity -> impulsivity/self-control/personality.**

## Sources

1. National Institute of Mental Health. *Response Selection; Inhibition/Suppression — RDoC*. Current official resource. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/constructs/response-selection-inhibition-suppression
2. Verbruggen, F., Aron, A. R., Band, G. P. H., et al. (2019). A consensus guide to capturing the ability to inhibit actions and impulsive behaviors in the stop-signal task. *eLife, 8*, e46323. https://doi.org/10.7554/eLife.46323
3. Thunberg, C., Wiker, T., Bundt, C., & Huster, R. J. (2024). On the (un)reliability of common behavioral and electrophysiological measures from the stop signal task: Measures of inhibition lack stability over time. *Cortex, 175*, 81–105. https://doi.org/10.1016/j.cortex.2024.02.008
4. Aziz-Safaie, T., Müller, V. I., Langner, R., Eickhoff, S. B., & Cieslik, E. C. (2024). The effect of task complexity on the neural network for response inhibition: An ALE meta-analysis. *Neuroscience & Biobehavioral Reviews, 158*, 105544. https://doi.org/10.1016/j.neubiorev.2024.105544
5. Hervault, M., & Wessel, J. R. (2025). Does the stop-signal P3 reflect inhibitory control? *Cortex, 183*, 232–250. https://doi.org/10.1016/j.cortex.2024.12.005
6. *Reliability of triggering the stop process is related to prefrontal-subthalamic hyperdirect pathway recruitment.* (2025). PMID 40800851.
7. Karsh, N., Soker-Mijalevich, E., & Horovitz, O. (2024). A differential impact of action–effect temporal contiguity on different measures of response inhibition in the Go/No-Go and Stop-signal paradigms. *Psychological Research, 88*, 1157–1168. https://doi.org/10.1007/s00426-024-01931-2
8. Croizet, P., Belletier, C., Jobert, C., Nahed, Y., & Ferrand, L. (2026). Facilitation, interference, or both? Disentangling processes in the Stroop, Simon, and Flanker tasks using neutral conditions and distributional analyses. *Journal of Experimental Psychology: Human Perception and Performance, 52*(4), 486–515. https://doi.org/10.1037/xhp0001409
9. Theeuwes, J. (2025). Attentional Capture and Control. *Annual Review of Psychology, 76*, 251–273. https://doi.org/10.1146/annurev-psych-011624-025340
10. Gaspelin, N., Ma, X., & Luck, S. J. (2025). Signal suppression 2.0: An updated account of attentional capture and suppression. *Psychonomic Bulletin & Review, 32*(6), 2648–2668. https://doi.org/10.3758/s13423-025-02736-z
11. *The temporal dynamics of visual attention.* (2025). *Journal of Experimental Psychology: General*. PMID 39361368.
12. Anderson, M. C., Crespo-Garcia, M., & Subbulakshmi, S. (2025). Brain mechanisms underlying the inhibitory control of thought. *Nature Reviews Neuroscience, 26*, 415–437. https://doi.org/10.1038/s41583-025-00929-y
13. Clark, C. A., Todorovic, D., Levy, B. J., et al. (2026). Forgetting as a consequence of retrieval suppression: A meta-analytic review. *Journal of Experimental Psychology: General, 155*(5), 1318–1346. https://doi.org/10.1037/xge0001922
14. *Selective cancellation of reactive or anticipated movements: Differences in speed of action reprogramming, but not stopping.* (2024). *Cortex, 177*, 235–252. https://doi.org/10.1016/j.cortex.2024.05.010

## Current-standard note

As of 2026-11-19:

- NIMH RDoC continues to distinguish Response Selection from Inhibition/Suppression within Cognitive Control;
- the Stop-Signal consensus methodology remains essential because SSRT depends on race-model assumptions, detection, triggering, Go strategy, omissions, trial count, and estimation method;
- 2024 reliability evidence strongly cautions against interpreting common SST inhibition measures as stable dispositional traits;
- 2024 meta-analytic evidence indicates Go/No-Go and Stop-Signal paradigms recruit meaningfully different response-inhibition processes;
- 2026 Stroop/Simon/Flanker work shows that classic congruency effects can mix facilitation with interference and can misattribute automatic dynamics to controlled inhibition;
- current distractor-suppression and retrieval-suppression literatures support genuine suppressive-control phenomena while also demonstrating multiple mechanisms and substantial task/method dependence.

## Scope note

This block establishes response-selection/inhibition architecture.

Detailed task switching/flexibility is routed to EXE-04. Performance monitoring/adaptation is routed to EXE-05. Control allocation/effort is routed to EXE-06. Detailed impulsivity belongs partly to PER/DEC/CLN/NDEV. Neural stopping circuits are routed to NEU.
