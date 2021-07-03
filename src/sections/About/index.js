import React from "react";
import Image from "next/image";
import screen from "../../../styles/modules/Screen.module.scss";
import styles from "../../../styles/modules/AboutSection.module.scss";
import ProficiencyCircleView from "../../components/ProficiencyCircle/view";

export default function AboutSection() {
  return (
    <div
      className={screen.screen__wrap}
      style={{ backgroundColor: "var(--elevation-1)" }}
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

      <div className={styles.prof__circle}>
        <ProficiencyCircleView />
      </div>
    </div>
  );
}
