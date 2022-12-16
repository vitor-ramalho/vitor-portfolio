import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/**Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Vitor Ramalho Vilela</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Desenvolvedor Full Stack</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Seja bem vindo ao meu site! Aqui irei exibir minha experiência como desenvolvedor, tecnologias já utilizadas e alguns projetos já desenvolvidos.
        </p>
        <div>
          <a href="https://drive.google.com/file/d/1yR_2aZwI1KeW_roEEqz7uVvOFVysg3yY/view?usp=sharing" target="_blank" rel="noreferrer">
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00D1FF] hover:border-[#00D1FF] duration-150'>
              Baixe meu currículo
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home