import React from 'react';

import { Container, IconWrapper } from './styles';

const SectionTitle = ({
  targetSection,
  titleText,
  blockColor,
  bgGradiente,
  IconTitle,
}) => (
  <Container blockColor={blockColor} bgGradiente={bgGradiente}>
    <h2>{titleText}</h2>

    {IconTitle && (
      <IconWrapper targetSection={targetSection}>
        <IconTitle fill="#fff" />
      </IconWrapper>
    )}
  </Container>
);

export default SectionTitle;
