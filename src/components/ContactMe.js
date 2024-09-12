import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactMe = () => (
  <ContactSection id="contact">
    <Heading className="hover-effect">Contact Me</Heading>
    <ContactInfo>
      <ContactItem href="mailto:info-contact@mftgworks.org" className="hover-effect">
        <FaEnvelope /> info-contact@mftgworks.org
      </ContactItem>
      <ContactItem href="tel:+4917624685557" className="hover-effect">
        <FaPhone /> +49 176 2468 5557
      </ContactItem>
      <Address className="hover-effect">
        <FaMapMarkerAlt /> Magdeburg / Germany
      </Address>
    </ContactInfo>
  </ContactSection>
);

const ContactSection = styled.section`
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

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactItem = styled.a`
  display: block;
  color: #ffffff;
  font-size: 1.5rem;
  margin: 20px 0;
  text-decoration: none;
  text-shadow: 0 0 5px #ffffff;
  transition: color 0.3s ease;

  &:hover {
    color: #00bfff;
    text-shadow: 0 0 10px #00bfff;
  }

  svg {
    margin-right: 10px;
  }
`;

const Address = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  margin: 20px 0;
  text-shadow: 0 0 5px #ffffff;
  transition: color 0.3s ease;

  svg {
    margin-right: 10px;
  }
`;

export default ContactMe;
