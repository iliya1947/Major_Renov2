# Статус областей

Краткая матрица состояния по каждой крупной области.

Статусы:
- `NOT_AUDITED` — область ещё не прошла отдельный аудит полноты.
- `AUDITING` — аудит идёт.
- `MAP_READY` — карта тем области предварительно готова.
- `RESEARCHING` — идёт системное исследование.
- `RESEARCH_COMPLETE` — все канонические темы области прошли глубокое исследование текущей версии.
- `SUFFICIENT_FOR_NEXT_PHASE` — область имеет достаточный operational baseline, чтобы не блокировать downstream research; оставшиеся неблокирующие темы проверяются по триггеру.
- `SYNTHESIZED` — основные выводы синтезированы.
- `APPLIED` — выводы использованы в персональной программе.

| № | Область | Аудит карты | Исследование | Синтез | Применение |
|---|---|---|---|---|---|
| 01 | Медицина и безопасность | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 02 | Анатомия | MAP_READY | RESEARCHING | NOT_STARTED | NOT_STARTED |
| 03 | Общая и мышечная физиология | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 04 | Нейрофизиология и моторное обучение | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 05 | Биоэнергетика | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 06 | Биомеханика | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 07 | Программирование тренировок | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 08 | Техника и выбор упражнений | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 09 | Тестирование и мониторинг | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 10 | Восстановление | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 11 | Питание и добавки | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 12 | Психология, СДВГ и приверженность | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 13 | Методология исследований | MAP_READY | SUFFICIENT_FOR_NEXT_PHASE | NOT_STARTED | NOT_STARTED |
| 14 | Индивидуализация и принятие решений | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |
| 15 | Общая физическая подготовка | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |

| 16 | Коучинг, реализация и профессиональная практика | MAP_READY | NOT_STARTED | NOT_STARTED | NOT_STARTED |

Обновлять после каждого завершённого аудита или смены этапа.
