# Test Cases — Hero Section (LAND-001)

## Risk level: Low

Static content section with no data writes, authentication, or API dependencies. Happy-path coverage is sufficient; loading state and text-wrapping boundary cases are included because they are explicitly documented in the SRS.

---

## AC-1 — Hero is the first visible section and spans full viewport width

**Requirement:** LAND-001 AC-1

**Given** A visitor loads the landing page
**When** The hero section is rendered
**Then** It is the first visible section at the top of the page, spans full viewport width (100vw), and occupies full viewport height (100vh) on desktop (≥1024px)

**Coverage:** Automated (visual/layout assertion)

---

## AC-2 — Headline displays "Hello Word" in large bold type

**Requirement:** LAND-001 AC-2

**Given** The hero section is displayed
**When** The visitor reads the headline
**Then** The text "Hello Word" is present in large bold type (e.g. `font-bold`, `text-4xl` or larger on desktop)

**Coverage:** Automated (text content + computed style assertion)

---

## AC-3 — Subtitle is visible below the headline

**Requirement:** LAND-001 AC-3

**Given** The hero section is displayed
**When** The visitor reads the subtitle
**Then** A short value-proposition subtitle is rendered below the headline and is visually distinct (e.g. larger line-height, muted colour)

**Coverage:** Automated (DOM order + text content assertion)

---

## AC-4 — CTA button scrolls smoothly to the contact form

**Requirement:** LAND-001 AC-4

**Given** The hero section is displayed
**When** The visitor clicks the CTA button labelled "Get in touch" (or equivalent)
**Then** The page scrolls smoothly to the contact form section (identifiable by its anchor, e.g. `#contact`), with `scroll-behavior: smooth` behaviour

**Coverage:** Automated (click trigger + scroll position / element in viewport assertion)

---

## AC-5 — Hero is responsive on mobile (320px – 767px)

**Requirement:** LAND-001 AC-5

**Given** The page is viewed on a mobile device (viewport width 320px – 767px)
**When** The hero section renders
**Then** All text (headline, subtitle) and the CTA button are fully visible without horizontal scroll; elements stack vertically with adequate spacing

**Coverage:** Automated (responsive viewport / media-query assertion)

---

## B-1 — Loading state is displayed while the page loads

**Requirement:** LAND-001 (Failure, boundary and permission behaviour — Loading)

**Given** The landing page is still loading (network is slow)
**When** The visitor waits for the page
**Then** A loading indicator (skeleton or spinner) is shown in the hero area; it is replaced by the full hero content once loading completes

**Coverage:** Manual — cannot reliably simulate slow-loading static assets in an automated test without throttling infrastructure

---

## B-2 — Long headline text wraps without clipping

**Requirement:** LAND-001 (Failure, boundary and permission behaviour — Very long headline)

**Given** The headline "Hello Word" is rendered
**When** The viewport is narrow enough that "Hello Word" would exceed the available width (e.g. 320px width)
**Then** The text wraps onto multiple lines; no part of the text is clipped or overflowing its container

**Coverage:** Automated (narrow viewport + overflow / bounding-rect assertion)
