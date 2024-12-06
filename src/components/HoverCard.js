import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import vision from '../assets/vision.jpeg';
import mission from '../assets/mission.jpeg';
import featuring from '../assets/featuring.jpeg';

const AboutUs = () => {
  return (
    <div className="about-us-section py-5">
      <div className="container">
        {/* About Us Section */}
        <div className="text-center mb-5">
          <h2>About Us</h2>
          <p className="text-muted">
          Swarainfra turns that dream into reality. We're your one-stop shop for everything home construction. From expert civil engineers to a team that oversees every detail, we handle it all.
          </p>
        </div>

        {/* Zig-Zag Layout */}
        <div className="row g-4 align-items-center">
          {/* Card 1 */}
          <div className="col-md-6">
            <img
              src={mission}
              alt="Our Mission"
              className="img-fluid rounded hover-card-image"
            />
          </div>
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p className="text-muted">
              We believe that just growing bigger isn’t growing better. Growing better means building a company and culture
              that endure and scale to meet the needs of our customers for years to come.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Card 2 */}
          <div className="col-md-6 order-md-2">
            <img
              src={vision}
              alt="Our Vision"
              className="img-fluid rounded hover-card-image"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h3>Our Vision</h3>
            <p className="text-muted">
            Our vision at Swara Infra is to be recognized as the premier construction company, setting the standard for excellence in the industry. We envision a future where our innovative solutions, sustainable practices, and unwavering commitment to quality propel us to the forefront of construction innovation. By fostering a culture of collaboration, integrity, and continuous improvement, we aim to not only meet but exceed the evolving needs of our clients, while positively impacting the communities we serve.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Card 3 */}
          <div className="col-md-6">
            <img
              src={featuring}
              alt="Our Story"
              className="img-fluid rounded hover-card-image"
            />
          </div>
          <div className="col-md-6">
            <h3>Featuring</h3>
            <p className="text-muted">
            New & Trending Designs,
No Subcontracts,
No Hidden Charges,
Timely Delivery,
Fair Pricing,
High quality work with No Compromise
            </p>
          </div>
        </div>

        {/* <div className="row g-4 align-items-center">
          Card 4
          <div className="col-md-6 order-md-2">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Our Customers"
              className="img-fluid rounded hover-card-image"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h3>Our Customers</h3>
            <p className="text-muted">
              With over 100,000 customers worldwide, HubSpot continues to provide solutions that empower organizations to
              scale and thrive, ensuring their success for years to come.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
