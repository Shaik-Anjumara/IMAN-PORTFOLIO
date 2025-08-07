 import React, { useState } from 'react';
import '../styles/About.css';
import aboutImg from '../assets/imanAboutIllustration.png';
import { FaRegHandPointRight } from 'react-icons/fa';

const juzNames = [
  "Al-Fatiha – Al-Baqarah 141", "Al-Baqarah 142 – Al-Baqarah 252", "Al-Baqarah 253 – Al-Imran 92",
  "Al-Imran 93 – An-Nisa 23", "An-Nisa 24 – An-Nisa 147", "An-Nisa 148 – Al-Ma’idah 81",
  "Al-Ma’idah 82 – Al-An’am 110", "Al-An’am 111 – Al-A’raf 87", "Al-A’raf 88 – Al-Anfal 40",
  "Al-Anfal 41 – At-Tawbah 92", "At-Tawbah 93 – Hud 5", "Hud 6 – Yusuf 52",
  "Yusuf 53 – Ibrahim 52", "Al-Hijr 1 – An-Nahl 128", "Al-Isra 1 – Al-Kahf 74",
  "Al-Kahf 75 – Ta-Ha 135", "Al-Anbiya 1 – Al-Hajj 78", "Al-Mu’minun 1 – Al-Furqan 20",
  "Al-Furqan 21 – An-Naml 55", "An-Naml 56 – Al-Ankabut 45", "Al-Ankabut 46 – Al-Ahzab 30",
  "Al-Ahzab 31 – Ya-Sin 27", "Ya-Sin 28 – Az-Zumar 31", "Az-Zumar 32 – Fussilat 46",
  "Fussilat 47 – Al-Jathiyah 37", "Al-Ahqaf 1 – Az-Zariyat 30", "Az-Zariyat 31 – Al-Hadid 29",
  "Al-Mujadila 1 – At-Tahrim 12", "Al-Mulk 1 – Al-Mursalat 50", "An-Naba 1 – An-Nas 6"
];

const AboutSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJuz = juzNames.filter((name, i) =>
    (`juz ${i + 1} ${name}`.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="about-section">
      <h2 className="section-heading">
        As-salamualalaikum warahmatullahi <span className="highlight-purple">wabarakatahu</span>
      </h2>

      <div className="about-container">
        <div className="about-content">
          <p>
            Hi Everyone, I am a <span className="highlight-purple">Muslim</span> who built this app to help fellow believers in their journey of <span className="highlight-purple">Islam</span>.
          </p>
          <p>
            <strong>IMAN App</strong> is your spiritual guide, helping you learn and live the Deen in a modern world.
          </p>
          <p>Through this app, you can explore topics like:</p>

          <ul className="about-list">
            <li><FaRegHandPointRight />📿 <span className="highlight-purple">Salah </span> and its meanings.</li>
            <li><FaRegHandPointRight />🕋 Importance of <span className="highlight-purple">Zakat & Hajj.</span></li>
            <li><FaRegHandPointRight />🕌 Nearby <span className="highlight-purple">Masjids</span> & prayer times.</li>
            <li><FaRegHandPointRight />📖 Deep understanding of <span className="highlight-purple">Qur'an.</span></li>
            <li><FaRegHandPointRight />✨ Building a connection <span className="highlight-purple">with Allah.</span></li>
          </ul>

          <blockquote className="quote">
            "Strive to strengthen your Imaan and walk the path of Deen."
            <br /> <span className="highlight-purple">—IMAN App</span>  
          </blockquote>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="About IMAN App" />
        </div>
      </div>

      {/* Juz Section */}
      <div className="juz-wrapper">
        <h3 className="juz-title">
          Explore <span className="highlight-purple">30 Juz'</span> of the Qur'an
        </h3>

        <input
          type="text"
          placeholder="Search Juz by number or Surah name..."
          className="juz-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="juz-grid">
          {filteredJuz.map((name, index) => (
            <a
              key={index}
              href={`https://quran.com/juz/${index + 1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="juz-card neon-card"
            >
              <strong>Juz {index + 1}</strong>
              <div className="juz-name">{name}</div>
            </a>
          ))}
          {filteredJuz.length === 0 && <p className="no-results">No Juz found.</p>}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
