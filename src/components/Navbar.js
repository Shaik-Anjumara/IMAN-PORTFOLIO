 import React, { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaPrayingHands,
  FaMosque,
  FaKaaba,
  FaEnvelope
} from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from '../assets/home.png';
import HoverSections from './HoverSections'; // Import the hover display component

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="IMAN Logo" />
        </div>

        {/* Navigation Links with hover handlers */}
        <ul className="nav-list">
          <li
            onMouseEnter={() => setHovered('home')}
            onMouseLeave={() => setHovered(null)}
          >
            <a href="#home"><FaHome className="icon" /> Home</a>
          </li>

          <li
            onMouseEnter={() => setHovered('about')}
            onMouseLeave={() => setHovered(null)}
          >
            <a href="#about"><FaUser className="icon" /> About</a>
          </li>

          <li
            onMouseEnter={() => setHovered('prayer')}
            onMouseLeave={() => setHovered(null)}
          >
            <a href="#prayer"><FaPrayingHands className="icon" /> Prayer</a>
          </li>

          <li
            onMouseEnter={() => setHovered('masjid')}
            onMouseLeave={() => setHovered(null)}
          >
            <a href="#masjid"><FaMosque className="icon" /> Masjid</a>
          </li>

          <li
            onMouseEnter={() => setHovered('hajj')}
            onMouseLeave={() => setHovered(null)}
          >
            <a href="#hajj"><FaKaaba className="icon" /> Hajj</a>
          </li>

          {/* ✅ Contact Section */}
          <li
            onMouseEnter={() => setHovered('contact')}
            onMouseLeave={() => setHovered(null)}
          >
            <a href="#contact"><FaEnvelope className="icon" /> Contact</a>
          </li>
        </ul>
      </nav>

      {/* Section that displays on hover */}
      <HoverSections hovered={hovered} />
    </>
  );
};

export default Navbar;
