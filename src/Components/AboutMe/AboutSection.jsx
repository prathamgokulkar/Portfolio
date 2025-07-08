import React from "react";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const AboutSection = () => {
  return (
    <div>
      <section id="about">
        <AboutMe></AboutMe>
        <Skills></Skills>
      </section>
    </div>
  );
};

export default AboutSection;
