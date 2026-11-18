# PHY-02 — Muscle cell and contraction

Статус: **CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-18**  
Область: 03 — Physiology

## 0. Decision

Создать базовую клеточно-физиологическую модель, достаточную для ответа на вопрос:

> **как electrical signal превращается в force?**

и для downstream PHY-03…PHY-10, NEU, BIO, MEC, PRO и TST без:

- смешения уровней muscle/fiber/myofibril/sarcomere/filament;
- cardiac-style CICR error;
- ложной молекулярной точности;
- пассивного понимания relaxation;
- смешения force generation с supportive cellular systems.

## 1. Structural hierarchy

Canonical hierarchy:

`muscle → fascicle → muscle fiber → myofibril → sarcomere → thick/thin filament system`

### Muscle fiber
Large multinucleated skeletal-muscle cell.

### Myofibril
Longitudinal intracellular contractile assembly containing serial sarcomeres.

### Sarcomere
Repeating contractile unit between Z-discs.

### Thin filament
Actin-centered regulatory filament system.

### Thick filament
Myosin-centered motor filament system.

Project rule:

**ordinary active sarcomere shortening is explained primarily by sliding of thick and thin filaments relative to each other, not by actin/myosin filaments themselves shrinking.**

## 2. Sarcomere proteins

### Actin
Principal structural backbone of the thin filament.

### Myosin
Forms the thick filament and contains ATPase motor domains that cyclically interact with actin.

### Titin
Giant sarcomeric protein with established roles in:

- organization;
- passive elasticity/stiffness;
- structural integrity;
- force transmission/mechanosensing.

Current evidence also supports activation-dependent mechanical roles.

Project boundary:

**titin is not treated as inert, but its exact quantitative contribution to active/residual force remains unresolved.**

### Z-disc
Defines sarcomere boundaries and organizes thin-filament/titin-associated structures.

## 3. Sarcolemma, T-tubules and SR

### Sarcolemma
Excitable muscle-fiber plasma membrane.

### T-tubules
Invaginations/continuations of sarcolemma that rapidly carry depolarization deep into the fiber.

### Sarcoplasmic reticulum
Specialized intracellular Ca²⁺ store for rapid contraction–relaxation cycling.

The T-tubule/SR interface forms the functional basis of the skeletal-muscle triad.

## 4. Excitation–contraction coupling

Canonical sequence:

`muscle-fiber action potential → T-tubular depolarization → CaV1.1/DHPR voltage sensing → functional/conformational coupling to RyR1 → SR Ca²⁺ release`

The triadic complex includes more than CaV1.1 and RyR1; proteins such as STAC3, junctophilins and additional regulatory/luminal components support its architecture/function.

Project rule:

**electrical excitation does not directly activate actomyosin; it is converted through organized Ca²⁺ release machinery.**

## 5. Skeletal vs cardiac Ca²⁺ coupling

Normal adult skeletal muscle should not be modeled as if it used the cardiac trigger-Ca²⁺ mechanism.

Project rule:

**T-tubular voltage-controlled CaV1.1–RyR1 coupling dominates normal skeletal-muscle SR Ca²⁺ release; RyR1-mediated CICR is not treated as the principal trigger.**

Disease/special contexts may differ and remain outside this foundation topic.

## 6. Ca²⁺ as activation signal

RyR1-mediated SR release raises myoplasmic Ca²⁺.

Ca²⁺ binds troponin C and shifts the troponin–tropomyosin regulatory system toward states that allow productive actin–myosin interaction.

Modern project model:

**thin-filament activation is cooperative and multistate, not a perfectly binary cover/uncover switch.**

Strong myosin binding can further stabilize active thin-filament states.

## 7. Actomyosin / cross-bridge cycle

Useful bounded cycle:

1. ATP binds myosin and promotes detachment from actin.
2. ATP hydrolysis primes the motor into an ADP + Pi-associated state.
3. When thin-filament regulation permits, myosin binds actin.
4. Structural transitions produce force/displacement.
5. Pi/ADP-linked transitions complete strongly bound states.
6. New ATP promotes detachment and another cycle.

Project rule:

**ATP-dependent actomyosin cycling is the core active-force motor.**

## 8. Molecular uncertainty in force generation

The core cross-bridge model is secure enough for project use.

But:

**the exact microscopic timing of the elementary force-generating transition relative to Pi-associated steps remains under active mechanistic refinement.**

Therefore the project does not treat one textbook arrow as complete molecular truth.

## 9. ATPase roles

Two ATP-consuming processes are central to the contraction–relaxation loop:

1. **myosin ATPase** → actomyosin cycling;
2. **SERCA Ca²⁺-ATPase** → SR Ca²⁺ reuptake.

Additional ATP-consuming membrane transport supports excitability/homeostasis but detailed energetic accounting belongs to BIO.

## 10. Relaxation

Relaxation is active physiology.

Canonical sequence:

`reduced excitation → reduced SR Ca²⁺ release + SERCA-mediated Ca²⁺ reuptake → falling myoplasmic Ca²⁺ → reduced thin-filament activation → declining cross-bridge engagement → falling active force`

Project rule:

**relaxation consumes energy; it is not simply the absence of contraction.**

## 11. Twitch

A twitch is the transient mechanical response to one effective excitation event.

The action potential is brief, while Ca²⁺ and mechanical responses persist longer.

Project rule:

**electrical and mechanical time courses are not identical.**

## 12. Temporal summation

If another excitation arrives before full Ca²⁺ removal and mechanical relaxation:

- activation remains elevated;
- more thin-filament sites remain permissive;
- more force-bearing cross-bridges can be supported;
- force rises above the prior twitch.

Project rule:

**summation is nonlinear/history-dependent, not simple arithmetic addition of identical independent twitches.**

## 13. Tetanus

At sufficiently high repeated excitation frequency, individual mechanical responses fuse into sustained high force.

Project rule:

**higher stimulation frequency increases sustained activation/force; it does not make each action potential larger.**

Detailed motor-unit recruitment/firing belongs to NEU.

## 14. Force–length foundation

At the same nominal activation level, force can vary with muscle/sarcomere length because:

- actin–myosin interaction geometry changes;
- passive structures increasingly contribute at longer lengths.

Project rule:

**force capacity is not length-invariant.**

Detailed force–length mechanics remain PHY-04/MEC.

## 15. Force–velocity foundation

Force capacity changes with shortening/lengthening velocity through cross-bridge kinetics and mechanical behavior.

Project rule:

**force capacity is not velocity-invariant.**

Detailed concentric/eccentric/isometric differences remain PHY-04.

## 16. Mitochondria

Mitochondria support:

- ATP production;
- redox homeostasis;
- metabolic signaling;
- Ca²⁺-related homeostasis.

They support contraction but are not the immediate force-generating motor.

Detailed metabolism → BIO.

## 17. Myonuclei

Skeletal muscle fibers contain many myonuclei supporting a large shared cytoplasmic volume.

Current project position:

- myonuclear organization is spatially/functional heterogeneous;
- rigid universal fixed myonuclear-domain assumptions are not required here.

Detailed hypertrophy implications remain PHY-07.

## 18. Satellite cells

Satellite cells are muscle stem cells associated with mature muscle fibers and contribute to regeneration/remodeling and, in relevant contexts, nuclear accretion.

Project rule:

**satellite cells are not part of the immediate electrical-signal → force chain.**

Detailed hypertrophy causality remains PHY-07.

## 19. Extracellular matrix

Muscle ECM contributes to:

- tissue organization;
- force transmission/distribution;
- cellular/stem-cell niche;
- remodeling after loading/injury.

Project rule:

**ECM is not inert packing material, but it is not the actomyosin motor.**

Detailed connective-tissue adaptation remains PHY-12.

## 20. Capillary network

Capillaries support exchange of:

- oxygen;
- substrates;
- metabolites;
- signaling factors.

Distribution/local supply geometry matters beyond simple capillary count.

Project rule:

**capillary supply supports contractile function but does not directly generate force.**

Detailed vascular physiology remains PHY-14.

## 21. Integrated excitation → force model

Canonical project chain:

`NMJ output → muscle-fiber action potential → T-tubular depolarization → CaV1.1 voltage sensing / triadic coupling → RyR1-mediated SR Ca²⁺ release → troponin/tropomyosin-mediated thin-filament activation → ATP-dependent actomyosin cycling → sarcomeric force → intracellular/ECM/tendon force transmission → external force`

Important distinction:

**neural activation is upstream of force but is not force itself.**

## 22. Integrated relaxation model

Canonical project chain:

`reduced excitation/release → SERCA-mediated Ca²⁺ reuptake → falling myoplasmic Ca²⁺ → reduced thin-filament activation → cross-bridge disengagement → reduced active force`

This means a failure of force production can occur:

- upstream in neural activation;
- in membrane excitation;
- in ECC/Ca²⁺ release;
- in myofilament activation;
- in cross-bridge mechanics;
- in structural force transmission.

That distinction becomes important in PHY-10 fatigue and later testing.

## 23. Training-relevant implications

1. **Electrical/neural drive is not equivalent to force.**
2. **Peripheral contractile failure can reduce force even if neural drive remains high.**
3. **Relaxation has an ATP cost through Ca²⁺ reuptake.**
4. **Higher firing/stimulation frequency can increase force through temporal activation/summation.**
5. **Muscle size alone cannot specify force because activation, length, velocity, architecture and force transmission matter.**
6. **Mechanistic plausibility alone does not prove a training method produces more hypertrophy or strength.**
7. **Support systems such as mitochondria, ECM and capillaries matter without being the direct contractile motor.**

## 24. What PHY-02 can establish

PHY-02 establishes:

1. skeletal muscle cellular hierarchy;
2. the sarcomeric contractile unit;
3. triadic excitation–contraction coupling;
4. Ca²⁺ activation of thin filaments;
5. ATP-dependent actomyosin cycling;
6. ATP-dependent relaxation via SERCA;
7. twitch/summation/tetanus foundation;
8. length/velocity dependence of force at foundation level;
9. separation of immediate motor from supporting cellular/tissue systems.

## 25. What PHY-02 cannot prescribe

Not yet owned here:

- exact exercise selection;
- exact load/repetition targets;
- eccentric/concentric programming;
- hypertrophy dose;
- strength dose;
- fatigue thresholds;
- personal fiber-type assumptions;
- technique based on lever/torque mechanics.

Those remain for PHY-03/04/07/08/10, MEC, TEC, PRO, TST and IND.

## 26. Current non-blocking uncertainties

1. Exact CaV1.1 → RyR1 conformational sequence.
2. Exact quantitative activation-dependent titin contribution.
3. Exact microscopic force-generating step around Pi-associated transitions.
4. Detailed thick-filament mechanosensing/super-relaxed-state regulation.
5. Exact individual force-frequency relation.

Project rule:

**these uncertainties refine the mechanism but do not block the practical cellular model.**

## 27. Canonical project rules

1. Muscle fiber ≠ myofibril ≠ sarcomere ≠ filament.
2. Actin/myosin filaments slide; they do not simply “contract.”
3. Skeletal ECC is dominated by voltage-controlled triadic coupling.
4. Do not import cardiac trigger-Ca²⁺/CICR logic wholesale into skeletal muscle.
5. Ca²⁺ regulates productive actin–myosin interaction through cooperative thin-filament control.
6. ATP is required for both myosin cycling/detachment and Ca²⁺ reuptake.
7. Relaxation is active and energetically costly.
8. Twitch, summation and tetanus are distinct time/frequency phenomena.
9. Force depends on length and velocity.
10. Titin matters, but its exact active-force contribution remains bounded uncertainty.
11. Satellite cells, myonuclei, mitochondria, ECM and capillaries support muscle function but are not the immediate actomyosin motor.
12. Mechanistic change does not automatically prove superior chronic training adaptation.

## 28. Evidence / confidence

### HIGH
- structural hierarchy;
- sarcomere/filament organization;
- T-tubule/SR triad;
- CaV1.1/RyR1 skeletal ECC architecture;
- skeletal vs cardiac CICR boundary;
- Ca²⁺–troponin/tropomyosin regulation;
- ATP-dependent actomyosin cycling;
- SERCA-dependent relaxation;
- twitch/summation/tetanus principles;
- compartment roles of mitochondria/myonuclei/satellite cells/ECM/capillaries.

### MODERATE / ACTIVE RESEARCH
- exact CaV1.1→RyR1 conformational sequence;
- exact titin contribution to active/residual force;
- exact microscopic force-generating transition;
- detailed thick-filament activation/mechanosensing.

## 29. Sources checked in revalidation

1. Feng et al. skeletal-muscle structure review 2024 — PMID 38988494.
2. Systematic myofiber structure–function review 2025 — PMID 40463839.
3. Chang et al. triadic ECC complex review 2025 — PMID 40097154.
4. Rall ECC foundation review 2024 — PMID 39116389.
5. T-tubular system review 2025 — PMID 40352140.
6. Current ECC review 2026 — PMID 42696147.
7. Tropomyosin/thin-filament structural review 2026 — PMID 41557229.
8. Kawai cross-bridge force-step review 2025 — PMID 40622514.
9. Martinez-Martin et al. titin review 2026 — PMID 41909620.
10. Myonuclear review 2025 — PMID 39700019.
11. Satellite-cell review 2025 — PMID 40825664.
12. ECM review 2025 — PMID 41033732.
13. Mitochondrial-maintenance review 2025 — PMID 39433393.
14. Capillary-supply review 2026 — PMID 42656066.
15. Xu et al. native triad structural study 2024 — PMID 38507485.
16. Kobayashi et al. skeletal-muscle CICR study 2025 — PMID 40838888.
17. Sasaki et al. SERCA1 regulation 2025 — PMID 41372236.
18. Zero et al. activation-history Ca²⁺/force study 2025 — PMID 39738587.
19. Dynamic Ca²⁺/force study 2024 — PMID 38184730.
20. Subsarcomeric thin/thick-filament regulation 2026 — PMID 42228534.

## 30. Closure

Closure audit:
`passes/03_physiology/PHY-02/PASS-02_closure_audit_and_synthesis.md`.

Result:
**28/28 exact area-map items passed; no project-relevant blocker remains.**

PHY-02 = **CLOSED_FOR_PRACTICE v2.0**.

## 31. Next dependency

**PHY-03 — Fiber types / phenotype.**
