import React from 'react';

import * as LayoutIcons from '../../../../components/LayoutIcons';
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
        <LayoutIcons.Dashboard fill="#fff" />
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
