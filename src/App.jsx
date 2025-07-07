import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutSection from "./Components/AboutMe/AboutSection";
import ContactForm from "./Components/Contact/ContactForm";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <ContactForm></ContactForm>
    </div>
  );
};

export default App;
