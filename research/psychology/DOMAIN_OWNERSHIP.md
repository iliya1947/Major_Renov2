# Domain Ownership — cross-domain routing

Назначение: снижать duplication и не превращать пересечения в новые лишние блоки.

| Topic family | Canonical owner | Dependent domains |
|---|---|---|
| attention, memory, reasoning, language | COG | EXE, MET, DEV, NEU |
| inhibition, switching, control | EXE | COG, MET, NDEV, NEU |
| confidence, self-monitoring, metacognition | MET | COG, EXE, DEC |
| conditioning, prediction error, habit, extinction | LEA | MOT, AFF, BHC, NEU |
| reward, effort, goal pursuit, autonomy | MOT | LEA, AFF, BHC |
| emotion generation/regulation | AFF | STR, SOC, CLN |
| stress, coping, allostatic concepts | STR | AFF, DEV, CLN |
| social cognition, empathy, mentalizing | SOC | AFF, REL, PER |
| personality / stable individual differences | PER | DEV, SOC, CLN |
| lifespan/developmental change | DEV | all substantive domains |
| neural implementation/mechanistic boundary | NEU | COG, EXE, LEA, AFF, etc. |
| measurement, scores, reliability, invariance | PSYCHOMETRICS | all domains |
| psychopathology classification/course | CLN | NDEV, SAF, BHC |
| neurodevelopmental conditions | NDEV | EXE, COG, DEV, CLN |
| behavior change/intervention mechanisms | BHC | LEA, MOT, AFF, STR |
| attachment/conflict/communication | REL | SOC, AFF, PER |
| judgment/heuristics/risk decisions | DEC | COG, MET, MOT |
| crisis/referral thresholds | SAF | CLN, NDEV, ETH |
| ethics/privacy/AI individualized inference | ETH | all domains |

## Routing rules

1. Shared topic does not require duplicate full treatment.
2. Canonical owner stores core theory.
3. Dependent domain stores only what changes its own inference.
4. Measurement claims route to PSYCHOMETRICS.
5. Clinical classification routes to CLN/NDEV.
6. Crisis/referral overrides fine-grained interpretation and routes to SAF.
7. User-specific application never becomes a new repo domain; it stays private.
