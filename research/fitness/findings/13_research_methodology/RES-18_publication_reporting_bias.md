# RES-18 — Publication bias, selective reporting и missing evidence

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как оценивать, не сформирована ли доступная literature выборочно из “удачных” исследований/results, и как это должно влиять на confidence in synthesis.

### Question type
Evidence synthesis / reporting bias.

### Critical outcomes
1. Distinguish study publication bias from selective result reporting.
2. Use registries/protocols as primary evidence where possible.
3. Correct interpretation of funnel plots/small-study effects.
4. Avoid automatic trim-and-fill “correction”.
5. Define project missing-evidence workflow.

### Closure criterion
Есть operational framework sufficient for systematic reviews/meta-analyses and exercise literature.

---

## 1. Non-reporting bias

Cochrane defines broad non-reporting bias:
decisions about whether, when, where or how fully to report evidence depend on:
- p-value;
- magnitude;
- direction.

This can make available evidence systematically different from missing evidence.

## 2. Two major levels

### A. Missing whole studies/reports
A completed study may:
- remain unpublished;
- appear only as abstract;
- be delayed;
- be published in less visible source.

### B. Missing results within known study
Study published, but:
- one outcome absent;
- one timepoint absent;
- one muscle/site absent;
- only “significant” analysis shown;
- insufficient numerical data provided.

These require related but distinct assessment.

## 3. Publication bias

Classic mechanism:
studies with “positive/significant” findings are more likely to:
- publish;
- publish quickly;
- publish prominently.

Consequences:
pooled literature can:
- overestimate benefit;
- underestimate harms;
- underestimate uncertainty.

## 4. Time-lag bias

Positive studies may publish earlier.

This matters for:
- rapidly evolving fitness methods;
- “latest evidence” based on early literature.

Project rule:
new topic with only several early positive studies gets extra caution until evidence matures.

## 5. Outcome reporting bias

A trial measures many outcomes but reports selectively.

Exercise examples:
- measured 5 muscles, published 2 favorable sites;
- measured weeks 4/8/12, emphasizes week 8;
- recorded strength + hypertrophy but only favorable endpoint fully reports.

Compare:
- protocol;
- trial registry;
- methods;
- statistical analysis plan;
- publication.

## 6. Analysis reporting bias

Same outcome can have many analyses:
- raw vs adjusted;
- percent vs absolute;
- change vs post;
- excluding outliers;
- multiple covariate sets;
- subgroup choices.

Selection based on observed result creates bias even when outcome itself is reported.

RoB 2 handles selected reported result at study-result level; Chapter 13 handles missing evidence at synthesis level.

## 7. Registration and protocols

Useful sources:
1. ClinicalTrials.gov;
2. ISRCTN;
3. OSF;
4. PROSPERO for reviews;
5. journal protocols;
6. statistical analysis plans.

Look for:
- pre-specified outcomes;
- time points;
- sample size;
- analysis;
- completed/unpublished trials.

Registration is not proof of no bias, but improves detectability.

## 8. Comprehensive search

Reduce missing evidence risk by:
- multiple databases;
- registries;
- reference checking;
- author contact where important;
- unpublished/grey sources where relevant.

Cochrane emphasizes search alone cannot fully solve missing evidence.

## 9. Funnel plot

Plots effect estimate against precision/SE.

Classic publication-bias pattern:
smaller negative/nonsignificant studies missing → asymmetry.

But asymmetry is **not diagnostic** of publication bias.

Other causes:
1. true heterogeneity;
2. different intervention in small studies;
3. poorer methods in small studies;
4. chance;
5. effect measure artefact.

## 10. Small-study effects

General term:
smaller studies show systematically different effects than larger studies.

Possible causes include:
- publication bias;
- bias in small studies;
- true contextual differences;
- methodological artefact.

Therefore:
small-study effect ≠ publication bias automatically.

## 11. Funnel tests

Egger-type and related tests have low power with small number of studies.

Cochrane rule of thumb:
generally use asymmetry tests only with ~10 or more studies, with additional conditions.

With <10 studies:
absence of asymmetry evidence is weak reassurance.

## 12. Effect-measure dependence

Some asymmetry tests behave poorly with:
- SMD;
- OR;
- rare events.

Need method appropriate to effect measure.

Project rule:
do not accept “Egger p=.12, therefore no publication bias.”

## 13. Contour-enhanced funnel plots

Can help distinguish:
- areas of statistical significance;
- possible missingness patterns.

Still not definitive.

Interpret with:
- protocol/registry evidence;
- study quality;
- heterogeneity.

## 14. Trim-and-fill

Trim-and-fill estimates “missing” studies and adjusted pooled effect under assumptions.

Limitations:
- asymmetry may not be publication bias;
- model assumptions often unrealistic;
- can over/under-correct.

Project rule:
**never treat trim-and-fill as proof of corrected truth.**

At most sensitivity analysis.

## 15. Selection models

More formal models can estimate effect under publication-selection assumptions.

Advantages:
- explicitly model selection process.

Limitations:
- assumption-sensitive;
- unstable with few studies;
- no model can recover unknowable evidence with certainty.

Treat as sensitivity, not magic correction.

## 16. ROB-ME

Cochrane Chapter 13 describes ROB-ME:
Risk Of Bias due to Missing Evidence.

Judgements:
- low risk;
- some concerns;
- high risk.

Combines:
1. known missing results;
2. suspected missing studies;
3. funnel/small-study evidence;
4. contextual signals.

Useful for important meta-analysis results.

## 17. Exercise-science risk factors

Fitness literature often has:
1. small samples;
2. many outcomes;
3. multiple muscles/sites;
4. exploratory subgroup analyses;
5. novel methods with publication enthusiasm;
6. commercial device/supplement interests;
7. short studies.

This creates high opportunity for selective positive findings.

## 18. “Novel method” bias

New training technique often first studied by:
- inventors/enthusiasts;
- small labs;
- exploratory designs.

Early effects may be exaggerated.

Project response:
1. seek independent replication;
2. check preregistration;
3. inspect later larger studies;
4. avoid adopting from one exciting result.

## 19. Harms under-reporting

Adverse effects may be:
- not systematically measured;
- reported only narratively;
- omitted if considered unrelated.

For safety:
absence of reported adverse events ≠ evidence of no harm unless ascertainment/reporting adequate.

## 20. Missing outcome data vs missing evidence

### Missing outcome data
Participants missing measurements inside study.
→ RES-10 / RoB 2 missing-data domain.

### Missing evidence
Study/result absent from literature/synthesis.
→ RES-18 / Cochrane Chapter 13.

Do not conflate.

## 21. Duplicate and salami publication

Positive trial may generate multiple reports.

If treated as independent studies:
- effect overweighted;
- apparent evidence volume inflated.

Need study-level ID linking all reports.

## 22. Abstract-only evidence

Conference abstract:
- can reduce publication-bias risk if included;
- but methods/data often incomplete.

Project approach:
include as signal/context where appropriate;
do not assign same confidence as full well-reported study without sufficient information.

## 23. Preprints

Can provide recent/unpublished evidence.

Need:
- clearly label not peer-reviewed;
- inspect methods directly;
- update if final publication appears.

No automatic exclusion or trust.

## 24. Negative result suppression inside review

Review authors themselves can create reporting bias by:
- emphasizing positive subgroup;
- omitting inconvenient sensitivity analysis;
- choosing favorable meta-analysis model.

Therefore assess review protocol and planned analyses too.

## 25. Missing-evidence workflow

For each key synthesis:

1. Search registries/protocols.
2. Match publications to registered studies.
3. Identify completed unpublished studies.
4. Compare pre-specified vs reported outcomes/timepoints.
5. Identify partially reported results.
6. Inspect funnel/small-study effects if enough studies.
7. Check whether smaller studies have higher RoB.
8. Conduct sensitivity analyses if possible.
9. Use ROB-ME logic for important pooled result.
10. Downgrade certainty if likely missing evidence materially changes conclusion.

## 26. Project red flags

1. all small studies positive;
2. no preregistration;
3. only significant sites reported;
4. abstracts mention outcomes absent in paper;
5. registry completion but no publication;
6. unexplained missing timepoint;
7. large studies show smaller effects;
8. commercial sponsorship + selective endpoints;
9. review ignores unpublished studies;
10. funnel plot interpreted as definitive diagnosis.

## 27. Confidence

### HIGH
- selective non-reporting can bias meta-analysis;
- whole-study and within-study result missingness are distinct;
- funnel asymmetry has multiple explanations and is not diagnostic;
- asymmetry tests have limited utility with few studies;
- protocols/registries are important for detecting selective reporting;
- comprehensive search cannot guarantee absence of missing evidence.

### PRACTICAL_HEURISTIC
- project missing-evidence workflow and red flags.

## 28. Sources

1. Cochrane Handbook Chapter 13: Assessing risk of bias due to missing evidence in a meta-analysis.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-13

2. ROB-ME resources referenced by Cochrane Chapter 13.  
   https://www.riskofbias.info/

3. RoB 2 selected-reporting domain — Cochrane Chapter 8.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-08

## 29. Next dependencies

- RES-19 GRADE/certainty;
- RES-20 guideline appraisal;
- RES-25 conflicting evidence.
