import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(145deg, #e3e3e3, #999999); /* Subtle gradient for background */
  color: black;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-top: 50px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #de3163;
  font-family: 'Verdana', sans-serif;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const SkillImage = styled.img`
  width: 160px;
  height: 100px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Slight zoom effect */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  }

  @media (max-width: 768px) {
    width: 140px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`;

const Skills = () => (
  <Section id="achievements">
    <Title>Skills</Title>
    <ImageGrid>
      <SkillImage src="https://i.pinimg.com/564x/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg" alt="Python" />
      <SkillImage src="https://pbs.twimg.com/media/FNBFUx1WQAc3qzA?format=jpg&name=900x900" alt="SQL" />
      <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvlNaOatKBueSDGX1hmXJ2UuDVhspkWAvGg&usqp=CAU" alt="HTML, CSS, JS" />
      <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaUkuzCh4-rsmmJYvPg-XyAKmVqjaY8pRmQsqfN4UFOyzVPEWT1UfiEZNWkWcfwYn60M&usqp=CAU" alt="Power BI" />
      <SkillImage src="https://media.licdn.com/dms/image/v2/D4D12AQGRHI-Lb_sWeQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684936949564?e=2147483647&v=beta&t=UruhCVgehVG_v3AaGXWUMdO0n2jOsQx1krA5WYk3vKg" alt="C#" />
    </ImageGrid>
  </Section>
);

export default Skills;
