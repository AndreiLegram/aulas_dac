import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CalculoImc from './components/CalculoImc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculoImc />
  </StrictMode>,
)
