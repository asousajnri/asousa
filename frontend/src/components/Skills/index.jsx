import React from "react";

import { SkillContainer } from "./styles";

// COMPONENTS
import BlockTitleSection from "../BlockTitleSection";

// COMPONENTS THIS
import Slide from "./Slide";

const Skills = () => {
  return (
    <SkillContainer>
      <BlockTitleSection titleText="Skills" blockColor="secundary" />
      <Slide />
    </SkillContainer>
  );
};

export default Skills;
