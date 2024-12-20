import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%; /* Adjusted width for responsive design */
  padding: 60px 20px;
  background: linear-gradient(145deg, #de3163, #9b1b37); /* Added gradient background */
  color: white;
  border-radius: 10px;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.1);
  margin: 20px 0;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Title = styled.h2`
  text-align: center;
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

const Content = styled.p`
  font-family: 'Verdana', sans-serif;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  text-align: center;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const About = () => (
  <Section id="about">
    <Title>About Me</Title>
    <Content>
      I'm Yasaswini Korrapati, currently working in a Trainee Role at Neo Technology. <br /><br />
      I specialize in Python, Power BI, C#, and SQL, and I also have experience in web development. This website is one of my React JS projects, built using HTML, CSS, JavaScript, and React.
    </Content>
  </Section>
);

export default About;
