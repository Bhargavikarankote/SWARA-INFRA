import React from "react";
import "../styles/contact.css"; // Import the styling for the contact section

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="image-placeholder">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.51234589949!2d107.00280043271502!3d11.537387973225078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMxJzE0LjkiTiAxMDfCsDAwJzE5LjAiRQ!5e0!3m2!1sen!2s!4v1689801453405"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="content">
        {/* Left Section */}
        <div className="left">
          <p><strong>Call Us</strong></p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/home.png"
              alt="Home icon"
            />
            Location: Shop No. 17 (Second Floor), Ridhi Sidhi Complex Opp. Giant's School, Akshay Park Gokul Road, Hubballi.
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email.png"
              alt="Email icon"
            />
            Email-Us: swarainfra1@gmail.com
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone icon"
            />
            Call-Us: +91 9538675322, +91 9902718498
          </p>
        </div>

        {/* Right Section */}
        <div className="right">
          <p><strong>Get In Touch</strong></p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Phone Number" />
          
          {/* Dropdown for Subject */}
          <select defaultValue="" className="subject-dropdown">
            <option value="" disabled>
              Select Subject
            </option>
            <option value="quotation">Get Quotation</option>
            <option value="drawing">Drawing</option>
            <option value="plan">Plan</option>
            <option value="renovate">Renovate</option>
          </select>
          
          <textarea placeholder="Message"></textarea>
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;