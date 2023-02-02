import img1 from "../images/books/sach_moi_phat_hanh/one_punch_man_13.jpeg"
import img2 from "../images/books/sach_moi_phat_hanh/one_punch_man_12.jpeg"
import img3 from "../images/books/sach_moi_phat_hanh/one_punch_man_11.jpeg"
import img4 from "../images/books/sach_moi_phat_hanh/one_piece_100.webp"


export const listNewBook = [
    // Item 1 
     <div className="box">
        <div className="slide-img">
            <img src={img1} alt="1" />
            <div className="overlay">
            <a href="#" className="buy-btn">Mua Ngay</a>
            <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
            </div>
        </div>
        <div className="detail-box">
            <div className="detail-top">
            <div className="type">
                <a href="#">One Punch Man tập 13</a>
                <span>
                <a href="#" className="price">
                20,000 đ
                </a>
                </span>
            </div>
            <div className="discout">40%</div>
            </div>
            <div className="sold">
            <p>Đã bán 1</p>
            <div className="sold-btn"></div>
            </div>
        </div>
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
        <div className="detail-box">
            <div className="detail-top">
            <div className="type">
                <a href="#">One Punch Man tập 12</a>
                <span>
                <a href="#" className="price">
                20,000 đ
                </a>
                </span>
            </div>
            <div className="discout">20%</div>
            </div>
            <div className="sold">
            <p>Đã bán 5</p>
            <div className="sold-btn"></div>
            </div>
        </div>
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
        <div className="detail-box">
            <div className="detail-top">
            <div className="type">
                <a href="#">One Punch Man tập 11</a>
                <span>
                <a href="#" className="price">
                20,000 đ
                </a>
                </span>
            </div>
            <div className="discout">15%</div>
            </div>
            <div className="sold">
            <p>Đã bán 10</p>
            <div className="sold-btn"></div>
            </div>
        </div>
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
        <div className="detail-box">
            <div className="detail-top">
            <div className="type">
                <a href="#">One Piece tập 100: “Haki Bá Vương” </a>
                <span>
                <a href="#" className="price">
                120,000 đ
                </a>
                </span>
            </div>
            <div className="discout">30%</div>
            </div>
            <div className="sold">
            <p>Đã bán 2</p>
            <div className="sold-btn"></div>
            </div>
        </div>
    </div>,

]