# RES-26 — Evidence hierarchy by question

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как выбирать наиболее релевантный тип evidence под конкретный claim, не используя универсальную пирамиду “meta-analysis > RCT > observational > mechanism > qualitative”.

### Closure criterion
Создана question-specific evidence hierarchy для всех основных типов вопросов проекта.

---

## 1. Универсальной лестницы недостаточно

Один и тот же design может быть:
- лучшим для одного вопроса;
- неподходящим для другого.

Правильный порядок:
1. define question;
2. define target outcome/estimand;
3. identify design(s) that can answer it;
4. assess bias/precision/directness;
5. synthesize.

## 2. Intervention efficacy/effectiveness

Вопрос:
> вызывает ли A лучший outcome, чем B?

Core evidence:
1. appropriate randomized longitudinal trials;
2. systematic reviews/meta-analyses of such trials;
3. mechanistic evidence as support;
4. observational evidence for complementary real-world questions.

Meta-analysis does not outrank high-quality RCT automatically if pooled evidence is indirect/high-bias.

## 3. Chronic hypertrophy/strength

Preferred:
1. longitudinal controlled training trials;
2. direct measurement of target outcome;
3. syntheses thereof.

Supporting:
- biomechanics;
- physiology;
- acute mechanism.

Not sufficient alone:
- EMG;
- lactate;
- acute MPS;
- soreness.

## 4. Acute performance

Examples:
- caffeine;
- warm-up;
- rest interval.

Preferred:
1. randomized crossover/parallel acute trials;
2. repeated within-person designs.

Long-term trial not necessary if acute effect is actual target.

## 5. Safety / common harms

Preferred combination:
1. RCT adverse-event data;
2. clinical guidelines;
3. larger observational cohorts where needed.

Need active ascertainment.

## 6. Rare / long-latency harms

Often:
1. registries;
2. large cohorts;
3. case-control;
4. pharmacovigilance/surveillance;
5. case reports as signals.

Small short RCT may be structurally incapable of detecting rare harm.

## 7. Diagnosis / screening

Preferred:
1. diagnostic accuracy studies;
2. index test vs reference standard;
3. systematic reviews of accuracy.

Treatment RCT answers different question:
whether using test improves outcomes.

## 8. Prognosis / prediction

Preferred:
1. prospective longitudinal cohort;
2. validated prognostic models;
3. external validation.

RCT not required to ask:
“what predicts outcome?”

Prediction ≠ causation.

## 9. Causal exposure questions

Examples:
sleep, sedentary behavior, heat, habitual activity.

Use:
1. randomized intervention where feasible;
2. target-trial observational studies;
3. natural experiments;
4. triangulation across different bias structures.

## 10. Mechanism

Preferred:
1. mechanistic laboratory experiments;
2. physiology/biopsy/imaging;
3. animal/basic science where human study impossible, with indirectness caveat.

Mechanism can be strong evidence **for mechanism** while weak for practical superiority.

## 11. Measurement validity

Preferred:
1. validation studies;
2. reliability/agreement studies;
3. criterion comparisons;
4. responsiveness studies.

RCT of training efficacy cannot validate measurement instrument by itself.

## 12. Experience / barriers / implementation

Preferred:
1. qualitative interviews/focus groups/observation;
2. mixed-methods;
3. implementation studies;
4. surveys for distribution/prevalence when valid.

Qualitative evidence may be highest relevance to “why people with ADHD skip exercise”.

## 13. Adherence intervention effect

Question:
> does strategy improve adherence?

Preferred:
1. randomized/pragmatic intervention trials;
2. longitudinal implementation data;
3. qualitative evidence explains why/how.

## 14. Guidelines / recommendations

Use:
1. systematic evidence;
2. certainty grading;
3. EtD;
4. preferences/feasibility.

Guideline itself is decision product, not a primary effect design.

## 15. Individual response

Preferred:
1. replicate crossover / N-of-1 where reversible;
2. repeated-condition designs;
3. split-body designs where valid;
4. control/noise-aware SDIR methods.

One pre-post change is weak.

## 16. Personal practical decision

Need combine:
1. external direct evidence;
2. safety;
3. applicability;
4. personal repeated data;
5. burden/adherence/preferences.

This is not solved by one study design.

## 17. Evidence matrix

| Question | Primary evidence | Supporting evidence | Common misuse |
|---|---|---|---|
| Chronic hypertrophy | longitudinal RCTs + synthesis | mechanism/biomechanics | EMG as growth proof |
| Strength | longitudinal task-specific trials | neurophysiology | acute force as adaptation |
| Acute ergogenic effect | crossover/parallel acute RCT | mechanism | cohort association |
| Rare harm | cohort/case-control/registry | case reports | “RCT found none” |
| Diagnostic accuracy | accuracy study | reliability | efficacy RCT |
| Prognosis | cohort/model validation | mechanism | causal wording |
| Barriers | qualitative/mixed | survey | hypertrophy RCT |
| Adherence strategy | pragmatic/RCT | qualitative | anecdote |
| Measurement | validation/reliability | theory | correlation only |
| Individual response | repeated/N-of-1 | group RCT | one pre-post label |
| Mechanism | mechanistic experiments | longitudinal outcomes | prescribe from mechanism alone |

## 18. Systematic review position

Systematic review/meta-analysis inherits quality and relevance of included evidence.

Therefore:
**review design does not override wrong primary design.**

A meta-analysis of cross-sectional studies remains observational association evidence.

## 19. Evidence convergence

When several appropriate designs with different biases converge, confidence can increase.

This is triangulation, not universal hierarchy.

## 20. Project rule

Every EVIDENCE_LEDGER claim records:
1. claim type;
2. evidence design appropriate to claim;
3. directness;
4. certainty.

No claim receives high confidence merely because source says:
- meta-analysis;
- RCT;
- guideline.

## 21. Confidence

### HIGH
- evidence hierarchy must be question-specific;
- design appropriateness precedes design prestige;
- systematic synthesis inherits underlying evidence limitations;
- mechanism/qualitative/diagnostic evidence can be highest relevance for their own question types.

## 22. Sources

1. GRADE Book — question-specific evidence frameworks.  
   https://book.gradepro.org/

2. Cochrane Handbook current version 6.5.1 (2026), chapters on intervention, diagnostic/qualitative/non-randomized evidence.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current

3. RES-01/02 findings.

## 23. Next dependencies

- RES-27 N-of-1;
- RES-28 Evidence-to-Decision.
