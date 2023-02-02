import React from 'react'
import SearchBox from './SearchBox'
import {Link, useNavigate} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import logoUIT from "../../../assets/images/logo.png"

function HeaderTop() {
  const navigate = useNavigate()
  function Navigation () {
    navigate(`/cart`)
  }
  return (
    <div className='headerTop'>
        <div className="logo">
          <Link to='/'>
            <img src={logoUIT} alt="" />
          </Link> 
        </div>
        <div>
          <SearchBox />
        </div>
      <div className='rightButtons'>
        <AiOutlineShoppingCart className='cartIcon' onClick={() => Navigation()}/>
        <button >
          <Link to='/login'>Đăng nhập</Link> 
        </button>
        <button>
          <Link to='/register'>Đăng ký</Link> 
        </button>
      </div>
    </div>
  )
}

export default HeaderTop