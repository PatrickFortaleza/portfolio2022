import React from "react";
import screen from "../../../styles/modules/Screen.module.scss";
import styles from "../../../styles/modules/ContactSection.module.scss";
import ContactFormCtrl from "../../components/ContactForm/controller";
import AnimatedWorld from "../../components/AnimatedWorld/view";

export default function HomeSection() {
  return (
    <div
      className={screen.screen__wrap}
      style={{ backgroundColor: "var(--elevation-2)" }}
    >
      <AnimatedWorld />
      <div className={styles.form__head}>
        <span>Contact</span>
        <h2>Give me a shout!</h2>
        <p>
          Please feel free to leave me any messages related to general
          inquiries, new opportunities, or if you just want to say hello!
        </p>

        <h4>Direct Contact</h4>
        <p>
          <a href="mailto:patrickfortaleza@gmail.com">
            patrickfortaleza@gmail.com
          </a>
        </p>
      </div>
      <div className={styles.form__container}>
        <ContactFormCtrl />
      </div>
    </div>
  );
}
