import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [emailData, setEmailData] = useState({
    fromEmail: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Locatio! We will be contacting you back shortly.');
    setEmailData({
      fromEmail: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <strong>Contact:</strong> Email: Locatio@realestate.com | Phone: 613-111-9999 | Address: Locatio Street, Ottawa, ON
      </div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fromEmail">Your Email:</label>
            <input
              type="email"
              id="fromEmail"
              name="fromEmail"
              value={emailData.fromEmail}
              onChange={(e) => setEmailData({ ...emailData, fromEmail: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={emailData.message}
              onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
              required
            />
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How can I book a property?</h3>
          <p>You can book a property by visiting our Properties page and clicking on the "Book Now" button for the property you are interested in. Fill in the required information and submit the booking form.</p>
        </div>
        <div className="faq-item">
          <h3>Are the properties pet-friendly?</h3>
          <p>Yes! All of our properties are pet friendly! You can check the property details on the Properties page.</p>
        </div>
        <div className="faq-item">
          <h3>What amenities are included in the properties?</h3>
          <p>All our properties come with essential amenities such as free Wi-Fi, dedicated workspace, fully equipped kitchens, and basic toiletries. You can request additional amenities for your stays by contacting us.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
