import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const completedProjects = [
    { location: "New York", sqft: "2000 sqft", img: "https://via.placeholder.com/150" },
    { location: "Los Angeles", sqft: "2500 sqft", img: "https://via.placeholder.com/150" },
    { location: "Chicago", sqft: "1800 sqft", img: "https://via.placeholder.com/150" },
    { location: "Houston", sqft: "2200 sqft", img: "https://via.placeholder.com/150" },
  ];

  const ongoingProjects = [
    { location: "San Francisco", sqft: "3000 sqft", img: "https://via.placeholder.com/150" },
    { location: "Miami", sqft: "2700 sqft", img: "https://via.placeholder.com/150" },
    { location: "Seattle", sqft: "2100 sqft", img: "https://via.placeholder.com/150" },
    { location: "Denver", sqft: "1900 sqft", img: "https://via.placeholder.com/150" },
  ];

  const projects = activeTab === "completed" ? completedProjects : ongoingProjects;

  return (
    <div className="projects-container">
      <h2>VIEW CONSTRUCTION</h2>
      <h3>Delivering high-quality construction services...</h3>

      <div className="tabs">
        <button
          className={activeTab === "completed" ? "active-tab" : ""}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
        <button
          className={activeTab === "ongoing" ? "active-tab" : ""}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={`Project in ${project.location}`} />
            <h4>{project.location}</h4>
            <p>{project.sqft}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
