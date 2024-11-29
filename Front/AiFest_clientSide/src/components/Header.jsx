import React from 'react'
import Logo from '../components/Logo'

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='text-white'>
      <Link> 
          <Logo/>
      </Link>
    </div>
  )
}

export default Header