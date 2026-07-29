# Test Cases — Footer

**Requirement:** LAND-004 — Display footer with copyright, social links, and back-to-top

**Risk level:** Low — static content section, no data submission, no side effects.

---

## Scenario: Footer displays copyright, social links, and back-to-top button

- **Given** A visitor scrolls to the bottom of the landing page
- **When** The footer comes into view
- **Then** The footer contains:
  - A copyright line displaying "© 2025 Hello Word. All rights reserved."
  - Social media links (icons/text) for LinkedIn, Twitter/X, and GitHub
  - A "Back to top" button or link

**Requirement traceability:** LAND-004 Behaviour 1–3, AC-1

---

## Scenario: Back-to-top button scrolls smoothly to the page top

- **Given** The visitor is at the bottom of the page and the footer is visible
- **When** The visitor clicks the "Back to top" button
- **Then** The page scrolls smoothly to the top of the viewport

**Requirement traceability:** LAND-004 Behaviour 4, AC-2

---

## Scenario: Social media links open in a new tab

- **Given** The footer is visible with social media links for LinkedIn, Twitter/X, and GitHub
- **When** The visitor clicks any social media link
- **Then** The link opens in a new browser tab with `target="_blank"` (or equivalent behaviour)

**Requirement traceability:** LAND-004 Behaviour 3, AC-3

---

## Scenario: Footer stays at the bottom on short-content pages

- **Given** The page content is shorter than the viewport height
- **When** The page is rendered
- **Then** The footer is positioned at the bottom of the viewport, not floating mid-page

**Requirement traceability:** LAND-004 Behaviour 5, AC-4
