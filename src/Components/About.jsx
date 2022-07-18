import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00D1FF]'>Sobre</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Resolução de problemas com proatividade, objetivo, foco, comunicação e agilidade!</p>
          </div>
          <div>
            <p>
              Desde sempre ligado a tecnologia e curioso a respeito de todos os assuntos que abrangem. Iniciei minha
              carreira na área trabalhando como suporte na prefeitura da minha cidade e sempre fui apaixonado por
              resolver problema. Depois disso, encontrei minha vocação nos primeiros contatos com desenvolvimento de
              software. Atualmente, estou trabalhando em projetos como freelancer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About