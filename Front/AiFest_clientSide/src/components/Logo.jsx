import React from 'react'
import LogoImg from '/Aifestlogo.png.png'


const Logo = ({size}) => {
  return (
      <div className={ `${size === 'big' ? 'w-full max-w-[230px] md:max-w-[250px] xl:w-[400px]' : 'w-[100px] xl:w-[150px]'}`}>
        <img src={LogoImg} alt="" />
      </div>
  )
}

export default Logo