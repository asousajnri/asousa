import React from "react";

// COMPONENTS
import MainContainer from "../../components/MainContainer";

import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Works from "../../components/Works";
import ExperienceAndEducation from "../../components/ExperienceAndEducation";
import ContactUs from "../../components/ContactUs";

const Main = () => {
  return (
    <MainContainer>
      <AboutMe />
      <Skills />
      <Works />
      <ExperienceAndEducation />
      <ContactUs />
    </MainContainer>
  );
};

export default Main;
