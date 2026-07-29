# Design System — Hello Word

> Source of truth: the approved `index.html`.
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2025-01-15

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#F8FAFC` | Page background |
| `--color-surface` | `#FFFFFF` | Card / panel background |
| `--color-surface-raised` | `#FFFFFF` | Modal, dropdown, popover (with shadow) |
| `--color-nav` | `rgba(255,255,255,.92)` | Sticky nav background |
| `--color-border` | `#E2E8F0` | Default border, divider |
| `--color-border-strong` | `#475569` | Form input border on dark bg |
| `--color-border-focus` | `#6366F1` | Focused input border |
| `--color-text` | `#1E293B` | Body text |
| `--color-text-muted` | `#64748B` | Secondary text, feature descriptions |
| `--color-text-nav` | `#475569` | Nav link text |
| `--color-primary` | `#6366F1` | Primary action background |
| `--color-primary-hover` | `#4F46E5` | Primary action hover |
| `--color-primary-text` | `#FFFFFF` | Text on primary |
| `--color-primary-light` | `#A5B4FC` | Primary brand text on dark bg |
| `--color-success` | `#10B981` | Success state, checkmark icon |
| `--color-warning` | `#F59E0B` | Warning state (feature icon amber) |
| `--color-danger` | `#EF4444` | Error border on form fields |
| `--color-danger-text` | `#FCA5A5` | Error message text |
| `--color-focus` | `#6366F1` | Focus ring |
| `--color-bg-dark` | `#1E293B` | Dark section background (CTA) |
| `--color-bg-darker` | `#0F172A` | Footer background |
| `--color-bg-dark-surface` | `#334155` | CTA gradient end |
| `--color-text-on-dark` | `#FFFFFF` | Body text on dark bg |
| `--color-text-muted-on-dark` | `#CBD5E1` | Secondary text on dark bg |
| `--color-text-footer` | `#94A3B8` | Footer body text |
| `--color-text-footer-heading` | `#F1F5F9` | Footer column headings |
| `--color-illustration-bg` | `#EEF2FF` | Hero section gradient start |
| `--color-illustration-bg-end` | `#F5F3FF` | Hero section gradient end |

#### Contrast audit

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` (`#1E293B`) | `--color-bg` (`#F8FAFC`) | ~13.2:1 | AA, AAA |
| `--color-text-muted` (`#64748B`) | `--color-surface` (`#FFFFFF`) | ~5.0:1 | AA |
| `--color-text-muted` (`#64748B`) | `--color-bg` (`#F8FAFC`) | ~4.8:1 | AA |
| `--color-primary-text` (`#FFFFFF`) | `--color-primary` (`#6366F1`) | ~4.8:1 | AA |
| `--color-primary-text` (`#FFFFFF`) | `--color-primary-hover` (`#4F46E5`) | ~6.0:1 | AA, AAA |
| `--color-text-on-dark` (`#FFFFFF`) | `--color-bg-dark` (`#1E293B`) | ~15.5:1 | AA, AAA |
| `--color-text-muted-on-dark` (`#CBD5E1`) | `--color-bg-dark` (`#1E293B`) | ~8.0:1 | AA, AAA |
| `--color-text-footer` (`#94A3B8`) | `--color-bg-darker` (`#0F172A`) | ~4.8:1 | AA |
| `--color-text-footer-heading` (`#F1F5F9`) | `--color-bg-darker` (`#0F172A`) | ~12.0:1 | AA, AAA |
| `--color-text-nav` (`#475569`) | `--color-nav` (`rgba(255,255,255,.92)`) | ~6.5:1 | AA, AAA |
| `--color-danger-text` (`#FCA5A5`) | `--color-bg-dark` (`#1E293B`) | ~5.5:1 | AA |
| `--color-primary` (`#6366F1`) | `--color-bg` (`#F8FAFC`) | ~3.5:1 | AA Large (UI component border, not text) |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in the product uses one of these.

| Token | Value | Usage examples |
|---|---|---|
| `--space-0` | `0` | Reset |
| `--space-1` | `4px` | Footer link padding, field error margin-top |
| `--space-1\.5` | `6px` | Form label margin-bottom |
| `--space-2` | `8px` | Nav-logo gap, social icon border-radius, focus outline gap |
| `--space-2\.5` | `10px` | Nav-cta padding (vertical) |
| `--space-3` | `12px` | Section-label margin, feature-card h3 margin, blur amount |
| `--space-3\.5` | `14px` | Button padding (vertical) |
| `--space-4` | `16px` | Container horizontal padding, form-group margin-bottom, feature-card radius |
| `--space-5` | `20px` | Form-group margin-bottom, feature-icon margin-bottom, mobile menu padding |
| `--space-6` | `24px` | Container horizontal padding, features-grid gap, hero p margin-top, footer bottom padding |
| `--space-7` | `28px` | Feature card padding (horizontal), menu-btn size |
| `--space-8` | `32px` | Nav-links gap, features-grid gap, button padding horizontal, footer gap |
| `--space-9` | `36px` | Feature card padding (vertical), social icon size |
| `--space-10` | `40px` | Hero-buttons margin-top, CTA form margin-top, footer-grid gap |
| `--space-12` | `48px` | Footer padding (vertical) |
| `--space-13` | `52px` | Feature icon width/height |
| `--space-14` | `56px` | Hero illustration margin-top |
| `--space-15` | `60px` | Features grid margin-top |
| `--space-17` | `68px` | Nav height |
| `--space-25` | `100px` | Features section padding (vertical), CTA section padding |
| `--space-35` | `140px` | Hero section padding-top |

### 1.3 Typography

Font families (system stack, no external font load required):

- Body / Headings: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- Mono: not used in the approved design

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | `0.8125rem` (13px) | 1.5 | 400 | Footer bottom text, field error message |
| `--text-sm` | `0.875rem` (14px) | 1.5 | 400/600/700 | Section label (600), form labels (600), footer links (400), footer brand p (400), footer headings (700) |
| `--text-sm-nav` | `0.9375rem` (15px) | 1.5 | 500 | Nav links, feature card body text |
| `--text-base` | `1rem` (16px) | 1.6 | 400/600 | Body text (400), button text (600), form input text (400) |
| `--text-lead` | `1.1rem` (17.6px) | 1.6 | 400 | Section description |
| `--text-lead-lg` | `1.2rem` (19.2px) | 1.7 | 400 | Hero paragraph |
| `--text-h3` | `1.25rem` (20px) | 1.4 | 700 | Feature card heading |
| `--text-h2` | `1.5rem` (24px) | 1.3 | 700 | Success state heading, nav logo |
| `--text-h1` | `clamp(2rem, 4vw, 2.75rem)` (32–44px) | 1.15 | 800 | Section title |
| `--text-hero` | `clamp(2.5rem, 6vw, 4rem)` (40–64px) | 1.15 | 800 | Hero heading |

Heading levels are used in order and never skipped for visual sizing. The hero `h1` is the top-level heading; section headings use `h2`; feature cards use `h3`.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-xs` | `4px` | Focus ring outline |
| `--radius-sm` | `8px` | Nav-CTA, form inputs, footer social icons, primary button box |
| `--radius-md` | `10px` | Buttons (`.btn`) |
| `--radius-lg` | `12px` | Feature icon container |
| `--radius-xl` | `16px` | Feature card, hero illustration container |
| `--border-width` | `2px` | Form input border, secondary button border |
| `--shadow-sm` | none | Resting cards (no shadow at rest) |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,.08)` | Mobile dropdown menu |
| `--shadow-lg` | `0 12px 40px rgba(0,0,0,.07)` | Feature card hover |
| `--shadow-primary` | `0 8px 24px rgba(99,102,241,.35)` | Primary button hover |
| `--duration-fast` | `200ms` | Nav link hover, nav-CTA hover, form input border |
| `--duration-base` | `250ms` | Button transitions |
| `--duration-slow` | `300ms` | Card hover transition |
| `--easing` | `ease` (default) | All transitions |

Motion respects `prefers-reduced-motion: reduce`: state changes remain, movement is removed. The `scroll-behavior: smooth` on `html` uses CSS-level `prefers-reduced-motion` media query for disabling.

### 1.5 Layout and breakpoints

| Name | Max width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | `768px` | `full` | 1 | `24px` |
| `md` | `1024px` | `1200px` | 2 | `32px` |
| `lg` | `1200px+` | `1200px` | 3 (auto-fill) | `32px` |

The `.container` class uses `max-width: 1200px` + `padding: 0 24px`. Below 768px, the footer grid collapses to single column and mobile nav menu activates.

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky nav | `100` |

### 1.6 Iconography

All icons are inline SVGs (no external icon library). Stroke weight: `2px`, `stroke-linecap: round`. Icons are 26×26px in feature cards, 28×28px in the mobile menu button, 18×18px in social links, 64×64px in success state, 20×20px in button spinner, 32×32px in the logo.

Icon-only controls have an `aria-label`.

## 2. Components

### 2.1 Navigation Bar

**Purpose** — Primary site navigation. Fixed to the top of the viewport. Use on every page/section.

**Anatomy** — `[logo + brand text] [links...] [CTA button] [hamburger (mobile only)]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Transparent white background with blur, bottom border | `--color-nav`, `--color-border`, `backdrop-filter: blur(12px)` |
| Hover (link) | Text color changes to primary | `--color-text-nav` → `--color-primary` |
| Hover (CTA) | Background darkens, no transform | `--color-primary` → `--color-primary-hover` |
| Focus (keyboard) | Visible 3px focus ring | `--color-focus`, `--radius-xs` |
| Mobile (closed) | Hamburger icon visible, links hidden | — |
| Mobile (open) | Links displayed as vertical stack below nav, hamburger toggles to close state | — |

**Accessibility** — `role="navigation"`, `aria-label="Main navigation"`. Mobile hamburger has `aria-label="Toggle menu"` and `aria-expanded`. Menu closes on `Escape` key. Smooth-scroll anchor links.

### 2.2 Button

**Purpose** — Primary call-to-action and secondary actions. Two variants.

**Anatomy** — `[icon?] [label] [spinner?]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| `btn-primary` | `--color-primary`, `--color-primary-text` | Primary CTA, form submit |
| `btn-secondary` | `--color-surface`, `--color-text`, `--color-border` | Alternative action, "Learn More" |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | auto | `14px 32px` | `--text-base` (600) |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Solid filled (primary) or white with border (secondary) | Per variant |
| Hover (primary) | Darker bg, lifts 2px, primary shadow | `--color-primary-hover`, `translateY(-2px)`, `--shadow-primary` |
| Hover (secondary) | Primary border and text, lifts 2px | `--color-primary` border/text, `translateY(-2px)` |
| Focus (keyboard) | Visible 3px focus ring | `--color-focus`, `--radius-xs`, `outline-offset: 2px` |
| Active / pressed | Browser default (no custom active) | — |
| Disabled | `opacity` reduced, `cursor: default` (via `disabled` attribute) | Form submit button disabled during loading |
| Loading | Label changes to "Sending...", spinner shown | `#btnSpinner` visible, `#btnLabel` text swap |

**Accessibility** — Minimum hit target ~46px height (exceeds 44×44px). Full-width on mobile form.

### 2.3 Feature Card

**Purpose** — One item in the feature grid. Presents an icon, title, and description.

**Anatomy** — `[icon] [heading] [description]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White card, light border, no shadow | `--color-surface`, `--color-border`, `--radius-xl` |
| Hover | Lifts 6px, soft shadow, border turns light indigo | `translateY(-6px)`, `--shadow-lg`, `--color-border` → `#C7D2FE` |
| Focus (keyboard) | Visible 3px focus ring (if interactive) | `--color-focus` |
| Active / pressed | Not applicable (non-interactive card) | — |

**Accessibility** — Cards are not interactive by default (no `button` or `a` role). If made interactive, must add appropriate `role` and keyboard handling.

### 2.4 Section Label & Title

**Purpose** — Section heading group used above feature grids and CTA sections.

**Anatomy** — `[overline label] [title h2] [description p?]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Small uppercase label, large bold title, muted description | `--text-sm` (600, uppercase), `--text-h1` (800), `--text-lead` |
| On dark bg | Label turns light indigo | `--color-primary-light` |

### 2.5 Form Input

**Purpose** — Text input and textarea fields in the contact form.

**Anatomy** — `[label] [input/textarea] [error message]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Dark input on dark bg, 2px border, white text | `--color-bg-dark`, `--color-border-strong`, `--color-text-on-dark`, `--radius-sm` |
| Focus | Border turns primary indigo, no outline | `--color-border-focus`, `outline: none` |
| Error | Red border, error message visible below | `--color-danger`, `--color-danger-text` |
| Disabled | Not used in the approved design | — |
| Empty (placeholder) | Placeholder text shown | `placeholder` attribute |
| Filled | White text, valid state (no error indication) | `--color-text-on-dark` |

**Accessibility** — Each input has a visible `<label>`. Inputs have `autocomplete` attributes. Error messages are associated visually below the field.

### 2.6 Form (Contact)

**Purpose** — Collects name, email, and message from visitors.

**Anatomy** — `[name input] [email input] [message textarea] [submit button]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | All fields empty, submit button enabled | — |
| Validating | Real-time validation on `blur` per field | — |
| Error | Red borders + error messages on invalid fields | `--color-danger`, `--color-danger-text` |
| Submitting | Button shows "Sending..." + spinner, button disabled | Loading state of Button component |
| Success | Form hidden, success state shown with checkmark | `--color-success` |
| Reset | "Send Another Message" resets to default state | — |

**Accessibility** — `novalidate` to prevent browser defaults; custom validation logic. Success state is focus-managed (user clicks reset to go back).

### 2.7 Success State

**Purpose** — Shown after the contact form is submitted successfully. Confirms receipt.

**Anatomy** — `[checkmark icon] [heading] [description] [reset button]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Green checkmark, white heading, muted description, secondary reset button | `--color-success`, `--color-text-on-dark`, `--color-text-muted-on-dark` |
| Reset button hover | Border and text lighten | `btn-secondary` variant on dark |
| Focus | Visible 3px focus ring | `--color-focus` |

### 2.8 Footer

**Purpose** — Site footer with brand, navigation columns, social links, and copyright.

**Anatomy** — `[brand + description] [product links] [company links] [legal links] [bottom bar: copyright + social icons]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Dark background, muted text | `--color-bg-darker`, `--color-text-footer` |
| Hover (link) | Text turns light indigo | `--color-primary-light` |
| Hover (social icon) | Border turns indigo, text lightens, subtle bg highlight | `--color-primary`, `--color-primary-light`, `rgba(99,102,241,.1)` |
| Focus (keyboard) | Visible 3px focus ring | `--color-focus` |

**Accessibility** — Social links have `aria-label` (Twitter, GitHub, LinkedIn). Links are `<a>` elements with `href="#"` (placeholder anchors).

## 3. Content and formatting

- **Voice and tone** — Warm, confident, approachable. Uses second-person ("your product", "your visitors"). Short, benefit-oriented sentences.
- **Date, time, number, and currency formats** — Not used in the approved design.
- **Capitalization** — Buttons: Title Case ("Get Started", "Send Message", "Learn More"). Headings: Sentence case ("Everything you need to make an impact", "Ready to say Hello?"). Labels: Title Case ("Your Name", "Email Address", "Message"). Section labels: ALL CAPS ("FEATURES", "GET IN TOUCH").
- **Empty-state and error-message wording pattern** — Error messages start with "Please" and describe the required action: "Please enter your name.", "Please enter a valid email address.", "Please enter a message."

## 4. Known deviations

Where the approved design does not follow its own rules or the anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Primary color (`#6366F1`) | Uses the "AI default" indigo palette (see ai-defaults.md §1) | Stakeholder approved the design as-is | None unless stakeholder requests rebrand |
| Feature icon backgrounds | Gradient fills used decoratively on each icon (ai-defaults.md §2) | Approved design — gradients are small contained areas, not full-section decoration | None |
| Hero and CTA backgrounds | Linear gradients used as section backgrounds (ai-defaults.md §2) | Approved design — hero gradient is subtle blue-to-purple, CTA gradient is two dark tones | None |
| Feature grid layout | 6 features in `auto-fit, minmax(280px, 1fr)` — a generic 3-column pattern (ai-defaults.md §6) | Approved design for a generic landing page | None |
| Section vertical padding | 100px vertical padding on feature and CTA sections — generous spacing (ai-defaults.md §4) | Acceptable for a marketing landing page where scannability is desired | None |
| Form input focus | `outline: none` on `:focus` without a replacement ring | However, `border-color` changes to indigo, and the global `:focus-visible` rule provides outline | None — global `:focus-visible` covers keyboard focus |
| Social link anchors | `href="#"` placeholder links | No social media accounts provided yet | Update when real URLs are available |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-01-15 | Initial design system extracted from approved mockup | # |

