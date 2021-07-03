import React from "react";
import Image from "next/image";
import screen from "../../../styles/modules/Screen.module.scss";
import styles from "../../../styles/modules/AboutSection.module.scss";
import ProficiencyCircleView from "../../components/ProficiencyCircle/view";
import ArrowButton from "../../components/ArrowButton/view";

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
      <span className={styles.accent}></span>
      <div className={styles.prof__circle}>
        <ProficiencyCircleView />
      </div>

      <div className={styles.excerpt}>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga
          sapiente commodi tempore? Corrupti, repudiandae.
        </p>
        <p>
          Cumque, quisquam, ut facere enim ipsum laborum porro aut non unde
          eligendi necessitatibus aliquam in hic tempora iure mollitia vero
          omnis dignissimos iusto? Dolorem, corporis!
        </p>
        <button>Read More</button>
      </div>

      <div className={styles.prompt}>
        <ArrowButton text="See My Work" method={() => console.log("pressed")} />
      </div>
    </div>
  );
}
