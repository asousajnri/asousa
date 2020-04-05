import React from 'react';

// SWIPER
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import FadeIn from 'react-fade-in';

import Placeholder from './Placeholder';

import { SlideContainer, Item } from './styles';

const Slide = ({ skills, loading }) => {
  const params = {
    slidesPerView: 1,
    speed: 1200,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 1200,
      waitForTransition: true,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <SlideContainer>
      {loading ? (
        <Swiper {...params}>
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Swiper>
      ) : (
        <Swiper {...params}>
          {skills.map(skill => (
            <Item key={skill._id}>
              <FadeIn>
                <span>{skill.name}</span>
              </FadeIn>
            </Item>
          ))}
        </Swiper>
      )}
    </SlideContainer>
  );
};

export default Slide;
