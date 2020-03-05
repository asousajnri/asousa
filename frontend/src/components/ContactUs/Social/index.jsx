import React from 'react';

import * as LayoutIcons from '../../LayoutIcons';
import { SocialContainer, SocialItem, IconWrapper } from './styles';

const Social = () => (
  <SocialContainer>
    <SocialItem href="#" changeBg>
      <IconWrapper>
        <LayoutIcons.Facebook fill="#fff" />
      </IconWrapper>
    </SocialItem>
    <SocialItem href="#">
      <IconWrapper>
        <LayoutIcons.Twitter fill="#fff" />
      </IconWrapper>
    </SocialItem>
    <SocialItem href="#">
      <IconWrapper>
        <LayoutIcons.Dashboard fill="#fff" />
      </IconWrapper>
    </SocialItem>
    <SocialItem href="#" changeBg>
      <IconWrapper>
        <LayoutIcons.Linkedin fill="#fff" />
      </IconWrapper>
    </SocialItem>
  </SocialContainer>
);

export default Social;
