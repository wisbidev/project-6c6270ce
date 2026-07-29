# Test Cases — Features section (LAND-002)

**Module:** landing
**Plan item:** Features section
**Risk level:** Low — static content, no data writes, no permissions. Happy paths cover layout and responsiveness; one failure case for missing icon resources (explicitly in the SRS).

---

## ✅ Happy-path test cases

### TC-FEAT-001: Section heading is displayed above the grid

**Requirement:** LAND-002, AC-1

**Given** — The landing page is loaded in a browser at any viewport width
**When** — The visitor scrolls to the features section
**Then** — A section heading (e.g. "Key Features") is visible above the feature card grid

---

### TC-FEAT-002: Exactly six cards in a three-column grid on desktop (≥1024px)

**Requirement:** LAND-002, AC-2

**Given** — The landing page is loaded in a browser with viewport width ≥ 1024px
**When** — The visitor views the features section
**Then**
- Exactly six feature cards are rendered
- The cards are arranged in a three-column layout (three cards per row)
- No cards overflow the grid container horizontally

---

### TC-FEAT-003: Each card displays an icon, title, and description

**Requirement:** LAND-002, AC-3

**Given** — The features section is rendered with six cards visible
**When** — The visitor inspects any individual card
**Then** — The card contains:
- An icon (SVG or illustration element)
- A title (rendered in an `h3` element, using `--text-h3` typography)
- A short description (one to two lines of body text, using `--text-sm-nav` or equivalent)

---

### TC-FEAT-004: Cards display properly on hover

**Requirement:** LAND-002 (via Feature Card component spec in design system)

**Given** — The features section is rendered and a card is visible
**When** — The visitor hovers the cursor over a feature card
**Then**
- The card lifts upward (`translateY(-6px)`)
- A soft shadow (`--shadow-lg`) is applied
- The border colour changes to light indigo (`#C7D2FE`)
- The transition is smooth (`--duration-slow` / 300ms)

---

### TC-FEAT-005: Two-column grid on tablet (768px – 1023px)

**Requirement:** LAND-002, AC-4

**Given** — The landing page is loaded in a browser with viewport width between 768px and 1023px (inclusive)
**When** — The visitor views the features section
**Then**
- All six cards remain visible
- The cards are arranged in exactly two columns
- No cards are truncated or horizontally scrollable

---

### TC-FEAT-006: Single-column grid on mobile (≤767px)

**Requirement:** LAND-002, AC-5

**Given** — The landing page is loaded in a browser with viewport width ≤ 767px
**When** — The visitor views the features section
**Then**
- All six cards remain visible
- The cards are stacked in a single column (one card per row)
- No cards are truncated; no horizontal scroll occurs

---

### TC-FEAT-007: Section appears below the hero

**Requirement:** LAND-002, Behaviour 1

**Given** — The landing page is fully loaded
**When** — The visitor scrolls down from the hero section
**Then** — The features section is the next visible section after the hero

---

## ⚠️ Failure / boundary test case

### TC-FEAT-008: Missing icon shows a fallback placeholder

**Requirement:** LAND-002, Failure case (Missing icon)

**Given** — The features section is rendered but one card's icon SVG resource fails to load (e.g. removed from the DOM or network-blocked)
**When** — The visitor views that feature card
**Then**
- A fallback placeholder element is visible in the icon position (e.g. a neutral-coloured box or empty icon container)
- The card layout is preserved — title and description remain in their correct positions
- No layout shift or broken image indicator (e.g. missing `alt` text with no placeholder) is shown

---

## 🔒 Permission / role coverage

No permission cases required — the Features section is fully public static content available to any Visitor. Every action in the SRS is unauthenticated.

## ✅ Verification checklist

- [x] Every SRS acceptance criterion (AC-1 through AC-5) has at least one test case
- [ ] Cases stored at `docs/landing/test-cases/features-section.md`
- [ ] Every case states clear Given/When/Then structure
- [ ] Negative, boundary, permission, and recovery cases exist in proportion to the item's risk (low risk — one failure case for missing icon, which is explicitly in the SRS)
- [ ] Every role named in the SRS (Visitor) is covered
- [ ] All cases are automatable via visual/component testing tools (no manual-only cases for this section)
- [ ] No ambiguity found in the SRS for this requirement
