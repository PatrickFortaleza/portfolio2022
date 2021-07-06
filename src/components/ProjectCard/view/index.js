import React from "react";
import Image from "next/image";
import styles from "../../../../styles/modules/ProjectCard.module.scss";
import {
  JSIcon,
  ReactIcon,
  NodeJsIcon,
  CSSIcon,
  WordPressIcon,
  JQueryIcon,
} from "../../../icons";
import ArrowButton from "../../ArrowButton/view";

export default function ProjectCardView({ project }) {
  return (
    <a
      href={project.url}
      target="blank_"
      rel="noreferrer"
      className={styles.card__container}
    >
      <div className={styles.card__mockup}>
        <Image
          className={styles.card__mockup}
          layout={"fill"}
          quality={`100`}
          src={project.src}
          alt="Clay macbook mockup of project"
        />
      </div>
      <div className={styles.card__header}>
        <h3>{project.title}</h3>
        <span>{project.subtitle}</span>
      </div>
      <div className={styles.card__tech}>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{renderIcons(tech)}</li>
          ))}
        </ul>
      </div>
      <div className={styles.card__prompt}>
        <ArrowButton text={project.prompt} method={() => undefined} />
      </div>
    </a>
  );
}

const renderIcons = (string) => {
  switch (string) {
    case "javascript":
      return <JSIcon />;
    case "nodejs":
      return <NodeJsIcon />;
    case "react":
      return <ReactIcon />;
    case "css":
      return <CSSIcon />;
    case "wordpress":
      return <WordPressIcon />;
    case "jquery":
      return <JQueryIcon />;
    default:
      return null;
  }
};
