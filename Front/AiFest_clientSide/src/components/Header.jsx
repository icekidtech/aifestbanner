import React from 'react'
import Logo from '../components/Logo'
import { FaFacebookF,FaTwitter, FaInstagram } from "react-icons/fa"

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='text-white flex justify-around h-[100px] min-w-[100%] mt-[30px] gap-10 mx-0'>
      <Link> 
          <Logo/>
      </Link>
      <div className='flex gap-2'>
        <FaFacebookF/>
        <FaInstagram/>
        <FaTwitter/>
        <p>aifestafrica</p>
      </div>
      
    </div>
  )
}

export default Header