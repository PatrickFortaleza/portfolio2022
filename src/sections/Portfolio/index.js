import React from "react";
import screen from "../../../styles/modules/Screen.module.scss";
import styles from "../../../styles/modules/PortfolioSection.module.scss";
import ProjectCardsCtrl from "../../components/ProjectCards/controller";

export default function PortfolioSection({ sRef }) {
  return (
    <div
      ref={sRef}
      className={screen.screen__wrap}
      style={{ backgroundColor: "var(--elevation-1)" }}
      id="section__2"
    >
      <div className={styles.portfolio__head}>
        <span>Portfolio</span>
        <h2>Technical Projects</h2>
        <p>
          Built with <b style={{ color: "var(--highlight-primary-1)" }}>❤</b>{" "}
          (and code) by yours truly.
        </p>
      </div>
      <div className={styles.cards__container}>
        <ProjectCardsCtrl />
      </div>
    </div>
  );
}
