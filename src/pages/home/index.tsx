import { BasePanel } from '../../components/base-panel'
import { Footer } from '../../components/footer'
import { Separator } from '../../components/separator'
import { Spacer } from './style'
import { lazy, Suspense } from 'react'

const About = lazy(() => import('../about'))
const Experience = lazy(() => import('../experience'))
const Projects = lazy(() => import('../projects'))

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
