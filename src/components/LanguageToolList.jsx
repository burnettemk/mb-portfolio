import React from "react";
import { createPortal } from "react-dom";
import {
  SiAssemblyscript,
  SiBootstrap,
  SiC,
  SiChakraui,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiGit,
  SiGithub,
  SiGnu,
  SiHtml5,
  SiJavascript,
  SiPycharm,
  SiPython,
  SiReact,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import projects from "../data/projects";
import IconJS from "./icons/IconJS";

function getIcon(name) {
  switch (name) {
    case "Assembly":
      return <SiAssemblyscript key={name} />;
    case "Bootstrap":
      return <SiBootstrap key={name} />;
    case "C":
      return <SiC key={name} />;
    case "Chakraui":
      return <SiChakraui key={name} />;
    case "C++":
      return <SiCplusplus key={name} />;
    case "C#":
      return <SiCsharp key={name} />;
    case "CSS":
      return <SiCss3 key={name} />;
    case "Git":
      return <SiGit key={name} />;
    case "Github":
      return <SiGithub key={name} />;
    case "Gnu":
      return <SiGnu key={name} />;
    case "HTML":
      return <SiHtml5 key={name} />;
    case "Javascript":
      return <IconJS name={name} />;
    case "Pycharm":
      return <SiPycharm key={name} />;
    case "Python":
      return <SiPython key={name} />;
    case "React":
      return <SiReact key={name} />;
    case "Typescript":
      return <SiTypescript key={name} />;
    case "Vercel":
      return <SiVercel key={name} />;
    case "VisualstudioCode":
      return <SiVisualstudiocode key={name} />;
    default:
      return null;
  }
}

const LanguageToolList = () => {
  return projects.map((project) =>
    createPortal(
      <ul>
        {project.langs.map((lang) => getIcon(lang))}
        {project.tools.map((tool) => getIcon(tool))}
      </ul>,
      document.getElementById(project.id)
    )
  );
};

export default LanguageToolList;
