import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  '../Body/Body.css'
import {Button} from 'react-bootstrap'

const NewTrends = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
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
    <div style={{border: '1px solid #e2e8f0', padding: '28px'}}>
      <h5 style={{marginBottom: '28px'}}>New trends</h5>
      <Slider {...settings}>
 
      <div className='newTrendsShadow'>
            <table>
                <tr >
                    <td>
                    <div style={{position: 'relative'}}>
                        <img className='img-fluid img-fluidbrd' alt="1" src="../../images/NeweTrends/Khushal K Big.jpg"></img>
                        <div style={{position: 'absolute', top:'69.5%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                            <h5>Khushal Chirudhars</h5>
                            <p>Cool style with high quality  </p>
                            <h6><u>know more</u></h6>
                        </div>
                    </div>    
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <div style={{position: 'relative'}}>
                                         <img className='img-fluid'  alt="1" src="../../images/NeweTrends/Khushal K Big SmallTop.jpg"></img>
                                         <div style={{position: 'absolute', top:'70%', textAlign: 'center', color: 'white', padding:'10px', width:'100%'}}>
                                         <Button variant="dark" className='view'><u>view</u></Button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div style={{position: 'relative'}}>
                                    <img className='img-fluid'  alt="1" src="../../images/NeweTrends/Khushal K Big SmallBottom.jpg"></img>
                                        <div style={{position: 'absolute', top:'70%', textAlign: 'center', color: 'white', padding:'10px', width:'100%'}}>
                                        <Button variant="dark" className='view'><u>view</u></Button>
                                        </div>
                                </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
      </div>  

      <div className='newTrendsShadow'>
            <table>
                <tr >
                    <td>
                        <div style={{position: 'relative'}}>
                            <img alt="1" className='img-fluid img-fluidbrd' src="../../images/NeweTrends/Varanga Big.jpg"></img>
                                <div style={{position: 'absolute', top:'69.5%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                                    <h5>Varanga Chirudhars</h5>
                                    <p>Very trendy in style</p>
                                    <h6><u>know more</u></h6>
                                </div>                                
                        </div>
                    </td>
                   
                    <td>
                        <table className="thumbtbl">
                            <tr>
                                <td>
                                    <div style={{position: 'relative'}}>
                                    <img alt="1" className='img-fluid' src="../../images/NeweTrends/Varanga SmallBottom.jpg"></img>
                                        <div style={{position: 'absolute', top:'70%', textAlign: 'center', color: 'white', padding:'10px', width:'100%'}}>
                                        <Button variant="dark" className='view'><u>view</u></Button>

                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div style={{position: 'relative'}}>
                                    <img alt="1" className='img-fluid' src="../../images/NeweTrends/Varanga SmallTop.jpg"></img>
                                         <div style={{position: 'absolute', top:'76%', textAlign: 'center', color: 'white', padding:'10px', width:'100%'}}>
                                         <Button variant="dark" className='view'><u>view</u></Button>

                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
      </div> 
      
      <div className='newTrendsShadow'>
            <table>
                <tr >
                    <td>
                        <div style={{position: 'relative'}}>
                            <img alt="1" className='img-fluid img-fluidbrd' src="../../images/NeweTrends/Khushal K Big.jpg"></img>
                            <div style={{position: 'absolute', top:'69.5%', textAlign: 'center', color: 'white', padding:'10px', width:'100%', backgroundImage: 'linear-gradient(transparent, #555555)'}}>
                                <h5>Kushal Chirudhars</h5>
                                <p>Very trendy in style</p>
                                <h6><u>know more</u></h6>
                            </div>  
                        </div>
                    </td>


                    <td>
                        <table>
                            <tr>
                                <td><img alt="1" className='img-fluid' src="../../images/NeweTrends/Khushal K Big SmallTop.jpg"></img></td>
                            </tr>
                            <tr>
                                <td><img alt="1" className='img-fluid' src="../../images/NeweTrends/Khushal K Big SmallBottom.jpg"></img></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
      </div> 
    </Slider>
    </div>
<br />

    </>
  )
}

export default NewTrends

