import React from 'react';

const ExperCard = ({ experience }) => {
  return (
    <div className="w-[350px] h-[300px] bg-black shadow-lg shadow-blue-500/50 p-5 rounded-lg m-auto flex flex-col justify-between">
      
      <div className="flex gap-4 items-center">
        <img
          src={experience.img}
          alt=""
          className="w-24 h-24 object-cover rounded-md border border-gray-300"
        />
        <div>
          <h1 className="text-lg font-bold text-white">{experience.role}</h1>
          <p className="text-xs text-gray-300">{experience.company}</p>
          <h4 className="text-xs text-gray-400">{experience.date}</h4>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-sm text-gray-200 mb-2 line-clamp-3">{experience.desc}</p>
        {experience.skills && (
          <p className="text-sm text-gray-300 break-words">
            <span className="font-semibold">Skills:</span> {experience.skills}
          </p>
        )}
      </div>
      
    </div>
  );
};

export default ExperCard;
