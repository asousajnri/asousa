import React from 'react';

import HelmetTitleAndFavicon from '../../components/HelmetTitleAndFavicon';
import useIsMobile from '../../Hooks/useIsMobile';
import GlobalAside from './GlobalAside';
import HeaderMobile from './Mobile/HeaderMobile';
import MenuMobile from './Mobile/MenuMobile';
import UserProfileAndSettings from './Mobile/UserProfileAndSettings';
import { DashBoardContainer } from './styles';

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <HelmetTitleAndFavicon pageTitle="Dashboard" />
      <DashBoardContainer>
        {isMobile && (
          <>
            <HeaderMobile />
            <MenuMobile />
            <UserProfileAndSettings />
          </>
        )}

        {!isMobile && <GlobalAside />}
      </DashBoardContainer>
    </>
  );
};

export default Dashboard;
