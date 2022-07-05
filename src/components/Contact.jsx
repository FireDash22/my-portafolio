import React from 'react'
import { FaGithub, FaLinkedin,FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] text-gray-300'>

    {/*--Container--*/}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#facc15] '>Contáctame</p>
            <p className='py-4'>Te invito a ponerte en contacto conmigo y conocer mejor mi perfil</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:ml-20 py-8'>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a className='flex justify-between items-center w-full text-gray-200 pl-2' href="https://www.linkedin.com/in/gonzalomadona" target="_blank">Linkedin <FaLinkedin size={100} /> </a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <a className='flex justify-between items-center w-full text-gray-200 pl-2' href="https://github.com/FireDash22" target="_blank">Github <FaGithub size={100} /> </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact