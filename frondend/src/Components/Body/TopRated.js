import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  '../Body/Body.css'

const TopRated = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5.03,
    slidesToScroll: 5.03,
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
    <div style={{border: '1px solid #e2e8f0', padding: '28px'}}>
      <h5 style={{marginBottom: '28px'}}>Top rated</h5>
      <Slider {...settings}>
 
      <div>
        <div style={{position: 'relative'}}>
          <img alt="1" className='boxShadow' src="../../images/T-shirts/U.S. Polo Assn.jpg"></img>
          <div style={{position: 'absolute', top:'58%', textAlign: 'center', color: 'white', padding:'10px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
            <h5>Print T-Shirts</h5>
            <p>Edit both cool and casuals  </p>
            <h6><u>Shop Now</u></h6>
          </div>
      </div>
      </div>


       
      <div>
        <div style={{position: 'relative'}}>
          <img alt="1" className='boxShadow' src="../../images/T-shirts/roadster.jpg"></img>
          <div style={{position: 'absolute', top:'58%', textAlign: 'center', color: 'white', padding:'10px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
            <h5>Print T-Shirts</h5>
            <p>Edit both cool and casuals  </p>
            <h6><u>Shop Now</u></h6>
          </div>
      </div>
      </div>

      <div>
        <div style={{position: 'relative'}}>
          <img alt="1" className='boxShadow' src="../../images/T-shirts/roadster Blk.jpg"></img>
          <div style={{position: 'absolute', top:'58%', textAlign: 'center', color: 'white', padding:'10px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
            <h5>Print T-Shirts</h5>
            <p>Edit both cool and casuals  </p>
            <h6><u>Shop Now</u></h6>
          </div>
      </div>
      </div>

      <div>
        <div style={{position: 'relative'}}>
          <img alt="1" className='boxShadow' src="../../images/T-shirts/puma.jpg"></img>
          <div style={{position: 'absolute', top:'58%', textAlign: 'center', color: 'white', padding:'10px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
            <h5>Print T-Shirts</h5>
            <p>Edit both cool and casuals  </p>
            <h6><u>Shop Now</u></h6>
          </div>
      </div>
      </div>

      <div>
        <div style={{position: 'relative'}}>
          <img alt="1" className='boxShadow' src="../../images/T-shirts/Nautica.jpg"></img>
          <div style={{position: 'absolute', top:'58%', textAlign: 'center', color: 'white', padding:'10px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
            <h5>Print T-Shirts</h5>
            <p>Edit both cool and casuals  </p>
            <h6><u>Shop Now</u></h6>
          </div>
      </div>
      </div>


      <div>
        <div style={{position: 'relative'}}>
          <img alt="1" className='boxShadow' src="../../images/T-shirts/HRX by Hrithik Roshan.jpg"></img>
          <div style={{position: 'absolute', top:'58%', textAlign: 'center', color: 'white', padding:'10px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
            <h5>Print T-Shirts</h5>
            <p>Edit both cool and casuals  </p>
            <h6><u>Shop Now</u></h6>
          </div>
      </div>
      </div>

      <div>
        <div style={{position: 'relative'}}>
          <img alt="1" className='boxShadow' src="../../images/T-shirts/kelvin Clean.jpg"></img>
          <div style={{position: 'absolute', top:'58%', textAlign: 'center', color: 'white', padding:'10px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
            <h5>Print T-Shirts</h5>
            <p>Edit both cool and casuals  </p>
            <h6><u>Shop Now</u></h6>
          </div>
      </div>
      </div>      


      <div>
        <div style={{position: 'relative'}}>
          <img alt="1" className='boxShadow' src="../../images/T-shirts/roadster Life Go.jpg"></img>
          <div style={{position: 'absolute', top:'58%', textAlign: 'center', color: 'white', padding:'10px', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
            <h5>Print T-Shirts</h5>
            <p>Edit both cool and casuals  </p>
            <h6><u>Shop Now</u></h6>
          </div>
      </div>
      </div>   

    </Slider>
    </div>
<br />


    </>
  )
}

export default TopRated