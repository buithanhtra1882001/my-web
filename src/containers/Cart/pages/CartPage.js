import React from 'react'
import './CartPage.scss'

function CartPage() {
  return (
    <div className="cartContainer">
        <div className="leftContainer">
            <div className="top">
                <div className="path">
                    Giỏ hàng
                </div>
                <div>(2 sản phẩm)</div>
            </div>
            <div className="tableListProduct">
                <div className="tableHeader">
                    <div className="checkBox">
                        <input type="checkbox" id="cball"/>
                        <label htmlFor="cball">Chọn tất cả sản phẩm</label>
                    </div>  
                    <div className="quantity">
                        Số lượng
                    </div>
                    <div className="price">
                        Thành tiền
                    </div>
                    <div className="delete">
                        Xoá
                    </div>
                </div>
                <div className="tableBody">
                <div className="itemPrice">
                    <div className="checkBox">
                        <input type="checkbox" id="cbp1"/>
                        <label htmlFor="cbp1">

                        </label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbp2"/>
                        <label htmlFor="cbp2">

                        </label>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="rightContainer">
            <div className="checkout">

            </div>
        </div>
    </div>
  )
}

export default CartPage