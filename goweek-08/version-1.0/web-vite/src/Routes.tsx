import { Routes, Route } from 'react-router-dom'

import { SignIn } from './pages/SignIn'
import { Main } from './pages/Main'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dev/:id" element={<Main />} />
    </Routes>
  )
}
