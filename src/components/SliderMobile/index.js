import React, { useEffect, useRef, useState } from "react";
import { listImages } from "./data";
import "./index.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function SliderMobile() {
  const [left, setLeft] = useState(0);
  const [numWidth, setNumWidth] = useState(0);

  const carouselRef = useRef();

  useEffect(() => {
    setNumWidth(listImages.length * carouselRef.current.offsetWidth);
  }, []);

  // console.log(left);

  const handleMoveLeft = () => {
    if (left >= 0) {
      setLeft(-480);
    } else {
      setLeft((pre) => pre + carouselRef.current.offsetWidth);
    }
  };

  const handleMoveRight = () => {
    if (left <= -480) {
      setLeft(0);
    } else {
      setLeft((pre) => pre - carouselRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleMoveRight();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="slide">
      <div className="carousel" ref={carouselRef} data-carousel>
        <div className="indicator">
          <button
            className="carousel-button prev"
            data-carousel-button="prev"
            onClick={handleMoveLeft}
          >
            <AiOutlineArrowLeft className="button" />
          </button>
          <button
            className="carousel-button next"
            data-carousel-button="next"
            onClick={handleMoveRight}
          >
            <AiOutlineArrowRight className="button"/>
          </button>
        </div>

        <div
          className={`slide`}
          style={{ transform: `translateX(${left}px)` }}
          data-slides
        >
          {listImages.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SliderMobile;
