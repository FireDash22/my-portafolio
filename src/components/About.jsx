import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#facc15]'>
              Sobre mi
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Soy una persona con muchas ganas de aprender.</p>
            </div>
            <div>
              <p>Este año decidi adentarme en el mundo de la programacion buscando nuevos retos y sobretodo nuevo conocimiento. 
                Ahora me encuentro en una etapa donde busco aplicar mis nuevos conocimientos y a su ves seguir ampliandolos.
                Mis primeras lineas de codigo fueron en el bootcamp de soy henry, en esa institucion fue donde aprendi mis nuevos conocimientos.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
