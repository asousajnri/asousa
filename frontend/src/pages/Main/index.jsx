import React from 'react';

import AboutMe from '../../components/ContactUs';
import MainContainer from '../../components/MainContainer';
import ExperienceAndEducation from './ExperienceAndEducation';
import Works from './Works';
import Skills from './Skills';

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
