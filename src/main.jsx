import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home} from './pages/home'
import { ProjectsPage } from './pages/projectsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectsPage />
  </StrictMode>,
)
