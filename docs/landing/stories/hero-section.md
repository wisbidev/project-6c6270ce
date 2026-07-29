# Story: Hero Section

**Module:** `landing`
**Plan item:** Hero section (item 1)
**Design:** [Approved design preview](http://localhost:8080/design/6c6270ce-df00-4ed3-9632-94661bc1b689)
**Design system:** `design/design-system.md`

---

## User Story

*As a* Visitor, *I want to* see a full-width hero section with the brand name, a compelling subtitle, and a prominent CTA button, *so that* I immediately understand what the product is about and can navigate to the contact form.

## In Scope

- Full-viewport-height (100vh) hero section as the first visible section on page load
- Large bold headline displaying "Hello Word"
- Subtitle with a short value proposition below the headline
- A primary CTA button labelled "Get in touch" below the subtitle
- Smooth-scroll to the contact form section (anchored by `#contact`) when the CTA is clicked
- Background: subtle linear gradient from `#EEF2FF` (indigo tint) to `#F5F3FF` (purple tint)
- Text is centre-aligned on all screen sizes
- Responsive layout: works from 320px–1200px+ with no horizontal scroll
- On mobile (≤767px): headline, subtitle, and button stack vertically with adequate spacing; heading font scales down via `clamp()`
- Loading state: a minimal skeleton/spinner is shown while the page hydrates

## Out of Scope

- Any form fields, inputs, or submission logic — the CTA button scrolls to a **separate** contact section (story 3)
- Navigation bar or sticky header — those are not part of this story
- Background images, illustrations, or decorative shapes beyond the gradient
- Animations on hero entrance (fade-in, slide-up) — the design specifies no entrance animation
- Backend or API calls — this section is fully static content
- Analytics or tracking on the CTA button click
- Social proof, logos, or testimonial quotes in the hero
- Any hero sub-navigation or internal page links other than the single CTA anchor

## UI Scope

This story covers a single screen — the Hero section at the top of the landing page. It touches no other sections.

**States required:**

| State | What renders |
|---|---|
| Default | Full-viewport hero with gradient background, centre-aligned "Hello Word" headline, subtitle, and "Get in touch" button |
| Loading | Page is still hydrating — a skeleton placeholder matching the hero dimensions, or a lightweight spinner |

The CTA button is a `<a>` tag with `href="#contact"` and smooth scrolling (`scroll-behavior: smooth` on `<html>`). It is styled as `btn-primary` per the design system.

## Acceptance Criteria

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A visitor loads the landing page | The hero section renders | It is the first visible section, spans full viewport width, and occupies 100vh height |
| AC-2 | The hero is displayed | The visitor reads the headline | The text "Hello Word" is present in large bold type (`--text-hero`, 800 weight) |
| AC-3 | The hero is displayed | The visitor reads the subtitle | A value-proposition subtitle is visible below the headline in `--text-lead-lg` |
| AC-4 | The hero is displayed | The visitor clicks the CTA button | The page scrolls smoothly to the element with id `#contact` |
| AC-5 | The page is viewed on a mobile device (320–767px) | The hero renders | Headline, subtitle, and button are all visible without horizontal scroll; layout stacks vertically |
| AC-6 | The page is viewed on a tablet (768–1023px) | The hero renders | Layout remains centred and fully readable; no content is cut off |
| AC-7 | The page is still loading/hydrating | The hero area is visible | A loading indicator (skeleton or spinner) is displayed |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Loading | Page is still hydrating | A skeleton or spinner is visible in the hero area |
| Very long headline | Heading text is longer than viewport width | Text wraps onto multiple lines; no clipping or overflow |
| `prefers-reduced-motion: reduce` | User has set reduced motion in OS | Smooth scroll is disabled; the button jump-links to `#contact` instantly |
| CTA target not found | No element with `id="contact"` exists on the page | The link navigates to the top of the page (standard anchor fallback) |
| Permissions | N/A | All actions are available to any anonymous Visitor |

## Dependencies

- **Design system**: Button component (`btn-primary`), typography tokens (`--text-hero`, `--text-lead-lg`), color tokens (`--color-illustration-bg`, `--color-illustration-bg-end`)
- **Anchor target**: The CTA scrolls to `#contact`, which will exist in the CTA with contact form story (item 3). Dev should use a standard `<a href="#contact">` so the link degrades gracefully if the section is not yet present.
- **Global styles**: Root `<html>` must have `scroll-behavior: smooth` (with `prefers-reduced-motion` media query to disable)
- **No blocking questions**: All decisions are covered by the approved design, SRS, and design system.

---

*No blocking questions — the SRS, design system, and architecture documents specify every detail needed for build.*
