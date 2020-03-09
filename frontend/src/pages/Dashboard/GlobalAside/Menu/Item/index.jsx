import React from 'react';
import { Link } from 'react-router-dom';

import { colorsDashboard } from '../../../../../styles/Theme/mainTheme';
import { Container, WrapperIcon } from './styles';

const Item = ({ name, iconLayout: IconLayout, url }) => (
  <Container>
    <Link to={`/dashboard/${url}`} className="is-active">
      <WrapperIcon>
        <IconLayout fill={colorsDashboard.icon} />
      </WrapperIcon>

      <h2>{name}</h2>

      <span className="bolinha" />
    </Link>
  </Container>
);

export default Item;
