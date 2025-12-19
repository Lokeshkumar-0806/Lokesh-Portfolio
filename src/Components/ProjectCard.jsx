import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const {
    title,
    techStack = [],
    description,
    category,
    role,
    image,
    link,
    live_link,
    github_link,
    git_hub_link,
    figma_link,
  } = project;

  // Handle live link
  const liveLink = link || live_link;

  // Handle GitHub links (array or string)
  let githubLinks = [];
  if (Array.isArray(github_link)) {
    githubLinks = github_link;
  } else if (github_link && typeof github_link === "string" && github_link.startsWith("[")) {
    githubLinks = github_link.replace(/\[|\]|\s/g, "").split(",");
  } else if (github_link && typeof github_link === "string") {
    githubLinks = [github_link];
  } else if (Array.isArray(git_hub_link)) {
    githubLinks = git_hub_link;
  } else if (git_hub_link && typeof git_hub_link === "string" && git_hub_link.startsWith("[")) {
    githubLinks = git_hub_link.replace(/\[|\]|\s/g, "").split(",");
  } else if (git_hub_link && typeof git_hub_link === "string") {
    githubLinks = [git_hub_link];
  }

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="relative bg-gradient-to-br from-[#18181b] to-[#23233a] 
                 text-white p-4 sm:p-6 rounded-3xl shadow-2xl 
                 border border-[#23233a] w-full max-w-lg"
    >
      {/* =========================
          PROJECT IMAGE
      ========================= */}
      {image && (
        <motion.a
          href={liveLink || githubLinks[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden rounded-2xl"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        >
          {/* Image */}
          <motion.img
            src={image}
            alt={title}
            className="w-full h-40 sm:h-52 object-cover rounded-2xl"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      )}

      {/* =========================
          TITLE & META
      ========================= */}
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight 
                       bg-gradient-to-r from-green-400 to-blue-400 
                       bg-clip-text text-transparent">
          {title}
        </h2>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 sm:px-3 bg-[#23233a] 
                         text-[#a1a1aa] rounded-full text-xs 
                         font-semibold border border-[#2e2e45]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category & Role */}
        <div className="flex flex-wrap gap-2 mt-2 text-xs text-[#7dd3fc] font-semibold">
          {category && (
            <span className="bg-[#23233a] px-2 py-1 rounded">
              {category}
            </span>
          )}
          {role && (
            <span className="bg-[#23233a] px-2 py-1 rounded">
              {role}
            </span>
          )}
        </div>
      </div>

      {/* =========================
          DESCRIPTION
      ========================= */}
      {description && (
        <p className="text-[#a1a1aa] mt-4 text-xs sm:text-sm leading-relaxed min-h-[56px]">
          {description}
        </p>
      )}

      {/* =========================
          LINKS
      ========================= */}
      <div className="flex flex-wrap gap-3 mt-6">
        {liveLink && (
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 
                       rounded-lg text-xs sm:text-sm font-semibold 
                       shadow hover:shadow-blue-400/40"
          >
            Live Demo
          </motion.a>
        )}

        {figma_link && (
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={figma_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 
                       rounded-lg text-xs sm:text-sm font-semibold 
                       shadow hover:shadow-pink-400/40"
          >
            Figma
          </motion.a>
        )}

        {githubLinks.map((gh, idx) => {
          let label = "GitHub";
          if (githubLinks.length === 2) {
            label = idx === 0 ? "Frontend" : "Backend";
          } else if (githubLinks.length > 1) {
            label = `GitHub #${idx + 1}`;
          }

          return (
            <motion.a
              key={gh + idx}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href={gh}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#23233a] 
                         rounded-lg text-xs sm:text-sm font-semibold 
                         border border-[#2e2e45] 
                         shadow hover:shadow-blue-400/40"
            >
              {label}
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
