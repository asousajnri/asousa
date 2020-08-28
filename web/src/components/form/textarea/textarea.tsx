import React from 'react';

import { StyledTextarea } from './textarea-styles';

interface Props {
    ref: React.MutableRefObject<null>;
    labelText: string;
};

const Textarea: React.FC<Props> = ({ ref, labelText }) => (
  <StyledTextarea>
    <label>{labelText}</label>
    <textarea ref={ref} />
  </StyledTextarea>
);

export default Textarea;
