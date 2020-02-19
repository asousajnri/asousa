import React from "react";

import { BlockContainer, OverlayHover } from "./styles";

const Block = ({ pathImg }) => {
  return (
    <BlockContainer>
      <img src={pathImg} alt="Image Placeholder" />
      <OverlayHover>
        <h3>Name Projeto</h3>
        <span>Enterprise</span>
      </OverlayHover>
    </BlockContainer>
  );
};

export default Block;
