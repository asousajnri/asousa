import React from "react";

import { Container } from "./styles";

const BlockTitleSection = ({ titleText, blockColor }) => {
  return (
    <Container blockColor={blockColor}>
      <h2>{titleText}</h2>
    </Container>
  );
};

export default BlockTitleSection;
