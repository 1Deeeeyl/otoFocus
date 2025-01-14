import React from 'react'
import Navigation from '../navigation/Navigation'
import logo from '../../../public/images/logo/black logo.png'
import logoMobile from '../../../public/images/logo/oflogo.png'

function Header() {
  return (
    <header className=' flex flex-row justify-between items-center pb-[100px]'>
        <img src={logo.src.toString()} alt="" className='h-[30px] hidden xl:inline-block'/>
        <img src={logoMobile.src.toString()} alt="" className='h-[70px] xl:hidden'/>
      <Navigation/>
    </header>
  )
}

export default Header
