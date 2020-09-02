import React from 'react';

import { MyIcons } from '../../../../components';

import { StyledCasesItem, StyledOverlay, ClickMe } from './cases-item-styles';
import Select from '../../../../components/my-icons/select';

interface Props {
  background: string;
  id: string;
  title: string;
  link: string;
  coverImage: string;
  description: string;
  category: string;
}

const CasesItem: React.FC<Props> = ({ coverImage, title, background, id }) => (
  <StyledCasesItem>
    <img src={coverImage} alt={title} />
    <StyledOverlay background={background}>
      <h2>{title}</h2>
      <ClickMe>
        <MyIcons.Select width="2.5rem" fill="#FFFFFF" />
        <span>Clique-me!</span>
      </ClickMe>
    </StyledOverlay>
  </StyledCasesItem>
);

export default CasesItem;
