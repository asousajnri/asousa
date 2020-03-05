import React from 'react';

import MenuItems from '../MenuItems';
import CloseMenuAction from '../CloseMenuAction';
// import { Container } from './styles';

import WrapperMenus from '../WrapperMenus';

const MenuMobile = () => {
  const linksData = [
    { name: 'Páginas', icon: 'Pages' },
    { name: 'Posts', icon: 'Posts' },
  ];

  return (
    <WrapperMenus>
      <CloseMenuAction />
      <MenuItems data={linksData} />
    </WrapperMenus>
  );
};

export default MenuMobile;
