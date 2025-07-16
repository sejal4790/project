import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Heritage from './components/Heritage';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Auth Pages
import Login from './components/Auth/Login';
import SignupPage from './components/Auth/Signup';
import Dashboard from './components/Auth/Dashboard';
import NotFound from './components/Auth/NotFound';

// ✅ HomePage Layout (Only for logged-in users)
function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Heritage />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="font-sans text-secondary-950 bg-secondary-50 overflow-x-hidden">
          <Routes>
            {/* ✅ Protect Homepage with live localStorage check */}
            <Route
              path="/"
              element={
                localStorage.getItem("isLoggedIn") === "true" ? (
                  <HomePage />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* ✅ Protect Dashboard as well */}
            <Route
              path="/dashboard"
              element={
                localStorage.getItem("isLoggedIn") === "true" ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
