import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import DetailImage from "./components/DetailImage";
import DetailInfo from "./components/DetailInfo";

const DetailProduct = () => {
  return (
    <div className="">
      <Header />
      <div className="mx-[100px] mt-[20px]">
        <Breadcrumb />
        <div className="grid grid-cols-2 mt-[20px]">
          <DetailImage />
          <DetailInfo />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
