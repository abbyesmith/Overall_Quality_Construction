import React from 'react';
import './navbar.css'
import Logo from '../images/Quality_White_Logo.png'


const Navbar = ({onNavClick}) => {
    return (
        <div className="navbar">
            <img src={Logo} alt="Overall Quality Contracting Logo" className='navbar-logo'/>
            <button onClick={() => onNavClick("about-us")}>About Us</button>
            <button onClick={() => onNavClick("services")}>Services</button>
            <button onClick={() => onNavClick("testimonials")}>Testimonials</button>
            <button onClick={() => onNavClick("contact")}>Contact</button>
        </div>
    );
}

export default Navbar;