import React, { useState } from 'react';

const Contact = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Here, you'd usually send the data to an API or handle it as needed
        alert('Form submitted');
        console.log(formData);

        // Reset the form data
        setFormData(initialFormData);
    };

    const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');

    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="left-fields">
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="right-field">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={!allFieldsFilled}>Submit</button>
            </form>
            <a href="tel:7203389275">
                <button>Call Us</button>
            </a>
        </div>
    );
}

export default Contact;