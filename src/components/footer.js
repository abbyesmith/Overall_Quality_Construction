import React from 'react';
import './footer.css';

const Footer = ({onNavClick}) => {
    return (
        <div className="footer">
                <a href="mailto:email@gmail.com">email@gmail.com</a>
                <p>800-999-9999</p>
                <p>Contact us today for a free estimate!</p>
        </div>
    );
}

export default Footer;