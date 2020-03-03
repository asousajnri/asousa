import React from 'react';

import AboutMe from '../../components/AboutMe';
import ContactUs from '../../components/ContactUs';
import ExperienceAndEducation from '../../components/ExperienceAndEducation';
import MainContainer from '../../components/MainContainer';
import Skills from '../../components/Skills';
import Works from '../../components/Works';

const Main = () => (
  <MainContainer>
    <AboutMe />
    <Skills />
    <Works />
    <ExperienceAndEducation />
    <ContactUs />
  </MainContainer>
);

export default Main;
