import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';

import styled from 'styled-components';

const Footer = styled.div`
  width: 120%;
  background-color: #999999;
  text-align: center;
  padding: 20px 0;
  color: white;
`;

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project /> 
      <Contact />
      <Footer>© Copyright 2022 by Yasaswini. All rights reserved.</Footer>
    </>
  );
};

export default App;
