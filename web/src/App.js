import React from 'react';

import {
  Profile,
  Section,
  Cases,
  Skills,
  Career,
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
  </>
);

export default App;
