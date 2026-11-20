# Источники аудита области 06 — биомеханика

Дата аудита: 2026-11-16.

1. NSCA — CSCS Detailed Content Outline / Certification Handbook  
   https://www.nsca.com/globalassets/certification/certification-pdfs/nsca-certification-handbook

   Использовано для проверки обязательных biomechanics domains:
   - kinematics;
   - joint angles and velocity;
   - force/momentum/torque;
   - power/work/impulse;
   - center of gravity/center of pressure;
   - force-velocity/force-time;
   - lever systems;
   - muscle roles.

2. NSCA — Essentials of Strength Training and Conditioning, 5th Edition  
   https://www.nsca.com/certification/cscs/essentials-of-strength-training-and-conditioning-5th-edition/

   Chapter 2 outline:
   - skeletal musculature;
   - anatomical planes and major movements;
   - human strength and power;
   - sources of resistance to muscle contraction;
   - joint biomechanics.

3. NSCA/CASCE Professional Standards  
   https://dxpprod.nsca.com/contentassets/19f92a70fe924865a50d341ab437f757/casce-professional-standards-and-guidelines.pdf

   Использовано для подтверждения biomechanics/kinesiology как отдельной профессиональной фундаментальной области.

## Ограничение

На этапе глубокого исследования конкретных упражнений будут нужны отдельные biomechanical studies и качественные обзоры. Карта компетенций не доказывает конкретный лучший вариант техники.

## Коррекция после deep revalidation 2026-11-20

MEC-01/PASS-02 выявил реальный foundational gap, не замеченный в Stage 0 audit: карта содержала angular velocity, angular acceleration и downstream torque, но не содержала явного rotational-dynamics bridge.

В Section 1 добавлены:
- rotational inertia / mass moment of inertia;
- angular momentum;
- angular impulse.

Причина:
- rotational response зависит от mass distribution относительно оси, а не только от total mass;
- torque является rate of change of angular momentum;
- later MEC-16 anthropometry, MEC-17 inertia/ballistics и MEC-21 inverse dynamics требуют этой базы.

Gap content закрыт в `MEC-01/PASS-03`; окончательная closure MEC-01 остаётся за repeat audit.

## MEC-01 closure 2026-11-20

После rotational-dynamics correction:
- Section 1 = **18 exact items**;
- MEC-01/PASS-03 gap content = **12/12 PASS**;
- MEC-01/PASS-04 repeat closure audit = **40/40 PASS**;
- `MEC-01 = CLOSED_FOR_PRACTICE v2.0`.

Следующий topic: `MEC-02 — Kinematics`.

## MEC-02 coordinate/orientation correction 2026-11-20

MEC-02/PASS-02 выявил foundational gap: Section 2 содержал joint angles / planes / axes / trajectories, но не имел явных:
- reference frames / coordinate systems;
- orientation / 3D rotation representation.

В Section 2 добавлены:
- Reference frames / coordinate systems;
- Orientation / 3D rotation representation.

Причина:
- position/vector components требуют defined frame;
- joint kinematics требуют proximal/distal segment frames;
- 3D orientation не эквивалентна одному scalar angle;
- Euler/Cardan/JCS components зависят от convention/sequence;
- current ISB standards отдельно поддерживают global coordinate systems, whole-body orientation и joint coordinate systems.

Gap content закрыт в `MEC-02/PASS-03`; окончательная closure MEC-02 остаётся за repeat audit.

## MEC-02 closure 2026-11-20

После coordinate/orientation correction:
- Section 2 = **16 exact items**;
- MEC-02/PASS-03 gap content = **14/14 PASS**;
- MEC-02/PASS-04 repeat closure audit = **38/38 PASS**;
- PASS-01/PASS-03 math/Markdown escape corruption исправлен и повторно проверен;
- `MEC-02 = CLOSED_FOR_PRACTICE v2.0`.

Следующий topic: `MEC-03 — Kinetics`.

## MEC-03 free-body/terminology correction 2026-11-20

MEC-03/PASS-02 выявил foundational repair cluster:

- отсутствовал explicit Free-body diagrams / system-boundary analysis;
- Joint reaction force требовал Partial vs Total definition/reporting;
- Inertial forces требовал separation D'Alembert pseudo-force vs real distributed-mass inertial contribution;
- generic Force-velocity curve конфликтовал с MEC-08 intrinsic muscle F-V.

Section 3 исправлен:
- Joint reaction force → **Joint reaction force — partial vs total definition/reporting**;
- Inertial forces → **Inertial terms / D'Alembert pseudo-forces and distributed-mass inertial contributions**;
- Force-velocity curve → **Task-level force/load-velocity curve or profile**;
- добавлен **Free-body diagrams / system-boundary analysis**.

Revised Section 3 = **15 exact items**.

Gap content закрыт в `MEC-03/PASS-03`; окончательная closure остаётся за repeat audit.

## MEC-03 closure 2026-11-20

После free-body/terminology repair:
- Section 3 = **15 exact items**;
- MEC-03/PASS-03 repair content = **12/12 PASS**;
- MEC-03/PASS-04 repeat closure audit = **40/40 PASS**;
- Partial/Total JRF retained as project reporting convention following Baltzopoulos, not claimed as universal field-wide wording;
- generic NSCA force-velocity competency wording is preserved as professional scope, while project ownership separates task-level profile from intrinsic muscle F-V;
- `MEC-03 = CLOSED_FOR_PRACTICE v2.0`.

Следующий topic: `MEC-04 — Torque / moment arms`.

## MEC-04 closure 2026-11-20

MEC-04/PASS-02 independent closure/gap audit:
- exact Section 4 = **10/10 PASS**;
- total closure matrix = **33/33 PASS**;
- no source-map mutation required;
- line of action retained inside perpendicular-moment-arm definition;
- reference-axis / center-of-rotation details remain cross-cutting with MEC-02/MEC-12/MEC-21;
- geometric vs tendon-excursion moment arms retained as alternative estimation routes with method-specific assumptions, not separate physical concepts;
- external joint moment retained as mechanical-demand descriptor, not total exercise difficulty/training stimulus;
- `MEC-04 = CLOSED_FOR_PRACTICE v2.0`.

Следующий topic: `MEC-05 — Lever systems`.
