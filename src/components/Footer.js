import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <FooterText className="hover-effect">Made By MFTG 2024</FooterText>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: #0d0d0d;
  padding: 20px;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.8);
`;

const FooterText = styled.p`
  color: #ffffff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  text-shadow: 
    0 0 5px #ff0040, 
    0 0 10px #ff0040, 
    0 0 15px #ff0040, 
    0 0 20px #ff0040;
`;

export default Footer;
