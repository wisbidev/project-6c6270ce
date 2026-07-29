# Features Section

## User Story

**As a** Visitor,
**I want to** see a grid of feature cards with icons, titles, and descriptions,
**so that** I quickly understand what "Hello Word" offers and what makes it valuable.

## Scope

### In scope

- A section heading ("Key Features" / "Tính năng nổi bật") centered above the grid
- Six feature cards, each with:
  - An inline SVG icon inside a styled container
  - A card title (h3)
  - A one-to-two-line description
- Responsive grid: 3 columns on desktop (≥1024px), 2 columns on tablet (768–1023px), 1 column on mobile (≤767px)
- Card hover effect: lifts 6px, soft shadow, border tone shifts to light indigo
- Smooth staggered entrance animation (CSS) on scroll into view
- Section background: light (`--color-bg: #F8FAFC`) with white cards

### Out of scope

- Interactive cards (click, link, routing) — cards are purely informational
- Dynamic content loading or CMS integration — all content is static
- Custom illustrations — icons are inline SVGs (no imagery)
- Pagination or "load more" — all six cards are visible at once
- Sorting or filtering the feature set

## UI Scope

The Features section occupies one section of the single-page landing, directly below the Hero section. It uses the **Section Label & Title** pattern (overline label + h2 title + optional description) followed by a CSS grid of **Feature Card** components. On mobile the grid collapses to a single column; each card stacks vertically with adequate spacing.

States touched: **default** only (no error, loading, or empty states — content is static).

## Feature Card Content

The following six feature cards cover common communication/value-proposition themes for a brand called "Hello Word." Copy uses sentence case (headings) and plain paragraphs (descriptions).

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | Message/chat bubble | Smart Messaging | Reach your audience with intelligent, personalized messages that drive engagement. |
| 2 | Globe | Global Reach | Connect with users across the world through multi-language and multi-region support. |
| 3 | Shield | Secure by Design | Enterprise-grade security built in from day one — your data stays safe. |
| 4 | Chart/Bar | Actionable Insights | Track performance with real-time analytics that help you make better decisions. |
| 5 | Puzzle piece | Seamless Integration | Plug into your existing tools and workflows without missing a beat. |
| 6 | Rocket | Fast & Scalable | Built for speed and scale — grows with you from day one to millions of users. |

*Note: Dev may replace icon SVGs, titles, and descriptions when the stakeholder provides final copy. The card structure and layout remain unchanged.*

## Acceptance Criteria

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The features section is rendered | The visitor views it | A section heading (h2) is visible above the grid |
| AC-2 | The section heading is rendered | The visitor reads it | An overline label (e.g. "FEATURES") appears above the heading |
| AC-3 | The grid is rendered on desktop (≥1024px) | The visitor views the grid | Exactly six cards appear in a three-column grid layout |
| AC-4 | Each card is visible | The visitor reads the card | It contains an icon, an h3 title, and a short description paragraph |
| AC-5 | The visitor hovers over a card | The card is hovered | The card lifts up (~6px), a soft shadow appears, and the border shifts to light indigo (#C7D2FE) |
| AC-6 | The page is viewed on tablet (768–1023px) | The grid renders | Cards arrange in a two-column layout |
| AC-7 | The page is viewed on mobile (≤767px) | The grid renders | Cards stack in a single-column layout, stacking vertically |
| AC-8 | The page loads | The features section scrolls into view | Cards animate in with a staggered fade/slide-up effect |

### Failure and boundary behaviour

| Case | Condition | Expected behaviour |
|---|---|---|
| Icon fails to render | An inline SVG fails | The icon container shows a simple fallback placeholder (empty circle/square); card layout is preserved |
| Viewport is exactly 768px or 1024px | Page loads at breakpoint boundary | Layout follows the **higher** breakpoint rule (768px = tablet/2-col, 1024px = desktop/3-col) — no gap where no breakpoint applies |
| Narrow viewport (<320px) | Page loads on a very small device | Cards stack in single column, no horizontal scroll, text wraps naturally |

### Permission behaviour

All content in this section is publicly visible to any Visitor — no authentication or roles apply.

## Dependencies

- **Blocks:** None — this story can be developed independently.
- **Depends on:** No other stories must land first.
- **Content:** Six sets of icon SVG + title + description as specified above. Dev may use placeholder SVGs; final assets are swappable without structural changes.
- **Design assets:** Approved design mockup (`design/index.html`) and design system (`design/design-system.md`) already available.
