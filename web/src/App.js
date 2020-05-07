import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/theme/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
