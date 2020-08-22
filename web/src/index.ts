import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/styles/themes/default';

import StyledGlobal from './assets/styles/global';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
