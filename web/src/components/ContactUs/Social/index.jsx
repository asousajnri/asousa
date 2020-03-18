import React from 'react';

import * as LayoutIcons from '../../LayoutIcons';
import { SocialContainer, SocialItem, IconWrapper } from './styles';

const Social = ({ social }) => (
  <SocialContainer>
    {social.map((item, index) => (
      <SocialItem
        key={item._id}
        href={item.social_url}
        changeBg={index === 0 || index === 3 ? true : false}
        target="_blank"
      >
        <IconWrapper>
          {item.social === 'Facebook' && <LayoutIcons.Facebook fill="#fff" />}
          {item.social === 'Instagram' && <LayoutIcons.Instagram fill="#fff" />}
          {item.social === 'Twitter' && <LayoutIcons.Twitter fill="#fff" />}
          {item.social === 'Linkedin' && <LayoutIcons.Linkedin fill="#fff" />}
        </IconWrapper>
      </SocialItem>
    ))}
  </SocialContainer>
);

export default Social;
