import React from "react";
import { createPortal } from "react-dom";
import {
  SiBootstrap,
  SiChakraui,
  SiGit,
  SiGithub,
  SiGnu,
  SiJavascript,
  SiPython,
  SiReact,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

const LanguageToolList = () => {
  return (
    <>
      {createPortal(
        <ul>
          <SiPython />
          <SiGithub />
          <SiGit />
          <SiVisualstudiocode />
        </ul>,
        document.getElementById("password-generator")
      )}
      {createPortal(
        <ul>
          C <SiGnu />
        </ul>,
        document.getElementById("shell-program")
      )}
      {createPortal(
        <ul>
          <SiTypescript />
          <SiGithub />
          <SiGit />
          <SiReact />
          <SiVisualstudiocode />
          <SiChakraui />
        </ul>,
        document.getElementById("fire-film")
      )}
      {createPortal(
        <ul>
          <SiTypescript />
          <SiGithub />
          <SiGit />
          <SiReact />
          <SiVisualstudiocode />
          <SiChakraui />
        </ul>,
        document.getElementById("game-hub")
      )}
      {createPortal(
        <ul>
          <SiPython />
          <SiGithub />
          <SiGit />
          <SiVisualstudiocode />
        </ul>,
        document.getElementById("guided-workflow")
      )}
      {createPortal(
        <ul>
          <SiJavascript />
          <SiGithub />
          <SiGit />
          <SiReact />
          <SiVisualstudiocode />
          <SiBootstrap />
        </ul>,
        document.getElementById("mb-portfolio")
      )}
    </>
  );
};

export default LanguageToolList;
