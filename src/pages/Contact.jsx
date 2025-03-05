import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Feel free to reach out.</p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> support@justdried.com</p>
          <p><strong>Phone:</strong> +254 712 345 678</p>
          <p><strong>Location:</strong> Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
