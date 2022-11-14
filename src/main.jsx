import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthContextProvider from './service/AuthContext'

//Style 
import darktheme from './Themes'

import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/chat" element={<App/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
