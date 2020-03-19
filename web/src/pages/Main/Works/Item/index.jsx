import React, { useState } from 'react';

import { ItemContainer, Image, OverlayHover } from './styles';

const Item = ({ name, enterprise, pathImg, projectUrl }) => {
  const [hoverOverlay, setHoverOverlay] = useState(false);

  return (
    <a href={projectUrl} target="_blank">
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
    </a>
  );
};

export default Item;
