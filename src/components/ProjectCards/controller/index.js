import React from "react";
import ProjectCardsView from "../view";

export default function ProjectCardsCtrl({sliderRef, next, prev}) {
  return (
    <ProjectCardsView 
      settings={sliderSettings}
      sliderRef={sliderRef}
      next={next}
      prev={prev}
    />
  )
}

const sliderSettings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
