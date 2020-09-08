import React from 'react';

import { Section } from '../../containers';

import Profile from './profile';
import Cases from './cases';
import Skills from './skills';
import Career from './career';

const Home: React.FC = () => (
  <>
    <Profile />
    <Cases />
    <Skills />
    <Career />
  </>
);

export default Home;
