import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Import icons
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./contact.css";

function Contact() {
  const form = useRef(); // Reference to the form
  const [isSent, setIsSent] = useState(false); // State to track form submission

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        form.current, // Reference to the form
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // Show success message
          e.target.reset(); // Reset the form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-component">
      <h1>Contact Me</h1>
      <div className="contact-div">
        {/* Left Side: Contact Form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button className="send-button" type="submit">
              Send
            </button>
            {isSent && (
              <p className="success-message">Message sent successfully!</p>
            )}
          </form>
        </div>

        {/* Right Side: Social Links */}
        <div className="contact-links">
          <h2>Let`s Connect</h2>
          <ul>
            <li>
              <FaGithub className="contact-icon" />
              <a
                href="https://github.com/Rajnish-Bansal"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:your-rbansal0906@example.com">Email</a>
            </li>
            <li>
              <FaLinkedin className="contact-icon" />
              <a
                href="https://www.linkedin.com/in/rajnish-bansal-b09230104/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FaWhatsapp className="contact-icon" />
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
          <a
            href="/Rajnish Resume.pdf" // Path to your resume in the public folder
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="download-button">Download Resume</button>
          </a>
        </div>
      </div>

      <div className="mobile-contact-div">
        <div className="contact-links">
          <ul>
            <li>
              <a
                href="https://github.com/Rajnish-Bansal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="contact-icon" />
              </a>
            </li>
            <li>
              <a href="mailto:your-rbansal0906@example.com">
                <FaEnvelope className="contact-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rajnish-bansal-b09230104/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="contact-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="contact-icon" />
              </a>
            </li>
          </ul>
          <a
            href="/Rajnish Resume.pdf" // Path to your resume in the public folder
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="download-button">Download Resume</button>
          </a>
        </div>
        {/* Left Side: Contact Form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button className="send-button" type="submit">
              Send
            </button>
            {isSent && (
              <p className="success-message">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
