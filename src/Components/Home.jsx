import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/**Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#00D1FF]'>Olá! Me chamo</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Vitor Ramalho Vilela</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Eu sou um desenvolvedor fullstack</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Seja bem vindo ao meu site! Aqui irei exibir minha experiência como desenvolvedor, tecnologias já utilizadas e alguns projetos já desenvolvidos.
        </p>
        <div>
          <a href="https://cv-vitor.s3.us-east-1.amazonaws.com/CV-vitorvilela.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXNhLWVhc3QtMSJGMEQCIHDP9og1AuNSkEJdEtaRdnf49V1QsyH%2FhDXxaw1TLaU8AiAJPsZW%2FR%2FTdrlZORWQiANtZh%2Bvrr6EKYIaGA1cXWSEDCrtAgjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDk0MDg1Nzc2OTg1NyIMipusrrCYVjVtUQ24KsECQ890V0IQE4Iy1kA0BFHOe%2BmiAxqC6eWb7WYaT5ddTDDPn4Op8GIkRfD7hNR%2B5vQVKXU%2BdG%2FMmIy844kkq4oQjx25AIiWMBIH1fFzAyIUKylw%2Bz0vmrvtpUd3LtuFV8nEhU1%2BTVo2WAom61uGrOrV1ZZ5akLaw160RGGydzVZbT2MAKtThcqVAMD7072hRtMZClrPZF9KHO%2FgjrOrzLhHcl48BWhg68UwVNf9SStt16i17oDgGb5t2g6ix17Q%2B9U1ez663wfTy6GT1NBGoo8LgLhDqw5UiKwSRZv8Qt0xNpfjv77FalI%2BV8jAWVbV8Q2wv%2BfVY4TRkq9UFQR310sc7rgZaxyKh7DoAm7gaSm2wjWkeTnwH3Klw3R8Uhwfn087GanWLWit6LaEm4KtE4Kl9%2FXEGngt8YrHR%2FwTXdwLOZ27MOmblZQGOrQC68dlVHCPgJqrM%2B4vv4mIhLaqEf2AdssNGD7uAInozVvO6apy46NwfgZ4eHK5altDSHDpN31eqa7bVfjunvK68vv%2BsmeAa%2FORJzLR4nJMXoXmhyJmXBYEOu7rZDNW5X3qULa6pHcKld%2FJnFypQVzCCncxuCzhBTFUA78T66HcLaPBk59M%2BBe4wC6ILAwgjyB3vzNsPoN6x0rtuEn9s3HmN99WL8eYc5sVm4dX1uht3Ax9FRcuu2gwZi0AAptzVgNQN882tK2WFhI1M%2BV5APMnZl4BMEac%2F2g3k3UntinQLAs2Q8a2uIoI2mAelkby%2Fe1goPczTy5ihFBh3EnnGRyHZWBOECKnMR%2FkX9RRLN3kHjWYxOYNLnCvRWq0x8EZrR25VhHOQVCHvPgmn0hj8fFw%2BI3fPjE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220518T225107Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5WD36H6A4IXMMB2D%2F20220518%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=32d6dc2abcfcba9e4a49ad25e9d9b15117c63e21942425aa5c96c983a0f3f2c9" target="_blank" rel="noreferrer">
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