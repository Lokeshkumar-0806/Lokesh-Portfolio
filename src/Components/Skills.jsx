import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  return (
    <div className="bg-black text-white pt-40" id="skills">
      <div className="text-center">
        <h1 className="text-5xl font-bold ">Skills</h1>
        <p className="text-lg text-gray-500 mt-4">
          Here are some of my skills on which I have been working on for the
          past 1 year
        </p>
      </div>
      <div className="w-full bg-black flex flex-wrap justify-center gap-4 p-4 mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center bg-black shadow-lg shadow-blue-500/50 p-4 rounded-lg"
          >
            <h1 className="text-lg text-gray-100 font-semibold mb-3">
              {skill.title}
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-3">
              {skill.skills.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    className="w-12 h-12 object-contain"
                    src={item.image}
                    alt={item.name}
                  />
                  <h5 className="text-white text-sm mt-1">{item.name}</h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
