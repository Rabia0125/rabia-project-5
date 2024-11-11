import React from 'react'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='container pt-2'>
        <div className='flex justify-between items-center'>
            <div className='text-2xl text-blue-400 font-medium'>:-) Khan</div>
            <FiMenu className='md:hidden' size={30} />
            <ul className='gap-10 lg-gap-15 hidden md:flex'>
                <li className='menuLink text-xl text-blue-400'><a href="#home">Home</a></li>
                <li className='menuLink text-xl text-blue-400'><a href="#about">About</a></li>
                <li className='menuLink text-xl text-blue-400'><a href="#skills">Skills</a></li>
                <li className='menuLink text-xl text-blue-400'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
