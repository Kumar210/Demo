import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppWrapper from './Components/AppWrapper/AppWrapper'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppWrapper>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppWrapper>
)
