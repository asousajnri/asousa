import React from 'react';
import { ThemeContext } from 'styled-components';

import { StyledSocialListingItem } from './social-listing-item-styles';

import { MyIcons } from '../../../../../components';

interface Props {
  url: string;
  icon: string;
}

const SocialListingItem: React.FC<Props> = ({ url, icon }) => {
  const {
    profile: { defaultIconColor },
    colors: { secondary },
  } = React.useContext(ThemeContext);
  const [iconColor, setIconColor] = React.useState(defaultIconColor);
  const [socialIcons] = React.useState([
    {
      title: 'Github',
      component: MyIcons.Github,
    },
    {
      title: 'Facebook',
      component: MyIcons.Facebook,
    },
    {
      title: 'Instagram',
      component: MyIcons.Instagram,
    },
    {
      title: 'Linkedin',
      component: MyIcons.Linkedin,
    },
  ]);

  return (
    <StyledSocialListingItem
      onMouseOver={() => setIconColor(secondary)}
      onMouseLeave={() => setIconColor(defaultIconColor)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {socialIcons.map(
          (socialIcon) => socialIcon.title === icon && <socialIcon.component key={Date.now()} width="2rem" fill={iconColor} />,
        )}
      </a>
    </StyledSocialListingItem>
  );
};

export default SocialListingItem;
