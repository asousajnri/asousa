import React from 'react';

import MyIcons from '../../icons';

import SocialListingItem from './social-listing-item';

import { StyledSocialListing } from './social-listing-styles';

const SocialListing = () => {
  return (
    <StyledSocialListing>
      <SocialListingItem url="" icon={MyIcons.Github} />
      <SocialListingItem url="" icon={MyIcons.Facebook} />
      <SocialListingItem url="" icon={MyIcons.Instagram} />
      <SocialListingItem url="" icon={MyIcons.Twitter} />
      <SocialListingItem url="" icon={MyIcons.Linkedin} />
    </StyledSocialListing>
  );
};

export default SocialListing;
