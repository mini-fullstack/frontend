import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import LoginPage from './pages/LoginPage'
import ReservationPage from './pages/ReservationPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ReservationPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App