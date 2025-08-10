import React, { useEffect } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import MDS from '../../img/mds.webp';
import Portal from '../../img/Portal.webp';
import Education from '../../img/education.webp';
import Port from '../../img/port.webp';
import Netflix from '../../img/netflix.webp';

const portFolioData = [
  { img: MDS, title: 'Ecommerce Store', link: 'https://mds-delights.netlify.app/' },
  { img: Portal, title: 'Student Portal Full', link: 'https://daniyalportal.netlify.app/' },
  { img: Education, title: 'IELTS Website', link: 'https://www.linkedin.com/posts/daniyalsohail169_webdevelopment-frontenddeveloper-reactjs-activity-7220541707119960064-VPvf?utm_source=combined_share_message&utm_medium=member_desktop' },
  { img: Port, title: 'Portfolio Website', link: 'https://www.linkedin.com/posts/daniyalsohail169_react-js-portfolio-website-activity-7221283345320583168-JglY?utm_source=combined_share_message&utm_medium=member_desktop' },
  { img: Netflix, title: 'Netflix UI', link: 'https://www.instagram.com/reel/C6EZUNpIPBK/?igsh=cGNhanRldGR1YzJ4' }
];

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="portfolio">
      <span className="portfolio-title" data-aos="fade-right">Projects</span>

      <div className="portfolioContainer" data-aos="zoom-in-up">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={70}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1050: { slidesPerView: 2 },
          }}
        >
          {portFolioData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="portBox" data-aos="fade-up">
                <div className="imgbox">
                  <img src={item.img} alt={item.title}  />
                </div>
                <div className="portCont">
                  <span>{item.title}</span>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button>Visit</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;