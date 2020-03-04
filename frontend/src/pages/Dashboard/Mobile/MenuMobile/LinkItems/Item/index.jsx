import React from 'react';

import * as LayoutIcons from '../../../../../../components/LayoutIcons';
import { Container, WrapperIcon } from './styles';

const Item = ({ nameLink, pathLink }) => (
  <Container>
    <a href="/">
      <WrapperIcon>
        <LayoutIcons.Pages fill="#000" />
      </WrapperIcon>
      {nameLink}
    </a>
  </Container>
);

export default Item;
