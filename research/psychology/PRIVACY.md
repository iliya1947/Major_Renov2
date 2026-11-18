# PRIVACY.md — No Personal Data in Repository

## 1. Non-negotiable rule

This psychology research branch is **public-science / generic-methodology only**.

No user-derived personal data may be written to repository files, commit messages, branch names, pull-request title/body, review comments, issues, or examples.

## 2. Prohibited content

Do not store:

1. names or aliases tied to the user;
2. exact age, birthday, address, location, workplace, school, contacts, account identifiers, or other identifiers;
3. private messages, screenshots, quotes, diary material, photos, voice material, or transcripts;
4. health, mental-health, diagnostic, medication, substance-use, sexual, legal, financial, relationship, family, or trauma information;
5. personal behavioral incidents or distinctive life stories;
6. user-specific cognitive, personality, intelligence, risk, or psychological estimates;
7. the private psychological model itself;
8. combinations of seemingly harmless facts that could re-identify the user;
9. pseudonymized versions of private facts when the underlying event is still user-derived.

## 3. Allowed content

Allowed:

1. public scientific literature and bibliographic metadata;
2. generic summaries of psychological constructs;
3. generic evidence-appraisal methods;
4. generic decision frameworks;
5. empty templates with neutral placeholders;
6. synthetic examples that are not derived from the user;
7. research state and task routing that contain no private facts.

## 4. Transformation gate

If private project material motivates a scientific question:

1. strip all personal context;
2. reformulate it as a population-level or mechanism-level question;
3. verify that the question cannot reveal the originating person or event;
4. only then store the generic question.

Example:

- prohibited: a question describing a specific private incident;
- allowed: "What is the evidence on expressive versus suppressive emotion-regulation strategies?"

## 5. Pre-commit privacy audit

Before every write, ask:

1. Did any phrase originate from a private user disclosure?
2. Does the diff contain a direct or indirect identifier?
3. Does it encode a unique event, health fact, relationship fact, or behavioral history?
4. Could a reader infer something private about the user from this change?

If any answer is yes or uncertain, do not commit it.

## 6. Separation of systems

- **GitHub repository:** generic scientific knowledge and research operations only.
- **Private ChatGPT project:** individualized psychological observations and working personal model.

Do not use GitHub as storage for the private model.
