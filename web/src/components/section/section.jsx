import React from 'react';

import Title from '../title';

import { StyledSection } from './section-styles';

const Section = ({
  as,
  children,
  type,
  title,
  color,
  lastSection,
}) => {
  return (
    <StyledSection
      as={as}
      type={type}
      color={color}
      lastSection={lastSection}
    >
      <Title color={color}>{title}</Title>
      {children}
    </StyledSection>
  );
};

export default Section;
