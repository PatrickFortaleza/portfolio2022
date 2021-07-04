import React from "react";
import styles from "../../../../styles/modules/Header.module.scss";
import SocialLinksView from "../../SocialLinks/view";
import NavigationBarCtrl from "../../NavigationBar/controller";

export default function HeaderView({ isTop }) {
  return (
    <header className={isTop ? styles.header : styles.header__scrolled}>
      <h1 className={styles.logo__secondary}>PATRICK FORTALEZA <span style={{fontWeight: "400", transform: "translateY(-3px)", fontSize: "10px", display: "inline-block", letterSpacing: "0"}}>&copy; {new Date().getFullYear()}</span></h1>
      <SocialLinksView styles={styles} />
      <NavigationBarCtrl styles={styles} />
    </header>
  );
}
