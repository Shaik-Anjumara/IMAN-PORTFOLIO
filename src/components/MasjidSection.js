 // src/components/MasjidSection.js
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaMosque, FaSearchLocation, FaPlus, FaUndo } from 'react-icons/fa';
import '../styles/Masjid.css';

function MasjidSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tasbeehCount, setTasbeehCount] = useState(0);

  const masjids = [
    {
      name: 'Masjid Al Noor',
      location: 'Banjara Hills, Hyderabad',
      timing: 'Fajr: 5:10 AM | Isha: 8:00 PM',
    },
    {
      name: 'Masjid e Quba',
      location: 'Mehdipatnam, Hyderabad',
      timing: 'Fajr: 5:00 AM | Isha: 7:45 PM',
    },
    {
      name: 'Jama Masjid',
      location: 'Charminar, Hyderabad',
      timing: 'Fajr: 5:05 AM | Isha: 8:10 PM',
    },
    {
      name: 'Masjid e Azizia',
      location: 'Humayun Nagar, Hyderabad',
      timing: 'Fajr: 5:15 AM | Isha: 8:00 PM',
    },
    {
      name: 'Masjid e Rahmat',
      location: 'Tolichowki, Hyderabad',
      timing: 'Fajr: 5:12 AM | Isha: 7:55 PM',
    },
    {
      name: 'Masjid Al Huda',
      location: 'Malakpet, Hyderabad',
      timing: 'Fajr: 5:08 AM | Isha: 8:05 PM',
    },
  ];

  const filteredMasjids = masjids.filter(masjid =>
    masjid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    masjid.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="masjid-section" id="masjid">
      <h2 className="masjid-heading">
        <span className="white-text">Nearby </span>
        <span className="purple-text">Masjids</span>
      </h2>

      <p className="masjid-subheading">Discover <span className="highlight-purple">local mosques</span>  and their<span className="highlight-purple"> prayer timings</span> </p>
      <p className="masjid-intro">
        The Masjid is more than a <span className="highlight-purple"> place of worship </span>  — it’s a center of learning, peace, and unity.
        Connect with your community through these <span className="highlight-purple"> spiritual hubs near you.</span> 
      </p>

      {/* 🔍 Search bar */}
      <div className="search-bar">
        <FaSearchLocation className="search-icon" />
        <input
          type="text"
          placeholder="Search masjid or area..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🕌 Masjid cards */}
      <div className="masjid-cards">
        {filteredMasjids.length > 0 ? (
          filteredMasjids.map((masjid, index) => (
            <div
              className="masjid-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(masjid.name + ', ' + masjid.location)}`,
                  '_blank'
                )
              }
            >
              <div className="masjid-icon-wrapper">
                <FaMosque className="masjid-icon" />
              </div>
              <h3>{masjid.name}</h3>
              <p><FaMapMarkerAlt /> {masjid.location}</p>
              <p><FaClock /> {masjid.timing}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No masjids found for your search.</p>
        )}
      </div>

      {/* 🧿 Tasbeeh Counter */}
      <div className="tasbeeh-counter">
        <h3 className="tasbeeh-title">Tasbeeh Counter📿</h3>
        <p className="tasbeeh-count">{tasbeehCount}</p>
        <div className="tasbeeh-buttons">
          <button onClick={() => setTasbeehCount(tasbeehCount + 1)}>
            <FaPlus /> Count
          </button>
          <button onClick={() => setTasbeehCount(0)}>
            <FaUndo /> Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default MasjidSection;
