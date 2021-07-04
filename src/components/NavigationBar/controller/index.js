import React from "react";
import NavigationBarView from "../view";
import { useScreen } from "../../../context/ScreenContext";

export default function NavigationBarCtrl({ styles }) {
  const screenContext = useScreen();
  const { scrollToSection, sectionIndicator } = screenContext;

  return (
    <NavigationBarView
      scrollToSection={scrollToSection}
      sectionIndicator={sectionIndicator}
      styles={styles}
    />
  );
}
