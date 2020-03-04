import React from 'react';

import HeaderMobile from './Mobile/HeaderMobile';
import MenuMobile from './Mobile/MenuMobile';
import { DashBoardContainer } from './styles';

const Dashboard = () => (
  <DashBoardContainer>
    <HeaderMobile />
    <MenuMobile />
  </DashBoardContainer>
);

export default Dashboard;
