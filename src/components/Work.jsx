import React from 'react';
import Pokemon from '../assets/pi.png';
import yovoy from "../assets/yovoy.jpg"

const Work = () => {
  return (
    <div name="work" className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Proyectos</p>
            <p className='py-6'>Mira mis proyetos recientes</p>
        </div>

        {/*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-2  gap-3'>
            {/*Pi food */}
            <div className='flex flex-wrap -m-4'>

                <div className='p-4 sm:w-full lg:w-[500px]'>
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                        <img src={Pokemon} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                        <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                            {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                            <h1 className='text-2xl font-semibold mb-3'>Proyecto para bootcamp</h1>
                            <p className=' leading-relaxed mb-3'>Proyecto realizado desde el backend hasta el frontend, utilizando Node.js, Express,
                                Sequelize, PostgreSQL para el back-End y Javascript, React-Redux y css para el Front-End. Se consume API externa
                            </p>
                            <div className='flex flex-wrap justify-center items-center'>
                                <a href="https://github.com/FireDash22/Pi-Pokemon-main" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/*PF Yovoy!*/}
            <div className='flex flex-wrap -m-4'>

                <div className='p-4 sm:w-full lg:w-[500px]'>
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                        <img src={yovoy} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                        <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                            {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                            <h1 className='text-2xl font-semibold mb-3'>Proyecto final para bootcamp</h1>
                            <p className=' leading-relaxed mb-3'>Proyecto realizado de forma grupal, trabajando en equipo desde el backend hasta el frontend,
                            se utilizo redux-toolkit, pasarela de pagos con sandbox de mercado pago y autenticacion con google.
                            </p>
                            <div className='flex flex-wrap justify-center items-center'>
                                <a href="https://yovoy-frontend.herokuapp.com/home" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                 <a href="https://github.com/yoVoy-pf/yoVoy-" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Work;
