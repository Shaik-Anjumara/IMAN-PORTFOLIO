 import React from 'react';
import '../styles/HeroSection.css';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import heroImage from '../assets/hero-image.png'; // Replace with your image path

const HeroSection = () => {
  return (
    <>
      {/* Hero Top Section */}
      <section className="hero">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-text">
            <h1>
              <em>
                Welcome to <strong><span className="highlight-purple">IMAN App ﷻ</span></strong>
              </em>
            </h1>
            <h2>pray, learn, Connect!!</h2>
            <h2>
              <ReactTyped
                strings={['Faith', 'Prayer', "Qur'an", 'Hajj', 'Salah']}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </h2>
            <p>Your Islamic Lifestyle Companion</p>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img src={heroImage} alt="IMAN hero visual" />
          </div>
        </div>
      </section>

      {/* Islamic Introduction Section */}
      <section className="introduction-section">
        <h2 className="intro-heading">As-salamualaykum ﷻ</h2>
        <p>
          <strong>IMAN</strong> is your digital gateway to practicing and
          <span className="highlight-purple"> understanding Islam </span>
          with ease and beauty.
        </p>
        <p>
          From learning daily prayers (Salah), understanding the
          <span className="highlight-purple"> pillars of Islam,</span> exploring Quranic teachings, to discovering
          <span className="highlight-purple"> nearby Masjids</span> – IMAN brings your Deen closer to your heart.
        </p>
        <p>
          Rooted in the <span className="highlight-purple"> peace, discipline, and community </span>
          principles of Islam, this app serves as a reminder, a guide, and a companion for every Muslim —
          whether on a spiritual journey or seeking to build a
          <span className="highlight-purple"> stronger connection with Allah ﷻ.</span>
        </p>
        <p>
          Embrace faith. Practice with purpose. Live with <span className="highlight-purple">IMAN</span>
        </p>

        {/* Follow Us + Social Media Icons */}
        <div className="social-wrapper">
          <p className="follow-us-text"><strong>Follow Us On:</strong></p>
          <div className="social-icons intro-icons">
            <a href="https://www.instagram.com/@imanindia.org/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/Iman India - Namaz & Islamic Guidance" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@ImanIndiaOfficial" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.twitter.com/ImanIndiaOrg" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
