# ANA-13 / PASS-01 — Basic cardio-respiratory anatomy revalidation

Дата: 2026-11-18  
Статус: **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**  
Область: 02 — Anatomy  
Topic: ANA-13 — Базовая cardio-respiratory anatomy

## 0. Source-of-truth / topic status

В текущей ветке `research/fitness-foundation` отдельного legacy finding-файла ANA-13 нет.

Текущий source-of-truth scope:

1. `research/fitness/areas/02_anatomy.md`, Section 15 — кровоснабжение, релевантное тренировке;
2. `research/fitness/areas/02_anatomy.md`, Section 16 — дыхательная анатомия;
3. `research/fitness/NORMALIZED_KNOWLEDGE_TREE.md` — **ANA-13 — Базовая cardio-respiratory anatomy**.

Exact area-map target:
- Section 15 = 6 items;
- Section 16 = 7 items;
- total = **13 items**.

---

## 1. Purpose / Question Card

### Decision

Создать structural map cardio-respiratory system, достаточную для последующего exercise physiology без превращения ANA-13 в:

- full angiology;
- cardiology;
- pulmonary physiology;
- vascular pathology;
- ventilation/perfusion modeling.

### Downstream dependency

ANA-13 directly supports:

- PHY exercise/cardiovascular/respiratory physiology;
- BIO oxygen delivery / energy-system context;
- REC recovery;
- TST heart-rate / respiratory / exercise-testing interpretation;
- MED cardiovascular/respiratory safety boundaries;
- MEC respiratory mechanics where structural context is required.

### Scope

Входит:

1. major upper-limb arterial and venous routes;
2. major lower-limb arterial and venous routes;
3. capillary/microvascular structural level;
4. heart chambers;
5. heart valves;
6. great vessels;
7. systemic and pulmonary circuits;
8. conducting airways;
9. lungs;
10. pleura;
11. diaphragm;
12. intercostal/accessory respiratory muscles;
13. thoracic cage as mechanical respiratory structure;
14. anatomy/physiology/medicine boundaries.

Не входит:

- cardiac output regulation;
- blood-pressure physiology;
- Frank–Starling mechanism;
- autonomic cardiovascular control;
- oxygen dissociation curve;
- ventilation/perfusion matching;
- diffusion-capacity physiology;
- respiratory muscle fatigue physiology;
- DVT/PAD/coronary/pulmonary disease diagnosis;
- exhaustive branch-level angiology.

---

## 2. Sources checked

### Cardiovascular / vascular anatomy

1. NCBI Bookshelf — **Anatomy, Thorax, Heart**.  
   https://www.ncbi.nlm.nih.gov/books/NBK470256/

2. NCBI Bookshelf — **Anatomy, Thorax, Heart Great Vessels**.  
   https://www.ncbi.nlm.nih.gov/books/NBK547680/

3. NCBI Bookshelf — **Anatomy, Thorax, Heart and Pericardial Cavity**.  
   https://www.ncbi.nlm.nih.gov/books/NBK482452/

4. NCBI Bookshelf — **Anatomy, Thorax, Pericardium**, updated 2026-02-14.  
   https://www.ncbi.nlm.nih.gov/books/NBK482256/

5. NCBI Bookshelf — **Anatomy, Shoulder and Upper Limb, Arm Structure and Function**.  
   https://www.ncbi.nlm.nih.gov/books/NBK507841/

6. NCBI Bookshelf — **Anatomy, Shoulder and Upper Limb, Forearm Arteries**.  
   https://www.ncbi.nlm.nih.gov/books/NBK545155/

7. NCBI Bookshelf — **Anatomy, Shoulder and Upper Limb, Veins**.  
   https://www.ncbi.nlm.nih.gov/books/NBK546676/

8. NCBI Bookshelf — **Anatomy, Bony Pelvis and Lower Limb: Arteries**.  
   https://www.ncbi.nlm.nih.gov/books/NBK544319/

9. NCBI Bookshelf — **Anatomy, Bony Pelvis and Lower Limb: Popliteal Vein**.  
   https://www.ncbi.nlm.nih.gov/books/NBK541078/

10. NCBI Bookshelf — **Anatomy, Bony Pelvis and Lower Limb, Foot Veins**.  
    https://www.ncbi.nlm.nih.gov/books/NBK542295/

11. NCBI Bookshelf — **Histology, Blood Vascular System**.  
    https://www.ncbi.nlm.nih.gov/books/NBK553217/

12. NCBI Bookshelf — **Histology, Capillary**.  
    https://www.ncbi.nlm.nih.gov/books/NBK546578/

13. Korthuis RJ — **Anatomy of Skeletal Muscle and Its Vascular Supply**.  
    https://www.ncbi.nlm.nih.gov/books/NBK57140/

### Respiratory anatomy

14. NCBI Bookshelf — **Anatomy, Airway**, updated 2025-09-15.  
    https://www.ncbi.nlm.nih.gov/books/NBK459258/

15. NCBI Bookshelf — **Histology, Lung**, updated 2025-04-06.  
    https://www.ncbi.nlm.nih.gov/books/NBK534789/

16. NCBI Bookshelf — **Anatomy, Thorax, Lungs**.  
    https://www.ncbi.nlm.nih.gov/books/NBK470197/

17. NCBI Bookshelf — **Anatomy, Thorax, Lung Pleura and Mediastinum**.  
    https://www.ncbi.nlm.nih.gov/books/NBK519048/

18. NCBI Bookshelf — **Anatomy, Thorax, Pleurae**.  
    https://www.ncbi.nlm.nih.gov/books/NBK541079/

19. NCBI Bookshelf — **Anatomy, Thorax: Diaphragm**.  
    https://www.ncbi.nlm.nih.gov/books/NBK519558/

20. NCBI Bookshelf — **Anatomy, Thorax, Phrenic Nerves**.  
    https://www.ncbi.nlm.nih.gov/books/NBK513325/

21. NCBI Bookshelf — **Anatomy, Thorax, Muscles**.  
    https://www.ncbi.nlm.nih.gov/books/NBK538321/

22. NCBI Bookshelf — **Anatomy, Thorax, Wall**.  
    https://www.ncbi.nlm.nih.gov/books/NBK535414/

23. NCBI Bookshelf — **Lung Imaging**, updated 2026-09-13; normal-anatomy section only.  
    https://www.ncbi.nlm.nih.gov/books/NBK558976/

### Source-quality note

This PASS uses current authoritative reference anatomy.

No claim is made that every branch-level vessel, bronchopulmonary segment or clinical variant has been exhaustively revalidated; that depth is not required for the current fitness-evidence dependency.

---

## 3. First rule — artery and vein are directional terms

### Artery
Carries blood **away from the heart**.

### Vein
Carries blood **toward the heart**.

Therefore:

- pulmonary arteries carry relatively deoxygenated blood from RV to lungs;
- pulmonary veins carry oxygenated blood from lungs to LA.

Project rule:

**artery ≠ “oxygenated vessel”; vein ≠ “deoxygenated vessel”.**

Oxygenation is a blood-content property, not the anatomical definition of artery/vein.

---

## 4. Systemic circulation — structural route

Canonical simplified route:

`LV → aortic valve → aorta → systemic arteries → arterioles → capillary beds → venules → systemic veins → SVC/IVC → RA`

Purpose at anatomy level:
- distribute blood from left heart to tissues;
- return blood to right heart.

Exact pressure/flow regulation → PHY.

---

## 5. Pulmonary circulation — structural route

Canonical route:

`RV → pulmonary valve → pulmonary trunk → right/left pulmonary arteries → pulmonary arterioles → alveolar capillary network → pulmonary veins → LA`

Important distinction:

Pulmonary circulation is anatomically separate from:
- systemic bronchial circulation supplying lung tissues.

The lungs therefore have:
1. pulmonary vascular circuit for gas-exchange blood flow;
2. bronchial/systemic vascular supply for lung/airway tissue.

Detailed shunt/VQ physiology → PHY/MED.

---

## 6. Heart location / coverings

Heart:
- muscular organ in middle mediastinal compartment;
- enclosed by pericardial structures;
- lies between pleural cavities.

Pericardial organization:
- fibrous pericardium;
- serous parietal layer;
- serous visceral layer / epicardium;
- potential pericardial cavity between serous layers.

Project rule:

**pericardium is a structural enclosure, not a generic “bag around the heart”.**

Pressure-volume/pericardial disease → PHY/MED.

---

## 7. Heart wall — minimum structural level

Broad layers:

1. endocardium;
2. myocardium;
3. epicardium / visceral serous pericardium.

Myocardium is the principal contractile cardiac-muscle layer.

Coronary vessels supply/drain the myocardium.

Detailed myocardial cellular physiology → PHY.

---

## 8. Four chambers

Canonical:

1. right atrium;
2. right ventricle;
3. left atrium;
4. left ventricle.

### Right atrium
Receives systemic venous return mainly from:
- SVC;
- IVC;
- coronary sinus.

### Right ventricle
Ejects into pulmonary trunk.

### Left atrium
Receives pulmonary venous return.

Typical gross anatomy:
- four pulmonary veins, two from each lung, enter LA; anatomical variants can occur.

### Left ventricle
Ejects into aorta.

Project rule:

**right heart primarily feeds pulmonary circulation; left heart primarily feeds systemic circulation.**

Hemodynamic pressure differences → PHY.

---

## 9. Four heart valves

### Atrioventricular

1. **Tricuspid** — RA ↔ RV.
2. **Mitral/bicuspid** — LA ↔ LV.

AV valve apparatus includes:
- leaflets;
- annular/fibrous attachment;
- chordae tendineae;
- papillary muscles.

### Semilunar

3. **Pulmonary** — RV → pulmonary trunk.
4. **Aortic** — LV → aorta.

Semilunar valves:
- have cusps;
- do **not** use chordae tendineae/papillary muscles like AV valves.

Project rule:

**valves structurally permit directional flow; opening/closing is pressure-driven physiology, not active valve-muscle pumping.**

Detailed valve dynamics → PHY/MED.

---

## 10. Great vessels

Project-relevant great vessels:

1. ascending aorta / aortic root;
2. superior vena cava;
3. inferior vena cava;
4. pulmonary trunk / pulmonary arteries;
5. pulmonary veins.

Useful flow map:

`SVC/IVC → RA → RV → pulmonary trunk/arteries → lungs → pulmonary veins → LA → LV → aorta`

Coronary circulation is a separate systemic branch supplying the heart itself.

---

## 11. Coronary circulation — minimum boundary

At anatomy level:

- right and left coronary arteries arise near the aortic root;
- coronary branches supply myocardium;
- most cardiac venous return reaches RA through coronary sinus, with additional direct small cardiac veins.

Project reason for inclusion:

**heart muscle requires its own vascular supply; blood inside cardiac chambers does not directly “feed” the myocardium.**

Detailed ischemia/coronary dominance/pathology → MED.

---

## 12. Upper-limb arterial route

Canonical large-vessel chain:

`subclavian → axillary → brachial → radial + ulnar → palmar arterial networks`

Useful landmarks:

- subclavian → axillary around lateral border of first rib;
- axillary → brachial at inferior/lower border of teres major;
- brachial divides near cubital-fossa region into radial/ulnar arteries.

Important branches for musculoskeletal anatomy include:
- profunda brachii;
- interosseous branches;
- circumflex humeral branches.

Project rule:

**ANA-13 requires the major route, not memorization of every named arterial branch.**

---

## 13. Upper-limb venous route

Two interacting systems:

### Deep
Broadly follows arteries:
- radial/ulnar venae comitantes;
- brachial veins;
- axillary vein;
- subclavian vein;
- brachiocephalic veins;
- SVC.

### Superficial
Major:
- cephalic;
- basilic;
- median cubital connection.

Superficial and deep networks communicate.

Project rule:

**upper-limb venous anatomy is not a mirror-image single-vein copy of the arterial tree.**

---

## 14. Lower-limb arterial route

Canonical major chain:

`external iliac → femoral → popliteal → anterior tibial + posterior tibial systems → dorsalis-pedis / plantar-foot arterial networks`

Important:
- profunda femoris supplies major deep thigh territory;
- fibular/peroneal arterial system contributes lateral/posterior leg supply;
- popliteal artery is a major conduit behind knee.

Project rule:

**major limb route is enough for fitness anatomy; exhaustive genicular/plantar branch taxonomy is deferred.**

---

## 15. Lower-limb venous route

### Deep

Broadly:
- anterior tibial;
- posterior tibial;
- fibular/peroneal veins;
- popliteal;
- femoral;
- external iliac;
- common iliac;
- IVC.

### Superficial

Major:
- great saphenous → femoral region;
- small saphenous → commonly popliteal region.

Perforating veins connect superficial and deep systems.

Project rule:

**superficial and deep venous systems are structurally distinct but connected.**

Valve/pump physiology and DVT risk → PHY/MED.

---

## 16. Capillary / microvascular structural level

Canonical sequence:

`small artery → arteriole → capillary network → postcapillary venule → vein`

Capillary wall:
- very thin endothelial layer;
- basement membrane/basal lamina;
- pericytes associated with microvascular wall.

In skeletal muscle:
- capillaries are mainly continuous;
- many run longitudinally near myofibers;
- capillary network is structurally suited for blood–tissue exchange.

Project rule:

**capillaries are the principal exchange-level vascular structures; they are not miniature muscular arteries.**

Flow regulation/metabolite signaling/capillary recruitment → PHY.

---

## 17. Vessel-wall hierarchy — minimum

Useful gross structural distinction:

### Arteries
Thicker muscular/elastic wall relative to comparable veins.

### Arterioles
Small resistance-vessel structure with smooth-muscle wall.

### Capillaries
Primarily endothelial exchange barrier.

### Venules
Collect capillary outflow.

### Veins
Thinner wall / larger capacitance relative to arteries; many peripheral veins contain valves.

Project boundary:

Hemodynamics/compliance/resistance equations → PHY.

---

## 18. Conducting vs respiratory airway

A useful anatomical division:

### Conducting portion
Broad route:

`nose/oral entry → pharynx → larynx → trachea → bronchi → bronchioles → terminal bronchioles`

### Respiratory portion
Begins distally with:
- respiratory bronchioles;
- alveolar ducts;
- alveolar sacs/alveoli.

Project rule:

**not every airway conducts gas exchange; major alveolar gas-exchange structures are distal.**

Exact upper-vs-lower-airway naming conventions can vary; the conducting-to-respiratory transition is more useful for project purposes.

---

## 19. Tracheobronchial tree

Canonical branching hierarchy:

1. trachea;
2. right/left main bronchi;
3. lobar bronchi;
4. segmental bronchi;
5. progressively smaller bronchi;
6. bronchioles;
7. terminal bronchioles;
8. respiratory bronchioles;
9. alveolar ducts/sacs.

Project rule:

**airways form a branching tree rather than a single tube to each lung.**

Airway resistance/control → PHY/MED.

---

## 20. Lungs

Paired thoracic organs flanking mediastinum.

### Right lung
- superior;
- middle;
- inferior lobes.

### Left lung
- superior;
- inferior lobes;
- cardiac indentation/lingular region.

Each lung has:
- apex;
- base;
- costal/mediastinal/diaphragmatic relationships;
- hilum/root transmitting bronchovascular structures.

Project rule:

**lobes are gross anatomical units; bronchopulmonary segments are more detailed subdivisions and do not need exhaustive memorization for current fitness use.**

---

## 21. Alveolar / blood-gas structural interface

Alveoli are terminal gas-exchange units.

At structural level, the gas-exchange interface involves:
- thin alveolar epithelial surface;
- basement-membrane/interstitial interface;
- pulmonary capillary endothelium.

Type I pneumocytes form most thin gas-exchange surface.

Type II pneumocytes are structurally distinct secretory alveolar cells.

Project boundary:

Diffusion, surfactant physiology and gas-transfer rates → PHY.

---

## 22. Pulmonary vs bronchial vascular supply

### Pulmonary circulation
Carries the cardiac output from right heart through alveolar capillaries for gas exchange.

### Bronchial circulation
Systemic arterial supply to airway/lung supporting tissues.

Project rule:

**lung vascular anatomy is dual; pulmonary arteries are not the only vessels supplying lung tissue.**

Detailed shunt implications → PHY.

---

## 23. Pleura

Two serous layers:

### Visceral pleura
Directly covers lung surface/fissures.

### Parietal pleura
Lines:
- thoracic wall;
- diaphragm;
- mediastinal surface;
- cervical pleural region.

Between them:
- pleural cavity = potential space with small lubricating fluid volume.

Right and left pleural cavities are anatomically separate.

Project rule:

**pleura couples moving lung surface to thoracic cavity while permitting low-friction motion; it is not lung parenchyma.**

Pressure physiology / pneumothorax / effusion → PHY/MED.

---

## 24. Diaphragm — cross-reference ANA-07

ANA-07 already established detailed trunk/pressure anatomy.

ANA-13 retains only respiratory dependency:

- dome-shaped musculotendinous thoracoabdominal partition;
- sternal/costal/lumbar attachments;
- central tendon;
- principal inspiratory muscle;
- motor innervation primarily via phrenic nerves C3–C5.

Major openings:
- caval;
- esophageal;
- aortic.

Project rule:

**ANA-13 does not reopen detailed diaphragm anatomy already owned by ANA-07.**

Ventilatory mechanics / fatigue → PHY/MEC.

---

## 25. Intercostal muscles

Three primary layers:

1. external intercostals;
2. internal intercostals;
3. innermost intercostals.

Related thoracic-wall muscles:
- subcostals;
- transversus thoracis.

Broad structural role:
- span/stabilize intercostal spaces;
- contribute to rib-cage motion and respiratory volume change.

Project caution:

**“external = inspiration, internal = expiration” is too crude as a universal whole-muscle rule because action depends on fiber region, rib mechanics and task.**

Detailed respiratory mechanics → MEC/PHY.

---

## 26. Accessory respiratory muscles

Potential inspiratory contributors under increased demand / fixed-girdle conditions include:
- sternocleidomastoid;
- scalenes;
- pectoral muscles;
- serratus anterior;
- levatores costarum and other thoracic muscles depending task.

Forced-expiratory contributors include:
- abdominal wall;
- internal/innermost intercostal portions;
- other rib-depressing muscles depending task.

Project rule:

**“accessory” is a functional/task label, not a separate anatomical muscle class.**

---

## 27. Thoracic cage as a mechanical structure

Structural components:
- thoracic vertebrae;
- ribs;
- costal cartilages;
- sternum;
- costovertebral/costotransverse and sternocostal relationships;
- intercostal muscles;
- diaphragm.

Respiratory role:
- provides deformable protective framework around heart/lungs;
- permits changes in thoracic dimensions.

ANA-03 already owns detailed axial/rib-cage skeleton.

Project rule:

**ANA-13 cross-references ANA-03 rather than duplicating full thoracic skeletal anatomy.**

Pump-handle/bucket-handle quantification → MEC/PHY.

---

## 28. Thorax / mediastinum / pleural-cavity relation

Thoracic cavity can be understood as:

1. central mediastinum;
2. right pleural cavity;
3. left pleural cavity.

Mediastinum contains:
- heart/pericardium;
- great vessels;
- tracheal/esophageal and other central thoracic structures.

Pleural cavities contain lungs within pleural sacs.

This structural map explains why heart, lungs and great vessels are mechanically adjacent but anatomically distinct.

---

## 29. Major circulation–respiration integration

Structural flow path:

`systemic veins → RA → RV → pulmonary arteries → alveolar capillary bed → pulmonary veins → LA → LV → systemic arteries → tissue capillaries → systemic veins`

Air path:

`environment → conducting airways → respiratory bronchioles → alveoli`

Integration site:
- alveolar–capillary interface.

Project rule:

**ANA-13 establishes where circulation and respiration meet; how much O₂/CO₂ moves is physiology.**

---

## 30. Training-relevant vascular landmarks

Structural relevance only:

### Upper limb
- axillary/brachial/radial/ulnar route;
- cephalic/basilic/median cubital superficial veins.

### Lower limb
- femoral/popliteal/tibial arterial routes;
- great/small saphenous + deep venous routes.

These matter later for:
- pulse/measurement landmarks;
- cuff/testing context;
- understanding local blood supply/return.

Project rule:

**an anatomical landmark is not a vascular diagnosis.**

---

## 31. Exercise-related muscle blood supply — structural minimum

Skeletal muscle receives:
- arteries → arterioles → capillary networks around myofibers;
- venous drainage through venules/veins.

Capillary density/distribution can differ among muscles and tissue regions.

Project boundary:

Exercise hyperemia, vascular conductance, angiogenesis and capillary recruitment → PHY.

---

## 32. Anatomy vs cardiovascular physiology boundary

ANA-13 can establish:
- vessel routes;
- chamber/valve relations;
- circulation topology;
- capillary architecture.

It does **not** determine:
- cardiac output;
- stroke volume;
- heart-rate response;
- blood pressure;
- venous return dynamics;
- vascular resistance;
- exercise hyperemia.

Those belong to PHY.

---

## 33. Anatomy vs respiratory physiology boundary

ANA-13 can establish:
- airway branching;
- lung/pleural structure;
- respiratory muscles;
- thoracic cage;
- alveolar-capillary location.

It does **not** determine:
- tidal volume;
- minute ventilation;
- work of breathing;
- diffusion capacity;
- V/Q matching;
- respiratory drive;
- blood-gas regulation.

Those belong to PHY.

---

## 34. Anatomy vs medicine boundary

Anatomy can identify where structures are.

ANA-13 does not diagnose:
- coronary artery disease;
- peripheral arterial disease;
- DVT/venous insufficiency;
- valve disease;
- cardiomyopathy;
- asthma/COPD;
- pulmonary embolism;
- pleural disease;
- pneumothorax.

Project rule:

**symptoms, pulse changes, swelling, dyspnea or chest pain cannot be converted into diagnosis from anatomy alone.**

Clinical thresholds/red flags → MED.

---

## 35. Normal variation boundary

Relevant normal variation includes:
- heart orientation/position;
- vessel branching patterns;
- superficial venous patterns;
- pulmonary-vein anatomy;
- bronchial branching;
- accessory fissures/lobar morphology;
- respiratory-muscle variants.

Project rule:

**textbook branching is modal, not identical in every person.**

Only variation that changes a downstream fitness decision should later be expanded.

---

## 36. What is deliberately not expanded

Deferred by purpose gate:

1. every named artery/vein branch;
2. full coronary-segment taxonomy;
3. lymphatic anatomy beyond necessary boundaries;
4. detailed bronchopulmonary segment enumeration;
5. pulmonary autonomic plexus;
6. full cardiac conduction anatomy;
7. embryology;
8. detailed microvascular cell taxonomy;
9. clinical imaging criteria.

These are not current blockers for exercise-physiology evidence interpretation.

---

## 37. Area-map coverage check

### Section 15 — Кровоснабжение, релевантное тренировке

1. arteries/veins upper limb — **covered**;
2. arteries/veins lower limb — **covered**;
3. capillary bed structural level — **covered**;
4. heart chambers/valves/great vessels — **covered**;
5. systemic/pulmonary circulation — **covered**;
6. normal anatomy vs clinical vascular medicine boundary — **covered**.

Result: **6/6**.

### Section 16 — Дыхательная анатомия

1. airways — **covered**;
2. lungs — **covered**;
3. pleura — **covered**;
4. diaphragm — **covered / cross-referenced to ANA-07**;
5. intercostal muscles — **covered**;
6. accessory respiratory muscles — **covered**;
7. thoracic cage mechanical structure — **covered / cross-referenced to ANA-03**.

Result: **7/7**.

Total:
**13/13 area-map items covered at content level.**

---

## 38. Established findings

### HIGH

1. Artery/vein definitions depend on direction relative to heart, not oxygenation.
2. Systemic and pulmonary circulations form serially linked circuits through right/left heart.
3. Heart has four chambers and four major valves with AV vs semilunar structural distinction.
4. Great vessels connect heart to systemic/pulmonary circuits.
5. Major upper-limb route = subclavian → axillary → brachial → radial/ulnar.
6. Major lower-limb route = external iliac/femoral → popliteal → tibial/fibular systems.
7. Limb venous return uses interacting superficial + deep systems.
8. Capillaries are thin endothelial exchange vessels between arteriolar and venular systems.
9. Conducting airway and respiratory/alveolar portions are structurally distinct.
10. Right lung has three lobes; left lung two.
11. Pleura has visceral/parietal layers with a potential pleural cavity.
12. Diaphragm is the principal inspiratory muscle.
13. Intercostal/accessory muscles and deformable thoracic cage contribute to respiratory mechanics.

### MODERATE / VARIATION-DEPENDENT

1. Exact vascular branching patterns.
2. Exact superficial venous patterns.
3. Exact pulmonary-vein configuration.
4. Exact bronchial/fissural morphology.
5. Exact accessory-muscle contribution during a specific exercise.

---

## 39. Unresolved / deferred

No current content blocker requires expansion into physiology or medicine.

Deferred:

1. cardiac-output regulation → PHY;
2. vascular resistance/compliance → PHY;
3. exercise hyperemia → PHY;
4. venous return/muscle pump → PHY;
5. ventilation mechanics → PHY/MEC;
6. V/Q and diffusion → PHY;
7. respiratory muscle fatigue → PHY;
8. cardiovascular/respiratory pathology → MED;
9. vascular/respiratory exercise testing → TST;
10. detailed thoracic mechanics → MEC.

---

## 40. Current status / next block

ANA-13 core content is **REVALIDATED AT CONTENT LEVEL**.

No legacy ANA-13 finding exists in the current branch, so closure must create the first canonical finding after a separate audit.

Next one block:

**ANA-13 closure audit / synthesis**

Audit must verify:

1. all 13 exact area-map items are covered;
2. major upper/lower limb vascular routes are sufficient without unnecessary angiology;
3. artery/vein oxygenation terminology is correct;
4. four-chamber/four-valve/great-vessel map is internally consistent;
5. systemic/pulmonary/bronchial circulation distinctions are clear;
6. airway/lung/pleura map is complete enough for exercise physiology;
7. diaphragm/thoracic-cage ownership correctly cross-references ANA-07/ANA-03;
8. respiratory-muscle wording does not overstate simple inspiratory/expiratory binaries;
9. anatomy/PHY/MED boundaries are preserved;
10. ledger wording is sufficient;
11. canonical `ANA-13_cardio_respiratory_anatomy.md` can be created as v2.0.

Do not start ANA-14 in this same working block.
