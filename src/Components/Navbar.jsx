import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 left-0 w-full text-white px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center shadow-md z-50">
      <div className=' container py-2 flex justify-center md:justify-between items-center '>
        <div className='text-2xl font-bold hidden md:inline'>Lokesh..</div>
        <div className='space-x-6'>
            <a href="#Home" className='hover:text-gray-400 hover:border-b-2'>Home</a>
            <a href="#skills" className='hover:text-gray-400 hover:border-b-2'>Skills</a>
            <a href="#Experience" className='hover:text-gray-400 hover:border-b-2'>Experience</a>
            <a href="#education" className='hover:text-gray-400 hover:border-b-2'>Education</a>
        </div>
        <button className='px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 rounded-full' onClick={() => window.location.href = "https://www.linkedin.com/in/lokesh-kumar-7546091a7/"}
>Connect me</button>
      </div>
    </nav>
  )
}

export default Navbar
