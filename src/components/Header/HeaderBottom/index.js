import React from 'react';
import { BsList } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

function HeaderBottom() {
  return (
    <div className='headerBottom'>
      <div className="listProducts">
        <BsList className="iconList" />
        <div className='listProductsText'> DANH MỤC SẢN PHẨM</div>
        <AiOutlineDown />
      </div>
      <div className="hotline">
        Hotline: 0339876802 
      </div>
    </div>
  )
}

export default HeaderBottom