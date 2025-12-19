import React, { useEffect, useRef } from "react";
import { experiences } from "../data/constants";
import ExperCard from "./ExperCard";
import { motion } from "framer-motion";
import gsap from "gsap";

const Experience = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  /* =========================
     GSAP SECTION + STAGGER
  ========================= */
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Experience"
      className="bg-black text-white pt-32 pb-20"
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
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          My professional journey as a software engineer, working on real-world
          products, applications, and cloud-based solutions.
        </motion.p>
      </div>

      {/* =========================
          EXPERIENCE CARDS
      ========================= */}
      <div className="mt-20 flex flex-col gap-10 items-center px-4">
        {experiences.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-full flex justify-center"
          >
            <ExperCard experience={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
