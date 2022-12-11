import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import './style/style.css';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import Apropos from './pages/Apropos';
import Error404 from './pages/Error404';
import Header from './layouts/Header';
import Footer from './layouts/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche_logement/:id" element={<FicheLogement />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
