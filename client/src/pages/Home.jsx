
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Expertise from "../components/Expertise";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Expertise />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
