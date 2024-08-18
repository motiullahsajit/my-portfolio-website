import React from "react";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import VolunteerWork from "./VolunteerWork/VolunteerWork";
import Achievements from "./Achievements/Achievements";

const Main = () => {
  return (
    <main className="bg-brand-light">
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <VolunteerWork />
      <Achievements />
    </main>
  );
};

export default Main;
