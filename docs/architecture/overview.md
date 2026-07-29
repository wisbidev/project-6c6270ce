# Architecture Overview — Hello Word Landing

**Project shape:** `static` — frontend only, no backend, no database

## 1. Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 15 App Router | Established default; SSR/SSG capable if needed |
| Language | TypeScript (strict) | Type safety, maintained default |
| Styling | Tailwind CSS v3 | Design system integration; no alternatives evaluated |
| Linting | ESLint + `next/core-web-vitals` | Built-in Next.js linting; catches issues before review |
| Container | Docker (single frontend service) | Consistent local dev + production-like env |

**Rejected alternatives:**
- Vite/React SPA: Next.js App Router adds SSR capability without extra cost; a plain SPA would lose that.
- Plain CSS or CSS Modules: Tailwind's design-token integration with the approved brand colors reduces hand-authored CSS.

## 2. Folder Structure

```
code/
  frontend/                  # Next.js application
    app/
      layout.tsx             # Root layout with fonts, metadata
      page.tsx              # Landing page (Hero + Features + CTA + Footer)
      globals.css            # Tailwind directives + global resets
    components/              # Reusable UI components (per section)
      Hero.tsx
      Features.tsx
      FeatureCard.tsx
      ContactForm.tsx
      Footer.tsx
      BackToTop.tsx
    package.json             # Pinned deps: next, react, react-dom, types
    tsconfig.json            # Strict TypeScript config
    next.config.js           # Minimal Next.js config
    tailwind.config.ts       # Brand colors from design system
    postcss.config.js        # Tailwind processing
    .eslintrc.json           # next/core-web-vitals + TypeScript rules
    .env.example             # NEXT_PUBLIC_* vars (no secrets)
    .gitignore
    Dockerfile               # Multi-stage: node:20-alpine → standalone
```

**Root-level artifacts:**
```
docs/architecture/
  overview.md                # This document
docker-compose.yml           # Single `frontend` service
.env.example                 # NEXT_PUBLIC_SITE_URL only
.github/workflows/
  ci.yml                     # Lint + build + test gate
.gitignore
```

## 3. Key Design Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Contact form submission | `mailto:` link (or third-party service) | SRS specifies no custom backend; preserves static shape |
| Social links | Placeholder `#` hrefs | Stakeholder provides real URLs before launch |
| Success/error states | Inline React state (no API call) | Stateless form; state lives in component |
| Brand colors | Defined in `tailwind.config.ts` from design system | Single source of truth; no hardcoded hex values |
| Responsive breakpoints | 320px (mobile), 768px (tablet), 1024px (desktop) | Matches SRS breakpoints |

## 4. Naming Conventions

| Pattern | Rule | Example |
|---|---|---|
| Components | `PascalCase.tsx`, `export default function ComponentName()` | `Hero.tsx`, `export default function Hero()` |
| Utility functions | `camelCase.ts` | `formatters.ts` |
| Tailwind classes | Tailwind's standard naming | `bg-indigo-600`, `text-white` |
| CSS variables | `--brand-*` from design tokens | `--brand-primary: #6366F1` |

**Never use:**
- `const X = () =>` for component definitions
- `function X()` without `export default`
- Hardcoded color values (use Tailwind variables or CSS custom properties)

## 5. Environment Variables

### `code/frontend/.env.example`

```env
# Site URL for meta tags and canonical links
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact form endpoint (mailto: or third-party service URL)
# Replace with Formspree, EmailJS, or similar before launch
NEXT_PUBLIC_FORM_ENDPOINT=mailto:hello@helloword.com
```

### Root `.env.example`

```env
# Frontend container port (exposed externally)
FRONTEND_PORT=3000
```

## 6. How to Run

### Local development

```bash
# Install dependencies
cd code/frontend
npm install

# Start dev server (hot reload)
npm run dev
```

### With Docker

```bash
# From repo root
docker compose up --build

# App available at http://localhost:3000
```

### CI verification

```bash
# Frontend
cd code/frontend
npm ci
npm run lint
npm run build
```

## 7. Docker Compose

Single service (`frontend`) for this static shape. No `db` or `backend` services.

```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: code/frontend/Dockerfile
    ports:
      - "${FRONTEND_PORT:-3000}:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=http://localhost:${FRONTEND_PORT:-3000}
      - NEXT_PUBLIC_FORM_ENDPOINT=${NEXT_PUBLIC_FORM_ENDPOINT:-mailto:hello@helloword.com}
```

## 8. CI Workflow

Runs on every PR and push to `main`. Two jobs:

| Job | Commands |
|---|---|
| `frontend` | `npm ci && npm run lint && npm run build` |
| `compose` | `docker compose config -q` |

No `backend` or `db` job — this shape has no backend.

## 9. Contact Form Implementation Note

Per SRS Section 7:
- Default: `mailto:hello@helloword.com`
- Alternative: Third-party service (Formspree, EmailJS, etc.)
- Dev swaps the `NEXT_PUBLIC_FORM_ENDPOINT` value before launch

## 10. Dependencies

```json
// code/frontend/package.json (pinned versions)
{
  "dependencies": {
    "next": "15.1.0",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "typescript": "5.7.2",
    "@types/react": "19.0.2",
    "@types/react-dom": "19.0.2",
    "@types/node": "22.10.2",
    "tailwindcss": "3.4.17",
    "postcss": "8.4.49",
    "autoprefixer": "10.4.20",
    "eslint": "9.18.0",
    "eslint-config-next": "15.1.0"
  }
}
```

All versions pinned to avoid CI drift. Adding a dep requires a PR comment stating the reason and what it replaces.
