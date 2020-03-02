import React from 'react';

import * as LayoutIcons from "../../LayoutIcons";

import { SocialContainer, SocialItem } from './styles';

const Social = () => {
  return (
    <SocialContainer>
      <SocialItem changeBg>
        <LayoutIcons.Facebook fill="#fff" width="5rem" height="5rem" />
      </SocialItem>
      <SocialItem>
      <LayoutIcons.Twitter fill="#fff" width="5rem" height="5rem" />
      </SocialItem>
      <SocialItem>
        <LayoutIcons.Instagram fill="#fff" width="5rem" height="5rem" />
      </SocialItem>
      <SocialItem changeBg>
        <LayoutIcons.Linkedin fill="#fff" width="5rem" height="5rem" />
      </SocialItem>
    </SocialContainer>
  );
};

export default Social;
