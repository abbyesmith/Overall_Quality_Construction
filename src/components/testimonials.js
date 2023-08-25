import React, { useState, useEffect } from 'react';
import './testimonials.css';
import Unknown from '../images/unknown_user.jpeg'; 
import Sauna from '../images/Quality_Sauna.jpeg'; 
import Ramp from '../images/Quality_Ramp.jpeg'; 
import Bathroom from '../images/Quality_Bathroom.jpeg'; 
import Hottub_2 from '../images/Quality_Hottub_2.jpeg'; 


// Mock data
const testimonialsData = [
    {
        projectImage: Sauna,
        customerImage: Unknown,
        quote: 'Amazing work! Truly one of a kind service.'
    },
    {
        projectImage: Ramp,
        customerImage: Unknown,
        quote: 'These guys are great'
    },
    {
        projectImage: Bathroom,
        customerImage: Unknown,
        quote: 'More nice words'
    },
    {
        projectImage: Hottub_2,
        customerImage: Unknown,
        quote: 'These guys were great to work with!'
    },
    // ... add more testimonials
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 10000); // 10 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonials-container">
                <div className="carousel">
                    <img
                        src={testimonialsData[currentIndex].projectImage}
                        alt="Project"
                        className="project-image"
                    />
                    <div className="customer-feedback">
                        <img
                            src={testimonialsData[currentIndex].customerImage}
                            alt="Customer"
                            className="customer-image"
                        />
                        <blockquote>
                            <span className="quote-mark">“</span>
                            {testimonialsData[currentIndex].quote}
                            <span className="quote-mark">”</span>
                        </blockquote>
                    </div>
                    <button onClick={() => setCurrentIndex((currentIndex - 1 + testimonialsData.length) % testimonialsData.length)}>Previous</button>
                    <button onClick={() => setCurrentIndex((currentIndex + 1) % testimonialsData.length)}>Next</button>
                </div>
                {/* <button className="see-all">See all</button> */}
            </div>
        </div>
    );
};

export default Testimonials;