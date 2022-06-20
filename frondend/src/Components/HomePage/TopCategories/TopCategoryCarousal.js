import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './TopCategories.css';
const TopCategoryCarousal = () => {
  return (
    <>
        <Carousel className="topCategory">
      <Carousel.Item>
        <img
        //   className="carousalWidth"
          src="../../images/topCategory/carousal1.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
        //   className="carousalWidth"
          src="../../images/topCategory/carousal1.png"
          alt="Second slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
        //   className="carousalWidth"
          src="../../images/topCategory/carousal1.png"
          alt="Second slide"
        />

      </Carousel.Item>


    </Carousel>
    </>
  )
}

export default TopCategoryCarousal