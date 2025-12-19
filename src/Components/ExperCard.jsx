import React from "react";
import { motion } from "framer-motion";

const ExperCard = ({ experience }) => {
  if (!experience) return null;

  const {
    role,
    company,
    location,
    date,
    description,
    techStack = [],
    image,
  } = experience;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="relative bg-gradient-to-br from-[#18181b] to-[#23233a] 
                 text-white rounded-2xl shadow-xl border border-[#23233a] 
                 w-full max-w-md md:max-w-2xl mx-auto 
                 flex flex-col md:flex-row items-stretch 
                 p-4 sm:p-6 min-h-[220px] md:min-h-[180px]"
    >
      {/* =========================
          LEFT: LOGO / INITIAL
      ========================= */}
      <div className="flex flex-col items-center justify-center 
                      w-full md:w-32 min-w-0 md:min-w-[6rem] 
                      md:mr-6 mb-4 md:mb-0">
        {image ? (
          <motion.img
            src={image}
            alt={company}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-20 h-20 object-contain rounded-xl 
                       shadow-lg border-2 border-[#23233a] bg-white p-2"
          />
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-blue-500 to-green-400 
                       rounded-xl w-20 h-20 flex items-center justify-center 
                       text-3xl font-bold text-white shadow-lg"
          >
            {company ? company[0] : ""}
          </motion.div>
        )}
      </div>

      {/* =========================
          RIGHT: DETAILS
      ========================= */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* HEADER ROW */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <h1
              className="text-lg sm:text-xl font-bold 
                         bg-gradient-to-r from-green-400 to-blue-400 
                         bg-clip-text text-transparent"
            >
              {role}
            </h1>

            <span className="text-xs sm:text-sm text-[#7dd3fc] 
                             bg-[#23233a] px-2 py-1 rounded font-semibold">
              {company}
            </span>

            {location && (
              <span className="text-xs sm:text-sm text-[#a1a1aa] 
                               bg-[#23233a] px-2 py-1 rounded font-semibold">
                {location}
              </span>
            )}

            <span className="text-xs sm:text-sm text-gray-400 sm:ml-auto">
              {date}
            </span>
          </div>

          {/* DESCRIPTION */}
          <ul className="mt-4 text-xs sm:text-sm text-[#a1a1aa] 
                          list-disc list-inside space-y-1">
            {Array.isArray(description)
              ? description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))
              : description && <li>{description}</li>}
          </ul>
        </div>

        {/* TECH STACK */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {techStack.map((tech, idx) => (
              <motion.span
                key={tech + idx}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="px-2 py-1 bg-[#23233a] 
                           text-[#a1a1aa] rounded-full text-xs 
                           font-semibold border border-[#2e2e45]"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperCard;
