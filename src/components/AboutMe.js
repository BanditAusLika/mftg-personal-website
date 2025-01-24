import React from 'react';
import styled from 'styled-components';

const AboutMe = () => (
  <AboutSection id="about">
    <Heading className="hover-effect">About Me</Heading>
    <ProfessionalSummary>
      Certified Full Stack Web and App Developer with a diverse background in web development, IT support, and cybersecurity. I am passionate about continuous learning and innovation, currently pursuing advanced Python programming and professional German language studies. My professional journey includes working on sensitive assignments requiring discretion and confidentiality. Legally authorized to live and work in Germany with a valid German/EU driving license.
    </ProfessionalSummary>
    <CoreCompetencies>
      <h3 className="hover-effect">Core Competencies</h3>
      <ul>
        <li>Web Development: Responsive Design, HTML5, CSS3, JavaScript, React, Vue.js</li>
        <li>Programming: Python, TypeScript, SQL, NoSQL</li>
        <li>IT Support & Cybersecurity: Network Security, Linux, Troubleshooting, System Administration</li>
        <li>Cloud Computing: AWS Educate, IBM Cloud Services</li>
        <li>Project Management: Agile Methodologies, SEO Optimization</li>
        <li>Tools & Frameworks: Node.js, Tailwind, Sass, RESTful APIs</li>
      </ul>
    </CoreCompetencies>
    <Certifications>
      <h3 className="hover-effect">Certifications</h3>
      <ul>
        <li>Full Stack Web and App Development - WBS Coding School (Jan 2022, 408 hours)</li>
        <li>Google IT Support Professional Certificate (June 2023)</li>
        <li>Google Cybersecurity Professional Certificate (March 2024)</li>
        <li>IBM Cloud Computing Certificate (June 2023)</li>
        <li>Foundations of Cybersecurity (Jul 2023)</li>
        <li>Assets, Threats, and Vulnerabilities (Oct 2023)</li>
        <li>Connect and Protect: Networks and Network Security (Aug 2023)</li>
        <li>Detection and Response (Oct 2023)</li>
        <li>Tools of the Trade: Linux and SQL (Sep 2023)</li>
      </ul>
    </Certifications>
    <Education>
      <h3 className="hover-effect">Education</h3>
      <ul>
        <li>
          <strong>Penn Foster Education:</strong> Ongoing, with plans to pursue an associate degree in Computer Systems.
        </li>
        <li>
          <strong>Certified Python Programmer (ILS):</strong> Enrolled since March 2024 (6/18 milestones completed).
        </li>
        <li>
          <strong>German Language Studies:</strong> Actively learning German professionally, certified at A2.1 level (Berlitz Placement Test).
        </li>
      </ul>
    </Education>
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

const CoreCompetencies = styled.div`
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

const Education = styled.div`
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

  li {
    margin-bottom: 10px;
  }
`;

export default AboutMe;
