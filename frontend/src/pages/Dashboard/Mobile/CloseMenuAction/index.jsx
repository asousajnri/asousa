import React from 'react';

import { Container, WrapperIcons } from './styles';

import * as LayoutIcons from '../../../../components/LayoutIcons';

const CloseMenuAction = () => (
  <Container>
    <WrapperIcons className="MenuClose">
      <LayoutIcons.DoubleChevronDown fill="#000" />
    </WrapperIcons>
  </Container>
);

export default CloseMenuAction;
