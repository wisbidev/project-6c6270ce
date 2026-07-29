# Story: CTA with Contact Form

**Module:** `landing`
**Requirement:** LAND-003
**Plan item:** 3. CTA with contact form

## User Story

*As a* Visitor, *I want to* fill in a contact form with my name, email, and message and submit it, *so that* I can reach out to the team and receive confirmation that my message was sent.

## Scope

### In scope

- A call-to-action section with a heading, descriptive text, and a contact form, rendered below the Features section on the landing page.
- Three form fields: **Name** (text, required, max 100 chars), **Email** (email, required, validated for format), **Message** (textarea, required, max 1000 chars).
- A "Send" submit button that shows a loading state ("Sending..." + spinner) and is disabled while submitting.
- **Inline validation:** Each field shows an error message below it on submit if invalid/empty. Real-time validation on `blur` per field.
- **Success state:** On valid submission, the form is replaced by a success confirmation (checkmark icon, "Message sent!" heading, "Thanks — we'll get back to you soon" text, and a "Send Another Message" secondary button that resets the form).
- **Error state:** On submission failure (network error), an inline error "Something went wrong. Please try again." is displayed; form data is preserved.
- Form submission sends data via the `NEXT_PUBLIC_FORM_ENDPOINT` environment variable (defaults to `mailto:hello@helloword.com`).
- The CTA section includes the `id="contact"` anchor referenced by the Hero section's smooth-scroll CTA button.
- Responsive layout: form is centered and usable on mobile (≤767px), tablet (768–1023px), and desktop (≥1024px).

### Out of scope

- Server-side form handling — no custom backend endpoint; submission goes to mailto or a third-party service URL.
- Captcha, rate limiting, or spam protection — not required for this build.
- Database storage of form submissions — no data is stored server-side.
- Analytics tracking of form submissions — not part of this story.
- Confirmation email to the visitor — the form does not send a copy to the submitter.
- Multi-step or wizard-style forms — this is a single three-field form.

## UI Scope

This story touches the **CTA + Contact form** section of the approved single-page design (see [design preview](http://localhost:8080/design/6c6270ce-df00-4ed3-9632-94661bc1b689)).

**States this story covers:**

1. **Default** — Section heading, descriptive text, three empty fields, enabled "Send" button.
2. **Validation error** — Red borders + inline error messages on invalid fields after submission attempt.
3. **Submitting** — Button shows "Sending..." + spinner, button is disabled.
4. **Submission error** — Inline error message "Something went wrong. Please try again." is shown; form data preserved; button re-enabled.
5. **Success** — Form replaced by success state (green checkmark, heading, description, reset button).

**Component usage (from design system):**
- `Section Label & Title` for the CTA heading group (on dark bg — label uses `--color-primary-light`).
- `Form` (Contact) — wraps the three fields and submit button.
- `Form Input` — for Name and Email fields (dark bg variant).
- `Form Input` — textarea for Message (same dark bg variant).
- `Button` — `btn-primary` for "Send" (with loading state), `btn-secondary` for "Send Another Message".
- `Success State` — shown after successful submission.

## Acceptance Criteria

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The CTA section is rendered | The visitor views it | A heading, descriptive text, and three form fields (Name, Email, Message) are visible |
| AC-2 | The visitor submits the form | All fields are valid | A success message replaces the form; the data is sent via the configured endpoint |
| AC-3 | The visitor submits the form | The Name field is empty | An inline error "Please enter your name." appears below the Name field; nothing is sent |
| AC-4 | The visitor submits the form | The Email field has invalid format | An inline error "Please enter a valid email address." appears below the Email field; nothing is sent |
| AC-5 | The visitor submits the form | The Email field is empty | An inline error "Please enter your email." appears below the Email field; nothing is sent |
| AC-6 | The visitor submits the form | The Message field is empty | An inline error "Please enter a message." appears below the Message field; nothing is sent |
| AC-7 | The visitor types in a field | The field exceeds max length | The input is capped at maxlength (100 for Name, 1000 for Message) |
| AC-8 | The visitor clicks "Send" | The form is submitting | The button text changes to "Sending...", a spinner is visible, the button is disabled |
| AC-9 | The visitor's submission fails due to a network error | The submission fails | An inline error "Something went wrong. Please try again." is shown; form data is preserved; button re-enabled |
| AC-10 | The visitor receives a success message | They click "Send Another Message" | The form resets to default state (all fields cleared, no errors) |
| AC-11 | The visitor navigates using the keyboard | They tab through the form | All fields and buttons are reachable and have visible focus indicators |
| AC-12 | The page is viewed on mobile (≤767px) | The form renders | All fields and the submit button are fully visible and usable without horizontal scroll |

## Dependencies

- **Hero section** (plan item 1) must be merged first — it provides the smooth-scroll CTA button that targets `#contact`.
- **Features section** (plan item 2) must be merged first — the CTA section renders below it in the page layout.
- `NEXT_PUBLIC_FORM_ENDPOINT` must be set in `.env.example` (default: `mailto:hello@helloword.com`).
- Design system tokens for dark-background form components must be available in `tailwind.config.ts` (already defined in the design system).
