import React from "react";
import projects from "../data/projects.json";

const ProjectList = () => {
  projects.forEach((p) => {
    console.log(p);
  });
};

export default ProjectList;
