# Projects Section Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace carousel with responsive card grid, accordion pattern, and expandable descriptions.

**Architecture:** Component-based refactor. New `ExpandableDescription` component for truncation. Refactored `ProjectCard` with image-first layout. New `ProjectsGrid` with accordion logic. State managed in page component.

**Tech Stack:** React 18, TypeScript, styled-components v6, react-i18next

---

## File Structure

### Files to Create

```
src/components/expandable-description/
├── index.tsx    # ExpandableDescription component
└── style.ts     # ShowMoreButton styled component

src/pages/projects/projects-grid/
├── index.tsx    # ProjectsGrid with accordion logic
└── style.ts     # Grid, ExpandButton styled components
```

### Files to Modify

```
src/components/project-card/
├── index.tsx    # Restructure: image → title → tags → description → buttons
└── style.ts     # CardContainer, ImageContainer, button styles

src/pages/projects/
├── index.tsx    # Add isExpanded state, replace carousel with grid
└── style.ts     # (minor adjustments if needed)

src/constants/index.ts  # Add PROJECT_DESCRIPTION_MAX_LENGTH, PROJECTS_VISIBLE_COUNT

src/locales/en.json     # Add translation keys
src/locales/pt.json     # Add translation keys
```

### Files to Delete

```
src/pages/projects/projects-carousel/  # Entire folder
```

---

## Task 1: Add Constants and Translation Keys

**Files:**
- Modify: `src/constants/index.ts`
- Modify: `src/locales/en.json`
- Modify: `src/locales/pt.json`

- [ ] **Step 1: Add constants to `src/constants/index.ts`**

Add these constants at the end of the file:

```typescript
export const PROJECT_DESCRIPTION_MAX_LENGTH = 600
export const PROJECTS_VISIBLE_COUNT = 4
```

- [ ] **Step 2: Add English translations to `src/locales/en.json`**

Add these keys after the `"projects-subtitle"` line (line 23):

```json
  "show-more": "Show more",
  "show-less": "Show less",
  "show-all-projects": "Show all projects",
  "show-less-projects": "Show less",
  "view-site": "View Site",
  "view-code": "View Code",
```

- [ ] **Step 3: Add Portuguese translations to `src/locales/pt.json`**

Add these keys after the `"projects-subtitle"` line (line 23):

```json
  "show-more": "Mostrar mais",
  "show-less": "Mostrar menos",
  "show-all-projects": "Mostrar todos os projetos",
  "show-less-projects": "Mostrar menos",
  "view-site": "Ver Site",
  "view-code": "Ver Código",
```

- [ ] **Step 4: Commit constants and translations**

```bash
git add src/constants/index.ts src/locales/en.json src/locales/pt.json
git commit -m "feat: add constants and translations for projects refactor"
```

---

## Task 2: Create ExpandableDescription Component

**Files:**
- Create: `src/components/expandable-description/index.tsx`
- Create: `src/components/expandable-description/style.ts`

- [ ] **Step 1: Create `src/components/expandable-description/style.ts`**

```typescript
import styled from 'styled-components'

export const ShowMoreButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colours.white};
  font-size: 0.8rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  cursor: pointer;
  padding: 0;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`
```

- [ ] **Step 2: Create `src/components/expandable-description/index.tsx`**

```typescript
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ShowMoreButton } from './style'
import { PROJECT_DESCRIPTION_MAX_LENGTH } from '../../constants'

interface ExpandableDescriptionProps {
  text: string
  maxLength?: number
}

export function ExpandableDescription({
  text,
  maxLength = PROJECT_DESCRIPTION_MAX_LENGTH,
}: ExpandableDescriptionProps) {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  if (text.length <= maxLength) {
    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }

  const truncatedText = text.slice(0, maxLength) + '...'

  return (
    <>
      <span
        dangerouslySetInnerHTML={{
          __html: isExpanded ? text : truncatedText,
        }}
      />
      <ShowMoreButton onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? t('show-less') : t('show-more')}
      </ShowMoreButton>
    </>
  )
}
```

- [ ] **Step 3: Commit ExpandableDescription component**

```bash
git add src/components/expandable-description/
git commit -m "feat: add ExpandableDescription component"
```

---

## Task 3: Refactor ProjectCard Component Styles

**Files:**
- Modify: `src/components/project-card/style.ts`

- [ ] **Step 1: Replace entire content of `src/components/project-card/style.ts`**

```typescript
import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme.colours['card-background-mobile']};
  border-radius: 8px;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContentContainer = styled.div`
  padding: 16px;
`

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  text-align: center;
  margin: 0 0 12px 0;
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`

export const Tag = styled.span`
  font-size: ${(props) => props.theme.fontSizes.tag};
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.colours.stroke};
  color: ${(props) => props.theme.colours.white};
  padding: 4px 12px;
  border-radius: 16px;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: perspective(1000px) translateZ(60px);
    background-color: rgba(30, 30, 30, 0.1);
    border-color: rgba(125, 88, 234, 0.3);
  }
`

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: justify;
  line-height: 1.5;
  white-space: pre-line;
  margin: 0;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.tag};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`

export const PrimaryButton = styled.a`
  flex: 1;
  background: transparent;
  border: 2px solid ${(props) => props.theme.colours.white};
  color: ${(props) => props.theme.colours.white};
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export const SecondaryButton = styled.a`
  flex: 1;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: ${(props) => props.theme.colours.offwhite};
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
```

- [ ] **Step 2: Commit ProjectCard styles**

```bash
git add src/components/project-card/style.ts
git commit -m "refactor: update ProjectCard styles for new layout"
```

---

## Task 4: Refactor ProjectCard Component

**Files:**
- Modify: `src/components/project-card/index.tsx`

- [ ] **Step 1: Replace entire content of `src/components/project-card/index.tsx`**

```typescript
import { useTranslation } from 'react-i18next'
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
  Description,
  ImageContainer,
  PrimaryButton,
  SecondaryButton,
  Tag,
  Tags,
  Title,
} from './style'
import { ExpandableDescription } from '../expandable-description'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <CardContainer>
      <ImageContainer>
        <img src={project.image} alt={t(project.imageAltKey)} loading="lazy" />
      </ImageContainer>

      <ContentContainer>
        <Title>{t(project.titleKey)}</Title>

        <Tags>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>

        <Description>
          <ExpandableDescription text={t(project.descriptionKey)} />
        </Description>

        <ButtonContainer>
          {project.linkSite && (
            <PrimaryButton
              href={project.linkSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('view-site')}
            </PrimaryButton>
          )}
          <SecondaryButton
            href={project.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('view-code')}
          </SecondaryButton>
        </ButtonContainer>
      </ContentContainer>
    </CardContainer>
  )
}
```

- [ ] **Step 2: Commit ProjectCard component**

```bash
git add src/components/project-card/index.tsx
git commit -m "refactor: update ProjectCard to use new layout and ExpandableDescription"
```

---

## Task 5: Create ProjectsGrid Component Styles

**Files:**
- Create: `src/pages/projects/projects-grid/style.ts`

- [ ] **Step 1: Create directory for projects-grid**

```bash
mkdir -p src/pages/projects/projects-grid
```

- [ ] **Step 2: Create `src/pages/projects/projects-grid/style.ts`**

```typescript
import styled from 'styled-components'
import { BREAKPOINT_MOBILE } from '../../../constants'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${BREAKPOINT_MOBILE}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ExpandButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`

export const ExpandButton = styled.button`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: ${(props) => props.theme.colours.white};
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
```

- [ ] **Step 3: Commit ProjectsGrid styles**

```bash
git add src/pages/projects/projects-grid/
git commit -m "feat: add ProjectsGrid styles"
```

---

## Task 6: Create ProjectsGrid Component

**Files:**
- Create: `src/pages/projects/projects-grid/index.tsx`

- [ ] **Step 1: Create `src/pages/projects/projects-grid/index.tsx`**

```typescript
import { useTranslation } from 'react-i18next'
import { ExpandButton, ExpandButtonContainer, Grid } from './style'
import { ProjectCard } from '../../../components/project-card'
import { projects } from '../../../data/projects'
import { PROJECTS_VISIBLE_COUNT } from '../../../constants'

interface ProjectsGridProps {
  isExpanded: boolean
  onToggle: () => void
}

export function ProjectsGrid({ isExpanded, onToggle }: ProjectsGridProps) {
  const { t } = useTranslation()

  const visibleProjects = isExpanded
    ? projects
    : projects.slice(0, PROJECTS_VISIBLE_COUNT)

  return (
    <>
      <Grid>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.titleKey} project={project} />
        ))}
      </Grid>
      {projects.length > PROJECTS_VISIBLE_COUNT && (
        <ExpandButtonContainer>
          <ExpandButton onClick={onToggle}>
            {isExpanded ? t('show-less-projects') : t('show-all-projects')}
          </ExpandButton>
        </ExpandButtonContainer>
      )}
    </>
  )
}
```

- [ ] **Step 2: Commit ProjectsGrid component**

```bash
git add src/pages/projects/projects-grid/index.tsx
git commit -m "feat: add ProjectsGrid component with accordion logic"
```

---

## Task 7: Update Projects Page

**Files:**
- Modify: `src/pages/projects/index.tsx`

- [ ] **Step 1: Replace content of `src/pages/projects/index.tsx`**

```typescript
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Subtitle, Title, TitleContainer } from './style'
import { ProjectsGrid } from './projects-grid'

export function Projects() {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div id="projects">
      <TitleContainer>
        <Title>{t('projects')}</Title>
        <Subtitle>{t('projects-subtitle')}</Subtitle>
      </TitleContainer>

      <ProjectsGrid
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />
    </div>
  )
}
```

- [ ] **Step 2: Commit Projects page update**

```bash
git add src/pages/projects/index.tsx
git commit -m "refactor: update Projects page to use ProjectsGrid"
```

---

## Task 8: Delete Carousel and Clean Up

**Files:**
- Delete: `src/pages/projects/projects-carousel/` (entire folder)

- [ ] **Step 1: Delete the projects-carousel folder**

```bash
rm -rf src/pages/projects/projects-carousel
```

- [ ] **Step 2: Commit deletion**

```bash
git add -A
git commit -m "refactor: remove carousel, use grid layout"
```

---

## Task 9: Verify Build and Lint

- [ ] **Step 1: Run TypeScript check**

```bash
npm run build
```

Expected: Build completes without errors.

- [ ] **Step 2: Run ESLint**

```bash
npm run lint
```

Expected: No linting errors.

- [ ] **Step 3: Test in browser**

```bash
npm run dev
```

Manually verify:
- Grid shows 4 projects by default
- "Show all projects" button reveals all 5 projects
- Cards display: image → title → tags → description → buttons
- Long descriptions are truncated with "Show more" option
- Responsive: 2 cards/row on desktop, 1 card/row on mobile
- All buttons and links work correctly
- Language switching works for all new keys

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: address build/lint issues"
```

---

## Summary

This plan implements the projects section refactor in 9 tasks:
1. Add constants and translations
2. Create ExpandableDescription component
3. Refactor ProjectCard styles
4. Refactor ProjectCard component
5. Create ProjectsGrid styles
6. Create ProjectsGrid component
7. Update Projects page
8. Delete carousel
9. Verify build and test
