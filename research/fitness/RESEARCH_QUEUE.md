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
90. Завершён **PASS-06D14 — qualitative-branch comprehensive gap audit after PASS-06D1…D13**.
91. Audit result: **QUALITATIVE STRUCTURAL SYNTHESIS NOT AUTHORIZED**. Найдены 9 methodology-level blockers: phenomenography; standalone hermeneutic inquiry; autoethnography; institutional ethnography; Situational Analysis; Dimensional Analysis; Critical Incident Technique; Photovoice/participatory visual methodology; ethnomethodology beyond Conversation Analysis.
92. Framework Method, rapid qualitative approaches, netnography/digital ethnography, sensory/critical/multi-sited ethnography, broad arts-based methods, photo-elicitation, story completion, secondary qualitative analysis, AI-assisted analysis and reporting standards классифицированы как analysis/subtype/cross-cutting/data-provenance/tooling/reporting layers, а не current parent-design blockers.
93. Realist evaluation, Design-Based Research и Human-Centered Design переданы в later overall RES-02 gap audit как cross-method evaluation/development architectures.
94. Qualitative branch остаётся **RESEARCHING**.
95. Завершён **PASS-06D15 — phenomenography study structures**.
96. Зафиксирована phenomenography taxonomy: second-order perspective; variation in ways of experiencing/understanding one phenomenon; conceptions as relational; referential vs structural aspects; categories of description as collective analytic products rather than participant types; outcome space with distinct/logically related/parsimonious categories; hierarchy common but not mechanically imposed; sampling for variation; phenomenography ≠ phenomenology/QD/GT/TA; conception-frequency ≠ prevalence.
97. Blocker phenomenography из PASS-06D14 закрыт на taxonomy-level. Qualitative branch остаётся **RESEARCHING**.
98. Завершён **PASS-06D16 — standalone hermeneutic inquiry structures**.
99. Зафиксирована standalone hermeneutic taxonomy: Gadamerian philosophical hermeneutics отделена от hermeneutic phenomenology; Gadamer philosophy ≠ fixed empirical recipe; Fleming et al. five-step approach = later Gadamerian-based adaptation; pre-understanding/prejudice as necessary interpretive starting point; hermeneutic circle as whole–part movement; dialogue/question–answer; fusion of horizons as transformed, provisional understanding rather than consensus/final truth; DORR quality dimensions Depth/Openness/Resonance/Reflexivity; hermeneutic claims ≠ prevalence/causal inference.
100. Blocker standalone hermeneutic inquiry из PASS-06D14 закрыт на taxonomy-level. Qualitative branch остаётся **RESEARCHING**.
101. Завершён **PASS-06D17 — autoethnography study structures**.
102. Зафиксирована autoethnography taxonomy: researcher-as-participant/data source; constitutive self–culture analytic link; autobiography/memoir/reflexivity/insider ethnography boundaries; evocative vs Anderson-style analytic AE; collaborative and other named variants; memory/contemporaneous-record distinction; relational ethics, implicated others and internal confidentiality; variant-specific quality criteria; reader resonance/theoretical contribution ≠ population generalization or causal inference.
103. Blocker autoethnography из PASS-06D14 закрыт на taxonomy-level. Qualitative branch остаётся **RESEARCHING**.
104. Завершён **PASS-06D18 — institutional ethnography study structures**.
105. Зафиксирована institutional-ethnography taxonomy: standpoint as epistemic starting point; problematic/disjuncture; broad work/work-knowledge concept; local vs extra-local/translocal coordination; texts/text activation/intertextual hierarchy; ruling relations as distributed administrative/managerial/professional/discursive coordination; iterative tracing of actors/texts/sites; mapping/explication output; IE ≠ ethnography-in-an-institution/critical ethnography/case study/discourse analysis; institutional explanation ≠ causal-effect estimate.
106. Blocker institutional ethnography из PASS-06D14 закрыт на taxonomy-level. Qualitative branch остаётся **RESEARCHING**.
107. Завершён **PASS-06D19 — Situational Analysis study structures**.
108. Зафиксирована Situational Analysis taxonomy: Clarke-derived GT extension; situation as fundamental analytic unit; conditions treated as constitutive rather than background; messy/ordered situational maps + relational analysis; social worlds/arenas maps; positional maps of positions rather than persons; positions not taken/silences; human/nonhuman/material/discursive elements; coding/memoing/theoretical sampling retained from GT; SA ≠ conventional GT/case study/ethnography/institutional ethnography/generic situational assessment; relational map ≠ causal graph.
109. Blocker Situational Analysis из PASS-06D14 закрыт на taxonomy-level. Qualitative branch остаётся **RESEARCHING**.
110. Завершён **PASS-06D20 — Dimensional Analysis study structures**.
111. Зафиксирована Dimensional Analysis taxonomy: Schatzman-derived GT methodology; symbolic interactionism/natural analysis; dimensionalization; designation→differentiation→integration/reintegration; perspective selection by explanatory power rather than frequency; explanatory matrix with context/conditions/processes/consequences; constant comparison/memoing/theoretical sampling; full DA ≠ portable dimensionalization technique; dimensional concept analysis of literature = separate application layer; DA ≠ Straussian GT/Situational Analysis/TA/Framework Method; matrix conditions/consequences ≠ causal estimands.
112. Blocker Dimensional Analysis из PASS-06D14 закрыт на taxonomy-level. Qualitative branch остаётся **RESEARCHING**.
113. Завершён **PASS-06D21 — Critical Incident Technique study structures**.
114. Зафиксирована CIT taxonomy: Flanagan five-stage architecture; incident as analytic unit; criticality relative to explicit aim rather than catastrophe; participant N ≠ incident N; observer/self-report and retrospective/prospective incident capture; helpful/hindering/effective-ineffective/significant-event variants; recall aids and reconstructive-memory limits; incident extraction and category development; incident frequency/participation rate ≠ prevalence; ECIT as named adaptation with wish-list items and nine credibility checks; CIT ≠ generic interview/narrative turning-point/event-history/adverse-event reporting/process evaluation; participant-attributed trigger ≠ causal mechanism.
115. Blocker Critical Incident Technique из PASS-06D14 закрыт на taxonomy-level. Qualitative branch остаётся **RESEARCHING**.
116. Завершён **PASS-06D22 — Photovoice / participatory visual study structures**.
117. Зафиксирована Photovoice taxonomy: participant-generated photography; Wang/Burris three goals; selecting→contextualizing→codifying participatory analysis; image+narrative linkage; SHOWED as common but nonmandatory scaffold; participant decision rights and action/policy reach as fidelity dimensions; canonical vs attenuated Photovoice; Photovoice ≠ photo-elicitation/generic visual method/full CBPR; visual consent, third-party privacy, location privacy, representation, image ownership/use rights and public-dissemination risks; photo count ≠ participant N/prevalence; action intention ≠ demonstrated policy impact.
118. Blocker Photovoice / participatory visual methodology из PASS-06D14 закрыт на taxonomy-level. Qualitative branch остаётся **RESEARCHING**.
119. Завершён **PASS-06D23 — ethnomethodology beyond Conversation Analysis**.
120. Зафиксирована ethnomethodology taxonomy: Garfinkel-derived members' methods and locally produced social order; accountability/indexicality/ethnomethodological reflexivity/documentary method; breaching as optional demonstration rather than defining or randomized experiment; ethnomethodological indifference; weak/strong unique-adequacy boundary; instructed action/workplace studies; naturally occurring/video/multimodal practical action; EM broader than CA and distinct from ethnography/phenomenology/discourse analysis/institutional ethnography; sequence/order claims ≠ prevalence or causal-effect estimates.
121. Все 9 blockers из PASS-06D14 закрыты отдельными taxonomy-level passes D15–D23.
122. Завершён **PASS-06D24 — repeat final qualitative-branch gap audit after PASS-06D15…D23**.
123. Repeat audit: **QUALITATIVE STRUCTURAL SYNTHESIS NOT AUTHORIZED**. Найдены 6 новых blockers: Consensual Qualitative Research (CQR); Moustakas heuristic inquiry; Co-operative Inquiry; Appreciative Inquiry; Oral History; Interpretive Interactionism.
124. Linguistic ethnography, MCA, multimodal interaction analysis, interactional sociolinguistics, rhetorical psychology, visual/semiotic discourse analysis, critical ethnography, life history/BNIM, multi-centre qualitative architecture, rapid qualitative, Framework Method, thematic/content analysis, digital/sensory ethnographic variants and AI-assisted QDA классифицированы как hybrid/subtype/analysis/site/tooling/provenance layers, а не current blockers. Q methodology и structured consensus methods handed off to later overall RES-02 mixed/hybrid/consensus audit.
125. Завершён **PASS-06D25 — Consensual Qualitative Research (CQR)**.
126. Зафиксирована CQR taxonomy: predominantly constructivist architecture with postpositivist elements; open-ended comparable case data; domains → core ideas → cross-analysis; multiple analysts + genuine consensus + auditor as methodology-specific core; researcher biases/expectations and CQR-style bracketing; general/typical/variant/rare as case-frequency labels rather than prevalence; CQR-M for larger samples of brief/simple qualitative data; CQR-C for intensive case/process research; consensus ≠ participant consensus/majority vote/intercoder reliability; CQR ≠ phenomenology/TA/content analysis/Framework Method/Delphi/GT.
127. Blocker CQR из PASS-06D24 закрыт на taxonomy-level.
128. Завершён **PASS-06D26 — Moustakas heuristic inquiry study structures**.
129. Зафиксирована heuristic-inquiry taxonomy: Moustakas-derived phenomenologically oriented methodology; researcher direct lived experience as constitutive; seven processes (focus, self-dialogue, tacit knowing, intuition, indwelling, focusing, internal frame) distinguished from six phases (initial engagement, immersion, incubation, illumination, explication, creative synthesis); validation stored separately despite some seven-phase adaptations; co-researchers require direct phenomenon experience but do not imply PAR governance; individual/composite depictions, exemplary portraits and creative synthesis; researcher transformation/representation as methodology-level objects; heuristic inquiry ≠ descriptive/hermeneutic phenomenology/IPA/autoethnography/narrative/self-study/arts-based research; resonance/essence claims ≠ prevalence or causal effects.
130. Blocker Moustakas heuristic inquiry из PASS-06D24 закрыт на taxonomy-level.
131. Завершён **PASS-06D27 — Co-operative Inquiry study structures**.
132. Зафиксирована Co-operative Inquiry taxonomy: Heron/Reason participatory inquiry paradigm; all members as co-researchers + co-subjects; political + epistemic participation; experiential/presentational/propositional/practical knowing; repeated four-phase action–reflection cycles; divergence + convergence; authentic collaboration, power/facilitation and distress management as methodology-level concerns; research cycling, critical subjectivity, anti-projection and anti-consensus-collusion validity procedures; CI ≠ focus group/PPI/co-design/co-production/generic action research/PAR/CBPR/CQR/heuristic inquiry; practical/group-change claims ≠ prevalence or controlled causal effects.
133. Blocker Co-operative Inquiry из PASS-06D24 закрыт на taxonomy-level.
134. Завершён **PASS-06D28 — Appreciative Inquiry study structures**.
135. Зафиксирована Appreciative Inquiry taxonomy: Cooperrider/Srivastva lineage; action-research/organizational-development + social-constructionist/sociorationalist roots; affirmative topic and positive core; classic Discovery→Dream→Design→Destiny 4D cycle with later Define-based 5D variant; original constructionist/simultaneity/poetic/anticipatory/positive principles; inquiry itself as change process; strengths-based ≠ problem denial; positivity/shadow/power risks; partial-cycle vs full-cycle fidelity; AI can coexist with TA/mixed/quasi-experimental evaluation and is not intrinsically qualitative-only; AI ≠ generic strengths interview/positive psychology/action research/PAR/Co-operative Inquiry/co-design/EBCD/solution-focused practice; AI change claims ≠ controlled causal effects.
136. Blocker Appreciative Inquiry из PASS-06D24 закрыт на taxonomy-level.
137. Завершён **PASS-06D29 — Oral History primary-research structures**.
138. Зафиксирована Oral History taxonomy: current OHA scholarly architecture = research-informed recorded in-depth interview + preservation + access + interpretation; dual product = current research output + durable historical primary source; preparation→interviewing→preservation→access lifecycle; narrator agency and interviewer–narrator co-creation; memory as both evidence and meaning; factual verification/corroboration separated from narrator review; recording ≠ transcript; consent ≠ release/rights; preservation/metadata/future reuse as methodology-level; Oral History ≠ generic retrospective interview/narrative inquiry/life history/oral tradition/journalism/testimony; historical belief ≠ physiological efficacy; exact copyright/IRB rules jurisdiction-specific.
139. Blocker Oral History из PASS-06D24 закрыт на taxonomy-level.
140. Завершён **PASS-06D30 — Interpretive Interactionism study structures**.
141. Зафиксирована Interpretive Interactionism taxonomy: Denzin-derived methodology linking consequential biographical/interactional experience to social/institutional/public context; four epiphany types = major, cumulative, minor/illuminative, relived; full interpretive process = framing question → deconstruction → capture → bracketing → construction → contextualization, while some applied papers count only the last five as phases; thick description + thick interpretation; researcher subjectivity/intersubjectivity/representation as methodology-level; full II ≠ epiphany typology alone; II ≠ symbolic interactionism as theory/phenomenology/narrative/GT/generic critical inquiry/case study/autoethnography; critical/post-structural II retained as a variant; epiphany/private-public linkage ≠ prevalence or causal effect.
142. Все 6 blockers из PASS-06D24 закрыты taxonomy-level passes D25–D30.
143. Завершён **PASS-06D31 — repeat final qualitative-branch gap audit after PASS-06D25…D30**.
144. Repeat audit: **QUALITATIVE STRUCTURAL SYNTHESIS NOT AUTHORIZED**. Найдены 7 новых blockers: Self-Study of Practice / S-STEP; Duoethnography; Collective Memory Work; Indigenous/decolonizing research-methodology routing; Participatory Video; A/r/tography; Post-Qualitative Inquiry.
145. Broad arts-based research остаётся heterogeneous non-atomic umbrella; collaborative autoethnography остаётся D17 subtype; yarning/Dadirri/Talking Circles не универсализируются как один parent design; affective inquiry/diffractive analysis routed under future PQI pass; Deliberative Dialogue handed off to later deliberation/KT/consensus audit; Q methodology remains mixed/hybrid handoff.
146. Завершён **PASS-06D32 — Self-Study of Practice / S-STEP structures**.
147. Зафиксирована Self-Study/S-STEP taxonomy: practitioner self-in-practice as scientific object; self-initiated/self-focused inquiry; improvement/professional-learning aim; public professional-knowledge contribution; LaBoskey five characteristics + Samaras Five Foci; meaningful interaction/collaborative criticality; critical friendship as dominant but variably enacted mechanism; multiple primarily qualitative data sources; exemplar-based validation/trustworthiness; method flexibility; explicit separation from reflective practice, autoethnography, action research, heuristic inquiry and self-experiment/N-of-1; verified direct PETE/coaching/physical-literacy/APA applications; rehabilitation-professions education verified, strong current direct clinical-rehabilitation S-STEP corpus not verified.
148. D31 blocker **Self-Study of Practice / S-STEP CLOSED AT TAXONOMY LEVEL**.
149. Завершён **PASS-06D33 — Duoethnography study structures**.
150. Зафиксирована Duoethnography taxonomy: Norris/Sawyer lineage; researchers as participant-sites of inquiry; life-as-curriculum; deliberate juxtaposition; polyvocal dialogue; difference as analytic resource; interrogation/disruption of prior meanings; reconceptualization/praxis; contextual rather than universal claims; data-generation and meaning-making can be intertwined; multiple data/analysis layers permitted; trust, power, safe dialogic space and ongoing relational ethics are methodology-level. Boundary with collaborative autoethnography remains genuinely overlapping and is routed by architecture, not author count. Direct 2025 Garmin/chronic-health exemplar verifies running/cycling/swimming/strength-training relevance.
151. D31 blocker **Duoethnography CLOSED AT TAXONOMY LEVEL**.
152. Завершён **PASS-06D34 — Collective Memory Work study structures**.
153. Зафиксирована CMW taxonomy: Haug/Frauenformen feminist-Marxist lineage; collective work with individual memory-scenes rather than cultural collective memory; participant-researcher group; shared problematic/trigger; short scene-specific memory writing; classic third-person distancing as lineage technique but not absolute modern requirement; collective textual scrutiny; recursive rewriting/reanalysis; contradictions/language/socialisation/power as analytic targets; theory↔experience; praxis/action-potence; online variants; ethics, hierarchy and publication/authorship power; explicit separation from narrative inquiry, focus groups, oral history, memory studies, CAE, PAR and therapy. Direct sport/PA evidence and current PQI-informed CMW verified.
154. D31 blocker **Collective Memory Work CLOSED AT TAXONOMY LEVEL**.
155. Завершён **PASS-06D35 — Indigenous/decolonizing research-methodology routing and sport/physical-activity structures**.
156. Зафиксирован cross-cutting Indigenous/decolonizing routing layer: no pan-Indigenous universal design; Nation/community-specific ontology/epistemology/axiology; relational accountability; self-determination and genuine Indigenous decision authority; benefit/reciprocity/two-way capability; Indigenous knowledge/custodian rights; Indigenous Data Sovereignty/Governance across full lifecycle; empirical design stored separately because Indigenous methodology can govern qualitative, quantitative and mixed designs. Kaupapa Māori retained as Māori-specific methodology; yarning routed by declared/enacted level; Dadirri kept place/custodian-specific; Talking Circles not universalized. Current AIATSIS/NHMRC/IREC 2026 requirements and direct Māori rugby/haka, Aboriginal sport-history, running-group and PA examples verified.
157. D31 blocker **Indigenous/decolonizing research-methodology routing CLOSED AT ROUTING/TAXONOMY LEVEL**.
158. Завершён **PASS-06D36 — Participatory Video study structures**.
159. Зафиксирована PV taxonomy: process-over-product; five-stage extended architecture from group formation through external engagement; media-literacy/role rotation; recording↔playback↔reflection; participant-led topic/message development; editorial/final-cut authority; community screening as dialogic/analytic event; facilitator and intra-group power; staged moving-image consent; participant vs contributor roles; raw-footage/final-film ownership/storage/reuse; explicit separation from Photovoice, documentary, digital storytelling, video elicitation and generic videography. Direct NU-BIG PA evaluation verified; current 2026 power research shows participant film roles can also create exclusion/narrative control.
160. D31 blocker **Participatory Video CLOSED AT TAXONOMY LEVEL**.
161. Завершён **PASS-06D37 — A/r/tography / specific arts-based inquiry structures**.
162. Зафиксирована a/r/tography taxonomy: artist/researcher/teacher-pedagogue practices; living inquiry; relationality; art-making as knowledge production; art↔text/multimodal integral relation; embodied/material inquiry; six renderings retained as conceptual practices rather than methods/checklist; rhizomatic/becoming orientation; audience co-meaning possibilities; formal artist/teacher credentials not mandatory when roles are genuinely enacted. Broad arts-based research remains heterogeneous/non-atomic. Boundaries with autoethnography, S-STEP, performance ethnography, research-creation and PQI documented. Direct 2017 sport/exercise pilot, RAIT and 2026 youth-sport World Leisure Journal application verified.
163. D31 blocker **A/r/tography CLOSED AT TAXONOMY LEVEL**.
164. Завершён **PASS-06D38 — Post-Qualitative Inquiry / posthuman-new-materialist inquiry routing**.
165. Зафиксирован cross-cutting PQI/posthuman routing layer: STRICT_PQI vs PQI_INFORMED_HYBRID vs POSTHUMAN_NEW_MATERIALIST_ORIENTATION; strict St. Pierre PQI refuses pre-existing humanist methodology; broader current sport/health/psychology field permits postqualitative-informed hybrids. Human/nonhuman/material/discursive entanglement, posthuman subject, concept-first inquiry, data/analysis/representation reconfiguration and response-ability retained as routing fields. Diffraction, assemblage thinking, affective inquiry, thinking-with-theory and un-methods are analytic/conceptual practices rather than parent designs. SA, discourse analysis, a/r/tography and CMW remain distinct but can carry PQI/posthuman orientation. Beggan 2023/2024 direct PA applications and current 2025 sport/health/PE field synthesis verified.
166. D31 blocker **Post-Qualitative Inquiry CLOSED AT ROUTING/TAXONOMY LEVEL**; all D31 blockers = 0 remaining.
167. Qualitative branch остаётся **RESEARCHING**; structural synthesis **NOT AUTHORIZED** pending repeat gap audit.
168. Следующий микро-проход: **RES-02/PASS-06D39 — repeat final qualitative branch gap audit after D32–D38: reopen D31/D32–D38, repeat broad external scan, re-test blockers/non-blockers/handoffs and sport/health relevance, inspect hybrid-routing contradictions; either identify new blocker(s) or authorize qualitative structural synthesis**.

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
