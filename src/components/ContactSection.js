// src/components/ContactSection.js

import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      // Reset form (optional)
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Section>
      <SectionTitle>Contact Us</SectionTitle>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
        {submitted && <SuccessMessage>Thank you for reaching out! We will Contact you soon.</SuccessMessage>}
      </ContactForm>
    </Section>
  );
};

export default ContactSection;

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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 2rem;
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
`;

const SuccessMessage = styled.p`
  margin-top: 1rem;
  color: #28a745;
  font-weight: bold;
`;
