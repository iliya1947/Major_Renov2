# IND-03.2 — Versioned individual inference, competing models and evidence revision

Date: 2026-11-25. Status: bounded research and synthetic regression check complete; IND-03 remains IN_PROGRESS.
Scope: nonclinical descriptive and conditional predictive reasoning under incomplete evidence, not diagnosis, causal identification or independently verified person-specific prediction.

## 1. Purpose and baseline

Question: How can a model retain useful individual patterns without converting an uncertain interpretation into a fixed trait, motive or mechanism? What counts as discriminating new evidence, a failed prediction, a correction, or grounds to make no update?
Dependencies: IND-03.1; canonical PSY-RES-09 and INT-02. At branch head 9469eda60852843322de547cac03a56e0dd24c15, retrieved both exact canonical files and inspected relevant headings and selected passages: PSY-RES-09 sections 10, 19, 26, 27, 29; INT-02 sections 1, 6, 47, 76–80, 85. No full reread of either claimed. PSY-RES-09 explicitly treats case formulation as a testable measurement and functional model, with independent convergence, calibration and dependency mapping; INT-02 separates provenance, claim type, confidence and use permission. The present note extends the operational revision procedure rather than replacing those controls.

## 2. Evidence and competing approaches

Targeted public searches 2026-11-25: "Mumma idiographic case formulation hypothesis testing person specific psychological assessment measurement model functional model"; "psychology theory falsifiability competing predictions"; "psychology longitudinal individual model prediction time series cross validation nonstationarity person specific 2025 idiographic"; exact-title follow-up of Langener/Jacobson and nonstationary autoregressive model selection. Inclusion: direct relevance to measurement versus functional models, prediction validation, uncertainty and competing explanations. Not a systematic review; no raw empirical data reanalysis.

E1. Mumma (2011), Validity Issues in Cognitive-Behavioral Case Formulation. https://doi.org/10.1027/1015-5759/a000054 ; Mumma (2018), Person-specific validation and testing of functional relations in cognitive-behavioural case formulation: Guidelines and options. https://doi.org/10.1002/cpp.2298
Access: indexed primary abstracts/excerpts; direct Wiley access to 2018 paper forbidden and PubMed browser check blocked. The methodological distinction between construct/measurement validity and functional/predictive validity supports testing separately whether a model measures the proposed phenomenon and whether its proposed relationships predict observations. Clinical source used as a generic methodological analogy only; no clinical efficacy, diagnosis or authority transferred. Not new foundational evidence relative to PSY-RES-09.

E2. Kuper et al. (2025 issue), From persons to general principles: Methodological decisions for idiographic and nomothetic research. https://doi.org/10.1177/08902070241278020
Access: publisher text, selected sections on research targets, temporal aggregation, Table 1 and levels of analysis (including N=1, bottom-up and top-down integration). Not end-to-end. This methodological review distinguishes research questions about structure, process and change, and multiple analytical levels. It motivates matching measures, frequency of observations and model class to the target. Person-specific estimates also have measurement and estimation error. Dense repeated data, adequate variability and comparable measurements are prerequisites for many formal models; individualized variables and shared measurement designs serve different purposes. A conversational qualitative model is not equivalent to a fitted N=1 time-series model.

E3. Langener & Jacobson (2026), Just in Time or Just a Guess? Addressing Challenges in Validating Prediction Models Based on Longitudinal Data. Published online April 10. https://doi.org/10.1177/25152459261418960 ; official journal summary https://www.psychologicalscience.org/journals/ampps/25152459261418960/
Access: publisher text covering use cases, validation choices and selected recommendations; official journal abstract with simulation results. Not end-to-end. Illustrative simulations: a pooled AUC of .82 coexists with mean within-person AUC .54 (SD .13); in another example, a model with AUC .82 underperforms a simple baseline with AUC .96. These are simulation demonstrations, not estimated universal predictive performance or personal probabilities. Match validation to same-person future prediction versus new-person generalization; random record splits are assumption-sensitive, moving windows more directly approximate prospective deployment, and individual outcome variability and meaningful baseline comparisons matter. No raw-data reanalysis; no inference of a specific person's hidden mental state.

E4. Zhang, Ernst, Lafit, Eiling & Bringmann (online October 28, 2025), An investigation into in-sample and out-of-sample model selection for nonstationary autoregressive models. https://doi.org/10.1111/bmsp.70012 ; authors' institutional record https://research.rug.nl/en/publications/an-investigation-into-in-sample-and-out-of-sample-model-selection/
Access: institutional abstract and bibliographic record directly inspected; PMC opening blocked. Six simulated univariate nonstationary processes and reanalysis of a 239-day positive/negative affect series. Authors report that BIC performed best overall in their simulation conditions, while other techniques varied with series length. They advise integrating theoretical and qualitative understanding rather than using automatic selection alone. This is a counterweight to a universal "out-of-sample score always identifies the true generative model" rule. Model selection for recovering a process differs from prediction for a specific deployment task. The tested model family and designs constrain transport; exact simulation estimates not verified.

Evidence limits: the four entries contain five publications, including two methodological papers in E1. E2/E3 substantive sections were directly inspected; E1/E4 rely mainly on abstract-level evidence. No source read end-to-end in this pass, no exhaustive correction/retraction audit, no independent forecast validation. The cited methods support the revision protocol, not its validated efficacy.

## 3. Versioned proposition ledger (blank schema)

Use alongside, not instead of, INT-02 / PRIVATE_MODEL_UPDATE_CARD. Generic schema only; filled real-person records never belong in the repository.

- Proposition ID and version; claim wording and type (observation, descriptive pattern, state, trait, functional relation, forecast, cause, mechanism).
- Target, context, timescale, scope and measurement rule.
- Evidence IDs, episode/source/method dependencies, directness relative to claim, independent support and contradictions.
- Candidate alternatives, including context-only/no-change/no-update accounts; applicability conditions; distinguishing forecast and evidence that would count against each.
- Forecast record: version fixed before outcome, creation time, target, horizon, required opportunity/context, criterion for match/mismatch, missing/unresolvable rule, reference comparator where possible.
- Review: new evidence ID and date; outcome adjudication (match, mismatch, unresolvable, out of scope, correction); whether evidence genuinely discriminates; confidence and use permission separately.
- Update decision: NO UPDATE / RETAIN / STRENGTHEN / WEAKEN / SPLIT / MERGE / REVISE RELATION / RETIRE / ADD NEW HYPOTHESIS, in accordance with INT-02; rationale, downstream IDs affected, next revision trigger.
- Keep historical forecasts and prior versions intact, even when source data are corrected. Mark superseded results explicitly. A correction is not a new independent confirming or disconfirming episode.

## 4. Revision workflow

1. Define purpose and observation boundary. Separate data from assumptions and claims that depend on them. Avoid unsupported motives and unjustified precise confidence scores.
2. Generate plausible alternatives and distinguish them by predictions for naturally occurring comparable situations; no engineered distress or covert tests. If predictions coincide, the observation cannot discriminate those hypotheses.
3. Record forecast before future evidence when feasible; separate retrospective fit from future validation. If no valid comparator or objective criterion exists, treat the exercise as qualitative and do not label it verified prediction.
4. Check eligibility, opportunities, source/episode dependence and measurement comparability. Missing or out-of-scope evidence is not a failed prediction. Keep unknown as unknown.
5. Compare the new outcome against the frozen claim. Consider premise/measurement failure, drift and stochastic variation before changing the model. Retain a failed forecast even if a revised model later explains it.
6. Revise the smallest affected proposition, then propagate to conclusions that actually depend on it; preserve independent support. Do not mechanically increase confidence with repeated dependent reports.
7. Compare simple patterns and more complex explanations. Introduce a new latent factor only if warranted by discriminating evidence; alternative hypotheses may remain unresolved or coexist. New context-specific models require future checking, not retrospective declarations of success.
8. Report a supported conclusion and alternatives, limits, and the appropriate action permission. Respect explicit decisions and boundaries regardless of the inferred motive. Numeric calibration needs defined observable outcomes, justified probabilities and adequate repeated forecasts; it cannot be established by invented confidence percentages.

## 5. Executed synthetic regression test

Entirely invented educational sequence about optional puzzle practice in a fictional workshop. No real-person source, no private derivative. Rules were specified before processing the synthetic follow-up rows in the executable check, but the rows and rules were authored together for this demonstration. This is not a blinded, independent or real prospective test.

O1: an initial session with no materials and no attempt. This motivates but does not resolve alternatives. Define a deliberately simplified pair of competing categorical forecasts for later sessions where access is verified: A predicts an attempt; B predicts no attempt. Both abstain if eligibility unknown. These are toy operational forecasts, not assertions of latent desire or deterministic personality. A and B can both be too simple.

O2: verified access, recorded attempt. O2-copy: duplicate report of the same episode. O3: access unknown, no attempt. O4: verified access, no attempt. A correction then invalidates O2 and its derived copy (record attributed to the wrong fictional participant). O5: distinct later verified-access session with an attempt.

Executed a JavaScript check using the above rows: exclude invalid or derived observations; require verified eligibility; count matches/misses by candidate forecast; separately flag existence of any confirmed eligible later attempt. The check asserted exact expected states and completed without assertion failure.

| Review state | A match/miss | B match/miss | Existence of confirmed eligible attempt | Unresolvable |
|---|---|---|---|---|
| Before correction, through O4 | 1/1 | 1/1 | yes | 1 |
| After correction, through O4 | 0/1 | 1/0 | not established | 1 |
| After independent O5 | 1/1 | 1/1 | yes | 1 |

The copy never adds a count. Correction withdraws the existence claim supported only by O2; O5 restores it using independent evidence. After correction B temporarily matches all remaining eligible observations, but the single remaining observation is insufficient for high confidence. After O5, both categorical models have mismatches; neither universally predicts action. A richer context-conditioned hypothesis may be explored, but cannot be declared superior until specified and tested on additional data. The existence of an attempt is not evidence of a unique motive. Unresolvable O3 does not count as failure or support. The arithmetic validates the specified bookkeeping behavior only; it does not validate human psychology, analyst accuracy or the model's generalization.

## 6. Local progress

IND-03.2 bounded note complete; IND-03 remains IN_PROGRESS. Overall 2/19 units and 4/36 directions closed within previously stated scopes. No independent personal prediction or external examination performed. Next IND-03.3: integrate IND-01, IND-02 and IND-03 into a compact nonclinical individual-model procedure; challenge the model with independent published evidence or a genuinely held-out exercise if available; decide bounded closure, preserving open causal and calibration limitations. Then WOM-01 only after that decision.
All content generic public science or synthetic methodology. No shared cabinet modifications. Inspect actual commit and PR state after write.
