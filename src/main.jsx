import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './styles/index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Service } from './routes/Services';
import { Privacy } from './routes/Privacy';
import { Contact } from './routes/Contact';
import { ErrorPage } from './routes/ErrorPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='App flex flex-col min-h-screen'>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />/
          {/* TODO: CHANGE THIS SERVICE PAGE TO DYNAMIC LIKE FETCH ALL SERVICES AND CREATE ROUTES FOR EACH PAGE */}
          <Route path="/services/:servicename" element={<Service Service_id="pass id here so that the data can be fetched on other page using this" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  </StrictMode>,
)
