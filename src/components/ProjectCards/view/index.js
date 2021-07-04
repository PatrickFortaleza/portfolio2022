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

  return (
    <ul className={styles.slider__container}>
      {
        screenWidth > 767 ?
        <>
          <Slider ref={(c) => (sliderRef.current = c)}  {...settings}>
            {[...Array(4)].map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </Slider> 
        </> : 
        <>
          {[...Array(4)].map((_, index) => (
            <ProjectCard key={index} />
          ))} 
        </>
      }

    </ul>
  );
}
