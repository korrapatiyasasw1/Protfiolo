import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(145deg, #5dade2, #3498db); /* Gradient background */
  text-align: center;
  color: white;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 20px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h2`
  font-family: 'Times New Roman', serif;
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ResumeLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  background-color: #f39c12;
  padding: 12px 30px;
  border-radius: 30px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  display: inline-block;

  &:hover {
    background-color: #e67e22;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Home = () => (
  <Section id="home">
    <Title>Hello, I am Yasaswini</Title>
    <ResumeLink href="https://drive.google.com/file/d/164SwhTcpSUqkh51Gx6xsRjE3OSCXpSMM/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
      CLICK HERE TO VIEW MY RESUME
    </ResumeLink>
  </Section>
);

export default Home;
