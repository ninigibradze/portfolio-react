import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[rgb(10,25,47)] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#fc5657]'>About</p>
                </div>
                <div>                    
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Nini, nice to meet you. Please take a look arount.</p>
                </div>
                <div>
                    <p>I am a passionate and driven software developer with a background in full stack 
                        web development from 2013 to 2015, where I covered both front-end and back-end, 
                        including 3 years of C++ prior to that. Skilled in problem-solving, teamwork, and 
                        attention to detail, I bring a high level of focus and dedication to my work.</p>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default About