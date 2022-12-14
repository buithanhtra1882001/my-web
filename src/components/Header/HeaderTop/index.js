import React from 'react'
import SearchBox from './SearchBox'
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";

function HeaderTop() {
  return (
    <div className='headerTop'>
        <div className="logo">
          <h1>UITBook</h1>
        </div>
        <div>
          <SearchBox />
        </div>
      <div className='rightButtons'>
        <AiOutlineShoppingCart className='cartIcon'/>
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