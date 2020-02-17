import React from "react";

// STYLED
import { ThemeProvider } from "styled-components";

//
import GlobalStyle from "./styles/global";
import pinkAndGreen from "./styles/Theme/pinkAndGreen";

// COMPONENTS
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <ThemeProvider theme={pinkAndGreen}>
      <GlobalStyle />
      <MainContainer>
        <h1>Antônio Sousa</h1>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
