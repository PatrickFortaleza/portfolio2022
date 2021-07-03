import React, { useContext, useEffect, useState } from "react";
const ScreenContext = React.createContext();

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

const getWindowHeight = () => {
  const { innerHeight: height } = window;
  return height;
};

export function useScreen() {
  return useContext(ScreenContext);
}

export function ScreenProvider({ children }) {
  const initialScreenState = {
    width: 0,
    height: 0,
  };
  const [screenDimensions, setScreenDimensions] = useState(initialScreenState);
  const [windowYOffset, setWindowYOffset] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionIndicator, setSectionIndicator] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    (() => {
      const initialScreenState = {
        width: getWindowWidth(),
        height: getWindowHeight(),
      };

      setScreenDimensions(initialScreenState);
      setWindowYOffset(window.pageYOffset);
    })();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setStyleDimensions();
  }, [screenDimensions]);

  useEffect(() => {
    windowYOffset === 0 ? setIsTop(true) : setIsTop(false);
  }, [windowYOffset]);

  const scrollToSection = (e) => {
    const sectionToNavigate = +e.target.closest("button").id;
    setCurrentSection(sectionToNavigate);
  };

  const handleResize = () => {
    const screenDimensions_ = { ...screenDimensions };
    screenDimensions["height"] = getWindowHeight();
    screenDimensions["width"] = getWindowWidth();
    setScreenDimensions(screenDimensions_);
  };

  const setStyleDimensions = () => {
    document.documentElement.style.setProperty(
      "--vw",
      `${screenDimensions.width}px`
    );
    document.documentElement.style.setProperty(
      "--vh",
      `${screenDimensions.height}px`
    );
  };

  const handleScroll = () => {
    setWindowYOffset(window.pageYOffset);
  };

  const value = {
    scrollToSection,
    setCurrentSection,
    setSectionIndicator,
    screenWidth: screenDimensions.width,
    screenHeight: screenDimensions.height,
    currentSection,
    sectionIndicator,
    windowYOffset,
    isTop,
  };

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
}
