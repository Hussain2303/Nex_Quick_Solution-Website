import React, { useEffect, useRef } from 'react';
import './Intro.css';
import { init } from 'ityped';
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Slide1 from '../../img/Slide1.jpg';
import Slide2 from '../../img/Slide2.webp';
import Slide3 from '../../img/Slide3.avif';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 900,
      strings: ['Web Development', 'App Solutions', 'UI/UX Designs', 'Custom Software']
    });
  }, []);

  const slides = [Slide1, Slide2, Slide3];

  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <h1>
            Welcome to<br />
            <span>NexQuick Software House</span>
          </h1>
          <p>
            We provide <span ref={textRef}></span>
            <p>hgfdsa</p>
          </p>
        </div>
        <div className="intro-icon">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram color="#FF4500" size="2.5rem" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedIn color="#0077B5" size="2.5rem" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Github color="#ffffff" size="2.5rem" />
          </a>
        </div>
      </div>

      <div className="intro-right">
        <div className="slider-container">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            {slides.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="blur1"></div>
        <div className="blur2"></div>
      </div>
    </div>
  );
}

export default Intro;
