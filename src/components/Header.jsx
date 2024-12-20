import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 103%;
  background: linear-gradient(145deg, #de3163, #9b1b37); /* Gradient background */
  padding: 20px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: 'Verdana', sans-serif;
  font-size: 18px;
  margin: 0 15px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #f39c12;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Nav>
      <Logo>My Portfolio</Logo>
      <NavLinksContainer>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects1">Education</NavLink>
        <NavLink href="#achievements">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinksContainer>
    </Nav>
  </HeaderContainer>
);

export default Header;
