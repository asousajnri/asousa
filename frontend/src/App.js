import React from "react";

// STYLED
import { ThemeProvider } from "styled-components";

//
import GlobalStyle from "./styles/global";
import pinkAndGreen from "./styles/Theme/pinkAndGreen";

// PAGES
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={pinkAndGreen}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
