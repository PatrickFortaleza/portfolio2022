import React from "react";
import {
  HomeIcon,
  AboutIcon,
  ContactIcon,
  PortfolioIcon,
} from "../../../icons";
import { useScreen } from "../../../context/ScreenContext";

export default function NavigationBarView({ scrollToSection, styles }) {
  const screenContext = useScreen();
  const { sectionIndicator } = screenContext;
  return (
    <nav className={styles.nav__main}>
      <ul>
        <li>
          <button
            id="0"
            className={sectionIndicator === 0 ? "active" : "inactive"}
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
            className={sectionIndicator === 1 ? "active" : "inactive"}
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
            className={sectionIndicator === 2 ? "active" : "inactive"}
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
            className={sectionIndicator === 3 ? "active" : "inactive"}
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
