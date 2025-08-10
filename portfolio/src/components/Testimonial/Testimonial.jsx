// Line 1
import React, { useEffect } from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const clients = [
        {
            review: "Hussain transformed our Settle Homes website with a sleek design and seamless functionality. Highly professional and detail-oriented. Exceptional work!",
            name: "Serena Huang"
        },
        {
            review: "Hussain created a user-friendly and professional hospital website that improved our patient experience significantly. His attention to detail is impressive!",
            name: "Dr. Abid Mushtaq"
        },
        {
            review: "Hussain delivered an incredible portfolio website for us. User-friendly, responsive, and visually stunning. Great job!",
            name: "Fahad Nawaz"
        },
        {
            review: "Working with Hussain on the e-commerce dashboard was a pleasure. His creativity and technical skills brought our project to life. Fantastic developer!",
            name: "Prof Ali"
        },
        {
            review: "Hussain's work on our tech project was exceptional. His technical expertise and innovative approach enhanced our product's functionality",
            name: "Danish"
        }
    ];

    return (
        <div className="testimonial">
            <div className="t-heading" data-aos="fade-up">
                <span id="client_rev">Clients Reviews</span>
                <div className="blur1 t-blur1"></div>
                <div className="blur2 t-blur2"></div>
            </div>

            <Swiper
                slidesPerView={1}
                grabCursor={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index} className="swiperSlide">
                        <div className="test-box" data-aos="zoom-in">
                            <span className="review-text" id="t_text">“{client.review}”</span>
                            <span className="client-name" id="t_name">~ {client.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonial;
