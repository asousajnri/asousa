import React from 'react';

import { uniqueId } from 'lodash';

import LinkItem from './Item';
import { Container } from './styles';

const LinkItems = () => {
  const linksData = ['Páginas', 'Post'];

  return (
    <Container>
      {linksData.map(link => (
        <LinkItem key={uniqueId()} nameLink={link} />
      ))}
    </Container>
  );
};

export default LinkItems;
