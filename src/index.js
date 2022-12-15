import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import './style/style.css';
import Home from './pages/home/Home';
import PropertyDetails from './pages/propertyDetails/PropertyDetails';
import About from './pages/about/About';
import Error404 from './pages/error404/Error404';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche_logement/:id" element={<PropertyDetails />} />
        <Route path="/A_propos" element={<About />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
