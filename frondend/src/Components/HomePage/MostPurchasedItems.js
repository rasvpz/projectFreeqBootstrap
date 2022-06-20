import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
const MostPurchasedItems = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        dots: true,
      };
  return (
    <>
    
    <div style={{border: '1px solid #e2e8f0', padding: '28px'}}>
      <h5 style={{marginBottom: '28px'}}>Mostly purchased</h5>
        <Slider {...settings}>

          <div>
          <div style={{position: 'relative'}}>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
            <div style={{position: 'absolute', top:'53%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
            </div>
          </div>

          <div>
          <div style={{position: 'relative'}}>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
            <div style={{position: 'absolute', top:'53%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
            </div>
          </div>


          <div>
          <div style={{position: 'relative'}}>
          <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/INVICTUS.jpg"></img>
            <div style={{position: 'absolute', top:'53%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
            </div>
          </div>


          <div>
          <div style={{position: 'relative'}}>
          <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/GANT.jpg"></img>
            <div style={{position: 'absolute', top:'53%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
            </div>
          </div>

          <div>
          <div style={{position: 'relative'}}>
          <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/plusS.jpg"></img>

            <div style={{position: 'absolute', top:'53%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
            </div>
          </div>


          <div>
          <div style={{position: 'relative'}}>
          <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/SASSAFRAS.jpg"></img>
            <div style={{position: 'absolute', top:'53%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
            </div>
          </div>


          <div>
          <div style={{position: 'relative'}}>
          <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/Mast & Harbour.jpg"></img>
            <div style={{position: 'absolute', top:'53%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
            </div>
          </div>

          <div>
          <div style={{position: 'relative'}}>
          <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
            <div style={{position: 'absolute', top:'53%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
            </div>
          </div>


          <div>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
          </div>

          <div>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
          </div>


          <div>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
          </div>

          <div>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
          </div>


          <div>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
          </div>

          <div>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
          </div>


          <div>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
          </div>

          <div>
            <img className='img-fluid mostPurchased' alt="1" src="../../images/mostPurchased/h&m.jpg"></img>
          </div>




        </Slider>
      </div>
    
    
    </>
  )
}

export default MostPurchasedItems