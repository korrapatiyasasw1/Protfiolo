import React from "react";
import styled from "styled-components";

// Styled Components
const EducationSection = styled.section`
  padding: 50px 20px;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const EducationList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const EducationItem = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Institution = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 5px;
`;

const Degree = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 5px 0;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #999;
  margin: 0;
`;

const Education = () => {
  const educationData = [
    {
      institution: "PVP SIDDHARATHA COLLEGE",
      degree: "Bachelor of Science in Computer Science",
      duration: "2020 - 2024",
    },
    {
      institution: "Sri Chatinaya college",
      degree: "High School Diploma",
      duration: "2018 - 2020",
    },
  ];

  return (
    <EducationSection>
      <Title>Education</Title>
      <EducationList>
        {educationData.map((edu, index) => (
          <EducationItem key={index}>
            <Institution>{edu.institution}</Institution>
            <Degree>{edu.degree}</Degree>
            <Duration>{edu.duration}</Duration>
          </EducationItem>
        ))}
      </EducationList>
    </EducationSection>
  );
};

export default Education;
