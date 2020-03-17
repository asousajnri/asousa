import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyle from './styles/global';
import themes from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={themes.pinkgreen}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
