import React from 'react';

import * as LayoutIcons from '../../../../../components/LayoutIcons';
import { Container, UserNotification } from './styles';

const UserAction = () => (
  <Container>
    <LayoutIcons.UserStrong fill="#fff" />
    <UserNotification>5</UserNotification>
  </Container>
);

export default UserAction;
