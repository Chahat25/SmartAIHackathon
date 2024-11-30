import React from 'react';
import './Hero.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

const Hero = () => {
  return (
    <div className="main-container">


      <div className="tara-section">
        <img src={img2} alt="Featured Image" />
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
      </div>


      <div className="alex-section">
        <div className="alex-image">
          <img src={img1} alt="Nike Logo" />
        </div>
        <div className="alex-content">
          <p className="content-title">ALEX EALA ON THE RISE</p>
          <p className="content-description">Meet the Filipino tennis player who's smashing every challenge</p>
          <div className="content-buttons">
            <button>Read Now</button>
            <button>Shop NikeCourt</button>
          </div>
        </div>
      </div>


      <div className="ekiden-section">
        <div className="ekiden-header">
          <p className="section-title">EKIDEN PACK</p>
          <h1 className="highlight-title">RISE TOGETHER</h1>
          <p className="section-description">
            “EKIDEN PACK” is a running collection inspired by the mountainous terrain that Ekiden Runners
            take on for Japan’s most popular Race during the New Year. The latest collection incorporates
            flaming colours that represent the sunrise as the Race begins, and the passionate energy
            surrounding the event. The Dazzle Camo pattern draws inspiration from cityscapes including
            the Scramble Crossing in Tokyo. Let’s rise together, to a new era.
          </p>
          <button>Shop</button>
        </div>

        <div className="ekiden-products">
          {[img1, img2, img3].map((product, index) => (
            <div key={index} className="product-item">
              <img src={product} alt={`Product ${index + 1}`} />
              <div className="product-info">
                <p className="product-name">Product Name {index + 1}</p>
                <p>Description for product {index + 1}.</p>
                <button>Shop</button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Hero;
