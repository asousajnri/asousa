import React, { useState } from 'react';

import * as LayoutIcons from '../../LayoutIcons';
import { SocialContainer, SocialItem, IconWrapper } from './styles';

const Social = ({ social }) => {
  return (
    <SocialContainer>
      {social.map((item, index) => (
        <SocialItem
          key={item._id}
          href={item.social_url}
          target="_blank"
          className={item.social}
        >
          <IconWrapper>
            {item.social === 'Facebook' && <LayoutIcons.Facebook fill="#fff" />}
            {item.social === 'Instagram' && (
              <LayoutIcons.Instagram fill="#fff" />
            )}
            {item.social === 'Twitter' && <LayoutIcons.Twitter fill="#fff" />}
            {item.social === 'Linkedin' && <LayoutIcons.Linkedin fill="#fff" />}
          </IconWrapper>
        </SocialItem>
      ))}
    </SocialContainer>
  );
};

export default Social;
