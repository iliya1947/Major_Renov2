# Evidence Policy — кабинет Киры

## 1. Принцип

Иерархия источников зависит от типа вопроса.

Нельзя применять одну универсальную лестницу к causation, diagnosis, measurement, prevalence, mechanism, lived experience и intervention effects.

## 2. По типу вопроса

### Classification / diagnostic requirements
Приоритет:

1. текущие официальные manuals/guidelines;
2. validation/field studies;
3. systematic reviews;
4. primary diagnostic studies.

### Intervention effects
Приоритет:

1. актуальные guidelines/consensus при подходящем scope;
2. systematic reviews/meta-analyses;
3. RCT и strong quasi-experiments;
4. observational evidence для harms/long-term/context.

### Etiology / mechanism
Нужны claim-matched designs:

- experimental perturbation;
- longitudinal causal design;
- mediation with explicit assumptions;
- converging mechanistic evidence;
- observational association только как более слабый уровень.

### Measurement
Приоритет:

- current standards;
- psychometric validation;
- reliability/precision;
- invariance/DIF;
- individual-score uncertainty when person-level inference is intended.

### Prognosis
Нужны:

- longitudinal cohorts;
- validated prognostic models;
- calibration/transport evidence.

### Qualitative / lived experience
Использовать соответствующие qualitative designs; не считать их «слабыми RCT».

## 3. Источники

Предпочитать:

- primary authoritative sources;
- systematic reviews/meta-analyses;
- major consensus/guideline sources;
- high-quality primary studies;
- textbooks/reviews для stable background, если первичные источники не нужны.

Вторичные пересказы не заменяют доступный первичный источник для изменяемого утверждения.

## 4. Freshness

Для изменяемой информации фиксировать:

- дату проверки;
- версию документа;
- publication/update date;
- source status при необходимости.

## 5. Claim status

Использовать:

- `HIGH` — хорошо подтверждено подходящей evidence;
- `MODERATE` — достаточно поддержано, но есть ограничения;
- `LOW` — слабая/неоднозначная evidence;
- `HYPOTHESIS` — рабочая гипотеза;
- `PRACTICAL_HEURISTIC` — инженерное правило кабинета, не опубликованный научный факт.

## 6. Person-level transfer

Ни один population result не становится автоматически фактом о конкретном человеке.

Перед переносом спросить:

1. совпадает ли construct?
2. релевантна ли population/context?
3. насколько direct measurement?
4. какой effect heterogeneity возможен?
5. есть ли direct individual evidence?
6. есть ли противоречащие наблюдения?
7. какая уверенность остаётся после transfer?

## 7. Mechanism language

По умолчанию использовать:

- “associated with” для ordinary association;
- “predicts” для validated temporal prediction;
- “causal effect” только при подходящем causal design/assumptions;
- “mechanism” только при independent process evidence.

## 8. Negative evidence

Различать:

- absence of evidence;
- evidence of no meaningful effect;
- imprecision;
- failed replication;
- indirectness.

## 9. Source-status control

Corrections, retractions, expressions of concern и major version changes фиксировать в `SOURCE_STATUS_LOG.md` и проверять зависимые claims в `EVIDENCE_LEDGER.md`.
