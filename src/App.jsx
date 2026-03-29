import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutSection from "./Components/AboutMe/AboutSection";
import Experience from "./Components/Experience/Experience";
import ContactForm from "./Components/Contact/ContactForm";
import ProjectPage from "./Components/Project/ProjectPage";
import ScrollManager from "./Components/Scroll/ScrollManager";
import "./index.css";

const App = () => {
  return (
    <div>
      <ScrollManager />
      <Navbar></Navbar>
      <Hero></Hero>
      <Experience></Experience>
      <AboutSection></AboutSection>
      <ProjectPage></ProjectPage>
      <ContactForm></ContactForm>
    </div>
  );
};

export default App;
