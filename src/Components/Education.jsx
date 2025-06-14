import React from 'react'
import { education } from '../data/constants'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <div id='education'>
    <div className="bg-black text-white pt-20">
    <div className="text-center">
      <h1 className=" text-5xl font-bold ">Educations </h1>
      </div>

      <div className='mt-20 flex flex-wrap flex-col justify-center gap-8 '>
        {education.map((item,index)=>(
            <EducationCard education={item}/>
        ))}


      </div>
      </div>



    </div>
  )
}

export default Education
