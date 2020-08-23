import React from 'react';

import { Section } from '../../containers';

import Profile from './profile';
import Cases from './cases';

const Home: React.FC = () => (
  <>
    <Profile />
    <Section title="Cases" color="primary">
      <Cases />
    </Section>
  </>
);

export default Home;
