import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import microApp from '@micro-zoe/micro-app'
microApp.start()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
