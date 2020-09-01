import React from 'react';

import { StyledTextarea } from './textarea-styles';

interface Props {
  refFieldInput: React.MutableRefObject<null>;
  labelText: string;
};

const Textarea: React.FC<Props> = ({ refFieldInput, labelText }) => (
  <StyledTextarea>
    <label>{labelText}</label>
    <textarea ref={refFieldInput} />
  </StyledTextarea>
);

export default Textarea;
