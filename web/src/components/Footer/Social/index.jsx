import React, { useState } from 'react';

import * as LayoutIcons from '../../LayoutIcons';
import { SocialContainer, SocialItem, IconWrapper } from './styles';

const Social = ({ social }) => {
  const [isHover, setIsHover] = useState(null);

  return (
    <SocialContainer>
      {social.map((item, index) => (
        <SocialItem
          onMouseOver={() => setIsHover(index)}
          onMouseLeave={() => setIsHover(null)}
          key={item._id}
          href={item.social_url}
          target="_blank"
        >
          <IconWrapper>
            {item.social === 'Facebook' && (
              <LayoutIcons.Facebook
                fill={isHover === index ? '#ea178c' : '#fff'}
              />
            )}
            {item.social === 'Instagram' && (
              <LayoutIcons.Instagram
                fill={isHover === index ? '#ea178c' : '#fff'}
              />
            )}
            {item.social === 'Twitter' && (
              <LayoutIcons.Twitter
                fill={isHover === index ? '#ea178c' : '#fff'}
              />
            )}
            {item.social === 'Linkedin' && (
              <LayoutIcons.Linkedin
                fill={isHover === index ? '#ea178c' : '#fff'}
              />
            )}
          </IconWrapper>
        </SocialItem>
      ))}
    </SocialContainer>
  );
};

export default Social;
