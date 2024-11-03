// src/components/ServiceCard.js

import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({ title, description }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default ServiceCard;

const Card = styled.div`
  padding: 1.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background-color: #ffffff;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #1e1e2f;
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.5;
`;
