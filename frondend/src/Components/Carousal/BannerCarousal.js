import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const BannerCarousal = () => {
  return (
    <div>

<Carousel fade>
      <Carousel.Item>
        <img
          className="carousalWidth"
          src="../../images/banner/carousal1.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item fade>
        <img
          className="carousalWidth"
          src="../../images/banner/carousal2.png"
          alt="Second slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousalWidth"
          src="../../images/banner/carousal1.png"
          alt="Second slide"
        />

      </Carousel.Item>


    </Carousel>

    </div>
  )
}

export default BannerCarousal