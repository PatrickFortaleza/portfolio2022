import React from "react";
import { GithubIcon, LinkedinIcon, CodepenIcon } from "../../../icons";

export default function SocialLinks({ styles }) {
  return (
    <nav className={styles.nav__social}>
      <ul>
        <li>
          <a
            href="https://github.com/PatrickFortaleza"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/patrickfortaleza"
            target="_blank"
            rel="noreferrer"
          >
            <CodepenIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/patrick-fortaleza-1952a1177/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
