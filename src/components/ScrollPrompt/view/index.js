import React, { useState, useEffect, useRef } from "react";
import styles from "../../../../styles/modules/ScrollPrompt.module.scss";
import { useScreen } from "../../../context/ScreenContext";

export default function ScrollPromptView() {
  const screenContext = useScreen();
  const { hasScrolled, setCurrentSection } = screenContext;
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef();

  useEffect(() => {
    if (pathRef && pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--scrollPath", `${pathLength}`);
  }, [pathLength]);

  return (
    <div
      className={styles.prompt__container}
      style={
        hasScrolled
          ? { opacity: 0, transform: "translateY(20px)", visibility: "hidden" }
          : { opacity: 1, transform: "translateY(0px)" }
      }
    >
      <button
        onClick={() => setCurrentSection(1)}
        style={{ position: "relative" }}
      >
        <span className={styles.prompt__heading}>
          See what I&apos;m <span>all about! </span>
        </span>
        <span className={styles.prompt__copy}>scroll</span>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="23.9px"
          height="27.2px"
          viewBox="0 0 23.9 27.2"
          className={styles.scroll__svg}
        >
          <path
            className={styles.scroll__path}
            ref={pathRef}
            d="M3.9,0.2v11c0,5.4,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9s-4.4-9.9-9.9-9.9c-4.3,0-7.9,2.7-9.3,6.5c0,0-0.6,1-0.6,3.4
	c0,2.4,0,15.7,0,15.7l-3.7-3.7L4,26.9l3.8-3.8"
          />
        </svg>
      </button>
    </div>
  );
}
