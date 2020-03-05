import React from 'react';

import HeaderMobile from './Mobile/HeaderMobile';
import MenuMobile from './Mobile/MenuMobile';
import { DashBoardContainer } from './styles';

import useIsMobile from '../../Hooks/useIsMobile';
import UserProfileAndSettings from './Mobile/UserProfileAndSettings';

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <DashBoardContainer>
      {isMobile && (
        <>
          <HeaderMobile />
          <MenuMobile />
          <UserProfileAndSettings />
        </>
      )}
    </DashBoardContainer>
  );
};

export default Dashboard;
