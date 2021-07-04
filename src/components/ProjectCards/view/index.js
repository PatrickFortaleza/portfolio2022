import React from "react";
import ProjectCard from "../../ProjectCard/view";

export default function ProjectCardsView() {
  return (
    <ul>
      {[...Array(4)].map((_, index) => (
        <ProjectCard key={index} />
      ))}
    </ul>
  );
}
