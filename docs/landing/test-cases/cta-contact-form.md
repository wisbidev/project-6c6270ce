# Test Cases — CTA with contact form

Module: `landing`
Requirement: LAND-003
Risk level: Medium — the form is the primary conversion action; submission goes to an external endpoint, so form data preservation and inline feedback matter most.

## Happy-path scenarios

### TC-CTA-001 — CTA section renders with all expected elements

| Field | Value |
|---|---|
| **Scenario** | CTA section is visible with heading, description, and form fields |
| **Given** | A visitor scrolls to or navigates to the CTA section |
| **When** | The section is rendered on the page |
| **Then** | The visitor sees: (1) a section heading encouraging contact, (2) descriptive/subtitle text below the heading, (3) a Name text input field, (4) an Email email input field, (5) a Message textarea field, and (6) a "Send" submit button |
| **Requirement** | LAND-003 — Behaviour 1, 2, 3; AC-1 |

---

### TC-CTA-002 — Visitor submits a valid form and sees a success message

| Field | Value |
|---|---|
| **Scenario** | Valid form submission replaces the form with a success message |
| **Given** | The CTA section is displayed and the form fields are empty and enabled |
| **When** | The visitor enters a valid name ("Nguyen Van A"), a valid email ("nguyen@example.com"), a valid message ("I'd like to learn more about your product."), and clicks the "Send" button |
| **Then** | (1) The form fields are hidden or cleared, (2) a success message such as "Thanks — we'll get back to you soon" is displayed, and (3) the form data is submitted via email (mailto or third-party service) |
| **Requirement** | LAND-003 — Behaviour 5; AC-2 |

---

### TC-CTA-003 — Name field accepts exactly 100 characters

| Field | Value |
|---|---|
| **Scenario** | Name field accepts input at the maximum character limit |
| **Given** | The CTA section is displayed and the name field is empty |
| **When** | The visitor types a name that is exactly 100 characters long |
| **Then** | All 100 characters are accepted into the field; no truncation or error is shown |
| **Requirement** | LAND-003 — Data touched: Name max 100 characters; Boundary: name max accepted |

---

### TC-CTA-004 — Message field accepts exactly 1000 characters

| Field | Value |
|---|---|
| **Scenario** | Message textarea accepts input at the maximum character limit |
| **Given** | The CTA section is displayed and the message field is empty |
| **When** | The visitor types a message that is exactly 1000 characters long |
| **Then** | All 1000 characters are accepted into the textarea; no truncation or error is shown |
| **Requirement** | LAND-003 — Data touched: Message max 1000 characters; Boundary: message max accepted |

---

### TC-CTA-005 — Name field is capped at 100 characters when typing beyond the limit

| Field | Value |
|---|---|
| **Scenario** | Name input does not accept more than 100 characters |
| **Given** | The CTA section is displayed and the name field already contains 100 characters |
| **When** | The visitor attempts to type a 101st character into the name field |
| **Then** | The 101st character is not entered; the field value remains at 100 characters |
| **Requirement** | LAND-003 — Behaviour 6; AC-6 |

---

### TC-CTA-006 — Message field is capped at 1000 characters when typing beyond the limit

| Field | Value |
|---|---|
| **Scenario** | Message textarea does not accept more than 1000 characters |
| **Given** | The CTA section is displayed and the message field already contains 1000 characters |
| **When** | The visitor attempts to type a 1001st character into the message textarea |
| **Then** | The 1001st character is not entered; the field value remains at 1000 characters |
| **Requirement** | LAND-003 — Behaviour 6; AC-6 |

---

### TC-CTA-007 — CTA section is responsive on mobile

| Field | Value |
|---|---|
| **Scenario** | The CTA section and form are fully usable on mobile viewports |
| **Given** | The page is viewed on a mobile device with viewport width ≤ 767px |
| **When** | The CTA section is rendered |
| **Then** | The heading, description, all three form fields, and the "Send" button are fully visible and usable without horizontal scrolling |
| **Requirement** | LAND-003 — AC-8 |

---

### TC-CTA-008 — Hero CTA button scrolls smoothly to the contact form

| Field | Value |
|---|---|
| **Scenario** | Clicking the hero's CTA button scrolls to the CTA section |
| **Given** | The landing page is loaded and the hero section is visible |
| **When** | The visitor clicks the "Get in touch" button in the hero section |
| **Then** | The page scrolls smoothly to the CTA section with the contact form; the CTA section is now visible at the top of the viewport (or near it) |
| **Requirement** | LAND-001 — AC-4 (hero → CTA smooth scroll); LAND-003 — Behaviour 8 |

---

## Traceability

| Test case | Requirement(s) |
|---|---|
| TC-CTA-001 | LAND-003 (AC-1) |
| TC-CTA-002 | LAND-003 (AC-2) |
| TC-CTA-003 | LAND-003 (Data touched: Name max 100 chars) |
| TC-CTA-004 | LAND-003 (Data touched: Message max 1000 chars) |
| TC-CTA-005 | LAND-003 (AC-6) |
| TC-CTA-006 | LAND-003 (AC-6) |
| TC-CTA-007 | LAND-003 (AC-8) |
| TC-CTA-008 | LAND-001 (AC-4), LAND-003 (Behaviour 8) |
