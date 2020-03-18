import React from 'react';

// SWIPER
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { SlideContainer, Item } from './styles';

const Slide = ({ skills }) => {
  const params = {
    slidesPerView: 1,
    speed: 1200,
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
      <Swiper {...params}>
        {skills.map(skill => (
          <Item key={skill._id}>
            <span>{skill.name}</span>
          </Item>
        ))}
      </Swiper>
    </SlideContainer>
  );
};

export default Slide;
