import React from 'react';

import * as LayoutIcons from '../../LayoutIcons';
import { SocialContainer, SocialItem, IconWrapper } from './styles';

const Social = () => (
  <SocialContainer>
    <SocialItem changeBg>
      <IconWrapper>
        <LayoutIcons.Facebook fill="#fff" width="5rem" height="5rem" />
      </IconWrapper>
    </SocialItem>
    <SocialItem>
      <IconWrapper>
        <LayoutIcons.Twitter fill="#fff" width="5rem" height="5rem" />
      </IconWrapper>
    </SocialItem>
    <SocialItem>
      <IconWrapper>
        <LayoutIcons.Instagram fill="#fff" width="5rem" height="5rem" />
      </IconWrapper>
    </SocialItem>
    <SocialItem changeBg>
      <IconWrapper>
        <LayoutIcons.Linkedin fill="#fff" width="5rem" height="5rem" />
      </IconWrapper>
    </SocialItem>
  </SocialContainer>
);

export default Social;
