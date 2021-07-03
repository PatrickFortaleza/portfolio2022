import React from "react";
import styles from "../../../../styles/modules/Header.module.scss";
import SocialLinksView from "../../SocialLinks/view";

export default function HeaderView({ isTop }) {
  return (
    <header className={isTop ? styles.header : styles.header__scrolled}>
      <h1 className={styles.logo__secondary}>PATRICK FORTALEZA</h1>
      <SocialLinksView styles={styles}/>
    </header>
  );
}
