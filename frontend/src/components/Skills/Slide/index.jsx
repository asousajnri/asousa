import React from "react";

// SWIPER
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

import { SlideContainer } from "./styles";

import SlideItem from "./SlideItem";

const Slide = () => {
  const params = {
    slidesPerView: 1,
    speed: 1500,
    autoplay: {
      delay: 2000,
      waitForTransition: true,
      disableOnInteraction: false
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1280: {
        slidesPerView: 2
      }
    }
  };

  return (
    <SlideContainer>
      <Swiper {...params}>
        <SlideItem>Javascript</SlideItem>
        <SlideItem>Node</SlideItem>
        <SlideItem>React</SlideItem>
        <SlideItem>React Native</SlideItem>
        <SlideItem>Mobile First</SlideItem>
        <SlideItem>Jest</SlideItem>
        <SlideItem>HTML</SlideItem>
        <SlideItem>CSS</SlideItem>
        <SlideItem>CSS Framework</SlideItem>
        <SlideItem>Mysql</SlideItem>
        <SlideItem>Postgres</SlideItem>
        <SlideItem>Gulp</SlideItem>
        <SlideItem>Webpack</SlideItem>
        <SlideItem>Git</SlideItem>
      </Swiper>
    </SlideContainer>
  );
};

export default Slide;
