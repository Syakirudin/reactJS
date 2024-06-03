// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import your home page component
import AboutPage from './pages/AboutPage'; // Import your about page component
// import ServicesPage from './pages/ServicesPage'; // Import your services page component
// import ContactPage from './pages/ContactPage'; // Import your contact page component
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
