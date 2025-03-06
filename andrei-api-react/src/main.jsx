import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyGet from './routes/MyGet'
import MyPost from './routes/MyPost'
import MyDelete from './routes/MyDelete'
import MyUpdate from './routes/MyUpdate'
import MyAll from './routes/MyAll'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGet />
    <MyPost />
    <MyDelete />
    <MyUpdate />
    <MyAll />
  </StrictMode>,
)
