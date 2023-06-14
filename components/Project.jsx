import React from "react";
import ProjectTabs from "./ProjectTabs";

const Project = () => {
  return (
    <div id="projects" className="w-full p-10">
      <h1 className="text-3xl text-center">
        My <span className="text-teal-400">Projects</span>
      </h1>

      <ProjectTabs />
    </div>
  );
};

export default Project;
