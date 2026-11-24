# Stage 0B — архитектурный аудит всей карты

Дата: 2026-11-16.

## Цель

Проверить не отдельные темы внутри областей, а сам набор крупных областей после первого прохода 01–15.

## Профессиональная crosswalk

### NSCA Scientific Foundations

- Exercise Science → 02 Anatomy, 03 Physiology, 04 Neuro/Motor, 05 Bioenergetics, 06 Biomechanics, 13 Methodology.
- Sport Psychology → 12 Psychology/ADHD + 04 Motor Learning.
- Nutrition → 11 Nutrition.

### NSCA Practical/Applied

- Program Design → 07 Programming + 14 Individualization.
- Exercise Technique → 08 Technique + 06 Biomechanics.
- Program Implementation → 09 Testing/Monitoring + **new 16 Coaching/Implementation**.
- Organization/Administration → partly 16; facility/legal details conditional because current project is home training.

### ACSM Exercise Physiologist

- Health/Fitness Assessment → 01 Medicine + 09 Testing.
- Exercise Prescription/Implementation → 07 Programming + 08 Technique + 15 GPP + **16 Implementation**.
- Exercise Counseling/Behavior Modification → 12 Psychology + **16 Communication/Coaching**.
- Risk Management/Professional Responsibilities → 01 Medicine + **16 Professional Practice**.

## Главная найденная архитектурная дыра

### 16. Коучинг, реализация тренировки и профессиональная практика

До Stage 0B карта отвечала:
- что происходит физиологически;
- что назначать;
- как выглядит техника;
- как измерять результат.

Но не имела отдельной области для:
- проведения сессии в реальном времени;
- наблюдения и cueing;
- коммуникации;
- изменения упражнения на месте;
- session-level safety;
- scope/referral;
- privacy/documentation;
- remote/AI coaching constraints.

Создан файл:
`areas/16_coaching_implementation_professional_practice.md`.

## Темы, которые не требуют новой отдельной области

### Health outcomes / exercise epidemiology
Добавить в 15 GPP. Это определяет, зачем развивать общую физическую подготовленность, но не требует отдельной ветки для текущей задачи.

### Behavior-change models and motivational interviewing
Добавить в 12 Psychology/ADHD. Это расширение уже существующей behavioral domain, а не отдельная физкультурная наука.

### Injury prevention
Не выделять в один файл как будто травма имеет одну причину. Это cross-domain:
- medicine;
- anatomy;
- biomechanics;
- technique;
- programming;
- recovery;
- implementation/safety.

### Special populations
Не создавать энциклопедию всех популяций. Для Ильи использовать conditional branches в medicine/individualization. Глубоко исследовать только релевантные состояния.

### Facility administration / litigation
Профессионально существует, но для одного домашнего клиента имеет низкую практическую ценность. Сохранено условно в area 16.

### Endurance/conditioning as separate area
Пока не выделять отдельно: основные aerobic/anaerobic/concurrent topics помещаются в area 15 GPP + 05 bioenergetics + 07 programming. Если глубокое исследование покажет, что 15 становится слишком перегруженной, можно отделить позже.

## Междисциплинарные швы, которые нужно сохранять явно

1. Pain: medicine ↔ technique ↔ recovery.
2. Fatigue: physiology ↔ bioenergetics ↔ programming ↔ recovery.
3. Skill: neuro/motor ↔ biomechanics ↔ technique ↔ implementation.
4. Adherence: psychology ↔ programming ↔ coaching.
5. Individual response: testing ↔ methodology ↔ individualization.
6. Nutrition/recovery: nutrition ↔ physiology ↔ recovery.
7. Safety: medicine ↔ technique ↔ coaching.
8. General health: GPP ↔ medicine ↔ psychology/nutrition.
9. Limited equipment: biomechanics ↔ programming ↔ individualization.
10. ADHD: psychology ↔ coaching ↔ programming ↔ medicine where medication is relevant.

## Текущий вывод

После добавления area 16 и расширения 12/15 **очевидных крупных профессиональных областей, необходимых для этой задачи, на текущем проходе не остаётся**.

Это не означает, что карта окончательно доказана полной. Следующий шаг Stage 0B:
1. повторный cross-file pass на дубли/дырки;
2. проверить названия и границы областей;
3. убедиться, что RAW inventory ничего не потерял;
4. затем перейти к Stage 1 — дедупликация и нормализация.


## Cross-file pass — результат

Проверены headings всех 16 областей.

### Повторяющиеся темы, которые являются корректными multi-level overlaps

- fatigue;
- pain;
- exercise selection;
- motor learning/cueing;
- readiness;
- adherence;
- individual response;
- recovery;
- nutrition/recovery;
- strength/hypertrophy;
- ROM/mobility;
- safety;
- ADHD;
- limited equipment;
- body composition;
- sleep.

Для них создан `TOPIC_OWNERSHIP.md`, задающий canonical home и dependent cross-references.

### Новых крупных обязательных областей после cross-file pass не найдено

Профессиональная crosswalk NSCA + ACSM после добавления area 16 закрывается без очевидной крупной дыры для задачи Ильи.

### Что сознательно НЕ превращено в отдельные области

1. Injury prevention — cross-domain.
2. Endurance training — пока nested in GPP + bioenergetics + programming.
3. Special populations — conditional branches.
4. Facility/legal administration — conditional professional topics.
5. Health outcomes — nested in GPP.
6. Behavior-change theories — nested in psychology/adherence.

### Stage 0B status

**COMPLETE for architecture.**

Следующий этап: Stage 1 — дедупликация и нормализация, с сохранением raw inventory как неизменяемой страховочной базы.
