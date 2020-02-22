import React from "react";

import { Container } from "./styles";

const BlockTitleSection = ({ titleText, blockColor, bgGradiente }) => {
  return (
    <Container blockColor={blockColor} bgGradiente={bgGradiente}>
      <h2>{titleText}</h2>
    </Container>
  );
};

export default BlockTitleSection;
