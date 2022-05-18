import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method="POST" className='flex flex-col max-w-[600px] w-full' action="https://getform.io/f/dffe3b5d-0fc0-4029-9022-d572c5f0ffac">
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>//Submit the form bellow or shoot me an email - vitorramalhodev@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] py-4' type="text" placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name="name" />
        <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10" />
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact