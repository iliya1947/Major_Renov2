# Очередь исследования

## Сейчас

1. **Stage 2 — RESTARTED.**
2. **RES-01 — CLOSED_FOR_PRACTICE.**
3. RESEARCHING next: **RES-02 — study designs.**
4. RES-01 PASS-01…PASS-16 завершены: granular revalidation → gap audits → architecture → synthesis → closure audit.
5. RES-02/PASS-01…PASS-06A завершены и остаются текущей валидной базой. Прежний широкий `PASS-06B_prognosis_prediction_designs.md` по решению пользователя **SUPERSEDED** и не считается закрытием prognosis/prediction branch.
6. Новая granular revalidation PASS-06B начата. Завершены:
   - **PASS-06B1 — prognosis core taxonomy and longitudinal structure**;
   - **PASS-06B2 — longitudinal cohort structures for prognosis**;
   - **PASS-06B3 — routine-care data sources for prognosis**;
   - **PASS-06B4 — outcome-dependent sampling in prognosis**;
   - **PASS-06B5 — prediction-model development study structures**;
   - **PASS-06B6 — internal validation structures**;
   - **PASS-06B7 — internal-external and external validation structures**;
   - **PASS-06B8 — model recalibration, updating and extension structures**;
   - **PASS-06B9 — prediction-model impact and utility study structures**;
   - **PASS-06B10 — prediction-performance estimand architecture**;
   - **PASS-06B11 — prediction under treatment and management**;
   - **PASS-06B12 — dynamic and landmark prediction structures**;
   - **PASS-06B13 — prediction-branch integration audit**.
7. Аудит выявил три blocking gaps перед synthesis:
   - diagnostic prediction models vs DTA;
   - competing risks / recurrent events / multistate prediction;
   - continual/online updating and post-deployment lifecycle.
8. Завершён **PASS-06B14 — diagnostic prediction models vs diagnostic test accuracy**.
9. Остаются два blocking gaps перед финальным audit/synthesis:
   - competing risks / recurrent events / multistate prediction;
   - continual/online updating and post-deployment lifecycle.
10. Завершён **PASS-06B15 — complex event outcome prediction**.
11. Завершён **PASS-06B16 — post-deployment lifecycle and continual updating**.
12. Все три blocking gaps из PASS-06B13 получили отдельные taxonomy-level passes:
   - PASS-06B14 — diagnostic prediction models vs DTA;
   - PASS-06B15 — complex event outcome prediction;
   - PASS-06B16 — post-deployment lifecycle and continual updating.
13. Завершён **PASS-06B17 — final prediction-branch gap audit after B14–B16**.
14. Audit выявил три новых blocking gaps перед synthesis:
   - multicategory / ordinal prediction outcomes;
   - multiple-outcome / composite / joint-outcome prediction;
   - outcome-dependent sampling specifically for diagnostic probability models.
15. Завершён **PASS-06B18 — multicategory and ordinal prediction-model structures**.
16. Остаются два blocking gaps перед repeat final audit:
   - multiple-outcome / composite / joint-outcome prediction;
   - outcome-dependent sampling specifically for diagnostic probability models.
17. Завершён **PASS-06B19 — multiple-outcome, composite and joint-risk prediction structures**.
18. Остался один blocking gap перед repeat final audit:
   - outcome-dependent sampling specifically for diagnostic probability models.
19. Завершён **PASS-06B20 — diagnostic outcome-dependent sampling and absolute-probability recovery**.
20. Все три blocking gaps из PASS-06B17 теперь закрыты отдельными taxonomy-level passes:
   - PASS-06B18 — multicategory / ordinal prediction;
   - PASS-06B19 — multiple-outcome / composite / joint-risk prediction;
   - PASS-06B20 — diagnostic outcome-dependent sampling and absolute-probability recovery.
21. Завершён **PASS-06B21 — repeat final prediction-branch gap audit after PASS-06B18…B20**.
22. Repeat audit выявил один новый blocking gap перед synthesis:
   - current continuous-value diagnostic prediction / estimation equations and their boundary with measurement-property / criterion-validity studies.
23. Завершён **PASS-06B22 — current continuous-value prediction and estimation equations**.
24. Blocking gap из PASS-06B21 закрыт на taxonomy-level.
25. Завершён **PASS-06B23 — final prediction-branch closure/gap audit after PASS-06B22**.
26. Audit не выявил новых blocking prediction-design gaps; **prediction-branch structural synthesis разрешён**, но ещё не выполнен.
27. Завершён **PASS-06B24 — prediction-branch structural synthesis**.
28. Prediction/prognosis branch теперь **SYNTHESIZED for RES-02 structural use**; новых blocking design-family gaps после PASS-06B23 не было. `RES-02` в целом остаётся RESEARCHING.
29. Завершён **PASS-06C1 — mechanistic/explanatory study structures: scope and taxonomy**.
30. Mechanistic branch остаётся RESEARCHING; выделены отдельные deep branches: human experimental perturbation, causal mediation/pathway, observational biomarker/omics mechanism evidence, nonhuman/translational models.
31. Завершён **PASS-06C2 — human experimental mechanistic perturbation studies**.
32. Human perturbation taxonomy закрыта на текущем уровне: BESH/mechanistic-trial boundary, intervention-as-probe, target engagement, randomized/nonrandomized structures, crossover/parallel/within-person/factorial, challenge/dose/blockade/activation/rescue и condition-specific necessity/sufficiency-like claims.
33. Завершён **PASS-06C3 — causal mediation and pathway study structures**.
34. Causal mediation taxonomy закрыта на текущем уровне: mediator roles, temporal ordering, randomized vs observational mediation, total/direct/indirect estimands, controlled/natural/interventional effects, mediator-outcome confounding, exposure-induced confounding, measurement error, multiple/serial/longitudinal mediation.
35. Завершён **PASS-06C4 — observational mechanistic, biomarker and omics study structures**.
36. Observational biomarker/omics taxonomy закрыта на текущем уровне: biomarker roles, cross-sectional/longitudinal evidence, reverse causation, prospective biospecimens, high-dimensional discovery, multiplicity/replication, batch/preanalytics, annotation uncertainty, pathway/network inference, triangulation и MR/IV boundary.
37. Завершён **PASS-06C5 — nonhuman and translational mechanistic models**.
38. Nonhuman/translational taxonomy закрыта на текущем уровне: animal, primary-cell/cell-line, ex vivo, organoid/MPS, genetic/pharmacologic perturbation, computational V&V, model validity, species/tissue/dose/timescale translation и exercise-specific extrapolation.
39. Завершён **PASS-06C6 — mechanistic-branch integration and gap audit**.
40. Audit выявил один blocking design-family gap перед mechanistic synthesis: **N-of-1 / broader single-case experimental designs (SCED) for mechanistic/experimental physiology**. Detailed N-of-1 methodology остаётся owned by RES-27; taxonomy-level design classification закрывается здесь.
41. Завершён **PASS-06C7 — N-of-1 and single-case experimental structures for mechanistic/physiology research**.
42. Blocking SCED/N-of-1 gap из PASS-06C6 закрыт на taxonomy-level; detailed N-of-1 methods остаются owned by RES-27.
43. Завершён **PASS-06C8 — repeat mechanistic-branch closure/gap audit after PASS-06C7**.
44. SCED/N-of-1 blocker подтверждён как закрытый, но audit выявил новый blocking randomized-design gap: **sequential-randomization experimental designs — SMART / micro-randomized trial (MRT), with Hybrid Experimental Design crosswalk**. Это не тот же самый `adaptive trial design`, который уже покрыт PASS-02.
45. Завершён **PASS-06C9 — sequential-randomization experimental structures for adaptive/digital interventions**.
46. Blocking SMART/MRT/HED gap из PASS-06C8 закрыт на taxonomy-level; detailed optimization/statistical methods остаются deferred.
47. Завершён **PASS-06C10 — final mechanistic-branch closure/gap audit after PASS-06C9**.
48. Final audit не выявил remaining blocking mechanistic design-family gaps; **mechanistic structural synthesis разрешён**, но ещё не выполнен. Отдельно отмечен interference/spillover randomized-design crosswalk как кандидат для later RES-02 overall randomized/causal audit, не blocker C-branch.
49. Завершён **PASS-06C11 — mechanistic-branch structural synthesis**.
50. Mechanistic branch теперь **SYNTHESIZED FOR RES-02 STRUCTURAL USE**; remaining blocking mechanistic design-family gaps отсутствуют. `RES-02` в целом остаётся RESEARCHING. Interference/spillover randomized designs сохранены как handoff для later overall RES-02 randomized/causal audit.
51. Завершён **PASS-06D1 — qualitative primary-study structures: scope and taxonomy**.
52. Зафиксирована canonical qualitative architecture: scientific purpose + methodology/approach + sampling + data collection + analysis + context/reflexivity + adequacy/stopping logic + parent-study/integration layer. Interviews/focus groups/observation классифицируются как collection methods, а не atomic designs; saturation признан methodology-dependent; mixed methods требует intentional qual–quant integration; content-validity и process-evaluation purpose отделены от qualitative design.
53. Qualitative branch остаётся **RESEARCHING**; synthesis пока не разрешён.
54. Завершён **PASS-06D2 — phenomenology and lived-experience study structures**.
55. Зафиксирована phenomenology taxonomy: descriptive vs interpretive/hermeneutic routes; IPA как отдельная idiographic interpretive methodology; direct lived-experience eligibility; interviews/data sources отделены от design; fixed universal N rejected; saturation не считается универсальным обязательным критерием; phenomenological claims ограничены experiential/meaning inference и не подменяют prevalence/causal-effect evidence.
56. Qualitative branch остаётся **RESEARCHING**.
57. Завершён **PASS-06D3 — grounded theory study structures**.
58. Зафиксирована GT taxonomy: theory/process-generation purpose; constant comparison; memoing; theoretical sampling; theoretical saturation; distinction of Glaserian, Straussian and constructivist/Charmaz variants; open–axial–selective coding recognized as Straussian rather than universal; full-GT design separated from GT-informed analysis.
59. Qualitative branch остаётся **RESEARCHING**.
60. Завершён **PASS-06D4 — ethnography and focused-ethnography study structures**.
61. Зафиксирована ethnography taxonomy: culture/shared-practice target; observation as method rather than design; participant observation historically central but not universally mandatory; focused ethnography not reducible to short duration; emic/etic as complementary analytic positions; site/event/time/actor sampling; thick description/context/reflexivity; strict boundary from prevalence/causal-effect claims.
62. Qualitative branch остаётся **RESEARCHING**.
63. Завершён **PASS-06D5 — case-study primary research structures**.
64. Зафиксирована case-study taxonomy: bounded-case logic; case ≠ participant; single/multiple and holistic/embedded structures; qualitative/quantitative/mixed evidence; replication logic for multiple-case selection; within-case before/cross-case synthesis; analytic generalization distinct from statistical generalization; strict boundaries with clinical case report, N-of-1/SCED, case-control, ethnography and process evaluation.
65. Qualitative branch остаётся **RESEARCHING**.
66. Завершён **PASS-06D6 — qualitative description, interpretive description and generic qualitative study structures**.
67. Зафиксирована descriptive/generic taxonomy: Sandelowski QD как legitimate low-inference methodology; low-inference ≠ interpretation-free; Interpretive Description как distinct applied methodology; generic qualitative допускается только при явной methodological congruence; methodology-unclear не чинится автоматически до generic; exploratory = purpose, TA/content analysis = analysis layer, не parent design.
68. Qualitative branch остаётся **RESEARCHING**.
69. Завершён **PASS-06D7 — narrative inquiry and narrative-study structures**.
70. Зафиксирована narrative taxonomy: story/temporality/identity as scientific target; story-in-interview ≠ narrative design; Clandinin/Connelly temporality-sociality-place architecture; thematic/structural/dialogic-performance narrative-analysis families; plot/turning points/tellability/co-construction; individual, collective and cultural/master narrative levels; longitudinal narrative change separated from objective event change; narrative causality separated from causal identification.
71. Qualitative branch остаётся **RESEARCHING**.
72. Завершён **PASS-06D8 — participatory, action-research and co-design primary-study structures**.
73. Зафиксирована participatory/governance taxonomy: research participant ≠ research partner; participation/involvement/engagement separated; action research = iterative plan–act–observe–reflect cycles; PAR adds participatory/power/transformation commitments; CBPR requires community partnership and shared governance; co-design requires substantive design influence; co-production usually broader shared power/responsibility; participatory architecture sits on top of parent qual/quant/trial/mixed design; co-design does not establish efficacy.
74. Qualitative branch остаётся **RESEARCHING**.
75. Завершён **PASS-06D9 — discourse, conversation and language-centered qualitative structures**.
76. Зафиксирована language/discourse taxonomy: discourse-as-object; CA как distinct interactional methodology; turn-taking/sequence/repair/action formation; naturally occurring vs elicited data; Jeffersonian-style transcription requirements; DP/CDP/FDA/CDA separated; interpretative repertoires/subject positions/ideological dilemmas distinguished from themes; discourse claims separated from private-belief, prevalence and causal-effect claims.
77. Qualitative branch остаётся **RESEARCHING**.
78. Завершён **PASS-06D10 — longitudinal qualitative study structures across methodologies**.
79. Зафиксирована longitudinal qualitative taxonomy: longitudinal question + repeated/time-structured data + explicit change/continuity analysis; repeated interviewing alone insufficient; prospective vs retrospective/quasi-longitudinal structures separated; entities followed can be persons/dyads/groups/settings; recurrent cross-sectional vs trajectory analysis separated; fixed-clock vs event-contingent timing; attrition/missing waves; embedded trial/process-evaluation longitudinal components; temporal ordering does not establish causal effect.
80. Qualitative branch остаётся **RESEARCHING**.
81. Завершён **PASS-06D11 — qualitative sampling and data-sufficiency cross-family synthesis**.
82. Зафиксирована cross-family sampling/adequacy architecture: purposive sampling as umbrella; criterion/maximum-variation/homogeneous/typical/intensity/extreme/critical/confirming-disconfirming strategies; selection ≠ recruitment; snowball/convenience boundaries; theoretical sampling requires emerging analysis; participant/case/site/event/time/material sampling separated; no universal qualitative N; code vs meaning saturation; saturation variants; information power; methodology-specific and claim-level adequacy.
83. Qualitative branch остаётся **RESEARCHING**.
84. Завершён **PASS-06D12 — reflexivity, trustworthiness and qualitative quality architectures**.
85. Зафиксирована cross-family quality architecture: methodological integrity as main umbrella; credibility/transferability/dependability/confirmability retained as useful but non-exclusive; reflexivity ≠ biography or bias elimination; triangulation ≠ truth by agreement; member checking optional and purpose-dependent; negative cases/rival explanations/audit trails/peer debriefing routed by methodology; intercoder reliability explicitly non-universal and inappropriate as a reflexive-TA validity requirement; JARS/SRQR/COREQ treated as reporting frameworks rather than quality scores.
86. Qualitative branch остаётся **RESEARCHING**.
87. Завершён **PASS-06D13 — qualitative components nested within trials, cohorts, intervention-development and process-evaluation structures**.
88. Зафиксирована nested/embedded qualitative architecture: parent design ≠ qualitative methodology; qualitative components do not inherit randomization; before/during/after trial functions separated; feasibility dynamic refinement distinguished from definitive-trial contamination risk; trial-conduct research separated from intervention process evaluation; process evaluation = implementation/mechanisms/context purpose layer; arm/outcome/trajectory/site/provider sampling rules; perceived mechanism ≠ causal mediation; nested qualitative ≠ automatically mixed methods; integration requires intentional design/analysis/interpretation linkage such as joint displays, triangulation protocols or following-a-thread.
89. Qualitative branch остаётся **RESEARCHING**.
90. Следующий микро-проход: **RES-02/PASS-06D14 — qualitative-branch comprehensive gap audit after PASS-06D1…D13: audit missing methodology/design families, distinguish blockers from analysis methods/subtypes/cross-cutting metadata, identify any required additional granular passes, and determine whether qualitative structural synthesis is authorized**.

## Правила Stage 2 после restart

1. Старые RES/ANA findings считаются **legacy reconnaissance drafts**, а не завершёнными topics.
2. Один topic ID может занимать любое число passes.
3. Каждый pass должен быть узким и завершаться сохранением в репозиторий.
4. Каждый pass фиксирует:
   - scope;
   - sources checked;
   - established findings;
   - unresolved issues;
   - next pass.
5. После содержательных passes обязателен отдельный gap/audit pass.
6. `CLOSED_FOR_PRACTICE` разрешён только после audit pass.
7. Персональную программу пока не строить.

## Сохраняется как завершённое

1. Stage 0A — first-pass audits.
2. Stage 0B — architecture audit + area 16.
3. Stage 1 — normalized canonical knowledge tree v1.0.

## Перепроверяется

1. RES-01…RES-29.
2. Затем ANA-01…ANA-11 и оставшиеся ANA topics.
