import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let’s Connect<span className="wave">👋</span></h2>
      <p className="contact-subtitle">Whether it’s about a project, a job, or just tech talk — drop a message!</p>
      
      <form className="contact-form">
        <div className="form-group">
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Name" required />
        </div>
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message 🚀</button>
      </form>
    </section>
  );
};

export default Contact;
