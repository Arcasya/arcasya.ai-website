// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home' // ✅ import your Home page instead of App
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home /> {/* ✅ render Home instead of App */}
  </React.StrictMode>
)
