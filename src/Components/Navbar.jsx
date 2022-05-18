import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../Assets/Logo.svg';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '150px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/vitorrvilela/'
              target="_blank" rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/vitor-ramalho'
              target="_blank" rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:vitorramalhodev@gmail.com'
              target="_blank" rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              target="_blank" rel="noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://cv-vitor.s3.us-east-1.amazonaws.com/CV-vitorvilela.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXNhLWVhc3QtMSJGMEQCIHDP9og1AuNSkEJdEtaRdnf49V1QsyH%2FhDXxaw1TLaU8AiAJPsZW%2FR%2FTdrlZORWQiANtZh%2Bvrr6EKYIaGA1cXWSEDCrtAgjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDk0MDg1Nzc2OTg1NyIMipusrrCYVjVtUQ24KsECQ890V0IQE4Iy1kA0BFHOe%2BmiAxqC6eWb7WYaT5ddTDDPn4Op8GIkRfD7hNR%2B5vQVKXU%2BdG%2FMmIy844kkq4oQjx25AIiWMBIH1fFzAyIUKylw%2Bz0vmrvtpUd3LtuFV8nEhU1%2BTVo2WAom61uGrOrV1ZZ5akLaw160RGGydzVZbT2MAKtThcqVAMD7072hRtMZClrPZF9KHO%2FgjrOrzLhHcl48BWhg68UwVNf9SStt16i17oDgGb5t2g6ix17Q%2B9U1ez663wfTy6GT1NBGoo8LgLhDqw5UiKwSRZv8Qt0xNpfjv77FalI%2BV8jAWVbV8Q2wv%2BfVY4TRkq9UFQR310sc7rgZaxyKh7DoAm7gaSm2wjWkeTnwH3Klw3R8Uhwfn087GanWLWit6LaEm4KtE4Kl9%2FXEGngt8YrHR%2FwTXdwLOZ27MOmblZQGOrQC68dlVHCPgJqrM%2B4vv4mIhLaqEf2AdssNGD7uAInozVvO6apy46NwfgZ4eHK5altDSHDpN31eqa7bVfjunvK68vv%2BsmeAa%2FORJzLR4nJMXoXmhyJmXBYEOu7rZDNW5X3qULa6pHcKld%2FJnFypQVzCCncxuCzhBTFUA78T66HcLaPBk59M%2BBe4wC6ILAwgjyB3vzNsPoN6x0rtuEn9s3HmN99WL8eYc5sVm4dX1uht3Ax9FRcuu2gwZi0AAptzVgNQN882tK2WFhI1M%2BV5APMnZl4BMEac%2F2g3k3UntinQLAs2Q8a2uIoI2mAelkby%2Fe1goPczTy5ihFBh3EnnGRyHZWBOECKnMR%2FkX9RRLN3kHjWYxOYNLnCvRWq0x8EZrR25VhHOQVCHvPgmn0hj8fFw%2BI3fPjE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220518T195837Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5WD36H6A4IXMMB2D%2F20220518%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=31a76a4739672485c36bfbb6f5581d925fce370f510e89a9fb579c8dd3db08f7'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
