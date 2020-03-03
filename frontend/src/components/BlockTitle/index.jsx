import React from 'react';

import { Container, IconWrapper } from './styles';

const BlockTitle = ({ titleText, blockColor, bgGradiente, IconTitle }) => (
  <Container blockColor={blockColor} bgGradiente={bgGradiente}>
    <h2>{titleText}</h2>

    {IconTitle && (
      <IconWrapper>
        <IconTitle fill="#fff" />
      </IconWrapper>
    )}
  </Container>
);

export default BlockTitle;
