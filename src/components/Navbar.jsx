import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[100px] flex justify-center items-center px-4 bg-[#111827] text-gray-300'>
      {/* menu */}
      <ul className='hidden md:flex p-4'  style={{cursor: 'pointer'}}>
        <li>
          <Link to='home' className='p-2' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' className='p-2' smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link to='skills' className='p-2' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' className='p-2' smooth={true} duration={500}>
          Proyectos
          </Link>
        </li>
        <li>
          <Link to='contact' className='p-2' smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          Sobre mi
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
