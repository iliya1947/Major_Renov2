# FINAL-03 — Participant-disjoint external outcome transfer

Date: 2026-11-27.
Status: event-held-out and participant-disjoint retrospective evaluation executed on a second public dataset; REVIEW_REQUIRED for independent competence assessment and prospective validation.
Dependency: FINAL-02 recovered at 589d5615ce93008055716ceba3bc56055b361a65. Concurrent changes before persistence inspected at 38beecf6ab97994074163612de792d575cbb7a30; no changes in this specialist directory. Existing work preserved.

## 1. Source and access

Question: does adding age difference or similarity of five personality scores improve the prediction of reported encounter-level liking on participants absent from training?
Attempts to retrieve fuller Columbia speed-dating data failed: Rdatasets csv/peopleanalyticsdata/speed_dating.csv and csv/sdamr/speeddate.csv returned 404, R-universe direct CSV request failed DNS resolution. Public search and documentation: https://github.com/datasets/speed-dating ; https://search.r-project.org/CRAN/refmans/peopleanalyticsdata/html/speed_dating.html ; https://rdrr.io/github/mspeekenbrink/sdam-r/src/helpers/speeddate.R . No new Columbia results claimed.

Alternative: Mixmosa public service dataset (not peer-reviewed replication), documented at https://github.com/dankras/mixmosa-anonymized-data . The README describes eight-minute in-person dates, post-encounter yes/no liking, pre-attendance questions and derived participant features. The README headline says 2,961 dates, while the actual interaction file has 1,895 rows. Discrepancy unresolved; computations use actual file. Source pinned at 48676f40689fe5f41faa9d875e18320880725633 (2023-08-31).
- csv/interactions.csv blob c4aba45888dc07573b6bd12554f73fb57ebb0479: 1,895 rows, event_id, male_user_id, female_user_id, two directional decisions, mutual_interest.
- csv/user_features.csv blob 99679f0e33b55099a4a0705810dd9771019554d0: 2,553 records. Only joining IDs, age and five trait scores used.
- csv/attendance.csv blob 790438412a478d89ac133febdf38c79d8d94a4d6: 590 rows; inspected header/count only, not used in eligibility or predictions.

Derived features lack encounter-specific timestamps. Questionnaire described as preceding attendance, but availability of the exact derived features before each encounter is not independently verified. No post-date ratings used as predictors. Three-point recoded trait scores are documented, not independently psychometrically validated. Target is reported liking, not actual future dating, love, consent to other activities or durable relationship success.

## 2. Evaluation fixed before calculation

Prespecified in a separate tool execution before aggregate outcomes:
- Parse quoted CSV; require unique encounter (event,male,female) and participant-feature keys. Both directional decisions must be binary. Both ages finite [18,100]; complete-case additionally all five scores finite positive for both participants. No imputation. Age-only sensitivity without trait requirement.
- Leave one event out. Purge all encounters outside the held-out event sharing ANY participant with its raw test rows, before filtering. Assert zero train/test participant overlap and event separation. Skip and report folds without eligible train/test or usable trait SD.
- M0 pooled event probability; M1 decision-direction-specific baseline (male-to-female and female-to-male).
- M2 M1 plus absolute age gap bins <=3, >3–7, >7.
- M3 M1 plus mean absolute standardized five-trait distance. Use population SD per trait among unique eligible training participants only. Average abs(a-b)/SD across five traits (mean centering cancels). Bins <=.5, >.5–1, >1. Not a validated compatibility construct.
- All probabilities (yes+1)/(n+2); empty bins fall back to direction baseline. No test labels in fitting. Primary Brier, secondary log loss, descriptive accuracy at p>=.5. Report row-weighted and equal-event Brier and event wins/losses versus M1. No tuning after evaluation, no naive independent-row or independent-event CI; test participants can recur across folds and training sets overlap.

## 3. Actual execution

JavaScript parser verified row widths and unique keys, joined records, applied fixed eligibility and purging rules, and evaluated each fold. 1,895 encounters, 30 events, 410 distinct participants; 7 encounters missing matched feature records, zero invalid binary outcomes, 1,888 age-valid, 1,242 complete-case encounters. No raw participant records published.

Complete-case 25 evaluated events, 5 skipped (no eligible test rows), 2–100 test encounters/event, 1,094–1,222 training encounters/fold; 2,484 held-out directed decisions. Raw purge count summed across folds 1,807 (not unique encounters). Maximum evaluated-fold participant intersection: ZERO.

| Model | Brier | Log loss | Accuracy | Equal-event Brier |
|---|---:|---:|---:|---:|
| M0 pooled | .238427 | .669855 | .609903 | .240666 |
| M1 direction | .232182 | .656770 | .609903 | .232414 |
| M2 age gap | .232233 | .656355 | .591385 | .230979 |
| M3 trait distance | .233160 | .658867 | .596216 | .233556 |

Event wins/losses versus M1: M0 9/16; M2 15/10; M3 11/14; zero ties. M2 marginally worse on primary Brier, better on secondary log loss and equal-event Brier. M3 worse on all loss summaries.

Age-only sensitivity: 30 evaluated events, none skipped; 30–100 test encounters/event; 1,621–1,852 training encounters/fold; 3,776 held-out directed decisions; max participant intersection ZERO.

| Model | Brier | Log loss | Accuracy | Equal-event Brier |
|---|---:|---:|---:|---:|
| M0 | .243223 | .679548 | .584746 | .243564 |
| M1 | .231514 | .655281 | .612288 | .232754 |
| M2 | .231280 | .654389 | .603549 | .232377 |

Event wins/losses M0 6/24, M2 17/13 vs M1. Age-gap advantage tiny and metric/sample dependent, not robust large gain.

Reproduce: fetch pinned CSVs, assert unique keys and valid widths, join IDs, form raw test participant set for each event, purge candidate train rows containing any held-out person, filter eligible train/test, assert empty intersection, fit smoothed role/bin probabilities and training-only SDs, score both directions for every eligible held-out encounter, sum losses across all scored decisions and separately average event losses. Do not retune bins or score after inspecting outcomes.

## 4. Interpretation and critical review

This resolves the within-fold participant overlap problem for the alternative dataset, not retroactively for FINAL-02. Direction baseline beats pooled; tested trait-distance measure fails to improve it. Age gap yields mixed/tiny gains. Negative result retained. Does NOT establish personality irrelevant, universal gender preferences, causal effect of similarity, future relationship prediction or personal calibration. Different populations, missingness and target measurement prohibit direct comparison of numerical scores across the two datasets. Reported yes/no interest is not independently observed future action. Derived feature timing unverified, so prospective prediction remains unestablished. Equal-event summaries are descriptive dependence-aware checks, not cluster confidence intervals. A defensible interval would require accounting for shared participants across events and overlapping training folds; no unsupported precision claimed.

No within-fold ID overlap detected, no outcome-driven tuning, no post-date ratings used; no personal diagnosis or causal claim. This is a self-designed external-data evaluation, not an independent examination of competence.

## 5. Status and next action

Prior 19/19 research units, 36/36 directions and internal FINAL remain unchanged. FINAL-02 and FINAL-03 add actual externally collected outcomes; the latter establishes participant-disjoint retrospective evaluation within a different source. REVIEW_REQUIRED remains: prospective feature provenance, calibrated prediction on new populations, uncertainty respecting the network structure and independent qualification are unresolved. Stop serial self-generated benchmarks absent a concrete unresolved question. Next action only if genuinely available: independently authored novel multidomain tasks or genuinely temporally verified prospective data with independent outcome definition and dependence-aware assessment. If unavailable retain limitations; do not claim certification.

Privacy/scope: public source metadata, aggregate counts/scores and generic evaluation method only. No raw records, private material, individual profiles or other workstream changes. One new specialist file. Verify commit, PR HEAD and file readback.
