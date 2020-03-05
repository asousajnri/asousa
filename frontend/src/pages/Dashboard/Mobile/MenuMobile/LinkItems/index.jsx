import React from 'react';

import { uniqueId } from 'lodash';

import * as LayoutIcons from '../../../../../components/LayoutIcons';

import LinkItem from './Item';
import { Container } from './styles';

const LinkItems = () => {
  const linksData = [
    { name: 'Páginas', icon: 'Pages' },
    { name: 'Posts', icon: 'Posts' },
  ];

  return (
    <Container>
      {linksData.map(link => (
        <LinkItem
          key={uniqueId()}
          name={link.name}
          layoutIcon={LayoutIcons[link.icon]}
        />
      ))}
    </Container>
  );
};

export default LinkItems;
