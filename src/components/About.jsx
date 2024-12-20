import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 117%;
  padding: 40px 20px;
  background-color: #999999;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  color: #de3163;
  font-family: 'Verdana';
`;

const Content = styled.p`
  font-family: 'Verdana';
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => (
  <Section id="about">
    <Title>About Me</Title>
    <Content>
      I'm Yasaswini Korrapati, currently working  in Trainee Role at Neo Technology. <br /><br />
      I specialize Python, Power BI, C#, and SQL, and I also have experience in web development. This website is one of my React JS project, built using HTML, CSS, JavaScript, and React.
    </Content>
  </Section>
);

export default About;
