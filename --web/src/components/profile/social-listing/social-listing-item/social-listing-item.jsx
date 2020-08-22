import React, { useState } from 'react';

import defaultTheme from '../../../../assets/styles/themes/default';

import { StyledSocialListingItem } from './social-listing-item-styles';

const SocialListingItem = ({
  url,
  icon: ComponentIcon,
}) => {
  const [iconColor, setIconColor] = useState(
    defaultTheme.color_social_icon
  );

  return (
    <StyledSocialListingItem
      onMouseOver={() =>
        setIconColor(defaultTheme.secondary_color)
      }
      onMouseLeave={() =>
        setIconColor(defaultTheme.color_social_icon)
      }
    >
      <a href={url}>
        <ComponentIcon width="100%" fill={iconColor} />
      </a>
    </StyledSocialListingItem>
  );
};

export default SocialListingItem;
