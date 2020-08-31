import React from 'react';

import SocialListing from './social-listing';

import {
  StyledProfile,
  StyledImageProfile,
  StyledInfos,
  StyledOffice,
} from './profile-styles';

import pathProfileImage from '../../../assets/images/photo.jpg';

const Profile: React.FC = () => (
  <StyledProfile>
    <StyledImageProfile src={pathProfileImage} />
    <StyledInfos>
      <StyledOffice>
        <h1>Antônio Sousa</h1>
        <h2>Front End Developer Jr.</h2>
      </StyledOffice>

      <SocialListing />
    </StyledInfos>
  </StyledProfile>
);

export default Profile;
