import React from 'react';

// SWIPER
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import Item from './Item';
import { SlideContainer } from './styles';

const Slide = () => {
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
        <Item>Javascript</Item>
        <Item>Node</Item>
        <Item>React</Item>
        <Item>React Native</Item>
        <Item>Mobile First</Item>
        <Item>Jest</Item>
        <Item>HTML</Item>
        <Item>CSS</Item>
        <Item>CSS Framework</Item>
        <Item>Mysql</Item>
        <Item>Postgres</Item>
        <Item>Gulp</Item>
        <Item>Webpack</Item>
        <Item>Git</Item>
      </Swiper>
    </SlideContainer>
  );
};

export default Slide;
