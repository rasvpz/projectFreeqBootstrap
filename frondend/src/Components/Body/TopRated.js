import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  '../Body/Body.css'

const TopRated = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.009,
          slidesToScroll: 1.009
        }
      }
    ]
  }
  return (
    
    <>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="main_title">
            <h3 className="hthree_title"><span> Products</span><hr className="myHr" /></h3>            
            <p className="subHeading">Keep fresh keep & hot</p>
          </div>
        </div>
      </div>
    </div>
      <Slider {...settings}>

      <div class="mycard">
      <img alt="1" className='boxShadow' src="../../images/product/inspired-product/i1.jpg"></img>
       <div class="card-body">
         <h5 class="card-title">ALUMINIUM</h5>
      </div>
      {/* <div class="card-overlay">
          <div class="card-overlay-inner">
        Lorem ipsum dolor
        </div> </div> */}
      </div>

      <div class="mycard">
      <img alt="1" className='boxShadow' src="../../images/product/inspired-product/i2.jpg"></img>
       <div class="card-body">
         <h5 class="card-title">PLASTIC</h5>
      </div>
      {/* <div class="card-overlay">
          <div class="card-overlay-inner">
        Lorem ipsum dolor
        </div> </div> */}
      </div>


       
      <div class="mycard">
      <img alt="1" className='boxShadow' src="../../images/product/inspired-product/i3.jpg"></img>
       <div class="card-body">
         <h5 class="card-title">FOAM</h5>
      </div>
      {/* <div class="card-overlay">
          <div class="card-overlay-inner">
        Lorem ipsum dolor
        </div> </div> */}
      </div>

      <div class="mycard">
      <img alt="1" className='boxShadow' src="../../images/product/inspired-product/i4.jpg"></img>
       <div class="card-body">
         <h5 class="card-title">PAPPER</h5>
      </div>
      {/* <div class="card-overlay">
          <div class="card-overlay-inner">
        Lorem ipsum dolor
        </div> </div> */}
      </div>

      <div class="mycard">
      <img alt="1" className='boxShadow' src="../../images/product/inspired-product/i5.jpg"></img>
       <div class="card-body">
         <h5 class="card-title">ALUMINIUM</h5>
      </div>
      {/* <div class="card-overlay">
          <div class="card-overlay-inner">
        Lorem ipsum dolor
        </div> </div> */}
      </div>

      <div class="mycard">
      <img alt="1" className='boxShadow' src="../../images/product/inspired-product/i6.jpg"></img>
       <div class="card-body">
         <h5 class="card-title">PLASTIC</h5>
      </div>
      {/* <div class="card-overlay">
          <div class="card-overlay-inner">
        Lorem ipsum dolor
        </div> </div> */}
      </div>

      <div class="mycard">
      <img alt="1" className='boxShadow' src="../../images/product/inspired-product/i7.jpg"></img>
       <div class="card-body">
         <h5 class="card-title">PAPPER</h5>
      </div>
      {/* <div class="card-overlay">
          <div class="card-overlay-inner">
        Lorem ipsum dolor
        </div> </div> */}
      </div>

      <div class="mycard">
      <img alt="1" className='boxShadow' src="../../images/product/inspired-product/i8.jpg"></img>
       <div class="card-body">
         <h5 class="card-title">FOAM</h5>
      </div>
      {/* <div class="card-overlay">
          <div class="card-overlay-inner">
        Lorem ipsum dolor
        </div> </div> */}
      </div>  
    </Slider>

<br />


    </>
  )
}

export default TopRated