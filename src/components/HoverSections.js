import React from 'react';
import '../styles/HoverSection.css';

const HoverSections = ({ hovered }) => {
  return (
    <div className="hover-section">
      {hovered === 'home' && <div className="section-content">🏠 Home Section</div>}
      {hovered === 'about' && <div className="section-content">👤 About Section</div>}
      {hovered === 'prayer' && <div className="section-content">🙏 Prayer Section</div>}
      {hovered === 'masjid' && <div className="section-content">🕌 Masjid Section</div>}
      {hovered === 'hajj' && <div className="section-content">🕋 Hajj Section</div>}
    </div>
  );
};

export default HoverSections;
