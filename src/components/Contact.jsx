import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 115%;
  padding: 40px 20px;
  background-color: white;
  text-align: center;
`;

const Title = styled.h2`
  color: #de3163;
  font-family: 'Verdana';
`;

const ContactText = styled.p`
  font-family: 'Verdana';
  color: black;
`;

const Contact = () => (
  <Section id="contact">
    <Title>Contact Me</Title>
    <ContactText>Email: korrapatiyasaswini@gmail.com</ContactText>
  </Section>
);

export default Contact;
