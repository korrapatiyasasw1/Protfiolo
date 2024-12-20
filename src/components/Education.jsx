import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(145deg, #de3163, #9b1b37); /* Gradient background */
  color: white;
  border-radius: 10px;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Title = styled.h2`
  font-family: 'Verdana', sans-serif;
  color: #fff;
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 30px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Table = styled.table`
  margin: 20px auto;
  width: 90%;
  border-collapse: collapse;
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Th = styled.th`
  background-color: #454545;
  color: #ffbf00;
  padding: 12px;
  border: 1px solid #fff;
  font-size: 1.1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Td = styled.td`
  text-align: center;
  padding: 12px;
  border: 1px solid #444;
  color: #ddd;
  font-size: 1.1rem;

  &:hover {
    background-color: #444;
    transform: translateY(-3px);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Education = () => (
  <Section id="education">
    <Title>Education</Title>
    <Table>
      <thead>
        <tr>
          <Th>Education</Th>
          <Th>Institute</Th>
          <Th>Year of Passing</Th>
          <Th>GPA</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Bachelor's Degree</Td>
          <Td>PVP Siddharatha College</Td>
          <Td>2024</Td>
          <Td>9.8</Td>
        </tr>
        <tr>
          <Td>Intermediate</Td>
          <Td>Sri Chaitanya Junior College</Td>
          <Td>2020</Td>
          <Td>9.12</Td>
        </tr>
        <tr>
          <Td>Secondary Education</Td>
          <Td>Sri Chaitanya E.M High School</Td>
          <Td>2018</Td>
          <Td>9.8</Td>
        </tr>
      </tbody>
    </Table>
  </Section>
);

export default Education;
