 // src/components/HajjSection.js
import React from 'react';
import '../styles/Hajj.css';

const HajjSection = () => {
  return (
    <section className="hajj-section" id="hajj">
      {/* Themed heading */}
      <h2 className="hajj-heading">
        <span className="purple-text">Hajj</span> <span className="white-text">Guide ﷻ</span>
      </h2>

      {/* Intro paragraph */}
      <p className="hajj-intro">
        Hajj is a sacred pilgrimage to the <span className="highlight-purple">holy city of Makkah. </span>    It is one of the <span className="highlight-purple"> five pillars of Islam.  </span>  Here's a<span className="highlight-purple"> step-by-step guide</span>   to help you understand the<span className="highlight-purple"> process of Hajj.</span>  
      </p>

      {/* Steps grid */}
      <div className="hajj-steps">
        {[ 
          { title: '1. Ihram', desc: 'Enter the sacred state of Ihram from the Miqat and make the intention (niyyah) for Hajj.' },
          { title: '2. Tawaf', desc: 'Perform Tawaf (7 circles) around the Kaaba as part of arrival rites in Masjid al-Haram.' },
          { title: '3. Sa’i', desc: 'Walk 7 times between the hills of Safa and Marwah, emulating Hajar\'s search for water.' },
          { title: '4. Arafat', desc: 'Stand in prayer and reflection at Mount Arafat, the most important ritual of Hajj.' },
          { title: '5. Muzdalifah', desc: 'Collect pebbles and spend the night under the open sky in Muzdalifah.' },
          { title: '6. Rami al-Jamarat', desc: 'Stone the pillars symbolizing Satan in Mina using the collected pebbles.' },
          { title: '7. Qurbani', desc: 'Offer a sacrificial animal on Eid al-Adha in remembrance of Prophet Ibrahim\'s devotion.' },
          { title: '8. Final Tawaf', desc: 'Perform the farewell Tawaf before leaving Makkah to complete the Hajj.' },
        ].map((step, index) => (
          <div className="hajj-card" key={index}>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQs Section */}
      <div className="faq-section">
        <h2 className="faq-title">
          FAQ's <span></span>
        </h2>
        <div className="faq-list">
          {[
            {
              question: 'What is the significance of Hajj in Islam?',
              answer: 'Hajj is one of the five pillars of Islam and an obligation for every able Muslim once in a lifetime.',
            },
            {
              question: 'When is Hajj performed?',
              answer: 'Hajj is performed annually from the 8th to 12th of Dhul-Hijjah, the last month of the Islamic calendar.',
            },
            {
              question: 'What are the different types of Hajj?',
              answer: 'There are three types: Hajj al-Ifrad, Hajj al-Tamattu’, and Hajj al-Qiran.',
            },
            {
              question: 'Can women perform Hajj without a mahram?',
              answer: 'Some scholars say a mahram is required, though some countries allow supervised female groups.',
            },
            {
              question: 'Is it safe to take children for Hajj?',
              answer: 'It’s allowed, but due to large crowds and long rituals, it may be difficult for young children.',
            },
          ].map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HajjSection;
