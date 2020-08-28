import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { StyledSocialListingItem } from './social-listing-item-styles';

interface IComponentIcon {
  fill: string;
  width: string;
}

interface Props {
  url: string;
  ComponentIcon: React.FC<IComponentIcon>;
}

const SocialListingItem: React.FC<Props> = ({
  url,
  ComponentIcon,
}) => {
  const {
    profile: { defaultIconColor },
    colors: { secondary },
  } = useContext(ThemeContext);
  const [iconColor, setIconColor] = useState(
    defaultIconColor
  );

  return (
    <StyledSocialListingItem
      onMouseOver={() => setIconColor(secondary)}
      onMouseLeave={() => setIconColor(defaultIconColor)}
    >
      <a href={url}>
        <ComponentIcon width="100%" fill={iconColor} />
      </a>
    </StyledSocialListingItem>
  );
};

export default SocialListingItem;
