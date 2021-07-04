import React, { useState } from "react";
import Image from "next/image";
import screen from "../../../styles/modules/Screen.module.scss";
import styles from "../../../styles/modules/AboutSection.module.scss";
import ProficiencyCircleView from "../../components/ProficiencyCircle/view";
import ArrowButton from "../../components/ArrowButton/view";
import { useScreen } from "../../context/ScreenContext"

export default function AboutSection({ sRef }) {
  const screenContext = useScreen()
  const { setCurrentSection, screenWidth } = screenContext 
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={screen.screen__wrap}
      style={{ backgroundColor: "var(--elevation-2)" }}
      ref={sRef}
      id="section__1"
    >
      <div className={styles.headshot__container}>
        <div className={styles.logo__accent}>
          <div>
            <span>PF</span>
          </div>
        </div>
        <div className={styles.headshot__wrap}>
          <Image
            width={150}
            height={150}
            quality={`100`}
            src={
              "https://patrickfortaleza-files.s3.us-west-1.amazonaws.com/ssd-headshot-34.png"
            }
            alt="Picture of the author"
          />
        </div>
      </div>
      <span className={styles.accent}></span>
      <div className={styles.prof__circle}>
        <ProficiencyCircleView />
      </div>

      <div className={styles.excerpt__container}>
        <h2>About Me</h2>
        <div className={styles.excerpt}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus blandit vulputate. Duis erat enim, congue vitae porta at, porta at nulla. Donec pretium risus ex, vitae tempor nibh rhoncus vel. Pellentesque feugiat erat a purus iaculis, at vestibulum neque congue. Nullam vitae turpis non augue tincidunt faucibus a vitae dolor.
          </p>
          <p style={expanded || screenWidth > 540 ? { display: "block" } : { display: "none" }}>
          Mauris non vestibulum libero. Duis euismod elementum urna ut mollis. Phasellus a neque ut tortor maximus facilisis ac sit amet nibh. Integer non cursus turpis. Aenean aliquet vel velit sit amet euismod. Aenean facilisis diam vitae pulvinar pretium. Nunc tincidunt, nisi a lobortis commodo, erat velit venenatis dui, sit amet euismod justo arcu eu mauris. Duis ante arcu, interdum sed ornare sit amet, aliquam et nulla.
          </p>
        </div>

        <button style={ screenWidth > 540 ? { display: "none" } : { display: "block" } } onClick={() => setExpanded(!expanded)}>
          {expanded ? "See Less" : "Read More"}
        </button>
      </div>

      <div className={styles.prompt}>
        <ArrowButton text="See My Work" method={() => setCurrentSection(2)} />
      </div>
    </div>
  );
}
