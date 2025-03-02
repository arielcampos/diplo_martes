import './App.css';

import {BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/Contacto';
import Homepage from './pages/HomePage'
import PortfolioPage from './pages/Portfolio'
import PreciosPage from './pages/Precios'
import ServiciosPage from './pages/Servicios';
import TestimoniosPage from './pages/Testimonios';




function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Contacto" element={<ContactoPage />} />
        <Route path="Portfolio" element={<PortfolioPage />} /> 
        <Route path="Precios" element={<PreciosPage />} /> 
        <Route path="Servicios" element={<ServiciosPage />} /> 
        <Route path="Testimonios" element={<TestimoniosPage />} /> 

      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
