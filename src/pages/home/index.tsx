import { BasePanel } from '../../components/base-panel'
import { Footer } from '../../components/footer'
import { Separator } from '../../components/separator'
import { Spacer } from './style'
import { lazy, Suspense } from 'react'

const About = lazy(() => import('../about').then((m) => ({ default: m.About })))
const Experience = lazy(() =>
  import('../experience').then((m) => ({ default: m.Experience }))
)
const Projects = lazy(() =>
  import('../projects').then((m) => ({ default: m.Projects }))
)

export function Home() {
  return (
    <main id="home">
      <Spacer />
      <BasePanel>
        <Suspense fallback={<p>Loading...</p>}>
          <About />
        </Suspense>
        <Separator />

        <Suspense fallback={<p>Loading...</p>}>
          <Experience />
        </Suspense>
        <Separator />

        <Suspense fallback={<p>Loading...</p>}>
          <Projects />
        </Suspense>
      </BasePanel>
      <Footer />
    </main>
  )
}
