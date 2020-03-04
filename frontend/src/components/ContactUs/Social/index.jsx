import React, { useState } from 'react';

import { colors } from '../../../styles/Theme/pinkAndGreen';
import * as LayoutIcons from '../../LayoutIcons';
import { SocialContainer, SocialItem, IconWrapper } from './styles';


const Social = () => {
  const [socialHover, setSocialHover] = useState(true);

  return (
    <SocialContainer>
      <SocialItem
        href="#"
        changeBg
        onMouseEnter={() => setSocialHover(!socialHover)}
        onMouseLeave={() => setSocialHover(!socialHover)}
      >
        <IconWrapper>
          <LayoutIcons.Facebook fill={socialHover ? '#fff' : colors.primary} />
        </IconWrapper>
      </SocialItem>
      <SocialItem
        href="#"
        onMouseEnter={() => setSocialHover(!socialHover)}
        onMouseLeave={() => setSocialHover(!socialHover)}
      >
        <IconWrapper>
          <LayoutIcons.Twitter fill={socialHover ? '#fff' : colors.primary} />
        </IconWrapper>
      </SocialItem>
      <SocialItem
        href="#"
        onMouseEnter={() => setSocialHover(!socialHover)}
        onMouseLeave={() => setSocialHover(!socialHover)}
      >
        <IconWrapper>
          <LayoutIcons.Instagram fill={socialHover ? '#fff' : colors.primary} />
        </IconWrapper>
      </SocialItem>
      <SocialItem
        href="#"
        changeBg
        onMouseEnter={() => setSocialHover(!socialHover)}
        onMouseLeave={() => setSocialHover(!socialHover)}
      >
        <IconWrapper>
          <LayoutIcons.Linkedin fill={socialHover ? '#fff' : colors.primary} />
        </IconWrapper>
      </SocialItem>
    </SocialContainer>
  );
};

export default Social;
