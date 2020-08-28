import React from 'react';

import { MyIcons } from '../../../../components';

import {
  StyledCasesItem,
  StyledOverlay,
  ClickMe,
} from './cases-item-styles';

interface Props {
  imageUrl: string;
  name: string;
  background: string;
}

const CasesItem: React.FC<Props> = ({
  imageUrl,
  name,
  background,
}) => (
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

export default CasesItem;
