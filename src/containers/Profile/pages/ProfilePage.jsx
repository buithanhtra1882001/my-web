import React from 'react'
import './ProfilePage.scss'
import { listOrderManagementItem }  from '../../../assets/js/listOrderManagementItem'
import { listAccountManagementItem } from '../../../assets/js/listAccountManagementItem'
import { AiFillEye } from 'react-icons/ai'

function ProfilePage() {
  return (
        <div className="profileContainer">
            <div className="top">QUẢN LÝ ĐƠN HÀNG</div>
            <div className="container">
                <div className="leftContainer">
                  <div className="management">
                      <div className="title">
                      Quản lý đơn hàng
                      </div>
                      <div className="item">
                        {listOrderManagementItem.map((item) => {
                          return <div>
                            {item}
                          </div>
                        })}
                      </div>
                  </div>
                  <div className="management">
                    <div className="title">
                      Quản lý tài khoản
                    </div>
                    <div className="item">
                      {listAccountManagementItem.map((item) => {
                        return <div>
                          {item}
                        </div>
                      })}
                    </div>
                  </div>  
                </div>
                <div className="rightContainer">
                  <div className="path">
                    <span>DANH SÁCH ĐƠN HÀNG</span>
                  </div>
                  <div className="listOrder">
                    <div className="title">
                      <span>STT</span>
                      <span>MÃ ĐƠN HÀNG</span>
                      <span>NGƯỜI ĐẶT</span>
                      <span>SỐ ĐIỆN THOẠI</span>
                      <span>TỔNG CỘNG</span>
                      <span>TRẠNG THÁI</span>
                      <span>CHI TIẾT ĐƠN</span>
                    </div>
                    {/* item1 */}
                    <div className="item">
                      <span>1</span>
                      <span>19522370</span>
                      <span>Bùi Thanh Trà</span>
                      <span>0339876802</span>
                      <span>550,000 đ</span>
                      <span>Đã giao</span>
                      <div className="seeMore">
                        <button>
                          <p>Xem chi tiết</p> 
                          <AiFillEye />
                        </button>
                      </div>
                    </div>
                    {/* item2 */}
                    <div className="item">
                      <span>2</span>
                      <span>19522371</span>
                      <span>Bùi Thanh Trà</span>
                      <span>0339876802</span>
                      <span>450,000 đ</span>
                      <span>Đang giao</span>
                      <div className="seeMore">
                        <button>
                          <p>Xem chi tiết</p> 
                          <AiFillEye />
                        </button>
                      </div>
                    </div>
                    {/* item3 */}
                    <div className="item">
                      <span>3</span>
                      <span>19522372</span>
                      <span>Bùi Thanh Trà</span>
                      <span>0339876802</span>
                      <span>280,000 đ</span>
                      <span>Đang đợi duyệt</span>
                      <div className="seeMore">
                        <button>
                          <p>Xem chi tiết</p> 
                          <AiFillEye />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

  )
}

export default ProfilePage