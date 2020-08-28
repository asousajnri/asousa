import React from 'react';

import { StyledBlockTitle } from './title-styles';

interface Props {
  color: string;
}

const Title: React.FC<Props> = ({ children, color }) => (
  <StyledBlockTitle color={color}>
    {children}
  </StyledBlockTitle>
);

export default Title;
