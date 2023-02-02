import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import listProduct from "../../data/items.json"

const Breadcrumb = () => {
  let param = useParams()
  console.log(param);
  const [product, setProduct] = useState()
  useEffect(() => {
    console.log(listProduct);
    let Product = listProduct.filter(item => item.id == param.productId)
    setProduct(Product[0])

  }, [])
  return (
    <div className="breadcrumb">Trang chủ / Sản phẩm / {product?.name}</div>
  );
};

export default Breadcrumb;