import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#fc5657]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nini Gibradze</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a front-end developer specilizing in building exceptional digital 
                experiences. Skilled in problem-solving, teamwork, and attention to detail, 
                I bring a high level of focus and dedication to my work.  I am constantly 
                seeking new knowledge and growth opportunities to enhance my skills.</p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center
                  hover:bg-[#fc5657] hover:border-[#fc5657]' >
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
              </Link>                
              </div>
        </div>
    </div>
  )
}

export default Home