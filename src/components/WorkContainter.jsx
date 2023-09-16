import React from 'react'

const WorkContainter = ({image, title, demo, code, userInfo, comingSoon}) => {
    
  return (
    <div 
    style={{backgroundImage: `url(${image})`}}
    className='shadow-lg shadow-[#040c16] group container rounded-md flex 
    justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
                {title}
            </span>
            {userInfo && <p className='text-xs text-white tracking-wider'>Login - user 123</p>}
            {comingSoon && <p className='text-md font-bold text-white tracking-wider'>Comming Soon</p>}
            
            {!comingSoon && (
                <div className='pt-8 text-center'>
                <a href={demo} target="_blank" rel="noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo         
                    </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                    </button>
                </a>
            </div>
            )}
            
        </div>
    </div>
  )
}

export default WorkContainter