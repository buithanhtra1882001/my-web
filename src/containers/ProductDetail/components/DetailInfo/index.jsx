import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const maxQuantity = 9;

const DetailInfo = () => {
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
    <div>
      <div className="flex gap-10 items-center">
        <span>Số lượng</span>
        <div className="flex gap-5 items-center border border-solid border-[#383435] px-2 py-1 select-none">
          <AiOutlineMinus
            className="cursor-pointer"
            onClick={handleMinusQuantity}
          />

          <span>{quantity}</span>
          <AiOutlinePlus
            className="cursor-pointer"
            onClick={handlePlusQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
