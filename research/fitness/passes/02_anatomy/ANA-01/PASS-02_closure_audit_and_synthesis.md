# ANA-01 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 02 — Anatomy  
Topic: ANA-01 — Anatomical terminology / planes / axes / movement terms

## 0. Purpose

Проверить после PASS-01, остался ли какой-либо project-relevant terminology gap, который реально блокирует дальнейшую анатомию, биомеханику или описание упражнений.

Это closure audit, а не новый taxonomy expansion.

## 1. Materials audited

1. `PASS-01_core_anatomical_terminology_revalidation.md`.
2. Legacy `findings/02_anatomy/ANA-01_anatomical_terminology.md`.
3. `areas/02_anatomy.md`.
4. `EVIDENCE_LEDGER.md` ANA01 entries.
5. Current IFAA/FIPAT terminology pages.
6. FIPAT 2025 end-of-year report published 2026-02-08.
7. Anatomical Society core anatomy terminology syllabus.
8. Supporting NCBI anatomical terminology material.
9. Forearm pronation/supination anatomy review.
10. Shoulder/scapular kinematic terminology literature used only to test the boundary between anatomical language and detailed biomechanics.

## 2. Current-source audit

### 2.1 Terminology authority

Current IFAA/FIPAT pages state that:

- the IFAA Terminologies are the international standard for human anatomical sciences;
- Terminologia Anatomica, second edition (TA2), was published online in 2019;
- TA2 is approved by the IFAA General Assembly / IFAA Member Society representatives;
- TA2 remains the published Terminologia Anatomica listed on the current site.

Source:
https://ifaa.net/committees/anatomical-terminology-fipat/fipat-ifaa-terminologies/

### 2.2 TA2.5 status

FIPAT's end-of-year 2025 report, published 2026-02-08, states that a revision of TA2 Latin style is being worked on and:

> "The plan is to publish this as TA2.5 when complete."

Therefore TA2.5 is a **planned future publication**, not a current replacement in the sources checked.

Source:
https://ifaa.net/2026/02/08/end-of-year-report-fipat-2025/

### 2.3 Exact adoption date

The checked current IFAA pages do not support the legacy project's exact wording "adopted in 2020".

They support:
- online publication in 2019;
- approval by IFAA / IFAA representatives.

Closure action:
remove the unsupported exact 2020 adoption wording from the canonical finding.

## 3. Coverage audit against ANA-01 map

### Required: anatomical position

**Covered sufficiently.**

Project can define directional relationships consistently independent of exercise posture.

No blocker.

### Required: directional terms

**Covered sufficiently.**

Core superior/inferior, anterior/posterior, medial/lateral, proximal/distal, superficial/deep, ipsilateral/contralateral plus limb-specific radial/ulnar, palmar/dorsal and plantar/dorsal terminology are sufficient for downstream anatomy.

No blocker.

### Required: planes

**Covered sufficiently.**

Median/sagittal, frontal/coronal, transverse/axial/horizontal and oblique planes are distinguished.

No blocker.

### Required: axes

**Covered sufficiently for anatomy.**

The conventional plane-axis pairing is retained only as a reference/teaching model.

Actual moving joint axes and coordinate-system choices are explicitly handed off to MEC.

No blocker.

### Required: movement terms

**Covered sufficiently.**

Included:
- flexion / extension;
- abduction / adduction;
- medial / lateral rotation;
- pronation / supination;
- wrist radial / ulnar deviation;
- dorsiflexion / plantarflexion;
- inversion / eversion;
- circumduction;
- lateral flexion;
- horizontal abduction / adduction;
- opposition / reposition;
- scapular elevation / depression / protraction / retraction / upward-downward rotation / tilt / axial rotation where needed.

The Anatomical Society core regional anatomy syllabus independently supports essentially this general movement vocabulary as prerequisite anatomical language.

Source:
https://pmc.ncbi.nlm.nih.gov/articles/PMC4694160/

No blocker.

## 4. High-risk ambiguity audit

### 4.1 Pronation/supination vs wrist rotation

Resolved.

Pronation/supination are forearm/radioulnar rotations. The hand changes orientation because of forearm rotation; this must not be mislabeled as a wrist rotation.

Supporting review:
https://pubmed.ncbi.nlm.nih.gov/28137437/

### 4.2 Scapula vs humerus

Resolved at terminology level.

Scapular protraction/retraction and 3D scapular rotations are not interchangeable with glenohumeral/humeral movement labels.

Detailed scapular coordinate-system and coupled-motion questions are deferred to ANA-04/MEC.

No blocker.

### 4.3 Anatomical plane vs real joint axis

Resolved.

A conventional plane-axis label is communication shorthand. It does not establish a single fixed instantaneous joint axis through ROM.

Detailed 3D mechanics belongs to MEC.

No blocker.

### 4.4 Position vs active movement

Resolved.

Descriptions must separate:
1. starting position;
2. segment orientation;
3. movement;
4. final position.

No blocker.

## 5. Scope-control audit

Potential neighboring topics found during ANA-01 do **not** justify expansion of this topic:

1. exact scapular coordinate conventions → ANA-04 / MEC;
2. instantaneous/helical joint axes → MEC;
3. joint-specific ROM → regional ANA topics / MEC;
4. muscle actions and attachments → ANA-04 onward;
5. surface landmarks by region → regional anatomy;
6. pathology / safe ROM → MED + MEC;
7. TA2.5 future publication → source-status watch, not a current blocker.

This is consistent with `AGENT.md`: neighboring detail without a current downstream blocker is deferred.

## 6. Evidence-ledger audit

ANA01 claims required for downstream use are now represented:

1. current TA2 status;
2. pronation/supination as radioulnar forearm motion;
3. anatomical planes/axes as reference descriptions rather than fixed real joint axes.

No additional claim is required before downstream anatomy can proceed.

## 7. Closure criterion test

Closure criterion:

> Можно однозначно описать положение и движение любой ключевой части тела без бытовых "вверх/вбок/поворот примерно туда".

Result: **PASS** for the project scope.

The project now has sufficient terminology to describe:
- segment relationships;
- joint/segment orientation;
- principal movement direction;
- forearm/grip orientation;
- scapular movement separately;
- approximate plane where useful;
without importing detailed biomechanics prematurely.

## 8. Closure decision

**ANA-01 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:
- core terminology is sufficiently current and precise for project decisions;
- no known project-relevant gap blocks ANA-02 or later regional anatomy;
- future TA2/TA2.5 changes may trigger version review;
- detailed biomechanics is intentionally not part of ANA-01 closure.

## 9. Next dependency

Next canonical topic by dependency order:

**ANA-02 — Levels / tissues of musculoskeletal structural organization.**

Do not start ANA-02 in this same working block.
