import React, { useState } from 'react';

import MyIcons from '../../icons';

import {
  StyledCasesItem,
  StyledOverlay,
  ClickMe,
} from './cases-item-styles';

const CasesItem = ({ imageUrl, name, background }) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledCasesItem>
      <img src={imageUrl} alt={name} />
      <StyledOverlay background={background}>
        <h2>{name}</h2>
        <ClickMe>
          <MyIcons.Select width="2.5rem" fill="#FFFFFF" />
          <span>Clique-me!</span>
        </ClickMe>
      </StyledOverlay>
    </StyledCasesItem>
  );
};

export default CasesItem;
