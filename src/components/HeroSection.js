// src/components/HeroSection.js

import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const HeroSection = () => {
  // Fade-in effect for the entire section
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <HeroContainer style={fadeIn}>
      <HeroContent>
        <HeroTitle>Your Trusted IT Partner for Transformation and Growth.</HeroTitle>
        <HeroSubheading>
          Accelerate your business with tailored solutions in AI, data, cloud, and digital transformation, managed for excellence. 
        </HeroSubheading>
        <CTAButton>Get Started</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

// Styled components
const HeroContainer = styled(animated.div)`
  background-color: #1e1e2f;
  color: #ffffff;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  @media (max-width: 768px) {
    height: auto;
    padding: 4rem 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubheading = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #d1d1e0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(animated.button)`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #0077b6; /* Deep teal for contrast */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0096c7; /* Slightly lighter teal on hover */
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
`;
