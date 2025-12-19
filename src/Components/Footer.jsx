import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Bio } from "../data/constants";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-[#18181b] to-[#23233a] text-white py-8 px-4 mt-8 md:mt-16 lg:mt-0 w-full border-t border-[#23233a]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Name & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {Bio.name}
          </span>
          <span className="text-xs text-[#a1a1aa] mt-1">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        {/* Center: Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            <svg width="24" height="24" fill="currentColor" className="inline-block"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <svg width="24" height="24" fill="currentColor" className="inline-block"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-1.5-1.5-1.5s-1.5.43-1.5 1.5v4.5h-3v-9h3v1.22c.41-.63 1.19-1.22 2.5-1.22 2.07 0 3.5 1.34 3.5 4.08v5.92z"/></svg>
          </a>
          <a href={`mailto:${Bio.email}`} className="hover:text-pink-400 transition-colors">
            <svg width="24" height="24" fill="currentColor" className="inline-block"><path d="M12 13.065l-8-5.065v10h16v-10l-8 5.065zm8-7.065v.01l-8 5.065-8-5.065v-.01c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2z"/></svg>
          </a>
        </div>
        {/* Right: Quick Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#Home" className="hover:text-green-400 transition-colors text-xs">Home</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors text-xs">Projects</a>
          <a href="#education" className="hover:text-pink-400 transition-colors text-xs">Education</a>
          <a href="#Experience" className="hover:text-yellow-400 transition-colors text-xs">Experience</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
