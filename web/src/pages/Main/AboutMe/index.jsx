import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import pathPhoto from '../../../assets/images/photo.jpg';
import {
  AboutMeContainer,
  Side,
  SideBio,
  BlockTitleIcon,
  Photo,
  LayerOverlay,
} from './styles';

const AboutMe = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get('get-profile');

      setProfile(response.data);
    }

    loadProfile();
  }, []);

  return (
    <>
      {profile.map(item => (
        <AboutMeContainer key={item._id}>
          <Side>
            <Photo src={item.image_url} alt="Antônio Sousa" />
            <LayerOverlay />
          </Side>
          <SideBio>
            <BlockTitleIcon>
              <h1>{item.name}</h1>
              <span>{item.office}</span>
            </BlockTitleIcon>

            <p>{item.bio}</p>
          </SideBio>
        </AboutMeContainer>
      ))}
    </>
  );
};

export default AboutMe;
