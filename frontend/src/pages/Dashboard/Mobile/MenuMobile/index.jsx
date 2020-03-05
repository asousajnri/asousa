import React from 'react';

import * as LayoutIcons from '../../../../components/LayoutIcons';
import LinkItems from './LinkItems';
import { Container, WrapperIcons, MenuCloseAction } from './styles';

const MenuMobile = () => (
  <Container>
    <MenuCloseAction>
      <WrapperIcons className="MenuClose">
        <LayoutIcons.DoubleChevronDown fill="#000" />
      </WrapperIcons>
    </MenuCloseAction>
    <LinkItems />
  </Container>
);

export default MenuMobile;
