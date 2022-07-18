import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form  className='flex flex-col max-w-[600px] w-full' action="https://getform.io/f/dffe3b5d-0fc0-4029-9022-d572c5f0ffac">
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#00D1FF] text-gray-300'>
            Contato
          </p>
          <p className='text-gray-300 py-4'>//Gostou do meu perfil ? Vamos trabalhar juntos, me envie um e-mail!</p>
        </div>
        <input className='bg-[#ccd6f6] py-4' type="text" placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name="name" />
        <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10" />
        <button className='text-white border-2 hover:bg-[#00D1FF] hover:border-[#00D1FF] px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact