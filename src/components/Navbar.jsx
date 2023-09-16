import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from './../assets/logo.png' 
import {Link} from 'react-scroll'

export const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleToggleNav = () => setNav(!nav)

    const mailtoHref = "mailto:ninigibradze@gmail.com?subject=SendMail&body=Description";


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]
    text-gray-300'>
        <div>
            <img src={Logo} alt='Logo' className='w-[50px]' />
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div className='md:hidden z-10' onClick={handleToggleNav}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col
        justify-center items-center`}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleToggleNav} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleToggleNav} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleToggleNav} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleToggleNav} to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleToggleNav} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
                hover:ml-[-10px] lg:mr-0 duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/nini-gibradze' target="_blank" rel="noreferrer">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
                hover:ml-[-10px] lg:mr-0 duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/ninigibradze' target="_blank" rel="noreferrer">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
                hover:ml-[-10px] lg:mr-0 duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href={mailtoHref} target="_blank" rel="noreferrer">                        
                        Email <AiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
                hover:ml-[-10px] lg:mr-0 duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='Nino Gibradze_Resume.pdf' download='Nino Gibradze_Resume.pdf'>                        
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>        
    </div>
  )
}
