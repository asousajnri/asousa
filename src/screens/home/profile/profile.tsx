import React from 'react';
import axios from 'axios';

import SocialListing from './social-listing';

import {
  StyledProfile,
  StyledImageProfile,
  StyledInfos,
  StyledOffice,
} from './profile-styles';

interface IProfile {
  _id: string;
  photo: string;
  name: string;
  office: string;
};

const Profile: React.FC = () => {
  const [profile, setProfile] = React.useState<IProfile[]>([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_ASOUSA_URL_API_BASE}profile`).then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <>
      {profile.map((profileItem) => (
        <StyledProfile key={profileItem._id}>
          <StyledImageProfile src={`${process.env.REACT_APP_ASOUSA_URL_API_BASE_FILES}${profileItem.photo}`} />
          <StyledInfos>
            <StyledOffice>
              <h1>{profileItem.name}</h1>
              <h2>{profileItem.office}</h2>
            </StyledOffice>

            <SocialListing />
          </StyledInfos>
        </StyledProfile>
      ))}
    </>
  );
};

export default Profile;
