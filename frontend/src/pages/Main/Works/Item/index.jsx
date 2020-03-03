import React, { useState } from 'react';

import { ItemContainer, OverlayHover } from './styles';

const Item = ({ name, enterprise, pathImg }) => {
  const [hoverOverlay, setHoverOverlay] = useState(false);

  return (
    <ItemContainer onClick={() => setHoverOverlay(!hoverOverlay)}>
      <img src={pathImg} alt="Image Placeholder" />
      <OverlayHover className={`hovered-${hoverOverlay}`}>
        <h3>{name}</h3>
        <span>{enterprise}</span>
      </OverlayHover>
    </ItemContainer>
  );
};

export default Item;
