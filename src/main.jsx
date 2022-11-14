import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

//Style 
import darktheme from './Themes'

import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
