import React from 'react';
import WorkImg from '../Assets/workImg.jpeg';
import Jestec from '../Assets/jestec.png';
import realEstate from '../Assets/realestate.jpg';
import Krypt from '../Assets/sendEther.png';
import Manage from '../Assets/manage.PNG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00D1FF]'>
            Projetos
          </p>
          <p className='py-6'>// Veja Alguns dos projetos já desenvolvidos</p>
        </div>
        {/**Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/**Grid Item */}
          <div 
          style={{ backgroundImage: `url(${Jestec})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/**Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Jestec Soluções
              </span>
              <div className='pt-8 text-center'>
                <a href='https://jestecsolucoes.com.br/' target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Live</button>
                </a>
              </div>
            </div>
          </div>
          {/**Grid Item */}
          <div 
          style={{ backgroundImage: `url(${Krypt})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/**Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Krypt - Send Ether
              </span>
              <div className='pt-8 text-center'>

                <a href='https://krypt-jet.vercel.app/' target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/vitor-ramalho/krypt' target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          {/**Grid Item */}
          <div 
          style={{ backgroundImage: `url(${Manage})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/**Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Manage Landing Page
              </span>
              <div className='pt-8 text-center'>

                <a href='https://manage-landingpage-henna.vercel.app/' target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/vitor-ramalho/manage-landingpage' target='_blank' rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          {/**Grid Item */}
          <div 
          style={{ backgroundImage: `url(${realEstate})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/**Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em Breve
              </span>
              <div className='pt-8 text-center'>

                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          <div 
          style={{ backgroundImage: `url(${realEstate})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/**Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em Breve
              </span>
              <div className='pt-8 text-center'>

                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          <div 
          style={{ backgroundImage: `url(${WorkImg})` }}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/**Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em Breve
              </span>
              <div className='pt-8 text-center'>

                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-vold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work