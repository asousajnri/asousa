import React from 'react';

import { MyIcons } from '../../../../components';

import {
  StyledCasesItem,
  StyledOverlay,
  ClickMe,
  StyledTecs,
} from './cases-item-styles';

interface Props {
  background: string;
  id: string;
  title: string;
  link: string;
  coverImage: string;
  description: string;
  local: string;
  tecs: string;
}

const CasesItem: React.FC<Props> = ({
  coverImage, title, background, id, link, local, tecs,
}) => (
  <StyledCasesItem>
    <img src={coverImage} alt={title} />
    <StyledOverlay href={link} target="_blank" background={background}>
      <h2>{title}</h2>
      <small>{local}</small>

      <StyledTecs>
        {tecs.split(',').map((tec) => (<li key={Date.now()}>{tec.trim()}</li>))}
      </StyledTecs>

      <ClickMe>
        <MyIcons.Select width="2.5rem" fill="#FFFFFF" />
        <span>Clique-me!</span>
      </ClickMe>
    </StyledOverlay>
  </StyledCasesItem>
);

export default CasesItem;
