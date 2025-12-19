import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/constants";
import { motion } from "framer-motion";
import gsap from "gsap";

const Projects = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);
  return (
    <motion.div
      ref={sectionRef}
      className="bg-black text-white mx-auto pt-20"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className=" text-5xl font-bold ">Project </h1>
        <p className="text-lg mt-4  text-gray-400">
          I have worked on a wide range of projects.From web apps to android
          apps.Here are some of my projects
        </p>
      </motion.div>

      <div className="flex justify-center w-full mt-10">
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full max-w-6xl px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((item, idx) => (
            <motion.div
              key={item.id ?? item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.7 }}
            >
              <ProjectCard project={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
