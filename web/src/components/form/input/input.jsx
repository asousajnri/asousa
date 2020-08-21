import React from 'react';

import { StyledInput } from './input-styles';

const Input = ({ type, label, ref }) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input type={type} ref={ref} />
    </StyledInput>
  );
};

export default Input;
