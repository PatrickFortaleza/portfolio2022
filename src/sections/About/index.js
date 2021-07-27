import React, { useState } from "react";
import Image from "next/image";
import screen from "../../../styles/modules/Screen.module.scss";
import styles from "../../../styles/modules/AboutSection.module.scss";
import ProficiencyCircleView from "../../components/ProficiencyCircle/view";
import ArrowButton from "../../components/ArrowButton/view";
import { useScreen } from "../../context/ScreenContext";

export default function AboutSection({ sRef }) {
  const screenContext = useScreen();
  const { setCurrentSection, screenWidth } = screenContext;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={screen.screen__wrap}
      style={{ backgroundColor: "var(--elevation-2)" }}
      ref={sRef}
      id="section__1"
    >
      <span className={styles.accent}></span>
      <div className={styles.prof__circle}>
        <ProficiencyCircleView />
      </div>

      <div className={styles.about__excerpt}>
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
        <div className={styles.excerpt__container}>
          <h2>About Me</h2>
          <div className={styles.excerpt}>
            <p>
              Hello World! My name is Patrick. I am a business-oriented
              technologist with an affinity for good interface design and
              project management. I currently work at Agilitek Solutions Ltd. as
              a UI/UX Application Developer. I believe that a good process will
              always lead to great results, and I apply this discipline in all
              aspects of my work, and my learning.
            </p>
            <p
              style={
                expanded || screenWidth > 540
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              When I&apos;m not in the office, I like to get creative. I
              freelance design services for my various clients, create passion
              projects, or help my friends out with their record label! I&apos;m
              also an avid gamer, and board game master extraordinaire.
            </p>
          </div>

          <button
            style={
              screenWidth > 540 ? { display: "none" } : { display: "block" }
            }
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "Read More"}
          </button>

          <div className={styles.prompt__desktop}>
            <ArrowButton
              text="See My Work"
              method={() => setCurrentSection(2)}
            />
          </div>
        </div>

        <div className={styles.prompt}>
          <ArrowButton text="See My Work" method={() => setCurrentSection(2)} />
        </div>
      </div>
    </div>
  );
}
