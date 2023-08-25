import React, { useState } from 'react';
import './services.css';
import Deck from '../images/Quality_Deck.jpeg' 
import Fence from '../images/Quality_Fence.jpeg' 
import Kitchen from '../images/Quality_Kitchen.jpeg' 
import Other from '../images/Quality_Other.jpeg' 

const servicesData = [
    { name: 'FENCING', img: Fence },
    { name: 'DECKS', img: Deck },
    { name: 'INTERIOR REMODELING', img: Kitchen },
    { name: 'MORE', img: Other}
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className='services'>
            <h1>Services</h1>
            <div className="services-container">

                {servicesData.map(service => (
                    <div 
                        className="service-card" 
                        style={{ backgroundImage: `url(${service.img})` }}
                        onClick={() => setSelectedService(service)}
                        key={service.name}
                    >
                        <span>{service.name}</span>
                    </div>
                ))}
                {selectedService && (
                    <div className="service-popup">
                        <h2>{selectedService.name}</h2>
                        <p>Additional information about {selectedService.name}.</p>
                        <button onClick={() => setSelectedService(null)}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;