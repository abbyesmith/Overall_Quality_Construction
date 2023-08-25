import React from 'react';
import './about-us.css';
import Puppy from '../images/Quality_Puppy.jpeg' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYelp, faTwitter } from '@fortawesome/free-brands-svg-icons';


const AboutUs = () => {
    return (
        <div className="about">
            <div className="about-container">
                {/* <img src={`${process.env.PUBLIC_URL}/about-us.jpg`} alt="About Us" className="about-image"/> */}
                <img src={Puppy} alt="Overall Quality Puppy" className="about-image"/>
                
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>
                        At Overall Quality Construction, the foundation of our expertise is deeply rooted in the values and experiences we acquired growing up on a farm. Brothers Brian and Cal Krenke initially embarked on their construction journey by building a fence for a neighbor. As word of their impeccable craftsmanship spread, they found themselves being sought after by many in the community. Their portfolio rapidly expanded from fences to include decks, pergolas, awnings, basements, and comprehensive interior remodeling. With a mantra of "You Dream it, we build it," Brian and Cal ensure every client's vision is brought to life with precision and quality.
                    </p>
                    <p>
                        Today, as the proud co-founders of Overall Quality Construction, they not only bring technical prowess to the table but also stand by the principles of delivering unparalleled services, paired with clear and kind communication. Every project undertaken is a testament to their commitment, ensuring that the legacy of trust and excellence they've built remains unshaken. DM for a free quote today and make your dream project a reality!
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/100094226190763" target="_blank" rel="noopener noreferrer" className="social-button">
                            <FontAwesomeIcon icon={faFacebookF} />
                            Facebook
                        </a>
                        <a href="https://www.yelp.com/biz/overall-quality-contracting-denver" target="_blank" rel="noopener noreferrer" className="social-button">
                            <FontAwesomeIcon icon={faYelp} />
                            Yelp
                        </a>
                        <a href="https://www.instagram.com/Overall_Quality_Contracting/?fbclid=IwAR3UFNiOFyjfTmANSpiVkNfZDNHm45XEVKbA-7AVUm5wJhI56MlibzYvGdU" target="_blank" rel="noopener noreferrer" className="social-button">
                            <FontAwesomeIcon icon={faTwitter} />
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;