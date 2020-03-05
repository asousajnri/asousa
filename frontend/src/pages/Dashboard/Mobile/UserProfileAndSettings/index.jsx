import React from 'react';

import { WrapperUserAvatar, UserAvatar } from './styles';

import pathPhoto from '../../../../assets/images/photo.jpg';

import MenuItems from '../MenuItems';
import CloseMenuAction from '../CloseMenuAction';
import WrapperMenus from '../WrapperMenus';

const UserProfileAndSettings = () => {
  const linksData = [
    { name: 'Profile', icon: 'UserStrong' },
    { name: 'Settings', icon: 'Gear' },
  ];
  return (
    <WrapperMenus>
      <CloseMenuAction />
      <WrapperUserAvatar>
        <UserAvatar src={pathPhoto} />
        <h2>
          Antônio Sousa
          <small>Administrador</small>
        </h2>
      </WrapperUserAvatar>
      <MenuItems data={linksData} />
    </WrapperMenus>
  );
};

export default UserProfileAndSettings;
