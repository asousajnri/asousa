import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { StyledSocialListingItem } from './social-listing-item-styles';

import { MyIcons } from '../../../../../components';

interface Props {
  url: string;
  icon: string;
}

const SocialListingItem: React.FC<Props> = ({
  url,
  icon,
}) => {
  const {
    profile: { defaultIconColor },
    colors: { secondary },
  } = useContext(ThemeContext);
  const [iconColor, setIconColor] = useState(
    defaultIconColor,
  );
  // const [iconsComponent] = useState([...MyIcons]);

  // console.log(iconsComponent);

  return (
    <StyledSocialListingItem
      onMouseOver={() => setIconColor(secondary)}
      onMouseLeave={() => setIconColor(defaultIconColor)}
    >
      <a href={url}>
        a
      </a>
    </StyledSocialListingItem>
  );
};

export default SocialListingItem;
