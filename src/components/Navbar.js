// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>InfiniaTech Solutions</Logo>
      <NavLinks>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavLinks>
      <CTAButton>Get Started</CTAButton>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1e1e2f;
  color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; /* Hides links on smaller screens */
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0077b6;
  }
`;

const CTAButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #0077b6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0096c7;
  }

  @media (max-width: 768px) {
    /* Small adjustments for mobile screens */
    padding: 0.4rem 0.8rem;
  }
`;
