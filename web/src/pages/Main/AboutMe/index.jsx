import React, { useState, useEffect } from 'react';

import Placeholder from './Placeholder';
import FadeIn from 'react-fade-in';

import api from '../../../services/api';

import {
  AboutMeContainer,
  Side,
  SideBio,
  SectionTitle,
  Photo,
  LayerOverlay,
} from './styles';

const AboutMe = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function loadProfile() {
        const response = await api.get('get-profile');

        if (response) {
          setProfile(response.data);
          setTimeout(() => setLoading(false), 3000);
        }
      }

      loadProfile();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Placeholder />
      ) : (
        profile.map(item => (
          <FadeIn>
            <AboutMeContainer key={item._id}>
              <Side>
                <Photo
                  src={`http://localhost:3333/files/${item.image}`}
                  alt="Antônio Sousa"
                />
                <LayerOverlay />
              </Side>
              <SideBio>
                <SectionTitle>
                  <h1>{item.name}</h1>
                  <span>{item.office}</span>
                </SectionTitle>

                <p>{item.bio}</p>
              </SideBio>
            </AboutMeContainer>
          </FadeIn>
        ))
      )}
    </>
  );
};

export default AboutMe;
