# Владение пересекающимися темами

Назначение: задать **канонический дом** для тем, которые закономерно появляются в нескольких областях. Это предотвращает ошибочную дедупликацию.

Правило:
- канонический файл хранит основной разбор;
- другие области сохраняют только свой аспект + ссылку;
- одинаковые списки не размножать после Stage 1.

## 1. Fatigue / утомление

- **03 Physiology** — физиологические механизмы утомления.
- **05 Bioenergetics** — энергетические/метаболические ограничения.
- **07 Programming** — управление тренировочной нагрузкой.
- **09 Testing** — измерение и мониторинг.
- **10 Recovery** — восстановление от утомления.
- **16 Coaching** — решение в реальном времени при утомлении.

Канонический механизм: **03**.

## 2. Pain / боль

- **01 Medicine** — клиническая дифференциация, red flags, referral.
- **08 Technique** — боль/дискомфорт во время упражнения и модификация движения.
- **10 Recovery** — посттренировочная болезненность/DOMS.
- **16 Coaching** — stop/modify decision inside session.

Канонический клинический дом: **01**.

## 3. Exercise selection

- **07 Programming** — выбор упражнения как часть программы.
- **08 Technique** — свойства упражнения, техника, substitutions.
- **14 Individualization** — fit для конкретного человека.

Канонический дом критериев упражнения: **08**.  
Канонический дом размещения в программе: **07**.

## 4. Motor learning / cueing / feedback

- **04 Neuro/Motor** — научные принципы motor learning.
- **08 Technique** — применение к конкретному упражнению.
- **16 Coaching** — доставка инструкции и feedback в реальной сессии.

Канонический механизм: **04**.

## 5. Readiness

- **09 Testing** — measurement/readiness indicators.
- **10 Recovery** — восстановленность.
- **16 Coaching** — pre-session check and action.

Канонический measurement layer: **09**.  
Канонический action layer: **16**.

## 6. Adherence

- **12 Psychology/ADHD** — механизмы поведения.
- **07 Programming** — структура программы, снижающая барьеры.
- **09 Testing** — измерение adherence.
- **16 Coaching** — communication/session implementation.

Канонический behavioral mechanism: **12**.

## 7. Individual variability / response

- **13 Methodology** — можно ли статистически утверждать differential response.
- **09 Testing** — measurement error and trends.
- **14 Individualization** — practical adaptive decision-making.
- Domain files — механизм конкретного response.

Канонический practical decision layer: **14**.

## 8. Recovery

- **03 Physiology** — physiological restoration.
- **05 Bioenergetics** — substrate/PCr restoration.
- **10 Recovery** — practical recovery domain.
- **07 Programming** — deload/load management.

Канонический practical domain: **10**.

## 9. Nutrition and recovery

- **11 Nutrition** — intake/interventions.
- **10 Recovery** — effect on recovery state.
- **05 Bioenergetics** — substrate metabolism.

Канонический intervention domain: **11**.

## 10. Strength / hypertrophy

- **03 Physiology** — adaptation mechanisms.
- **06 Biomechanics** — mechanical loading.
- **07 Programming** — prescription variables.
- **09 Testing** — outcomes.
- **14 Individualization** — person-specific adjustment.

Канонический mechanism: **03**.  
Канонический prescription: **07**.

## 11. ROM / mobility / flexibility

- **02 Anatomy** — structures.
- **06 Biomechanics** — mechanical implications.
- **08 Technique** — use in exercise execution.
- **09 Testing** — measurement.
- **15 GPP** — fitness-component role.

Канонический practical exercise domain: **08**.

## 12. Safety

- **01 Medicine** — medical risk/red flags.
- **08 Technique** — exercise/equipment safety.
- **16 Coaching** — session risk management and emergency action.
- **14 Individualization** — constraints.

Канонический clinical safety: **01**.  
Канонический operational safety: **16**.

## 13. ADHD

- **12 Psychology/ADHD** — behavioral mechanisms/adherence.
- **01 Medicine** — diagnosis/medication/clinical implications.
- **11 Nutrition** — appetite interaction.
- **14 Individualization** — constraints.
- **16 Coaching** — communication/session execution.

Канонический nonclinical training behavior: **12**.

## 14. Limited equipment

- **06 Biomechanics** — mechanical methods to alter difficulty.
- **07 Programming** — progression strategy.
- **14 Individualization** — decision when equipment becomes limiting.
- **08 Technique** — safe execution/substitutions.

Канонический programming domain: **07**.

## 15. Body composition

- **09 Testing** — measurement.
- **11 Nutrition** — energy/intake manipulation.
- **15 GPP** — physical-fitness component.
- **03 Physiology** — tissue adaptation.

Канонический measurement: **09**.  
Канонический intervention: **11**.

## 16. Sleep

- **10 Recovery** — training-recovery implications.
- **01 Medicine** — sleep disorders.
- **12 Psychology/ADHD** — behavior/routine interactions.
- **14 Individualization** — constraint.

Канонический nonclinical exercise domain: **10**.

## 17. Health outcomes of exercise

- **15 GPP** — general health/fitness role.
- **01 Medicine** — disease-specific contraindications/pathophysiology.
- **13 Methodology** — causal vs observational evidence.

Канонический general exercise-health domain: **15**.

## 18. Ethics / scope / referral

- **16 Coaching/Professional Practice** — canonical.
- **01 Medicine** — clinical referral triggers.
- **11 Nutrition** — nutrition-scope boundary.
- **12 Psychology** — mental-health boundary.

## Stage 1 rule

During deduplication:
1. Never delete an overlap until its **distinct role** is identified.
2. Move detailed content to canonical home.
3. Keep a short cross-reference in dependent areas.
4. If two files genuinely own different levels (mechanism vs application), preserve both.
