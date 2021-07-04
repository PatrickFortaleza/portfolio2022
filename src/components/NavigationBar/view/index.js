import React from "react";
import {
  HomeIcon,
  AboutIcon,
  ContactIcon,
  PortfolioIcon,
} from "../../../icons";

export default function NavigationBarView({
  scrollToSection,
  sectionIndicator,
  styles,
}) {
  return (
    <nav className={styles.nav__main}>
      <ul>
        <li>
          <button
            id="0"
            className={
              sectionIndicator === 0
                ? styles.button__active
                : styles.button__default
            }
            onClick={(e) => scrollToSection(e)}
          >
            <span className="icon-container">
              <HomeIcon />
            </span>
            <label>Home</label>
          </button>
        </li>
        <li>
          <button
            id="1"
            className={
              sectionIndicator === 1
                ? styles.button__active
                : styles.button__default
            }
            onClick={(e) => scrollToSection(e)}
          >
            <span className="icon-container">
              <AboutIcon />
            </span>
            <label>About</label>
          </button>
        </li>
        <li>
          <button
            id="2"
            className={
              sectionIndicator === 2
                ? styles.button__active
                : styles.button__default
            }
            onClick={(e) => scrollToSection(e)}
          >
            <span className="icon-container">
              <PortfolioIcon />
            </span>
            <label>Portfolio</label>
          </button>
        </li>
        <li>
          <button
            id="3"
            className={
              sectionIndicator === 3
                ? styles.button__active
                : styles.button__default
            }
            onClick={(e) => scrollToSection(e)}
          >
            <span className="icon-container">
              <ContactIcon />
            </span>
            <label>Contact</label>
          </button>
        </li>
      </ul>
    </nav>
  );
}
