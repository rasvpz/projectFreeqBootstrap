import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TopCategories.css' 

const TopCategoriesSlickSlack = () => {
  
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: -300,
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      width:100,
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
          <img className='img-fluid slickImgFluid' style={{width: "262px"}} alt="1" src="../../images/product/inspired-product/i1.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i1.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i2.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i3.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i4.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i5.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i6.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i7.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i8.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i1.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i2.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i3.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i4.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i5.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i6.jpg"></img>
          </div>
          <div>
          <img className='img-fluid slickImgFluid' alt="1" src="../../images/product/inspired-product/i1.jpg"></img>
          </div>
        </Slider>
      </div>
    );
  }


export default TopCategoriesSlickSlack