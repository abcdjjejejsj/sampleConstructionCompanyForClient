import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FlatEnquiry from './components/FlatEnquiry';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if admin is already logged in
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken === 'construction-admin-2024') {
      setIsLoggedIn(true);
    }
  }, []);

  const MainWebsite = () => (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <FlatEnquiry />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route 
          path="/admin" 
          element={
            isLoggedIn ? (
              <AdminPanel setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/admin/login" />
            )
          } 
        />
        <Route 
          path="/admin/login" 
          element={
            isLoggedIn ? (
              <Navigate to="/admin" />
            ) : (
              <AdminLogin setIsLoggedIn={setIsLoggedIn} />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;