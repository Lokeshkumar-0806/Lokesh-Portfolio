import React from 'react'

const EducationCard = ({education}) => {
  return (
    <div className="md:w-[40%] w-[70%] bg-black shadow-lg shadow-blue-500/50 p-5 rounded-lg m-auto">
    <div className="w-full flex gap-2 items-center">
      <img src={education.img} alt="" className="w-12 h-12 object-cover rounded-full" />
      <div>
        <h1 className="text-xl font-bold text-white">{education.school}</h1>
        <p className="text-sm text-gray-400">{education.degree}</p>
        <h4 className="text-xs text-gray-300">{education.date}</h4>
      </div>
    </div>
    <p className="text-sm text-gray-300 mt-2">Grade: {education.grade}</p>
    <p className="text-sm text-gray-300 mt-2">{education.desc}</p>
  </div>
  )
}

export default EducationCard
