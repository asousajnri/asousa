import React, { useState } from "react";

import { BlockContainer, OverlayHover } from "./styles";

const Block = ({ name, enterprise, pathImg }) => {
  const [hoverOverlay, setHoverOverlay] = useState(false);

  return (
    <BlockContainer
      onClick={() => setHoverOverlay(!hoverOverlay)}
    >
      <img src={pathImg} alt="Image Placeholder" />
      <OverlayHover className={`hovered-${hoverOverlay}`}>
        <h3>{name}</h3>
        <span>{enterprise}</span>
      </OverlayHover>
    </BlockContainer>
  );
};

export default Block;
