# Code Standards

This document outlines the coding standards for this project. All changes must adhere to these guidelines.

## Type Safety

- Use TypeScript strict mode at all times
- Define explicit interfaces/types for all data structures
- Leverage existing types from `types/` before creating new ones
- Avoid `any` type; use `unknown` when type is truly unknown
- Export types from `types/index.ts` for shared interfaces

## Styled Components

- Import the `DefaultTheme` type for theme-aware props
- Use theme values via `props.theme.*` for consistency
- Define breakpoints and layout values in `constants/index.ts`
- Keep styles co-located in a `style.ts` file within each component folder

## i18n

- All user-facing strings must use translation keys from `t()`
- Translation keys are type-checked; invalid keys will cause compilation errors
- Use the selector API for type-safe key access when possible

## Components

- Prefer named exports over default exports
- Keep components focused on a single responsibility
- Use `React.memo()` for pure components that re-render frequently
- Extract static data (arrays, objects) to typed data files in `data/`

## Constants

- Magic numbers and strings must be defined in `constants/index.ts`
- Use SCREAMING_SNAKE_CASE for constant names
- Breakpoints, dimensions, and layout values belong in constants

## Clean Code

- Remove debug statements (`console.log`, `debugger`) before committing
- Comments should explain "why", not "what"
- Keep functions small and single-purpose
- Avoid side effects; prefer pure functions where possible

## Imports

- Use path aliases or relative imports consistently
- Group imports: React → third-party → internal → styles
- Remove unused imports; they cause build failures

## Testing

- Write tests for utility functions and hooks
- Keep tests near the code they test

## Performance

- Use `lazy()` with `Suspense` for route-level code splitting
- Memoize expensive computations with `useMemo`
- Memoize callback props with `useCallback`
- Avoid inline object/array literals in JSX props
