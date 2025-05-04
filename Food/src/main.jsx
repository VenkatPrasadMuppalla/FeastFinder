import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Recipe from './Components/Recipe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Recipe />
  </StrictMode>,
)
