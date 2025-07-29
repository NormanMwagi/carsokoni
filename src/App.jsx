import React from 'react'
import Header from './components/common/Header'
import ProtectedRoute from './components/user/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () =>
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/protected" element={<ProtectedRoute />} />
      </Routes>
    </Router>
  )
}

export default App
