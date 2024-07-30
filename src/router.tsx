import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { About } from './pages/about'
import { Experience } from './pages/experience'
import { Projects } from './pages/projects'
import { DefaultLayout } from './layouts/default-layout'

export function Router() {
  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
        <Route path="" element={<Navigate to="/about" replace />} />
      </Route>
    </Routes>
  )
}
