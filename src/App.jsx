import React from 'react';
import ProtectedRoute from './components/user/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // Import AboutPage
import ContactPage from './pages/ContactPage';
import CarListingPage from './pages/CarListingPage';


const App = () =>
{
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/cars" element={
              <ProtectedRoute>
                <CarListingPage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<h1 className="text-center text-2xl text-red-500">404 - Page Not Found</h1>} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;