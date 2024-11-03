// src/pages/Services.js

import React from 'react';
import styled from 'styled-components';
import { FaDatabase, FaCloud, FaCogs, FaChartLine, FaRobot, FaSyncAlt, FaMicrosoft } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'Unlock insights with advanced data analytics and business intelligence solutions.',
    icon: <FaChartLine />,
  },
  {
    title: 'Software Development & Automation',
    description: 'Custom software solutions and automation to enhance your operations.',
    icon: <FaCogs />,
  },
  {
    title: 'Cloud Services & Migration',
    description: 'Seamless cloud migration and management for scalability and performance.',
    icon: <FaCloud />,
  },
  {
    title: 'Data Architecture & Management',
    description: 'Organize and optimize your data with efficient data architecture solutions.',
    icon: <FaDatabase />,
  },
  {
    title: 'DevOps & Automation',
    description: 'Accelerate development cycles with efficient DevOps practices.',
    icon: <FaSyncAlt />,
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Guiding your business through a seamless digital transformation journey.',
    icon: <FaRobot />,
  },
  {
    title: 'Microsoft 365 Migrations',
    description: 'Smooth transitions to Microsoft 365 for enhanced collaboration.',
    icon: <FaMicrosoft />,
  },
  {
    title: 'AI Services',
    description: 'Integrate AI solutions to drive innovation and decision-making.',
    icon: <FaRobot />,
  },
];

const Services = () => {
  return (
    <ServicesContainer>
      <PageTitle>Our Services</PageTitle>
      <ServicesList>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <Icon>{service.icon}</Icon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesList>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f4f4f9;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1e1e2f;
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #0077b6;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e1e2f;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666666;
`;
