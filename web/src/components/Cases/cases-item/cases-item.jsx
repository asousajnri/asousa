import React, { useState } from 'react';

import MyIcons from '../../icons';

import {
  StyledCasesItem,
  StyledOverlay,
} from './cases-item-styles';

const CasesItem = ({ imageUrl, name, background }) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledCasesItem>
      <img src={imageUrl} alt={name} />
      <StyledOverlay background={background}>
        <h2>{name}</h2>
        <span>
          <MyIcons.Select width="2.5rem" fill="#FFFFFF" />
          Clique-me!
        </span>
      </StyledOverlay>
    </StyledCasesItem>
  );
};

export default CasesItem;
