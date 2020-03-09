import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HelmetTitleAndFavicon from '../../components/HelmetTitleAndFavicon';
import useIsMobile from '../../Hooks/useIsMobile';
import ContentAdminPages from './ContentAdministrations/Pages';
import GlobalAside from './GlobalAside';
import HeaderMobile from './Mobile/HeaderMobile';
import MenuMobile from './Mobile/MenuMobile';
import UserProfileAndSettings from './Mobile/UserProfileAndSettings';
import { DashBoardContainer, MainContent } from './styles';

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

        <MainContent>
          <Route path="/dashboard/paginas">
            <ContentAdminPages.ListPages />
          </Route>
        </MainContent>
      </DashBoardContainer>
    </>
  );
};

export default Dashboard;
