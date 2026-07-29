# Test Cases — CTA with Contact Form (LAND-003)

**Module:** landing
**Risk level:** Medium — form collects visitor data and must provide clear inline feedback.
**Tester:** Test (Linh)
**Date:** 2025-07-18

---

## 1. Default state — section renders with all fields

**Requirement traceability:** LAND-003 Behaviour 1–3, AC-1

**Scenario:** CTA section displays heading, description, and form fields
**Given** The landing page is loaded
**When** The visitor scrolls to the CTA section
**Then** The visitor sees:
- A section heading (e.g. "Ready to say Hello?" or similar)
- A descriptive paragraph encouraging contact
- A form with three labeled fields: Name (text input), Email (email input), Message (textarea)
- A submit button labelled "Send"

**Setup:** Navigate to the landing page, scroll below the features section.

---

## 2. Successful submission — all fields valid

**Requirement traceability:** LAND-003 Behaviour 4–5, AC-2

**Scenario:** Visitor submits the form with fully valid data
**Given** The visitor has filled in:
- "Name" with a valid name (≤100 characters)
- "Email" with a valid email format (e.g. `user@example.com`)
- "Message" with valid text (≤1000 characters)
**When** The visitor clicks the "Send" button
**Then**
- The form fields are hidden or cleared
- A success message is displayed (e.g. "Thanks — we'll get back to you soon")
- A green checkmark icon is visible
- A "Send Another Message" button is available to reset the form

---

## 3. Name empty validation

**Requirement traceability:** LAND-003 Behaviour 4, AC-3, Failure — name empty

**Scenario:** Visitor submits with the name field left empty
**Given** The visitor has filled in valid email and message, but left the name field empty
**When** The visitor clicks the "Send" button
**Then**
- An inline error message "Name is required" (or "Please enter your name.") appears below the name field
- The name field's border turns red (`--color-danger`)
- No data is sent
- The form data in other fields is preserved

---

## 4. Invalid email format validation

**Requirement traceability:** LAND-003 Behaviour 4, AC-4, Failure — email malformed

**Scenario:** Visitor submits with an invalid email address
**Given** The visitor has entered a valid name and message, but the email field contains "abc" (not a valid email format)
**When** The visitor clicks the "Send" button
**Then**
- An inline error message "Please enter a valid email address" appears below the email field
- The email field's border turns red (`--color-danger`)
- No data is sent
- The form data in other fields is preserved

---

## 5. Email empty validation

**Requirement traceability:** LAND-003 Failure — email empty

**Scenario:** Visitor submits with the email field left empty
**Given** The visitor has filled in valid name and message, but left the email field empty
**When** The visitor clicks the "Send" button
**Then**
- An inline error message "Email is required" appears below the email field
- The email field's border turns red (`--color-danger`)
- No data is sent
- The form data in other fields is preserved

---

## 6. Message empty validation

**Requirement traceability:** LAND-003 Behaviour 4, AC-5, Failure — message empty

**Scenario:** Visitor submits with the message field left empty
**Given** The visitor has filled in valid name and email, but left the message field empty
**When** The visitor clicks the "Send" button
**Then**
- An inline error message "Message is required" appears below the message field
- The message field's border turns red (`--color-danger`)
- No data is sent
- The form data in other fields is preserved

---

## 7. Name max-length boundary — exactly 100 characters

**Requirement traceability:** LAND-003 Behaviour 2, AC-6, Failure — boundary name max

**Scenario:** Visitor enters a name that is exactly 100 characters long
**Given** The visitor types 100 characters into the name field
**When** The visitor attempts to type a 101st character
**Then** The 101st character is not accepted — the input is capped at 100 characters (`maxlength` attribute prevents further input)
**And** The visitor can submit the form with the 100-character name and valid email/message

---

## 8. Name over limit — capped at 100 characters

**Requirement traceability:** LAND-003 Failure — name over limit

**Scenario:** Visitor pastes or attempts to enter more than 100 characters in the name field
**Given** The name input has a `maxlength` attribute of 100
**When** The visitor pastes a string of 101+ characters into the name field
**Then** The value is truncated to 100 characters (no more than 100 characters are accepted)

---

## 9. Message max-length boundary — exactly 1000 characters

**Requirement traceability:** LAND-003 Behaviour 2, AC-6, Failure — boundary message max

**Scenario:** Visitor enters a message that is exactly 1000 characters long
**Given** The visitor types 1000 characters into the message textarea
**When** The visitor attempts to type a 1001st character
**Then** The 1001st character is not accepted — the input is capped at 1000 characters (`maxlength` attribute prevents further input)
**And** The visitor can submit the form with the 1000-character message and valid name/email

---

## 10. Message over limit — capped at 1000 characters

**Requirement traceability:** LAND-003 Failure — message over limit

**Scenario:** Visitor pastes or attempts to enter more than 1000 characters in the message field
**Given** The message textarea has a `maxlength` attribute of 1000
**When** The visitor pastes a string of 1001+ characters into the message field
**Then** The value is truncated to 1000 characters (no more than 1000 characters are accepted)

---

## 11. Network error — form data preserved

**Requirement traceability:** LAND-003 Behaviour 6, AC-7, Failure — network failure

**Scenario:** Form submission fails due to a network error
**Given** The visitor has filled in all three fields with valid data
**And** The network is unavailable (or the mailto/form endpoint is unreachable)
**When** The visitor clicks the "Send" button
**Then**
- An inline error message "Something went wrong. Please try again." (or similar) is displayed
- The submit button re-enables (is no longer in loading/disabled state)
- All form field data remains filled in and is not cleared

---

## 12. Mobile responsive — form usable on small screens

**Requirement traceability:** LAND-003 Behaviour 8, AC-8

**Scenario:** The CTA section renders correctly on mobile viewports
**Given** The page is viewed on a device with a viewport width between 320px and 767px
**When** The visitor scrolls to the CTA section
**Then**
- The section heading, description, and all three form fields are fully visible without horizontal scroll
- The submit button spans the full width of the form (or is comfortably tappable)
- All text is readable and inputs are usable

---

## 13. Loading state during submission

**Requirement traceability:** LAND-003 Behaviour 4 (form component states)

**Scenario:** The submit button shows a loading state while the form is being submitted
**Given** The visitor has filled in all three fields with valid data
**When** The visitor clicks the "Send" button
**Then** While the submission is in progress:
- The button text changes to "Sending..."
- A spinner icon is visible inside the button
- The submit button is disabled (cannot be clicked again)

---

## 14. Reset after success — "Send Another Message" restores the form

**Requirement traceability:** LAND-003 Behaviour 5, Design System §2.7

**Scenario:** After a successful submission, the visitor can send another message
**Given** The form is in the success state (success message displayed, form hidden)
**When** The visitor clicks the "Send Another Message" button
**Then**
- The success state is replaced by the original form with all fields empty
- The submit button is re-enabled with the label "Send"
- No data from the previous submission persists in the fields

---

## 15. Hero CTA button scrolls to the contact form

**Requirement traceability:** LAND-001 AC-4, LAND-003 Behaviour 8

**Scenario:** The hero section's CTA button scrolls smoothly to the CTA section
**Given** The visitor is at the top of the landing page (hero section)
**When** The visitor clicks the hero CTA button (e.g. "Get in touch")
**Then** The page scrolls smoothly to the CTA with contact form section
**And** The contact form section comes into view
