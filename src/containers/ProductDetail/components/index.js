import React, { useEffect, useState } from 'react'
import { listImgs } from '../../../assets/js/listImgs';
import listProduct from "../../../data/items.json"
import { useParams } from 'react-router-dom';


const DetailImage = () => {
    const [selectedImg, setSelectedImg] = useState("");

    let param = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
      console.log(listProduct);
      let Product = listProduct.filter(item => item.id == param.productId)
      setProduct(Product[0])
    }, [product])

    useEffect(() => {
      setSelectedImg(product?.imgUrl)
    },[])
    
  return (
    <div className="detailImage">
        <div className="imgBig">
            <img src={selectedImg || product?.imgUrl} alt="1" />
        </div>
        <div className="imgSmall">
          <img src={product?.imgUrl} alt="" onClick={() => setSelectedImg(product?.imgUrl)} />
          <img src={product?.imgUrl1} alt="" onClick={() => setSelectedImg(product?.imgUrl1)} />
          <img src={product?.imgUrl2} alt="" onClick={() => setSelectedImg(product?.imgUrl2)} />
          <img src={product?.imgUrl3} alt="" onClick={() => setSelectedImg(product?.imgUrl3)} />

            {/* {listImgs.map((item) => {
                return (
                    <img src={item} alt="" onClick={() => setSelectedImg(item)} />
                );
            })} */}
        </div>
    </div>
  )
}

export default DetailImage