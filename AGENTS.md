# AGENTS.md

This file provides coding standards and operational guidelines for agents working in this repository.

---

## Project Overview

- **Type**: React + TypeScript + Vite single-page portfolio application
- **Stack**: React 18, TypeScript (strict), styled-components v6, react-i18next, Radix UI, Phosphor Icons
- **Theme**: Custom theme object in `src/types/theme.ts`; all theme values accessed via `props.theme.*`
- **Routing**: React Router v6 (single-page with hash-based scroll navigation)
- **i18n**: i18next with type-checked translation keys via `t()` function

---

## Commands

```bash
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # TypeScript check + Vite production build → dist/
npm run lint       # ESLint (--max-warnings 0, TypeScript + TSX)
npm run preview    # Preview production build locally
npm run deploy     # Build then deploy dist/ to GitHub Pages
```

- **No test runner is configured** (no Vitest, Jest, or Playwright test scripts in package.json)
- ESLint rule `react-refresh/only-export-components` warns on non-component exports; use named exports for components
- `noUnusedLocals` and `noUnusedParameters` are enabled in tsconfig — unused code causes build failures

---

## Type Safety

- TypeScript `strict` mode is enforced
- Define explicit interfaces/types for all data structures; avoid `any`
- Use `unknown` when the type is truly unknown, then narrow it
- Shared types live in `src/types/` and are re-exported from `src/types/index.ts`
- Theme typing: import `DefaultTheme` from `styled-components` for theme-aware styled component props

---

## Code Style

### Formatting & Style
- Use **single quotes** for strings unless double quotes are required
- Use **2-space indentation** (Vite default)
- **No semicolons**
- Prefer **named exports** over default exports for all components and functions
- Keep lines under ~120 characters; break long lines at natural boundaries
- No trailing whitespace; end files with a newline

### Imports
Import order (top to bottom, blank line between groups):
1. React and hooks (`react`, `react-dom`)
2. Third-party libraries (`@phosphor-icons/react`, `styled-components`, `react-i18next`, etc.)
3. Internal imports (`../../constants`, `../language-select`, etc.)
4. Type imports (`import type { Foo }` when only types are imported)
5. Relative style files (`./style`, `./styles`)

```tsx
import { useEffect, useState } from 'react'
import { Code, GraduationCap } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import * as Dialog from '@radix-ui/react-dialog'

import { LanguageSelect } from '../language-select'
import { HEADER_HEIGHT_EXPANDED } from '../../constants'
import { GlobalStyle } from './styles/global'
import type { Project } from '../types'
```

### Naming Conventions
| Thing              | Convention          | Example                          |
|--------------------|---------------------|----------------------------------|
| Components         | PascalCase          | `Header`, `ProjectCard`          |
| Component files    | `index.tsx`         | `src/components/header/index.tsx` |
| Styled components  | PascalCase          | `HeaderContainer`, `NavbarLink`  |
| Style files        | `style.ts`          | `src/components/header/style.ts` |
| TypeScript types   | PascalCase          | `Project`, `ThemeColours`        |
| Constants          | SCREAMING_SNAKE_CASE| `HEADER_HEIGHT_EXPANDED`        |
| Translation keys   | dot.case            | `about.title`, `projects.card`   |
| CSS classes        | kebab-case          | (not used — styled-components)   |

### Styled Components
- All styled components defined in a co-located `style.ts` file per component/feature
- Access theme values via `props.theme.colours.*`, `props.theme.fontSizes.*`, etc.
- Do not hardcode color values or sizes; use theme tokens
- Breakpoints: use `BREAKPOINT_MOBILE` (600) and `BREAKPOINT_TABLET` (900) from `constants/index.ts`
- Animation durations: keep consistent; prefer `0.2s ease-in-out` for hover transitions

### Components
- Prefer **named function declarations** (`export function Header()`) over arrow function variable assignments
- Keep components focused on a single responsibility
- Extract static data (arrays, objects) to typed files in `src/data/`
- Use `React.memo()` for pure components that re-render frequently with the same props
- Use `useCallback` for callback props passed to memoized children

### Constants
- All magic numbers and layout values must be defined in `src/constants/index.ts`
- Breakpoints, dimensions, scroll thresholds, localStorage keys go in constants

### i18n (Internationalization)
- Every user-facing string must use the `t()` translation function
- Translation keys are dot-separated: `about.title`, `nav.projects`
- Keys are type-checked at compile time via `react-i18next` and `i18next-resources-for-ts`
- Supported languages are defined as a readonly tuple in `src/i18n.ts` (`SUPPORTED_LANGUAGES`)
- Language preference is persisted in localStorage under `portfolio-language` key (via `LOCAL_STORAGE_LANGUAGE_KEY` constant)

### Error Handling & Side Effects
- Keep functions small and single-purpose
- Prefer pure functions; minimize side effects
- Remove debug statements (`console.log`, `debugger`) before committing
- Comments should explain **why**, not **what**

---

## File & Directory Structure

```
src/
  @types/          # Type declarations (e.g., i18next.d.ts)
  assets/          # Static images (user.png, etc.)
  components/      # Reusable UI components (one folder per component)
    component-name/
      index.tsx    # Component implementation
      style.ts     # Styled components
  constants/       # App-wide constants (index.ts)
  data/            # Static typed data (projects.ts)
  i18n.ts          # i18next configuration
  layouts/         # Page layouts (default-layout.tsx, styles.ts)
  locales/         # Translation JSON files (en/, pt/)
  pages/           # Route pages (home, projects, etc.)
  styles/          # Global styles (global.ts)
  types/           # Shared TypeScript types (theme.ts, project.ts, etc.)
  app.tsx          # Root component with providers
  main.tsx         # Entry point
  router.tsx       # Route definitions
```

---

## Performance

- Use `lazy()` from React with `Suspense` for route-level code splitting (not currently applied but convention is established)
- Memoize expensive computations with `useMemo`
- Avoid inline object/array literals in JSX props (they cause unnecessary re-renders)
- Lazy-load heavy components (e.g., `react-router-dom` lazy loading for pages)

---

## Git & Commit Conventions

- Do **not** commit build artifacts, node_modules, or .env files
- Keep commits focused and atomic (one logical change per commit)
- No `--force` pushes to main/master branches
