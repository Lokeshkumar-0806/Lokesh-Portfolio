import React, { useEffect, useRef, useState } from "react";
import { Bio } from "../data/constants";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  /* =========================
     ROLE CHANGER
  ========================= */
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % Bio.roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     GSAP INTRO + FLOATING
  ========================= */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      imageRef.current,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    ).fromTo(
      textRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
      "-=0.5"
    );

    // Floating animation (premium feel)
    gsap.to(imageRef.current, {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Home"
      className="bg-black text-white text-center min-h-[80vh] flex flex-col justify-center items-center px-4"
    >
      {/* =========================
          PROFILE IMAGE
      ========================= */}
      <motion.div
        ref={imageRef}
        className="relative mt-6 mb-8 cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 180 }}
      >
        {/* GLOW RING */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-xl opacity-40 animate-pulse" />

        {/* IMAGE */}
        <motion.img
          src="/assets/lokiii.jpeg"
          alt="Lokesh Kumar"
          className="relative h-32 w-32 sm:h-48 sm:w-48 rounded-full object-cover 
                     border-4 border-[#23233a] shadow-2xl z-10"
          whileHover={{
            rotateX: 8,
            rotateY: -8,
          }}
          transition={{ type: "spring", stiffness: 120 }}
        />
      </motion.div>

      {/* =========================
          TEXT CONTENT
      ========================= */}
      <div ref={textRef}>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            {Bio.name}
          </span>
        </h1>

        {/* ROLE ANIMATION */}
        <div className="h-10 mt-3 text-lg sm:text-2xl font-semibold text-[#7dd3fc] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={Bio.roles[roleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="block"
            >
              {Bio.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          {Bio.description}
        </p>
      </div>

      {/* =========================
          ACTION BUTTONS
      ========================= */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          href={Bio.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-2 rounded-full font-semibold shadow-lg"
        >
          Contact Me
        </motion.a>

        {Bio.resume && (
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-blue-600 px-6 py-2 rounded-full font-semibold shadow-lg"
          >
            Resume
          </motion.a>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
