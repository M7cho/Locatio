import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Properties from './Properties';
import Contact from './Contact';
import Reviews from './Reviews';
import Notfound from './Notfound'; 
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isFrench, setIsFrench] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home isFrench={isFrench} setIsFrench={setIsFrench} />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<Notfound />} /> 
        </Routes>
      </main>
      <footer className="footer">
        <div className="contact-info">
          <strong>Contact:</strong> Email: Locatio@realestate.com | Phone: 613-111-9999 | Address: Locatio Street, Ottawa, ON
        </div>
        <div className="service-hours">
          <strong>Hours:</strong> 24/7
        </div>
        <div className="service-areas">
          <strong>Service Areas:</strong> Ottawa, ON, Gatineau, QC
        </div>
      </footer>
    </div>
  );
}

function Home({ isFrench, setIsFrench }) {
  const handleLanguageToggle = () => {
    setIsFrench((prevIsFrench) => !prevIsFrench);
  };

  return (
    <section className="about-section">
      <button className="button-translate" onClick={handleLanguageToggle}>
        {isFrench ? 'Switch to English' : 'Passer au français'}
      </button>
      <h2>{isFrench ? 'À Propos de Nous' : 'About Us'}</h2>
      <p>
        {isFrench
          ? 'Bienvenue chez Locatio Incorporation, où des séjours inoubliables à Ottawa/Gatineau vous attendent ! Découvrez des propriétés sélectionnées avec soin, méticuleusement choisies pour répondre à vos préférences uniques et vos objectifs d\'investissement, sur les marchés immobiliers prospères d\'Ottawa et de Gatineau. Embrassez la culture locale, les paysages à couper le souffle et l\'hospitalité exceptionnelle. Votre escapade de rêve commence ici.'
          : 'Welcome to Locatio Incorporation, where unforgettable stays in Ottawa/Gatineau await! Discover handpicked properties, meticulously curated to meet your unique preferences and investment goals, in the flourishing real estate markets of Ottawa and Gatineau. Embrace local culture, breathtaking scenery, and exceptional hospitality. Your dream getaway starts here.'}
      </p>
      <div className="gallery">
        <img src="https://houseplans.bhg.com/images/plans/URD/bulk/1747/the-journey1_t.jpg" alt="Image 1" />
        <img src="https://img.jamesedition.com/listing_images/2023/03/21/15/41/12/eccc2ce2-9e8e-4b49-b666-c3311252a3a0/je/620x465xc.jpg" alt="Image 2" />
        <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b" alt="Image 3" />
      </div>
    </section>
  );
}

export default App;








