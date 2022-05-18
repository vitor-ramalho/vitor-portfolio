import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Olá. Eu sou o Vitor, prazer em conhecê-lo. Por favor, fique a vontade.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laboriosam, fuga labore sunt praesentium, ipsum beatae sint ducimus nostrum laborum iusto corporis accusantium at. Repudiandae rerum nam mollitia maiores officia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur recusandae voluptas quidem eligendi vitae iure autem hic quam quos. Doloremque obcaecati esse illo natus eius. Rem est aperiam velit libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About