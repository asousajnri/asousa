import React from 'react';

import * as LayoutIcons from '../../../../components/LayoutIcons';
import { colorsDashboard } from '../../../../styles/Theme/mainTheme';
import MenuMobileAction from './MenuMobileAction';
import {
  HeaderMobileContainer,
  TitlePage,
  WrapperActions,
  WrapperIcon,
} from './styles';
import UserAction from './UserAction';

const HeaderMobile = () => (
  <HeaderMobileContainer>
    <TitlePage>
      <WrapperIcon>
        <LayoutIcons.Dashboard fill={colorsDashboard.icon} />
      </WrapperIcon>
      Dashboard
    </TitlePage>
    <WrapperActions>
      <MenuMobileAction />
      <UserAction />
    </WrapperActions>
  </HeaderMobileContainer>
);

export default HeaderMobile;
