import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PricingCarouselWithSlider.css";

const PricingCarouselWithSlider = () => {
  const [priceRange, setPriceRange] = useState(2170); // Initial price matches the first card
  const sliderRef = useRef(null); // Ref to control the carousel

  // Plans with unique links
  const plans = [
    {
      title: "Premium",
      price: 2170,
      link: "/premium", // Corrected link
      buttonText: "Explore Premium",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
    },
    {
      title: "Premium+",
      price: 2399,
      link: "/packages/premiumplus", // Corrected link
      buttonText: "Upgrade to Premium+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
    },
    {
      title: "Luxury",
      price: 2620,
      link: "/packages/luxury", // Corrected link
      buttonText: "Discover Luxury",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
    },
    {
      title: "Luxury+",
      price: 2799,
      link: "/packages/luxuryplus", // Corrected link
      buttonText: "Explore Luxury+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
    },
    {
      title: "Freedom",
      price: 2499,
      link: "/packages/freedom", // Corrected link
      buttonText: "Start with Freedom",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
    },
    {
      title: "Freedom+",
      price: 2650,
      link: "/packages/freedomplus", // Corrected link
      buttonText: "Upgrade to Freedom+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
    },
    {
      title: "The One+",
      price: 3399,
      link: "/packages/theoneplus", // Corrected link
      buttonText: "Experience The One+",
      features: ["Design and drawing", "Civil construction", "Architecture design", "Interior design"],
    },
  ];

  // Slick Slider settings
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    arrows: true,
    afterChange: (index) => setPriceRange(plans[index].price), // Update selected price
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Handle slider value change and navigate to the closest card
  const handleSliderChange = (value) => {
    setPriceRange(value);
    const targetIndex = plans.findIndex((plan) => plan.price === value);
    if (targetIndex !== -1 && sliderRef.current) {
      sliderRef.current.slickGoTo(targetIndex);
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-header">Building Packages</h2>
      <p className="carousel-subtext">Adjust the slider to focus on a specific package based on price!</p>

      {/* Custom Price Slider */}
      <div className="price-slider">
        <input
          type="range"
          min="0"
          max={plans.length - 1} // Set the range based on the number of plans
          value={plans.findIndex((plan) => plan.price === priceRange)}
          onChange={(e) => handleSliderChange(plans[Number(e.target.value)].price)}
          className="slider"
        />
      </div>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.title}</h3>
            <p className="price">Price: Rs {plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {/* Dynamic Link and Button */}
            <Link to={plan.link}>
              <button className="buy-btn">{plan.buttonText}</button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PricingCarouselWithSlider;
