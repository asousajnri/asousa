import React from 'react';

import { uniqueId } from 'lodash';

import * as LayoutIcons from '../../../../components/LayoutIcons';
import Item from './Item';
import { Container } from './styles';

const Menu = ({ dataMenu }) => (
  <Container>
    {dataMenu.map(item => (
      <Item
        key={uniqueId()}
        name={item.name}
        iconLayout={LayoutIcons[item.icon]}
        url={item.url}
      />
    ))}
  </Container>
);

export default Menu;
