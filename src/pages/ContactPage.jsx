import React from 'react';
import '../styles/ContactPage.css';
import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const ContactPage = () =>
{
  return (
    <>
      <Header />
      <Navbar />
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>Have a question or want to work with us? Send us a message!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <Footer />
    </>

  );
};

export default ContactPage;