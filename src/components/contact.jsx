import React, { useEffect } from "react";
import "../styles/contact.css"; // Import the styling for the contact section
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Contact = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
      offset: 100, // Adjust the offset for triggering the animation
    });
  }, []);

  return (
    <div className="contact-container">
      <div className="image-placeholder" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="map-container">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.51234589949!2d107.00280043271502!3d11.537387973225078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM13CsDMxJzE0LjkiTiAxMDfCsDAwJzE5LjAiRQ!5e0!3m2!1sen!2s!4v1689801453405"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d605.6396172426017!2d75.11453665467444!3d15.355479937451365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d729e11eaac5%3A0x5188820b2489475!2sRidhi%20sidhi%20glass%20hubali!5e0!3m2!1sen!2sin!4v1717178014933!5m2!1sen!2sin"
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
        <div className="left" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
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
        <div className="right" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
          <p><strong>Get In Touch</strong></p>
          <input type="text" placeholder="Name" data-aos="fade-up" data-aos-delay="200" />
          <input type="email" placeholder="E-mail" data-aos="fade-up" data-aos-delay="300" />
          <input type="text" placeholder="Phone Number" data-aos="fade-up" data-aos-delay="400" />
          
          {/* Dropdown for Subject */}
          <select defaultValue="" className="subject-dropdown" data-aos="fade-up" data-aos-delay="500">
            <option value="" disabled>Select Subject</option>
            <option value="quotation">Get Quotation</option>
            <option value="drawing">Drawing</option>
            <option value="plan">Plan</option>
            <option value="renovate">Renovate</option>
          </select>
          
          <textarea placeholder="Message" data-aos="fade-up" data-aos-delay="600"></textarea>
          <button className="send-button" data-aos="fade-up" data-aos-delay="700">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
