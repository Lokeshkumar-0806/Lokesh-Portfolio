import React, { useEffect, useRef } from "react";
import { skills } from "../data/constants";
import { motion } from "framer-motion";
import gsap from "gsap";

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  /* =========================
     GSAP SECTION + STAGGER
  ========================= */
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white pt-36 min-h-screen"
      id="skills"
    >
      {/* =========================
          HEADER
      ========================= */}
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold"
        >
          Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Technologies and tools I’ve been working with to build modern,
          scalable applications
        </motion.p>
      </div>

      {/* =========================
          SKILL CARDS
      ========================= */}
      <div className="w-full flex justify-center mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative bg-gradient-to-br from-[#18181b] to-[#23233a] 
                         rounded-2xl border border-[#23233a] p-6 shadow-xl 
                         hover:shadow-blue-500/30 min-h-[280px]"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              {/* TITLE */}
              <h2 className="relative text-xl font-bold mb-6 text-center 
                             bg-gradient-to-r from-green-400 to-blue-400 
                             bg-clip-text text-transparent">
                {skill.title}
              </h2>

              {/* SKILLS */}
              <div className="relative flex flex-wrap justify-center gap-5">
                {skill.skills.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="flex flex-col items-center w-20"
                  >
                    <div
                      className="bg-[#23233a] rounded-xl flex items-center justify-center 
                                 shadow-md mb-2 w-16 h-16 border border-[#2e2e45]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                    <span className="text-xs text-[#a1a1aa] text-center font-medium">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
