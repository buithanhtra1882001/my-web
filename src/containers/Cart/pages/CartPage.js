import React, { useState } from 'react'
import './CartPage.scss'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md';
import harry from "../../../assets/images/books/sach_ban_chay/harry_potter.jpeg"
import start from "../../../assets/images/books/sach_ban_chay/start_wars.jpeg"
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()

  const handlePlusQuantity = () => {
    if (quantity === 9) return;
    setQuantity((pre) => pre + 1);
  };

  const handleMinusQuantity = () => {
    if (quantity === 1) return;
    setQuantity((pre) => pre - 1);
  };

  function Navigation () {
    navigate(`/order`)
  }
  return (
    <>
      <div className="top">
        <div className="path">
          Giỏ hàng
        </div>
        <div>(2 sản phẩm)</div>
      </div>
      <div className="cartContainer">
        <div className="leftContainer">
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
                {/* Item1 */}
                <div className="item">
                  <div className="checkBox">
                    <input type="checkbox" id="cbp1"/>
                    <label htmlFor="cbp1"></label>
                     <div className="cartItem">
                          <img src={harry} alt="1" /> 
                          <div className="cartInfo">
                            <span>Harry Potter và chiếc cốc lửa</span>
                            <div className="type-bottom">
                              <span>310 đ</span>
                              {/* <div className="discout">300,000 đ</div> */}
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="quantity">
                    <div className="quantityNumber">
                      <AiOutlineMinus
                        className="button"
                        onClick={handleMinusQuantity}
                      />
                      <span>{quantity}</span>
                      <AiOutlinePlus
                        className="button"
                        onClick={handlePlusQuantity}
                      />
                    </div>
                  </div>
                  <div>
                    {310*quantity},000 đ
                  </div>
                  <MdDeleteForever className="delete"/>
                </div>
                <hr/>
                {/* Item2 */}
                <div className="item">
                  <div className="checkBox">
                    <input type="checkbox" id="cbp2"/>
                    <label htmlFor="cbp2"> 
                    </label>
                     <div className="cartItem">
                          <img src={start} alt="1" /> 
                          <div className="cartInfo">
                            <span>Star Wars: Light of the Jedi</span>
                            <div className="type-bottom">
                              <span>190 đ</span>
                              {/* <div className="discout">300,000 đ</div> */}
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="quantity">
                    <div className="quantityNumber">
                      <AiOutlineMinus
                        className="button"
                        onClick={handleMinusQuantity}
                      />
                      <span>1</span>
                      <AiOutlinePlus
                        className="button"
                        onClick={handlePlusQuantity}
                      />
                    </div>
                  </div>
                  <div>
                    190,000 đ
                  </div>
                  <MdDeleteForever className="delete"/>
                </div>
              </div>
            </div>
          </div>
        <div className="rightContainer">
            <div className="checkout">
                <span>Thông tin đơn hàng</span>
                <hr />
                <div className="cartItem">
                  <img src={harry} alt="1" /> 
                  <div className="cartInfo">
                    <span>Harry Potter và chiếc cốc lửa</span>
                    <div className="type-bottom">
                      <span>310 đ</span>
                      {/* <div className="discout">300,000 đ</div> */}
                    </div>
                      <div className="quantity">
                        <span>Số lượng:</span>
                        <div>{quantity}</div>
                      </div>
                  </div>
                </div>
                <hr />
                <div className="total">
                  <span>Tổng cộng</span>
                  <span>{310*quantity},000 đ</span>
                </div>
                <button className="checkout-btn" onClick={() => Navigation()}>
                  Thanh Toán
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default CartPage