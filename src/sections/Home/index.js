import React from "react";
import screen from "../../../styles/modules/Screen.module.scss";
import styles from "../../../styles/modules/HomeSection.module.scss";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  VueIcon,
  AngularIcon,
  JQueryIcon,
  PythonIcon,
  NodeJsIcon,
  WordPressIcon,
} from "../../icons";
import ScrollPromptView from "../../components/ScrollPrompt/view";

export default function HomeSection({ sRef }) {
  return (
    <div
      ref={sRef}
      className={screen.screen__wrap}
      style={{ backgroundColor: "var(--elevation-1)" }}
      id="section__0"
    >
      <div className={styles.hero__wrap}>
        <div className={styles.hero}>
          <h1>
            Vancouver based — <br></br> <span>Full Stack Developer</span> on a
            mission to build beautiful apps and websites.
          </h1>
          <ul>
            <li>
              <HTMLIcon />
            </li>
            <li>
              <CSSIcon />
            </li>
            <li>
              <JSIcon />
            </li>
            <li>
              <ReactIcon />
            </li>
            <li>
              <VueIcon />
            </li>
            <li>
              <AngularIcon />
            </li>
            <li>
              <JQueryIcon />
            </li>
            <li>
              <PythonIcon />
            </li>
            <li>
              <NodeJsIcon />
            </li>
            <li>
              <WordPressIcon />
            </li>
          </ul>
        </div>
        <div className={styles.logo__accent}>
          <div>
            <span>PF</span>
          </div>
        </div>
      </div>
      <span className={styles.accent}></span>
      <ScrollPromptView />
    </div>
  );
}
