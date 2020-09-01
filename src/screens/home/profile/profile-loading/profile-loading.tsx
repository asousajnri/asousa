import React from 'react';

import {
  StyleProfile,
  StyledInfos,
  StyledImageProfile,
} from './profile-loading-styles';

const ProfileLoading: React.FC = () => (
  <StyleProfile>
    <StyledImageProfile />
    <StyledInfos />
  </StyleProfile>
);

export default ProfileLoading;
