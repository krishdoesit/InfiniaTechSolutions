// src/components/TestimonialsSection.js

import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonialsData = [
  {
    quote: "InfiniaTech Solutions helped us streamline our processes and boost our efficiency!",
    author: "John Doe, CEO of ABC Corp",
  },
  {
    quote: "Their cloud migration service was seamless and had an immediate positive impact on our operations.",
    author: "Jane Smith, CTO of XYZ Inc",
  },
  {
    quote: "Professional, reliable, and knowledgeable – I highly recommend InfiniaTech Solutions!",
    author: "Michael Lee, Founder of StartUp Hub",
  },
];

const TestimonialsSection = () => {
  return (
    <Section>
      <SectionTitle>What Our Clients Say</SectionTitle>
      <StyledCarousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        {testimonialsData.map((testimonial, index) => (
          <Testimonial key={index}>
            <Quote>"{testimonial.quote}"</Quote>
            <Author>{testimonial.author}</Author>
          </Testimonial>
        ))}
      </StyledCarousel>
    </Section>
  );
};

export default TestimonialsSection;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #1e1e2f;
  color: #ffffff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const StyledCarousel = styled(Carousel)`
  width: 80%;
  max-width: 600px;
  margin: 0 auto;

  .carousel .slide {
    background: none;
  }
`;

const Testimonial = styled.div`
  padding: 1rem;
`;

const Quote = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Author = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #cccccc;
  margin-bottom: 1.5rem;  // Add margin-bottom to prevent overlap with dots
`;
