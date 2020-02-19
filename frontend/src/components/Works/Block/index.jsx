import React from "react";

import { BlockContainer, OverlayHover } from "./styles";

const Block = () => {
  return (
    <BlockContainer>
      <img src="http://via.placeholder.com/640x640" alt="Image Placeholder" />
      <OverlayHover>
        <h3>Name Projeto</h3>
        <span>Enterprise</span>
      </OverlayHover>
    </BlockContainer>
  );
};

export default Block;
