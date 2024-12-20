import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 20px 20px;
  background: #f9f9f9;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const SkillsList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SkillItem = styled.div`
  margin-bottom: 20px;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
  text-align: left;
`;

const ProgressBar = styled.div`
  background: #eee;
  border-radius: 5px;
  height: 10px;
`;

const Progress = styled.div`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  height: 100%;
  width: ${({ level }) => level}%;
`;

const Skills = () => {
  const skills = [
    {name:"React", level: 90 },
    {name:"JavaScript", level: 85 },
    { name
        
        : "HTML & CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "SQL", level: 88 },
  ];

  return (
    <SkillsSection>
      <Title>My Skills</Title>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill.name}</SkillName>
            <ProgressBar>
              <Progress level={skill.level} />
            </ProgressBar>
          </SkillItem>
        ))}
      </SkillsList>
    </SkillsSection>
  );
};

export default Skills;
