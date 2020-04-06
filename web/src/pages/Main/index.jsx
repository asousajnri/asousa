import React from 'react';

import ContactUs from '../../components/ContactUs';
import MainContainer from '../../components/MainContainer';
import AboutMe from './AboutMe';
import Career from './Career';
import Works from './Works';
import Skills from './Skills';
import Helmet from '../../components/Helmet';

const Main = () => (
  <>
    <Helmet pageTitle="Antônio Sousa" />
    <MainContainer>
      <AboutMe />
      <Skills />
      <Works />
      <Career />
      <ContactUs />
    </MainContainer>
  </>
);

export default Main;
