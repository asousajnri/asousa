import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

import StyledGlobal from './assets/styles/global';
import theme from './assets/styles/themes/default';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyledGlobal />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
