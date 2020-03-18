import React, { useState } from 'react';

import { ItemContainer, Image, OverlayHover } from './styles';

const Item = ({ name, enterprise, pathImg }) => {
  const [hoverOverlay, setHoverOverlay] = useState(false);

  return (
    <ItemContainer onClick={() => setHoverOverlay(!hoverOverlay)}>
      <Image
        src={`http://localhost:3333/files/${pathImg}`}
        alt="Image Placeholder"
      />

      <OverlayHover className={`hovered-${hoverOverlay}`}>
        <h3>{name}</h3>
        <span>{enterprise}</span>
      </OverlayHover>
    </ItemContainer>
  );
};

export default Item;
