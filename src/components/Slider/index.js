import React from 'react';
import { listImages } from './data';
import './index.scss';
// import '../../assets/js/script.js';

function Slider() {

  return (
    <div>
        <div className="carousel" data-carousel>
            <button className="carousel-button prev" data-carousel-button="prev">&#60;</button>
            <button className="carousel-button next" data-carousel-button="next">&#62;</button>
            <div className="slide" data-slides>
                {listImages.map(item => {
                    return <img src={item} alt="" />
                })}
            </div>
        </div>
    </div>
  )
}


export default Slider