import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Navbar = () => (
  <Nav>
    <NavLink className="hover-effect" to="home" smooth={true} duration={1000}>
      Home
    </NavLink>
    <NavLink className="hover-effect" to="about" smooth={true} duration={1000}>
      About Me
    </NavLink>
    <NavLink className="hover-effect" to="resume" smooth={true} duration={1000}>
      Resume
    </NavLink>
    <NavLink className="hover-effect" to="projects" smooth={true} duration={1000}>
      Projects
    </NavLink>
    <NavLink className="hover-effect" to="contact" smooth={true} duration={1000}>
      Contact Me
    </NavLink>
  </Nav>
);

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(10, 10, 10, 0.9);
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  z-index: 1000;
  font-family: 'Orbitron', sans-serif;
`;

const NavLink = styled(Link)`
  margin: 0 20px;
  color: #ffffff;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  text-shadow: 0 0 5px #ff0040, 0 0 10px #ff0040;
  transition: color 0.3s ease;

  &:hover {
    color: #00bfff;
    text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff;
  }
`;

export default Navbar;
