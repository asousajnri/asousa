import React from 'react';

import * as LayoutIcons from '../../../../../components/LayoutIcons';
import { colorsDashboard } from '../../../../../styles/Theme/mainTheme';
import { Container, UserNotification } from './styles';

const UserAction = () => (
  <Container>
    <LayoutIcons.UserStrong fill={colorsDashboard.secundary} />
    <UserNotification>5</UserNotification>
  </Container>
);

export default UserAction;
