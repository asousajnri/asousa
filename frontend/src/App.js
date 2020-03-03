import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Login from './pages/Login';
import Main from './pages/Main';
import GlobalStyle from './styles/global';
import pinkAndGreen from './styles/Theme/pinkAndGreen';

function App() {
  return (
    <ThemeProvider theme={pinkAndGreen}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/admin">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
