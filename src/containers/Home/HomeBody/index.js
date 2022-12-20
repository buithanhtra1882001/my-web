import React from 'react';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import './index.scss';
import  newBook1  from '../../../assets/images/newBook1.jpeg';
import  slideimg  from '../../../assets/images/slideimg.jpeg';
import { AiOutlineRight, AiFillRightCircle, AiOutlineLeft, AiFillLeftCircle } from "react-icons/ai";
import Slider from '../../../components/Slider';
import { listCategory } from './data';

function HomeBody() {
  return (
    <div className='homeBody'>
      <div className="bodyHeader">
        <div className="category">
          {listCategory.map((item) => {
            return <div className="itemCategory">
              {item}
            </div>
          })}
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
                {/* Item 1 */}
                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="detail-top">
                        <div className="type">
                          <a href="#">Rabbed Cardigan</a>
                          <span>
                            <a href="#" className="price">
                            200,000 đ
                            </a>
                          </span>
                        </div>
                        <div className="discout">40%</div>
                      </div>
                      <div className="sold">
                        <p>Đã bán 2</p>
                        <div className="sold-btn"></div>
                      </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="detail-top">
                        <div className="type">
                          <a href="#">Rabbed Cardigan</a>
                          <span>
                            <a href="#" className="price">
                            200,000 đ
                            </a>
                          </span>
                        </div>
                        <div className="discout">40%</div>
                      </div>
                      <div className="sold">
                        <p>Đã bán 2</p>
                        <div className="sold-btn"></div>
                      </div>
                    </div>
                </div>

                {/* Item 3  */}
                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="detail-top">
                        <div className="type">
                          <a href="#">Rabbed Cardigan</a>
                          <span>
                            <a href="#" className="price">
                            200,000 đ
                            </a>
                          </span>
                        </div>
                        <div className="discout">40%</div>
                      </div>
                      <div className="sold">
                        <p>Đã bán 2</p>
                        <div className="sold-btn"></div>
                      </div>
                    </div>
                </div> 

                {/* Item 4 */}
                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="detail-top">
                        <div className="type">
                          <a href="#">Rabbed Cardigan</a>
                          <span>
                            <a href="#" className="price">
                            200,000 đ
                            </a>
                          </span>
                        </div>
                        <div className="discout">40%</div>
                      </div>
                      <div className="sold">
                        <p>Đã bán 2</p>
                        <div className="sold-btn"></div>
                      </div>
                    </div>
                </div>
              
                {/* Item 5 */}
                <div className="box">
                    <div className="slide-img">
                      <img src={newBook1} alt="1" />
                      <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="detail-top">
                        <div className="type">
                          <a href="#">Rabbed Cardigan</a>
                          <span>
                            <a href="#" className="price">
                            200,000 đ
                            </a>
                          </span>
                        </div>
                        <div className="discout">40%</div>
                      </div>
                      <div className="sold">
                        <p>Đã bán 2</p>
                        <div className="sold-btn"></div>
                      </div>
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
                {/* Item 1 */}
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

                {/* Item 2 */}
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

                {/* Item 3 */}
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

                {/* Item 4 */}
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
              <div className="products">
                {/* Item 1 */}
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

                {/* Item 2 */}
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

                {/* Item 3 */}
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

                {/* Item 4 */}
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
        </div>
        <div className="bodyProductRight">
          <div className="title">Sách bán chạy trong tuần</div>
          <div className="bestSellerWeek">
             {/* Item 1 */}
                <div className="box">
                  <div className="box-btn">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/face/55b0/77ab308b09cc93c83356df51bbc28b7b?Expires=1672617600&Signature=jAHVLtZu2mR-dGk4qSviQ6WkVRdyRUDR7TS0Qf1ayjxqi9RhiGJP7YCNzQGnBHlrV62Jw8ijOExbGkDnCOFBMDKl2BN0gVimx1ovCGltTZ5rM36AVeavtHbQ0eUugxfQ1T1sKRq6shBAx3zA9nKTJf5IKAH1g8FSJeip1lAnpoDfxuoGgUzwvGcIHjsoQbme5IC~-7zOlA8SQPMyTvHIhnaunT7taa63T39tYIFvWy-tWeE~HAUXIUt80oBR0IUezAEKyM2pocq6HxcjrMpnnsiHziVrckmMWSZgfqkoBJFgI7AaXTH4a6u31bobsulYtdfabbS2JLkr0XRkwPM0Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" /> 
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Hôm Nay Tôi Học Cách Yêu Thương Chính Mình</a>
                        <p>Jeong Youngwook</p>
                        <div className="type-bottom">
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                          <div className="discout">33%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                    </div>
                </div>

             {/* Item 2 */}
                <div className="box">
                  <div className="box-btn">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/face/55b0/77ab308b09cc93c83356df51bbc28b7b?Expires=1672617600&Signature=jAHVLtZu2mR-dGk4qSviQ6WkVRdyRUDR7TS0Qf1ayjxqi9RhiGJP7YCNzQGnBHlrV62Jw8ijOExbGkDnCOFBMDKl2BN0gVimx1ovCGltTZ5rM36AVeavtHbQ0eUugxfQ1T1sKRq6shBAx3zA9nKTJf5IKAH1g8FSJeip1lAnpoDfxuoGgUzwvGcIHjsoQbme5IC~-7zOlA8SQPMyTvHIhnaunT7taa63T39tYIFvWy-tWeE~HAUXIUt80oBR0IUezAEKyM2pocq6HxcjrMpnnsiHziVrckmMWSZgfqkoBJFgI7AaXTH4a6u31bobsulYtdfabbS2JLkr0XRkwPM0Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" /> 
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Hôm Nay Tôi Học Cách Yêu Thương Chính Mình</a>
                        <p>Jeong Youngwook</p>
                        <div className="type-bottom">
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                          <div className="discout">33%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                    </div>
                </div>

             {/* Item 3 */}
                <div className="box">
                  <div className="box-btn">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/face/55b0/77ab308b09cc93c83356df51bbc28b7b?Expires=1672617600&Signature=jAHVLtZu2mR-dGk4qSviQ6WkVRdyRUDR7TS0Qf1ayjxqi9RhiGJP7YCNzQGnBHlrV62Jw8ijOExbGkDnCOFBMDKl2BN0gVimx1ovCGltTZ5rM36AVeavtHbQ0eUugxfQ1T1sKRq6shBAx3zA9nKTJf5IKAH1g8FSJeip1lAnpoDfxuoGgUzwvGcIHjsoQbme5IC~-7zOlA8SQPMyTvHIhnaunT7taa63T39tYIFvWy-tWeE~HAUXIUt80oBR0IUezAEKyM2pocq6HxcjrMpnnsiHziVrckmMWSZgfqkoBJFgI7AaXTH4a6u31bobsulYtdfabbS2JLkr0XRkwPM0Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" /> 
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Hôm Nay Tôi Học Cách Yêu Thương Chính Mình</a>
                        <p>Jeong Youngwook</p>
                        <div className="type-bottom">
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                          <div className="discout">33%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                        <a href="#" className="buy-btn">Mua Ngay</a>
                        <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                    </div>
                </div>

             {/* Item 4 */}
                <div className="box">
                  <div className="box-btn">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/face/55b0/77ab308b09cc93c83356df51bbc28b7b?Expires=1672617600&Signature=jAHVLtZu2mR-dGk4qSviQ6WkVRdyRUDR7TS0Qf1ayjxqi9RhiGJP7YCNzQGnBHlrV62Jw8ijOExbGkDnCOFBMDKl2BN0gVimx1ovCGltTZ5rM36AVeavtHbQ0eUugxfQ1T1sKRq6shBAx3zA9nKTJf5IKAH1g8FSJeip1lAnpoDfxuoGgUzwvGcIHjsoQbme5IC~-7zOlA8SQPMyTvHIhnaunT7taa63T39tYIFvWy-tWeE~HAUXIUt80oBR0IUezAEKyM2pocq6HxcjrMpnnsiHziVrckmMWSZgfqkoBJFgI7AaXTH4a6u31bobsulYtdfabbS2JLkr0XRkwPM0Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" /> 
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Hôm Nay Tôi Học Cách Yêu Thương Chính Mình</a>
                        <p>Jeong Youngwook</p>
                        <div className="type-bottom">
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                          <div className="discout">33%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                      <a href="#" className="buy-btn">Mua Ngay</a>
                      <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                  </div>
                </div>

              {/* Item 5 */}
                <div className="box">
                  <div className="box-btn">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/face/55b0/77ab308b09cc93c83356df51bbc28b7b?Expires=1672617600&Signature=jAHVLtZu2mR-dGk4qSviQ6WkVRdyRUDR7TS0Qf1ayjxqi9RhiGJP7YCNzQGnBHlrV62Jw8ijOExbGkDnCOFBMDKl2BN0gVimx1ovCGltTZ5rM36AVeavtHbQ0eUugxfQ1T1sKRq6shBAx3zA9nKTJf5IKAH1g8FSJeip1lAnpoDfxuoGgUzwvGcIHjsoQbme5IC~-7zOlA8SQPMyTvHIhnaunT7taa63T39tYIFvWy-tWeE~HAUXIUt80oBR0IUezAEKyM2pocq6HxcjrMpnnsiHziVrckmMWSZgfqkoBJFgI7AaXTH4a6u31bobsulYtdfabbS2JLkr0XRkwPM0Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" /> 
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Hôm Nay Tôi Học Cách Yêu Thương Chính Mình</a>
                        <p>Jeong Youngwook</p>
                        <div className="type-bottom">
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                          <div className="discout">33%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                      <a href="#" className="buy-btn">Mua Ngay</a>
                      <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                  </div>
                </div>

              {/* Item 6 */}
              <div className="box">
                  <div className="box-btn">
                    <div className="slide-img">
                      <img src="https://s3-alpha-sig.figma.com/img/face/55b0/77ab308b09cc93c83356df51bbc28b7b?Expires=1672617600&Signature=jAHVLtZu2mR-dGk4qSviQ6WkVRdyRUDR7TS0Qf1ayjxqi9RhiGJP7YCNzQGnBHlrV62Jw8ijOExbGkDnCOFBMDKl2BN0gVimx1ovCGltTZ5rM36AVeavtHbQ0eUugxfQ1T1sKRq6shBAx3zA9nKTJf5IKAH1g8FSJeip1lAnpoDfxuoGgUzwvGcIHjsoQbme5IC~-7zOlA8SQPMyTvHIhnaunT7taa63T39tYIFvWy-tWeE~HAUXIUt80oBR0IUezAEKyM2pocq6HxcjrMpnnsiHziVrckmMWSZgfqkoBJFgI7AaXTH4a6u31bobsulYtdfabbS2JLkr0XRkwPM0Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" /> 
                    </div>
                    <div className="detail-box">
                      <div className="type">
                        <a href="#">Hôm Nay Tôi Học Cách Yêu Thương Chính Mình</a>
                        <p>Jeong Youngwook</p>
                        <div className="type-bottom">
                          <a href="#" className="price">
                          200,000 đ
                          </a>
                          <div className="discout">33%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlay">
                      <a href="#" className="buy-btn">Mua Ngay</a>
                      <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                  </div>
                </div>

              {/* Item 7 */}
              <div className="box">
                <div className="box-btn">
                  <div className="slide-img">
                    <img src="https://s3-alpha-sig.figma.com/img/face/55b0/77ab308b09cc93c83356df51bbc28b7b?Expires=1672617600&Signature=jAHVLtZu2mR-dGk4qSviQ6WkVRdyRUDR7TS0Qf1ayjxqi9RhiGJP7YCNzQGnBHlrV62Jw8ijOExbGkDnCOFBMDKl2BN0gVimx1ovCGltTZ5rM36AVeavtHbQ0eUugxfQ1T1sKRq6shBAx3zA9nKTJf5IKAH1g8FSJeip1lAnpoDfxuoGgUzwvGcIHjsoQbme5IC~-7zOlA8SQPMyTvHIhnaunT7taa63T39tYIFvWy-tWeE~HAUXIUt80oBR0IUezAEKyM2pocq6HxcjrMpnnsiHziVrckmMWSZgfqkoBJFgI7AaXTH4a6u31bobsulYtdfabbS2JLkr0XRkwPM0Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="1" /> 
                  </div>
                  <div className="detail-box">
                    <div className="type">
                      <a href="#">Hôm Nay Tôi Học Cách Yêu Thương Chính Mình</a>
                      <p>Jeong Youngwook</p>
                      <div className="type-bottom">
                        <a href="#" className="price">
                        200,000 đ
                        </a>
                        <div className="discout">33%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlay">
                    <a href="#" className="buy-btn">Mua Ngay</a>
                    <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                </div>
              </div>
              
          </div>
        </div>
     </div>
    </div>
  )
}

export default HomeBody