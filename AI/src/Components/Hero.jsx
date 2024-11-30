import React from 'react';
import './Hero.css';
import img1 from '../assets/1.jpg';
import Try from '../assets/Try.mp4';
import SliderComponent from './SliderWrapper';

const Hero = () => {
  return (
    <>
      <div className="tara-section">
        <video src={Try} autoPlay loop muted playsInline></video>
        <div className="video-overlay">
          <h1 className="clipped-text">TRYLY</h1>
          <h3 className="clipped-text">WEAR YOUR SKIN</h3>
        </div>
      </div>

      <div className="main-container">
        <div className="tara-content">
          <p className="section-title">Training Essentials</p>
          <p className="highlight-text">POWER YOUR PROGRESS</p>
          <p className="section-description">
            Tara Nicolas is learning to be good to herself--and that starts with the right gear.
          </p>
          <div className="content-buttons">
            <button>Shop Training Essentials</button>
            <button>Read More</button>
          </div>
        </div>

        <div className="alex-section">
          <div className="alex-image">
            <img src={img1} alt="Nike Logo" />
          </div>
          <div className="alex-content">
            <p className="content-title">ALEX EALA ON THE RISE</p>
            <p className="content-description">
              Meet the Filipino tennis player who's smashing every challenge.
            </p>
            <div className="content-buttons">
              <button>Read Now</button>
              <button>Shop NikeCourt</button>
            </div>
          </div>
        </div>

        <SliderComponent />

        <div className="ekiden-section">
          <div className="ekiden-header">
            <p className="section-title">EKIDEN PACK</p>
            <h1 className="highlight-title">RISE TOGETHER</h1>
            <p className="section-description">
              “EKIDEN PACK” is a running collection inspired by the mountainous terrain that Ekiden Runners
              take on for Japan’s most popular race during the New Year. The latest collection incorporates
              flaming colors that represent the sunrise as the race begins, and the passionate energy
              surrounding the event.
            </p>
            <button>Shop</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
