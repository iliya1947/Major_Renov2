# RES-04 — Bias domains: систематические смещения в исследованиях

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как системно определять, может ли study result быть систематически смещён и каким механизмом, вместо использования неформального “хорошее/плохое исследование”.

### Question type
Methodological / risk-of-bias.

### Critical outcomes
1. Correct domain-based risk-of-bias assessment.
2. Distinction between bias, imprecision and indirectness.
3. Separate frameworks for randomized vs non-randomized intervention evidence.
4. Result-specific rather than study-label judgement.

### Closure criterion
Есть project-wide bias taxonomy and assessment procedure; specific causal/statistical details remain in later topics.

---

## 1. Bias — определение

Bias = systematic deviation of an estimated result from the target truth/effect due to study design, conduct, analysis or reporting.

Ключевое:
**bias — не то же самое, что random error.**

- Bias может сохраняться при огромной sample.
- Imprecision уменьшается с большей information/sample.
- Очень precise estimate может быть precisely wrong.

## 2. Bias ≠ indirectness ≠ imprecision

### Bias
Internal validity problem:
> result может быть систематически неверным для study's own target question.

### Indirectness
Applicability problem:
> study может быть internally valid, но population/intervention/outcome не совпадают с нашим question.

### Imprecision
Uncertainty/random error:
> estimate слишком неточный.

Это разные reasons to lower confidence.

## 3. RoB 2: randomized trials

Cochrane RoB 2 оценивает **конкретный result**, а не выдаёт один вечный quality score study.

Пять обязательных domains:

1. Bias arising from randomization process.
2. Bias due to deviations from intended interventions.
3. Bias due to missing outcome data.
4. Bias in measurement of outcome.
5. Bias in selection of reported result.

Judgements:
- Low risk;
- Some concerns;
- High risk.

Overall judgement отражает наиболее неблагоприятный substantive domain, с обоснованием.

## 4. Domain 1 — randomization process

Вопросы:
1. sequence random?
2. allocation concealed?
3. baseline differences suggest problem?

Potential bias:
selection/confounding before intervention.

Главное:
слово “randomized” в abstract недостаточно.

## 5. Domain 2 — deviations from intended interventions

Risk depends on estimand.

### Assignment effect
Concerns:
- deviations caused by experimental context;
- unbalanced co-interventions;
- analysis that breaks randomized assignment.

### Adherence effect
Дополнительно:
- implementation failures;
- actual adherence;
- post-baseline confounding;
- whether appropriate causal methods used.

Exercise examples:
- group A gets more coach attention;
- comparator participants start doing extra resistance work;
- high-volume group skips sessions more often;
- “as-treated” analysis reassigns participants by behavior.

## 6. Domain 3 — missing outcome data

Question:
Could missingness depend on true outcome in a way related to intervention/group?

Important:
- percentage missing alone is insufficient;
- reasons and differential patterns matter;
- missingness can bias even if total percentage looks “small” when outcome risk/response differs strongly.

Detailed methods → RES-10.

Exercise examples:
- participants with poor gains drop out from demanding program;
- injured participants fail follow-up measurement;
- participants with severe soreness withdraw selectively.

## 7. Domain 4 — outcome measurement

Potential mechanisms:
1. inappropriate measure;
2. differential measurement by group;
3. assessor aware of intervention;
4. judgement could be influenced by knowledge.

Exercise examples:
- unblinded ultrasound analyst;
- flexible circumference landmark;
- different ROM allowed during strength testing;
- subjective technique score by coach who delivered intervention.

Outcome-specific:
same trial can be low risk for one outcome and high for another.

## 8. Domain 5 — selection of reported result

Bias can arise when researchers choose result based on observed findings from:
1. multiple outcome measurements;
2. multiple time points;
3. multiple analyses;
4. multiple transformations/models.

Examples:
- report 12-week but not 8-week measure because significant;
- choose best muscle-thickness site;
- report percent change instead of absolute because p-value better;
- select subgroup after looking at results.

Protocol/pre-registration/statistical analysis plan help evaluate this risk.

## 9. Missing result vs selected result

Important distinction from Cochrane:

### Selection of reported result
A result is reported, but authors selected among several possible analyses/measurements.

Covered by RoB 2 / ROBINS-I.

### Missing results/publication bias
Entire study/outcome/result absent because findings were unfavorable.

This is synthesis-level bias, handled separately in publication/reporting bias methods.

Detailed topic → RES-18.

## 10. ROBINS-I: non-randomized intervention studies

Cochrane ROBINS-I uses a hypothetical **target trial**:
> what randomized pragmatic trial would answer the same causal question in same population?

Domains:

### Pre-intervention
1. Bias due to confounding.
2. Bias in selection of participants into study.

### At intervention
3. Bias in classification of interventions.

### Post-intervention
4. Bias due to deviations from intended interventions.
5. Bias due to missing data.
6. Bias in measurement of outcome.
7. Bias in selection of reported result.

Judgements:
- Low;
- Moderate;
- Serious;
- Critical;
- No information.

## 11. Confounding

Occurs when a pre-intervention cause of outcome also influences intervention/exposure received.

Exercise example:
People choosing high training volume may differ in:
- training age;
- motivation;
- diet;
- baseline strength;
- recovery resources.

Observed association:
high volume ↔ more muscle
may partly reflect these factors.

Adjustment can only address:
- measured;
- adequately measured;
- correctly modeled confounders.

Unmeasured/residual confounding remains possible.

Detailed causal theory → RES-05.

## 12. Selection bias

Occurs when inclusion/exclusion/follow-up creates association between intervention and outcome that differs from target causal effect.

Examples:
- only completers analysed;
- prevalent users selected;
- inclusion depends on post-intervention survival/response;
- follow-up starts after some early outcomes already occurred.

Selection bias is not the same as external validity.

## 13. Classification / information bias

In observational data:
- exposure/intervention may be misclassified;
- outcome may be misclassified/measured with error.

Differential error is especially concerning when error depends on group/outcome.

Exercise examples:
- self-reported training volume;
- app logs missing unscheduled exercise;
- participants misclassified as “trained” by vague criteria.

## 14. Reporting bias in NRSI

Particularly serious because many observational analyses allow:
- many exposures;
- many outcomes;
- many models;
- many confounder sets;
- many subgroups.

If analysis chosen after seeing p-values/directions, estimate can be systematically exaggerated.

## 15. Quality score trap

Project rule:
**Do not create one numeric study-quality score by summing checklist points.**

Why:
- domains differ in causal importance;
- one critical bias can invalidate result despite many minor “good” items;
- risk of bias is outcome/result-specific;
- additive scores hide mechanism.

Use domain judgement + written rationale.

## 16. “No information” is not automatically low risk

Poor reporting creates uncertainty.

Need distinguish:
- no evidence of a problem;
- evidence that no problem occurred.

Absence of reporting can itself produce concerns when information should normally be available.

## 17. Direction of bias

Sometimes direction is predictable:
- selective reporting of large/significant effects often biases away from null.

Often it is not:
- confounding;
- selection;
- differential measurement.

Project rule:
**do not guess direction without causal rationale.**

## 18. Exercise-science bias checklist

For each key result:

### Before intervention
1. Was question/design appropriate?
2. Randomized? If yes, sequence/concealment?
3. If not randomized, what confounders matter?
4. Were participants selected in a way related to exposure/outcome?

### Intervention
5. Was intervention defined/classified correctly?
6. Did groups actually receive distinct intended doses?
7. Were co-interventions different?

### Follow-up
8. Adherence?
9. Missing data?
10. Differential dropout?
11. Additional training/nutrition changes?

### Outcome
12. Valid/reliable measurement?
13. Same method in groups?
14. Assessor blinded where relevant?
15. Outcome subjective/judgement-dependent?

### Analysis/reporting
16. Correct analysis for design?
17. Post-randomization exclusions?
18. Multiple outcomes/time points/models?
19. Protocol/SAP available?
20. Is reported result plausibly selected?

## 19. Risk of bias vs study usefulness

High risk of bias does not mean “study contains zero information”.

But:
- it should not receive equal evidentiary weight;
- it may be useful for hypothesis/mechanism/context;
- critical bias can make causal effect estimate unusable.

Evidence synthesis must reflect this.

## 20. Project risk-of-bias record

For important primary studies store:

1. Study ID.
2. Result/outcome assessed.
3. Effect of interest/estimand.
4. Design.
5. Tool/framework: RoB 2 / ROBINS-I / other appropriate.
6. Domain judgements.
7. Evidence/quotes supporting judgement.
8. Overall judgement.
9. Likely direction if defensible.
10. Impact on synthesis.

## 21. Confidence

### HIGH
- bias must be assessed by mechanism/domains, not single vague quality label;
- RoB 2 uses five result-specific domains for RCTs;
- ROBINS-I uses seven domains and target-trial framing for NRSI;
- confounding is central pre-intervention threat in NRSI;
- risk of bias is distinct from imprecision and indirectness;
- selective reported-result bias differs from missing-results/publication bias.

### PRACTICAL_HEURISTIC
- project exercise-science checklist and record format.

## 22. Sources

1. Cochrane Handbook Chapter 7: Considering bias and conflicts of interest among included studies.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-07

2. Cochrane Handbook Chapter 8: Assessing risk of bias in a randomized trial (RoB 2).  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-08

3. Cochrane Handbook Chapter 25: Assessing risk of bias in a non-randomized study (ROBINS-I).  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-25

4. Risk of Bias tools official site.  
   https://www.riskofbias.info/

## 23. Next dependencies

- RES-05 confounding / causal inference;
- RES-10 missing data;
- RES-11 measurement;
- RES-18 reporting/publication bias;
- RES-19 certainty of evidence.
