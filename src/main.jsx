import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './styles/index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Services } from './routes/Services';
import { Contact } from './routes/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='App flex flex-col min-h-screen'>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  </StrictMode>,
)
