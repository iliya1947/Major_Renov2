# Реестр доказательств и ключевых выводов

Назначение: не дать важным выводам оторваться от источников.

Пока файл почти пустой: заполнять его нужно уже на этапе системного исследования.

| ID | Вывод | Область | Источник(и) | Уровень уверенности | Практическое значение | Применимость к Илье | Статус |
|---|---|---|---|---|---|---|---|
| RES01-01 | Хорошо сформулированный вопрос должен предшествовать eligibility/search/synthesis и направляет весь evidence review. | RES-01 | Cochrane Handbook v6.5 Ch2 | HIGH | Не начинать тему с произвольного поиска. | Прямо применимо ко всему проекту. | ACCEPTED |
| RES01-02 | Для intervention-effect questions PICO является стандартным каркасом; NSCA в exercise science использует PICOT, отдельно фиксируя время. | RES-01 | Cochrane Ch2–3; NSCA Certification Handbook effective 2025-10-01 | HIGH | Уточнять population/intervention/comparator/outcome/time до поиска. | Прямо применимо. | ACCEPTED |
| RES01-03 | Outcome должен быть заранее приоритизирован по важности; benefits и harms нельзя оценивать односторонне. | RES-01 | Cochrane Ch2–3 | HIGH | Не подменять target outcome удобным proxy. | Прямо применимо. | ACCEPTED |
| RES01-04 | Study design и структура вопроса должны соответствовать типу вопроса; intervention, diagnostic, prognostic/exposure и qualitative вопросы требуют разных evidence paths. | RES-01 | GRADE Book; Cochrane Handbooks | HIGH | Не строить одну универсальную “лестницу исследований”. | Прямо применимо. | ACCEPTED |
| RES01-05 | Существенные изменения scope/grouping после начала review допустимы при обосновании, но должны быть явно задокументированы. | RES-01 | Cochrane Ch3 | HIGH | Любое post-hoc изменение вопроса фиксировать. | Прямо применимо. | ACCEPTED |
| RES01-06 | Обязательная Question Card и тест “Decision before evidence” — инженерная реализация методологии проекта, а не отдельный опубликованный стандарт. | RES-01 | Derived from Cochrane/GRADE/NSCA | PRACTICAL_HEURISTIC | Уменьшает research drift и post-hoc rationalization. | Специально создано для этого проекта. | ACTIVE |

## Правила

1. Одна строка = один проверяемый вывод.
2. Не смешивать несколько независимых утверждений в одну запись.
3. Если источники противоречат друг другу, фиксировать это явно.
4. Для изменяемых рекомендаций указывать дату/версию.
5. Если вывод — практическая эвристика, так и маркировать.
6. Персональное решение не считать научным фактом.


| RES02-01 | Дизайн исследования должен соответствовать типу вопроса; универсальной иерархии для всех вопросов нет. | RES-02 | GRADE Book; Cochrane Handbook | HIGH | Сначала question type, затем design. | Прямо применимо ко всему проекту. | ACCEPTED |
| RES02-02 | Для causal effects назначенной intervention randomized designs обычно снижают confounding относительно non-randomized intervention studies, но randomization не устраняет другие bias. | RES-02 | Cochrane Ch3, Ch24 | HIGH | Для training-effect questions RCT обычно core evidence. | Прямо применимо. | ACCEPTED |
| RES02-03 | Rare/long-term harms могут не выявляться в небольших/коротких RCT; cohort/case-control/registry evidence может быть необходима. | RES-02 | Cochrane Ch19, Ch24 | HIGH | Safety evidence path отличается от efficacy. | Применимо к медицинской ветке. | ACCEPTED |
| RES02-04 | Crossover design подходит для temporary/reversible effects, но становится неподходящим при persistent carryover/long-term adaptation. | RES-02 | Cochrane Ch23 | HIGH | Acute caffeine/warm-up ≠ chronic hypertrophy design. | Прямо применимо. | ACCEPTED |
| RES02-05 | Cross-sectional studies полезны для prevalence/association, но обычно не устанавливают temporal order и причинность. | RES-02 | NCBI epidemiology reference; study-design review | HIGH | Не превращать cross-sectional associations в training prescriptions. | Прямо применимо. | ACCEPTED |
| RES02-06 | Diagnostic accuracy, prognosis/exposure и qualitative/implementation questions требуют соответствующих нерандомизированных/qualitative designs. | RES-02 | GRADE Book; Cochrane QES guidance | HIGH | Правильный design зависит от estimand/question. | Прямо применимо. | ACCEPTED |
| RES02-07 | Название design само по себе не гарантирует качество; для NRSI важны конкретные design features и confounding control. | RES-02 | Cochrane Ch24 | HIGH | Оценивать реальный design, а не label. | Прямо применимо. | ACCEPTED |
| RES02-08 | Project design-selection algorithm — практическая эвристика, основанная на Cochrane/GRADE, а не универсальный опубликованный алгоритм. | RES-02 | Derived | PRACTICAL_HEURISTIC | Ускоряет выбор evidence path. | Специально для проекта. | ACTIVE |

| RES03-01 | Allocation concealment предотвращает foreknowledge до назначения и является отдельным механизмом от post-assignment blinding. | RES-03 | Cochrane Ch8 | HIGH | Не путать concealment и blinding. | Прямо применимо при оценке RCT. | ACCEPTED |
| RES03-02 | В exercise trials participant/personnel blinding часто невозможно; risk зависит от того, может ли awareness вызвать deviations или measurement bias для конкретного outcome. | RES-03 | Cochrane Ch8 | HIGH | Не дисквалифицировать unblinded training RCT автоматически. | Прямо применимо. | ACCEPTED |
| RES03-03 | ITT-like analysis сохраняет randomized comparison для effect of assignment; naive as-treated/per-protocol могут разрушить преимущество randomization. | RES-03 | Cochrane Ch8 | HIGH | Проверять estimand и analysis. | Прямо применимо. | ACCEPTED |
| RES04-01 | Risk of bias должен оцениваться по доменам и конкретному result, а не единым числовым quality score для всего study. | RES-04 | Cochrane Ch7, Ch8, Ch25 | HIGH | Использовать RoB 2/ROBINS-I logic. | Прямо применимо. | ACCEPTED |
| RES04-02 | RoB 2 включает randomization, deviations, missing data, outcome measurement и selection of reported result. | RES-04 | Cochrane Ch8 | HIGH | Каркас для RCT. | Прямо применимо. | ACCEPTED |
| RES04-03 | ROBINS-I добавляет confounding, participant selection и intervention classification и использует target-trial framing. | RES-04 | Cochrane Ch25 | HIGH | Каркас для NRSI causal effects. | Прямо применимо. | ACCEPTED |
| RES04-04 | Bias, imprecision и indirectness — разные причины снижения уверенности и не должны смешиваться. | RES-04 | Cochrane/GRADE framework | HIGH | Разделять internal validity, precision и applicability. | Прямо применимо. | ACCEPTED |
| RES05-01 | Confounding возникает из common causes exposure/intervention и outcome; увеличение sample size его не устраняет. | RES-05 | Cochrane Ch25; Hernán & Robins | HIGH | Не превращать association в causation. | Прямо применимо. | ACCEPTED |
| RES05-02 | Covariate adjustment должен опираться на causal structure; adjustment for mediators/colliders/post-treatment variables может ввести bias. | RES-05 | Hernán & Robins What If | HIGH | Не использовать “adjust for everything”. | Прямо применимо. | ACCEPTED |
| RES05-03 | Observational causal estimates остаются зависимыми от assumptions о measured/unmeasured confounding, positivity и consistency. | RES-05 | Cochrane Ch25; target-trial literature | HIGH | Явно указывать assumptions и residual uncertainty. | Прямо применимо. | ACCEPTED |
| RES05-04 | Target-trial emulation требует явных eligibility, strategies, time zero, follow-up, outcome и estimand и помогает уменьшать design-induced bias. | RES-05 | Cochrane Ch25; BMJ 2022; BMJ EBM 2026 | HIGH | Использовать при causal observational questions. | Прямо применимо. | ACCEPTED |
| RES05-05 | Project causal wording standard — инженерная эвристика: “associated with” по умолчанию для ordinary observational evidence, causal wording только при достаточной support. | RES-05 | Derived | PRACTICAL_HEURISTIC | Снижает overclaiming. | Специально для проекта. | ACTIVE |