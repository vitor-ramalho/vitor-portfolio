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
            <p>Desde sempre ligado a tecnologia e curioso a respeito de todos os assuntos que a abrangem. Iniciei minha carreira na área trabalhando como suporte na prefeitura da minha cidade, Confins-MG, e sempre fui apaixonado por resolver problemas e auxiliar outras pessoas nessa resolução. Era responsável por toda gerência de redes do município. <br/> Depois disso, encontrei minha vocação nos primeiros contatos com Javascript, desde então tive como foco iniciar na carreira de desenvolvedor, comecei a fazer vários projetos de estudo e oferecer sites para amigos e conhecidos, até que consegui uma vaga de Analista de Sistemas. O sistema da empresa era uma API REST para emissão de nota fiscal com modelo B2B e minha responsabilidade era auxiliar os clientes na utilização e integração com esse sistema. Fiquei nessa empresa por dois anos e atualmente estou trabalhando como estagiário em desenvolvimento full stack, utilizando as tecnologias NodeJs, React e MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About