import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 110%;
  padding: 20px;
  background-color: black;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Times New Roman';
  color: #5dade2;
`;

const ResumeLink = styled.a`
  color:blue;
  text-decoration: underline;
  font-size: 18px;
`;

const Home = () => (
  <Section id="home">
    <Title>Hello, I am Yasaswini</Title>
    <ResumeLink href="https://drive.google.com/file/d/164SwhTcpSUqkh51Gx6xsRjE3OSCXpSMM/view?usp=drivesdk ">
      CLICK HERE TO VIEW MY RESUME
    </ResumeLink>
  </Section>
);

export default Home;
