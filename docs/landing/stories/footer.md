# Story — Footer

**Module:** landing
**Plan item:** Footer (P2)
**Requirement:** LAND-004

## User story

As a **Visitor**, I want to see a site footer with copyright information, social media links, and a back-to-top button, so that I can navigate back to the top and find brand/legal info.

## In scope

- Footer section rendered at the bottom of the page with three visual areas: brand/copyright, social media icon links, and a back-to-top button.
- Copyright line: "© 2025 Hello Word. All rights reserved." (static text).
- Three social icon links: LinkedIn, Twitter/X, GitHub — each rendered as an inline SVG icon with `aria-label`, linking to `#` placeholder hrefs.
- Back-to-top button (or link) that smoothly scrolls the page to the top on click.
- Sticky footer behaviour: on pages where content is shorter than the viewport, the footer is pinned to the bottom of the viewport (not floating mid-page).
- Background colour `#0F172A` (`--color-bg-darker`), muted text colour `#94A3B8` (`--color-text-footer`).
- Link hover colour `#A5B4FC` (`--color-primary-light`).
- Social icon hover: border turns indigo, subtle background highlight.
- Keyboard focus: visible 3px focus ring (`--color-focus: #6366F1`).
- Responsive: stacks single-column on mobile (≤767px), layout adapts without horizontal scroll.
- All links open in a new tab (`target="_blank"` with `rel="noopener noreferrer"`).

## Out of scope

- Real social media URLs — placeholder `#` hrefs are used; stakeholder provides real URLs before launch.
- Navigation columns (product, company, legal links) — those appear in the design system's component spec but the approved single-page landing design does not include them; this story covers only brand/copyright, social links, and back-to-top.
- Newsletter sign-up, sitemap links, or any form in the footer.
- Dynamic year in copyright — static text is acceptable for the initial build.

## UI scope

The footer is a single section at the bottom of the `page.tsx` layout. It does not have multiple states beyond default and hover/focus on interactive elements.

| Screen | States |
|---|---|
| Footer | default (all elements visible), hover/focus on social icons and back-to-top |

## Acceptance criteria

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A visitor scrolls to the bottom of the page | The footer is visible | It contains the copyright line, three social icon links (LinkedIn, Twitter/X, GitHub), and a back-to-top button |
| AC-2 | The visitor clicks "Back to top" | The back-to-top button is clicked | The page scrolls smoothly to the top of the viewport |
| AC-3 | A social link is clicked | The visitor clicks a social icon | The link opens in a new browser tab with `#` as the href |
| AC-4 | The page content is shorter than the viewport | The footer renders | It is pinned to the bottom of the viewport, not floating partway down the page |
| AC-5 | The page is viewed on a mobile device (≤767px) | The footer renders | All content is visible without horizontal scroll; layout stacks vertically |
| AC-6 | A keyboard user tabs to a social link or back-to-top button | The control receives focus | A visible 3px focus ring is shown around the element |
| AC-7 | A visitor hovers over a social icon | The icon is hovered | The icon border turns indigo (`#6366F1`) and a subtle background highlight appears |

## Dependencies

- The root layout and `page.tsx` structure must exist (Hero + Features + CTA sections are in place, so the page structure is ready).
- The `BackToTop` behaviour relies on `scroll-behavior: smooth` on the `<html>` element (already specified in the design system).
- No data dependencies — all content is static.
