import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 50px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.8;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const InfoItem = styled.li`
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 15px 20px;
  min-width: 150px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #333;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const About = () => (
  <AboutSection>
    <Title>About Me</Title>
    <Description>
      Hello! I'm John Doe, a passionate web developer with a knack for creating
      dynamic and responsive websites. I love turning ideas into reality using
      modern web technologies. Outside of coding, I enjoy exploring the outdoors,
      learning new skills, and connecting with like-minded professionals.
    </Description>
    <InfoList>
      <InfoItem>Enthusiastic Learner</InfoItem>
      <InfoItem>Full-Stack Developer</InfoItem>
      <InfoItem>Creative Thinker</InfoItem>
      <InfoItem> Love Traveling</InfoItem>
      <InfoItem>  Reader</InfoItem>
      <InfoItem> Coffee Enthusiast</InfoItem>
    </InfoList>
  </AboutSection>
);

export default About;

  