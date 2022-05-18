import React from 'react';
import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import JavaScript from '../Assets/javascript.png';
import ReactImg from '../Assets/react.png';
import Node from '../Assets/node.png';
import FireBase from '../Assets/firebase.png';
import AWS from '../Assets/aws.png';
import GitHub from '../Assets/github.png';
import Tailwind from '../Assets/tailwind.png';
import Mongo from '../Assets/mongo.png';

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/**Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#00D1FF]'>Habilidades</p>
          <p className='py-4'>// Essas sãos as tecnologias que já estudei e trabalhei.</p>
        </div>
        {/**Icons container */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML Icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="HTML Icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="HTML Icon" />
            <p className='my-4'>NodeJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML Icon" />
            <p className='my-4'>ReactJs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="HTML Icon" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="HTML Icon" />
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="HTML Icon" />
            <p className='my-4'>TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills