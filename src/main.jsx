import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routes from './Routes/Routes.jsx'
import UsersContexts from './Context/UsersContexts.jsx'

createRoot(document.getElementById('root')).render(
  <UsersContexts>
    <StrictMode>
    <Routes></Routes>
  </StrictMode>
  </UsersContexts>
)
