import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'
import Experience from './Components/Experience.jsx'
import Projects from './Components/Projects.jsx'
import Education from './Components/Education.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Footer from './Components/Footer.jsx'





const App = () => {
  return (
   <div>

      <Navbar/>
      <Hero/>
      <Skills />
      <Experience/>
      <Projects/>
      <Education/>
      {/* <ContactUs/> */}
      <Footer/>
   </div>
  )
}

export default App
