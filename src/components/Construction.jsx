import React, { useState, useEffect } from 'react';
import '../styles/Construction.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

const Construction = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle dropdown visibility
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens once
    });
  }, []);

  return (
    <div className="construction-container">
      <div className="sections-container">
        {/* Why Choose Us Section */}
        <div className="why-choose-us" data-aos="fade-up">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <div className="dropdown-header" onClick={() => toggleDropdown(0)}>
                We have 30 plus years in the building industry
              </div>
              {activeIndex === 0 && (
                <p className="dropdown-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non.
                </p>
              )}
            </li>
            <li>
              <div className="dropdown-header" onClick={() => toggleDropdown(1)}>
                Quality construction continues after the project
              </div>
              {activeIndex === 1 && (
                <p className="dropdown-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non.
                </p>
              )}
            </li>
            <li>
              <div className="dropdown-header" onClick={() => toggleDropdown(2)}>
                We use technology to do the job more quickly
              </div>
              {activeIndex === 2 && (
                <p className="dropdown-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non.
                </p>
              )}
            </li>
            <li>
              <div className="dropdown-header" onClick={() => toggleDropdown(3)}>
                Employees are continually trained on safety issues
              </div>
              {activeIndex === 3 && (
                <p className="dropdown-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non.
                </p>
              )}
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="about-us" data-aos="fade-up" data-aos-duration="1500">
          {/* <h2>About Us</h2> */}
          <div className="image-gallery">
            <img
              src="https://themes247.net/html5/construction-template/demo/assets/img/gallery/1.jpg"
              alt="Main Construction Image"
              className="main-image"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div className="thumbnail-gallery" data-aos="fade-up" data-aos-delay="200">
              <img src="https://themes247.net/html5/construction-template/demo/assets/img/gallery/2-s.jpg" alt="Thumbnail 1" />
              <img src="https://themes247.net/html5/construction-template/demo/assets/img/gallery/3-s.jpg" alt="Thumbnail 2" />
              <img src="https://themes247.net/html5/construction-template/demo/assets/img/gallery/4-s.jpg" alt="Thumbnail 3" />
              <img src="https://themes247.net/html5/construction-template/demo/assets/img/gallery/4-s.jpg" alt="Thumbnail 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
