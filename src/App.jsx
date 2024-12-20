import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';

import styled from 'styled-components';

// Footer Styling
const Footer = styled.div`
  width: 100%;
  background-color: #333;
  text-align: center;
  padding: 30px 20px;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  font-family: 'Verdana', sans-serif;
  margin-top: 50px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 20px 10px;
  }
`;

const AppContainer = styled.div`
  font-family: 'Verdana', sans-serif;
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer>© Copyright 2022 by Yasaswini. All rights reserved.</Footer>
    </AppContainer>
  );
};

export default App;
