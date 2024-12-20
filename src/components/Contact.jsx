import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%; /* Changed width to 100% for better responsiveness */
  padding: 60px 20px;
  background: linear-gradient(145deg, #de3163, #9b1b37); /* Gradient background */
  color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  
  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Title = styled.h2`
  color: white;
  font-family: 'Verdana', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactText = styled.p`
  font-family: 'Verdana', sans-serif;
  font-size: 1.2rem;
  color: white;
  line-height: 1.8;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #f39c12; /* Yellowish color for the link */
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px 20px;
  background-color: #1e1e1e;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f39c12;
    color: #1e1e1e;
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

const Contact = () => (
  <Section id="contact">
    <Title>Contact Me</Title>
    <ContactText>Email: korrapatiyasaswini@gmail.com</ContactText>
    <ContactLink href="mailto:korrapatiyasaswini@gmail.com">Send an Email</ContactLink>
  </Section>
);

export default Contact;
