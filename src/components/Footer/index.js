import React from 'react'
import '../../assets/styles/Footer.scss'
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

function Footer() {
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
        </div>
      </div>
      <hr />
      <div className="footerBottom">
        <div className="logo">
          <h1>UITBook</h1>
        </div>
        <p>Địa chỉ: Khu phố 6 Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</p>
      </div>
    </div>
  )
}

export default Footer