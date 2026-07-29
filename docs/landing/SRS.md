# SRS — Landing

Module: `landing`
Last updated: 2025-07-18
Design: [View the approved design](http://localhost:8080/design/6c6270ce-df00-4ed3-9632-94661bc1b689)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

The Landing module is the single-page marketing site for "Hello Word". It
introduces visitors to the product's value proposition via a hero headline,
showcases key features in a grid, captures leads through a contact form, and
provides navigation and brand closure in a footer. Without this module the
product has no public-facing presence.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Anyone on the public web | Browse all sections, submit the contact form |

There is no authentication; every action is available to an anonymous visitor.

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Hero section
- Features section
- CTA with contact form
- Footer

**Out of scope:**

- User accounts or authentication — the contact form sends email; there is no login, no session, and no user database.
- Blog, documentation, or sub-pages — the landing is a single page.
- Server-side submission handling — the contact form posts to a mailto or a third-party form service; no backend endpoint is built.
- Analytics or cookie banners — not part of this build.

## 4. Functional requirements

### 4.1 Hero section

**Requirement LAND-001 — Display hero with headline, subtitle and CTA button**

*As a* Visitor, *I want to* see a full-width hero section with a headline, a subtitle, and a prominent button, *so that* I immediately understand the product's value and know where to click next.

Behaviour:

1. The page loads and the hero is the first visible section, occupying the full viewport height (100vh) on desktop.
2. The headline displays the brand name "Hello Word" in large bold type.
3. The subtitle displays a short value proposition below the headline.
4. A CTA button reading "Get in touch" (or similar) is rendered below the subtitle.
5. The background uses a gradient or solid brand colour with visual contrast so text is readable.
6. The page scrolls smoothly to the contact form section when the CTA button is clicked.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A visitor loads the landing page | The hero section is rendered | It is the first visible section and spans full viewport width |
| AC-2 | The hero is displayed | The visitor reads the headline | The text "Hello Word" is present in large bold type |
| AC-3 | The hero is displayed | The visitor reads the subtitle | A value-proposition subtitle is visible below the headline |
| AC-4 | The hero is displayed | The visitor clicks the CTA button | The page scrolls smoothly to the contact form section |
| AC-5 | The page is viewed on a mobile device (320px – 767px) | The hero renders | All text and button are visible without horizontal scroll, layout stacks vertically |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Loading | Page is still loading | A loading state (skeleton or spinner) is displayed |
| Very long headline | Heading text is longer than expected | It wraps onto multiple lines; no text clipping or overflow |

**Data touched**

None — this section is static content.

---

### 4.2 Features section

**Requirement LAND-002 — Display feature cards in a grid**

*As a* Visitor, *I want to* see a grid of feature cards with icons, titles, and short descriptions, *so that* I quickly understand the product's capabilities.

Behaviour:

1. The features section appears below the hero.
2. A section heading (e.g. "Key Features") introduces the grid.
3. The grid displays six feature cards in a three-column layout on desktop.
4. Each card contains an icon (or illustration), a title, and a one-to-two-line description.
5. On tablet (768px–1023px) the grid collapses to two columns.
6. On mobile (≤767px) the grid collapses to a single column.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The features section is rendered | The visitor views it | A section heading is shown above the grid |
| AC-2 | The features section is rendered on desktop (≥1024px) | The visitor views the grid | Exactly six cards are displayed in a three-column layout |
| AC-3 | Each card is displayed | The visitor reads the card | It contains an icon, a title, and a short description |
| AC-4 | The page is viewed on a tablet (768–1023px) | The grid renders | Cards arrange in two columns |
| AC-5 | The page is viewed on a mobile (≤767px) | The grid renders | Cards stack in a single column |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Missing icon | An icon resource fails to load | A fallback placeholder is shown; the card layout is preserved |

**Data touched**

None — this section is static content.

---

### 4.3 CTA with contact form

**Requirement LAND-003 — Display a call-to-action section with a contact form**

*As a* Visitor, *I want to* fill in a contact form with my name, email, and message, *so that* I can reach out to the team.

Behaviour:

1. The CTA section appears below the features section, with a heading and descriptive text encouraging the visitor to get in touch.
2. The contact form contains three fields:
   - **Name** — text input, required, max 100 characters.
   - **Email** — email input, required, validated for format.
   - **Message** — textarea, required, max 1000 characters.
3. A submit button labelled "Send" is present.
4. **Inline validation:** Each field shows an error message below it when the visitor tries to submit with invalid or empty data. Errors appear inline next to the field.
5. **Success state:** On valid submission, the form displays a success message (e.g. "Thanks — we'll get back to you soon") and the form fields are hidden or cleared.
6. **Error state:** If submission fails (e.g. network error), an inline error message is shown and the form data is preserved.
7. Form submission sends the data via email (mailto link or third-party form service — no custom backend endpoint).
8. The CTA section includes the button referenced by the hero's smooth-scroll anchor.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The CTA section is rendered | The visitor views it | A heading, descriptive text, and three form fields are visible |
| AC-2 | The visitor submits the form | All fields are valid | A success message replaces the form; the data is sent |
| AC-3 | The visitor submits the form | The name field is empty | An inline error "Name is required" appears below the name field; nothing is sent |
| AC-4 | The visitor submits the form | The email field contains an invalid format | An inline error "Please enter a valid email" appears below the email field; nothing is sent |
| AC-5 | The visitor submits the form | The message field is empty | An inline error "Message is required" appears below the message field; nothing is sent |
| AC-6 | The visitor types in a field | The field exceeds the maximum length | The input is capped at the max length; or an error appears when submitted |
| AC-7 | The visitor submits while a network error occurs | The submission fails | An inline error message is displayed; the form data is preserved |
| AC-8 | The page is viewed on mobile (≤767px) | The form renders | All fields and the submit button are fully visible and usable without horizontal scroll |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input — name empty | Visitor submits with name empty | Inline error "Name is required" on the name field |
| Invalid input — email empty | Visitor submits with email empty | Inline error "Email is required" on the email field |
| Invalid input — email malformed | Visitor enters "abc" as email | Inline error "Please enter a valid email address" |
| Invalid input — message empty | Visitor submits with message empty | Inline error "Message is required" on the message field |
| Boundary — name max | Name is exactly 100 chars | Accepted |
| Boundary — name over limit | Name is 101 chars | Truncated client-side or rejected with an error showing the 100-char limit |
| Boundary — message max | Message is exactly 1000 chars | Accepted |
| Boundary — message over limit | Message exceeds 1000 chars | Truncated or rejected with an error showing the 1000-char limit |
| Network failure | Form submission request fails | An inline error "Something went wrong. Please try again." is shown; form data is preserved |
| Not permitted | N/A | All actions are available to any Visitor |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Name | text | yes | Max 100 characters |
| Email | email | yes | Valid RFC 5322 email format |
| Message | text | yes | Max 1000 characters |

---

### 4.4 Footer

**Requirement LAND-004 — Display footer with copyright, social links, and back-to-top**

*As a* Visitor, *I want to* see a site footer with copyright information, social media links, and a back-to-top button, *so that* I can navigate back to the top and find brand/legal info.

Behaviour:

1. The footer is rendered at the bottom of the page.
2. It displays a copyright line (e.g. "© 2025 Hello Word. All rights reserved.").
3. It displays social media links (icons or text) — at minimum the placeholder icons for LinkedIn, Twitter/X, and GitHub.
4. A "Back to top" button or link is visible; clicking it scrolls the page smoothly to the top.
5. On very short pages (viewport taller than content), the footer stays at the bottom of the viewport.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A visitor scrolls to the bottom | The footer is visible | It contains copyright text, social links, and a back-to-top button |
| AC-2 | The visitor clicks "Back to top" | The button is clicked | The page scrolls smoothly to the top |
| AC-3 | A social link is clicked | The visitor clicks a social icon | The link opens in a new tab |
| AC-4 | The page content is shorter than the viewport | The footer renders | It sticks to the bottom of the viewport, not floating mid-page |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Social link target unreachable | A social URL fails to resolve | The link opens — the target domain is external; the page does not handle failure |

**Data touched**

None — this section is static content.

## 5. Screens

The design is the source of truth for appearance; this section maps functions
onto it so nothing in the design is unaccounted for and nothing specified here
is missing from the design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Hero | Top of page, full-width | LAND-001 | default |
| Features | Below hero, grid of 6 cards | LAND-002 | default |
| CTA + Contact form | Below features, centered form | LAND-003 | default, validation error, success, submission error |
| Footer | Bottom of page | LAND-004 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Page loads and is interactive within 3s on a typical broadband connection (no backend calls beyond static assets) |
| Accessibility | All form inputs have visible labels, focus indicators are visible, colour contrast ratio ≥ 4.5:1 for body text, page is keyboard-navigable |
| Responsive | Layout works from 320px width up; no horizontal scroll at any breakpoint |
| Localisation | Content is in Vietnamese (the stakeholder's language for the product name "Hello Word"); dates follow Vietnamese locale conventions |
| Privacy | The contact form collects name, email address, and message; no data is stored server-side — submission is sent via email |

## 7. Dependencies and assumptions

- **Depends on:** No other modules. This is the project's sole module.
- **Assumption:** No backend or database is needed. The project shape is `static` — frontend only. The contact form uses a mailto link or a third-party form service (e.g. Formspree); no custom API is built.

| Open question | Proposed default | Who decides |
|---|---|---|
| Which third-party form service or mailto endpoint should the contact form submit to? | Use `mailto:hello@helloword.com` as a placeholder — Dev can swap it for a service URL | Stakeholder |
| What social media URLs (LinkedIn, Twitter/X, GitHub) should the footer link to? | Use `#` placeholder links for all three — the stakeholder provides real URLs before launch | Stakeholder |

## 8. Traceability

Every plan item in this module appears exactly once, and every requirement id
traces to a test case. A gap in this table is a gap in the build.

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Hero section | LAND-001 | `test-cases/hero-section.md` |
| Features section | LAND-002 | `test-cases/features-section.md` |
| CTA with contact form | LAND-003 | `test-cases/cta-contact-form.md` |
| Footer | LAND-004 | `test-cases/footer.md` |
