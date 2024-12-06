import React from "react";
// import "./App.css";
import HoverCard from "../components/HoverCard";
import ProgressBar from "../components/ProgressBar";
import ServicesBanner from "../components/ServicesBanner";
import TeamSection from "../components/TeamSection";




function About() {
  return (
    <div className="App">
      {/* <TopBar/> */}
      <HoverCard/>
      <ProgressBar/>
      <ServicesBanner/>
      <TeamSection/>
    </div>
  );
}

export default About;
