import React, { useRef } from "react";
import screen from "../../../styles/modules/Screen.module.scss";
import styles from "../../../styles/modules/PortfolioSection.module.scss";
import ProjectCardsCtrl from "../../components/ProjectCards/controller";
import { ArrowIcon, ArrowLeftIcon } from "../../icons"

export default function PortfolioSection({ sRef }) {
  const slider = useRef();

  const next = () => {
    if (slider.current) slider.current.slickNext();
  };
  const prev = () => {
    if (slider.current) slider.current.slickPrev();
  };
  return (
    <div
      ref={sRef}
      className={screen.screen__wrap}
      style={{ backgroundColor: "var(--elevation-1)" }}
      id="section__2"
    >
      <div className={styles.portfolio__flex}>
        <div className={styles.portfolio__head}>
          <span>Portfolio</span>
          <h2>Technical Projects</h2>
          <p>
            Built with <b style={{ color: "var(--highlight-primary-1)" }}>❤</b>{" "}
            (and code) by yours truly.
          </p>

          <div className={styles.portfolio__actions}>
            <button onClick={() => prev()}> <ArrowLeftIcon /> </button>
            <button onClick={() => next()}> <ArrowIcon /> </button>
          </div>
        </div>
        <div className={styles.cards__container}>
          <ProjectCardsCtrl 
            sliderRef={slider}
            next={next}
            prev={prev}
          />
        </div>
      </div>
    </div>
  );
}
