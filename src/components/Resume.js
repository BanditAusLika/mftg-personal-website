import React from 'react';
import styled from 'styled-components';

const Resume = () => (
  <ResumeSection id="resume">
    <Heading className="hover-effect">Resume</Heading>

    <Job>
      <h4 className="hover-effect">Warehouse Worker - Amazon Warehouse, Magdeburg</h4>
      <p>October 2024 – January 2025</p>
      <ul>
        <li>Handled package logistics and real-time inventory operations.</li>
        <li>Scanned, packed, and distributed thousands of units daily using internal tracking systems.</li>
      </ul>
    </Job>

    <Job>
      <h4 className="hover-effect">Material Handler - Tesla Manufacturing Brandenburg GmbH, Berlin</h4>
      <p>February 2023 – July 2023</p>
      <ul>
        <li>Managed transport of materials from logistics centers to active production lines.</li>
        <li>Operated forklifts and industrial transport vehicles with DEKRA certification.</li>
        <li>Worked with ERP systems to track parts and ensure production line continuity.</li>
      </ul>
    </Job>

    <Job>
      <h4 className="hover-effect">Logistics Operator - HelloFresh SE, Barleben (Magdeburg)</h4>
      <p>May 2022 – October 2022</p>
      <ul>
        <li>Coordinated packaging and shipment of meal kits in high-volume warehouse environment.</li>
        <li>Maintained hygiene protocols and cold chain compliance for food handling.</li>
        <li>Worked in fast-paced logistics operations with rotating shifts.</li>
      </ul>
    </Job>

    <Job>
      <h4 className="hover-effect">Special Assignment</h4>
      <p>August 2013 – April 2021</p>
      <ul>
        <li>Held a specialized role involving sensitive operations across multiple countries.</li>
        <li>Full details are confidential due to legal protections and ongoing proceedings.</li>
      </ul>
    </Job>

    <Job>
      <h4 className="hover-effect">Event Manager (Freelance) - Exit Festival / Student's Club, Belgrade</h4>
      <p>January 2004 – October 2012</p>
      <ul>
        <li>Planned and executed major events and festivals across Serbia.</li>
        <li>Managed logistics, vendor contracts, artist coordination, and venue planning.</li>
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
