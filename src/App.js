import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

const App = () => (
  <>
    <Navbar />
    <Element name="home">
      <Home />
    </Element>
    <Element name="about">
      <AboutMe />
    </Element>
    <Element name="resume">
      <Resume />
    </Element>
    <Element name="projects">
      <Projects />
    </Element>
    <Element name="contact">
      <ContactMe />
    </Element>
    <Footer />
  </>
);

export default App;
