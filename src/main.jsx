import React from 'react'
import ReactDOM from 'react-dom/client'
import { UsersPage } from './pages/UsersPage'
import { UsersApp } from './UsersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
  </React.StrictMode>,
)
