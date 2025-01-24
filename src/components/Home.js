import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <HomeSection>
    <ProfilePhoto className="hover-effect" src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Srđan Radenović" />
    <Name className="hover-effect">Srdan Alexander Radenovic</Name>
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
  height: 100vh;
  background: linear-gradient(145deg, #0d0d2b, #1e1e47, #0d0d1e);
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: 'Orbitron', sans-serif;
`;

const ProfilePhoto = styled.img`
  width: 20vw;
  height: auto;
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 0 30px #ff0040;
`;

const Name = styled.h1`
  font-size: 5vw;
  margin-bottom: 10px;
  text-shadow: 0 0 10px #ff0040, 0 0 20px #ff0040, 0 0 30px #ff0040;
`;

const Tagline = styled.h2`
  font-size: 2.5vw;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 30px #00bfff;
`;

const Summary = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.5;
  text-shadow: 0 0 5px #ffffff;
`;

const LearnMore = styled.a`
  margin-top: 30px;
  padding: 10px 20px;
  background: #00bfff;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 0 10px #00bfff;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background: #ff0040;
    box-shadow: 0 0 20px #ff0040;
  }
`;

export default Home;
