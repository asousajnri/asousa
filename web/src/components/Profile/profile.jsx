import React from "react";

import {
  StyledProfile,
  StyledImageProfile,
  StyledInfos,
  StyledOffice,
} from "./styles";

import pathProfileImage from "../../assets/images/photo.jpg";

const Profile = () => {
  return (
    <StyledProfile>
      <StyledImageProfile src={pathProfileImage} />
      <StyledInfos>
        <StyledOffice>
          <h1>Antônio Sousa</h1>
          <h2>Front End Developer Jr.</h2>
        </StyledOffice>
      </StyledInfos>
    </StyledProfile>
  );
};

export default Profile;
