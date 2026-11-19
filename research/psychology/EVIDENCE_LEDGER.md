# Evidence Ledger — ключевые cross-domain guardrails

Назначение: не дать важным правилам психологического inference оторваться от canonical evidence.

| ID | Вывод | Canonical source | Confidence | Applicability boundary | Status |
|---|---|---|---|---|---|
| PSY-G01 | Association не устанавливает причинность; design должен соответствовать claim | PSY-RES-02 | HIGH | Все causal claims | ACCEPTED |
| PSY-G02 | Population pattern может генерировать индивидуальную гипотезу, но не доказывает person-specific mechanism | PSY-RES-09; AGENT.md | HIGH | Evidence-to-individual transfer | ACCEPTED |
| PSY-G03 | Score, construct и person-level interpretation — разные объекты; group reliability не гарантирует individual precision | PSYCHOMETRICS-01/03 | HIGH | Любые психологические scores | ACCEPTED |
| PSY-G04 | Latent score/factor score — model-based estimate, не наблюдение психологической сущности | PSYCHOMETRICS-02/03 | HIGH | CFA/IRT/Rasch/latent scoring | ACCEPTED |
| PSY-G05 | Diagnosis — classification, а не причина, mechanism, identity или treatment proof | CLN-01 | HIGH | Clinical-style reasoning | ACCEPTED |
| PSY-G06 | Transdiagnostic association не означает universal causal mechanism | CLN-02 | HIGH | Psychopathology mechanisms | ACCEPTED |
| PSY-G07 | Between-person association не идентичен within-person process | CLN-02; PSY-RES-02 | HIGH | Longitudinal/idiographic inference | ACCEPTED |
| PSY-G08 | Remission не доказывает removal of mechanism; recurrence не доказывает return of same mechanism | CLN-02 | HIGH | Course inference | ACCEPTED |
| PSY-G09 | Statistical/model fit — один тип evidence, не полная construct validity | PSYCHOMETRICS-02/03 | HIGH | Measurement/model interpretation | ACCEPTED |
| PSY-G10 | Uncertainty должна быть claim-specific; observation confidence может быть выше mechanism confidence | PSY-RES-09; CLN-01 | HIGH | Все individualized conclusions | ACCEPTED |
| PSY-G11 | Psychosis is a symptom domain and does not by itself establish schizophrenia-spectrum diagnosis | CLN-03 | HIGH | Psychotic-like experiences / differential reasoning | ACCEPTED |
| PSY-G12 | Intrusive thought content does not establish desire or intent; form/function and safety assessment are separate | CLN-03 | HIGH | OCD/intrusive-thought reasoning | ACCEPTED |
| PSY-G13 | Normal or unrevealing medical tests do not establish psychological causation or somatic symptom disorder | CLN-03 | HIGH | Somatic/health-anxiety reasoning | ACCEPTED |
| PSY-G14 | Enduring developmental/personality patterns must be separated from acquired episodic changes before family inference | CLN-03 | HIGH | NDEV/personality/mood differential | ACCEPTED |
| PSY-G15 | Adult diagnosis does not establish adult onset; developmental origin and recognition are separate | NDEV-01 | HIGH | Adult ADHD/autism reasoning | ACCEPTED |
| PSY-G16 | Executive-function weakness is not a diagnostic biomarker for ADHD or autism | NDEV-01; EXE; PSYCHOMETRICS | HIGH | NDEV cognitive-profile inference | ACCEPTED |
| PSY-G17 | Camouflaging/masking can alter observability but is neither absence-of-autism evidence nor diagnostic proof of autism | NDEV-01 | HIGH | Autism assessment / late recognition | ACCEPTED |
| PSY-G18 | ADHD and autism may co-occur; overlapping manifestations must not be double counted without independent evidence | NDEV-01 | HIGH | ADHD–autism differential | ACCEPTED |
| PSY-G19 | Intellectual disability requires both intellectual-function and adaptive-function evidence; IQ alone is insufficient | NDEV-02; WHO ICD-11; AAIDD | HIGH | Intellectual-developmental inference | ACCEPTED |
| PSY-G20 | Pragmatic-language difficulty alone does not establish autism; developmental language/SCD/ADHD/acquired alternatives remain | NDEV-02 | HIGH | Social-communication differential | ACCEPTED |
| PSY-G21 | Poor academic performance or one low score does not establish developmental learning disorder | NDEV-02; PSYCHOMETRICS | HIGH | Learning-disorder inference | ACCEPTED |
| PSY-G22 | Generic clumsiness does not establish DCD; independent motor evidence and neurological/sensory exclusions are required | NDEV-02 | HIGH | Motor-developmental inference | ACCEPTED |
| PSY-G23 | Repetitive movement is not automatically a tic, compulsion, stereotypy, or habit; phenomenology/function/course must discriminate | NDEV-02 | HIGH | Tic/repetitive-behavior differential | ACCEPTED |

## Правила

1. Одна строка = один существенный проверяемый guardrail.
2. Не превращать ledger в дубль research blocks.
3. При изменении source status обновить зависимые записи.
4. Practical heuristics маркировать отдельно.
5. Person-specific conclusions сюда не заносить.
6. Добавлять новую запись только если она реально влияет на downstream reasoning.
