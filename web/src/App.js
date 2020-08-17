import React from 'react';

import { Profile, Section, Cases } from './components';

const App = () => (
  <>
    <Profile />
    <Section color="primary" title="Cases">
      <Cases />
    </Section>
  </>
);

export default App;
