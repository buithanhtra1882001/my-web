import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import Breadcrumb from '../../../components/Breadcrumb'
import DetailImage from '../components'
import "./ProductDetailPage.scss"
import { useParams } from 'react-router-dom'
import listProduct from "../../../data/items.json"

function ProductDetailPage() {
  let param = useParams()
  console.log(param);
  const [product, setProduct] = useState()
  useEffect(() => {
    console.log(listProduct);
    let Product = listProduct.filter(item => item.id == param.productId)
    setProduct(Product[0])

  }, [])
  
  const maxQuantity = 9;

  const [quantity, setQuantity] = useState(1);

  const handlePlusQuantity = () => {
    if (quantity === 9) return;
    setQuantity((pre) => pre + 1);
  };

  const handleMinusQuantity = () => {
    if (quantity === 1) return;
    setQuantity((pre) => pre - 1);
  };
  return (
    <div className="detailContainer">
      <Breadcrumb />
      <div className="detailProduct">
        <DetailImage />
        <div className="detailInfo">
          <div className="title">
            <h2>{product?.name}</h2>
          </div>
          <div className="content">
            <h4>Tác giả:</h4>
            <p>{product?.author}</p>
          </div>
          <div className="content">
            <h4>Nhà xuất bản:</h4>
            <p>{product?.nxb}</p>
          </div>
          <div className="content">
            <h4>Nhà phát hành:</h4>
            <p>{product?.nph}</p>
          </div>
          <div className="rating">
            <h4></h4>
            <p>(0 đánh giá)</p>
          </div>
          <div className="price">
            <h4>{product?.price} đ</h4>
            <span>360 đ</span>
            <p>- 12%</p>
          </div>
          <div className="quantity">
            <span>Số lượng:</span>
            <div className="quantityNumber">
              <AiOutlineMinus
                className="button"
                onClick={handleMinusQuantity}
              />
              <span>{quantity}</span>
              <AiOutlinePlus
                className="button"
                onClick={handlePlusQuantity}
              />
            </div>
          </div>
          <div className="button">
            <div className="addToCart">
             <AiOutlineShoppingCart className='cartIcon'/>
              <span>Thêm vào giỏ hàng</span> 
            </div>
            <div className="buyNow">
              Mua ngay
            </div>
          </div>
          
        </div>
      </div>
      <div className="introduction">
        <h3>Giới thiệu sách</h3>
        <p>{product?.intro}</p>
      </div>
      <div className="information">
        <div className="info">
          <h3>Thông tin sản phẩm</h3>
          <div className="infoContainer">
            <div className="leftInfo">
              <p>Tác giả</p>
              <p>NXB</p>
              <p>Năm XB</p>
              <p>Trọng lượng(gr)</p>
              <p>Kích Thước Bao Bì</p>
              <p>Số trang</p>
            </div>
            <div className="rightInfo">
              <p>{product?.author}</p>
              <p>{product?.nxb}</p>
              <p>{product?.yxb}</p>
              <p>{product?.weight} gram</p>
              <p>{product?.ps}</p>
              <p>{product?.pn}</p>
            </div>
          </div>
        </div>
        <div className="rating">

        </div>
      </div>
      <div className="comment">
        <div className="topComment">
          <h3>Bình luận</h3>
          <div className="buttonLogin"><h3>Đăng nhập</h3></div>
        </div>
        <div className="bottomComment">
          <FaUserCircle className="userIcon"/>
          <div className="commentBox">
            <input type="text" placeholder='Hãy là người đầu tiên bình luận !'/>
          </div>
        </div>
      </div>
      {/* <div className="sameAuthorBook">
        <h3>Sách cùng tác giả</h3>
      </div> */}
    </div>
  )
}

export default ProductDetailPage