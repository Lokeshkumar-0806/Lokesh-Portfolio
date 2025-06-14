import React from 'react'
import { Bio } from '../data/constants'
import loki from '../assets/loki.jpg';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'id='Home' >
      <img src={loki} alt=""
       className='mx-auto mt-9 mb-8 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
      <h1 className='mt-8 text-3xl font-bold'>
        I'm {" "} 
        <span className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 '>{Bio.name} </span>
        ,{Bio.roles[0]}
      </h1>
      <p className='mt-10 text-lg text-gray-600 px-4 md:px-32'>{Bio.description}</p>

      <div className='mt-8 space-x-4'>
      <a href={Bio.linkedin} className='bg-gradient-to-r from-green-500 to-blue-600 text white transition-transform transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Contact With Me</a>

      <a href={Bio.resume} className='bg-gradient-to-r from-orange-500 to-blue-600 text white transition-transform transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Resume</a>
      </div>
    </div>
  )
}

export default Hero
