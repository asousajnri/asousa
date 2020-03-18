import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyle from './styles/global';
import pinkgreen from './styles/theme/pinkgreen';

function App() {
  return (
    <ThemeProvider theme={pinkgreen}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
