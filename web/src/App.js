import React from 'react';

import {
  Profile,
  Section,
  Cases,
  Skills,
  Career,
  Message,
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
    <Section color="secondary" title="Mensagem" lastSection>
      <Message />
    </Section>
  </>
);

export default App;
