import React from 'react';

import {
  Profile,
  Section,
  Cases,
  Skills,
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
  </>
);

export default App;
