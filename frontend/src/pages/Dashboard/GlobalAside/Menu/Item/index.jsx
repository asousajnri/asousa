import React from 'react';

import { colorsDashboard } from '../../../../../styles/Theme/mainTheme';
import { Container, WrapperIcon } from './styles';

const Item = ({ name, iconLayout: IconLayout }) => (
  <Container>
    <a href="/" className="is-active">
      <WrapperIcon>
        <IconLayout fill={colorsDashboard.icon} />
      </WrapperIcon>

      <h2>{name}</h2>

      <span className="bolinha" />
    </a>
  </Container>
);

export default Item;
