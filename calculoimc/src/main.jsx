import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CalculoImc from './components/CalculoImc.jsx'
import TabelaImc from './components/TabelaImc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculoImc />
    <br/>
    <TabelaImc />
  </StrictMode>,
)
