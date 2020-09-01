import React from 'react';

import CasesItem from './cases-item';

import { StyledCases } from './cases-styles';

const Cases: React.FC = () => (
  <StyledCases>
    <CasesItem
      background="primary"
      imageUrl="https://picsum.photos/id/200/600/600"
      name="Teste"
    />
    <CasesItem
      background="primary"
      imageUrl="https://picsum.photos/id/201/600/600"
      name="Teste"
    />
    <CasesItem
      background="primary"
      imageUrl="https://picsum.photos/id/202/600/600"
      name="Teste"
    />
    <CasesItem
      background="primary"
      imageUrl="https://picsum.photos/id/203/600/600"
      name="Teste"
    />
    <CasesItem
      background="primary"
      imageUrl="https://picsum.photos/id/204/600/600"
      name="Teste"
    />
  </StyledCases>
);

export default Cases;
