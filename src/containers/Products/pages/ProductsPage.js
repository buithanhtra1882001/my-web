import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { listCategory } from '../../Home/HomeBody/data';
import './ProductsPage.scss'

function ProductsPage() {
  return (
    <div className="productContainer">
        <div className="leftContainer">
            <div className="path">
                <div className="pathHome">
                   Trang chủ
                </div>
                /
                <div className="pathProduct">
                    Sản phẩm 
                </div>
            </div>
            <div className="category">
                <div className="title">
                    Danh mục
                </div>
            {listCategory.map((item) => {
                return <div className="itemCategory">
                    {item}
                </div>
            })}
            </div>
            <div className="price">
                <div className="title">
                    Giá
                </div>
                <div className="itemPrice">
                    <div className="checkBox">
                        <input type="checkbox" id="cbp1"/>
                        <label htmlFor="cbp1"> 0 đ - 150,000 đ</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbp2"/>
                        <label htmlFor="cbp2"> 150,000 đ - 300,000 đ</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbp3"/>
                        <label htmlFor="cbp3"> 300,000 đ - 500,000 đ</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbp4"/>
                        <label htmlFor="cbp4"> 500,000 đ - 700,000 đ</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbp5"/>
                        <label htmlFor="cbp5"> 700,000 đ - 1,000,000 đ</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbp6"/>
                        <label htmlFor="cbp6"> Trên 1,000,000 đ</label>
                    </div>
                </div>
            </div>
            <div className="age">
                <div className="title">
                    Độ tuổi
                </div>
                <div className="itemAge">
                    <div className="checkBox">
                        <input type="checkbox" id="cba1"/>
                        <label htmlFor="cba1">Dưới 15 tuổi</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cba2"/>
                        <label htmlFor="cba2">15 tuổi - 18 tuổi</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cba3"/>
                        <label htmlFor="cba3">16 +</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cba4"/>
                        <label htmlFor="cba4">18 +</label>
                    </div>
                </div>
            </div>
            <div className="type">
                <div className="title">
                    Thể loại
                </div>
                <div className="itemType">
                    <div className="checkBox">
                        <input type="checkbox" id="cbt1"/>
                        <label htmlFor="cbt1">Drama</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbt2"/>
                        <label htmlFor="cbt2">Shounen</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbt3"/>
                        <label htmlFor="cbt3">Comedy</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbt4"/>
                        <label htmlFor="cbt4">Action</label>
                    </div>
                    <div className="checkBox">
                        <input type="checkbox" id="cbt5"/>
                        <label htmlFor="cbt5">Fantasy</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="rightContainer">
            <div className="top">
                <div className="arrange">
                    Sắp xếp theo: 
                </div>
                <div className="arrangeButton">
                    Mới nhất
                </div>
            </div>
            <div className="products">

               {/* Item 1 */}
               <div className="box">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/8f10/b80a/faa54fffec71379d550224118b5ca03e?Expires=1672617600&Signature=QYIe3i2nvDzikYJmg~TwgUADGlofkCQa9Ga7WE9u3JIpgrBcDNaCVRDXAFehq68aM6Ch8SqBusZI~kf8h8VhMYbwRf1CgAs8BUl5RN3Gq6luqHNMOPaN~qphqbf1JE1K6E4H0263aU0TejNC0H7D9iKrN-qGOH17gAv~Fxqzk~qNPax8GcgsWisQnxMIoiUmio4y7o7LaquVxFTnd~gtkS8IegzjQmF~FxaR5oSyBNJmUamFY3kc1focFbnD28J1VMb3CY60lln~P4KqIKA3rrZkHRb4HaO1UNS4y-0EL~U1qZ-O-YMSqC2rIALPVK9iI3biT0P6F22Lz9XUEEJNww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Harry Potter và chiếc cốc lửa</a>
                        <span>
                          <a href="#" className="price">
                          240,000 đ
                          </a>
                        </span>
                      </div>
                      <MdOutlineAddShoppingCart />
                    </div>
                </div>

                {/* Item 2 */}
               <div className="box">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/1297/fbe8/fe09047a599742ea9b341ec39992826a?Expires=1672617600&Signature=AseeSbmhp0gcTl2LIJdK-RqK8--yd-ER~wtQcRF4DJovfHIMme~BvTY5L6XEIGMFXqGMRWk1qzFHtE9Eb9214ruummkDrtAgqUcf-FizHf~Da9lLX1lXZn2GS1KMVw3b2EuUIfLUhE5-g-5KS8xapFQ~q1ysq7vLzyQ0TT3VoS3OoYNmsR-yB9sI-zSFyi-JhCERq3cvTeprBpWBSqy2eQpqTG~h0z7B6wl~hB9FU5-9Y3OJPB4i~toQjLxhkKeE~tBUOlZkIfvr85jqjIrocy2IW9Qj3O9KmtEYp9E4zPXORndowDMLzJKuNW~zZNJSU8nMGn~eudy4ojuF33HiAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Harry Potter và bảo bối tử thần</a>
                        <span>
                          <a href="#" className="price">
                          300,000 đ
                          </a>
                        </span>
                      </div>
                      <MdOutlineAddShoppingCart />
                    </div>
                </div>

                {/* Item 3 */}
               <div className="box">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/220f/4ee5/eede8a8d5b9710486f354a58ce85ee6f?Expires=1672617600&Signature=k0sVOefyivc5YaehVTzKVijfClFeC7wSScxDSvFPVv67VYBq1MaqXIE2XJqJHGE2NPA1D3ywXP~dCZSjJ67wa1COwTrowoyaO5pNZKCRyfiwGZY2yjv~xKMRsbGnO28oCBeGy1vTyK5ZLj6rM-UurG1mrSRdsCs8zZbHxEKd1HMAUxJSw6JMcWrc91QYq6i4u9A9yh35zupCm977l1zEq~00gVOzZWjXrKxa-e9KYtZfLKkv3el1Kyd7SxKGsMHJCzNRe0xl-e3FwbqMYHnXQp8MlOMSOBwRHtSZUIcjwWlTa~kB0odMDRHv50VsQTA6xXd4Up33wIjaV2wKYHtjaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Star War</a>
                        <span>
                          <a href="#" className="price">
                          190,000 đ
                          </a>
                        </span>
                      </div>
                      <MdOutlineAddShoppingCart />
                    </div>
                </div>

                {/* Item 4 */}
               <div className="box">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/166d/23a0/e9f3dc24b14b2ef21dd2ad4486cbac95?Expires=1672617600&Signature=CpZIXUy46ZVK36iMOFSE8cT1F1IIj2OWPje7uYeFUUDjMoEaKEDVwfUwVfZR9iZwpCJjK4ZayiN7UMM~wTixrxti1gHlLPGBfmZ9EuYxQuzCyTk3961JshiCnSK2cf2-zg-tuBLc28EkQ4S3i8n6~j2lzqlBywQYJGfe6DOSc52iXNBVdnvOAt2NC~y-y~HxdkoXWzw0vEqXzmiCmiiptMWv71BqgzYHrf0VRl~OP3iXTv3pfslYtN1zIH80WIqKV6osDbpoHd~i28Bi0mB9VSFgm~i4wyU635-hi26N2eg6QaxrDjlNV~Ed-mR~flUSCGkV9fCcJLTi8MlHbjCGqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Milk and honey</a>
                        <span>
                          <a href="#" className="price">
                          90,000 đ
                          </a>
                        </span>
                      </div>
                      <MdOutlineAddShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsPage