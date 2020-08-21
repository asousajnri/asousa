import React from 'react';

import {
  Profile,
  Section,
  Cases,
  Skills,
  Career,
  Contact,
} from './components';

const App = () => (
  <>
    <Profile />
    <Section color="primary" title="Cases">
      <Cases />
    </Section>
    <Section color="secondary" title="Habilidades">
      <Skills />
    </Section>
    <Section color="primary" title="Carreira">
      <Career />
    </Section>
    <Section
      as="footer"
      color="secondary"
      title="Contate-me"
      lastSection
    >
      <Contact />
    </Section>
  </>
);

export default App;
