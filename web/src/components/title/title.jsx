import React from 'react';

import { StyledBlockTitle } from './title-styles';

const Title = ({ children, color }) => {
  return (
    <StyledBlockTitle color={color}>
      {children}
    </StyledBlockTitle>
  );
};

export default Title;
