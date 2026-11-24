# BIO-09 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-09 — Oxygen uptake and aerobic contribution

## 0. Audit target

Independent closure audit of:

`research/fitness/passes/05_bioenergetics/BIO-09/PASS-01_oxygen_uptake_aerobic_contribution_content_revalidation.md`

Exact source scope: Area 05 Section 9 = **9 items**.

---

## 1. Independent source re-check

Independent re-check used:

1. Sietsema & Rossiter. **Exercise Physiology and Cardiopulmonary Exercise Testing.** PMID **37429332**.
2. Gifford et al. **Overdot and overline annotation must be understood to accurately interpret VO2max physiology with the Fick formula.** PMID **38444762**.
3. **Modeling VO2 on-kinetics based on intensity-dependent delayed adjustment and loss of efficiency (DALE).** PMID **35482330**.
4. **The algorithm used for the calculation of gas exchange affects the estimation of O2 uptake kinetics at the onset of moderate-intensity exercise.** PMID **37983192**.
5. Poole & Gaesser. **Oxygen uptake slow component: Enigma of the 'excess' oxygen used during heavy and severe exercise.** PMID **39466978**.
6. Shaw et al. **The slow component of the VO2 response is associated with the increase in glycolytic contribution.** PMID **42435219**.
7. Rothschild et al. **The VO2 slow component likely reflects a decline, not a rise, in glycolytic rate.** PMID **42616103**.
8. Micheli et al. **Analysis of the factors influencing the proximity and agreement between critical power and maximal lactate steady state: systematic review/meta-analyses.** PMID **40124604**.
9. Knaier et al. **A verification phase adds little value to the determination of maximum oxygen uptake in well-trained adults.** PMID **38238521**.
10. Çabuk et al. **Verification Trials Can Create the Illusion of VO2max in Addition to Contributing to its Confirmation.** PMID **41707053**.
11. **Effects of verification stage intensity and duration on VO2max determination.** PMID **42371071**.
12. Michalik & Danek. **Submaximal Verification Test to Exhaustion Confirms Maximal Oxygen Uptake.** PMID **39407817**.
13. Gastin & Suppiah. **Anaerobic and Aerobic Energy System Contribution During Maximal Exercise: A Systematic Review.** PMID **41965479**.
14. Panissa et al. **Magnitude and duration of EPOC between high-intensity interval and moderate-intensity continuous exercise: systematic review.** PMID **32656951**.
15. Dorado et al. **Effects of recovery mode on performance, O2 uptake, and O2 deficit during high-intensity intermittent exercise.** PMID **15199225**.
16. Astorino et al. **Heart Rate and Oxygen Uptake During Recovery from High-Intensity Interval Training.** PMID **40724066**.
17. Skattebo et al. **A Review of Central and Peripheral Limitations to Endurance Exercise Performance.** PMID **41845944**.
18. Broxterman et al. **Endurance exercise training changes the limitation on muscle VO2max in normoxia from the capacity to utilize O2 to the capacity to transport O2.** PMID **38048175**.
19. Marinari & DeLorey. **VO2max and the kinetics of VO2, muscle oxygen delivery, and muscle deoxygenation.** PMID **41458383**.
20. Inglis et al. **Exercise training-induced speeding of VO2 kinetics is not intensity domain-specific or correlated with indices of exercise performance.** PMID **39636436**.

No closure-critical contradiction was found.

---

## 2. Exact Section 9 audit — 9/9

1. VO2 — **PASS WITH WHOLE-BODY/LOCAL BOUNDARY**.
2. Oxygen deficit — **PASS WITH MODEL BOUNDARY**.
3. Oxygen uptake kinetics — **PASS WITH MODEL/MECHANISM BOUNDARY**.
4. Steady state — **PASS WITH DOMAIN-CLASSIFICATION BOUNDARY**.
5. VO2max / VO2peak — **PASS WITH TESTING/VERIFICATION BOUNDARY**.
6. Aerobic contribution to high-intensity exercise — **PASS**.
7. EPOC — **PASS WITH PRACTICAL-MAGNITUDE BOUNDARY**.
8. Aerobic system during between-set recovery — **PASS WITH GENERALIZATION BOUNDARY**.
9. Cardiovascular delivery vs mitochondrial utilization — **PASS WITH POPULATION/STATE BOUNDARY**.

Result: **9/9 PASS.**

---

## 3. VO2 audit

PASS WITH WHOLE-BODY/LOCAL BOUNDARY.

VO2 is a rate of oxygen consumption.

At whole-body level:

`VO2 = cardiac output × arteriovenous O2 difference`.

Pulmonary gas exchange is the standard practical whole-body measurement.

Retain:

- pulmonary VO2 as an integrated systemic flux;
- linkage to working-muscle oxidative metabolism;
- Fick-based dependence on O2 delivery and extraction.

Reject:

- pulmonary VO2 = direct local mitochondrial ATP production;
- pulmonary VO2 = total ATP production;
- one breath-by-breath value = exact instantaneous cellular muscle VO2.

Canonical rule:

**pulmonary VO2 is an integrated whole-body oxygen-consumption signal, not a direct cellular ATP meter.**

No blocker.

---

## 4. Pulmonary VO2 vs muscle VO2 audit

PASS.

During exercise transitions, pulmonary VO2 and local muscle O2 utilization are related but not identical because of:

- pulmonary blood-flow kinetics;
- circulation transit;
- lung/body O2 stores;
- non-exercising tissue contribution;
- breath-by-breath processing.

PMID **37983192** confirms that calculation algorithm alone can change estimated pulmonary VO2 kinetic parameters.

Canonical rule:

**pulmonary and local muscle VO2 are coupled but non-identical signals, especially during rapid transitions.**

No blocker.

---

## 5. Oxygen deficit audit

PASS WITH MODEL BOUNDARY.

Oxygen deficit is retained as a **model-derived energetic construct**.

It estimates the transient difference between:

- modeled oxidative O2/energy requirement for the task;
- measured accumulated oxygen uptake during the adjustment period.

That transient energy gap is supported by non-oxidative ATP resynthesis while oxidative metabolism accelerates.

Reject:

- oxygen deficit = literal whole-body hypoxia;
- oxygen deficit = direct measurement of anaerobic ATP;
- oxygen deficit = direct tissue O2 concentration measurement.

Canonical rule:

**oxygen deficit is an indirect estimate of delayed oxidative matching, not a literal oxygen shortage measurement.**

No blocker.

---

## 6. VO2 kinetics audit

PASS.

The on-response is retained as a time-dependent rise in oxidative oxygen uptake after workload transition.

Important boundaries:

- phase-I pulmonary response is influenced strongly by circulation/gas stores;
- phase-II more closely reflects working-muscle oxidative adjustment but is not a perfectly direct local measurement;
- model choice affects derived time constants;
- pre-exercise state/recovery can change kinetics;
- training can speed kinetics.

PMID **39636436** showed that training-induced speeding of VO2 kinetics was not intensity-domain specific and did not correlate directly with changes in VO2max or other performance indices.

Canonical rule:

**VO2-kinetic speed is a distinct aerobic characteristic, not another name for VO2max.**

No blocker.

---

## 7. VO2 slow-component audit

PASS WITH MECHANISTIC UNCERTAINTY.

The slow component itself is retained as a robust delayed increase in VO2 during heavy/severe constant-work exercise.

Closure explicitly rejects one settled mechanism.

Current evidence is actively contradictory:

- PMID **42435219** reported an association between slow-component area and estimated glycolytic contribution;
- PMID **42616103** argues the pattern is more consistent with declining rather than rising glycolytic rate;
- current reviews retain multiple interacting explanations including efficiency loss, fibre recruitment and fatigue-related changes.

The first 2026 study also estimated glycolytic contribution from post-exercise blood lactate, which BIO-08 already classifies as method dependent rather than direct glycolytic ATP measurement.

Canonical rule:

**VO2 slow component = established phenomenon; exact causal partition = unresolved.**

No blocker.

---

## 8. Steady-state / intensity-domain audit

PASS WITH CLASSIFICATION BOUNDARY.

Retain trainer-level domain behavior:

### Moderate
VO2 steady state is normally attainable.

### Heavy
A slow component can occur and a delayed steady state can remain attainable below the heavy–severe boundary.

### Severe
A true metabolic steady state is not normally sustained; VO2 continues to rise toward a finite tolerance limit and may approach VO2max.

However closure rejects treating one marker as a perfectly interchangeable boundary measure.

The 2025 meta-analysis PMID **40124604** found:

- CP was on average higher than MLSS when expressed as power;
- substantial limits of agreement/inter-individual variability;
- CP and MLSS should not be assumed interchangeable for every person.

Canonical rule:

**intensity domains are physiologically useful, but exact boundary identification is method dependent.**

No blocker.

---

## 9. VO2 steady state audit

PASS.

A stable VO2 response at constant workload does not imply complete physiological stasis.

Other variables can continue changing:

- substrate use;
- temperature;
- hormones;
- fatigue state;
- local metabolites.

Canonical rule:

**VO2 steady state ≠ all-body metabolic steady state in every variable.**

No blocker.

---

## 10. VO2max audit

PASS.

VO2max is retained as the maximal attainable whole-body oxygen uptake under defined large-muscle exercise/test conditions.

It reflects the integrated oxygen cascade:

- pulmonary gas exchange;
- cardiac output;
- arterial O2 content;
- distribution/perfusion;
- diffusion/extraction;
- mitochondrial utilization.

PMID **37429332** supports the integrated model.

Canonical rule:

**VO2max is a systems-level capacity, not an isolated heart or mitochondrial measurement.**

No blocker.

---

## 11. VO2peak vs VO2max audit

PASS WITH OPERATIONAL BOUNDARY.

Retain:

### VO2peak
Highest observed VO2 value in a defined test.

### VO2max
A maximal physiological value supported by the overall testing context/evidence.

Do not retain:

- every VO2peak = VO2max;
- plateau required in every person;
- one secondary criterion universally proves maximality.

Canonical rule:

**VO2peak is an observed test maximum; VO2max is a maximal-capacity interpretation that requires method/context support.**

No blocker.

---

## 12. Verification-phase audit

PASS WITH STRONG PROTOCOL BOUNDARY.

Current evidence is inconsistent enough that closure does not retain verification as a universal gold standard.

Evidence:

- PMID **38238521**: verification added little value in well-trained adults in the studied protocols;
- PMID **39407817**: submaximal verification provided high agreement in physically active men;
- PMID **41707053**: verification outcome varied markedly with verification intensity and could create an illusion of confirmation;
- PMID **42371071**: verification design/recovery/intensity altered likelihood of obtaining higher values.

Therefore:

**verification trials can be useful, but their interpretation is protocol dependent and they are not an infallible universal criterion.**

Exact CPET protocol belongs TST.

No blocker.

---

## 13. Plateau audit

PASS.

A classic VO2 plateau remains physiologically meaningful evidence when observed.

But absence of a plateau is common enough that closure does not require it as the sole universal criterion.

Canonical rule:

**VO2 plateau can support VO2max identification; absence of plateau alone does not prove submaximal effort.**

No blocker.

---

## 14. Aerobic contribution to high-intensity exercise audit

PASS.

BIO-08 closure and current systematic evidence support:

- non-zero oxidative contribution during short maximal work;
- increasing oxidative share as duration increases;
- substantial aerobic contribution before traditional textbook “aerobic onset” times.

The pooled ~78.6 s equal aerobic/anaerobic contribution estimate from PMID **41965479** remains method/population dependent and is not reused as a universal threshold.

Canonical rule:

**high-intensity/anaerobic-dominant exercise is not aerobically silent.**

No blocker.

---

## 15. EPOC definition audit

PASS.

EPOC remains:

**oxygen consumption elevated above the relevant pre-exercise/resting baseline after exercise.**

Closure retains EPOC as multi-process rather than a single “oxygen debt” repayment.

Potential contributing processes can include:

- PCr resynthesis;
- restoration of O2 stores;
- thermoregulatory/circulatory/ventilatory work;
- ion-gradient restoration;
- substrate processing;
- sympathetic/endocrine effects.

Not every listed mechanism must contribute equally in every protocol.

Canonical rule:

**EPOC is an integrated postexercise response, not one single biochemical process.**

No blocker.

---

## 16. EPOC magnitude audit

PASS WITH PRACTICAL-MAGNITUDE BOUNDARY.

PMID **32656951** included 22 studies and found EPOC tended to be higher after HIIE/SIE than MICE in available comparisons.

However:

- methodologies differed;
- baseline subtraction methods differed;
- observation windows differed;
- total energy contribution remained protocol dependent.

Closure therefore rejects:

- a universal EPOC percentage;
- a universal EPOC duration;
- marketing claims that EPOC automatically creates a very large postexercise calorie effect.

Canonical rule:

**EPOC is real and dose dependent, but its practical size must be measured rather than assumed.**

No blocker.

---

## 17. Between-set / inter-bout aerobic recovery audit

PASS WITH GENERALIZATION BOUNDARY.

Relevant evidence supports continued high oxidative metabolism during interval recovery.

PMID **15199225** showed active recovery could increase subsequent aerobic energy yield by speeding VO2 kinetics in a cycling HIT protocol.

PMID **40724066** retrospectively analyzed 104 active adults across cycling HIIT datasets and found mean VO2 remained high during recovery intervals, sometimes similar to work intervals.

But closure does not generalize exact values from cycling HIIT to every resistance-training rest interval.

Retain only:

**between-bout recovery is metabolically active and oxidative flux can materially influence readiness and the next bout.**

Detailed resistance-set recovery belongs BIO-12.

No blocker.

---

## 18. Recovery VO2 vs complete recovery audit

PASS.

Elevated VO2 during recovery can coexist with:

- incomplete PCr resynthesis;
- altered pH/Pi;
- incomplete ionic restoration;
- persistent neuromuscular fatigue.

Canonical rule:

**high recovery VO2 ≠ complete recovery.**

No blocker.

---

## 19. O2 delivery vs extraction vs utilization audit

PASS.

Separate:

### Convective/systemic delivery
- cardiac output;
- arterial O2 content;
- pulmonary gas exchange.

### Peripheral distribution/extraction
- muscle blood flow;
- capillary diffusion;
- arteriovenous O2 extraction.

### Mitochondrial utilization
- mitochondrial respiratory capacity;
- enzyme/substrate/ADP control.

Canonical rule:

**delivery, extraction and mitochondrial utilization are coupled but non-equivalent components of exercise VO2.**

No blocker.

---

## 20. VO2max limitation audit

PASS WITH POPULATION/STATE BOUNDARY.

Closure rejects universal one-factor limitation.

Evidence:

- PMID **37429332**: young fit individuals are commonly limited substantially by O2 delivery, but pathology can limit multiple steps;
- PMID **41845944**: systemic O2 delivery is described as a primary limiter in elite endurance athletes, while peripheral extraction/capillarization/mitochondria remain important;
- PMID **38048175**: in five initially sedentary young men, training shifted the limitation of single-leg muscle VO2max from utilization capacity toward O2 transport capacity.

Therefore:

**the dominant limiter can change with training status, population, exercise model, environment and pathology.**

No blocker.

---

## 21. VO2 kinetics limitation vs VO2max limitation audit

PASS.

PMID **41458383** found:

- VO2max correlated inversely with VO2 kinetic time constant;
- muscle O2-delivery kinetics were not correlated with VO2 kinetics in that cohort;
- intracellular O2-utilization capacity appeared more influential for moderate-exercise kinetics.

PMID **39636436** showed training could accelerate kinetics without proportional/correlated change in VO2max or performance indices.

Canonical rule:

**determinants of VO2 kinetics and determinants of VO2max overlap but are not identical.**

No blocker.

---

## 22. Scope audit

PASS.

BIO-09 owns foundational oxygen uptake/aerobic-contribution physiology.

Deferred:

### BIO-10
Substrate depletion/repletion.

### BIO-11
Integrated fatigue/limiting factors.

### BIO-12
Resistance-training-specific recovery/energetics.

### BIO-13
Energy-system programming.

### BIO-15
Detailed aerobic capacity/economy.

### BIO-16
Chronic adaptations.

### PHY
Detailed cardiovascular/respiratory physiology.

### TST
VO2max/VO2peak protocol, verification strategy, thresholds and measurement interpretation.

### PRO
Training prescription.

No test protocol or training zone is authorized here.

---

## 23. Canonical non-equivalences

1. pulmonary VO2 ≠ direct local mitochondrial ATP production.
2. VO2 ≠ total ATP production.
3. pulmonary VO2 ≠ identical instantaneous muscle VO2.
4. oxygen deficit ≠ literal whole-body oxygen shortage.
5. oxygen deficit ≠ direct anaerobic ATP measurement.
6. faster VO2 kinetics ≠ higher VO2max by definition.
7. constant workload ≠ guaranteed steady state.
8. VO2 steady state ≠ all variables physiologically static.
9. VO2 slow component ≠ one settled mechanism.
10. CP ≠ MLSS as perfectly interchangeable individual boundary.
11. VO2peak ≠ automatically VO2max.
12. no plateau ≠ proof of submaximal test.
13. verification trial ≠ universal gold standard.
14. one verification workload ≠ universally valid confirmation.
15. high-intensity exercise ≠ zero aerobic contribution.
16. anaerobic dominance ≠ aerobic silence.
17. EPOC ≠ one simple oxygen debt.
18. EPOC ≠ PCr resynthesis.
19. EPOC ≠ guaranteed large calorie expenditure.
20. recovery VO2 ≠ complete metabolic recovery.
21. O2 delivery ≠ O2 extraction.
22. O2 extraction ≠ mitochondrial utilization.
23. VO2max ≠ cardiac output alone.
24. VO2max ≠ mitochondrial capacity alone.
25. VO2max limiter ≠ VO2-kinetics limiter.

---

## 24. Closure criterion test

Exact Area 05 Section 9:

1. VO2 — PASS.
2. Oxygen deficit — PASS.
3. Oxygen uptake kinetics — PASS.
4. Steady state — PASS.
5. VO2max / VO2peak — PASS.
6. Aerobic contribution to high-intensity exercise — PASS.
7. EPOC — PASS.
8. Aerobic system during between-set recovery — PASS.
9. Cardiovascular delivery vs mitochondrial utilization — PASS.

Result:

**9/9 PASS.**

No project-relevant blocker remains.

---

## 25. Closure decision

**BIO-09 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. VO2 is an integrated oxygen-consumption flux, not direct local ATP measurement;
2. oxygen deficit is an indirect/model-derived transition-energy construct;
3. VO2 kinetics are intensity/state/method dependent;
4. the slow component is real but its mechanism remains unresolved;
5. moderate/heavy/severe domains differ in steady-state behavior;
6. exact domain boundary identification is method dependent;
7. VO2max is an integrated oxygen-cascade capacity;
8. VO2peak is operationally distinct from confirmed VO2max;
9. plateau and verification evidence are useful but not universally infallible;
10. high-intensity exercise retains substantial aerobic contribution;
11. EPOC is a multi-process postexercise response, not one simple oxygen debt;
12. EPOC magnitude is protocol dependent and not assumed to be a large calorie effect;
13. recovery intervals remain oxidatively active;
14. high recovery VO2 does not mean complete recovery;
15. O2 delivery, extraction and mitochondrial utilization are distinct;
16. the dominant VO2max limiter is population/state/training dependent;
17. VO2 kinetics and VO2max have overlapping but non-identical determinants.

---

## 26. Canonical finding authorization

Create:

`research/fitness/findings/05_bioenergetics/BIO-09_oxygen_uptake_aerobic_contribution.md`

Status:

**CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-19**

Create/finalize evidence-ledger rows:

`BIO09-01…BIO09-09`.

---

## 27. Next dependency

**BIO-10/PASS-01 — Substrate depletion and repletion content revalidation.**

Do not start BIO-10 in this working block.
