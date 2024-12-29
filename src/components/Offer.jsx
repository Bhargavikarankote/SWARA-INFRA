import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "../styles/Offer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Architecture",
    role: "Experienced Architects to work on the floor plans, elevation and working drawings which are completely vastu oriented.",
    image:"https://www.housespace.in/img/sections/services/building-contruction.jpg",
  },
  {
    name: "Design",
    role: "Our structural engineers ensure that the finalized design is structurally compatible as per the IS Standards. MEP engineers work on the electrical & plumbing line drawings suiting the client’s requirements and workability on site.",
    image:"https://st4.depositphotos.com/1007034/40271/i/450/depositphotos_402718606-stock-photo-architecture-project-showing-different-design.jpg",
  },
  {
    name: "Construction",
    role: "A site engineer led by an experienced project coordinator works dedicatedly on site overseeing the process of home construction from day one till key handover.",
    image:"https://img.freepik.com/free-photo/high-angle-measuring-tools-still-life_23-2150440970.jpg?uid=R173554599&ga=GA1.1.1281800808.1725295084&semt=ais_hybrid",
  },
  {
    name: "Key Handover",
    role: "We ensure that the construction is completed within the agreed time frame and the key is handed over to the client along with a formal handover kit.",
    image: "https://thumbs.dreamstime.com/b/key-handover-scene-where-real-estate-agent-landlord-hands-over-keys-to-new-house-owner-tenant-property-investor-292194499.jpg",
  },
];

const TeamSection = () => {
  const factsSectionRef = useRef(null); // Reference for the facts section
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Previous</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
<section className="offer-section">
  <h2 className="offer-title">What We Offer</h2>
  <Slider {...settings} className="offer-carousel">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="offer-member"
        data-aos="fade-up"
        data-aos-delay={`${index * 100}`}
      >
        <div className="offer-member-content">
          <img
            src={member.image}
            alt={member.name}
            className="offer-member-image"
          />
          <h3 className="offer-member-name">{member.name}</h3>
          <p className="offer-member-role">{member.role}</p>
        </div>
      </div>
    ))}
  </Slider>
</section>


      {/* AWESOME FACTS Section */}
      <section
        className="facts-section"
        ref={factsSectionRef}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2>The Construction Company</h2>
        <h3>AWESOME FACTS</h3>
        <div className="facts">
          <div className="fact" data-aos="fade-up" data-aos-delay="200">
            <h4>13691</h4>
            <p>Projects Completed</p>
          </div>
          <div className="fact" data-aos="fade-up" data-aos-delay="400">
            <h4>1725</h4>
            <p>Satisfied Clients</p>
          </div>
          <div className="fact" data-aos="fade-up" data-aos-delay="600">
            <h4>984</h4>
            <p>Workers Employed</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;