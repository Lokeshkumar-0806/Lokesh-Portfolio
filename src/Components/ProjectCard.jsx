import React from 'react'

const ProjectCard = ({projects}) => {
  return (
    <div className="bg-[#16161a] text-white p-5 rounded-2xl shadow-lg max-w-sm md:max-w-md lg:max-w-lg">
      {/* Project Image */}
      

      {/* Tech Stack Tags */}
     

      {/* Project Title & Timeline */}
      <h2 className="text-xl font-bold mt-4">{projects.title}</h2>

       <div className="flex flex-wrap gap-2 mt-4">
        {projects.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-[#24242b] text-[#a1a1aa] rounded-full text-sm font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-[#71717a] text-sm">{projects.timeline}</p>

      {/* Project Description */}
      <p className="text-[#a1a1aa] mt-2">{projects.description}</p>
    </div>

  )
}

export default ProjectCard
