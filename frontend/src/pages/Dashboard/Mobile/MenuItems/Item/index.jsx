import React from 'react';

import { Container, WrapperIcon } from './styles';

import { Link } from 'react-router-dom';

const Item = ({ name, layoutIcon: LayoutIcons }) => {
  return (
    <Container>
      <Link to="/">
        <WrapperIcon>
          <LayoutIcons fill="#000" />
        </WrapperIcon>
        {name}
      </Link>
    </Container>
  );
};

export default Item;
