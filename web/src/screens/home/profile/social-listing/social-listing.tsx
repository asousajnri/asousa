import React from 'react';

import { MyIcons } from '../../../../components';

import SocialListingItem from './social-listing-item';

import { StyledSocialListing } from './social-listing-styles';

const SocialListing = () => (
  <StyledSocialListing>
    <SocialListingItem
      url=""
      ComponentIcon={MyIcons.Github}
    />
    <SocialListingItem
      url=""
      ComponentIcon={MyIcons.Facebook}
    />
    <SocialListingItem
      url=""
      ComponentIcon={MyIcons.Instagram}
    />
    <SocialListingItem
      url=""
      ComponentIcon={MyIcons.Twitter}
    />
    <SocialListingItem
      url=""
      ComponentIcon={MyIcons.Linkedin}
    />
  </StyledSocialListing>
);

export default SocialListing;
