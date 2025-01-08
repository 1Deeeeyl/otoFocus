import React from 'react'
import Navigation from '../navigation/Navigation'
import logo from '../../../public/images/logo/black logo.png'

function Header() {
  return (
    <header className='pt-[100px] flex flex-row justify-between items-center pb-[100px]'>
        <img src={logo.src.toString()} alt="" className='h-[30px]'/>
      <Navigation/>
    </header>
  )
}

export default Header
