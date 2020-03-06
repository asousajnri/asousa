import React from 'react';

import pathPhoto from '../../../assets/images/photo.jpg';
import Menu from './Menu';
import { Container, UserSettings, Avatar, PopupNotification } from './styles';

const GlobalAside = () => {
  const dataMenu = [
    { name: 'Páginas', icon: 'Pages' },
    { name: 'Posts', icon: 'Posts' },
  ];

  return (
    <Container>
      <UserSettings>
        <Avatar>
          <img src={pathPhoto} alt="" />
          <PopupNotification>5</PopupNotification>
        </Avatar>
      </UserSettings>
      <Menu dataMenu={dataMenu} />
    </Container>
  );
};

export default GlobalAside;
