import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
width:110%;
  padding: 40px;
  background-color: white;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  color: #de3163;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #f39c12;
`;

const CardContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #dcdcdc;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <CardsContainer>
        <Card>
          <CardTitle>Age Calculator</CardTitle>
          <CardContent>The script calculates a person's age by subtracting their birth year from the current year, obtained dynamically using JavaScript's Date object.
            It returns the calculated age, providing an efficient and real-time solution for age determination.</CardContent>
        </Card>
        <Card>
          <CardTitle>Talent Tract</CardTitle>
          <CardContent>A skill development project using React focuses on building an interactive platform where users can explore, track, and enhance their skills through modules, progress tracking, and visual dashboards.</CardContent>
        </Card>
        <Card>
          <CardTitle>English Dictionary</CardTitle>
          <CardContent>
          An English dictionary application built with JavaScript allows users to search for word meanings, synonyms, and antonyms. It provides an interactive and efficient way to explore the richness of the English language.
          </CardContent>
        </Card>
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
