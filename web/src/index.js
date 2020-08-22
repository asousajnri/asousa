import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/styles/themes/default';

import GlobalStyled from './assets/styles/global';
import App from './App';

<<<<<<< HEAD:web/src/index.ts
ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyled />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
>>>>>>> parent of f0654cf... Add base do Typescript:web/src/index.js
