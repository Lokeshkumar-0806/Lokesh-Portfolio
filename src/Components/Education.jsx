import React from 'react'
import { education } from '../data/constants'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <div id="education">
      <div className="bg-black text-white pt-20 min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2">Education</h1>
        </div>
        <div className="mt-16 flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
            {education.map((item, index) => (
              <div
                key={item.id ?? index}
                className="bg-gradient-to-br from-[#18181b] to-[#23233a] rounded-2xl shadow-xl border border-[#23233a] p-6 flex flex-col items-center justify-between min-h-[220px] transition-transform hover:scale-[1.02] hover:shadow-blue-500/30"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.school}
                    className="w-20 h-20 object-cover rounded-xl shadow-lg border-2 border-[#23233a] bg-white mb-4"
                  />
                )}
                <h2 className="text-xl font-bold text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 text-center">{item.degree}</h2>
                <p className="text-sm text-[#7dd3fc] bg-[#23233a] px-2 py-1 rounded font-semibold mb-2 text-center">{item.school}</p>
                <p className="text-xs text-[#a1a1aa] mb-2 text-center">{item.date}</p>
                {item.grade && <p className="text-xs text-[#a1a1aa] mb-2 text-center">{item.grade}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
