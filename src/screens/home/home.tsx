import React from 'react';

import { Section } from '../../containers';

import Profile from './profile';
import Cases from './cases';
import Skills from './skills';
import Career from './career';

const Home: React.FC = () => (
  <>
    <Profile />
    <Section title="Cases" color="primary">
      <Cases />
    </Section>
    <Section title="Habilidades" color="secondary">
      <Skills />
    </Section>
    <Section title="Carreira" color="primary" lastSection>
      <Career />
    </Section>
  </>
);

export default Home;
