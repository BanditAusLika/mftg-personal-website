<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
>>>>>>> 622e934 (Initialize project using Create React App)

export default App;
