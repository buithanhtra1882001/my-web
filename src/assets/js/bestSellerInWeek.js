import { MdOutlineAddShoppingCart } from "react-icons/md";
import img1 from "../images/books/sach_chuyen_nganh/dia_chat.jpeg"
import img2 from "../images/books/sach_moi_phat_hanh/one_punch_man_12.jpeg"
import img3 from "../images/books/sach_ban_chay/start_wars.jpeg"
import img4 from "../images/books/sach_van_hoc_nuoc_ngoai/ngay_tho_nhu_nang.jpg"
import img5 from "../images/books/sach_giao_khoa/toan_5.jpeg"
import img6 from "../images/books/sach_van_hoc_trong_nuoc/con_chut_gi_de_nho.jpeg"
import img7 from "../images/books/sach_ngoai_ngu/ielts.jpeg"
import { Link } from "react-router-dom";

export const listBestSellerInWeek = [
    // Item 1 
    <div className="box">
        <div className="box-btn">
            <div className="slide-img">
                <img src={img1} alt="1" /> 
            </div>
            <Link to="detail/6" className="detail-box">
                <div className="type">
                    <a href="#">Bệ Phóng Vào Tương Lai - Khoa Học Địa Chất</a>
                    <p>Nguyễn Đăng Khoa biên dịch</p>
                    <div className="type-bottom">
                        <a href="#" className="price">
                        46,500 đ
                        </a>
                        {/* <div className="discout">33%</div> */}
                    </div>
                </div>
            </Link>
        </div>
        <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
        </div>
    </div>,

    // Item 2 
    <div className="box">
        <div className="box-btn">
            <div className="slide-img">
                <img src={img2} alt="1" /> 
            </div>
            <Link to="detail/10" className="detail-box">
                <div className="type">
                    <a href="#">One Punch Man tập 12</a>
                    <p>Yusuke Murata One</p>
                    <div className="type-bottom">
                        <a href="#" className="price">
                        20,000 đ
                        </a>
                        <div className="discout">20%</div>
                    </div>
                </div>
            </Link>
        </div>
        <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
        </div>
    </div>,

    // Item 3 
    <div className="box">
        <div className="box-btn">
            <div className="slide-img">
                <img src={img3} alt="1" /> 
            </div>
            <Link to="detail/3" className="detail-box">
                <div className="type">
                    <a href="#">Star Wars: Light of the Jedi</a>
                    <p>Charles Soule</p>
                    <div className="type-bottom">
                        <a href="#" className="price">
                        190,000 đ
                        </a>
                        {/* <div className="discout">33%</div> */}
                    </div>
                </div>
            </Link>
        </div>
        <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
        </div>
    </div>,
    // Item 4
    <div className="box">
        <div className="box-btn">
            <div className="slide-img">
                <img src={img4} alt="1" /> 
            </div>
            <Link to="detail/16" className="detail-box">
                <div className="type">
                    <a href="#">Ngân Thơ Như Nàng</a>
                    <p>Rowan Hisayo Buchanan</p>
                    <div className="type-bottom">
                        <a href="#" className="price">
                        305,000 đ
                        </a>
                        {/* <div className="discout">50%</div> */}
                    </div>
                </div>
            </Link>
        </div>
        <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
        </div>
    </div>,

    // Item 5
    <div className="box">
        <div className="box-btn">
            <div className="slide-img">
                <img src={img5} alt="1" /> 
            </div>
            <Link to="detail/8" className="detail-box">
                <div className="type">
                    <a href="#">Bài Tập Cơ Bản Và Nâng Cao - Toán 5 Tiểu Học (Tập 2)</a>
                    <p>Trần Thị Thu Thủy</p>
                    <div className="type-bottom">
                        <a href="#" className="price">
                        15,000 đ
                        </a>
                        {/* <div className="discout">20%</div> */}
                    </div>
                </div>
            </Link>
        </div>
        <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
        </div>
    </div>,

    // Item 6
    <div className="box">
        <div className="box-btn">
            <div className="slide-img">
                <img src={img6} alt="1" /> 
            </div>
            <Link to="detail/17" className="detail-box">
                <div className="type">
                    <a href="#">Còn Chút Gì Để Nhớ (Phiên Bản Màu Đặc Biệt)</a>
                    <p>Nguyễn Nhật Ánh</p>
                    <div className="type-bottom">
                        <a href="#" className="price">
                        468,000 đ
                        </a>
                        {/* <div className="discout">66%</div> */}
                    </div>
                </div>
            </Link>
        </div>
        <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
        </div>
    </div>,

    // Item 7
    <div className="box">
    <div className="box-btn">
        <div className="slide-img">
            <img src={img7} alt="1" /> 
        </div>
            <Link to="detail/12" className="detail-box">
                <div className="type">
                    <a href="#">Ielts Vocab - No Worries!</a>
                    <p>Vũ Hải</p>
                    <div className="type-bottom">
                        <a href="#" className="price">
                        169,000 đ
                        </a>
                        {/* <div className="discout">33%</div> */}
                    </div>
                </div>
            </Link>
        </div>
        <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
        </div>
    </div>,
]