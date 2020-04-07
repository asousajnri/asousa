import React from 'react';

import Footer from '../../components/Footer';
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
      <Footer />
    </MainContainer>
  </>
);

export default Main;
