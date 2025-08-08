import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import "./Experience.css";

function Experience() {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const counter = (num) => {
        const [count, setCount] = useState(0);
        useEffect(() => {
            if (isVisible) {
                let i = 0;
                const interval = setInterval(() => {
                    if (i >= num) {
                        clearInterval(interval);
                        setCount(num);
                    } else {
                        i += Math.ceil(num / 100);
                        setCount(i);
                    }
                }, 50);
            }
        }, [isVisible, num]);

        return count;
    };

    return (
        <div className='experience dark-bg' ref={ref} data-aos="fade-in" data-aos-delay="100">
            <div className="exp-box">
                <div className="circle dark-circle">{counter(2)}+</div>
                <span className="dark-text">years</span>
                <span className="dark-text">Experience</span>
            </div>

            <div className="exp-box">
                <div className="circle dark-circle">{counter(25)}+</div>
                <span className="dark-text">completed</span>
                <span className="dark-text">Projects</span>
            </div>

            <div className="exp-box">
                <div className="circle dark-circle">{counter(500)}+</div>
                <span className="dark-text">hour</span>
                <span className="dark-text">worked</span>
            </div>

            <div className="exp-box">
                <div className="circle dark-circle">{counter(400)}+</div>
                <span className="dark-text">cups of</span>
                <span className="dark-text">Tea</span>
            </div>
        </div>
    );
}

export default Experience;
