import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import './MeetingScreenshots.css';

const meetingScreenshots = [
  '/Meetings/meeting1.png',
  '/Meetings/meeting2.png',
  '/Meetings/meeting3.png',
];

const createInfiniteArray = (arr, copies = 3) => {
  const result = [];
  for (let i = 0; i < copies; i++) {
    result.push(...arr);
  }
  return result;
};

const MeetingScreenshots = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Log to verify images are imported
    console.log('Meeting screenshots:', meetingScreenshots);

    const imagePromises = meetingScreenshots.map((src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          console.log(`Image ${index + 1} loaded:`, src);
          resolve(src);
        };
        img.onerror = (error) => {
          console.error(`Image ${index + 1} failed to load:`, src, error);
          resolve(null);
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setImageLoaded(true);
    });
  }, []);

  return (
    <section className="meeting-screenshots-section">
      <Particle />
      <Container fluid className="meeting-hero-section">
        <Container className="meeting-hero-content">
          <h1 className="meeting-title">Meeting Screenshots</h1>
          <p className="meeting-subtitle">Documenting the journey from day one</p>
        </Container>
      </Container>

      <Container fluid className="carousel-section">
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <div className="carousel-track">
              {meetingScreenshots.map((src, i) => (
                <img key={i} src={src} alt={`Meeting ${i + 1}`} className="screenshot-image" style={{ height: '350px' }}
                />
              ))}

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MeetingScreenshots;
