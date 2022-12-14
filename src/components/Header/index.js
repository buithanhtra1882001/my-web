import React from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'
import '../../assets/styles/Header.scss'

function Header() {
  return (
    <div className='header'>
      <nav>
        <HeaderTop />
        <HeaderBottom />
      </nav>
    </div>
  )
}

export default Header