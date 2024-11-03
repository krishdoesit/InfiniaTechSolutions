// src/pages/About.js

import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <Title>About InfiniaTech Solutions</Title>
        <Text>
          InfiniaTech Solutions is dedicated to providing quality IT solutions, from custom software to cloud migration,
          designed to drive your business forward. We pride ourselves on delivering excellence by combining local project
          management with a skilled technical team based in India.
        </Text>
      </Section>

      <Section>
        <SubTitle>Our Mission</SubTitle>
        <Text>
          Our mission is to empower businesses through innovative, scalable technology solutions, ensuring that each project
          is handled with care and precision to meet client needs.
        </Text>
      </Section>

      <Section>
        <SubTitle>Our Values</SubTitle>
        <ValuesList>
          <li>Commitment to Quality</li>
          <li>Transparency and Trust</li>
          <li>Continuous Improvement</li>
          <li>Client-Centric Approach</li>
        </ValuesList>
      </Section>

      <Section>
        <SubTitle>Why Choose Us</SubTitle>
        <Text>
          With a professional management team in North America and technical expertise from our skilled developers globally,
          we ensure that every project aligns with our high standards. Our unique approach combines local oversight with
          global expertise to deliver seamless, reliable solutions.
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f4f4f9;
  color: #1e1e2f;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  li {
    margin-bottom: 0.5rem;
  }
`;
