import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/AboutUs.css";
import { Pagination, Navigation } from "swiper/modules";

function AboutUs() {
  return (
    <section className="about-us">
      
      <div className="about-header">

        <h1>About Us</h1>
      
      </div>

    
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="about-carousel"
      >
        
        <SwiperSlide>
          <div className="carousel-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Mission Icon"
              className="carousel-icon"
            />
            <h3>Our Mission</h3>
            <p>
              Our mission is to build a sustainable future by delivering
              exceptional construction projects that exceed client expectations,
              uphold the highest standards of quality, safety, and integrity,
              and positively impact communities and the environment.
            </p>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="carousel-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1710/1710851.png"
              alt="Vision Icon"
              className="carousel-icon"
            />
            <h3>Our Vision</h3>
            <p>
              Our vision at Swara Infra is to be recognized as the premier
              construction company, setting the standard for excellence in the
              industry. We envision a future where our innovative solutions are
              sustainable.
            </p>
          </div>
        </SwiperSlide>

    
        <SwiperSlide>
          <div className="carousel-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2344/2344523.png"
              alt="Features Icon"
              className="carousel-icon"
            />
            <h3>Our Features</h3>
            <ul>
              <li>New & Trending Designs</li>
              <li>No Subcontracts</li>
              <li>No Hidden Charges</li>
              <li>Timely Delivery</li>
              <li>Fair Pricing</li>
              <li>High-quality Work with No Compromise</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default AboutUs;

