import React from 'react'

const ContactUs = () => {
  return (
    <div className= ' bg-black text-white pt-20  p-5 ' id='Contact'>

        <h1 className='text-4xl font-bold text-center mt-10 mb-10'>Contact Us !</h1>
        <div className=' shadow-lg shadow-blue-500 w-1/2 m-auto p-5 '>


        <form className='space-y-10'>
            <div>
                <label htmlFor='name'>Your Name</label>
                input
                <input  type="text"
                className=' w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400
                ' placeholder='Enter Your Name' />
            </div>
            <div>
                <label htmlFor='name'>Your Name</label>
                input
                <input type="text"
                className=' w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400
                ' placeholder='Enter Your Name' />
            </div>
            <div>
                <label className='block mb-2' htmlFor='message'>Message</label>
                <textarea type="email"
                className=' w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                placeholder='Enter Your Email' 
                rows={4}/>
            </div>
            <button className='bg-gradient-to-r from-orange-500 to-blue-600 text white transition-transform transform duration-300 hover:scale-105 px-4 py-2 rounded-full ' >Submit</button>


        </form>
        </div>

    </div>
  )
}

export default ContactUs
