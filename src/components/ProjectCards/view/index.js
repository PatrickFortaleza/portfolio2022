import React from "react";
import ProjectCard from "../../ProjectCard/view";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../../../../styles/modules/ProjectSlider.module.scss"
import { useScreen } from "../../../context/ScreenContext"

export default function ProjectCardsView({ settings, sliderRef, next, prev }) {
  const screenContext = useScreen()
  const { screenWidth } = screenContext

  const desktopSettings = {...settings}
  desktopSettings.slidesToShow = 2

  return (
    <ul className={styles.slider__container}>
      {
        screenWidth > 320 && screenWidth < 767 &&
        <>
          {[...Array(4)].map((_, index) => (
            <ProjectCard key={index} />
          ))} 
        </>
      }
      {
        screenWidth > 767 && screenWidth < 1024 &&
        <>
          <Slider ref={(c) => (sliderRef.current = c)}  {...settings}>
            {[...Array(4)].map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </Slider> 
        </> 
      }
      {
        screenWidth > 1025 &&
        <>
          <Slider ref={(c) => (sliderRef.current = c)}  {...desktopSettings}>
            {[...Array(4)].map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </Slider> 
        </>
      }

    </ul>
  );
}
