import React from 'react';

import { StyledTextarea } from './textarea-styles';

const Textarea = ({ ref, label }) => {
  return (
    <StyledTextarea>
      <label>{label}</label>
      <textarea ref={ref}></textarea>
    </StyledTextarea>
  );
};

export default Textarea;
