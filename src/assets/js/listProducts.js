import { MdOutlineAddShoppingCart } from "react-icons/md";
import bookItems from "../../data/items.json"
import { ee } from "./listCategories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ListProducts = () => {
    const [listBook, setListBook] = useState(bookItems)
    const navigate = useNavigate()
    function Navigation (id) {
        navigate(`/detail/${id}`)
    }
    ee.on('message', function (cate) {
        // console.log(text)
        let newList = bookItems.filter(item => item.cate === cate)
        setListBook(newList)
      })
  return (
    <>
        {listBook.map(item =>
            <div className="box">
                <div className="slide-img">
                    <img src={item.imgUrl} alt="1" />
                    <div className="overlay">
                    <a href="#" className="buy-btn">Mua Ngay</a>
                    <a href="#" className="buy-btn">Thêm Vào Giỏ Hàng</a>
                    </div>
                </div>
                <div className="detail-box" onClick={() => Navigation(item.id)}>
                    <span>{item.name}</span>
                    <div className="type">
                        <span>
                            <a href="#" className="price">
                            {item.price} đ
                            </a>
                        </span>
                        <MdOutlineAddShoppingCart />
                    </div>
                </div>
            </div>
    )}
    </>
  )
}

export default ListProducts