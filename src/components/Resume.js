import React from 'react';
import styled from 'styled-components';

const Resume = () => (
  <ResumeSection id="resume">
    <Heading className="hover-effect">Resume</Heading>
    <Job>
      <h4 className="hover-effect">Warehouse Worker - Amazon Warehouse, Magdeburg</h4>
      <p>October 2024 – January 2025</p>
      <ul>
        <li>Logistics and inventory management.</li>
      </ul>
    </Job>
    <Job>
      <h4 className="hover-effect">Material Handler - Tesla Manufacturing Brandenburg GmbH, Berlin</h4>
      <p>February 2023 – July 2023</p>
      <ul>
        <li>Managed the efficient transport of goods between distribution centers and production lines.</li>
        <li>Operated forklifts and material handling equipment.</li>
        <li>Utilized ERP systems for logistics and inventory processes.</li>
      </ul>
    </Job>
    <Job>
      <h4 className="hover-effect">Special Assignment</h4>
      <p>August 2013 – April 2021</p>
      <ul>
        <li>Held a specialized position involving highly sensitive assignments across multiple locations.</li>
        <li>Specific details cannot be disclosed due to ongoing legal proceedings.</li>
      </ul>
    </Job>
    <Job>
      <h4 className="hover-effect">Event Manager (Freelance) - Exit Festival/Student's Club, Belgrade</h4>
      <p>January 2004 – October 2012</p>
      <ul>
        <li>Planned, organized, and executed various events, managing all logistical and operational aspects.</li>
        <li>Coordinated with vendors, performers, and clients to ensure event success.</li>
      </ul>
    </Job>
  </ResumeSection>
);

const ResumeSection = styled.section`
  padding: 100px 20px;
  background-color: #1a1a1a;
  color: #ffffff;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ff0040, 0 0 20px #ff0040, 0 0 30px #ff0040;
`;

const Job = styled.div`
  margin-top: 40px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-shadow: 0 0 5px #ffffff;
  }

  p {
    font-size: 1rem;
    color: #dddddd;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    font-size: 1.25rem;
  }
`;

export default Resume;
