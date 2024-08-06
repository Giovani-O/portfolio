import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'
import { Home } from './pages/home'

export function Router() {
  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  )
}
