import React from "react";
import "../styles/AboutUs.css";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import featuring from "../assets/featuring.jpg";

const aboutData = [
  {
    image: vision, // Storing image path here
    title: "About Us",
    description:
      "Our vision at Swara Infra is to be recognized as the premier construction company, setting the standard for excellence in the industry. We envision a future where our innovative solutions, sustainable practices, and unwavering commitment to quality propel us to the forefront of construction innovation. By fostering a culture of collaboration, integrity, and continuous improvement, we aim to not only meet but exceed the evolving needs of our clients, while positively impacting the communities we serve. Together, we build a future where every structure we create stands as a testament to our dedication to craftsmanship, safety, and environmental stewardship..",
  },
  {
    image: mission, // Storing image path here
    title: "Our Mission: Helping Millions of Organizations Grow Better",
    description:
      "We believe that just growing bigger isn’t growing better.Growing better means building a company and culture that endure and scale to meet the needs of our customers for years to come..",
  },
  {
    image: featuring, // Storing image path here
    title: "Our Story",
    description:
      "New & Trending Designs No Subcontracts No Hidden Charges Timely Delivery Fair Pricing High quality work with No Compromise.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* New section added here */}
      <div className="text-center mb-5">
        <h2>About Us</h2>
        <p className="text-muted">
          Swarainfra turns that dream into reality. We're your one-stop shop for
          everything home construction. From expert civil engineers to a team
          that oversees every detail, we handle it all.
        </p>
      </div>

      {/* Mapping through the aboutData array */}
      {aboutData.map((item, index) => (
        <div
          className={`about-us-section ${
            index % 2 === 0 ? "section-left" : "section-right"
          }`}
          key={index}
        >
          <div className="about-us-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="about-us-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
