import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { About } from './assets/pages/about'
import { Experience } from './assets/pages/experience'
import { Projects } from './assets/pages/projects'

export function Router() {
  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
    </Routes>
  )
}
