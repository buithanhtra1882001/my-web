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
            <div>Điện thoại: 0339876802</div>
            <div>Email: 19522370@gm.uit.edu.vn</div>
          </div>
        </div>
        <div className="supportPurchse">
          <div className="title">Hỗ trợ mua hàng</div>
          <div className="content">
            <div>Chính sách thành viên</div>
            <div>Chính sách đổi trả</div>
            <div>Giao hàng - thanh toán</div>
            <div>Chính sách bảo mật thông tin</div>
          </div>
        </div>
        <div className="intro">
          <div className="title">Giới thiệu</div>
          <div className="content">
            <div>Về UITBook</div>
            <div>Tuyển dụng</div>
            <div>Diễn đàn thảo luận</div>
          </div>
        </div>
        <div className="connectWithUs">
          <div className="title">Kết nối với chúng tôi</div>
          <div className="contact">
            <BsFacebook />
            <BsYoutube />
            <BsInstagram />
          </div>
        </div>
      </div>
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