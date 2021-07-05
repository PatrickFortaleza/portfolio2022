import React from "react";
import styles from "../../../../styles/modules/Header.module.scss";
import SocialLinksView from "../../SocialLinks/view";
import NavigationBarCtrl from "../../NavigationBar/controller";

export default function HeaderView({ isTop }) {
  return (
    <div
      className={
        isTop ? styles.header__container : styles.header__container__scrolled
      }
    >
      <header className={styles.header}>
        <h1 className={styles.logo__secondary}>
          PATRICK FORTALEZA{" "}
          <span className={styles.logo__copyright}>
            &copy; {new Date().getFullYear()}
          </span>
        </h1>
        <div className={styles.footer__container}>
          <div className={styles.footer}>
            <p>
              Patrick Fortaleza{" "}
              <span className={styles.logo__copyright__footer}>
                &copy; {new Date().getFullYear()}
              </span>
            </p>
            <SocialLinksView styles={styles} />
          </div>
        </div>
        <NavigationBarCtrl styles={styles} />
      </header>
    </div>
  );
}
