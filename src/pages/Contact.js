// src/pages/Contact.js

import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <ContactContainer>
      <PageTitle>Contact Us</PageTitle>
      <ContactDetails>
        <p>Email: info@infiniatech.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </ContactDetails>
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
        {submitted && <SuccessMessage>Thank you for reaching out! We will contact you soon.</SuccessMessage>}
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f4f4f9;
  color: #1e1e2f;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1e1e2f;
`;

const ContactDetails = styled.div`
  font-size: 1.1rem;
  color: #666666;
  margin-bottom: 2rem;
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
