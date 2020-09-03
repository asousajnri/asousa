import React from 'react';
import ReactFadeIn from 'react-fade-in';

import useFetchApi from '../../../hooks/useFetchApi';

import SocialListing from './social-listing';
import ProfileLoading from './profile-loading';

import {
  StyledProfile, StyledImageProfile, StyledInfos, StyledOffice,
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
      {isFetchinging && <ProfileLoading />}

      {!isFetchinging
        && profile.map((profileItem) => (
          <StyledProfile key={profileItem._id}>
            <ReactFadeIn className="FadeIn" transitionDuration={1000}>
              <StyledImageProfile src={profileItem.photo} />
              <StyledInfos>
                <StyledOffice>
                  <h1>{profileItem.name}</h1>
                  <h2>{profileItem.office}</h2>
                </StyledOffice>

                <SocialListing />
              </StyledInfos>
            </ReactFadeIn>
          </StyledProfile>
        ))}
    </>
  );
};

export default Profile;
