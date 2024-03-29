import Head from "next/head";
import React, { useState, useEffect, createRef } from "react";
import HomeSection from "../src/sections/Home";
import AboutSection from "../src/sections/About";
import ContactSection from "../src/sections/Contact";
import PortfolioSection from "../src/sections/Portfolio";
import { useScreen } from "../src/context/ScreenContext";

export default function Home() {
  const [sectionRefs, setSectionRefs] = useState([]);
  const screenContext = useScreen();
  const { currentSection, windowYOffset, screenHeight, setSectionIndicator } =
    screenContext;

  useEffect(() => {
    setSectionRefs((sectionRefs) =>
      Array(4)
        .fill()
        .map((_, i) => sectionRefs[i] || createRef())
    );
  }, []);

  useEffect(() => {
    scrollToSection(currentSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  useEffect(() => {
    evaluateSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowYOffset]);

  const scrollToSection = (num) => {
    if (sectionRefs[num] && sectionRefs[num].current) {
      sectionRefs[num].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const evaluateSection = () => {
    const focused = sectionRefs.filter(
      (ref) =>
        ref.current &&
        ref.current.getBoundingClientRect().top > 0 - 10 &&
        ref.current.getBoundingClientRect().top < screenHeight + 10
    )[0];

    if (focused !== null && focused?.current !== undefined) {
      const focusedSection = focused.current.id.replace(/section__/, "");
      setSectionIndicator(+focusedSection);
    }

    if (windowYOffset === 0) return setSectionIndicator(0);
  };

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/asp3pmk.css" />
        <meta
          name="description"
          content="Patrick Fortaleza's professional front-end web developer portfolio website. Built with React."
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/manifest.json" />
        <title>
          Patrick Fortaleza | Front-end Specialized, Full-stack developer.
        </title>
      </Head>
      <HomeSection sRef={sectionRefs[0]} />
      <AboutSection sRef={sectionRefs[1]} />
      <PortfolioSection sRef={sectionRefs[2]} />
      <ContactSection sRef={sectionRefs[3]} />
    </div>
  );
}
