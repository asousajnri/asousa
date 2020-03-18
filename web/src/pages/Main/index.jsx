import React from 'react';

import ContactUs from '../../components/ContactUs';
import MainContainer from '../../components/MainContainer';
import AboutMe from './AboutMe';
import ExperienceAndEducation from './ExperienceAndEducation';
import Skills from './Skills';
import Works from './Works';
import HelmetHead from '../../components/HelmetHead';

const Main = () => (
  <>
    <HelmetHead pageTitle="Antônio Sousa" />
    <MainContainer>
      <AboutMe />
      <Skills />
      <Works />
      <ExperienceAndEducation />
      <ContactUs />
    </MainContainer>
  </>
);

export default Main;
