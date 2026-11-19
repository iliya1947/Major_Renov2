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
| PSY-G24 | Intervention-package efficacy does not establish the active component or mechanism | BHC-01 | HIGH | Intervention/mechanism inference | ACCEPTED |
| PSY-G25 | Target engagement and statistical mediation are insufficient by themselves to prove a causal mechanism | BHC-01; PSY-RES-02; CLN-02 | HIGH | Mechanism-of-change claims | ACCEPTED |
| PSY-G26 | Efficacy, real-world effectiveness, and implementation success are distinct targets | BHC-01 | HIGH | Intervention transport/implementation | ACCEPTED |
| PSY-G27 | Fidelity requires separating delivery, receipt, and enactment; attendance/completion are not substitutes | BHC-01 | HIGH | Intervention fidelity/adherence | ACCEPTED |
| PSY-G28 | Average treatment effects and subgroup findings do not automatically justify person-specific treatment matching | BHC-01; PSY-RES-09 | HIGH | Personalized intervention inference | ACCEPTED |
| PSY-G29 | Similar average outcomes across bona fide therapies do not prove exact equivalence or identical mechanisms | BHC-02 | HIGH | Comparative psychotherapy inference | ACCEPTED |
| PSY-G30 | Working alliance is a robust process-outcome correlate but is not by itself a proven one-way causal mechanism | BHC-02; BHC-01 | HIGH | Psychotherapy process inference | ACCEPTED |
| PSY-G31 | Therapist-level outcome variance does not establish one fixed therapist-quality trait; patient mix/context/skills contribute | BHC-02 | HIGH | Provider-effect inference | ACCEPTED |
| PSY-G32 | Absence of reported psychotherapy harms does not establish safety; harm monitoring is heterogeneous/incomplete | BHC-02 | HIGH | Benefit-risk inference | ACCEPTED |
| PSY-G33 | Patient preference/personalization is a legitimate decision input but does not automatically identify the most effective treatment | BHC-02 | HIGH | Treatment selection | ACCEPTED |
| PSY-G34 | Adult attachment is better treated primarily as continuous anxiety/avoidance dimensions than as four natural person types | REL-01 | HIGH | Attachment inference | ACCEPTED |
| PSY-G35 | ECR-family self-report and AAI/interview attachment measures are not interchangeable measures of one latent object | REL-01; PSYCHOMETRICS | HIGH | Attachment measurement | ACCEPTED |
| PSY-G36 | Relationship-specific, global, trait, and state attachment must be separated before person-level inference | REL-01 | HIGH | Close-relationship inference | ACCEPTED |
| PSY-G37 | Cross-partner association or APIM partner coefficient does not by itself establish causal partner influence | REL-01; PSY-RES-02 | HIGH | Dyadic causal inference | ACCEPTED |
| PSY-G38 | Early attachment/relationship experience predicts adult attachment probabilistically and does not determine adult relational style | REL-01; DEV | HIGH | Developmental attachment inference | ACCEPTED |
| PSY-G39 | Conflict behavior must be interpreted as part of a temporal dyadic sequence; demand/withdraw roles are not fixed personality labels | REL-02 | HIGH | Couple-conflict inference | ACCEPTED |
| PSY-G40 | Validation of emotion/perspective is not equivalent to factual agreement, blame acceptance, or surrender of a boundary | REL-02 | HIGH | Communication inference | ACCEPTED |
| PSY-G41 | Partner attributions and perceived responsiveness are psychologically meaningful but are not objective motive/behavior truth | REL-02; SOC | HIGH | Relationship-perception inference | ACCEPTED |
| PSY-G42 | Bidirectional conflict/aggression does not automatically imply equal power, coercion, impact, or responsibility | REL-02 | HIGH | Safety/power inference | ACCEPTED |
| PSY-G43 | Coercive control/IPV must not be reframed as an ordinary symmetric communication mismatch | REL-02; CDC/WHO | HIGH | Relationship safety boundary | ACCEPTED |
| PSY-G44 | A decision pattern should be labeled biased/irrational only after the normative benchmark and task representation are explicit | DEC-01; COG-07 | HIGH | Judgment/rationality inference | ACCEPTED |
| PSY-G45 | Decision quality and realized outcome quality are distinct under uncertainty | DEC-01 | HIGH | Decision evaluation | ACCEPTED |
| PSY-G46 | Prospect-theory or loss-aversion parameter fit does not by itself identify a stable person trait or unique mechanism | DEC-01; PSYCHOMETRICS | HIGH | Risk-choice inference | ACCEPTED |
| PSY-G47 | Calibration, discrimination, confidence, and overconfidence subtypes are noninterchangeable | DEC-01; MET; PSYCHOMETRICS | HIGH | Forecast/confidence inference | ACCEPTED |
| PSY-G48 | One risky-choice task does not establish a coherent global risk-preference trait because cross-measure convergence is limited | DEC-01 | HIGH | Risk-preference inference | ACCEPTED |
| PSY-G49 | Probabilistic forecasts require repeated calibration/discrimination evaluation; one realized outcome cannot validate or invalidate a forecast | DEC-02 | HIGH | Forecast-quality inference | ACCEPTED |
| PSY-G50 | Brier score is not a pure calibration measure and should not be compared naively across populations with different event rates | DEC-02 | HIGH | Forecast-metric inference | ACCEPTED |
| PSY-G51 | Crowd/advice quality depends on source accuracy, independence, and calibration; consensus or confidence is not truth | DEC-02; SOC | HIGH | Advice/aggregation inference | ACCEPTED |
| PSY-G52 | More information is not automatically better; information value depends on whether it can change action relative to its costs | DEC-02; MET | HIGH | Information-search inference | ACCEPTED |
| PSY-G53 | Decision-aid or debiasing improvements on process/task outcomes do not automatically establish downstream welfare improvement or durable far transfer | DEC-02; BHC | HIGH | Decision-support inference | ACCEPTED |
| PSY-G54 | Suicide/self-harm screening is not future-outcome prediction; a negative screen does not guarantee safety | SAF-01; NICE NG225; NIMH ASQ | HIGH | Safety inference | ACCEPTED |
| PSY-G55 | Global low/medium/high risk categories should not be used to predict future suicide/self-harm or determine treatment/discharge | SAF-01; NICE NG225 | HIGH | Safety triage | ACCEPTED |
| PSY-G56 | Self-harm, suicidal ideation, intent, plan, access, and past behavior are distinct safety variables | SAF-01 | HIGH | Suicide/self-harm inference | ACCEPTED |
| PSY-G57 | Acute confusion/delirium and severe withdrawal are medical red flags and should not be psychologized first | SAF-01; NICE CG103/CG100 | HIGH | Medical-safety boundary | ACCEPTED |
| PSY-G58 | Remote/AI conversation is not equivalent to formal in-person risk assessment and must preserve uncertainty/emergency-routing limits | SAF-01; HHS telebehavioral guidance | HIGH | Remote-safety inference | ACCEPTED |
| PSY-G59 | Discharge/referral does not establish safety or successful linkage; transition and follow-up are separate safety processes | SAF-02; NICE NG225 | HIGH | Post-crisis continuity | ACCEPTED |
| PSY-G60 | Caring contacts/brief contacts have outcome-specific supportive evidence and must not be described as universally preventing suicide | SAF-02; VA/DoD 2024; 2026 BIC meta-analysis | HIGH | Post-acute intervention inference | ACCEPTED |
| PSY-G61 | Individual lethal-means counseling and population means-restriction evidence are distinct and should not share one assumed effect size | SAF-02 | HIGH | Lethal-means inference | ACCEPTED |
| PSY-G62 | Capacity is decision-specific; diagnosis, risky/unwise choice, refusal, and poor insight do not by themselves establish incapacity | SAF-02; NICE NG108 | HIGH | Capacity boundary | ACCEPTED |
| PSY-G63 | Confidentiality/safety exceptions are jurisdiction-specific and should be necessary/proportionate rather than generalized from one legal system | SAF-02 | HIGH | Confidentiality boundary | ACCEPTED |
| PSY-G64 | Ethical acceptability of individualized inference depends on purpose, stakes, necessity, validity, privacy, fairness, transparency, and contestability—not accuracy alone | ETH-01 | HIGH | Individualized inference ethics | ACCEPTED |
| PSY-G65 | Consent/disclosure is purpose-scoped; prior disclosure of sensitive information does not authorize unlimited storage, reuse, or new psychological inference | ETH-01 | HIGH | Consent/privacy boundary | ACCEPTED |
| PSY-G66 | Overall AI accuracy does not establish subgroup fairness; subgroup error, cultural/language validity, and deployment context require separate evaluation | ETH-01; PSYCHOMETRICS | HIGH | AI fairness inference | ACCEPTED |
| PSY-G67 | Human oversight is ethically meaningful only when the reviewer has competence, evidence access, authority, time, and a real ability to override AI output | ETH-01; WHO/NIST/APA | HIGH | AI oversight | ACCEPTED |
| PSY-G68 | AI project persona or humanlike style must not be represented as professional licensure, verified human identity, or independent clinical authority | ETH-01; APA AI guidance | HIGH | Role/authority boundary | ACCEPTED |
| PSY-G69 | Consequential AI-supported psychological inferences must remain contestable and revisable; user correction is evidence to evaluate, not pathology to explain away | ETH-01; PRIVATE_MODEL_UPDATE_CARD | HIGH | Contestability/model revision | ACCEPTED |

| PSY-G70 | Ethical governance is use-case- and lifecycle-specific; approval or suitability for one AI-supported purpose does not transfer automatically to a different purpose or consequence | ETH-02; NIST AI RMF; OECD | HIGH | AI-assisted psychological use | ACCEPTED |
| PSY-G71 | Data minimization for individualized psychology includes inference minimization: access to private data does not justify generating or surfacing unrelated sensitive psychological propositions | ETH-02; UNESCO; APA | HIGH | Private-model use | ACCEPTED |
| PSY-G72 | Epistemic strength and downstream stakes are separate axes; a plausible individualized hypothesis does not acquire permission for high-stakes clinical/legal/institutional use merely because it is coherent | ETH-02; DEC-02; NIST | HIGH | Consequential inference | ACCEPTED |
| PSY-G73 | A materially disputed individualized proposition should remain contestable, revisable, and suspendable from consequential downstream use until the dispute is evaluated | ETH-02; NIST AI RMF Manage 4; OECD | HIGH | Contestability/model revision | ACCEPTED |
| PSY-G74 | Anthropomorphism, sycophancy, exclusivity, and engagement optimization are interaction-level risk classes; they do not by themselves diagnose dependency, but they require safeguards when they can increase overreliance or distort judgment | ETH-02; APA 2025 chatbot advisory; NIST GAI profile | HIGH | Human-AI interaction | ACCEPTED |
| PSY-G75 | High-stakes psychological, crisis, capacity, legal, forensic, custody, employment, and comparable decisions must not rely on general-purpose AI as sole decisive authority | ETH-02; SAF; APA; UNESCO/NIST | HIGH | High-stakes AI use | ACCEPTED |
| PSY-G76 | AI validation and fairness evidence are version-, population-, language-, and context-dependent; material model/tool/source changes can trigger targeted requalification | ETH-02; APA 2026 assessment; NIST/OECD/WHO | HIGH | AI monitoring/revalidation | ACCEPTED |

| PSY-G77 | Same label across domains does not establish construct identity; definition, operationalization, measurement channel, level, and timescale must match before transfer | INT-01; PSYCHOMETRICS; PER/SOC/REL | HIGH | Cross-domain construct transfer | ACCEPTED |
| PSY-G78 | Safety, ethical, legal, privacy, or user-challenge overrides can change action/process thresholds without automatically changing the epistemic truth of diagnosis, mechanism, trait, or prediction claims | INT-01; SAF; ETH; PSY-RES | HIGH | Cross-domain override semantics | ACCEPTED |
| PSY-G79 | First-person report has target-specific epistemic priority for subjective experience and stated intent, but it is not universal ground truth for causal mechanisms, external effects, diagnosis, or future behavior | INT-01; PSY-RES-08/09; PER; ETH | HIGH | Individual evidence interpretation | ACCEPTED |
| PSY-G80 | User correction has procedural priority: it must reopen affected propositions and dependent conclusions, but causal/mechanistic disagreement still requires evidence comparison rather than automatic acceptance or pathologization | INT-01; ETH-02; PSY-RES-09 | HIGH | Contestability and model revision | ACCEPTED |
| PSY-G81 | High-stakes urgency can justify a lower action threshold while uncertainty remains; it must not be represented as increased predictive or causal certainty | INT-01; SAF; DEC; ETH | HIGH | Safety/high-stakes decisions | ACCEPTED |
| PSY-G82 | Critical-premise uncertainty propagates downstream and correlated evidence must not be double-counted as independent convergence | INT-01; PSY-RES; DEC; NEU | HIGH | Multi-step individualized inference | ACCEPTED |
| PSY-G83 | Evidence hierarchy is claim-specific: no universal ordering such as biological > behavioral > self-report or RCT > all other evidence applies to every psychological question | INT-01; PSY-RES; NEU; BHC | HIGH | Evidence routing | ACCEPTED |
| PSY-G84 | Credible coercion, acute safety, or urgent medical evidence can take action priority over ordinary symmetric/psychological framing without proving a global trait, diagnosis, or unique mechanism | INT-01; REL-02; SAF; CLN | HIGH | Safety/power/medical override | ACCEPTED |

| PSY-G85 | The unit of individualized inference is a typed proposition, not a global narrative about the whole person; each proposition needs its own provenance, evidence level, confidence, purpose, and revision status | INT-02; PSY-RES-09 | HIGH | Private individualized reasoning | ACCEPTED |
| PSY-G86 | Provenance must remain recoverable: direct report, observed behavior, structured measure, record, third-party report, physiological/digital proxy, population evidence, AI-generated inference, and existing private-model proposition are noninterchangeable evidence classes | INT-02; ETH-02 | HIGH | Evidence provenance | ACCEPTED |
| PSY-G87 | Directness is claim-relative: direct observation of behavior strongly supports occurrence but is not direct evidence of motive, trait, diagnosis, or mechanism | INT-02; SOC; PER; PSY-RES-09 | HIGH | Individual observation interpretation | ACCEPTED |
| PSY-G88 | Population-to-person transfer requires an applicability chain across construct, measurement, population, context, timescale, outcome, mechanism, and intended use; strong generic evidence can still be nontransferable for a specific claim | INT-02; PSY-RES-06/09; PSYCHOMETRICS | HIGH | Evidence transport | ACCEPTED |
| PSY-G89 | Individual Evidence Levels L0–L6 are proposition-specific: the same dataset can support a strong event/prediction claim while providing weak trait or mechanism evidence | INT-02; PSY-RES-09 | HIGH | Person-specific evidence strength | ACCEPTED |
| PSY-G90 | Evidence dependence must be mapped for material propositions; correction or failure of a critical premise must reopen all dependent conclusions, and dependent repetitions cannot count as independent convergence | INT-02; INT-01; PSY-RES-09 | HIGH | Model dependency/correction | ACCEPTED |
| PSY-G91 | Confidence is claim-specific and ordinal unless calibrated probabilities are genuinely available; high confidence in an observation does not transfer automatically to trait, mechanism, or diagnosis-like claims | INT-02; PSY-RES-09; DEC | HIGH | Confidence calibration | ACCEPTED |
| PSY-G92 | Evidence strength/confidence and use permission are independent: a strongly supported sensitive proposition can be irrelevant or impermissible for a new purpose, while a low-confidence hypothesis can be discussed reflectively if clearly labeled and low-stakes | INT-02; ETH-02 | HIGH | Purpose/stakes governance | ACCEPTED |
| PSY-G93 | No-update is a valid private-model outcome; stable architecture should not be revised for every local state fluctuation, redundant datum, or nondiagnostic observation | INT-02; PRIVATE_MODEL_UPDATE_CARD | HIGH | Longitudinal model maintenance | ACCEPTED |
| PSY-G94 | Significant private-model updates must explicitly choose retain/strengthen/weaken/split/merge/revise relation/retire/add, propagate dependencies, and define a revisit trigger | INT-02; PRIVATE_MODEL_UPDATE_CARD | HIGH | Private-model revision | ACCEPTED |
| PSY-G95 | Information gathering for individualized inference should be discriminating and purpose-limited: collect new data when it can separate hypotheses or test a critical premise, not merely because more private information is available | INT-02; DEC-02; ETH-02 | HIGH | Information-value/privacy | ACCEPTED |

## Правила

1. Одна строка = один существенный проверяемый guardrail.
2. Не превращать ledger в дубль research blocks.
3. При изменении source status обновить зависимые записи.
4. Practical heuristics маркировать отдельно.
5. Person-specific conclusions сюда не заносить.
6. Добавлять новую запись только если она реально влияет на downstream reasoning.
