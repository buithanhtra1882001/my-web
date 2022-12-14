import React from 'react';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import './index.scss';
import  newBook1  from '../../../assets/images/newBook1.jpeg';
import  slideimg  from '../../../assets/images/slideimg.jpeg';
import { AiOutlineRight, AiFillRightCircle, AiOutlineLeft, AiFillLeftCircle } from "react-icons/ai";
import Slider from '../../../components/Slider';

function HomeBody() {
  return (
    <div className='homeBody'>
      <div className="bodyHeader">
        <div className="category">

        </div>
        <div className="slider">
          <Slider />
          {/* <img src={slideimg} alt="1" /> */}
        </div>
      </div>
      <div className="bodyProduct">
        <div className="bodyProductLeft">
          <div className="newBook">
                <div className="top">
                  <div className="topText">Sách Mới</div>
                  <div className="seeMore">
                    <p>Xem thêm</p> 
                    <AiOutlineRight/>
                  </div>
                </div>
              <div className="products">
                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Rabbed Cardigan</a>
                        <span>
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                        </span>
                      </div>
                      <MdOutlineAddShoppingCart />
                    </div>
                </div>

                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Rabbed Cardigan</a>
                        <span>
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                        </span>
                      </div>
                      <MdOutlineAddShoppingCart />
                    </div>
                </div>

                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Rabbed Cardigan</a>
                        <span>
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                        </span>
                      </div>
                      <MdOutlineAddShoppingCart />
                    </div>
                </div>

                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Rabbed Cardigan</a>
                        <span>
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                        </span>
                      </div>
                      <MdOutlineAddShoppingCart />
                    </div>
                </div>
              
              </div>
          </div>
          <div className="bestSeller">
            <div className="top">
                <div className="topText">Sách Bán Chạy</div>
                <div className="seeMore">
                  <p>Xem thêm</p> 
                  <AiOutlineRight/>
                </div>
              </div>
              <div className="products">
                
              </div>
          </div>
        </div>
        <div className="bodyProductRight">
          <div className="title">Sách bán chạy trong tuần</div>
          <div className="bestSellerWeek">
            abc
          </div>
        </div>
     </div>
    </div>
  )
}

export default HomeBody