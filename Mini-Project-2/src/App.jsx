import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <div>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </div>
    </>
  )
}

export default App
