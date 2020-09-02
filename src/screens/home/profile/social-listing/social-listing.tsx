import React from 'react';

import useFetchApi from '../../../../hooks/useFetchApi';

import SocialListingItem from './social-listing-item';

import { StyledSocialListing } from './social-listing-styles';

interface ISocialNetwork {
  _id: string;
  title: string;
  link: string;
}

const SocialListing: React.FC = () => {
  const [socialNetwork, setSocialNetwork] = React.useState<ISocialNetwork[]>([]);
  const { data } = useFetchApi<ISocialNetwork>('social-network');

  React.useEffect(() => {
    setSocialNetwork(data);
  }, [setSocialNetwork, data]);

  return (
    <StyledSocialListing>
      {socialNetwork.map((socialItem) => (
        <SocialListingItem
          key={socialItem._id}
          url={socialItem.link}
          icon={socialItem.title}
        />
      ))}
    </StyledSocialListing>
  );
};

export default SocialListing;
