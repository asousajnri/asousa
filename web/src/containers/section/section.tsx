import React from 'react';

import { Title } from '../../components';

import { StyledSection } from './section-styles';

interface Props {
  type?: string;
  title: string;
  color: string;
  lastSection?: boolean;
}

const Section: React.FC<Props> = ({
  children,
  type,
  title,
  color,
  lastSection,
}) => (
  <StyledSection lastSection={lastSection} type={type}>
    <Title color={color}>{title}</Title>
    {children}
  </StyledSection>
);

export default Section;
