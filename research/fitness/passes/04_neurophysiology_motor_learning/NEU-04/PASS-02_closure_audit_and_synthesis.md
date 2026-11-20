# NEU-04 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-04 — Reflex regulation

## 0. Purpose

Проверить, что после PASS-01 тема NEU-04 достаточно закрывает Area 04 Section 4 для downstream NEU-05/08/09/10, TEC, PRO, GPP и TST без:

- stretch reflex treated as one fixed monosynaptic response;
- H-reflex equated with natural mechanically evoked reflex;
- reciprocal inhibition treated as a fixed antagonist-off switch;
- GTO/Ib circuitry treated as a high-force safety shut-off;
- presynaptic modulation treated as one universal inhibitory brake;
- rapid corrective movement treated as purely spinal;
- SSC performance reduced to stretch reflex;
- ~250 ms contact time treated as a biological neural breakpoint;
- larger reflex amplitude treated as universally better performance.

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 4 — 8 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-04;
3. `PASS-01_reflex_regulation_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU04-01…NEU04-09;
5. current findings inventory confirming no pre-existing NEU-04 canonical;
6. closure-critical re-check:
   - H-reflex review — PMID 42347160;
   - H-reflex methods/context review — PMID 36571622;
   - H-reflex vs tendon-reflex stretching study — PMID 40859631;
   - human Ib locomotion study — PMID 16472783;
   - human PAD study — PMID 36916205;
   - human long-latency/reticulospinal study — PMID 43032948;
   - SSC history-dependent review — PMID 42841751;
   - 250 ms SSC boundary review — PMID 42909940.

No closure-critical contradiction was found.

## 2. Exact area-map audit — 8/8

1. Stretch reflex — **PASS AS MULTI-LATENCY, TASK-DEPENDENT RESPONSE**.
2. Monosynaptic reflex arc — **PASS AS SHORTEST Ia→ALPHA-MN COMPONENT**.
3. Reciprocal inhibition — **PASS AS TASK/PHASE-DEPENDENT INTERNEURONAL CONTROL**.
4. Autogenic inhibition — **PASS WITH MODERN Ib/GTO FORCE-FEEDBACK REINTERPRETATION**.
5. Presynaptic modulation — **PASS WITH H-REFLEX INFERENCE LIMITS + PAD NUANCE**.
6. Reflex contribution to rapid movement — **PASS WITH SHORT-vs-LONG-LATENCY SPINAL/SUPRASPINAL DISTINCTION**.
7. SSC neurophysiological component — **PASS AS MULTI-MECHANISTIC PHENOMENON**.
8. Simplified fitness explanations vs physiology — **PASS EXPLICITLY**.

Result: **8/8 PASS.**

## 3. Stretch-reflex architecture audit

PASS.

A muscle stretch can evoke a time-structured response involving:

- spindle transduction;
- Ia afferent transmission;
- alpha-motoneuron state;
- spinal interneuronal circuits;
- descending/background drive;
- later supraspinal feedback.

Canonical rule:

**stretch reflex is a task- and latency-dependent sensorimotor response, not one fixed reflex gain.**

No blocker.

## 4. Monosynaptic / H-reflex boundary audit

PASS.

The monosynaptic label applies specifically to the shortest central connection:

`Ia afferent → alpha motor neuron`.

The H-reflex electrically recruits peripheral afferents and bypasses normal spindle mechanical transduction.

The 2025 soleus study (PMID 40859631) showed a clear dissociation:

- H-reflex depression recovered between stretches;
- tendon-reflex depression persisted longer.

Therefore the two measures can change differently even when they share Ia-motoneuron circuitry.

Canonical rule:

**H-reflex is a spinal probe, not the natural stretch reflex itself and not a pure single-mechanism excitability measure.**

No blocker.

## 5. Reciprocal-inhibition audit

PASS.

Reciprocal Ia inhibition remains a valid circuit principle:

`agonist Ia input → inhibitory interneuron → antagonist motoneuron modulation`.

But its expression changes with:

- locomotor phase;
- posture;
- descending command;
- task;
- background activation.

Canonical rule:

**reciprocal inhibition is regulated, not an automatic antagonist-off switch.**

Functional co-contraction does not contradict the existence of reciprocal inhibitory circuitry.

No blocker.

## 6. GTO / Ib / “autogenic inhibition” audit

PASS.

Human evidence does not support the fitness cliché:

`high force → GTO emergency inhibition → muscle shuts down`.

PMID 16472783 showed:
- Ib inhibition was reduced by loading;
- Ib facilitation appeared during locomotor conditions in some subjects.

This supports state-dependent force-feedback circuitry rather than one protective shut-off rule.

Canonical rule:

**GTO/Ib feedback is distributed and task dependent; strength training is not explained by “overcoming GTO inhibition.”**

No blocker.

## 7. Presynaptic modulation / PAD audit

PASS WITH MODERN MECHANISTIC BOUNDARY.

Classical human methods infer presynaptic control partly through conditioned H-reflex paradigms.

However H-reflex amplitude is jointly influenced by several mechanisms and cannot identify presynaptic inhibition alone.

PMID 36916205 further showed in humans that sensory- or corticospinal-evoked PAD-like conditioning can facilitate H-reflex transmission, consistent with reduced Ia branch-point failure.

Therefore:

`PAD`
does not universally imply
`less afferent transmission`.

Canonical rule:

**presynaptic/PAD mechanisms gate sensory transmission in a context-dependent way and are not one universal inhibitory brake.**

No blocker.

## 8. Rapid corrective movement audit

PASS.

Short-latency responses are primarily spinal/segmental.

Long-latency responses are supraspinal and task dependent.

PMID 43032948 found loud acoustic stimulation selectively enhanced long-latency but not short-latency responses, with timing consistent with an online reticulospinal contribution alongside established corticospinal involvement.

Canonical rule:

**rapid correction combines spinal and supraspinal feedback; long-latency responses are not purely spinal reflexes.**

No blocker.

## 9. SSC audit

PASS.

The SSC effect is retained as an interaction among:

- preactivation;
- stretch-related neural feedback;
- tendon/series-elastic behavior;
- muscle-tendon interaction;
- force-velocity effects;
- history-dependent contractile properties.

PMID 42841751 specifically supports a substantive role for residual-force-enhancement/history-dependent mechanisms.

Canonical rule:

**SSC performance is multi-mechanistic and cannot be reduced to “stretch reflex adds power.”**

No blocker.

## 10. Fast/slow SSC classification audit

PASS WITH CLASSIFICATION CAUTION.

PMID 42909940 traced the common ~250 ms threshold and found:

- the original classification used more than one criterion;
- later literature often reduced it to contact time alone;
- direct evidence does not show a physiological discontinuity at exactly 250 ms.

Canonical rule:

**~250 ms is an operational heuristic, not a biologically privileged reflex threshold.**

No blocker.

## 11. Fitness-simplification audit

PASS.

The following explanations are rejected as canonical:

1. “spindle stretch automatically contracts the muscle”;
2. “GTO shuts the muscle off to prevent injury”;
3. “H-reflex = CNS excitability”;
4. “reciprocal inhibition turns the antagonist off”;
5. “plyometric power comes from the stretch reflex”;
6. “larger reflex = better nervous system”;
7. “250 ms divides two discrete neural mechanisms.”

Canonical replacement:

**reflex regulation is task-specific gain control within a distributed sensorimotor system.**

No blocker.

## 12. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. NEU04-01 — multi-latency/task-dependent stretch reflex;
2. NEU04-02 — monosynaptic Ia arc boundary;
3. NEU04-03 — H-reflex vs natural reflex;
4. NEU04-04 — reciprocal inhibition;
5. NEU04-05 — GTO/Ib reinterpretation;
6. NEU04-06 — presynaptic/PAD nuance;
7. NEU04-07 — rapid spinal/supraspinal feedback;
8. NEU04-08 — SSC multi-mechanistic model;
9. NEU04-09 — 250 ms heuristic boundary.

No ledger correction or additional row is required for closure.

## 13. Uncertainty audit

PASS.

Remaining uncertainty is non-blocking:

1. exact spinal/corticospinal/reticulospinal weighting in a specific exercise;
2. exact Ib facilitation/inhibition profile in resistance-training tasks;
3. exact presynaptic mechanism inferred by one H-reflex conditioning protocol;
4. individual significance of reflex gain for performance;
5. exact reflex contribution to one SSC task;
6. whether a specific training intervention should increase or decrease reflex gain.

These belong downstream to NEU-05/08/09/10, TST, TEC, PRO, GPP and IND.

## 14. Scope-control audit

Neighboring ownership remains separate:

- neural force production → NEU-05;
- training-induced neural adaptation → NEU-06;
- fatigue → NEU-08;
- motor coordination/control → NEU-09;
- balance → NEU-10;
- SSC biomechanics → MEC;
- plyometric programming → PRO/GPP;
- reflex-test validity → TST.

No additional NEU-04 PASS is required before closure.

## 15. Closure criterion test

Topic:

> NEU-04 — Reflex regulation

Result: **PASS.**

Canonical synthesis:

`perturbation / stretch`
`→ sensory afferent input`
`→ spinal gain control + interneuronal modulation`
`+ supraspinal feedback at longer latency`
`→ task-dependent corrective output`.

For SSC:

`feedforward preactivation + reflex feedback + muscle-tendon mechanics + history-dependent muscle properties`
`→ observed SSC performance`.

## 16. Closure decision

**NEU-04 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 8 exact Section 4 items pass;
2. stretch reflex remains multi-latency and task dependent;
3. monosynaptic Ia→alpha-MN arc is not equated with the whole response;
4. H-reflex remains distinct from natural mechanical stretch reflex;
5. reciprocal inhibition remains task regulated;
6. GTO/Ib circuitry is not modeled as an emergency shut-off;
7. PAD/presynaptic control is not modeled as purely inhibitory;
8. rapid correction includes spinal and supraspinal pathways;
9. SSC remains neural + mechanical + history dependent;
10. ~250 ms remains only an operational heuristic;
11. reflex amplitude is not a universal performance-quality score;
12. no project-relevant blocker remains;
13. first canonical NEU-04 finding can now be created;
14. NEU-05 can proceed later without reopening NEU-04 unless a concrete dependency appears.

## 17. Next dependency

**NEU-05 — Neural force production.**

Do not start NEU-05 in this same working block.
