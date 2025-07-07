import React from 'react';
import './Patent.css';

const projectImages = [
  '/images/robot.jpeg',
  '/images/robot-3.png',
  '/images/robot-2.png',
  '/images/ml.jpeg',
];

const Patent = () => {
  return (
    <section className="patent-showcase">
      <div className="container">
        {/* Patent Info */}
        <h2 className="title">🚀 Patent Publication</h2>
        <p className="subtitle">IoT Enabled Robot for Detecting Gas Pipe Leakage</p>

        {/* Check Application Status */}
        <div className="check-status">
          <h3>🔎 Check Application Status</h3>
          <p>You can check the patent status using this Application ID:</p>
          <p className="application-id">🆔 202421078054</p>
          <a
            href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
            target="_blank"
            rel="noopener noreferrer"
            className="status-check-btn"
          >
            Go to Official Patent Status Website
          </a>
        </div>

        <div className="card">
          <p><strong>Application ID:</strong> 202421078054</p>
          <p><strong>Duration:</strong> Aug 2022 – Dec 2024</p>
          <div className="institution">
            <img src="/images/djsanghvi-logo.jpg" alt="DJ Sanghvi Logo" className="college-logo" />
            <span className="college-name">Dwarkadas J. Sanghvi College of Engineering</span>
          </div>

          <p className="description">
            This innovation addresses the critical need for safer industrial environments through mobile gas leak detection, ML-based anomaly detection, and real-time monitoring.
          </p>

          <ul className="features">
            <li>🚗 <strong>Mobility:</strong> Navigates confined or hazardous areas.</li>
            <li>🧠 <strong>ML Integration:</strong> Intelligent gas detection.</li>
            <li>🌡️ <strong>Environmental Sensing:</strong> Temperature & humidity contextualization.</li>
            <li>📸 <strong>Visual Detection:</strong> Pi camera + torchlight.</li>
            <li>📱 <strong>Mobile App:</strong> Real-time remote control & feedback.</li>
          </ul>

          <p className="goal">
            🎯 <strong>Goal:</strong> Reduce human risk & enable faster, smarter responses with IoT & AI.
          </p>
        </div>

        {/* Appreciation Letter */}
        <div className="appreciation-section">
          <h3>Appreciation Letter From Principal</h3>
          <iframe
            src="/documents/Sakshi_Gangwani_Appreciation.pdf"
            title="Appreciation Letter"
            className="pdf-preview"
          />
          <a
            href="/documents/Sakshi_Gangwani_Appreciation.pdf"
            className="download-btn"
            download
          >
            Download Letter
          </a>
        </div>

        {/* Gallery */}
        <div className="gallery-section">
          <h3 style={{ color: "#fff", textAlign: "center", fontSize: "30px", marginBottom: "50px" }}>Project Gallery</h3>
          <div className="gallery">
            {projectImages.map((src, index) => (
              <img src={src} alt={`Project ${index + 1}`} key={index} className="gallery-image" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patent;
