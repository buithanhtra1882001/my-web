import React from 'react'
import './OrderPage.scss'
import harry from "../../../assets/images/books/sach_ban_chay/harry_potter.jpeg"
import start from "../../../assets/images/books/sach_ban_chay/start_wars.jpeg"


function OrderPage() {
  return (
    <div className="orderContainer">
        <div className="top">
            <div className="path">ĐẶT HÀNG</div>
        </div>
        <div className="container">
            <div className="leftContainer">
                <div className="deliveryAddress">
                    <span className="title">ĐỊA CHỈ GIAO HÀNG</span>
                    <div className="address">
                        <span>Họ và tên người nhận</span>
                        <input type="text" placeholder="Nhập họ và tên người nhận"/>
                    </div>
                    <div className="address">
                        <span>Email</span>
                        <input type="email" placeholder="Nhập email người nhận"/>
                    </div>
                    <div className="address">
                        <span>Số điện thoại</span>
                        <input type="number" placeholder="VD: 0339876xxx (10 số)"/>
                    </div>
                    <div className="address">
                        <span>Tỉnh / Thành phố</span>
                        <input type="text" placeholder="Nhập tỉnh / thành phố"/>
                    </div>
                    <div className="address">
                        <span>Quận / Huyện</span>
                        <input type="text" placeholder="Nhập quận / huyện"/>
                    </div>
                    <div className="address">
                        <span>Phường / Xã</span>
                        <input type="text" placeholder="Nhập phường / xã"/>
                    </div>
                    <div className="address">
                        <span>Địa chỉ nhận hàng</span>
                        <input type="text" placeholder="Nhập Địa chỉ nhật hàng"/>
                    </div>
                    <div className="address">
                        <span>Ghi chú</span>
                        <input type="text" placeholder="Ghi chú về đơn hàng"/>
                    </div>
                    <button className="orderButton">Đặt hàng</button>
                </div>
                <div className="paymentMethods">
                    <span className="title">PHƯƠNG THỨC THANH TOÁN</span>
                    <div className="checkBox">
                        <input type="radio" name="cbp1"/>
                        <img src="https://s3-alpha-sig.figma.com/img/8b63/7d50/1c0f4249dd4c84ca827e6ac941b51408?Expires=1676246400&Signature=ETOQaPi6XpyjQzpWDUnX5ckKdVYygAjfNOtDvucsXGiA4cbHfvBOdmz6eEaJeH3acbYaBnqM39KzI57bkYYn6rj34ZFkuG2xlJPwWfmY7lVS4x5AVMfsouDFByhjwtAGm2F7RlJyh8oUYTgakxZ7xWtMioslbLIx4b~NiKDVSyaLsxOF5J0w-oUqBGhGEdLXce1~8H7LlEILvy~zzAkmfUELdKbkHmEZZJb0E~T9UaOODnophppClRRg2YQn~-7GI7uZwjZhLPXOHMi0P91Sb9kas3Bvob9vMMvrQu8XTb39wkx7zWSY5M6cLK59RZsh9NcafN5vJPjRwi3RqrGfRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <span>Ví ZaloPay</span>
                    </div>
                    <div className="checkBox">
                        <input type="radio" name="cbp1"/>
                        <img src="https://s3-alpha-sig.figma.com/img/1abe/b0a3/912ab0a3e906d635373be717997f8a1d?Expires=1676246400&Signature=a0yAY0fD2vxo-UKuL8kC~OvCXL4ZUeQ-p3xSom59mu2s1x3lR-EQvzAkj0IDEenw6J1T~YZIV45fnieX6COK~kag50Cvao~Ndl8YPgZHt-iV7e4rKVVpEXTqgWbodE5Z0efsCFqjjZkRSv~gwkTsemGv9R3Mj1-jevr2OCpLjhbbigFVvybM-UBR7mXATABp-CeBBHzwJlwrhLTfcH2Dm-9wBgocAY4Gya~ztCofpcciMAZdVEr1uaCD7j9azPyNEjeebWjmHxyIeBw0uz4rsZucH~dc5pzqnYS1qdFGswv6-mH0HXuXwrSraMblZE0gHU-y4-7bG~hGPr6sGciI0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <span>Thanh toán bằng tiền mặt khi nhận hàng</span>
                    </div>
                </div>
            </div>
            <div className="rightContainer">
                <div className="checkout">
                    <span>CHI TIẾT ĐƠN HÀNG</span>
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
                                <div>2</div>
                            </div>
                        </div>
                    </div>  
                    <hr />
                    <div className="cartItem">
                        <img src={start} alt="1" /> 
                        <div className="cartInfo">
                            <span>Star Wars: Light of the Jedi</span>
                            <div className="type-bottom">
                            <span>190 đ</span>
                            {/* <div className="discout">300,000 đ</div> */}
                            </div>
                            <div className="quantity">
                                <span>Số lượng:</span>
                                <div>1</div>
                            </div>
                        </div>
                    </div>  
                    <hr />
                    <div className="total">
                        <span>Tổng tiền:</span>
                        <span>810,000 đ</span>
                    </div>
                    <div className="total">
                        <span>Phí vận chuyển:</span>
                        <span>15,000 đ</span>
                    </div>
                    <div className="total">
                        <span>Thanh toán:</span>
                        <span>825,000 đ</span>
                    </div>
                    <button className="checkout-btn" >
                     Chỉnh sửa đơn hàng
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderPage