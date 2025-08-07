 // src/components/PrayerSection.js
import React, { useState } from "react";
import "../styles/Prayer.css";

import ruku from "../assets/poses/ruku.png";
import sujood from "../assets/poses/sujood.png";
import standing from "../assets/poses/standing.png";
import tashahhud from "../assets/poses/tashahhud.png";
import salam from "../assets/poses/salam.png";

const prayerData = [
  {
    title: "Fajr",
    image: standing,
    description: "Fajr is the first of the five daily prayers, performed before sunrise.",
  },
  {
    title: "Dhuhr",
    image: ruku,
    description: "Dhuhr is the second prayer of the day, offered after the sun passes its zenith.",
  },
  {
    title: "Asr",
    image: sujood,
    description: "Asr is the afternoon prayer and holds great significance in Islam.",
  },
  {
    title: "Maghrib",
    image: tashahhud,
    description: "Maghrib is offered just after sunset and marks the end of the fasting day in Ramadan.",
  },
  {
    title: "Isha",
    image: salam,
    description: "Isha is the last prayer of the day, offered at night before sleeping.",
  },
];

// All 114 Surahs
const surahs = [
  "Al-Fatihah", "Al-Baqarah", "Aali Imran", "An-Nisa", "Al-Ma'idah", "Al-An'am", "Al-A'raf",
  "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl",
  "Al-Isra", "Al-Kahf", "Maryam", "Taha", "Al-Anbiya", "Al-Hajj", "Al-Mu’minun", "An-Nur",
  "Al-Furqan", "Ash-Shu’ara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajda",
  "Al-Ahzab", "Saba", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat",
  "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiya", "Al-Ahqaf", "Muhammad", "Al-Fath",
  "Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqi'a",
  "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahina", "As-Saff", "Al-Jumu'a", "Al-Munafiqun",
  "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij",
  "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat",
  "An-Naba", "An-Nazi'at", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq",
  "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghashiyah", "Al-Fajr", "Al-Balad", "Ash-Shams",
  "Al-Lail", "Ad-Duhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah",
  "Al-Adiyat", "Al-Qari'ah", "At-Takathur", "Al-Asr", "Al-Humazah", "Al-Fil", "Quraysh",
  "Al-Ma'un", "Al-Kawthar", "Al-Kafiroon", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"
];

const PrayerSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSurahs = surahs.filter((surah) =>
    surah.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="prayer-section" id="prayer">
      <h2 className="prayer-heading">
        Daily <span className="highlight">Prayers</span>
      </h2>
      <p className="prayer-subheading">Understand and reflect on the 5 daily prayers.</p>

      <div className="prayer-cards-wrapper">
        <div className="prayer-cards-container">
          {prayerData.map((prayer, index) => (
            <div key={index} className="prayer-card">
              <img src={prayer.image} alt={prayer.title} className="prayer-image" />
              <h3 className="prayer-title">{prayer.title}</h3>
              <p className="prayer-description">{prayer.description}</p>
              <div className="prayer-buttons">
                <a href="#learn" className="prayer-btn">
                  <i className="fas fa-book"></i> Learn
                </a>
                <a href="#poses" className="prayer-btn">
                  <i className="fas fa-person-praying"></i> Rakats
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Surah Section */}
      <div className="surah-section">
        <h2 className="surah-heading">
          Explore <span className="highlight">Surahs</span>
        </h2>

        <input
          type="text"
          placeholder="Search Surah..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="surah-search"
        />

        <div className="surah-grid">
          {filteredSurahs.map((surah, index) => (
            <a
              key={index}
              className="surah-card neon-glow"
              href={`https://quran.com/search?q=${encodeURIComponent(surah)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {surah}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrayerSection;
