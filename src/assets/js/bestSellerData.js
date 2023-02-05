import { MdOutlineAddShoppingCart } from "react-icons/md";
import img1 from "../images/books/sach_ban_chay/harry_potter.jpeg"
import img2 from "../images/books/sach_ban_chay/milk_and_honey.png"
import img3 from "../images/books/sach_ban_chay/start_wars.jpeg"
import img4 from "../images/books/sach_ban_chay/harry_potter1.jpeg"
import img5 from "../images/books/sach_ban_chay/1.jpeg"
import img6 from "../images/books/sach_ban_chay/2.jpeg"
import img7 from "../images/books/sach_ban_chay/3.jpeg"
import img8 from "../images/books/sach_ban_chay/4.jpeg"
import { Link } from "react-router-dom";


export const listBestSeller = [
    // Item 1 
    <div className="box">
        <div className="slide-img">
            <img src={img1} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <Link to="detail/1" className="detail-box">
            <span>Harry Potter và chiếc cốc lửa</span>
            <div className="type">
                <span>
                    <a href="#" className="price">
                    310,000 đ
                    </a>
                </span>
                <MdOutlineAddShoppingCart />
            </div>
        </Link>
    </div>,

    // Item 2 
    <div className="box">
        <div className="slide-img">
            <img src={img2} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <Link to="detail/2" className="detail-box">
            <span>Milk and honey</span>
            <div className="type">
                <span>
                    <a href="#" className="price">
                    440,000 đ
                    </a>
                </span>
                <MdOutlineAddShoppingCart />
            </div>
        </Link>
    </div>,

    // Item 3 
    <div className="box">
        <div className="slide-img">
            <img src={img3} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <Link to="detail/3" className="detail-box">
            <span>Star War</span>
            <div className="type">
                <span>
                    <a href="#" className="price">
                    190,000 đ
                    </a>
                </span>
                <MdOutlineAddShoppingCart />
            </div>
        </Link>
    </div>,

    // Item 4
    <div className="box">
        <div className="slide-img">
            <img src={img4} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <Link to="detail/19" className="detail-box">
            <span>Harry Potter và bảo bối tử thần</span>
            <div className="type">
                <span>
                    <a href="#" className="price">
                    280,000 đ
                    </a>
                </span>
                <MdOutlineAddShoppingCart />
            </div>
        </Link>
    </div>,

    // Item 5
    <div className="box">
        <div className="slide-img">
            <img src={img5} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <Link to="detail/20" className="detail-box">
            <span>Vừa Tỉnh Dậy Thì Nghe Nói Tôi Kết Hôn Rồi</span>
            <div className="type">
                <span>
                    <a href="#" className="price">
                    390,000 đ
                    </a>
                </span>
                <MdOutlineAddShoppingCart />
            </div>
        </Link>
    </div>,

    // Item 6
    <div className="box">
        <div className="slide-img">
            <img src={img6} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <Link to="detail/21" className="detail-box">
            <span>Here U Are Tập 4 ( Bản Đặc Biệt)</span>
            <div className="type">
                <span>
                    <a href="#" className="price">
                    224,000 đ
                    </a>
                </span>
                <MdOutlineAddShoppingCart />
            </div>
        </Link>
    </div>,

    // Item 7
    <div className="box">
        <div className="slide-img">
            <img src={img7} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <Link to="detail/22" className="detail-box">
            <span>Đế Quốc Bóng Tối ( Bản Đặc Biệt)</span>
            <div className="type">
                <span>
                    <a href="#" className="price">
                    169,000 đ
                    </a>
                </span>
                <MdOutlineAddShoppingCart />
            </div>
        </Link>
    </div>,

    // Item 8
    <div className="box">
        <div className="slide-img">
            <img src={img8} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <Link to="detail/23" className="detail-box">
            <span>Bán Tinh (Combo 3 Tập )</span>
            <div className="type">
                <span>
                    <a href="#" className="price">
                    501,000 đ
                    </a>
                </span>
                <MdOutlineAddShoppingCart />
            </div>
        </Link>
    </div>,

]