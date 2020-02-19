import React from "react";

// COMPONENTS
import MainContainer from "../../components/MainContainer";

import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Works from "../../components/Works";

const Main = () => {
  return (
    <MainContainer>
      <AboutMe />
      <Skills />
      <Works />
    </MainContainer>
  );
};

export default Main;
