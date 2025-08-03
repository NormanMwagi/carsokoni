import React from 'react';
import ProtectedRoute from './components/user/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


const App = () =>
{
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;