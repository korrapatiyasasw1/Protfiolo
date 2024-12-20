import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 121%;
  background-color: #454545;
  padding: 15px 0;
  display: flex;
  justify-content: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  color: white;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: 'Verdana';
  font-size: 18px;
  margin: 0 10px;
`;

const Header = () => (
  <HeaderContainer>
    <Nav>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects1">Education</NavLink>
      <NavLink href="#achievements">Skills</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
