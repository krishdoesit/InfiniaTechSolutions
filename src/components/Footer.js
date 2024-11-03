// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanyInfo>
          <CompanyName>InfiniaTech Solutions</CompanyName>
          <Tagline>Your Trusted IT Partner</Tagline>
        </CompanyInfo>
        <QuickLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </QuickLinks>
        <ContactInfo>
          <ContactItem>Email: info@infiniatech.com</ContactItem>
          <ContactItem>Phone: +1 (123) 456-7890</ContactItem>
        </ContactInfo>
        <SocialMedia>
          <SocialLink href="https://facebook.com" target="_blank">
            <FaFacebookF />
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank">
            <FaLinkedinIn />
          </SocialLink>
        </SocialMedia>
      </FooterContent>
      <Copyright>© 2023 InfiniaTech Solutions. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const CompanyInfo = styled.div`
  text-align: center;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: #cccccc;
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #0077b6;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
  color: #cccccc;
`;

const ContactItem = styled.p`
  margin: 0;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.25rem;

  &:hover {
    color: #0077b6;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #cccccc;
`;
