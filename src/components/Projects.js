import React from 'react';
import styled from 'styled-components';

const Projects = () => (
  <ProjectsSection id="projects">
    <Heading className="hover-effect">Projects</Heading>

    {/* MBA Cleaning Service Website */}
    <Project>
      <h3 className="hover-effect">MBA Cleaning Service Website</h3>
      <a href="https://mbacleaningservice.com/" target="_blank" rel="noopener noreferrer" className="hover-effect">View Project</a>
      <p>A user-friendly, responsive website developed for a cleaning service in Melbourne. Optimized for SEO, leading to increased traffic and customer inquiries.</p>
      <a href="/Rec-letter.pdf" download className="hover-effect">Download Recommendation Letter</a>
    </Project>

    {/* MFTG Weather App */}
    <Project>
      <h3 className="hover-effect">MFTG Weather App</h3>
      <a href="https://mftg-weather-app2024.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover-effect">View Project</a>
      <p>A responsive and polished weather app developed with React, featuring glowing elements and futuristic typography using the Orbitron font. The app includes functionalities like remembering the last searched city and smooth animations.</p>
    </Project>

    {/* MFTG To-Do App */}
    <Project>
      <h3 className="hover-effect">MFTG To-Do App</h3>
      <a href="https://mftg-todoapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover-effect">View Project</a>
      <p>A fully functional to-do list app developed using Vue.js and deployed via Git and Netlify. This project is a portfolio highlight, featuring responsive design and enhanced hover effects for user engagement.</p>
    </Project>

    {/* MFTG Budget Tracker */}
    <Project>
      <h3 className="hover-effect">MFTG Budget Tracker</h3>
      <a href="https://mftg-budget-tracker.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover-effect">View Project</a>
      <p>A fully responsive budget tracker app developed using React.js. This app helps users track their expenses, provides insightful statistics, and saves data using localStorage. It features a neon, dark theme with glowing hover effects and Orbitron typography.</p>
    </Project>

  </ProjectsSection>
);

const ProjectsSection = styled.section`
  padding: 100px 20px;
  background-color: #141414;
  color: #ffffff;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ff0040, 0 0 20px #ff0040, 0 0 30px #ff0040;
`;

const Project = styled.div`
  margin-top: 40px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;

  h3 {
    font-size: 2rem;
    margin-bottom: 10px;
    text-shadow: 0 0 5px #ffffff;
  }

  p {
    font-size: 1.25rem;
    color: #dddddd;
    margin-top: 10px;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background: #00bfff;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 0 10px #00bfff;
    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      background: #ff0040;
      box-shadow: 0 0 20px #ff0040;
    }
  }
`;

export default Projects;
