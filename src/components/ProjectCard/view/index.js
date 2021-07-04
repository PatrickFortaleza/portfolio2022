import React from "react";
import Image from "next/image";
import styles from "../../../../styles/modules/ProjectCard.module.scss";
import { JSIcon, ReactIcon, NodeJsIcon } from "../../../icons";
import ArrowButton from "../../ArrowButton/view";

export default function ProjectCardView() {
  return (
    <li className={styles.card__container}>
      <div className={styles.card__mockup}>
        <Image
          className={styles.card__mockup}
          layout={"fill"}
          quality={`100`}
          src={
            "https://patrickfortaleza-files.s3.us-west-1.amazonaws.com/macbook__cropped.png"
          }
          alt="Picture of the author"
        />
      </div>
      <div className={styles.card__header}>
        <h3>Cryptonite</h3>
        <span>Mobile Application</span>
      </div>
      <div className={styles.card__tech}>
        <ul>
          <li>
            <JSIcon />
          </li>
          <li>
            <ReactIcon />
          </li>
          <li>
            <NodeJsIcon />
          </li>
        </ul>
      </div>
      <div className={styles.card__prompt}>
        <ArrowButton
          text="View case study"
          method={() => console.log("hello")}
        />
      </div>
    </li>
  );
}
