import React from 'react'
import { experiences } from '../data/constants'
import ExperCard from './ExperCard'


const Experience = () => {
  return (
    <div className="bg-black text-white pt-20" id='Experience'>
    <div className="text-center">
      <h1 className=" text-5xl font-bold ">Experience </h1>
      <p className='text-lg mt-4  text-gray-400'>My Work experience as a software engineer and working on different companies and projects</p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-8 '>
        {experiences.map((item,index)=>(
            <ExperCard experience={item}/>
        ))}


      </div>
      </div>
  )
}

export default Experience
