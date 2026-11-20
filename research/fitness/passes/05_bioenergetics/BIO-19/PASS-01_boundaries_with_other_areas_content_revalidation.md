# BIO-19 / PASS-01 — Boundaries with other areas content revalidation

Дата: 2026-11-20  
Статус: **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-19 — Boundaries with other areas

## 0. Source-of-truth / exact scope

Area 05 Section 19 contains **6 exact boundary items**:

1. Muscle contraction and fatigue → `03_physiology.md`.
2. Cardiovascular/respiratory delivery → `03_physiology.md`.
3. Programming work:rest → `07_training_programming.md`.
4. Nutrition and substrate repletion → `11_nutrition.md`.
5. Testing VO2/lactate/anaerobic capacity → `09_testing_monitoring_measurement.md`.
6. Medical metabolic disease → `01_medicine.md`.

This PASS does **not** re-research all adjacent domains.

Its purpose is to decide, for every overlap:

- what BIO must retain;
- what the neighboring domain owns canonically;
- what must be cross-referenced rather than duplicated;
- what inference is forbidden at the BIO boundary;
- whether the current boundary remains consistent with current professional competency architecture.

The project-wide overlap rule from `TOPIC_OWNERSHIP.md` remains authoritative:

- do not delete overlap before identifying the distinct role;
- keep the canonical detailed treatment in its owner;
- preserve the interface in dependent domains;
- mechanism and application can legitimately live in different areas.

---

## 1. Qualification purpose / Question Card

### Decision

Can Bioenergetics be considered content-complete without duplicating physiology, programming, nutrition, testing, or medicine?

### Question type

**Scope / ownership / non-equivalence / routing boundary.**

### Population/context

Fitness and strength-and-conditioning practice, with later transfer to individualized programming.

### Critical outcomes

1. Correct canonical owner for each Section 19 item.
2. Explicit retained BIO layer at every interface.
3. Explicit forbidden overreach.
4. No loss of downstream-relevant metabolic information.
5. No duplicate ownership that can create contradictory prescriptions.
6. Alignment with current professional competency structures.

### Closure criterion for PASS-01

For all six exact items:

- owner identified;
- BIO-retained layer identified;
- handoff rule identified;
- anti-overreach rule identified.

A separate PASS-02 remains mandatory before `CLOSED_FOR_PRACTICE`.

---

## 2. Professional-architecture check

Current professional structures support keeping these domains distinct while connected.

### NSCA current CSCS architecture

The current NSCA CSCS exam description separates:

**Scientific Foundations**
- anatomy/physiology;
- bioenergetics and metabolism;
- nutrition;

from **Practical/Applied** domains:
- program design;
- exercise technique;
- program implementation/testing.

It specifically places:
- work/rest periods, recovery and unloading under **Program Design**;
- evidence-based test selection, administration, monitoring and interpretation under **Program Implementation**.

NSCA Essentials of Strength Training and Conditioning, 5th Edition likewise separates:
- Chapter 1 — body systems / cardiopulmonary and muscular physiology;
- Chapter 3 — bioenergetics of exercise and training;
- Chapters 10–11 — nutrition;
- Chapter 18 — resistance-training program design, including rest periods.

### ACSM current architecture

ACSM requirements revised in 2026 separate:
- exercise physiology;
- exercise testing and prescription;
- special populations/pathophysiology;
- health-risk appraisal.

The ACSM-CEP requirements further distinguish:
- clinical exercise testing and prescription;
- advanced exercise physiology, including cardiopulmonary function and bioenergetics;
- clinical exercise physiology/pathophysiology, including metabolic diseases and medications.

### Project implication

External professional architecture does **not** prescribe this repository's exact file ownership.

It does support the central project rule:

**mechanism knowledge, measurement, prescription, nutrition intervention and clinical pathology are related but non-equivalent professional tasks.**

Confidence: **HIGH**.

Sources:
- NSCA CSCS Exam Description, current web page checked 2026-11-20.
- NSCA Essentials of Strength Training and Conditioning, 5th Edition table of contents, current NSCA page checked 2026-11-20.
- ACSM EP/CEP eligibility/content requirements, revised 2026-02-06.
- ACSM CEP Content Requirements PDF, copyright 2024 / current 2025 posting.

---

# ITEM 1 — MUSCLE CONTRACTION AND FATIGUE → PHYSIOLOGY

## 3. Why the boundary is necessary

Bioenergetics can explain important contributors to force loss:

- PCr depletion/recovery;
- Pi accumulation;
- pH disturbance;
- substrate availability;
- oxidative limitation;
- ionic/metabolic disturbance.

But muscular contraction and fatigue are not reducible to ATP supply.

Relevant non-bioenergetic or broader physiological layers include:

- excitation–contraction coupling;
- Ca2+ handling;
- membrane excitability;
- cross-bridge function;
- neural drive / central fatigue;
- contractile properties;
- tissue damage and recovery;
- integrated systemic responses.

Therefore a metabolic disturbance can be:

- a contributor;
- a correlate;
- a constraint;

without being the complete mechanism of fatigue.

## 4. Canonical ownership

### BIO owns

- ATP-resynthesis pathway contribution;
- PCr/glycogen/metabolite state;
- metabolic/ionic contributors to fatigability;
- substrate and oxidative constraints;
- the rule that metabolic markers are not complete fatigue diagnoses.

Relevant upstream BIO:
- BIO-05 — acid–base / buffering;
- BIO-08 — energy-system interaction;
- BIO-10 — substrate depletion/repletion;
- BIO-11 — metabolic fatigue / limiting factors;
- BIO-12 — RT bioenergetics.

### PHY owns canonically

- `PHY-02 — Muscle cell and contraction`;
- `PHY-10 — Fatigue`;
- broader excitation–contraction and integrated fatigue mechanisms.

### Interface rule

BIO may say:

> “This metabolic state can contribute to reduced force/power through physiological mechanisms.”

BIO should then cross-reference PHY for the detailed contraction/fatigue mechanism.

BIO should **not** say:

> “This metabolite/substrate change is the fatigue mechanism.”

unless the specific claim is sufficiently established for the defined task/context.

## 5. Anti-overreach rule

Forbidden default chains:

- `PCr down → fatigue explained`;
- `lactate up → fatigue explained`;
- `pH down → fatigue explained`;
- `glycogen down → all force loss explained`;
- `ATP pathway estimate → contractile failure mechanism identified`.

Canonical boundary:

**BIO owns metabolic contributors; PHY owns the integrated contraction/fatigue mechanism.**

Confidence: **HIGH**.

---

# ITEM 2 — CARDIOVASCULAR / RESPIRATORY DELIVERY → PHYSIOLOGY

## 6. Why the boundary is necessary

Oxidative metabolism requires delivery and use of oxygen, but the oxygen cascade spans multiple levels:

- ventilation;
- pulmonary gas exchange;
- hemoglobin carriage;
- cardiac output;
- regional blood flow;
- capillary exchange;
- diffusion;
- muscle extraction;
- mitochondrial utilization.

Bioenergetics cannot collapse this into one “oxygen system.”

## 7. Canonical ownership

### BIO owns

- O2 as terminal electron acceptor;
- oxidative ATP-resynthesis dependence on oxygen availability;
- VO2 as an integrated oxygen-consumption flux;
- oxygen-deficit / oxidative-contribution interpretation;
- interaction between delivery, extraction and mitochondrial utilization as energetic constraints;
- why O2 availability is not universally the sole limiter.

Relevant BIO:
- BIO-06 — oxidative metabolism;
- BIO-08 — energy-system interaction;
- BIO-09 — oxygen uptake / aerobic contribution;
- BIO-11 — metabolic limiting factors;
- BIO-15 — aerobic capacity/economy.

### PHY owns canonically

- `PHY-14 — Cardiovascular exercise physiology`;
- `PHY-15 — Respiratory exercise physiology`;
- `PHY-17 — Integrated physiology`.

PHY owns the detailed systemic mechanisms:
- cardiac output;
- stroke volume;
- blood pressure regulation;
- ventilation;
- gas exchange;
- diffusion;
- oxygen transport.

### Interface rule

BIO may model:

> “Oxidative ATP flux is constrained by the integrated O2 cascade.”

PHY owns:

> “How the cardiovascular and respiratory systems generate that delivery response.”

## 8. Anti-overreach rule

Forbidden default chains:

- `low VO2 → mitochondrial limitation`;
- `high HR → oxygen-delivery limitation`;
- `high ventilation → oxidative metabolism is maximal`;
- `mitochondrial marker → whole-body oxygen delivery explained`;
- `systemic O2-delivery evidence → all populations are delivery-limited`.

Canonical boundary:

**BIO owns energetic use/constraint; PHY owns cardiopulmonary delivery physiology.**

Confidence: **HIGH**.

Professional support:
- ACSM current requirements list cardiopulmonary structure/function and macronutrient metabolism/bioenergetics as distinct advanced-physiology content elements.

---

# ITEM 3 — PROGRAMMING WORK:REST → PROGRAMMING

## 9. Why the boundary is necessary

Bioenergetics explains what rest changes:

- PCr resynthesis;
- metabolite/pH recovery;
- oxygen uptake state;
- substrate state;
- later-bout pathway contribution;
- later-set internal load.

That does not by itself specify the optimal rest prescription.

A program-design decision must integrate:

- target adaptation;
- required mechanical output;
- exercise;
- load;
- volume;
- time constraints;
- session structure;
- athlete state;
- progression;
- tolerance/adherence;
- chronic evidence.

## 10. Canonical ownership

### BIO owns

- mechanism of incomplete metabolic recovery;
- why same external set after different recovery is a different internal task;
- why total rest and rest placement can alter acute demand;
- why work:rest ratio alone is incomplete;
- why acute metabolic strain does not establish chronic superiority.

Relevant BIO:
- BIO-02;
- BIO-08;
- BIO-12;
- BIO-13;
- BIO-18.

### PRO owns canonically

- `PRO-09 — Rest intervals`;
- `PRO-13 — Density / set organization`;
- related decisions in load/volume/progression/autoregulation.

PRO owns:
- exact rest prescription;
- rest progression;
- density targets;
- cluster/rest-redistribution selection;
- session-level trade-offs;
- chronic goal-specific programming.

## 11. Current professional support

Current NSCA CSCS architecture places:
- bioenergetics/metabolism under Exercise Science;
- **work/rest periods, recovery and unloading** under Program Design.

NSCA Essentials 5th Edition places rest periods within the resistance-training program-design chapter.

The 2026 ACSM resistance-training position stand is chronic-outcome evidence for prescription; it should not be replaced by an acute bioenergetic rationale.

## 12. Anti-overreach rule

BIO cannot prescribe:

- one universal rest interval from PCr kinetics;
- one rest interval from rep range alone;
- “short rest is better” because lactate/HR are higher;
- “long rest is better” because output is preserved;
- a chronic program from acute metabolic response alone.

Canonical boundary:

**BIO explains the acute internal consequences of rest; PRO decides the prescription.**

Confidence: **HIGH**.

Sources:
- NSCA CSCS Exam Description, current.
- NSCA Essentials 5th Edition, current.
- ACSM 2026 RT Position Stand, PMID 41843416.

---

# ITEM 4 — NUTRITION AND SUBSTRATE REPLETION → NUTRITION

## 13. Why the boundary is necessary

Substrate repletion has two different questions.

### Biological question

- what pool was depleted?
- what determines repletion kinetics?
- how do muscle glycogen, liver glycogen, PCr, IMTG and blood glucose differ?
- what state matters for the next task?

This belongs BIO.

### Intervention question

- what should be eaten/drunk?
- how much?
- when?
- what nutrient source?
- what supplement?
- how does energy intake or GI tolerance change the plan?

This belongs NUT.

## 14. Canonical ownership

### BIO owns

- substrate pools;
- depletion/repletion mechanisms;
- state dependence;
- kinetics as physiological phenomena;
- distinction between substrate repletion and functional readiness.

Relevant BIO:
- BIO-02 — PCr;
- BIO-07 — substrate selection;
- BIO-10 — depletion/repletion;
- BIO-17 — individual substrate state.

### NUT owns canonically

- `NUT-06 — Carbohydrate/glycogen`;
- `NUT-10 — Hydration`;
- `NUT-11 — Electrolytes`;
- `NUT-12 — Meal timing / session nutrition`;
- `NUT-18 — Creatine`;
- broader intake strategy.

## 15. Current evidence check

NSCA's current CSCS architecture separates Nutrition from Exercise Science/Bioenergetics.

NSCA Essentials 5th Edition separates:
- Chapter 3 bioenergetics/substrate depletion-repletion;
- Chapter 10 basic nutrition;
- Chapter 11 nutrition strategies for performance.

Current human evidence continues to show that dietary carbohydrate availability materially affects muscle glycogen state. The 2026 systematic review/meta-analysis on dietary carbohydrate and skeletal-muscle glycogen therefore supports an interface between BIO and NUT, not merged ownership.

## 16. Anti-overreach rule

BIO may conclude:

> “Rapid glycogen restoration depends on nutritional carbohydrate availability.”

BIO should not independently turn that into a complete intake prescription without NUT evidence/context.

Forbidden default chains:

- `glycogen low → fixed carbohydrate dose for everyone`;
- `PCr system relevant → creatine supplement automatically indicated`;
- `high sweat/strain → electrolyte prescription from BIO alone`;
- `substrate depleted → performance fully restored once substrate normalizes`.

Canonical boundary:

**BIO owns substrate physiology; NUT owns nutritional manipulation of that substrate state.**

Confidence: **HIGH**.

Sources:
- NSCA Essentials 5th Edition.
- NSCA CSCS Exam Description.
- 2026 systematic review/meta-analysis, PMID 42828472.

---

# ITEM 5 — TESTING VO2 / LACTATE / ANAEROBIC CAPACITY → TESTING

## 17. Why the boundary is necessary

A physiological construct and a valid test of that construct are different things.

BIO needs to know what a metric means mechanistically.

TST must decide whether the measurement is:
- valid;
- reliable;
- standardized;
- interpretable;
- sensitive enough;
- safe;
- practical.

## 18. Canonical ownership

### BIO owns

- meaning of VO2 / VO2peak / VO2max;
- lactate production/disposal/concentration boundaries;
- threshold constructs as method-defined physiological markers;
- anaerobic power/capacity construct distinctions;
- why test outputs are not direct ATP-pathway measurements.

Relevant BIO:
- BIO-04;
- BIO-08;
- BIO-09;
- BIO-14;
- BIO-15.

### TST owns canonically

- `TST-01 — Why/what to test`;
- `TST-02 — Test selection`;
- `TST-03 — Standardization / familiarization`;
- `TST-05 — Muscular-endurance testing`;
- `TST-06 — Power/velocity testing`;
- `TST-09 — Cardiorespiratory testing`;
- `TST-18 — Reliability/validity/error/MDC`;
- test administration and longitudinal interpretation.

## 19. Current evidence check

Current NSCA CSCS architecture places test selection, administration, monitoring and interpretation under Program Implementation, not bioenergetics.

The 2026 ERS technical standard on CPET reference values found substantial heterogeneity in VO2peak and Wpeak associated with:
- site/geographic region;
- metabolic cart;
- protocol;
- averaging method.

That finding is especially important for the boundary:

**a biological construct may be stable enough to discuss while its measured value remains protocol/method dependent.**

Therefore BIO should retain measurement limitations, but TST owns the testing procedure and decision framework.

## 20. Anti-overreach rule

Forbidden default chains:

- `blood lactate = glycolytic ATP flux`;
- `Wingate mean power = direct anaerobic capacity`;
- `VO2peak = direct mitochondrial capacity`;
- `one threshold protocol = universal physiological breakpoint`;
- `one test change = true adaptation without error/standardization analysis`.

Canonical boundary:

**BIO defines and constrains the construct; TST owns measurement validity, protocol and monitoring use.**

Confidence: **HIGH**.

Sources:
- NSCA CSCS Exam Description, current.
- ERS technical standard, 2026, PMID 41786497.

---

# ITEM 6 — MEDICAL METABOLIC DISEASE → MEDICINE

## 21. Why the boundary is necessary

Normal exercise metabolism and metabolic disease share vocabulary:

- glucose;
- insulin;
- glycogen;
- lipid metabolism;
- energy availability;
- substrate oxidation.

But normal-performance bioenergetics cannot diagnose or manage:
- diabetes;
- endocrine disease;
- metabolic syndrome;
- hypoglycemia risk;
- medication effects;
- organ complications;
- clinical contraindications.

## 22. Canonical ownership

### BIO owns

- normal exercise metabolism;
- substrate use;
- acute/chronic metabolic adaptation;
- energetic constraints in apparently healthy exercise contexts;
- the distinction between normal physiological variation and unproven pathology inference.

### MED owns canonically

- `MED-07 — Endocrine and metabolic conditions`;
- `MED-10 — Pharmacology and substances`;
- `MED-15 — Emergency / referral / clinical boundary`;
- screening, diagnosis-adjacent interpretation, contraindications and referral.

## 23. Current professional / clinical support

ACSM's current CEP architecture explicitly separates:
- advanced exercise physiology including macronutrient metabolism/bioenergetics;
from
- clinical exercise physiology/pathophysiology including metabolic diseases and drugs.

The 2026 ADA Standards of Care show why this matters in practice:
- exercise is recommended for diabetes;
- but complications and medications can change safety, glycemic response and the need for clinical evaluation.

This is not a semantic distinction.

Clinical disease changes:
- risk;
- contraindications;
- monitoring;
- medication interactions;
- referral requirements.

## 24. Anti-overreach rule

BIO must not infer:

- insulin resistance from substrate-use pattern alone;
- diabetes from glucose response alone;
- mitochondrial disease from low aerobic capacity;
- endocrine pathology from poor training response;
- clinical safety from apparently normal exercise bioenergetics.

Canonical boundary:

**BIO owns normal/performance metabolism; MED owns disease, clinical risk, medication and referral.**

Confidence: **HIGH**.

Sources:
- ACSM EP/CEP requirements, revised 2026-02-06.
- ACSM CEP Content Requirements.
- ADA Standards of Care in Diabetes—2026.

---

# 25. Cross-domain ownership matrix

| Section 19 item | BIO retains | Canonical neighboring owner | Handoff trigger |
|---|---|---|---|
| Muscle contraction/fatigue | metabolic contributors / energetic constraints | PHY-02 / PHY-10 | question becomes integrated contractile/neural fatigue mechanism |
| Cardiovascular/respiratory delivery | O2 use, energetic consequence, delivery-vs-utilization constraint | PHY-14 / PHY-15 / PHY-17 | question becomes ventilation/cardiac output/gas exchange/transport physiology |
| Programming work:rest | acute metabolic consequence of recovery | PRO-09 / PRO-13 | question asks exact rest/density prescription or progression |
| Nutrition/repletion | pool depletion/repletion physiology | NUT-06 / NUT-10 / NUT-11 / NUT-12 / NUT-18 | question asks intake, timing, dose, food/supplement strategy |
| Testing VO2/lactate/anaerobic capacity | construct meaning + physiological interpretation limits | TST-01/02/03/06/09/18 | question asks protocol, validity, reliability, reference values or monitoring |
| Medical metabolic disease | normal exercise metabolism / non-diagnostic boundary | MED-07 / MED-10 / MED-15 | pathology, medication, contraindication, clinical management or referral |

---

## 26. General boundary model

BIO-19 supports a four-layer rule:

### Layer 1 — Mechanism / state

Examples:
- PCr status;
- glycolytic flux;
- lactate handling;
- oxidative metabolism;
- glycogen state.

Owner: **BIO** when the focus is energetic/metabolic.

### Layer 2 — Whole-system physiology

Examples:
- muscle contraction;
- cardiovascular delivery;
- ventilation/gas exchange;
- integrated fatigue.

Owner: **PHY**, with BIO interface where energetic state contributes.

### Layer 3 — Measurement / intervention / prescription

Examples:
- test protocol;
- rest interval;
- carbohydrate intake;
- monitoring schedule.

Owners:
- **TST** for measurement;
- **PRO** for training prescription;
- **NUT** for nutrition intervention.

### Layer 4 — Pathology / clinical risk

Examples:
- diabetes;
- endocrine disease;
- medication effects;
- contraindications/referral.

Owner: **MED**.

Canonical project rule:

**the same variable can appear in multiple areas because mechanism, measurement, prescription and clinical interpretation are different questions.**

Confidence: **HIGH project architecture**.

---

## 27. Boundary does not mean “do not mention”

BIO should retain a short interface when the neighboring mechanism is necessary to interpret metabolism.

Correct:

> “O2 delivery can constrain oxidative metabolism; detailed delivery physiology is PHY.”

Incorrect:

> “Cardiovascular delivery is outside BIO, therefore BIO never discusses it.”

Correct:

> “Carbohydrate availability changes glycogen state; intake prescription is NUT.”

Incorrect:

> “Glycogen repletion is nutrition only.”

Correct:

> “Rest changes PCr/metabolite state; exact rest prescription is PRO.”

Incorrect:

> “Rest intervals do not belong in BIO.”

This rule prevents both:
- duplication;
- artificial fragmentation.

---

## 28. Boundary does not prove causal irrelevance

A handoff is an **ownership decision**, not evidence that the handed-off factor is unimportant.

Examples:

- assigning contraction to PHY does not make energy metabolism irrelevant to fatigue;
- assigning rest prescription to PRO does not make PCr kinetics irrelevant;
- assigning glycogen intake to NUT does not make glycogen physiology irrelevant to BIO;
- assigning CPET protocol to TST does not make VO2 physiology irrelevant to BIO;
- assigning diabetes to MED does not make exercise metabolism irrelevant to diabetes.

---

## 29. Boundary does not authorize simple one-way causation

The domains interact bidirectionally.

Examples:

- programming changes energetic state;
- energetic state constrains programming output;
- nutrition changes substrate availability;
- substrate state changes performance;
- disease/medication can change metabolism;
- metabolism can alter clinical exercise response;
- test protocol changes measured value;
- measured value informs subsequent programming.

Therefore project routing should be:

**question → level of claim → canonical owner → interface references**

rather than:

**keyword → one file only**.

---

## 30. Six-item content audit

Each item was checked against four criteria:

1. canonical owner identified;
2. BIO-retained layer identified;
3. anti-overreach rule identified;
4. current external architecture/evidence does not contradict the split.

Results:

| Item | Owner | BIO retained | Anti-overreach | External consistency |
|---|---:|---:|---:|---:|
| 1 contraction/fatigue | PASS | PASS | PASS | PASS |
| 2 cardio/resp delivery | PASS | PASS | PASS | PASS |
| 3 work:rest programming | PASS | PASS | PASS | PASS |
| 4 nutrition/repletion | PASS | PASS | PASS | PASS |
| 5 testing | PASS | PASS | PASS | PASS |
| 6 metabolic disease | PASS | PASS | PASS | PASS |

**PASS-01 content audit = 24/24 resolved.**

This does **not** close BIO-19.

PASS-02 must independently test:
- whether any neighboring owner is missing;
- whether Section 19 should include an explicit recovery/individualization boundary;
- whether current `TOPIC_OWNERSHIP.md` is fully consistent with BIO-19;
- whether any existing BIO-01…BIO-18 canonical finding violates these routing rules;
- whether synthesis can be created without losing cross-domain information.

---

## 31. Established findings

1. **Boundary by level, not keyword.** A concept may appear in BIO and another area when the claim level differs.
2. **Fatigue:** BIO owns energetic/metabolic contributors; PHY owns integrated contraction/fatigue mechanisms.
3. **O2 delivery:** BIO owns energetic consequence/constraint; PHY owns detailed cardiovascular/respiratory delivery physiology.
4. **Rest:** BIO owns acute metabolic consequences; PRO owns exact work:rest prescription.
5. **Repletion:** BIO owns substrate-state physiology; NUT owns intake/dose/timing interventions.
6. **Testing:** BIO owns construct meaning and interpretation limits; TST owns protocol, validity/reliability and monitoring.
7. **Disease:** BIO owns normal/performance metabolism; MED owns pathology, medication, contraindications and referral.
8. Professional competency structures from NSCA and ACSM are consistent with keeping these tasks separate.
9. Current 2026 evidence strengthens the testing and medical boundaries: CPET outputs are method sensitive, and metabolic disease exercise management requires clinical context.
10. No content-level blocker remains for the six exact Section 19 items.

---

## 32. What remains unresolved

No unresolved **content item** from the exact six-item Section 19 scope remains.

However, closure is intentionally withheld pending PASS-02.

Questions reserved for independent closure audit:

1. Does BIO-19 need explicit boundaries for recovery/readiness (REC) and individualization (IND), even though these are not listed in exact Section 19?
2. Should those be added to the canonical BIO-19 synthesis or retained only as downstream cross-references?
3. Do any BIO findings use measurement/prescription/clinical language that violates the newly explicit layer rule?
4. Is a separate evidence-ledger boundary row needed for the general “mechanism ≠ measurement ≠ prescription ≠ pathology” architecture, or are item-specific rows sufficient?

---

## 33. Evidence hierarchy / interpretation note

This PASS is primarily a **scope and professional-architecture question**, not an intervention-effect question.

Therefore high-value sources include:

- current professional competency structures;
- current certification/content requirements;
- current technical standards for testing;
- current clinical disease standards;
- current systematic evidence only where it clarifies an interface.

The project does not infer that professional curriculum organization is a biological law.

It uses the professional architecture as:
- an external consistency check;
- a scope-control tool;
- a guard against category errors.

---

## 34. Source register

### Current professional / official sources

1. **NSCA — CSCS Exam Description**  
   Current page checked 2026-11-20.  
   Scientific Foundations separates Exercise Science/Bioenergetics and Nutrition; Practical/Applied separates Program Design and Program Implementation/testing.  
   https://www.nsca.com/cscs-exam-description

2. **NSCA — Essentials of Strength Training and Conditioning, 5th Edition**  
   Current NSCA table of contents checked 2026-11-20.  
   Chapter 3 Bioenergetics; Chapters 10–11 Nutrition; Chapter 18 Program Design/Rest Periods.  
   https://www.nsca.com/essentials-strength/

3. **ACSM — Updated ACSM-EP / ACSM-CEP certification requirements**  
   Page revised 2026-02-06.  
   Separates Exercise Physiology, Exercise Testing and Prescription, Special Populations/Pathophysiology and Health Risk Appraisal.  
   https://acsm.org/updated-acsm-ep-and-acsm-cep-certifications-requirements-and-accreditation/

4. **ACSM — Clinical Exercise Physiologist Content Requirements**  
   Current 2025 PDF / copyright 2024.  
   Separates clinical testing/prescription, advanced exercise physiology/bioenergetics and clinical pathophysiology.  
   https://acsm.org/wp-content/uploads/2025/01/acsm-cep-requirements.pdf

5. **ACSM Position Stand 2026 — Resistance Training Prescription**  
   PMID **41843416**.  
   Used to preserve acute-mechanism vs chronic-prescription boundary.

6. **ERS Technical Standard 2026 — CPET reference values**  
   PMID **41786497**.  
   Demonstrates protocol/equipment/averaging heterogeneity relevant to test interpretation.

7. **ADA Standards of Care in Diabetes—2026**  
   Used for clinical metabolic-disease / exercise-management boundary.

### Current research interface source

8. **Dietary carbohydrate intake and skeletal muscle glycogen: systematic review/meta-analysis (2026)**  
   PMID **42828472**.  
   Used only to confirm that nutrition intervention materially modifies the substrate state whose physiology is owned by BIO.

---

## 35. Practical rule for later Nika decisions

Before using a bioenergetic fact, classify the next claim:

1. **What is the energetic mechanism/state?** → BIO.
2. **How does the whole physiological system create/express it?** → PHY.
3. **How should training be prescribed?** → PRO.
4. **What should be consumed?** → NUT.
5. **How should it be measured?** → TST.
6. **Is this disease/medication/clinical risk?** → MED.
7. **How should the final person-specific choice be made?** → later IND, using all upstream layers.

This is a routing rule, not a substitute for evidence inside the destination domain.

---

## 36. Status

**BIO-19/PASS-01 — CONTENT PASS COMPLETE.**

Exact Area 05 Section 19:
- **6/6 items revalidated at content/scope level**.
- **24/24 boundary checks resolved**.
- No Section 19 content blocker identified.
- `CLOSED_FOR_PRACTICE` is **not** assigned yet.

Next one block:

**BIO-19/PASS-02 — independent closure audit and synthesis.**
