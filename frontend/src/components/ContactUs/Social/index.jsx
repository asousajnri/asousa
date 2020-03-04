import React, { useState } from 'react';

import { colors } from '../../../styles/Theme/pinkAndGreen';
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
        <LayoutIcons.Instagram fill="#fff" />
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
