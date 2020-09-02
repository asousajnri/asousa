import React from 'react';

import useFetchApi from '../../../hooks/useFetchApi';

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
}

const Profile: React.FC = () => {
  const [profile, setProfile] = React.useState<IProfile[]>([]);
  const { data, isFetchinging } = useFetchApi<IProfile>('profile');

  React.useEffect(() => {
    setProfile(data);
  }, [data, setProfile]);

  return (
    <>
      {profile.map(profileItem => (
        <StyledProfile key={profileItem._id}>
          <StyledImageProfile src="https://place-hold.it/600x600" />
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
