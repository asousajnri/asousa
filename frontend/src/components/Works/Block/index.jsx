import React from "react";

import { BlockContainer, OverlayHover } from "./styles";

const Block = ({ name, enterprise, pathImg }) => {
  return (
    <BlockContainer>
      <img src={pathImg} alt="Image Placeholder" />
      <OverlayHover>
        <h3>{name}</h3>
        <span>{enterprise}</span>
      </OverlayHover>
    </BlockContainer>
  );
};

export default Block;
