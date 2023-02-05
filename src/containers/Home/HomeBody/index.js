import React from 'react';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import './index.scss';
import  newBook1  from '../../../assets/images/newBook1.jpeg';
import  slideimg  from '../../../assets/images/slideimg.jpeg';
import { AiOutlineRight, AiFillRightCircle, AiOutlineLeft, AiFillLeftCircle, AiFillHome } from "react-icons/ai";
import Slider from '../../../components/Slider';
import { listCategory } from './data';
import { listNewBook } from '../../../assets/js/newBookData';
import { listBestSeller } from '../../../assets/js/bestSellerData';
import { listBestSellerInWeek } from '../../../assets/js/bestSellerInWeek';
import ListCategories from '../../../assets/js/listCategories';
import SliderMobile from '../../../components/SliderMobile';
import SliderTablet from '../../../components/SliderTablet';
import { BiCategory } from 'react-icons/bi';
import { BsCartPlusFill, BsPersonCircle } from 'react-icons/bs';

function HomeBody() {
  return (
    <div className='homeBody'>
      <div className="bodyHeader">
        <div className="category">
          <ListCategories />
        </div>
        <div className="slider">
          <Slider />
        </div>
        <div className="sliderMobile">
          <SliderMobile />
        </div>
        <div className="sliderTablet">
          <SliderTablet />
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
                {listNewBook.map((item) => {
                  return  <div>{item}</div>
                })}
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
                {listBestSeller.map((item) => {
                  return  <div>{item}</div>
                })}
              </div>
          </div>
        </div>
        <div className="bodyProductRight">
          <div className="title">Sách bán chạy trong tuần</div>
          <div className="bestSellerWeek">
            {listBestSellerInWeek.map((item) => {
                  return  <div>{item}</div>
            })}
          </div>
        </div>
     </div>
     
    </div>
  )
}

export default HomeBody