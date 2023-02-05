import React from 'react'
import '../../assets/styles/Footer.scss'
import { BsFacebook, BsYoutube, BsInstagram, BsCartPlusFill, BsPersonCircle } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import logo from "../../assets/images/logo.png"

function Footer() {
  // function Check ()
  return (
    <div className='footer'>
      <div className="footerTop">
        <div className="supportUser">
          <div className="title">Hỗ trợ khách hàng</div>
          <div className="content">
            <p>Điện thoại: 0339876802</p>
            <p>Email: 19522370@gm.uit.edu.vn</p>
          </div>
        </div>
        <div className="supportPurchse">
          <div className="title">Hỗ trợ mua hàng</div>
          <div className="content">
            <p>Chính sách thành viên</p>
            <p>Chính sách đổi trả</p>
            <p>Giao hàng - thanh toán</p>
            <p>Chính sách bảo mật thông tin</p>
          </div>
        </div>
        <div className="intro">
          <div className="title">Giới thiệu</div>
          <div className="content">
            <p>Về UITBook</p>
            <p>Tuyển dụng</p>
            <p>Diễn đàn thảo luận</p>
          </div>
        </div>
        <div className="connectWithUs">
          <div className="title">Kết nối với chúng tôi</div>
          <div className="contact">
            <BsFacebook className='fb'/>
            <BsYoutube className='yt'/>
            <BsInstagram className='ig'/>
          </div>
          <div className="contactTablet">
            <BsFacebook className='fb'/>
            <BsYoutube className='yt'/>
            <BsInstagram className='ig'/>
          </div>
        </div>
      </div>
      <hr className="hrFooter"/>
      <div className="footerBottom">
        <div className="logo">
          <h1>UITBook</h1>
        </div>
        <p>Địa chỉ: Khu phố 6 Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</p>
      </div>

    {/* Nav Mobile / Tablet */}
      <div className="navBottom">
        <hr />
        <div className="navBottomBottom">
          <div className="itemNavBottomHome">
            <AiFillHome />
            <span>Trang chủ</span>
          </div>
          <label for="navBottomInputCate" className="itemNavBottomCate">
            <BiCategory />
            <span>Danh mục</span>
          </label>
          <label for="navBottomInputCart" className="itemNavBottomCart">
            <BsCartPlusFill />
            <span>Giỏ hàng</span>
          </label>
          <label for="navBottomInputAccount" className="itemNavBottomAccount">
            <BsPersonCircle />
            <span>Tài khoản</span>
          </label>
        </div>
      </div>

        {/* Mobile / Tablet */}
      <div className="navBar">
        {/* Cate */}
        <input type="checkbox" hidden id="navBottomInputCate" className="navInputCate"/>
          <label for="navBottomInputCate" className="navBarCate">
            <div className="navBarTitle">
              <span>Danh mục</span>
            </div>
            <div className="navBarListCate">
              <div className="navBarListCateItem">
                <span>Sách Bán Chạy</span>
                <hr />
              </div>
              <div className="navBarListCateItem">
                <span>Sách Mới Phát Hành</span>
                <hr />
              </div>
              <div className="navBarListCateItem">
                <span>Sách Thiếu Nhi</span>
                <hr />                  
              </div>
              <div className="navBarListCateItem">
                <span>Sách Kinh Tế</span> 
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Sách Văn Học Trong Nước</span> 
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Sách Văn Học Nước Ngoài</span> 
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Sách Tin Học</span> 
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Sách Ngoại Ngữ</span> 
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Sách Ngoại Ngữ</span> 
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Sách Giáo Khoa - Giáo Trình</span>  
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Sách Chuyên Ngành</span> 
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Light Novel</span>   
                <hr /> 
              </div>
              <div className="navBarListCateItem">
                <span>Tất cả</span>   
              </div>
            </div>
          </label>
        {/* Cart */}
        <input type="checkbox" hidden id="navBottomInputCart" className="navInputCart"/>
          <label for="navBottomInputCart" className="navBarCart">
            <div className="navBarTitle">
              <span>Giỏ hàng</span>
            </div>
            <div className="navBarListCart">
              <div className="navBarListCartItem">
                <span>Giỏ hàng của bạn đang trống</span>
              </div>
            </div>
          </label>
        {/* Accont  */}
        <input type="checkbox" hidden id="navBottomInputAccount" className="navInputAccount"/>
          <label for="navBottomInputAccount" className="navBarAccount">
            <div className="navBarTitle">
              <span>Tài khoản</span>
            </div>
            <div className="navBarListAccount">
              <div className="navBarListAccountItem">
                <div className="logo" >
                  <img src={logo} alt="" />
                </div>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="loginBtn">Đăng nhập</button>
                <div className="linkRegis">
                  <a href="">Đăng ký</a>
                  <hr />
                  <a href="">Quên mật khẩu?</a>
                </div>
                <div className="orLogin">
                  <hr />
                  <span>Hoặc đăng nhập bằng</span>
                  <hr />
                </div>
                <img src="https://www.vinabook.com/images/social/google_signin_dark.png" alt="" />
                <img src="https://www.vinabook.com/images/social/facebook_signin_dark.png" alt="" />
              </div>
            </div>
          </label>
      </div>
    </div>
  )
}

export default Footer