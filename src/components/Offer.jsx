import React,{useEffect,useState} from "react";
import "../styles/Offer.css";

const AnimatedCounter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 100); // Determines the increment step
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(Math.floor(start));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return <h4>{count}+</h4>;
};
const Offer = () => {
  return (
    <div className="container">
      {/* WHAT WE OFFER Section */}
      <section className="offer-section">
        <h2>WHAT WE OFFER</h2>
        <div className="cards">
          <div className="card1">
            <img
              src="https://www.housespace.in/img/sections/services/building-contruction.jpg"
              alt="The Green Building"
            />
            <h3>Architecture</h3>
            <p>
            Experienced Architects to work on the floor plans, elevation and working drawings which are completely vastu oriented.
            </p>
          </div>
          <div className="card1">
            <img
              src="https://st4.depositphotos.com/1007034/40271/i/450/depositphotos_402718606-stock-photo-architecture-project-showing-different-design.jpg"
              alt="House Renovation"
            />
            <h3>Design</h3>
            <p>
            Our structural engineers ensure that the finalized design is structurally compatible as per the IS Standards. MEP engineers work on the electrical & plumbing line drawings suiting the client’s requirements and workability on site.
            </p>
          </div>
          <div className="card1">
            <img
              src="https://img.freepik.com/free-photo/high-angle-measuring-tools-still-life_23-2150440970.jpg?uid=R173554599&ga=GA1.1.1281800808.1725295084&semt=ais_hybrid"
              alt="Design & Construction"
            />
            <h3>Construction</h3>
            <p>
            A site engineer led by an experienced project coordinator works dedicatedly on site overseeing the process of home construction from day one till key handover.
            </p>
          </div>
        </div>
      </section>

      <section className="facts-section">
        <h2>The Construction Company</h2>
        <h3>AWESOME FACTS</h3>
        <div className="facts">
          <div className="fact">
            <AnimatedCounter endValue={13691} duration={3000} />
            <p>Projects Completed</p>
          </div>
          <div className="fact">
            <AnimatedCounter endValue={1725} duration={3000} />
            <p>Satisfied Clients</p>
          </div>
          <div className="fact">
            <AnimatedCounter endValue={984} duration={3000} />
            <p>Workers Employed</p>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Offer;
