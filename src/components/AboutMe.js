import React from 'react';
import styled from 'styled-components';

const AboutMe = () => (
  <AboutSection id="about">
    <Heading className="hover-effect">About Me</Heading>
    <ProfessionalSummary>
      I am a Full Stack Web and App Developer with a diverse background in logistics and operations.
      My journey into IT has been driven by a passion for technology and continuous learning.
      I have gained a strong foundation in web development and cybersecurity through rigorous training and real-world projects.
    </ProfessionalSummary>
    <Skills>
      <h3 className="hover-effect">Skills</h3>
      <ul>
        <li>HTML, CSS, JavaScript, React, Node.js, SQL, Python</li>
        <li>System Administration, Linux, Networking, Security</li>
        <li>Inventory Management, Material Handling</li>
      </ul>
    </Skills>
    <Certifications>
      <h3 className="hover-effect">Certifications</h3>
      <ul>
        <li>Google IT Support Professional Certificate - June 2023</li>
        <li>Google Cybersecurity Professional Certificate - March 2024</li>
        <li>Full Stack Web Development - WBS Coding School, Berlin</li>
      </ul>
    </Certifications>
  </AboutSection>
);

const AboutSection = styled.section`
  padding: 100px 20px;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ff0040, 0 0 20px #ff0040, 0 0 30px #ff0040;
`;

const ProfessionalSummary = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 0 5px #ffffff;
`;

const Skills = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    text-shadow: 0 0 10px #00bfff;
  }

  ul {
    list-style-type: none;
    padding: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const Certifications = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    text-shadow: 0 0 10px #00bfff;
  }

  ul {
    list-style-type: none;
    padding: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export default AboutMe;
