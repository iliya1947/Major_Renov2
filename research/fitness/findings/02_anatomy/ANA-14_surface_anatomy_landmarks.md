# ANA-14 — Surface anatomy / landmarks

Статус: **CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-18**  
Область: 02 — Anatomy

## 0. Decision

Создать surface-landmark map для стандартизированных измерений, joint-position reference и technique description без:

- landmark = exact internal anatomy simplification;
- palpation = perfect localization assumption;
- girth = protocol-independent value assumption;
- visible contour = force/activation inference;
- asymmetry = diagnosis overclaim.

## 1. Core project model

1. Anatomical landmark = visible/palpable reference.
2. Surface proxy = skin-level approximation of deeper anatomy.
3. Diagnosis = medical inference.
4. These are different categories.

Project rule:

**landmark observation ≠ diagnosis.**

## 2. Palpable bony landmarks

Useful examples include:

### Thorax / shoulder
- jugular notch;
- sternum;
- clavicle;
- acromion;
- scapular spine;
- inferior angle;
- medial scapular border;
- C7 spinous-process region.

### Upper limb
- humeral epicondyles;
- olecranon;
- radial-head region;
- radial/ulnar styloids;
- pisiform;
- metacarpal heads.

### Pelvis / hip
- iliac crest;
- ASIS;
- PSIS;
- greater trochanter.

### Knee / lower leg
- patella;
- femoral epicondylar regions;
- tibial tuberosity;
- fibular head;
- tibial crest.

### Ankle / foot
- medial/lateral malleoli;
- calcaneal contour;
- navicular prominence;
- metatarsal landmarks.

Project rule:

**palpable does not mean perfectly localizable.**

## 3. Landmark reliability

Usually more accessible:
- malleoli;
- patella;
- tibial tuberosity;
- olecranon;
- clavicle;
- prominent epicondyles.

Often more examiner-dependent:
- PSIS;
- specific spinal levels;
- scapular landmarks under soft tissue;
- deep joint centers;
- small/deep carpal/tarsal structures.

Project rule:

**landmark choice should reflect expected localization error.**

## 4. Visible muscle-group contours

Surface-visible regions can include:
- deltoid;
- pectoralis major;
- trapezius;
- latissimus-dorsi contour;
- biceps/triceps;
- forearm flexor/extensor masses;
- rectus abdominis/external oblique/paraspinal mass;
- gluteal region;
- quadriceps;
- hamstring/adductor regions;
- gastrocnemius;
- soleus/lower-calf contour;
- tibialis anterior.

Visibility depends on:
- adiposity;
- muscle size;
- contraction;
- joint position;
- hydration/fluid;
- lighting/camera angle;
- individual anatomy.

Project rule:

**visible contour identifies approximate region only; it does not establish activation, force, deep anatomy or isolated hypertrophy.**

## 5. Circumference measurement

A circumference value requires a defined protocol.

Minimum record:
1. anatomical site;
2. side;
3. body/joint position;
4. relaxed vs contracted state;
5. tape orientation;
6. tape tension/skin compression;
7. respiration if relevant;
8. repeat-measurement rule;
9. time/context where relevant.

Project rule:

**a girth without site/protocol is incomplete longitudinal data.**

## 6. Upper-arm circumference

A standardized protocol can use:
- marked upper-arm midpoint;
- tape perpendicular to limb long axis;
- controlled tape tension;
- fixed side/position.

Project use:
- repeated size tracking.

Exact project protocol selection → TST/IND.

## 7. Waist circumference

Different established protocols use different anatomical levels.

Therefore:

**waist values from different protocols/sites are not assumed interchangeable.**

For project tracking:
- choose one protocol;
- document it;
- repeat the same site and respiratory condition.

## 8. Hip circumference

Standardized hip girth generally uses maximal buttock circumference with horizontal tape.

Project rule:

**hip circumference is not a direct glute-muscle-mass measurement.**

It reflects combined:
- skeletal geometry;
- muscle;
- adipose tissue;
- other soft tissue.

## 9. Joint-position landmarks

Surface landmarks can define segment coordinate references.

Examples:
- C7/sternum/acromion for thorax-shoulder context;
- humeral epicondyles for elbow;
- ASIS/PSIS/greater-trochanter region for pelvis/hip;
- femoral/tibial landmarks for knee;
- malleoli/calcaneus/metatarsals for ankle/foot.

Project rule:

**landmark-defined coordinate systems are measurement conventions, not direct access to internal joint motion.**

## 10. Surface landmark vs internal joint center

A surface landmark may serve as:
- endpoint;
- orientation reference;
- estimator;
- calibration input.

It is not automatically:
- true joint center;
- functional axis;
- internal bone trajectory.

This distinction is mandatory for later MEC/TST work.

## 11. Marker-placement error

Manual marker placement can deviate from intended bony landmarks.

Such error can propagate into:
- segment orientation;
- calculated joint angle;
- symmetry estimates.

Project rule:

**small angle/position differences may reflect measurement error rather than anatomical change.**

## 12. Soft-tissue artifact

Skin/subcutaneous tissue moves relative to bone during motion.

Therefore:

**skin-marker trajectory ≠ bone trajectory.**

STA is especially relevant for:
- spine;
- thigh;
- scapula;
- high-amplitude/high-speed movement.

Magnitude handling → MEC/TST.

## 13. Technique-reference use

Surface landmarks can describe segment relations in:

### Squat/lunge
- pelvis;
- knee;
- tibia;
- ankle/foot.

### Press/pull
- sternum/clavicle;
- acromion;
- elbow;
- wrist.

### Hinge
- pelvis;
- greater-trochanter region;
- knee;
- trunk.

Project rule:

**landmarks describe movement; they do not define one universally safe or optimal technique.**

Technique decisions → TEC/MEC/MED.

## 14. Static asymmetry boundary

Visible/palpable asymmetry can reflect:
- normal anatomy;
- stance;
- soft-tissue distribution;
- camera perspective;
- measurement error;
- motor strategy;
- pathology.

Therefore:

**surface asymmetry is an observation requiring context, not a diagnosis.**

Examples:
- ASIS/PSIS asymmetry ≠ SIJ diagnosis;
- scapular posture ≠ pathology diagnosis;
- foot pronation appearance ≠ pathology;
- visible knee alignment ≠ ligament status.

## 15. Circumference vs hypertrophy

Girth can change because of:
- muscle;
- fat;
- fluid;
- glycogen-associated water;
- transient pump;
- site/technique variation;
- limb position.

Project rule:

**girth is useful for repeated field tracking but is not a pure muscle-mass measure.**

Interpretation → TST/PHY/NUT.

## 16. Standardization hierarchy

For future project measurement, prefer:

1. named protocol;
2. exact landmark/site;
3. fixed side;
4. fixed body/joint position;
5. fixed contraction state;
6. fixed tape/marker orientation;
7. repeat-measurement rule;
8. documented examiner/equipment;
9. standardized photo/camera setup where visual tracking is used.

## 17. Cross-topic ownership

### ANA-14
Surface accessibility and landmark logic.

### ANA-15
Individual proportions, geometry and asymmetry.

### TST
Measurement protocol, reliability, MDC and longitudinal tracking.

### MEC
Coordinate systems, marker errors, dynamic kinematics.

### TEC
Exercise-technique decisions.

### MED
Pathological interpretation.

## 18. Canonical project rules

1. Landmark ≠ diagnosis.
2. Surface marker ≠ bone trajectory.
3. Surface point ≠ internal joint center.
4. Circumference is protocol-dependent.
5. Visible muscle contour ≠ activation/force.
6. Static asymmetry ≠ pathology.
7. Repeated measurements require consistent protocol.
8. Surface landmarks are useful references but carry structure-specific localization uncertainty.

## 19. Evidence / confidence

### HIGH
- surface landmarks are useful measurement references;
- circumference is site/protocol dependent;
- standardized anthropometry improves repeatability;
- skin landmarks are proxies rather than direct internal joint centers;
- marker placement and STA can materially affect kinematics;
- visible contour/asymmetry alone is non-diagnostic.

### MODERATE / METHOD-DEPENDENT
- exact accuracy of individual palpated landmarks;
- exact marker error under a specific task/model;
- exact scapular/pelvic/spinal landmark precision.

## 20. Sources checked in revalidation

1. CDC/NCHS — NHANES current procedures index, 2025–2026.  
2. CDC/NCHS — NHANES Anthropometry Procedures Manual, 2021.  
3. ISAK — current Accreditation Scheme, 2026.  
4. ISAK — current Legal notice, reviewed 2026.  
5. ISB joint-coordinate recommendations, PMID 11934426 and 15844264.  
6. Scapular landmark uncertainty, PMID 42843211.  
7. Lumbar palpation accuracy, PMID 37930272.  
8. Pelvic palpation critical review, PMCID PMC11304509.  
9. Lumbar marker/STA study, PMID 39368319.  
10. Knee marker accuracy study, PMID 39986061.  
11. Marker-placement/STA uncertainty study, PMID 41418505.  
12. Mid/hindfoot external-marker estimation, PMID 42601595.

## 21. Closure

Closure audit:
`passes/02_anatomy/ANA-14/PASS-02_closure_audit_and_synthesis.md`.

Result:
**6/6 area-map items passed; no project-relevant blocker remains.**

ANA-14 = **CLOSED_FOR_PRACTICE v2.0**.

## 22. Next dependency

**ANA-15 — Individual anatomy / anthropometry.**
