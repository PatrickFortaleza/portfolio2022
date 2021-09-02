import React from "react";
import ProjectCardsView from "../view";

function ProjectCardsCtrl({ sliderRef, next, prev }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ProjectCardsView
      settings={sliderSettings}
      sliderRef={sliderRef}
      next={next}
      prev={prev}
      projects={projects}
    />
  );
}

const projects = [
  {
    title: "Cryptonite",
    subtitle: "Mobile Application",
    prompt: "View repository",
    src: "https://patrickfortaleza-files.s3.us-west-1.amazonaws.com/cryptonite.png",
    url: "https://github.com/PatrickFortaleza/Cryptonite",
    technologies: ["javascript", "react", "nodejs"],
  },
  {
    title: "Tapestry Victoria",
    subtitle: "Promotional Real Estate Website",
    prompt: "View live site",
    src: "https://patrickfortaleza-files.s3.us-west-1.amazonaws.com/tapestry_victoria.png",
    url: "https://www.tapestryvictoria.com/",
    technologies: ["wordpress", "jquery", "css"],
  },
  {
    title: "Pmacapagal",
    subtitle: "Patricia's Portfolio Website",
    prompt: "View live site",
    src: "https://patrickfortaleza-files.s3.us-west-1.amazonaws.com/pmacapagal.png",
    url: "https://www.pmacapagal.com/",
    technologies: ["javascript", "react", "css"],
  },
  {
    title: "Netflicks",
    subtitle: "Netflix UI Clone",
    prompt: "View live site",
    src: "https://patrickfortaleza-files.s3.us-west-1.amazonaws.com/netflicks.png",
    url: "https://netflicks-pfteza.netlify.app/",
    technologies: ["javascript", "react", "css"],
  },
];

export default ProjectCardsCtrl;
