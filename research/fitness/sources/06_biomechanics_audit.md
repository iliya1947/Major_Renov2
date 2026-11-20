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
