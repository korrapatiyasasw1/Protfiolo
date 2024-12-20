import React from "react";
import styled from "styled-components";

// Styled Components
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  background: #f5f5f5;
  padding: 0 20px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #333;
  object-fit: cover;
`;

const NameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 20px;
`;

const Name = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.0rem;
  color: #666;
  margin-top: 10px;
`;

const Hero = () => (
  <HeroSection>
    <ImageWrapper>
      <ProfileImage src="https://via.placeholder.com/250" alt="Profile" />
    </ImageWrapper>
    <NameWrapper>
      <Name>Korrapati Yasaswini</Name>
      <SubTitle>Web Developer & Designer</SubTitle>
    </NameWrapper>
  </HeroSection>
);

export default Hero;
