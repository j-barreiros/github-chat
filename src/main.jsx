import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './index.css'

//Style 
import darktheme from './Themes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
