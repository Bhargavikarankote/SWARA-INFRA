import React, { useState } from "react";
import "../styles/Dropdown.css";

const Premium = () => {
  const menuItems = [
    {
      title: "Design and Drawing",
      content: [
        "2D-Floor Plans",
        "3D Elevation Designs",
        "Design Development - A maximum of 3 drawing revisions",
        "Basic Internal Isometric Views of the floor plan",
        "Visual site survey & drawing on the basis of measurement provided by client",
      ],
    },
    {
      title: "Civil Construction",
      content: [
        "Floor to floor height – 10",
        "Steel (500 TMT Bars) - Bhuwalka/Kamadhenu",
        "Cement (Grade 43 or 53 as needed) - Penna/Dalmia",
        "UG Sump built with solid blocks of 8” thickness & waterproof plastered 7000 lts",
        "Concrete – M20 grade RMC",
        "Solid Block walls – 6” & 4” thickness",
        "Internal, external and toilet wall-column joints plastering with chicken mesh",
        "Waterproofing compound - Dr.Fixit/FOSROC for external walls",
        "Cement-based waterproofing, waterproofing in terrace to avoid leakage",
        "Steel/concrete lofts - Not included",
        "Ledge wall for incorporating concealed sanitary parts – Included",
      ],
    },
    {
      title: "Architecture Design",
      content: ["Working drawing for all works",
        "Schedule of Openings",
        "Section and Elevation"],
    },
    {
      title: "Interior Design",
      content: ["Complete 3D design interiors, only if executed by swaraInfra",
"2D Furniture layout",
"Assisting in interior procurement"],
    },
    {
      title: "Structural Design",
      content: ["Structural Design as per IS Code",
"Good for construction drawings",
"Soil Test report",
"Design Analysis Report"],
    },
    {
      title: "MEP Design",
      content: ["Electrical Layout",
"Plumbing Water Line Layout",
"Plumbing Drainage Line Layout"],
    },
    {
        title: "Government Liaison Assistance",
        content: ["Construction Plan Sanction",
"Temporary Electricity connection",
"Permanent electrical connection",
"Water connection",
"Sewage connection"],
      },
      {
          title: "Flooring and Wall tilling",
          content: ["Kitchen, Dining & Bedrooms : Vitrified Tiles – Rs.60/- per Sqft. Maximum tile size is 2’ X 2’",
"Living Room, Foyer : Marble finished vitrified tiles -Rs.70/- per Sqft",
"Staircase : Granite – Rs.100/- per Sqft",
"Balcony, Sit-out, Passage & Common areas : Anti-skid tiles – Rs.55/- per Sqft",
"Toilet Floor : Anti-skid tiles – Rs.50/- per Sqft",
"Toilet Wall Dado (Up to 7ft height) : Light & Highlighting tiles – Rs.45/- per Sqft",
"Parking Area, setback area (if charged) tiles – Rs.35/- per Sqft",
"Kitchen counter top : Granite – Rs.120/- per Sqf",
"Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.50/- per Sqft",
"Puja Room- Wall tiling – Not Included",
"Puja Room- Granite slab- Rs-100/- per Sqft"],
        },
        {
          title: "Electrical",
          content: ["Electrical – Light & power points shall be provided as per standards",
"Geyser points – All bathrooms",
"AC provision – Any 2 rooms",
"Conduits – Good quality, hidden in slabs and walls",
"Fire proof copper wire – Anchor make",
"External electrification is included",
"Switches & Plates – Anchor-Roma make",
"A main DB & MCB – IndoAsian/Siemens/Equivalent make",
"Electric Car charging point – Parking area"],
        },
        {
          title: "Painting",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Plumbing",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Fixtures",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Doors",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Windows",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Fabrication",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Compound Wall",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Elevation",
          content:[ "Browse and manage external resources."],
        },
        {
          title: "Exclusions & Incidentals",
          content: ["Browse and manage external resources."],
        },
        {
          title: "Payment Structure",
          content:[ "Browse and manage external resources."],
        },
        {
          title: "Warranty and Guarantee",
          content: ["Browse and manage external resources."],
        },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active item
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="dropdown-item">
            {/* Title */}
            <div
              className={`dropdown-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {item.title}
              <span className="icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {/* Content */}
            {activeIndex === index && (
              <div className="dropdown-content">
                <ul>
                  {item.content.map((contentItem, contentIndex) => (
                    <li key={contentIndex}>{contentItem}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Premium;
