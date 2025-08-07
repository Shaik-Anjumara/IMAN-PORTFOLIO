 // src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PrayerSection from './components/PrayerSection';
import MasjidSection from './components/MasjidSection';
import HajjSection from './components/HajjSection';
import ContactSection from './components/ContactSection';

import './styles/App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="snap-container">
        <section className="snap-section" id="home">
          <HeroSection />
        </section>
        <section className="snap-section" id="about">
          <AboutSection />
        </section>
        <section className="snap-section" id="prayer">
          <PrayerSection />
        </section>
        <section className="snap-section" id="masjid">
          <MasjidSection />
        </section>
        <section className="snap-section" id="hajj">
          <HajjSection />
        </section>
        <section className="snap-section" id="contact">
          <ContactSection />
        </section>
      </div>
    </>
  );
}

export default App;
