import React, { useEffect, useState } from "react";
import { listImgs } from "./data";

const DetailImage = () => {
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    setSelectedImg(listImgs[0]);
  }, []);

  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="col-span-4 flex item-center justify-center">
        <img src={selectedImg} alt="" className="h-[620px] rounded-lg" />
      </div>
      <div className="col-span-1 h-[800px] overflow-hidden flex flex-col gap-5">
        {listImgs.map((item) => {
          return (
            <img
              src={item}
              alt=""
              onClick={() => setSelectedImg(item)}
              className={`w-[100px] h-[140px] rounded-lg cursor-pointer border-[#e546e8] border-solid ${
                selectedImg === item ? "border-2" : "border-0"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DetailImage;
