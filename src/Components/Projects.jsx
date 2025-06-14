import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/constants";

const Projects = () => {
  return (
    <div className="bg-black text-white pt-20">
      <div className="text-center">
        <h1 className=" text-5xl font-bold ">Project </h1>
        <p className="text-lg mt-4  text-gray-400">
          I have worked on a wide range of projects.From web apps to android
          apps.Here are some of my projects
        </p>
      </div>

      <div className="flex justify-center gap-4 flex-wrap mt-10 ">
        {projects.map((item, index) => (
          <ProjectCard projects={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
