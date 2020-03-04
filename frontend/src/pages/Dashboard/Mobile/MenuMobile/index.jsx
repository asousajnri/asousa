import React from 'react';

import * as LayoutIcons from '../../../../components/LayoutIcons';
import LinkItems from './LinkItems';
import { Container, Title, WrapperIcons } from './styles';

const MenuMobile = () => (
  <Container>
    <Title>
      <WrapperIcons>
        <LayoutIcons.Menu fill="#000" />
      </WrapperIcons>
      Menu
    </Title>
    <LinkItems />
  </Container>
);

export default MenuMobile;
