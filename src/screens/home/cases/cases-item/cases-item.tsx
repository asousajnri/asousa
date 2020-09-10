import React from 'react';

import { MyIcons } from '../../../../components';

import { StyledCasesItem, StyledOverlay, ClickMe } from './cases-item-styles';

interface Props {
  background: string;
  id: string;
  title: string;
  link: string;
  coverImage: string;
  description: string;
  local: string;
}

const CasesItem: React.FC<Props> = ({
  coverImage, title, background, id, link,
}) => (
  <StyledCasesItem>
    <img src={coverImage} alt={title} />
    <StyledOverlay href={link} target="_blank" background={background}>
      <h2>{title}</h2>
      <ClickMe>
        <MyIcons.Select width="2.5rem" fill="#FFFFFF" />
        <span>Clique-me!</span>
      </ClickMe>
    </StyledOverlay>
  </StyledCasesItem>
);

export default CasesItem;
