import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import './Hero.css';

function Hero() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1200,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <div>
      <section className="c-slider">
        <Slider {...settings}>
          <div className="c-slide" style={{ backgroundImage: `url(${image1})` }}>
            <div className="c-slide-content">
              <div className="c-wrap c-wrap--line">
                <h2 className="c-slide__title">Underwater
                  <span className="c-slide__title--large">Monsters</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="c-slide" style={{ backgroundImage: `url(${image2})` }}>
            <div className="c-slide-content">
              <div className="c-wrap c-wrap--line">
                <h2 className="c-slide__title">The
                  <span className="c-slide__title--medium">Gates of Hell</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="c-slide" style={{ backgroundImage: `url(${image3})` }}>
            <div className="c-slide-content">
              <div className="c-wrap c-wrap--line">
                <h2 className="c-slide__title">Exploring
                  <span className="c-slide__title--large">Deep Caves</span>
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default Hero;
