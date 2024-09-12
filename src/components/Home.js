import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <HomeSection>
    <ProfilePhoto className="hover-effect" src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Srđan Radenović" />
    <Name className="hover-effect">Srđan Radenović</Name>
    <Tagline className="hover-effect">Full Stack Web and App Developer</Tagline>
    <Summary className="hover-effect">
      Transitioning from logistics to IT, bringing strong analytical skills, a commitment to continuous learning, and hands-on experience in web technologies.
    </Summary>
    <LearnMore href="#about" className="hover-effect">Learn More About Me</LearnMore>
  </HomeSection>
);

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px 20px; /* Added more padding to move content down */
  background: linear-gradient(145deg, #0d0d2b, #1e1e47, #0d0d1e);
  color: #ffffff;
  text-align: center;
  font-family: 'Orbitron', sans-serif;

  @media (min-width: 768px) {
    padding: 40px 20px; /* More padding for larger screens */
  }
`;

const ProfilePhoto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 0 10px #ff0040, 0 0 20px #ff0040;
  transition: box-shadow 0.3s ease-in-out;
  margin-top: 40px; /* Move photo down a bit */

  @media (min-width: 768px) {
    width: 240px;
    height: 240px;
  }

  @media (min-width: 1024px) {
    width: 280px;
    height: 280px;
  }

  @media (min-width: 1280px) {
    width: 300px;
    height: 300px;
  }

  &:hover {
    box-shadow: 0 0 20px #00bfff, 0 0 30px #00bfff;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 30px 0 10px 0;
  text-shadow: 0 0 10px #ff0040, 0 0 20px #ff0040, 0 0 30px #ff0040;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  &:hover {
    text-shadow: 0 0 15px #00bfff, 0 0 25px #00bfff, 0 0 35px #00bfff;
  }
`;

const Tagline = styled.h2`
  font-size: 1.2rem;
  text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff;
  
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  &:hover {
    text-shadow: 0 0 15px #ff0040, 0 0 25px #ff0040;
  }
`;

const Summary = styled.p`
  font-size: 1rem;
  max-width: 800px;
  margin-top: 20px;
  text-shadow: 0 0 5px #ffffff;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  &:hover {
    text-shadow: 0 0 10px #ff0040, 0 0 20px #ff0040;
  }
`;

const LearnMore = styled.a`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #00bfff;
  border-radius: 5px;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0 0 10px #00bfff;
  box-shadow: 0 0 10px #00bfff;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: #ff0040;
    box-shadow: 0 0 20px #ff0040;
    text-shadow: 0 0 15px #ff0040;
  }
`;

export default Home;
