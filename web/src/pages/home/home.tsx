import React from 'react';

import { Section } from '../../containers';

import Profile from './profile';
import Cases from './cases';
import Skills from './skills';
import Career from './career';
import Contact from './contact';

const Home: React.FC = () => (
  <>
    <Profile />
    <Section title="Cases" color="primary">
      <Cases />
    </Section>
    <Section title="Habilidade" color="secondary">
      <Skills />
    </Section>
    <Section title="Carreira" color="primary">
      <Career />
    </Section>
    <Section title="Contate-me" color="secondary" lastSection>
      <Contact />
    </Section>
  </>
);

export default Home;
