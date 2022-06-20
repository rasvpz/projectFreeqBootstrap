
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  '../HomePage/Body.css'
import {Button} from 'react-bootstrap'

const NewTrends = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    initialSlide: 0,
    
    
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
            <h3 className="hthree_title"><span> New Arrivals</span><hr className="myHr" /></h3>            
            <p className="subHeading">Keep fresh & keep hot</p>
          </div>
        </div>
      </div>
    </div>

    <div className="myd-none" >
    <h5 className='newTrendBghOne'>COLLECTION OF 2022</h5>
    <h3 className='newTrendBghTwo'>BEST QUALITY CONTAINER</h3>
    <img className="myBrdr" srcmarginLeft={4}  alt="1" src="../../images/newArrival/8.jpg"></img>

    </div>
      <Slider {...settings}>
 





      <div className="d-none d-sm-table-cell">
            <div className="col-12" >
                <div class="row">
                    <div class="col-6 newTrendBg"> 
                    <h5 className='newTrendBghOne'>COLLECTION OF 2022</h5>
                    <h3 className='newTrendBghTwo'>BEST QUALITY CONTAINER</h3>
                    <br />
                    <img className="img-responsive" srcmarginLeft={4}  alt="1" src="../../images/newArrival/1.jpg"></img>
                    <br /><br /><br /><br />
                    <div><h4>QR 1356</h4></div>
                    <br />
                    <br />
                    <Button className='addToCart'>ADD TO CART</Button>
                     </div>                
                    <div class="col-6">
                        <div class="row">
                        <div marginBottom={8} className="col-6 d-none d-sm-table-cell " xs={{ span: 12, order: 1 }}  sm={{ span: 12, order: 1 }}>
                            <img marginLeft={4}  alt="1" className='boxShadow fourPics' src="../../images/product/inspired-product/i3.jpg"></img>
                            <div className="innerfourPics ">
                                    <p>QUARTS ALUMINIUM</p>
                                    <span>QR 425</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{fontSize:14, color:'#686868'}} ><del>QR 125</del></span>
                            </div>
                        </div>  

                        <div  className="col-6  d-none d-sm-table-cell" xs={{ span: 12, order: 2 }}  sm={{ span: 12, order: 2 }}> 
                        <img  marginLeft={4}  alt="1" className='boxShadow fourPics' src="../../images/product/inspired-product/i2.jpg"></img>
                        <div className="innerfourPics ">
                                    <p>QUARTS ALUMINIUM</p>
                                    <span>QR 425</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{fontSize:14, color:'#686868'}} ><del>QR 125</del></span>
                            </div>
                        </div> 
                        </div>
                        <br />
                        <div className="row">
                        <div className="col-6  col-6 d-none d-sm-table-cell" xs={{ span: 12, order: 3 }}  sm={{ span: 12, order: 3 }}>
                        <img alt="1" className='boxShadow fourPics' src="../../images/product/inspired-product/i1.jpg"></img>
                               <div className="innerfourPics ">
                                    <p>QUARTS ALUMINIUM</p>
                                    <span>QR 300</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{fontSize:14, color:'#686868'}} ><del>QR 125</del></span>
                            </div>
                        </div>               
                        <div className="col-6  d-none d-sm-table-cell" xs={{ span: 12, order: 4 }}  sm={{ span: 12, order: 4 }}>
                        <img alt="1" className='boxShadow fourPics' src="../../images/product/inspired-product/i8.jpg"></img>
                        <div className="innerfourPics ">
                                    <p>QUARTS ALUMINIUM</p>
                                    <span>QR 200</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{fontSize:14, color:'#686868'}} ><del>QR 125</del></span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
     </div> 


    </Slider>

<br />

    </>
  )
}

export default NewTrends








