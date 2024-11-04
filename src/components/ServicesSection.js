// src/components/ServicesSection.js

import React from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';

const servicesData = [
  { title: 'Data Analytics & Business Intelligence', description: 'Unlock insights with advanced data analytics and business intelligence solutions.' },
  { title: 'Software Development & Automation', description: 'Custom software solutions and automation to enhance your operations.' },
  { title: 'Cloud Services & Migration', description: 'Seamless cloud migration and management for scalability and performance.' },
  { title: 'Data Architecture & Management', description: 'Organize and optimize your data with efficient data architecture solutions.' },
  { title: 'DevOps & Automation', description: 'Accelerate development cycles with efficient DevOps practices.' },
  { title: 'Digital Transformation Consulting', description: 'Guiding your business through a seamless digital transformation journey.' },
  { title: 'Microsoft 365 Migrations', description: 'Smooth transitions to Microsoft 365 for enhanced collaboration.' },
  { title: 'AI Services', description: 'Integrate AI solutions to drive innovation and decision-making.' },
];

const ServicesSection = () => {
  return (
    <Section>
      <SectionTitle>Our Services</SectionTitle>
      <CardsContainer>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </CardsContainer>
    </Section>
  );
};

export default ServicesSection;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f9;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1e1e2f;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;
