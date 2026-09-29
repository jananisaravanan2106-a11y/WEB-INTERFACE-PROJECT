import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pro2.css'
import AttendanceTracker from './pro2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AttendanceTracker />
  </StrictMode>,
)
