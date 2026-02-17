import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRoute} from "react-router-dom"
import './index.css'
import {Home} from './pages/home'
import { ProjectsPage } from './pages/projectsPage'

createRoot(document.getElementById('root')).render(
  <BrowserRoute>
    <Home />
  </BrowserRoute>,
)
