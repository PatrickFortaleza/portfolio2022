import React from "react";
import { ArrowIcon } from "../../../icons";
import styles from "../../../../styles/modules/ArrowButton.module.scss";

export default function ArrowButton({ method, text, fill }) {
  return (
    <button
      className={fill ? styles.arrow__button__fill : styles.arrow__button}
      style={
        fill
          ? { backgroundColor: `${fill}`, border: `var(--highlight-primary-3)` }
          : { paddingLeft: 0, color: `var(--text-1)` }
      }
      onClick={() => method()}
    >
      <span className="btn-text">{text}</span>
      <span className="icon-container">
        <ArrowIcon />
      </span>
    </button>
  );
}
