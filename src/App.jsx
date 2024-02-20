import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {

  const locomotiveScroll =new LocomotiveScroll();
  return (
    <div className='w-full m-h-screen text-white bg-zinc-900'>
       <Navbar/> 
       <LandingPage/> 
       <Marque/>
       <About/>
       <Eyes/>
       <Features/>
       <Cards/>
       <Footer/>
       </div>
   
  )
}

export default App