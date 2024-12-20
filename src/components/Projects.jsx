import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(145deg, #f8f8f8, #e3e3e3); /* Subtle gradient background */
  color: black;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h1`
  font-size: 3.5rem;
  color: #de3163;
  margin-bottom: 40px;
  font-family: 'Arial', sans-serif;
  letter-spacing: 2px;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0 20px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 320px;
  padding: 25px;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  transform: scale(1);
  
  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 280px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 15px;
  color: #f39c12;
  font-family: 'Helvetica', sans-serif;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CardContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #dcdcdc;
  font-family: 'Verdana', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>My Projects</SectionTitle>
      <CardsContainer>
        <Card>
          <CardTitle>Age Calculator</CardTitle>
          <CardContent>
            The script calculates a person's age by subtracting their birth year from the current year, dynamically obtained using JavaScript's Date object. It returns the calculated age, providing an efficient and real-time solution for age determination.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Talent Track</CardTitle>
          <CardContent>
            A skill development project using React. It focuses on building an interactive platform where users can explore, track, and enhance their skills through modules, progress tracking, and visual dashboards.
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Britto-Product</CardTitle>
          <CardContent>
            The "Britto-Product" project is a visually engaging web design inspired by the colorful and bold art style of Romero Britto. Created using HTML and CSS, it showcases a dynamic product display with vibrant aesthetics and modern web design elements.
          </CardContent>
        </Card>
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
