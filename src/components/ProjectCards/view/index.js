import React from "react";
import ProjectCard from "../../ProjectCard/view";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../../../../styles/modules/ProjectSlider.module.scss";
import { useScreen } from "../../../context/ScreenContext";

export default function ProjectCardsView({ settings, sliderRef, projects }) {
  const screenContext = useScreen();
  const { screenWidth } = screenContext;

  const desktopSettings = { ...settings };
  desktopSettings.slidesToShow = 2;

  return (
    <ul className={styles.slider__container}>
      {screenWidth > 320 && screenWidth < 767 && (
        <>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </>
      )}
      {screenWidth > 767 && screenWidth < 1024 && (
        <>
          <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Slider>
        </>
      )}
      {screenWidth > 1025 && (
        <>
          <Slider ref={(c) => (sliderRef.current = c)} {...desktopSettings}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Slider>
        </>
      )}
    </ul>
  );
}
