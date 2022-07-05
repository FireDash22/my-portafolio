import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-2xl text-[#faf5ff]'>Hola, mi nombre es</p>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
          Gonzalo Madona
        </h2>
        <h3 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>
          Soy Full Stack Developer.
        </h3>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Soy un Desarrollador apasionado por aprender y mucho más sobre IT, 
        es por eso que estoy en constante búsqueda de nuevas oportunidades para adquirir conocimientos y crecer en mi carrera profesional. 
        Soy un entusiasta de Frontend pero puedo hacerlo igual de bien en el backend.
        </p>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Home;
