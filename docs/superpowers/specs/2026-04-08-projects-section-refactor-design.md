# Projects Section Refactor Design

**Date:** 2026-04-08
**Status:** Approved

## Overview

Refactor the portfolio's projects section from a carousel to a responsive card grid with accordion expansion. Replace the single-item carousel with a grid showing all projects, using an accordion pattern to display 4 projects by default with an option to expand and show all.

## Goals

- Display all projects visible at once (no carousel navigation)
- Responsive grid: 2 cards per row on tablet/desktop, 1 card per row on mobile
- Accordion pattern: show 4 projects by default, expandable to show all
- Truncate long descriptions (600+ chars) with expand/collapse per card
- Maintain existing neutral/monochrome design aesthetic
- Preserve existing Project data structure and translations

## Component Architecture

### Files to Create

```
src/pages/projects/
├── projects-grid/
│   ├── index.tsx    # Grid component with accordion logic
│   └── style.ts     # Grid, ExpandButton styles

src/components/
└── expandable-description/
    ├── index.tsx    # Expandable text component
    └── style.ts     # ShowMoreButton styles
```

### Files to Modify

```
src/pages/projects/
├── index.tsx       # Add isExpanded state, render ProjectsGrid
└── style.ts        # Add any page-level adjustments

src/components/project-card/
├── index.tsx       # Restructure: image → title → tags → description → buttons
└── style.ts        # Full-width image, button styles, card container
```

### Files to Delete

```
src/pages/projects/projects-carousel/  # Entire folder
```

### Component Hierarchy

```
Projects (page)
├── TitleContainer
├── ProjectsGrid
│   ├── Grid (styled div)
│   │   └── ProjectCard × N (rendered based on isExpanded)
│   │       ├── Image (full width, object-fit: cover)
│   │       ├── Title
│   │       ├── Tags (existing pill style)
│   │       ├── ExpandableDescription
│   │       │   ├── Description text (truncated if > 600 chars)
│   │       │   └── Show more/less button
│   │       └── Action Buttons
│   │           ├── View Site (if linkSite exists)
│   │           └── View Code (always present)
│   └── ExpandButton ("Show all projects" / "Show less")
```

## State Management

### Projects (page component)

- `isExpanded: boolean` — controls accordion state (show 4 vs show all)

### ExpandableDescription

- `isDescriptionExpanded: boolean` — controls per-card description expansion

### State Flow

```
Projects
  └── isExpanded (local state)
        │
        ▼
ProjectsGrid
  └── props: isExpanded, onToggle
        │
        ▼
ProjectCard × N
  └── props: project
        │
        ▼
ExpandableDescription
  └── props: text, maxLength={600}
      manages own isDescriptionExpanded state
```

## Responsive Grid

### Breakpoints

- **Mobile (≤600px):** 1 card per row
- **Tablet/Desktop (>600px):** 2 cards per row

### Grid CSS

```tsx
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${BREAKPOINT_MOBILE}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
```

## Card Structure

### Layout Order

1. **Image** — full width, fixed height (180px), `object-fit: cover`
2. **Title** — centered, `theme.fontSizes.lg`
3. **Tags** — horizontal wrap, existing pill style
4. **ExpandableDescription** — truncated at 600 chars with "Show more/less"
5. **Action Buttons** — side-by-side with gap

### Card Container

```tsx
export const CardContainer = styled.div`
  background: #101013;
  border-radius: 8px;
  overflow: hidden;
`
```

### Image Container

```tsx
export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
```

## Button Styles

### Action Buttons (View Site / View Code)

**Primary (View Site):**
```tsx
export const PrimaryButton = styled.a`
  flex: 1;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
```

**Secondary (View Code):**
```tsx
export const SecondaryButton = styled.a`
  flex: 1;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #a1a1aa;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
```

**Button Container:**
```tsx
export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`
```

### Expandable Description Button

```tsx
export const ShowMoreButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`
```

### Accordion "Show All" Button

```tsx
export const ExpandButton = styled.button`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 24px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
```

## ExpandableDescription Component

### Props

```tsx
interface ExpandableDescriptionProps {
  text: string
  maxLength?: number  // default: 600
}
```

### Behavior

- If `text.length <= maxLength`: render full text, no button
- If `text.length > maxLength`:
  - Collapsed: show truncated text (first `maxLength` chars) + "... " + "Show more" button
  - Expanded: show full text + "Show less" button

### Implementation Notes

- Use `-webkit-line-clamp` for CSS-based truncation as fallback
- Track `isExpanded` in local state
- Preserve HTML content if description contains markup (use `dangerouslySetInnerHTML` if needed)

## Accordion Logic

### ProjectsGrid Behavior

```tsx
const VISIBLE_COUNT = 4

function ProjectsGrid({ isExpanded, onToggle }) {
  const visibleProjects = isExpanded
    ? projects
    : projects.slice(0, VISIBLE_COUNT)

  return (
    <>
      <Grid>
        {visibleProjects.map(project => (
          <ProjectCard key={project.titleKey} project={project} />
        ))}
      </Grid>
      {projects.length > VISIBLE_COUNT && (
        <ExpandButton onClick={onToggle}>
          {isExpanded ? 'Show less' : 'Show all projects'}
        </ExpandButton>
      )}
    </>
  )
}
```

## Translation Keys

Add to `locales/en/translation.json` and `locales/pt/translation.json`:

```json
{
  "show-more": "Show more",
  "show-less": "Show less",
  "show-all-projects": "Show all projects",
  "show-less-projects": "Show less",
  "view-site": "View Site",
  "view-code": "View Code"
}
```

## Constants

Add to `src/constants/index.ts`:

```tsx
export const PROJECT_DESCRIPTION_MAX_LENGTH = 600
export const PROJECTS_VISIBLE_COUNT = 4
```

## Accessibility

- Buttons use semantic `<button>` elements
- Link buttons use `<a>` with `target="_blank"` and `rel="noopener noreferrer"`
- Expand/collapse buttons have clear text labels
- Color contrast meets WCAG AA (white on dark background)

## Testing Considerations

- Verify grid layout at 320px, 600px, and 1200px viewports
- Test description truncation with various text lengths
- Verify accordion shows/hides correct number of projects
- Test keyboard navigation for buttons
- Verify all links open correctly

## Migration Steps

1. Create `ExpandableDescription` component
2. Refactor `ProjectCard` with new structure and buttons
3. Create `ProjectsGrid` component
4. Update `Projects` page to use `ProjectsGrid` with accordion state
5. Delete `projects-carousel` folder
6. Add translation keys
7. Add constants
8. Remove unused carousel-related code

## Out of Scope

- Animation/transition for accordion expand (can be added later)
- Filtering or sorting projects
- Lazy loading images (existing `loading="lazy"` preserved)
- Project detail modal/page

## Summary

This refactor replaces the carousel with a responsive 2-column grid (1 on mobile), shows 4 projects by default with an accordion to reveal all, and truncates long descriptions with expand/collapse per card. All buttons use a neutral outlined style consistent with the site's monochrome aesthetic.
