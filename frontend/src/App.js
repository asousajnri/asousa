import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Main from './pages/Main';
import GlobalStyle from './styles/global';
import dashboard from './styles/Theme/dashboard';
import pinkAndGreen from './styles/Theme/pinkAndGreen';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <GlobalStyle />
      <Router>
        <Switch>
            <ThemeProvider theme={pinkAndGreen}>
                <Route exact path="/">
                <Main />
                </Route>
                <Route exact path="/admin">
                {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
            </ThemeProvider>
            <ThemeProvider theme={dashboard}>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
            </ThemeProvider>
        </Switch>
      </Router>
  );
}

export default App;
