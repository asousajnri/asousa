import React from 'react';

import HeaderMobile from './Mobile/HeaderMobile';
import MenuMobile from './Mobile/MenuMobile';
import { DashBoardContainer } from './styles';

import useIsMobile from '../../Hooks/useIsMobile';

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <DashBoardContainer>
      {isMobile && (
        <>
          <HeaderMobile />
          <MenuMobile />
        </>
      )}
    </DashBoardContainer>
  );
};

export default Dashboard;
