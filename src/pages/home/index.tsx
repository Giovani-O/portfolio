import { BasePanel } from '../../components/base-panel'
import { Footer } from '../../components/footer'
import { Separator } from '../../components/separator'
import { About } from '../about'
import { Experience } from '../experience'
import { Projects } from '../projects'
import { Spacer } from './style'

export function Home() {
  return (
    <main id="home">
      <Spacer />
      <BasePanel>
        <About />
        <Separator />
        <Experience />
        <Separator />
        <Projects />
      </BasePanel>
      <Footer />
    </main>
  )
}
