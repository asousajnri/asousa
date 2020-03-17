import React from 'react';

import ContactUs from '../../components/ContactUs';
import MainContainer from '../../components/MainContainer';
import AboutMe from './AboutMe';
import ExperienceAndEducation from './ExperienceAndEducation';
import Skills from './Skills';
import Works from './Works';

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
